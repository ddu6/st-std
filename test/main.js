import {compile} from 'https://cdn.jsdelivr.net/gh/st-org/stc@0.10.1/mod.js'
import {init} from 'https://cdn.jsdelivr.net/gh/st-org/stui@0.5.0/mod.js'
import {css,tagToUnitCompiler} from '../mod.js'
init({css})
const style=document.createElement('style')
document.head.append(style)
const result=await compile(await (await window.fetch('./main.stdn')).text(),'',{
    builtInTagToUnitCompiler:tagToUnitCompiler,
    style
})
if(result!==undefined){
    document.body.append(result.documentFragment)
}