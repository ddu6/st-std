import {createImporter} from '@ddu6/importer'
import type * as sthl from 'sthl'
import type * as katex from 'katex'
export const {getMod} = createImporter<{
    katex: {default: typeof katex}
    sthl: typeof sthl
}>({
    katex: 'https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.mjs',
    sthl: 'https://cdn.jsdelivr.net/gh/st-org/sthl@0.13.0/mod.js'
})