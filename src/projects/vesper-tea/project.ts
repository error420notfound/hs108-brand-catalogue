import type { Project } from '../../contract.js';
import { content } from './content.js';
import { assets } from './assets.js';
import { fonts } from './fonts.js';
import { colorRefs } from './colors.js';
import { web15 } from './editions/web15.js';
import { client20 } from './editions/client20.js';
import { client30 } from './editions/client30.js';

export const project: Project = {
  id: 'vesper-tea-sample', slug: 'vesper-tea',
  metadata: {
    name: 'Vesper Tea', category: 'Independent tea house · fictional sample',
    proposition: 'A daily pause, made tangible.',
    fictionalNotice: 'Vesper Tea is a fictional HS108 sample project. No client engagement, delivered work or measured result is claimed.',
    version: '0.1.0'
  },
  content, assets, colorRefs, fonts,
  editions: { web15, client20, client30 }
};
