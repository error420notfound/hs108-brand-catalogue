import type { Edition } from '../../../contract.js';
import { clientPage as p, spine } from './spine.js';

export const client20: Edition = {
  id: 'client20', audience: 'client', title: 'Vesper Tea · Standard sample handover',
  pages: [
    ...spine('standard', 'client'),
    p('standard', 'identity-recap', 'identity-recap', 'split-field', 'client-recap'),
    p('standard', 'logo-variants', 'identity-system', 'triple-gallery', 'variants'),
    p('standard', 'logo-usage', 'logo-rules', 'double-gallery', 'logo-rules'),
    p('standard', 'full-palette', 'palette-rules', 'split-field', 'palette-full'),
    p('standard', 'typography', 'type-rules', 'header-field', 'type-hierarchy'),
    p('standard', 'handover-hub', 'handover-hub', 'split-field', 'handover')
  ]
};
