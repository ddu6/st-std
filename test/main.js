import {compile} from 'https://cdn.jsdelivr.net/gh/st-org/stc@0.20.1/mod.js'
import {createASStruct, init} from 'https://cdn.jsdelivr.net/gh/st-org/stui@0.15.5/mod.js'
import * as tagToUnitCompiler from '../ucs.js'
init()
const style = document.createElement('style')
const struct = createASStruct()
document.head.append(style)
document.body.append(struct.element)
const result = window.result = await compile([{
    value: await (await fetch('./main.stdn')).text(),
    url: location.href
}], {
    builtInTagToUnitCompiler: tagToUnitCompiler,
    style
})
struct.article.append(result.documentFragment)