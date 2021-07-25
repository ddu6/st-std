import {css,cssHead,tagToUnitCompiler} from '../dist/mod'
import {compile} from '@ddu6/stc'
import {Shell} from '@ddu6/stui'
const shell=new Shell('Test','',css)
shell.styleEle.textContent=cssHead+shell.styleEle.textContent
;(async()=>{
    const result=await compile(await (await window.fetch('./main.stdn')).text(),'',{
        dftTagToUnitCompiler:tagToUnitCompiler
    })
    if(result===undefined){
        return
    }
    const {documentFragment,context}=result
    shell.styleEle.textContent+=context.css
    shell.append(documentFragment)
    console.log(context)
})()