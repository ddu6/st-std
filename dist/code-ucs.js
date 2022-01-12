import { textToPlainDocumentFragment, textToPlainElement } from 'sthl/dist/base';
import { vsct } from './vsct';
const target = new EventTarget();
let mod;
target.addEventListener('load', async () => {
    mod = await new Function(`return import('https://cdn.jsdelivr.net/gh/st-org/sthl@0.13.0/mod.js')`)();
    target.dispatchEvent(new Event('loaded'));
}, { once: true });
async function getMod() {
    if (mod !== undefined) {
        return mod;
    }
    target.dispatchEvent(new Event('load'));
    return new Promise(r => {
        target.addEventListener('loaded', () => {
            if (mod !== undefined) {
                r(mod);
            }
        });
    });
}
const compilerToHighlighter = new Map();
async function getHighlighter(compiler) {
    const { extractLangInfoArrayFromVSCEURLs, extractThemeFromVSCT, extractThemeFromVSCTURLs, Highlighter } = await getMod();
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
    const langInfoArray = await extractLangInfoArrayFromVSCEURLs([
        'css',
        'html',
        'json',
        'markdown-basics',
    ]
        .concat(compiler.extractor.extractGlobalStrings('vsce', 'code', compiler.context.tagToGlobalOptions))
        .map(val => `${val}/package.json`), 'https://cdn.jsdelivr.net/gh/microsoft/vscode/extensions/');
    langInfoArray.push(...await extractLangInfoArrayFromVSCEURLs([
        'st-org/st-lang',
        'microsoft/vscode-typescript-next',
    ]
        .concat(compiler.extractor.extractGlobalStrings('vsce-gh', 'code', compiler.context.tagToGlobalOptions))
        .map(val => `${val}/package.json`), 'https://cdn.jsdelivr.net/gh/'));
    langInfoArray.push(...await extractLangInfoArrayFromVSCEURLs(await compiler.extractor.extractGlobalURLs('vsce-src', 'code', compiler.context.tagToGlobalOptions, compiler.context.dir), 'a:b'));
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
    theme.push(...await extractThemeFromVSCTURLs(await compiler.extractor.extractGlobalURLs('vsct-src', 'code', compiler.context.tagToGlobalOptions, compiler.context.dir), 'a:b'));
    compilerToHighlighter.set(compiler, highlighter = new Highlighter(langInfoArray, theme));
    target.dispatchEvent(new Event('loaded'));
    return highlighter;
}
export const code = async (unit, compiler) => {
    const forceBlock = unit.options.block === true;
    let text = compiler.base.unitToPlainString(unit);
    const element = textToPlainElement(text, forceBlock);
    let { lang } = unit.options;
    if (typeof lang !== 'string') {
        lang = '';
    }
    if (lang.length === 0) {
        return element;
    }
    ;
    (async () => {
        const { src } = unit.options;
        if (typeof src === 'string') {
            try {
                const res = await fetch(new URL(src, compiler.context.dir).href);
                if (res.ok) {
                    const df = textToPlainDocumentFragment(text = await res.text(), forceBlock);
                    element.innerHTML = '';
                    element.append(df);
                    element.dispatchEvent(new Event('adjust', { bubbles: true }));
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        const df = await (await getHighlighter(compiler)).highlightToDocumentFragment(text, lang, forceBlock);
        element.innerHTML = '';
        element.append(df);
    })().catch(console.log);
    return element;
};
