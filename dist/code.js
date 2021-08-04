import { stdnToPlainString, urlsToAbsURLs } from '@ddu6/stc';
import { extractLangInfoArrayFromLangsURLs, extractLangInfoArrayFromVSCEURLs, extractThemeFromThemeURLs, extractThemeFromVSCT, extractThemeFromVSCTURLs, Highlighter } from 'sthl';
import { vsct } from './vsct';
export const code = async (unit, compiler) => {
    const element = Highlighter.textToPlainElement(stdnToPlainString(unit.children), unit.options.block === true);
    let { lang } = unit.options;
    if (typeof lang !== 'string' || lang === '') {
        lang = 'non';
    }
    if (lang === 'non') {
        return element;
    }
    ;
    (async () => {
        const infoArray = await extractLangInfoArrayFromVSCEURLs([
            'css',
            'html',
            'json',
            'markdown-basics',
        ]
            .concat(getNonEmptyStrsFormKey('vsce', compiler.context)), 'https://cdn.jsdelivr.net/gh/microsoft/vscode/extensions/');
        infoArray.push(...await extractLangInfoArrayFromVSCEURLs([
            'st-org/st-lang',
            'microsoft/vscode-typescript-next',
        ]
            .concat(getNonEmptyStrsFormKey('vsce-gh', compiler.context)), 'https://cdn.jsdelivr.net/gh/'));
        infoArray.push(...await extractLangInfoArrayFromVSCEURLs(await getURLsFormKey('vsce-src', compiler.context)));
        infoArray.push(...await extractLangInfoArrayFromLangsURLs(await getURLsFormKey('langs-src', compiler.context)));
        infoArray.push({
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
        theme.push(...await extractThemeFromVSCTURLs(await getURLsFormKey('vsct-src', compiler.context)));
        theme.push(...await extractThemeFromThemeURLs(await getURLsFormKey('theme-src', compiler.context)));
        const highlighter = new Highlighter(infoArray, theme);
        const df = await highlighter.highlightToDocumentFragment(stdnToPlainString(unit.children), lang);
        element.innerHTML = '';
        element.append(df);
    })().catch(console.log);
    return element;
};
function getNonEmptyStrsFormKey(key, context) {
    const strs = [];
    for (const val of (context.tagToGlobalOptions.code ?? {})[key] ?? []) {
        if (typeof val === 'string' && val !== '') {
            strs.push(val);
        }
    }
    return strs;
}
async function getURLsFormKey(key, context) {
    return await urlsToAbsURLs(getNonEmptyStrsFormKey(key, context), context.dir);
}
