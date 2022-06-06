import { createImporter } from '@ddu6/importer';
export const { getMod } = createImporter({
    katex: 'https://cdn.bootcdn.net/ajax/libs/KaTeX/0.15.6/katex.mjs',
    sthl: '../sthl@0.13.3/mod.js'
});
