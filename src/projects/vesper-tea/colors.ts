import type { ColorReference } from '../../contract.js';

/** IDs and steps from pinned Chroma data. No values are duplicated in project content. */
export const colorRefs: ColorReference[] = [
  { role: 'leaf', catalogueId: 'scale-prana-verde', step: 900, status: 'verified', note: 'Primary dark botanical field and mark.' },
  { role: 'fresh-leaf', catalogueId: 'scale-prana-verde', step: 500, status: 'verified', note: 'Small emphasis and infographics; check contrast before text use.' },
  { role: 'paper', catalogueId: 'scale-agni-ember', referenceColorId: 'ember-ivory', status: 'verified', note: 'Warm paper ground.' },
  { role: 'warmth', catalogueId: 'scale-agni-ember', step: 700, status: 'verified', note: 'Small warm accent; avoid large body-text fields.' },
  { role: 'ink', catalogueId: 'scale-neutral-set', step: 900, status: 'verified', note: 'Reading text and production diagrams.' }
];
