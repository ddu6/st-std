import { Div } from 'stce';
import { ref } from './ref';
export const contents = async (unit, compiler) => {
    const element = new Div();
    for (let i = 0; i < compiler.context.indexInfoArray.length; i++) {
        const indexInfo = compiler.context.indexInfoArray[i];
        if (indexInfo.unit.tag !== 'heading') {
            continue;
        }
        const item = await ref({
            tag: 'heading',
            options: Object.assign({ block: true }, indexInfo.unit.options),
            children: indexInfo.unit.children
        }, compiler);
        if (item.classList.contains('warn')) {
            return item;
        }
        item.classList.add('item', 'unit', 'heading', 'level' + indexInfo.index.length);
        element.append(item);
    }
    return element.element;
};
