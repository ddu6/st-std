var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { prettyTag, replaceAnchors } from './common';
export const ref = (unit, compiler) => __awaiter(void 0, void 0, void 0, function* () {
    const id = unit.options['ref-id'];
    if (typeof id !== 'string' || id.length === 0) {
        return compiler.createErrorElement('Ref id required');
    }
    const indexInfo = compiler.context.idToIndexInfo[id];
    if (indexInfo === undefined) {
        return compiler.createErrorElement('?');
    }
    const element = document.createElement('span');
    const caption = document.createElement('span');
    const tagEle = document.createElement('span');
    const markEle = document.createElement('a');
    const descEle = document.createElement('span');
    caption.classList.add('caption');
    tagEle.classList.add('tag');
    markEle.classList.add('mark');
    markEle.href = `#${encodeURIComponent(id)}`;
    descEle.classList.add('desc');
    const globalTag = compiler.context.extractLastGlobalOption('tag', indexInfo.unit.tag);
    tagEle.textContent = prettyTag(typeof globalTag === 'string' ? globalTag : indexInfo.unit.tag);
    element.append(caption);
    caption.append(tagEle);
    caption.append(markEle);
    caption.append(descEle);
    if (unit.children.length > 0) {
        markEle.append(replaceAnchors(yield compiler.compileInlineSTDN(unit.children)));
    }
    else {
        const { mark } = indexInfo.unit.options;
        if (typeof mark === 'object') {
            const df = new DocumentFragment();
            df.append(yield compiler.compileUnit(mark));
            markEle.append(replaceAnchors(df));
        }
        else if (typeof mark === 'string') {
            markEle.textContent = mark;
        }
        else if (typeof mark === 'number') {
            markEle.textContent = mark.toString();
        }
        else {
            markEle.textContent = indexInfo.index.join('.');
        }
    }
    const { desc } = unit.options;
    if (typeof desc === 'object') {
        descEle.append(yield compiler.compileUnit(desc));
    }
    else if (typeof desc === 'string') {
        descEle.textContent = desc;
    }
    else if (typeof desc === 'number') {
        descEle.textContent = desc.toString();
    }
    return element;
});
