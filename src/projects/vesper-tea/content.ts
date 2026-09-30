import type { ContentBlock } from '../../contract.js';

const both = ['public', 'client'] as const;
const client = ['client'] as const;
const publicOnly = ['public'] as const;
const block = (id: string, title: string, body: string, assetIds: string[] = [], audience: readonly ('public' | 'client')[] = both, extras: Partial<ContentBlock> = {}): ContentBlock => ({ id, title, body, assetIds, audience: [...audience], colorRoles: [], links: [], ...extras });

export const content: ContentBlock[] = [
  block('cover', 'Vesper Tea', 'A considered identity for an independent tea house, built around a daily pause.', ['wordmark', 'canisters'], both, { eyebrow: 'HS108 / fictional brand study', caption: 'Packaging visualization based on the Vesper concept sleeves.' }),
  block('premise', 'A small interval in the day', 'The concept starts with a familiar behavior: making tea creates a moment to slow down. Vesper gives that moment a visible identity.', ['still-life'], both, { caption: 'Atmospheric concept image; the identity and packaging are examined on later pages.' }),
  block('challenge', 'Calm without the cliché', 'Vesper is positioned for people who want a considered daily tea ritual. The design challenge was to feel distinctive and useful without relying on wellness shorthand or decorative gift packaging.', ['mark-study']),
  block('idea', 'Pause made tangible', 'A measured line bends into a leaf-like V. The same gesture becomes the mark, a divider and a repeatable packaging cue.', ['symbol', 'line-device']),
  block('reveal', 'One gesture, two signatures', 'The compact mark works at small sizes; the wordmark carries recognition when there is room to read the name.', ['logo-reveal', 'wordmark']),
  block('overview', 'A system that can travel', 'The leaf mark, line device and generous clear space form a simple visual grammar across packaging, print and screen.', ['wordmark', 'symbol', 'line-device']),
  block('snapshot', 'Warmth under control', 'Deep botanical green anchors the identity. Paper gives it room; ember and fresh green distinguish moments. Fraunces adds character while DM Sans keeps practical copy clear.', ['palette-sheet', 'type-specimen'], both, { colorRoles: ['paper', 'leaf', 'warmth', 'ink'] }),
  block('hero-app', 'Packaging as the first encounter', 'The paper canister makes Vesper tangible at shelf scale. A stable label hierarchy makes the name, blend and product type easy to find.', ['canisters']),
  block('contrast-app', 'One grammar, three blends', 'First Light, Still Noon and After Rain keep placement and type scale consistent. The band color and blend name change, making the family recognizable and each choice distinct.', ['packaging-system']),
  block('system-app', 'Readable at every scale', 'The sleeve grid and label detail show how recognition and product information work together, from a group view to an individual package.', ['packaging-system', 'package-detail', 'canisters']),
  block('detail-app', 'The useful details', 'Clear product naming and preparation copy give the packaging a practical role. The line organizes information without adding ornament.', ['package-detail', 'line-device']),
  block('environment-app', 'A quieter environment', 'The identity can extend to a tea counter through restrained signage and open space, while the product remains the focal point.', ['room'], both, { caption: 'Generated environment concept; a proposed application, not an actual Vesper location.' }),
  block('digital-app', 'The ritual on screen', 'A concise menu carries the same names and hierarchy to a digital setting. The mark animation is brief, optional and user started.', ['digital-menu', 'logo-reveal']),
  block('depth', 'A commercial role for restraint', 'Consistent labels help shoppers compare blends. Flexible mark and line devices help the identity remain recognizable across package, menu and place without relying on props.', ['line-device', 'mark-study']),
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
