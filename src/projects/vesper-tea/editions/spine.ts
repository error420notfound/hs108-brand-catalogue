import type { Page } from '../../../contract.js';

type Template = Page['template'];
type Layout = Page['layout'];
const slots: [string, Template, Layout, string][] = [
  ['cover', 'cover', 'full-field', 'cover'],
  ['premise', 'editorial', 'split-field', 'premise'],
  ['challenge', 'editorial', 'header-field', 'challenge'],
  ['brand-idea', 'editorial', 'framed-image', 'idea'],
  ['identity-reveal', 'identity-reveal', 'full-field', 'reveal'],
  ['identity-overview', 'identity-system', 'double-gallery', 'overview'],
  ['color-type', 'palette-type', 'split-field', 'snapshot'],
  ['hero-application', 'application', 'full-field', 'hero-app'],
  ['contrast-application', 'comparison', 'pure-comparison', 'contrast-app'],
  ['system-application', 'application', 'triple-gallery', 'system-app'],
  ['detail-application', 'detail', 'framed-image', 'detail-app'],
  ['environment-application', 'environment', 'header-field', 'environment-app'],
  ['digital-motion', 'digital-motion', 'double-gallery', 'digital-app'],
  ['system-depth', 'system-depth', 'split-field', 'depth']
];

export function spine(prefix: string, audience: 'public' | 'client'): Page[] {
  return slots.map(([slug, template, layout, contentRef]) => ({
    id: `${prefix}-${slug}`, template, layout, contentRefs: [contentRef], audience: [audience],
    transition: slug === 'identity-reveal' ? 'reveal' : 'fade',
    ...(slug === 'identity-reveal' ? { media: { autoplay: false, loop: false, controls: true, reducedMotion: 'Show the final static symbol immediately.' } } : {}),
    ...(slug === 'digital-motion' ? { media: { autoplay: false, loop: false, controls: true, reducedMotion: 'Show the digital menu and static symbol.' } } : {})
  }));
}

export function clientPage(prefix: string, slug: string, template: Template, layout: Layout, contentRef: string): Page {
  return { id: `${prefix}-${slug}`, template, layout, contentRefs: [contentRef], audience: ['client'], transition: 'fade' };
}
