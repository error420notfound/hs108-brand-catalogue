import { project } from './projects/vesper-tea/project.js';

/** One entry today; future projects register under their stable ID without changing Project. */
export const projects = { [project.id]: project };
export { project };
export * from './contract.js';
