var e={494:(e,t,o)=>{o.d(t,{DT:()=>r,ru:()=>a,yZ:()=>s});const n=["download","href","hreflang","ping","referrerpolicy","rel","target","type"];function r(e){for(const t of e.querySelectorAll("a")){const e=document.createElement("span");for(const{name:o,value:r}of t.attributes)if(!n.includes(o))try{e.setAttribute(o,r)}catch(e){console.log(e)}for(const o of t.childNodes)e.append(o);t.replaceWith(e)}return e}function a(e){return"heading"===e?"section":"equation"===e?"eq":e}function s(e){const t=Number(getComputedStyle(e).fontSize.slice(0,-2));let o=1/t,n=1/t;const r=e.closest("foreignObject");if(null!==r){const{height:e,width:t}=r.getBoundingClientRect();o*=r.height.animVal.value/e,n*=r.width.animVal.value/t}return{heightScale:o,widthScale:n}}},707:(e,t,o)=>{o.d(t,{I:()=>n});const{getMod:n}=function(e){const t={},o=new EventTarget;for(const n of Object.keys(e))o.addEventListener(`load-${n}`,(async()=>{t[n]=await new Function(`return import(${JSON.stringify(e[n])})`)(),o.dispatchEvent(new Event(`loaded-${n}`))}),{once:!0});return{getMod:async function(e){const n=t[e];return void 0!==n?n:(o.dispatchEvent(new Event(`load-${e}`)),new Promise((n=>{o.addEventListener(`loaded-${e}`,(()=>{n(t[e])}))})))}}}({katex:"https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.mjs",sthl:"https://cdn.jsdelivr.net/gh/st-org/sthl@0.13.2/mod.js"})},590:(e,t,o)=>{o.d(t,{gen:()=>r});var n=o(494);function r(e={}){return async(t,o)=>{const r=o.context.unitToId.get(t);if(void 0===r)return o.createErrorElement("Error");const a=o.context.idToIndexInfo[r];if(void 0===a)return o.createErrorElement("Error");let s;const i=e.reverse?document.createElement("div"):document.createElement("span"),c=document.createElement("span"),p=document.createElement("span"),l=document.createElement("span"),d=document.createElement("span");i.classList.add("caption"),c.classList.add("content"),p.classList.add("tag"),l.classList.add("mark"),d.classList.add("desc");const g=o.extractor.extractLastGlobalOption("tag",t.tag,o.context.tagToGlobalOptions);p.textContent=(0,n.ru)("string"==typeof g?g:t.tag);const u=!0===(t.options.block??o.extractor.extractLastGlobalOption("block",t.tag,o.context.tagToGlobalOptions));u||!e.inline?(s=document.createElement("div"),c.append(await o.compileSTDN(t.children))):(s=document.createElement("span"),c.append(await o.compileInlineSTDN(t.children))),!u&&e.noCapitalize||s.classList.add("capitalize-tag"),e.noTag&&s.classList.add("no-tag"),e.reverse?(s.append(c),s.append(i)):(s.append(i),s.append(c)),i.append(p),i.append(l),i.append(d);const{mark:m,desc:f}=t.options;return Array.isArray(m)?l.append(await o.compileInlineSTDN(m)):l.textContent="string"==typeof m?m:"number"==typeof m?m.toString():a.index.join("."),Array.isArray(f)?d.append(await o.compileInlineSTDN(f)):"string"==typeof f?d.textContent=f:"number"==typeof f&&(d.textContent=f.toString()),e.theorem&&(s.classList.add("theorem"),void 0!==e.style&&s.classList.add(e.style)),s}}},936:(e,t,o)=>{o.d(t,{gen:()=>p});var n=o(707),r=o(494),a=o(437);function s(e){const t=document.createElement("div"),o=document.createElement("div"),n=document.createElement("div");return t.style.display="inline-block",o.style.display="inline-block",n.style.display="inline-block",t.append(o),t.append(n),n.append(e),{element:t,baselineBlock:o,container:n}}function i(e,t,o){const{height:n,top:r,width:a}=e.container.getBoundingClientRect(),s=n*t,i=a*o,{top:c}=e.baselineBlock.getBoundingClientRect(),p=Math.min(s,(c-r)*t);return{height:s,width:i,top:p,bottom:s-p}}const c=new Map;function p(e={}){return async(t,o)=>{const p=document.createElement("span"),l=[],d=[];let g=c.get(o);if(void 0===g&&c.set(o,g=o.base.stdnToPlainString(o.extractor.extractGlobalChildren("katex",o.context.tagToGlobalOptions))),g.length>0&&l.push(`${g}{}`),!e.noEnv){const o=e.addStar?`${t.tag}*`:t.tag;l.push(`\\begin{${o}}`),d.push(`\\end{${o}}`)}const u=[],m=[];for(const e of t.children){for(const t of e)"string"!=typeof t?(m.push(l.length),l.push(`{\\htmlClass{unit-container}{\\htmlClass{tmpPlaceholder${u.length}}{}}}`),u.push(s(await o.compileUnit(t)))):l.push(t);l.push("\n")}l.push(...d);const f=e.display||!0===t.options.display;async function y(){p.innerHTML=(await(0,n.I)("katex")).default.renderToString(l.join(""),{displayMode:f,errorColor:"var(--color-warn)",output:"html",strict:!1,throwOnError:!1,trust:!0});for(let e=0;e<u.length;e++){const t=p.querySelector(`.tmpPlaceholder${e}`);null!==t&&t.replaceWith(u[e].element)}}return f&&p.classList.add("display"),await y(),u.length>0&&(0,a.E)((async()=>{for(let e=0;e<u.length;e++){const t=u[e],{heightScale:o,widthScale:n}=(0,r.yZ)(t.element);if(!isFinite(o)||!isFinite(n))continue;const{top:a,bottom:s}=i(t,o,n);l[m[e]]=`{\\raisebox{${a}em}{}\\raisebox{${-s}em}{}\\htmlClass{unit-container}{\\htmlClass{tmpPlaceholder${e}}{}}}`}return await y(),!0}),p,o.context.root),p}}},437:(e,t,o)=>{function n(e,t,o){let n=0;const r=async function*(){for(;;){for(;!await e();)await new Promise((e=>setTimeout(e,1e3)));t.dispatchEvent(new Event("adjust",{bubbles:!0,composed:!0})),n--,yield}}();!function(e,t,o){const n=new MutationObserver(i),r=window.setInterval(i,1e3);let a,s=!1;async function i(){t.isConnected&&!s&&(s=!0,n.disconnect(),clearInterval(r),await e())}a=void 0===o?document.body.querySelector(":scope>.lr-struct>main>article"):o instanceof ShadowRoot?o.querySelector(":host>div"):o,null===a&&(a=document.body),n.observe(a,{childList:!0,subtree:!0})}((async()=>{t.addEventListener("adjust",(async e=>{e.eventPhase===e.BUBBLING_PHASE&&(e.stopPropagation(),n<2&&(n++,await r.next()))})),n++,await r.next()}),t,o)}o.d(t,{E:()=>n})}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var n={};(()=>{o.d(n,{Bmatrix:()=>F,CD:()=>W,Vmatrix:()=>H,align:()=>L,alignat:()=>C,aligned:()=>O,alignedat:()=>I,array:()=>D,arraystretch:()=>G,bmatrix:()=>U,cases:()=>$,code:()=>c,conjecture:()=>f,corollary:()=>y,darray:()=>q,dcases:()=>A,definition:()=>b,drcases:()=>N,equation:()=>g,example:()=>k,exercise:()=>E,figure:()=>d,gather:()=>j,heading:()=>u,index:()=>l,katex:()=>T,lemma:()=>h,matrix:()=>V,notation:()=>x,pmatrix:()=>z,proof:()=>_,proposition:()=>v,qed:()=>X,rcases:()=>P,ref:()=>K,remark:()=>w,smallmatrix:()=>R,split:()=>M,subarray:()=>B,theorem:()=>m,vmatrix:()=>J});const e=["/","(",")","[","]","{","}"];function t(t){const o=new DocumentFragment;for(const n of t)e.includes(n)?(o.append(document.createElement("wbr")),o.append(n),o.append(document.createElement("wbr"))):o.append(n);return o}function r(e,o){const n=(e=function(e){return e.replace(/\t/g,"    ")}(e)).split("\n"),r=new DocumentFragment;if(!o&&n.length<2){const o=document.createElement("span");return o.append(t(e)),r.append(o),r}for(const e of n){const o=document.createElement("div");if(r.append(o),0===e.length){o.textContent="\n";continue}const n=e.match(/^ */)[0];o.style.marginLeft=`${n.length}ch`,o.append(t(e.slice(n.length)));const a=document.createElement("span");a.style.display="inline-block",a.style.width="0",a.style.lineHeight="0",a.textContent=n,o.prepend(a)}return r}var a=o(707);const s={tokenColors:[{scope:["meta.embedded","source.groovy.embedded"],settings:{foreground:"inherit"}},{scope:"emphasis",settings:{fontStyle:"italic"}},{scope:"strong",settings:{fontStyle:"bold"}},{scope:"header",settings:{foreground:"var(--color-modifier)"}},{scope:"comment",settings:{foreground:"var(--color-comment)"}},{scope:"constant.language",settings:{foreground:"var(--color-modifier)"}},{scope:["constant.numeric","variable.other.enummember","keyword.operator.plus.exponent","keyword.operator.minus.exponent"],settings:{foreground:"var(--color-number)"}},{scope:"constant.regexp",settings:{foreground:"var(--color-string)"}},{scope:"entity.name.tag",settings:{foreground:"var(--color-modifier)"}},{scope:"entity.name.tag.css",settings:{foreground:"var(--color-function)"}},{scope:"entity.other.attribute-name",settings:{foreground:"var(--color-variable)"}},{scope:["entity.other.attribute-name.class.css","entity.other.attribute-name.class.mixin.css","entity.other.attribute-name.id.css","entity.other.attribute-name.parent-selector.css","entity.other.attribute-name.pseudo-class.css","entity.other.attribute-name.pseudo-element.css","source.css.less entity.other.attribute-name.id","entity.other.attribute-name.scss"],settings:{foreground:"var(--color-function)"}},{scope:"invalid",settings:{foreground:"var(--color-warn)"}},{scope:"markup.underline",settings:{fontStyle:"underline"}},{scope:"markup.bold",settings:{fontStyle:"bold",foreground:"var(--color-modifier)"}},{scope:"markup.heading",settings:{fontStyle:"bold",foreground:"var(--color-modifier)"}},{scope:"markup.italic",settings:{fontStyle:"italic"}},{scope:"markup.inserted",settings:{foreground:"var(--color-number)"}},{scope:"markup.deleted",settings:{foreground:"var(--color-string)"}},{scope:"markup.changed",settings:{foreground:"var(--color-modifier)"}},{scope:"punctuation.definition.quote.begin.markdown",settings:{foreground:"var(--color-comment)"}},{scope:"punctuation.definition.list.begin.markdown",settings:{foreground:"var(--color-modifier)"}},{scope:"markup.inline.raw",settings:{foreground:"var(--color-string)"}},{name:"brackets of XML/HTML tags",scope:"punctuation.definition.tag",settings:{foreground:"var(--color-light)"}},{scope:["meta.preprocessor","entity.name.function.preprocessor"],settings:{foreground:"var(--color-modifier)"}},{scope:"meta.preprocessor.string",settings:{foreground:"var(--color-string)"}},{scope:"meta.preprocessor.numeric",settings:{foreground:"var(--color-number)"}},{scope:"meta.structure.dictionary.key.python",settings:{foreground:"var(--color-variable)"}},{scope:"meta.diff.header",settings:{foreground:"var(--color-modifier)"}},{scope:"storage",settings:{foreground:"var(--color-modifier)"}},{scope:"storage.type",settings:{foreground:"var(--color-modifier)"}},{scope:["storage.modifier","keyword.operator.noexcept"],settings:{foreground:"var(--color-modifier)"}},{scope:["string","meta.embedded.assembly"],settings:{foreground:"var(--color-string)"}},{scope:"string.tag",settings:{foreground:"var(--color-string)"}},{scope:"string.value",settings:{foreground:"var(--color-string)"}},{scope:"string.regexp",settings:{foreground:"var(--color-string)"}},{name:"String interpolation",scope:["punctuation.definition.template-expression.begin","punctuation.definition.template-expression.end","punctuation.section.embedded"],settings:{foreground:"var(--color-modifier)"}},{name:"Reset JavaScript string interpolation expression",scope:["meta.template.expression"],settings:{foreground:"inherit"}},{scope:["support.type.vendored.property-name","support.type.property-name","variable.css","variable.scss","variable.other.less","source.coffee.embedded"],settings:{foreground:"var(--color-variable)"}},{scope:"keyword",settings:{foreground:"var(--color-modifier)"}},{scope:"keyword.control",settings:{foreground:"var(--color-modifier)"}},{scope:"keyword.operator",settings:{foreground:"inherit"}},{scope:["keyword.operator.new","keyword.operator.expression","keyword.operator.cast","keyword.operator.sizeof","keyword.operator.alignof","keyword.operator.typeid","keyword.operator.alignas","keyword.operator.instanceof","keyword.operator.logical.python","keyword.operator.wordlike"],settings:{foreground:"var(--color-modifier)"}},{scope:"keyword.other.unit",settings:{foreground:"var(--color-number)"}},{scope:["punctuation.section.embedded.begin.php","punctuation.section.embedded.end.php"],settings:{foreground:"var(--color-modifier)"}},{scope:"support.function.git-rebase",settings:{foreground:"var(--color-variable)"}},{scope:"constant.sha.git-rebase",settings:{foreground:"var(--color-number)"}},{name:"coloring of the Java import and package identifiers",scope:["storage.modifier.import.java","variable.language.wildcard.java","storage.modifier.package.java"],settings:{foreground:"inherit"}},{name:"this.self",scope:"variable.language",settings:{foreground:"var(--color-modifier)"}},{name:"Function declarations",scope:["entity.name.function","support.function","support.constant.handlebars","source.powershell variable.other.member","entity.name.operator.custom-literal"],settings:{foreground:"var(--color-function)"}},{name:"Types declaration and references",scope:["meta.return-type","support.class","support.type","entity.name.type","entity.name.namespace","entity.other.attribute","entity.name.scope-resolution","entity.name.class","storage.type.numeric.go","storage.type.byte.go","storage.type.boolean.go","storage.type.string.go","storage.type.uintptr.go","storage.type.error.go","storage.type.rune.go","storage.type.cs","storage.type.generic.cs","storage.type.modifier.cs","storage.type.variable.cs","storage.type.annotation.java","storage.type.generic.java","storage.type.java","storage.type.object.array.java","storage.type.primitive.array.java","storage.type.primitive.java","storage.type.token.java","storage.type.groovy","storage.type.annotation.groovy","storage.type.parameters.groovy","storage.type.generic.groovy","storage.type.object.array.groovy","storage.type.primitive.array.groovy","storage.type.primitive.groovy"],settings:{foreground:"var(--color-class)"}},{name:"Types declaration and references, TS grammar specific",scope:["meta.type.cast.expr","meta.type.new.expr","support.constant.math","support.constant.dom","support.constant.json","entity.other.inherited-class"],settings:{foreground:"var(--color-class)"}},{name:"Control flow / Special keywords",scope:["keyword.control","source.cpp keyword.operator.new","keyword.operator.delete","keyword.other.using","keyword.other.operator","entity.name.operator"],settings:{foreground:"var(--color-keyword)"}},{name:"Variable and parameter name",scope:["variable","meta.definition.variable.name","support.variable","entity.name.variable","constant.other.placeholder"],settings:{foreground:"var(--color-variable)"}},{name:"Constants and enums",scope:["variable.other.constant","variable.other.enummember"],settings:{foreground:"var(--color-variable)"}},{name:"Object keys, TS grammar specific",scope:["meta.object-literal.key"],settings:{foreground:"var(--color-variable)"}},{name:"CSS property value",scope:["support.constant.property-value","support.constant.font-name","support.constant.media-type","support.constant.media","constant.other.color.rgb-value","constant.other.rgb-value","support.constant.color"],settings:{foreground:"var(--color-string)"}},{name:"Regular expression groups",scope:["punctuation.definition.group.regexp","punctuation.definition.group.assertion.regexp","punctuation.definition.character-class.regexp","punctuation.character.set.begin.regexp","punctuation.character.set.end.regexp","keyword.operator.negation.regexp","support.other.parenthesis.regexp"],settings:{foreground:"var(--color-function)"}},{scope:["constant.character.character-class.regexp","constant.other.character-class.set.regexp","constant.other.character-class.regexp","constant.character.set.regexp"],settings:{foreground:"var(--color-string)"}},{scope:["keyword.operator.or.regexp","keyword.control.anchor.regexp"],settings:{foreground:"var(--color-function)"}},{scope:"keyword.operator.quantifier.regexp",settings:{foreground:"var(--color-function)"}},{scope:"constant.character",settings:{foreground:"var(--color-modifier)"}},{scope:"constant.character.escape",settings:{foreground:"var(--color-function)"}},{scope:"entity.name.label",settings:{foreground:"var(--color-light)"}}]},i=new Map,c=async(e,t)=>{const o=!0===e.options.block;let n=t.base.unitToPlainString(e);const c=function(e,t){const o=t||e.includes("\n")?document.createElement("pre"):document.createElement("code");return o.append(r(e,t)),o}(n,o);let{lang:p}=e.options;const{src:l}=e.options;if("string"!=typeof p&&"string"==typeof l){const e=l.match(/\.([\w-]+)$/);null!==e&&(p=e[1])}return(async()=>{if("string"==typeof l){const a=await fetch(t.context.urlToAbsURL(l,e));if(a.ok){const e=r(n=await a.text(),o);c.innerHTML="",c.append(e),c.dispatchEvent(new Event("adjust",{bubbles:!0,composed:!0}))}}if("string"==typeof p){const e=await(await async function(e){const{extractLangInfoArrayFromVSCEURLs:t,extractThemeFromVSCT:o,extractThemeFromVSCTURLs:n,Highlighter:r}=await(0,a.I)("sthl");let c=i.get(e);if(c instanceof r)return c;if(void 0!==c){const t=c;return new Promise((o=>{t.addEventListener("loaded",(()=>{o(i.get(e))}))}))}const p=new EventTarget;i.set(e,p);const l=await t(["css","html","json","markdown-basics"].concat(e.extractor.extractGlobalStrings("vsce","code",e.context.tagToGlobalOptions)).map((e=>`${e}/package.json`)),"https://cdn.jsdelivr.net/gh/microsoft/vscode/extensions/");l.push(...await t(["st-org/st-lang","microsoft/vscode-typescript-next"].concat(e.extractor.extractGlobalStrings("vsce-gh","code",e.context.tagToGlobalOptions)).map((e=>`${e}/package.json`)),"https://cdn.jsdelivr.net/gh/")),l.push(...await t(await e.extractor.extractGlobalURLs("vsce-src","code",e.context.tagToGlobalOptions),"a:b")),l.push({name:"markdown",alias:["md"]},{name:"javascript",alias:["js"]},{name:"typescript",alias:["ts"]});const d=o(s);return d.push(...await n(await e.extractor.extractGlobalURLs("vsct-src","code",e.context.tagToGlobalOptions),"a:b")),i.set(e,c=new r(l,d)),p.dispatchEvent(new Event("loaded")),c}(t)).highlightToDocumentFragment(n,p,o);c.innerHTML="",c.append(e)}})().catch(console.log),c};var p=o(590);const l=(0,p.gen)({inline:!0,noCapitalize:!0}),d=(0,p.gen)({reverse:!0}),g=(0,p.gen)({reverse:!0,noCapitalize:!0}),u=(0,p.gen)({noTag:!0}),m=(0,p.gen)({theorem:!0}),f=m,y=m,h=m,v=m,b=(0,p.gen)({theorem:!0,style:"definition"}),x=b,w=(0,p.gen)({theorem:!0,style:"remark"}),k=w,E=w;var S=o(936);const T=(0,S.gen)({noEnv:!0}),L=(0,S.gen)({addStar:!0,display:!0}),C=L,j=L,O=(0,S.gen)(),I=O,D=O,G=O,$=O,q=O,A=O,N=O,P=O,R=O,M=O,B=O,F=(0,S.gen)({addStar:!0}),U=F,V=F,z=F,H=F,J=F,W=(0,S.gen)({display:!0});var Z=o(494);const X=async(e,t)=>await t.compileUnit({tag:"katex",options:{class:"qed"},children:["\\square".split("")]}),_=async(e,t)=>{const o=document.createElement("div"),n=document.createElement("span"),r=document.createElement("span"),a=document.createElement("span"),s=document.createElement("span"),i=document.createElement("span");o.classList.add("capitalize-tag"),n.classList.add("caption"),r.classList.add("content"),a.classList.add("tag"),s.classList.add("mark"),i.classList.add("desc");const c=t.extractor.extractLastGlobalOption("tag",e.tag,t.context.tagToGlobalOptions);a.textContent=(0,Z.ru)("string"==typeof c?c:e.tag),o.append(n),o.append(r),n.append(a),n.append(s),n.append(i),r.append(await t.compileSTDN(e.children));const{mark:p,desc:l}=e.options;Array.isArray(p)?s.append(await t.compileInlineSTDN(p)):"string"==typeof p?s.textContent=p:"number"==typeof p&&(s.textContent=p.toString()),Array.isArray(l)?i.append(await t.compileInlineSTDN(l)):"string"==typeof l?i.textContent=l:"number"==typeof l&&(i.textContent=l.toString());const d=await X(e,t);if(0===r.children.length){const e=document.createElement("div");e.classList.add("st-line"),r.append(e),e.append(d)}else r.children[r.children.length-1].append(d);return o},K=async(e,t)=>{const o=e.options["ref-id"];if("string"!=typeof o||0===o.length)return t.createErrorElement("Ref id required");const n=t.context.idToIndexInfo[o];if(void 0===n)return t.createErrorElement("?");const r=document.createElement("span"),a=document.createElement("span"),s=document.createElement("span"),i=document.createElement("a"),c=document.createElement("span");a.classList.add("caption"),s.classList.add("tag"),i.classList.add("mark"),i.href=`#${encodeURIComponent(o)}`,c.classList.add("desc");const p=t.extractor.extractLastGlobalOption("tag",n.unit.tag,t.context.tagToGlobalOptions);if(s.textContent=(0,Z.ru)("string"==typeof p?p:n.unit.tag),r.append(a),a.append(s),a.append(i),a.append(c),e.children.length>0)i.append((0,Z.DT)(await t.compileInlineSTDN(e.children)));else{const{mark:e}=n.unit.options;Array.isArray(e)?i.append((0,Z.DT)(await t.compileInlineSTDN(e))):i.textContent="string"==typeof e?e:"number"==typeof e?e.toString():n.index.join(".")}const{desc:l}=e.options;return Array.isArray(l)?c.append(await t.compileInlineSTDN(l)):"string"==typeof l?c.textContent=l:"number"==typeof l&&(c.textContent=l.toString()),r}})();var r=n.Bmatrix,a=n.CD,s=n.Vmatrix,i=n.align,c=n.alignat,p=n.aligned,l=n.alignedat,d=n.array,g=n.arraystretch,u=n.bmatrix,m=n.cases,f=n.code,y=n.conjecture,h=n.corollary,v=n.darray,b=n.dcases,x=n.definition,w=n.drcases,k=n.equation,E=n.example,S=n.exercise,T=n.figure,L=n.gather,C=n.heading,j=n.index,O=n.katex,I=n.lemma,D=n.matrix,G=n.notation,$=n.pmatrix,q=n.proof,A=n.proposition,N=n.qed,P=n.rcases,R=n.ref,M=n.remark,B=n.smallmatrix,F=n.split,U=n.subarray,V=n.theorem,z=n.vmatrix;export{r as Bmatrix,a as CD,s as Vmatrix,i as align,c as alignat,p as aligned,l as alignedat,d as array,g as arraystretch,u as bmatrix,m as cases,f as code,y as conjecture,h as corollary,v as darray,b as dcases,x as definition,w as drcases,k as equation,E as example,S as exercise,T as figure,L as gather,C as heading,j as index,O as katex,I as lemma,D as matrix,G as notation,$ as pmatrix,q as proof,A as proposition,N as qed,P as rcases,R as ref,M as remark,B as smallmatrix,F as split,U as subarray,V as theorem,z as vmatrix};