export function removeAnchors(fragment) {
    const span = document.createElement('span');
    span.append(fragment);
    return span.innerHTML
        .replace(/<\s*a\b([\s\S]*?)>/g, '<span$1>')
        .replace(/<\s*\/a\s*>/g, '</span>');
}
