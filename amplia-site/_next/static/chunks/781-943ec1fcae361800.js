"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[781],{2789:function(e,t,i){e.exports=i.p+"static/media/00a731a6f302623f44df0e6ccf0109eb8e6f987662a4a7de47532fa4c4e500e6d7b671b3263883e96ed80ec0c463b92ab37f0727785dd3041c4f5f3f817d69c5.0e85747a.json"},285:function(e,t,i){e.exports=i.p+"static/media/09f204ccffdfb2918af2b98f13ad7ca24c4ea7e07a884e38ecf0e1f26008493cc5ed81a9bec3759c8d9b28453a69b3af7367257282d736e86fd5911219781594.3ce001f0.csv"},1848:function(e,t,i){e.exports=i.p+"static/media/16b2a6ff3bd8958f70981c7dcf3d8df8963d3b090e070356369d0351a4727f07cdcb3671376d5f52bb7885407b82cbb9b91e59be48c59f2561e99be3c3826c7d.28bb8602.csv"},1644:function(e,t,i){e.exports=i.p+"static/media/286bfcab293547b0b0d2222f6055ccef1f064e020131ef4aa44c88546a061dedba121772061f7ab730196cafd5d88cccff0f3446b7f4f61452ae3c46d73fca5d.e1139741.csv"},7591:function(e,t,i){e.exports=i.p+"static/media/2880e81ce12a7c1ddfaeac0771b67ed977ff05b7a4424bcb813c8ae1ba17e4a66c6409f0bd98e4354be268ce56669464a9bcfe94aa862b9982bf7edb6dbcb13c.d68b32e1.json"},1731:function(e,t,i){e.exports=i.p+"static/media/37d83ede2d54f8dc8d4d34fbb343d76c5c35598361224edb9250e1e0cb3d4e4721e48544a66ed0b851a8f450d173ecea158bbbe8b99f9b934dceb7da0ca75362.5a589e33.csv"},9555:function(e,t,i){e.exports=i.p+"static/media/a2301ed0ed118644a516238abc5408f2db17ee67772fd9b7bb61f4680aef60798b2b5e1e9073bdd79a64b00abcdb4491337be8919af1ef13759f229644763a56.918a74b9.png"},8875:function(e,t,i){e.exports=i.p+"static/media/b46883151e041b592666544e68e6e8e4a40c8d8638624dc4b8904749fd0da9325b877aad74811fca5f10756f5b5b269a514f4e6c336ac1a64f3256a598160a4d.b9654907.csv"},5521:function(e,t,i){e.exports=i.p+"static/media/c051fbc024553912e31968b35e537d4ad3592201b5f8e7bd13fd9d02e38599c5d541a704d0858c676328babb3e5c9c35dd7c6d67240090d094882a1cad8eece4.5a9f7c51.gif"},78:function(e,t,i){e.exports=i.p+"static/media/c4a76bf56594363a92c77a42b5a59a5ceec64d0fc1d6d203a7e76e8952eba5fafa4106f11bb323e5636913f9a0377ca33c6e946cd1aa2203fab5767dbe312876.c6b4f5ae.csv"},1371:function(e,t,i){e.exports=i.p+"static/media/cceb7b1fe14fcf7fe29c3983f38219769a40ef20882b1d53a60ae5ea7d7fa4178c5f8d84067424d9530cb9f91ed9e326f443f819d4cb418dd6c915db15774481.b5ea54eb.json"},2742:function(e,t,i){e.exports=i.p+"static/media/df28d6fa9d61d14764b813e3ef9e63448e032cef21b8a16cfe40cb3f966c41f7fe6768b3c707450a18f59c50ad6ae9f64466ef8a07e657ba0a7698190d0c490f.d31e2937.csv"},6781:function(e,t,i){function a(e){return e`# Color Legend

A simple legend for a [color scale](/@d3/color-schemes). Supports [continuous](/@d3/continuous-scales), [sequential](/@d3/sequential-scales), [diverging](/@d3/diverging-scales), [quantize, quantile, threshold](/@d3/quantile-quantize-and-threshold-scales) and [ordinal](/@d3/d3-scaleordinal) scales. To use:

~~~js
import {Legend, Swatches} from "@d3/color-legend"
~~~

Then call the legend function as shown below. (For ordinal scales, also consider the swatches function.)`}function n(e,t){return e(t.scaleSequential([0,100],t.interpolateViridis),{title:"Temperature (\xb0F)"})}function r(e,t){return e(t.scaleSequentialSqrt([0,1],t.interpolateTurbo),{title:"Speed (kts)"})}function o(e,t){return e(t.scaleDiverging([-.1,0,.1],t.interpolatePiYG),{title:"Daily change",tickFormat:"+%"})}function l(e,t){return e(t.scaleDivergingSqrt([-.1,0,.1],t.interpolateRdBu),{title:"Daily change",tickFormat:"+%"})}function s(e,t){return e(t.scaleSequentialLog([1,100],t.interpolateBlues),{title:"Energy (joules)",ticks:10})}function d(e,t){return e(t.scaleSequentialQuantile(t.range(100).map(()=>Math.random()**2),t.interpolateBlues),{title:"Quantile",tickFormat:".2f"})}function u(e,t){return e(t.scaleSqrt([-100,0,100],["blue","white","red"]),{title:"Temperature (\xb0C)"})}function c(e,t){return e(t.scaleQuantize([1,10],t.schemePurples[9]),{title:"Unemployment rate (%)"})}function f(e,t){return e(t.scaleQuantile(t.range(1e3).map(t.randomNormal(100,20)),t.schemeSpectral[9]),{title:"Height (cm)",tickFormat:".0f"})}function p(e,t){return e(t.scaleThreshold([2.5,3.1,3.5,3.9,6,7,8,9.5],t.schemeRdBu[9]),{title:"Unemployment rate (%)",tickSize:0})}function m(e,t){return e(t.scaleOrdinal(["<10","10-19","20-29","30-39","40-49","50-59","60-69","70-79","≥80"],t.schemeSpectral[10]),{title:"Age (years)",tickSize:0})}function v(e){return e`But wait, there’s more!

How about swatches for ordinal color scales? Both variable-width swatches and [column layout](https://developer.mozilla.org/en-US/docs/Web/CSS/columns) are supported.`}function b(e,t){return e(t.scaleOrdinal(["blueberries","oranges","apples"],t.schemeCategory10))}function h(e,t){return e(t.scaleOrdinal(["Wholesale and Retail Trade","Manufacturing","Leisure and hospitality","Business services","Construction","Education and Health","Government","Finance","Self-employed","Other"],t.schemeTableau10),{columns:"180px"})}function g(e){return e`---

## Implementation`}function w(e){return function(t,{title:i,tickSize:a=6,width:n=320,height:r=44+a,marginTop:o=18,marginRight:l=0,marginBottom:s=16+a,marginLeft:d=0,ticks:u=n/64,tickFormat:c,tickValues:f}={}){function p(e,t=256){let i=document.createElement("canvas");i.width=t,i.height=1;let a=i.getContext("2d");for(let n=0;n<t;++n)a.fillStyle=e(n/(t-1)),a.fillRect(n,0,1,1);return i}let m=e.create("svg").attr("width",n).attr("height",r).attr("viewBox",[0,0,n,r]).style("overflow","visible").style("display","block"),v=e=>e.selectAll(".tick line").attr("y1",o+s-r),b;if(t.interpolate){let h=Math.min(t.domain().length,t.range().length);b=t.copy().rangeRound(e.quantize(e.interpolate(d,n-l),h)),m.append("image").attr("x",d).attr("y",o).attr("width",n-d-l).attr("height",r-o-s).attr("preserveAspectRatio","none").attr("xlink:href",p(t.copy().domain(e.quantize(e.interpolate(0,1),h))).toDataURL())}else if(t.interpolator){if(b=Object.assign(t.copy().interpolator(e.interpolateRound(d,n-l)),{range:()=>[d,n-l]}),m.append("image").attr("x",d).attr("y",o).attr("width",n-d-l).attr("height",r-o-s).attr("preserveAspectRatio","none").attr("xlink:href",p(t.interpolator()).toDataURL()),!b.ticks){if(void 0===f){let g=Math.round(u+1);f=e.range(g).map(i=>e.quantile(t.domain(),i/(g-1)))}"function"!=typeof c&&(c=e.format(void 0===c?",f":c))}}else if(t.invertExtent){let w=t.thresholds?t.thresholds():t.quantiles?t.quantiles():t.domain(),x=void 0===c?e=>e:"string"==typeof c?e.format(c):c;b=e.scaleLinear().domain([-1,t.range().length-1]).rangeRound([d,n-l]),m.append("g").selectAll("rect").data(t.range()).join("rect").attr("x",(e,t)=>b(t-1)).attr("y",o).attr("width",(e,t)=>b(t)-b(t-1)).attr("height",r-o-s).attr("fill",e=>e),f=e.range(w.length),c=e=>x(w[e],e)}else b=e.scaleBand().domain(t.domain()).rangeRound([d,n-l]),m.append("g").selectAll("rect").data(t.domain()).join("rect").attr("x",b).attr("y",o).attr("width",Math.max(0,b.bandwidth()-1)).attr("height",r-o-s).attr("fill",t),v=()=>{};return m.append("g").attr("transform",`translate(0,${r-s})`).call(e.axisBottom(b).ticks(u,"string"==typeof c?c:void 0).tickFormat("function"==typeof c?c:void 0).tickSize(a).tickValues(f)).call(v).call(e=>e.select(".domain").remove()).call(e=>e.append("text").attr("x",d).attr("y",o+s-r-6).attr("fill","currentColor").attr("text-anchor","start").attr("font-weight","bold").attr("class","title").text(i)),m.node()}}function x(e){return function({color:t,...i}){return e(t,i)}}function y(e,t){return function(i,{columns:a=null,format:n,unknown:r,swatchSize:o=15,swatchWidth:l=o,swatchHeight:s=o,marginLeft:d=0}={}){let u=`-swatches-${Math.random().toString(16).slice(2)}`,c=null==r?void 0:i.unknown(),f=null==c||c===e.scaleImplicit?[]:[c],p=i.domain().concat(f);return(void 0===n&&(n=e=>e===c?r:e),null!==a)?t.html`<div style="display: flex; align-items: center; margin-left: ${+d}px; min-height: 33px; font: 10px sans-serif;">
  <style>

.${u}-item {
  break-inside: avoid;
  display: flex;
  align-items: center;
  padding-bottom: 1px;
}

.${u}-label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - ${+l}px - 0.5em);
}

.${u}-swatch {
  width: ${+l}px;
  height: ${+s}px;
  margin: 0 0.5em 0 0;
}

  </style>
  <div style=${{width:"100%",columns:a}}>${p.map(e=>{let a=`${n(e)}`;return t.html`<div class=${u}-item>
      <div class=${u}-swatch style=${{background:i(e)}}></div>
      <div class=${u}-label title=${a}>${a}</div>
    </div>`})}
  </div>
</div>`:t.html`<div style="display: flex; align-items: center; min-height: 33px; margin-left: ${+d}px; font: 10px sans-serif;">
  <style>

.${u} {
  display: inline-flex;
  align-items: center;
  margin-right: 1em;
}

