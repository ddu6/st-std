import {getGlobalStrings,getGlobalURLs,unitToPlainString,UnitCompiler,Context} from '@ddu6/stc'
import {extractLangInfoArrayFromLangsURLs, extractLangInfoArrayFromVSCEURLs, extractThemeFromThemeURLs, extractThemeFromVSCT, extractThemeFromVSCTURLs, Highlighter} from 'sthl'
import {vsct} from './vsct'
import {EventEmitter} from 'events'
const contextToHighlighter=new Map<Context,Highlighter|EventEmitter|undefined>()
async function getHighlighter(context:Context):Promise<Highlighter>{
    let highlighter=contextToHighlighter.get(context)
    if(highlighter instanceof Highlighter){
        return highlighter
    }
    if(highlighter!==undefined){
        const emitter=highlighter
        return new Promise(r=>{
            emitter.once('loaded',()=>{
                r(<Highlighter>contextToHighlighter.get(context))
            })
        })
    }
    const emitter=new EventEmitter()
    contextToHighlighter.set(context,emitter)
    const langInfoArray=await extractLangInfoArrayFromVSCEURLs(
        [
            'css',
            'html',
            'json',
            'markdown-basics',
        ]
        .concat(getGlobalStrings('vsce','code',context.tagToGlobalOptions))
        .map(val=>`${val}/package.json`),
        'https://cdn.jsdelivr.net/gh/microsoft/vscode/extensions/'
    )
    langInfoArray.push(...await extractLangInfoArrayFromVSCEURLs(
        [
            'st-org/st-lang',
            'microsoft/vscode-typescript-next',
        ]
        .concat(getGlobalStrings('vsce-gh','code',context.tagToGlobalOptions))
        .map(val=>`${val}/package.json`),
        'https://cdn.jsdelivr.net/gh/'
    ))
    langInfoArray.push(...await extractLangInfoArrayFromVSCEURLs(await getGlobalURLs('vsce-src','code',context.tagToGlobalOptions,context.dir)))
    langInfoArray.push(...await extractLangInfoArrayFromLangsURLs(await getGlobalURLs('langs-src','code',context.tagToGlobalOptions,context.dir)))
    langInfoArray.push({
        name:'markdown',
        alias:['md']
    },{
        name:'javascript',
        alias:['js']
    },{
        name:'typescript',
        alias:['ts']
    })
    const theme=extractThemeFromVSCT(vsct)
    theme.push(...await extractThemeFromVSCTURLs(await getGlobalURLs('vsct-src','code',context.tagToGlobalOptions,context.dir)))
    theme.push(...await extractThemeFromThemeURLs(await getGlobalURLs('theme-src','code',context.tagToGlobalOptions,context.dir)))
    contextToHighlighter.set(context,highlighter=new Highlighter(langInfoArray,theme))
    emitter.emit('loaded')
    return highlighter
}
export const code:UnitCompiler=async (unit,compiler)=>{
    let text=unitToPlainString(unit)
    const element=Highlighter.textToPlainElement(text,unit.options.block===true)
    let {lang}=unit.options
    if(typeof lang!=='string'){
        lang=''
    }
    if(lang.length===0){
        return element
    }
    ;(async ()=>{
        const {src}=unit.options
        if(typeof src==='string'){
            try{
                const res=await fetch(new URL(src,compiler.context.dir).href)
                if(res.ok){
                    const df=Highlighter.textToPlainDocumentFragment(text=await res.text())
                    element.innerHTML=''
                    element.append(df)
                }
            }catch(err){
                console.log(err)
            }
        }
        const df=await (await getHighlighter(compiler.context)).highlightToDocumentFragment(text,lang)
        element.innerHTML=''
        element.append(df)
    })().catch(console.log)
    return element
}