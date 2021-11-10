import {Compiler,UnitCompiler} from '@ddu6/stc'
import {Span} from 'stce'
import {replaceAnchors} from './common'
export const ref:UnitCompiler=async (unit,compiler)=>{
    const id=unit.options['ref-id']
    if(typeof id!=='string'||id.length===0){
        return Compiler.createErrorElement('Ref id required')
    }
    const indexInfo=compiler.context.idToIndexInfo[id]
    if(indexInfo===undefined){
        return Compiler.createErrorElement('?')
    }
    const tagEle=new Span(['tag']).setText(
        indexInfo.orbit
        .replace(/^heading$/,'section')
        .replace(/^equation$/,'eq')
    )
    const markEle=await compiler.compileUnit({
        tag:'a',
        options:{
            href:'#'+encodeURIComponent(id),
            class:'mark'
        },
        children:[]
    })
    const descEle=new Span(['desc'])
    const element=new Span().append(
        new Span(['caption'])
        .append(tagEle)
        .append(markEle)
        .append(descEle)
    )
    if(unit.children.length>0){
        markEle.append(replaceAnchors(await compiler.compileInlineSTDN(unit.children)))
    }else{
        const {mark}=indexInfo.unit.options
        if(Array.isArray(mark)){
            markEle.append(replaceAnchors(await compiler.compileInlineSTDN(mark)))
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
        descEle.setText(desc)
    }else if(typeof desc==='number'){
        descEle.setText(desc.toString())
    }
    return element.element
}