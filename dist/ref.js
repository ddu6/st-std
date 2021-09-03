import { Compiler } from '@ddu6/stc';
import { Anchor, Span } from 'stce';
import { replaceAnchors } from './common';
export const ref = async (unit, compiler) => {
    const id = unit.options['ref-id'];
    if (typeof id !== 'string' || id.length === 0) {
        return Compiler.createErrorElement('Ref id required');
    }
    const indexInfo = compiler.context.idToIndexInfo[id];
    if (indexInfo === undefined) {
        return Compiler.createErrorElement('?');
    }
    const tagEle = new Span(['tag']).setText(indexInfo.orbit
        .replace(/^heading$/, 'section')
        .replace(/^equation$/, 'eq'));
    const markEle = new Anchor('#' + encodeURIComponent(id), ['mark'], '');
    const descEle = new Span(['desc']);
    const element = new Span().append(new Span(['caption'])
        .append(tagEle)
        .append(markEle)
        .append(descEle));
    if (unit.children.length > 0) {
        markEle.append(replaceAnchors(await compiler.compileInlineSTDN(unit.children)));
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
    const { desc } = unit.options;
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
