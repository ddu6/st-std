import { extractLangInfoArrayFromLangsURLs, extractLangInfoArrayFromVSCEURLs, extractThemeFromThemeURLs, extractThemeFromVSCT, extractThemeFromVSCTURLs, Highlighter, textToPlainDocumentFragment, textToPlainElement } from 'sthl';
import { vsct } from './vsct';
const compilerToHighlighter = new Map();
async function getHighlighter(compiler) {
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
    langInfoArray.push(...await extractLangInfoArrayFromVSCEURLs(await compiler.extractor.extractGlobalURLs('vsce-src', 'code', compiler.context.tagToGlobalOptions, compiler.context.dir)));
    langInfoArray.push(...await extractLangInfoArrayFromLangsURLs(await compiler.extractor.extractGlobalURLs('langs-src', 'code', compiler.context.tagToGlobalOptions, compiler.context.dir)));
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
    theme.push(...await extractThemeFromVSCTURLs(await compiler.extractor.extractGlobalURLs('vsct-src', 'code', compiler.context.tagToGlobalOptions, compiler.context.dir)));
    theme.push(...await extractThemeFromThemeURLs(await compiler.extractor.extractGlobalURLs('theme-src', 'code', compiler.context.tagToGlobalOptions, compiler.context.dir)));
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
