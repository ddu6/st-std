var e={494:(e,t,n)=>{n.d(t,{DT:()=>r,ru:()=>a,yZ:()=>s});const o=["download","href","hreflang","ping","referrerpolicy","rel","target","type"];function r(e){for(const t of e.querySelectorAll("a")){const e=document.createElement("span");for(const{name:n,value:r}of t.attributes)if(!o.includes(n))try{e.setAttribute(n,r)}catch(e){console.log(e)}for(const n of t.childNodes)e.append(n);t.replaceWith(e)}return e}function a(e){return"heading"===e?"section":"equation"===e?"eq":e}function s(e){const t=Number(getComputedStyle(e).fontSize.slice(0,-2));let n=1/t,o=1/t;const r=e.closest("foreignObject");if(null!==r){const{height:e,width:t}=r.getBoundingClientRect();n*=r.height.animVal.value/e,o*=r.width.animVal.value/t}return{heightScale:n,widthScale:o}}},707:(e,t,n)=>{n.d(t,{I:()=>o});const{getMod:o}=function(e){const t={},n=new EventTarget;for(const o in e)n.addEventListener(`load-${o}`,(async()=>{t[o]=await new Function(`return import(${JSON.stringify(e[o])})`)(),n.dispatchEvent(new Event(`loaded-${o}`))}),{once:!0});return{getMod:async function(e){const o=t[e];return void 0!==o?o:(n.dispatchEvent(new Event(`load-${e}`)),new Promise((o=>{n.addEventListener(`loaded-${e}`,(()=>{o(t[e])}))})))}}}({katex:"../katex@0.0.1/mod.js",sthl:"../sthl@0.31.8/mod.js"})},590:(e,t,n)=>{n.d(t,{gen:()=>r});var o=n(494);function r(e={}){return(t,n)=>{return r=this,a=void 0,i=function*(){var r;const a=n.context.unitToId.get(t);if(void 0===a)return n.createErrorElement("Error");const s=n.context.idToIndexInfo[a];if(void 0===s)return n.createErrorElement("Error");let i;const c=e.reverse?document.createElement("div"):document.createElement("span"),d=document.createElement("span"),p=document.createElement("span"),l=document.createElement("span"),u=document.createElement("span");c.classList.add("caption"),d.classList.add("content"),p.classList.add("tag"),l.classList.add("mark"),u.classList.add("desc");const g=n.context.extractLastGlobalOption("tag",t.tag);p.textContent=(0,o.ru)("string"==typeof g?g:t.tag);const m=!0===(null!==(r=t.options.block)&&void 0!==r?r:n.context.extractLastGlobalOption("block",t.tag));m||!e.inline?(i=document.createElement("div"),d.append(yield n.compileSTDN(t.children))):(i=document.createElement("span"),d.append(yield n.compileInlineSTDN(t.children))),!m&&e.noCapitalize||i.classList.add("capitalize-tag"),e.noTag&&i.classList.add("no-tag"),e.reverse?(i.append(d),i.append(c)):(i.append(c),i.append(d)),c.append(p),c.append(l),c.append(u);const{mark:f,desc:y}=t.options;return"object"==typeof f?l.append(yield n.compileUnit(f)):l.textContent="string"==typeof f?f:"number"==typeof f?f.toString():s.index.join("."),"object"==typeof y?u.append(yield n.compileUnit(y)):"string"==typeof y?u.textContent=y:"number"==typeof y&&(u.textContent=y.toString()),e.theorem&&(i.classList.add("theorem"),void 0!==e.style&&i.classList.add(e.style)),i},new((s=void 0)||(s=Promise))((function(e,t){function n(e){try{c(i.next(e))}catch(e){t(e)}}function o(e){try{c(i.throw(e))}catch(e){t(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof s?r:new s((function(e){e(r)}))).then(n,o)}c((i=i.apply(r,a||[])).next())}));var r,a,s,i}}},936:(e,t,n)=>{n.d(t,{gen:()=>p});var o=n(707),r=n(494),a=n(437),s=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function s(e){try{c(o.next(e))}catch(e){a(e)}}function i(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}c((o=o.apply(e,t||[])).next())}))};function i(e){const t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div");return t.style.display="inline-block",n.style.display="inline-block",o.style.display="inline-block",t.append(n),t.append(o),o.append(e),{element:t,baselineBlock:n,container:o}}function c(e,t,n){const{height:o,top:r,width:a}=e.container.getBoundingClientRect(),s=o*t,i=a*n,{top:c}=e.baselineBlock.getBoundingClientRect(),d=Math.min(s,(c-r)*t);return{height:s,width:i,top:d,bottom:s-d}}const d=new Map;function p(e={}){return(t,n)=>s(this,void 0,void 0,(function*(){const p=document.createElement("span"),l=[],u=[];let g=d.get(n);if(void 0===g&&d.set(n,g=n.base.stdnToPlainString(n.context.extractGlobalChildren("katex"))),g.length>0&&l.push(`${g}{}`),!e.noEnv){const n=e.addStar?`${t.tag}*`:t.tag;l.push(`\\begin{${n}}`),u.push(`\\end{${n}}`)}const m=[],f=[];for(const e of t.children){for(const t of e)"string"!=typeof t?(f.push(l.length),l.push(`{\\htmlClass{unit-container}{\\htmlClass{tmpPlaceholder${m.length}}{}}}`),m.push(i(yield n.compileUnit(t)))):l.push(t);l.push("\n")}l.push(...u);const y=e.display||!0===t.options.display;function v(){return s(this,void 0,void 0,(function*(){p.innerHTML=(yield(0,o.I)("katex")).default.renderToString(l.join(""),{displayMode:y,errorColor:"var(--color-warn)",output:"html",strict:!1,throwOnError:!1,trust:!0});for(let e=0;e<m.length;e++){const t=p.querySelector(`.tmpPlaceholder${e}`);null!==t&&t.replaceWith(m[e].element)}}))}return y&&p.classList.add("display"),yield v(),m.length>0&&(0,a.E)((()=>s(this,void 0,void 0,(function*(){for(let e=0;e<m.length;e++){const t=m[e],{heightScale:n,widthScale:o}=(0,r.yZ)(t.element);if(!isFinite(n)||!isFinite(o))continue;const{top:a,bottom:s}=c(t,n,o);l[f[e]]=`{\\raisebox{${a}em}{}\\raisebox{${-s}em}{}\\htmlClass{unit-container}{\\htmlClass{tmpPlaceholder${e}}{}}}`}return yield v(),!0}))),p,n.context.root),p}))}},437:(e,t,n)=>{n.d(t,{E:()=>s});var o=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function s(e){try{c(o.next(e))}catch(e){a(e)}}function i(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}c((o=o.apply(e,t||[])).next())}))},r=function(e){return this instanceof r?(this.v=e,this):new r(e)},a=function(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o,a=n.apply(e,t||[]),s=[];return o={},i("next"),i("throw"),i("return"),o[Symbol.asyncIterator]=function(){return this},o;function i(e){a[e]&&(o[e]=function(t){return new Promise((function(n,o){s.push([e,t,n,o])>1||c(e,t)}))})}function c(e,t){try{(n=a[e](t)).value instanceof r?Promise.resolve(n.value.v).then(d,p):l(s[0][2],n)}catch(e){l(s[0][3],e)}var n}function d(e){c("next",e)}function p(e){c("throw",e)}function l(e,t){e(t),s.shift(),s.length&&c(s[0][0],s[0][1])}};function s(e,t,n){let s=0;const i=function(){return a(this,arguments,(function*(){for(;;){for(;!(yield r(e()));)yield r(new Promise((e=>setTimeout(e,1e3))));t.dispatchEvent(new Event("adjust",{bubbles:!0,composed:!0})),s--,yield yield r(void 0)}}))}();!function(e,t,n){const r=new MutationObserver(c),a=window.setInterval(c,1e3);let s,i=!1;function c(){return o(this,void 0,void 0,(function*(){t.isConnected&&!i&&(i=!0,r.disconnect(),clearInterval(a),yield e())}))}s=void 0===n?document.body.querySelector(":scope>.lr-struct>main>article"):n instanceof ShadowRoot?n.querySelector(":host>div"):n,null===s&&(s=document.body),r.observe(s,{childList:!0,subtree:!0})}((()=>o(this,void 0,void 0,(function*(){t.addEventListener("adjust",(e=>o(this,void 0,void 0,(function*(){e.eventPhase===e.BUBBLING_PHASE&&(e.stopPropagation(),s<2&&(s++,yield i.next()))})))),s++,yield i.next()}))),t,n)}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o={};(()=>{n.d(o,{Bmatrix:()=>N,CD:()=>Z,Vmatrix:()=>J,align:()=>C,alignat:()=>T,aligned:()=>$,alignedat:()=>I,array:()=>q,arraystretch:()=>U,bmatrix:()=>z,cases:()=>D,code:()=>d,conjecture:()=>y,corollary:()=>v,darray:()=>R,dcases:()=>M,definition:()=>x,drcases:()=>O,equation:()=>g,example:()=>E,exercise:()=>S,figure:()=>u,gather:()=>P,heading:()=>m,index:()=>l,katex:()=>j,lemma:()=>h,matrix:()=>H,notation:()=>w,pmatrix:()=>A,proof:()=>Q,proposition:()=>b,qed:()=>K,rcases:()=>B,ref:()=>Y,remark:()=>k,smallmatrix:()=>F,split:()=>G,subarray:()=>V,theorem:()=>f,vmatrix:()=>W});const e=["/","(",")","[","]","{","}"];function t(t){const n=new DocumentFragment;for(const o of t)e.includes(o)?(n.append(document.createElement("wbr")),n.append(o),n.append(document.createElement("wbr"))):n.append(o);return n}function r(e,n){const o=(e=function(e){return e.replace(/\t/g,"    ")}(e)).split("\n"),r=new DocumentFragment;if(!n&&o.length<2){const n=document.createElement("span");return n.append(t(e)),r.append(n),r}for(const e of o){const n=document.createElement("div");if(r.append(n),0===e.length){n.textContent="\n";continue}const o=e.match(/^ */)[0];n.style.marginLeft=`${o.length}ch`,n.append(t(e.slice(o.length)));const a=document.createElement("span");a.style.display="inline-block",a.style.width="0",a.style.lineHeight="0",a.textContent=o,n.prepend(a)}return r}var a=n(707);const s={tokenColors:[{scope:["meta.embedded","source.groovy.embedded"],settings:{foreground:"inherit"}},{scope:"emphasis",settings:{fontStyle:"italic"}},{scope:"strong",settings:{fontStyle:"bold"}},{scope:"header",settings:{foreground:"var(--color-modifier)"}},{scope:"comment",settings:{foreground:"var(--color-comment)"}},{scope:"constant.language",settings:{foreground:"var(--color-modifier)"}},{scope:["constant.numeric","variable.other.enummember","keyword.operator.plus.exponent","keyword.operator.minus.exponent"],settings:{foreground:"var(--color-number)"}},{scope:"constant.regexp",settings:{foreground:"var(--color-string)"}},{scope:"entity.name.tag",settings:{foreground:"var(--color-modifier)"}},{scope:"entity.name.tag.css",settings:{foreground:"var(--color-function)"}},{scope:"entity.other.attribute-name",settings:{foreground:"var(--color-variable)"}},{scope:["entity.other.attribute-name.class.css","entity.other.attribute-name.class.mixin.css","entity.other.attribute-name.id.css","entity.other.attribute-name.parent-selector.css","entity.other.attribute-name.pseudo-class.css","entity.other.attribute-name.pseudo-element.css","source.css.less entity.other.attribute-name.id","entity.other.attribute-name.scss"],settings:{foreground:"var(--color-function)"}},{scope:"invalid",settings:{foreground:"var(--color-warn)"}},{scope:"markup.underline",settings:{fontStyle:"underline"}},{scope:"markup.bold",settings:{fontStyle:"bold",foreground:"var(--color-modifier)"}},{scope:"markup.heading",settings:{fontStyle:"bold",foreground:"var(--color-modifier)"}},{scope:"markup.italic",settings:{fontStyle:"italic"}},{scope:"markup.inserted",settings:{foreground:"var(--color-number)"}},{scope:"markup.deleted",settings:{foreground:"var(--color-string)"}},{scope:"markup.changed",settings:{foreground:"var(--color-modifier)"}},{scope:"punctuation.definition.quote.begin.markdown",settings:{foreground:"var(--color-comment)"}},{scope:"punctuation.definition.list.begin.markdown",settings:{foreground:"var(--color-modifier)"}},{scope:"markup.inline.raw",settings:{foreground:"var(--color-string)"}},{name:"brackets of XML/HTML tags",scope:"punctuation.definition.tag",settings:{foreground:"var(--color-light)"}},{scope:["meta.preprocessor","entity.name.function.preprocessor"],settings:{foreground:"var(--color-modifier)"}},{scope:"meta.preprocessor.string",settings:{foreground:"var(--color-string)"}},{scope:"meta.preprocessor.numeric",settings:{foreground:"var(--color-number)"}},{scope:"meta.structure.dictionary.key.python",settings:{foreground:"var(--color-variable)"}},{scope:"meta.diff.header",settings:{foreground:"var(--color-modifier)"}},{scope:"storage",settings:{foreground:"var(--color-modifier)"}},{scope:"storage.type",settings:{foreground:"var(--color-modifier)"}},{scope:["storage.modifier","keyword.operator.noexcept"],settings:{foreground:"var(--color-modifier)"}},{scope:["string","meta.embedded.assembly"],settings:{foreground:"var(--color-string)"}},{scope:"string.tag",settings:{foreground:"var(--color-string)"}},{scope:"string.value",settings:{foreground:"var(--color-string)"}},{scope:"string.regexp",settings:{foreground:"var(--color-string)"}},{name:"String interpolation",scope:["punctuation.definition.template-expression.begin","punctuation.definition.template-expression.end","punctuation.section.embedded"],settings:{foreground:"var(--color-modifier)"}},{name:"Reset JavaScript string interpolation expression",scope:["meta.template.expression"],settings:{foreground:"inherit"}},{scope:["support.type.vendored.property-name","support.type.property-name","variable.css","variable.scss","variable.other.less","source.coffee.embedded"],settings:{foreground:"var(--color-variable)"}},{scope:"keyword",settings:{foreground:"var(--color-modifier)"}},{scope:"keyword.control",settings:{foreground:"var(--color-modifier)"}},{scope:"keyword.operator",settings:{foreground:"inherit"}},{scope:["keyword.operator.new","keyword.operator.expression","keyword.operator.cast","keyword.operator.sizeof","keyword.operator.alignof","keyword.operator.typeid","keyword.operator.alignas","keyword.operator.instanceof","keyword.operator.logical.python","keyword.operator.wordlike"],settings:{foreground:"var(--color-modifier)"}},{scope:"keyword.other.unit",settings:{foreground:"var(--color-number)"}},{scope:["punctuation.section.embedded.begin.php","punctuation.section.embedded.end.php"],settings:{foreground:"var(--color-modifier)"}},{scope:"support.function.git-rebase",settings:{foreground:"var(--color-variable)"}},{scope:"constant.sha.git-rebase",settings:{foreground:"var(--color-number)"}},{name:"coloring of the Java import and package identifiers",scope:["storage.modifier.import.java","variable.language.wildcard.java","storage.modifier.package.java"],settings:{foreground:"inherit"}},{name:"this.self",scope:"variable.language",settings:{foreground:"var(--color-modifier)"}},{name:"Function declarations",scope:["entity.name.function","support.function","support.constant.handlebars","source.powershell variable.other.member","entity.name.operator.custom-literal"],settings:{foreground:"var(--color-function)"}},{name:"Types declaration and references",scope:["meta.return-type","support.class","support.type","entity.name.type","entity.name.namespace","entity.other.attribute","entity.name.scope-resolution","entity.name.class","storage.type.numeric.go","storage.type.byte.go","storage.type.boolean.go","storage.type.string.go","storage.type.uintptr.go","storage.type.error.go","storage.type.rune.go","storage.type.cs","storage.type.generic.cs","storage.type.modifier.cs","storage.type.variable.cs","storage.type.annotation.java","storage.type.generic.java","storage.type.java","storage.type.object.array.java","storage.type.primitive.array.java","storage.type.primitive.java","storage.type.token.java","storage.type.groovy","storage.type.annotation.groovy","storage.type.parameters.groovy","storage.type.generic.groovy","storage.type.object.array.groovy","storage.type.primitive.array.groovy","storage.type.primitive.groovy"],settings:{foreground:"var(--color-class)"}},{name:"Types declaration and references, TS grammar specific",scope:["meta.type.cast.expr","meta.type.new.expr","support.constant.math","support.constant.dom","support.constant.json","entity.other.inherited-class"],settings:{foreground:"var(--color-class)"}},{name:"Control flow / Special keywords",scope:["keyword.control","source.cpp keyword.operator.new","keyword.operator.delete","keyword.other.using","keyword.other.operator","entity.name.operator"],settings:{foreground:"var(--color-keyword)"}},{name:"Variable and parameter name",scope:["variable","meta.definition.variable.name","support.variable","entity.name.variable","constant.other.placeholder"],settings:{foreground:"var(--color-variable)"}},{name:"Constants and enums",scope:["variable.other.constant","variable.other.enummember"],settings:{foreground:"var(--color-variable)"}},{name:"Object keys, TS grammar specific",scope:["meta.object-literal.key"],settings:{foreground:"var(--color-variable)"}},{name:"CSS property value",scope:["support.constant.property-value","support.constant.font-name","support.constant.media-type","support.constant.media","constant.other.color.rgb-value","constant.other.rgb-value","support.constant.color"],settings:{foreground:"var(--color-string)"}},{name:"Regular expression groups",scope:["punctuation.definition.group.regexp","punctuation.definition.group.assertion.regexp","punctuation.definition.character-class.regexp","punctuation.character.set.begin.regexp","punctuation.character.set.end.regexp","keyword.operator.negation.regexp","support.other.parenthesis.regexp"],settings:{foreground:"var(--color-function)"}},{scope:["constant.character.character-class.regexp","constant.other.character-class.set.regexp","constant.other.character-class.regexp","constant.character.set.regexp"],settings:{foreground:"var(--color-string)"}},{scope:["keyword.operator.or.regexp","keyword.control.anchor.regexp"],settings:{foreground:"var(--color-function)"}},{scope:"keyword.operator.quantifier.regexp",settings:{foreground:"var(--color-function)"}},{scope:"constant.character",settings:{foreground:"var(--color-modifier)"}},{scope:"constant.character.escape",settings:{foreground:"var(--color-function)"}},{scope:"entity.name.label",settings:{foreground:"var(--color-light)"}}]};var i=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function s(e){try{c(o.next(e))}catch(e){a(e)}}function i(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}c((o=o.apply(e,t||[])).next())}))};const c=new Map,d=(e,t)=>i(void 0,void 0,void 0,(function*(){const n=!0===e.options.block;let o=t.base.unitToPlainString(e);const d=function(e,t){const n=t||e.includes("\n")?document.createElement("pre"):document.createElement("code");return n.append(r(e,t)),n}(o,n);let{lang:p}=e.options;const{src:l}=e.options;if("string"!=typeof p&&"string"==typeof l){const e=l.match(/\.([\w-]+)$/);null!==e&&(p=e[1])}return i(void 0,void 0,void 0,(function*(){if("string"==typeof l){const a=yield fetch(t.context.urlToAbsURL(l,e));if(a.ok){const e=r(o=yield a.text(),n);d.innerHTML="",d.append(e),d.dispatchEvent(new Event("adjust",{bubbles:!0,composed:!0}))}}if("string"==typeof p){const e=yield(yield function(e){return i(this,void 0,void 0,(function*(){const{extractLangInfoArrayFromVSCEURLs:t,extractThemeFromVSCT:n,extractThemeFromVSCTURLs:o,Highlighter:r}=yield(0,a.I)("sthl");let i=c.get(e);if(i instanceof r)return i;if(void 0!==i){const t=i;return new Promise((n=>{t.addEventListener("loaded",(()=>{n(c.get(e))}))}))}const d=new EventTarget;c.set(e,d);const p=yield t(["css","html","json","markdown-basics"].concat(e.context.extractGlobalStrings("vsce","code")).map((e=>`${e}/package.json`)),"https://cdn.jsdelivr.net/gh/microsoft/vscode/extensions/");p.push(...yield t(["st-org/st-lang","microsoft/vscode-typescript-next"].concat(e.context.extractGlobalStrings("vsce-gh","code")).map((e=>`${e}/package.json`)),"https://cdn.jsdelivr.net/gh/")),p.push(...yield t(yield e.context.extractGlobalURLs("vsce-src","code"),"a:b")),p.push({name:"markdown",alias:["md"]},{name:"javascript",alias:["js"]},{name:"typescript",alias:["ts"]});const l=n(s);return l.push(...yield o(yield e.context.extractGlobalURLs("vsct-src","code"),"a:b")),c.set(e,i=new r(p,l)),d.dispatchEvent(new Event("loaded")),i}))}(t)).highlightToDocumentFragment(o,p,n);d.innerHTML="",d.append(e)}})).catch(console.log),d}));var p=n(590);const l=(0,p.gen)({inline:!0,noCapitalize:!0}),u=(0,p.gen)({reverse:!0}),g=(0,p.gen)({reverse:!0,noCapitalize:!0}),m=(0,p.gen)({noTag:!0}),f=(0,p.gen)({theorem:!0}),y=f,v=f,h=f,b=f,x=(0,p.gen)({theorem:!0,style:"definition"}),w=x,k=(0,p.gen)({theorem:!0,style:"remark"}),E=k,S=k;var L=n(936);const j=(0,L.gen)({noEnv:!0}),C=(0,L.gen)({addStar:!0,display:!0}),T=C,P=C,$=(0,L.gen)(),I=$,q=$,U=$,D=$,R=$,M=$,O=$,B=$,F=$,G=$,V=$,N=(0,L.gen)({addStar:!0}),z=N,H=N,A=N,J=N,W=N,Z=(0,L.gen)({display:!0});var X=n(494),_=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function s(e){try{c(o.next(e))}catch(e){a(e)}}function i(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}c((o=o.apply(e,t||[])).next())}))};const K=(e,t)=>_(void 0,void 0,void 0,(function*(){return yield t.compileUnit({tag:"katex",options:{class:"qed"},children:["\\square".split("")]})})),Q=(e,t)=>_(void 0,void 0,void 0,(function*(){const n=document.createElement("div"),o=document.createElement("span"),r=document.createElement("span"),a=document.createElement("span"),s=document.createElement("span"),i=document.createElement("span");n.classList.add("capitalize-tag"),o.classList.add("caption"),r.classList.add("content"),a.classList.add("tag"),s.classList.add("mark"),i.classList.add("desc");const c=t.context.extractLastGlobalOption("tag",e.tag);a.textContent=(0,X.ru)("string"==typeof c?c:e.tag),n.append(o),n.append(r),o.append(a),o.append(s),o.append(i),r.append(yield t.compileSTDN(e.children));const{mark:d,desc:p}=e.options;"object"==typeof d?s.append(yield t.compileUnit(d)):"string"==typeof d?s.textContent=d:"number"==typeof d&&(s.textContent=d.toString()),"object"==typeof p?i.append(yield t.compileUnit(p)):"string"==typeof p?i.textContent=p:"number"==typeof p&&(i.textContent=p.toString());const l=yield K(e,t);if(0===r.children.length){const e=document.createElement("div");e.classList.add("st-line"),r.append(e),e.append(l)}else r.children[r.children.length-1].append(l);return n}));const Y=(e,t)=>{return n=void 0,o=void 0,a=function*(){const n=e.options["ref-id"];if("string"!=typeof n||0===n.length)return t.createErrorElement("Ref id required");const o=t.context.idToIndexInfo[n];if(void 0===o)return t.createErrorElement("?");const r=document.createElement("span"),a=document.createElement("span"),s=document.createElement("span"),i=document.createElement("a"),c=document.createElement("span");a.classList.add("caption"),s.classList.add("tag"),i.classList.add("mark"),i.href=`#${encodeURIComponent(n)}`,c.classList.add("desc");const d=t.context.extractLastGlobalOption("tag",o.unit.tag);if(s.textContent=(0,X.ru)("string"==typeof d?d:o.unit.tag),r.append(a),a.append(s),a.append(i),a.append(c),e.children.length>0)i.append((0,X.DT)(yield t.compileInlineSTDN(e.children)));else{const{mark:e}=o.unit.options;if("object"==typeof e){const n=new DocumentFragment;n.append(yield t.compileUnit(e)),i.append((0,X.DT)(n))}else i.textContent="string"==typeof e?e:"number"==typeof e?e.toString():o.index.join(".")}const{desc:p}=e.options;return"object"==typeof p?c.append(yield t.compileUnit(p)):"string"==typeof p?c.textContent=p:"number"==typeof p&&(c.textContent=p.toString()),r},new((r=void 0)||(r=Promise))((function(e,t){function s(e){try{c(a.next(e))}catch(e){t(e)}}function i(e){try{c(a.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(s,i)}c((a=a.apply(n,o||[])).next())}));var n,o,r,a}})();var r=o.Bmatrix,a=o.CD,s=o.Vmatrix,i=o.align,c=o.alignat,d=o.aligned,p=o.alignedat,l=o.array,u=o.arraystretch,g=o.bmatrix,m=o.cases,f=o.code,y=o.conjecture,v=o.corollary,h=o.darray,b=o.dcases,x=o.definition,w=o.drcases,k=o.equation,E=o.example,S=o.exercise,L=o.figure,j=o.gather,C=o.heading,T=o.index,P=o.katex,$=o.lemma,I=o.matrix,q=o.notation,U=o.pmatrix,D=o.proof,R=o.proposition,M=o.qed,O=o.rcases,B=o.ref,F=o.remark,G=o.smallmatrix,V=o.split,N=o.subarray,z=o.theorem,H=o.vmatrix;export{r as Bmatrix,a as CD,s as Vmatrix,i as align,c as alignat,d as aligned,p as alignedat,l as array,u as arraystretch,g as bmatrix,m as cases,f as code,y as conjecture,v as corollary,h as darray,b as dcases,x as definition,w as drcases,k as equation,E as example,S as exercise,L as figure,j as gather,C as heading,T as index,P as katex,$ as lemma,I as matrix,q as notation,U as pmatrix,D as proof,R as proposition,M as qed,O as rcases,B as ref,F as remark,G as smallmatrix,V as split,N as subarray,z as theorem,H as vmatrix};