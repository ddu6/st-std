import {compileURLs} from 'https://cdn.jsdelivr.net/gh/st-org/stc@0.26.1/mod.js'
import {createASStruct, init} from 'https://cdn.jsdelivr.net/gh/st-org/stui@0.15.9/mod.js'
import * as tagToUnitCompiler from '../ucs.js'
init()
const stdStyle = document.createElement('style')
const style = document.createElement('style')
const struct = createASStruct()
document.head.append(stdStyle)
document.head.append(style)
document.body.append(struct.element)
stdStyle.textContent = `@import ${JSON.stringify(new URL('../main.css', import.meta.url).href)};`
const result = window.result = await compileURLs([new URL('./main.stdn', import.meta.url).href], {
    builtInTagToUnitCompiler: tagToUnitCompiler,
    style
})
struct.article.append(result.documentFragment)