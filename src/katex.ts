import {getGlobalChildren,stdnToPlainString,UnitCompiler} from '@ddu6/stc'
import {EventEmitter} from 'events'
const emitter=new EventEmitter()
let renderToString:Function|undefined
emitter.once('load',async ()=>{
    renderToString=(await new Function(`return import('https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.mjs')`)()).default.renderToString
    emitter.emit('loaded')
})
async function getFunction():Promise<Function>{
    if(renderToString!==undefined){
        return renderToString
    }
    emitter.emit('load')
    return new Promise(r=>{
        emitter.once('loaded',()=>{
            r(<Function>renderToString)
        })
    })
}
let customCommand:string|undefined
export const katex:UnitCompiler=async (unit,compiler)=>{
    const element=document.createElement('span')
    const array:string[]=[]
    const eles:(HTMLElement|SVGElement)[]=[]
    for(const line of unit.children){
        let string=''
        for(const inline of line){
            if(typeof inline==='string'){
                string+=inline
                continue
            }
            string+=`\\htmlClass{tmpPlaceholder${eles.length.toString()}}{}`
            eles.push(await compiler.compileUnit(inline))
        }
        array.push(string)
    }
    let string=array.join('\n')
    if(unit.tag!=='katex'){
        let env=unit.tag
        if(
            env.includes('matrix')&&env!=='smallmatrix'
            ||env==='align'
            ||env==='alignat'
            ||env==='gather'
        ){
            env+='*'
        }
        string=`\\begin{${env}}${string}\\end{${env}}`
    }
    if(customCommand===undefined){
        customCommand=stdnToPlainString(getGlobalChildren('katex',compiler.context.tagToGlobalOptions))
    }
    if(customCommand.length>0){
        if(string.trimStart().startsWith("'")){
            string=`${customCommand}\\\\\n${string}`
        }else{
            string=`${customCommand}\n${string}`
        }
    }
    const displayMode=unit.options.display===true
    ||unit.tag==='align'
    ||unit.tag==='alignat'
    ||unit.tag==='CD'
    ||unit.tag==='gather'
    if(displayMode){
        element.classList.add('display')
    }
    element.innerHTML=(await getFunction())(string,{
        displayMode,
        errorColor:'var(--color-warn)',
        // globalGroup:true,
        output:'html',
        strict:false,
        throwOnError:false,
        trust:true,
    })
    for(let i=0;i<eles.length;i++){
        const tmp=element.querySelector(`.tmpPlaceholder${i}`)
        if(tmp===null){
            continue
        }
        tmp.replaceWith(eles[i])
    }
    return element
}
export const align=katex
export const alignat=katex
export const aligned=katex
export const alignedat=katex
export const array=katex
export const arraystretch=katex
export const Bmatrix=katex
export const bmatrix=katex
export const cases=katex
export const CD=katex
export const darray=katex
export const dcases=katex
export const drcases=katex
export const gather=katex
export const matrix=katex
export const pmatrix=katex
export const rcases=katex
export const smallmatrix=katex
export const split=katex
export const subarray=katex
export const Vmatrix=katex
export const vmatrix=katex