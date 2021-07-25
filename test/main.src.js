import {css,headCSS,tagToUnitCompiler} from '../dist/mod'
import {compile} from '@ddu6/stc'
import {Shell} from '@ddu6/stui'
const headStyle=document.createElement('style')
const customStyle=document.createElement('style')
headStyle.textContent=headCSS
document.body.append(headStyle)
const shell=new Shell('Test','',css)
document.body.append(customStyle)
;(async()=>{
    const result=await compile(await (await window.fetch('./main.stdn')).text(),'',{
        dftTagToUnitCompiler:tagToUnitCompiler
    })
    if(result===undefined){
        return
    }
    const {documentFragment,context}=result
    customStyle.textContent=context.css
    shell.append(documentFragment)
    console.log(context)
})()