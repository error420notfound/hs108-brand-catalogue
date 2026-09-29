import { readFileSync, existsSync } from 'node:fs';
import { resolve, sep } from 'node:path';
import { projectSchema, editionIds, type Project } from '../src/contract.js';
import { projects } from '../src/index.js';

const root = resolve(import.meta.dirname, '..');
const pin = JSON.parse(readFileSync(resolve(root, 'src/chroma/pin.json'), 'utf8')) as {
  repository: string; revision: string;
  entries: { id: string; path: string; steps: number[]; referenceColorIds: string[] }[];
};
const failures: string[] = [];
const fail = (message: string) => failures.push(message);
const checkUnique = (items: { id: string }[], label: string) => {
  const seen = new Set<string>();
  for (const item of items) { if (seen.has(item.id)) fail(`Duplicate ${label} ID: ${item.id}`); seen.add(item.id); }
};
const includesAudience = (audiences: string[], audience: string) => audiences.includes(audience);

if (!/^[0-9a-f]{40}$/.test(pin.revision)) fail('Chroma pin must contain a full commit SHA.');
if (pin.repository !== 'https://github.com/error420notfound/chroma-catalogue') fail('Unexpected Chroma repository.');
checkUnique(pin.entries, 'Chroma entry');

const allPages: { id: string }[] = [];
for (const [registryId, source] of Object.entries(projects)) {
  const parsed = projectSchema.safeParse(source);
  if (!parsed.success) { fail(`${registryId}: ${parsed.error.toString()}`); continue; }
  const project: Project = parsed.data;
  if (registryId !== project.id) fail(`${registryId}: registry key does not match project ID.`);
  checkUnique(project.content, `${project.id} content`);
  checkUnique(project.assets, `${project.id} asset`);
  checkUnique(project.colorRefs.map(color => ({ id: color.role })), `${project.id} palette role`);
  const content = new Map(project.content.map(value => [value.id, value]));
  const assets = new Map(project.assets.map(value => [value.id, value]));
  const roles = new Set(project.colorRefs.map(value => value.role));

  for (const color of project.colorRefs) {
    if (color.status === 'pending') continue;
    const entry = pin.entries.find(value => value.id === color.catalogueId);
    if (!entry) { fail(`${project.id}: ${color.role} is absent from pinned Chroma index.`); continue; }
    if (color.step === undefined && color.referenceColorId === undefined) fail(`${project.id}: ${color.role} needs a step or reference color ID.`);
    if (color.step !== undefined && !entry.steps.includes(color.step)) fail(`${project.id}: ${color.role} uses an unknown Chroma step.`);
    if (color.referenceColorId !== undefined && !entry.referenceColorIds.includes(color.referenceColorId)) fail(`${project.id}: ${color.role} uses an unknown Chroma reference color.`);
  }
  for (const asset of project.assets) {
    const absolute = resolve(root, asset.path);
    if (!absolute.startsWith(root + sep)) fail(`${project.id}: asset escapes repository: ${asset.path}`);
    else if (!existsSync(absolute)) fail(`${project.id}: missing asset: ${asset.path}`);
    if (asset.path.includes('/assets/client/') && asset.audience.includes('public')) fail(`${project.id}: client file marked public: ${asset.id}`);
    if (asset.path.includes('/assets/public/') && !asset.audience.includes('public')) fail(`${project.id}: public file has no public audience: ${asset.id}`);
    if (asset.download && !asset.audience.includes('client')) fail(`${project.id}: download lacks client audience: ${asset.id}`);
    if (asset.motion && !assets.has(asset.motion.posterAssetId)) fail(`${project.id}: missing motion poster: ${asset.id}`);
  }
  for (const block of project.content) {
    for (const assetId of block.assetIds) {
      const asset = assets.get(assetId);
      if (!asset) fail(`${project.id}: ${block.id} references missing asset ${assetId}`);
      else for (const audience of block.audience) if (!includesAudience(asset.audience, audience)) fail(`${project.id}: ${block.id} exposes ${assetId} to ${audience}`);
    }
    for (const role of block.colorRoles) if (!roles.has(role)) fail(`${project.id}: ${block.id} references missing palette role ${role}`);
    if (block.audience.includes('public')) for (const link of block.links) if (/\/handover\/|assets\/client\/|client\/|download/i.test(link.href)) fail(`${project.id}: public link reaches client resource in ${block.id}`);
  }
  const expected = { web15: 15, client20: 20, client30: 30 } as const;
  for (const editionId of editionIds) {
    const edition = project.editions[editionId];
    if (edition.id !== editionId) fail(`${project.id}: edition key mismatch for ${editionId}`);
    if (edition.pages.length !== expected[editionId]) fail(`${project.id}: ${editionId} has ${edition.pages.length} pages, expected ${expected[editionId]}`);
    checkUnique(edition.pages, `${editionId} page`);
    allPages.push(...edition.pages);
    const fifteenth = edition.pages[14];
    if (editionId === 'web15' && (fifteenth?.template !== 'closing-cta' || !fifteenth.contentRefs.includes('public-close'))) fail(`${project.id}: public page 15 must be the sales CTA.`);
    if (editionId !== 'web15' && (fifteenth?.template !== 'identity-recap' || !fifteenth.contentRefs.includes('client-recap'))) fail(`${project.id}: client page 15 must be the identity recap.`);
    const last = edition.pages.at(-1);
    if (editionId !== 'web15' && (last?.template !== 'handover-hub' || !last.contentRefs.includes('handover'))) fail(`${project.id}: ${editionId} must end with handover hub.`);
    for (const page of edition.pages) {
      if (!page.audience.includes(edition.audience)) fail(`${project.id}: ${page.id} does not permit ${edition.audience}`);
      if (edition.audience === 'public' && page.template === 'handover-hub') fail(`${project.id}: public edition includes handover hub.`);
      for (const ref of page.contentRefs) {
        const block = content.get(ref);
        if (!block) { fail(`${project.id}: ${page.id} references missing content ${ref}`); continue; }
        if (!block.audience.includes(edition.audience)) fail(`${project.id}: ${page.id} reaches ${ref} outside audience.`);
        if (edition.audience === 'public') for (const assetId of block.assetIds) if (!assets.get(assetId)?.audience.includes('public')) fail(`${project.id}: public page ${page.id} reaches client asset ${assetId}`);
      }
    }
  }
  const handover = content.get('handover');
  if (!handover || !handover.assetIds.some(id => assets.get(id)?.download)) fail(`${project.id}: handover lacks an actual downloadable file.`);
}
checkUnique(allPages, 'global page');
if (failures.length) { for (const failure of failures) console.error(`✖ ${failure}`); process.exitCode = 1; }
else console.log(`Validated ${Object.keys(projects).length} project, 65 pages, ${pin.entries.length} pinned Chroma entries and all asset paths.`);
