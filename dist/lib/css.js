export const katex_patch = `body {
    --font-katex: st-sans, KaTeX_Main, "Segoe UI", "Microsoft YaHei", "Hiragino Sans GB", "STHeiti Light", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

.katex {
    font-family: var(--font-katex);
    font-size: 1em;
    line-height: var(--number-ratio-line);
    white-space: pre;
}

.katex-display {
    margin: 0;
}`;
export const hl = `.hljs,
.hljs-subst {
    color: var(--color-text);
}

.hljs-comment {
    color: var(--color-comment);
}

.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-selector-class,
.hljs-selector-id,
.hljs-selector-tag {
    color: var(--color-function);
}

.hljs-attribute,
.hljs-keyword,
.hljs-doctag,
.hljs-meta-keyword {
    color: var(--color-modifier);
}

.hljs-keyword {
    color: var(--color-keyword);
}

.hljs-name {
    color: var(--color-modifier);
}

.hljs-number {
    color: var(--color-number);
}

.hljs-string {
    color: var(--color-string);
}

.hljs-quote {
    color: var(--color-string);
}

.hljs-deletion {
    color: var(--color-light);
}

.hljs-template-tag,
.hljs-type {
    color: var(--color-modifier);
}

.hljs-section,
.hljs-title {
    color: var(--color-modifier);
}

.hljs-link,
.hljs-regexp {
    color: var(--color-string);
}

.hljs-symbol,
.hljs-template-variable,
.hljs-variable {
    color: var(--color-variable);
}

.hljs-literal {
    color: var(--color-modifier);
}

.hljs-addition,
.hljs-built_in,
.hljs-bullet,
.hljs-code {
    color: var(--color-variable);
}

.hljs-meta {
    color: var(--color-variable);
}

.hljs-meta-string {
    color: var(--color-string);
}

.hljs-emphasis {
    font-style: italic
}

.hljs-strong {
    font-weight: bold
}

.token.comment {
    color: var(--color-comment);
}

.token.punctuation,
.token.operator {
    color: var(--color-text);
}

.token.prolog,
.token.doctype,
.token.cdata,
.token.deleted {
    color: var(--color-light);
}

.token.boolean {
    color: var(--color-modifier);
}

.token.number {
    color: var(--color-number);
}

.token.property,
.token.builtin,
.token.attr-name,
.token.variable {
    color: var(--color-variable);
}

.token.selector,
.token.function {
    color: var(--color-function);
}

.token.tag,
.token.constant,
.token.entity,
.token.symbol {
    color: var(--color-modifier);
}

.token.namespace,
.token.class-name {
    color: var(--color-class);
}

.token.string,
.token.char,
.token.url,
.language-css .token.string,
.style .token.string,
.token.attr-value,
.token.inserted {
    color: var(--color-string);
}

.token.atrule,
.token.keyword {
    color: var(--color-keyword);
}

.token.regex,
.token.important {
    color: var(--color-string);
}

.token.important,
.token.bold {
    font-weight: bold;
}

.token.italic {
    font-style: italic;
}`;
export const unit = `/* caption */
.caption>.tag:not(:empty) {
    margin-right: var(--length-space);
}

.plain.caption>.tag,
.plain>.caption>.tag {
    display: none;
}

.caption>.desc:not(:empty)::before {
    content: "(";
    margin-left: var(--length-space);
}

.caption>.desc:not(:empty)::after {
    content: ")";
}

.plain.caption>.desc,
.plain>.caption>.desc {
    display: none;
}

.caption+.content:not(:empty)::before {
    content: "";
    display: inline-block;
    margin-left: var(--length-gap);
}

.caption+.content>div:first-child {
    display: inline;
}

/* contents */
.unit.contents::before {
    content: "Contents";
    text-align: center;
    display: block;
    font-size: var(--length-font-heading);
    margin: var(--length-gap) 0;
}

.unit.contents>.item.level1 {
    font-size: calc((1em + var(--length-font-heading)) / 2);
    margin: var(--length-space) 0;
}

.unit.contents>.item:not(.level1) {
    margin-left: var(--length-tab);
}

.unit.contents>.item:not(.level1):not(.level2) {
    margin-left: calc(2 * var(--length-tab));
}

/* display */
.unit.display {
    margin: var(--length-space) 0;
    text-align: center;
    display: block;
}

/* equation */
.unit.equation {
    margin: var(--length-space) 0;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    break-inside: avoid;
}

.unit.equation>.content {
    text-align: center;
    grid-area: 1/2/span 1/span 1;
}

.unit.equation>.caption {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    grid-area: 1/3/span 1/span 1;
    padding-left: var(--length-gap);
}

/* figure */
.figcaption>.tag {
    text-transform: capitalize;
    font-weight: bold;
}

.figcaption>.mark {
    font-weight: bold;
}

/* heading */
.unit.heading {
    font-size: var(--length-font-heading);
    margin: var(--length-gap) 0;
    break-inside: avoid;
}

.unit.heading>.caption>.tag {
    display: none;
}

.unit.heading>.caption>.desc {
    display: none;
}

/* proof */
.unit.proof {
    margin: var(--length-gap) 0;
}

.unit.proof>.caption>.tag {
    text-transform: capitalize;
    font-weight: bold;
    font-style: italic;
}

.unit.proof>.content>div:last-child>.qed {
    float: right;
}

/* theorem */
.unit.theorem {
    border-left: var(--color-variable) solid 1px;
    background-color: var(--color-pre);
    margin: var(--length-gap) 0;
    padding: var(--length-gap);
    padding-left: var(--length-padding);
    display: table;
    box-sizing: border-box;
    width: 100%;
    break-inside: avoid;
}

.unit.theorem>.caption>.tag {
    text-transform: capitalize;
    font-weight: bold;
}

.unit.theorem>.caption>.mark {
    font-weight: bold;
}

.unit.theorem:not(.definition):not(.remark)>.content {
    font-style: italic;
}

.unit.definition {
    border-left-color: var(--color-string);
}

.unit.remark {
    border-left-color: var(--color-comment);
}

.unit.remark>.caption>.tag,
.unit.remark>.caption>.mark {
    font-style: italic;
}

/* title */
.unit.title {
    text-align: center;
    font-size: var(--length-font-title);
    margin: var(--length-padding) 0;
}

/* warn */
.unit.warn {
    color: var(--color-warn);
    text-align: center;
}`;
export const all = katex_patch + hl + unit;
