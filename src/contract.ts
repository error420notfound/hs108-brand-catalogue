import { z } from 'zod';

/** The catalogue is source data. A renderer may consume these stable names without importing private assets. */
export const editionIds = ['web15', 'client20', 'client30'] as const;
export const audiences = ['public', 'client'] as const;
export const layouts = ['split-field', 'header-field', 'framed-image', 'double-gallery', 'triple-gallery', 'pure-comparison', 'full-field'] as const;
export const templates = [
  'cover', 'editorial', 'identity-reveal', 'identity-system', 'palette-type',
  'application', 'comparison', 'detail', 'environment', 'digital-motion',
  'system-depth', 'closing-cta', 'identity-recap', 'logo-rules', 'palette-rules',
  'type-rules', 'graphic-rules', 'image-direction', 'layout-rules',
  'production-rules', 'motion-rules', 'handover-hub'
] as const;

const id = z.string().regex(/^[a-z][a-z0-9-]*$/);
const nonempty = z.string().trim().min(1);
const audience = z.enum(audiences);

/** Content is keyed once and reused or adapted by each edition. */
export const contentSchema = z.object({
  id,
  audience: z.array(audience).min(1),
  eyebrow: nonempty.optional(),
  title: nonempty,
  body: nonempty,
  caption: nonempty.optional(),
  assetIds: z.array(id).default([]),
  colorRoles: z.array(id).default([]),
  links: z.array(z.object({ label: nonempty, href: nonempty })).default([])
});

export const assetSchema = z.object({
  id,
  path: nonempty,
  mediaType: z.enum(['image/svg+xml', 'image/png', 'application/json', 'text/markdown']),
  role: nonempty,
  caption: nonempty,
  alt: nonempty,
  aspectRatio: nonempty.optional(),
  focalPoint: z.object({ x: z.number().min(0).max(1), y: z.number().min(0).max(1) }).optional(),
  cropGuidance: nonempty,
  mobileCropGuidance: nonempty,
  audience: z.array(audience).min(1),
  rights: z.object({ source: nonempty, license: nonempty, notes: nonempty }),
  motion: z.object({ posterAssetId: id, reducedMotion: nonempty, playback: nonempty }).optional(),
  download: z.boolean().default(false)
});

/** Scale + step and scale reference IDs follow the inspected Chroma schema. */
export const colorReferenceSchema = z.object({
  role: id,
  catalogueId: id,
  step: z.number().int().optional(),
  referenceColorId: id.optional(),
  status: z.enum(['verified', 'pending']),
  note: nonempty
}).refine(value => !(value.step && value.referenceColorId), 'Choose a scale step or reference color');

export const fontSchema = z.object({
  role: z.enum(['display', 'body']),
  family: nonempty,
  weights: z.array(z.number().int().min(100).max(900)).min(1),
  sourceUrl: z.url(),
  fallback: nonempty,
  license: nonempty,
  specimen: nonempty
});

export const pageSchema = z.object({
  id,
  template: z.enum(templates),
  layout: z.enum(layouts),
  contentRefs: z.array(id).min(1),
  audience: z.array(audience).min(1),
  transition: z.enum(['cut', 'fade', 'slide', 'reveal']).optional(),
  media: z.object({ autoplay: z.boolean().default(false), loop: z.boolean().default(false), controls: z.boolean().default(false), reducedMotion: nonempty }).optional()
});

export const editionSchema = z.object({
  id: z.enum(editionIds),
  audience,
  title: nonempty,
  pages: z.array(pageSchema)
});

export const projectSchema = z.object({
  id,
  slug: id,
  metadata: z.object({ name: nonempty, category: nonempty, proposition: nonempty, fictionalNotice: nonempty, version: nonempty }),
  content: z.array(contentSchema),
  assets: z.array(assetSchema),
  colorRefs: z.array(colorReferenceSchema),
  fonts: z.array(fontSchema),
  editions: z.object({ web15: editionSchema, client20: editionSchema, client30: editionSchema })
});

export type Project = z.infer<typeof projectSchema>;
export type ContentBlock = z.infer<typeof contentSchema>;
export type Asset = z.infer<typeof assetSchema>;
export type Page = z.infer<typeof pageSchema>;
export type Edition = z.infer<typeof editionSchema>;
export type ColorReference = z.infer<typeof colorReferenceSchema>;
export type Font = z.infer<typeof fontSchema>;
