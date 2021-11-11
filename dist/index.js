import { Compiler, getLastGlobalOption } from '@ddu6/stc';
import { Div, Span } from 'stce';
function gen(options = {}) {
    return async (unit, compiler) => {
        const id = compiler.context.unitToId.get(unit);
        if (id === undefined) {
            return Compiler.createErrorElement('Error');
        }
        const indexInfo = compiler.context.idToIndexInfo[id];
        if (indexInfo === undefined) {
            return Compiler.createErrorElement('Error');
        }
        let element;
        let df;
        const block = unit.options.block === true || getLastGlobalOption('block', unit.tag, compiler.context.tagToGlobalOptions) === true;
        if (!options.inline || block) {
            element = new Div();
            df = await compiler.compileSTDN(unit.children);
        }
        else {
            element = new Span();
            df = await compiler.compileInlineSTDN(unit.children);
        }
        if (!options.noCapitalize || block) {
            element.classList.add('capitalize-tag');
        }
        if (options.noTag) {
            element.classList.add('no-tag');
        }
        const tagEle = new Span(['tag']).setText(unit.tag
            .replace(/^heading$/, 'section')
            .replace(/^equation$/, 'eq'));
        const markEle = new Span(['mark']);
        const descEle = new Span(['desc']);
        const caption = (options.reverse ? new Div(['caption']) : new Span(['caption']))
            .append(tagEle)
            .append(markEle)
            .append(descEle);
        const content = new Span(['content']).append(df);
        if (options.reverse) {
            element
                .append(content)
                .append(caption);
        }
        else {
            element
                .append(caption)
                .append(content);
        }
        const { mark, desc } = unit.options;
        if (Array.isArray(mark)) {
            markEle.append(await compiler.compileInlineSTDN(mark));
        }
        else if (typeof mark === 'string') {
            markEle.setText(mark);
        }
        else if (typeof mark === 'number') {
            markEle.setText(mark.toString());
        }
        else {
            markEle.setText(indexInfo.index.join('.'));
        }
        if (Array.isArray(desc)) {
            descEle.append(await compiler.compileInlineSTDN(desc));
        }
        else if (typeof desc === 'string') {
            descEle.setText(desc);
        }
        else if (typeof desc === 'number') {
            descEle.setText(desc.toString());
        }
        if (options.theorem) {
            element.classList.add('theorem');
            if (options.style !== undefined) {
                element.classList.add(options.style);
            }
        }
        return element.element;
    };
}
export const index = gen({ inline: true });
export const figure = gen({ reverse: true });
export const equation = gen({ reverse: true, noCapitalize: true });
export const heading = gen({ noTag: true });
export const theorem = gen({ theorem: true });
export const conjecture = theorem;
export const corollary = theorem;
export const lemma = theorem;
export const proposition = theorem;
export const definition = gen({ theorem: true, style: 'definition' });
export const notation = definition;
export const remark = gen({ theorem: true, style: 'remark' });
export const example = remark;
export const exercise = remark;
