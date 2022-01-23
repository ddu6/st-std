import {compile} from 'https://cdn.jsdelivr.net/gh/st-org/stc@0.19.3/mod.js'
import {createASStruct, init} from 'https://cdn.jsdelivr.net/gh/st-org/stui@0.15.4/mod.js'
import * as tagToUnitCompiler from '../ucs.js'
init()
const style = document.createElement('style')
const struct = createASStruct()
document.head.append(style)
document.body.append(struct.element)
const result = await compile(await (await fetch('./main.stdn')).text(), location.href, {
    builtInTagToUnitCompiler: tagToUnitCompiler,
    style
})
if (result !== undefined) {
    struct.article.append(result.documentFragment)
}