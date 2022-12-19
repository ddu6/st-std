import { createImporter } from '@ddu6/importer';
export const { getMod } = createImporter({
    katex: 'https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.mjs',
    sthl: 'https://cdn.jsdelivr.net/gh/st-org/sthl@0.13.3/mod.js'
});
