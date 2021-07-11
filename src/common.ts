export function textToHTML(text:string){
    const tmp=document.createElement('span')
    tmp.textContent=text
    return tmp.innerHTML
}
function replaceAnchors(html:string){
    return html.replace(/<\s*a\b([\s\S]*?)>/g,'<span$1>').replace(/<\s*\/a\s*>/g,'</span>')
}
export function removeAnchors(fragment:DocumentFragment){
    const span=document.createElement('span')
    span.append(fragment)
    return replaceAnchors(span.innerHTML)
}