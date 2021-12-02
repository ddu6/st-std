# ST STD
```js
import {css,headCSS,tagToUnitCompiler} from 'st-std'
import {compile} from '@ddu6/stc'
import {Shell} from '@ddu6/stui'
const example=`{id flt, mark FLT, desc Fermat, theorem [
    ['Let '{'n'}' be an integer greater than '{'2'}', then there are no positive integers '{'a,b,c'}' satisfying']
    {display, 'a^n+b^n=c^n.'}
]}
['The first successful proof of '{ref-id flt, ref []}' was released in 1994 by Andrew Wiles.']
{style height:100vh}`
const headStyle=document.createElement('style')
const customStyle=document.createElement('style')
headStyle.textContent=headCSS
const shell=window.shell=new Shell('Test','',css)
document.head.append(headStyle)
document.head.append(shell.styleEle)
document.head.append(customStyle)
document.body.append(shell.element)
;(async()=>{
    const result=await compile(example,'',{
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
```