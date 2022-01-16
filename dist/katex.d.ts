import type { UnitCompiler } from '@ddu6/stc';
interface MeasurableElement {
    element: HTMLDivElement;
    baselineBlock: HTMLDivElement;
    container: HTMLDivElement;
}
export declare function createMeasurableElement(content: Node): MeasurableElement;
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
