import { UnitCompiler } from '@ddu6/stc'
import { Div, Span } from 'stce'
export const proof:UnitCompiler=async (unit,compiler)=>{
    const element=new Div()
    const caption=new Span(['caption'])
    const tagEle=new Span(['tag']).setText('proof')
    const markEle=new Span(['mark'])
    const descEle=new Span(['desc'])
    const content=new Span(['content'])
    element
    .append(
        caption
        .append(tagEle)
        .append(markEle)
        .append(descEle)
    )
    .append(content)
    const {mark,desc}=unit.options
    if(Array.isArray(mark)){
        markEle.append(await compiler.compileInlineSTDN(mark))
    }else if(typeof mark==='string'){
        markEle.setText(mark)
    }else if(typeof mark==='number'){
        markEle.setText(mark.toString())
    }
    if(Array.isArray(desc)){
        descEle.append(await compiler.compileInlineSTDN(desc))
    }else if(typeof desc==='string'){
        descEle.setText(desc)
    }else if(typeof desc==='number'){
        descEle.setText(desc.toString())
    }
    const qed=await compiler.compileUnit({tag:'katex',options:{class:'qed'},children:['\\square'.split('')]})
    if(content.children.length===0){
        content.append(
            new Div().append(qed)
        )
    }else{
        content.children[content.children.length-1].append(qed)
    }
    return element.element
}