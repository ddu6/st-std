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
export function gen(options = {}) {
    return (unit, compiler) => __awaiter(this, void 0, void 0, function* () {
        var _a;
        const id = compiler.context.unitToId.get(unit);
        if (id === undefined) {
            return compiler.createErrorElement('Error');
        }
        const indexInfo = compiler.context.idToIndexInfo[id];
        if (indexInfo === undefined) {
            return compiler.createErrorElement('Error');
        }
        let element;
        const caption = (options.reverse ? document.createElement('div') : document.createElement('span'));
        const content = document.createElement('span');
        const tagEle = document.createElement('span');
        const markEle = document.createElement('span');
        const descEle = document.createElement('span');
        caption.classList.add('caption');
        content.classList.add('content');
        tagEle.classList.add('tag');
        markEle.classList.add('mark');
        descEle.classList.add('desc');
        const globalTag = compiler.context.extractLastGlobalOption('tag', unit.tag);
        tagEle.textContent = prettyTag(typeof globalTag === 'string' ? globalTag : unit.tag);
        const block = ((_a = unit.options.block) !== null && _a !== void 0 ? _a : compiler.context.extractLastGlobalOption('block', unit.tag)) === true;
        if (block || !options.inline) {
            element = document.createElement('div');
            content.append(yield compiler.compileSTDN(unit.children));
        }
        else {
            element = document.createElement('span');
            content.append(yield compiler.compileInlineSTDN(unit.children));
        }
        if (block || !options.noCapitalize) {
            element.classList.add('capitalize-tag');
        }
        if (options.noTag) {
            element.classList.add('no-tag');
        }
        if (options.reverse) {
            element.append(content);
            element.append(caption);
        }
        else {
            element.append(caption);
            element.append(content);
        }
        caption.append(tagEle);
        caption.append(markEle);
        caption.append(descEle);
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
        else {
            markEle.textContent = indexInfo.index.join('.');
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
        if (options.theorem) {
            element.classList.add('theorem');
            if (options.style !== undefined) {
                element.classList.add(options.style);
            }
        }
        return element;
    });
}
