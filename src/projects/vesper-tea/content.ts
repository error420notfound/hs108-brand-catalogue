import type { ContentBlock } from '../../contract.js';

const both = ['public', 'client'] as const;
const client = ['client'] as const;
const publicOnly = ['public'] as const;
const block = (id: string, title: string, body: string, assetIds: string[] = [], audience: readonly ('public' | 'client')[] = both, extras: Partial<ContentBlock> = {}): ContentBlock => ({ id, title, body, assetIds, audience: [...audience], colorRoles: [], links: [], ...extras });

export const content: ContentBlock[] = [
  block('cover', 'Vesper Tea', 'A fictional independent tea house built around the daily pause.', ['wordmark', 'canisters'], both, { eyebrow: 'HS108 sample project · fictional concept', caption: 'Concept identity and applications; no real client is represented.' }),
  block('premise', 'Make room for the pause', 'Tea can be a small, deliberate interval in an otherwise hurried day.', ['still-life']),
  block('challenge', 'A calmer place in the category', 'The concept needed a distinct signal beyond wellness clichés and gift-box ornament.', ['room']),
  block('idea', 'Pause made tangible', 'A measured line becomes a leaf, a fold and a quiet organizing device.', ['symbol', 'line-device']),
  block('reveal', 'The interval becomes a mark', 'The compact symbol appears, then the full wordmark holds the frame.', ['logo-reveal', 'wordmark']),
  block('overview', 'One idea, several scales', 'The mark, line and open space carry the identity from a tin to a room.', ['wordmark', 'symbol', 'line-device']),
  block('snapshot', 'Quiet contrast', 'Warm paper, deep green, a restrained ember accent and a humanist type pairing.', ['palette-sheet', 'type-specimen'], both, { colorRoles: ['paper', 'leaf', 'warmth', 'ink'] }),
  block('hero-app', 'A daily object', 'A canister keeps the identity close to the ritual it serves.', ['canisters']),
  block('contrast-app', 'A different cadence', 'An open card gives the same system a lighter, more personal expression.', ['still-life', 'line-device']),
  block('system-app', 'A family, not a uniform', 'The three proposed blends share one grammar while leaving room for individual names.', ['packaging-system']),
  block('detail-app', 'The useful details', 'Small marks, readable copy and a repeatable rule line do the quiet work.', ['package-detail', 'symbol']),
  block('environment-app', 'Space to settle', 'The identity is proposed for a tea counter without dominating the room.', ['room']),
  block('digital-app', 'The ritual on screen', 'A simple digital menu and a short mark animation carry the same pause.', ['digital-menu', 'logo-reveal']),
  block('depth', 'The line is the rule', 'One stroke can divide, frame or reveal; its role changes with context.', ['line-device', 'mark-study']),
  block('public-close', 'A system built to hold a feeling', 'This fictional study shows how HS108 can join strategy, identity and application.', ['canisters'], publicOnly, { links: [{ label: 'Discuss a project', href: 'https://hs108.in/contact' }, { label: 'View capabilities', href: 'https://hs108.in/services' }], caption: 'Sample concept. No client engagement or commercial outcome is claimed.' }),
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
