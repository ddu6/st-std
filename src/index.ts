import { Compiler, UnitCompiler } from "@ddu6/stc"
import { CommonEle, Div, Span } from "stce"
import { removeAnchors } from "./common"
export const index:UnitCompiler=async (unit,compiler)=>{
    const {label}=unit.options
    if(typeof label!=='string'||label===''){
        return Compiler.createErrorElement('Label required')
    }
    const indexInfo=compiler.context.labelToIndexInfo[label]
    if(indexInfo===undefined){
        return Compiler.createErrorElement('Error')
    }
    const element=new Span(['caption'])
    const tagEle=new Span(['tag']).setText(unit.tag.replace(/^heading$/,'section').replace(/^equation$/,'eq'))
    const markEle=new CommonEle('a',['mark'])
    try{
        markEle.element.id=label
    }catch(err){
        console.log(err)
    }
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
        markEle.setText(indexInfo.index.join('.'))
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
export const heading:UnitCompiler=async (unit,compiler)=>{
    const caption=await index(unit,compiler)
    if(caption.classList.contains('warn')){
        return caption
    }
    return new Div()
    .append(caption)
    .append(
        new Span(['content'])
        .append(await compiler.compileSTDN(unit.children))
    )
    .element
}
export const theorem:UnitCompiler=async (unit,compiler)=>{
    const element=await heading(unit,compiler)
    if(element.classList.contains('warn')){
        return element
    }
    element.classList.add('theorem')
    return element
}
export const definition:UnitCompiler=async (unit,compiler)=>{
    const element=await theorem(unit,compiler)
    if(element.classList.contains('warn')){
        return element
    }
    element.classList.add('definition')
    return element
}
export const remark:UnitCompiler=async (unit,compiler)=>{
    const element=await theorem(unit,compiler)
    if(element.classList.contains('warn')){
        return element
    }
    element.classList.add('remark')
    return element
}
export const equation:UnitCompiler=async (unit,compiler)=>{
    const caption=await index(unit,compiler)
    if(caption.classList.contains('warn')){
        return caption
    }
    return new Div()
    .append(
        new Div(['content'])
        .append(await compiler.compileSTDN(unit.children))
    )
    .append(caption)
    .element
}
export const figure:UnitCompiler=async (unit,compiler)=>{
    const caption=await index(unit,compiler)
    if(caption.classList.contains('warn')){
        return caption
    }
    caption.classList.add('figcaption')
    return new Div()
    .append(
        new Div(['content'])
        .append(await compiler.compileSTDN(unit.children))
    )
    .append(caption)
    .element
}
export const conjecture=theorem
export const corollary=theorem
export const lemma=theorem
export const proposition=theorem
export const notation=definition
export const example=remark
export const exercise=remark