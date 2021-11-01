import { getGlobalChildren, stdnToPlainString, UnitCompiler } from '@ddu6/stc'
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
            env.includes('matrix')
            ||env==='align'
            ||env==='alignat'
            ||env==='gather'
        ){
            env+='*'
        }
        string=`\\begin{${env}}${string}\\end{${env}}`
    }
    let customCommand=<string|undefined>compiler.context.variables['katex.customCommand']
    if(customCommand===undefined){
        const customCommandSTDN=getGlobalChildren('katex',compiler.context.tagToGlobalOptions)
        if(customCommandSTDN.length>0){
            customCommand=compiler.context.variables['katex.customCommand']=stdnToPlainString(customCommandSTDN)
        }else{
            customCommand=''
        }
    }
    if(customCommand.length>0){
        if(string.trimStart().startsWith("'")){
            customCommand+='\\\\'
        }
        string=customCommand+'\n'+string
    }
    const displayMode=unit.options.display===true
    if(displayMode){
        element.classList.add('display')
    }
    ;(async ()=>{
        let renderToString=<Function|undefined>compiler.context.variables['katex.renderToString']
        if(renderToString===undefined){
            renderToString=compiler.context.variables['katex.renderToString']=<Function>(await new Function(`return import('https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.mjs')`)()).default.renderToString
        }
        element.innerHTML=renderToString(string,{
            displayMode,
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
    })().catch(console.log)
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
export const rcases=katex
export const pmatrix=katex
export const smallmatrix=katex
export const split=katex
export const subarray=katex
export const Vmatrix=katex
export const vmatrix=katex