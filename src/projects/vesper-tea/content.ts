import type { ContentBlock } from '../../contract.js';

const both = ['public', 'client'] as const;
const client = ['client'] as const;
const publicOnly = ['public'] as const;
const block = (id: string, title: string, body: string, assetIds: string[] = [], audience: readonly ('public' | 'client')[] = both, extras: Partial<ContentBlock> = {}): ContentBlock => ({ id, title, body, assetIds, audience: [...audience], colorRoles: [], links: [], ...extras });

export const content: ContentBlock[] = [
  block('cover', 'A daily ritual, made easy to choose.', 'Vesper gives an independent tea house a recognizable shelf presence and a clear way to navigate three everyday blends.', ['wordmark', 'canisters'], both, { eyebrow: 'HS108 / identity study / tea', caption: 'The three-blend packaging concept shows the identity at its first point of purchase.' }),
  block('premise', 'A pause with a purpose', 'For people choosing tea as part of an everyday routine, Vesper pairs a calm character with useful product information. The identity needs to invite attention, then help someone choose.', ['packaging-system'], both, { caption: 'One label grid carries the range while color and blend names distinguish each choice.' }),
  block('challenge', 'Distinct on shelf. Clear in hand.', 'Independent tea brands often lean on familiar craft and wellness cues. This concept explores a more useful distinction: a family of blends that reads as one brand and remains easy to compare at close range.', ['mark-study']),
  block('idea', 'One gesture, many roles', 'A measured line bends into a leaf-like V. That gesture forms the mark, divides information and repeats across packaging and screen.', ['symbol', 'line-device']),
  block('reveal', 'One gesture, two signatures', 'The compact mark works at small sizes; the wordmark carries recognition when there is room to read the name.', ['logo-reveal', 'wordmark']),
  block('overview', 'Recognition beyond the canister', 'The wordmark leads when there is space. The compact symbol identifies smaller touchpoints; the line guides the eye through practical information. Clear space keeps each role distinct.', ['wordmark', 'symbol', 'line-device']),
  block('snapshot', 'Character with reading discipline', 'Botanical green establishes recognition; paper provides contrast. Accent colors distinguish blends. Fraunces gives short headlines character, while DM Sans carries names, details and instructions.', ['palette-sheet', 'type-specimen'], both, { colorRoles: ['paper', 'leaf', 'warmth', 'ink'] }),
  block('hero-app', 'Built for the first encounter', 'At shelf scale, consistent canister placement makes Vesper recognizable as a range. The front label gives the brand, blend and product type a deliberate order.', ['canisters']),
  block('contrast-app', 'One grammar, three blends', 'First Light, Still Noon and After Rain keep placement and type scale consistent. The band color and blend name change, making the family recognizable and each choice distinct.', ['packaging-system']),
  block('system-app', 'A range, not three one-offs', 'The same grid holds across the range. In a group view, color identifies the blend; in close view, the label still carries the information needed to choose and prepare it.', ['packaging-system', 'package-detail', 'canisters']),
  block('detail-app', 'Detail earns its space', 'The label gives blend name and preparation guidance readable roles. A fine divider separates these jobs and creates a recognizable cue at close range.', ['package-detail', 'line-device']),
  block('environment-app', 'A place for the product', 'In a proposed counter setting, restrained signage and open space let the packaging carry recognition. The environment extends the system without becoming the identity.', ['room'], both, { caption: 'Generated environment concept. Vesper has no physical location.' }),
  block('digital-app', 'The same choice on screen', 'The concept menu preserves blend names and their reading order in a compact digital setting. Motion introduces the mark briefly and only when the viewer starts it.', ['digital-menu', 'logo-reveal']),
  block('depth', 'Why the system holds together', 'The fixed label grid helps people compare three blends; the flexible mark and line carry recognition from canister to menu and place. Each element has a specific job.', ['line-device', 'mark-study']),
  block('public-close', 'A pause with a clear identity', 'This fictional study shows how a focused idea can connect positioning, identity and applications in one usable system.', ['canisters'], publicOnly, { links: [{ label: 'Discuss a project', href: 'https://hs108.in/contact' }, { label: 'View capabilities', href: 'https://hs108.in/services' }], caption: 'Fictional HS108 sample. No client engagement, produced packaging or measured result is claimed.' }),
  block('client-recap', 'Identity in one view', 'Use the mark for recognition, the line for rhythm and space for calm.', ['wordmark', 'line-device'], client),
  block('variants', 'Choose the right signature', 'Primary wordmark leads. The compact symbol serves small square spaces; the reversed form serves dark fields.', ['client-wordmark', 'client-symbol', 'client-reversed'], client),
  block('logo-rules', 'Protect the mark', 'Keep one symbol-height of clear space. Do not stretch, outline, shadow or rebuild the lettering.', ['logo-construction', 'logo-misuse'], client),
  block('palette-full', 'Color has a job', 'Leaf anchors; paper opens; warmth marks a moment. Use only approved Chroma references.', ['palette-sheet'], client, { colorRoles: ['leaf', 'paper', 'warmth', 'fresh-leaf', 'ink'] }),
  block('type-hierarchy', 'Let the words breathe', 'Fraunces sets short expressive heads. DM Sans carries instructions, details and navigation.', ['type-specimen'], client),
  block('handover', 'Take the system forward', 'Download the approved sample files, check usage notes, and retain the version with vendor handoff.', ['client-wordmark', 'client-symbol', 'client-reversed', 'client-tokens', 'client-guide'], client, { caption: 'Sample package v0.1.0. Concept files for demonstration only.' }),
  block('architecture', 'A small, complete family', 'Three approved forms cover horizontal, compact and reversed contexts.', ['client-wordmark', 'client-symbol', 'client-reversed'], client),
  block('clearance', 'Give it room', 'Use a symbol-height around the mark and confirm legibility at final production size.', ['logo-construction'], client),
  block('misuse', 'Keep the silhouette intact', 'Do not compress, rotate, add effects or place the dark mark on a low-contrast field.', ['logo-misuse'], client),
  block('primary-palette', 'The main conversation', 'Paper and leaf establish the field; ink handles long reading.', ['palette-sheet'], client, { colorRoles: ['paper', 'leaf', 'ink'] }),
  block('extended-palette', 'Accent with restraint', 'Fresh leaf and warmth are supporting roles. Print values require a proof and approved profile.', ['palette-sheet'], client, { colorRoles: ['fresh-leaf', 'warmth'] }),
  block('type-in-use', 'From headline to label', 'The display face is for moments; the body face keeps practical content legible.', ['type-specimen', 'package-detail'], client),
  block('graphic-devices', 'The recurring line', 'A single line may frame a name, divide details or suggest a steeping interval.', ['line-device'], client),
  block('image-direction', 'Light on the ritual', 'Show material, steam, leaves and human scale. Keep products truthful and crops quiet.', ['canisters', 'still-life', 'room'], client),
  block('layout-composition', 'Balance field and pause', 'Lead with one image or thought, then let captions carry the useful detail.', ['layout-guide'], client),
  block('packaging', 'Three blends, one grammar', 'Hold placement and type scale constant; vary the blend name and leaf cue.', ['packaging-system', 'package-detail'], client),
  block('print-physical', 'Carry the system offline', 'The proposed card and counter sign use the same clear-space and contrast rules.', ['still-life', 'room'], client),
  block('digital-expression', 'Make details accessible', 'On screens, preserve readable product names, keyboard focus and unclipped image subjects.', ['digital-menu'], client),
  block('motion-system', 'A measured arrival', 'Reveal the symbol once on explicit play. The static mark is the reduced-motion state.', ['logo-reveal', 'wordmark'], client)
];
