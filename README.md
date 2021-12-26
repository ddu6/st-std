# ST STD
```js
import {compile} from '@ddu6/stc'
import {init} from '@ddu6/stui'
import {css,headCSS,tagToUnitCompiler} from 'st-std'
const example=`{id flt, mark FLT, desc Fermat, theorem [
    ['Let '{'n'}' be an integer greater than '{'2'}', then there are no positive integers '{'a,b,c'}' satisfying']
    {display, 'a^n+b^n=c^n.'}
]}
['The first successful proof of '{ref-id flt, ref []}' was released in 1994 by Andrew Wiles.']
{style height:100vh}`
init({css})
const headStyle=document.createElement('style')
const style=document.createElement('style')
headStyle.textContent=headCSS
document.head.prepend(headStyle)
document.head.append(style)
const result=await compile(example,'',{
    builtInTagToUnitCompiler:tagToUnitCompiler,
    style
})
if(result!==undefined){
    document.body.append(result.documentFragment)
}
```