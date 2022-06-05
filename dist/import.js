import { createImporter } from '@ddu6/importer';
export const { getMod } = createImporter({
    /*
        katex: 'https://cdn.jsdelivr.net/npm/katex@0.15.6/dist/katex.min.mjs',
        sthl: 'https://cdn.jsdelivr.net/gh/st-org/sthl@0.13.3/mod.js'
    */
    katex: 'https://cdn.bootcdn.net/ajax/libs/KaTeX/0.15.6/katex.mjs',
    sthl: '../sthl@0.13.3/mod.js'
});
