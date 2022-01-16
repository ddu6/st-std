import { getMod } from './import';
import { getScale } from './common';
import { observeAdjustments } from './observe';
export function createMeasurableElement(content) {
    const element = document.createElement('div');
    const baselineBlock = document.createElement('div');
    const container = document.createElement('div');
    element.style.display = 'inline-block';
    baselineBlock.style.display = 'inline-block';
    container.style.display = 'inline-block';
    element.append(baselineBlock);
    element.append(container);
    container.append(content);
    return {
        element,
        baselineBlock,
        container
    };
}
export function measureElement(element, heightScale, widthScale) {
    const { height, top, width } = element.container.getBoundingClientRect();
    const scaledHeight = height * heightScale;
    const scaledWidth = width * widthScale;
    const { top: baseTop } = element.baselineBlock.getBoundingClientRect();
    const scaledTop = Math.min(scaledHeight, (baseTop - top) * heightScale);
    return {
        height: scaledHeight,
        width: scaledWidth,
        top: scaledTop,
        bottom: scaledHeight - scaledTop
    };
}
const compilerToCustomCommand = new Map();
export function gen(options = {}) {
    return async (unit, compiler) => {
        const element = document.createElement('span');
        const strings = [];
        const suffixes = [];
        let customCommand = compilerToCustomCommand.get(compiler);
        if (customCommand === undefined) {
            compilerToCustomCommand.set(compiler, customCommand = compiler.base.stdnToPlainString(compiler.extractor.extractGlobalChildren('katex', compiler.context.tagToGlobalOptions)));
        }
        if (customCommand.length > 0) {
            strings.push(`${customCommand}{}`);
        }
        if (!options.noEnv) {
            const env = options.addStar ? `${unit.tag}*` : unit.tag;
            strings.push(`\\begin{${env}}`);
            suffixes.push(`\\end{${env}}`);
        }
        const elements = [];
        const elementPositions = [];
        for (const line of unit.children) {
            for (const inline of line) {
                if (typeof inline === 'string') {
                    strings.push(inline);
                    continue;
                }
                elementPositions.push(strings.length);
                strings.push(`{\\htmlClass{tmpPlaceholder${elements.length}}{}}`);
                elements.push(createMeasurableElement(await compiler.compileUnit(inline)));
            }
            strings.push('\n');
        }
        strings.push(...suffixes);
        const displayMode = options.display || unit.options.display === true;
        if (displayMode) {
            element.classList.add('display');
        }
        async function renderStrings() {
            element.innerHTML = ((await getMod('katex')).default.renderToString)(strings.join(''), {
                displayMode,
                errorColor: 'var(--color-warn)',
                output: 'html',
                strict: false,
                throwOnError: false,
                trust: true,
            });
            for (let i = 0; i < elements.length; i++) {
                const tmp = element.querySelector(`.tmpPlaceholder${i}`);
                if (tmp === null) {
                    continue;
                }
                tmp.replaceWith(elements[i].element);
            }
        }
        await renderStrings();
        if (elements.length > 0) {
            observeAdjustments(async () => {
                for (let i = 0; i < elements.length; i++) {
                    const element = elements[i];
                    const { heightScale, widthScale } = getScale(element.element);
                    if (!isFinite(heightScale) || !isFinite(widthScale)) {
                        continue;
                    }
                    const { top, bottom } = measureElement(element, heightScale, widthScale);
                    strings[elementPositions[i]] = `{\\raisebox{${top}em}{}\\raisebox{${-bottom}em}{}\\htmlClass{tmpPlaceholder${i}}{}}`;
                }
                await renderStrings();
                return true;
            }, element, compiler.context.root);
        }
        return element;
    };
}
