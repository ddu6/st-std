import { Compiler } from '@ddu6/stc';
import { Anchor, Div, Span } from 'stce';
import { replaceAnchors } from './common';
export const ref = async (unit, compiler) => {
    const { label } = unit.options;
    if (typeof label !== 'string' || label === '') {
        return Compiler.createErrorElement('Label required');
    }
    const indexInfo = compiler.context.labelToIndexInfo[label];
    if (indexInfo === undefined) {
        return Compiler.createErrorElement('?');
    }
    let element;
    let df;
    const block = unit.options.block === true;
    const reverse = unit.options.reverse === true;
    if (block) {
        element = new Div();
        df = await compiler.compileSTDN(unit.children);
    }
    else {
        element = new Span();
        df = await compiler.compileInlineSTDN(unit.children);
    }
    const tagEle = new Span(['tag']).setText(indexInfo.unit.tag
        .replace(/^index$/, indexInfo.orbit)
        .replace(/^heading$/, 'section')
        .replace(/^equation$/, 'eq'));
    const markEle = new Anchor('#' + label, ['mark'], '');
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
        markEle.append(replaceAnchors(await compiler.compileInlineSTDN(mark)));
    }
    else if (typeof mark === 'string') {
        markEle.setText(mark);
    }
    else if (typeof mark === 'number') {
        markEle.setText(mark.toString());
    }
    else {
        const { mark } = indexInfo.unit.options;
        if (Array.isArray(mark)) {
            markEle.append(replaceAnchors(await compiler.compileInlineSTDN(mark)));
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
    return element.element;
};
