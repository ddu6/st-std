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
function gen(options:{
    noEnv?:true
    addStar?:true
    display?:true
}={}):UnitCompiler{
    return async (unit,compiler)=>{
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
        if(!options.noEnv){
            let env=unit.tag
            if(options.addStar){
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
        const displayMode=options.display||unit.options.display===true
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
}
export const katex=gen({noEnv:true})

export const align=gen({addStar:true,display:true})
export const alignat=align
export const gather=align

export const aligned=gen()
export const alignedat=aligned
export const array=aligned
export const arraystretch=aligned
export const cases=aligned
export const darray=aligned
export const dcases=aligned
export const drcases=aligned
export const rcases=aligned
export const smallmatrix=aligned
export const split=aligned
export const subarray=aligned

export const Bmatrix=gen({addStar:true})
export const bmatrix=Bmatrix
export const matrix=Bmatrix
export const pmatrix=Bmatrix
export const Vmatrix=Bmatrix
export const vmatrix=Bmatrix

export const CD=gen({display:true})