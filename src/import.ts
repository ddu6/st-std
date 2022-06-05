import {createImporter} from '@ddu6/importer'
import type * as sthl from 'sthl'
import type * as katex from 'katex'
export const {getMod} = createImporter<{
    katex: typeof katex
    sthl: typeof sthl
}>({
/*
    katex: 'https://cdn.jsdelivr.net/npm/katex@0.15.6/dist/katex.min.mjs',
    sthl: 'https://cdn.jsdelivr.net/gh/st-org/sthl@0.13.3/mod.js'
*/
    katex: 'https://cdn.bootcdn.net/ajax/libs/KaTeX/0.15.6/katex.mjs',
    sthl: '../sthl@0.13.3/mod.js'
})