import {compile} from 'https://cdn.jsdelivr.net/gh/st-org/stc@0.8.1/mod.js'
import {init} from 'https://cdn.jsdelivr.net/gh/st-org/stui@0.3.1/mod.js'
import {css,headCSS,tagToUnitCompiler} from '../mod.js'
init({css})
const headStyle=document.createElement('style')
const style=document.createElement('style')
headStyle.textContent=headCSS
document.head.prepend(headStyle)
document.head.append(style)
const result=await compile(await (await window.fetch('./main.stdn')).text(),'',{
    builtInTagToUnitCompiler:tagToUnitCompiler,
    style
})
if(result!==undefined){
    document.body.append(result.documentFragment)
}