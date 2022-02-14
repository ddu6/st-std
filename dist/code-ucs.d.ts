import type { Compiler, UnitCompiler } from '@ddu6/stc';
import type { Highlighter } from 'sthl';
export declare const compilerToHighlighter: Map<Compiler, EventTarget | Highlighter | undefined>;
export declare const code: UnitCompiler;
