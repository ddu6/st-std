import { Compiler } from "@ddu6/stc";
import { CommonEle, Div, Span } from "stce";
import { replaceAnchors } from "./common";
export const index = async (unit, compiler) => {
    const { id } = unit.options;
    if (typeof id !== 'string' || id === '') {
        return Compiler.createErrorElement('Id required');
    }
    const indexInfo = compiler.context.idToIndexInfo[id];
    if (indexInfo === undefined) {
        return Compiler.createErrorElement('Error');
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
    const tagEle = new Span(['tag']).setText(indexInfo.orbit
        .replace(/^heading$/, 'section')
        .replace(/^equation$/, 'eq'));
    const markEle = new CommonEle('a', ['mark']);
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
    return element.element;
};
export const heading = async (unit, compiler) => {
    return await index({
        tag: unit.tag,
        options: Object.assign({ block: true }, unit.options),
        children: unit.children
    }, compiler);
};
export const equation = async (unit, compiler) => {
    return await heading({
        tag: unit.tag,
        options: Object.assign({ reverse: true }, unit.options),
        children: unit.children
    }, compiler);
};
export const theorem = async (unit, compiler) => {
    const element = await heading(unit, compiler);
    if (element.classList.contains('warn')) {
        return element;
    }
    element.classList.add('theorem');
    return element;
};
export const definition = async (unit, compiler) => {
    const element = await theorem(unit, compiler);
    if (element.classList.contains('warn')) {
        return element;
    }
    element.classList.add('definition');
    return element;
};
export const remark = async (unit, compiler) => {
    const element = await theorem(unit, compiler);
    if (element.classList.contains('warn')) {
        return element;
    }
    element.classList.add('remark');
    return element;
};
export const figure = equation;
export const conjecture = theorem;
export const corollary = theorem;
export const lemma = theorem;
export const proposition = theorem;
export const notation = definition;
export const example = remark;
export const exercise = remark;
