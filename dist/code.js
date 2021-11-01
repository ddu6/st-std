import { getGlobalStrings, getGlobalURLs, stdnToPlainString } from '@ddu6/stc';
import { extractLangInfoArrayFromLangsURLs, extractLangInfoArrayFromVSCEURLs, extractThemeFromThemeURLs, extractThemeFromVSCT, extractThemeFromVSCTURLs, Highlighter } from 'sthl';
import { vsct } from './vsct';
export const code = async (unit, compiler) => {
    let text = stdnToPlainString(unit.children);
    const element = Highlighter.textToPlainElement(text, unit.options.block === true);
    let { lang } = unit.options;
    if (typeof lang !== 'string' || lang.length === 0) {
        lang = 'non';
    }
    if (lang === 'non') {
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
        let langInfoArray = compiler.context.variables['code.langInfoArray'];
        let theme = compiler.context.variables['code.theme'];
        if (langInfoArray === undefined) {
            langInfoArray = compiler.context.variables['code.langInfoArray'] = await extractLangInfoArrayFromVSCEURLs([
                'css',
                'html',
                'json',
                'markdown-basics',
            ]
                .concat(getGlobalStrings('vsce', 'code', compiler.context.tagToGlobalOptions)), 'https://cdn.jsdelivr.net/gh/microsoft/vscode/extensions/');
            langInfoArray.push(...await extractLangInfoArrayFromVSCEURLs([
                'st-org/st-lang',
                'microsoft/vscode-typescript-next',
            ]
                .concat(getGlobalStrings('vsce-gh', 'code', compiler.context.tagToGlobalOptions)), 'https://cdn.jsdelivr.net/gh/'));
            langInfoArray.push(...await extractLangInfoArrayFromVSCEURLs(await getGlobalURLs('vsce-src', 'code', compiler.context.tagToGlobalOptions, compiler.context.dir)));
            langInfoArray.push(...await extractLangInfoArrayFromLangsURLs(await getGlobalURLs('langs-src', 'code', compiler.context.tagToGlobalOptions, compiler.context.dir)));
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
        }
        if (theme === undefined) {
            theme = compiler.context.variables['code.theme'] = extractThemeFromVSCT(vsct);
            theme.push(...await extractThemeFromVSCTURLs(await getGlobalURLs('vsct-src', 'code', compiler.context.tagToGlobalOptions, compiler.context.dir)));
            theme.push(...await extractThemeFromThemeURLs(await getGlobalURLs('theme-src', 'code', compiler.context.tagToGlobalOptions, compiler.context.dir)));
        }
        const highlighter = new Highlighter(langInfoArray, theme);
        const df = await highlighter.highlightToDocumentFragment(text, lang);
        element.innerHTML = '';
        element.append(df);
    })().catch(console.log);
    return element;
};
