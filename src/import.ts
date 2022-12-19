import {createImporter} from '@ddu6/importer'
import type * as sthl from 'sthl'
import type * as katex from 'katex'
export const {getMod} = createImporter<{
    katex: typeof katex
    sthl: typeof sthl
}>({
    katex: '../katex@0.0.1/mod.js',
    sthl: '../sthl@0.13.3/mod.js'
})