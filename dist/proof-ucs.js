import { prettyTag } from './common';
export const qed = async (unit, compiler) => {
    return await compiler.compileUnit({
        tag: 'katex',
        options: { class: 'qed' },
        children: ['\\square'.split('')]
    });
};
export const proof = async (unit, compiler) => {
    const element = document.createElement('div');
    const caption = document.createElement('span');
    const content = document.createElement('span');
    const tagEle = document.createElement('span');
    const markEle = document.createElement('span');
    const descEle = document.createElement('span');
    element.classList.add('capitalize-tag');
    caption.classList.add('caption');
    content.classList.add('content');
    tagEle.classList.add('tag');
    tagEle.textContent = prettyTag(unit.tag);
    markEle.classList.add('mark');
    descEle.classList.add('desc');
    element.append(caption);
    element.append(content);
    caption.append(tagEle);
    caption.append(markEle);
    caption.append(descEle);
    content.append(await compiler.compileSTDN(unit.children));
    const { mark, desc } = unit.options;
    if (Array.isArray(mark)) {
        markEle.append(await compiler.compileInlineSTDN(mark));
    }
    else if (typeof mark === 'string') {
        markEle.textContent = mark;
    }
    else if (typeof mark === 'number') {
        markEle.textContent = mark.toString();
    }
    if (Array.isArray(desc)) {
        descEle.append(await compiler.compileInlineSTDN(desc));
    }
    else if (typeof desc === 'string') {
        descEle.textContent = desc;
    }
    else if (typeof desc === 'number') {
        descEle.textContent = desc.toString();
    }
    const qedEle = await qed(unit, compiler);
    if (content.children.length === 0) {
        const div = document.createElement('div');
        div.classList.add('st-line');
        content.append(div);
        div.append(qedEle);
    }
    else {
        content.children[content.children.length - 1].append(qedEle);
    }
    return element;
};
