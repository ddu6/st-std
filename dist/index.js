import { Compiler } from '@ddu6/stc';
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
        const block = !options.inline || unit.options.block === true;
        const reverse = options.reverse || unit.options.reverse === true;
        if (block) {
            element = new Div(['capitalize']);
            df = await compiler.compileSTDN(unit.children);
        }
        else {
            element = new Span();
            df = await compiler.compileInlineSTDN(unit.children);
        }
        const tagEle = new Span(['tag']).setText(indexInfo.orbit
            .replace(/^heading$/, 'section')
            .replace(/^equation$/, 'eq'));
        const markEle = new Span(['mark']);
        const descEle = new Span(['desc']);
        const caption = new Span(['caption'])
            .append(tagEle)
            .append(markEle)
            .append(descEle);
        const content = new Span(['content']).append(df);
        if (reverse) {
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
        if (options.style !== undefined) {
            element.classList.add(options.style);
        }
        return element.element;
    };
}
export const index = gen({ inline: true });
export const heading = gen();
export const equation = gen({ reverse: true });
export const theorem = gen({ style: 'theorem' });
export const definition = gen({ style: 'definition' });
export const remark = gen({ style: 'remark' });
export const figure = equation;
export const conjecture = theorem;
export const corollary = theorem;
export const lemma = theorem;
export const proposition = theorem;
export const notation = definition;
export const example = remark;
export const exercise = remark;
