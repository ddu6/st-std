import { UnitCompiler } from '@ddu6/stc';
export declare function gen(options?: {
    inline?: true;
    reverse?: true;
    noCapitalize?: true;
    noTag?: true;
    theorem?: true;
    style?: 'definition' | 'remark';
}): UnitCompiler;
