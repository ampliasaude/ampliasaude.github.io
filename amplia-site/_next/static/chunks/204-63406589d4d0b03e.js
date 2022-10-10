"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[204],{2789:function(e,t,i){e.exports=i.p+"static/media/00a731a6f302623f44df0e6ccf0109eb8e6f987662a4a7de47532fa4c4e500e6d7b671b3263883e96ed80ec0c463b92ab37f0727785dd3041c4f5f3f817d69c5.0e85747a.json"},285:function(e,t,i){e.exports=i.p+"static/media/09f204ccffdfb2918af2b98f13ad7ca24c4ea7e07a884e38ecf0e1f26008493cc5ed81a9bec3759c8d9b28453a69b3af7367257282d736e86fd5911219781594.3ce001f0.csv"},1848:function(e,t,i){e.exports=i.p+"static/media/16b2a6ff3bd8958f70981c7dcf3d8df8963d3b090e070356369d0351a4727f07cdcb3671376d5f52bb7885407b82cbb9b91e59be48c59f2561e99be3c3826c7d.28bb8602.csv"},3018:function(e,t,i){e.exports=i.p+"static/media/186949b230e46bbd80611c8b1224e2003c90fd71528ff034cabe25dc74445f782670632623e35cfdc778c27fcc6fce67fe7fc4e12ef7168cbf594a25934412d3.fe6d926d.csv"},1644:function(e,t,i){e.exports=i.p+"static/media/286bfcab293547b0b0d2222f6055ccef1f064e020131ef4aa44c88546a061dedba121772061f7ab730196cafd5d88cccff0f3446b7f4f61452ae3c46d73fca5d.e1139741.csv"},2813:function(e,t,i){e.exports=i.p+"static/media/68f6335a84fa2b1730de7f9eff6d0c8a8e3e0a885347018d8479f496f7f4adfb0a17545c275e3746f771fc088ecc82ecd3d09e221b17d291e120072b677d5ee9.b23ed7ad.xlsx"},9555:function(e,t,i){e.exports=i.p+"static/media/a2301ed0ed118644a516238abc5408f2db17ee67772fd9b7bb61f4680aef60798b2b5e1e9073bdd79a64b00abcdb4491337be8919af1ef13759f229644763a56.918a74b9.png"},8875:function(e,t,i){e.exports=i.p+"static/media/b46883151e041b592666544e68e6e8e4a40c8d8638624dc4b8904749fd0da9325b877aad74811fca5f10756f5b5b269a514f4e6c336ac1a64f3256a598160a4d.b9654907.csv"},5242:function(e,t,i){e.exports=i.p+"static/media/bd1f162ee9391a08ecb64c73c1b7abc8f144f37d4ec95e47305827189d1598eace1590f5b060a16774972f054eb22fba70b2b8d90dffc63ef57521e89b6bc0d6.5f8b804d.csv"},5521:function(e,t,i){e.exports=i.p+"static/media/c051fbc024553912e31968b35e537d4ad3592201b5f8e7bd13fd9d02e38599c5d541a704d0858c676328babb3e5c9c35dd7c6d67240090d094882a1cad8eece4.5a9f7c51.gif"},9056:function(e,t,i){e.exports=i.p+"static/media/c455be919ca1ed3da711106e8749aa345865d4ae3a0d9331b54b815cf42f4f476b69c49f296b37c307201459da329dec1db27e17fca726f5d83353b458d19d97.807ed721.json"},78:function(e,t,i){e.exports=i.p+"static/media/c4a76bf56594363a92c77a42b5a59a5ceec64d0fc1d6d203a7e76e8952eba5fafa4106f11bb323e5636913f9a0377ca33c6e946cd1aa2203fab5767dbe312876.c6b4f5ae.csv"},1371:function(e,t,i){e.exports=i.p+"static/media/cceb7b1fe14fcf7fe29c3983f38219769a40ef20882b1d53a60ae5ea7d7fa4178c5f8d84067424d9530cb9f91ed9e326f443f819d4cb418dd6c915db15774481.b5ea54eb.json"},4876:function(e,t,i){e.exports=i.p+"static/media/e90ea18fa4eda6225e271fa7a53ce0430963eb15a9e288b9fc984170c5cf7aeb6dde05981ea226d9937ba83cfcc67d0655c0639af1e8ab90fc35c80fbec212a6.d3269e00.png"},4204:function(e,t,i){function n(e){return e`# Color Legend

A simple legend for a [color scale](/@d3/color-schemes). Supports [continuous](/@d3/continuous-scales), [sequential](/@d3/sequential-scales), [diverging](/@d3/diverging-scales), [quantize, quantile, threshold](/@d3/quantile-quantize-and-threshold-scales) and [ordinal](/@d3/d3-scaleordinal) scales. To use:

~~~js
import {Legend, Swatches} from "@d3/color-legend"
~~~

Then call the legend function as shown below. (For ordinal scales, also consider the swatches function.)`}function a(e,t){return e(t.scaleSequential([0,100],t.interpolateViridis),{title:"Temperature (\xb0F)"})}function r(e,t){return e(t.scaleSequentialSqrt([0,1],t.interpolateTurbo),{title:"Speed (kts)"})}function o(e,t){return e(t.scaleDiverging([-.1,0,.1],t.interpolatePiYG),{title:"Daily change",tickFormat:"+%"})}function l(e,t){return e(t.scaleDivergingSqrt([-.1,0,.1],t.interpolateRdBu),{title:"Daily change",tickFormat:"+%"})}function s(e,t){return e(t.scaleSequentialLog([1,100],t.interpolateBlues),{title:"Energy (joules)",ticks:10})}function u(e,t){return e(t.scaleSequentialQuantile(t.range(100).map(()=>Math.random()**2),t.interpolateBlues),{title:"Quantile",tickFormat:".2f"})}function d(e,t){return e(t.scaleSqrt([-100,0,100],["blue","white","red"]),{title:"Temperature (\xb0C)"})}function c(e,t){return e(t.scaleQuantize([1,10],t.schemePurples[9]),{title:"Unemployment rate (%)"})}function f(e,t){return e(t.scaleQuantile(t.range(1e3).map(t.randomNormal(100,20)),t.schemeSpectral[9]),{title:"Height (cm)",tickFormat:".0f"})}function p(e,t){return e(t.scaleThreshold([2.5,3.1,3.5,3.9,6,7,8,9.5],t.schemeRdBu[9]),{title:"Unemployment rate (%)",tickSize:0})}function m(e,t){return e(t.scaleOrdinal(["<10","10-19","20-29","30-39","40-49","50-59","60-69","70-79","≥80"],t.schemeSpectral[10]),{title:"Age (years)",tickSize:0})}function v(e){return e`But wait, there’s more!

How about swatches for ordinal color scales? Both variable-width swatches and [column layout](https://developer.mozilla.org/en-US/docs/Web/CSS/columns) are supported.`}function b(e,t){return e(t.scaleOrdinal(["blueberries","oranges","apples"],t.schemeCategory10))}function h(e,t){return e(t.scaleOrdinal(["Wholesale and Retail Trade","Manufacturing","Leisure and hospitality","Business services","Construction","Education and Health","Government","Finance","Self-employed","Other"],t.schemeTableau10),{columns:"180px"})}function g(e){return e`---

## Implementation`}function w(e){return function(t,{title:i,tickSize:n=6,width:a=320,height:r=44+n,marginTop:o=18,marginRight:l=0,marginBottom:s=16+n,marginLeft:u=0,ticks:d=a/64,tickFormat:c,tickValues:f}={}){function p(e,t=256){let i=document.createElement("canvas");i.width=t,i.height=1;let n=i.getContext("2d");for(let a=0;a<t;++a)n.fillStyle=e(a/(t-1)),n.fillRect(a,0,1,1);return i}let m=e.create("svg").attr("width",a).attr("height",r).attr("viewBox",[0,0,a,r]).style("overflow","visible").style("display","block"),v=e=>e.selectAll(".tick line").attr("y1",o+s-r),b;if(t.interpolate){let h=Math.min(t.domain().length,t.range().length);b=t.copy().rangeRound(e.quantize(e.interpolate(u,a-l),h)),m.append("image").attr("x",u).attr("y",o).attr("width",a-u-l).attr("height",r-o-s).attr("preserveAspectRatio","none").attr("xlink:href",p(t.copy().domain(e.quantize(e.interpolate(0,1),h))).toDataURL())}else if(t.interpolator){if(b=Object.assign(t.copy().interpolator(e.interpolateRound(u,a-l)),{range:()=>[u,a-l]}),m.append("image").attr("x",u).attr("y",o).attr("width",a-u-l).attr("height",r-o-s).attr("preserveAspectRatio","none").attr("xlink:href",p(t.interpolator()).toDataURL()),!b.ticks){if(void 0===f){let g=Math.round(d+1);f=e.range(g).map(i=>e.quantile(t.domain(),i/(g-1)))}"function"!=typeof c&&(c=e.format(void 0===c?",f":c))}}else if(t.invertExtent){let w=t.thresholds?t.thresholds():t.quantiles?t.quantiles():t.domain(),y=void 0===c?e=>e:"string"==typeof c?e.format(c):c;b=e.scaleLinear().domain([-1,t.range().length-1]).rangeRound([u,a-l]),m.append("g").selectAll("rect").data(t.range()).join("rect").attr("x",(e,t)=>b(t-1)).attr("y",o).attr("width",(e,t)=>b(t)-b(t-1)).attr("height",r-o-s).attr("fill",e=>e),f=e.range(w.length),c=e=>y(w[e],e)}else b=e.scaleBand().domain(t.domain()).rangeRound([u,a-l]),m.append("g").selectAll("rect").data(t.domain()).join("rect").attr("x",b).attr("y",o).attr("width",Math.max(0,b.bandwidth()-1)).attr("height",r-o-s).attr("fill",t),v=()=>{};return m.append("g").attr("transform",`translate(0,${r-s})`).call(e.axisBottom(b).ticks(d,"string"==typeof c?c:void 0).tickFormat("function"==typeof c?c:void 0).tickSize(n).tickValues(f)).call(v).call(e=>e.select(".domain").remove()).call(e=>e.append("text").attr("x",u).attr("y",o+s-r-6).attr("fill","currentColor").attr("text-anchor","start").attr("font-weight","bold").attr("class","title").text(i)),m.node()}}function y(e){return function({color:t,...i}){return e(t,i)}}function x(e,t){return function(i,{columns:n=null,format:a,unknown:r,swatchSize:o=15,swatchWidth:l=o,swatchHeight:s=o,marginLeft:u=0}={}){let d=`-swatches-${Math.random().toString(16).slice(2)}`,c=null==r?void 0:i.unknown(),f=null==c||c===e.scaleImplicit?[]:[c],p=i.domain().concat(f);return(void 0===a&&(a=e=>e===c?r:e),null!==n)?t.html`<div style="display: flex; align-items: center; margin-left: ${+u}px; min-height: 33px; font: 10px sans-serif;">
  <style>

.${d}-item {
  break-inside: avoid;
  display: flex;
  align-items: center;
  padding-bottom: 1px;
}

.${d}-label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - ${+l}px - 0.5em);
}

.${d}-swatch {
  width: ${+l}px;
  height: ${+s}px;
  margin: 0 0.5em 0 0;
}

  </style>
  <div style=${{width:"100%",columns:n}}>${p.map(e=>{let n=`${a(e)}`;return t.html`<div class=${d}-item>
      <div class=${d}-swatch style=${{background:i(e)}}></div>
      <div class=${d}-label title=${n}>${n}</div>
    </div>`})}
  </div>
</div>`:t.html`<div style="display: flex; align-items: center; min-height: 33px; margin-left: ${+u}px; font: 10px sans-serif;">
  <style>

.${d} {
  display: inline-flex;
  align-items: center;
  margin-right: 1em;
}

.${d}::before {
  content: "";
  width: ${+l}px;
  height: ${+s}px;
  margin-right: 0.5em;
  background: var(--color);
}

  </style>
  <div>${p.map(e=>t.html`<span class="${d}" style="--color: ${i(e)}">${a(e)}</span>`)}</div>`}}function A(e){return function({color:t,...i}){return e(t,i)}}function S(e,t){let i=e.module();return i.variable(t()).define(["md"],n),i.variable(t()).define(["Legend","d3"],a),i.variable(t()).define(["Legend","d3"],r),i.variable(t()).define(["Legend","d3"],o),i.variable(t()).define(["Legend","d3"],l),i.variable(t()).define(["Legend","d3"],s),i.variable(t()).define(["Legend","d3"],u),i.variable(t()).define(["Legend","d3"],d),i.variable(t()).define(["Legend","d3"],c),i.variable(t()).define(["Legend","d3"],f),i.variable(t()).define(["Legend","d3"],p),i.variable(t()).define(["Legend","d3"],m),i.variable(t()).define(["md"],v),i.variable(t()).define(["Swatches","d3"],b),i.variable(t()).define(["Swatches","d3"],h),i.variable(t()).define(["md"],g),i.variable(t("Legend")).define("Legend",["d3"],w),i.variable(t("legend")).define("legend",["Legend"],y),i.variable(t("Swatches")).define("Swatches",["d3","htl"],x),i.variable(t("swatches")).define("swatches",["Swatches"],A),i}function C(e){return e`# Dados para os mapas`}function k(e){return e`## Baixo Peso`}function M(e,t){return e.table(t)}function T(e){return e("baixopeso-mun-ano.csv").csv()}function D(e){return e`## PM25`}function I(e,t){return e.table(t)}function O(e){return e("pm25-mun-ano.csv").csv()}function E(e){return e`## Mortalidade Infantil`}function L(e,t){return e.table(t.map(e=>({CODMUNRES:+e.CODMUNRES,ANO:+e.ANO,OBITOS_PERINATAIS:+e.OBITOS_PERINATAIS,OBITOS_NEONATAIS:+e.OBITOS_NEONATAIS,OBITOS_INFANTIS:+e.OBITOS_INFANTIS,OBITOS_TOTAIS:+e.OBITOS_TOTAIS})))}function R(e){return e("mort-inf-mun-ano.csv").csv()}function N(e){return e`## IDH Municipal 2010`}function P(e){return e("idh 2010.xlsx").xlsx()}function $(){return 0}function F(){return{"SERIDO (PB)":"SAO VICENTE DO SERIDO (PB)","SAO LUIS DO PARAITINGA (SP)":"SAO LUIZ DO PARAITINGA (SP)","SANTA TERESINHA (BA)":"SANTA TEREZINHA (BA)","SANTAREM (PB)":"JOCA CLAUDINO (PB)","SANTA ISABEL DO PARA (PA)":"SANTA IZABEL DO PARA (PA)","PRESIDENTE JUSCELINO (RN)":"PRESIDENTE JUSCELINO (MA)","POXOREO (MT)":"POXOREU (MT)","PINGO-D'AGUA (MG)":"PINGO D'AGUA (MG)","PASSA-VINTE (MG)":"PASSA VINTE (MG)","OLHO-D'AGUA DO BORGES (RN)":"OLHO D'AGUA DO BORGES (RN)","MUQUEM DE SAO FRANCISCO (BA)":"MUQUEM DO SAO FRANCISCO (BA)","ITAPAGE (CE)":"ITAPAJE (CE)","IGUARACI (PE)":"IGUARACY (PE)","FLORINIA (SP)":"FLORINEA (SP)","EMBU (SP)":"EMBU DAS ARTES (SP)","ELDORADO DOS CARAJAS (PA)":"ELDORADO DO CARAJAS (PA)","BRASOPOLIS (MG)":"BRAZOPOLIS (MG)","BIRITIBA-MIRIM (SP)":"BIRITIBA MIRIM (SP)"}}function j(e,t,i,n){let a=e.sheet(0,{headers:!0}),r=[...t.keys()],o=new Set(r),l=[];for(let s of(i.value=[],a)){let u=s.Territorialidade.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase();n[u]&&(u=n[u]);let d=t.get(u);d&&(l.push({municipio:u,codigo:d,idh:s.IDHM}),o.delete(u))}return i.value={unmatched:{},noData:o},l}function B(e,t){return e.table(t)}function G(e){return e`## Dados consolidados`}function U(e,t,i){let n=new Map,a=e=>{if(e.ANO<2012)return;let t=e.CODMUNRES.slice(0,6),i=t+","+e.ANO,a=n.has(i)?n.get(i):{};Object.assign(a,e),a.CODMUNRES=t,n.set(i,a)};for(let r of e)a(r);for(let o of t)a(o);for(let l of i)a(l);return[...n.values()]}function z(e,t){return e.table(t)}function V(e){return e("municipios.csv").csv()}function q(e){return new Map([...e.map(({codigo_sdv:e,municipio:t,sigla:i})=>(")"!=t[t.length-1]&&(t+=` (${i})`),[t=t.normalize("NFD").replace(/[\u0300-\u036f]/g,""),e]))])}function H(e,t){let n=e.module();function a(){return this.url}let r=new Map([["pm25-mun-ano.csv",{url:new i.U(i(1644)),mimeType:"text/csv",toString:a}],["baixopeso-mun-ano.csv",{url:new i.U(i(1848)),mimeType:"text/csv",toString:a}],["municipios.csv",{url:new i.U(i(3018)),mimeType:"text/csv",toString:a}],["mort-inf-mun-ano.csv",{url:new i.U(i(5242)),mimeType:"text/csv",toString:a}],["idh 2010.xlsx",{url:new i.U(i(2813)),mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",toString:a}]]);return n.builtin("FileAttachment",e.fileAttachments(e=>r.get(e))),n.variable(t()).define(["md"],C),n.variable(t()).define(["md"],k),n.variable(t("viewof table")).define("viewof table",["Inputs","baixopesoMunAno"],M),n.variable(t("table")).define("table",["Generators","viewof table"],(e,t)=>e.input(t)),n.variable(t("baixopesoMunAno")).define("baixopesoMunAno",["FileAttachment"],T),n.variable(t()).define(["md"],D),n.variable(t("viewof table1")).define("viewof table1",["Inputs","pm25MunAno"],I),n.variable(t("table1")).define("table1",["Generators","viewof table1"],(e,t)=>e.input(t)),n.variable(t("pm25MunAno")).define("pm25MunAno",["FileAttachment"],O),n.variable(t()).define(["md"],E),n.variable(t("viewof tabelaMortalidade")).define("viewof tabelaMortalidade",["Inputs","mortalidadeMunAno"],L),n.variable(t("tabelaMortalidade")).define("tabelaMortalidade",["Generators","viewof tabelaMortalidade"],(e,t)=>e.input(t)),n.variable(t("mortalidadeMunAno")).define("mortalidadeMunAno",["FileAttachment"],R),n.variable(t()).define(["md"],N),n.variable(t("idhm2010_xlsx")).define("idhm2010_xlsx",["FileAttachment"],P),n.define("initial debug",$),n.variable(t("mutable debug")).define("mutable debug",["Mutable","initial debug"],(e,t)=>new e(t)),n.variable(t("debug")).define("debug",["mutable debug"],e=>e.generator),n.variable(t("altName")).define("altName",F),n.variable(t("idhm")).define("idhm",["idhm2010_xlsx","nome_codigo","mutable debug","altName"],j),n.variable(t()).define(["Inputs","idhm"],B),n.variable(t()).define(["md"],G),n.variable(t("dadosMunicipio")).define("dadosMunicipio",["pm25MunAno","baixopesoMunAno","mortalidadeMunAno"],U),n.variable(t()).define(["Inputs","dadosMunicipio"],z),n.variable(t("municipios")).define("municipios",["FileAttachment"],V),n.variable(t("nome_codigo")).define("nome_codigo",["municipios"],q),n}async function _(e,t){return e`# Inputs
<div style="margin-top: -3px; font-size: 1.05em;">*a.k.a “The Grand Native Inputs Bazaar”*</div>

<div style="max-width: 500px; margin: 30px 0; padding: 15px 30px; background-color: #ffffee; font: 700 18px/24px sans-serif;">✨ Rejoice! Observable now has <a href="https://observablehq.com/@observablehq/inputs">an official inputs library</a>. If it contains the input you need, you should probably be using that instead of this notebook. ✨</div>

<img width="350px" src="${await t("capstan.gif").url()}" />

A collection of assorted fancy inputs, odds and ends — with which to produce values to feed your burgeoning sketches. All inputs support optional **titles** and **descriptions**; where it makes sense, inputs also support a **submit** option, which allows you to prevent the value from updating until the input has been finalized.

