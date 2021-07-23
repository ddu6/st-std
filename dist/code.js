import { stdnToPlainString, urlsToAbsURLs } from '@ddu6/stc';
import { extractLangInfoArrayFromLangsURLs, extractLangInfoArrayFromVSECURLs, extractThemeFromThemeURLs, extractThemeFromVST, extractThemeFromVSTURLs, Highlighter } from 'sthl';
import { vst } from './vst';
export const code = async (unit, compiler) => {
    let { lang } = unit.options;
    if (typeof lang !== 'string' || lang === '') {
        lang = 'non';
    }
    if (lang === 'non') {
        return Highlighter.textToPlainCode(stdnToPlainString(unit.children));
    }
    const infoArray = await extractLangInfoArrayFromVSECURLs([
        'css',
        'html',
        'javascript',
        'json',
        'markdown-basics',
        'typescript-basics',
    ]
        .concat(getNonEmptyStrsFormKey('vsec', compiler.context)), 'https://cdn.jsdelivr.net/gh/microsoft/vscode/extensions/');
    infoArray.push(...await extractLangInfoArrayFromVSECURLs([
        'https://cdn.jsdelivr.net/gh/st-org/st-lang'
    ]
        .concat(await getURLsFormKey('vsec-src', compiler.context))));
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
    const theme = extractThemeFromVST(vst);
    theme.push(...await extractThemeFromVSTURLs(await getURLsFormKey('vst-src', compiler.context)));
    theme.push(...await extractThemeFromThemeURLs(await getURLsFormKey('theme-src', compiler.context)));
    const highlighter = new Highlighter(infoArray, theme);
    return await highlighter.highlight(stdnToPlainString(unit.children), lang);
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