.${u}::before {
  content: "";
  width: ${+l}px;
  height: ${+s}px;
  margin-right: 0.5em;
  background: var(--color);
}

  </style>
  <div>${p.map(e=>t.html`<span class="${u}" style="--color: ${i(e)}">${n(e)}</span>`)}</div>`}}function C(e){return function({color:t,...i}){return e(t,i)}}function k(e,t){let i=e.module();return i.variable(t()).define(["md"],a),i.variable(t()).define(["Legend","d3"],n),i.variable(t()).define(["Legend","d3"],r),i.variable(t()).define(["Legend","d3"],o),i.variable(t()).define(["Legend","d3"],l),i.variable(t()).define(["Legend","d3"],s),i.variable(t()).define(["Legend","d3"],d),i.variable(t()).define(["Legend","d3"],u),i.variable(t()).define(["Legend","d3"],c),i.variable(t()).define(["Legend","d3"],f),i.variable(t()).define(["Legend","d3"],p),i.variable(t()).define(["Legend","d3"],m),i.variable(t()).define(["md"],v),i.variable(t()).define(["Swatches","d3"],b),i.variable(t()).define(["Swatches","d3"],h),i.variable(t()).define(["md"],g),i.variable(t("Legend")).define("Legend",["d3"],w),i.variable(t("legend")).define("legend",["Legend"],x),i.variable(t("Swatches")).define("Swatches",["d3","htl"],y),i.variable(t("swatches")).define("swatches",["Swatches"],C),i}async function S(e,t){return e`# Inputs
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
  * [\`password\`](#passwordDemo)`}function M(e){return e`| <h3>Friends & Family:</h3>  |   |
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

<br>*If you have any improvements for the bazaar, [please make your change in a fork and send it to me as a suggestion.](https://observablehq.com/@observablehq/suggestions-and-comments)*`}function A(e){return e`---
## Sliders

~~~js
import {slider} from "@jashkenas/inputs"
~~~`}function T(e){return e()}function D(e){return e({min:0,max:1,step:.01,format:".0%",description:"Zero to one, formatted as a percentage"})}function I(e){return e({min:0,max:1,step:.01,format:e=>`${Math.round(100*e)} per cent`,description:"Zero to one, formatted with a custom function"})}function E(e){return e({min:0,max:1e9,step:1e3,value:325e4,format:",",description:"Zero to one billion, in steps of one thousand, formatted as a (US) number"})}function L(e){return e({min:0,max:100,step:1,value:10,title:"Integers",description:"Integers from zero through 100"})}function R(e){return e({min:.9,max:1.1,precision:3,description:"A high precision slider example"})}function O(e){return e({min:.9,max:1.1,precision:3,submit:!0,description:"The same as a4, but only changes value on submit"})}function P(e){return e`More [fancy slider techniques](https://observablehq.com/@mootari/prime-numbers-slider).`}function $(e){return function(t={}){let{min:i=0,max:a=1,value:n=(a+i)/2,step:r="any",precision:o=2,title:l,description:s,disabled:d,getValue:u,format:c,display:f,submit:p}="number"==typeof t?{value:t}:t;return o=Math.pow(10,o),u||(u=e=>Math.round(e.valueAsNumber*o)/o),e({type:"range",title:l,description:s,submit:p,format:c,display:f,attributes:{min:i,max:a,step:r,disabled:d,value:n},getValue:u})}}function N(e){return e`---
## Buttons

~~~js
import {button} from "@jashkenas/inputs"
~~~`}function B(e){return e()}function F(e){return!this}function j(e){return e({value:"Click me",description:"We use a reference to the button below to record the time you pressed it."})}function G(e){return new Date(Date.now()).toUTCString()}function V(e){return function(t={}){let{value:i="Ok",title:a,description:n,disabled:r}="string"==typeof t?{value:t}:t,o=e({type:"button",title:a,description:n,attributes:{disabled:r,value:i}});return o.output.remove(),o}}function H(e){return e`---
## Dropdown Menus and Multiselects

~~~js
import {select} from "@jashkenas/inputs"
~~~`}function z(e){return e(["Spring","Summer","Fall","Winter"])}function U(e){return e}function q(e){return e({title:"Stooges",description:"Please pick your favorite stooge.",options:["Curly","Larry","Moe","Shemp"],value:"Moe"})}function _(e){return e}function Z(e){return e({description:"As a child, which vegetables did you refuse to eat?",options:["Spinach","Broccoli","Brussels Sprouts","Cauliflower","Kale","Turnips","Green Beans","Asparagus"],multiple:!0})}function W(e){return e}function Y(e){let t=e({title:"How are you feeling today?",options:[{label:"\uD83E\uDD37",value:"shrug"},{label:"\uD83D\uDE02",value:"tears-of-joy"},{label:"\uD83D\uDE0D",value:"loving-it"},{label:"\uD83E\uDD14",value:"hmmm"},{label:"\uD83D\uDE31",value:"yikes",disabled:!0},{label:"\uD83D\uDE08",value:"mischievous"},{label:"\uD83D\uDCA9",value:"poo"}],value:"hmmm"});return t.input.style.fontSize="30px",t.input.style.marginTop="8px",t}function X(e){return e}function K(e,t){return function(i={}){let{value:a,title:n,description:r,disabled:o,submit:l,multiple:s,size:d,options:u}=Array.isArray(i)?{options:i}:i;u=u.map(e=>"object"==typeof e?e:{value:e,label:e});let c=e({type:"select",title:n,description:r,submit:l,attributes:{disabled:o},getValue(e){let t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>e.value);return s?t:t[0]},form:t`
      <form>
        <select name="input" ${s?`multiple size="${d||u.length}"`:""}>
          ${u.map(({value:e,label:i,disabled:n})=>Object.assign(t`<option>`,{value:e,selected:Array.isArray(a)?a.includes(e):a===e,disabled:!!n&&n,textContent:i}))}
        </select>
      </form>
    `});return c.output.remove(),c}}function J(e){return e`---
## Autoselects
*A variant of an option menu, using an autocompleting text input, via HTML’s datalist element.* 

~~~js
import {autoSelect} from "@jashkenas/inputs"
~~~`}function Q(e,t){return e({options:t.objects.states.geometries.map(e=>e.properties.name),placeholder:"Search for a US state . . ."})}function ee(e){return e}function et(e,t){return function(i={}){let{value:a,title:n,description:r,disabled:o,autocomplete:l="off",placeholder:s,size:d,options:u,list:c="options"}=Array.isArray(i)?{options:i}:i,f=new Set(u),p=e({type:"text",title:n,description:r,attributes:{disabled:o},action(e){e.value=e.input.value=a||"",e.onsubmit=e=>e.preventDefault(),e.input.oninput=function(t){t.stopPropagation(),e.value=e.input.value,(!e.value||f.has(e.value))&&e.dispatchEvent(new CustomEvent("input"))}},form:t`
      <form>
         <input name="input" type="text" autocomplete="off" 
          placeholder="${s||""}" style="font-size: 1em;" list=${c}>
          <datalist id="${c}">
              ${u.map(e=>Object.assign(t`<option>`,{value:e}))}
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
~~~`}function el(e){return e()}function es(e){return e}function ed(e){return e({title:"Hometown",description:"Enter the coordinates of where you were born",value:[-122.27,37.87],submit:!0})}function eu(e){return e}function ec(e,t){return function(i={}){let{value:a=[],title:n,description:r,submit:o}=Array.isArray(i)?{value:i}:i,[l,s]=a;l=null!=l?l:"",s=null!=s?s:"";let d=e`<input name="input" type="number" autocomplete="off" min="-180" max="180" style="width: 80px;" step="any" value="${l}" />`,u=e`<input name="input" type="number" autocomplete="off" min="-90" max="90" style="width: 80px;" step="any" value="${s}" />`,c=t({type:"coordinates",title:n,description:r,submit:o,getValue(){let e=d.valueAsNumber,t=u.valueAsNumber;return[isNaN(e)?null:e,isNaN(t)?null:t]},form:e`
      <form>
        <label style="display: inline-block; font: 600 0.8rem sans-serif; margin: 6px 0 3px;">
          <span style="display: inline-block; width: 70px;">Longitude:</span>
          ${d}
        </label>
        <br>
        <label style="display: inline-block; font: 600 0.8rem sans-serif; margin: 0 0 6px;">
          <span style="display: inline-block; width: 70px;">Latitude:</span>
          ${u}
        </label>
      </form>
    `});return c.output.remove(),c}}function ef(e){return e` ---
## World Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {worldMapCoordinates} from "@jashkenas/inputs"
~~~`}function ep(e){return e([-122.27,37.87])}function em(e){return e}function ev(e,t,i,a,n,r,o){return function(l={}){let{value:s=[],title:d,description:u,width:c=400}=Array.isArray(l)?{value:l}:l,f=Math.round(.525*c),[p,m]=s;p=null!=p?p:null,m=null!=m?m:null;let v=e`<form style="width: ${c}px;"></form>`,b=t.context2d(c,f),h=b.canvas;h.style.margin="10px 0 3px";let g=i.geoNaturalEarth1().precision(.1).fitSize([c,f],{type:"Sphere"}),w=i.geoPath(g,b).pointRadius(2.5);function x(){if(b.fillStyle="#fff",b.fillRect(0,0,c,f),b.beginPath(),w(a),b.lineWidth=.35,b.strokeStyle="#ddd",b.stroke(),b.beginPath(),w(n),b.fillStyle="#f4f4f4",b.fill(),b.beginPath(),w(r),b.strokeStyle="#aaa",b.stroke(),null!=p&&null!=m){let e={type:"MultiPoint",coordinates:[[p,m]]};b.beginPath(),w(e),b.fillStyle="#f00",b.fill()}}v.append(h),h.onclick=function(e){let{offsetX:t,offsetY:i}=e;var a=g.invert([t,i]);p=+a[0].toFixed(2),m=+a[1].toFixed(2),x(),h.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},x();let y=o({type:"worldMapCoordinates",title:d,description:u,display:t=>e`<div style="width: ${c}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-bottom: 5px;">
            <span style="color: #777;">Longitude:</span> ${null!=p?p.toFixed(2):""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${null!=m?m.toFixed(2):""} 
          </div>`,getValue:()=>[null!=p?p:null,null!=m?m:null],form:v});return y}}function eb(e){return e` ---
## U.S.A. Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {usaMapCoordinates} from "@jashkenas/inputs"
~~~`}function eh(e){return e([-122.27,37.87])}function eg(e){return e}function ew(e){return e({title:"A Mini Map",description:"Defaults to New York City",width:200,value:[-74,40.71]})}function ex(e){return e}function ey(e,t,i,a,n,r){return function(o={}){let{value:l=[],title:s,description:d,width:u=400}=Array.isArray(o)?{value:o}:o,c=u/960,f=600*c,[p,m]=l;p=null!=p?p:null,m=null!=m?m:null;let v=e`<form style="width: ${u}px;"></form>`,b=t.context2d(u,f),h=b.canvas;h.style.margin="5px 0 20px";let g=i.geoAlbersUsa().scale(1280).translate([480,300]),w=i.geoPath().context(b).pointRadius(2.5/c);function x(){if(b.clearRect(0,0,u,f),b.save(),b.scale(c,c),b.lineWidth=.35/c,b.beginPath(),w(a),b.fillStyle="#f4f4f4",b.fill(),b.beginPath(),w(n),b.strokeStyle="#aaa",b.stroke(),null!=p&&null!=m){let e={type:"MultiPoint",coordinates:[g([p,m])]};b.beginPath(),w(e),b.fillStyle="#f00",b.fill()}b.restore()}v.append(h),h.onclick=function(e){let{offsetX:t,offsetY:i}=e;var a=g.invert([t/c,i/c]);p=+a[0].toFixed(2),m=+a[1].toFixed(2),x(),h.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},x();let y=r({type:"worldMapCoordinates",title:s,description:d,display:t=>e`<div style="position: absolute; width: ${u}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-top: -18px;">
            <span style="color: #777;">Longitude:</span> ${null!=p?p:""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${null!=m?m:""} 
          </div>`,getValue:()=>[null!=p?p:null,null!=m?m:null],form:v});return y}}function eC(e){return e` ---
## Dates

*value: a YYYY-MM-DD formatted string: * \`"2016-11-08"\` 

~~~js
import {date} from "@jashkenas/inputs"
~~~`}function ek(e){return e()}function eS(e){return e({title:"2017",min:"2017-01-01",max:"2017-12-31",value:"2017-01-01",description:"Only dates within the 2017 calendar year are allowed"})}function eM(e){return function(t={}){let{min:i,max:a,value:n,title:r,description:o,disabled:l,display:s}="string"==typeof t?{value:t}:t;return e({type:"date",title:r,description:o,display:s,attributes:{min:i,max:a,disabled:l,value:n}})}}function eA(e){return e` ---
## Times

*value: a HH:MM:SS formatted string: * \`"09:30:45"\`
<br>*(Time values are always in 24-hour format)*

~~~js
import {time} from "@jashkenas/inputs"
~~~`}function eT(e){return e()}function eD(e){return e}function eI(e){return e({title:"Afternoon",min:"12:00:00",max:"23:59:59",value:"13:00:00",step:1,description:"Only times after noon are allowed, and seconds are included"})}function eE(e){return e}function eL(e){return function(t={}){let{min:i,max:a,step:n,value:r,title:o,description:l,disabled:s,display:d}="string"==typeof t?{value:t}:t,u=e({type:"time",title:o,description:l,display:d,getValue:e=>e.value?e.value:void 0,attributes:{min:i,max:a,step:n,disabled:s,value:r}});return u.output.remove(),u}}function eR(e){return e`---
## File Upload
*Use the JavaScript [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications) to work with uploaded file contents.*

\`import {file} from "@jashkenas/inputs"\``}function eO(e){return e()}function eP(e){return e({title:"Photographs",description:"Only .jpg files are allowed in this example. Choose some images, and they’ll appear in the cell below.",accept:".jpg",multiple:!0})}async function e$(e,t,i){let a=e`<div>`;for(var n=0;n<t.length;n++){t[n];let r=e`<img height="125px" style="margin: 2px;" />`;r.src=await i.url(t[n]),a.append(r)}return a}function eN(e){return function(t={}){let{multiple:i,accept:a,title:n,description:r,disabled:o}=t,l=e({type:"file",title:n,description:r,attributes:{multiple:i,accept:a,disabled:o},action(e){e.input.onchange=()=>{e.value=i?e.input.files:e.input.files[0],e.dispatchEvent(new CustomEvent("input"))}}});return l.output.remove(),l.input.onchange(),l}}function eB(e){return e`---
## Text Inputs

~~~js
import {text} from "@jashkenas/inputs"
~~~`}function eF(e){return e()}function ej(e){return e({title:"A Text Input",placeholder:"Placeholder text",description:"Note that text inputs don’t show output on the right"})}function eG(e){return e}function eV(e){return e({placeholder:"Placeholder text",description:"This input only changes value on submit",submit:"Go"})}function eH(e){return e}function ez(e){return function(t={}){let{value:i,title:a,description:n,disabled:r,autocomplete:o="off",maxlength:l,minlength:s,pattern:d,placeholder:u,size:c,submit:f,getValue:p}="string"==typeof t?{value:t}:t,m=e({type:"text",title:a,description:n,submit:f,getValue:p,attributes:{value:i,autocomplete:o,maxlength:l,minlength:s,pattern:d,placeholder:u,size:c,disabled:r}});return m.output.remove(),m.input.style.fontSize="1em",m}}function eU(e){return e`---
## Textareas

~~~js
import {textarea} from "@jashkenas/inputs"
~~~`}function eq(e){return e()}function e_(e){return e}function eZ(e){return e({title:"Your Great American Novel",placeholder:"Insert story here...",spellcheck:!0,width:"100%",rows:10,submit:"Publish"})}function eW(e){return e}function eY(e,t){return function(i={}){let{value:a="",title:n,description:r,autocomplete:o,cols:l=45,rows:s=3,width:d,height:u,maxlength:c,placeholder:f,spellcheck:p,wrap:m,submit:v,disabled:b,getValue:h}="string"==typeof i?{value:i}:i,g=e({form:t`<form><textarea style="display: block; font-size: 0.8em;" name=input>${a}</textarea></form>`,title:n,description:r,submit:v,getValue:h,attributes:{autocomplete:o,cols:l,rows:s,maxlength:c,placeholder:f,spellcheck:p,wrap:m,disabled:b}});return g.output.remove(),null!=d&&(g.input.style.width=d),null!=u&&(g.input.style.height=u),v&&(g.submit.style.margin="0"),(n||r)&&(g.input.style.margin="3px 0"),g}}function eX(e){return e`---
## Radio Buttons

~~~js
import {radio} from "@jashkenas/inputs"
~~~`}function eK(e){return e(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function eJ(e){return e}function eQ(e){return e({title:"Contact Us",description:"Please select your preferred contact method",options:[{label:"By Email",value:"email"},{label:"By Phone",value:"phone"},{label:"By Pager",value:"pager"},],value:"pager"})}function e1(e){return e}function e0(e,t){return function(i={}){let{value:a,title:n,description:r,submit:o,options:l,disabled:s}=Array.isArray(i)?{options:i}:i;l=l.map(e=>"string"==typeof e?{value:e,label:e}:e);let d=e({type:"radio",title:n,description:r,submit:o,getValue(e){if(e.checked)return e.value;let t=Array.prototype.find.call(e,e=>e.checked);return t?t.value:void 0},form:t`
      <form>
        ${l.map(({value:e,label:i},n)=>{let r=t`<input type=radio name=input ${e===a?"checked":""} style="vertical-align: top; ${0===n?"margin-left: 1px;":""}" />`;r.setAttribute("value",e),s&&r.setAttribute("value",s);let o=t`
          <label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${r}
           ${i}
          </label>`;return o})}
      </form>
    `});return d.output.remove(),d}}function e2(e){return e`---
## Checkboxes

~~~js
import {checkbox} from "@jashkenas/inputs"
~~~`}function e5(e){return e(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function e3(e){return e}function e6(e){return e({title:"Colors",description:"Please select your favorite colors",options:[{value:"r",label:"Red"},{value:"o",label:"Orange"},{value:"y",label:"Yellow"},{value:"g",label:"Green"},{value:"b",label:"Blue"},{value:"i",label:"Indigo"},{value:"v",label:"Violet"}],value:["r","g","b"],submit:!0})}function e4(e){return e}function e7(e){return e({description:"Just a single checkbox to toggle",options:[{value:"toggle",label:"On"}],value:"toggle"})}function e8(e){return e}function e9(e,t){return function(i={}){let{value:a,title:n,description:r,submit:o,disabled:l,options:s}=Array.isArray(i)?{options:i}:i;s=s.map(e=>"string"==typeof e?{value:e,label:e}:e);let d=e({type:"checkbox",title:n,description:r,submit:o,getValue:e=>e.length?Array.prototype.filter.call(e,e=>e.checked).map(e=>e.value):!!e.checked&&e.value,form:t`
      <form>
        ${s.map(({value:e,label:i},n)=>{let r=t`<input type=checkbox name=input ${(a||[]).indexOf(e)>-1?"checked":""} style="vertical-align: top; ${0===n?"margin-left: 1px;":""}" />`;r.setAttribute("value",e),l&&r.setAttribute("disabled",l);let o=t`<label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${r}
           ${i}
          </label>`;return o})}
      </form>
    `});return d.output.remove(),d}}function te(e){return e`---
## Numbers

~~~js
import {number} from "@jashkenas/inputs"
~~~`}function tt(e){return e()}function ti(e){return e}function ta(e){return e({placeholder:"13+",title:"Your Age",submit:!0})}function tn(e){return e}function tr(e){return function(t={}){let{value:i,title:a,description:n,disabled:r,placeholder:o,submit:l,step:s="any",min:d,max:u}="number"==typeof t||"string"==typeof t?{value:+t}:t,c=e({type:"number",title:a,description:n,submit:l,attributes:{value:i,placeholder:o,step:s,min:d,max:u,autocomplete:"off",disabled:r},getValue:e=>e.valueAsNumber});return c.output.remove(),c.input.style.width="auto",c.input.style.fontSize="1em",c}}function to(e){return e`---
## Passwords

~~~js
import {password} from "@jashkenas/inputs"
~~~`}function tl(e){return e({value:"password"})}function ts(e){return e}function td(e){return e({title:"Your super secret password",description:"Less than 12 characters, please.",minlength:6,maxlength:12})}function tu(e){return e}function tc(e){return function(t={}){let{value:i,title:a,description:n,disabled:r,autocomplete:o="off",maxlength:l,minlength:s,pattern:d,placeholder:u,size:c,submit:f}="string"==typeof t?{value:t}:t,p=e({type:"password",title:a,description:n,submit:f,attributes:{value:i,autocomplete:o,maxlength:l,minlength:s,pattern:d,placeholder:u,size:c,disabled:r}});return p.output.remove(),p.input.style.fontSize="1em",p}}function tf(e){return e`---
## Wishlist (Send suggestions, please!)

* 3D coordinate input (for say, positioning a camera in a WebGL sketch)
* Geocoder search with location autocomplete that returns longitude and latitude.
* Degrees or radians input, for circular things, or angles.
* A dimensions input, or a box-model input, with margin (and optionally, padding).
* A map-projection-picker input, rendering little thumbnails of all the d3-geo-projections.
* Drag and drop file upload input.
* Alternative coordinate inputs, e.g. Right Ascension, Declination.
* Other useful formatting options.

---`}function tp(e,t){return function(i){let{form:a,type:n="text",attributes:r={},action:o,getValue:l,title:s,description:d,format:u,display:c,submit:f,options:p}=i,m=e`<div></div>`;if(a||(a=e`<form>
	<input name=input type=${n} />
  </form>`),Object.keys(r).forEach(e=>{let t=r[e];null!=t&&a.input.setAttribute(e,t)}),f&&a.append(e`<input name=submit type=submit style="margin: 0 0.75em" value="${"string"==typeof f?f:"Submit"}" />`),a.append(e`<output name=output style="font: 14px Menlo, Consolas, monospace; margin-left: 0.5em;"></output>`),s&&a.prepend(e`<div style="font: 700 0.9rem sans-serif; margin-bottom: 3px;">${s}</div>`),d&&a.append(e`<div style="font-size: 0.85rem; font-style: italic; margin-top: 3px;">${d}</div>`),u&&(u="function"==typeof u?u:t.format(u)),o)o(a);else{let v=f?"onsubmit":"button"==n?"onclick":"checkbox"==n||"radio"==n?"onchange":"oninput";a[v]=e=>{e&&e.preventDefault();let t=l?l(a.input):a.input.value;if(a.output){let i=c?c(t):u?u(t):t;if(i instanceof window.Element){for(;a.output.hasChildNodes();)a.output.removeChild(a.output.lastChild);a.output.append(i)}else a.output.value=i}a.value=t,"oninput"!==v&&a.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},"oninput"!==v&&(m.oninput=e=>e&&e.stopPropagation()&&e.preventDefault()),"onsubmit"!==v&&(a.onsubmit=e=>e&&e.preventDefault()),a[v]()}for(;a.childNodes.length;)m.appendChild(a.childNodes[0]);return a.append(m),a}}function tm(e){return e("d3-geo@1")}function tv(e){return e("d3-format@1")}function tb(e){return e("topojson-client@3")}async function th(){return(await fetch("https://cdn.jsdelivr.net/npm/world-atlas@1/world/110m.json")).json()}function tg(e,t){return e.feature(t,t.objects.land)}function tw(e,t){return e.feature(t,t.objects.countries)}async function tx(){return(await fetch("https://cdn.jsdelivr.net/npm/us-atlas@^2.1/us/states-10m.json")).json()}function ty(e,t){return e.feature(t,t.objects.nation)}function tC(e,t){return e.feature(t,t.objects.states)}function tk(e){return e.geoGraticule10()}function tS(e){let t=e`License: [MIT](https://opensource.org/licenses/MIT)`;return t.value="MIT",t}function tM(e){return e`*Clip art courtesy [ClipArt ETC](https://etc.usf.edu/clipart/), radio buttons and checkboxes courtesy [Amit Sch](https://observablehq.com/@meetamit/multiple-choice-inputs).*`}function tA(e,t){let a=e.module(),n=new Map([["capstan.gif",{url:new i.U(i(5521)),mimeType:"image/gif",toString:function(){return this.url}}]]);return a.builtin("FileAttachment",e.fileAttachments(e=>n.get(e))),a.variable(t()).define(["md","FileAttachment"],S),a.variable(t()).define(["md"],M),a.variable(t("sliderDemo")).define("sliderDemo",["md"],A),a.variable(t("viewof a")).define("viewof a",["slider"],T),a.variable(t("a")).define("a",["Generators","viewof a"],(e,t)=>e.input(t)),a.variable(t("viewof a1")).define("viewof a1",["slider"],D),a.variable(t("a1")).define("a1",["Generators","viewof a1"],(e,t)=>e.input(t)),a.variable(t("viewof a1_1")).define("viewof a1_1",["slider"],I),a.variable(t("a1_1")).define("a1_1",["Generators","viewof a1_1"],(e,t)=>e.input(t)),a.variable(t("viewof a2")).define("viewof a2",["slider"],E),a.variable(t("a2")).define("a2",["Generators","viewof a2"],(e,t)=>e.input(t)),a.variable(t("viewof a3")).define("viewof a3",["slider"],L),a.variable(t("a3")).define("a3",["Generators","viewof a3"],(e,t)=>e.input(t)),a.variable(t("viewof a4")).define("viewof a4",["slider"],R),a.variable(t("a4")).define("a4",["Generators","viewof a4"],(e,t)=>e.input(t)),a.variable(t("viewof a5")).define("viewof a5",["slider"],O),a.variable(t("a5")).define("a5",["Generators","viewof a5"],(e,t)=>e.input(t)),a.variable(t()).define(["md"],P),a.variable(t("slider")).define("slider",["input"],$),a.variable(t("buttonDemo")).define("buttonDemo",["md"],N),a.variable(t("viewof b")).define("viewof b",["button"],B),a.variable(t("b")).define("b",["Generators","viewof b"],(e,t)=>e.input(t)),a.variable(t()).define(["b"],F),a.variable(t("viewof b1")).define("viewof b1",["button"],j),a.variable(t("b1")).define("b1",["Generators","viewof b1"],(e,t)=>e.input(t)),a.variable(t()).define(["b1"],G),a.variable(t("button")).define("button",["input"],V),a.variable(t("selectDemo")).define("selectDemo",["md"],H),a.variable(t("viewof dd")).define("viewof dd",["select"],z),a.variable(t("dd")).define("dd",["Generators","viewof dd"],(e,t)=>e.input(t)),a.variable(t()).define(["dd"],U),a.variable(t("viewof dd1")).define("viewof dd1",["select"],q),a.variable(t("dd1")).define("dd1",["Generators","viewof dd1"],(e,t)=>e.input(t)),a.variable(t()).define(["dd1"],_),a.variable(t("viewof dd2")).define("viewof dd2",["select"],Z),a.variable(t("dd2")).define("dd2",["Generators","viewof dd2"],(e,t)=>e.input(t)),a.variable(t()).define(["dd2"],W),a.variable(t("viewof dd3")).define("viewof dd3",["select"],Y),a.variable(t("dd3")).define("dd3",["Generators","viewof dd3"],(e,t)=>e.input(t)),a.variable(t()).define(["dd3"],X),a.variable(t("select")).define("select",["input","html"],K),a.variable(t("autoSelectDemo")).define("autoSelectDemo",["md"],J),a.variable(t("viewof as")).define("viewof as",["autoSelect","usa"],Q),a.variable(t("as")).define("as",["Generators","viewof as"],(e,t)=>e.input(t)),a.variable(t()).define(["as"],ee),a.variable(t("autoSelect")).define("autoSelect",["input","html"],et),a.variable(t("colorDemo")).define("colorDemo",["md"],ei),a.variable(t("viewof c")).define("viewof c",["color"],ea),a.variable(t("c")).define("c",["Generators","viewof c"],(e,t)=>e.input(t)),a.variable(t("viewof c1")).define("viewof c1",["color"],en),a.variable(t("c1")).define("c1",["Generators","viewof c1"],(e,t)=>e.input(t)),a.variable(t("color")).define("color",["input"],er),a.variable(t("coordinatesDemo")).define("coordinatesDemo",["md"],eo),a.variable(t("viewof coords1")).define("viewof coords1",["coordinates"],el),a.variable(t("coords1")).define("coords1",["Generators","viewof coords1"],(e,t)=>e.input(t)),a.variable(t()).define(["coords1"],es),a.variable(t("viewof coords2")).define("viewof coords2",["coordinates"],ed),a.variable(t("coords2")).define("coords2",["Generators","viewof coords2"],(e,t)=>e.input(t)),a.variable(t()).define(["coords2"],eu),a.variable(t("coordinates")).define("coordinates",["html","input"],ec),a.variable(t("worldMapCoordinatesDemo")).define("worldMapCoordinatesDemo",["md"],ef),a.variable(t("viewof worldMap1")).define("viewof worldMap1",["worldMapCoordinates"],ep),a.variable(t("worldMap1")).define("worldMap1",["Generators","viewof worldMap1"],(e,t)=>e.input(t)),a.variable(t()).define(["worldMap1"],em),a.variable(t("worldMapCoordinates")).define("worldMapCoordinates",["html","DOM","d3geo","graticule","land","countries","input"],ev),a.variable(t("usaMapCoordinatesDemo")).define("usaMapCoordinatesDemo",["md"],eb),a.variable(t("viewof usaMap1")).define("viewof usaMap1",["usaMapCoordinates"],eh),a.variable(t("usaMap1")).define("usaMap1",["Generators","viewof usaMap1"],(e,t)=>e.input(t)),a.variable(t()).define(["usaMap1"],eg),a.variable(t("viewof usaMap2")).define("viewof usaMap2",["usaMapCoordinates"],ew),a.variable(t("usaMap2")).define("usaMap2",["Generators","viewof usaMap2"],(e,t)=>e.input(t)),a.variable(t()).define(["usaMap2"],ex),a.variable(t("usaMapCoordinates")).define("usaMapCoordinates",["html","DOM","d3geo","nation","states","input"],ey),a.variable(t("dateDemo")).define("dateDemo",["md"],eC),a.variable(t("viewof d")).define("viewof d",["date"],ek),a.variable(t("d")).define("d",["Generators","viewof d"],(e,t)=>e.input(t)),a.variable(t("viewof d1")).define("viewof d1",["date"],eS),a.variable(t("d1")).define("d1",["Generators","viewof d1"],(e,t)=>e.input(t)),a.variable(t("date")).define("date",["input"],eM),a.variable(t("timeDemo")).define("timeDemo",["md"],eA),a.variable(t("viewof t")).define("viewof t",["time"],eT),a.variable(t("t")).define("t",["Generators","viewof t"],(e,t)=>e.input(t)),a.variable(t()).define(["t"],eD),a.variable(t("viewof t1")).define("viewof t1",["time"],eI),a.variable(t("t1")).define("t1",["Generators","viewof t1"],(e,t)=>e.input(t)),a.variable(t()).define(["t1"],eE),a.variable(t("time")).define("time",["input"],eL),a.variable(t("fileDemo")).define("fileDemo",["md"],eR),a.variable(t("viewof e")).define("viewof e",["file"],eO),a.variable(t("e")).define("e",["Generators","viewof e"],(e,t)=>e.input(t)),a.variable(t("viewof e1")).define("viewof e1",["file"],eP),a.variable(t("e1")).define("e1",["Generators","viewof e1"],(e,t)=>e.input(t)),a.variable(t()).define(["html","e1","Files"],e$),a.variable(t("file")).define("file",["input"],eN),a.variable(t("textDemo")).define("textDemo",["md"],eB),a.variable(t("viewof f")).define("viewof f",["text"],eF),a.variable(t("f")).define("f",["Generators","viewof f"],(e,t)=>e.input(t)),a.variable(t("viewof f1")).define("viewof f1",["text"],ej),a.variable(t("f1")).define("f1",["Generators","viewof f1"],(e,t)=>e.input(t)),a.variable(t()).define(["f1"],eG),a.variable(t("viewof f2")).define("viewof f2",["text"],eV),a.variable(t("f2")).define("f2",["Generators","viewof f2"],(e,t)=>e.input(t)),a.variable(t()).define(["f2"],eH),a.variable(t("text")).define("text",["input"],ez),a.variable(t("textareaDemo")).define("textareaDemo",["md"],eU),a.variable(t("viewof g")).define("viewof g",["textarea"],eq),a.variable(t("g")).define("g",["Generators","viewof g"],(e,t)=>e.input(t)),a.variable(t()).define(["g"],e_),a.variable(t("viewof g1")).define("viewof g1",["textarea"],eZ),a.variable(t("g1")).define("g1",["Generators","viewof g1"],(e,t)=>e.input(t)),a.variable(t()).define(["g1"],eW),a.variable(t("textarea")).define("textarea",["input","html"],eY),a.variable(t("radioDemo")).define("radioDemo",["md"],eX),a.variable(t("viewof r")).define("viewof r",["radio"],eK),a.variable(t("r")).define("r",["Generators","viewof r"],(e,t)=>e.input(t)),a.variable(t()).define(["r"],eJ),a.variable(t("viewof r1")).define("viewof r1",["radio"],eQ),a.variable(t("r1")).define("r1",["Generators","viewof r1"],(e,t)=>e.input(t)),a.variable(t()).define(["r1"],e1),a.variable(t("radio")).define("radio",["input","html"],e0),a.variable(t("checkboxDemo")).define("checkboxDemo",["md"],e2),a.variable(t("viewof ch")).define("viewof ch",["checkbox"],e5),a.variable(t("ch")).define("ch",["Generators","viewof ch"],(e,t)=>e.input(t)),a.variable(t()).define(["ch"],e3),a.variable(t("viewof ch1")).define("viewof ch1",["checkbox"],e6),a.variable(t("ch1")).define("ch1",["Generators","viewof ch1"],(e,t)=>e.input(t)),a.variable(t()).define(["ch1"],e4),a.variable(t("viewof ch3")).define("viewof ch3",["checkbox"],e7),a.variable(t("ch3")).define("ch3",["Generators","viewof ch3"],(e,t)=>e.input(t)),a.variable(t()).define(["ch3"],e8),a.variable(t("checkbox")).define("checkbox",["input","html"],e9),a.variable(t("numberDemo")).define("numberDemo",["md"],te),a.variable(t("viewof h")).define("viewof h",["number"],tt),a.variable(t("h")).define("h",["Generators","viewof h"],(e,t)=>e.input(t)),a.variable(t()).define(["h"],ti),a.variable(t("viewof h1")).define("viewof h1",["number"],ta),a.variable(t("h1")).define("h1",["Generators","viewof h1"],(e,t)=>e.input(t)),a.variable(t()).define(["h1"],tn),a.variable(t("number")).define("number",["input"],tr),a.variable(t("passwordDemo")).define("passwordDemo",["md"],to),a.variable(t("viewof i")).define("viewof i",["password"],tl),a.variable(t("i")).define("i",["Generators","viewof i"],(e,t)=>e.input(t)),a.variable(t()).define(["i"],ts),a.variable(t("viewof i1")).define("viewof i1",["password"],td),a.variable(t("i1")).define("i1",["Generators","viewof i1"],(e,t)=>e.input(t)),a.variable(t()).define(["i1"],tu),a.variable(t("password")).define("password",["input"],tc),a.variable(t()).define(["md"],tf),a.variable(t("input")).define("input",["html","d3format"],tp),a.variable(t("d3geo")).define("d3geo",["require"],tm),a.variable(t("d3format")).define("d3format",["require"],tv),a.variable(t("topojson")).define("topojson",["require"],tb),a.variable(t("world")).define("world",th),a.variable(t("land")).define("land",["topojson","world"],tg),a.variable(t("countries")).define("countries",["topojson","world"],tw),a.variable(t("usa")).define("usa",tx),a.variable(t("nation")).define("nation",["topojson","usa"],ty),a.variable(t("states")).define("states",["topojson","usa"],tC),a.variable(t("graticule")).define("graticule",["d3geo"],tk),a.variable(t("viewof license")).define("viewof license",["md"],tS),a.variable(t("license")).define("license",["Generators","viewof license"],(e,t)=>e.input(t)),a.variable(t()).define(["md"],tM),a}function tT(e){return e`# Circle Legend

To use in your notebook:

~~~js
import { legendCircle } from "@harrystevens/circle-legend";
~~~`}function tD(e,t,i){return e().scale(t.scaleSqrt().domain([0,500]).range([0,40])).tickValues([15,150,500]).tickFormat((e,t,i)=>t===i.length-1?e+" bushels of hay":e).tickSize(i)}function tI(e){return e({title:"Tick size",value:5,min:0,max:100,step:1,description:"What happens when you adjust this?"})}function tE(e,t,i,a){let n=e.select(t.svg()).attr("height",90).attr("width",180+i);return n.append("g").call(a),n.node()}function tL(){return function(e){let t,i,a=e=>e,n=5;function r(e){let r=e.select("g");r._groups[0][0]||(r=e.append("g")),r.attr("transform","translate(11,)");let o=i||t.ticks(),l=o[o.length-1];r.selectAll("circle").data(o.slice().reverse()).enter().append("circle").attr("fill","none").attr("stroke","currentColor").attr("cx",t(l)).attr("cy",t).attr("r",t),r.selectAll("line").data(o).enter().append("line").attr("stroke","currentColor").attr("stroke-dasharray","4, 2").attr("x1",t(l)).attr("x2",n+2*t(l)).attr("y1",e=>2*t(e)).attr("y2",e=>2*t(e)),r.selectAll("text").data(o).enter().append("text").attr("font-family","'Helvetica Neue', sans-serif").attr("font-size",11).attr("dx",3).attr("dy",4).attr("x",n+2*t(l)).attr("y",e=>2*t(e)).text(a)}return r.tickSize=function(e){return arguments.length?(n=+e,r):n},r.scale=function(e){return arguments.length?(t=e,r):t},r.tickFormat=function(e){return arguments.length?(a=e,r):a},r.tickValues=function(e){return arguments.length?(i=e,r):i},r}}function tR(e){return e`## Todo
* Ensure circles are drawn biggest to smallest so they can be styled
* Make it work with a threshold scale
`}function tO(e){return e("d3-scale@3","d3-selection@1")}function tP(e,t){let i=e.module();i.variable(t()).define(["md"],tT),i.variable(t("legend")).define("legend",["legendCircle","d3","tickSize"],tD),i.variable(t("viewof tickSize")).define("viewof tickSize",["slider"],tI),i.variable(t("tickSize")).define("tickSize",["Generators","viewof tickSize"],(e,t)=>e.input(t)),i.variable(t()).define(["d3","DOM","tickSize","legend"],tE),i.variable(t("legendCircle")).define("legendCircle",tL),i.variable(t()).define(["md"],tR),i.variable(t("d3")).define("d3",["require"],tO);let a=e.module(tA);return i.import("slider",a),i}function t$(e){return e`# TOC

This notebook can generate a table of contents automatically for your notebook.

\`\`\`js
import {toc} from "@harrystevens/toc"
\`\`\`

Here’s an example:`}function tN(e){return e({selector:"h2,h3,h4,h5,h6",heading:"Jump to:"})}function tB(e){return e`## Implementation`}function tF(e,t,i,a){return function(n){let r=n&&n.selector?n.selector:"h1,h2,h3,h4,h5,h6",o=n&&n.heading?n.heading:"Table of Contents";return e.observe(e=>{let n=[];function l(){let a=Math.min(...r.split(",").map(e=>+e.replace("h",""))),l=Array.from(document.querySelectorAll(r));(l.length!==n.length||l.some((e,t)=>n[t]!==e))&&e(t`<b>${o}</b><ul>${Array.from(n=l,e=>{let n=parseInt(e.tagName.slice(1));return Object.assign(t`${n>a?"<ul>".repeat(n-a)+"<li>":"<li>"}<a href=#${e.id}>${i.text(e.textContent)}`,{onclick:t=>(t.preventDefault(),e.scrollIntoView())})})}`)}let s=new a(l);return s.observe(document.body,{childList:!0,subtree:!0}),l(),()=>s.disconnect()})}}function tj(e){return e`## Hooray

It worked!`}function tG(e){return e`### This is a sub-section`}function tV(e){return e`A little text`}function tH(e){return e`#### A sub-sub-section?`}function tz(e){return e`##### A sub-sub-sub-section?`}function tU(e){return e`###### A sub-sub-sub-sub-section! (h6!)`}function tq(e){return e`### Another sub-section`}function t_(e,t){let i=e.module();return i.variable(t()).define(["md"],t$),i.variable(t()).define(["toc"],tN),i.variable(t()).define(["md"],tB),i.variable(t("toc")).define("toc",["Generators","html","DOM","MutationObserver"],tF),i.variable(t()).define(["md"],tj),i.variable(t()).define(["md"],tG),i.variable(t()).define(["md"],tV),i.variable(t()).define(["md"],tH),i.variable(t()).define(["md"],tz),i.variable(t()).define(["md"],tU),i.variable(t()).define(["md"],tq),i}function tZ(e){return e`# Keys

A reusable notebook for displaying platform-appropriate keyboard shortcuts.`}function tW(e){return e("Alt-Enter")}function tY(e){return e("Alt-Enter")}function tX(e){return e("Alt-Enter")}function tK(e){return e("Alt-Enter")}function tJ(){return/Mac|iPhone/.test(navigator.platform)}function tQ(){return navigator.platform}function t1(e){return e?{Alt:"⌥",Tab:"⇥",Up:"↑",Down:"↓",Left:"←",Right:"→",Mod:"⌘",Cmd:"⌘",Ctrl:"⌃",Shift:"⇧",Enter:"↩︎",Backspace:"⌫",Escape:"⎋"}:{Mod:"Ctrl"}}function t0(e){return e?{Alt:"Option",Backspace:"Delete",Mod:"Command",Cmd:"Command",Ctrl:"Control",Enter:"Return",Escape:"Esc","/":"Slash","?":"Question mark"}:{Mod:"Ctrl"}}function t2(e){return e?{Alt:"⌥opt",Tab:"⇥tab",Up:"↑",Down:"↓",Left:"←",Right:"→",Mod:"⌘cmd",Cmd:"⌘cmd",Ctrl:"⌃ctrl",Shift:"⇧shift",Enter:"↩︎return",Backspace:"⌫delete",Escape:"⎋esc"}:{Up:"↑",Down:"↓",Left:"←",Right:"→",Mod:"Ctrl"}}function t5(){return{Ctrl:-4,Alt:-3,Shift:-2,Mod:-1,Cmd:-1}}function t3(e){return function(t,i){let a=t.split("-");return a.slice().sort((t,i)=>(e[t]||a.indexOf(t))-(e[i]||a.indexOf(i))).map(e=>i&&i[e]||e)}}function t6(e,t){return function(i){return e(i,t).join("-")}}function t4(e,t){return function(i){return e(i,t).join("")}}function t7(e,t,i){return function(a){return e(a)+(t?` ${i(a)}`:"")}}function t8(e,t){return function(i){return e.html`<span style="font-family: var(--sans-serif); font-size: 90%;">${t(i)}</span>`}}function t9(e,t,i){return function(a){return e.html`${t(a,i).map(t=>e.html`<span style="font: 500 12px var(--sans-serif); margin: 0 4px; padding: 0 4px; border-radius: 0.25rem; box-shadow: 0 0 0 1px #dedede, 1px 1px 0 1px #e8e8e8;">${t.toLowerCase()}`)}</span>`}}function ie(e,t){let i=e.module();return i.variable(t()).define(["md"],tZ),i.variable(t()).define(["keyWords"],tW),i.variable(t()).define(["keySymbols"],tY),i.variable(t()).define(["keys"],tX),i.variable(t()).define(["buttons"],tK),i.variable(t("mac")).define("mac",tJ),i.variable(t()).define(tQ),i.variable(t("symbols")).define("symbols",["mac"],t1),i.variable(t("words")).define("words",["mac"],t0),i.variable(t("shortwords")).define("shortwords",["mac"],t2),i.variable(t("order")).define("order",t5),i.variable(t("remap")).define("remap",["order"],t3),i.variable(t("keyWords")).define("keyWords",["remap","words"],t6),i.variable(t("keySymbols")).define("keySymbols",["remap","symbols"],t4),i.variable(t("keys")).define("keys",["keyWords","symbols","keySymbols"],t7),i.variable(t("keyStyled")).define("keyStyled",["htl","keys"],t8),i.variable(t("buttons")).define("buttons",["htl","remap","shortwords"],t9),i}function it(e){return e`# Text search input with autocomplete

A reusable autocomplete search that can be used in a real-time fashion (e.g., querying an API). It exploits [\`<datalist>\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist), the HTML Data List element.`}function ii(e){return e`## How to use it in your notebook

\`\`\`javascript
import { SearchForm } from "@floatingpurr/input-autocomplete"
\`\`\``}function ia(e){return e`## Examples`}function ir(e){return e`This search form can be used with a flat array of suggestions. Let's give it a spin:`}function io(e,t){return e({placeholder:"Type-in to search...",description:"Searching en.wikipedia.org entities",async suggestion(e){let i=await t.json(`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${e}&namespace=0&limit=10&origin=*`);return i[1]}})}function il(e){return e}function is(e){return e`But it can be also useful to explore and return data from an array of objects coming from an API, e.g.:`}async function id(e){let t=await e.json("https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=Skywalker&namespace=0&limit=10&origin=*");return t[1].map((e,i)=>({entry:e,url:t[3][i]}))}function iu(e){return e`Let's see it in action:`}function ic(e,t){return e({placeholder:"Type-in to search...",description:"Searching en.wikipedia.org entities with their URLs",format:e=>e.entry,async suggestion(e){let i=await t.json(`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${e}&namespace=0&limit=10&origin=*`);return i[1].map((e,t)=>({entry:e,url:i[3][t]}))}})}function ip(e){return e}function im(e){return e`## Configuration

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
      >`,d=t.html`<div style="font-size: 0.85rem; font-style: italic; margin-top: 3px;">${r}</div>`,u=t.html`<datalist id="${a}">`,c=t.html`<div>${s}${d}${u}`,f=[];c.value="",c.onsubmit=e=>e.preventDefault(),c.onchange=e=>{let t=e.target.value;c.value=f.find(e=>o(e)==t)||"",s.blur(),c.dispatchEvent(new CustomEvent("input"))};let p=new Map,m=async e=>p.get(e)||(e?p.set(e,await l(e)):p.set(e,[]),p.get(e));return s.oninput=async e=>{f=await m(e.target.value),i.select(`#${a}`).selectAll("option").data(f).join("option").attr("value",o)},c}}function ih(e,t){let i=e.module();return i.variable(t()).define(["md"],it),i.variable(t()).define(["md"],ii),i.variable(t()).define(["md"],ia),i.variable(t()).define(["md"],ir),i.variable(t("viewof wiki")).define("viewof wiki",["SearchForm","d3"],io),i.variable(t("wiki")).define("wiki",["Generators","viewof wiki"],(e,t)=>e.input(t)),i.variable(t()).define(["wiki"],il),i.variable(t()).define(["md"],is),i.variable(t()).define(["d3"],id),i.variable(t()).define(["md"],iu),i.variable(t("viewof wikiObject")).define("viewof wikiObject",["SearchForm","d3"],ic),i.variable(t("wikiObject")).define("wikiObject",["Generators","viewof wikiObject"],(e,t)=>e.input(t)),i.variable(t()).define(["wikiObject"],ip),i.variable(t()).define(["md"],im),i.variable(t()).define(["md"],iv),i.variable(t("SearchForm")).define("SearchForm",["DOM","htl","d3"],ib),i}function ig(e){return e`# Menu Localidade`}function iw(e){return e({value:["RIO DE JANEIRO","S\xc3O PAULO"],cores:["#2F87F5","#D8C56C","#DC5988","#6CC28D"]})}function ix(e){return e.value=["RIO DE JANEIRO","BELO HORIZONTE"]}function iy(e){return e}function iC(e,t){return function(i){let a=[...i.cores],n=new Map;function r(){let t,i,r;return t=document.createElement("input"),i=document.createElement("datalist"),t.setAttribute("list","menu-municipios-options"),t.setAttribute("placeholder","Adicione um local"),t.style.borderRadius="6px",t.style.backgroundColor="white",t.style.border="dashed 2px #c4c4c4",t.style.fontFamily="Roboto Condensed",t.style.padding="3px",t.style.minWidth="150px",t.style.maxWidth="240px",t.style.height="20px",i.setAttribute("id","menu-municipios-options"),e.forEach(e=>{(r=document.createElement("option")).setAttribute("value",e.nome),i.appendChild(r)}),t.appendChild(i),t.addEventListener("input",e=>{e.stopPropagation()}),t.addEventListener("change",i=>{let r=t.value;t.value="";let o=e.find(e=>e.nome===r);if(o&&!n.has(o.cod)&&a.length>0){let s=a.pop(),d={nome:r,cor:s,cod:o.cod};o.uf&&(d.uf=o.uf),n.set(d.cod,d),l()}}),t}function o(e){let t=document.createElement("button"),i=document.createElement("span");if(t.style.backgroundColor=e.cor,t.style.display="inline-flex",t.style.alignItems="flex-center",t.style.borderRadius="6px",t.style.border="none",t.style.fontFamily="Roboto Condensed",t.style.fontWeight="700",t.style.fontSize="14px",t.style.marginRight="6px",t.style.padding="3px 5px",t.style.height="22px",i.style.lineHeight="16px",i.style.color="black",e.nome.indexOf("(")>0||e.cod<100?i.textContent=e.nome:i.textContent=e.nome+" ("+e.uf+")",t.appendChild(i),n.size>1){let r=document.createElement("span");r.style.paddingLeft="5px",r.style.fontWeight="400",r.textContent="✖",r.style.lineHeight="16px",r.style.color="black",t.appendChild(r)}return t.addEventListener("click",t=>{n.size>1&&(n.delete(e.cod),a.push(e.cor),l())}),t}function l(){for(let e of(d.innerHTML="",n.values()))d.appendChild(o(e));4==n.size?u&&(s.removeChild(u),u=null):null===u&&(u=r(),s.appendChild(u)),s.dispatchEvent(new t("input"))}let s=document.createElement("div"),d=document.createElement("div"),u=r();return d.style.display="inline",s.appendChild(d),s.appendChild(u),Object.defineProperty(s,"value",{get:()=>[...n.values()],set(t){for(let r of(n.clear(),a=[...i.cores],t)){if("string"==typeof r&&(r={nome:r}),void 0===r.cor)r.cor=a.pop();else{let o=a.indexOf(r.cor);o>=0&&a.splice(o,1)}if(void 0===r.cod){let s=e.find(e=>0==e.nome.localeCompare(r.nome));s&&(r.cod=s.cod,s.uf&&(r.uf=s.uf))}r.cod&&!n.has(r.cod)&&n.set(r.cod,r)}l()}}),s.value=i.value||[],s}}function ik(e){return e("municipios-ord@1.csv").csv({separator:";"})}function iS(e){return e.html`<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
</style>`}function iM(e,t){let a=e.module(),n=new Map([["municipios-ord@1.csv",{url:new i.U(i(78)),mimeType:"text/csv",toString:function(){return this.url}}]]);return a.builtin("FileAttachment",e.fileAttachments(e=>n.get(e))),a.variable(t()).define(["md"],ig),a.variable(t("viewof sels")).define("viewof sels",["menuLocalidade"],iw),a.variable(t("sels")).define("sels",["Generators","viewof sels"],(e,t)=>e.input(t)),a.variable(t()).define(["viewof sels"],ix),a.variable(t()).define(["sels"],iy),a.variable(t("menuLocalidade")).define("menuLocalidade",["municipios","Event"],iC),a.variable(t("municipios")).define("municipios",["FileAttachment"],ik),a.variable(t()).define(["htl"],iS),a}function iA(e){return e`# Sliders`}function iT(e){return e`## Mapa`}function iD(e){return e`### Ano`}function iI(e){return e({range:[2012,2019],value:2015,ticks:1,width:600})}function iE(e){return e`### Intervalo Número de Nascimentos`}function iL(){return function(e){return["0","10","100","1K","10K","50K","100K","1M"][e]}}function iR(e,t,i){return e({range:[0,10,1e3,1e4,1e5,5e5,1e6,1e7],ticksLabelFormatter:t},i)}function iO(e,t,i){return{ano:e,anoMesTrilha:t,nascimentosTotais:i}}function iP(e,t,i){let a=[];for(let n=2012;n<=2018;n++)for(let r=1;r<=12;r++)a.push(100*n+r);a.push(201901);let o=e=>~~(a[e]/100),l=t=>e[a[t]%100-1];return t({range:a,ticksLabelFormatter:o,handleLabelFormatter:l,ticks:12,width:600},i)}function i$(){return["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"]}function iN(e){return e`## Componentes`}function iB(){return function(e,t){let i=e.range;return e.range=[0,i.length-1],e.ticksLabelFormatter||(e.ticksLabelFormatter=e=>i[e]),t(e)}}function iF(e,t){return function(i){void 0!==i.value&&(i.value=[i.range[0],i.value]);let a=e(i);t.select(a).selectAll(".handle--custom").each(function(e){"w"===e.type&&t.select(this).remove()}),t.select(a).selectAll(".handle--w").remove(),t.select(a).select(".selection").attr("pointer-events","none").attr("opacity",0);let n=a.vl;return a.vl=function(e){return void 0===e?n.call(a)[1]:n.call(a,[0,e])},a}}function ij(e,t){return function(i){let{range:a=[0,10],width:n=400,height:r=60,marginTop:o=20,marginBottom:l=20,marginRight:s=20,marginLeft:d=20,ticks:u=1,value:c=null,dispatchOnDrag:f=!1,ticksLabelFormatter:p=e=>e,handleLabelFormatter:m=null}=i;null==c&&(c=[...a]);let v=n-d-s,b=r-o-l,h=[];for(let g=a[0];g<=a[1];g+=u)h.push(g);let w=e.scaleLinear().domain(a).range([0,v]),x=e.select(t.svg(n,r)),y=x.node(),C=x.append("g").attr("transform",`translate(${d},${o})`);x.on("click touch",t=>{let i=t.offsetX-d;if(i>=0&&i<=v){let a=e.brushSelection(M.node())||[0,0],n=a.map(e=>Math.round(w.invert(e))),r=Math.round(w.invert(i));a[r<n[0]?0:1]=w(r),M.call(S.move,a)}});let k=[0,0];var S=e.brushX().extent([[0,0],[v,b]]).on("brush",function(e){let t=e.selection;k=t;let i=t[1]-t[0];if(T.attr("transform",(e,i)=>`translate(${t[i]},0)`),m){let a=t.map(w.invert).map(Math.round);T.select("text").attr("text-anchor",e=>i>30?"middle":"w"==e.type?"end":"start").text(e=>m("w"==e.type?a[0]:a[1]))}f&&y.dispatchEvent(new CustomEvent("input"))}).on("end",function(t){if(t.sourceEvent){let i=(t.selection||k).map(w.invert).map(Math.round);e.select(this).transition().call(t.target.move,i.map(w)),f||setTimeout(e=>{y.dispatchEvent(new CustomEvent("input"))})}});let M=C.append("g").attr("class","brush").call(S);M.select(".selection").attr("fill","#151472CC").style("cursor","grab"),M.select(".overlay").attr("fill","#E5E5E5").attr("pointer-events","none");let A=M.insert("g",".selection").attr("class","ticks").selectAll(".tick").data(h).enter().append("g").attr("class","tick").attr("transform",e=>`translate(${w(e)},0)`);A.append("line").attr("x1",0).attr("x2",0).attr("y1",0).attr("y2",b).attr("stroke","#999"),p&&A.append("text").attr("x",0).attr("y",b+4).attr("dominant-baseline","hanging").attr("text-anchor","middle").attr("font-size","12px").attr("font-weight","400").attr("fill","#151472").text(p);let T=M.selectAll(".handle--custom").data([{type:"w"},{type:"e"}]).enter().append("g").attr("class","handle--custom");return T.append("rect").attr("stroke","#000").attr("fill","#151472").attr("cursor","ew-resize").attr("width",8).attr("height",b+4).attr("y",-2).attr("x",-4).attr("rx",4),m&&T.append("text").attr("fill","#F00").attr("y",-4).attr("font-size","12px").attr("font-weight","400").attr("fill","#151472"),y.vl=function(t){if(void 0===t)return(e.brushSelection(M.node())||[0,0]).map(e=>Math.round(w.invert(e)));if(t[0]>t[1]){let i=t[0];t[0]=t[1],t[1]=i}return t[1]<a[0]?(t[0]=a[0],t[1]=a[0]):t[0]>a[1]?(t[0]=a[1],t[1]=a[1]):(t[0]<a[0]&&(t[0]=a[0]),t[1]>a[1]&&(t[1]=a[1])),M.call(S.move,t.map(w)),y.dispatchEvent(new CustomEvent("input")),y},Object.defineProperty(y,"value",{get(){return this.vl()},set(e){this.vl(e)}}),y.value=c,y}}function iG(e){return e`
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
svg {
	font-family: "Roboto Condensed";
}

* { user-select: none;  }


</style>
`}function iV(e,t){let i=e.module();return i.variable(t()).define(["md"],iA),i.variable(t()).define(["md"],iT),i.variable(t()).define(["md"],iD),i.variable(t("viewof ano")).define("viewof ano",["sliderbase"],iI),i.variable(t("ano")).define("ano",["Generators","viewof ano"],(e,t)=>e.input(t)),i.variable(t()).define(["md"],iE),i.variable(t("fmt")).define("fmt",iL),i.variable(t("viewof nascimentosTotais")).define("viewof nascimentosTotais",["sliderArray","fmt","sliderRangeBase"],iR),i.variable(t("nascimentosTotais")).define("nascimentosTotais",["Generators","viewof nascimentosTotais"],(e,t)=>e.input(t)),i.variable(t("filtro")).define("filtro",["ano","anoMesTrilha","nascimentosTotais"],iO),i.variable(t("viewof anoMesTrilha")).define("viewof anoMesTrilha",["meses","sliderArray","sliderRangeBase"],iP),i.variable(t("anoMesTrilha")).define("anoMesTrilha",["Generators","viewof anoMesTrilha"],(e,t)=>e.input(t)),i.variable(t("meses")).define("meses",i$),i.variable(t()).define(["md"],iN),i.variable(t("sliderArray")).define("sliderArray",iB),i.variable(t("sliderbase")).define("sliderbase",["sliderRangeBase","d3"],iF),i.variable(t("sliderRangeBase")).define("sliderRangeBase",["d3","DOM"],ij),i.variable(t("style_slider")).define("style_slider",["html"],iG),i}function iH(e){return e`# Scatter-plot dados mapa`}function iz(e){return e.range([2012,2019],{label:"Ano",step:1,value:2012})}function iU(e){return e.button("Limpar zoom")}function iq(){return!1}function i_(e){return e`<svg width="18" height="18" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="padding:5px;background:white;border-radius:10px;">
<path d="M7.1595 0H3.47242C1.56577 0 0 1.55368 0 3.47373V6.50535C0 6.78325 0.227241 7.01057 0.505035 7.01057C0.782828 7.01057 1.01007 6.78325 1.01007 6.50535L1.01016 3.47373C1.01016 2.12209 2.10868 1.02317 3.45979 1.02317H7.13425C8.51057 1.02317 9.60914 2.12211 9.60914 3.47373V6.1264C9.60914 7.47804 8.51061 8.57696 7.1595 8.57696L2.60116 8.57687L4.12907 7.04838C4.33112 6.84625 4.33112 6.53046 4.12907 6.32833C3.92702 6.1262 3.61134 6.1262 3.40929 6.32833L1.01016 8.72836C0.808105 8.93049 0.808105 9.24628 1.01016 9.44841L3.40929 11.8484C3.51031 11.9495 3.63653 12 3.77542 12C3.90173 12 4.04063 11.9495 4.14156 11.8484C4.34361 11.6463 4.34361 11.3305 4.14156 11.1284L2.60116 9.60017H7.1595C9.07882 9.60017 10.6319 8.04649 10.6319 6.12644V3.47378C10.6319 1.55373 9.06615 4.72183e-05 7.1595 4.72183e-05L7.1595 0Z" fill="#151472"/>
</svg>`}function iZ(e,t){return e({value:["RIO DE JANEIRO"],cores:t})}function iW(e,t){return e.select(t,{label:"Eixo X",format:e=>e.name,value:t[0]})}function iY(e,t){return e.select(t,{label:"Eixo Y",format:e=>e.name,value:t[1]})}function iX(e,t){return e.select(t,{label:"Cor",format:e=>e.name,value:t[3]})}function iK(e){return e}function iJ(e){return e}function iQ(e,t){return e({range:[1,10,100,1e3,1e4,5e4,1e5],value:[1,6],ticksLabelFormatter:e=>["0","10","100","1K","10K","50K","100K"][e],width:310,height:56},t)}function i1(e){return e}function i0(e){return e}function i2(e,t){return e.scaleThreshold(t.thresholds,t.range)}function i5(e,t,i){return e(t,{width:300,title:i.label})}function i3(e,t,i,a,n,r,o,l,s,d,u,c,f,p,m,v,b,h,g,w,x){let y=t=>e.filter(e=>e.cod==t.CODMUNRES)[0].cor,C=t.plot({width:i.width,height:i.height,marginBottom:40,x:{line:!0,ticks:10,label:a.label,domain:"IDH 2010"==a.name&&n.xmin<0?a.domain:void 0},y:{line:!0,label:r.label,domain:"IDH 2010"==r.name&&n.ymin<0?r.domain:void 0},marks:[t.dot(o,{x:"x",y:"y",title:e=>l(e.municipio)+`
${a.label}: ${e.x.toFixed(2)}`+`
${r.label}: ${e.y.toFixed(2)}`+`
${s.label}: ${e.val.toFixed(2)}`,fill:e=>d(e.val),stroke:"rgba(0,0,0,0.1)"}),t.dot(u,{x:"x",y:"y",symbol:{draw:c},title:e=>l(e.municipio)+`
${a.label}: ${e.x.toFixed(2)}`+`
${r.label}: ${e.y.toFixed(2)}`+`
${s.label}: ${e.val.toFixed(2)}`,stroke:"currentColor",fill:e=>y(e),r:1.7,strokeWidth:1})]});C.style.fontFamily=i.fontFamily,C.style.fontSize=11,C=h(C=b(C=m(C=f(C,e=>{p.value=e}),e=>v(e.municipio)),e=>{3==e.attr("r")&&e.attr("stroke","black")},e=>{3==e.attr("r")&&e.attr("stroke","rgba(0,0,0,0.1)")}),[o,u]);let k=g.html`<div style="position:relative;display:inline-block;">`;return k.append(C),n.xmin!=Number.NEGATIVE_INFINITY&&(k.append(w),w.style.position="absolute",w.style.right="10px",w.style.top="10px",w.onclick=()=>{p.value=x}),k}function i6(){return{width:400,height:300,fontFamily:"Roboto Condensed"}}function i4(e,t){return i=>{let a=e.value,n=a.map(e=>e.cod).indexOf(i.cod);if(n<0){if(a.length<4){let r=Object.assign({},i);r.cor=t(a),a.push(r)}}else a.length>1&&a.splice(n,1);e.value=a}}function i7(){return null}function i8(e){return e`<br>
# Implementação`}function i9(e){return e`## Cores municípios`}function ae(){return["#2F87F5","#D8C56C","#DC5988","#6CC28D"]}function at(e){return function(t){let i=[...e];for(let a of t){let n=i.indexOf(a.cor);n>=0&&i.splice(n,1)}if(i.length>0)return i[0]}}function ai(e,t,i){return e.html`<button style="background:${t(i)};">Próxima cor`}function aa(e){return e`<br>
## Flags`}function an(e,t){let i=e.canvas(200,200),a={draw:t},n=i.getContext("2d");return n.translate(100,100),n.strokeStyle="black",a.draw(n,30),n.stroke(),i.mySymbol=a,i}function ar(){return(e,t)=>{e.moveTo(0,0),e.bezierCurveTo(0,-(.5*t),-t,-(1.3*t),-t,-(1.8*t)),e.bezierCurveTo(-t,-(2.3*t),-(.5*t),-(2.8*t),0,-(2.8*t)),e.bezierCurveTo(.5*t,-(2.8*t),t,-(2.3*t),t,-(1.8*t)),e.bezierCurveTo(t,-(1.3*t),0,-(.5*t),0,0)}}function ao(e,t){return e.svg`<svg width=100 height=100>
 <path transform="translate(50,50)" 
 d="${t(10)}" stroke=black fill=none /> 
 </svg>`}function al(){return function(e){let t=(e,t,i,a,n,r)=>`C${e},${t} ${i},${a} ${n},${r}`;return"M 0,0"+t(0,-(.5*e),-e,-(1.3*e),-e,-(1.8*e))+t(-e,-(2.3*e),-(.5*e),-(2.8*e),0,-(2.8*e))+t(.5*e,-(2.8*e),e,-(2.3*e),e,-(1.8*e))+t(e,-(1.3*e),0,-(.5*e),0,0)+"Z"}}function as(e){return e`## Dados`}function ad(e,t,i,a,n,r,o){return e.map(e=>Object.assign(e,{x:+t.field(e),y:+i.field(e),val:+a.field(e),regiao:["N","NE","SE","S","CO"][Math.floor(e.CODMUNRES/1e5)-1],municipio:n.get(e.CODMUNRES)})).filter(e=>e.municipio&&r(e)&&e.x>=o.xmin&&e.y>=o.ymin&&e.x<=o.xmax&&e.y<=o.ymax)}function au(e,t){let[i,a]=e.map(e=>[0,10,1e3,1e4,1e5,5e5,1e6][e]);return e=>e.ANO==t&&e.TOTAL>=i&&e.TOTAL<=a}function ac(e,t){let i=e.map(e=>e.cod);return t.filter(e=>i.includes(e.CODMUNRES))}function af(){return[{label:"M\xe9dia anual de polui\xe7\xe3o (\xb5g/m\xb3)",labelBarChart:"Polui\xe7\xe3o m\xe9dia por ano (\xb5g/m\xb3)",labelRanking:"Ranking por m\xe9dia de polui\xe7\xe3o",labelTooltip:"m\xe9dia anual (\xb5g/m\xb3)",name:"Polui\xe7\xe3o",field:e=>e.AVG_PM25,domain:[0,70],thresholds:[5,15,25,35],range:["#260800","#662514","#B26B59","#E5B8AC","#FFD6CC"].reverse()},{label:"Baixo peso (por cem nascidos vivos)",labelBarChart:"Baixo peso m\xe9dio anual (por 100 N.V.)",labelRanking:"Ranking por m\xe9dia de baixo peso",labelTooltip:"por cem nascidos vivos",name:"Baixo peso",field:e=>100*(e.BAIXO_PESO||0)/(e.TOTAL||1),domain:[0,200],thresholds:[5.2,6.8,8.3,100],range:["#00261D","#125948","#4D9986","#99CCC0","#CEF2E9"].reverse()},{label:"\xd3bitos perinatais (por mil nascidos vivos)",labelBarChart:"\xd3bitos perinatais anuais (por mil N.V.)",labelRanking:"Ranking por m\xe9dia de \xf3bitos perinatais",labelTooltip:"por mil nascidos vivos",name:"Mort. Perinatal",field:e=>1e3*(e.OBITOS_PERINATAIS||0)/(e.TOTAL||1),domain:[0,20],thresholds:[0,.6,1.4,3.9],range:["#070040","#291C8C","#6359B2","#A9A3D9","#DDD9FF"].reverse()},{label:"\xd3bitos neonatais (por mil nascidos vivos)",labelBarChart:"\xd3bitos neonatais anuais (por mil N.V.)",labelRanking:"Ranking por m\xe9dia de \xf3bitos neonatais",labelTooltip:"por mil nascidos vivos",name:"Mort. Neonatal",field:e=>1e3*(e.OBITOS_NEONATAIS||0)/(e.TOTAL||1),domain:[0,30],thresholds:[0,.7,1.7,3.9],range:["#200040","#541C8C","#8659B2","#BEA3D9","#ECD9FF"].reverse()},{label:"\xd3bitos infantis (por mil nascidos vivos)",labelBarChart:"\xd3bitos infantis anuais (por mil N.V.)",labelRanking:"Ranking por m\xe9dia de \xf3bitos infantis",labelTooltip:"por mil nascidos vivos",name:"Mort. Infantil",field:e=>1e3*(e.OBITOS_INFANTIS||0)/(e.TOTAL||1),domain:[0,100],thresholds:[0,9,14,20],range:["#260024","#661461","#B259AD","#E5ACE2","#FFD9FD"].reverse()},{label:"\xcdndice de Desenvolvimento Humano (2010)",labelBarChart:"\xcdndice de Desenvolvimento Humano (2010)",labelRanking:"Ranking por IDH (2010)",labelTooltip:"",name:"IDH 2010",field:e=>e.IDH||0,domain:[.4,.9],thresholds:[.6,.65,.7,.75],range:["#001A40","#1C498C","#597DB2","#A3B8D9","#D9E8FF"].reverse()}]}function ap(e){return function(t){return e.filter(e=>e.x>=t.xmin&&e.y>=t.ymin&&e.x<=t.xmax&&e.y<=t.ymax)}}function am(){return{xmin:Number.NEGATIVE_INFINITY,ymin:Number.NEGATIVE_INFINITY,xmax:Number.POSITIVE_INFINITY,ymax:Number.POSITIVE_INFINITY}}function av(e,t){return e.value,t}function ab(e){return e`### Interação com mouse`}function ah(e){return(t,i,a)=>{let n=e.select(t).selectAll("circle");return n.on("mouseover",function(){i(e.select(this))}),n.on("mouseleave",function(){a(e.select(this))}),t}}function ag(e,t,i){return(a,n)=>{let r=e.select(a).selectAll("[aria-label=dot]>circle");r.on("dblclick",function(){n(t[e.select(this).datum()])});let o=e.select(a).selectAll("[aria-label=dot]>path");return o.on("dblclick",function(){n(i[e.select(this).datum()])}),a}}function aw(e){return function(t,i){let a=t.scale("x"),n=t.scale("y"),r={},o=e.select(t).style("user-select","none");return t.onmousedown=e=>{r.x0=r.x1=e.offsetX,r.y0=r.y1=e.offsetY,r.dx=r.dy=0,r.sel=o.append("rect").attr("fill","rgba(0,0,0,0.2)")},t.onmousemove=e=>{e.buttons&&([r.x1,r.y1]=[e.offsetX,e.offsetY],r.dx=Math.abs(r.x1-r.x0),r.dy=Math.abs(r.y1-r.y0),r.x=Math.min(r.x0,r.x1),r.y=Math.min(r.y0,r.y1),r.sel.attr("x",r.x),r.sel.attr("y",r.y),r.sel.attr("width",r.dx),r.sel.attr("height",r.dy))},t.onmouseup=e=>{r.sel.remove(),r.dx>2&&r.dy>2&&i({xmin:Math.min(a.invert(r.x0),a.invert(r.x1)),xmax:Math.max(a.invert(r.x0),a.invert(r.x1)),ymin:Math.min(n.invert(r.y0),n.invert(r.y1)),ymax:Math.max(n.invert(r.y0),n.invert(r.y1))})},t}}function ax(e){return e`### Animação`}function ay(){return[]}function aC(e,t){return function(i,a){let n=a.map((t,i)=>({dataset:t,map:new Map,oldMap:e.value[i]?e.value[i].map:new Map}));return t.select(i).selectAll("g[aria-label=dot]").each(function(e,i){let a=t.select(this),{dataset:r,map:o,oldMap:l}=n[i];a.selectAll("circle").each(function(e,i){let a=t.select(this),n=r[i].CODMUNRES,s={cx:+a.attr("cx"),cy:+a.attr("cy")};if(o.set(n,s),l.has(n)){let d=l.get(n);a.attr("cx",d.cx),a.attr("newcx",s.cx),a.attr("cy",d.cy),a.attr("newcy",s.cy)}})}),t.select(i).selectAll("circle[newcx]").transition().duration(1500).attr("cx",function(){return t.select(this).attr("newcx")}).attr("cy",function(){return t.select(this).attr("newcy")}),e.value=n,i}}function ak(e){return e`### Seleção de município por nome`}function aS(e,t,i,a){return function(){let n=e.html`<div style="caret-color:transparent;display:inline;tabindex=-1">`,r=[],o=e=>(e=e.toUpperCase(),t.filter(t=>t.municipio.includes(e)).sort((e,t)=>e.municipio.localeCompare(t.municipio))),l=()=>i({placeholder:"Novo local...",format:e=>e.municipio,suggestion:o}),s=()=>{for(let t of(n.innerHTML="",r)){let i=e.html`<span style="padding:0px 4px;font-size:10pt;"> ⊝ </span>`;i.onclick=()=>{r.splice(r.indexOf(t),1),s()},n.append(e.html`<button style="padding-right:0px;border-radius:15px;border-width:thin;
                 font-size:8pt;margin-right:2px;caret-color: transparent">
                 ${a(t)} ${i}`)}if(r.length<4){let o=l();o.style.display="inline",o.style.caretColor="black",n.append(o),o.focus(),o.addEventListener("change",()=>{""!=o.value&&0>r.indexOf(o.value)&&r.push(o.value),s()})}n.value=r,n.dispatchEvent(new CustomEvent("input"))},d=e=>{r=e,s()};return s(),n.setValue=d,n}}function aM(e){return e`## Dados`}async function aA(e,t){return new Map(e.dsvFormat(";").parse(await t("regiaosaude.csv").text()).map(e=>[e.CODMUNRES,`${e.UF}, ${e.REGIAOSAUDE}`]))}function aT(e){return new Set(e.values())}function aD(e){return new Map(e.map(e=>[e.cod,e]))}function aI(e){return function(t){try{if(")"==t.nome[t.nome.length-1])return t.nome;return`${t.nome} (${t.uf})`}catch(i){return e.value={error:i,registro:t},"UNKNOWN"}}}function aE(e){return e("dadosMunicipio.csv").csv()}function aL(e){return e.html`<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
</style>`}function aR(e,t){let a=e.module();function n(){return this.url}let r=new Map([["dadosMunicipio.csv",{url:new i.U(i(1731)),mimeType:"text/csv",toString:n}],["regiaosaude.csv",{url:new i.U(i(2742)),mimeType:"text/csv",toString:n}]]);a.builtin("FileAttachment",e.fileAttachments(e=>r.get(e))),a.variable(t()).define(["md"],iH),a.variable(t("viewof ano")).define("viewof ano",["Inputs"],iz),a.variable(t("ano")).define("ano",["Generators","viewof ano"],(e,t)=>e.input(t)),a.variable(t("viewof limpar")).define("viewof limpar",["Inputs"],iU),a.variable(t("limpar")).define("limpar",["Generators","viewof limpar"],(e,t)=>e.input(t)),a.define("initial clearWindowSelection",iq),a.variable(t("mutable clearWindowSelection")).define("mutable clearWindowSelection",["Mutable","initial clearWindowSelection"],(e,t)=>new e(t)),a.variable(t("clearWindowSelection")).define("clearWindowSelection",["mutable clearWindowSelection"],e=>e.generator),a.variable(t("clearButton")).define("clearButton",["svg"],i_),a.variable(t("viewof munSelecionados")).define("viewof munSelecionados",["menuLocalidade","coresMunicipios"],iZ),a.variable(t("munSelecionados")).define("munSelecionados",["Generators","viewof munSelecionados"],(e,t)=>e.input(t)),a.variable(t("viewof xAxisSel")).define("viewof xAxisSel",["Inputs","variables"],iW),a.variable(t("xAxisSel")).define("xAxisSel",["Generators","viewof xAxisSel"],(e,t)=>e.input(t)),a.variable(t("viewof yAxisSel")).define("viewof yAxisSel",["Inputs","variables"],iY),a.variable(t("yAxisSel")).define("yAxisSel",["Generators","viewof yAxisSel"],(e,t)=>e.input(t)),a.variable(t("viewof colorSel")).define("viewof colorSel",["Inputs","variables"],iX),a.variable(t("colorSel")).define("colorSel",["Generators","viewof colorSel"],(e,t)=>e.input(t)),a.variable(t()).define(["colorSel"],iK),a.define("initial colorVar",["colorSel"],iJ),a.variable(t("mutable colorVar")).define("mutable colorVar",["Mutable","initial colorVar"],(e,t)=>new e(t)),a.variable(t("colorVar")).define("colorVar",["mutable colorVar"],e=>e.generator),a.variable(t("viewof intervaloNascimentos")).define("viewof intervaloNascimentos",["sliderArray","sliderRangeBase"],iQ),a.variable(t("intervaloNascimentos")).define("intervaloNascimentos",["Generators","viewof intervaloNascimentos"],(e,t)=>e.input(t)),a.define("initial xAxisVar",["xAxisSel"],i1),a.variable(t("mutable xAxisVar")).define("mutable xAxisVar",["Mutable","initial xAxisVar"],(e,t)=>new e(t)),a.variable(t("xAxisVar")).define("xAxisVar",["mutable xAxisVar"],e=>e.generator),a.define("initial yAxisVar",["yAxisSel"],i0),a.variable(t("mutable yAxisVar")).define("mutable yAxisVar",["Mutable","initial yAxisVar"],(e,t)=>new e(t)),a.variable(t("yAxisVar")).define("yAxisVar",["mutable yAxisVar"],e=>e.generator),a.variable(t("colorScale")).define("colorScale",["d3","colorVar"],i2),a.variable(t("colorLegend")).define("colorLegend",["Legend","colorScale","colorVar"],i5),a.variable(t("scatterplot")).define("scatterplot",["munSelecionados","Plot","scatterConfig","xAxisVar","dataRange","yAxisVar","data","nomeMunicipio","colorVar","colorScale","highlightData","flagDraw","rectSelect","mutable dataRange","dblClickInteraction","alteraMenuLocalidade","hoverInteraction","applyDotAnimation","htl","clearButton","allRange"],i3),a.define("initial scatterConfig",i6),a.variable(t("mutable scatterConfig")).define("mutable scatterConfig",["Mutable","initial scatterConfig"],(e,t)=>new e(t)),a.variable(t("scatterConfig")).define("scatterConfig",["mutable scatterConfig"],e=>e.generator),a.variable(t("alteraMenuLocalidade")).define("alteraMenuLocalidade",["viewof munSelecionados","corMunNaoUsada"],i4),a.define("initial debug",i7),a.variable(t("mutable debug")).define("mutable debug",["Mutable","initial debug"],(e,t)=>new e(t)),a.variable(t("debug")).define("debug",["mutable debug"],e=>e.generator),a.variable(t()).define(["md"],i8),a.variable(t()).define(["md"],i9),a.variable(t("coresMunicipios")).define("coresMunicipios",ae),a.variable(t("corMunNaoUsada")).define("corMunNaoUsada",["coresMunicipios"],at),a.variable(t()).define(["htl","corMunNaoUsada","munSelecionados"],ai),a.variable(t()).define(["md"],aa),a.variable(t("flagCanvasTest")).define("flagCanvasTest",["DOM","flagDraw"],an),a.variable(t("flagDraw")).define("flagDraw",ar),a.variable(t("flagSvgTest")).define("flagSvgTest",["htl","flagPath"],ao),a.variable(t("flagPath")).define("flagPath",al),a.variable(t()).define(["md"],as),a.variable(t("data")).define("data",["dadosMunicipio","xAxisVar","yAxisVar","colorVar","codigoToMunicipio","dataFilter","dataRange"],ad),a.define("initial dataFilter",["intervaloNascimentos","ano"],au),a.variable(t("mutable dataFilter")).define("mutable dataFilter",["Mutable","initial dataFilter"],(e,t)=>new e(t)),a.variable(t("dataFilter")).define("dataFilter",["mutable dataFilter"],e=>e.generator),a.variable(t("highlightData")).define("highlightData",["munSelecionados","data"],ac),a.variable(t("variables")).define("variables",af),a.variable(t("selectRange")).define("selectRange",["data"],ap),a.variable(t("allRange")).define("allRange",am),a.define("initial dataRange",["mutable clearWindowSelection","allRange"],av),a.variable(t("mutable dataRange")).define("mutable dataRange",["Mutable","initial dataRange"],(e,t)=>new e(t)),a.variable(t("dataRange")).define("dataRange",["mutable dataRange"],e=>e.generator),a.variable(t()).define(["md"],ab),a.variable(t("hoverInteraction")).define("hoverInteraction",["d3"],ah),a.variable(t("dblClickInteraction")).define("dblClickInteraction",["d3","data","highlightData"],ag),a.variable(t("rectSelect")).define("rectSelect",["d3"],aw),a.variable(t()).define(["md"],ax),a.define("initial oldDataMap",ay),a.variable(t("mutable oldDataMap")).define("mutable oldDataMap",["Mutable","initial oldDataMap"],(e,t)=>new e(t)),a.variable(t("oldDataMap")).define("oldDataMap",["mutable oldDataMap"],e=>e.generator),a.variable(t("applyDotAnimation")).define("applyDotAnimation",["mutable oldDataMap","d3"],aC),a.variable(t()).define(["md"],ak),a.variable(t("munInput")).define("munInput",["htl","municipios","SearchForm","nomeMunicipio"],aS),a.variable(t()).define(["md"],aM),a.variable(t("codigoToRegiaoSaude")).define("codigoToRegiaoSaude",["d3","FileAttachment"],aA),a.variable(t("regioesSaude")).define("regioesSaude",["codigoToRegiaoSaude"],aT),a.variable(t("codigoToMunicipio")).define("codigoToMunicipio",["municipios"],aD),a.variable(t("nomeMunicipio")).define("nomeMunicipio",["mutable debug"],aI),a.variable(t("dadosMunicipio")).define("dadosMunicipio",["FileAttachment"],aE);let o=e.module(ih);a.import("SearchForm",o);let l=e.module(iM);a.import("menuLocalidade",l),a.import("municipios",l);let s=e.module(iV);a.import("sliderbase",s),a.import("sliderArray",s),a.import("sliderRangeBase",s),a.import("style_slider",s);let d=e.module(k);return a.import("Legend",d),a.variable(t("estiloFonteMenuLocalidade")).define("estiloFonteMenuLocalidade",["htl"],aL),a}function aO(e){return e`# Bar chart dados mapa`}function aP(e){return e}function a$(e,t){return e.select(t,{label:"Vari\xe1vel",format:e=>e.name,value:t[0]})}function aN(){return function(e,t){let i=new Set(e.map(e=>e.cod)),a=e.length>2?2:0;return t.filter(e=>i.has(e.CODMUNRES)).map(t=>{let i=e.findIndex(e=>e.cod==t.CODMUNRES),n=e[i],r={i,row:i%2,col:~~(i/2)};return Object.assign(r,n),Object.assign(r,t),r.ANO=r.ANO.slice(a,4),r})}}function aB(e,t,i){return e(t,i)}function aF(e,t){return function(i,a,n,r,o,l){let s=e.plot({y:{grid:!0,tickSize:0,tickPadding:3,domain:n},x:{tickSize:0,tickPadding:4,tickFormat:e=>e},width:r,height:o,marginTop:25,marginLeft:20,marginRight:5,marginBottom:15,marks:[e.barY(i,{x:e=>+e.ANO,y:a.field,fill:e=>e.cor})]}),d=t`<text x=25 y=20>${l}`;return d.style=`
    font-family: Roboto Condensed;
    font-size: 10px;
    text-anchor: start;
    font-weight: 700;
    line-height: 11px;
    letter-spacing: 0em;
    text-align: left;
  `,s.append(d),s.style=`
    font-family: Roboto Condensed;
    display:inline-block;
    border : 1px solid gray;
  `,s}}function aj(e,t,i){return e(t.filter(e=>0==e.i),i,void 0,318,150,"TEST")}function aG(e,t,i,a){return function(n,r,o,l,s){let d=e(n,r),u=t`<svg width=${l} height=${s} >`,c=n.length,[f,p]=[[1,1],[2,1],[2,2],[2,2]][c-1],[m,v]=[l/p,s/f],b=[0,Math.max(...d.map(e=>+o.field(e)))];for(let h=0;h<c;h++){let g=~~(h/2),w=h%2,x=i(d.filter(e=>e.i==h),o,b,m,v,n[h].nome),y=a.svg`<g transform=translate(${g*m},${w*v}) >${x}</g>`;u.append(y)}return u}}function aV(e,t,i,a){return e(t,i,a,300,300)}function aH(e){return e`## Vis Toggle`}function az(e){return e()}function aU(e){return e}function aq(e,t,i){return()=>{let a=e.html`<div>`;a.style=`
    display:inline-block;
    vertical-align: middle;
    line-height:0;
  `,a.value="barchart";let n=t();return a.append(n),a.onclick=()=>{a.removeChild(n),"ranking"==a.value?(a.value="barchart",n=t()):(a.value="ranking",n=i()),a.append(n),a.dispatchEvent(new CustomEvent("input"))},a}}function a_(e){return()=>e.svg`<svg width="52" height="24" viewBox="0 0 52 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="52" height="24" rx="4" fill="#151472"/>
<rect x="2" y="2" width="24" height="20" rx="3" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 8.40078C8 8.06941 8.26863 7.80078 8.6 7.80078H8.606C8.93737 7.80078 9.206 8.06941 9.206 8.40078C9.206 8.73215 8.93737 9.00078 8.606 9.00078H8.6C8.26863 9.00078 8 8.73215 8 8.40078ZM11 8.40078C11 8.06941 11.2686 7.80078 11.6 7.80078H19.4C19.7314 7.80078 20 8.06941 20 8.40078C20 8.73215 19.7314 9.00078 19.4 9.00078H11.6C11.2686 9.00078 11 8.73215 11 8.40078ZM8 12.0008C8 11.6694 8.26863 11.4008 8.6 11.4008H8.606C8.93737 11.4008 9.206 11.6694 9.206 12.0008C9.206 12.3322 8.93737 12.6008 8.606 12.6008H8.6C8.26863 12.6008 8 12.3322 8 12.0008ZM11 12.0008C11 11.6694 11.2686 11.4008 11.6 11.4008H19.4C19.7314 11.4008 20 11.6694 20 12.0008C20 12.3322 19.7314 12.6008 19.4 12.6008H11.6C11.2686 12.6008 11 12.3322 11 12.0008ZM8 15.6008C8 15.2694 8.26863 15.0008 8.6 15.0008H8.606C8.93737 15.0008 9.206 15.2694 9.206 15.6008C9.206 15.9322 8.93737 16.2008 8.606 16.2008H8.6C8.26863 16.2008 8 15.9322 8 15.6008ZM11 15.6008C11 15.2694 11.2686 15.0008 11.6 15.0008H19.4C19.7314 15.0008 20 15.2694 20 15.6008C20 15.9322 19.7314 16.2008 19.4 16.2008H11.6C11.2686 16.2008 11 15.9322 11 15.6008Z" fill="#151472"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.975 17C32.6298 17 32.35 16.7202 32.35 16.375L32.35 11.625C32.35 11.2798 32.6298 11 32.975 11C33.3202 11 33.6 11.2798 33.6 11.625L33.6 16.375C33.6 16.7202 33.3202 17 32.975 17Z" fill="#E5E5E5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M36.3251 17C35.9799 17 35.7001 16.7202 35.7001 16.375L35.7001 7.625C35.7001 7.27982 35.9799 7 36.3251 7C36.6703 7 36.9501 7.27982 36.9501 7.625L36.9501 16.375C36.9501 16.7202 36.6703 17 36.3251 17Z" fill="#E5E5E5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.6752 17C39.33 17 39.0502 16.7202 39.0502 16.375L39.0502 9.625C39.0502 9.27982 39.33 9 39.6752 9C40.0203 9 40.3002 9.27982 40.3002 9.625L40.3002 16.375C40.3002 16.7202 40.0203 17 39.6752 17Z" fill="#E5E5E5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M43.0253 17C42.6801 17 42.4003 16.7202 42.4003 16.375L42.4003 14.625C42.4003 14.2798 42.6801 14 43.0253 14C43.3704 14 43.6503 14.2798 43.6503 14.625L43.6503 16.375C43.6503 16.7202 43.3704 17 43.0253 17Z" fill="#E5E5E5"/>
</svg>`}function aZ(e){return()=>e.svg`<svg width="52" height="24" viewBox="0 0 52 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="52" height="24" rx="4" fill="#151472"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 8.40078C8 8.06941 8.26863 7.80078 8.6 7.80078H8.606C8.93737 7.80078 9.206 8.06941 9.206 8.40078C9.206 8.73215 8.93737 9.00078 8.606 9.00078H8.6C8.26863 9.00078 8 8.73215 8 8.40078ZM11 8.40078C11 8.06941 11.2686 7.80078 11.6 7.80078H19.4C19.7314 7.80078 20 8.06941 20 8.40078C20 8.73215 19.7314 9.00078 19.4 9.00078H11.6C11.2686 9.00078 11 8.73215 11 8.40078ZM8 12.0008C8 11.6694 8.26863 11.4008 8.6 11.4008H8.606C8.93737 11.4008 9.206 11.6694 9.206 12.0008C9.206 12.3322 8.93737 12.6008 8.606 12.6008H8.6C8.26863 12.6008 8 12.3322 8 12.0008ZM11 12.0008C11 11.6694 11.2686 11.4008 11.6 11.4008H19.4C19.7314 11.4008 20 11.6694 20 12.0008C20 12.3322 19.7314 12.6008 19.4 12.6008H11.6C11.2686 12.6008 11 12.3322 11 12.0008ZM8 15.6008C8 15.2694 8.26863 15.0008 8.6 15.0008H8.606C8.93737 15.0008 9.206 15.2694 9.206 15.6008C9.206 15.9322 8.93737 16.2008 8.606 16.2008H8.6C8.26863 16.2008 8 15.9322 8 15.6008ZM11 15.6008C11 15.2694 11.2686 15.0008 11.6 15.0008H19.4C19.7314 15.0008 20 15.2694 20 15.6008C20 15.9322 19.7314 16.2008 19.4 16.2008H11.6C11.2686 16.2008 11 15.9322 11 15.6008Z" fill="#E5E5E5"/>
<rect x="26" y="2" width="24" height="20" rx="3" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.975 17C32.6298 17 32.35 16.7202 32.35 16.375L32.35 11.625C32.35 11.2798 32.6298 11 32.975 11C33.3202 11 33.6 11.2798 33.6 11.625L33.6 16.375C33.6 16.7202 33.3202 17 32.975 17Z" fill="#151472"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M36.3251 17C35.9799 17 35.7001 16.7202 35.7001 16.375L35.7001 7.625C35.7001 7.27982 35.9799 7 36.3251 7C36.6703 7 36.9501 7.27982 36.9501 7.625L36.9501 16.375C36.9501 16.7202 36.6703 17 36.3251 17Z" fill="#151472"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.6752 17C39.33 17 39.0502 16.7202 39.0502 16.375L39.0502 9.625C39.0502 9.27982 39.33 9 39.6752 9C40.0203 9 40.3002 9.27982 40.3002 9.625L40.3002 16.375C40.3002 16.7202 40.0203 17 39.6752 17Z" fill="#151472"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M43.0253 17C42.6801 17 42.4003 16.7202 42.4003 16.375L42.4003 14.625C42.4003 14.2798 42.6801 14 43.0253 14C43.3704 14 43.6503 14.2798 43.6503 14.625L43.6503 16.375C43.6503 16.7202 43.3704 17 43.0253 17Z" fill="#151472"/>
</svg>`}function aW(e){return e.html`<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
</style>`}function aY(e){return e`## Imports`}function aX(e,t){let i=e.module();i.variable(t()).define(["md"],aO),i.variable(t()).define(["viewof munSelecionados"],aP),i.variable(t("viewof variable")).define("viewof variable",["Inputs","variables"],a$),i.variable(t("variable")).define("variable",["Generators","viewof variable"],(e,t)=>e.input(t)),i.variable(t("makeBarChartData")).define("makeBarChartData",aN),i.variable(t("barChartData")).define("barChartData",["makeBarChartData","munSelecionados","dadosMunicipio"],aB),i.variable(t("makeBarChart")).define("makeBarChart",["Plot","svg"],aF),i.variable(t()).define(["makeBarChart","barChartData","variable"],aj),i.variable(t("makeBarChartVis")).define("makeBarChartVis",["makeBarChartData","svg","makeBarChart","htl"],aG),i.variable(t()).define(["makeBarChartVis","munSelecionados","dadosMunicipio","variable"],aV),i.variable(t()).define(["md"],aH),i.variable(t("viewof visToggle")).define("viewof visToggle",["visToggleInput"],az),i.variable(t("visToggle")).define("visToggle",["Generators","viewof visToggle"],(e,t)=>e.input(t)),i.variable(t()).define(["visToggle"],aU),i.variable(t("visToggleInput")).define("visToggleInput",["htl","barChartSelected","rankingSelected"],aq),i.variable(t("rankingSelected")).define("rankingSelected",["htl"],a_),i.variable(t("barChartSelected")).define("barChartSelected",["htl"],aZ),i.variable(t()).define(["htl"],aW),i.variable(t()).define(["md"],aY);let a=e.module(aR);return i.import("viewof munSelecionados",a),i.import("munSelecionados",a),i.import("dadosMunicipio",a),i.import("variables",a),i}function aK(e){return e`# ASlider`}function aJ(e,t){return e({values:t.range(100),value:3})}function aQ(e,t){return e({values:t.range(100),value:[5,59]})}function a1(e,t){return function(i={}){let{height:a=80,rulerThickness:n=10,thumbThickness:r=6,thumbHeight:o=16,margin:l=10,labelDy:s=2,width:d=400,values:u=[1,2,3,4,5,6],value:c=[3,4]}=i,f=!(c instanceof Array),p=e.svg`<svg width=${d} height=${a} >`,m=t.select(p).attr("class","aslider"),v=d-l,b=(a-n)/2,h=b+n,g=e=>u[Math.round(((e=Math.max(l,Math.min(v,e)))-l)/(v-l)*(u.length-1))],w=e=>{let t=l,i=Number.MAX_VALUE;for(let a=0;a<u.length;a++){let n=(v-l)/(u.length-1)*a+l,r=Math.abs(g(n)-e);r<i&&([t,i]=[n,r])}return t};m.append("rect").attr("class","ruler").attr("width",d-2*l).attr("height",n).attr("x",l).attr("y",b);let x=m.append("rect").attr("class","range").attr("y",b).attr("height",n);m.selectAll("line.tick").data(u.slice(1,-1)).join("line").attr("class","tick").attr("x1",w).attr("x2",w).attr("y1",b).attr("y2",h),m.selectAll("text.label").data([u[0],u[u.length-1]]).join("text").attr("class","label").attr("dominant-baseline","hanging").attr("x",w).attr("y",(h+b+o)/2+s).text(e=>e);let y=m.append("rect").attr("class","thumb min").attr("width",r).attr("height",o).attr("rx",r/2),C=m.append("rect").attr("class","thumb max").attr("width",r).attr("height",o).attr("rx",r/2);f&&C.remove();let k=e=>{c=e;let t,i;f?[t,i]=[c,c]:[t,i]=c,t!=i||f?(y.attr("x",w(t)-r/2),C.attr("x",w(i)-r/2)):(y.attr("x",w(t)-r),C.attr("x",w(i))),y.attr("y",(h+b-o)/2),C.attr("y",(h+b-o)/2),x.attr("x",w(t)).attr("width",w(i)-w(t)),m.selectAll("text.thumbLabel").remove(),m.selectAll("text.thumbLabel").data([t,i]).join("text").attr("class","thumbLabel").attr("dominant-baseline","auto").attr("x",w).attr("y",(h+b-o)/2-s).text(e=>e),p.value=c,p.dispatchEvent(new CustomEvent("input"))},S=null,M=null;return m.selectAll(".thumb").on("mousedown",function(e){1==e.buttons&&(M=(S=t.select(this)).classed("min")?"min":"max")}),m.on("mousemove",function(e){if(!S)return;let t=e.offsetX,i=g(t),[a,n]=f?[c,c]:c;"min"==M?(i<=n||f)&&(a=i):i>=a&&(n=i),k(f?a:[a,n])}).on("mouseup mouseleave",e=>{S=null}),k(c),p}}function a0(e){return e.html`<style>
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

</style>`}function a2(e,t){let i=e.module();return i.variable(t()).define(["md"],aK),i.variable(t("viewof testSingle")).define("viewof testSingle",["aSlider","d3"],aJ),i.variable(t("testSingle")).define("testSingle",["Generators","viewof testSingle"],(e,t)=>e.input(t)),i.variable(t("viewof testInterval")).define("viewof testInterval",["aSlider","d3"],aQ),i.variable(t("testInterval")).define("testInterval",["Generators","viewof testInterval"],(e,t)=>e.input(t)),i.variable(t("aSlider")).define("aSlider",["htl","d3"],a1),i.variable(t("aSliderStyles")).define("aSliderStyles",["htl"],a0),i}function a5(e){return e`# ADrawer`}function a3(e,t){return e(t,{shown:!0,title:"Nascimentos",subtitle:"Exibir somente munic\xedpios com total de nascimentos entre:"})}function a6(e){return e({values:[0,10,100,1e3,1e5,1e6],value:[0,1e6],width:300,rulerThickness:16,thumbHeight:20,height:50,margin:20})}function a4(e){return e}function a7(e){return()=>e.html`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="#151472"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.76426 4.76462C3.89443 4.63445 4.10549 4.63445 4.23566 4.76462L5.99996 6.52892L7.76426 4.76462C7.89443 4.63445 8.10549 4.63445 8.23566 4.76462C8.36584 4.8948 8.36584 5.10585 8.23566 5.23603L6.23566 7.23603C6.10549 7.3662 5.89443 7.3662 5.76426 7.23603L3.76426 5.23603C3.63408 5.10585 3.63408 4.8948 3.76426 4.76462Z" fill="#E5E5E5"/>
</svg>
`}function a8(e){return()=>e.html`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="#151472"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.09763 3.76462C5.22781 3.63445 5.43886 3.63445 5.56904 3.76462L7.56904 5.76462C7.69921 5.8948 7.69921 6.10585 7.56904 6.23603L5.56904 8.23603C5.43886 8.3662 5.22781 8.3662 5.09763 8.23603C4.96746 8.10585 4.96746 7.8948 5.09763 7.76462L6.86193 6.00033L5.09763 4.23603C4.96746 4.10585 4.96746 3.8948 5.09763 3.76462Z" fill="#E5E5E5"/>
</svg>
`}function a9(e,t,i){return function(a,n={}){let{shown:r=!1,title:o="title",subtitle:l=null}=n,s=e.html`<div class=adrawer>`,d=e.html`<div class=titleArea>`,u=e.html`<div class=icon>`,c=e.html`<div class=title>${o}`;d.append(u,c);let f=e.html`<div class=contentArea>`;l&&f.append(e.html`<div class=subtitle >${l}`),f.append(a);let p=()=>{u.innerHTML="",u.append(r?t():i()),f.style.display=r?"block":"none"};return p(),d.onclick=()=>{r=!r,p()},s.append(d,f),s}}function ne(e){return e.html`<style>
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
</style>`}function nt(e){return e}function ni(e,t){let i=e.module();i.variable(t()).define(["md"],a5),i.variable(t()).define(["aDrawer","viewof filtroNascimentos"],a3),i.variable(t("viewof filtroNascimentos")).define("viewof filtroNascimentos",["aSlider"],a6),i.variable(t("filtroNascimentos")).define("filtroNascimentos",["Generators","viewof filtroNascimentos"],(e,t)=>e.input(t)),i.variable(t()).define(["filtroNascimentos"],a4),i.variable(t("chevronDown")).define("chevronDown",["htl"],a7),i.variable(t("chevronRight")).define("chevronRight",["htl"],a8),i.variable(t("aDrawer")).define("aDrawer",["htl","chevronDown","chevronRight"],a9),i.variable(t("aDrawerStyles")).define("aDrawerStyles",["htl"],ne);let a=e.module(a2);return i.import("aSlider",a),i.import("aSliderStyles",a),i.variable(t()).define(["aSliderStyles"],nt),i}function na(e){return e`# ASelect`}function nn(e){return e({options:["foo","bar","xpto"],width:300,value:"xpto",placeholder:"Select one"})}function nr(e){return e({width:300,placeholder:"\uD83D\uDD0D buscar"})}function no(e){return e}function nl(e){return function(t={}){let{placeholder:i="",width:a=200}=t,n=e.html`<input type=text class=atext placeholder=${i}>`;return n.style.width=`${a}px`,n}}function ns(e){return function(t={}){let{placeholder:i="",options:a=["abc","def","xpto"],width:n=200,value:r="xpto"}=t,o=e.html`<select class=aselect>`;for(let l of(o.style.width=`${n}px`,i&&""!=i&&o.append(e.html`<option value="" disabled selected >${i}`),a)){let s=l==r?"selected":"",d=e.html`<option value="${l}" >${l}`;s&&(d.selected=!0),o.append(d)}return o}}function nd(e,t){return t.html`<style>
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
</style>`}function nu(e){return()=>e.html`<svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.146447C0.841709 -0.0488155 1.15829 -0.0488155 1.35355 0.146447L4 2.79289L6.64645 0.146447C6.84171 -0.0488155 7.15829 -0.0488155 7.35355 0.146447C7.54882 0.341709 7.54882 0.658291 7.35355 0.853553L4.35355 3.85355C4.15829 4.04882 3.84171 4.04882 3.64645 3.85355L0.646447 0.853553C0.451184 0.658291 0.451184 0.341709 0.646447 0.146447Z" fill="black"/>
</svg>`}async function nc(e){return await e("da.png").url()}function nf(e){return new URL(e)}function np(e,t){return t.html`<div style="background:url(${e}) right; background-size:10px; background-repeat:no-repeat;">XXX  `}function nm(e,t){let a=e.module(),n=new Map([["da.png",{url:new i.U(i(9555)),mimeType:"image/png",toString:function(){return this.url}}]]);return a.builtin("FileAttachment",e.fileAttachments(e=>n.get(e))),a.variable(t()).define(["md"],na),a.variable(t()).define(["aSelect"],nn),a.variable(t("viewof term")).define("viewof term",["aText"],nr),a.variable(t("term")).define("term",["Generators","viewof term"],(e,t)=>e.input(t)),a.variable(t()).define(["term"],no),a.variable(t("aText")).define("aText",["htl"],nl),a.variable(t("aSelect")).define("aSelect",["htl"],ns),a.variable(t("aSelectStyles")).define("aSelectStyles",["daPath","htl"],nd),a.variable(t("downArrow")).define("downArrow",["htl"],nu),a.variable(t("daPath")).define("daPath",["FileAttachment"],nc),a.variable(t("daUrl")).define("daUrl",["daPath"],nf),a.variable(t()).define(["daPath","htl"],np),a}function nv(e){return e`# Amplia Saúde - Mapa
`}function nb(e){return e.html`<style>
  .containerPrincipal {
    display: grid; 
    background: #FAFAFA;
    padding:10px;
    margin:0;
    column-gap:10px;
    row-gap:10px;
    grid-template-columns: 318px 200px auto 325px;
    grid-template-rows: 55px 55px 50px 175px 140px 300px 100px;
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
    grid-row-end: 4;
    background:white;
    z-index:10;
    box-shadow: 2px 2px 6px lightgray;
  }
  div.rankingBarChart {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 6;
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
     overflow-x: hidden;
     overflow-y: auto;
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
  <div class=rankingBarChart> RANKING BARCHART </div>
  <div class=scatterplot> SCATTERPLOT </div>
  <div class=scatterplotBig>BIG</div>
  <div class=mapa> MAPA </div>
  <div class=filtrarPor> FILTRAR POR </div>
  <div class=filtrarPorSmall> FILTRAR POR SMALL</div>
</div>`}function nh(e){return e.toggle({label:"Mostrar Interface",value:!0})}function ng(){return!1}function nw(){return!1}function nx(e,t,i,a,n){for(let r of["menuPrincipal","indicadorChave","rankingBarChart","mapa","scatterplot","scatterplotBig","filtrarPor","filtrarPorSmall"]){let o=i.querySelector(`div.${r}`);o.innerHTML=r}i.querySelector("div.indicadorChave").style.display="block",a?(i.querySelector("div.scatterplot").style.display="none",i.querySelector("div.scatterplotBig").style.display="block",i.querySelector("div.rankingBarChart").style.display="none"):(i.querySelector("div.scatterplotBig").style.display="none",i.querySelector("div.scatterplot").style.display="block",i.querySelector("div.rankingBarChart").style.display="block"),n?(i.querySelector("div.filtrarPorSmall").style.display="none",i.querySelector("div.filtrarPor").style.display="block"):(i.querySelector("div.filtrarPorSmall").style.display="block",i.querySelector("div.filtrarPor").style.display="none")}function ny(e,t){let i={};for(let a of["menuPrincipal","indicadorChave","rankingBarChart","mapa","scatterplot","scatterplotBig","filtrarPor","filtrarPorSmall"]){let n=t.querySelector(`div.${a}`);i[a]={elem:n,w:n.clientWidth,h:n.clientHeight}}return i}function nC(e,t,i,a,n,r,o,l,s,d,u,c,f,p,m,v,b,h,g,w){if(e){t.menuPrincipal.elem.innerHTML="",t.menuPrincipal.elem.append(i.html`<div>${a}<br><div style="margin-top:10px">Selecione até 4 municípios com duplo clique nos gráficos</div></div>`),a.style.display="inline",a.style.paddingTop="10px",t.menuPrincipal.elem.append(n),n.style.display="inline";let x=t.indicadorChave;x.elem.innerHTML="",x.elem.append(r,i.html`<br><br>`,o);let y=t.rankingBarChart;y.elem.innerHTML="",l||y.elem.append(s);let C=l?t.scatterplotBig:t.scatterplot;C.elem.innerHTML="",d.style.display="inline-block",d.style.marginBottom="10px",d.style.lineHeight="15px",u.style.display="inline-block",u.style.float="right",u.style.marginTop="5px",u.style.lineHeight="15px";let k=l?c():f();k.style.marginLeft="5px",k.style.cursor="pointer",k.style.position="absolute",k.style.right="10px",k.style.top="10px",k.style.zIndex=20,k.onclick=()=>p.value=!p.value,C.elem.append(k,d,m,u);let S=v?t.filtrarPor:t.filtrarPorSmall,M=i.html`<div style = "display:flex; justify-content: space-between;margin-bottom:10px">`,A=i.html`<span style="display:inline">FILTRAR POR</span>`,T=v?b():h();M.onclick=()=>g.value=!g.value,M.append(A,T),S.elem.innerHTML="",S.elem.append(M),v&&S.elem.append(w)}}function nk(e,t,i){t.mapa.oldW=t.mapa.w,t.mapa.oldH=t.mapa.h,(t.mapa.elem.clientWidth!=t.mapa.w||t.mapa.elem.clientHeight!=t.mapa.h||0==t.mapa.elem.children.length)&&(t.mapa.w=t.mapa.elem.clientWidth,t.mapa.h=t.mapa.elem.clientHeight,i.value=!0)}function nS(e,t,i){e&&t.mapa.oldElem!=i&&(t.mapa.elem.innerHTML="",t.mapa.elem.append(i))}function nM(){return!1}function nA(e){return e`## Session Storage
Armazenamento da coleção de municípios`}function nT(e,t){e.setItem("municipios",JSON.stringify(t))}function nD(e){return e.getItem("municipios")}function nI(e,t){let i=e.getItem("municipios");i=i?JSON.parse(i):["RIO DE JANEIRO"],t.value=i}function nE(e){return e`## Filtros`}function nL(e){return e`### Ano`}function nR(e){return e({range:[2012,2019],value:2018,ticks:1,width:400,height:56})}function nO(e){return e`### IDH`}function nP(e,t,i){return t({range:[0,.4,.5,.6,.7,.8,1],value:[0,6],width:300,height:50,marginTop:10},i)}function n$(e,t){return e(t,{shown:!0,title:"IDH (2010)",subtitle:"Exibir somente munic\xedpios com IDH entre:"})}function nN(e){return e`### Nascimentos`}function nB(e,t,i){return t({range:[1,10,100,1e3,1e4,1e5,2e5],value:[2,6],ticksLabelFormatter:e=>["1","10","100","1K","10K","100K","200K"][e],width:300,height:56},i)}function nF(e,t){return e(t,{shown:!0,title:"Nascimentos",subtitle:"Exibir somente munic\xedpios com total de nascimentos entre:"})}function nj(e){return e`### Poluição`}function nG(e,t,i){return t({range:[5,15,25,35,45,55,65],value:[0,6],ticksLabelFormatter:e=>["5","15","25","35","45","55","65"][e],marginTop:10,width:300,height:46},i)}function nV(e,t){return e(t,{shown:!0,title:"Polui\xe7\xe3o",subtitle:"Exibir somente munic\xedpios com polui\xe7\xe3o m\xe9dia (\xb5g/m\xb3) entre:"})}function nH(e){return e`### Baixo peso`}function nz(e,t,i){return t({range:[1,5,6.5,7.5,9,100],value:[0,5],ticksLabelFormatter:e=>["1","5","6.5","7.5","9","100"][e],marginTop:10,width:300,height:46},i)}function nU(e,t){return e(t,{shown:!0,title:"Baixo Peso",subtitle:"Munic\xedpios com taxa de baixo peso (por cem nascidos vivos) entre:"})}function nq(e){return e`### Mortalidade`}function n_(e){return e`#### Perinatal`}function nZ(e,t,i){return t({range:[0,.5,1.5,2.5,5,500],value:[0,5],ticksLabelFormatter:e=>["0","0,5","1,5","2,5","5","500"][e],marginTop:10,width:300,height:46},i)}function nW(e,t){return e(t,{shown:!0,title:"Mortalidade Perinatal",subtitle:"Munic\xedpios com mortalidade perinatal (por mil nascidos vivos) entre:"})}function nY(e){return e`#### Neonatal`}function nX(e,t,i){return t({range:[0,1.5,2.5,7.5,10,500],value:[0,5],ticksLabelFormatter:e=>["0","1,5","2,5","7,5","10","500"][e],marginTop:10,width:300,height:46},i)}function nK(e,t){return e(t,{shown:!0,title:"Mortalidade Neonatal",subtitle:"Munic\xedpios com mortalidade neonatal (por mil nascidos vivos) entre:"})}function nJ(e){return e`#### Infantil`}function nQ(e,t,i){return t({range:[0,8,12,16,23,1e3],value:[0,5],ticksLabelFormatter:e=>["0","8","12","16","23","1000"][e],marginTop:10,width:300,height:46},i)}function n1(e,t){return e(t,{shown:!0,title:"Mortalidade Infantil",subtitle:"Munic\xedpios com mortalidade infatil (por mil nascidos vivos) entre:"})}function n0(e){return e`### Região`}function n2(e,t){return t({options:["Selecionar uma regi\xe3o","Centro-oeste","Nordeste","Norte","Sudeste","Sul"],width:250})}function n5(e,t,i){return e(t`<div style="padding:4px 0px 20px 10px;">${i}`,{shown:!0,title:"Regi\xe3o",subtitle:"Mostrar apenas uma regi\xe3o"})}function n3(e,t,i){return t({options:["Selecionar um estado"].concat(i.map(e=>e.name).sort()),width:250})}function n6(e,t,i){return e(t`<div style="padding:4px 0px 20px 10px;">${i}`,{shown:!0,title:"UF",subtitle:"Mostrar apenas um estado"})}function n4(e,t,i){return i({options:["Selecionar regi\xe3o de sa\xfade"].concat([...new Set([...t.values()])]),width:250})}function n7(e,t,i){return e(t`<div style="padding:4px 0px 20px 10px;">${i}`,{shown:!0,title:"Regi\xe3o de sa\xfade",subtitle:"Mostrar apenas uma regi\xe3o de sa\xfade"})}function n8(e){return e`### Caixa com todos os filtros`}function n9(e,t,i,a,n,r,o,l,s,d,u,c){let f=t.html`<div>`;return f.append(i,a,n,r,o,l,s,d,u,c),f}function re(e){return e`### Função de filtragem configurada conforme a interface`}function rt(e,t,i,a,n,r,o,l,s,d,u,c){let f=["Norte","Nordeste","Sudeste","Sul","Centro-oeste"].indexOf(e),p=t.filter(e=>e.name==i),m=p.length?+p[0].uf:null,[v,b]=a.map(e=>[1,10,100,1e3,1e4,1e5,2e5][e]),[h,g]=n.map(e=>[5,15,25,35,45,55,65][e]),[w,x]=r.map(e=>[1,5,6.5,7.5,9,100][e]),[y,C]=o.map(e=>[0,.5,1.5,2.5,5,500][e]),[k,S]=l.map(e=>[0,1.5,2.5,7.5,10,500][e]),[M,A]=s.map(e=>[0,8,12,16,23,3125][e]),[T,D]=d.map(e=>[0,.3,.4,.5,.6,.7,1][e]),I=e=>(-1==f||f==Math.floor(e.CODMUNRES/1e5)-1)&&(!m||m==Math.floor(e.CODMUNRES/1e4))&&e.IDH>=T&&e.IDH<=D&&e.ANO==u&&+e.TOTAL>=v&&+e.TOTAL<=b&&+e.AVG_PM25>=h&&+e.AVG_PM25<=g&&100*(e.BAIXO_PESO||0)/(e.TOTAL||1)>=w&&100*(e.BAIXO_PESO||0)/(e.TOTAL||1)<=x&&1e3*(e.OBITOS_PERINATAIS||0)/(e.TOTAL||1)>=y&&1e3*(e.OBITOS_PERINATAIS||0)/(e.TOTAL||1)<=C&&1e3*(e.OBITOS_NEONATAIS||0)/(e.TOTAL||1)>=k&&1e3*(e.OBITOS_NEONATAIS||0)/(e.TOTAL||1)<=S&&1e3*(e.OBITOS_INFANTIS||0)/(e.TOTAL||1)>=M&&1e3*(e.OBITOS_INFANTIS||0)/(e.TOTAL||1)<=A;return c.value=I,I}function ri(e){return e`## Variáveis`}function ra(e,t,i){return t({options:i.map(e=>e.name),width:280})}function rn(e,t,i){return e.value=t.find(e=>e.name==i),e.value}function rr(e,t,i){return t({options:i.map(e=>e.name),value:"Mort. Infantil",width:110})}function ro(e,t,i){return e.value=t.find(e=>e.name==i),e.value}function rl(e,t,i){return t({options:i.map(e=>e.name),value:"Baixo peso",width:110})}function rs(e,t,i){return e.value=t.find(e=>e.name==i),e.value}function rd(e){return e`## Ranking and Bar Chart `}function ru(e,t,i,a,n,r,o,l,s,d,u,c){let f=e.html`<div>`;f.style=`
    display:flex; 
    justify-content: space-between;
    line-height:0;
    margin-bottom: 10px;
  `;let p="ranking"==t?i.labelRanking:i.labelBarChart,m=e.html`<div class=rankTitle>${p}`,v=a?n():r();v.style.cursor="pointer",v.onclick=()=>o.value=!o.value,l.querySelector("div.rankBox").dispatchEvent(new CustomEvent("scroll",{scrollTop:0})),f.append(s,m,v);let b=e.html`<div style="max-width:290px">`;return b.append(f),"ranking"==t?b.append(l):b.append(d(u,c,i,280,260)),b}function rc(e){return e`## Ranking`}function rf(){return e=>e.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function rp(){return null}function rm(e){return e}function rv(e,t,i,a,n,r){e.value=[];let o=[];return t.filter(i).forEach(t=>{let i=a.get(t.CODMUNRES);if(!i){e.value.push(t);return}let l=i.nome,s=i.uf,d=+n.field(t);o.push({name:l,uf:s,mun:i,normName:r(l),val:d})}),o.sort((e,t)=>t.val-e.val),o}function rb(e){return e()}function rh(e,t){return function(){return e.filter(t).map(e=>{let t=Object.assign({},e.municipio);for(let i of(Object.assign(t,e),["CODMUNRES","x","y","val","municipio"]))delete t[i];return t})}}function rg(e){return e.html`<style>
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
    display: inline-block;
    vertical-align: middle;
    font-family: Roboto Condensed;
    font-size: 11px;
    font-weight: bold;
    margin-top:10px;
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
  </style>`}function rw(e,t,i,a,n,r,o,l,s,d){let u=t.html`<div class=rankBox >`;i.range;let c=a({width:280,placeholder:"\uD83D\uDD0D BUSCAR"}),f=(e,i)=>{let a=t.html`<div class=rankItem>`,l=n(e.val),s=r.hsl(l).l>.5?"black":"white",d=t.html`<div class=rank style="color:${s};background:${l};" >${i+1}`,u=t.html`<div class=name>${e.name}`,c=t.html`<div class=uf>${e.uf}`,f=e.mun;return a.append(d,u,c),a.ondblclick=()=>o(f),a};c.style.marginBottom="10px";let p=t.html`<div style="position:relative;min-width:265px;min-height:${20*l.length}px;" >`,m=t.html`<div style="position:absolute;min-width:265px;min-height:${160}px;" >`;p.append(m),u.append(p);let v=e=>{m.style.top=e+"px",m.innerHTML="";let t=~~(e/20),i=Math.min(t+10,l.length);for(let a=t;a<i;a++){let n=f(l[a],a);m.append(n)}};return u.onscroll=e=>{v(u.scrollTop)},v(0),c.oninput=e=>{let t=s(c.value);for(let i=0;i<l.length;i++)if(l[i].normName.includes(t)){u.scrollTo(0,20*i);break}},d`<div>${c}${u}`}function rx(e){return e`## Cartograma de Dorling`}function ry(e){return e`
<style>
.circle:not(.disabled):hover {
  stroke:black;
  stroke-width:1px;
}
</style>
`}function rC(e,t,i,a,n,r,o,l,s,d,u,c,f,p,m,v,b){let[[h,g],[w,x]]=i,y=a.mapa.w,C=Math.max(a.mapa.h),k=Math.max(.2,Math.min(3,(y-318*(n.value?2:1))/(w-h))),S=r`<div style="position:relative;width:${y}px;height:${C}px;">`,M=o;Object.assign(M.style,{position:"absolute",zIndex:10,top:"10px",left:e?"328px":"10px"});let A=l;Object.assign(A.style,{position:"absolute",zIndex:10,top:"38px",left:e?"328px":"10px"}),S.append(M,A),M.onclick=()=>N(1.1),A.onclick=()=>N(10/11);let T=s.create("svg").attr("width",y).attr("height",C).attr("viewBox",[0,0,y,C]).attr("id","dorling");S.append(T.node()),S.value=[],S.hovered;let D=T.append("g").attr("class","mainGroup"),I=[e?328:0,0],E=null;T.on("mousedown",function(e){E=[e.offsetX,e.offsetY],T.style("cursor","grab")}).on("mousemove",function(e){if(!E)return;let t=[e.offsetX,e.offsetY],i=[t[0]-E[0],t[1]-E[1]];I[0]+=i[0],I[1]+=i[1],D.attr("transform",`translate(${I})`),E=t}).on("mouseup",function(e){E&&(T.style("cursor","auto"),E=null)}).on("wheel",function(e){e.preventDefault(),e.stopPropagation();let t=e.deltaY<0?1.1:10/11,i=[e.offsetX,e.offsetY];N(t,i)}),D.attr("transform",`translate(${I})`);let L=D.append("g").classed("circles",!0).attr("transform",`scale(${k},${k})`),R=L.selectAll("circle").data(d).join("circle").on("dblclick",function(){f.value;let e=s.select(this);b((e=>{let t=e.data()[0].properties.codarea.slice(0,-1),i=v.filter(e=>e.cod==t);return i[0]})(e)),$()}).classed("circle",!0).attr("cx",e=>e.x).attr("cy",e=>e.y);var O=u().html((e,t)=>`
      ${c(t)}`);T.call(O),R.on("mouseover",O.show).on("mouseout",O.hide);let P=D.append("g").classed("flags",!0),$=()=>{P.selectAll("path").remove(),P.selectAll("path").data(f.value).join("path").attr("transform",e=>{let t=p.get(e.cod);return`translate(${t.x*k},${t.y*k})`}).attr("d",m(12)).attr("fill",e=>e.cor).attr("stroke","black").on("dblclick",B)};function N(e,t){let[i,a]=t||[y/2,C/2],[n,r]=I,o=Math.max(.5,Math.min(3,k*e)),[l,s]=[(i-n)/k,(a-r)/k],[d,u]=[i-l*o,a-s*o];I=[d,u],k=o,D.attr("transform",`translate(${I})`),L.attr("transform",`scale(${k},${k})`),$()}function B(){let e=s.select(this).datum();b(e),$()}function F(){let e=f.value,t=e.map(e=>e.cod);R.each(function(e){let i=s.select(this),a=t.includes(e.properties.codarea.slice(0,-1));i.classed("clicked",a)}),$()}return F(),S.updateSelected=F,S.circleSelection=R,S}function rk(){return 0}function rS(e,t,i,a,n,r,o,l){e.circleSelection.each(function(e){let s=e.properties.codarea,d=t.get(s.slice(0,-1)),u=i.select(this),c=!a(d);u.classed("disabled",c).attr("r",n(r.get(s))).attr("fill",c?"#F1F1F1":o(l.field(d)))})}function rM(e){return e`## Ícones`}function rA(e){return e`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#151472"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 6C7.567 6 6 7.567 6 9.5C6 11.433 7.567 13 9.5 13C10.443 13 11.2988 12.6271 11.9282 12.0207C11.9414 12.0036 11.9558 11.9871 11.9714 11.9714C11.9871 11.9558 12.0036 11.9414 12.0207 11.9282C12.6271 11.2988 13 10.443 13 9.5C13 7.567 11.433 6 9.5 6ZM13.0159 12.3088C13.6318 11.539 14 10.5625 14 9.5C14 7.01472 11.9853 5 9.5 5C7.01472 5 5 7.01472 5 9.5C5 11.9853 7.01472 14 9.5 14C10.5625 14 11.539 13.6318 12.3088 13.0159L14.1464 14.8536C14.3417 15.0488 14.6583 15.0488 14.8536 14.8536C15.0488 14.6583 15.0488 14.3417 14.8536 14.1464L13.0159 12.3088ZM9.5 7.5C9.77614 7.5 10 7.72386 10 8V9H11C11.2761 9 11.5 9.22386 11.5 9.5C11.5 9.77614 11.2761 10 11 10H10V11C10 11.2761 9.77614 11.5 9.5 11.5C9.22386 11.5 9 11.2761 9 11V10H8C7.72386 10 7.5 9.77614 7.5 9.5C7.5 9.22386 7.72386 9 8 9H9V8C9 7.72386 9.22386 7.5 9.5 7.5Z" fill="#E5E5E5"/>
</svg>`}function rT(e){return e`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#151472"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 6C7.567 6 6 7.567 6 9.5C6 11.433 7.567 13 9.5 13C10.443 13 11.2988 12.6271 11.9282 12.0207C11.9414 12.0036 11.9558 11.9871 11.9714 11.9714C11.9871 11.9558 12.0036 11.9414 12.0207 11.9282C12.6271 11.2988 13 10.443 13 9.5C13 7.567 11.433 6 9.5 6ZM13.0159 12.3088C13.6318 11.539 14 10.5625 14 9.5C14 7.01472 11.9853 5 9.5 5C7.01472 5 5 7.01472 5 9.5C5 11.9853 7.01472 14 9.5 14C10.5625 14 11.539 13.6318 12.3088 13.0159L14.1464 14.8536C14.3417 15.0488 14.6583 15.0488 14.8536 14.8536C15.0488 14.6583 15.0488 14.3417 14.8536 14.1464L13.0159 12.3088ZM7.5 9.5C7.5 9.22386 7.72386 9 8 9H11C11.2761 9 11.5 9.22386 11.5 9.5C11.5 9.77614 11.2761 10 11 10H8C7.72386 10 7.5 9.77614 7.5 9.5Z" fill="#E5E5E5"/>
</svg>`}function rD(e){return()=>e`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 2C7.22386 2 7 1.77614 7 1.5C7 1.22386 7.22386 1 7.5 1H10.5C10.7761 1 11 1.22386 11 1.5V4.5C11 4.77614 10.7761 5 10.5 5C10.2239 5 10 4.77614 10 4.5V2.70711L7.35355 5.35355C7.15829 5.54882 6.84171 5.54882 6.64645 5.35355C6.45118 5.15829 6.45118 4.84171 6.64645 4.64645L9.29289 2H7.5ZM4.64645 6.64645C4.84171 6.45118 5.15829 6.45118 5.35355 6.64645C5.54882 6.84171 5.54882 7.15829 5.35355 7.35355L2.70711 10H4.5C4.77614 10 5 10.2239 5 10.5C5 10.7761 4.77614 11 4.5 11H1.5C1.22386 11 1 10.7761 1 10.5V7.5C1 7.22386 1.22386 7 1.5 7C1.77614 7 2 7.22386 2 7.5V9.29289L4.64645 6.64645Z" fill="black"/>
</svg>`}function rI(e){return()=>e`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.1464 1.14645C10.3417 0.951184 10.6583 0.951184 10.8536 1.14645C11.0488 1.34171 11.0488 1.65829 10.8536 1.85355L8.20711 4.5H10C10.2761 4.5 10.5 4.72386 10.5 5C10.5 5.27614 10.2761 5.5 10 5.5H7C6.72386 5.5 6.5 5.27614 6.5 5V2C6.5 1.72386 6.72386 1.5 7 1.5C7.27614 1.5 7.5 1.72386 7.5 2V3.79289L10.1464 1.14645ZM1.5 7C1.5 6.72386 1.72386 6.5 2 6.5H5C5.27614 6.5 5.5 6.72386 5.5 7V10C5.5 10.2761 5.27614 10.5 5 10.5C4.72386 10.5 4.5 10.2761 4.5 10V8.20711L1.85355 10.8536C1.65829 11.0488 1.34171 11.0488 1.14645 10.8536C0.951184 10.6583 0.951184 10.3417 1.14645 10.1464L3.79289 7.5H2C1.72386 7.5 1.5 7.27614 1.5 7Z" fill="black"/>
</svg>`}function rE(e){return()=>e.html`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.20544 6.45505C5.36816 6.29233 5.63198 6.29233 5.7947 6.45505L8.00007 8.66042L10.2054 6.45505C10.3682 6.29233 10.632 6.29233 10.7947 6.45505C10.9574 6.61777 10.9574 6.88158 10.7947 7.0443L8.2947 9.5443C8.13198 9.70702 7.86816 9.70702 7.70544 9.5443L5.20544 7.0443C5.04272 6.88158 5.04272 6.61777 5.20544 6.45505Z" fill="#151472"/>
</svg>`}function rL(e){return()=>e.html`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70541 6.45505C7.86813 6.29233 8.13195 6.29233 8.29467 6.45505L10.7947 8.95505C10.9574 9.11776 10.9574 9.38158 10.7947 9.5443C10.632 9.70702 10.3681 9.70702 10.2054 9.5443L8.00004 7.33893L5.79467 9.5443C5.63195 9.70702 5.36813 9.70702 5.20541 9.5443C5.04269 9.38158 5.04269 9.11776 5.20541 8.95505L7.70541 6.45505Z" fill="#151472"/>
</svg>
`}function rR(e){return e`## Scatterplot`}function rO(){return 0}function rP(e,t){let i=e?496:286;t.value.width=i,t.value.height=3*i/4,t.value=t.value}function r$(e,t){return t}function rN(e){return e`## Tooltip`}function rB(e){return e`
  <style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');

  div.tooltip {
    font-family: 'Roboto Condensed';
    background: white;
    border-radius: 8px;
    box-shadow: 1px 1px 5px gray;
    display: block;
    padding: 12px;
    padding-right: 6px;
    display:block;
    min-height: 100px;
    width:224px;
    color: #151472;
    z-index:11;
    margin-bottom: 15px;
  }

  div.tooltip p {
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    color: #000;
    text-transform: lowercase;
  }

  div.tooltip p span.title {
      text-transform: capitalize;
      white-space:nowrap;
    }


  div.tooltip p span.value {
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    color: #000;
    float: right;
    white-space:nowrap;
    margin-right: 6px;
  }

  div.tooltip p span.label {
    font-weight: 400;
    font-size: 10px;
    color: #A1A1A1;
    white-space:nowrap; 
    margin-left: 4px;
    text-transform:
  }

  div.tooltip h1 span {
    font-weight: 400;
  }

  div.tooltip h1 {
    font-size: 14px;
    color: #151472;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 16px;
  }


  div.tooltip h2 {
    font-size: 10px;
    font-weight: 400;
    color: #151472;
    line-height: 11px;
    margin-bottom: 16px;
  }
  
  table {
    width: 100%; 
    height: 4px;
    margin-left: -4px;
    margin-right: -6px;
    border-collapse: collapse;
    margin-top: -6px;
    margin-bottom: -1px;
  }

  th, td {
  	border: 1px solid white;
    border-collapse: collapse;
    width: 20%;
  }
  
  tr {
    background-color: #E5E5E5;
    height: 4px;
  }

  .clicked {
    stroke: black;
    stroke-width: 2px;
  }
</style>`}function rF(e){return e[0]}function rj(e,t){return(i,a)=>{let n=e.scaleThreshold(a.thresholds,a.range),r=n(i),o=(n.range().indexOf(r)+1).toString();var l=t`<p><span class="title">${a.name}</span><span class="label">${a.labelTooltip}</span><span class="value">${e.format(".3r")(i).replace(/\./g,",")}</span></p>
<table>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>`;return e.select(l).selectAll("td:nth-child("+o+")").style("background",r),l.outerHTML}}function rG(e,t,i,a,n,r,o){return l=>{let s=e.format(","),d=t.get(l.properties.codarea.slice(0,-1));return`
    <div class="tooltip">
    <h1>${d.municipio.nome} <span>${d.municipio.uf}</span></h1>
    <h2>${s(i.get(l.properties.codarea)).replace(/,/g,".")} habitantes</h2>
    ${a(n.field(d),n)}
    ${a(r.field(d),r)}
    ${a(o.field(d),o)}
    </div>
`}}function rV(e,t){t.updateSelected()}function rH(e){return e({selector:"h2",heading:"Ir para:"})}function rz(e){return e`## Funções`}function rU(e){return(t,i,a)=>{let n=e.select(t).selectAll("circle");return n.on("mouseover",function(){e.select(this).attr("stroke","black"),i(e.select(this).data())}),n.on("mouseleave",function(){e.select(this).attr("stroke","none"),a(e.select(this).data())}),t}}function rq(e){return e`## Dados`}function r_(e){return e("baixopeso-mun-ano.csv").csv()}function rZ(e){return e("pm25-mun-ano.csv").csv()}function rW(e){return e("malhabrasil.json").json()}function rY(e,t,i){let a=e(t.feature(i,i.objects.foo),!0);for(let n of a.features){let r=n.properties.centroide;if(0==r[0]&&0==r[1]){let o=n.geometry.coordinates.flat(4);r[0]=o[0],r[1]=o[1]}}return a}function rX(e){return e("ufnomes.json").json()}function rK(e){return e("municipios.csv").csv()}function rJ(e){return new Map(e.map(e=>[e["C\xf3digo Munic\xedpio Completo"],e]))}function rQ(e){return new Map(e.map(e=>[e.properties.codarea.slice(0,6),e]))}function r1(e){return t=>e.get(t).properties.codarea}function r0(e){return e("populacao_municipio_2018.csv").csv()}function r2(e){return new Map(e.map(e=>[e.municipio,+e.populacao]))}function r5(e,t){return e.extent(t.values())}function r3(e,t){return new Map(e.filter(e=>e.ANO==t).sort(function(e,t){return t.BAIXO_PESO/t.TOTAL-e.BAIXO_PESO/e.TOTAL}).map((e,t)=>[e.CODMUNRES,["0"==e.TOTAL?0:e.BAIXO_PESO/e.TOTAL,t,e.TOTAL]]))}function r6(e,t){return new Map(e.filter(e=>e.ANO==t).map(e=>[e.CODMUNRES,e.TOTAL]))}function r4(e,t){return new Map(e.filter(e=>e.ANO==t).map(e=>[e.CODMUNRES,e]))}function r7(e){return e.map(function(e){return 1e3*e.BAIXO_PESO/e.TOTAL})}function r8(e){return e.map(function(e){return parseFloat(e.AVG_PM25)})}function r9(e){return e.map(function(e){return 1e3*e.OBITOS_PERINATAIS/e.TOTAL}).filter(e=>0!==e)}function oe(e){return e.map(function(e){return 1e3*e.OBITOS_NEONATAIS/e.TOTAL}).filter(e=>0!==e)}function ot(e){return e.map(function(e){return e.OBITOS_TOTAIS})}function oi(e){return e.map(function(e){return 1e3*e.OBITOS_INFANTIS/e.TOTAL}).filter(e=>0!==e)}function oa(e){return e.map(function(e){return e.IDH})}function on(e,t){return e(t)}function or(e){return function(t){return{limits:e.extent(t.values()),quantiles:[e.quantile(t,.25),e.quantile(t,.5),e.quantile(t,.75),e.quantile(t,1)]}}}function oo(e,t){return e(t).quantiles}function ol(e,t){return e(t)}function os(e,t){return e(t)}function od(e,t){return e(t).quantiles}function ou(e,t){return e(t)}function oc(e,t){return e(t)}function of(e,t,i,a,n){return function(){return e.features.map(e=>{let r=t.get(e.properties.codarea);return{pos:[e.x,e.y],centroid:i(e.properties.centroide),id:+e.properties.codarea,name:r.Nome_Município,idRegion:+r.UF,regionName:r.Nome_UF,radius:a(n.get(e.properties.codarea))}})}}function op(e){return e`## Geo`}function om(){return 1152}function ov(e,t,i){return e.geoMercator().fitWidth(t,i)}function ob(e,t){return e.geoPath(t)}function oh(e,t){return e.bounds(t)}function og(e){let[[t,i],[a,n]]=e;return Math.abs((a-t)/(n-i))}function ow(e){return e`## Escalas`}function ox(e,t){return e.scaleThreshold(t.thresholds,t.range)}function oy(e,t,i,a,n){let r=t(i,{width:280,title:a.label,tickSize:0});return n.select(r).selectAll("text").style("font-family","Roboto Condensed"),n.select(r).selectAll(".tick").selectAll("line").style("stroke","white"),n.select(r).selectAll(".tick").selectAll("text").style("color","#C4C4C4"),r}function oC(e){return e.scaleOrdinal(e.range(27),e.schemeDark2)}function ok(){return 24}function oS(e,t){return e.scaleSqrt().domain(t).range([1.5,24])}function oM(e,t){return e().tickValues([1e5,1e6,1e7]).tickFormat((e,t,i)=>{let a=e>=1e6?`${e/1e6} M`:`${e/1e3} m`,n=t===i.length-1?" habitantes":"";return`${a}${n}`}).scale(t)}function oA(e){return e`## Simulação física para o cartograma de Dorling`}async function oT(e,t,i,a,n,r,o){return await e("posicoesFinais@1.json").json()}function oD(e){return e`## Dependências e Imports`}function oI(e){return e("d3@6").then(e=>(e.formatLocale({decimal:",",thousands:"\xa0"}),e))}function oE(e){return e("d3-tip")}function oL(e){return e("https://bundle.run/@mapbox/geojson-rewind@0.5.0")}function oR(e){return e("topojson-client@3")}function oO(e){return e`### Componentes de input`}function oP(e,t,i,a,n,r,o,l){return l.html`${e}
${t}
${i}
${a}
${n}
${r}
${o}`}function o$(e,t){let a=e.module();function n(){return this.url}let r=new Map([["ufnomes.json",{url:new i.U(i(2789)),mimeType:"application/json",toString:n}],["pm25-mun-ano.csv",{url:new i.U(i(1644)),mimeType:"text/csv",toString:n}],["municipios.csv",{url:new i.U(i(285)),mimeType:"text/csv",toString:n}],["malhabrasil.json",{url:new i.U(i(1371)),mimeType:"application/json",toString:n}],["baixopeso-mun-ano.csv",{url:new i.U(i(1848)),mimeType:"text/csv",toString:n}],["posicoesFinais@1.json",{url:new i.U(i(7591)),mimeType:"application/json",toString:n}],["populacao_municipio_2018.csv",{url:new i.U(i(8875)),mimeType:"text/csv",toString:n}]]);a.builtin("FileAttachment",e.fileAttachments(e=>r.get(e))),a.variable(t()).define(["md"],nv),a.variable(t("mainWindow")).define("mainWindow",["htl"],nb),a.variable(t("viewof interfaceToggle")).define("viewof interfaceToggle",["Inputs"],nh),a.variable(t("interfaceToggle")).define("interfaceToggle",["Generators","viewof interfaceToggle"],(e,t)=>e.input(t)),a.define("initial biglayoutToggle",ng),a.variable(t("mutable biglayoutToggle")).define("mutable biglayoutToggle",["Mutable","initial biglayoutToggle"],(e,t)=>new e(t)),a.variable(t("biglayoutToggle")).define("biglayoutToggle",["mutable biglayoutToggle"],e=>e.generator),a.define("initial filtrarPorRolldownToggle",nw),a.variable(t("mutable filtrarPorRolldownToggle")).define("mutable filtrarPorRolldownToggle",["Mutable","initial filtrarPorRolldownToggle"],(e,t)=>new e(t)),a.variable(t("filtrarPorRolldownToggle")).define("filtrarPorRolldownToggle",["mutable filtrarPorRolldownToggle"],e=>e.generator),a.variable(t("clearMainWindow")).define("clearMainWindow",["interfaceToggle","width","mainWindow","biglayoutToggle","filtrarPorRolldownToggle"],nx),a.variable(t("panel")).define("panel",["clearMainWindow","mainWindow"],ny),a.variable(t("populate")).define("populate",["interfaceToggle","panel","htl","viewof munSelecionados","viewof ano","viewof colorSelect","legendaEscalaCores","biglayoutToggle","rankingBarChartContents","viewof yAxisSelect","viewof xAxisSelect","makeReduceIcon","makeEnlargeIcon","mutable biglayoutToggle","scatterplotComponent","filtrarPorRolldownToggle","makeRollUpIcon","makeRollDownIcon","mutable filtrarPorRolldownToggle","painelFiltros"],nC),a.variable(t("afterInitialLayout")).define("afterInitialLayout",["populate","panel","mutable remakeMapa"],nk),a.variable(t("populateMapa")).define("populateMapa",["interfaceToggle","panel","viewof dorling"],nS),a.define("initial remakeMapa",nM),a.variable(t("mutable remakeMapa")).define("mutable remakeMapa",["Mutable","initial remakeMapa"],(e,t)=>new e(t)),a.variable(t("remakeMapa")).define("remakeMapa",["mutable remakeMapa"],e=>e.generator),a.variable(t()).define(["md"],nA),a.variable(t("storageUpdate")).define("storageUpdate",["sessionStorage","munSelecionados"],nT),a.variable(t()).define(["sessionStorage"],nD),a.variable(t("initialLoad")).define("initialLoad",["sessionStorage","viewof munSelecionados"],nI),a.variable(t()).define(["md"],nE),a.variable(t()).define(["md"],nL),a.variable(t("viewof ano")).define("viewof ano",["sliderbase"],nR),a.variable(t("ano")).define("ano",["Generators","viewof ano"],(e,t)=>e.input(t)),a.variable(t()).define(["md"],nO),a.variable(t("viewof filtroIDH")).define("viewof filtroIDH",["interfaceToggle","sliderArray","sliderRangeBase"],nP),a.variable(t("filtroIDH")).define("filtroIDH",["Generators","viewof filtroIDH"],(e,t)=>e.input(t)),a.variable(t("filtroIDHDrawer")).define("filtroIDHDrawer",["aDrawer","viewof filtroIDH"],n$),a.variable(t()).define(["md"],nN),a.variable(t("viewof filtroNascimentos")).define("viewof filtroNascimentos",["interfaceToggle","sliderArray","sliderRangeBase"],nB),a.variable(t("filtroNascimentos")).define("filtroNascimentos",["Generators","viewof filtroNascimentos"],(e,t)=>e.input(t)),a.variable(t("filtroNascimentosDrawer")).define("filtroNascimentosDrawer",["aDrawer","viewof filtroNascimentos"],nF),a.variable(t()).define(["md"],nj),a.variable(t("viewof filtroPoluicao")).define("viewof filtroPoluicao",["interfaceToggle","sliderArray","sliderRangeBase"],nG),a.variable(t("filtroPoluicao")).define("filtroPoluicao",["Generators","viewof filtroPoluicao"],(e,t)=>e.input(t)),a.variable(t("filtroPoluicaoDrawer")).define("filtroPoluicaoDrawer",["aDrawer","viewof filtroPoluicao"],nV),a.variable(t()).define(["md"],nH),a.variable(t("viewof filtroBaixoPeso")).define("viewof filtroBaixoPeso",["interfaceToggle","sliderArray","sliderRangeBase"],nz),a.variable(t("filtroBaixoPeso")).define("filtroBaixoPeso",["Generators","viewof filtroBaixoPeso"],(e,t)=>e.input(t)),a.variable(t("filtroBaixoPesoDrawer")).define("filtroBaixoPesoDrawer",["aDrawer","viewof filtroBaixoPeso"],nU),a.variable(t()).define(["md"],nq),a.variable(t()).define(["md"],n_),a.variable(t("viewof filtroMortPerinatal")).define("viewof filtroMortPerinatal",["interfaceToggle","sliderArray","sliderRangeBase"],nZ),a.variable(t("filtroMortPerinatal")).define("filtroMortPerinatal",["Generators","viewof filtroMortPerinatal"],(e,t)=>e.input(t)),a.variable(t("filtroMortPerinatalDrawer")).define("filtroMortPerinatalDrawer",["aDrawer","viewof filtroMortPerinatal"],nW),a.variable(t()).define(["md"],nY),a.variable(t("viewof filtroMortNeonatal")).define("viewof filtroMortNeonatal",["interfaceToggle","sliderArray","sliderRangeBase"],nX),a.variable(t("filtroMortNeonatal")).define("filtroMortNeonatal",["Generators","viewof filtroMortNeonatal"],(e,t)=>e.input(t)),a.variable(t("filtroMortNeonatalDrawer")).define("filtroMortNeonatalDrawer",["aDrawer","viewof filtroMortNeonatal"],nK),a.variable(t()).define(["md"],nJ),a.variable(t("viewof filtroMortInfantil")).define("viewof filtroMortInfantil",["interfaceToggle","sliderArray","sliderRangeBase"],nQ),a.variable(t("filtroMortInfantil")).define("filtroMortInfantil",["Generators","viewof filtroMortInfantil"],(e,t)=>e.input(t)),a.variable(t("filtroMortInfatilDrawer")).define("filtroMortInfatilDrawer",["aDrawer","viewof filtroMortInfantil"],n1),a.variable(t()).define(["md"],n0),a.variable(t("viewof filtroRegiao")).define("viewof filtroRegiao",["interfaceToggle","aSelect"],n2),a.variable(t("filtroRegiao")).define("filtroRegiao",["Generators","viewof filtroRegiao"],(e,t)=>e.input(t)),a.variable(t("filtroRegiaoDrawer")).define("filtroRegiaoDrawer",["aDrawer","html","viewof filtroRegiao"],n5),a.variable(t("viewof filtroEstado")).define("viewof filtroEstado",["interfaceToggle","aSelect","ufnome"],n3),a.variable(t("filtroEstado")).define("filtroEstado",["Generators","viewof filtroEstado"],(e,t)=>e.input(t)),a.variable(t("filtroEstadoDrawer")).define("filtroEstadoDrawer",["aDrawer","html","viewof filtroEstado"],n6),a.variable(t("viewof filtroRegSaude")).define("viewof filtroRegSaude",["interfaceToggle","codigoToRegiaoSaude","aSelect"],n4),a.variable(t("filtroRegSaude")).define("filtroRegSaude",["Generators","viewof filtroRegSaude"],(e,t)=>e.input(t)),a.variable(t("filtroRegSaudeDrawer")).define("filtroRegSaudeDrawer",["aDrawer","html","viewof filtroRegSaude"],n7),a.variable(t()).define(["md"],n8),a.variable(t("painelFiltros")).define("painelFiltros",["interfaceToggle","htl","filtroNascimentosDrawer","filtroRegiaoDrawer","filtroEstadoDrawer","filtroRegSaudeDrawer","filtroPoluicaoDrawer","filtroBaixoPesoDrawer","filtroMortPerinatalDrawer","filtroMortNeonatalDrawer","filtroMortInfatilDrawer","filtroIDHDrawer"],n9),a.variable(t()).define(["md"],re),a.variable(t("allFilters")).define("allFilters",["filtroRegiao","ufnome","filtroEstado","filtroNascimentos","filtroPoluicao","filtroBaixoPeso","filtroMortPerinatal","filtroMortNeonatal","filtroMortInfantil","filtroIDH","ano","mutable dataFilter"],rt),a.variable(t()).define(["md"],ri),a.variable(t("viewof colorSelect")).define("viewof colorSelect",["interfaceToggle","aSelect","variables"],ra),a.variable(t("colorSelect")).define("colorSelect",["Generators","viewof colorSelect"],(e,t)=>e.input(t)),a.variable(t("color")).define("color",["mutable colorVar","variables","colorSelect"],rn),a.variable(t("viewof xAxisSelect")).define("viewof xAxisSelect",["interfaceToggle","aSelect","variables"],rr),a.variable(t("xAxisSelect")).define("xAxisSelect",["Generators","viewof xAxisSelect"],(e,t)=>e.input(t)),a.variable(t("xaxis")).define("xaxis",["mutable xAxisVar","variables","xAxisSelect"],ro),a.variable(t("viewof yAxisSelect")).define("viewof yAxisSelect",["interfaceToggle","aSelect","variables"],rl),a.variable(t("yAxisSelect")).define("yAxisSelect",["Generators","viewof yAxisSelect"],(e,t)=>e.input(t)),a.variable(t("yaxis")).define("yaxis",["mutable yAxisVar","variables","yAxisSelect"],rs),a.variable(t()).define(["md"],rd),a.variable(t("rankingBarChartContents")).define("rankingBarChartContents",["htl","visToggle","colorVar","biglayoutToggle","makeRollDownIcon","makeRollUpIcon","mutable biglayoutToggle","rankingBox","viewof visToggle","makeBarChartVis","munSelecionados","dadosMunicipio"],ru),a.variable(t()).define(["md"],rc),a.variable(t("normalizeString")).define("normalizeString",rf),a.define("initial unknownData",rp),a.variable(t("mutable unknownData")).define("mutable unknownData",["Mutable","initial unknownData"],(e,t)=>new e(t)),a.variable(t("unknownData")).define("unknownData",["mutable unknownData"],e=>e.generator),a.variable(t()).define(["colorVar"],rm),a.variable(t("filteredData")).define("filteredData",["mutable unknownData","dadosMunicipio","allFilters","codigoToMunicipio","colorVar","normalizeString"],rv),a.variable(t()).define(["makeDownloadData"],rb),a.variable(t("makeDownloadData")).define("makeDownloadData",["dadosMunicipio","allFilters"],rh),a.variable(t("rankStyles")).define("rankStyles",["htl"],rg),a.variable(t("rankingBox")).define("rankingBox",["interfaceToggle","htl","colorVar","aText","escalaCores","d3","alteraMenuLocalidade","filteredData","normalizeString","html"],rw),a.variable(t()).define(["md"],rx),a.variable(t("dorlingStyles")).define("dorlingStyles",["html"],ry),a.variable(t("viewof dorling")).define("viewof dorling",["interfaceToggle","remakeMapa","limites","panel","mutable filtrarPorRolldownToggle","html","zoomInIcon","zoomOutIcon","d3","posicoesFinais","d3tip","tooltip","viewof munSelecionados","posicoesPorCod","flagPath","municipios","alteraMenuLocalidade"],rC),a.variable(t("dorling")).define("dorling",["Generators","viewof dorling"],(e,t)=>e.input(t)),a.define("initial debug",rk),a.variable(t("mutable debug")).define("mutable debug",["Mutable","initial debug"],(e,t)=>new e(t)),a.variable(t("debug")).define("debug",["mutable debug"],e=>e.generator),a.variable(t("dorlingCircleConf")).define("dorlingCircleConf",["viewof dorling","dadosPorCodigo","d3","allFilters","raio","populacaoPorCodigo","escalaCores","colorVar"],rS),a.variable(t()).define(["md"],rM),a.variable(t("zoomInIcon")).define("zoomInIcon",["html"],rA),a.variable(t("zoomOutIcon")).define("zoomOutIcon",["html"],rT),a.variable(t("makeEnlargeIcon")).define("makeEnlargeIcon",["html"],rD),a.variable(t("makeReduceIcon")).define("makeReduceIcon",["html"],rI),a.variable(t("makeRollDownIcon")).define("makeRollDownIcon",["htl"],rE),a.variable(t("makeRollUpIcon")).define("makeRollUpIcon",["htl"],rL),a.variable(t()).define(["md"],rR),a.define("initial TESTE",rO),a.variable(t("mutable TESTE")).define("mutable TESTE",["Mutable","initial TESTE"],(e,t)=>new e(t)),a.variable(t("TESTE")).define("TESTE",["mutable TESTE"],e=>e.generator),a.variable(t("updateScatterConfig")).define("updateScatterConfig",["biglayoutToggle","mutable scatterConfig"],rP),a.variable(t("scatterplotComponent")).define("scatterplotComponent",["interfaceToggle","scatterplot"],r$),a.variable(t()).define(["md"],rN),a.variable(t("styles")).define("styles",["html"],rB),a.variable(t()).define(["dadosMunicipio"],rF),a.variable(t("ttipScale")).define("ttipScale",["d3","html"],rj),a.variable(t("tooltip")).define("tooltip",["d3","dadosPorCodigo","populacaoPorCodigo","ttipScale","colorVar","yAxisVar","xAxisVar"],rG),a.variable(t("reactToMunSelecionados")).define("reactToMunSelecionados",["munSelecionados","viewof dorling"],rV),a.variable(t()).define(["toc"],rH),a.variable(t()).define(["md"],rz),a.variable(t("hoverInteraction")).define("hoverInteraction",["d3"],rU),a.variable(t()).define(["md"],rq),a.variable(t("baixopesoMunAno")).define("baixopesoMunAno",["FileAttachment"],r_),a.variable(t("pm25MunAno")).define("pm25MunAno",["FileAttachment"],rZ),a.variable(t("malhaBrasil")).define("malhaBrasil",["FileAttachment"],rW),a.variable(t("feicoesMunicipio")).define("feicoesMunicipio",["rewind","topojson","malhaBrasil"],rY),a.variable(t("ufnome")).define("ufnome",["FileAttachment"],rX),a.variable(t("municipioInfo")).define("municipioInfo",["FileAttachment"],rK),a.variable(t("municipioPorCodigo")).define("municipioPorCodigo",["municipioInfo"],rJ),a.variable(t("posicoesPorCod")).define("posicoesPorCod",["posicoesFinais"],rQ),a.variable(t("codToCodarea")).define("codToCodarea",["posicoesPorCod"],r1),a.variable(t("populacaoMunicipio")).define("populacaoMunicipio",["FileAttachment"],r0),a.variable(t("populacaoPorCodigo")).define("populacaoPorCodigo",["populacaoMunicipio"],r2),a.variable(t("populacaoLimites")).define("populacaoLimites",["d3","populacaoPorCodigo"],r5),a.variable(t("bpPorCodigo")).define("bpPorCodigo",["baixopesoMunAno","ano"],r3),a.variable(t("totalPorCodigo")).define("totalPorCodigo",["baixopesoMunAno","ano"],r6),a.variable(t("dadosPorCodigo")).define("dadosPorCodigo",["dadosMunicipio","ano"],r4),a.variable(t("bp")).define("bp",["dadosMunicipio"],r7),a.variable(t("AVGPM25")).define("AVGPM25",["dadosMunicipio"],r8),a.variable(t("obper")).define("obper",["dadosMunicipio"],r9),a.variable(t("obneo")).define("obneo",["dadosMunicipio"],oe),a.variable(t("obtotal")).define("obtotal",["dadosMunicipio"],ot),a.variable(t("obinf")).define("obinf",["dadosMunicipio"],oi),a.variable(t("idh")).define("idh",["dadosMunicipio"],oa),a.variable(t()).define(["valueAnalysis","idh"],on),a.variable(t("valueAnalysis")).define("valueAnalysis",["d3"],or),a.variable(t()).define(["valueAnalysis","obper"],oo),a.variable(t()).define(["valueAnalysis","obneo"],ol),a.variable(t()).define(["valueAnalysis","obinf"],os),a.variable(t()).define(["valueAnalysis","bp"],od),a.variable(t()).define(["valueAnalysis","AVGPM25"],ou),a.variable(t()).define(["valueAnalysis","AVGPM25"],oc),a.variable(t("getCircles")).define("getCircles",["feicoesMunicipio","municipioPorCodigo","projecao","raio","populacaoPorCodigo"],of),a.variable(t()).define(["md"],op),a.variable(t("larguraDefault")).define("larguraDefault",om),a.variable(t("projecao")).define("projecao",["d3","larguraDefault","feicoesMunicipio"],ov),a.variable(t("funcaoPath")).define("funcaoPath",["d3","projecao"],ob),a.variable(t("limites")).define("limites",["funcaoPath","feicoesMunicipio"],oh),a.variable(t("razaoAspecto")).define("razaoAspecto",["limites"],og),a.variable(t()).define(["md"],ow),a.variable(t("escalaCores")).define("escalaCores",["d3","colorVar"],ox),a.variable(t("legendaEscalaCores")).define("legendaEscalaCores",["interfaceToggle","Legend","escalaCores","colorVar","d3"],oy),a.variable(t("coresCirculos")).define("coresCirculos",["d3"],oC),a.variable(t("raioMax")).define("raioMax",ok),a.variable(t("raio")).define("raio",["d3","populacaoLimites"],oS),a.variable(t("legendaCirculos")).define("legendaCirculos",["legendCircle","raio"],oM),a.variable(t()).define(["md"],oA),a.variable(t("posicoesFinais")).define("posicoesFinais",["FileAttachment","dadosMunicipio","feicoesMunicipio","projecao","d3","raio","populacaoPorCodigo"],oT),a.variable(t()).define(["md"],oD),a.variable(t("d3")).define("d3",["require"],oI),a.variable(t("d3tip")).define("d3tip",["require"],oE),a.variable(t("rewind")).define("rewind",["require"],oL),a.variable(t("topojson")).define("topojson",["require"],oR);let o=e.module(k);a.import("legend",o);let l=e.module(tA);a.import("checkbox",l);let s=e.module(tP);a.import("legendCircle",s);let d=e.module(t_);a.import("toc",d);let u=e.module(ie);a.import("keys",u);let c=e.module(k);a.import("Legend",c);let f=e.module(aR);a.import("scatterplot",f),a.import("municipios",f),a.import("dadosMunicipio",f),a.import("codigoToMunicipio",f),a.import("viewof munSelecionados",f),a.import("munSelecionados",f),a.import("variables",f),a.import("viewof limpar",f),a.import("limpar",f),a.import("flagPath",f),a.import("corMunNaoUsada",f),a.import("alteraMenuLocalidade",f),a.import("codigoToRegiaoSaude",f),a.import("mutable scatterConfig",f),a.import("scatterConfig",f),a.import("mutable dataFilter",f),a.import("dataFilter",f),a.import("mutable xAxisVar",f),a.import("xAxisVar",f),a.import("mutable yAxisVar",f),a.import("yAxisVar",f),a.import("mutable colorVar",f),a.import("colorVar",f);let p=e.module(aX);a.import("viewof visToggle",p),a.import("visToggle",p),a.import("makeBarChartVis",p),a.variable(t()).define(["md"],oO);let m=e.module(ni);a.import("aDrawer",m),a.import("aDrawerStyles",m);let v=e.module(a2);a.import("aSlider",v),a.import("aSliderStyles",v);let b=e.module(nm);a.import("aSelect",b),a.import("aText",b),a.import("aSelectStyles",b);let h=e.module(iV);return a.import("sliderbase",h),a.import("sliderArray",h),a.import("sliderRangeBase",h),a.import("style_slider",h),a.variable(t("allStyles")).define("allStyles",["aDrawerStyles","aSliderStyles","aSelectStyles","style_slider","rankStyles","styles","dorlingStyles","htl"],oP),a}i.d(t,{Z:function(){return o$}})}}]);