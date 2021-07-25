export * as tagToUnitCompiler from './ucs'
import {css as hlCSS} from 'sthl'
import {all,head} from './lib/css'
export const css=hlCSS+all
export const headCSS=head