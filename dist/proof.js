import { Div, Span } from 'stce';
export const qed = async (unit, compiler) => {
    return await compiler.compileUnit({
        tag: 'katex',
        options: { class: 'qed' },
        children: ['\\square'.split('')]
    });
};
export const proof = async (unit, compiler) => {
    const tagEle = new Span(['tag']).setText('proof');
    const markEle = new Span(['mark']);
    const descEle = new Span(['desc']);
    const caption = new Span(['caption'])
        .append(tagEle)
        .append(markEle)
        .append(descEle);
    const content = new Span(['content'])
        .append(await compiler.compileSTDN(unit.children));
    const element = new Div(['capitalize-tag'])
        .append(caption)
        .append(content);
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
    if (Array.isArray(desc)) {
        descEle.append(await compiler.compileInlineSTDN(desc));
    }
    else if (typeof desc === 'string') {
        descEle.setText(desc);
    }
    else if (typeof desc === 'number') {
        descEle.setText(desc.toString());
    }
    const qedEle = await qed(unit, compiler);
    if (content.children.length === 0) {
        content.append(new Div(['st-line']).append(qedEle));
    }
    else {
        content.children[content.children.length - 1].append(qedEle);
    }
    return element.element;
};
