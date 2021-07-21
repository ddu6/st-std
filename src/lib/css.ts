export const katex=`/* stylelint-disable font-family-no-missing-generic-family-keyword */
@font-face {
  font-family: 'KaTeX_AMS';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_AMS-Regular.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_AMS-Regular.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_AMS-Regular.ttf") format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'KaTeX_Caligraphic';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Caligraphic-Bold.ttf") format('truetype');
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: 'KaTeX_Caligraphic';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Caligraphic-Regular.ttf") format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'KaTeX_Fraktur';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Fraktur-Bold.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Fraktur-Bold.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Fraktur-Bold.ttf") format('truetype');
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: 'KaTeX_Fraktur';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Fraktur-Regular.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Fraktur-Regular.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Fraktur-Regular.ttf") format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'KaTeX_Main';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Main-Bold.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Main-Bold.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Main-Bold.ttf") format('truetype');
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: 'KaTeX_Main';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Main-BoldItalic.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Main-BoldItalic.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Main-BoldItalic.ttf") format('truetype');
  font-weight: bold;
  font-style: italic;
}
@font-face {
  font-family: 'KaTeX_Main';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Main-Italic.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Main-Italic.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Main-Italic.ttf") format('truetype');
  font-weight: normal;
  font-style: italic;
}
@font-face {
  font-family: 'KaTeX_Main';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Main-Regular.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Main-Regular.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Main-Regular.ttf") format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'KaTeX_Math';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Math-BoldItalic.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Math-BoldItalic.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Math-BoldItalic.ttf") format('truetype');
  font-weight: bold;
  font-style: italic;
}
@font-face {
  font-family: 'KaTeX_Math';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Math-Italic.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Math-Italic.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Math-Italic.ttf") format('truetype');
  font-weight: normal;
  font-style: italic;
}
@font-face {
  font-family: 'KaTeX_SansSerif';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_SansSerif-Bold.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_SansSerif-Bold.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_SansSerif-Bold.ttf") format('truetype');
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: 'KaTeX_SansSerif';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_SansSerif-Italic.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_SansSerif-Italic.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_SansSerif-Italic.ttf") format('truetype');
  font-weight: normal;
  font-style: italic;
}
@font-face {
  font-family: 'KaTeX_SansSerif';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_SansSerif-Regular.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_SansSerif-Regular.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_SansSerif-Regular.ttf") format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'KaTeX_Script';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Script-Regular.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Script-Regular.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Script-Regular.ttf") format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'KaTeX_Size1';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Size1-Regular.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Size1-Regular.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Size1-Regular.ttf") format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'KaTeX_Size2';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Size2-Regular.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Size2-Regular.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Size2-Regular.ttf") format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'KaTeX_Size3';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Size3-Regular.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Size3-Regular.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Size3-Regular.ttf") format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'KaTeX_Size4';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Size4-Regular.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Size4-Regular.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Size4-Regular.ttf") format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'KaTeX_Typewriter';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Typewriter-Regular.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Typewriter-Regular.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Typewriter-Regular.ttf") format('truetype');
  font-weight: normal;
  font-style: normal;
}
.katex {
  font: normal 1.21em KaTeX_Main, Times New Roman, serif;
  line-height: 1.2;
  text-indent: 0;
  text-rendering: auto;
}
.katex * {
  -ms-high-contrast-adjust: none !important;
  border-color: currentColor;
}
.katex .katex-version::after {
  content: "0.13.12";
}
.katex .katex-mathml {
  /* Accessibility hack to only show to screen readers
         Found at: http://a11yproject.com/posts/how-to-hide-content/ */
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
}
.katex .katex-html {
  /* \\newline is an empty block at top level, between .base elements */
}
.katex .katex-html > .newline {
  display: block;
}
.katex .base {
  position: relative;
  display: inline-block;
  white-space: nowrap;
  width: -webkit-min-content;
  width: -moz-min-content;
  width: min-content;
}
.katex .strut {
  display: inline-block;
}
.katex .textbf {
  font-weight: bold;
}
.katex .textit {
  font-style: italic;
}
.katex .textrm {
  font-family: KaTeX_Main;
}
.katex .textsf {
  font-family: KaTeX_SansSerif;
}
.katex .texttt {
  font-family: KaTeX_Typewriter;
}
.katex .mathnormal {
  font-family: KaTeX_Math;
  font-style: italic;
}
.katex .mathit {
  font-family: KaTeX_Main;
  font-style: italic;
}
.katex .mathrm {
  font-style: normal;
}
.katex .mathbf {
  font-family: KaTeX_Main;
  font-weight: bold;
}
.katex .boldsymbol {
  font-family: KaTeX_Math;
  font-weight: bold;
  font-style: italic;
}
.katex .amsrm {
  font-family: KaTeX_AMS;
}
.katex .mathbb,
.katex .textbb {
  font-family: KaTeX_AMS;
}
.katex .mathcal {
  font-family: KaTeX_Caligraphic;
}
.katex .mathfrak,
.katex .textfrak {
  font-family: KaTeX_Fraktur;
}
.katex .mathtt {
  font-family: KaTeX_Typewriter;
}
.katex .mathscr,
.katex .textscr {
  font-family: KaTeX_Script;
}
.katex .mathsf,
.katex .textsf {
  font-family: KaTeX_SansSerif;
}
.katex .mathboldsf,
.katex .textboldsf {
  font-family: KaTeX_SansSerif;
  font-weight: bold;
}
.katex .mathitsf,
.katex .textitsf {
  font-family: KaTeX_SansSerif;
  font-style: italic;
}
.katex .mainrm {
  font-family: KaTeX_Main;
  font-style: normal;
}
.katex .vlist-t {
  display: inline-table;
  table-layout: fixed;
  border-collapse: collapse;
}
.katex .vlist-r {
  display: table-row;
}
.katex .vlist {
  display: table-cell;
  vertical-align: bottom;
  position: relative;
}
.katex .vlist > span {
  display: block;
  height: 0;
  position: relative;
}
.katex .vlist > span > span {
  display: inline-block;
}
.katex .vlist > span > .pstrut {
  overflow: hidden;
  width: 0;
}
.katex .vlist-t2 {
  margin-right: -2px;
}
.katex .vlist-s {
  display: table-cell;
  vertical-align: bottom;
  font-size: 1px;
  width: 2px;
  min-width: 2px;
}
.katex .vbox {
  display: inline-flex;
  flex-direction: column;
  align-items: baseline;
}
.katex .hbox {
  display: inline-flex;
  flex-direction: row;
  width: 100%;
}
.katex .thinbox {
  display: inline-flex;
  flex-direction: row;
  width: 0;
  max-width: 0;
}
.katex .msupsub {
  text-align: left;
}
.katex .mfrac > span > span {
  text-align: center;
}
.katex .mfrac .frac-line {
  display: inline-block;
  width: 100%;
  border-bottom-style: solid;
}
.katex .mfrac .frac-line,
.katex .overline .overline-line,
.katex .underline .underline-line,
.katex .hline,
.katex .hdashline,
.katex .rule {
  min-height: 1px;
}
.katex .mspace {
  display: inline-block;
}
.katex .llap,
.katex .rlap,
.katex .clap {
  width: 0;
  position: relative;
}
.katex .llap > .inner,
.katex .rlap > .inner,
.katex .clap > .inner {
  position: absolute;
}
.katex .llap > .fix,
.katex .rlap > .fix,
.katex .clap > .fix {
  display: inline-block;
}
.katex .llap > .inner {
  right: 0;
}
.katex .rlap > .inner,
.katex .clap > .inner {
  left: 0;
}
.katex .clap > .inner > span {
  margin-left: -50%;
  margin-right: 50%;
}
.katex .rule {
  display: inline-block;
  border: solid 0;
  position: relative;
}
.katex .overline .overline-line,
.katex .underline .underline-line,
.katex .hline {
  display: inline-block;
  width: 100%;
  border-bottom-style: solid;
}
.katex .hdashline {
  display: inline-block;
  width: 100%;
  border-bottom-style: dashed;
}
.katex .sqrt > .root {
  /* These values are taken from the definition of \`\\r@@t\`,
             \`\\mkern 5mu\` and \`\\mkern -10mu\`. */
  margin-left: 0.27777778em;
  margin-right: -0.55555556em;
}
.katex .sizing.reset-size1.size1,
.katex .fontsize-ensurer.reset-size1.size1 {
  font-size: 1em;
}
.katex .sizing.reset-size1.size2,
.katex .fontsize-ensurer.reset-size1.size2 {
  font-size: 1.2em;
}
.katex .sizing.reset-size1.size3,
.katex .fontsize-ensurer.reset-size1.size3 {
  font-size: 1.4em;
}
.katex .sizing.reset-size1.size4,
.katex .fontsize-ensurer.reset-size1.size4 {
  font-size: 1.6em;
}
.katex .sizing.reset-size1.size5,
.katex .fontsize-ensurer.reset-size1.size5 {
  font-size: 1.8em;
}
.katex .sizing.reset-size1.size6,
.katex .fontsize-ensurer.reset-size1.size6 {
  font-size: 2em;
}
.katex .sizing.reset-size1.size7,
.katex .fontsize-ensurer.reset-size1.size7 {
  font-size: 2.4em;
}
.katex .sizing.reset-size1.size8,
.katex .fontsize-ensurer.reset-size1.size8 {
  font-size: 2.88em;
}
.katex .sizing.reset-size1.size9,
.katex .fontsize-ensurer.reset-size1.size9 {
  font-size: 3.456em;
}
.katex .sizing.reset-size1.size10,
.katex .fontsize-ensurer.reset-size1.size10 {
  font-size: 4.148em;
}
.katex .sizing.reset-size1.size11,
.katex .fontsize-ensurer.reset-size1.size11 {
  font-size: 4.976em;
}
.katex .sizing.reset-size2.size1,
.katex .fontsize-ensurer.reset-size2.size1 {
  font-size: 0.83333333em;
}
.katex .sizing.reset-size2.size2,
.katex .fontsize-ensurer.reset-size2.size2 {
  font-size: 1em;
}
.katex .sizing.reset-size2.size3,
.katex .fontsize-ensurer.reset-size2.size3 {
  font-size: 1.16666667em;
}
.katex .sizing.reset-size2.size4,
.katex .fontsize-ensurer.reset-size2.size4 {
  font-size: 1.33333333em;
}
.katex .sizing.reset-size2.size5,
.katex .fontsize-ensurer.reset-size2.size5 {
  font-size: 1.5em;
}
.katex .sizing.reset-size2.size6,
.katex .fontsize-ensurer.reset-size2.size6 {
  font-size: 1.66666667em;
}
.katex .sizing.reset-size2.size7,
.katex .fontsize-ensurer.reset-size2.size7 {
  font-size: 2em;
}
.katex .sizing.reset-size2.size8,
.katex .fontsize-ensurer.reset-size2.size8 {
  font-size: 2.4em;
}
.katex .sizing.reset-size2.size9,
.katex .fontsize-ensurer.reset-size2.size9 {
  font-size: 2.88em;
}
.katex .sizing.reset-size2.size10,
.katex .fontsize-ensurer.reset-size2.size10 {
  font-size: 3.45666667em;
}
.katex .sizing.reset-size2.size11,
.katex .fontsize-ensurer.reset-size2.size11 {
  font-size: 4.14666667em;
}
.katex .sizing.reset-size3.size1,
.katex .fontsize-ensurer.reset-size3.size1 {
  font-size: 0.71428571em;
}
.katex .sizing.reset-size3.size2,
.katex .fontsize-ensurer.reset-size3.size2 {
  font-size: 0.85714286em;
}
.katex .sizing.reset-size3.size3,
.katex .fontsize-ensurer.reset-size3.size3 {
  font-size: 1em;
}
.katex .sizing.reset-size3.size4,
.katex .fontsize-ensurer.reset-size3.size4 {
  font-size: 1.14285714em;
}
.katex .sizing.reset-size3.size5,
.katex .fontsize-ensurer.reset-size3.size5 {
  font-size: 1.28571429em;
}
.katex .sizing.reset-size3.size6,
.katex .fontsize-ensurer.reset-size3.size6 {
  font-size: 1.42857143em;
}
.katex .sizing.reset-size3.size7,
.katex .fontsize-ensurer.reset-size3.size7 {
  font-size: 1.71428571em;
}
.katex .sizing.reset-size3.size8,
.katex .fontsize-ensurer.reset-size3.size8 {
  font-size: 2.05714286em;
}
.katex .sizing.reset-size3.size9,
.katex .fontsize-ensurer.reset-size3.size9 {
  font-size: 2.46857143em;
}
.katex .sizing.reset-size3.size10,
.katex .fontsize-ensurer.reset-size3.size10 {
  font-size: 2.96285714em;
}
.katex .sizing.reset-size3.size11,
.katex .fontsize-ensurer.reset-size3.size11 {
  font-size: 3.55428571em;
}
.katex .sizing.reset-size4.size1,
.katex .fontsize-ensurer.reset-size4.size1 {
  font-size: 0.625em;
}
.katex .sizing.reset-size4.size2,
.katex .fontsize-ensurer.reset-size4.size2 {
  font-size: 0.75em;
}
.katex .sizing.reset-size4.size3,
.katex .fontsize-ensurer.reset-size4.size3 {
  font-size: 0.875em;
}
.katex .sizing.reset-size4.size4,
.katex .fontsize-ensurer.reset-size4.size4 {
  font-size: 1em;
}
.katex .sizing.reset-size4.size5,
.katex .fontsize-ensurer.reset-size4.size5 {
  font-size: 1.125em;
}
.katex .sizing.reset-size4.size6,
.katex .fontsize-ensurer.reset-size4.size6 {
  font-size: 1.25em;
}
.katex .sizing.reset-size4.size7,
.katex .fontsize-ensurer.reset-size4.size7 {
  font-size: 1.5em;
}
.katex .sizing.reset-size4.size8,
.katex .fontsize-ensurer.reset-size4.size8 {
  font-size: 1.8em;
}
.katex .sizing.reset-size4.size9,
.katex .fontsize-ensurer.reset-size4.size9 {
  font-size: 2.16em;
}
.katex .sizing.reset-size4.size10,
.katex .fontsize-ensurer.reset-size4.size10 {
  font-size: 2.5925em;
}
.katex .sizing.reset-size4.size11,
.katex .fontsize-ensurer.reset-size4.size11 {
  font-size: 3.11em;
}
.katex .sizing.reset-size5.size1,
.katex .fontsize-ensurer.reset-size5.size1 {
  font-size: 0.55555556em;
}
.katex .sizing.reset-size5.size2,
.katex .fontsize-ensurer.reset-size5.size2 {
  font-size: 0.66666667em;
}
.katex .sizing.reset-size5.size3,
.katex .fontsize-ensurer.reset-size5.size3 {
  font-size: 0.77777778em;
}
.katex .sizing.reset-size5.size4,
.katex .fontsize-ensurer.reset-size5.size4 {
  font-size: 0.88888889em;
}
.katex .sizing.reset-size5.size5,
.katex .fontsize-ensurer.reset-size5.size5 {
  font-size: 1em;
}
.katex .sizing.reset-size5.size6,
.katex .fontsize-ensurer.reset-size5.size6 {
  font-size: 1.11111111em;
}
.katex .sizing.reset-size5.size7,
.katex .fontsize-ensurer.reset-size5.size7 {
  font-size: 1.33333333em;
}
.katex .sizing.reset-size5.size8,
.katex .fontsize-ensurer.reset-size5.size8 {
  font-size: 1.6em;
}
.katex .sizing.reset-size5.size9,
.katex .fontsize-ensurer.reset-size5.size9 {
  font-size: 1.92em;
}
.katex .sizing.reset-size5.size10,
.katex .fontsize-ensurer.reset-size5.size10 {
  font-size: 2.30444444em;
}
.katex .sizing.reset-size5.size11,
.katex .fontsize-ensurer.reset-size5.size11 {
  font-size: 2.76444444em;
}
.katex .sizing.reset-size6.size1,
.katex .fontsize-ensurer.reset-size6.size1 {
  font-size: 0.5em;
}
.katex .sizing.reset-size6.size2,
.katex .fontsize-ensurer.reset-size6.size2 {
  font-size: 0.6em;
}
.katex .sizing.reset-size6.size3,
.katex .fontsize-ensurer.reset-size6.size3 {
  font-size: 0.7em;
}
.katex .sizing.reset-size6.size4,
.katex .fontsize-ensurer.reset-size6.size4 {
  font-size: 0.8em;
}
.katex .sizing.reset-size6.size5,
.katex .fontsize-ensurer.reset-size6.size5 {
  font-size: 0.9em;
}
.katex .sizing.reset-size6.size6,
.katex .fontsize-ensurer.reset-size6.size6 {
  font-size: 1em;
}
.katex .sizing.reset-size6.size7,
.katex .fontsize-ensurer.reset-size6.size7 {
  font-size: 1.2em;
}
.katex .sizing.reset-size6.size8,
.katex .fontsize-ensurer.reset-size6.size8 {
  font-size: 1.44em;
}
.katex .sizing.reset-size6.size9,
.katex .fontsize-ensurer.reset-size6.size9 {
  font-size: 1.728em;
}
.katex .sizing.reset-size6.size10,
.katex .fontsize-ensurer.reset-size6.size10 {
  font-size: 2.074em;
}
.katex .sizing.reset-size6.size11,
.katex .fontsize-ensurer.reset-size6.size11 {
  font-size: 2.488em;
}
.katex .sizing.reset-size7.size1,
.katex .fontsize-ensurer.reset-size7.size1 {
  font-size: 0.41666667em;
}
.katex .sizing.reset-size7.size2,
.katex .fontsize-ensurer.reset-size7.size2 {
  font-size: 0.5em;
}
.katex .sizing.reset-size7.size3,
.katex .fontsize-ensurer.reset-size7.size3 {
  font-size: 0.58333333em;
}
.katex .sizing.reset-size7.size4,
.katex .fontsize-ensurer.reset-size7.size4 {
  font-size: 0.66666667em;
}
.katex .sizing.reset-size7.size5,
.katex .fontsize-ensurer.reset-size7.size5 {
  font-size: 0.75em;
}
.katex .sizing.reset-size7.size6,
.katex .fontsize-ensurer.reset-size7.size6 {
  font-size: 0.83333333em;
}
.katex .sizing.reset-size7.size7,
.katex .fontsize-ensurer.reset-size7.size7 {
  font-size: 1em;
}
.katex .sizing.reset-size7.size8,
.katex .fontsize-ensurer.reset-size7.size8 {
  font-size: 1.2em;
}
.katex .sizing.reset-size7.size9,
.katex .fontsize-ensurer.reset-size7.size9 {
  font-size: 1.44em;
}
.katex .sizing.reset-size7.size10,
.katex .fontsize-ensurer.reset-size7.size10 {
  font-size: 1.72833333em;
}
.katex .sizing.reset-size7.size11,
.katex .fontsize-ensurer.reset-size7.size11 {
  font-size: 2.07333333em;
}
.katex .sizing.reset-size8.size1,
.katex .fontsize-ensurer.reset-size8.size1 {
  font-size: 0.34722222em;
}
.katex .sizing.reset-size8.size2,
.katex .fontsize-ensurer.reset-size8.size2 {
  font-size: 0.41666667em;
}
.katex .sizing.reset-size8.size3,
.katex .fontsize-ensurer.reset-size8.size3 {
  font-size: 0.48611111em;
}
.katex .sizing.reset-size8.size4,
.katex .fontsize-ensurer.reset-size8.size4 {
  font-size: 0.55555556em;
}
.katex .sizing.reset-size8.size5,
.katex .fontsize-ensurer.reset-size8.size5 {
  font-size: 0.625em;
}
.katex .sizing.reset-size8.size6,
.katex .fontsize-ensurer.reset-size8.size6 {
  font-size: 0.69444444em;
}
.katex .sizing.reset-size8.size7,
.katex .fontsize-ensurer.reset-size8.size7 {
  font-size: 0.83333333em;
}
.katex .sizing.reset-size8.size8,
.katex .fontsize-ensurer.reset-size8.size8 {
  font-size: 1em;
}
.katex .sizing.reset-size8.size9,
.katex .fontsize-ensurer.reset-size8.size9 {
  font-size: 1.2em;
}
.katex .sizing.reset-size8.size10,
.katex .fontsize-ensurer.reset-size8.size10 {
  font-size: 1.44027778em;
}
.katex .sizing.reset-size8.size11,
.katex .fontsize-ensurer.reset-size8.size11 {
  font-size: 1.72777778em;
}
.katex .sizing.reset-size9.size1,
.katex .fontsize-ensurer.reset-size9.size1 {
  font-size: 0.28935185em;
}
.katex .sizing.reset-size9.size2,
.katex .fontsize-ensurer.reset-size9.size2 {
  font-size: 0.34722222em;
}
.katex .sizing.reset-size9.size3,
.katex .fontsize-ensurer.reset-size9.size3 {
  font-size: 0.40509259em;
}
.katex .sizing.reset-size9.size4,
.katex .fontsize-ensurer.reset-size9.size4 {
  font-size: 0.46296296em;
}
.katex .sizing.reset-size9.size5,
.katex .fontsize-ensurer.reset-size9.size5 {
  font-size: 0.52083333em;
}
.katex .sizing.reset-size9.size6,
.katex .fontsize-ensurer.reset-size9.size6 {
  font-size: 0.5787037em;
}
.katex .sizing.reset-size9.size7,
.katex .fontsize-ensurer.reset-size9.size7 {
  font-size: 0.69444444em;
}
.katex .sizing.reset-size9.size8,
.katex .fontsize-ensurer.reset-size9.size8 {
  font-size: 0.83333333em;
}
.katex .sizing.reset-size9.size9,
.katex .fontsize-ensurer.reset-size9.size9 {
  font-size: 1em;
}
.katex .sizing.reset-size9.size10,
.katex .fontsize-ensurer.reset-size9.size10 {
  font-size: 1.20023148em;
}
.katex .sizing.reset-size9.size11,
.katex .fontsize-ensurer.reset-size9.size11 {
  font-size: 1.43981481em;
}
.katex .sizing.reset-size10.size1,
.katex .fontsize-ensurer.reset-size10.size1 {
  font-size: 0.24108004em;
}
.katex .sizing.reset-size10.size2,
.katex .fontsize-ensurer.reset-size10.size2 {
  font-size: 0.28929605em;
}
.katex .sizing.reset-size10.size3,
.katex .fontsize-ensurer.reset-size10.size3 {
  font-size: 0.33751205em;
}
.katex .sizing.reset-size10.size4,
.katex .fontsize-ensurer.reset-size10.size4 {
  font-size: 0.38572806em;
}
.katex .sizing.reset-size10.size5,
.katex .fontsize-ensurer.reset-size10.size5 {
  font-size: 0.43394407em;
}
.katex .sizing.reset-size10.size6,
.katex .fontsize-ensurer.reset-size10.size6 {
  font-size: 0.48216008em;
}
.katex .sizing.reset-size10.size7,
.katex .fontsize-ensurer.reset-size10.size7 {
  font-size: 0.57859209em;
}
.katex .sizing.reset-size10.size8,
.katex .fontsize-ensurer.reset-size10.size8 {
  font-size: 0.69431051em;
}
.katex .sizing.reset-size10.size9,
.katex .fontsize-ensurer.reset-size10.size9 {
  font-size: 0.83317261em;
}
.katex .sizing.reset-size10.size10,
.katex .fontsize-ensurer.reset-size10.size10 {
  font-size: 1em;
}
.katex .sizing.reset-size10.size11,
.katex .fontsize-ensurer.reset-size10.size11 {
  font-size: 1.19961427em;
}
.katex .sizing.reset-size11.size1,
.katex .fontsize-ensurer.reset-size11.size1 {
  font-size: 0.20096463em;
}
.katex .sizing.reset-size11.size2,
.katex .fontsize-ensurer.reset-size11.size2 {
  font-size: 0.24115756em;
}
.katex .sizing.reset-size11.size3,
.katex .fontsize-ensurer.reset-size11.size3 {
  font-size: 0.28135048em;
}
.katex .sizing.reset-size11.size4,
.katex .fontsize-ensurer.reset-size11.size4 {
  font-size: 0.32154341em;
}
.katex .sizing.reset-size11.size5,
.katex .fontsize-ensurer.reset-size11.size5 {
  font-size: 0.36173633em;
}
.katex .sizing.reset-size11.size6,
.katex .fontsize-ensurer.reset-size11.size6 {
  font-size: 0.40192926em;
}
.katex .sizing.reset-size11.size7,
.katex .fontsize-ensurer.reset-size11.size7 {
  font-size: 0.48231511em;
}
.katex .sizing.reset-size11.size8,
.katex .fontsize-ensurer.reset-size11.size8 {
  font-size: 0.57877814em;
}
.katex .sizing.reset-size11.size9,
.katex .fontsize-ensurer.reset-size11.size9 {
  font-size: 0.69453376em;
}
.katex .sizing.reset-size11.size10,
.katex .fontsize-ensurer.reset-size11.size10 {
  font-size: 0.83360129em;
}
.katex .sizing.reset-size11.size11,
.katex .fontsize-ensurer.reset-size11.size11 {
  font-size: 1em;
}
.katex .delimsizing.size1 {
  font-family: KaTeX_Size1;
}
.katex .delimsizing.size2 {
  font-family: KaTeX_Size2;
}
.katex .delimsizing.size3 {
  font-family: KaTeX_Size3;
}
.katex .delimsizing.size4 {
  font-family: KaTeX_Size4;
}
.katex .delimsizing.mult .delim-size1 > span {
  font-family: KaTeX_Size1;
}
.katex .delimsizing.mult .delim-size4 > span {
  font-family: KaTeX_Size4;
}
.katex .nulldelimiter {
  display: inline-block;
  width: 0.12em;
}
.katex .delimcenter {
  position: relative;
}
.katex .op-symbol {
  position: relative;
}
.katex .op-symbol.small-op {
  font-family: KaTeX_Size1;
}
.katex .op-symbol.large-op {
  font-family: KaTeX_Size2;
}
.katex .op-limits > .vlist-t {
  text-align: center;
}
.katex .accent > .vlist-t {
  text-align: center;
}
.katex .accent .accent-body {
  position: relative;
}
.katex .accent .accent-body:not(.accent-full) {
  width: 0;
}
.katex .overlay {
  display: block;
}
.katex .mtable .vertical-separator {
  display: inline-block;
  min-width: 1px;
}
.katex .mtable .arraycolsep {
  display: inline-block;
}
.katex .mtable .col-align-c > .vlist-t {
  text-align: center;
}
.katex .mtable .col-align-l > .vlist-t {
  text-align: left;
}
.katex .mtable .col-align-r > .vlist-t {
  text-align: right;
}
.katex .svg-align {
  text-align: left;
}
.katex svg {
  display: block;
  position: absolute;
  width: 100%;
  height: inherit;
  fill: currentColor;
  stroke: currentColor;
  fill-rule: nonzero;
  fill-opacity: 1;
  stroke-width: 1;
  stroke-linecap: butt;
  stroke-linejoin: miter;
  stroke-miterlimit: 4;
  stroke-dasharray: none;
  stroke-dashoffset: 0;
  stroke-opacity: 1;
}
.katex svg path {
  stroke: none;
}
.katex img {
  border-style: none;
  min-width: 0;
  min-height: 0;
  max-width: none;
  max-height: none;
}
.katex .stretchy {
  width: 100%;
  display: block;
  position: relative;
  overflow: hidden;
}
.katex .stretchy::before,
.katex .stretchy::after {
  content: "";
}
.katex .hide-tail {
  width: 100%;
  position: relative;
  overflow: hidden;
}
.katex .halfarrow-left {
  position: absolute;
  left: 0;
  width: 50.2%;
  overflow: hidden;
}
.katex .halfarrow-right {
  position: absolute;
  right: 0;
  width: 50.2%;
  overflow: hidden;
}
.katex .brace-left {
  position: absolute;
  left: 0;
  width: 25.1%;
  overflow: hidden;
}
.katex .brace-center {
  position: absolute;
  left: 25%;
  width: 50%;
  overflow: hidden;
}
.katex .brace-right {
  position: absolute;
  right: 0;
  width: 25.1%;
  overflow: hidden;
}
.katex .x-arrow-pad {
  padding: 0 0.5em;
}
.katex .cd-arrow-pad {
  padding: 0 0.55556em 0 0.27778em;
}
.katex .x-arrow,
.katex .mover,
.katex .munder {
  text-align: center;
}
.katex .boxpad {
  padding: 0 0.3em 0 0.3em;
}
.katex .fbox,
.katex .fcolorbox {
  box-sizing: border-box;
  border: 0.04em solid;
}
.katex .cancel-pad {
  padding: 0 0.2em 0 0.2em;
}
.katex .cancel-lap {
  margin-left: -0.2em;
  margin-right: -0.2em;
}
.katex .sout {
  border-bottom-style: solid;
  border-bottom-width: 0.08em;
}
.katex .angl {
  box-sizing: border-box;
  border-top: 0.049em solid;
  border-right: 0.049em solid;
  margin-right: 0.03889em;
}
.katex .anglpad {
  padding: 0 0.03889em 0 0.03889em;
}
.katex .eqn-num::before {
  counter-increment: katexEqnNo;
  content: "(" counter(katexEqnNo) ")";
}
.katex .mml-eqn-num::before {
  counter-increment: mmlEqnNo;
  content: "(" counter(mmlEqnNo) ")";
}
.katex .mtr-glue {
  width: 50%;
}
.katex .cd-vert-arrow {
  display: inline-block;
  position: relative;
}
.katex .cd-label-left {
  display: inline-block;
  position: absolute;
  right: calc(50% + 0.3em);
  text-align: left;
}
.katex .cd-label-right {
  display: inline-block;
  position: absolute;
  left: calc(50% + 0.3em);
  text-align: right;
}
.katex-display {
  display: block;
  margin: 1em 0;
  text-align: center;
}
.katex-display > .katex {
  display: block;
  text-align: center;
  white-space: nowrap;
}
.katex-display > .katex > .katex-html {
  display: block;
  position: relative;
}
.katex-display > .katex > .katex-html > .tag {
  position: absolute;
  right: 0;
}
.katex-display.leqno > .katex > .katex-html > .tag {
  left: 0;
  right: auto;
}
.katex-display.fleqn > .katex {
  text-align: left;
  padding-left: 2em;
}
body {
  counter-reset: katexEqnNo mmlEqnNo;
}

`
export const katex_patch=`html {
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
}`
export const hl=`.hljs,
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
}`
export const line=`.st-line {
    white-space: pre-wrap;
}

.st-line:not(.vanished):empty::before {
    content: " ";
}`
export const unit=`/* caption */
.caption>.tag:not(:empty) {
    margin-right: var(--length-space);
}

.plain.caption>.tag,
.plain>.caption>.tag {
    display: none;
}

div>.caption:first-child>.tag {
    text-transform: capitalize;
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
    margin-left: var(--length-gap);
}

.caption+.content>div:first-child {
    display: inline;
}

/* code */
.unit.code>.line {
    white-space: pre;
    font-size: var(--length-font-span);
}

.unit.code>.line>.content {
    display: inline-block;
    white-space: pre-wrap;
}

.unit.code>.line>.content>*::after {
    content: " ";
    display: inline-block;
    width: 0;
    height: 0;
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
}

.unit.equation>.content {
    text-align: center;
    grid-area: 1/2/span 1/span 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.unit.equation>.caption {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    grid-area: 1/3/span 1/span 1;
    padding-left: var(--length-gap);
}

/* figure */
.unit.figure {
    text-align: center;
    margin: var(--length-space) 0;
}

.unit.figure>.caption {
    display: block;
    margin: var(--length-space) 0;
}

.unit.figure>.caption>.tag {
    text-transform: capitalize;
    font-weight: bold;
}

.unit.figure>.caption>.mark {
    font-weight: bold;
}

/* heading */
.unit.heading {
    font-size: var(--length-font-heading);
    margin: var(--length-gap) 0;
}

.heading>.caption>.tag {
    display: none;
}

.heading>.caption>.desc {
    display: none;
}

/* proof */
.unit.proof {
    margin: var(--length-gap) 0;
}

.unit.proof>.caption>.tag {
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
}

.unit.definition {
    border-left-color: var(--color-string);
}

.unit.remark {
    border-left-color: var(--color-comment);
}

.unit.theorem>.caption>.tag,
.unit.theorem>.caption>.mark {
    font-weight: bold;
}

.unit.remark>.caption>.tag,
.unit.remark>.caption>.mark {
    font-style: italic;
}

.unit.theorem:not(.definition):not(.remark)>.content {
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
}`
export const all=katex+katex_patch+hl+line+unit