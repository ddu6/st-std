import type {UnitCompiler} from '@ddu6/stc'
import {prettyTag,replaceAnchors} from './common'
export const ref:UnitCompiler=async (unit,compiler)=>{
    const {document}=compiler.context.window
    const id=unit.options['ref-id']
    if(typeof id!=='string'||id.length===0){
        return compiler.createErrorElement('Ref id required')
    }
    const indexInfo=compiler.context.idToIndexInfo[id]
    if(indexInfo===undefined){
        return compiler.createErrorElement('?')
    }
    const element=document.createElement('span')
    const caption=document.createElement('span')
    const tagEle=document.createElement('span')
    const markEle=await compiler.compileUnit({
        tag:'a',
        options:{
            href:'#'+encodeURIComponent(id),
            class:'mark'
        },
        children:[]
    })
    const descEle=document.createElement('span')
    caption.classList.add('caption')
    tagEle.classList.add('tag')
    tagEle.textContent=prettyTag(indexInfo.unit.tag)
    descEle.classList.add('desc')
    element.append(caption)
    caption.append(tagEle)
    caption.append(markEle)
    caption.append(descEle)
    if(unit.children.length>0){
        markEle.append(replaceAnchors(await compiler.compileInlineSTDN(unit.children),document))
    }else{
        const {mark}=indexInfo.unit.options
        if(Array.isArray(mark)){
            markEle.append(replaceAnchors(await compiler.compileInlineSTDN(mark),document))
        }else if(typeof mark==='string'){
            markEle.textContent=mark
        }else if(typeof mark==='number'){
            markEle.textContent=mark.toString()
        }else{
            markEle.textContent=indexInfo.index.join('.')
        }
    }
    const {desc}=unit.options
    if(Array.isArray(desc)){
        descEle.append(await compiler.compileInlineSTDN(desc))
    }else if(typeof desc==='string'){
        descEle.textContent=desc
    }else if(typeof desc==='number'){
        descEle.textContent=desc.toString()
    }
    return element
}