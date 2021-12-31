import type {UnitCompiler} from '@ddu6/stc'
import {prettyTag} from './common'
export function gen(options:{
    inline?:true
    reverse?:true
    noCapitalize?:true
    noTag?:true
    theorem?:true
    style?:'definition'|'remark'
}={}):UnitCompiler{
    return async (unit,compiler)=>{
        const {document}=compiler.context.window
        const id=compiler.context.unitToId.get(unit)
        if(id===undefined){
            return compiler.createErrorElement('Error')
        }
        const indexInfo=compiler.context.idToIndexInfo[id]
        if(indexInfo===undefined){
            return compiler.createErrorElement('Error')
        }
        let element:HTMLSpanElement|HTMLDivElement
        const caption=(options.reverse?document.createElement('div'):document.createElement('span'))
        const content=document.createElement('span')
        const tagEle=document.createElement('span')
        const markEle=document.createElement('span')
        const descEle=document.createElement('span')
        caption.classList.add('caption')
        content.classList.add('content')
        tagEle.classList.add('tag')
        tagEle.textContent=prettyTag(unit.tag)
        markEle.classList.add('mark')
        descEle.classList.add('desc')
        const block=(unit.options.block??compiler.extractor.extractLastGlobalOption('block',unit.tag,compiler.context.tagToGlobalOptions))===true
        if(block||!options.inline){
            element=document.createElement('div')
            content.append(await compiler.compileSTDN(unit.children))
        }else{
            element=document.createElement('span')
            content.append(await compiler.compileInlineSTDN(unit.children))
        }
        if(block||!options.noCapitalize){
            element.classList.add('capitalize-tag')
        }
        if(options.noTag){
            element.classList.add('no-tag')
        }
        if(options.reverse){
            element.append(content)
            element.append(caption)
        }else{
            element.append(caption)
            element.append(content)
        }
        caption.append(tagEle)
        caption.append(markEle)
        caption.append(descEle)
        const {mark,desc}=unit.options
        if(Array.isArray(mark)){
            markEle.append(await compiler.compileInlineSTDN(mark))
        }else if(typeof mark==='string'){
            markEle.textContent=mark
        }else if(typeof mark==='number'){
            markEle.textContent=mark.toString()
        }else{
            markEle.textContent=indexInfo.index.join('.')
        }
        if(Array.isArray(desc)){
            descEle.append(await compiler.compileInlineSTDN(desc))
        }else if(typeof desc==='string'){
            descEle.textContent=desc
        }else if(typeof desc==='number'){
            descEle.textContent=desc.toString()
        }
        if(options.theorem){
            element.classList.add('theorem')
            if(options.style!==undefined){
                element.classList.add(options.style)
            }
        }
        return element
    }
}