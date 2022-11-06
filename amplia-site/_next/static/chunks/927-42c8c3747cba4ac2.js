"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[927],{2789:function(e,t,i){e.exports=i.p+"static/media/00a731a6f302623f44df0e6ccf0109eb8e6f987662a4a7de47532fa4c4e500e6d7b671b3263883e96ed80ec0c463b92ab37f0727785dd3041c4f5f3f817d69c5.0e85747a.json"},285:function(e,t,i){e.exports=i.p+"static/media/09f204ccffdfb2918af2b98f13ad7ca24c4ea7e07a884e38ecf0e1f26008493cc5ed81a9bec3759c8d9b28453a69b3af7367257282d736e86fd5911219781594.3ce001f0.csv"},1848:function(e,t,i){e.exports=i.p+"static/media/16b2a6ff3bd8958f70981c7dcf3d8df8963d3b090e070356369d0351a4727f07cdcb3671376d5f52bb7885407b82cbb9b91e59be48c59f2561e99be3c3826c7d.28bb8602.csv"},1644:function(e,t,i){e.exports=i.p+"static/media/286bfcab293547b0b0d2222f6055ccef1f064e020131ef4aa44c88546a061dedba121772061f7ab730196cafd5d88cccff0f3446b7f4f61452ae3c46d73fca5d.e1139741.csv"},7591:function(e,t,i){e.exports=i.p+"static/media/2880e81ce12a7c1ddfaeac0771b67ed977ff05b7a4424bcb813c8ae1ba17e4a66c6409f0bd98e4354be268ce56669464a9bcfe94aa862b9982bf7edb6dbcb13c.d68b32e1.json"},1731:function(e,t,i){e.exports=i.p+"static/media/37d83ede2d54f8dc8d4d34fbb343d76c5c35598361224edb9250e1e0cb3d4e4721e48544a66ed0b851a8f450d173ecea158bbbe8b99f9b934dceb7da0ca75362.5a589e33.csv"},9555:function(e,t,i){e.exports=i.p+"static/media/a2301ed0ed118644a516238abc5408f2db17ee67772fd9b7bb61f4680aef60798b2b5e1e9073bdd79a64b00abcdb4491337be8919af1ef13759f229644763a56.918a74b9.png"},8875:function(e,t,i){e.exports=i.p+"static/media/b46883151e041b592666544e68e6e8e4a40c8d8638624dc4b8904749fd0da9325b877aad74811fca5f10756f5b5b269a514f4e6c336ac1a64f3256a598160a4d.b9654907.csv"},5521:function(e,t,i){e.exports=i.p+"static/media/c051fbc024553912e31968b35e537d4ad3592201b5f8e7bd13fd9d02e38599c5d541a704d0858c676328babb3e5c9c35dd7c6d67240090d094882a1cad8eece4.5a9f7c51.gif"},78:function(e,t,i){e.exports=i.p+"static/media/c4a76bf56594363a92c77a42b5a59a5ceec64d0fc1d6d203a7e76e8952eba5fafa4106f11bb323e5636913f9a0377ca33c6e946cd1aa2203fab5767dbe312876.c6b4f5ae.csv"},1371:function(e,t,i){e.exports=i.p+"static/media/cceb7b1fe14fcf7fe29c3983f38219769a40ef20882b1d53a60ae5ea7d7fa4178c5f8d84067424d9530cb9f91ed9e326f443f819d4cb418dd6c915db15774481.b5ea54eb.json"},2742:function(e,t,i){e.exports=i.p+"static/media/df28d6fa9d61d14764b813e3ef9e63448e032cef21b8a16cfe40cb3f966c41f7fe6768b3c707450a18f59c50ad6ae9f64466ef8a07e657ba0a7698190d0c490f.d31e2937.csv"},1927:function(e,t,i){function a(e){return e`# Color Legend

A simple legend for a [color scale](/@d3/color-schemes). Supports [continuous](/@d3/continuous-scales), [sequential](/@d3/sequential-scales), [diverging](/@d3/diverging-scales), [quantize, quantile, threshold](/@d3/quantile-quantize-and-threshold-scales) and [ordinal](/@d3/d3-scaleordinal) scales. To use:

~~~js
import {Legend, Swatches} from "@d3/color-legend"
~~~

Then call the legend function as shown below. (For ordinal scales, also consider the swatches function.)`}function n(e,t){return e(t.scaleSequential([0,100],t.interpolateViridis),{title:"Temperature (\xb0F)"})}function r(e,t){return e(t.scaleSequentialSqrt([0,1],t.interpolateTurbo),{title:"Speed (kts)"})}function o(e,t){return e(t.scaleDiverging([-.1,0,.1],t.interpolatePiYG),{title:"Daily change",tickFormat:"+%"})}function l(e,t){return e(t.scaleDivergingSqrt([-.1,0,.1],t.interpolateRdBu),{title:"Daily change",tickFormat:"+%"})}function s(e,t){return e(t.scaleSequentialLog([1,100],t.interpolateBlues),{title:"Energy (joules)",ticks:10})}function u(e,t){return e(t.scaleSequentialQuantile(t.range(100).map(()=>Math.random()**2),t.interpolateBlues),{title:"Quantile",tickFormat:".2f"})}function d(e,t){return e(t.scaleSqrt([-100,0,100],["blue","white","red"]),{title:"Temperature (\xb0C)"})}function c(e,t){return e(t.scaleQuantize([1,10],t.schemePurples[9]),{title:"Unemployment rate (%)"})}function f(e,t){return e(t.scaleQuantile(t.range(1e3).map(t.randomNormal(100,20)),t.schemeSpectral[9]),{title:"Height (cm)",tickFormat:".0f"})}function p(e,t){return e(t.scaleThreshold([2.5,3.1,3.5,3.9,6,7,8,9.5],t.schemeRdBu[9]),{title:"Unemployment rate (%)",tickSize:0})}function m(e,t){return e(t.scaleOrdinal(["<10","10-19","20-29","30-39","40-49","50-59","60-69","70-79","≥80"],t.schemeSpectral[10]),{title:"Age (years)",tickSize:0})}function v(e){return e`But wait, there’s more!

