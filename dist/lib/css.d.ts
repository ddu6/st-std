export declare const head = "@import \"https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.min.css\";";
export declare const katex = ".katex {\n    font-size: 1em;\n    line-height: var(--number-ratio-line);\n    white-space: pre;\n}\n\n.katex-display {\n    margin: 0;\n}";
export declare const line = ".st-line {\n    white-space: pre-wrap;\n}\n\n.st-line:not(.vanished):empty::before {\n    content: \" \";\n}";
export declare const unit = "/* caption */\n.unit>.caption>.tag:not(:empty) {\n    margin-right: var(--length-space);\n}\n\ndiv.unit>.caption:first-child>.tag {\n    text-transform: capitalize;\n}\n\n.unit.plain>.caption>.tag {\n    display: none;\n}\n\n.unit>.caption>.desc:not(:empty)::before {\n    content: \"(\";\n    margin-left: var(--length-space);\n}\n\n.unit>.caption>.desc:not(:empty)::after {\n    content: \")\";\n}\n\n.unit>.caption+.content:not(:empty)::before {\n    content: \"\";\n    margin-left: var(--length-gap);\n}\n\n.unit>.caption+.content>div:first-child {\n    display: inline;\n}\n\n/* display */\n.unit.display {\n    margin: var(--length-space) 0;\n    text-align: center;\n    display: block;\n}\n\n/* equation */\n.unit.equation {\n    margin: var(--length-space) 0;\n    display: grid;\n    grid-template-columns: 1fr auto 1fr;\n}\n\n.unit.equation>.content {\n    text-align: center;\n    grid-area: 1/2/span 1/span 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.unit.equation>.caption {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    grid-area: 1/3/span 1/span 1;\n    padding-left: var(--length-gap);\n}\n\n/* figure */\n.unit.figure {\n    text-align: center;\n    margin: var(--length-space) 0;\n}\n\n.unit.figure>.caption {\n    display: block;\n    margin: var(--length-space) 0;\n}\n\n.unit.figure>.caption>.tag {\n    text-transform: capitalize;\n    font-weight: bold;\n}\n\n.unit.figure>.caption>.mark {\n    font-weight: bold;\n}\n\n/* heading */\n.unit.heading {\n    margin: var(--length-gap) 0;\n}\n\n.unit.heading:not(.pure) {\n    font-size: var(--length-font-heading);\n}\n\n.unit.heading>.caption>.tag {\n    display: none;\n}\n\n/* proof */\n.unit.proof {\n    margin: var(--length-gap) 0;\n}\n\n.unit.proof>.caption>.tag,\n.unit.proof>.caption>.mark {\n    font-weight: bold;\n    font-style: italic;\n}\n\n.unit.proof>.content>div:last-child>.qed {\n    float: right;\n}\n\n/* theorem */\n.unit.theorem {\n    border-left: var(--color-variable) solid 1px;\n    background-color: var(--color-pre);\n    margin: var(--length-gap) 0;\n    padding: var(--length-gap);\n    padding-left: var(--length-padding);\n    display: table;\n    box-sizing: border-box;\n    width: 100%;\n}\n\n.unit.definition {\n    border-left-color: var(--color-string);\n}\n\n.unit.remark {\n    border-left-color: var(--color-comment);\n}\n\n.unit.theorem>.caption>.tag,\n.unit.theorem>.caption>.mark {\n    font-weight: bold;\n}\n\n.unit.remark>.caption>.tag,\n.unit.remark>.caption>.mark {\n    font-style: italic;\n}\n\n.unit.theorem:not(.definition):not(.remark)>.content {\n    font-style: italic;\n}\n\n/* title */\n.unit.title {\n    text-align: center;\n    font-size: var(--length-font-title);\n    margin: var(--length-padding) 0;\n}\n\n/* warn */\n.unit.warn {\n    color: var(--color-warn);\n    text-align: center;\n}";
export declare const all: string;
