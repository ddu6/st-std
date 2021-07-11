export function textToHTML(text) {
    const tmp = document.createElement('span');
    tmp.textContent = text;
    return tmp.innerHTML;
}
function replaceAnchors(html) {
    return html.replace(/<\s*a\b([\s\S]*?)>/g, '<span$1>').replace(/<\s*\/a\s*>/g, '</span>');
}
export function removeAnchors(fragment) {
    const span = document.createElement('span');
    span.append(fragment);
    return replaceAnchors(span.innerHTML);
}
