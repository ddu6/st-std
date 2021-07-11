import { Compiler, UnitCompiler } from '@ddu6/stc'
import {Anchor, Span} from 'stce'
import {removeAnchors} from './common'
export const ref:UnitCompiler=async (unit,compiler)=>{
    const {label}=unit.options
    if(typeof label!=='string'||label===''){
        return Compiler.createErrorElement('Label required')
    }
    const indexInfo=compiler.context.labelToIndexInfo[label]
    if(indexInfo===undefined){
        return Compiler.createErrorElement('?')
    }
    const element=new Span(['caption'])
    const tagEle=new Span(['tag']).setText(indexInfo.unit.tag.replace(/^heading$/,'section').replace(/^equation$/,'eq'))
    const markEle=new Anchor('#'+label,['mark'],'')
    const descEle=new Span(['desc'])
    element
    .append(tagEle)
    .append(markEle)
    .append(descEle)
    const {mark,desc}=unit.options
    if(Array.isArray(mark)){
        markEle.setHTML(removeAnchors(await compiler.compileInlineSTDN(mark)))
    }else if(typeof mark==='string'){
        markEle.setText(mark)
    }else if(typeof mark==='number'){
        markEle.setText(mark.toString())
    }else{
        const {mark}=indexInfo.unit.options
        if(Array.isArray(mark)){
            markEle.setHTML(removeAnchors(await compiler.compileInlineSTDN(mark)))
        }else if(typeof mark==='string'){
            markEle.setText(mark)
        }else if(typeof mark==='number'){
            markEle.setText(mark.toString())
        }else{
            markEle.setText(indexInfo.index.join('.'))
        }
    }
    if(Array.isArray(desc)){
        descEle.append(await compiler.compileInlineSTDN(desc))
    }else if(typeof desc==='string'){
        descEle.setText(desc)
    }else if(typeof desc==='number'){
        descEle.setText(desc.toString())
    }
    return element.element
}