How about swatches for ordinal color scales? Both variable-width swatches and [column layout](https://developer.mozilla.org/en-US/docs/Web/CSS/columns) are supported.`}function b(e,t){return e(t.scaleOrdinal(["blueberries","oranges","apples"],t.schemeCategory10))}function h(e,t){return e(t.scaleOrdinal(["Wholesale and Retail Trade","Manufacturing","Leisure and hospitality","Business services","Construction","Education and Health","Government","Finance","Self-employed","Other"],t.schemeTableau10),{columns:"180px"})}function g(e){return e`---

## Implementation`}function w(e){return function(t,{title:i,tickSize:a=6,width:n=320,height:r=44+a,marginTop:o=18,marginRight:l=0,marginBottom:s=16+a,marginLeft:u=0,ticks:d=n/64,tickFormat:c,tickValues:f}={}){function p(e,t=256){let i=document.createElement("canvas");i.width=t,i.height=1;let a=i.getContext("2d");for(let n=0;n<t;++n)a.fillStyle=e(n/(t-1)),a.fillRect(n,0,1,1);return i}let m=e.create("svg").attr("width",n).attr("height",r).attr("viewBox",[0,0,n,r]).style("overflow","visible").style("display","block"),v=e=>e.selectAll(".tick line").attr("y1",o+s-r),b;if(t.interpolate){let h=Math.min(t.domain().length,t.range().length);b=t.copy().rangeRound(e.quantize(e.interpolate(u,n-l),h)),m.append("image").attr("x",u).attr("y",o).attr("width",n-u-l).attr("height",r-o-s).attr("preserveAspectRatio","none").attr("xlink:href",p(t.copy().domain(e.quantize(e.interpolate(0,1),h))).toDataURL())}else if(t.interpolator){if(b=Object.assign(t.copy().interpolator(e.interpolateRound(u,n-l)),{range:()=>[u,n-l]}),m.append("image").attr("x",u).attr("y",o).attr("width",n-u-l).attr("height",r-o-s).attr("preserveAspectRatio","none").attr("xlink:href",p(t.interpolator()).toDataURL()),!b.ticks){if(void 0===f){let g=Math.round(d+1);f=e.range(g).map(i=>e.quantile(t.domain(),i/(g-1)))}"function"!=typeof c&&(c=e.format(void 0===c?",f":c))}}else if(t.invertExtent){let w=t.thresholds?t.thresholds():t.quantiles?t.quantiles():t.domain(),y=void 0===c?e=>e:"string"==typeof c?e.format(c):c;b=e.scaleLinear().domain([-1,t.range().length-1]).rangeRound([u,n-l]),m.append("g").selectAll("rect").data(t.range()).join("rect").attr("x",(e,t)=>b(t-1)).attr("y",o).attr("width",(e,t)=>b(t)-b(t-1)).attr("height",r-o-s).attr("fill",e=>e),f=e.range(w.length),c=e=>y(w[e],e)}else b=e.scaleBand().domain(t.domain()).rangeRound([u,n-l]),m.append("g").selectAll("rect").data(t.domain()).join("rect").attr("x",b).attr("y",o).attr("width",Math.max(0,b.bandwidth()-1)).attr("height",r-o-s).attr("fill",t),v=()=>{};return m.append("g").attr("transform",`translate(0,${r-s})`).call(e.axisBottom(b).ticks(d,"string"==typeof c?c:void 0).tickFormat("function"==typeof c?c:void 0).tickSize(a).tickValues(f)).call(v).call(e=>e.select(".domain").remove()).call(e=>e.append("text").attr("x",u).attr("y",o+s-r-6).attr("fill","currentColor").attr("text-anchor","start").attr("font-weight","bold").attr("class","title").text(i)),m.node()}}function y(e){return function({color:t,...i}){return e(t,i)}}function x(e,t){return function(i,{columns:a=null,format:n,unknown:r,swatchSize:o=15,swatchWidth:l=o,swatchHeight:s=o,marginLeft:u=0}={}){let d=`-swatches-${Math.random().toString(16).slice(2)}`,c=null==r?void 0:i.unknown(),f=null==c||c===e.scaleImplicit?[]:[c],p=i.domain().concat(f);return(void 0===n&&(n=e=>e===c?r:e),null!==a)?t.html`<div style="display: flex; align-items: center; margin-left: ${+u}px; min-height: 33px; font: 10px sans-serif;">
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
  <div style=${{width:"100%",columns:a}}>${p.map(e=>{let a=`${n(e)}`;return t.html`<div class=${d}-item>
      <div class=${d}-swatch style=${{background:i(e)}}></div>
      <div class=${d}-label title=${a}>${a}</div>
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
  <div>${p.map(e=>t.html`<span class="${d}" style="--color: ${i(e)}">${n(e)}</span>`)}</div>`}}function C(e){return function({color:t,...i}){return e(t,i)}}function S(e,t){let i=e.module();return i.variable(t()).define(["md"],a),i.variable(t()).define(["Legend","d3"],n),i.variable(t()).define(["Legend","d3"],r),i.variable(t()).define(["Legend","d3"],o),i.variable(t()).define(["Legend","d3"],l),i.variable(t()).define(["Legend","d3"],s),i.variable(t()).define(["Legend","d3"],u),i.variable(t()).define(["Legend","d3"],d),i.variable(t()).define(["Legend","d3"],c),i.variable(t()).define(["Legend","d3"],f),i.variable(t()).define(["Legend","d3"],p),i.variable(t()).define(["Legend","d3"],m),i.variable(t()).define(["md"],v),i.variable(t()).define(["Swatches","d3"],b),i.variable(t()).define(["Swatches","d3"],h),i.variable(t()).define(["md"],g),i.variable(t("Legend")).define("Legend",["d3"],w),i.variable(t("legend")).define("legend",["Legend"],y),i.variable(t("Swatches")).define("Swatches",["d3","htl"],x),i.variable(t("swatches")).define("swatches",["Swatches"],C),i}async function A(e,t){return e`# Inputs
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
  * [\`password\`](#passwordDemo)`}function k(e){return e`| <h3>Friends & Family:</h3>  |   |
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

<br>*If you have any improvements for the bazaar, [please make your change in a fork and send it to me as a suggestion.](https://observablehq.com/@observablehq/suggestions-and-comments)*`}function M(e){return e`---
## Sliders

~~~js
import {slider} from "@jashkenas/inputs"
~~~`}function T(e){return e()}function D(e){return e({min:0,max:1,step:.01,format:".0%",description:"Zero to one, formatted as a percentage"})}function I(e){return e({min:0,max:1,step:.01,format:e=>`${Math.round(100*e)} per cent`,description:"Zero to one, formatted with a custom function"})}function E(e){return e({min:0,max:1e9,step:1e3,value:325e4,format:",",description:"Zero to one billion, in steps of one thousand, formatted as a (US) number"})}function L(e){return e({min:0,max:100,step:1,value:10,title:"Integers",description:"Integers from zero through 100"})}function O(e){return e({min:.9,max:1.1,precision:3,description:"A high precision slider example"})}function P(e){return e({min:.9,max:1.1,precision:3,submit:!0,description:"The same as a4, but only changes value on submit"})}function R(e){return e`More [fancy slider techniques](https://observablehq.com/@mootari/prime-numbers-slider).`}function N(e){return function(t={}){let{min:i=0,max:a=1,value:n=(a+i)/2,step:r="any",precision:o=2,title:l,description:s,disabled:u,getValue:d,format:c,display:f,submit:p}="number"==typeof t?{value:t}:t;return o=Math.pow(10,o),d||(d=e=>Math.round(e.valueAsNumber*o)/o),e({type:"range",title:l,description:s,submit:p,format:c,display:f,attributes:{min:i,max:a,step:r,disabled:u,value:n},getValue:d})}}function $(e){return e`---
## Buttons

~~~js
import {button} from "@jashkenas/inputs"
~~~`}function F(e){return e()}function j(e){return!this}function B(e){return e({value:"Click me",description:"We use a reference to the button below to record the time you pressed it."})}function G(e){return new Date(Date.now()).toUTCString()}function z(e){return function(t={}){let{value:i="Ok",title:a,description:n,disabled:r}="string"==typeof t?{value:t}:t,o=e({type:"button",title:a,description:n,attributes:{disabled:r,value:i}});return o.output.remove(),o}}function V(e){return e`---
## Dropdown Menus and Multiselects

~~~js
import {select} from "@jashkenas/inputs"
~~~`}function H(e){return e(["Spring","Summer","Fall","Winter"])}function U(e){return e}function q(e){return e({title:"Stooges",description:"Please pick your favorite stooge.",options:["Curly","Larry","Moe","Shemp"],value:"Moe"})}function _(e){return e}function W(e){return e({description:"As a child, which vegetables did you refuse to eat?",options:["Spinach","Broccoli","Brussels Sprouts","Cauliflower","Kale","Turnips","Green Beans","Asparagus"],multiple:!0})}function Z(e){return e}function X(e){let t=e({title:"How are you feeling today?",options:[{label:"\uD83E\uDD37",value:"shrug"},{label:"\uD83D\uDE02",value:"tears-of-joy"},{label:"\uD83D\uDE0D",value:"loving-it"},{label:"\uD83E\uDD14",value:"hmmm"},{label:"\uD83D\uDE31",value:"yikes",disabled:!0},{label:"\uD83D\uDE08",value:"mischievous"},{label:"\uD83D\uDCA9",value:"poo"}],value:"hmmm"});return t.input.style.fontSize="30px",t.input.style.marginTop="8px",t}function Y(e){return e}function K(e,t){return function(i={}){let{value:a,title:n,description:r,disabled:o,submit:l,multiple:s,size:u,options:d}=Array.isArray(i)?{options:i}:i;d=d.map(e=>"object"==typeof e?e:{value:e,label:e});let c=e({type:"select",title:n,description:r,submit:l,attributes:{disabled:o},getValue(e){let t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>e.value);return s?t:t[0]},form:t`
      <form>
        <select name="input" ${s?`multiple size="${u||d.length}"`:""}>
          ${d.map(({value:e,label:i,disabled:n})=>Object.assign(t`<option>`,{value:e,selected:Array.isArray(a)?a.includes(e):a===e,disabled:!!n&&n,textContent:i}))}
        </select>
      </form>
    `});return c.output.remove(),c}}function J(e){return e`---
## Autoselects
*A variant of an option menu, using an autocompleting text input, via HTML’s datalist element.* 

~~~js
import {autoSelect} from "@jashkenas/inputs"
~~~`}function Q(e,t){return e({options:t.objects.states.geometries.map(e=>e.properties.name),placeholder:"Search for a US state . . ."})}function ee(e){return e}function et(e,t){return function(i={}){let{value:a,title:n,description:r,disabled:o,autocomplete:l="off",placeholder:s,size:u,options:d,list:c="options"}=Array.isArray(i)?{options:i}:i,f=new Set(d),p=e({type:"text",title:n,description:r,attributes:{disabled:o},action(e){e.value=e.input.value=a||"",e.onsubmit=e=>e.preventDefault(),e.input.oninput=function(t){t.stopPropagation(),e.value=e.input.value,(!e.value||f.has(e.value))&&e.dispatchEvent(new CustomEvent("input"))}},form:t`
      <form>
         <input name="input" type="text" autocomplete="off" 
          placeholder="${s||""}" style="font-size: 1em;" list=${c}>
          <datalist id="${c}">
              ${d.map(e=>Object.assign(t`<option>`,{value:e}))}
          </datalist>
      </form>
      `});return p.output.remove(),p}}function ei(e){return e`---
## Color Pickers

*value: a hexadecimal string, e.g. * \`"#bada55"\` 

~~~js
import {color} from "@jashkenas/inputs"
~~~`}function ea(e){return e()}function en(e){return e({value:"#0000ff",title:"Background Color",description:"This color picker starts out blue"})}function er(e){return function(t={}){let{value:i="#000000",title:a,description:n,disabled:r,submit:o,display:l}="string"==typeof t?{value:t}:t,s=e({type:"color",title:a,description:n,submit:o,display:l,attributes:{disabled:r,value:i}});return s.input.value="",s.input.value=i,(a||n)&&(s.input.style.margin="5px 0"),s}}function eo(e){return e` ---
## Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {coordinates} from "@jashkenas/inputs"
~~~`}function el(e){return e()}function es(e){return e}function eu(e){return e({title:"Hometown",description:"Enter the coordinates of where you were born",value:[-122.27,37.87],submit:!0})}function ed(e){return e}function ec(e,t){return function(i={}){let{value:a=[],title:n,description:r,submit:o}=Array.isArray(i)?{value:i}:i,[l,s]=a;l=null!=l?l:"",s=null!=s?s:"";let u=e`<input name="input" type="number" autocomplete="off" min="-180" max="180" style="width: 80px;" step="any" value="${l}" />`,d=e`<input name="input" type="number" autocomplete="off" min="-90" max="90" style="width: 80px;" step="any" value="${s}" />`,c=t({type:"coordinates",title:n,description:r,submit:o,getValue(){let e=u.valueAsNumber,t=d.valueAsNumber;return[isNaN(e)?null:e,isNaN(t)?null:t]},form:e`
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
    `});return c.output.remove(),c}}function ef(e){return e` ---
## World Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {worldMapCoordinates} from "@jashkenas/inputs"
~~~`}function ep(e){return e([-122.27,37.87])}function em(e){return e}function ev(e,t,i,a,n,r,o){return function(l={}){let{value:s=[],title:u,description:d,width:c=400}=Array.isArray(l)?{value:l}:l,f=Math.round(.525*c),[p,m]=s;p=null!=p?p:null,m=null!=m?m:null;let v=e`<form style="width: ${c}px;"></form>`,b=t.context2d(c,f),h=b.canvas;h.style.margin="10px 0 3px";let g=i.geoNaturalEarth1().precision(.1).fitSize([c,f],{type:"Sphere"}),w=i.geoPath(g,b).pointRadius(2.5);function y(){if(b.fillStyle="#fff",b.fillRect(0,0,c,f),b.beginPath(),w(a),b.lineWidth=.35,b.strokeStyle="#ddd",b.stroke(),b.beginPath(),w(n),b.fillStyle="#f4f4f4",b.fill(),b.beginPath(),w(r),b.strokeStyle="#aaa",b.stroke(),null!=p&&null!=m){let e={type:"MultiPoint",coordinates:[[p,m]]};b.beginPath(),w(e),b.fillStyle="#f00",b.fill()}}v.append(h),h.onclick=function(e){let{offsetX:t,offsetY:i}=e;var a=g.invert([t,i]);p=+a[0].toFixed(2),m=+a[1].toFixed(2),y(),h.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},y();let x=o({type:"worldMapCoordinates",title:u,description:d,display:t=>e`<div style="width: ${c}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-bottom: 5px;">
            <span style="color: #777;">Longitude:</span> ${null!=p?p.toFixed(2):""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${null!=m?m.toFixed(2):""} 
          </div>`,getValue:()=>[null!=p?p:null,null!=m?m:null],form:v});return x}}function eb(e){return e` ---
## U.S.A. Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {usaMapCoordinates} from "@jashkenas/inputs"
~~~`}function eh(e){return e([-122.27,37.87])}function eg(e){return e}function ew(e){return e({title:"A Mini Map",description:"Defaults to New York City",width:200,value:[-74,40.71]})}function ey(e){return e}function ex(e,t,i,a,n,r){return function(o={}){let{value:l=[],title:s,description:u,width:d=400}=Array.isArray(o)?{value:o}:o,c=d/960,f=600*c,[p,m]=l;p=null!=p?p:null,m=null!=m?m:null;let v=e`<form style="width: ${d}px;"></form>`,b=t.context2d(d,f),h=b.canvas;h.style.margin="5px 0 20px";let g=i.geoAlbersUsa().scale(1280).translate([480,300]),w=i.geoPath().context(b).pointRadius(2.5/c);function y(){if(b.clearRect(0,0,d,f),b.save(),b.scale(c,c),b.lineWidth=.35/c,b.beginPath(),w(a),b.fillStyle="#f4f4f4",b.fill(),b.beginPath(),w(n),b.strokeStyle="#aaa",b.stroke(),null!=p&&null!=m){let e={type:"MultiPoint",coordinates:[g([p,m])]};b.beginPath(),w(e),b.fillStyle="#f00",b.fill()}b.restore()}v.append(h),h.onclick=function(e){let{offsetX:t,offsetY:i}=e;var a=g.invert([t/c,i/c]);p=+a[0].toFixed(2),m=+a[1].toFixed(2),y(),h.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},y();let x=r({type:"worldMapCoordinates",title:s,description:u,display:t=>e`<div style="position: absolute; width: ${d}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-top: -18px;">
            <span style="color: #777;">Longitude:</span> ${null!=p?p:""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${null!=m?m:""} 
          </div>`,getValue:()=>[null!=p?p:null,null!=m?m:null],form:v});return x}}function eC(e){return e` ---
## Dates

*value: a YYYY-MM-DD formatted string: * \`"2016-11-08"\` 

~~~js
import {date} from "@jashkenas/inputs"
~~~`}function eS(e){return e()}function eA(e){return e({title:"2017",min:"2017-01-01",max:"2017-12-31",value:"2017-01-01",description:"Only dates within the 2017 calendar year are allowed"})}function ek(e){return function(t={}){let{min:i,max:a,value:n,title:r,description:o,disabled:l,display:s}="string"==typeof t?{value:t}:t;return e({type:"date",title:r,description:o,display:s,attributes:{min:i,max:a,disabled:l,value:n}})}}function eM(e){return e` ---
## Times

*value: a HH:MM:SS formatted string: * \`"09:30:45"\`
<br>*(Time values are always in 24-hour format)*

~~~js
import {time} from "@jashkenas/inputs"
~~~`}function eT(e){return e()}function eD(e){return e}function eI(e){return e({title:"Afternoon",min:"12:00:00",max:"23:59:59",value:"13:00:00",step:1,description:"Only times after noon are allowed, and seconds are included"})}function eE(e){return e}function eL(e){return function(t={}){let{min:i,max:a,step:n,value:r,title:o,description:l,disabled:s,display:u}="string"==typeof t?{value:t}:t,d=e({type:"time",title:o,description:l,display:u,getValue:e=>e.value?e.value:void 0,attributes:{min:i,max:a,step:n,disabled:s,value:r}});return d.output.remove(),d}}function eO(e){return e`---
## File Upload
*Use the JavaScript [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications) to work with uploaded file contents.*

\`import {file} from "@jashkenas/inputs"\``}function eP(e){return e()}function eR(e){return e({title:"Photographs",description:"Only .jpg files are allowed in this example. Choose some images, and they’ll appear in the cell below.",accept:".jpg",multiple:!0})}async function eN(e,t,i){let a=e`<div>`;for(var n=0;n<t.length;n++){t[n];let r=e`<img height="125px" style="margin: 2px;" />`;r.src=await i.url(t[n]),a.append(r)}return a}function e$(e){return function(t={}){let{multiple:i,accept:a,title:n,description:r,disabled:o}=t,l=e({type:"file",title:n,description:r,attributes:{multiple:i,accept:a,disabled:o},action(e){e.input.onchange=()=>{e.value=i?e.input.files:e.input.files[0],e.dispatchEvent(new CustomEvent("input"))}}});return l.output.remove(),l.input.onchange(),l}}function eF(e){return e`---
## Text Inputs

~~~js
import {text} from "@jashkenas/inputs"
~~~`}function ej(e){return e()}function eB(e){return e({title:"A Text Input",placeholder:"Placeholder text",description:"Note that text inputs don’t show output on the right"})}function eG(e){return e}function ez(e){return e({placeholder:"Placeholder text",description:"This input only changes value on submit",submit:"Go"})}function eV(e){return e}function eH(e){return function(t={}){let{value:i,title:a,description:n,disabled:r,autocomplete:o="off",maxlength:l,minlength:s,pattern:u,placeholder:d,size:c,submit:f,getValue:p}="string"==typeof t?{value:t}:t,m=e({type:"text",title:a,description:n,submit:f,getValue:p,attributes:{value:i,autocomplete:o,maxlength:l,minlength:s,pattern:u,placeholder:d,size:c,disabled:r}});return m.output.remove(),m.input.style.fontSize="1em",m}}function eU(e){return e`---
## Textareas

~~~js
import {textarea} from "@jashkenas/inputs"
~~~`}function eq(e){return e()}function e_(e){return e}function eW(e){return e({title:"Your Great American Novel",placeholder:"Insert story here...",spellcheck:!0,width:"100%",rows:10,submit:"Publish"})}function eZ(e){return e}function eX(e,t){return function(i={}){let{value:a="",title:n,description:r,autocomplete:o,cols:l=45,rows:s=3,width:u,height:d,maxlength:c,placeholder:f,spellcheck:p,wrap:m,submit:v,disabled:b,getValue:h}="string"==typeof i?{value:i}:i,g=e({form:t`<form><textarea style="display: block; font-size: 0.8em;" name=input>${a}</textarea></form>`,title:n,description:r,submit:v,getValue:h,attributes:{autocomplete:o,cols:l,rows:s,maxlength:c,placeholder:f,spellcheck:p,wrap:m,disabled:b}});return g.output.remove(),null!=u&&(g.input.style.width=u),null!=d&&(g.input.style.height=d),v&&(g.submit.style.margin="0"),(n||r)&&(g.input.style.margin="3px 0"),g}}function eY(e){return e`---
## Radio Buttons

~~~js
import {radio} from "@jashkenas/inputs"
~~~`}function eK(e){return e(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function eJ(e){return e}function eQ(e){return e({title:"Contact Us",description:"Please select your preferred contact method",options:[{label:"By Email",value:"email"},{label:"By Phone",value:"phone"},{label:"By Pager",value:"pager"},],value:"pager"})}function e1(e){return e}function e0(e,t){return function(i={}){let{value:a,title:n,description:r,submit:o,options:l,disabled:s}=Array.isArray(i)?{options:i}:i;l=l.map(e=>"string"==typeof e?{value:e,label:e}:e);let u=e({type:"radio",title:n,description:r,submit:o,getValue(e){if(e.checked)return e.value;let t=Array.prototype.find.call(e,e=>e.checked);return t?t.value:void 0},form:t`
      <form>
        ${l.map(({value:e,label:i},n)=>{let r=t`<input type=radio name=input ${e===a?"checked":""} style="vertical-align: top; ${0===n?"margin-left: 1px;":""}" />`;r.setAttribute("value",e),s&&r.setAttribute("value",s);let o=t`
          <label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${r}
           ${i}
          </label>`;return o})}
      </form>
    `});return u.output.remove(),u}}function e5(e){return e`---
## Checkboxes

~~~js
import {checkbox} from "@jashkenas/inputs"
~~~`}function e2(e){return e(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function e4(e){return e}function e3(e){return e({title:"Colors",description:"Please select your favorite colors",options:[{value:"r",label:"Red"},{value:"o",label:"Orange"},{value:"y",label:"Yellow"},{value:"g",label:"Green"},{value:"b",label:"Blue"},{value:"i",label:"Indigo"},{value:"v",label:"Violet"}],value:["r","g","b"],submit:!0})}function e6(e){return e}function e7(e){return e({description:"Just a single checkbox to toggle",options:[{value:"toggle",label:"On"}],value:"toggle"})}function e8(e){return e}function e9(e,t){return function(i={}){let{value:a,title:n,description:r,submit:o,disabled:l,options:s}=Array.isArray(i)?{options:i}:i;s=s.map(e=>"string"==typeof e?{value:e,label:e}:e);let u=e({type:"checkbox",title:n,description:r,submit:o,getValue:e=>e.length?Array.prototype.filter.call(e,e=>e.checked).map(e=>e.value):!!e.checked&&e.value,form:t`
      <form>
        ${s.map(({value:e,label:i},n)=>{let r=t`<input type=checkbox name=input ${(a||[]).indexOf(e)>-1?"checked":""} style="vertical-align: top; ${0===n?"margin-left: 1px;":""}" />`;r.setAttribute("value",e),l&&r.setAttribute("disabled",l);let o=t`<label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${r}
           ${i}
          </label>`;return o})}
      </form>
    `});return u.output.remove(),u}}function te(e){return e`---
## Numbers

~~~js
import {number} from "@jashkenas/inputs"
~~~`}function tt(e){return e()}function ti(e){return e}function ta(e){return e({placeholder:"13+",title:"Your Age",submit:!0})}function tn(e){return e}function tr(e){return function(t={}){let{value:i,title:a,description:n,disabled:r,placeholder:o,submit:l,step:s="any",min:u,max:d}="number"==typeof t||"string"==typeof t?{value:+t}:t,c=e({type:"number",title:a,description:n,submit:l,attributes:{value:i,placeholder:o,step:s,min:u,max:d,autocomplete:"off",disabled:r},getValue:e=>e.valueAsNumber});return c.output.remove(),c.input.style.width="auto",c.input.style.fontSize="1em",c}}function to(e){return e`---
## Passwords

~~~js
import {password} from "@jashkenas/inputs"
~~~`}function tl(e){return e({value:"password"})}function ts(e){return e}function tu(e){return e({title:"Your super secret password",description:"Less than 12 characters, please.",minlength:6,maxlength:12})}function td(e){return e}function tc(e){return function(t={}){let{value:i,title:a,description:n,disabled:r,autocomplete:o="off",maxlength:l,minlength:s,pattern:u,placeholder:d,size:c,submit:f}="string"==typeof t?{value:t}:t,p=e({type:"password",title:a,description:n,submit:f,attributes:{value:i,autocomplete:o,maxlength:l,minlength:s,pattern:u,placeholder:d,size:c,disabled:r}});return p.output.remove(),p.input.style.fontSize="1em",p}}function tf(e){return e`---
## Wishlist (Send suggestions, please!)

* 3D coordinate input (for say, positioning a camera in a WebGL sketch)
* Geocoder search with location autocomplete that returns longitude and latitude.
* Degrees or radians input, for circular things, or angles.
* A dimensions input, or a box-model input, with margin (and optionally, padding).
* A map-projection-picker input, rendering little thumbnails of all the d3-geo-projections.
* Drag and drop file upload input.
* Alternative coordinate inputs, e.g. Right Ascension, Declination.
* Other useful formatting options.

---`}function tp(e,t){return function(i){let{form:a,type:n="text",attributes:r={},action:o,getValue:l,title:s,description:u,format:d,display:c,submit:f,options:p}=i,m=e`<div></div>`;if(a||(a=e`<form>
	<input name=input type=${n} />
  </form>`),Object.keys(r).forEach(e=>{let t=r[e];null!=t&&a.input.setAttribute(e,t)}),f&&a.append(e`<input name=submit type=submit style="margin: 0 0.75em" value="${"string"==typeof f?f:"Submit"}" />`),a.append(e`<output name=output style="font: 14px Menlo, Consolas, monospace; margin-left: 0.5em;"></output>`),s&&a.prepend(e`<div style="font: 700 0.9rem sans-serif; margin-bottom: 3px;">${s}</div>`),u&&a.append(e`<div style="font-size: 0.85rem; font-style: italic; margin-top: 3px;">${u}</div>`),d&&(d="function"==typeof d?d:t.format(d)),o)o(a);else{let v=f?"onsubmit":"button"==n?"onclick":"checkbox"==n||"radio"==n?"onchange":"oninput";a[v]=e=>{e&&e.preventDefault();let t=l?l(a.input):a.input.value;if(a.output){let i=c?c(t):d?d(t):t;if(i instanceof window.Element){for(;a.output.hasChildNodes();)a.output.removeChild(a.output.lastChild);a.output.append(i)}else a.output.value=i}a.value=t,"oninput"!==v&&a.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},"oninput"!==v&&(m.oninput=e=>e&&e.stopPropagation()&&e.preventDefault()),"onsubmit"!==v&&(a.onsubmit=e=>e&&e.preventDefault()),a[v]()}for(;a.childNodes.length;)m.appendChild(a.childNodes[0]);return a.append(m),a}}function tm(e){return e("d3-geo@1")}function tv(e){return e("d3-format@1")}function tb(e){return e("topojson-client@3")}async function th(){return(await fetch("https://cdn.jsdelivr.net/npm/world-atlas@1/world/110m.json")).json()}function tg(e,t){return e.feature(t,t.objects.land)}function tw(e,t){return e.feature(t,t.objects.countries)}async function ty(){return(await fetch("https://cdn.jsdelivr.net/npm/us-atlas@^2.1/us/states-10m.json")).json()}function tx(e,t){return e.feature(t,t.objects.nation)}function tC(e,t){return e.feature(t,t.objects.states)}function tS(e){return e.geoGraticule10()}function tA(e){let t=e`License: [MIT](https://opensource.org/licenses/MIT)`;return t.value="MIT",t}function tk(e){return e`*Clip art courtesy [ClipArt ETC](https://etc.usf.edu/clipart/), radio buttons and checkboxes courtesy [Amit Sch](https://observablehq.com/@meetamit/multiple-choice-inputs).*`}function tM(e,t){let a=e.module(),n=new Map([["capstan.gif",{url:new i.U(i(5521)),mimeType:"image/gif",toString:function(){return this.url}}]]);return a.builtin("FileAttachment",e.fileAttachments(e=>n.get(e))),a.variable(t()).define(["md","FileAttachment"],A),a.variable(t()).define(["md"],k),a.variable(t("sliderDemo")).define("sliderDemo",["md"],M),a.variable(t("viewof a")).define("viewof a",["slider"],T),a.variable(t("a")).define("a",["Generators","viewof a"],(e,t)=>e.input(t)),a.variable(t("viewof a1")).define("viewof a1",["slider"],D),a.variable(t("a1")).define("a1",["Generators","viewof a1"],(e,t)=>e.input(t)),a.variable(t("viewof a1_1")).define("viewof a1_1",["slider"],I),a.variable(t("a1_1")).define("a1_1",["Generators","viewof a1_1"],(e,t)=>e.input(t)),a.variable(t("viewof a2")).define("viewof a2",["slider"],E),a.variable(t("a2")).define("a2",["Generators","viewof a2"],(e,t)=>e.input(t)),a.variable(t("viewof a3")).define("viewof a3",["slider"],L),a.variable(t("a3")).define("a3",["Generators","viewof a3"],(e,t)=>e.input(t)),a.variable(t("viewof a4")).define("viewof a4",["slider"],O),a.variable(t("a4")).define("a4",["Generators","viewof a4"],(e,t)=>e.input(t)),a.variable(t("viewof a5")).define("viewof a5",["slider"],P),a.variable(t("a5")).define("a5",["Generators","viewof a5"],(e,t)=>e.input(t)),a.variable(t()).define(["md"],R),a.variable(t("slider")).define("slider",["input"],N),a.variable(t("buttonDemo")).define("buttonDemo",["md"],$),a.variable(t("viewof b")).define("viewof b",["button"],F),a.variable(t("b")).define("b",["Generators","viewof b"],(e,t)=>e.input(t)),a.variable(t()).define(["b"],j),a.variable(t("viewof b1")).define("viewof b1",["button"],B),a.variable(t("b1")).define("b1",["Generators","viewof b1"],(e,t)=>e.input(t)),a.variable(t()).define(["b1"],G),a.variable(t("button")).define("button",["input"],z),a.variable(t("selectDemo")).define("selectDemo",["md"],V),a.variable(t("viewof dd")).define("viewof dd",["select"],H),a.variable(t("dd")).define("dd",["Generators","viewof dd"],(e,t)=>e.input(t)),a.variable(t()).define(["dd"],U),a.variable(t("viewof dd1")).define("viewof dd1",["select"],q),a.variable(t("dd1")).define("dd1",["Generators","viewof dd1"],(e,t)=>e.input(t)),a.variable(t()).define(["dd1"],_),a.variable(t("viewof dd2")).define("viewof dd2",["select"],W),a.variable(t("dd2")).define("dd2",["Generators","viewof dd2"],(e,t)=>e.input(t)),a.variable(t()).define(["dd2"],Z),a.variable(t("viewof dd3")).define("viewof dd3",["select"],X),a.variable(t("dd3")).define("dd3",["Generators","viewof dd3"],(e,t)=>e.input(t)),a.variable(t()).define(["dd3"],Y),a.variable(t("select")).define("select",["input","html"],K),a.variable(t("autoSelectDemo")).define("autoSelectDemo",["md"],J),a.variable(t("viewof as")).define("viewof as",["autoSelect","usa"],Q),a.variable(t("as")).define("as",["Generators","viewof as"],(e,t)=>e.input(t)),a.variable(t()).define(["as"],ee),a.variable(t("autoSelect")).define("autoSelect",["input","html"],et),a.variable(t("colorDemo")).define("colorDemo",["md"],ei),a.variable(t("viewof c")).define("viewof c",["color"],ea),a.variable(t("c")).define("c",["Generators","viewof c"],(e,t)=>e.input(t)),a.variable(t("viewof c1")).define("viewof c1",["color"],en),a.variable(t("c1")).define("c1",["Generators","viewof c1"],(e,t)=>e.input(t)),a.variable(t("color")).define("color",["input"],er),a.variable(t("coordinatesDemo")).define("coordinatesDemo",["md"],eo),a.variable(t("viewof coords1")).define("viewof coords1",["coordinates"],el),a.variable(t("coords1")).define("coords1",["Generators","viewof coords1"],(e,t)=>e.input(t)),a.variable(t()).define(["coords1"],es),a.variable(t("viewof coords2")).define("viewof coords2",["coordinates"],eu),a.variable(t("coords2")).define("coords2",["Generators","viewof coords2"],(e,t)=>e.input(t)),a.variable(t()).define(["coords2"],ed),a.variable(t("coordinates")).define("coordinates",["html","input"],ec),a.variable(t("worldMapCoordinatesDemo")).define("worldMapCoordinatesDemo",["md"],ef),a.variable(t("viewof worldMap1")).define("viewof worldMap1",["worldMapCoordinates"],ep),a.variable(t("worldMap1")).define("worldMap1",["Generators","viewof worldMap1"],(e,t)=>e.input(t)),a.variable(t()).define(["worldMap1"],em),a.variable(t("worldMapCoordinates")).define("worldMapCoordinates",["html","DOM","d3geo","graticule","land","countries","input"],ev),a.variable(t("usaMapCoordinatesDemo")).define("usaMapCoordinatesDemo",["md"],eb),a.variable(t("viewof usaMap1")).define("viewof usaMap1",["usaMapCoordinates"],eh),a.variable(t("usaMap1")).define("usaMap1",["Generators","viewof usaMap1"],(e,t)=>e.input(t)),a.variable(t()).define(["usaMap1"],eg),a.variable(t("viewof usaMap2")).define("viewof usaMap2",["usaMapCoordinates"],ew),a.variable(t("usaMap2")).define("usaMap2",["Generators","viewof usaMap2"],(e,t)=>e.input(t)),a.variable(t()).define(["usaMap2"],ey),a.variable(t("usaMapCoordinates")).define("usaMapCoordinates",["html","DOM","d3geo","nation","states","input"],ex),a.variable(t("dateDemo")).define("dateDemo",["md"],eC),a.variable(t("viewof d")).define("viewof d",["date"],eS),a.variable(t("d")).define("d",["Generators","viewof d"],(e,t)=>e.input(t)),a.variable(t("viewof d1")).define("viewof d1",["date"],eA),a.variable(t("d1")).define("d1",["Generators","viewof d1"],(e,t)=>e.input(t)),a.variable(t("date")).define("date",["input"],ek),a.variable(t("timeDemo")).define("timeDemo",["md"],eM),a.variable(t("viewof t")).define("viewof t",["time"],eT),a.variable(t("t")).define("t",["Generators","viewof t"],(e,t)=>e.input(t)),a.variable(t()).define(["t"],eD),a.variable(t("viewof t1")).define("viewof t1",["time"],eI),a.variable(t("t1")).define("t1",["Generators","viewof t1"],(e,t)=>e.input(t)),a.variable(t()).define(["t1"],eE),a.variable(t("time")).define("time",["input"],eL),a.variable(t("fileDemo")).define("fileDemo",["md"],eO),a.variable(t("viewof e")).define("viewof e",["file"],eP),a.variable(t("e")).define("e",["Generators","viewof e"],(e,t)=>e.input(t)),a.variable(t("viewof e1")).define("viewof e1",["file"],eR),a.variable(t("e1")).define("e1",["Generators","viewof e1"],(e,t)=>e.input(t)),a.variable(t()).define(["html","e1","Files"],eN),a.variable(t("file")).define("file",["input"],e$),a.variable(t("textDemo")).define("textDemo",["md"],eF),a.variable(t("viewof f")).define("viewof f",["text"],ej),a.variable(t("f")).define("f",["Generators","viewof f"],(e,t)=>e.input(t)),a.variable(t("viewof f1")).define("viewof f1",["text"],eB),a.variable(t("f1")).define("f1",["Generators","viewof f1"],(e,t)=>e.input(t)),a.variable(t()).define(["f1"],eG),a.variable(t("viewof f2")).define("viewof f2",["text"],ez),a.variable(t("f2")).define("f2",["Generators","viewof f2"],(e,t)=>e.input(t)),a.variable(t()).define(["f2"],eV),a.variable(t("text")).define("text",["input"],eH),a.variable(t("textareaDemo")).define("textareaDemo",["md"],eU),a.variable(t("viewof g")).define("viewof g",["textarea"],eq),a.variable(t("g")).define("g",["Generators","viewof g"],(e,t)=>e.input(t)),a.variable(t()).define(["g"],e_),a.variable(t("viewof g1")).define("viewof g1",["textarea"],eW),a.variable(t("g1")).define("g1",["Generators","viewof g1"],(e,t)=>e.input(t)),a.variable(t()).define(["g1"],eZ),a.variable(t("textarea")).define("textarea",["input","html"],eX),a.variable(t("radioDemo")).define("radioDemo",["md"],eY),a.variable(t("viewof r")).define("viewof r",["radio"],eK),a.variable(t("r")).define("r",["Generators","viewof r"],(e,t)=>e.input(t)),a.variable(t()).define(["r"],eJ),a.variable(t("viewof r1")).define("viewof r1",["radio"],eQ),a.variable(t("r1")).define("r1",["Generators","viewof r1"],(e,t)=>e.input(t)),a.variable(t()).define(["r1"],e1),a.variable(t("radio")).define("radio",["input","html"],e0),a.variable(t("checkboxDemo")).define("checkboxDemo",["md"],e5),a.variable(t("viewof ch")).define("viewof ch",["checkbox"],e2),a.variable(t("ch")).define("ch",["Generators","viewof ch"],(e,t)=>e.input(t)),a.variable(t()).define(["ch"],e4),a.variable(t("viewof ch1")).define("viewof ch1",["checkbox"],e3),a.variable(t("ch1")).define("ch1",["Generators","viewof ch1"],(e,t)=>e.input(t)),a.variable(t()).define(["ch1"],e6),a.variable(t("viewof ch3")).define("viewof ch3",["checkbox"],e7),a.variable(t("ch3")).define("ch3",["Generators","viewof ch3"],(e,t)=>e.input(t)),a.variable(t()).define(["ch3"],e8),a.variable(t("checkbox")).define("checkbox",["input","html"],e9),a.variable(t("numberDemo")).define("numberDemo",["md"],te),a.variable(t("viewof h")).define("viewof h",["number"],tt),a.variable(t("h")).define("h",["Generators","viewof h"],(e,t)=>e.input(t)),a.variable(t()).define(["h"],ti),a.variable(t("viewof h1")).define("viewof h1",["number"],ta),a.variable(t("h1")).define("h1",["Generators","viewof h1"],(e,t)=>e.input(t)),a.variable(t()).define(["h1"],tn),a.variable(t("number")).define("number",["input"],tr),a.variable(t("passwordDemo")).define("passwordDemo",["md"],to),a.variable(t("viewof i")).define("viewof i",["password"],tl),a.variable(t("i")).define("i",["Generators","viewof i"],(e,t)=>e.input(t)),a.variable(t()).define(["i"],ts),a.variable(t("viewof i1")).define("viewof i1",["password"],tu),a.variable(t("i1")).define("i1",["Generators","viewof i1"],(e,t)=>e.input(t)),a.variable(t()).define(["i1"],td),a.variable(t("password")).define("password",["input"],tc),a.variable(t()).define(["md"],tf),a.variable(t("input")).define("input",["html","d3format"],tp),a.variable(t("d3geo")).define("d3geo",["require"],tm),a.variable(t("d3format")).define("d3format",["require"],tv),a.variable(t("topojson")).define("topojson",["require"],tb),a.variable(t("world")).define("world",th),a.variable(t("land")).define("land",["topojson","world"],tg),a.variable(t("countries")).define("countries",["topojson","world"],tw),a.variable(t("usa")).define("usa",ty),a.variable(t("nation")).define("nation",["topojson","usa"],tx),a.variable(t("states")).define("states",["topojson","usa"],tC),a.variable(t("graticule")).define("graticule",["d3geo"],tS),a.variable(t("viewof license")).define("viewof license",["md"],tA),a.variable(t("license")).define("license",["Generators","viewof license"],(e,t)=>e.input(t)),a.variable(t()).define(["md"],tk),a}function tT(e){return e`# Circle Legend

To use in your notebook:

~~~js
import { legendCircle } from "@harrystevens/circle-legend";
~~~`}function tD(e,t,i){return e().scale(t.scaleSqrt().domain([0,500]).range([0,40])).tickValues([15,150,500]).tickFormat((e,t,i)=>t===i.length-1?e+" bushels of hay":e).tickSize(i)}function tI(e){return e({title:"Tick size",value:5,min:0,max:100,step:1,description:"What happens when you adjust this?"})}function tE(e,t,i,a){let n=e.select(t.svg()).attr("height",90).attr("width",180+i);return n.append("g").call(a),n.node()}function tL(){return function(e){let t,i,a=e=>e,n=5;function r(e){let r=e.select("g");r._groups[0][0]||(r=e.append("g")),r.attr("transform","translate(11,)");let o=i||t.ticks(),l=o[o.length-1];r.selectAll("circle").data(o.slice().reverse()).enter().append("circle").attr("fill","none").attr("stroke","currentColor").attr("cx",t(l)).attr("cy",t).attr("r",t),r.selectAll("line").data(o).enter().append("line").attr("stroke","currentColor").attr("stroke-dasharray","4, 2").attr("x1",t(l)).attr("x2",n+2*t(l)).attr("y1",e=>2*t(e)).attr("y2",e=>2*t(e)),r.selectAll("text").data(o).enter().append("text").attr("font-family","'Helvetica Neue', sans-serif").attr("font-size",11).attr("dx",3).attr("dy",4).attr("x",n+2*t(l)).attr("y",e=>2*t(e)).text(a)}return r.tickSize=function(e){return arguments.length?(n=+e,r):n},r.scale=function(e){return arguments.length?(t=e,r):t},r.tickFormat=function(e){return arguments.length?(a=e,r):a},r.tickValues=function(e){return arguments.length?(i=e,r):i},r}}function tO(e){return e`## Todo
* Ensure circles are drawn biggest to smallest so they can be styled
* Make it work with a threshold scale
`}function tP(e){return e("d3-scale@3","d3-selection@1")}function tR(e,t){let i=e.module();i.variable(t()).define(["md"],tT),i.variable(t("legend")).define("legend",["legendCircle","d3","tickSize"],tD),i.variable(t("viewof tickSize")).define("viewof tickSize",["slider"],tI),i.variable(t("tickSize")).define("tickSize",["Generators","viewof tickSize"],(e,t)=>e.input(t)),i.variable(t()).define(["d3","DOM","tickSize","legend"],tE),i.variable(t("legendCircle")).define("legendCircle",tL),i.variable(t()).define(["md"],tO),i.variable(t("d3")).define("d3",["require"],tP);let a=e.module(tM);return i.import("slider",a),i}function tN(e){return e`# TOC

This notebook can generate a table of contents automatically for your notebook.

\`\`\`js
import {toc} from "@harrystevens/toc"
\`\`\`

Here’s an example:`}function t$(e){return e({selector:"h2,h3,h4,h5,h6",heading:"Jump to:"})}function tF(e){return e`## Implementation`}function tj(e,t,i,a){return function(n){let r=n&&n.selector?n.selector:"h1,h2,h3,h4,h5,h6",o=n&&n.heading?n.heading:"Table of Contents";return e.observe(e=>{let n=[];function l(){let a=Math.min(...r.split(",").map(e=>+e.replace("h",""))),l=Array.from(document.querySelectorAll(r));(l.length!==n.length||l.some((e,t)=>n[t]!==e))&&e(t`<b>${o}</b><ul>${Array.from(n=l,e=>{let n=parseInt(e.tagName.slice(1));return Object.assign(t`${n>a?"<ul>".repeat(n-a)+"<li>":"<li>"}<a href=#${e.id}>${i.text(e.textContent)}`,{onclick:t=>(t.preventDefault(),e.scrollIntoView())})})}`)}let s=new a(l);return s.observe(document.body,{childList:!0,subtree:!0}),l(),()=>s.disconnect()})}}function tB(e){return e`## Hooray

It worked!`}function tG(e){return e`### This is a sub-section`}function tz(e){return e`A little text`}function tV(e){return e`#### A sub-sub-section?`}function tH(e){return e`##### A sub-sub-sub-section?`}function tU(e){return e`###### A sub-sub-sub-sub-section! (h6!)`}function tq(e){return e`### Another sub-section`}function t_(e,t){let i=e.module();return i.variable(t()).define(["md"],tN),i.variable(t()).define(["toc"],t$),i.variable(t()).define(["md"],tF),i.variable(t("toc")).define("toc",["Generators","html","DOM","MutationObserver"],tj),i.variable(t()).define(["md"],tB),i.variable(t()).define(["md"],tG),i.variable(t()).define(["md"],tz),i.variable(t()).define(["md"],tV),i.variable(t()).define(["md"],tH),i.variable(t()).define(["md"],tU),i.variable(t()).define(["md"],tq),i}function tW(e){return e`# Keys

A reusable notebook for displaying platform-appropriate keyboard shortcuts.`}function tZ(e){return e("Alt-Enter")}function tX(e){return e("Alt-Enter")}function tY(e){return e("Alt-Enter")}function tK(e){return e("Alt-Enter")}function tJ(){return/Mac|iPhone/.test(navigator.platform)}function tQ(){return navigator.platform}function t1(e){return e?{Alt:"⌥",Tab:"⇥",Up:"↑",Down:"↓",Left:"←",Right:"→",Mod:"⌘",Cmd:"⌘",Ctrl:"⌃",Shift:"⇧",Enter:"↩︎",Backspace:"⌫",Escape:"⎋"}:{Mod:"Ctrl"}}function t0(e){return e?{Alt:"Option",Backspace:"Delete",Mod:"Command",Cmd:"Command",Ctrl:"Control",Enter:"Return",Escape:"Esc","/":"Slash","?":"Question mark"}:{Mod:"Ctrl"}}function t5(e){return e?{Alt:"⌥opt",Tab:"⇥tab",Up:"↑",Down:"↓",Left:"←",Right:"→",Mod:"⌘cmd",Cmd:"⌘cmd",Ctrl:"⌃ctrl",Shift:"⇧shift",Enter:"↩︎return",Backspace:"⌫delete",Escape:"⎋esc"}:{Up:"↑",Down:"↓",Left:"←",Right:"→",Mod:"Ctrl"}}function t2(){return{Ctrl:-4,Alt:-3,Shift:-2,Mod:-1,Cmd:-1}}function t4(e){return function(t,i){let a=t.split("-");return a.slice().sort((t,i)=>(e[t]||a.indexOf(t))-(e[i]||a.indexOf(i))).map(e=>i&&i[e]||e)}}function t3(e,t){return function(i){return e(i,t).join("-")}}function t6(e,t){return function(i){return e(i,t).join("")}}function t7(e,t,i){return function(a){return e(a)+(t?` ${i(a)}`:"")}}function t8(e,t){return function(i){return e.html`<span style="font-family: var(--sans-serif); font-size: 90%;">${t(i)}</span>`}}function t9(e,t,i){return function(a){return e.html`${t(a,i).map(t=>e.html`<span style="font: 500 12px var(--sans-serif); margin: 0 4px; padding: 0 4px; border-radius: 0.25rem; box-shadow: 0 0 0 1px #dedede, 1px 1px 0 1px #e8e8e8;">${t.toLowerCase()}`)}</span>`}}function ie(e,t){let i=e.module();return i.variable(t()).define(["md"],tW),i.variable(t()).define(["keyWords"],tZ),i.variable(t()).define(["keySymbols"],tX),i.variable(t()).define(["keys"],tY),i.variable(t()).define(["buttons"],tK),i.variable(t("mac")).define("mac",tJ),i.variable(t()).define(tQ),i.variable(t("symbols")).define("symbols",["mac"],t1),i.variable(t("words")).define("words",["mac"],t0),i.variable(t("shortwords")).define("shortwords",["mac"],t5),i.variable(t("order")).define("order",t2),i.variable(t("remap")).define("remap",["order"],t4),i.variable(t("keyWords")).define("keyWords",["remap","words"],t3),i.variable(t("keySymbols")).define("keySymbols",["remap","symbols"],t6),i.variable(t("keys")).define("keys",["keyWords","symbols","keySymbols"],t7),i.variable(t("keyStyled")).define("keyStyled",["htl","keys"],t8),i.variable(t("buttons")).define("buttons",["htl","remap","shortwords"],t9),i}function it(e){return e`# Text search input with autocomplete

A reusable autocomplete search that can be used in a real-time fashion (e.g., querying an API). It exploits [\`<datalist>\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist), the HTML Data List element.`}function ii(e){return e`## How to use it in your notebook

\`\`\`javascript
import { SearchForm } from "@floatingpurr/input-autocomplete"
\`\`\``}function ia(e){return e`## Examples`}function ir(e){return e`This search form can be used with a flat array of suggestions. Let's give it a spin:`}function io(e,t){return e({placeholder:"Type-in to search...",description:"Searching en.wikipedia.org entities",async suggestion(e){let i=await t.json(`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${e}&namespace=0&limit=10&origin=*`);return i[1]}})}function il(e){return e}function is(e){return e`But it can be also useful to explore and return data from an array of objects coming from an API, e.g.:`}async function iu(e){let t=await e.json("https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=Skywalker&namespace=0&limit=10&origin=*");return t[1].map((e,i)=>({entry:e,url:t[3][i]}))}function id(e){return e`Let's see it in action:`}function ic(e,t){return e({placeholder:"Type-in to search...",description:"Searching en.wikipedia.org entities with their URLs",format:e=>e.entry,async suggestion(e){let i=await t.json(`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${e}&namespace=0&limit=10&origin=*`);return i[1].map((e,t)=>({entry:e,url:i[3][t]}))}})}function ip(e){return e}function im(e){return e`## Configuration

* \`suggestion\`: a function providing data for live suggestions (i.e., \`<datalist>\`). This function should accept an input text and returns an array of suggestions (default: \`() => []\`)
  
* \`placeholder\`: the default text you want to use as a placeholder (default: \`""\`)
  
* \`description\`: the label describing your input (default: \`""\`)

* \`format\`: the accessor function (default: \`(d) => d\`)

* \`namespace\`: the identifier of the SearchForm, use it if you plan to use more SearchForm(s) in the same notebook (default: \`""\`)`}function iv(e){return e`## Implementation

The machinery works as follows:
* read the value the user has just typed-in
* use such a value to retrieve suggestions (i.e., an array of matching values)
* (*suggestions are memoized*)
* inject suggestions in the \`<datalist>\` elements
* finally, the user can return a value from the suggestion list

Heavily inspired by the example of [Chris Henrick](https://observablehq.com/@clhenrick/autocomplete-search) and by suggestions of [Fabian Iwand](https://talk.observablehq.com/t/dynamic-datalist/6404/2).`}function ib(e,t,i){return function({uid:a=e.uid("autosuggestion").id,placeholder:n="",description:r="",format:o=e=>e,suggestion:l=()=>[]}={}){let s=t.html`<input 
        type="text"
        placeholder="${n}" 
        list="${a}"
        autocomplete="off"
      >`,u=t.html`<div style="font-size: 0.85rem; font-style: italic; margin-top: 3px;">${r}</div>`,d=t.html`<datalist id="${a}">`,c=t.html`<div>${s}${u}${d}`,f=[];c.value="",c.onsubmit=e=>e.preventDefault(),c.onchange=e=>{let t=e.target.value;c.value=f.find(e=>o(e)==t)||"",s.blur(),c.dispatchEvent(new CustomEvent("input"))};let p=new Map,m=async e=>p.get(e)||(e?p.set(e,await l(e)):p.set(e,[]),p.get(e));return s.oninput=async e=>{f=await m(e.target.value),i.select(`#${a}`).selectAll("option").data(f).join("option").attr("value",o)},c}}function ih(e,t){let i=e.module();return i.variable(t()).define(["md"],it),i.variable(t()).define(["md"],ii),i.variable(t()).define(["md"],ia),i.variable(t()).define(["md"],ir),i.variable(t("viewof wiki")).define("viewof wiki",["SearchForm","d3"],io),i.variable(t("wiki")).define("wiki",["Generators","viewof wiki"],(e,t)=>e.input(t)),i.variable(t()).define(["wiki"],il),i.variable(t()).define(["md"],is),i.variable(t()).define(["d3"],iu),i.variable(t()).define(["md"],id),i.variable(t("viewof wikiObject")).define("viewof wikiObject",["SearchForm","d3"],ic),i.variable(t("wikiObject")).define("wikiObject",["Generators","viewof wikiObject"],(e,t)=>e.input(t)),i.variable(t()).define(["wikiObject"],ip),i.variable(t()).define(["md"],im),i.variable(t()).define(["md"],iv),i.variable(t("SearchForm")).define("SearchForm",["DOM","htl","d3"],ib),i}function ig(e){return e`# Menu Localidade`}function iw(e){return e({value:["RIO DE JANEIRO","S\xc3O PAULO"],cores:["#2F87F5","#D8C56C","#DC5988","#6CC28D"]})}function iy(e){return e.value=["RIO DE JANEIRO","BELO HORIZONTE"]}function ix(e){return e}function iC(e,t){return function(i){let a=[...i.cores],n=new Map;function r(){let t,i,r;return t=document.createElement("input"),i=document.createElement("datalist"),t.setAttribute("list","menu-municipios-options"),t.setAttribute("placeholder","Adicione um local"),t.style.borderRadius="6px",t.style.backgroundColor="white",t.style.border="dashed 2px #c4c4c4",t.style.fontFamily="Roboto Condensed",t.style.padding="3px",t.style.minWidth="150px",t.style.maxWidth="240px",t.style.height="20px",i.setAttribute("id","menu-municipios-options"),e.forEach(e=>{(r=document.createElement("option")).setAttribute("value",e.nome),i.appendChild(r)}),t.appendChild(i),t.addEventListener("input",e=>{e.stopPropagation()}),t.addEventListener("change",i=>{let r=t.value;t.value="";let o=e.find(e=>e.nome===r);if(o&&!n.has(o.cod)&&a.length>0){let s=a.pop(),u={nome:r,cor:s,cod:o.cod};o.uf&&(u.uf=o.uf),n.set(u.cod,u),l()}}),t}function o(e){let t=document.createElement("button"),i=document.createElement("span");if(t.style.backgroundColor=e.cor,t.style.display="inline-flex",t.style.alignItems="flex-center",t.style.borderRadius="6px",t.style.border="none",t.style.fontFamily="Roboto Condensed",t.style.fontWeight="700",t.style.fontSize="14px",t.style.marginRight="6px",t.style.padding="3px 5px",t.style.height="22px",i.style.lineHeight="16px",i.style.color="black",e.nome.indexOf("(")>0||e.cod<100?i.textContent=e.nome:i.textContent=e.nome+" ("+e.uf+")",t.appendChild(i),n.size>1){let r=document.createElement("span");r.style.paddingLeft="5px",r.style.fontWeight="400",r.textContent="✖",r.style.lineHeight="16px",r.style.color="black",t.appendChild(r)}return t.addEventListener("click",t=>{n.size>1&&(n.delete(e.cod),a.push(e.cor),l())}),t}function l(){for(let e of(u.innerHTML="",n.values()))u.appendChild(o(e));4==n.size?d&&(s.removeChild(d),d=null):null===d&&(d=r(),s.appendChild(d)),s.dispatchEvent(new t("input"))}let s=document.createElement("div"),u=document.createElement("div"),d=r();return u.style.display="inline",s.appendChild(u),s.appendChild(d),Object.defineProperty(s,"value",{get:()=>[...n.values()],set(t){for(let r of(n.clear(),a=[...i.cores],t)){if("string"==typeof r&&(r={nome:r}),void 0===r.cor&&(r.cor=a.pop()),void 0===r.cod){let o=e.find(e=>0==e.nome.localeCompare(r.nome));o&&(r.cod=o.cod,o.uf&&(r.uf=o.uf))}r.cod&&!n.has(r.cod)&&n.set(r.cod,r)}l()}}),s.value=i.value||[],s}}function iS(e){return e("municipios-ord@1.csv").csv({separator:";"})}function iA(e){return e.html`<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
</style>`}function ik(e,t){let a=e.module(),n=new Map([["municipios-ord@1.csv",{url:new i.U(i(78)),mimeType:"text/csv",toString:function(){return this.url}}]]);return a.builtin("FileAttachment",e.fileAttachments(e=>n.get(e))),a.variable(t()).define(["md"],ig),a.variable(t("viewof sels")).define("viewof sels",["menuLocalidade"],iw),a.variable(t("sels")).define("sels",["Generators","viewof sels"],(e,t)=>e.input(t)),a.variable(t()).define(["viewof sels"],iy),a.variable(t()).define(["sels"],ix),a.variable(t("menuLocalidade")).define("menuLocalidade",["municipios","Event"],iC),a.variable(t("municipios")).define("municipios",["FileAttachment"],iS),a.variable(t()).define(["htl"],iA),a}function iM(e){return e`# Sliders`}function iT(e){return e`## Mapa`}function iD(e){return e`### Ano`}function iI(e){return e({range:[2012,2019],value:2015,ticks:1,width:600})}function iE(e){return e`### Intervalo Número de Nascimentos`}function iL(){return function(e){return["0","10","100","1K","10K","50K","100K","1M"][e]}}function iO(e,t,i){return e({range:[0,10,1e3,1e4,1e5,5e5,1e6,1e7],ticksLabelFormatter:t},i)}function iP(e,t,i){return{ano:e,anoMesTrilha:t,nascimentosTotais:i}}function iR(e,t,i){let a=[];for(let n=2012;n<=2018;n++)for(let r=1;r<=12;r++)a.push(100*n+r);a.push(201901);let o=e=>~~(a[e]/100),l=t=>e[a[t]%100-1];return t({range:a,ticksLabelFormatter:o,handleLabelFormatter:l,ticks:12,width:600},i)}function iN(){return["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"]}function i$(e){return e`## Componentes`}function iF(){return function(e,t){let i=e.range;return e.range=[0,i.length-1],e.ticksLabelFormatter||(e.ticksLabelFormatter=e=>i[e]),t(e)}}function ij(e,t){return function(i){void 0!==i.value&&(i.value=[i.range[0],i.value]);let a=e(i);t.select(a).selectAll(".handle--custom").each(function(e){"w"===e.type&&t.select(this).remove()}),t.select(a).selectAll(".handle--w").remove(),t.select(a).select(".selection").attr("pointer-events","none").attr("opacity",0);let n=a.vl;return a.vl=function(e){return void 0===e?n.call(a)[1]:n.call(a,[0,e])},a}}function iB(e,t){return function(i){let{range:a=[0,10],width:n=400,height:r=60,marginTop:o=20,marginBottom:l=20,marginRight:s=20,marginLeft:u=20,ticks:d=1,value:c=null,dispatchOnDrag:f=!1,ticksLabelFormatter:p=e=>e,handleLabelFormatter:m=null}=i;null==c&&(c=[...a]);let v=n-u-s,b=r-o-l,h=[];for(let g=a[0];g<=a[1];g+=d)h.push(g);let w=e.scaleLinear().domain(a).range([0,v]),y=e.select(t.svg(n,r)),x=y.node(),C=y.append("g").attr("transform",`translate(${u},${o})`);y.on("click touch",t=>{let i=t.offsetX-u;if(i>=0&&i<=v){let a=e.brushSelection(k.node())||[0,0],n=a.map(e=>Math.round(w.invert(e))),r=Math.round(w.invert(i));a[r<n[0]?0:1]=w(r),k.call(A.move,a)}});let S=[0,0];var A=e.brushX().extent([[0,0],[v,b]]).on("brush",function(e){let t=e.selection;S=t;let i=t[1]-t[0];if(T.attr("transform",(e,i)=>`translate(${t[i]},0)`),m){let a=t.map(w.invert).map(Math.round);T.select("text").attr("text-anchor",e=>i>30?"middle":"w"==e.type?"end":"start").text(e=>m("w"==e.type?a[0]:a[1]))}f&&x.dispatchEvent(new CustomEvent("input"))}).on("end",function(t){if(t.sourceEvent){let i=(t.selection||S).map(w.invert).map(Math.round);e.select(this).transition().call(t.target.move,i.map(w)),f||setTimeout(e=>{x.dispatchEvent(new CustomEvent("input"))})}});let k=C.append("g").attr("class","brush").call(A);k.select(".selection").attr("fill","#151472CC").style("cursor","grab"),k.select(".overlay").attr("fill","#E5E5E5").attr("pointer-events","none");let M=k.insert("g",".selection").attr("class","ticks").selectAll(".tick").data(h).enter().append("g").attr("class","tick").attr("transform",e=>`translate(${w(e)},0)`);M.append("line").attr("x1",0).attr("x2",0).attr("y1",0).attr("y2",b).attr("stroke","#999"),p&&M.append("text").attr("x",0).attr("y",b+4).attr("dominant-baseline","hanging").attr("text-anchor","middle").attr("font-size","12px").attr("font-weight","400").attr("fill","#151472").text(p);let T=k.selectAll(".handle--custom").data([{type:"w"},{type:"e"}]).enter().append("g").attr("class","handle--custom");return T.append("rect").attr("stroke","#000").attr("fill","#151472").attr("cursor","ew-resize").attr("width",8).attr("height",b+4).attr("y",-2).attr("x",-4).attr("rx",4),m&&T.append("text").attr("fill","#F00").attr("y",-4).attr("font-size","12px").attr("font-weight","400").attr("fill","#151472"),x.vl=function(t){if(void 0===t)return(e.brushSelection(k.node())||[0,0]).map(e=>Math.round(w.invert(e)));if(t[0]>t[1]){let i=t[0];t[0]=t[1],t[1]=i}return t[1]<a[0]?(t[0]=a[0],t[1]=a[0]):t[0]>a[1]?(t[0]=a[1],t[1]=a[1]):(t[0]<a[0]&&(t[0]=a[0]),t[1]>a[1]&&(t[1]=a[1])),k.call(A.move,t.map(w)),x.dispatchEvent(new CustomEvent("input")),x},Object.defineProperty(x,"value",{get(){return this.vl()},set(e){this.vl(e)}}),x.value=c,x}}function iG(e){return e`
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
svg {
	font-family: "Roboto Condensed";
}

* { user-select: none;  }


</style>
`}function iz(e,t){let i=e.module();return i.variable(t()).define(["md"],iM),i.variable(t()).define(["md"],iT),i.variable(t()).define(["md"],iD),i.variable(t("viewof ano")).define("viewof ano",["sliderbase"],iI),i.variable(t("ano")).define("ano",["Generators","viewof ano"],(e,t)=>e.input(t)),i.variable(t()).define(["md"],iE),i.variable(t("fmt")).define("fmt",iL),i.variable(t("viewof nascimentosTotais")).define("viewof nascimentosTotais",["sliderArray","fmt","sliderRangeBase"],iO),i.variable(t("nascimentosTotais")).define("nascimentosTotais",["Generators","viewof nascimentosTotais"],(e,t)=>e.input(t)),i.variable(t("filtro")).define("filtro",["ano","anoMesTrilha","nascimentosTotais"],iP),i.variable(t("viewof anoMesTrilha")).define("viewof anoMesTrilha",["meses","sliderArray","sliderRangeBase"],iR),i.variable(t("anoMesTrilha")).define("anoMesTrilha",["Generators","viewof anoMesTrilha"],(e,t)=>e.input(t)),i.variable(t("meses")).define("meses",iN),i.variable(t()).define(["md"],i$),i.variable(t("sliderArray")).define("sliderArray",iF),i.variable(t("sliderbase")).define("sliderbase",["sliderRangeBase","d3"],ij),i.variable(t("sliderRangeBase")).define("sliderRangeBase",["d3","DOM"],iB),i.variable(t("style_slider")).define("style_slider",["html"],iG),i}function iV(e){return e`# Scatter-plot dados mapa`}function iH(e){return e.range([2012,2019],{label:"Ano",step:1,value:2012})}function iU(e){return e.button("Limpar zoom")}function iq(){return!1}function i_(e){return e`<svg width="18" height="18" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="padding:5px;background:white;border-radius:10px;">
<path d="M7.1595 0H3.47242C1.56577 0 0 1.55368 0 3.47373V6.50535C0 6.78325 0.227241 7.01057 0.505035 7.01057C0.782828 7.01057 1.01007 6.78325 1.01007 6.50535L1.01016 3.47373C1.01016 2.12209 2.10868 1.02317 3.45979 1.02317H7.13425C8.51057 1.02317 9.60914 2.12211 9.60914 3.47373V6.1264C9.60914 7.47804 8.51061 8.57696 7.1595 8.57696L2.60116 8.57687L4.12907 7.04838C4.33112 6.84625 4.33112 6.53046 4.12907 6.32833C3.92702 6.1262 3.61134 6.1262 3.40929 6.32833L1.01016 8.72836C0.808105 8.93049 0.808105 9.24628 1.01016 9.44841L3.40929 11.8484C3.51031 11.9495 3.63653 12 3.77542 12C3.90173 12 4.04063 11.9495 4.14156 11.8484C4.34361 11.6463 4.34361 11.3305 4.14156 11.1284L2.60116 9.60017H7.1595C9.07882 9.60017 10.6319 8.04649 10.6319 6.12644V3.47378C10.6319 1.55373 9.06615 4.72183e-05 7.1595 4.72183e-05L7.1595 0Z" fill="#151472"/>
</svg>`}function iW(e,t,i){let a=e.getItem("municipios");return t({value:a=a?JSON.parse(a):["RIO DE JANEIRO"],cores:i})}function iZ(e,t){return e.select(t,{label:"Eixo X",format:e=>e.name,value:t[0]})}function iX(e,t){return e.select(t,{label:"Eixo Y",format:e=>e.name,value:t[1]})}function iY(e,t){return e.select(t,{label:"Cor",format:e=>e.name,value:t[3]})}function iK(e){return e}function iJ(e){return e}function iQ(e,t){return e({range:[1,10,100,1e3,1e4,5e4,1e5],value:[1,6],ticksLabelFormatter:e=>["0","10","100","1K","10K","50K","100K"][e],width:310,height:56},t)}function i1(e){return e}function i0(e){return e}function i5(e,t){return e.scaleThreshold(t.thresholds,t.range)}function i2(e,t,i){return e(t,{width:300,title:i.label})}function i4(e,t,i,a,n,r,o,l,s,u,d,c,f,p,m,v,b,h,g,w){let y=t=>e.filter(e=>e.cod==t.CODMUNRES)[0].cor,x=t.plot({width:i.width,height:i.height,marginBottom:40,x:{line:!0,ticks:10,label:a.label,domain:"IDH 2010"==a.name&&n.xmin<0?a.domain:void 0},y:{line:!0,label:r.label,domain:"IDH 2010"==r.name&&n.ymin<0?r.domain:void 0},marks:[t.dot(o,{x:"x",y:"y",title:e=>l(e.municipio)+`
${a.label}: ${e.x.toFixed(1)}`+`
${r.label}: ${e.y.toFixed(1)}`,fill:e=>s(e.val),stroke:"rgba(0,0,0,0.1)"}),t.dot(u,{x:"x",y:"y",symbol:{draw:d},title:e=>l(e.municipio)+`
${a.label}: ${e.x.toFixed(1)}`+`
${r.label}: ${e.y.toFixed(1)}`,stroke:"currentColor",fill:e=>y(e),r:1.7,strokeWidth:1})]});x.style.fontFamily=i.fontFamily,x.style.fontSize=11,x=b(x=v(x=p(x=c(x,e=>{f.value=e}),e=>m(e.municipio)),e=>{3==e.attr("r")&&e.attr("stroke","black")},e=>{3==e.attr("r")&&e.attr("stroke","rgba(0,0,0,0.1)")}),[o,u]);let C=h.html`<div style="position:relative;display:inline-block;">`;return C.append(x),n.xmin!=Number.NEGATIVE_INFINITY&&(C.append(g),g.style.position="absolute",g.style.right="10px",g.style.top="10px",g.onclick=()=>{f.value=w}),C}function i3(){return{width:400,height:300,fontFamily:"Roboto Condensed"}}function i6(e,t){return i=>{let a=e.value,n=a.map(e=>e.cod).indexOf(i.cod);if(n<0){if(a.length<4){let r=Object.assign({},i);r.cor=t(a),a.push(r)}}else a.length>1&&a.splice(n,1);e.value=a}}function i7(){return null}function i8(e){return e`<br>
# Implementação`}function i9(e){return e`## Cores municípios`}function ae(){return["#2F87F5","#D8C56C","#DC5988","#6CC28D"]}function at(e){return function(t){let i=[...e];for(let a of t){let n=i.indexOf(a.cor);n>=0&&i.splice(n,1)}if(i.length>0)return i[0]}}function ai(e,t,i){return e.html`<button style="background:${t(i)};">Próxima cor`}function aa(e){return e`<br>
## Flags`}function an(e,t){let i=e.canvas(200,200),a={draw:t},n=i.getContext("2d");return n.translate(100,100),n.strokeStyle="black",a.draw(n,30),n.stroke(),i.mySymbol=a,i}function ar(){return(e,t)=>{e.moveTo(0,0),e.bezierCurveTo(0,-(.5*t),-t,-(1.3*t),-t,-(1.8*t)),e.bezierCurveTo(-t,-(2.3*t),-(.5*t),-(2.8*t),0,-(2.8*t)),e.bezierCurveTo(.5*t,-(2.8*t),t,-(2.3*t),t,-(1.8*t)),e.bezierCurveTo(t,-(1.3*t),0,-(.5*t),0,0)}}function ao(e,t){return e.svg`<svg width=100 height=100>
 <path transform="translate(50,50)" 
 d="${t(10)}" stroke=black fill=none /> 
 </svg>`}function al(){return function(e){let t=(e,t,i,a,n,r)=>`C${e},${t} ${i},${a} ${n},${r}`;return"M 0,0"+t(0,-(.5*e),-e,-(1.3*e),-e,-(1.8*e))+t(-e,-(2.3*e),-(.5*e),-(2.8*e),0,-(2.8*e))+t(.5*e,-(2.8*e),e,-(2.3*e),e,-(1.8*e))+t(e,-(1.3*e),0,-(.5*e),0,0)+"Z"}}function as(e){return e`## Dados`}function au(e,t,i,a,n,r,o){return e.map(e=>Object.assign(e,{x:+t.field(e),y:+i.field(e),val:+a.field(e),regiao:["N","NE","SE","S","CO"][Math.floor(e.CODMUNRES/1e5)-1],municipio:n.get(e.CODMUNRES)})).filter(e=>e.municipio&&r(e)&&e.x>=o.xmin&&e.y>=o.ymin&&e.x<=o.xmax&&e.y<=o.ymax)}function ad(e,t){let[i,a]=e.map(e=>[0,10,1e3,1e4,1e5,5e5,1e6][e]);return e=>e.ANO==t&&e.TOTAL>=i&&e.TOTAL<=a}function ac(e,t){let i=e.map(e=>e.cod);return t.filter(e=>i.includes(e.CODMUNRES))}function af(){return[{label:"M\xe9dia anual de polui\xe7\xe3o (\xb5g/m\xb3)",name:"POLUI\xc7\xc3O",field:e=>e.AVG_PM25,domain:[0,70],thresholds:[5,15,25,35],range:["#260800","#662514","#B26B59","#E5B8AC","#FFD6CC"].reverse()},{label:"Baixo peso (por cem nascidos vivos)",name:"BAIXO PESO",field:e=>100*(e.BAIXO_PESO||0)/(e.TOTAL||1),domain:[0,200],thresholds:[5.2,6.8,8.3,100],range:["#00261D","#125948","#4D9986","#99CCC0","#CEF2E9"].reverse()},{label:"\xd3bitos perinatais (por mil nascidos vivos)",name:"MORT. PERINATAL",field:e=>1e3*(e.OBITOS_PERINATAIS||0)/(e.TOTAL||1),domain:[0,20],thresholds:[4,8,12,16],range:["#070040","#291C8C","#6359B2","#A9A3D9","#DDD9FF"].reverse()},{label:"\xd3bitos neonatais (por mil nascidos vivos)",name:"MORT. NEONATAL",field:e=>1e3*(e.OBITOS_NEONATAIS||0)/(e.TOTAL||1),domain:[0,30],thresholds:[4,8,16,22],range:["#260024","#661461","#B259AD","#E5ACE2","#FFD9FD"].reverse()},{label:"\xd3bitos infantis (por mil nascidos vivos)",name:"MORT. INFANTIL",field:e=>1e3*(e.OBITOS_INFANTIS||0)/(e.TOTAL||1),domain:[0,100],thresholds:[20,40,60,80],range:["#260024","#661461","#B259AD","#E5ACE2","#FFD9FD"].reverse()},{label:"\xcdndice de Desenvolvimento Humano (2010)",name:"IDH 2010",field:e=>e.IDH||0,domain:[.4,.9],thresholds:[.4,.5,.6,.7],range:["#070040","#291C8C","#6359B2","#A9A3D9","#DDD9FF"].reverse()}]}function ap(e){return function(t){return e.filter(e=>e.x>=t.xmin&&e.y>=t.ymin&&e.x<=t.xmax&&e.y<=t.ymax)}}function am(){return{xmin:Number.NEGATIVE_INFINITY,ymin:Number.NEGATIVE_INFINITY,xmax:Number.POSITIVE_INFINITY,ymax:Number.POSITIVE_INFINITY}}function av(e,t){return e.value,t}function ab(e){return e`### Interação com mouse`}function ah(e){return(t,i,a)=>{let n=e.select(t).selectAll("circle");return n.on("mouseover",function(){i(e.select(this))}),n.on("mouseleave",function(){a(e.select(this))}),t}}function ag(e,t,i){return(a,n)=>{let r=e.select(a).selectAll("[aria-label=dot]>circle");r.on("dblclick",function(){n(t[e.select(this).datum()])});let o=e.select(a).selectAll("[aria-label=dot]>path");return o.on("dblclick",function(){n(i[e.select(this).datum()])}),a}}function aw(e){return function(t,i){let a=t.scale("x"),n=t.scale("y"),r={},o=e.select(t).style("user-select","none");return t.onmousedown=e=>{r.x0=r.x1=e.offsetX,r.y0=r.y1=e.offsetY,r.dx=r.dy=0,r.sel=o.append("rect").attr("fill","rgba(0,0,0,0.2)")},t.onmousemove=e=>{e.buttons&&([r.x1,r.y1]=[e.offsetX,e.offsetY],r.dx=Math.abs(r.x1-r.x0),r.dy=Math.abs(r.y1-r.y0),r.x=Math.min(r.x0,r.x1),r.y=Math.min(r.y0,r.y1),r.sel.attr("x",r.x),r.sel.attr("y",r.y),r.sel.attr("width",r.dx),r.sel.attr("height",r.dy))},t.onmouseup=e=>{r.sel.remove(),r.dx>2&&r.dy>2&&i({xmin:Math.min(a.invert(r.x0),a.invert(r.x1)),xmax:Math.max(a.invert(r.x0),a.invert(r.x1)),ymin:Math.min(n.invert(r.y0),n.invert(r.y1)),ymax:Math.max(n.invert(r.y0),n.invert(r.y1))})},t}}function ay(e){return e`### Animação`}function ax(){return[]}function aC(e,t){return function(i,a){let n=a.map((t,i)=>({dataset:t,map:new Map,oldMap:e.value[i]?e.value[i].map:new Map}));return t.select(i).selectAll("g[aria-label=dot]").each(function(e,i){let a=t.select(this),{dataset:r,map:o,oldMap:l}=n[i];a.selectAll("circle").each(function(e,i){let a=t.select(this),n=r[i].CODMUNRES,s={cx:+a.attr("cx"),cy:+a.attr("cy")};if(o.set(n,s),l.has(n)){let u=l.get(n);a.attr("cx",u.cx),a.attr("newcx",s.cx),a.attr("cy",u.cy),a.attr("newcy",s.cy)}})}),t.select(i).selectAll("circle[newcx]").transition().duration(1500).attr("cx",function(){return t.select(this).attr("newcx")}).attr("cy",function(){return t.select(this).attr("newcy")}),e.value=n,i}}function aS(e){return e`### Seleção de município por nome`}function aA(e,t,i,a){return function(){let n=e.html`<div style="caret-color:transparent;display:inline;tabindex=-1">`,r=[],o=e=>(e=e.toUpperCase(),t.filter(t=>t.municipio.includes(e)).sort((e,t)=>e.municipio.localeCompare(t.municipio))),l=()=>i({placeholder:"Novo local...",format:e=>e.municipio,suggestion:o}),s=()=>{for(let t of(n.innerHTML="",r)){let i=e.html`<span style="padding:0px 4px;font-size:10pt;"> ⊝ </span>`;i.onclick=()=>{r.splice(r.indexOf(t),1),s()},n.append(e.html`<button style="padding-right:0px;border-radius:15px;border-width:thin;
                 font-size:8pt;margin-right:2px;caret-color: transparent">
                 ${a(t)} ${i}`)}if(r.length<4){let o=l();o.style.display="inline",o.style.caretColor="black",n.append(o),o.focus(),o.addEventListener("change",()=>{""!=o.value&&0>r.indexOf(o.value)&&r.push(o.value),s()})}n.value=r,n.dispatchEvent(new CustomEvent("input"))},u=e=>{r=e,s()};return s(),n.setValue=u,n}}function ak(e){return e`## Dados`}async function aM(e,t){return new Map(e.dsvFormat(";").parse(await t("regiaosaude.csv").text()).map(e=>[e.CODMUNRES,`${e.UF}, ${e.REGIAOSAUDE}`]))}function aT(e){return new Set(e.values())}function aD(e){return new Map(e.map(e=>[e.cod,e]))}function aI(e){return function(t){try{if(")"==t.nome[t.nome.length-1])return t.nome;return`${t.nome} (${t.uf})`}catch(i){return e.value={error:i,registro:t},"UNKNOWN"}}}function aE(e){return e("dadosMunicipio.csv").csv()}function aL(e){return e.html`<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
</style>`}function aO(e,t){let a=e.module();function n(){return this.url}let r=new Map([["dadosMunicipio.csv",{url:new i.U(i(1731)),mimeType:"text/csv",toString:n}],["regiaosaude.csv",{url:new i.U(i(2742)),mimeType:"text/csv",toString:n}]]);a.builtin("FileAttachment",e.fileAttachments(e=>r.get(e))),a.variable(t()).define(["md"],iV),a.variable(t("viewof ano")).define("viewof ano",["Inputs"],iH),a.variable(t("ano")).define("ano",["Generators","viewof ano"],(e,t)=>e.input(t)),a.variable(t("viewof limpar")).define("viewof limpar",["Inputs"],iU),a.variable(t("limpar")).define("limpar",["Generators","viewof limpar"],(e,t)=>e.input(t)),a.define("initial clearWindowSelection",iq),a.variable(t("mutable clearWindowSelection")).define("mutable clearWindowSelection",["Mutable","initial clearWindowSelection"],(e,t)=>new e(t)),a.variable(t("clearWindowSelection")).define("clearWindowSelection",["mutable clearWindowSelection"],e=>e.generator),a.variable(t("clearButton")).define("clearButton",["svg"],i_),a.variable(t("viewof munSelecionados")).define("viewof munSelecionados",["sessionStorage","menuLocalidade","coresMunicipios"],iW),a.variable(t("munSelecionados")).define("munSelecionados",["Generators","viewof munSelecionados"],(e,t)=>e.input(t)),a.variable(t("viewof xAxisSel")).define("viewof xAxisSel",["Inputs","variables"],iZ),a.variable(t("xAxisSel")).define("xAxisSel",["Generators","viewof xAxisSel"],(e,t)=>e.input(t)),a.variable(t("viewof yAxisSel")).define("viewof yAxisSel",["Inputs","variables"],iX),a.variable(t("yAxisSel")).define("yAxisSel",["Generators","viewof yAxisSel"],(e,t)=>e.input(t)),a.variable(t("viewof colorSel")).define("viewof colorSel",["Inputs","variables"],iY),a.variable(t("colorSel")).define("colorSel",["Generators","viewof colorSel"],(e,t)=>e.input(t)),a.variable(t()).define(["colorSel"],iK),a.define("initial colorVar",["colorSel"],iJ),a.variable(t("mutable colorVar")).define("mutable colorVar",["Mutable","initial colorVar"],(e,t)=>new e(t)),a.variable(t("colorVar")).define("colorVar",["mutable colorVar"],e=>e.generator),a.variable(t("viewof intervaloNascimentos")).define("viewof intervaloNascimentos",["sliderArray","sliderRangeBase"],iQ),a.variable(t("intervaloNascimentos")).define("intervaloNascimentos",["Generators","viewof intervaloNascimentos"],(e,t)=>e.input(t)),a.define("initial xAxisVar",["xAxisSel"],i1),a.variable(t("mutable xAxisVar")).define("mutable xAxisVar",["Mutable","initial xAxisVar"],(e,t)=>new e(t)),a.variable(t("xAxisVar")).define("xAxisVar",["mutable xAxisVar"],e=>e.generator),a.define("initial yAxisVar",["yAxisSel"],i0),a.variable(t("mutable yAxisVar")).define("mutable yAxisVar",["Mutable","initial yAxisVar"],(e,t)=>new e(t)),a.variable(t("yAxisVar")).define("yAxisVar",["mutable yAxisVar"],e=>e.generator),a.variable(t("colorScale")).define("colorScale",["d3","colorVar"],i5),a.variable(t("colorLegend")).define("colorLegend",["Legend","colorScale","colorVar"],i2),a.variable(t("scatterplot")).define("scatterplot",["munSelecionados","Plot","scatterConfig","xAxisVar","dataRange","yAxisVar","data","nomeMunicipio","colorScale","highlightData","flagDraw","rectSelect","mutable dataRange","dblClickInteraction","alteraMenuLocalidade","hoverInteraction","applyDotAnimation","htl","clearButton","allRange"],i4),a.define("initial scatterConfig",i3),a.variable(t("mutable scatterConfig")).define("mutable scatterConfig",["Mutable","initial scatterConfig"],(e,t)=>new e(t)),a.variable(t("scatterConfig")).define("scatterConfig",["mutable scatterConfig"],e=>e.generator),a.variable(t("alteraMenuLocalidade")).define("alteraMenuLocalidade",["viewof munSelecionados","corMunNaoUsada"],i6),a.define("initial debug",i7),a.variable(t("mutable debug")).define("mutable debug",["Mutable","initial debug"],(e,t)=>new e(t)),a.variable(t("debug")).define("debug",["mutable debug"],e=>e.generator),a.variable(t()).define(["md"],i8),a.variable(t()).define(["md"],i9),a.variable(t("coresMunicipios")).define("coresMunicipios",ae),a.variable(t("corMunNaoUsada")).define("corMunNaoUsada",["coresMunicipios"],at),a.variable(t()).define(["htl","corMunNaoUsada","munSelecionados"],ai),a.variable(t()).define(["md"],aa),a.variable(t("flagCanvasTest")).define("flagCanvasTest",["DOM","flagDraw"],an),a.variable(t("flagDraw")).define("flagDraw",ar),a.variable(t("flagSvgTest")).define("flagSvgTest",["htl","flagPath"],ao),a.variable(t("flagPath")).define("flagPath",al),a.variable(t()).define(["md"],as),a.variable(t("data")).define("data",["dadosMunicipio","xAxisVar","yAxisVar","colorVar","codigoToMunicipio","dataFilter","dataRange"],au),a.define("initial dataFilter",["intervaloNascimentos","ano"],ad),a.variable(t("mutable dataFilter")).define("mutable dataFilter",["Mutable","initial dataFilter"],(e,t)=>new e(t)),a.variable(t("dataFilter")).define("dataFilter",["mutable dataFilter"],e=>e.generator),a.variable(t("highlightData")).define("highlightData",["munSelecionados","data"],ac),a.variable(t("variables")).define("variables",af),a.variable(t("selectRange")).define("selectRange",["data"],ap),a.variable(t("allRange")).define("allRange",am),a.define("initial dataRange",["mutable clearWindowSelection","allRange"],av),a.variable(t("mutable dataRange")).define("mutable dataRange",["Mutable","initial dataRange"],(e,t)=>new e(t)),a.variable(t("dataRange")).define("dataRange",["mutable dataRange"],e=>e.generator),a.variable(t()).define(["md"],ab),a.variable(t("hoverInteraction")).define("hoverInteraction",["d3"],ah),a.variable(t("dblClickInteraction")).define("dblClickInteraction",["d3","data","highlightData"],ag),a.variable(t("rectSelect")).define("rectSelect",["d3"],aw),a.variable(t()).define(["md"],ay),a.define("initial oldDataMap",ax),a.variable(t("mutable oldDataMap")).define("mutable oldDataMap",["Mutable","initial oldDataMap"],(e,t)=>new e(t)),a.variable(t("oldDataMap")).define("oldDataMap",["mutable oldDataMap"],e=>e.generator),a.variable(t("applyDotAnimation")).define("applyDotAnimation",["mutable oldDataMap","d3"],aC),a.variable(t()).define(["md"],aS),a.variable(t("munInput")).define("munInput",["htl","municipios","SearchForm","nomeMunicipio"],aA),a.variable(t()).define(["md"],ak),a.variable(t("codigoToRegiaoSaude")).define("codigoToRegiaoSaude",["d3","FileAttachment"],aM),a.variable(t("regioesSaude")).define("regioesSaude",["codigoToRegiaoSaude"],aT),a.variable(t("codigoToMunicipio")).define("codigoToMunicipio",["municipios"],aD),a.variable(t("nomeMunicipio")).define("nomeMunicipio",["mutable debug"],aI),a.variable(t("dadosMunicipio")).define("dadosMunicipio",["FileAttachment"],aE);let o=e.module(ih);a.import("SearchForm",o);let l=e.module(ik);a.import("menuLocalidade",l),a.import("municipios",l);let s=e.module(iz);a.import("sliderbase",s),a.import("sliderArray",s),a.import("sliderRangeBase",s),a.import("style_slider",s);let u=e.module(S);return a.import("Legend",u),a.variable(t("estiloFonteMenuLocalidade")).define("estiloFonteMenuLocalidade",["htl"],aL),a}function aP(e){return e`# ASlider`}function aR(e,t){return e({values:t.range(100),value:3})}function aN(e,t){return e({values:t.range(100),value:[5,59]})}function a$(e,t){return function(i={}){let{height:a=80,rulerThickness:n=10,thumbThickness:r=6,thumbHeight:o=16,margin:l=10,labelDy:s=2,width:u=400,values:d=[1,2,3,4,5,6],value:c=[3,4]}=i,f=!(c instanceof Array),p=e.svg`<svg width=${u} height=${a} >`,m=t.select(p).attr("class","aslider"),v=u-l,b=(a-n)/2,h=b+n,g=e=>d[Math.round(((e=Math.max(l,Math.min(v,e)))-l)/(v-l)*(d.length-1))],w=e=>{let t=l,i=Number.MAX_VALUE;for(let a=0;a<d.length;a++){let n=(v-l)/(d.length-1)*a+l,r=Math.abs(g(n)-e);r<i&&([t,i]=[n,r])}return t};m.append("rect").attr("class","ruler").attr("width",u-2*l).attr("height",n).attr("x",l).attr("y",b);let y=m.append("rect").attr("class","range").attr("y",b).attr("height",n);m.selectAll("line.tick").data(d.slice(1,-1)).join("line").attr("class","tick").attr("x1",w).attr("x2",w).attr("y1",b).attr("y2",h),m.selectAll("text.label").data([d[0],d[d.length-1]]).join("text").attr("class","label").attr("dominant-baseline","hanging").attr("x",w).attr("y",(h+b+o)/2+s).text(e=>e);let x=m.append("rect").attr("class","thumb min").attr("width",r).attr("height",o).attr("rx",r/2),C=m.append("rect").attr("class","thumb max").attr("width",r).attr("height",o).attr("rx",r/2);f&&C.remove();let S=e=>{c=e;let t,i;f?[t,i]=[c,c]:[t,i]=c,t!=i||f?(x.attr("x",w(t)-r/2),C.attr("x",w(i)-r/2)):(x.attr("x",w(t)-r),C.attr("x",w(i))),x.attr("y",(h+b-o)/2),C.attr("y",(h+b-o)/2),y.attr("x",w(t)).attr("width",w(i)-w(t)),m.selectAll("text.thumbLabel").remove(),m.selectAll("text.thumbLabel").data([t,i]).join("text").attr("class","thumbLabel").attr("dominant-baseline","auto").attr("x",w).attr("y",(h+b-o)/2-s).text(e=>e),p.value=c,p.dispatchEvent(new CustomEvent("input"))},A=null,k=null;return m.selectAll(".thumb").on("mousedown",function(e){1==e.buttons&&(k=(A=t.select(this)).classed("min")?"min":"max")}),m.on("mousemove",function(e){if(!A)return;let t=e.offsetX,i=g(t),[a,n]=f?[c,c]:c;"min"==k?(i<=n||f)&&(a=i):i>=a&&(n=i),S(f?a:[a,n])}).on("mouseup mouseleave",e=>{A=null}),S(c),p}}function aF(e){return e.html`<style>
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

</style>`}function aj(e,t){let i=e.module();return i.variable(t()).define(["md"],aP),i.variable(t("viewof testSingle")).define("viewof testSingle",["aSlider","d3"],aR),i.variable(t("testSingle")).define("testSingle",["Generators","viewof testSingle"],(e,t)=>e.input(t)),i.variable(t("viewof testInterval")).define("viewof testInterval",["aSlider","d3"],aN),i.variable(t("testInterval")).define("testInterval",["Generators","viewof testInterval"],(e,t)=>e.input(t)),i.variable(t("aSlider")).define("aSlider",["htl","d3"],a$),i.variable(t("aSliderStyles")).define("aSliderStyles",["htl"],aF),i}function aB(e){return e`# ADrawer`}function aG(e,t){return e(t,{shown:!0,title:"Nascimentos",subtitle:"Exibir somente munic\xedpios com total de nascimentos entre:"})}function az(e){return e({values:[0,10,100,1e3,1e5,1e6],value:[0,1e6],width:300,rulerThickness:16,thumbHeight:20,height:50,margin:20})}function aV(e){return e}function aH(e){return()=>e.html`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="#151472"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.76426 4.76462C3.89443 4.63445 4.10549 4.63445 4.23566 4.76462L5.99996 6.52892L7.76426 4.76462C7.89443 4.63445 8.10549 4.63445 8.23566 4.76462C8.36584 4.8948 8.36584 5.10585 8.23566 5.23603L6.23566 7.23603C6.10549 7.3662 5.89443 7.3662 5.76426 7.23603L3.76426 5.23603C3.63408 5.10585 3.63408 4.8948 3.76426 4.76462Z" fill="#E5E5E5"/>
</svg>
`}function aU(e){return()=>e.html`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="#151472"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.09763 3.76462C5.22781 3.63445 5.43886 3.63445 5.56904 3.76462L7.56904 5.76462C7.69921 5.8948 7.69921 6.10585 7.56904 6.23603L5.56904 8.23603C5.43886 8.3662 5.22781 8.3662 5.09763 8.23603C4.96746 8.10585 4.96746 7.8948 5.09763 7.76462L6.86193 6.00033L5.09763 4.23603C4.96746 4.10585 4.96746 3.8948 5.09763 3.76462Z" fill="#E5E5E5"/>
</svg>
`}function aq(e,t,i){return function(a,n={}){let{shown:r=!1,title:o="title",subtitle:l=null}=n,s=e.html`<div class=adrawer>`,u=e.html`<div class=titleArea>`,d=e.html`<div class=icon>`,c=e.html`<div class=title>${o}`;u.append(d,c);let f=e.html`<div class=contentArea>`;l&&f.append(e.html`<div class=subtitle >${l}`),f.append(a);let p=()=>{d.innerHTML="",d.append(r?t():i()),f.style.display=r?"block":"none"};return p(),u.onclick=()=>{r=!r,p()},s.append(u,f),s}}function a_(e){return e.html`<style>
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
</style>`}function aW(e){return e}function aZ(e,t){let i=e.module();i.variable(t()).define(["md"],aB),i.variable(t()).define(["aDrawer","viewof filtroNascimentos"],aG),i.variable(t("viewof filtroNascimentos")).define("viewof filtroNascimentos",["aSlider"],az),i.variable(t("filtroNascimentos")).define("filtroNascimentos",["Generators","viewof filtroNascimentos"],(e,t)=>e.input(t)),i.variable(t()).define(["filtroNascimentos"],aV),i.variable(t("chevronDown")).define("chevronDown",["htl"],aH),i.variable(t("chevronRight")).define("chevronRight",["htl"],aU),i.variable(t("aDrawer")).define("aDrawer",["htl","chevronDown","chevronRight"],aq),i.variable(t("aDrawerStyles")).define("aDrawerStyles",["htl"],a_);let a=e.module(aj);return i.import("aSlider",a),i.import("aSliderStyles",a),i.variable(t()).define(["aSliderStyles"],aW),i}function aX(e){return e`# ASelect`}function aY(e){return e({options:["foo","bar","xpto"],width:300,value:"xpto",placeholder:"Select one"})}function aK(e){return e({width:300,placeholder:"\uD83D\uDD0D buscar"})}function aJ(e){return e}function aQ(e){return function(t={}){let{placeholder:i="",width:a=200}=t,n=e.html`<input type=text class=atext placeholder=${i}>`;return n.style.width=`${a}px`,n}}function a1(e){return function(t={}){let{placeholder:i="",options:a=["abc","def","xpto"],width:n=200,value:r="xpto"}=t,o=e.html`<select class=aselect>`;for(let l of(o.style.width=`${n}px`,i&&""!=i&&o.append(e.html`<option value="" disabled selected >${i}`),a)){let s=l==r?"selected":"",u=e.html`<option value="${l}" >${l}`;s&&(u.selected=!0),o.append(u)}return o}}function a0(e,t){return t.html`<style>
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
</style>`}function a5(e){return()=>e.html`<svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.146447C0.841709 -0.0488155 1.15829 -0.0488155 1.35355 0.146447L4 2.79289L6.64645 0.146447C6.84171 -0.0488155 7.15829 -0.0488155 7.35355 0.146447C7.54882 0.341709 7.54882 0.658291 7.35355 0.853553L4.35355 3.85355C4.15829 4.04882 3.84171 4.04882 3.64645 3.85355L0.646447 0.853553C0.451184 0.658291 0.451184 0.341709 0.646447 0.146447Z" fill="black"/>
</svg>`}async function a2(e){return await e("da.png").url()}function a4(e){return new URL(e)}function a3(e,t){return t.html`<div style="background:url(${e}) right; background-size:10px; background-repeat:no-repeat;">XXX  `}function a6(e,t){let a=e.module(),n=new Map([["da.png",{url:new i.U(i(9555)),mimeType:"image/png",toString:function(){return this.url}}]]);return a.builtin("FileAttachment",e.fileAttachments(e=>n.get(e))),a.variable(t()).define(["md"],aX),a.variable(t()).define(["aSelect"],aY),a.variable(t("viewof term")).define("viewof term",["aText"],aK),a.variable(t("term")).define("term",["Generators","viewof term"],(e,t)=>e.input(t)),a.variable(t()).define(["term"],aJ),a.variable(t("aText")).define("aText",["htl"],aQ),a.variable(t("aSelect")).define("aSelect",["htl"],a1),a.variable(t("aSelectStyles")).define("aSelectStyles",["daPath","htl"],a0),a.variable(t("downArrow")).define("downArrow",["htl"],a5),a.variable(t("daPath")).define("daPath",["FileAttachment"],a2),a.variable(t("daUrl")).define("daUrl",["daPath"],a4),a.variable(t()).define(["daPath","htl"],a3),a}function a7(e){return e`# Amplia Saúde - Mapa (2 Novembro)
`}function a8(e){return e.html`<style>
  .containerPrincipal {
    display: grid; 
    background: #FAFAFA;
    padding:10px;
    margin:0;
    column-gap:10px;
    row-gap:10px;
    grid-template-columns: 318px 200px auto 318px;
    grid-template-rows: 55px 55px 95px 130px 140px 300px 100px;
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
    grid-row-end: 8;
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
</div>`}function a9(e,t){return e.value=[],t.toggle({label:"Mostrar Interface",value:!0})}function ne(){return!0}function nt(){return!1}function ni(){return[]}function na(e,t,i,a,n,r){for(let o of(e.value=["clear"],["menuPrincipal","indicadorChave","indicadorChaveSmall","mapa","scatterplot","scatterplotBig","filtrarPor","filtrarPorSmall",])){let l=a.querySelector(`div.${o}`);l.innerHTML=o}n?(a.querySelector("div.scatterplot").style.display="none",a.querySelector("div.scatterplotBig").style.display="block",a.querySelector("div.indicadorChave").style.display="none",a.querySelector("div.indicadorChaveSmall").style.display="block"):(a.querySelector("div.scatterplotBig").style.display="none",a.querySelector("div.scatterplot").style.display="block",a.querySelector("div.indicadorChaveSmall").style.display="none",a.querySelector("div.indicadorChave").style.display="block"),r?(a.querySelector("div.filtrarPorSmall").style.display="none",a.querySelector("div.filtrarPor").style.display="block"):(a.querySelector("div.filtrarPorSmall").style.display="block",a.querySelector("div.filtrarPor").style.display="none")}function nn(e,t,i){e.value.push("panel");let a={};for(let n of["menuPrincipal","indicadorChave","indicadorChaveSmall","mapa","scatterplot","scatterplotBig","filtrarPor","filtrarPorSmall"]){let r=i.querySelector(`div.${n}`);a[n]={elem:r,w:r.clientWidth,h:r.clientHeight}}return a}function nr(e,t,i,a,n,r,o,l,s,u,d,c,f,p,m,v,b,h,g,w,y){if(e.value.push("populate"),t){i.menuPrincipal.elem.innerHTML="",i.menuPrincipal.elem.append(a.html`<div>${n}<br><div style="margin-top:10px">Selecione até 4 municípios com duplo clique nos gráficos</div></div>`),n.style.display="inline",n.style.paddingTop="10px",i.menuPrincipal.elem.append(r),r.style.display="inline";let x=o?i.indicadorChaveSmall:i.indicadorChave,C=a.html`<div style = "display:flex; justify-content: space-between;margin-bottom:10px">`,S=a.html`<span style="display:inline">INDICADOR CHAVE</span>`,A=o?l():s();A.style.cursor="pointer",C.onclick=()=>u.value=!u.value,C.append(S,A),x.elem.innerHTML="",x.elem.append(C,d,a.html`<br><br>`,c),f.style.marginTop="10px",o||(x.elem.append(f),f.querySelector("div.rankBox").dispatchEvent(new CustomEvent("scroll",{scrollTop:0})));let k=o?i.scatterplotBig:i.scatterplot;k.elem.innerHTML="",p.style.display="inline-block",p.style.marginBottom="10px",p.style.lineHeight="15px",m.style.display="inline-block",m.style.float="right",m.style.marginTop="5px",m.style.lineHeight="15px";let M=o?v():b();M.style.marginLeft="5px",M.style.cursor="pointer",M.style.position="absolute",M.style.right="10px",M.style.top="10px",M.style.zIndex=20,M.onclick=()=>u.value=!u.value,k.elem.append(M,p,h,m);let T=g?i.filtrarPor:i.filtrarPorSmall,D=a.html`<div style = "display:flex; justify-content: space-between;margin-bottom:10px">`,I=a.html`<span style="display:inline">FILTRAR POR</span>`,E=g?s():l();D.onclick=()=>w.value=!w.value,D.append(I,E),T.elem.innerHTML="",T.elem.append(D),g&&T.elem.append(y)}}function no(e,t,i,a){e.value.push("afterInitial"),i.mapa.oldW=i.mapa.w,i.mapa.oldH=i.mapa.h,(i.mapa.elem.clientWidth!=i.mapa.w||i.mapa.elem.clientHeight!=i.mapa.h||0==i.mapa.elem.children.length)&&(i.mapa.w=i.mapa.elem.clientWidth,i.mapa.h=i.mapa.elem.clientHeight,a.value=!0)}function nl(e,t,i,a){e.value.push("populateMapa"),t&&i.mapa.oldElem!=a&&(i.mapa.elem.innerHTML="",i.mapa.elem.append(a))}function ns(){return!1}function nu(e){return e`## Código para medir altura e largura de texto formatado`}function nd(e){let t=e.html`<div>`;return t.append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),t}function nc(e,t){return function(i,a){e.style.width=i+"px",e.innerHTML=a,t.delay(0);let{width:n,height:r}=e.getBoundingClientRect();return{width:n,height:r}}}function nf(e){return e(100,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")}function np(e){return e`## Session Storage
Armazenamento da coleção de municípios`}function nm(e,t){e.setItem("municipios",JSON.stringify(t))}function nv(e,t){let i=e.getItem("municipios");i=i?JSON.parse(i):["RIO DE JANEIRO"],t.value=i}function nb(e){return e`## Filtros`}function nh(e){return e`### Ano`}function ng(e,t){return e.value.push("ano"),t({range:[2012,2019],value:2018,ticks:1,width:400,height:56})}function nw(e){return e`### IDH`}function ny(e,t,i){return t({range:[0,.3,.4,.5,.6,.7,1],value:[0,6],width:300,height:50,marginTop:10},i)}function nx(e,t){return e(t,{shown:!0,title:"IDH (2010)",subtitle:"Exibir somente munic\xedpios com IDH entre:"})}function nC(e){return e`### Nascimentos`}function nS(e,t,i,a){return e.value.push("filtroNascimentos"),i({range:[1,10,100,1e3,1e4,1e5,2e5],value:[2,6],ticksLabelFormatter:e=>["1","10","100","1K","10K","100K","200K"][e],width:300,height:56},a)}function nA(e,t){return e(t,{shown:!0,title:"Nascimentos",subtitle:"Exibir somente munic\xedpios com total de nascimentos entre:"})}function nk(e){return e`### Poluição`}function nM(e,t,i,a){return e.value.push("filtroPoluicao"),i({range:[5,15,25,35,45,55,65],value:[0,6],ticksLabelFormatter:e=>["5","15","25","35","45","55","65"][e],marginTop:10,width:300,height:46},a)}function nT(e,t){return e(t,{shown:!0,title:"Polui\xe7\xe3o",subtitle:"Exibir somente munic\xedpios com polui\xe7\xe3o m\xe9dia (\xb5g/m\xb3) entre:"})}function nD(e){return e`### Baixo peso`}function nI(e,t,i,a){return e.value.push("filtroBaixoPeso"),i({range:[1,5,6.5,7.5,9,100],value:[0,5],ticksLabelFormatter:e=>["1","5","6.5","7.5","9","100"][e],marginTop:10,width:300,height:46},a)}function nE(e,t){return e(t).quantiles}function nL(e,t){return e(t,{shown:!0,title:"Baixo Peso",subtitle:"Munic\xedpios com taxa de baixo peso (por cem nascidos vivos) entre:"})}function nO(e){return e`### Mortalidade`}function nP(e){return e`#### Perinatal`}function nR(e,t,i,a){return e.value.push("filtroMortPerinatal"),i({range:[0,.5,1.5,2.5,5,500],value:[0,5],ticksLabelFormatter:e=>["0","0,5","1,5","2,5","5","500"][e],marginTop:10,width:300,height:46},a)}function nN(e,t){return e(t).quantiles}function n$(e,t){return e(t,{shown:!0,title:"Mortalidade Perinatal",subtitle:"Munic\xedpios com mortalidade perinatal (por mil nascidos vivos) entre:"})}function nF(e){return e`#### Neonatal`}function nj(e,t,i,a){return e.value.push("filtroMortNeonatal"),i({range:[0,1.5,2.5,7.5,10,500],value:[0,5],ticksLabelFormatter:e=>["0","1,5","2,5","7,5","10","500"][e],marginTop:10,width:300,height:46},a)}function nB(e,t){return e(t).quantiles}function nG(e,t){return e(t,{shown:!0,title:"Mortalidade Neonatal",subtitle:"Munic\xedpios com mortalidade neonatal (por mil nascidos vivos) entre:"})}function nz(e){return e`#### Infantil`}function nV(e,t,i,a){return e.value.push("filtroMortInfantil"),i({range:[0,8,12,16,23,1e3],value:[0,5],ticksLabelFormatter:e=>["0","8","12","16","23","1000"][e],marginTop:10,width:300,height:46},a)}function nH(e,t){return e(t).quantiles}function nU(e,t){return e(t,{shown:!0,title:"Mortalidade Infantil",subtitle:"Munic\xedpios com mortalidade infatil (por mil nascidos vivos) entre:"})}function nq(e){return e`### Região`}function n_(e,t,i){return e.value.push("filtroRegiao"),i({options:["Selecionar uma regi\xe3o","Centro-oeste","Nordeste","Norte","Sudeste","Sul"],width:250})}function nW(e,t,i){return e(t`<div style="padding:4px 0px 20px 10px;">${i}`,{shown:!0,title:"Regi\xe3o",subtitle:"Mostrar apenas uma regi\xe3o"})}function nZ(e,t,i,a){return e.value.push("filtroEstado"),i({options:["Selecionar um estado"].concat(a.map(e=>e.name).sort()),width:250})}function nX(e,t,i){return e(t`<div style="padding:4px 0px 20px 10px;">${i}`,{shown:!0,title:"UF",subtitle:"Mostrar apenas um estado"})}function nY(e){return e`### Caixa com todos os filtros`}function nK(e,t,i,a,n,r,o,l,s,u,d,c){e.value.push("painelFiltros");let f=i.html`<div>`;return f.append(a,n,r,o,l,s,u,d,c),f}function nJ(e){return e`### Função de filtragem configurada conforme a interface`}function nQ(e,t,i,a,n,r,o,l,s,u,d,c,f){e.value.push("allFilters");let p=["Norte","Nordeste","Sudeste","Sul","Centro-oeste"].indexOf(t),m=i.filter(e=>e.name==a),v=m.length?+m[0].uf:null,[b,h]=n.map(e=>[1,10,100,1e3,1e4,1e5,2e5][e]),[g,w]=r.map(e=>[5,15,25,35,45,55,65][e]),[y,x]=o.map(e=>[1,5,6.5,7.5,9,100][e]),[C,S]=l.map(e=>[0,.5,1.5,2.5,5,500][e]),[A,k]=s.map(e=>[0,1.5,2.5,7.5,10,500][e]),[M,T]=u.map(e=>[0,8,12,16,23,3125][e]),[D,I]=d.map(e=>[0,.3,.4,.5,.6,.7,1][e]),E=e=>(-1==p||p==Math.floor(e.CODMUNRES/1e5)-1)&&(!v||v==Math.floor(e.CODMUNRES/1e4))&&e.IDH>=D&&e.IDH<=I&&e.ANO==c&&+e.TOTAL>=b&&+e.TOTAL<=h&&+e.AVG_PM25>=g&&+e.AVG_PM25<=w&&100*(e.BAIXO_PESO||0)/(e.TOTAL||1)>=y&&100*(e.BAIXO_PESO||0)/(e.TOTAL||1)<=x&&1e3*(e.OBITOS_PERINATAIS||0)/(e.TOTAL||1)>=C&&1e3*(e.OBITOS_PERINATAIS||0)/(e.TOTAL||1)<=S&&1e3*(e.OBITOS_NEONATAIS||0)/(e.TOTAL||1)>=A&&1e3*(e.OBITOS_NEONATAIS||0)/(e.TOTAL||1)<=k&&1e3*(e.OBITOS_INFANTIS||0)/(e.TOTAL||1)>=M&&1e3*(e.OBITOS_INFANTIS||0)/(e.TOTAL||1)<=T;return f.value=E,E}function n1(e){return e`## Variáveis`}function n0(e,t,i,a){return t.value.push("colorSelect"),i({options:a.map(e=>e.name),width:280})}function n5(e,t,i){return e.value=t.find(e=>e.name==i),e.value}function n2(e,t,i,a){return t.value.push("xAxisSelect"),i({options:a.map(e=>e.name),value:"MORT. INFANTIL",width:110})}function n4(e,t,i){return e.value=t.find(e=>e.name==i),e.value}function n3(e,t,i,a){return t.value.push("yAxisSelect"),i({options:a.map(e=>e.name),value:"BAIXO PESO",width:110})}function n6(e,t,i){return e.value=t.find(e=>e.name==i),e.value}function n7(e){return e`## Ranking`}function n8(){return e=>e.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function n9(){return null}function re(e,t,i,a,n,r){e.value=[];let o=[];return t.filter(i).forEach(t=>{let i=a.get(t.CODMUNRES);if(!i){e.value.push(t);return}let l=i.nome,s=i.uf,u=+n.field(t);o.push({name:l,uf:s,mun:i,normName:r(l),val:u})}),o.sort((e,t)=>t.val-e.val),o}function rt(e){return e.html`<style>
  div.rankBox {
    max-height:200px;
    max-width:280px;
    line-height: 20px;
    overflow-y: scroll;
    overflow-x: hidden;
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
  </style>`}function ri(e,t,i,a,n,r,o,l,s,u){let d=t.html`<div class=rankBox >`,c=i.range,f=t.html`<div class=rankTitle style="color:${c[c.length-1]}">MUNICÍPIOS RANQUEADOS POR ${i.name}`,p=a({width:280,placeholder:"\uD83D\uDD0D BUSCAR"}),m=(e,i)=>{let a=t.html`<div class=rankItem>`,l=n(e.val),s=r.hsl(l).l>.5?"black":"white",u=t.html`<div class=rank style="color:${s};background:${l};" >${i+1}`,d=t.html`<div class=name>${e.name}`,c=t.html`<div class=uf>${e.uf}`,f=e.mun;return a.append(u,d,c),a.ondblclick=()=>o(f),a};p.style.marginBottom="10px";let v=t.html`<div style="position:relative;min-width:265px;min-height:${20*l.length}px;" >`,b=t.html`<div style="position:absolute;min-width:265px;min-height:${160}px;" >`;v.append(b),d.append(v);let h=e=>{b.style.top=e+"px",b.innerHTML="";let t=~~(e/20),i=Math.min(t+10,l.length);for(let a=t;a<i;a++){let n=m(l[a],a);b.append(n)}};return d.onscroll=e=>{h(d.scrollTop)},h(0),p.oninput=e=>{let t=s(p.value);for(let i=0;i<l.length;i++)if(l[i].normName.includes(t)){d.scrollTo(0,20*i);break}},u`<div>${f}${p}${d}`}function ra(e){return e`## Cartograma de Dorling`}function rn(e){return e`
<style>
.circle:not(.disabled):hover {
  stroke:black;
  stroke-width:1px;
}
</style>
`}function rr(e,t,i,a,n,r,o,l,s,u,d,c,f,p,m,v,b,h,g,w,y){i.value.push("dorling");let[[x,C],[S,A]]=a,k=n.mapa.w,M=Math.max(n.mapa.h),T=Math.max(.2,Math.min(3,(k-318*(r.value?2:1))/(S-x))),D=o`<div style="position:relative;width:${k}px;height:${M}px;">`,I=l;Object.assign(I.style,{position:"absolute",zIndex:10,top:"10px",left:e?"328px":"10px"});let E=s;Object.assign(E.style,{position:"absolute",zIndex:10,top:"38px",left:e?"328px":"10px"}),D.append(I,E),I.onclick=()=>G(1.2),E.onclick=()=>G(10/12);let L=u.create("svg").attr("width",k).attr("height",M).attr("viewBox",[0,0,k,M]).attr("id","dorling");D.append(L.node()),D.value=[],D.hovered;let O=L.append("g").attr("class","mainGroup"),P=[e?328:0,0],R=null;L.on("mousedown",function(e){R=[e.offsetX,e.offsetY],L.style("cursor","grab")}).on("mousemove",function(e){if(!R)return;let t=[e.offsetX,e.offsetY],i=[t[0]-R[0],t[1]-R[1]];P[0]+=i[0],P[1]+=i[1],O.attr("transform",`translate(${P})`),R=t}).on("mouseup",function(e){R&&(L.style("cursor","auto"),R=null)}).on("wheel",function(e){e.preventDefault(),e.stopPropagation();let t=e.deltaY>0?1.1:10/11,i=[e.offsetX,e.offsetY];G(t,i)}),O.attr("transform",`translate(${P})`);let N=O.append("g").classed("circles",!0).attr("transform",`scale(${T},${T})`),$=N.selectAll("circle").data(d).join("circle").on("dblclick",function(){b.value;let e=u.select(this);y((e=>{let t=e.data()[0].properties.codarea.slice(0,-1),i=w.filter(e=>e.cod==t);return i[0]})(e)),B()}).classed("circle",!0).attr("cx",e=>e.x).attr("cy",e=>e.y);var F=c().html((e,t)=>`
      ${f({pol:p.get(t.properties.codarea.slice(0,-1)).AVG_PM25,bp:100*p.get(t.properties.codarea.slice(0,-1)).BAIXO_PESO/p.get(t.properties.codarea.slice(0,-1)).TOTAL,municipio:m.get(t.properties.codarea)["Nome_Munic\xedpio"],uf:m.get(t.properties.codarea).Nome_UF,populacao:v.get(t.properties.codarea)})}`);L.call(F),$.on("mouseover",F.show).on("mouseout",F.hide);let j=O.append("g").classed("flags",!0),B=()=>{j.selectAll("path").remove(),j.selectAll("path").data(b.value).join("path").attr("transform",e=>{let t=h.get(e.cod);return`translate(${t.x*T},${t.y*T})`}).attr("d",g(12)).attr("fill",e=>e.cor).attr("stroke","black").on("dblclick",z)};function G(e,t){let[i,a]=t||[k/2,M/2],[n,r]=P,o=Math.max(.5,Math.min(3,T*e)),[l,s]=[(i-n)/T,(a-r)/T],[u,d]=[i-l*o,a-s*o];P=[u,d],T=o,O.attr("transform",`translate(${P})`),N.attr("transform",`scale(${T},${T})`),B()}function z(){let e=u.select(this).datum();y(e),B()}function V(){let e=b.value,t=e.map(e=>e.cod);$.each(function(e){let i=u.select(this),a=t.includes(e.properties.codarea.slice(0,-1));i.classed("clicked",a)}),B()}return V(),D.updateSelected=V,D.circleSelection=$,D}function ro(){return 0}function rl(e,t,i,a,n,r,o,l,s){e.value.push("dorlingCircleConf"),t.circleSelection.each(function(e){let t=e.properties.codarea,u=i.get(t.slice(0,-1)),d=a.select(this),c=!n(u);d.classed("disabled",c).attr("r",r(o.get(t))).attr("fill",c?"#F1F1F1":l(s.field(u)))})}function rs(e){return e`## Ícones`}function ru(e){return e`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#151472"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 6C7.567 6 6 7.567 6 9.5C6 11.433 7.567 13 9.5 13C10.443 13 11.2988 12.6271 11.9282 12.0207C11.9414 12.0036 11.9558 11.9871 11.9714 11.9714C11.9871 11.9558 12.0036 11.9414 12.0207 11.9282C12.6271 11.2988 13 10.443 13 9.5C13 7.567 11.433 6 9.5 6ZM13.0159 12.3088C13.6318 11.539 14 10.5625 14 9.5C14 7.01472 11.9853 5 9.5 5C7.01472 5 5 7.01472 5 9.5C5 11.9853 7.01472 14 9.5 14C10.5625 14 11.539 13.6318 12.3088 13.0159L14.1464 14.8536C14.3417 15.0488 14.6583 15.0488 14.8536 14.8536C15.0488 14.6583 15.0488 14.3417 14.8536 14.1464L13.0159 12.3088ZM9.5 7.5C9.77614 7.5 10 7.72386 10 8V9H11C11.2761 9 11.5 9.22386 11.5 9.5C11.5 9.77614 11.2761 10 11 10H10V11C10 11.2761 9.77614 11.5 9.5 11.5C9.22386 11.5 9 11.2761 9 11V10H8C7.72386 10 7.5 9.77614 7.5 9.5C7.5 9.22386 7.72386 9 8 9H9V8C9 7.72386 9.22386 7.5 9.5 7.5Z" fill="#E5E5E5"/>
</svg>`}function rd(e){return e`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#151472"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 6C7.567 6 6 7.567 6 9.5C6 11.433 7.567 13 9.5 13C10.443 13 11.2988 12.6271 11.9282 12.0207C11.9414 12.0036 11.9558 11.9871 11.9714 11.9714C11.9871 11.9558 12.0036 11.9414 12.0207 11.9282C12.6271 11.2988 13 10.443 13 9.5C13 7.567 11.433 6 9.5 6ZM13.0159 12.3088C13.6318 11.539 14 10.5625 14 9.5C14 7.01472 11.9853 5 9.5 5C7.01472 5 5 7.01472 5 9.5C5 11.9853 7.01472 14 9.5 14C10.5625 14 11.539 13.6318 12.3088 13.0159L14.1464 14.8536C14.3417 15.0488 14.6583 15.0488 14.8536 14.8536C15.0488 14.6583 15.0488 14.3417 14.8536 14.1464L13.0159 12.3088ZM7.5 9.5C7.5 9.22386 7.72386 9 8 9H11C11.2761 9 11.5 9.22386 11.5 9.5C11.5 9.77614 11.2761 10 11 10H8C7.72386 10 7.5 9.77614 7.5 9.5Z" fill="#E5E5E5"/>
</svg>`}function rc(e){return()=>e`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 2C7.22386 2 7 1.77614 7 1.5C7 1.22386 7.22386 1 7.5 1H10.5C10.7761 1 11 1.22386 11 1.5V4.5C11 4.77614 10.7761 5 10.5 5C10.2239 5 10 4.77614 10 4.5V2.70711L7.35355 5.35355C7.15829 5.54882 6.84171 5.54882 6.64645 5.35355C6.45118 5.15829 6.45118 4.84171 6.64645 4.64645L9.29289 2H7.5ZM4.64645 6.64645C4.84171 6.45118 5.15829 6.45118 5.35355 6.64645C5.54882 6.84171 5.54882 7.15829 5.35355 7.35355L2.70711 10H4.5C4.77614 10 5 10.2239 5 10.5C5 10.7761 4.77614 11 4.5 11H1.5C1.22386 11 1 10.7761 1 10.5V7.5C1 7.22386 1.22386 7 1.5 7C1.77614 7 2 7.22386 2 7.5V9.29289L4.64645 6.64645Z" fill="black"/>
</svg>`}function rf(e){return()=>e`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.1464 1.14645C10.3417 0.951184 10.6583 0.951184 10.8536 1.14645C11.0488 1.34171 11.0488 1.65829 10.8536 1.85355L8.20711 4.5H10C10.2761 4.5 10.5 4.72386 10.5 5C10.5 5.27614 10.2761 5.5 10 5.5H7C6.72386 5.5 6.5 5.27614 6.5 5V2C6.5 1.72386 6.72386 1.5 7 1.5C7.27614 1.5 7.5 1.72386 7.5 2V3.79289L10.1464 1.14645ZM1.5 7C1.5 6.72386 1.72386 6.5 2 6.5H5C5.27614 6.5 5.5 6.72386 5.5 7V10C5.5 10.2761 5.27614 10.5 5 10.5C4.72386 10.5 4.5 10.2761 4.5 10V8.20711L1.85355 10.8536C1.65829 11.0488 1.34171 11.0488 1.14645 10.8536C0.951184 10.6583 0.951184 10.3417 1.14645 10.1464L3.79289 7.5H2C1.72386 7.5 1.5 7.27614 1.5 7Z" fill="black"/>
</svg>`}function rp(e){return()=>e.html`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.20544 6.45505C5.36816 6.29233 5.63198 6.29233 5.7947 6.45505L8.00007 8.66042L10.2054 6.45505C10.3682 6.29233 10.632 6.29233 10.7947 6.45505C10.9574 6.61777 10.9574 6.88158 10.7947 7.0443L8.2947 9.5443C8.13198 9.70702 7.86816 9.70702 7.70544 9.5443L5.20544 7.0443C5.04272 6.88158 5.04272 6.61777 5.20544 6.45505Z" fill="#151472"/>
</svg>`}function rm(e){return()=>e.html`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70541 6.45505C7.86813 6.29233 8.13195 6.29233 8.29467 6.45505L10.7947 8.95505C10.9574 9.11776 10.9574 9.38158 10.7947 9.5443C10.632 9.70702 10.3681 9.70702 10.2054 9.5443L8.00004 7.33893L5.79467 9.5443C5.63195 9.70702 5.36813 9.70702 5.20541 9.5443C5.04269 9.38158 5.04269 9.11776 5.20541 8.95505L7.70541 6.45505Z" fill="#151472"/>
</svg>
`}function rv(e){return e`## Scatterplot`}function rb(){return 0}function rh(e,t){let i=e?496:286;t.value.width=i,t.value.height=3*i/4,t.value=t.value}function rg(e,t,i){return e.value.push("scatterPlot"),i}function rw(e){return e}function ry(e){return e`## Tooltip`}function rx(e){return e`
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
</style>`}function rC(e,t){return(i,a)=>{let n=e.scaleThreshold(a.thresholds,a.range),r=n(i),o=(n.range().indexOf(r)+1).toString();var l=t`
<p>${a.label} <span class="value">${e.format(".3r")(i).replace(/\./g,",")}</span></p>
<table>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>`;return e.select(l).selectAll("td:nth-child("+o+")").style("background",r),l.outerHTML}}function rS(e,t,i){return a=>`
    <div class="tooltip">
    <h1>${a.municipio} <span>${a.uf}</span></h1>
    <p>${e.format(",")(a.populacao).replace(/,/g,".")} habitantes</p>
    ${t(a.pol,i[0])}
    ${t(a.bp,i[1])}
    </div>
`}function rA(e,t,i){e.value.push("munSelecionados"),i.updateSelected()}function rk(e){return e({selector:"h2",heading:"Ir para:"})}function rM(e){return e`## Funções`}function rT(e){return(t,i,a)=>{let n=e.select(t).selectAll("circle");return n.on("mouseover",function(){e.select(this).attr("stroke","black"),i(e.select(this).data())}),n.on("mouseleave",function(){e.select(this).attr("stroke","none"),a(e.select(this).data())}),t}}function rD(e){return e`## Dados`}function rI(e){return e("baixopeso-mun-ano.csv").csv()}function rE(e){return e("pm25-mun-ano.csv").csv()}function rL(e){return e("malhabrasil.json").json()}function rO(e,t,i){let a=e(t.feature(i,i.objects.foo),!0);for(let n of a.features){let r=n.properties.centroide;if(0==r[0]&&0==r[1]){let o=n.geometry.coordinates.flat(4);r[0]=o[0],r[1]=o[1]}}return a}function rP(e){return e("ufnomes.json").json()}function rR(e){return e("municipios.csv").csv()}function rN(e){return new Map(e.map(e=>[e["C\xf3digo Munic\xedpio Completo"],e]))}function r$(e){return new Map(e.map(e=>[e.properties.codarea.slice(0,6),e]))}function rF(e){return t=>e.get(t).properties.codarea}function rj(e){return e("populacao_municipio_2018.csv").csv()}function rB(e){return new Map(e.map(e=>[e.municipio,+e.populacao]))}function rG(e,t){return e.extent(t.values())}function rz(e,t){return new Map(e.filter(e=>e.ANO==t).sort(function(e,t){return t.BAIXO_PESO/t.TOTAL-e.BAIXO_PESO/e.TOTAL}).map((e,t)=>[e.CODMUNRES,["0"==e.TOTAL?0:e.BAIXO_PESO/e.TOTAL,t,e.TOTAL]]))}function rV(e,t){return new Map(e.filter(e=>e.ANO==t).map(e=>[e.CODMUNRES,e.TOTAL]))}function rH(e,t){return new Map(e.filter(e=>e.ANO==t).map(e=>[e.CODMUNRES,e]))}function rU(e){return e.map(function(e){return 1e3*e.BAIXO_PESO/e.TOTAL})}function rq(e){return e.map(function(e){return parseFloat(e.AVG_PM25)})}function r_(e){return e.map(function(e){return 1e3*e.OBITOS_PERINATAIS/e.TOTAL}).filter(e=>0!==e&&1e3!==e)}function rW(e){return e.map(function(e){return 1e3*e.OBITOS_NEONATAIS/e.TOTAL})}function rZ(e){return e.map(function(e){return e.OBITOS_TOTAIS})}function rX(e){return e.map(function(e){return 1e3*e.OBITOS_INFANTIS/e.TOTAL})}function rY(e){return function(t){return{limits:e.extent(t.values()),quantiles:[e.quantile(t,.2),e.quantile(t,.4),e.quantile(t,.6),e.quantile(t,.8),e.quantile(t,1)]}}}function rK(e,t){return e(t)}function rJ(e,t){return e(t)}function rQ(e,t){return e(t)}function r1(e,t){return e(t).quantiles}function r0(e,t){return e(t)}function r5(e,t){return e(t)}function r2(e,t,i,a,n){return function(){return e.features.map(e=>{let r=t.get(e.properties.codarea);return{pos:[e.x,e.y],centroid:i(e.properties.centroide),id:+e.properties.codarea,name:r.Nome_Município,idRegion:+r.UF,regionName:r.Nome_UF,radius:a(n.get(e.properties.codarea))}})}}function r4(e){return e`## Geo`}function r3(){return 1152}function r6(e,t,i){return e.geoMercator().fitWidth(t,i)}function r7(e,t){return e.geoPath(t)}function r8(e,t){return e.bounds(t)}function r9(e){let[[t,i],[a,n]]=e;return Math.abs((a-t)/(n-i))}function oe(e){return e`## Escalas`}function ot(e,t){return e.scaleThreshold(t.thresholds,t.range)}function oi(e,t,i,a,n){let r=t(i,{width:280,title:a.label,tickSize:0});return n.select(r).selectAll("text").style("font-family","Roboto Condensed"),n.select(r).selectAll(".tick").selectAll("line").style("stroke","white"),n.select(r).selectAll(".tick").selectAll("text").style("color","#C4C4C4"),r}function oa(e){return e.scaleOrdinal(e.range(27),e.schemeDark2)}function on(){return 24}function or(e,t){return e.scaleSqrt().domain(t).range([1.5,24])}function oo(e,t){return e().tickValues([1e5,1e6,1e7]).tickFormat((e,t,i)=>{let a=e>=1e6?`${e/1e6} M`:`${e/1e3} m`,n=t===i.length-1?" habitantes":"";return`${a}${n}`}).scale(t)}function ol(e){return e`## Simulação física para o cartograma de Dorling`}async function os(e,t,i,a,n,r,o){return await e("posicoesFinais@1.json").json()}function ou(e){return e`## Dependências e Imports`}function od(e){return e("d3@6").then(e=>(e.formatLocale({decimal:",",thousands:"\xa0"}),e))}function oc(e){return e("d3-tip")}function of(e){return e("https://bundle.run/@mapbox/geojson-rewind@0.5.0")}function op(e){return e("topojson-client@3")}function om(e){return e`### Componentes de input`}function ov(e,t,i,a,n,r,o,l){return l.html`${e}
${t}
${i}
${a}
${n}
${r}
${o}`}function ob(e,t){let a=e.module();function n(){return this.url}let r=new Map([["municipios.csv",{url:new i.U(i(285)),mimeType:"text/csv",toString:n}],["ufnomes.json",{url:new i.U(i(2789)),mimeType:"application/json",toString:n}],["posicoesFinais@1.json",{url:new i.U(i(7591)),mimeType:"application/json",toString:n}],["populacao_municipio_2018.csv",{url:new i.U(i(8875)),mimeType:"text/csv",toString:n}],["malhabrasil.json",{url:new i.U(i(1371)),mimeType:"application/json",toString:n}],["pm25-mun-ano.csv",{url:new i.U(i(1644)),mimeType:"text/csv",toString:n}],["baixopeso-mun-ano.csv",{url:new i.U(i(1848)),mimeType:"text/csv",toString:n}]]);a.builtin("FileAttachment",e.fileAttachments(e=>r.get(e))),a.variable(t()).define(["md"],a7),a.variable(t("mainWindow")).define("mainWindow",["htl"],a8),a.variable(t("viewof interfaceToggle")).define("viewof interfaceToggle",["mutable reactDebug","Inputs"],a9),a.variable(t("interfaceToggle")).define("interfaceToggle",["Generators","viewof interfaceToggle"],(e,t)=>e.input(t)),a.define("initial biglayoutToggle",ne),a.variable(t("mutable biglayoutToggle")).define("mutable biglayoutToggle",["Mutable","initial biglayoutToggle"],(e,t)=>new e(t)),a.variable(t("biglayoutToggle")).define("biglayoutToggle",["mutable biglayoutToggle"],e=>e.generator),a.define("initial filtrarPorRolldownToggle",nt),a.variable(t("mutable filtrarPorRolldownToggle")).define("mutable filtrarPorRolldownToggle",["Mutable","initial filtrarPorRolldownToggle"],(e,t)=>new e(t)),a.variable(t("filtrarPorRolldownToggle")).define("filtrarPorRolldownToggle",["mutable filtrarPorRolldownToggle"],e=>e.generator),a.define("initial reactDebug",ni),a.variable(t("mutable reactDebug")).define("mutable reactDebug",["Mutable","initial reactDebug"],(e,t)=>new e(t)),a.variable(t("reactDebug")).define("reactDebug",["mutable reactDebug"],e=>e.generator),a.variable(t("clearMainWindow")).define("clearMainWindow",["mutable reactDebug","interfaceToggle","width","mainWindow","biglayoutToggle","filtrarPorRolldownToggle"],na),a.variable(t("panel")).define("panel",["mutable reactDebug","clearMainWindow","mainWindow"],nn),a.variable(t("populate")).define("populate",["mutable reactDebug","interfaceToggle","panel","htl","viewof munSelecionados","viewof ano","biglayoutToggle","makeRollDownIcon","makeRollUpIcon","mutable biglayoutToggle","viewof colorSelect","legendaEscalaCores","rankingBox","viewof yAxisSelect","viewof xAxisSelect","makeReduceIcon","makeEnlargeIcon","scatterplotComponent","filtrarPorRolldownToggle","mutable filtrarPorRolldownToggle","painelFiltros"],nr),a.variable(t("afterInitialLayout")).define("afterInitialLayout",["mutable reactDebug","populate","panel","mutable remakeMapa"],no),a.variable(t("populateMapa")).define("populateMapa",["mutable reactDebug","interfaceToggle","panel","viewof dorling"],nl),a.define("initial remakeMapa",ns),a.variable(t("mutable remakeMapa")).define("mutable remakeMapa",["Mutable","initial remakeMapa"],(e,t)=>new e(t)),a.variable(t("remakeMapa")).define("remakeMapa",["mutable remakeMapa"],e=>e.generator),a.variable(t()).define(["md"],nu),a.variable(t("textSizeMeasure")).define("textSizeMeasure",["htl"],nd),a.variable(t("measure")).define("measure",["textSizeMeasure","Promises"],nc),a.variable(t()).define(["measure"],nf),a.variable(t()).define(["md"],np),a.variable(t("storageUpdate")).define("storageUpdate",["sessionStorage","munSelecionados"],nm),a.variable(t("initialLoad")).define("initialLoad",["sessionStorage","viewof munSelecionados"],nv),a.variable(t()).define(["md"],nb),a.variable(t()).define(["md"],nh),a.variable(t("viewof ano")).define("viewof ano",["mutable reactDebug","sliderbase"],ng),a.variable(t("ano")).define("ano",["Generators","viewof ano"],(e,t)=>e.input(t)),a.variable(t()).define(["md"],nw),a.variable(t("viewof filtroIDH")).define("viewof filtroIDH",["interfaceToggle","sliderArray","sliderRangeBase"],ny),a.variable(t("filtroIDH")).define("filtroIDH",["Generators","viewof filtroIDH"],(e,t)=>e.input(t)),a.variable(t("filtroIDHDrawer")).define("filtroIDHDrawer",["aDrawer","viewof filtroIDH"],nx),a.variable(t()).define(["md"],nC),a.variable(t("viewof filtroNascimentos")).define("viewof filtroNascimentos",["mutable reactDebug","interfaceToggle","sliderArray","sliderRangeBase"],nS),a.variable(t("filtroNascimentos")).define("filtroNascimentos",["Generators","viewof filtroNascimentos"],(e,t)=>e.input(t)),a.variable(t("filtroNascimentosDrawer")).define("filtroNascimentosDrawer",["aDrawer","viewof filtroNascimentos"],nA),a.variable(t()).define(["md"],nk),a.variable(t("viewof filtroPoluicao")).define("viewof filtroPoluicao",["mutable reactDebug","interfaceToggle","sliderArray","sliderRangeBase"],nM),a.variable(t("filtroPoluicao")).define("filtroPoluicao",["Generators","viewof filtroPoluicao"],(e,t)=>e.input(t)),a.variable(t("filtroPoluicaoDrawer")).define("filtroPoluicaoDrawer",["aDrawer","viewof filtroPoluicao"],nT),a.variable(t()).define(["md"],nD),a.variable(t("viewof filtroBaixoPeso")).define("viewof filtroBaixoPeso",["mutable reactDebug","interfaceToggle","sliderArray","sliderRangeBase"],nI),a.variable(t("filtroBaixoPeso")).define("filtroBaixoPeso",["Generators","viewof filtroBaixoPeso"],(e,t)=>e.input(t)),a.variable(t()).define(["valueAnalysis","bp"],nE),a.variable(t("filtroBaixoPesoDrawer")).define("filtroBaixoPesoDrawer",["aDrawer","viewof filtroBaixoPeso"],nL),a.variable(t()).define(["md"],nO),a.variable(t()).define(["md"],nP),a.variable(t("viewof filtroMortPerinatal")).define("viewof filtroMortPerinatal",["mutable reactDebug","interfaceToggle","sliderArray","sliderRangeBase"],nR),a.variable(t("filtroMortPerinatal")).define("filtroMortPerinatal",["Generators","viewof filtroMortPerinatal"],(e,t)=>e.input(t)),a.variable(t()).define(["valueAnalysis","obper"],nN),a.variable(t("filtroMortPerinatalDrawer")).define("filtroMortPerinatalDrawer",["aDrawer","viewof filtroMortPerinatal"],n$),a.variable(t()).define(["md"],nF),a.variable(t("viewof filtroMortNeonatal")).define("viewof filtroMortNeonatal",["mutable reactDebug","interfaceToggle","sliderArray","sliderRangeBase"],nj),a.variable(t("filtroMortNeonatal")).define("filtroMortNeonatal",["Generators","viewof filtroMortNeonatal"],(e,t)=>e.input(t)),a.variable(t()).define(["valueAnalysis","obneo"],nB),a.variable(t("filtroMortNeonatalDrawer")).define("filtroMortNeonatalDrawer",["aDrawer","viewof filtroMortNeonatal"],nG),a.variable(t()).define(["md"],nz),a.variable(t("viewof filtroMortInfantil")).define("viewof filtroMortInfantil",["mutable reactDebug","interfaceToggle","sliderArray","sliderRangeBase"],nV),a.variable(t("filtroMortInfantil")).define("filtroMortInfantil",["Generators","viewof filtroMortInfantil"],(e,t)=>e.input(t)),a.variable(t()).define(["valueAnalysis","obinf"],nH),a.variable(t("filtroMortInfatilDrawer")).define("filtroMortInfatilDrawer",["aDrawer","viewof filtroMortInfantil"],nU),a.variable(t()).define(["md"],nq),a.variable(t("viewof filtroRegiao")).define("viewof filtroRegiao",["mutable reactDebug","interfaceToggle","aSelect"],n_),a.variable(t("filtroRegiao")).define("filtroRegiao",["Generators","viewof filtroRegiao"],(e,t)=>e.input(t)),a.variable(t("filtroRegiaoDrawer")).define("filtroRegiaoDrawer",["aDrawer","html","viewof filtroRegiao"],nW),a.variable(t("viewof filtroEstado")).define("viewof filtroEstado",["mutable reactDebug","interfaceToggle","aSelect","ufnome"],nZ),a.variable(t("filtroEstado")).define("filtroEstado",["Generators","viewof filtroEstado"],(e,t)=>e.input(t)),a.variable(t("filtroEstadoDrawer")).define("filtroEstadoDrawer",["aDrawer","html","viewof filtroEstado"],nX),a.variable(t()).define(["md"],nY),a.variable(t("painelFiltros")).define("painelFiltros",["mutable reactDebug","interfaceToggle","htl","filtroNascimentosDrawer","filtroRegiaoDrawer","filtroEstadoDrawer","filtroPoluicaoDrawer","filtroBaixoPesoDrawer","filtroMortPerinatalDrawer","filtroMortNeonatalDrawer","filtroMortInfatilDrawer","filtroIDHDrawer"],nK),a.variable(t()).define(["md"],nJ),a.variable(t("allFilters")).define("allFilters",["mutable reactDebug","filtroRegiao","ufnome","filtroEstado","filtroNascimentos","filtroPoluicao","filtroBaixoPeso","filtroMortPerinatal","filtroMortNeonatal","filtroMortInfantil","filtroIDH","ano","mutable dataFilter"],nQ),a.variable(t()).define(["md"],n1),a.variable(t("viewof colorSelect")).define("viewof colorSelect",["interfaceToggle","mutable reactDebug","aSelect","variables"],n0),a.variable(t("colorSelect")).define("colorSelect",["Generators","viewof colorSelect"],(e,t)=>e.input(t)),a.variable(t("color")).define("color",["mutable colorVar","variables","colorSelect"],n5),a.variable(t("viewof xAxisSelect")).define("viewof xAxisSelect",["interfaceToggle","mutable reactDebug","aSelect","variables"],n2),a.variable(t("xAxisSelect")).define("xAxisSelect",["Generators","viewof xAxisSelect"],(e,t)=>e.input(t)),a.variable(t("xaxis")).define("xaxis",["mutable xAxisVar","variables","xAxisSelect"],n4),a.variable(t("viewof yAxisSelect")).define("viewof yAxisSelect",["interfaceToggle","mutable reactDebug","aSelect","variables"],n3),a.variable(t("yAxisSelect")).define("yAxisSelect",["Generators","viewof yAxisSelect"],(e,t)=>e.input(t)),a.variable(t("yaxis")).define("yaxis",["mutable yAxisVar","variables","yAxisSelect"],n6),a.variable(t()).define(["md"],n7),a.variable(t("normalizeString")).define("normalizeString",n8),a.define("initial unknownData",n9),a.variable(t("mutable unknownData")).define("mutable unknownData",["Mutable","initial unknownData"],(e,t)=>new e(t)),a.variable(t("unknownData")).define("unknownData",["mutable unknownData"],e=>e.generator),a.variable(t("filteredData")).define("filteredData",["mutable unknownData","dadosMunicipio","allFilters","codigoToMunicipio","colorVar","normalizeString"],re),a.variable(t("rankStyles")).define("rankStyles",["htl"],rt),a.variable(t("rankingBox")).define("rankingBox",["interfaceToggle","htl","colorVar","aText","escalaCores","d3","alteraMenuLocalidade","filteredData","normalizeString","html"],ri),a.variable(t()).define(["md"],ra),a.variable(t("dorlingStyles")).define("dorlingStyles",["html"],rn),a.variable(t("viewof dorling")).define("viewof dorling",["interfaceToggle","remakeMapa","mutable reactDebug","limites","panel","mutable filtrarPorRolldownToggle","html","zoomInIcon","zoomOutIcon","d3","posicoesFinais","d3tip","tooltip","dadosPorCodigo","municipioPorCodigo","populacaoPorCodigo","viewof munSelecionados","posicoesPorCod","flagPath","municipios","alteraMenuLocalidade"],rr),a.variable(t("dorling")).define("dorling",["Generators","viewof dorling"],(e,t)=>e.input(t)),a.define("initial debug",ro),a.variable(t("mutable debug")).define("mutable debug",["Mutable","initial debug"],(e,t)=>new e(t)),a.variable(t("debug")).define("debug",["mutable debug"],e=>e.generator),a.variable(t("dorlingCircleConf")).define("dorlingCircleConf",["mutable reactDebug","viewof dorling","dadosPorCodigo","d3","allFilters","raio","populacaoPorCodigo","escalaCores","colorVar"],rl),a.variable(t()).define(["md"],rs),a.variable(t("zoomInIcon")).define("zoomInIcon",["html"],ru),a.variable(t("zoomOutIcon")).define("zoomOutIcon",["html"],rd),a.variable(t("makeEnlargeIcon")).define("makeEnlargeIcon",["html"],rc),a.variable(t("makeReduceIcon")).define("makeReduceIcon",["html"],rf),a.variable(t("makeRollDownIcon")).define("makeRollDownIcon",["htl"],rp),a.variable(t("makeRollUpIcon")).define("makeRollUpIcon",["htl"],rm),a.variable(t()).define(["md"],rv),a.define("initial TESTE",rb),a.variable(t("mutable TESTE")).define("mutable TESTE",["Mutable","initial TESTE"],(e,t)=>new e(t)),a.variable(t("TESTE")).define("TESTE",["mutable TESTE"],e=>e.generator),a.variable(t("updateScatterConfig")).define("updateScatterConfig",["biglayoutToggle","mutable scatterConfig"],rh),a.variable(t("scatterplotComponent")).define("scatterplotComponent",["mutable reactDebug","interfaceToggle","scatterplot"],rg),a.variable(t()).define(["scatterConfig"],rw),a.variable(t()).define(["md"],ry),a.variable(t("styles")).define("styles",["html"],rx),a.variable(t("ttipScale")).define("ttipScale",["d3","html"],rC),a.variable(t("tooltip")).define("tooltip",["d3","ttipScale","variables"],rS),a.variable(t("reactToMunSelecionados")).define("reactToMunSelecionados",["mutable reactDebug","munSelecionados","viewof dorling"],rA),a.variable(t()).define(["toc"],rk),a.variable(t()).define(["md"],rM),a.variable(t("hoverInteraction")).define("hoverInteraction",["d3"],rT),a.variable(t()).define(["md"],rD),a.variable(t("baixopesoMunAno")).define("baixopesoMunAno",["FileAttachment"],rI),a.variable(t("pm25MunAno")).define("pm25MunAno",["FileAttachment"],rE),a.variable(t("malhaBrasil")).define("malhaBrasil",["FileAttachment"],rL),a.variable(t("feicoesMunicipio")).define("feicoesMunicipio",["rewind","topojson","malhaBrasil"],rO),a.variable(t("ufnome")).define("ufnome",["FileAttachment"],rP),a.variable(t("municipioInfo")).define("municipioInfo",["FileAttachment"],rR),a.variable(t("municipioPorCodigo")).define("municipioPorCodigo",["municipioInfo"],rN),a.variable(t("posicoesPorCod")).define("posicoesPorCod",["posicoesFinais"],r$),a.variable(t("codToCodarea")).define("codToCodarea",["posicoesPorCod"],rF),a.variable(t("populacaoMunicipio")).define("populacaoMunicipio",["FileAttachment"],rj),a.variable(t("populacaoPorCodigo")).define("populacaoPorCodigo",["populacaoMunicipio"],rB),a.variable(t("populacaoLimites")).define("populacaoLimites",["d3","populacaoPorCodigo"],rG),a.variable(t("bpPorCodigo")).define("bpPorCodigo",["baixopesoMunAno","ano"],rz),a.variable(t("totalPorCodigo")).define("totalPorCodigo",["baixopesoMunAno","ano"],rV),a.variable(t("dadosPorCodigo")).define("dadosPorCodigo",["dadosMunicipio","ano"],rH),a.variable(t("bp")).define("bp",["dadosMunicipio"],rU),a.variable(t("AVGPM25")).define("AVGPM25",["dadosMunicipio"],rq),a.variable(t("obper")).define("obper",["dadosMunicipio"],r_),a.variable(t("obneo")).define("obneo",["dadosMunicipio"],rW),a.variable(t("obtotal")).define("obtotal",["dadosMunicipio"],rZ),a.variable(t("obinf")).define("obinf",["dadosMunicipio"],rX),a.variable(t("valueAnalysis")).define("valueAnalysis",["d3"],rY),a.variable(t()).define(["valueAnalysis","obper"],rK),a.variable(t()).define(["valueAnalysis","obneo"],rJ),a.variable(t()).define(["valueAnalysis","obinf"],rQ),a.variable(t()).define(["valueAnalysis","bp"],r1),a.variable(t()).define(["valueAnalysis","AVGPM25"],r0),a.variable(t()).define(["valueAnalysis","AVGPM25"],r5),a.variable(t("getCircles")).define("getCircles",["feicoesMunicipio","municipioPorCodigo","projecao","raio","populacaoPorCodigo"],r2),a.variable(t()).define(["md"],r4),a.variable(t("larguraDefault")).define("larguraDefault",r3),a.variable(t("projecao")).define("projecao",["d3","larguraDefault","feicoesMunicipio"],r6),a.variable(t("funcaoPath")).define("funcaoPath",["d3","projecao"],r7),a.variable(t("limites")).define("limites",["funcaoPath","feicoesMunicipio"],r8),a.variable(t("razaoAspecto")).define("razaoAspecto",["limites"],r9),a.variable(t()).define(["md"],oe),a.variable(t("escalaCores")).define("escalaCores",["d3","colorVar"],ot),a.variable(t("legendaEscalaCores")).define("legendaEscalaCores",["interfaceToggle","Legend","escalaCores","colorVar","d3"],oi),a.variable(t("coresCirculos")).define("coresCirculos",["d3"],oa),a.variable(t("raioMax")).define("raioMax",on),a.variable(t("raio")).define("raio",["d3","populacaoLimites"],or),a.variable(t("legendaCirculos")).define("legendaCirculos",["legendCircle","raio"],oo),a.variable(t()).define(["md"],ol),a.variable(t("posicoesFinais")).define("posicoesFinais",["FileAttachment","dadosMunicipio","feicoesMunicipio","projecao","d3","raio","populacaoPorCodigo"],os),a.variable(t()).define(["md"],ou),a.variable(t("d3")).define("d3",["require"],od),a.variable(t("d3tip")).define("d3tip",["require"],oc),a.variable(t("rewind")).define("rewind",["require"],of),a.variable(t("topojson")).define("topojson",["require"],op);let o=e.module(S);a.import("legend",o);let l=e.module(tM);a.import("checkbox",l);let s=e.module(tR);a.import("legendCircle",s);let u=e.module(t_);a.import("toc",u);let d=e.module(ie);a.import("keys",d);let c=e.module(S);a.import("Legend",c);let f=e.module(aO);a.import("scatterplot",f),a.import("municipios",f),a.import("dadosMunicipio",f),a.import("codigoToMunicipio",f),a.import("viewof munSelecionados",f),a.import("munSelecionados",f),a.import("variables",f),a.import("viewof limpar",f),a.import("limpar",f),a.import("flagPath",f),a.import("corMunNaoUsada",f),a.import("alteraMenuLocalidade",f),a.import("mutable scatterConfig",f),a.import("scatterConfig",f),a.import("mutable dataFilter",f),a.import("dataFilter",f),a.import("mutable xAxisVar",f),a.import("xAxisVar",f),a.import("mutable yAxisVar",f),a.import("yAxisVar",f),a.import("mutable colorVar",f),a.import("colorVar",f),a.variable(t()).define(["md"],om);let p=e.module(aZ);a.import("aDrawer",p),a.import("aDrawerStyles",p);let m=e.module(aj);a.import("aSlider",m),a.import("aSliderStyles",m);let v=e.module(a6);a.import("aSelect",v),a.import("aText",v),a.import("aSelectStyles",v);let b=e.module(iz);return a.import("sliderbase",b),a.import("sliderArray",b),a.import("sliderRangeBase",b),a.import("style_slider",b),a.variable(t("allStyles")).define("allStyles",["aDrawerStyles","aSliderStyles","aSelectStyles","style_slider","rankStyles","styles","dorlingStyles","htl"],ov),a}i.d(t,{Z:function(){return ob}})}}]);