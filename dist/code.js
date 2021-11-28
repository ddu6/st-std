import { getGlobalStrings, getGlobalURLs, stdnToPlainString } from '@ddu6/stc';
import { extractLangInfoArrayFromLangsURLs, extractLangInfoArrayFromVSCEURLs, extractThemeFromThemeURLs, extractThemeFromVSCT, extractThemeFromVSCTURLs, Highlighter } from 'sthl';
import { vsct } from './vsct';
import { EventEmitter } from 'events';
const emitter = new EventEmitter();
let highlighter;
emitter.once('load', async (context) => {
    const langInfoArray = await extractLangInfoArrayFromVSCEURLs([
        'css',
        'html',
        'json',
        'markdown-basics',
    ]
        .concat(getGlobalStrings('vsce', 'code', context.tagToGlobalOptions))
        .map(val => `${val}/package.json`), 'https://cdn.jsdelivr.net/gh/microsoft/vscode/extensions/');
    langInfoArray.push(...await extractLangInfoArrayFromVSCEURLs([
        'st-org/st-lang',
        'microsoft/vscode-typescript-next',
    ]
        .concat(getGlobalStrings('vsce-gh', 'code', context.tagToGlobalOptions))
        .map(val => `${val}/package.json`), 'https://cdn.jsdelivr.net/gh/'));
    langInfoArray.push(...await extractLangInfoArrayFromVSCEURLs(await getGlobalURLs('vsce-src', 'code', context.tagToGlobalOptions, context.dir)));
    langInfoArray.push(...await extractLangInfoArrayFromLangsURLs(await getGlobalURLs('langs-src', 'code', context.tagToGlobalOptions, context.dir)));
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
    theme.push(...await extractThemeFromVSCTURLs(await getGlobalURLs('vsct-src', 'code', context.tagToGlobalOptions, context.dir)));
    theme.push(...await extractThemeFromThemeURLs(await getGlobalURLs('theme-src', 'code', context.tagToGlobalOptions, context.dir)));
    highlighter = new Highlighter(langInfoArray, theme);
    emitter.emit('loaded');
});
async function getHighlighter(context) {
    if (highlighter !== undefined) {
        return highlighter;
    }
    emitter.emit('load', context);
    return new Promise(r => {
        emitter.once('loaded', () => {
            r(highlighter);
        });
    });
}
export const code = async (unit, compiler) => {
    let text = stdnToPlainString(unit.children);
    const element = Highlighter.textToPlainElement(text, unit.options.block === true);
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
                    const df = Highlighter.textToPlainDocumentFragment(text = await res.text());
                    element.innerHTML = '';
                    element.append(df);
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        const df = await (await getHighlighter(compiler.context)).highlightToDocumentFragment(text, lang);
        element.innerHTML = '';
        element.append(df);
    })().catch(console.log);
    return element;
};
