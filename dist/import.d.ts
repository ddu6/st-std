import type * as sthl from 'sthl';
import type * as katex from 'katex';
export declare const getMod: <T extends "katex" | "sthl">(name: T) => Promise<{
    katex: {
        default: typeof katex;
    };
    sthl: typeof sthl;
}[T]>;
