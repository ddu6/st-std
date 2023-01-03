var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { textToPlainDocumentFragment, textToPlainElement } from 'sthl/dist/base';
import { getMod } from './import';
import { vsct } from './vsct';
const compilerToHighlighter = new Map();
function getHighlighter(compiler) {
    return __awaiter(this, void 0, void 0, function* () {
        const { extractLangInfoArrayFromVSCEURLs, extractThemeFromVSCT, extractThemeFromVSCTURLs, Highlighter } = yield getMod('sthl');
        let highlighter = compilerToHighlighter.get(compiler);
        if (highlighter instanceof Highlighter) {
            return highlighter;
        }
        if (highlighter !== undefined) {
            const target = highlighter;
            return new Promise(r => {
                target.addEventListener('loaded', () => {
                    r(compilerToHighlighter.get(compiler));
                });
            });
        }
        const target = new EventTarget();
        compilerToHighlighter.set(compiler, target);
        const langInfoArray = yield extractLangInfoArrayFromVSCEURLs([
            'css',
            'html',
            'json',
            'markdown-basics',
        ]
            .concat(compiler.context.extractGlobalStrings('vsce', 'code'))
            .map(value => `${value}/package.json`), 'https://cdn.jsdelivr.net/gh/microsoft/vscode/extensions/');
        langInfoArray.push(...yield extractLangInfoArrayFromVSCEURLs([
            'st-org/st-lang',
            'microsoft/vscode-typescript-next',
        ]
            .concat(compiler.context.extractGlobalStrings('vsce-gh', 'code'))
            .map(value => `${value}/package.json`), 'https://cdn.jsdelivr.net/gh/'));
        langInfoArray.push(...yield extractLangInfoArrayFromVSCEURLs(yield compiler.context.extractGlobalURLs('vsce-src', 'code'), 'a:b'));
        langInfoArray.push({
            name: 'markdown',
            alias: ['md']
        }, {
            name: 'javascript',
            alias: ['js']
        }, {
            name: 'typescript',
            alias: ['ts']
        });
        const theme = extractThemeFromVSCT(vsct);
        theme.push(...yield extractThemeFromVSCTURLs(yield compiler.context.extractGlobalURLs('vsct-src', 'code'), 'a:b'));
        compilerToHighlighter.set(compiler, highlighter = new Highlighter(langInfoArray, theme));
        target.dispatchEvent(new Event('loaded'));
        return highlighter;
    });
}
export const code = (unit, compiler) => __awaiter(void 0, void 0, void 0, function* () {
    const forceBlock = unit.options.block === true;
    let text = compiler.base.unitToPlainString(unit);
    const element = textToPlainElement(text, forceBlock);
    let { lang } = unit.options;
    const { src } = unit.options;
    if (typeof lang !== 'string' && typeof src === 'string') {
        const result = src.match(/\.([\w-]+)$/);
        if (result !== null) {
            lang = result[1];
        }
    }
    ;
    (() => __awaiter(void 0, void 0, void 0, function* () {
        if (typeof src === 'string') {
            const res = yield fetch(compiler.context.urlToAbsURL(src, unit));
            if (res.ok) {
                const df = textToPlainDocumentFragment(text = yield res.text(), forceBlock);
                element.innerHTML = '';
                element.append(df);
                element.dispatchEvent(new Event('adjust', { bubbles: true, composed: true }));
            }
        }
        if (typeof lang === 'string') {
            const df = yield (yield getHighlighter(compiler)).highlightToDocumentFragment(text, lang, forceBlock);
            element.innerHTML = '';
            element.append(df);
        }
    }))().catch(console.log);
    return element;
});
