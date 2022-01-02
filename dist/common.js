const anchorAttrsToIgnore = [
    'download',
    'href',
    'hreflang',
    'ping',
    'referrerpolicy',
    'rel',
    'target',
    'type'
];
export function replaceAnchors(fragment) {
    for (const a of fragment.querySelectorAll('a')) {
        const span = document.createElement('span');
        for (const { name, value } of a.attributes) {
            if (anchorAttrsToIgnore.includes(name)) {
                continue;
            }
            try {
                span.setAttribute(name, value);
            }
            catch (err) {
                console.log(err);
            }
        }
        for (const child of a.childNodes) {
            span.append(child);
        }
        a.replaceWith(span);
    }
    return fragment;
}
export function prettyTag(tag) {
    return tag === 'heading' ? 'section' : tag === 'equation' ? 'eq' : tag;
}
