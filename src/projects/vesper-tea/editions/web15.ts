import type { Edition } from '../../../contract.js';
import { spine } from './spine.js';

export const web15: Edition = {
  id: 'web15', audience: 'public', title: 'Vesper Tea · Public sample showcase',
  pages: [
    ...spine('web', 'public'),
    { id: 'web-closing-cta', template: 'closing-cta', layout: 'full-field', contentRefs: ['public-close'], audience: ['public'], transition: 'fade' }
  ]
};
