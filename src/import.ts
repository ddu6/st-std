import {createImporter} from '@ddu6/importer'
import type * as sthl from 'sthl'
import type * as katex from 'katex'
export const {getMod} = createImporter<{
    katex: {default: typeof katex}
    sthl: typeof sthl
}>({
    katex: 'https://cdn.bootcdn.net/ajax/libs/KaTeX/0.15.2/katex.mjs',
    sthl: '../sthl@0.13.3/mod.js'
})