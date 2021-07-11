import { Div, Span } from 'stce';
import { ref } from './ref';
export const contents = async (unit, compiler) => {
    const element = new Div();
    for (let i = 0; i < compiler.context.indexInfoArray.length; i++) {
        const indexInfo = compiler.context.indexInfoArray[i];
        if (indexInfo.unit.tag !== 'heading') {
            continue;
        }
        const caption = await ref(indexInfo.unit, compiler);
        if (caption.classList.contains('warn')) {
            return caption;
        }
        element.append(new Div(['item', 'unit', 'heading', 'level' + indexInfo.index.length])
            .append(caption)
            .append(new Span(['content'])
            .append(await compiler.compileSTDN(indexInfo.unit.children))));
    }
    return element.element;
};
