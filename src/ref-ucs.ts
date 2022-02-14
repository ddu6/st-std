import type {UnitCompiler} from '@ddu6/stc'
import {prettyTag, replaceAnchors} from './common'
export const ref: UnitCompiler = async (unit, compiler) => {
    const id = unit.options['ref-id']
    if (typeof id !== 'string' || id.length === 0) {
        return compiler.createErrorElement('Ref id required')
    }
    const indexInfo = compiler.context.idToIndexInfo[id]
    if (indexInfo === undefined) {
        return compiler.createErrorElement('?')
    }
    const element = document.createElement('span')
    const caption = document.createElement('span')
    const tagEle = document.createElement('span')
    const markEle = document.createElement('a')
    const descEle = document.createElement('span')
    caption.classList.add('caption')
    tagEle.classList.add('tag')
    markEle.classList.add('mark')
    markEle.href = `#${encodeURIComponent(id)}`
    descEle.classList.add('desc')
    const globalTag = compiler.context.extractLastGlobalOption('tag', indexInfo.unit.tag)
    tagEle.textContent = prettyTag(typeof globalTag === 'string' ? globalTag : indexInfo.unit.tag)
    element.append(caption)
    caption.append(tagEle)
    caption.append(markEle)
    caption.append(descEle)
    if (unit.children.length > 0) {
        markEle.append(replaceAnchors(await compiler.compileInlineSTDN(unit.children)))
    } else {
        const {mark} = indexInfo.unit.options
        if (typeof mark === 'object') {
            const df = new DocumentFragment()
            df.append(await compiler.compileUnit(mark))
            markEle.append(replaceAnchors(df))
        } else if (typeof mark === 'string') {
            markEle.textContent = mark
        } else if (typeof mark === 'number') {
            markEle.textContent = mark.toString()
        } else {
            markEle.textContent = indexInfo.index.join('.')
        }
    }
    const {desc} = unit.options
    if (typeof desc === 'object') {
        descEle.append(await compiler.compileUnit(desc))
    } else if (typeof desc === 'string') {
        descEle.textContent = desc
    } else if (typeof desc === 'number') {
        descEle.textContent = desc.toString()
    }
    return element
}