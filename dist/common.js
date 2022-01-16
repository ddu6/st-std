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
export function getScale(element) {
    const fontSize = Number(getComputedStyle(element).fontSize.slice(0, -2));
    let heightScale = 1 / fontSize;
    let widthScale = 1 / fontSize;
    const fo = element.closest('foreignObject');
    if (fo !== null) {
        const { height, width } = fo.getBoundingClientRect();
        heightScale *= fo.height.animVal.value / height;
        widthScale *= fo.width.animVal.value / width;
    }
    return {
        heightScale,
        widthScale
    };
}
