# ST STD
```js
import {css,headCSS,tagToUnitCompiler} from 'st-std'
import {compile} from '@ddu6/stc'
import {Shell} from '@ddu6/stui'
const example=`{id t1, mark FLT, desc Fermat, theorem [
    ['Let '{'n'}' be an integer greater than '{'2'}', then there are no positive integers '{'a,b,c'}' satisfying']
    {display, 'a^n+b^n=c^n.'}
]}
['The first successful proof of '{ref-id t1, ref []}' was released in 1994 by Andrew Wiles.']`
const headStyle=document.createElement('style')
const customStyle=document.createElement('style')
headStyle.textContent=headCSS
document.body.append(headStyle)
const shell=new Shell('Test','',css)
document.body.append(customStyle)
;(async()=>{
    const result=await compile(example,'',{
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
```