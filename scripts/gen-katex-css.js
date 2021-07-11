const fs=require('fs')
const path=require('path')
const url=require('@ddu6/url-tools')
fs.writeFileSync(path.join(__dirname,'../css/0.katex.css'),url.fixURLInCSS(fs.readFileSync(path.join(__dirname,'../node_modules/katex/dist/katex.css'),{encoding:'utf8'}),'https://cdn.jsdelivr.net/npm/katex/dist/'))