Wares we have on offer: 
  * [\`slider\`](#sliderDemo)
  * [\`button\`](#buttonDemo)
  * [\`select\`](#selectDemo)
  * [\`autoSelect\`](#autoSelectDemo)
  * [\`color\`](#colorDemo)
  * [\`coordinates\`](#coordinatesDemo)
  * [\`worldMapCoordinates\`](#worldMapCoordinatesDemo)
  * [\`usaMapCoordinates\`](#usaMapCoordinatesDemo)
  * [\`date\`](#dateDemo)
  * [\`time\`](#timeDemo)
  * [\`file\`](#fileDemo)
  * [\`text\`](#textDemo)
  * [\`textarea\`](#textareaDemo)
  * [\`radio\`](#radioDemo)
  * [\`checkbox\`](#checkboxDemo)
  * [\`number\`](#numberDemo)
  * [\`password\`](#passwordDemo)`}function W(e){return e`| <h3>Friends & Family:</h3>  |   |
|---|---|
| **[@mbostock/form-input](/@mbostock/form-input)**  | Fully custom forms, combining inputs into a single reactive cell. |
| **[@mbostock/scrubber](/@mbostock/scrubber)** | A slider that automatically plays through its range, useful for driving and scrubbing through animations. |
| **[@bumbeishvili/input-groups](/@bumbeishvili/input-groups)** | A wrapper function that can put many of these inputs into a more compact grid layout. | 
| **[@zechasault/color-schemes-and-interpolators-picker](/@zechasault/color-schemes-and-interpolators-picker)**  | Color scheme and interpolation pickers. |
| **[@awhitty/fips-county-code-brush](/@awhitty/fips-county-code-brush)**  | A brushable map of the United States, allowing you to quickly select sets of counties to get their FIPS codes. |
| **[@mootari/range-slider](https://observablehq.com/@mootari/range-slider)**  |  True range sliders, setting both a minimum and maximum value. |
| **[@bumbeishvili/data-driven-range-sliders](/@bumbeishvili/data-driven-range-sliders)** | Data-driven range sliders, displaying a distribution histogram of the underlying data. |
| **[@trebor/snapping-histogram-slider](/@trebor/snapping-histogram-slider)** | Another data-driven range slider option. |
| **[@mootari’s 2D Slider](https://observablehq.com/d/98bbb19bf9e859ee)** | Two dimensional sliders, exploring discrete points on a plane. |
| **[@yurivish/ternary-slider](/@yurivish/ternary-slider)** | Nifty ternary plot inputs, describing the percentages of a whole composed of exactly three things. |
| **[@rreusser/binary-input](/@rreusser/binary-input)** | Input numbers in binary, great for working with values where results vary with specific bit positions. |
| **[@bartok32/diy-inputs](/@bartok32/diy-inputs)** | A fun tool for defining your own fancy and colorful inputs. |
| **[@bobkerns/elements-input](/@bobkerns/elements-input)** | A periodic table of the elements input! You can construct molecules programmatically, or click on the table to create formulas. |
| **[@fil/selectflat](/@fil/selectflat)** | A fast selector to explore a discrete parameter space. The value changes on mouseover, and sticks when you click. |
| **[@oscar6echo/player](/@oscar6echo/player)** | A slider with buttons to play, pause, step, and change speed and direction — useful for animations. |
| **[@harrislapiroff/list-input](/@harrislapiroff/list-input)** | A input for when you want more than one of something. |
| **[@nhogs/easing-graphs-editor](/@nhogs/easing-graphs-editor)** | A curve input to display and edit values of animated properties over time, such as easing curves and animation curves. |
| **[@j-f1/checkbox](/@j-f1/checkbox)** | A simple checkbox input that provides a boolean value. |

<br>*If you have any improvements for the bazaar, [please make your change in a fork and send it to me as a suggestion.](https://observablehq.com/@observablehq/suggestions-and-comments)*`}function Z(e){return e`---
## Sliders

~~~js
import {slider} from "@jashkenas/inputs"
~~~`}function Y(e){return e()}function X(e){return e({min:0,max:1,step:.01,format:".0%",description:"Zero to one, formatted as a percentage"})}function J(e){return e({min:0,max:1,step:.01,format:e=>`${Math.round(100*e)} per cent`,description:"Zero to one, formatted with a custom function"})}function K(e){return e({min:0,max:1e9,step:1e3,value:325e4,format:",",description:"Zero to one billion, in steps of one thousand, formatted as a (US) number"})}function Q(e){return e({min:0,max:100,step:1,value:10,title:"Integers",description:"Integers from zero through 100"})}function ee(e){return e({min:.9,max:1.1,precision:3,description:"A high precision slider example"})}function et(e){return e({min:.9,max:1.1,precision:3,submit:!0,description:"The same as a4, but only changes value on submit"})}function ei(e){return e`More [fancy slider techniques](https://observablehq.com/@mootari/prime-numbers-slider).`}function en(e){return function(t={}){let{min:i=0,max:n=1,value:a=(n+i)/2,step:r="any",precision:o=2,title:l,description:s,disabled:u,getValue:d,format:c,display:f,submit:p}="number"==typeof t?{value:t}:t;return o=Math.pow(10,o),d||(d=e=>Math.round(e.valueAsNumber*o)/o),e({type:"range",title:l,description:s,submit:p,format:c,display:f,attributes:{min:i,max:n,step:r,disabled:u,value:a},getValue:d})}}function ea(e){return e`---
## Buttons

~~~js
import {button} from "@jashkenas/inputs"
~~~`}function er(e){return e()}function eo(e){return!this}function el(e){return e({value:"Click me",description:"We use a reference to the button below to record the time you pressed it."})}function es(e){return new Date(Date.now()).toUTCString()}function eu(e){return function(t={}){let{value:i="Ok",title:n,description:a,disabled:r}="string"==typeof t?{value:t}:t,o=e({type:"button",title:n,description:a,attributes:{disabled:r,value:i}});return o.output.remove(),o}}function ed(e){return e`---
## Dropdown Menus and Multiselects

~~~js
import {select} from "@jashkenas/inputs"
~~~`}function ec(e){return e(["Spring","Summer","Fall","Winter"])}function ef(e){return e}function ep(e){return e({title:"Stooges",description:"Please pick your favorite stooge.",options:["Curly","Larry","Moe","Shemp"],value:"Moe"})}function em(e){return e}function ev(e){return e({description:"As a child, which vegetables did you refuse to eat?",options:["Spinach","Broccoli","Brussels Sprouts","Cauliflower","Kale","Turnips","Green Beans","Asparagus"],multiple:!0})}function eb(e){return e}function eh(e){let t=e({title:"How are you feeling today?",options:[{label:"\uD83E\uDD37",value:"shrug"},{label:"\uD83D\uDE02",value:"tears-of-joy"},{label:"\uD83D\uDE0D",value:"loving-it"},{label:"\uD83E\uDD14",value:"hmmm"},{label:"\uD83D\uDE31",value:"yikes",disabled:!0},{label:"\uD83D\uDE08",value:"mischievous"},{label:"\uD83D\uDCA9",value:"poo"}],value:"hmmm"});return t.input.style.fontSize="30px",t.input.style.marginTop="8px",t}function eg(e){return e}function ew(e,t){return function(i={}){let{value:n,title:a,description:r,disabled:o,submit:l,multiple:s,size:u,options:d}=Array.isArray(i)?{options:i}:i;d=d.map(e=>"object"==typeof e?e:{value:e,label:e});let c=e({type:"select",title:a,description:r,submit:l,attributes:{disabled:o},getValue(e){let t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>e.value);return s?t:t[0]},form:t`
      <form>
        <select name="input" ${s?`multiple size="${u||d.length}"`:""}>
          ${d.map(({value:e,label:i,disabled:a})=>Object.assign(t`<option>`,{value:e,selected:Array.isArray(n)?n.includes(e):n===e,disabled:!!a&&a,textContent:i}))}
        </select>
      </form>
    `});return c.output.remove(),c}}function ey(e){return e`---
## Autoselects
*A variant of an option menu, using an autocompleting text input, via HTML’s datalist element.* 

~~~js
import {autoSelect} from "@jashkenas/inputs"
~~~`}function ex(e,t){return e({options:t.objects.states.geometries.map(e=>e.properties.name),placeholder:"Search for a US state . . ."})}function eA(e){return e}function eS(e,t){return function(i={}){let{value:n,title:a,description:r,disabled:o,autocomplete:l="off",placeholder:s,size:u,options:d,list:c="options"}=Array.isArray(i)?{options:i}:i,f=new Set(d),p=e({type:"text",title:a,description:r,attributes:{disabled:o},action(e){e.value=e.input.value=n||"",e.onsubmit=e=>e.preventDefault(),e.input.oninput=function(t){t.stopPropagation(),e.value=e.input.value,(!e.value||f.has(e.value))&&e.dispatchEvent(new CustomEvent("input"))}},form:t`
      <form>
         <input name="input" type="text" autocomplete="off" 
          placeholder="${s||""}" style="font-size: 1em;" list=${c}>
          <datalist id="${c}">
              ${d.map(e=>Object.assign(t`<option>`,{value:e}))}
          </datalist>
      </form>
      `});return p.output.remove(),p}}function eC(e){return e`---
## Color Pickers

*value: a hexadecimal string, e.g. * \`"#bada55"\` 

~~~js
import {color} from "@jashkenas/inputs"
~~~`}function ek(e){return e()}function eM(e){return e({value:"#0000ff",title:"Background Color",description:"This color picker starts out blue"})}function eT(e){return function(t={}){let{value:i="#000000",title:n,description:a,disabled:r,submit:o,display:l}="string"==typeof t?{value:t}:t,s=e({type:"color",title:n,description:a,submit:o,display:l,attributes:{disabled:r,value:i}});return s.input.value="",s.input.value=i,(n||a)&&(s.input.style.margin="5px 0"),s}}function eD(e){return e` ---
## Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {coordinates} from "@jashkenas/inputs"
~~~`}function eI(e){return e()}function eO(e){return e}function eE(e){return e({title:"Hometown",description:"Enter the coordinates of where you were born",value:[-122.27,37.87],submit:!0})}function eL(e){return e}function eR(e,t){return function(i={}){let{value:n=[],title:a,description:r,submit:o}=Array.isArray(i)?{value:i}:i,[l,s]=n;l=null!=l?l:"",s=null!=s?s:"";let u=e`<input name="input" type="number" autocomplete="off" min="-180" max="180" style="width: 80px;" step="any" value="${l}" />`,d=e`<input name="input" type="number" autocomplete="off" min="-90" max="90" style="width: 80px;" step="any" value="${s}" />`,c=t({type:"coordinates",title:a,description:r,submit:o,getValue(){let e=u.valueAsNumber,t=d.valueAsNumber;return[isNaN(e)?null:e,isNaN(t)?null:t]},form:e`
      <form>
        <label style="display: inline-block; font: 600 0.8rem sans-serif; margin: 6px 0 3px;">
          <span style="display: inline-block; width: 70px;">Longitude:</span>
          ${u}
        </label>
        <br>
        <label style="display: inline-block; font: 600 0.8rem sans-serif; margin: 0 0 6px;">
          <span style="display: inline-block; width: 70px;">Latitude:</span>
          ${d}
        </label>
      </form>
    `});return c.output.remove(),c}}function eN(e){return e` ---
## World Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {worldMapCoordinates} from "@jashkenas/inputs"
~~~`}function eP(e){return e([-122.27,37.87])}function e$(e){return e}function eF(e,t,i,n,a,r,o){return function(l={}){let{value:s=[],title:u,description:d,width:c=400}=Array.isArray(l)?{value:l}:l,f=Math.round(.525*c),[p,m]=s;p=null!=p?p:null,m=null!=m?m:null;let v=e`<form style="width: ${c}px;"></form>`,b=t.context2d(c,f),h=b.canvas;h.style.margin="10px 0 3px";let g=i.geoNaturalEarth1().precision(.1).fitSize([c,f],{type:"Sphere"}),w=i.geoPath(g,b).pointRadius(2.5);function y(){if(b.fillStyle="#fff",b.fillRect(0,0,c,f),b.beginPath(),w(n),b.lineWidth=.35,b.strokeStyle="#ddd",b.stroke(),b.beginPath(),w(a),b.fillStyle="#f4f4f4",b.fill(),b.beginPath(),w(r),b.strokeStyle="#aaa",b.stroke(),null!=p&&null!=m){let e={type:"MultiPoint",coordinates:[[p,m]]};b.beginPath(),w(e),b.fillStyle="#f00",b.fill()}}v.append(h),h.onclick=function(e){let{offsetX:t,offsetY:i}=e;var n=g.invert([t,i]);p=+n[0].toFixed(2),m=+n[1].toFixed(2),y(),h.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},y();let x=o({type:"worldMapCoordinates",title:u,description:d,display:t=>e`<div style="width: ${c}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-bottom: 5px;">
            <span style="color: #777;">Longitude:</span> ${null!=p?p.toFixed(2):""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${null!=m?m.toFixed(2):""} 
          </div>`,getValue:()=>[null!=p?p:null,null!=m?m:null],form:v});return x}}function ej(e){return e` ---
## U.S.A. Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {usaMapCoordinates} from "@jashkenas/inputs"
~~~`}function eB(e){return e([-122.27,37.87])}function eG(e){return e}function eU(e){return e({title:"A Mini Map",description:"Defaults to New York City",width:200,value:[-74,40.71]})}function ez(e){return e}function eV(e,t,i,n,a,r){return function(o={}){let{value:l=[],title:s,description:u,width:d=400}=Array.isArray(o)?{value:o}:o,c=d/960,f=600*c,[p,m]=l;p=null!=p?p:null,m=null!=m?m:null;let v=e`<form style="width: ${d}px;"></form>`,b=t.context2d(d,f),h=b.canvas;h.style.margin="5px 0 20px";let g=i.geoAlbersUsa().scale(1280).translate([480,300]),w=i.geoPath().context(b).pointRadius(2.5/c);function y(){if(b.clearRect(0,0,d,f),b.save(),b.scale(c,c),b.lineWidth=.35/c,b.beginPath(),w(n),b.fillStyle="#f4f4f4",b.fill(),b.beginPath(),w(a),b.strokeStyle="#aaa",b.stroke(),null!=p&&null!=m){let e={type:"MultiPoint",coordinates:[g([p,m])]};b.beginPath(),w(e),b.fillStyle="#f00",b.fill()}b.restore()}v.append(h),h.onclick=function(e){let{offsetX:t,offsetY:i}=e;var n=g.invert([t/c,i/c]);p=+n[0].toFixed(2),m=+n[1].toFixed(2),y(),h.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},y();let x=r({type:"worldMapCoordinates",title:s,description:u,display:t=>e`<div style="position: absolute; width: ${d}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-top: -18px;">
            <span style="color: #777;">Longitude:</span> ${null!=p?p:""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${null!=m?m:""} 
          </div>`,getValue:()=>[null!=p?p:null,null!=m?m:null],form:v});return x}}function eq(e){return e` ---
## Dates

*value: a YYYY-MM-DD formatted string: * \`"2016-11-08"\` 

~~~js
import {date} from "@jashkenas/inputs"
~~~`}function eH(e){return e()}function e_(e){return e({title:"2017",min:"2017-01-01",max:"2017-12-31",value:"2017-01-01",description:"Only dates within the 2017 calendar year are allowed"})}function eW(e){return function(t={}){let{min:i,max:n,value:a,title:r,description:o,disabled:l,display:s}="string"==typeof t?{value:t}:t;return e({type:"date",title:r,description:o,display:s,attributes:{min:i,max:n,disabled:l,value:a}})}}function eZ(e){return e` ---
## Times

*value: a HH:MM:SS formatted string: * \`"09:30:45"\`
<br>*(Time values are always in 24-hour format)*

~~~js
import {time} from "@jashkenas/inputs"
~~~`}function eY(e){return e()}function eX(e){return e}function eJ(e){return e({title:"Afternoon",min:"12:00:00",max:"23:59:59",value:"13:00:00",step:1,description:"Only times after noon are allowed, and seconds are included"})}function eK(e){return e}function eQ(e){return function(t={}){let{min:i,max:n,step:a,value:r,title:o,description:l,disabled:s,display:u}="string"==typeof t?{value:t}:t,d=e({type:"time",title:o,description:l,display:u,getValue:e=>e.value?e.value:void 0,attributes:{min:i,max:n,step:a,disabled:s,value:r}});return d.output.remove(),d}}function e1(e){return e`---
## File Upload
*Use the JavaScript [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications) to work with uploaded file contents.*

\`import {file} from "@jashkenas/inputs"\``}function e0(e){return e()}function e2(e){return e({title:"Photographs",description:"Only .jpg files are allowed in this example. Choose some images, and they’ll appear in the cell below.",accept:".jpg",multiple:!0})}async function e5(e,t,i){let n=e`<div>`;for(var a=0;a<t.length;a++){t[a];let r=e`<img height="125px" style="margin: 2px;" />`;r.src=await i.url(t[a]),n.append(r)}return n}function e4(e){return function(t={}){let{multiple:i,accept:n,title:a,description:r,disabled:o}=t,l=e({type:"file",title:a,description:r,attributes:{multiple:i,accept:n,disabled:o},action(e){e.input.onchange=()=>{e.value=i?e.input.files:e.input.files[0],e.dispatchEvent(new CustomEvent("input"))}}});return l.output.remove(),l.input.onchange(),l}}function e3(e){return e`---
## Text Inputs

~~~js
import {text} from "@jashkenas/inputs"
~~~`}function e6(e){return e()}function e7(e){return e({title:"A Text Input",placeholder:"Placeholder text",description:"Note that text inputs don’t show output on the right"})}function e8(e){return e}function e9(e){return e({placeholder:"Placeholder text",description:"This input only changes value on submit",submit:"Go"})}function te(e){return e}function tt(e){return function(t={}){let{value:i,title:n,description:a,disabled:r,autocomplete:o="off",maxlength:l,minlength:s,pattern:u,placeholder:d,size:c,submit:f,getValue:p}="string"==typeof t?{value:t}:t,m=e({type:"text",title:n,description:a,submit:f,getValue:p,attributes:{value:i,autocomplete:o,maxlength:l,minlength:s,pattern:u,placeholder:d,size:c,disabled:r}});return m.output.remove(),m.input.style.fontSize="1em",m}}function ti(e){return e`---
## Textareas

~~~js
import {textarea} from "@jashkenas/inputs"
~~~`}function tn(e){return e()}function ta(e){return e}function tr(e){return e({title:"Your Great American Novel",placeholder:"Insert story here...",spellcheck:!0,width:"100%",rows:10,submit:"Publish"})}function to(e){return e}function tl(e,t){return function(i={}){let{value:n="",title:a,description:r,autocomplete:o,cols:l=45,rows:s=3,width:u,height:d,maxlength:c,placeholder:f,spellcheck:p,wrap:m,submit:v,disabled:b,getValue:h}="string"==typeof i?{value:i}:i,g=e({form:t`<form><textarea style="display: block; font-size: 0.8em;" name=input>${n}</textarea></form>`,title:a,description:r,submit:v,getValue:h,attributes:{autocomplete:o,cols:l,rows:s,maxlength:c,placeholder:f,spellcheck:p,wrap:m,disabled:b}});return g.output.remove(),null!=u&&(g.input.style.width=u),null!=d&&(g.input.style.height=d),v&&(g.submit.style.margin="0"),(a||r)&&(g.input.style.margin="3px 0"),g}}function ts(e){return e`---
## Radio Buttons

~~~js
import {radio} from "@jashkenas/inputs"
~~~`}function tu(e){return e(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function td(e){return e}function tc(e){return e({title:"Contact Us",description:"Please select your preferred contact method",options:[{label:"By Email",value:"email"},{label:"By Phone",value:"phone"},{label:"By Pager",value:"pager"},],value:"pager"})}function tf(e){return e}function tp(e,t){return function(i={}){let{value:n,title:a,description:r,submit:o,options:l,disabled:s}=Array.isArray(i)?{options:i}:i;l=l.map(e=>"string"==typeof e?{value:e,label:e}:e);let u=e({type:"radio",title:a,description:r,submit:o,getValue(e){if(e.checked)return e.value;let t=Array.prototype.find.call(e,e=>e.checked);return t?t.value:void 0},form:t`
      <form>
        ${l.map(({value:e,label:i},a)=>{let r=t`<input type=radio name=input ${e===n?"checked":""} style="vertical-align: top; ${0===a?"margin-left: 1px;":""}" />`;r.setAttribute("value",e),s&&r.setAttribute("value",s);let o=t`
          <label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${r}
           ${i}
          </label>`;return o})}
      </form>
    `});return u.output.remove(),u}}function tm(e){return e`---
## Checkboxes

~~~js
import {checkbox} from "@jashkenas/inputs"
~~~`}function tv(e){return e(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function tb(e){return e}function th(e){return e({title:"Colors",description:"Please select your favorite colors",options:[{value:"r",label:"Red"},{value:"o",label:"Orange"},{value:"y",label:"Yellow"},{value:"g",label:"Green"},{value:"b",label:"Blue"},{value:"i",label:"Indigo"},{value:"v",label:"Violet"}],value:["r","g","b"],submit:!0})}function tg(e){return e}function tw(e){return e({description:"Just a single checkbox to toggle",options:[{value:"toggle",label:"On"}],value:"toggle"})}function ty(e){return e}function tx(e,t){return function(i={}){let{value:n,title:a,description:r,submit:o,disabled:l,options:s}=Array.isArray(i)?{options:i}:i;s=s.map(e=>"string"==typeof e?{value:e,label:e}:e);let u=e({type:"checkbox",title:a,description:r,submit:o,getValue:e=>e.length?Array.prototype.filter.call(e,e=>e.checked).map(e=>e.value):!!e.checked&&e.value,form:t`
      <form>
        ${s.map(({value:e,label:i},a)=>{let r=t`<input type=checkbox name=input ${(n||[]).indexOf(e)>-1?"checked":""} style="vertical-align: top; ${0===a?"margin-left: 1px;":""}" />`;r.setAttribute("value",e),l&&r.setAttribute("disabled",l);let o=t`<label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${r}
           ${i}
          </label>`;return o})}
      </form>
    `});return u.output.remove(),u}}function tA(e){return e`---
## Numbers

~~~js
import {number} from "@jashkenas/inputs"
~~~`}function tS(e){return e()}function tC(e){return e}function tk(e){return e({placeholder:"13+",title:"Your Age",submit:!0})}function tM(e){return e}function tT(e){return function(t={}){let{value:i,title:n,description:a,disabled:r,placeholder:o,submit:l,step:s="any",min:u,max:d}="number"==typeof t||"string"==typeof t?{value:+t}:t,c=e({type:"number",title:n,description:a,submit:l,attributes:{value:i,placeholder:o,step:s,min:u,max:d,autocomplete:"off",disabled:r},getValue:e=>e.valueAsNumber});return c.output.remove(),c.input.style.width="auto",c.input.style.fontSize="1em",c}}function tD(e){return e`---
## Passwords

~~~js
import {password} from "@jashkenas/inputs"
~~~`}function tI(e){return e({value:"password"})}function tO(e){return e}function tE(e){return e({title:"Your super secret password",description:"Less than 12 characters, please.",minlength:6,maxlength:12})}function tL(e){return e}function tR(e){return function(t={}){let{value:i,title:n,description:a,disabled:r,autocomplete:o="off",maxlength:l,minlength:s,pattern:u,placeholder:d,size:c,submit:f}="string"==typeof t?{value:t}:t,p=e({type:"password",title:n,description:a,submit:f,attributes:{value:i,autocomplete:o,maxlength:l,minlength:s,pattern:u,placeholder:d,size:c,disabled:r}});return p.output.remove(),p.input.style.fontSize="1em",p}}function tN(e){return e`---
## Wishlist (Send suggestions, please!)

* 3D coordinate input (for say, positioning a camera in a WebGL sketch)
* Geocoder search with location autocomplete that returns longitude and latitude.
* Degrees or radians input, for circular things, or angles.
* A dimensions input, or a box-model input, with margin (and optionally, padding).
* A map-projection-picker input, rendering little thumbnails of all the d3-geo-projections.
* Drag and drop file upload input.
* Alternative coordinate inputs, e.g. Right Ascension, Declination.
* Other useful formatting options.

---`}function tP(e,t){return function(i){let{form:n,type:a="text",attributes:r={},action:o,getValue:l,title:s,description:u,format:d,display:c,submit:f,options:p}=i,m=e`<div></div>`;if(n||(n=e`<form>
	<input name=input type=${a} />
  </form>`),Object.keys(r).forEach(e=>{let t=r[e];null!=t&&n.input.setAttribute(e,t)}),f&&n.append(e`<input name=submit type=submit style="margin: 0 0.75em" value="${"string"==typeof f?f:"Submit"}" />`),n.append(e`<output name=output style="font: 14px Menlo, Consolas, monospace; margin-left: 0.5em;"></output>`),s&&n.prepend(e`<div style="font: 700 0.9rem sans-serif; margin-bottom: 3px;">${s}</div>`),u&&n.append(e`<div style="font-size: 0.85rem; font-style: italic; margin-top: 3px;">${u}</div>`),d&&(d="function"==typeof d?d:t.format(d)),o)o(n);else{let v=f?"onsubmit":"button"==a?"onclick":"checkbox"==a||"radio"==a?"onchange":"oninput";n[v]=e=>{e&&e.preventDefault();let t=l?l(n.input):n.input.value;if(n.output){let i=c?c(t):d?d(t):t;if(i instanceof window.Element){for(;n.output.hasChildNodes();)n.output.removeChild(n.output.lastChild);n.output.append(i)}else n.output.value=i}n.value=t,"oninput"!==v&&n.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},"oninput"!==v&&(m.oninput=e=>e&&e.stopPropagation()&&e.preventDefault()),"onsubmit"!==v&&(n.onsubmit=e=>e&&e.preventDefault()),n[v]()}for(;n.childNodes.length;)m.appendChild(n.childNodes[0]);return n.append(m),n}}function t$(e){return e("d3-geo@1")}function tF(e){return e("d3-format@1")}function tj(e){return e("topojson-client@3")}async function tB(){return(await fetch("https://cdn.jsdelivr.net/npm/world-atlas@1/world/110m.json")).json()}function tG(e,t){return e.feature(t,t.objects.land)}function tU(e,t){return e.feature(t,t.objects.countries)}async function tz(){return(await fetch("https://cdn.jsdelivr.net/npm/us-atlas@^2.1/us/states-10m.json")).json()}function tV(e,t){return e.feature(t,t.objects.nation)}function tq(e,t){return e.feature(t,t.objects.states)}function tH(e){return e.geoGraticule10()}function t_(e){let t=e`License: [MIT](https://opensource.org/licenses/MIT)`;return t.value="MIT",t}function tW(e){return e`*Clip art courtesy [ClipArt ETC](https://etc.usf.edu/clipart/), radio buttons and checkboxes courtesy [Amit Sch](https://observablehq.com/@meetamit/multiple-choice-inputs).*`}function tZ(e,t){let n=e.module(),a=new Map([["capstan.gif",{url:new i.U(i(5521)),mimeType:"image/gif",toString:function(){return this.url}}]]);return n.builtin("FileAttachment",e.fileAttachments(e=>a.get(e))),n.variable(t()).define(["md","FileAttachment"],_),n.variable(t()).define(["md"],W),n.variable(t("sliderDemo")).define("sliderDemo",["md"],Z),n.variable(t("viewof a")).define("viewof a",["slider"],Y),n.variable(t("a")).define("a",["Generators","viewof a"],(e,t)=>e.input(t)),n.variable(t("viewof a1")).define("viewof a1",["slider"],X),n.variable(t("a1")).define("a1",["Generators","viewof a1"],(e,t)=>e.input(t)),n.variable(t("viewof a1_1")).define("viewof a1_1",["slider"],J),n.variable(t("a1_1")).define("a1_1",["Generators","viewof a1_1"],(e,t)=>e.input(t)),n.variable(t("viewof a2")).define("viewof a2",["slider"],K),n.variable(t("a2")).define("a2",["Generators","viewof a2"],(e,t)=>e.input(t)),n.variable(t("viewof a3")).define("viewof a3",["slider"],Q),n.variable(t("a3")).define("a3",["Generators","viewof a3"],(e,t)=>e.input(t)),n.variable(t("viewof a4")).define("viewof a4",["slider"],ee),n.variable(t("a4")).define("a4",["Generators","viewof a4"],(e,t)=>e.input(t)),n.variable(t("viewof a5")).define("viewof a5",["slider"],et),n.variable(t("a5")).define("a5",["Generators","viewof a5"],(e,t)=>e.input(t)),n.variable(t()).define(["md"],ei),n.variable(t("slider")).define("slider",["input"],en),n.variable(t("buttonDemo")).define("buttonDemo",["md"],ea),n.variable(t("viewof b")).define("viewof b",["button"],er),n.variable(t("b")).define("b",["Generators","viewof b"],(e,t)=>e.input(t)),n.variable(t()).define(["b"],eo),n.variable(t("viewof b1")).define("viewof b1",["button"],el),n.variable(t("b1")).define("b1",["Generators","viewof b1"],(e,t)=>e.input(t)),n.variable(t()).define(["b1"],es),n.variable(t("button")).define("button",["input"],eu),n.variable(t("selectDemo")).define("selectDemo",["md"],ed),n.variable(t("viewof dd")).define("viewof dd",["select"],ec),n.variable(t("dd")).define("dd",["Generators","viewof dd"],(e,t)=>e.input(t)),n.variable(t()).define(["dd"],ef),n.variable(t("viewof dd1")).define("viewof dd1",["select"],ep),n.variable(t("dd1")).define("dd1",["Generators","viewof dd1"],(e,t)=>e.input(t)),n.variable(t()).define(["dd1"],em),n.variable(t("viewof dd2")).define("viewof dd2",["select"],ev),n.variable(t("dd2")).define("dd2",["Generators","viewof dd2"],(e,t)=>e.input(t)),n.variable(t()).define(["dd2"],eb),n.variable(t("viewof dd3")).define("viewof dd3",["select"],eh),n.variable(t("dd3")).define("dd3",["Generators","viewof dd3"],(e,t)=>e.input(t)),n.variable(t()).define(["dd3"],eg),n.variable(t("select")).define("select",["input","html"],ew),n.variable(t("autoSelectDemo")).define("autoSelectDemo",["md"],ey),n.variable(t("viewof as")).define("viewof as",["autoSelect","usa"],ex),n.variable(t("as")).define("as",["Generators","viewof as"],(e,t)=>e.input(t)),n.variable(t()).define(["as"],eA),n.variable(t("autoSelect")).define("autoSelect",["input","html"],eS),n.variable(t("colorDemo")).define("colorDemo",["md"],eC),n.variable(t("viewof c")).define("viewof c",["color"],ek),n.variable(t("c")).define("c",["Generators","viewof c"],(e,t)=>e.input(t)),n.variable(t("viewof c1")).define("viewof c1",["color"],eM),n.variable(t("c1")).define("c1",["Generators","viewof c1"],(e,t)=>e.input(t)),n.variable(t("color")).define("color",["input"],eT),n.variable(t("coordinatesDemo")).define("coordinatesDemo",["md"],eD),n.variable(t("viewof coords1")).define("viewof coords1",["coordinates"],eI),n.variable(t("coords1")).define("coords1",["Generators","viewof coords1"],(e,t)=>e.input(t)),n.variable(t()).define(["coords1"],eO),n.variable(t("viewof coords2")).define("viewof coords2",["coordinates"],eE),n.variable(t("coords2")).define("coords2",["Generators","viewof coords2"],(e,t)=>e.input(t)),n.variable(t()).define(["coords2"],eL),n.variable(t("coordinates")).define("coordinates",["html","input"],eR),n.variable(t("worldMapCoordinatesDemo")).define("worldMapCoordinatesDemo",["md"],eN),n.variable(t("viewof worldMap1")).define("viewof worldMap1",["worldMapCoordinates"],eP),n.variable(t("worldMap1")).define("worldMap1",["Generators","viewof worldMap1"],(e,t)=>e.input(t)),n.variable(t()).define(["worldMap1"],e$),n.variable(t("worldMapCoordinates")).define("worldMapCoordinates",["html","DOM","d3geo","graticule","land","countries","input"],eF),n.variable(t("usaMapCoordinatesDemo")).define("usaMapCoordinatesDemo",["md"],ej),n.variable(t("viewof usaMap1")).define("viewof usaMap1",["usaMapCoordinates"],eB),n.variable(t("usaMap1")).define("usaMap1",["Generators","viewof usaMap1"],(e,t)=>e.input(t)),n.variable(t()).define(["usaMap1"],eG),n.variable(t("viewof usaMap2")).define("viewof usaMap2",["usaMapCoordinates"],eU),n.variable(t("usaMap2")).define("usaMap2",["Generators","viewof usaMap2"],(e,t)=>e.input(t)),n.variable(t()).define(["usaMap2"],ez),n.variable(t("usaMapCoordinates")).define("usaMapCoordinates",["html","DOM","d3geo","nation","states","input"],eV),n.variable(t("dateDemo")).define("dateDemo",["md"],eq),n.variable(t("viewof d")).define("viewof d",["date"],eH),n.variable(t("d")).define("d",["Generators","viewof d"],(e,t)=>e.input(t)),n.variable(t("viewof d1")).define("viewof d1",["date"],e_),n.variable(t("d1")).define("d1",["Generators","viewof d1"],(e,t)=>e.input(t)),n.variable(t("date")).define("date",["input"],eW),n.variable(t("timeDemo")).define("timeDemo",["md"],eZ),n.variable(t("viewof t")).define("viewof t",["time"],eY),n.variable(t("t")).define("t",["Generators","viewof t"],(e,t)=>e.input(t)),n.variable(t()).define(["t"],eX),n.variable(t("viewof t1")).define("viewof t1",["time"],eJ),n.variable(t("t1")).define("t1",["Generators","viewof t1"],(e,t)=>e.input(t)),n.variable(t()).define(["t1"],eK),n.variable(t("time")).define("time",["input"],eQ),n.variable(t("fileDemo")).define("fileDemo",["md"],e1),n.variable(t("viewof e")).define("viewof e",["file"],e0),n.variable(t("e")).define("e",["Generators","viewof e"],(e,t)=>e.input(t)),n.variable(t("viewof e1")).define("viewof e1",["file"],e2),n.variable(t("e1")).define("e1",["Generators","viewof e1"],(e,t)=>e.input(t)),n.variable(t()).define(["html","e1","Files"],e5),n.variable(t("file")).define("file",["input"],e4),n.variable(t("textDemo")).define("textDemo",["md"],e3),n.variable(t("viewof f")).define("viewof f",["text"],e6),n.variable(t("f")).define("f",["Generators","viewof f"],(e,t)=>e.input(t)),n.variable(t("viewof f1")).define("viewof f1",["text"],e7),n.variable(t("f1")).define("f1",["Generators","viewof f1"],(e,t)=>e.input(t)),n.variable(t()).define(["f1"],e8),n.variable(t("viewof f2")).define("viewof f2",["text"],e9),n.variable(t("f2")).define("f2",["Generators","viewof f2"],(e,t)=>e.input(t)),n.variable(t()).define(["f2"],te),n.variable(t("text")).define("text",["input"],tt),n.variable(t("textareaDemo")).define("textareaDemo",["md"],ti),n.variable(t("viewof g")).define("viewof g",["textarea"],tn),n.variable(t("g")).define("g",["Generators","viewof g"],(e,t)=>e.input(t)),n.variable(t()).define(["g"],ta),n.variable(t("viewof g1")).define("viewof g1",["textarea"],tr),n.variable(t("g1")).define("g1",["Generators","viewof g1"],(e,t)=>e.input(t)),n.variable(t()).define(["g1"],to),n.variable(t("textarea")).define("textarea",["input","html"],tl),n.variable(t("radioDemo")).define("radioDemo",["md"],ts),n.variable(t("viewof r")).define("viewof r",["radio"],tu),n.variable(t("r")).define("r",["Generators","viewof r"],(e,t)=>e.input(t)),n.variable(t()).define(["r"],td),n.variable(t("viewof r1")).define("viewof r1",["radio"],tc),n.variable(t("r1")).define("r1",["Generators","viewof r1"],(e,t)=>e.input(t)),n.variable(t()).define(["r1"],tf),n.variable(t("radio")).define("radio",["input","html"],tp),n.variable(t("checkboxDemo")).define("checkboxDemo",["md"],tm),n.variable(t("viewof ch")).define("viewof ch",["checkbox"],tv),n.variable(t("ch")).define("ch",["Generators","viewof ch"],(e,t)=>e.input(t)),n.variable(t()).define(["ch"],tb),n.variable(t("viewof ch1")).define("viewof ch1",["checkbox"],th),n.variable(t("ch1")).define("ch1",["Generators","viewof ch1"],(e,t)=>e.input(t)),n.variable(t()).define(["ch1"],tg),n.variable(t("viewof ch3")).define("viewof ch3",["checkbox"],tw),n.variable(t("ch3")).define("ch3",["Generators","viewof ch3"],(e,t)=>e.input(t)),n.variable(t()).define(["ch3"],ty),n.variable(t("checkbox")).define("checkbox",["input","html"],tx),n.variable(t("numberDemo")).define("numberDemo",["md"],tA),n.variable(t("viewof h")).define("viewof h",["number"],tS),n.variable(t("h")).define("h",["Generators","viewof h"],(e,t)=>e.input(t)),n.variable(t()).define(["h"],tC),n.variable(t("viewof h1")).define("viewof h1",["number"],tk),n.variable(t("h1")).define("h1",["Generators","viewof h1"],(e,t)=>e.input(t)),n.variable(t()).define(["h1"],tM),n.variable(t("number")).define("number",["input"],tT),n.variable(t("passwordDemo")).define("passwordDemo",["md"],tD),n.variable(t("viewof i")).define("viewof i",["password"],tI),n.variable(t("i")).define("i",["Generators","viewof i"],(e,t)=>e.input(t)),n.variable(t()).define(["i"],tO),n.variable(t("viewof i1")).define("viewof i1",["password"],tE),n.variable(t("i1")).define("i1",["Generators","viewof i1"],(e,t)=>e.input(t)),n.variable(t()).define(["i1"],tL),n.variable(t("password")).define("password",["input"],tR),n.variable(t()).define(["md"],tN),n.variable(t("input")).define("input",["html","d3format"],tP),n.variable(t("d3geo")).define("d3geo",["require"],t$),n.variable(t("d3format")).define("d3format",["require"],tF),n.variable(t("topojson")).define("topojson",["require"],tj),n.variable(t("world")).define("world",tB),n.variable(t("land")).define("land",["topojson","world"],tG),n.variable(t("countries")).define("countries",["topojson","world"],tU),n.variable(t("usa")).define("usa",tz),n.variable(t("nation")).define("nation",["topojson","usa"],tV),n.variable(t("states")).define("states",["topojson","usa"],tq),n.variable(t("graticule")).define("graticule",["d3geo"],tH),n.variable(t("viewof license")).define("viewof license",["md"],t_),n.variable(t("license")).define("license",["Generators","viewof license"],(e,t)=>e.input(t)),n.variable(t()).define(["md"],tW),n}function tY(e){return e`# Circle Legend

To use in your notebook:

~~~js
import { legendCircle } from "@harrystevens/circle-legend";
~~~`}function tX(e,t,i){return e().scale(t.scaleSqrt().domain([0,500]).range([0,40])).tickValues([15,150,500]).tickFormat((e,t,i)=>t===i.length-1?e+" bushels of hay":e).tickSize(i)}function tJ(e){return e({title:"Tick size",value:5,min:0,max:100,step:1,description:"What happens when you adjust this?"})}function tK(e,t,i,n){let a=e.select(t.svg()).attr("height",90).attr("width",180+i);return a.append("g").call(n),a.node()}function tQ(){return function(e){let t,i,n=e=>e,a=5;function r(e){let r=e.select("g");r._groups[0][0]||(r=e.append("g")),r.attr("transform","translate(11,)");let o=i||t.ticks(),l=o[o.length-1];r.selectAll("circle").data(o.slice().reverse()).enter().append("circle").attr("fill","none").attr("stroke","currentColor").attr("cx",t(l)).attr("cy",t).attr("r",t),r.selectAll("line").data(o).enter().append("line").attr("stroke","currentColor").attr("stroke-dasharray","4, 2").attr("x1",t(l)).attr("x2",a+2*t(l)).attr("y1",e=>2*t(e)).attr("y2",e=>2*t(e)),r.selectAll("text").data(o).enter().append("text").attr("font-family","'Helvetica Neue', sans-serif").attr("font-size",11).attr("dx",3).attr("dy",4).attr("x",a+2*t(l)).attr("y",e=>2*t(e)).text(n)}return r.tickSize=function(e){return arguments.length?(a=+e,r):a},r.scale=function(e){return arguments.length?(t=e,r):t},r.tickFormat=function(e){return arguments.length?(n=e,r):n},r.tickValues=function(e){return arguments.length?(i=e,r):i},r}}function t1(e){return e`## Todo
* Ensure circles are drawn biggest to smallest so they can be styled
* Make it work with a threshold scale
`}function t0(e){return e("d3-scale@3","d3-selection@1")}function t2(e,t){let i=e.module();i.variable(t()).define(["md"],tY),i.variable(t("legend")).define("legend",["legendCircle","d3","tickSize"],tX),i.variable(t("viewof tickSize")).define("viewof tickSize",["slider"],tJ),i.variable(t("tickSize")).define("tickSize",["Generators","viewof tickSize"],(e,t)=>e.input(t)),i.variable(t()).define(["d3","DOM","tickSize","legend"],tK),i.variable(t("legendCircle")).define("legendCircle",tQ),i.variable(t()).define(["md"],t1),i.variable(t("d3")).define("d3",["require"],t0);let n=e.module(tZ);return i.import("slider",n),i}function t5(e){return e`# TOC

This notebook can generate a table of contents automatically for your notebook.

\`\`\`js
import {toc} from "@harrystevens/toc"
\`\`\`

Here’s an example:`}function t4(e){return e({selector:"h2,h3,h4,h5,h6",heading:"Jump to:"})}function t3(e){return e`## Implementation`}function t6(e,t,i,n){return function(a){let r=a&&a.selector?a.selector:"h1,h2,h3,h4,h5,h6",o=a&&a.heading?a.heading:"Table of Contents";return e.observe(e=>{let a=[];function l(){let n=Math.min(...r.split(",").map(e=>+e.replace("h",""))),l=Array.from(document.querySelectorAll(r));(l.length!==a.length||l.some((e,t)=>a[t]!==e))&&e(t`<b>${o}</b><ul>${Array.from(a=l,e=>{let a=parseInt(e.tagName.slice(1));return Object.assign(t`${a>n?"<ul>".repeat(a-n)+"<li>":"<li>"}<a href=#${e.id}>${i.text(e.textContent)}`,{onclick:t=>(t.preventDefault(),e.scrollIntoView())})})}`)}let s=new n(l);return s.observe(document.body,{childList:!0,subtree:!0}),l(),()=>s.disconnect()})}}function t7(e){return e`## Hooray

It worked!`}function t8(e){return e`### This is a sub-section`}function t9(e){return e`A little text`}function ie(e){return e`#### A sub-sub-section?`}function it(e){return e`##### A sub-sub-sub-section?`}function ii(e){return e`###### A sub-sub-sub-sub-section! (h6!)`}function ia(e){return e`### Another sub-section`}function ir(e,t){let i=e.module();return i.variable(t()).define(["md"],t5),i.variable(t()).define(["toc"],t4),i.variable(t()).define(["md"],t3),i.variable(t("toc")).define("toc",["Generators","html","DOM","MutationObserver"],t6),i.variable(t()).define(["md"],t7),i.variable(t()).define(["md"],t8),i.variable(t()).define(["md"],t9),i.variable(t()).define(["md"],ie),i.variable(t()).define(["md"],it),i.variable(t()).define(["md"],ii),i.variable(t()).define(["md"],ia),i}function io(e){return e`# Keys

A reusable notebook for displaying platform-appropriate keyboard shortcuts.`}function il(e){return e("Alt-Enter")}function is(e){return e("Alt-Enter")}function iu(e){return e("Alt-Enter")}function id(e){return e("Alt-Enter")}function ic(){return/Mac|iPhone/.test(navigator.platform)}function ip(){return navigator.platform}function im(e){return e?{Alt:"⌥",Tab:"⇥",Up:"↑",Down:"↓",Left:"←",Right:"→",Mod:"⌘",Cmd:"⌘",Ctrl:"⌃",Shift:"⇧",Enter:"↩︎",Backspace:"⌫",Escape:"⎋"}:{Mod:"Ctrl"}}function iv(e){return e?{Alt:"Option",Backspace:"Delete",Mod:"Command",Cmd:"Command",Ctrl:"Control",Enter:"Return",Escape:"Esc","/":"Slash","?":"Question mark"}:{Mod:"Ctrl"}}function ib(e){return e?{Alt:"⌥opt",Tab:"⇥tab",Up:"↑",Down:"↓",Left:"←",Right:"→",Mod:"⌘cmd",Cmd:"⌘cmd",Ctrl:"⌃ctrl",Shift:"⇧shift",Enter:"↩︎return",Backspace:"⌫delete",Escape:"⎋esc"}:{Up:"↑",Down:"↓",Left:"←",Right:"→",Mod:"Ctrl"}}function ih(){return{Ctrl:-4,Alt:-3,Shift:-2,Mod:-1,Cmd:-1}}function ig(e){return function(t,i){let n=t.split("-");return n.slice().sort((t,i)=>(e[t]||n.indexOf(t))-(e[i]||n.indexOf(i))).map(e=>i&&i[e]||e)}}function iw(e,t){return function(i){return e(i,t).join("-")}}function iy(e,t){return function(i){return e(i,t).join("")}}function ix(e,t,i){return function(n){return e(n)+(t?` ${i(n)}`:"")}}function iA(e,t){return function(i){return e.html`<span style="font-family: var(--sans-serif); font-size: 90%;">${t(i)}</span>`}}function iS(e,t,i){return function(n){return e.html`${t(n,i).map(t=>e.html`<span style="font: 500 12px var(--sans-serif); margin: 0 4px; padding: 0 4px; border-radius: 0.25rem; box-shadow: 0 0 0 1px #dedede, 1px 1px 0 1px #e8e8e8;">${t.toLowerCase()}`)}</span>`}}function iC(e,t){let i=e.module();return i.variable(t()).define(["md"],io),i.variable(t()).define(["keyWords"],il),i.variable(t()).define(["keySymbols"],is),i.variable(t()).define(["keys"],iu),i.variable(t()).define(["buttons"],id),i.variable(t("mac")).define("mac",ic),i.variable(t()).define(ip),i.variable(t("symbols")).define("symbols",["mac"],im),i.variable(t("words")).define("words",["mac"],iv),i.variable(t("shortwords")).define("shortwords",["mac"],ib),i.variable(t("order")).define("order",ih),i.variable(t("remap")).define("remap",["order"],ig),i.variable(t("keyWords")).define("keyWords",["remap","words"],iw),i.variable(t("keySymbols")).define("keySymbols",["remap","symbols"],iy),i.variable(t("keys")).define("keys",["keyWords","symbols","keySymbols"],ix),i.variable(t("keyStyled")).define("keyStyled",["htl","keys"],iA),i.variable(t("buttons")).define("buttons",["htl","remap","shortwords"],iS),i}function ik(e){return e`# Text search input with autocomplete

A reusable autocomplete search that can be used in a real-time fashion (e.g., querying an API). It exploits [\`<datalist>\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist), the HTML Data List element.`}function iM(e){return e`## How to use it in your notebook

\`\`\`javascript
import { SearchForm } from "@floatingpurr/input-autocomplete"
\`\`\``}function iT(e){return e`## Examples`}function iD(e){return e`This search form can be used with a flat array of suggestions. Let's give it a spin:`}function iI(e,t){return e({placeholder:"Type-in to search...",description:"Searching en.wikipedia.org entities",async suggestion(e){let i=await t.json(`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${e}&namespace=0&limit=10&origin=*`);return i[1]}})}function iO(e){return e}function iE(e){return e`But it can be also useful to explore and return data from an array of objects coming from an API, e.g.:`}async function iL(e){let t=await e.json("https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=Skywalker&namespace=0&limit=10&origin=*");return t[1].map((e,i)=>({entry:e,url:t[3][i]}))}function iR(e){return e`Let's see it in action:`}function iN(e,t){return e({placeholder:"Type-in to search...",description:"Searching en.wikipedia.org entities with their URLs",format:e=>e.entry,async suggestion(e){let i=await t.json(`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${e}&namespace=0&limit=10&origin=*`);return i[1].map((e,t)=>({entry:e,url:i[3][t]}))}})}function iP(e){return e}function i$(e){return e`## Configuration

* \`suggestion\`: a function providing data for live suggestions (i.e., \`<datalist>\`). This function should accept an input text and returns an array of suggestions (default: \`() => []\`)
  
* \`placeholder\`: the default text you want to use as a placeholder (default: \`""\`)
  
* \`description\`: the label describing your input (default: \`""\`)

* \`format\`: the accessor function (default: \`(d) => d\`)

* \`namespace\`: the identifier of the SearchForm, use it if you plan to use more SearchForm(s) in the same notebook (default: \`""\`)`}function iF(e){return e`## Implementation

The machinery works as follows:
* read the value the user has just typed-in
* use such a value to retrieve suggestions (i.e., an array of matching values)
* (*suggestions are memoized*)
* inject suggestions in the \`<datalist>\` elements
* finally, the user can return a value from the suggestion list

Heavily inspired by the example of [Chris Henrick](https://observablehq.com/@clhenrick/autocomplete-search) and by suggestions of [Fabian Iwand](https://talk.observablehq.com/t/dynamic-datalist/6404/2).`}function ij(e,t,i){return function({uid:n=e.uid("autosuggestion").id,placeholder:a="",description:r="",format:o=e=>e,suggestion:l=()=>[]}={}){let s=t.html`<input 
        type="text"
        placeholder="${a}" 
        list="${n}"
        autocomplete="off"
      >`,u=t.html`<div style="font-size: 0.85rem; font-style: italic; margin-top: 3px;">${r}</div>`,d=t.html`<datalist id="${n}">`,c=t.html`<div>${s}${u}${d}`,f=[];c.value="",c.onsubmit=e=>e.preventDefault(),c.onchange=e=>{let t=e.target.value;c.value=f.find(e=>o(e)==t)||"",s.blur(),c.dispatchEvent(new CustomEvent("input"))};let p=new Map,m=async e=>p.get(e)||(e?p.set(e,await l(e)):p.set(e,[]),p.get(e));return s.oninput=async e=>{f=await m(e.target.value),i.select(`#${n}`).selectAll("option").data(f).join("option").attr("value",o)},c}}function iB(e,t){let i=e.module();return i.variable(t()).define(["md"],ik),i.variable(t()).define(["md"],iM),i.variable(t()).define(["md"],iT),i.variable(t()).define(["md"],iD),i.variable(t("viewof wiki")).define("viewof wiki",["SearchForm","d3"],iI),i.variable(t("wiki")).define("wiki",["Generators","viewof wiki"],(e,t)=>e.input(t)),i.variable(t()).define(["wiki"],iO),i.variable(t()).define(["md"],iE),i.variable(t()).define(["d3"],iL),i.variable(t()).define(["md"],iR),i.variable(t("viewof wikiObject")).define("viewof wikiObject",["SearchForm","d3"],iN),i.variable(t("wikiObject")).define("wikiObject",["Generators","viewof wikiObject"],(e,t)=>e.input(t)),i.variable(t()).define(["wikiObject"],iP),i.variable(t()).define(["md"],i$),i.variable(t()).define(["md"],iF),i.variable(t("SearchForm")).define("SearchForm",["DOM","htl","d3"],ij),i}function iG(e){return e`# Menu Localidade`}function iU(e){return e({value:["RIO DE JANEIRO","S\xc3O PAULO"],cores:["#2F87F5","#D8C56C","#DC5988","#6CC28D"]})}function iz(e){return e.value=["RIO DE JANEIRO","BELO HORIZONTE"]}function iV(e){return e}function iq(e,t){return function(i){let n=[...i.cores],a=new Map;function r(){let t,i,r;return t=document.createElement("input"),i=document.createElement("datalist"),t.setAttribute("list","menu-municipios-options"),t.setAttribute("placeholder","Adicione um local"),t.style.borderRadius="6px",t.style.backgroundColor="white",t.style.border="dashed 2px #c4c4c4",t.style.fontFamily="Roboto Condensed",t.style.padding="3px",t.style.minWidth="150px",t.style.maxWidth="240px",t.style.height="20px",i.setAttribute("id","menu-municipios-options"),e.forEach(e=>{(r=document.createElement("option")).setAttribute("value",e.nome),i.appendChild(r)}),t.appendChild(i),t.addEventListener("input",e=>{e.stopPropagation()}),t.addEventListener("change",i=>{let r=t.value;t.value="";let o=e.find(e=>e.nome===r);if(o&&!a.has(o.cod)&&n.length>0){let s=n.pop(),u={nome:r,cor:s,cod:o.cod};o.uf&&(u.uf=o.uf),a.set(u.cod,u),l()}}),t}function o(e){let t=document.createElement("button"),i=document.createElement("span");if(t.style.backgroundColor=e.cor,t.style.display="inline-flex",t.style.alignItems="flex-center",t.style.borderRadius="6px",t.style.border="none",t.style.fontFamily="Roboto Condensed",t.style.fontWeight="700",t.style.fontSize="14px",t.style.marginRight="6px",t.style.padding="3px 5px",t.style.height="22px",i.style.lineHeight="16px",i.style.color="black",e.nome.indexOf("(")>0||e.cod<100?i.textContent=e.nome:i.textContent=e.nome+" ("+e.uf+")",t.appendChild(i),a.size>1){let r=document.createElement("span");r.style.paddingLeft="5px",r.style.fontWeight="400",r.textContent="✖",r.style.lineHeight="16px",r.style.color="black",t.appendChild(r)}return t.addEventListener("click",t=>{a.size>1&&(a.delete(e.cod),n.push(e.cor),l())}),t}function l(){for(let e of(u.innerHTML="",a.values()))u.appendChild(o(e));4==a.size?d&&(s.removeChild(d),d=null):null===d&&(d=r(),s.appendChild(d)),s.dispatchEvent(new t("input"))}let s=document.createElement("div"),u=document.createElement("div"),d=r();return u.style.display="inline",s.appendChild(u),s.appendChild(d),Object.defineProperty(s,"value",{get:()=>[...a.values()],set(t){for(let r of(a.clear(),n=[...i.cores],t)){if("string"==typeof r&&(r={nome:r}),void 0===r.cor&&(r.cor=n.pop()),void 0===r.cod){let o=e.find(e=>0==e.nome.localeCompare(r.nome));o&&(r.cod=o.cod,o.uf&&(r.uf=o.uf))}r.cod&&!a.has(r.cod)&&a.set(r.cod,r)}l()}}),s.value=i.value||[],s}}function iH(e){return e("municipios-ord@1.csv").csv({separator:";"})}function i_(e){return e.html`<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
</style>`}function iW(e,t){let n=e.module(),a=new Map([["municipios-ord@1.csv",{url:new i.U(i(78)),mimeType:"text/csv",toString:function(){return this.url}}]]);return n.builtin("FileAttachment",e.fileAttachments(e=>a.get(e))),n.variable(t()).define(["md"],iG),n.variable(t("viewof sels")).define("viewof sels",["menuLocalidade"],iU),n.variable(t("sels")).define("sels",["Generators","viewof sels"],(e,t)=>e.input(t)),n.variable(t()).define(["viewof sels"],iz),n.variable(t()).define(["sels"],iV),n.variable(t("menuLocalidade")).define("menuLocalidade",["municipios","Event"],iq),n.variable(t("municipios")).define("municipios",["FileAttachment"],iH),n.variable(t()).define(["htl"],i_),n}function iZ(e){return e`# Sliders`}function iY(e){return e`## Mapa`}function iX(e){return e`### Ano`}function iJ(e){return e({range:[2012,2019],value:2015,ticks:1,width:600})}function iK(e){return e`### Intervalo Número de Nascimentos`}function iQ(){return function(e){return["0","10","100","1K","10K","50K","100K","1M"][e]}}function i1(e,t,i){return e({range:[0,10,1e3,1e4,1e5,5e5,1e6,1e7],ticksLabelFormatter:t},i)}function i0(e,t,i){return{ano:e,anoMesTrilha:t,nascimentosTotais:i}}function i2(e,t,i){let n=[];for(let a=2012;a<=2018;a++)for(let r=1;r<=12;r++)n.push(100*a+r);n.push(201901);let o=e=>~~(n[e]/100),l=t=>e[n[t]%100-1];return t({range:n,ticksLabelFormatter:o,handleLabelFormatter:l,ticks:12,width:600},i)}function i5(){return["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"]}function i4(e){return e`## Componentes`}function i3(){return function(e,t){let i=e.range;return e.range=[0,i.length-1],e.ticksLabelFormatter||(e.ticksLabelFormatter=e=>i[e]),t(e)}}function i6(e,t){return function(i){void 0!==i.value&&(i.value=[i.range[0],i.value]);let n=e(i);t.select(n).selectAll(".handle--custom").each(function(e){"w"===e.type&&t.select(this).remove()}),t.select(n).selectAll(".handle--w").remove(),t.select(n).select(".selection").attr("pointer-events","none").attr("opacity",0);let a=n.vl;return n.vl=function(e){return void 0===e?a.call(n)[1]:a.call(n,[0,e])},n}}function i7(e,t){return function(i){let{range:n=[0,10],width:a=400,height:r=60,marginTop:o=20,marginBottom:l=20,marginRight:s=20,marginLeft:u=20,ticks:d=1,value:c=null,dispatchOnDrag:f=!1,ticksLabelFormatter:p=e=>e,handleLabelFormatter:m=null}=i;null==c&&(c=[...n]);let v=a-u-s,b=r-o-l,h=[];for(let g=n[0];g<=n[1];g+=d)h.push(g);let w=e.scaleLinear().domain(n).range([0,v]),y=e.select(t.svg(a,r)),x=y.node(),A=y.append("g").attr("transform",`translate(${u},${o})`);y.on("click touch",t=>{let i=t.offsetX-u;if(i>=0&&i<=v){let n=e.brushSelection(k.node())||[0,0],a=n.map(e=>Math.round(w.invert(e))),r=Math.round(w.invert(i));n[r<a[0]?0:1]=w(r),k.call(C.move,n)}});let S=[0,0];var C=e.brushX().extent([[0,0],[v,b]]).on("brush",function(e){let t=e.selection;S=t;let i=t[1]-t[0];if(T.attr("transform",(e,i)=>`translate(${t[i]},0)`),m){let n=t.map(w.invert).map(Math.round);T.select("text").attr("text-anchor",e=>i>30?"middle":"w"==e.type?"end":"start").text(e=>m("w"==e.type?n[0]:n[1]))}f&&x.dispatchEvent(new CustomEvent("input"))}).on("end",function(t){if(t.sourceEvent){let i=(t.selection||S).map(w.invert).map(Math.round);e.select(this).transition().call(t.target.move,i.map(w)),f||setTimeout(e=>{x.dispatchEvent(new CustomEvent("input"))})}});let k=A.append("g").attr("class","brush").call(C);k.select(".selection").attr("fill","#151472CC").style("cursor","grab"),k.select(".overlay").attr("fill","#E5E5E5").attr("pointer-events","none");let M=k.insert("g",".selection").attr("class","ticks").selectAll(".tick").data(h).enter().append("g").attr("class","tick").attr("transform",e=>`translate(${w(e)},0)`);M.append("line").attr("x1",0).attr("x2",0).attr("y1",0).attr("y2",b).attr("stroke","#999"),p&&M.append("text").attr("x",0).attr("y",b+4).attr("dominant-baseline","hanging").attr("text-anchor","middle").attr("font-size","12px").attr("font-weight","400").attr("fill","#151472").text(p);let T=k.selectAll(".handle--custom").data([{type:"w"},{type:"e"}]).enter().append("g").attr("class","handle--custom");return T.append("rect").attr("stroke","#000").attr("fill","#151472").attr("cursor","ew-resize").attr("width",8).attr("height",b+4).attr("y",-2).attr("x",-4).attr("rx",4),m&&T.append("text").attr("fill","#F00").attr("y",-4).attr("font-size","12px").attr("font-weight","400").attr("fill","#151472"),x.vl=function(t){if(void 0===t)return(e.brushSelection(k.node())||[0,0]).map(e=>Math.round(w.invert(e)));if(t[0]>t[1]){let i=t[0];t[0]=t[1],t[1]=i}return t[1]<n[0]?(t[0]=n[0],t[1]=n[0]):t[0]>n[1]?(t[0]=n[1],t[1]=n[1]):(t[0]<n[0]&&(t[0]=n[0]),t[1]>n[1]&&(t[1]=n[1])),k.call(C.move,t.map(w)),x.dispatchEvent(new CustomEvent("input")),x},Object.defineProperty(x,"value",{get(){return this.vl()},set(e){this.vl(e)}}),x.value=c,x}}function i8(e){return e`
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
svg {
	font-family: "Roboto Condensed";
}

* { user-select: none;  }


</style>
`}function i9(e,t){let i=e.module();return i.variable(t()).define(["md"],iZ),i.variable(t()).define(["md"],iY),i.variable(t()).define(["md"],iX),i.variable(t("viewof ano")).define("viewof ano",["sliderbase"],iJ),i.variable(t("ano")).define("ano",["Generators","viewof ano"],(e,t)=>e.input(t)),i.variable(t()).define(["md"],iK),i.variable(t("fmt")).define("fmt",iQ),i.variable(t("viewof nascimentosTotais")).define("viewof nascimentosTotais",["sliderArray","fmt","sliderRangeBase"],i1),i.variable(t("nascimentosTotais")).define("nascimentosTotais",["Generators","viewof nascimentosTotais"],(e,t)=>e.input(t)),i.variable(t("filtro")).define("filtro",["ano","anoMesTrilha","nascimentosTotais"],i0),i.variable(t("viewof anoMesTrilha")).define("viewof anoMesTrilha",["meses","sliderArray","sliderRangeBase"],i2),i.variable(t("anoMesTrilha")).define("anoMesTrilha",["Generators","viewof anoMesTrilha"],(e,t)=>e.input(t)),i.variable(t("meses")).define("meses",i5),i.variable(t()).define(["md"],i4),i.variable(t("sliderArray")).define("sliderArray",i3),i.variable(t("sliderbase")).define("sliderbase",["sliderRangeBase","d3"],i6),i.variable(t("sliderRangeBase")).define("sliderRangeBase",["d3","DOM"],i7),i.variable(t("style_slider")).define("style_slider",["html"],i8),i}function ne(e){return e`# Scatter-plot dados mapa`}function nt(e){return e.range([2012,2019],{label:"Ano",step:1,value:2012})}function ni(e){return e.button("Limpar zoom")}function nn(){return!1}async function na(e,t){return e.html`<img width=30 src=${await t("clearSymbol.png").url()} style="background:lightgray; padding:2px;border-radius:20px;" >`}function nr(e){return e`<svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="padding:2px;background:white;border-radius:5px;">
<path d="M7.1595 0H3.47242C1.56577 0 0 1.55368 0 3.47373V6.50535C0 6.78325 0.227241 7.01057 0.505035 7.01057C0.782828 7.01057 1.01007 6.78325 1.01007 6.50535L1.01016 3.47373C1.01016 2.12209 2.10868 1.02317 3.45979 1.02317H7.13425C8.51057 1.02317 9.60914 2.12211 9.60914 3.47373V6.1264C9.60914 7.47804 8.51061 8.57696 7.1595 8.57696L2.60116 8.57687L4.12907 7.04838C4.33112 6.84625 4.33112 6.53046 4.12907 6.32833C3.92702 6.1262 3.61134 6.1262 3.40929 6.32833L1.01016 8.72836C0.808105 8.93049 0.808105 9.24628 1.01016 9.44841L3.40929 11.8484C3.51031 11.9495 3.63653 12 3.77542 12C3.90173 12 4.04063 11.9495 4.14156 11.8484C4.34361 11.6463 4.34361 11.3305 4.14156 11.1284L2.60116 9.60017H7.1595C9.07882 9.60017 10.6319 8.04649 10.6319 6.12644V3.47378C10.6319 1.55373 9.06615 4.72183e-05 7.1595 4.72183e-05L7.1595 0Z" fill="#151472"/>
</svg>`}function no(e,t){return e({value:["RIO DE JANEIRO"],cores:t})}function nl(e,t){return e.select(t,{label:"Eixo X",format:e=>e.name,value:t[0]})}function ns(e,t){return e.select(t,{label:"Eixo Y",format:e=>e.name,value:t[1]})}function nu(e,t){return e.select(t,{label:"Cor",format:e=>e.name,value:t[3]})}function nd(e){return e}function nc(e){return e}function nf(e,t){return e({range:[1,10,100,1e3,1e4,5e4,1e5],value:[1,6],ticksLabelFormatter:e=>["0","10","100","1K","10K","50K","100K"][e],width:310,height:56},t)}function np(e){return e}function nm(e){return e}function nv(e,t){return e.scaleThreshold(t.thresholds,t.range)}function nb(e,t,i){return e(t,{width:300,title:i.label})}function nh(e,t,i,n,a,r,o,l,s,u,d,c,f,p,m,v,b,h,g,w){let y=t=>e.filter(e=>e.cod==t.CODMUNRES)[0].cor,x=t.plot({width:i.width,height:i.height,marginBottom:40,x:{line:!0,ticks:10,label:n.label,domain:void 0},y:{line:!0,label:a.label,domain:void 0},marks:[t.dot(r,{x:"x",y:"y",title:e=>o(e.municipio)+`
${n.label}: ${e.x.toFixed(1)}`+`
${a.label}: ${e.y.toFixed(1)}`,fill:e=>l(e.val),stroke:"rgba(0,0,0,0.1)"}),t.dot(s,{x:"x",y:"y",symbol:{draw:u},title:e=>o(e.municipio)+`
${n.label}: ${e.x.toFixed(1)}`+`
${a.label}: ${e.y.toFixed(1)}`,stroke:"currentColor",fill:e=>y(e),r:1.7,strokeWidth:1})]});x.style.fontFamily=i.fontFamily,x.style.fontSize=11,x=v(x=m(x=f(x=d(x,e=>{c.value=e}),e=>p(e.municipio)),e=>{3==e.attr("r")&&e.attr("stroke","black")},e=>{3==e.attr("r")&&e.attr("stroke","rgba(0,0,0,0.1)")}),[r,s]);let A=b.html`<div style="position:relative;display:inline-block;">`;return A.append(x),h.xmin!=Number.NEGATIVE_INFINITY&&(A.append(g),g.style.position="absolute",g.style.right="10px",g.style.top="10px",g.onclick=()=>{c.value=w}),A}function ng(){return{width:400,height:300,fontFamily:"Roboto Condensed"}}function nw(e,t){return i=>{let n=e.value,a=n.map(e=>e.cod).indexOf(i.cod);if(a<0){if(n.length<4){let r=Object.assign({},i);r.cor=t(n),n.push(r)}}else n.length>1&&n.splice(a,1);e.value=n}}function ny(){return null}function nx(e){return e`<br>
# Implementação`}function nA(e){return e`## Cores municípios`}function nS(){return["#2F87F5","#D8C56C","#DC5988","#6CC28D"]}function nC(e){return function(t){let i=[...e];for(let n of t){let a=i.indexOf(n.cor);a>=0&&i.splice(a,1)}if(i.length>0)return i[0]}}function nk(e,t,i){return e.html`<button style="background:${t(i)};">Próxima cor`}function nM(e){return e`<br>
## Flags`}function nT(e,t){let i=e.canvas(200,200),n={draw:t},a=i.getContext("2d");return a.translate(100,100),a.strokeStyle="black",n.draw(a,30),a.stroke(),i.mySymbol=n,i}function nD(){return(e,t)=>{e.moveTo(0,0),e.bezierCurveTo(0,-(.5*t),-t,-(1.3*t),-t,-(1.8*t)),e.bezierCurveTo(-t,-(2.3*t),-(.5*t),-(2.8*t),0,-(2.8*t)),e.bezierCurveTo(.5*t,-(2.8*t),t,-(2.3*t),t,-(1.8*t)),e.bezierCurveTo(t,-(1.3*t),0,-(.5*t),0,0)}}function nI(e,t){return e.svg`<svg width=100 height=100>
 <path transform="translate(50,50)" 
 d="${t(10)}" stroke=black fill=none /> 
 </svg>`}function nO(){return function(e){let t=(e,t,i,n,a,r)=>`C${e},${t} ${i},${n} ${a},${r}`;return"M 0,0"+t(0,-(.5*e),-e,-(1.3*e),-e,-(1.8*e))+t(-e,-(2.3*e),-(.5*e),-(2.8*e),0,-(2.8*e))+t(.5*e,-(2.8*e),e,-(2.3*e),e,-(1.8*e))+t(e,-(1.3*e),0,-(.5*e),0,0)+"Z"}}function nE(e){return e`## Dados`}function nL(e,t,i,n,a,r,o){return e.map(e=>Object.assign(e,{x:+t.field(e),y:+i.field(e),val:+n.field(e),regiao:["N","NE","SE","S","CO"][Math.floor(e.CODMUNRES/1e5)-1],municipio:a.get(e.CODMUNRES)})).filter(e=>e.municipio&&r(e)&&e.x>=o.xmin&&e.y>=o.ymin&&e.x<=o.xmax&&e.y<=o.ymax)}function nR(e,t){let[i,n]=e.map(e=>[0,10,1e3,1e4,1e5,5e5,1e6][e]);return e=>e.ANO==t&&e.TOTAL>=i&&e.TOTAL<=n}function nN(e,t){let i=e.map(e=>e.cod);return t.filter(e=>i.includes(e.CODMUNRES))}function nP(){return[{label:"M\xe9dia anual de polui\xe7\xe3o (\xb5g/m\xb3)",name:"POLUI\xc7\xc3O",field:e=>e.AVG_PM25,domain:[0,70],thresholds:[5,15,25,35],range:["#260800","#662514","#B26B59","#E5B8AC","#FFD6CC"].reverse()},{label:"Baixo peso (por mil nascimentos)",name:"BAIXO PESO",field:e=>1e3*(e.BAIXO_PESO||0)/(e.TOTAL||1),domain:[0,200],thresholds:[52,68,83,1e3],range:["#00261D","#125948","#4D9986","#99CCC0","#CEF2E9"].reverse()},{label:"\xd3bitos perinatais (por mil nascimentos)",name:"MORT. PERINATAL",field:e=>1e3*(e.OBITOS_PERINATAIS||0)/(e.TOTAL||1),domain:[0,20],thresholds:[4,8,12,16],range:["#070040","#291C8C","#6359B2","#A9A3D9","#DDD9FF"].reverse()},{label:"\xd3bitos neoinatais (por mil nascimentos)",name:"MORT. NEONATAL",field:e=>1e3*(e.OBITOS_NEONATAIS||0)/(e.TOTAL||1),domain:[0,30],thresholds:[4,8,16,22],range:["#260024","#661461","#B259AD","#E5ACE2","#FFD9FD"].reverse()},{label:"\xd3bitos infantis (por mil nascimentos)",name:"MORT. INFANTIL",field:e=>1e3*(e.OBITOS_INFANTIS||0)/(e.TOTAL||1),domain:[0,100],thresholds:[20,40,60,80],range:["#260024","#661461","#B259AD","#E5ACE2","#FFD9FD"].reverse()}]}function n$(e){return function(t){return e.filter(e=>e.x>=t.xmin&&e.y>=t.ymin&&e.x<=t.xmax&&e.y<=t.ymax)}}function nF(){return{xmin:Number.NEGATIVE_INFINITY,ymin:Number.NEGATIVE_INFINITY,xmax:Number.POSITIVE_INFINITY,ymax:Number.POSITIVE_INFINITY}}function nj(e,t){return e.value,t}function nB(e){return e`### Interação com mouse`}function nG(e){return(t,i,n)=>{let a=e.select(t).selectAll("circle");return a.on("mouseover",function(){i(e.select(this))}),a.on("mouseleave",function(){n(e.select(this))}),t}}function nU(e,t,i){return(n,a)=>{let r=e.select(n).selectAll("[aria-label=dot]>circle");r.on("dblclick",function(){a(t[e.select(this).datum()])});let o=e.select(n).selectAll("[aria-label=dot]>path");return o.on("dblclick",function(){a(i[e.select(this).datum()])}),n}}function nz(e){return function(t,i){let n=t.scale("x"),a=t.scale("y"),r={},o=e.select(t).style("user-select","none");return t.onmousedown=e=>{r.x0=r.x1=e.offsetX,r.y0=r.y1=e.offsetY,r.dx=r.dy=0,r.sel=o.append("rect").attr("fill","rgba(0,0,0,0.2)")},t.onmousemove=e=>{e.buttons&&([r.x1,r.y1]=[e.offsetX,e.offsetY],r.dx=Math.abs(r.x1-r.x0),r.dy=Math.abs(r.y1-r.y0),r.x=Math.min(r.x0,r.x1),r.y=Math.min(r.y0,r.y1),r.sel.attr("x",r.x),r.sel.attr("y",r.y),r.sel.attr("width",r.dx),r.sel.attr("height",r.dy))},t.onmouseup=e=>{r.sel.remove(),r.dx>2&&r.dy>2&&i({xmin:Math.min(n.invert(r.x0),n.invert(r.x1)),xmax:Math.max(n.invert(r.x0),n.invert(r.x1)),ymin:Math.min(a.invert(r.y0),a.invert(r.y1)),ymax:Math.max(a.invert(r.y0),a.invert(r.y1))})},t}}function nV(e){return e`### Animação`}function nq(){return[]}function nH(e,t){return function(i,n){let a=n.map((t,i)=>({dataset:t,map:new Map,oldMap:e.value[i]?e.value[i].map:new Map}));return t.select(i).selectAll("g[aria-label=dot]").each(function(e,i){let n=t.select(this),{dataset:r,map:o,oldMap:l}=a[i];n.selectAll("circle").each(function(e,i){let n=t.select(this),a=r[i].CODMUNRES,s={cx:+n.attr("cx"),cy:+n.attr("cy")};if(o.set(a,s),l.has(a)){let u=l.get(a);n.attr("cx",u.cx),n.attr("newcx",s.cx),n.attr("cy",u.cy),n.attr("newcy",s.cy)}})}),t.select(i).selectAll("circle[newcx]").transition().duration(1500).attr("cx",function(){return t.select(this).attr("newcx")}).attr("cy",function(){return t.select(this).attr("newcy")}),e.value=a,i}}function n_(e){return e`### Seleção de município por nome`}function nW(e,t,i,n){return function(){let a=e.html`<div style="caret-color:transparent;display:inline;tabindex=-1">`,r=[],o=e=>(e=e.toUpperCase(),t.filter(t=>t.municipio.includes(e)).sort((e,t)=>e.municipio.localeCompare(t.municipio))),l=()=>i({placeholder:"Novo local...",format:e=>e.municipio,suggestion:o}),s=()=>{for(let t of(a.innerHTML="",r)){let i=e.html`<span style="padding:0px 4px;font-size:10pt;"> ⊝ </span>`;i.onclick=()=>{r.splice(r.indexOf(t),1),s()},a.append(e.html`<button style="padding-right:0px;border-radius:15px;border-width:thin;
                 font-size:8pt;margin-right:2px;caret-color: transparent">
                 ${n(t)} ${i}`)}if(r.length<4){let o=l();o.style.display="inline",o.style.caretColor="black",a.append(o),o.focus(),o.addEventListener("change",()=>{""!=o.value&&0>r.indexOf(o.value)&&r.push(o.value),s()})}a.value=r,a.dispatchEvent(new CustomEvent("input"))},u=e=>{r=e,s()};return s(),a.setValue=u,a}}function nZ(e){return e`## Dados`}function nY(e){return new Map(e.map(e=>[e.cod,e]))}function nX(e){return function(t){try{if(")"==t.nome[t.nome.length-1])return t.nome;return`${t.nome} (${t.uf})`}catch(i){return e.value={error:i,registro:t},"UNKNOWN"}}}function nJ(e){return e.html`<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
</style>`}function nK(e,t){let n=e.module(),a=new Map([["clearSymbol.png",{url:new i.U(i(4876)),mimeType:"image/png",toString:function(){return this.url}}]]);n.builtin("FileAttachment",e.fileAttachments(e=>a.get(e))),n.variable(t()).define(["md"],ne),n.variable(t("viewof ano")).define("viewof ano",["Inputs"],nt),n.variable(t("ano")).define("ano",["Generators","viewof ano"],(e,t)=>e.input(t)),n.variable(t("viewof limpar")).define("viewof limpar",["Inputs"],ni),n.variable(t("limpar")).define("limpar",["Generators","viewof limpar"],(e,t)=>e.input(t)),n.define("initial clearWindowSelection",nn),n.variable(t("mutable clearWindowSelection")).define("mutable clearWindowSelection",["Mutable","initial clearWindowSelection"],(e,t)=>new e(t)),n.variable(t("clearWindowSelection")).define("clearWindowSelection",["mutable clearWindowSelection"],e=>e.generator),n.variable(t("clearButtonOld")).define("clearButtonOld",["htl","FileAttachment"],na),n.variable(t("clearButton")).define("clearButton",["svg"],nr),n.variable(t("viewof munSelecionados")).define("viewof munSelecionados",["menuLocalidade","coresMunicipios"],no),n.variable(t("munSelecionados")).define("munSelecionados",["Generators","viewof munSelecionados"],(e,t)=>e.input(t)),n.variable(t("viewof xAxisSel")).define("viewof xAxisSel",["Inputs","variables"],nl),n.variable(t("xAxisSel")).define("xAxisSel",["Generators","viewof xAxisSel"],(e,t)=>e.input(t)),n.variable(t("viewof yAxisSel")).define("viewof yAxisSel",["Inputs","variables"],ns),n.variable(t("yAxisSel")).define("yAxisSel",["Generators","viewof yAxisSel"],(e,t)=>e.input(t)),n.variable(t("viewof colorSel")).define("viewof colorSel",["Inputs","variables"],nu),n.variable(t("colorSel")).define("colorSel",["Generators","viewof colorSel"],(e,t)=>e.input(t)),n.variable(t()).define(["colorSel"],nd),n.define("initial colorVar",["colorSel"],nc),n.variable(t("mutable colorVar")).define("mutable colorVar",["Mutable","initial colorVar"],(e,t)=>new e(t)),n.variable(t("colorVar")).define("colorVar",["mutable colorVar"],e=>e.generator),n.variable(t("viewof intervaloNascimentos")).define("viewof intervaloNascimentos",["sliderArray","sliderRangeBase"],nf),n.variable(t("intervaloNascimentos")).define("intervaloNascimentos",["Generators","viewof intervaloNascimentos"],(e,t)=>e.input(t)),n.define("initial xAxisVar",["xAxisSel"],np),n.variable(t("mutable xAxisVar")).define("mutable xAxisVar",["Mutable","initial xAxisVar"],(e,t)=>new e(t)),n.variable(t("xAxisVar")).define("xAxisVar",["mutable xAxisVar"],e=>e.generator),n.define("initial yAxisVar",["yAxisSel"],nm),n.variable(t("mutable yAxisVar")).define("mutable yAxisVar",["Mutable","initial yAxisVar"],(e,t)=>new e(t)),n.variable(t("yAxisVar")).define("yAxisVar",["mutable yAxisVar"],e=>e.generator),n.variable(t("colorScale")).define("colorScale",["d3","colorVar"],nv),n.variable(t("colorLegend")).define("colorLegend",["Legend","colorScale","colorVar"],nb),n.variable(t("scatterplot")).define("scatterplot",["munSelecionados","Plot","scatterConfig","xAxisVar","yAxisVar","data","nomeMunicipio","colorScale","highlightData","flagDraw","rectSelect","mutable dataRange","dblClickInteraction","alteraMenuLocalidade","hoverInteraction","applyDotAnimation","htl","dataRange","clearButton","allRange"],nh),n.define("initial scatterConfig",ng),n.variable(t("mutable scatterConfig")).define("mutable scatterConfig",["Mutable","initial scatterConfig"],(e,t)=>new e(t)),n.variable(t("scatterConfig")).define("scatterConfig",["mutable scatterConfig"],e=>e.generator),n.variable(t("alteraMenuLocalidade")).define("alteraMenuLocalidade",["viewof munSelecionados","corMunNaoUsada"],nw),n.define("initial debug",ny),n.variable(t("mutable debug")).define("mutable debug",["Mutable","initial debug"],(e,t)=>new e(t)),n.variable(t("debug")).define("debug",["mutable debug"],e=>e.generator),n.variable(t()).define(["md"],nx),n.variable(t()).define(["md"],nA),n.variable(t("coresMunicipios")).define("coresMunicipios",nS),n.variable(t("corMunNaoUsada")).define("corMunNaoUsada",["coresMunicipios"],nC),n.variable(t()).define(["htl","corMunNaoUsada","munSelecionados"],nk),n.variable(t()).define(["md"],nM),n.variable(t("flagCanvasTest")).define("flagCanvasTest",["DOM","flagDraw"],nT),n.variable(t("flagDraw")).define("flagDraw",nD),n.variable(t("flagSvgTest")).define("flagSvgTest",["htl","flagPath"],nI),n.variable(t("flagPath")).define("flagPath",nO),n.variable(t()).define(["md"],nE),n.variable(t("data")).define("data",["dadosMunicipio","xAxisVar","yAxisVar","colorVar","codigoToMunicipio","dataFilter","dataRange"],nL),n.define("initial dataFilter",["intervaloNascimentos","ano"],nR),n.variable(t("mutable dataFilter")).define("mutable dataFilter",["Mutable","initial dataFilter"],(e,t)=>new e(t)),n.variable(t("dataFilter")).define("dataFilter",["mutable dataFilter"],e=>e.generator),n.variable(t("highlightData")).define("highlightData",["munSelecionados","data"],nN),n.variable(t("variables")).define("variables",nP),n.variable(t("selectRange")).define("selectRange",["data"],n$),n.variable(t("allRange")).define("allRange",nF),n.define("initial dataRange",["mutable clearWindowSelection","allRange"],nj),n.variable(t("mutable dataRange")).define("mutable dataRange",["Mutable","initial dataRange"],(e,t)=>new e(t)),n.variable(t("dataRange")).define("dataRange",["mutable dataRange"],e=>e.generator),n.variable(t()).define(["md"],nB),n.variable(t("hoverInteraction")).define("hoverInteraction",["d3"],nG),n.variable(t("dblClickInteraction")).define("dblClickInteraction",["d3","data","highlightData"],nU),n.variable(t("rectSelect")).define("rectSelect",["d3"],nz),n.variable(t()).define(["md"],nV),n.define("initial oldDataMap",nq),n.variable(t("mutable oldDataMap")).define("mutable oldDataMap",["Mutable","initial oldDataMap"],(e,t)=>new e(t)),n.variable(t("oldDataMap")).define("oldDataMap",["mutable oldDataMap"],e=>e.generator),n.variable(t("applyDotAnimation")).define("applyDotAnimation",["mutable oldDataMap","d3"],nH),n.variable(t()).define(["md"],n_),n.variable(t("munInput")).define("munInput",["htl","municipios","SearchForm","nomeMunicipio"],nW),n.variable(t()).define(["md"],nZ),n.variable(t("codigoToMunicipio")).define("codigoToMunicipio",["municipios"],nY),n.variable(t("nomeMunicipio")).define("nomeMunicipio",["mutable debug"],nX);let r=e.module(H);n.import("dadosMunicipio",r);let o=e.module(iB);n.import("SearchForm",o);let l=e.module(iW);n.import("menuLocalidade",l),n.import("municipios",l);let s=e.module(i9);n.import("sliderbase",s),n.import("sliderArray",s),n.import("sliderRangeBase",s),n.import("style_slider",s);let u=e.module(S);return n.import("Legend",u),n.variable(t("estiloFonteMenuLocalidade")).define("estiloFonteMenuLocalidade",["htl"],nJ),n}function nQ(e){return e`# ASlider`}function n1(e,t){return e({values:t.range(100),value:3})}function n0(e,t){return e({values:t.range(100),value:[5,59]})}function n2(e,t){return function(i={}){let{height:n=80,rulerThickness:a=10,thumbThickness:r=6,thumbHeight:o=16,margin:l=10,labelDy:s=2,width:u=400,values:d=[1,2,3,4,5,6],value:c=[3,4]}=i,f=!(c instanceof Array),p=e.svg`<svg width=${u} height=${n} >`,m=t.select(p).attr("class","aslider"),v=u-l,b=(n-a)/2,h=b+a,g=e=>d[Math.round(((e=Math.max(l,Math.min(v,e)))-l)/(v-l)*(d.length-1))],w=e=>{let t=l,i=Number.MAX_VALUE;for(let n=0;n<d.length;n++){let a=(v-l)/(d.length-1)*n+l,r=Math.abs(g(a)-e);r<i&&([t,i]=[a,r])}return t};m.append("rect").attr("class","ruler").attr("width",u-2*l).attr("height",a).attr("x",l).attr("y",b);let y=m.append("rect").attr("class","range").attr("y",b).attr("height",a);m.selectAll("line.tick").data(d.slice(1,-1)).join("line").attr("class","tick").attr("x1",w).attr("x2",w).attr("y1",b).attr("y2",h),m.selectAll("text.label").data([d[0],d[d.length-1]]).join("text").attr("class","label").attr("dominant-baseline","hanging").attr("x",w).attr("y",(h+b+o)/2+s).text(e=>e);let x=m.append("rect").attr("class","thumb min").attr("width",r).attr("height",o).attr("rx",r/2),A=m.append("rect").attr("class","thumb max").attr("width",r).attr("height",o).attr("rx",r/2);f&&A.remove();let S=e=>{c=e;let t,i;f?[t,i]=[c,c]:[t,i]=c,t!=i||f?(x.attr("x",w(t)-r/2),A.attr("x",w(i)-r/2)):(x.attr("x",w(t)-r),A.attr("x",w(i))),x.attr("y",(h+b-o)/2),A.attr("y",(h+b-o)/2),y.attr("x",w(t)).attr("width",w(i)-w(t)),m.selectAll("text.thumbLabel").remove(),m.selectAll("text.thumbLabel").data([t,i]).join("text").attr("class","thumbLabel").attr("dominant-baseline","auto").attr("x",w).attr("y",(h+b-o)/2-s).text(e=>e),p.value=c,p.dispatchEvent(new CustomEvent("input"))},C=null,k=null;return m.selectAll(".thumb").on("mousedown",function(e){1==e.buttons&&(k=(C=t.select(this)).classed("min")?"min":"max")}),m.on("mousemove",function(e){if(!C)return;let t=e.offsetX,i=g(t),[n,a]=f?[c,c]:c;"min"==k?(i<=a||f)&&(n=i):i>=n&&(a=i),S(f?n:[n,a])}).on("mouseup mouseleave",e=>{C=null}),S(c),p}}function n5(e){return e.html`<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
  .aslider {
    stroke: darkgray;
    fill: lightgray;
    user-select:none;
  }
  .aslider>.range {
    fill: #151472;
    opacity: 50%;
  }
  .aslider>.thumb {
    fill: #151472;
    stroke: #151472;
  } 
  .aslider>.label, .aslider>.thumbLabel {
    fill: #151472;
    stroke: none;
    text-anchor: middle;
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 11px;
  }

</style>`}function n4(e,t){let i=e.module();return i.variable(t()).define(["md"],nQ),i.variable(t("viewof testSingle")).define("viewof testSingle",["aSlider","d3"],n1),i.variable(t("testSingle")).define("testSingle",["Generators","viewof testSingle"],(e,t)=>e.input(t)),i.variable(t("viewof testInterval")).define("viewof testInterval",["aSlider","d3"],n0),i.variable(t("testInterval")).define("testInterval",["Generators","viewof testInterval"],(e,t)=>e.input(t)),i.variable(t("aSlider")).define("aSlider",["htl","d3"],n2),i.variable(t("aSliderStyles")).define("aSliderStyles",["htl"],n5),i}function n3(e){return e`# ADrawer`}function n6(e,t){return e(t,{shown:!0,title:"Nascimentos",subtitle:"Exibir somente munic\xedpios com total de nascimentos entre:"})}function n7(e){return e({values:[0,10,100,1e3,1e5,1e6],value:[0,1e6],width:300,rulerThickness:16,thumbHeight:20,height:50,margin:20})}function n8(e){return e}function n9(e){return()=>e.html`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="#151472"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.76426 4.76462C3.89443 4.63445 4.10549 4.63445 4.23566 4.76462L5.99996 6.52892L7.76426 4.76462C7.89443 4.63445 8.10549 4.63445 8.23566 4.76462C8.36584 4.8948 8.36584 5.10585 8.23566 5.23603L6.23566 7.23603C6.10549 7.3662 5.89443 7.3662 5.76426 7.23603L3.76426 5.23603C3.63408 5.10585 3.63408 4.8948 3.76426 4.76462Z" fill="#E5E5E5"/>
</svg>
`}function ae(e){return()=>e.html`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="#151472"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.09763 3.76462C5.22781 3.63445 5.43886 3.63445 5.56904 3.76462L7.56904 5.76462C7.69921 5.8948 7.69921 6.10585 7.56904 6.23603L5.56904 8.23603C5.43886 8.3662 5.22781 8.3662 5.09763 8.23603C4.96746 8.10585 4.96746 7.8948 5.09763 7.76462L6.86193 6.00033L5.09763 4.23603C4.96746 4.10585 4.96746 3.8948 5.09763 3.76462Z" fill="#E5E5E5"/>
</svg>
`}function at(e,t,i){return function(n,a={}){let{shown:r=!1,title:o="title",subtitle:l=null}=a,s=e.html`<div class=adrawer>`,u=e.html`<div class=titleArea>`,d=e.html`<div class=icon>`,c=e.html`<div class=title>${o}`;u.append(d,c);let f=e.html`<div class=contentArea>`;l&&f.append(e.html`<div class=subtitle >${l}`),f.append(n);let p=()=>{d.innerHTML="",d.append(r?t():i()),f.style.display=r?"block":"none"};return p(),u.onclick=()=>{r=!r,p()},s.append(u,f),s}}function ai(e){return e.html`<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
  div.adrawer .titleArea {
    display:inline-block;
    font-family: Roboto Condensed;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    user-select: none;
  }
  div.adrawer div.subtitle {
    display:block;
    font-family: Roboto Condensed;
    font-size: 10px;
    font-weight: 400;
    line-height: 11px;
    letter-spacing: 0em;
    text-align: left;
  }
  
 div.adrawer div.titleArea .icon {
   display:inline-block;
   padding-right:5px;
 }
 div.adrawer div.titleArea .title {
   vertical-align: top;
   color: #151472;
   display:inline-block;    
 }
</style>`}function an(e){return e}function aa(e,t){let i=e.module();i.variable(t()).define(["md"],n3),i.variable(t()).define(["aDrawer","viewof filtroNascimentos"],n6),i.variable(t("viewof filtroNascimentos")).define("viewof filtroNascimentos",["aSlider"],n7),i.variable(t("filtroNascimentos")).define("filtroNascimentos",["Generators","viewof filtroNascimentos"],(e,t)=>e.input(t)),i.variable(t()).define(["filtroNascimentos"],n8),i.variable(t("chevronDown")).define("chevronDown",["htl"],n9),i.variable(t("chevronRight")).define("chevronRight",["htl"],ae),i.variable(t("aDrawer")).define("aDrawer",["htl","chevronDown","chevronRight"],at),i.variable(t("aDrawerStyles")).define("aDrawerStyles",["htl"],ai);let n=e.module(n4);return i.import("aSlider",n),i.import("aSliderStyles",n),i.variable(t()).define(["aSliderStyles"],an),i}function ar(e){return e`# ASelect`}function ao(e){return e({options:["foo","bar","xpto"],width:300,value:"xpto",placeholder:"Select one"})}function al(e){return e({width:300,placeholder:"\uD83D\uDD0D buscar"})}function as(e){return e}function au(e){return function(t={}){let{placeholder:i="",width:n=200}=t,a=e.html`<input type=text class=atext placeholder=${i}>`;return a.style.width=`${n}px`,a}}function ad(e){return function(t={}){let{placeholder:i="",options:n=["abc","def","xpto"],width:a=200,value:r="xpto"}=t,o=e.html`<select class=aselect>`;for(let l of(o.style.width=`${a}px`,i&&""!=i&&o.append(e.html`<option value="" disabled selected >${i}`),n)){let s=l==r?"selected":"",u=e.html`<option value="${l}" >${l}`;s&&(u.selected=!0),o.append(u)}return o}}function ac(e,t){return t.html`<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
  
  select.aselect, input[type=text].atext {
    appearance: none;
    padding:1px 1px 1px 5px;
        box-sizing: border-box;
    margin:0;
    width: 100%;
    border: 1px solid #151472;
    border-radius: 4px;
    font-family: Roboto Condensed;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    cursor: pointer;
  }
  select.aselect {
    background-image:url(${e}); 
    background-position: 98%;
    background-size:10px; 
    background-repeat:no-repeat;
  }
</style>`}function af(e){return()=>e.html`<svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.146447C0.841709 -0.0488155 1.15829 -0.0488155 1.35355 0.146447L4 2.79289L6.64645 0.146447C6.84171 -0.0488155 7.15829 -0.0488155 7.35355 0.146447C7.54882 0.341709 7.54882 0.658291 7.35355 0.853553L4.35355 3.85355C4.15829 4.04882 3.84171 4.04882 3.64645 3.85355L0.646447 0.853553C0.451184 0.658291 0.451184 0.341709 0.646447 0.146447Z" fill="black"/>
</svg>`}async function ap(e){return await e("da.png").url()}function am(e){return new URL(e)}function av(e,t){return t.html`<div style="background:url(${e}) right; background-size:10px; background-repeat:no-repeat;">XXX  `}function ab(e,t){let n=e.module(),a=new Map([["da.png",{url:new i.U(i(9555)),mimeType:"image/png",toString:function(){return this.url}}]]);return n.builtin("FileAttachment",e.fileAttachments(e=>a.get(e))),n.variable(t()).define(["md"],ar),n.variable(t()).define(["aSelect"],ao),n.variable(t("viewof term")).define("viewof term",["aText"],al),n.variable(t("term")).define("term",["Generators","viewof term"],(e,t)=>e.input(t)),n.variable(t()).define(["term"],as),n.variable(t("aText")).define("aText",["htl"],au),n.variable(t("aSelect")).define("aSelect",["htl"],ad),n.variable(t("aSelectStyles")).define("aSelectStyles",["daPath","htl"],ac),n.variable(t("downArrow")).define("downArrow",["htl"],af),n.variable(t("daPath")).define("daPath",["FileAttachment"],ap),n.variable(t("daUrl")).define("daUrl",["daPath"],am),n.variable(t()).define(["daPath","htl"],av),n}function ah(e){return e`# Amplia Saúde - Mapa (cópia 8 outubro)
`}function ag(e){return e.html`<style>
  .containerPrincipal {
    display: grid; 
    background: #FAFAFA;
    padding:10px;
    margin:0;
    column-gap:10px;
    row-gap:10px;
    grid-template-columns: 318px 200px auto 318px;
    grid-template-rows: 55px 55px 95px 130px 140px 300px;
  }
  .containerPrincipal>div {
    margin:0;
    border-radius:8px;
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #151472;
    padding:16px;
  }
  div.menuPrincipal {
    display: flex;
    justify-content: space-between;
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 2;
    padding:0;
  }
  div.indicadorChave {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 6;
    background:white;
    z-index:10;
    box-shadow: 2px 2px 6px lightgray;
  }
  div.indicadorChaveSmall {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 4;
    background:white;
    z-index:10;
    box-shadow: 2px 2px 6px lightgray;
  }
  div.scatterplot {
    position:relative;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 6;
    grid-row-end: 7;
    border:none;
    background:white;
    z-index:10;
    box-shadow: 2px 2px 6px lightgray;
  }
  div.scatterplotBig {
    position:relative;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 5;
    grid-row-end: 7;
    border:none;
    background:white;
    z-index:9;
    box-shadow: 2px 2px 6px lightgray;
  }
   div.filtrarPorSmall {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 3;
    background:white;
    z-index:10;
     box-shadow: 2px 2px 6px lightgray;
  }
   div.filtrarPor {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 7;
    background:white;
    z-index:10;
     box-shadow: 2px 2px 6px lightgray;
  }
  div.mapa {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 7;
    padding:0;
  }
 
</style>
<div class=containerPrincipal>
  <div class=menuPrincipal> MENU </div>
  <div class=indicadorChave> INDICADOR CHAVE </div>
  <div class=indicadorChaveSmall> INDICADOR CHAVE SMALL </div>
  <div class=scatterplot> SCATTERPLOT </div>
  <div class=scatterplotBig>BIG</div>
  <div class=mapa> MAPA </div>
  <div class=filtrarPor> FILTRAR POR </div>
  <div class=filtrarPorSmall> FILTRAR POR SMALL</div>
</div>`}function aw(e,t){return e.value=[],t.toggle({label:"Mostrar Interface",value:!0})}function ay(){return!1}function ax(){return!1}function aA(){return[]}function aS(e,t,i,n,a,r){for(let o of(e.value=["clear"],["menuPrincipal","indicadorChave","indicadorChaveSmall","mapa","scatterplot","scatterplotBig","filtrarPor","filtrarPorSmall",])){let l=n.querySelector(`div.${o}`);l.innerHTML=o}a?(n.querySelector("div.scatterplot").style.display="none",n.querySelector("div.scatterplotBig").style.display="block",n.querySelector("div.indicadorChave").style.display="none",n.querySelector("div.indicadorChaveSmall").style.display="block"):(n.querySelector("div.scatterplotBig").style.display="none",n.querySelector("div.scatterplot").style.display="block",n.querySelector("div.indicadorChaveSmall").style.display="none",n.querySelector("div.indicadorChave").style.display="block"),r?(n.querySelector("div.filtrarPorSmall").style.display="none",n.querySelector("div.filtrarPor").style.display="block"):(n.querySelector("div.filtrarPorSmall").style.display="block",n.querySelector("div.filtrarPor").style.display="none")}function aC(e,t,i){e.value.push("panel");let n={};for(let a of["menuPrincipal","indicadorChave","indicadorChaveSmall","mapa","scatterplot","scatterplotBig","filtrarPor","filtrarPorSmall"]){let r=i.querySelector(`div.${a}`);n[a]={elem:r,w:r.clientWidth,h:r.clientHeight}}return n}function ak(e,t,i,n,a,r,o,l,s,u,d,c,f,p,m,v,b,h,g,w,y){if(e.value.push("populate"),t){i.menuPrincipal.elem.innerHTML="",i.menuPrincipal.elem.append(n.html`<div>${a}<br><div style="margin-top:10px">Selecione até 4 municípios com duplo clique nos gráficos</div></div>`),a.style.display="inline",a.style.paddingTop="10px",i.menuPrincipal.elem.append(r),r.style.display="inline";let x=o?i.indicadorChaveSmall:i.indicadorChave,A=n.html`<div style = "display:flex; justify-content: space-between;margin-bottom:10px">`,S=n.html`<span style="display:inline">INDICADOR CHAVE</span>`,C=o?l():s();C.style.cursor="pointer",A.onclick=()=>u.value=!u.value,A.append(S,C),x.elem.innerHTML="",x.elem.append(A,d,n.html`<br><br>`,c),f.style.marginTop="10px",o||(x.elem.append(f),f.querySelector("div.rankBox").dispatchEvent(new CustomEvent("scroll",{scrollTop:0})));let k=o?i.scatterplotBig:i.scatterplot;k.elem.innerHTML="",p.style.display="inline-block",p.style.marginBottom="10px",p.style.lineHeight="15px",m.style.display="inline-block",m.style.float="right",m.style.marginTop="5px",m.style.lineHeight="15px";let M=o?v():b();M.style.marginLeft="5px",M.style.cursor="pointer",M.style.position="absolute",M.style.right="10px",M.style.top="10px",M.style.zIndex=20,M.onclick=()=>u.value=!u.value,k.elem.append(M,p,h,m);let T=g?i.filtrarPor:i.filtrarPorSmall,D=n.html`<div style = "display:flex; justify-content: space-between;margin-bottom:10px">`,I=n.html`<span style="display:inline">FILTRAR POR</span>`,O=g?s():l();D.onclick=()=>w.value=!w.value,D.append(I,O),T.elem.innerHTML="",T.elem.append(D),g&&T.elem.append(y)}}function aM(e,t,i,n){e.value.push("afterInitial"),i.mapa.oldW=i.mapa.w,i.mapa.oldH=i.mapa.h,(i.mapa.elem.clientWidth!=i.mapa.w||i.mapa.elem.clientHeight!=i.mapa.h||0==i.mapa.elem.children.length)&&(i.mapa.w=i.mapa.elem.clientWidth,i.mapa.h=i.mapa.elem.clientHeight,n.value=!0)}function aT(e,t,i,n){e.value.push("populateMapa"),t&&i.mapa.oldElem!=n&&(i.mapa.elem.innerHTML="",i.mapa.elem.append(n))}function aD(){return!1}function aI(e){return e`## Session Storage
Armazenamento da coleção de municípios`}function aO(e,t){e.setItem("municipios",JSON.stringify(t))}function aE(e,t){let i=e.getItem("municipios");i=i?JSON.parse(i):["S\xc3O PAULO"],t.value=i}function aL(e){return e`## Filtros`}function aR(e){return e`### Ano`}function aN(e,t){return e.value.push("ano"),t({range:[2012,2019],value:2015,ticks:1,width:400,height:56})}function aP(e){return e`### Nascimentos`}function a$(e,t,i,n){return e.value.push("filtroNascimentos"),i({range:[1,10,100,1e3,1e4,1e5,2e5],value:[1,6],ticksLabelFormatter:e=>["1","10","100","1K","10K","100K","200K"][e],width:300,height:56},n)}function aF(e,t){return e(t,{shown:!0,title:"Nascimentos",subtitle:"Exibir somente munic\xedpios com total de nascimentos entre:"})}function aj(e){return e`### Região`}function aB(e,t,i){return e.value.push("filtroRegiao"),i({options:["(todas)","Centro-oeste","Nordeste","Norte","Sudeste","Sul"],width:250})}function aG(e,t,i){return e(t`<div style="padding:4px 0px 20px 10px;">${i}`,{shown:!0,title:"Regi\xe3o",subtitle:"Mostrar apenas uma regi\xe3o"})}function aU(e){return e`### Caixa com todos os filtros`}function az(e,t,i,n,a){e.value.push("painelFiltros");let r=i.html`<div>`;return r.append(n,a),r}function aV(e){return e`### Função de filtragem configurada conforme a interface`}function aq(e,t,i,n,a){e.value.push("allFilters");let r=["Norte","Nordeste","Sudeste","Sul","Centro-oeste"].indexOf(t),[o,l]=i.map(e=>[0,10,100,1e3,1e4,1e5,2e5][e]),s=e=>(-1==r||r==Math.floor(e.CODMUNRES/1e5)-1)&&e.ANO==n&&+e.TOTAL>=o&&+e.TOTAL<=l;return a.value=s,s}function aH(e){return e`## Variáveis`}function a_(e,t,i,n){return t.value.push("colorSelect"),i({options:n.map(e=>e.name),width:280})}function aW(e,t,i){return e.value=t.find(e=>e.name==i),e.value}function aZ(e,t,i,n){return t.value.push("xAxisSelect"),i({options:n.map(e=>e.name),value:"MORT. PERINATAL",width:110})}function aY(e,t,i){return e.value=t.find(e=>e.name==i),e.value}function aX(e,t,i,n){return t.value.push("yAxisSelect"),i({options:n.map(e=>e.name),value:"BAIXO PESO",width:110})}function aJ(e,t,i){return e.value=t.find(e=>e.name==i),e.value}function aK(e){return e`## Ranking`}function aQ(){return e=>e.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function a1(){return null}function a0(e,t,i,n,a,r){e.value=[];let o=[];return t.filter(i).forEach(t=>{let i=n.get(t.CODMUNRES);if(!i){e.value.push(t);return}let l=i.nome,s=i.uf,u=+a.field(t);o.push({name:l,uf:s,mun:i,normName:r(l),val:u})}),o.sort((e,t)=>t.val-e.val),o}function a2(e){return e.html`<style>
  div.rankBox {
    max-height:200px;
    max-width:280px;
    line-height: 20px;
    overflow-y: scroll; 
  }
  div.rankItem {
    display:block;
  }
  div.rankItem:hover {
    border: 1px solid black;
    cursor: pointer;
  }
  div.rankTitle {
    font-family: Roboto Condensed;
    font-size: 11px;
    margin-top:20px;
    margin-bottom:10px;
  }
  div.rankItem div {
    display:inline-block;
    font-family: Roboto Condensed;
    font-size: 10px;
    font-weight: 400;
    line-height: 11px;
    letter-spacing: 0em;
    text-align: left;
    padding: 3px 8px 3px 8px;
  }
  div.rankItem div.rank {
    min-width: 20px;
    max-width: 20px;
    text-align: right;
  }
  div.rankItem div.name {
    min-width: 175px;
    max-width: 175px;
  }
  div.rankItem div.uf {
    min-width: 20px;
    max-width: 20px;
  }
  </style>`}function a5(e,t,i,n,a,r,o,l,s,u){let d=t.html`<div class=rankBox >`,c=i.range,f=t.html`<div class=rankTitle style="color:${c[c.length-1]}">MUNICÍPIOS RANQUEADOS POR ${i.name}`,p=n({width:280,placeholder:"\uD83D\uDD0D BUSCAR"}),m=(e,i)=>{let n=t.html`<div class=rankItem>`,l=a(e.val),s=r.hsl(l).l>.5?"black":"white",u=t.html`<div class=rank style="color:${s};background:${l};" >${i+1}`,d=t.html`<div class=name>${e.name}`,c=t.html`<div class=uf>${e.uf}`,f=e.mun;return n.append(u,d,c),n.ondblclick=()=>o(f),n};p.style.marginBottom="10px";let v=t.html`<div style="position:relative;min-width:265px;min-height:${20*l.length}px;" >`,b=t.html`<div style="position:absolute;min-width:265px;min-height:${160}px;" >`;v.append(b),d.append(v);let h=e=>{b.style.top=e+"px",b.innerHTML="";let t=~~(e/20),i=Math.min(t+10,l.length);for(let n=t;n<i;n++){let a=m(l[n],n);b.append(a)}};return d.onscroll=e=>{h(d.scrollTop)},h(0),p.oninput=e=>{let t=s(p.value);for(let i=0;i<l.length;i++)if(l[i].normName.includes(t)){d.scrollTo(0,20*i);break}},u`<div>${f}${p}${d}`}function a4(e){return e`## Cartograma de Dorling`}function a3(e){return e`
<style>
.circle:not(.disabled):hover {
  stroke:black;
  stroke-width:1px;
}
</style>
`}function a6(e,t,i,n,a,r,o,l,s,u,d,c,f,p,m,v,b,h,g,w,y){i.value.push("dorling");let[[x,A],[S,C]]=n,k=a.mapa.w,M=Math.max(a.mapa.h),T=Math.max(.2,Math.min(3,(k-318*(r.value?2:1))/(S-x))),D=o`<div style="position:relative;width:${k}px;height:${M}px;">`,I=l;Object.assign(I.style,{position:"absolute",zIndex:10,top:"10px",left:e?"328px":"10px"});let O=s;Object.assign(O.style,{position:"absolute",zIndex:10,top:"38px",left:e?"328px":"10px"}),D.append(I,O),I.onclick=()=>G(1.2),O.onclick=()=>G(10/12);let E=u.create("svg").attr("width",k).attr("height",M).attr("viewBox",[0,0,k,M]).attr("id","dorling");D.append(E.node()),D.value=[],D.hovered;let L=E.append("g").attr("class","mainGroup"),R=[e?328:0,0],N=null;E.on("mousedown",function(e){N=[e.offsetX,e.offsetY],E.style("cursor","grab")}).on("mousemove",function(e){if(!N)return;let t=[e.offsetX,e.offsetY],i=[t[0]-N[0],t[1]-N[1]];R[0]+=i[0],R[1]+=i[1],L.attr("transform",`translate(${R})`),N=t}).on("mouseup",function(e){N&&(E.style("cursor","auto"),N=null)}).on("wheel",function(e){e.preventDefault(),e.stopPropagation();let t=e.deltaY>0?1.1:10/11,i=[e.offsetX,e.offsetY];G(t,i)}),L.attr("transform",`translate(${R})`);let P=L.append("g").classed("circles",!0).attr("transform",`scale(${T},${T})`),$=P.selectAll("circle").data(d).join("circle").on("dblclick",function(){b.value;let e=u.select(this);y((e=>{let t=e.data()[0].properties.codarea.slice(0,-1),i=w.filter(e=>e.cod==t);return i[0]})(e)),B()}).classed("circle",!0).attr("cx",e=>e.x).attr("cy",e=>e.y);var F=c().html((e,t)=>`
      ${f({pol:p.get(t.properties.codarea.slice(0,-1)).AVG_PM25,bp:1e3*p.get(t.properties.codarea.slice(0,-1)).BAIXO_PESO/p.get(t.properties.codarea.slice(0,-1)).TOTAL,municipio:m.get(t.properties.codarea)["Nome_Munic\xedpio"],uf:m.get(t.properties.codarea).Nome_UF,populacao:v.get(t.properties.codarea)})}`);E.call(F),$.on("mouseover",F.show).on("mouseout",F.hide);let j=L.append("g").classed("flags",!0),B=()=>{j.selectAll("path").remove(),j.selectAll("path").data(b.value).join("path").attr("transform",e=>{let t=h.get(e.cod);return`translate(${t.x*T},${t.y*T})`}).attr("d",g(12)).attr("fill",e=>e.cor).attr("stroke","black")};function G(e,t){let[i,n]=t||[k/2,M/2],[a,r]=R,o=Math.max(.2,Math.min(3,T*e)),[l,s]=[(i-a)/T,(n-r)/T],[u,d]=[i-l*o,n-s*o];R=[u,d],T=o,L.attr("transform",`translate(${R})`),P.attr("transform",`scale(${T},${T})`),B()}function U(){let e=b.value,t=e.map(e=>e.cod);$.each(function(e){let i=u.select(this),n=t.includes(e.properties.codarea.slice(0,-1));i.classed("clicked",n)}),B()}return U(),D.updateSelected=U,D.circleSelection=$,D}function a7(){return 0}function a8(e,t,i,n,a,r,o,l,s){e.value.push("dorlingCircleConf"),t.circleSelection.each(function(e){let t=e.properties.codarea,u=i.get(t.slice(0,-1)),d=n.select(this),c=!a(u);d.classed("disabled",c).attr("r",r(o.get(t))).attr("fill",c?"lightgray":l(s.field(u)))})}function a9(e){return e`## Ícones`}function re(e){return e`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#151472"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 6C7.567 6 6 7.567 6 9.5C6 11.433 7.567 13 9.5 13C10.443 13 11.2988 12.6271 11.9282 12.0207C11.9414 12.0036 11.9558 11.9871 11.9714 11.9714C11.9871 11.9558 12.0036 11.9414 12.0207 11.9282C12.6271 11.2988 13 10.443 13 9.5C13 7.567 11.433 6 9.5 6ZM13.0159 12.3088C13.6318 11.539 14 10.5625 14 9.5C14 7.01472 11.9853 5 9.5 5C7.01472 5 5 7.01472 5 9.5C5 11.9853 7.01472 14 9.5 14C10.5625 14 11.539 13.6318 12.3088 13.0159L14.1464 14.8536C14.3417 15.0488 14.6583 15.0488 14.8536 14.8536C15.0488 14.6583 15.0488 14.3417 14.8536 14.1464L13.0159 12.3088ZM9.5 7.5C9.77614 7.5 10 7.72386 10 8V9H11C11.2761 9 11.5 9.22386 11.5 9.5C11.5 9.77614 11.2761 10 11 10H10V11C10 11.2761 9.77614 11.5 9.5 11.5C9.22386 11.5 9 11.2761 9 11V10H8C7.72386 10 7.5 9.77614 7.5 9.5C7.5 9.22386 7.72386 9 8 9H9V8C9 7.72386 9.22386 7.5 9.5 7.5Z" fill="#E5E5E5"/>
</svg>`}function rt(e){return e`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#151472"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 6C7.567 6 6 7.567 6 9.5C6 11.433 7.567 13 9.5 13C10.443 13 11.2988 12.6271 11.9282 12.0207C11.9414 12.0036 11.9558 11.9871 11.9714 11.9714C11.9871 11.9558 12.0036 11.9414 12.0207 11.9282C12.6271 11.2988 13 10.443 13 9.5C13 7.567 11.433 6 9.5 6ZM13.0159 12.3088C13.6318 11.539 14 10.5625 14 9.5C14 7.01472 11.9853 5 9.5 5C7.01472 5 5 7.01472 5 9.5C5 11.9853 7.01472 14 9.5 14C10.5625 14 11.539 13.6318 12.3088 13.0159L14.1464 14.8536C14.3417 15.0488 14.6583 15.0488 14.8536 14.8536C15.0488 14.6583 15.0488 14.3417 14.8536 14.1464L13.0159 12.3088ZM7.5 9.5C7.5 9.22386 7.72386 9 8 9H11C11.2761 9 11.5 9.22386 11.5 9.5C11.5 9.77614 11.2761 10 11 10H8C7.72386 10 7.5 9.77614 7.5 9.5Z" fill="#E5E5E5"/>
</svg>`}function ri(e){return()=>e`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 2C7.22386 2 7 1.77614 7 1.5C7 1.22386 7.22386 1 7.5 1H10.5C10.7761 1 11 1.22386 11 1.5V4.5C11 4.77614 10.7761 5 10.5 5C10.2239 5 10 4.77614 10 4.5V2.70711L7.35355 5.35355C7.15829 5.54882 6.84171 5.54882 6.64645 5.35355C6.45118 5.15829 6.45118 4.84171 6.64645 4.64645L9.29289 2H7.5ZM4.64645 6.64645C4.84171 6.45118 5.15829 6.45118 5.35355 6.64645C5.54882 6.84171 5.54882 7.15829 5.35355 7.35355L2.70711 10H4.5C4.77614 10 5 10.2239 5 10.5C5 10.7761 4.77614 11 4.5 11H1.5C1.22386 11 1 10.7761 1 10.5V7.5C1 7.22386 1.22386 7 1.5 7C1.77614 7 2 7.22386 2 7.5V9.29289L4.64645 6.64645Z" fill="black"/>
</svg>`}function rn(e){return()=>e`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.1464 1.14645C10.3417 0.951184 10.6583 0.951184 10.8536 1.14645C11.0488 1.34171 11.0488 1.65829 10.8536 1.85355L8.20711 4.5H10C10.2761 4.5 10.5 4.72386 10.5 5C10.5 5.27614 10.2761 5.5 10 5.5H7C6.72386 5.5 6.5 5.27614 6.5 5V2C6.5 1.72386 6.72386 1.5 7 1.5C7.27614 1.5 7.5 1.72386 7.5 2V3.79289L10.1464 1.14645ZM1.5 7C1.5 6.72386 1.72386 6.5 2 6.5H5C5.27614 6.5 5.5 6.72386 5.5 7V10C5.5 10.2761 5.27614 10.5 5 10.5C4.72386 10.5 4.5 10.2761 4.5 10V8.20711L1.85355 10.8536C1.65829 11.0488 1.34171 11.0488 1.14645 10.8536C0.951184 10.6583 0.951184 10.3417 1.14645 10.1464L3.79289 7.5H2C1.72386 7.5 1.5 7.27614 1.5 7Z" fill="black"/>
</svg>`}function ra(e){return()=>e.html`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.20544 6.45505C5.36816 6.29233 5.63198 6.29233 5.7947 6.45505L8.00007 8.66042L10.2054 6.45505C10.3682 6.29233 10.632 6.29233 10.7947 6.45505C10.9574 6.61777 10.9574 6.88158 10.7947 7.0443L8.2947 9.5443C8.13198 9.70702 7.86816 9.70702 7.70544 9.5443L5.20544 7.0443C5.04272 6.88158 5.04272 6.61777 5.20544 6.45505Z" fill="#151472"/>
</svg>`}function rr(e){return()=>e.html`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70541 6.45505C7.86813 6.29233 8.13195 6.29233 8.29467 6.45505L10.7947 8.95505C10.9574 9.11776 10.9574 9.38158 10.7947 9.5443C10.632 9.70702 10.3681 9.70702 10.2054 9.5443L8.00004 7.33893L5.79467 9.5443C5.63195 9.70702 5.36813 9.70702 5.20541 9.5443C5.04269 9.38158 5.04269 9.11776 5.20541 8.95505L7.70541 6.45505Z" fill="#151472"/>
</svg>
`}function ro(e){return e`## Scatterplot`}function rl(){return 0}function rs(e,t){let i=e?496:286;t.value.width=i,t.value.height=3*i/4,t.value=t.value}function ru(e,t,i){return e.value.push("scatterPlot"),i}function rd(e){return e}function rc(e){return e}function rf(e){return e`## Tooltip`}function rp(e){return e`
  <style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');

  div.tooltip {
    font-family: 'Roboto Condensed';
    background: white;
    border-radius: 8px;
    box-shadow: 1px 1px 5px gray;
    display: block;
    padding: .8em;
    display:block;
    min-height: 100px;
    width:220px;
    color: #151472;
    z-index:11;
    margin-bottom: 15px;
  }

  div.tooltip p {
    font-size: 0.8em;
    margin-top: 12px;
    font-weight: 600;
  }

  div.tooltip p span {
    font-weight: 300;
    float: right;
    white-space:nowrap;
  }

  div.tooltip h1 span {
    font-weight: 300;
  }

  div.tooltip h1 {
    font-size: 14px;
    color: #151472;
  }


  div.tooltip h2 {
    font-size: 0.9em;
    font-weight: 400;
color: #151472;
  }
  
  table {
    border: 3px solid white;
    width: 100%; 
    height: 10px;
    margin-left: -3px;
    border-collapse: collapse;
  }

  th, td {
  	border: 2px solid white;
    border-collapse: collapse;
    width:20%;
  }
  
  tr {
    background-color: rgba(0, 0, 0, 0.15);
    height: 10px;
  }

  .clicked {
    stroke: black;
    stroke-width: 2px;
  }
</style>`}function rm(e,t){return(i,n)=>{let a=e.scaleThreshold(n.thresholds,n.range),r=a(i),o=(a.range().indexOf(r)+1).toString();var l=t`
<p>${n.label} <span class="value">${e.format(".3r")(i).replace(/\./g,",")}</span></p>
<table>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>`;return e.select(l).selectAll("td:nth-child("+o+")").style("background",r),l.outerHTML}}function rv(e,t,i){return n=>`
    <div class="tooltip">
    <h1>${n.municipio} <span>${n.uf}</span></h1>
    <p>${e.format(",")(n.populacao).replace(/,/g,".")} habitantes</p>
    ${t(n.pol,i[0])}
    ${t(n.bp,i[1])}
    </div>
`}function rb(e,t,i){e.value.push("munSelecionados"),i.updateSelected()}function rh(e){return e({selector:"h2",heading:"Ir para:"})}function rg(e){return e`## Funções`}function rw(e){return(t,i,n)=>{let a=e.select(t).selectAll("circle");return a.on("mouseover",function(){e.select(this).attr("stroke","black"),i(e.select(this).data())}),a.on("mouseleave",function(){e.select(this).attr("stroke","none"),n(e.select(this).data())}),t}}function ry(e){return e`## Dados`}function rx(e){return e("baixopeso-mun-ano.csv").csv()}function rA(e){return e("pm25-mun-ano.csv").csv()}function rS(e){return e("malhabrasil.json").json()}function rC(e,t,i){let n=e(t.feature(i,i.objects.foo),!0);for(let a of n.features){let r=a.properties.centroide;if(0==r[0]&&0==r[1]){let o=a.geometry.coordinates.flat(4);r[0]=o[0],r[1]=o[1]}}return n}function rk(e){return e("ufnomes.json").json()}function rM(e){return e("municipios.csv").csv()}function rT(e){return new Map(e.map(e=>[e["C\xf3digo Munic\xedpio Completo"],e]))}function rD(e){return new Map(e.map(e=>[e.properties.codarea.slice(0,6),e]))}function rI(e){return t=>e.get(t).properties.codarea}function rO(e){return e("populacao_municipio_2018.csv").csv()}function rE(e){return new Map(e.map(e=>[e.municipio,+e.populacao]))}function rL(e,t){return e.extent(t.values())}function rR(e){return new Map(e.map(e=>[e.codigo,e.idh]))}function rN(e,t){return e.extent(t.values())}function rP(e,t){return new Map(e.filter(e=>e.ANO==t).sort(function(e,t){return t.BAIXO_PESO/t.TOTAL-e.BAIXO_PESO/e.TOTAL}).map((e,t)=>[e.CODMUNRES,["0"==e.TOTAL?0:e.BAIXO_PESO/e.TOTAL,t,e.TOTAL]]))}function r$(e,t){return new Map(e.filter(e=>e.ANO==t).map(e=>[e.CODMUNRES,e.TOTAL]))}function rF(e,t){return new Map(e.filter(e=>e.ANO==t).map(e=>[e.CODMUNRES,e]))}function rj(e){return e.map(function(e){return 1e3*e.BAIXO_PESO/e.TOTAL})}function rB(e){return e.map(function(e){return e.AVG_PM25})}function rG(e){return e.map(function(e){return 1e3*e.OBITOS_PERINATAIS/e.TOTAL}).filter(e=>0!==e&&1e3!==e)}function rU(e){return e.map(function(e){return 1e3*e.OBITOS_NEONATAIS/e.TOTAL})}function rz(e){return e.map(function(e){return e.OBITOS_TOTAIS})}function rV(e){return e.map(function(e){return 1e3*e.OBITOS_INFANTIS/e.TOTAL})}function rq(e){return function(t){return{limits:e.extent(t.values()),quantiles:[e.quantile(t,.25),e.quantile(t,.5),e.quantile(t,.75),e.quantile(t,1)]}}}function rH(e,t){return e(t)}function r_(e,t){return e(t)}function rW(e,t){return e(t)}function rZ(e,t){return e(t)}function rY(e,t){return e(t)}function rX(e,t,i,n,a){return function(){return e.features.map(e=>{let r=t.get(e.properties.codarea);return{pos:[e.x,e.y],centroid:i(e.properties.centroide),id:+e.properties.codarea,name:r.Nome_Município,idRegion:+r.UF,regionName:r.Nome_UF,radius:n(a.get(e.properties.codarea))}})}}function rJ(e){return e`## Geo`}function rK(){return 1152}function rQ(e,t,i){return e.geoMercator().fitWidth(t,i)}function r1(e,t){return e.geoPath(t)}function r0(e,t){return e.bounds(t)}function r2(e){let[[t,i],[n,a]]=e;return Math.abs((n-t)/(a-i))}function r5(e){return e`## Escalas`}function r4(e,t){return e.scaleThreshold(t.thresholds,t.range)}function r3(e,t,i,n,a){let r=t(i,{width:280,title:n.label,tickSize:0});return a.select(r).selectAll("text").style("font-family","Roboto Condensed"),a.select(r).selectAll(".tick").selectAll("line").style("stroke","white"),a.select(r).selectAll(".tick").selectAll("text").style("color","#C4C4C4"),r}function r6(e){return e.scaleOrdinal(e.range(27),e.schemeDark2)}function r7(){return 24}function r8(e,t){return e.scaleSqrt().domain(t).range([1.5,24])}function r9(e,t){return e().tickValues([1e5,1e6,1e7]).tickFormat((e,t,i)=>{let n=e>=1e6?`${e/1e6} M`:`${e/1e3} m`,a=t===i.length-1?" habitantes":"";return`${n}${a}`}).scale(t)}function oe(e){return e`## Simulação física para o cartograma de Dorling`}async function ot(e,t,i,n,a,r){return await e("posicoesFinais.json").json()}function oi(e){return e`## Dependências e Imports`}function on(e){return e("d3@6").then(e=>(e.formatLocale({decimal:",",thousands:"\xa0"}),e))}function oa(e){return e("d3-tip")}function or(e){return e("https://bundle.run/@mapbox/geojson-rewind@0.5.0")}function oo(e){return e("topojson-client@3")}function ol(e){return e`### Componentes de input`}function os(e,t,i,n,a,r,o,l){return l.html`${e}
${t}
${i}
${n}
${a}
${r}
${o}`}function ou(e,t){let n=e.module();function a(){return this.url}let r=new Map([["baixopeso-mun-ano.csv",{url:new i.U(i(1848)),mimeType:"text/csv",toString:a}],["pm25-mun-ano.csv",{url:new i.U(i(1644)),mimeType:"text/csv",toString:a}],["malhabrasil.json",{url:new i.U(i(1371)),mimeType:"application/json",toString:a}],["ufnomes.json",{url:new i.U(i(2789)),mimeType:"application/json",toString:a}],["municipios.csv",{url:new i.U(i(285)),mimeType:"text/csv",toString:a}],["populacao_municipio_2018.csv",{url:new i.U(i(8875)),mimeType:"text/csv",toString:a}],["posicoesFinais.json",{url:new i.U(i(9056)),mimeType:"application/json",toString:a}]]);n.builtin("FileAttachment",e.fileAttachments(e=>r.get(e))),n.variable(t()).define(["md"],ah),n.variable(t("mainWindow")).define("mainWindow",["htl"],ag),n.variable(t("viewof interfaceToggle")).define("viewof interfaceToggle",["mutable reactDebug","Inputs"],aw),n.variable(t("interfaceToggle")).define("interfaceToggle",["Generators","viewof interfaceToggle"],(e,t)=>e.input(t)),n.define("initial biglayoutToggle",ay),n.variable(t("mutable biglayoutToggle")).define("mutable biglayoutToggle",["Mutable","initial biglayoutToggle"],(e,t)=>new e(t)),n.variable(t("biglayoutToggle")).define("biglayoutToggle",["mutable biglayoutToggle"],e=>e.generator),n.define("initial filtrarPorRolldownToggle",ax),n.variable(t("mutable filtrarPorRolldownToggle")).define("mutable filtrarPorRolldownToggle",["Mutable","initial filtrarPorRolldownToggle"],(e,t)=>new e(t)),n.variable(t("filtrarPorRolldownToggle")).define("filtrarPorRolldownToggle",["mutable filtrarPorRolldownToggle"],e=>e.generator),n.define("initial reactDebug",aA),n.variable(t("mutable reactDebug")).define("mutable reactDebug",["Mutable","initial reactDebug"],(e,t)=>new e(t)),n.variable(t("reactDebug")).define("reactDebug",["mutable reactDebug"],e=>e.generator),n.variable(t("clearMainWindow")).define("clearMainWindow",["mutable reactDebug","interfaceToggle","width","mainWindow","biglayoutToggle","filtrarPorRolldownToggle"],aS),n.variable(t("panel")).define("panel",["mutable reactDebug","clearMainWindow","mainWindow"],aC),n.variable(t("populate")).define("populate",["mutable reactDebug","interfaceToggle","panel","htl","viewof munSelecionados","viewof ano","biglayoutToggle","makeRollDownIcon","makeRollUpIcon","mutable biglayoutToggle","viewof colorSelect","legendaEscalaCores","rankingBox","viewof yAxisSelect","viewof xAxisSelect","makeReduceIcon","makeEnlargeIcon","scatterplotComponent","filtrarPorRolldownToggle","mutable filtrarPorRolldownToggle","painelFiltros"],ak),n.variable(t("afterInitialLayout")).define("afterInitialLayout",["mutable reactDebug","populate","panel","mutable remakeMapa"],aM),n.variable(t("populateMapa")).define("populateMapa",["mutable reactDebug","interfaceToggle","panel","viewof dorling"],aT),n.define("initial remakeMapa",aD),n.variable(t("mutable remakeMapa")).define("mutable remakeMapa",["Mutable","initial remakeMapa"],(e,t)=>new e(t)),n.variable(t("remakeMapa")).define("remakeMapa",["mutable remakeMapa"],e=>e.generator),n.variable(t()).define(["md"],aI),n.variable(t("storageUpdate")).define("storageUpdate",["sessionStorage","munSelecionados"],aO),n.variable(t("initialLoad")).define("initialLoad",["sessionStorage","viewof munSelecionados"],aE),n.variable(t()).define(["md"],aL),n.variable(t()).define(["md"],aR),n.variable(t("viewof ano")).define("viewof ano",["mutable reactDebug","sliderbase"],aN),n.variable(t("ano")).define("ano",["Generators","viewof ano"],(e,t)=>e.input(t)),n.variable(t()).define(["md"],aP),n.variable(t("viewof filtroNascimentos")).define("viewof filtroNascimentos",["mutable reactDebug","interfaceToggle","sliderArray","sliderRangeBase"],a$),n.variable(t("filtroNascimentos")).define("filtroNascimentos",["Generators","viewof filtroNascimentos"],(e,t)=>e.input(t)),n.variable(t("filtroNascimentosDrawer")).define("filtroNascimentosDrawer",["aDrawer","viewof filtroNascimentos"],aF),n.variable(t()).define(["md"],aj),n.variable(t("viewof filtroRegiao")).define("viewof filtroRegiao",["mutable reactDebug","interfaceToggle","aSelect"],aB),n.variable(t("filtroRegiao")).define("filtroRegiao",["Generators","viewof filtroRegiao"],(e,t)=>e.input(t)),n.variable(t("filtroRegiaoDrawer")).define("filtroRegiaoDrawer",["aDrawer","html","viewof filtroRegiao"],aG),n.variable(t()).define(["md"],aU),n.variable(t("painelFiltros")).define("painelFiltros",["mutable reactDebug","interfaceToggle","htl","filtroNascimentosDrawer","filtroRegiaoDrawer"],az),n.variable(t()).define(["md"],aV),n.variable(t("allFilters")).define("allFilters",["mutable reactDebug","filtroRegiao","filtroNascimentos","ano","mutable dataFilter"],aq),n.variable(t()).define(["md"],aH),n.variable(t("viewof colorSelect")).define("viewof colorSelect",["interfaceToggle","mutable reactDebug","aSelect","variables"],a_),n.variable(t("colorSelect")).define("colorSelect",["Generators","viewof colorSelect"],(e,t)=>e.input(t)),n.variable(t("color")).define("color",["mutable colorVar","variables","colorSelect"],aW),n.variable(t("viewof xAxisSelect")).define("viewof xAxisSelect",["interfaceToggle","mutable reactDebug","aSelect","variables"],aZ),n.variable(t("xAxisSelect")).define("xAxisSelect",["Generators","viewof xAxisSelect"],(e,t)=>e.input(t)),n.variable(t("xaxis")).define("xaxis",["mutable xAxisVar","variables","xAxisSelect"],aY),n.variable(t("viewof yAxisSelect")).define("viewof yAxisSelect",["interfaceToggle","mutable reactDebug","aSelect","variables"],aX),n.variable(t("yAxisSelect")).define("yAxisSelect",["Generators","viewof yAxisSelect"],(e,t)=>e.input(t)),n.variable(t("yaxis")).define("yaxis",["mutable yAxisVar","variables","yAxisSelect"],aJ),n.variable(t()).define(["md"],aK),n.variable(t("normalizeString")).define("normalizeString",aQ),n.define("initial unknownData",a1),n.variable(t("mutable unknownData")).define("mutable unknownData",["Mutable","initial unknownData"],(e,t)=>new e(t)),n.variable(t("unknownData")).define("unknownData",["mutable unknownData"],e=>e.generator),n.variable(t("filteredData")).define("filteredData",["mutable unknownData","dadosMunicipio","allFilters","codigoToMunicipio","colorVar","normalizeString"],a0),n.variable(t("rankStyles")).define("rankStyles",["htl"],a2),n.variable(t("rankingBox")).define("rankingBox",["interfaceToggle","htl","colorVar","aText","escalaCores","d3","alteraMenuLocalidade","filteredData","normalizeString","html"],a5),n.variable(t()).define(["md"],a4),n.variable(t("dorlingStyles")).define("dorlingStyles",["html"],a3),n.variable(t("viewof dorling")).define("viewof dorling",["interfaceToggle","remakeMapa","mutable reactDebug","limites","panel","mutable filtrarPorRolldownToggle","html","zoomInIcon","zoomOutIcon","d3","posicoesFinais","d3tip","tooltip","dadosPorCodigo","municipioPorCodigo","populacaoPorCodigo","viewof munSelecionados","posicoesPorCod","flagPath","municipios","alteraMenuLocalidade"],a6),n.variable(t("dorling")).define("dorling",["Generators","viewof dorling"],(e,t)=>e.input(t)),n.define("initial debug",a7),n.variable(t("mutable debug")).define("mutable debug",["Mutable","initial debug"],(e,t)=>new e(t)),n.variable(t("debug")).define("debug",["mutable debug"],e=>e.generator),n.variable(t("dorlingCircleConf")).define("dorlingCircleConf",["mutable reactDebug","viewof dorling","dadosPorCodigo","d3","allFilters","raio","populacaoPorCodigo","escalaCores","colorVar"],a8),n.variable(t()).define(["md"],a9),n.variable(t("zoomInIcon")).define("zoomInIcon",["html"],re),n.variable(t("zoomOutIcon")).define("zoomOutIcon",["html"],rt),n.variable(t("makeEnlargeIcon")).define("makeEnlargeIcon",["html"],ri),n.variable(t("makeReduceIcon")).define("makeReduceIcon",["html"],rn),n.variable(t("makeRollDownIcon")).define("makeRollDownIcon",["htl"],ra),n.variable(t("makeRollUpIcon")).define("makeRollUpIcon",["htl"],rr),n.variable(t()).define(["md"],ro),n.define("initial TESTE",rl),n.variable(t("mutable TESTE")).define("mutable TESTE",["Mutable","initial TESTE"],(e,t)=>new e(t)),n.variable(t("TESTE")).define("TESTE",["mutable TESTE"],e=>e.generator),n.variable(t("updateScatterConfig")).define("updateScatterConfig",["biglayoutToggle","mutable scatterConfig"],rs),n.variable(t("scatterplotComponent")).define("scatterplotComponent",["mutable reactDebug","interfaceToggle","scatterplot"],ru),n.variable(t()).define(["scatterConfig"],rd),n.variable(t()).define(["viewof limpar"],rc),n.variable(t()).define(["md"],rf),n.variable(t("styles")).define("styles",["html"],rp),n.variable(t("ttipScale")).define("ttipScale",["d3","html"],rm),n.variable(t("tooltip")).define("tooltip",["d3","ttipScale","variables"],rv),n.variable(t("reactToMunSelecionados")).define("reactToMunSelecionados",["mutable reactDebug","munSelecionados","viewof dorling"],rb),n.variable(t()).define(["toc"],rh),n.variable(t()).define(["md"],rg),n.variable(t("hoverInteraction")).define("hoverInteraction",["d3"],rw),n.variable(t()).define(["md"],ry),n.variable(t("baixopesoMunAno")).define("baixopesoMunAno",["FileAttachment"],rx),n.variable(t("pm25MunAno")).define("pm25MunAno",["FileAttachment"],rA),n.variable(t("malhaBrasil")).define("malhaBrasil",["FileAttachment"],rS),n.variable(t("feicoesMunicipio")).define("feicoesMunicipio",["rewind","topojson","malhaBrasil"],rC),n.variable(t("ufnome")).define("ufnome",["FileAttachment"],rk),n.variable(t("municipioInfo")).define("municipioInfo",["FileAttachment"],rM),n.variable(t("municipioPorCodigo")).define("municipioPorCodigo",["municipioInfo"],rT),n.variable(t("posicoesPorCod")).define("posicoesPorCod",["posicoesFinais"],rD),n.variable(t("codToCodarea")).define("codToCodarea",["posicoesPorCod"],rI),n.variable(t("populacaoMunicipio")).define("populacaoMunicipio",["FileAttachment"],rO),n.variable(t("populacaoPorCodigo")).define("populacaoPorCodigo",["populacaoMunicipio"],rE),n.variable(t("populacaoLimites")).define("populacaoLimites",["d3","populacaoPorCodigo"],rL),n.variable(t("idhPorCodigo")).define("idhPorCodigo",["idhm"],rR),n.variable(t("idhLimites")).define("idhLimites",["d3","idhPorCodigo"],rN),n.variable(t("bpPorCodigo")).define("bpPorCodigo",["baixopesoMunAno","ano"],rP),n.variable(t("totalPorCodigo")).define("totalPorCodigo",["baixopesoMunAno","ano"],r$),n.variable(t("dadosPorCodigo")).define("dadosPorCodigo",["dadosMunicipio","ano"],rF),n.variable(t("bp")).define("bp",["dadosMunicipio"],rj),n.variable(t("AVGPM25")).define("AVGPM25",["dadosMunicipio"],rB),n.variable(t("obper")).define("obper",["dadosMunicipio"],rG),n.variable(t("obneo")).define("obneo",["dadosMunicipio"],rU),n.variable(t("obtotal")).define("obtotal",["dadosMunicipio"],rz),n.variable(t("obinf")).define("obinf",["dadosMunicipio"],rV),n.variable(t("valueAnalysis")).define("valueAnalysis",["d3"],rq),n.variable(t()).define(["valueAnalysis","obper"],rH),n.variable(t()).define(["valueAnalysis","obneo"],r_),n.variable(t()).define(["valueAnalysis","obinf"],rW),n.variable(t()).define(["valueAnalysis","bp"],rZ),n.variable(t()).define(["valueAnalysis","AVGPM25"],rY),n.variable(t("getCircles")).define("getCircles",["feicoesMunicipio","municipioPorCodigo","projecao","raio","populacaoPorCodigo"],rX),n.variable(t()).define(["md"],rJ),n.variable(t("larguraDefault")).define("larguraDefault",rK),n.variable(t("projecao")).define("projecao",["d3","larguraDefault","feicoesMunicipio"],rQ),n.variable(t("funcaoPath")).define("funcaoPath",["d3","projecao"],r1),n.variable(t("limites")).define("limites",["funcaoPath","feicoesMunicipio"],r0),n.variable(t("razaoAspecto")).define("razaoAspecto",["limites"],r2),n.variable(t()).define(["md"],r5),n.variable(t("escalaCores")).define("escalaCores",["d3","colorVar"],r4),n.variable(t("legendaEscalaCores")).define("legendaEscalaCores",["interfaceToggle","Legend","escalaCores","colorVar","d3"],r3),n.variable(t("coresCirculos")).define("coresCirculos",["d3"],r6),n.variable(t("raioMax")).define("raioMax",r7),n.variable(t("raio")).define("raio",["d3","populacaoLimites"],r8),n.variable(t("legendaCirculos")).define("legendaCirculos",["legendCircle","raio"],r9),n.variable(t()).define(["md"],oe),n.variable(t("posicoesFinais")).define("posicoesFinais",["FileAttachment","feicoesMunicipio","projecao","d3","raio","populacaoPorCodigo"],ot),n.variable(t()).define(["md"],oi),n.variable(t("d3")).define("d3",["require"],on),n.variable(t("d3tip")).define("d3tip",["require"],oa),n.variable(t("rewind")).define("rewind",["require"],or),n.variable(t("topojson")).define("topojson",["require"],oo);let o=e.module(S);n.import("legend",o);let l=e.module(H);n.import("dadosMunicipio",l),n.import("idhm",l);let s=e.module(tZ);n.import("checkbox",s);let u=e.module(t2);n.import("legendCircle",u);let d=e.module(ir);n.import("toc",d);let c=e.module(iC);n.import("keys",c);let f=e.module(S);n.import("Legend",f);let p=e.module(nK);n.import("scatterplot",p),n.import("municipios",p),n.import("codigoToMunicipio",p),n.import("viewof munSelecionados",p),n.import("munSelecionados",p),n.import("variables",p),n.import("viewof limpar",p),n.import("limpar",p),n.import("flagPath",p),n.import("corMunNaoUsada",p),n.import("alteraMenuLocalidade",p),n.import("mutable scatterConfig",p),n.import("scatterConfig",p),n.import("mutable dataFilter",p),n.import("dataFilter",p),n.import("mutable xAxisVar",p),n.import("xAxisVar",p),n.import("mutable yAxisVar",p),n.import("yAxisVar",p),n.import("mutable colorVar",p),n.import("colorVar",p),n.variable(t()).define(["md"],ol);let m=e.module(aa);n.import("aDrawer",m),n.import("aDrawerStyles",m);let v=e.module(n4);n.import("aSlider",v),n.import("aSliderStyles",v);let b=e.module(ab);n.import("aSelect",b),n.import("aText",b),n.import("aSelectStyles",b);let h=e.module(i9);return n.import("sliderbase",h),n.import("sliderArray",h),n.import("sliderRangeBase",h),n.import("style_slider",h),n.variable(t("allStyles")).define("allStyles",["aDrawerStyles","aSliderStyles","aSelectStyles","style_slider","rankStyles","styles","dorlingStyles","htl"],os),n}i.d(t,{Z:function(){return ou}})}}]);