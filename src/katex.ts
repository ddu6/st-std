import { stdnToPlainString, UnitCompiler } from '@ddu6/stc'
import {renderToString} from 'katex'
export const katex:UnitCompiler=async (unit,compiler)=>{
    const element=document.createElement('span')
    let string=''
    const eles:HTMLElement[]=[]
    for(let i=0;i<unit.children.length;i++){
        const line=unit.children[i]
        for(let i=0;i<line.length;i++){
            const inline=line[i]
            if(typeof inline==='string'){
                string+=inline
                continue
            }
            string+=`\\htmlClass{tmpPlaceholder${eles.length.toString()}}{}`
            eles.push(await compiler.compileUnit(inline))
        }
        if(i!==unit.children.length-1){
            string+='\n'
        }
    }
    if(unit.tag!=='katex'){
        string=`\\begin{${unit.tag}}${string}\\end{${unit.tag}}`
    }
    let customCommand=(compiler.context.tagToGlobalOptions.katex??{}).__
    if(Array.isArray(customCommand)){
        customCommand=stdnToPlainString(customCommand)
    }
    if(typeof customCommand==='string'){
        if(string.trimStart().startsWith("'")){
            customCommand+='\\\\'
        }
        string=customCommand+'\n'+string
    }
    const displayMode=unit.options.display===true
    element.innerHTML=renderToString(string,{
        displayMode,
        output:'html',
        strict:false,
        throwOnError: false,
        trust:true,
    })
    for(let i=0;i<eles.length;i++){
        const tmp=element.querySelector(`.tmpPlaceholder${i}`)
        if(tmp===null){
            continue
        }
        tmp.replaceWith(eles[i])
    }
    if(displayMode){
        element.classList.add('display')
    }
    return element
}
export const aligned=katex
export const alignedat=katex
export const array=katex
export const arraystretch=katex
export const Bmatrix=katex
export const bmatrix=katex
export const cases=katex
export const matrix=katex
export const rcases=katex
export const pmatrix=katex
export const smallmatrix=katex
export const Vmatrix=katex
export const vmatrix=katex