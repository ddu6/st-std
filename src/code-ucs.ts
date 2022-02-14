import type {Compiler, UnitCompiler} from '@ddu6/stc'
import type {Highlighter} from 'sthl'
import {textToPlainDocumentFragment, textToPlainElement} from 'sthl/dist/base'
import {getMod} from './import'
import {vsct} from './vsct'
const compilerToHighlighter = new Map<Compiler, Highlighter | EventTarget | undefined>()
async function getHighlighter(compiler: Compiler): Promise<Highlighter> {
    const {extractLangInfoArrayFromVSCEURLs, extractThemeFromVSCT, extractThemeFromVSCTURLs, Highlighter} = await getMod('sthl')
    let highlighter = compilerToHighlighter.get(compiler)
    if (highlighter instanceof Highlighter) {
        return highlighter
    }
    if (highlighter !== undefined) {
        const target = highlighter
        return new Promise(r => {
            target.addEventListener('loaded', () => {
                r(<Highlighter>compilerToHighlighter.get(compiler))
            })
        })
    }
    const target = new EventTarget()
    compilerToHighlighter.set(compiler, target)
    const langInfoArray = await extractLangInfoArrayFromVSCEURLs(
        [
            'css',
            'html',
            'json',
            'markdown-basics',
        ]
            .concat(compiler.context.extractGlobalStrings('vsce', 'code'))
            .map(value => `${value}/package.json`),
        'https://cdn.jsdelivr.net/gh/microsoft/vscode/extensions/'
    )
    langInfoArray.push(...await extractLangInfoArrayFromVSCEURLs(
        [
            'st-org/st-lang',
            'microsoft/vscode-typescript-next',
        ]
            .concat(compiler.context.extractGlobalStrings('vsce-gh', 'code'))
            .map(value => `${value}/package.json`),
        'https://cdn.jsdelivr.net/gh/'
    ))
    langInfoArray.push(...await extractLangInfoArrayFromVSCEURLs(await compiler.context.extractGlobalURLs('vsce-src', 'code'), 'a:b'))
    langInfoArray.push({
        name: 'markdown',
        alias: ['md']
    }, {
        name: 'javascript',
        alias: ['js']
    }, {
        name: 'typescript',
        alias: ['ts']
    })
    const theme = extractThemeFromVSCT(vsct)
    theme.push(...await extractThemeFromVSCTURLs(await compiler.context.extractGlobalURLs('vsct-src', 'code'), 'a:b'))
    compilerToHighlighter.set(compiler, highlighter = new Highlighter(langInfoArray, theme))
    target.dispatchEvent(new Event('loaded'))
    return highlighter
}
export const code: UnitCompiler = async (unit, compiler) => {
    const forceBlock = unit.options.block === true
    let text = compiler.base.unitToPlainString(unit)
    const element = textToPlainElement(text, forceBlock)
    let {lang} = unit.options
    const {src} = unit.options
    if (typeof lang !== 'string' && typeof src === 'string') {
        const result = src.match(/\.([\w-]+)$/)
        if (result !== null) {
            lang = result[1]
        }
    }
    ; (async () => {
        if (typeof src === 'string') {
            const res = await fetch(compiler.context.urlToAbsURL(src, unit))
            if (res.ok) {
                const df = textToPlainDocumentFragment(text = await res.text(), forceBlock)
                element.innerHTML = ''
                element.append(df)
                element.dispatchEvent(new Event('adjust', {bubbles: true, composed: true}))
            }
        }
        if (typeof lang === 'string') {
            const df = await (await getHighlighter(compiler)).highlightToDocumentFragment(text, lang, forceBlock)
            element.innerHTML = ''
            element.append(df)
        }
    })().catch(console.log)
    return element
}