import { stdnToPlainString } from '@ddu6/stc';
import hljs from 'highlight.js';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-basic';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cmake';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-dart';
import 'prismjs/components/prism-git';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-haskell';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-kotlin';
import 'prismjs/components/prism-latex';
import 'prismjs/components/prism-lisp';
import 'prismjs/components/prism-lua';
import 'prismjs/components/prism-makefile';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-matlab';
import 'prismjs/components/prism-nginx';
import 'prismjs/components/prism-objectivec';
import 'prismjs/components/prism-pascal';
import 'prismjs/components/prism-perl';
import 'prismjs/components/prism-powershell';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-r';
import 'prismjs/components/prism-regex';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-swift';
import 'prismjs/components/prism-toml';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-verilog';
import 'prismjs/components/prism-wasm';
import 'prismjs/components/prism-wiki';
import 'prismjs/components/prism-xml-doc';
import 'prismjs/components/prism-yaml';
import { textToHTML } from './common';
function addWordBreak(html) {
    return html.replace(/([^<]\/+|[(){}\[\]])/g, '$1<wbr>');
}
function highlight(code, lang) {
    let html;
    if (lang === 'auto') {
        html = hljs.highlightAuto(code).value;
    }
    else {
        const grammar = Prism.languages[lang];
        if (lang && grammar) {
            html = Prism.highlight(code, grammar, lang);
        }
        else if (hljs.getLanguage(lang) !== undefined) {
            html = hljs.highlight(code, { language: lang, ignoreIllegals: true }).value;
        }
        else {
            html = textToHTML(code);
        }
    }
    return addWordBreak(html);
}
export const code = async (unit, compiler) => {
    const element = document.createElement('code');
    let { lang } = unit.options;
    if (typeof lang !== 'string' || lang === '') {
        lang = 'auto';
    }
    try {
        element.classList.add('lang-' + lang);
    }
    catch (err) {
        console.log(err);
    }
    const html = highlight(stdnToPlainString(unit.children), lang);
    if (html.indexOf('\n') === -1) {
        element.classList.add('line');
        element.innerHTML = html;
    }
    else {
        element.classList.add('block');
        element.classList.add('pre');
        element.innerHTML = html.split('\n').map(val => val.replace(/(^[ ]*)/, '<div class="line"><span>$1</span><div class="content">') + '</div></div>').join('');
    }
    return element;
};
