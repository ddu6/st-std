import {css,headCSS,tagToUnitCompiler} from '../mod.js'
import {compile} from 'https://cdn.jsdelivr.net/npm/@ddu6/stc/mod.js'
import {Shell} from 'https://cdn.jsdelivr.net/npm/@ddu6/stui/mod.js'
const headStyle=document.createElement('style')
const customStyle=document.createElement('style')
headStyle.textContent=headCSS
const shell=window.shell=new Shell('Test','',css)
document.body.append(headStyle)
document.body.append(shell.styleEle)
document.body.append(customStyle)
document.body.append(shell.element)
;(async()=>{
    const result=await compile(await (await window.fetch('./main.stdn')).text(),'',{
        builtInTagToUnitCompiler:tagToUnitCompiler
    })
    if(result===undefined){
        return
    }
    const {documentFragment,context}=result
    customStyle.textContent=context.css
    shell.append(documentFragment)
    console.log(context)
})()