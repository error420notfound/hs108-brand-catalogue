import type { Edition } from '../../../contract.js';
import { clientPage as p, spine } from './spine.js';

export const client30: Edition = {
  id: 'client30', audience: 'client', title: 'Vesper Tea · Full sample handover',
  pages: [
    ...spine('full', 'client'),
    p('full', 'identity-recap', 'identity-recap', 'split-field', 'client-recap'),
    p('full', 'logo-architecture', 'identity-system', 'triple-gallery', 'architecture'),
    p('full', 'clearance-scaling', 'logo-rules', 'framed-image', 'clearance'),
    p('full', 'logo-misuse', 'logo-rules', 'triple-gallery', 'misuse'),
    p('full', 'primary-palette', 'palette-rules', 'split-field', 'primary-palette'),
    p('full', 'extended-palette', 'palette-rules', 'double-gallery', 'extended-palette'),
    p('full', 'typography-hierarchy', 'type-rules', 'header-field', 'type-hierarchy'),
    p('full', 'typography-in-use', 'type-rules', 'double-gallery', 'type-in-use'),
    p('full', 'graphic-devices', 'graphic-rules', 'framed-image', 'graphic-devices'),
    p('full', 'image-direction', 'image-direction', 'triple-gallery', 'image-direction'),
    p('full', 'layout-composition', 'layout-rules', 'pure-comparison', 'layout-composition'),
    p('full', 'packaging-system', 'production-rules', 'double-gallery', 'packaging'),
    p('full', 'print-physical', 'production-rules', 'double-gallery', 'print-physical'),
    p('full', 'digital-expression', 'digital-motion', 'split-field', 'digital-expression'),
    { ...p('full', 'motion-system', 'motion-rules', 'framed-image', 'motion-system'), media: { autoplay: false, loop: false, controls: true, reducedMotion: 'Show the static symbol immediately.' } },
    p('full', 'handover-hub', 'handover-hub', 'split-field', 'handover')
  ]
};
