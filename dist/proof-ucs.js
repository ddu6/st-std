var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { prettyTag } from './common';
export const qed = (unit, compiler) => __awaiter(void 0, void 0, void 0, function* () {
    return yield compiler.compileUnit({
        tag: 'katex',
        options: { class: 'qed' },
        children: ['\\square'.split('')]
    });
});
export const proof = (unit, compiler) => __awaiter(void 0, void 0, void 0, function* () {
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
    markEle.classList.add('mark');
    descEle.classList.add('desc');
    const globalTag = compiler.context.extractLastGlobalOption('tag', unit.tag);
    tagEle.textContent = prettyTag(typeof globalTag === 'string' ? globalTag : unit.tag);
    element.append(caption);
    element.append(content);
    caption.append(tagEle);
    caption.append(markEle);
    caption.append(descEle);
    content.append(yield compiler.compileSTDN(unit.children));
    const { mark, desc } = unit.options;
    if (typeof mark === 'object') {
        markEle.append(yield compiler.compileUnit(mark));
    }
    else if (typeof mark === 'string') {
        markEle.textContent = mark;
    }
    else if (typeof mark === 'number') {
        markEle.textContent = mark.toString();
    }
    if (typeof desc === 'object') {
        descEle.append(yield compiler.compileUnit(desc));
    }
    else if (typeof desc === 'string') {
        descEle.textContent = desc;
    }
    else if (typeof desc === 'number') {
        descEle.textContent = desc.toString();
    }
    const qedEle = yield qed(unit, compiler);
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
});
