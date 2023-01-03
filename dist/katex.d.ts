import type { UnitCompiler } from '@ddu6/stc';
export declare function createMeasurableElement(content: Node): {
    element: HTMLDivElement;
    baselineBlock: HTMLDivElement;
    container: HTMLDivElement;
};
type MeasurableElement = ReturnType<typeof createMeasurableElement>;
export declare function measureElement(element: MeasurableElement, heightScale: number, widthScale: number): {
    height: number;
    width: number;
    top: number;
    bottom: number;
};
export declare function gen(options?: {
    noEnv?: true;
    addStar?: true;
    display?: true;
}): UnitCompiler;
export {};
