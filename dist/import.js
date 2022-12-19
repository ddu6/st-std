import { createImporter } from '@ddu6/importer';
export const { getMod } = createImporter({
    katex: '../katex/0.0.1/mod.js',
    sthl: '../sthl@0.13.3/mod.js'
});
