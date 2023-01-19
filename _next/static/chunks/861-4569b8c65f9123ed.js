"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[861],{5462:function(e,t,i){function a(e,t,i){i=i||{};var a=e.ownerDocument,n=a.defaultView.CustomEvent;"function"==typeof n?n=new n(t,{detail:i}):((n=a.createEvent("Event")).initEvent(t,!1,!1),n.detail=i),e.dispatchEvent(n)}function n(e){return Array.isArray(e)||e instanceof Int8Array||e instanceof Int16Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Uint16Array||e instanceof Uint32Array||e instanceof Float32Array||e instanceof Float64Array}function r(e){return e===(0|e)+""}function o(e){let t=document.createElement("span");return t.className="observablehq--cellname",t.textContent=`${e} = `,t}i.d(t,{lj:function(){return ed},Zu:function(){return t5},r_:function(){return ix}});let l=Symbol.prototype.toString;function s(e){return l.call(e)}let{getOwnPropertySymbols:d,prototype:{hasOwnProperty:c}}=Object,{toStringTag:u}=Symbol,p={};function f(e,t){return c.call(e,t)}function m(e){return e[u]||e.constructor&&e.constructor.name||"Object"}function v(e,t){try{let i=e[t];return i&&i.constructor,i}catch(a){return p}}let h=[{symbol:"@@__IMMUTABLE_INDEXED__@@",name:"Indexed",modifier:!0},{symbol:"@@__IMMUTABLE_KEYED__@@",name:"Keyed",modifier:!0},{symbol:"@@__IMMUTABLE_LIST__@@",name:"List",arrayish:!0},{symbol:"@@__IMMUTABLE_MAP__@@",name:"Map"},{symbol:"@@__IMMUTABLE_ORDERED__@@",name:"Ordered",modifier:!0,prefix:!0},{symbol:"@@__IMMUTABLE_RECORD__@@",name:"Record"},{symbol:"@@__IMMUTABLE_SET__@@",name:"Set",arrayish:!0,setish:!0},{symbol:"@@__IMMUTABLE_STACK__@@",name:"Stack",arrayish:!0}];function b(e){try{let t=h.filter(({symbol:t})=>!0===e[t]);if(!t.length)return;let i=t.find(e=>!e.modifier),a="Map"===i.name&&t.find(e=>e.modifier&&e.prefix),n=t.some(e=>e.arrayish),r=t.some(e=>e.setish);return{name:`${a?a.name:""}${i.name}`,symbols:t,arrayish:n&&!r,setish:r}}catch(o){return null}}let{getPrototypeOf:g,getOwnPropertyDescriptors:x}=Object,y=g({});function w(e,t,i,r){let l=n(e),s,d,c,u;e instanceof Map?e instanceof e.constructor?(s=`Map(${e.size})`,d=A):(s="Map()",d=O):e instanceof Set?e instanceof e.constructor?(s=`Set(${e.size})`,d=C):(s="Set()",d=O):l?(s=`${e.constructor.name}(${e.length})`,d=_):(u=b(e))?(s=`Immutable.${u.name}${"Record"===u.name?"":`(${e.size})`}`,l=u.arrayish,d=u.arrayish?T:u.setish?E:M):r?(s=m(e),d=S):(s=m(e),d=O);let p=document.createElement("span");p.className="observablehq--expanded",i&&p.appendChild(o(i));let f=p.appendChild(document.createElement("a"));f.innerHTML=`<svg width=8 height=8 class='observablehq--caret'>
    <path d='M4 7L0 1h8z' fill='currentColor' />
  </svg>`,f.appendChild(document.createTextNode(`${s}${l?" [":" {"}`)),f.addEventListener("mouseup",function(t){t.stopPropagation(),el(p,R(e,null,i,r))}),d=d(e);for(let v=0;!(c=d.next()).done&&v<20;++v)p.appendChild(c.value);if(!c.done){let h=p.appendChild(document.createElement("a"));h.className="observablehq--field",h.style.display="block",h.appendChild(document.createTextNode(`  … more`)),h.addEventListener("mouseup",function(e){e.stopPropagation(),p.insertBefore(c.value,p.lastChild.previousSibling);for(let t=0;!(c=d.next()).done&&t<19;++t)p.insertBefore(c.value,p.lastChild.previousSibling);c.done&&p.removeChild(p.lastChild.previousSibling),a(p,"load")})}return p.appendChild(document.createTextNode(l?"]":"}")),p}function*A(e){for(let[t,i]of e)yield L(t,i);yield*O(e)}function*C(e){for(let t of e)yield N(t);yield*O(e)}function*E(e){for(let t of e)yield N(t)}function*_(e){for(let t=0,i=e.length;t<i;++t)t in e&&(yield I(t,v(e,t),"observablehq--index"));for(let a in e)!r(a)&&f(e,a)&&(yield I(a,v(e,a),"observablehq--key"));for(let n of d(e))yield I(s(n),v(e,n),"observablehq--symbol")}function*T(e){let t=0;for(let i=e.size;t<i;++t)yield I(t,e.get(t),!0)}function*S(e){for(let t in x(e))yield I(t,v(e,t),"observablehq--key");for(let i of d(e))yield I(s(i),v(e,i),"observablehq--symbol");let a=g(e);a&&a!==y&&(yield k(a))}function*O(e){for(let t in e)f(e,t)&&(yield I(t,v(e,t),"observablehq--key"));for(let i of d(e))yield I(s(i),v(e,i),"observablehq--symbol");let a=g(e);a&&a!==y&&(yield k(a))}function*M(e){for(let[t,i]of e)yield I(t,i,"observablehq--key")}function k(e){let t=document.createElement("div"),i=t.appendChild(document.createElement("span"));return t.className="observablehq--field",i.className="observablehq--prototype-key",i.textContent="  <prototype>",t.appendChild(document.createTextNode(": ")),t.appendChild(eo(e,void 0,void 0,void 0,!0)),t}function I(e,t,i){let a=document.createElement("div"),n=a.appendChild(document.createElement("span"));return a.className="observablehq--field",n.className=i,n.textContent=`  ${e}`,a.appendChild(document.createTextNode(": ")),a.appendChild(eo(t)),a}function L(e,t){let i=document.createElement("div");return i.className="observablehq--field",i.appendChild(document.createTextNode("  ")),i.appendChild(eo(e)),i.appendChild(document.createTextNode(" => ")),i.appendChild(eo(t)),i}function N(e){let t=document.createElement("div");return t.className="observablehq--field",t.appendChild(document.createTextNode("  ")),t.appendChild(eo(e)),t}function D(e){let t=window.getSelection();return"Range"===t.type&&(t.containsNode(e,!0)||t.anchorNode.isSelfOrDescendant(e)||t.focusNode.isSelfOrDescendant(e))}function R(e,t,i,a){let r=n(e),l,s,d,c;if(e instanceof Map?e instanceof e.constructor?(l=`Map(${e.size})`,s=P):(l="Map()",s=j):e instanceof Set?e instanceof e.constructor?(l=`Set(${e.size})`,s=F):(l="Set()",s=j):r?(l=`${e.constructor.name}(${e.length})`,s=U):(c=b(e))?(l=`Immutable.${c.name}${"Record"===c.name?"":`(${e.size})`}`,r=c.arrayish,s=c.arrayish?B:c.setish?$:G):(l=m(e),s=j),t){let u=document.createElement("span");return u.className="observablehq--shallow",i&&u.appendChild(o(i)),u.appendChild(document.createTextNode(l)),u.addEventListener("mouseup",function(t){D(u)||(t.stopPropagation(),el(u,R(e)))}),u}let p=document.createElement("span");p.className="observablehq--collapsed",i&&p.appendChild(o(i));let f=p.appendChild(document.createElement("a"));f.innerHTML=`<svg width=8 height=8 class='observablehq--caret'>
    <path d='M7 4L1 8V0z' fill='currentColor' />
  </svg>`,f.appendChild(document.createTextNode(`${l}${r?" [":" {"}`)),p.addEventListener("mouseup",function(t){D(p)||(t.stopPropagation(),el(p,w(e,null,i,a)))},!0),s=s(e);for(let v=0;!(d=s.next()).done&&v<20;++v)v>0&&p.appendChild(document.createTextNode(", ")),p.appendChild(d.value);return d.done||p.appendChild(document.createTextNode(", …")),p.appendChild(document.createTextNode(r?"]":"}")),p}function*P(e){for(let[t,i]of e)yield z(t,i);yield*j(e)}function*F(e){for(let t of e)yield eo(t,!0);yield*j(e)}function*$(e){for(let t of e)yield eo(t,!0)}function*B(e){let t=-1,i=0;for(let a=e.size;i<a;++i)i>t+1&&(yield V(i-t-1)),yield eo(e.get(i),!0),t=i;i>t+1&&(yield V(i-t-1))}function*U(e){let t=-1,i=0;for(let a=e.length;i<a;++i)i in e&&(i>t+1&&(yield V(i-t-1)),yield eo(v(e,i),!0),t=i);for(let n in i>t+1&&(yield V(i-t-1)),e)!r(n)&&f(e,n)&&(yield H(n,v(e,n),"observablehq--key"));for(let o of d(e))yield H(s(o),v(e,o),"observablehq--symbol")}function*j(e){for(let t in e)f(e,t)&&(yield H(t,v(e,t),"observablehq--key"));for(let i of d(e))yield H(s(i),v(e,i),"observablehq--symbol")}function*G(e){for(let[t,i]of e)yield H(t,i,"observablehq--key")}function V(e){let t=document.createElement("span");return t.className="observablehq--empty",t.textContent=1===e?"empty":`empty \xd7 ${e}`,t}function H(e,t,i){let a=document.createDocumentFragment(),n=a.appendChild(document.createElement("span"));return n.className=i,n.textContent=e,a.appendChild(document.createTextNode(": ")),a.appendChild(eo(t,!0)),a}function z(e,t){let i=document.createDocumentFragment();return i.appendChild(eo(e,!0)),i.appendChild(document.createTextNode(" => ")),i.appendChild(eo(t,!0)),i}function q(e,t){return`${e}`.padStart(t,"0")}var Z=Error.prototype.toString,W=RegExp.prototype.toString;function J(e){return e.replace(/[\\`\x00-\x09\x0b-\x19]|\${/g,X)}function X(e){var t=e.charCodeAt(0);switch(t){case 8:return"\\b";case 9:return"\\t";case 11:return"\\v";case 12:return"\\f";case 13:return"\\r"}return t<16?"\\x0"+t.toString(16):t<32?"\\x"+t.toString(16):"\\"+e}function Q(e,t){for(var i=0;t.exec(e);)++i;return i}var Y=Function.prototype.toString,K={prefix:"async ƒ"},ee={prefix:"async ƒ*"},et={prefix:"class"},ei={prefix:"ƒ"},ea={prefix:"ƒ*"};function en(e,t,i){var a=document.createElement("span");a.className="observablehq--function",i&&a.appendChild(o(i));var n=a.appendChild(document.createElement("span"));return n.className="observablehq--keyword",n.textContent=e.prefix,a.appendChild(document.createTextNode(t)),a}let{prototype:{toString:er}}=Object;function eo(e,t,i,a,n){let r=typeof e;switch(r){case"boolean":case"undefined":e+="";break;case"number":e=0===e&&1/e<0?"-0":e+"";break;case"bigint":e+="n";break;case"symbol":e=s(e,a);break;case"function":return function(e,t){var i,a,n=Y.call(e);switch(e.constructor&&e.constructor.name){case"AsyncFunction":i=K;break;case"AsyncGeneratorFunction":i=ee;break;case"GeneratorFunction":i=ea;break;default:i=/^class\b/.test(n)?et:ei}return i===et?en(i,"",t):(a=/^(?:async\s*)?(\w+)\s*=>/.exec(n))?en(i,"("+a[1]+")",t):(a=/^(?:async\s*)?\(\s*(\w+(?:\s*,\s*\w+)*)?\s*\)/.exec(n))||(a=/^(?:async\s*)?function(?:\s*\*)?(?:\s*\w+)?\s*\(\s*(\w+(?:\s*,\s*\w+)*)?\s*\)/.exec(n))?en(i,a[1]?"("+a[1].replace(/\s*,\s*/g,", ")+")":"()",t):en(i,"(…)",t)}(e,a);case"string":return function(e,t,i,a){if(!1===t){if(Q(e,/["\n]/g)<=Q(e,/`|\${/g)){let n=document.createElement("span");a&&n.appendChild(o(a));let r=n.appendChild(document.createElement("span"));return r.className="observablehq--string",r.textContent=JSON.stringify(e),n}let l=e.split("\n");if(l.length>20&&!i){let s=document.createElement("div");a&&s.appendChild(o(a));let d=s.appendChild(document.createElement("span"));d.className="observablehq--string",d.textContent="`"+J(l.slice(0,20).join("\n"));let c=s.appendChild(document.createElement("span")),u=l.length-20;return c.textContent=`Show ${u} truncated line${u>1?"s":""}`,c.className="observablehq--string-expand",c.addEventListener("mouseup",function(i){i.stopPropagation(),el(s,eo(e,t,!0,a))}),s}let p=document.createElement("span");a&&p.appendChild(o(a));let f=p.appendChild(document.createElement("span"));return f.className=`observablehq--string${i?" observablehq--expanded":""}`,f.textContent="`"+J(e)+"`",p}let m=document.createElement("span");a&&m.appendChild(o(a));let v=m.appendChild(document.createElement("span"));return v.className="observablehq--string",v.textContent=JSON.stringify(e.length>100?`${e.slice(0,50)}…${e.slice(-49)}`:e),m}(e,t,i,a);default:var l,d;if(null===e){r=null,e="null";break}if(e instanceof Date){r="date",e=function(e,t){var i;if(e instanceof Date||(e=new Date(+e)),isNaN(e))return"function"==typeof t?t(e):t;let a=e.getUTCHours(),n=e.getUTCMinutes(),r=e.getUTCSeconds(),o=e.getUTCMilliseconds();return`${i=e.getUTCFullYear(),i<0?`-${q(-i,6)}`:i>9999?`+${q(i,6)}`:q(i,4)}-${q(e.getUTCMonth()+1,2)}-${q(e.getUTCDate(),2)}${a||n||r||o?`T${q(a,2)}:${q(n,2)}${r||o?`:${q(r,2)}${o?`.${q(o,3)}`:""}`:""}Z`:""}`}(e,"Invalid Date");break}if(e===p){r="forbidden",e="[forbidden]";break}switch(er.call(e)){case"[object RegExp]":r="regexp",l=e,e=W.call(l);break;case"[object Error]":case"[object DOMException]":r="error",e=(d=e).stack||Z.call(d);break;default:return(i?w:R)(e,t,a,n)}}let c=document.createElement("span");a&&c.appendChild(o(a));let u=c.appendChild(document.createElement("span"));return u.className=`observablehq--${r}`,u.textContent=e,c}function el(e,t){e.classList.contains("observablehq--inspect")&&t.classList.add("observablehq--inspect"),e.parentNode.replaceChild(t,e),a(t,"load")}let es=/\s+\(\d+:\d+\)$/m;class ed{constructor(e){if(!e)throw Error("invalid node");this._node=e,e.classList.add("observablehq")}pending(){let{_node:e}=this;e.classList.remove("observablehq--error"),e.classList.add("observablehq--running")}fulfilled(e,t){var i;let{_node:n}=this;if(i=e,(i instanceof Element||i instanceof Text)&&i instanceof i.constructor&&(!e.parentNode||e.parentNode===n)||(e=eo(e,!1,n.firstChild&&n.firstChild.classList&&n.firstChild.classList.contains("observablehq--expanded"),t)).classList.add("observablehq--inspect"),n.classList.remove("observablehq--running","observablehq--error"),n.firstChild!==e){if(n.firstChild){for(;n.lastChild!==n.firstChild;)n.removeChild(n.lastChild);n.replaceChild(e,n.firstChild)}else n.appendChild(e)}a(n,"update")}rejected(e,t){let{_node:i}=this;for(i.classList.remove("observablehq--running"),i.classList.add("observablehq--error");i.lastChild;)i.removeChild(i.lastChild);var n=document.createElement("div");n.className="observablehq--inspect",t&&n.appendChild(o(t)),n.appendChild(document.createTextNode((e+"").replace(es,""))),i.appendChild(n),a(i,"error",{error:e})}}ed.into=function(e){if("string"==typeof e&&null==(e=document.querySelector(e)))throw Error("container not found");return function(){return new ed(e.appendChild(document.createElement("div")))}};var ec={},eu={};function ep(e){return Function("d","return {"+e.map(function(e,t){return JSON.stringify(e)+": d["+t+'] || ""'}).join(",")+"}")}function ef(e){var t=Object.create(null),i=[];return e.forEach(function(e){for(var a in e)a in t||i.push(t[a]=a)}),i}function em(e,t){var i=e+"",a=i.length;return a<t?Array(t-a+1).join(0)+i:i}function ev(e){var t=RegExp('["'+e+"\n\r]"),i=e.charCodeAt(0);function a(e,t){var a,n=[],r=e.length,o=0,l=0,s=r<=0,d=!1;function c(){if(s)return eu;if(d)return d=!1,ec;var t,a,n=o;if(34===e.charCodeAt(n)){for(;o++<r&&34!==e.charCodeAt(o)||34===e.charCodeAt(++o););return(t=o)>=r?s=!0:10===(a=e.charCodeAt(o++))?d=!0:13===a&&(d=!0,10===e.charCodeAt(o)&&++o),e.slice(n+1,t-1).replace(/""/g,'"')}for(;o<r;){if(10===(a=e.charCodeAt(t=o++)))d=!0;else if(13===a)d=!0,10===e.charCodeAt(o)&&++o;else if(a!==i)continue;return e.slice(n,t)}return s=!0,e.slice(n,r)}for(10===e.charCodeAt(r-1)&&--r,13===e.charCodeAt(r-1)&&--r;(a=c())!==eu;){for(var u=[];a!==ec&&a!==eu;)u.push(a),a=c();(!t||null!=(u=t(u,l++)))&&n.push(u)}return n}function n(t,i){return t.map(function(t){return i.map(function(e){return o(t[e])}).join(e)})}function r(t){return t.map(o).join(e)}function o(e){var i,a,n,r,o,l;return null==e?"":e instanceof Date?(a=e.getUTCHours(),n=e.getUTCMinutes(),r=e.getUTCSeconds(),o=e.getUTCMilliseconds(),isNaN(e)?"Invalid Date":((l=e.getUTCFullYear())<0?"-"+em(-l,6):l>9999?"+"+em(l,6):em(l,4))+"-"+em(e.getUTCMonth()+1,2)+"-"+em(e.getUTCDate(),2)+(o?"T"+em(a,2)+":"+em(n,2)+":"+em(r,2)+"."+em(o,3)+"Z":r?"T"+em(a,2)+":"+em(n,2)+":"+em(r,2)+"Z":n||a?"T"+em(a,2)+":"+em(n,2)+"Z":"")):t.test(e+="")?'"'+e.replace(/"/g,'""')+'"':e}return{parse:function(e,t){var i,n,r=a(e,function(e,a){var r,o,l;if(i)return i(e,a-1);n=e,i=t?(l=ep(e),function(i,a){return t(l(i),a,e)}):ep(e)});return r.columns=n||[],r},parseRows:a,format:function(t,i){return null==i&&(i=ef(t)),[i.map(o).join(e)].concat(n(t,i)).join("\n")},formatBody:function(e,t){return null==t&&(t=ef(e)),n(e,t).join("\n")},formatRows:function(e){return e.map(r).join("\n")},formatRow:r,formatValue:o}}var eh=ev("	"),eb=eh.parse,eg=eh.parseRows;eh.format,eh.formatBody,eh.formatRows,eh.formatRow,eh.formatValue;var ex=ev(","),ey=ex.parse,ew=ex.parseRows;function eA(e){for(var t in e){var i,a,n=e[t].trim();if(n){if("true"===n)n=!0;else if("false"===n)n=!1;else if("NaN"===n)n=NaN;else if(isNaN(i=+n)){if(!(a=n.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/)))continue;eC&&a[4]&&!a[7]&&(n=n.replace(/-/g,"/").replace(/T/," ")),n=new Date(n)}else n=i}else n=null;e[t]=n}return e}ex.format,ex.formatBody,ex.formatRows,ex.formatRow,ex.formatValue;let eC=new Date("2019-01-01T00:00").getHours()||new Date("2019-07-01T00:00").getHours();function eE(e,t,i){return{resolve:(a=i)=>`${e}@${t}/${a}`}}let e_=eE("d3","7.6.1","dist/d3.min.js"),eT=eE("@observablehq/inputs","0.10.4","dist/inputs.min.js"),eS=eE("@observablehq/plot","0.6.0","dist/plot.umd.min.js"),eO=eE("@observablehq/graphviz","0.2.1","dist/graphviz.min.js"),eM=eE("@observablehq/highlight.js","2.0.0","highlight.min.js"),ek=eE("@observablehq/katex","0.11.1","dist/katex.min.js"),eI=eE("lodash","4.17.21","lodash.min.js"),eL=eE("htl","0.3.1","dist/htl.min.js"),eN=eE("jszip","3.10.0","dist/jszip.min.js"),eD=eE("marked","0.3.12","marked.min.js"),eR=eE("sql.js","1.7.0","dist/sql-wasm.js"),eP=eE("vega","5.22.1","build/vega.min.js"),eF=eE("vega-lite","5.5.0","build/vega-lite.min.js"),e$=eE("vega-lite-api","5.0.0","build/vega-lite-api.min.js"),eB=eE("apache-arrow","4.0.1","Arrow.es2015.min.js"),eU=eE("arquero","4.8.8","dist/arquero.min.js"),ej=eE("topojson-client","3.1.0","dist/topojson-client.min.js"),eG=eE("exceljs","4.3.0","dist/exceljs.min.js"),eV=eE("mermaid","9.1.6","dist/mermaid.min.js"),eH=eE("leaflet","1.8.0","dist/leaflet.js"),ez=new Map,eq=[],eZ=eq.map,eW=eq.some,eJ=eq.hasOwnProperty,eX=/^((?:@[^/@]+\/)?[^/@]+)(?:@([^/]+))?(?:\/(.*))?$/,eQ=/^\d+\.\d+\.\d+(-[\w-.+]+)?$/,eY=/(?:\.[^/]*|\/)$/;class eK extends Error{constructor(e){super(e)}}function e1(e){let t=eX.exec(e);return t&&{name:t[1],version:t[2],path:t[3]}}function e0(e="https://cdn.jsdelivr.net/npm/",t=["unpkg","jsdelivr","browser","main"]){if(!/\/$/.test(e))throw Error("origin lacks trailing slash");function i(t){let i=`${e}${t.name}${t.version?`@${t.version}`:""}/package.json`,a=ez.get(i);return a||ez.set(i,a=fetch(i).then(e=>{if(!e.ok)throw new eK("unable to load package.json");return e.redirected&&!ez.has(e.url)&&ez.set(e.url,a),e.json()})),a}return async function(a,n){if(a.startsWith(e)&&(a=a.substring(e.length)),/^(\w+:)|\/\//i.test(a))return a;if(/^[.]{0,2}\//i.test(a))return new URL(a,null==n?location:n).href;if(!a.length||/^[\s._]/.test(a)||/\s$/.test(a))throw new eK("illegal name");let r=e1(a);if(!r)return`${e}${a}`;if(!r.version&&null!=n&&n.startsWith(e)){let o=await i(e1(n.substring(e.length)));r.version=o.dependencies&&o.dependencies[r.name]||o.peerDependencies&&o.peerDependencies[r.name]}if(r.path&&!eY.test(r.path)&&(r.path+=".js"),r.path&&r.version&&eQ.test(r.version))return`${e}${r.name}@${r.version}/${r.path}`;let l=await i(r);return`${e}${l.name}@${l.version}/${r.path||function(e){for(let i of t){let a=e[i];if("string"==typeof a)return a.startsWith("./")&&(a=a.slice(2)),eY.test(a)?a:`${a}.js`}}(l)||"index.js"}`}}eK.prototype.name=eK.name;var e2=e5(e0());function e5(e){let t=new Map,i=n(null);function a(e){if("string"!=typeof e)return e;let i=t.get(e);return i||t.set(e,i=new Promise((t,i)=>{let a=document.createElement("script");a.onload=()=>{try{t(eq.pop()(n(e)))}catch(r){i(new eK("invalid module"))}a.remove()},a.onerror=()=>{i(new eK("unable to load module")),a.remove()},a.async=!0,a.src=e,window.define=e6,document.head.appendChild(a)})),i}function n(t){return i=>Promise.resolve(e(i,t)).then(a)}function r(e){return arguments.length>1?Promise.all(eZ.call(arguments,i)).then(e3):i(e)}return r.alias=function(t){return e5((i,a)=>i in t&&(i=t[i],a=null,"string"!=typeof i)?i:e(i,a))},r.resolve=e,r}function e3(e){let t={};for(let i of e)for(let a in i)eJ.call(i,a)&&(null==i[a]?Object.defineProperty(t,a,{get:e4(i,a)}):t[a]=i[a]);return t}function e4(e,t){return()=>e[t]}function e7(e){return"exports"==(e+="")||"module"===e}function e6(e,t,i){let a=arguments.length;a<2?(i=e,t=[]):a<3&&(i=t,t="string"==typeof e?[]:e),eq.push(eW.call(t,e7)?e=>{let a={},n={exports:a};return Promise.all(eZ.call(t,t=>"exports"==(t+="")?a:"module"===t?n:e(t))).then(e=>(i.apply(null,e),n.exports))}:e=>Promise.all(eZ.call(t,e)).then(e=>"function"==typeof i?i.apply(null,e):i))}e6.amd={};let e8=e2;function e9(e){e8=e}async function te(e){let[t,i]=await Promise.all([e(eR.resolve()),e.resolve(eR.resolve("dist/"))]);return t({locateFile:e=>`${i}${e}`})}class tt{constructor(e){Object.defineProperties(this,{_db:{value:e}})}static async open(e){let[t,i]=await Promise.all([te(e8),Promise.resolve(e).then(ti)]);return new tt(new t.Database(i))}async query(e,t){return await ta(this._db,e,t)}async queryRow(e,t){return(await this.query(e,t))[0]||null}async explain(e,t){let i=await this.query(`EXPLAIN QUERY PLAN ${e}`,t);return tn("pre",{className:"observablehq--inspect"},[tr(i.map(e=>e.detail).join("\n"))])}async describeTables({schema:e}={}){return this.query(`SELECT NULLIF(schema, 'main') AS schema, name FROM pragma_table_list() WHERE type = 'table'${null==e?"":" AND schema = ?"} AND name NOT LIKE 'sqlite_%'`,null==e?[]:[e])}async describeColumns({schema:e,table:t}={}){if(null==t)throw Error("missing table");let i=await this.query(`SELECT name, type, "notnull" FROM pragma_table_info(?${null==e?"":", ?"}) ORDER BY cid`,null==e?[t]:[t,e]);if(!i.length)throw Error(`table not found: ${t}`);return i.map(({name:e,type:t,notnull:i})=>({name:e,type:function(e){switch(e){case"NULL":return"null";case"INT":case"INTEGER":case"TINYINT":case"SMALLINT":case"MEDIUMINT":case"BIGINT":case"UNSIGNED BIG INT":case"INT2":case"INT8":return"integer";case"TEXT":case"CLOB":case"DATE":case"DATETIME":return"string";case"REAL":case"DOUBLE":case"DOUBLE PRECISION":case"FLOAT":case"NUMERIC":return"number";case"BLOB":return"buffer";default:return/^(?:(?:(?:VARYING|NATIVE) )?CHARACTER|(?:N|VAR|NVAR)CHAR)\(/.test(e)?"string":/^(?:DECIMAL|NUMERIC)\(/.test(e)?"number":"other"}}(t),databaseType:t,nullable:!i}))}async describe(e){let t=await (void 0===e?this.query("SELECT name FROM sqlite_master WHERE type = 'table'"):this.query("SELECT * FROM pragma_table_info(?)",[e]));if(!t.length)throw Error("Not found");let{columns:i}=t;return tn("table",{value:t},[tn("thead",[tn("tr",i.map(e=>tn("th",[tr(e)])))]),tn("tbody",t.map(e=>tn("tr",i.map(t=>tn("td",[tr(e[t])])))))])}async sql(){return this.query(...this.queryTag.apply(this,arguments))}queryTag(e,...t){return[e.join("?"),t]}}function ti(e){return"string"==typeof e?fetch(e).then(ti):e instanceof Response||e instanceof Blob?e.arrayBuffer().then(ti):e instanceof ArrayBuffer?new Uint8Array(e):e}async function ta(e,t,i){let[a]=await e.exec(t,i);if(!a)return[];let{columns:n,values:r}=a,o=r.map(e=>Object.fromEntries(e.map((e,t)=>[n[t],e])));return o.columns=n,o}function tn(e,t,i){2===arguments.length&&(i=t,t=void 0);let a=document.createElement(e);if(void 0!==t)for(let n in t)a[n]=t[n];if(void 0!==i)for(let r of i)a.appendChild(r);return a}function tr(e){return document.createTextNode(e)}Object.defineProperty(tt.prototype,"dialect",{value:"sqlite"});class to{constructor(e){Object.defineProperties(this,{_:{value:e},sheetNames:{value:e.worksheets.map(e=>e.name),enumerable:!0}})}sheet(e,t){let i="number"==typeof e?this.sheetNames[e]:this.sheetNames.includes(e+="")?e:null;if(null==i)throw Error(`Sheet not found: ${e}`);let a=this._.getWorksheet(i);return function(e,{range:t,headers:i}={}){let[[a,n],[r,o]]=function(e=":",{columnCount:t,rowCount:i}){if(!(e+="").match(/^[A-Z]*\d*:[A-Z]*\d*$/))throw Error("Malformed range specifier");let[[a=0,n=0],[r=t-1,o=i-1]]=e.split(":").map(tc);return[[a,n],[r,o]]}(t,e),l=i?e._rows[n++]:null,s=new Set(["#"]);for(let d=a;d<=r;d++){let c=l?tl(l.findCell(d+1)):null,u=c&&c+""||td(d);for(;s.has(u);)u+="_";s.add(u)}s=Array(a).concat(Array.from(s));let p=Array(o-n+1);for(let f=n;f<=o;f++){let m=p[f-n]=Object.create(null,{"#":{value:f+1}}),v=e.getRow(f+1);if(v.hasValues)for(let h=a;h<=r;h++){let b=tl(v.findCell(h+1));null!=b&&(m[s[h+1]]=b)}}return p.columns=s.filter(()=>!0),p}(a,t)}}function tl(e){if(!e)return;let{value:t}=e;if(t&&"object"==typeof t&&!(t instanceof Date)){if(t.formula||t.sharedFormula)return t.result&&t.result.error?NaN:t.result;if(t.richText)return ts(t);if(t.text){let{text:i}=t;return i.richText&&(i=ts(i)),t.hyperlink&&t.hyperlink!==i?`${t.hyperlink} ${i}`:i}}return t}function ts(e){return e.richText.map(e=>e.text).join("")}function td(e){let t="";e++;do t=String.fromCharCode(64+(e%26||26))+t;while(e=Math.floor((e-1)/26));return t}function tc(e){let[,t,i]=e.match(/^([A-Z]*)(\d*)$/),a=0;if(t)for(let n=0;n<t.length;n++)a+=Math.pow(26,t.length-n-1)*(t.charCodeAt(n)-64);return[a?a-1:void 0,i?+i-1:void 0]}async function tu(e){let t=await fetch(await e.url());if(!t.ok)throw Error(`Unable to load file: ${e.name}`);return t}async function tp(e,t,{array:i=!1,typed:a=!1}={}){let n=await e.text();return("	"===t?i?eg:eb:i?ew:ey)(n,a&&eA)}class tf{constructor(e,t){Object.defineProperty(this,"name",{value:e,enumerable:!0}),void 0!==t&&Object.defineProperty(this,"mimeType",{value:t+"",enumerable:!0})}async blob(){return(await tu(this)).blob()}async arrayBuffer(){return(await tu(this)).arrayBuffer()}async text(){return(await tu(this)).text()}async json(){return(await tu(this)).json()}async stream(){return(await tu(this)).body}async csv(e){return tp(this,",",e)}async tsv(e){return tp(this,"	",e)}async image(e){let t=await this.url();return new Promise((i,a)=>{let n=new Image;new URL(t,document.baseURI).origin!==new URL(location).origin&&(n.crossOrigin="anonymous"),Object.assign(n,e),n.onload=()=>i(n),n.onerror=()=>a(Error(`Unable to load file: ${this.name}`)),n.src=t})}async arrow(){let[e,t]=await Promise.all([e8(eB.resolve()),tu(this)]);return e.Table.from(t)}async sqlite(){return tt.open(tu(this))}async zip(){let[e,t]=await Promise.all([e8(eN.resolve()),this.arrayBuffer()]);return new th(await e.loadAsync(t))}async xml(e="application/xml"){return(new DOMParser).parseFromString(await this.text(),e)}async html(){return this.xml("text/html")}async xlsx(){let[e,t]=await Promise.all([e8(eG.resolve()),this.arrayBuffer()]);return new to(await new e.Workbook().xlsx.load(t))}}class tm extends tf{constructor(e,t,i){super(t,i),Object.defineProperty(this,"_url",{value:e})}async url(){return await this._url+""}}function tv(e){throw Error(`File not found: ${e}`)}class th{constructor(e){Object.defineProperty(this,"_",{value:e}),this.filenames=Object.keys(e.files).filter(t=>!e.files[t].dir)}file(e){let t=this._.file(e+="");if(!t||t.dir)throw Error(`file not found: ${e}`);return new tb(t)}}class tb extends tf{constructor(e){super(e.name),Object.defineProperty(this,"_",{value:e}),Object.defineProperty(this,"_url",{writable:!0})}async url(){return this._url||(this._url=this.blob().then(URL.createObjectURL))}async blob(){return this._.async("blob")}async arrayBuffer(){return this._.async("arraybuffer")}async text(){return this._.async("text")}async json(){return JSON.parse(await this.text())}}var tg={math:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},tx=0;function ty(e){return new tw("O-"+(null==e?"":e+"-")+ ++tx)}function tw(e){this.id=e,this.href=new URL(`#${e}`,location)+""}tw.prototype.toString=function(){return"url("+this.href+")"};var tA={canvas:function(e,t){var i=document.createElement("canvas");return i.width=e,i.height=t,i},context2d:function(e,t,i){null==i&&(i=devicePixelRatio);var a=document.createElement("canvas");a.width=e*i,a.height=t*i,a.style.width=e+"px";var n=a.getContext("2d");return n.scale(i,i),n},download:function(e,t="untitled",i="Save"){let a=document.createElement("a"),n=a.appendChild(document.createElement("button"));async function r(){await new Promise(requestAnimationFrame),URL.revokeObjectURL(a.href),a.removeAttribute("href"),n.textContent=i,n.disabled=!1}return n.textContent=i,a.download=t,a.onclick=async t=>{if(n.disabled=!0,a.href)return r();n.textContent="Saving…";try{let o=await ("function"==typeof e?e():e);n.textContent="Download",a.href=URL.createObjectURL(o)}catch(l){n.textContent=i}if(t.eventPhase)return r();n.disabled=!1},a},element:function(e,t){var i,a=e+="",n=a.indexOf(":");n>=0&&"xmlns"!==(a=e.slice(0,n))&&(e=e.slice(n+1));var r=tg.hasOwnProperty(a)?document.createElementNS(tg[a],e):document.createElement(e);if(t)for(var o in t)n=(a=o).indexOf(":"),i=t[o],n>=0&&"xmlns"!==(a=o.slice(0,n))&&(o=o.slice(n+1)),tg.hasOwnProperty(a)?r.setAttributeNS(tg[a],o,i):r.setAttribute(o,i);return r},input:function(e){var t=document.createElement("input");return null!=e&&(t.type=e),t},range:function(e,t,i){1===arguments.length&&(t=e,e=null);var a=document.createElement("input");return a.min=e=null==e?0:+e,a.max=t=null==t?1:+t,a.step=null==i?"any":i=+i,a.type="range",a},select:function(e){var t=document.createElement("select");return Array.prototype.forEach.call(e,function(e){var i=document.createElement("option");i.value=i.textContent=e,t.appendChild(i)}),t},svg:function(e,t){var i=document.createElementNS("http://www.w3.org/2000/svg","svg");return i.setAttribute("viewBox",[0,0,e,t]),i.setAttribute("width",e),i.setAttribute("height",t),i},text:function(e){return document.createTextNode(e)},uid:ty},tC={buffer:function(e){return new Promise(function(t,i){var a=new FileReader;a.onload=function(){t(a.result)},a.onerror=i,a.readAsArrayBuffer(e)})},text:function(e){return new Promise(function(t,i){var a=new FileReader;a.onload=function(){t(a.result)},a.onerror=i,a.readAsText(e)})},url:function(e){return new Promise(function(t,i){var a=new FileReader;a.onload=function(){t(a.result)},a.onerror=i,a.readAsDataURL(e)})}};function tE(){return this}function t_(e,t){let i=!1;if("function"!=typeof t)throw Error("dispose is not a function");return{[Symbol.iterator]:tE,next:()=>i?{done:!0}:(i=!0,{done:!1,value:e}),return:()=>(i=!0,t(e),{done:!0}),throw:()=>({done:i=!0})}}function tT(e){let t=!1,i,a,n=e(function(e){return a?(a(e),a=null):t=!0,i=e});if(null!=n&&"function"!=typeof n)throw Error("function"==typeof n.then?"async initializers are not supported":"initializer returned something, but not a dispose function");return{[Symbol.iterator]:tE,throw:()=>({done:!0}),return:()=>(null!=n&&n(),{done:!0}),next:function(){return{done:!1,value:t?(t=!1,Promise.resolve(i)):new Promise(e=>a=e)}}}}function tS(e){switch(e.type){case"range":case"number":return e.valueAsNumber;case"date":return e.valueAsDate;case"checkbox":return e.checked;case"file":return e.multiple?e.files:e.files[0];case"select-multiple":return Array.from(e.selectedOptions,e=>e.value);default:return e.value}}var tO={disposable:t_,filter:function*(e,t){for(var i,a=-1;!(i=e.next()).done;)t(i.value,++a)&&(yield i.value)},input:function(e){return tT(function(t){var i=function(e){switch(e.type){case"button":case"submit":case"checkbox":return"click";case"file":return"change";default:return"input"}}(e),a=tS(e);function n(){t(tS(e))}return e.addEventListener(i,n),void 0!==a&&t(a),function(){e.removeEventListener(i,n)}})},map:function*(e,t){for(var i,a=-1;!(i=e.next()).done;)yield t(i.value,++a)},observe:tT,queue:function(e){let t,i=[],a=e(function(e){return i.push(e),t&&(t(i.shift()),t=null),e});if(null!=a&&"function"!=typeof a)throw Error("function"==typeof a.then?"async initializers are not supported":"initializer returned something, but not a dispose function");return{[Symbol.iterator]:tE,throw:()=>({done:!0}),return:()=>(null!=a&&a(),{done:!0}),next:function(){return{done:!1,value:i.length?Promise.resolve(i.shift()):new Promise(e=>t=e)}}}},range:function*(e,t,i){e=+e,t=+t,i=(n=arguments.length)<2?(t=e,e=0,1):n<3?1:+i;for(var a=-1,n=0|Math.max(0,Math.ceil((t-e)/i));++a<n;)yield e+a*i},valueAt:function(e,t){if(isFinite(t=+t)&&!(t<0)&&!(t!=t|0)){for(var i,a=-1;!(i=e.next()).done;)if(++a===t)return i.value}},worker:function(e){let t=URL.createObjectURL(new Blob([e],{type:"text/javascript"})),i=new Worker(t);return t_(i,()=>{i.terminate(),URL.revokeObjectURL(t)})}};function tM(e,t){return function(i){var a,n,r,o,l,s,d,c,u=i[0],p=[],f=null,m=-1;for(l=1,s=arguments.length;l<s;++l){if(a=arguments[l],a instanceof Node)p[++m]=a,u+="<!--o:"+m+"-->";else if(Array.isArray(a)){for(d=0,c=a.length;d<c;++d)(n=a[d])instanceof Node?(null===f&&(p[++m]=f=document.createDocumentFragment(),u+="<!--o:"+m+"-->"),f.appendChild(n)):(f=null,u+=n);f=null}else u+=a;u+=i[l]}if(f=e(u),++m>0){for(r=Array(m),o=document.createTreeWalker(f,NodeFilter.SHOW_COMMENT,null,!1);o.nextNode();)n=o.currentNode,/^o:/.test(n.nodeValue)&&(r[+n.nodeValue.slice(2)]=n);for(l=0;l<m;++l)(n=r[l])&&n.parentNode.replaceChild(p[l],n)}return 1===f.childNodes.length?f.removeChild(f.firstChild):11===f.nodeType?((n=t()).appendChild(f),n):f}}var tk=tM(function(e){var t=document.createElement("template");return t.innerHTML=e.trim(),document.importNode(t.content,!0)},function(){return document.createElement("span")});async function tI(e){let t=await e(eH.resolve());if(!t._style){let i=document.createElement("link");i.rel="stylesheet",i.href=await e.resolve(eH.resolve("dist/leaflet.css")),t._style=document.head.appendChild(i)}return t}async function tL(e){let t=await e(eV.resolve());return t.initialize({securityLevel:"loose",theme:"neutral"}),function(){let e=document.createElement("div");return e.innerHTML=t.render(ty().id,String.raw.apply(String,arguments)),e.removeChild(e.firstChild)}}function tN(e){let t;Object.defineProperties(this,{generator:{value:tT(e=>void(t=e))},value:{get:()=>e,set:i=>t(e=i)}}),void 0!==e&&t(e)}function*tD(){for(;;)yield Date.now()}var tR=new Map;function tP(e,t){var i,a,n,r;return(i=tR.get(e=+e))?i.then(()=>t):(i=Date.now())>=e?Promise.resolve(t):(a=i,n=e,r=new Promise(function(e){tR.delete(n);var t=n-a;if(!(t>0))throw Error("invalid time");if(t>2147483647)throw Error("too long to wait");setTimeout(e,t)}),tR.set(n,r),r).then(()=>t)}var tF={delay:function(e,t){return new Promise(function(i){setTimeout(function(){i(t)},e)})},tick:function(e,t){return tP(Math.ceil((Date.now()+1)/e)*e,t)},when:tP};function t$(e,t){if(/^(\w+:)|\/\//i.test(e))return e;if(/^[.]{0,2}\//i.test(e))return new URL(e,null==t?location:t).href;if(!e.length||/^[\s._]/.test(e)||/\s$/.test(e))throw Error("illegal name");return"https://unpkg.com/"+e}var tB=tM(function(e){var t=document.createElementNS("http://www.w3.org/2000/svg","g");return t.innerHTML=e.trim(),t},function(){return document.createElementNS("http://www.w3.org/2000/svg","g")}),tU=String.raw;function tj(e){return new Promise(function(t,i){var a=document.createElement("link");a.rel="stylesheet",a.href=e,a.onerror=i,a.onload=t,document.head.appendChild(a)})}async function tG(e){let[t,i,a]=await Promise.all([eP,eF,e$].map(t=>e(t.resolve())));return a.register(t,i)}function tV(){return tT(function(e){var t=e(document.body.clientWidth);function i(){var i=document.body.clientWidth;i!==t&&e(t=i)}return window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}})}function tH(e,t){return null==e||null==t?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function tz(e,t){return null==e||null==t?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function tq(e){let t=Math.min(20,e.length);if(!(t>0))return!1;let i,a=!1;for(let n=0;n<t;++n){let r=e[n];if(null==r)continue;let o=typeof r;if(void 0===i)switch(o){case"number":case"boolean":case"string":case"bigint":i=o;break;default:return!1}else if(o!==i)return!1;a=!0}return a}function tZ(e){let t=Math.min(20,e.length);if(!(t>0))return!1;let i=!1;for(let a=0;a<t;++a){let n=e[a];if(null!=n){if(!(n instanceof Date))return!1;i=!0}}return i}function tW(e){return e instanceof Int8Array||e instanceof Int16Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Uint16Array||e instanceof Uint32Array||e instanceof Float32Array||e instanceof Float64Array}let tJ=Object.assign(async(e,t,i)=>{var a,n,r,o;if((a=e=await tX(await e,"table"))&&("function"==typeof a.sql||"function"==typeof a.queryTag&&("function"==typeof a.query||"function"==typeof a.queryStream))&&a!==tJ)return tQ(e,function(e,t){let i="function"==typeof t.escape?t.escape:e=>e,{select:a,from:n,filter:r,sort:o,slice:l}=e;if(!n.table)throw Error("missing from table");if(a.columns&&0===a.columns.length)throw Error("at least one column must be selected");let s=a.columns?a.columns.map(e=>`t.${i(e)}`):"*",d=[[`SELECT ${s} FROM ${function(e,t){if("object"==typeof e){let i="";return null!=e.database&&(i+=t(e.database)+"."),null!=e.schema&&(i+=t(e.schema)+"."),i+=t(e.table)}return e}(n.table,i)} t`]];for(let c=0;c<r.length;++c)tK(c?`
AND `:`
WHERE `,d),t0(r[c],d,i);for(let u=0;u<o.length;++u)tK(u?", ":`
ORDER BY `,d),t1(o[u],d,i);if("mssql"===t.dialect){if(null!==l.to||null!==l.from){if(!o.length){if(!a.columns)throw Error("at least one column must be explicitly specified. Received '*'.");tK(`
ORDER BY `,d),t1({column:a.columns[0],direction:"ASC"},d,i)}tK(`
OFFSET ${l.from||0} ROWS`,d),tK(`
FETCH NEXT ${null!==l.to?l.to-(l.from||0):1e9} ROWS ONLY`,d)}}else(null!==l.to||null!==l.from)&&tK(`
LIMIT ${null!==l.to?l.to-(l.from||0):1e9}`,d),null!==l.from&&tK(` OFFSET ${l.from}`,d);return d}(t,e),i);if(Array.isArray(n=e)&&(r=n.schema,Array.isArray(r)&&r.every(e=>e&&"string"==typeof e.name)||(o=n.columns,Array.isArray(o)&&o.every(e=>"string"==typeof e))||function(e){let t=Math.min(20,e.length);for(let i=0;i<t;++i){let a=e[i];if(null===a||"object"!=typeof a)return!1}return t>0&&function(e){for(let t in e)return!0;return!1}(e[0])}(n)||tq(n)||tZ(n))||tW(n))return function(e,t){var i;let a=e,{schema:n,columns:r}=e,o=(i=e,tW(i)||tq(i)||tZ(i));for(let{type:l,operands:s}of(o&&(e=Array.from(e,e=>({value:e}))),t.filter)){let[{value:d}]=s,c=s.slice(1).map(({value:e})=>e);switch(l){case"eq":{let[u]=c;if(u instanceof Date){let p=+u;e=e.filter(e=>+e[d]===p)}else e=e.filter(e=>e[d]===u);break}case"ne":{let[f]=c;e=e.filter(e=>e[d]!==f);break}case"c":{let[m]=c;e=e.filter(e=>"string"==typeof e[d]&&e[d].includes(m));break}case"nc":{let[v]=c;e=e.filter(e=>"string"==typeof e[d]&&!e[d].includes(v));break}case"in":{let h=new Set(c);e=e.filter(e=>h.has(e[d]));break}case"nin":{let b=new Set(c);e=e.filter(e=>!b.has(e[d]));break}case"n":e=e.filter(e=>null==e[d]);break;case"nn":e=e.filter(e=>null!=e[d]);break;case"lt":{let[g]=c;e=e.filter(e=>e[d]<g);break}case"lte":{let[x]=c;e=e.filter(e=>e[d]<=x);break}case"gt":{let[y]=c;e=e.filter(e=>e[d]>y);break}case"gte":{let[w]=c;e=e.filter(e=>e[d]>=w);break}default:throw Error(`unknown filter type: ${l}`)}}for(let{column:A,direction:C}of function(e){if("function"!=typeof e[Symbol.iterator])throw TypeError("values is not iterable");return Array.from(e).reverse()}(t.sort)){let E="desc"===C?tH:tz;e===a&&(e=e.slice()),e.sort((e,t)=>E(e[A],t[A]))}let{from:_,to:T}=t.slice;if(_=null==_?0:Math.max(0,_),T=null==T?1/0:Math.max(0,T),(_>0||T<1/0)&&(e=e.slice(Math.max(0,_),Math.max(0,T))),t.select.columns){if(n){let S=new Map(n.map(e=>[e.name,e]));n=t.select.columns.map(e=>S.get(e))}r&&(r=t.select.columns),e=e.map(e=>Object.fromEntries(t.select.columns.map(t=>[t,e[t]])))}return o&&(e=e.map(e=>e.value)),e!==a&&(n&&(e.schema=n),r&&(e.columns=r)),e}(e,t);if(!e)throw Error("missing data source");throw Error("invalid data source")},{sql:(e,t)=>async function(){return tQ(await tX(await e,"sql"),arguments,t)}});async function tX(e,t){if(e instanceof tm){if("table"===t)switch(e.mimeType){case"text/csv":return e.csv({typed:!0});case"text/tab-separated-values":return e.tsv({typed:!0});case"application/json":return e.json()}if(("table"===t||"sql"===t)&&"application/x-sqlite3"===e.mimeType)return e.sqlite();throw Error(`unsupported file type: ${e.mimeType}`)}return e}async function tQ(e,t,i){if(!e)throw Error("missing data source");if("function"==typeof e.queryTag){let a=new AbortController,n={signal:a.signal};if(i.then(()=>a.abort("invalidated")),"function"==typeof e.queryStream)return tY(e.queryStream(...e.queryTag.apply(e,t),n));if("function"==typeof e.query)return e.query(...e.queryTag.apply(e,t),n)}if("function"==typeof e.sql)return e.sql.apply(e,t);throw Error("source does not implement query, queryStream, or sql")}async function*tY(e){let t=await e,i=[];i.done=!1,i.error=null,i.schema=t.schema;try{let a=t.readRows();do{let n=await a.next();if(n.done)i.done=!0;else for(let r of n.value)i.push(r);yield i}while(!i.done)}catch(o){i.error=o,yield i}}function tK(e,t){let i=t[0];i[i.length-1]+=e}function t1({column:e,direction:t},i,a){tK(`t.${a(e)} ${t.toUpperCase()}`,i)}function t0({type:e,operands:t},i,a){if(t.length<1)throw Error("Invalid operand length");if(1===t.length)switch(t2(t[0],i,a),e){case"n":tK(" IS NULL",i);return;case"nn":tK(" IS NOT NULL",i);return;default:throw Error("Invalid filter operation")}if(2===t.length){if(["in","nin"].includes(e));else if(["c","nc"].includes(e)){var n;switch(t2(t[0],i,a),e){case"c":tK(" LIKE ",i);break;case"nc":tK(" NOT LIKE ",i)}t2((n=t[1],{...n,value:`%${n.value}%`}),i,a);return}else{switch(t2(t[0],i,a),e){case"eq":tK(" = ",i);break;case"ne":tK(" <> ",i);break;case"gt":tK(" > ",i);break;case"lt":tK(" < ",i);break;case"gte":tK(" >= ",i);break;case"lte":tK(" <= ",i);break;default:throw Error("Invalid filter operation")}t2(t[1],i,a);return}}switch(t2(t[0],i,a),e){case"in":tK(" IN (",i);break;case"nin":tK(" NOT IN (",i);break;default:throw Error("Invalid filter operation")}(function(e,t){let i=!0;for(let a of e)i?i=!1:tK(",",t),t.push(a.value),t[0].push("")})(t.slice(1),i),tK(")",i)}function t2(e,t,i){"column"===e.type?tK(`t.${i(e.value)}`,t):(t.push(e.value),t[0].push(""))}var t5=Object.assign(Object.defineProperties(function(e){var t,i;let a=null==e?e8:e5(e);Object.defineProperties(this,(i={FileAttachment:()=>tv,Mutable:()=>tN,now:tD,width:tV,dot:()=>a(eO.resolve()),htl:()=>a(eL.resolve()),html:()=>tk,md(){var e;return a(eD.resolve()).then(function(e){return tM(function(t){var i=document.createElement("div");i.innerHTML=e(t,{langPrefix:""}).trim();var n=i.querySelectorAll("pre code[class]");return n.length>0&&a(eM.resolve()).then(function(e){n.forEach(function(t){function i(){e.highlightBlock(t),t.parentNode.classList.add("observablehq--md-pre")}e.getLanguage(t.className)?i():a(eM.resolve("async-languages/index.js")).then(i=>{if(i.has(t.className))return a(eM.resolve("async-languages/"+i.get(t.className))).then(i=>{e.registerLanguage(t.className,i)})}).then(i,i)})}),i},function(){return document.createElement("div")})})},svg:()=>tB,tex(){var e;return Promise.all([a(ek.resolve()),a.resolve(ek.resolve("dist/katex.min.css")).then(tj)]).then(function(e){var t=e[0],i=a();function a(e){return function(){var i=document.createElement("div");return t.render(tU.apply(String,arguments),i,e),i.removeChild(i.firstChild)}}return i.options=a,i.block=a({displayMode:!0}),i})},_:()=>a(eI.resolve()),aq:()=>a.alias({"apache-arrow":eB.resolve()})(eU.resolve()),Arrow:()=>a(eB.resolve()),d3:()=>a(e_.resolve()),Inputs:()=>a(eT.resolve()).then(e=>({...e,file:e.fileOf(tf)})),L:()=>tI(a),mermaid:()=>tL(a),Plot:()=>a(eS.resolve()),__query:()=>tJ,require:()=>a,resolve:()=>t$,SQLite:()=>te(a),SQLiteDatabaseClient:()=>tt,topojson:()=>a(ej.resolve()),vl:()=>tG(a),aapl:()=>new tm("https://static.observableusercontent.com/files/3ccff97fd2d93da734e76829b2b066eafdaac6a1fafdec0faf6ebc443271cfc109d29e80dd217468fcb2aff1e6bffdc73f356cc48feb657f35378e6abbbb63b9").csv({typed:!0}),alphabet:()=>new tm("https://static.observableusercontent.com/files/75d52e6c3130b1cae83cda89305e17b50f33e7420ef205587a135e8562bcfd22e483cf4fa2fb5df6dff66f9c5d19740be1cfaf47406286e2eb6574b49ffc685d").csv({typed:!0}),cars:()=>new tm("https://static.observableusercontent.com/files/048ec3dfd528110c0665dfa363dd28bc516ffb7247231f3ab25005036717f5c4c232a5efc7bb74bc03037155cb72b1abe85a33d86eb9f1a336196030443be4f6").csv({typed:!0}),citywages:()=>new tm("https://static.observableusercontent.com/files/39837ec5121fcc163131dbc2fe8c1a2e0b3423a5d1e96b5ce371e2ac2e20a290d78b71a4fb08b9fa6a0107776e17fb78af313b8ea70f4cc6648fad68ddf06f7a").csv({typed:!0}),diamonds:()=>new tm("https://static.observableusercontent.com/files/87942b1f5d061a21fa4bb8f2162db44e3ef0f7391301f867ab5ba718b225a63091af20675f0bfe7f922db097b217b377135203a7eab34651e21a8d09f4e37252").csv({typed:!0}),flare:()=>new tm("https://static.observableusercontent.com/files/a6b0d94a7f5828fd133765a934f4c9746d2010e2f342d335923991f31b14120de96b5cb4f160d509d8dc627f0107d7f5b5070d2516f01e4c862b5b4867533000").csv({typed:!0}),industries:()=>new tm("https://static.observableusercontent.com/files/76f13741128340cc88798c0a0b7fa5a2df8370f57554000774ab8ee9ae785ffa2903010cad670d4939af3e9c17e5e18e7e05ed2b38b848ac2fc1a0066aa0005f").csv({typed:!0}),miserables:()=>new tm("https://static.observableusercontent.com/files/31d904f6e21d42d4963ece9c8cc4fbd75efcbdc404bf511bc79906f0a1be68b5a01e935f65123670ed04e35ca8cae3c2b943f82bf8db49c5a67c85cbb58db052").json(),olympians:()=>new tm("https://static.observableusercontent.com/files/31ca24545a0603dce099d10ee89ee5ae72d29fa55e8fc7c9ffb5ded87ac83060d80f1d9e21f4ae8eb04c1e8940b7287d179fe8060d887fb1f055f430e210007c").csv({typed:!0}),penguins:()=>new tm("https://static.observableusercontent.com/files/715db1223e067f00500780077febc6cebbdd90c151d3d78317c802732252052ab0e367039872ab9c77d6ef99e5f55a0724b35ddc898a1c99cb14c31a379af80a").csv({typed:!0}),weather:()=>new tm("https://static.observableusercontent.com/files/693a46b22b33db0f042728700e0c73e836fa13d55446df89120682d55339c6db7cc9e574d3d73f24ecc9bc7eb9ac9a1e7e104a1ee52c00aab1e77eb102913c1f").csv({typed:!0}),DOM:tA,Files:tC,Generators:tO,Promises:tF},Object.fromEntries(Object.entries(i).map(t3))))},{resolve:{get:()=>e8.resolve,enumerable:!0,configurable:!0},require:{get:()=>e8,set:e9,enumerable:!0,configurable:!0}}),{resolveFrom:e0,requireFrom:e5});function t3([e,t]){return[e,{value:t,writable:!0,enumerable:!0}]}function t4(e,t){this.message=e+"",this.input=t}function t7(e){return function(){return e}}function t6(e){return e}t4.prototype=Object.create(Error.prototype),t4.prototype.name="RuntimeError",t4.prototype.constructor=t4;var t8=Array.prototype,t9=t8.map;function ie(){}t8.forEach;var it={};function ii(e,t,i){var a;i||(i=it),Object.defineProperties(this,{_observer:{value:i,writable:!0},_definition:{value:io,writable:!0},_duplicate:{value:void 0,writable:!0},_duplicates:{value:void 0,writable:!0},_indegree:{value:NaN,writable:!0},_inputs:{value:[],writable:!0},_invalidate:{value:ie,writable:!0},_module:{value:t},_name:{value:null,writable:!0},_outputs:{value:new Set,writable:!0},_promise:{value:Promise.resolve(void 0),writable:!0},_reachable:{value:i!==it,writable:!0},_rejector:{value:(a=this,function(e){if(e===il)throw e;if(e===io)throw new t4(a._name+" is not defined",a._name);if(e instanceof Error&&e.message)throw new t4(e.message,a._name);throw new t4(a._name+" could not be resolved",a._name)})},_type:{value:e},_value:{value:void 0,writable:!0},_version:{value:0,writable:!0}})}function ia(e){e._module._runtime._dirty.add(e),e._outputs.add(this)}function ir(e){e._module._runtime._dirty.add(e),e._outputs.delete(this)}function io(){throw io}function il(){throw il}function is(e){return function(){throw new t4(e+" is defined more than once")}}function id(e,t,i){var a,n,r=this._module._scope,o=this._module._runtime;if(this._inputs.forEach(ir,this),t.forEach(ia,this),this._inputs=t,this._definition=i,this._value=void 0,i===ie?o._variables.delete(this):o._variables.add(this),e!==this._name||r.get(e)!==this){if(this._name){if(this._outputs.size)r.delete(this._name),(n=this._module._resolve(this._name))._outputs=this._outputs,this._outputs=new Set,n._outputs.forEach(function(e){e._inputs[e._inputs.indexOf(this)]=n},this),n._outputs.forEach(o._updates.add,o._updates),o._dirty.add(n).add(this),r.set(this._name,n);else if((n=r.get(this._name))===this)r.delete(this._name);else if(3===n._type)n._duplicates.delete(this),this._duplicate=void 0,1===n._duplicates.size&&(n=n._duplicates.keys().next().value,a=r.get(this._name),n._outputs=a._outputs,a._outputs=new Set,n._outputs.forEach(function(e){e._inputs[e._inputs.indexOf(a)]=n}),n._definition=n._duplicate,n._duplicate=void 0,o._dirty.add(a).add(n),o._updates.add(n),r.set(this._name,n));else throw Error()}if(this._outputs.size)throw Error();e&&((n=r.get(e))?3===n._type?(this._definition=is(e),this._duplicate=i,n._duplicates.add(this)):2===n._type?(this._outputs=n._outputs,n._outputs=new Set,this._outputs.forEach(function(e){e._inputs[e._inputs.indexOf(n)]=this},this),o._dirty.add(n).add(this),r.set(e,this)):(n._duplicate=n._definition,this._duplicate=i,(a=new ii(3,this._module))._name=e,a._definition=this._definition=n._definition=is(e),a._outputs=n._outputs,n._outputs=new Set,a._outputs.forEach(function(e){e._inputs[e._inputs.indexOf(n)]=a}),a._duplicates=new Set([this,n]),o._dirty.add(n).add(a),o._updates.add(n).add(a),r.set(e,a)):r.set(e,this)),this._name=e}return this._version>0&&++this._version,o._updates.add(this),o._compute(),this}function ic(e,t=[]){Object.defineProperties(this,{_runtime:{value:e},_scope:{value:new Map},_builtins:{value:new Map([["@variable",ih],["invalidation",ib],["visibility",ig],...t])},_source:{value:null,writable:!0}})}async function iu(e){var t=this._scope.get(e);if(!t)throw new t4(e+" is not defined");if(t._observer!==it)return ip(this._runtime,t);t=this.variable(!0).define([e],t6);try{return await ip(this._runtime,t)}finally{t.delete()}}async function ip(e,t){await e._compute();try{return await t._promise}catch(i){if(i===il)return ip(e,t);throw i}}function im(e){return e._name}Object.defineProperties(ii.prototype,{_pending:{value:function(){this._observer.pending&&this._observer.pending()},writable:!0,configurable:!0},_fulfilled:{value:function(e){this._observer.fulfilled&&this._observer.fulfilled(e,this._name)},writable:!0,configurable:!0},_rejected:{value:function(e){this._observer.rejected&&this._observer.rejected(e,this._name)},writable:!0,configurable:!0},define:{value:function(e,t,i){switch(arguments.length){case 1:i=e,e=t=null;break;case 2:i=t,"string"==typeof e?t=null:(t=e,e=null)}return id.call(this,null==e?null:e+"",null==t?[]:t9.call(t,this._module._resolve,this._module),"function"==typeof i?i:t7(i))},writable:!0,configurable:!0},delete:{value:function(){return id.call(this,null,[],ie)},writable:!0,configurable:!0},import:{value:function(e,t,i){return arguments.length<3&&(i=t,t=e),id.call(this,t+"",[i._resolve(e+"")],t6)},writable:!0,configurable:!0}}),Object.defineProperties(ic.prototype,{_resolve:{value:function(e){var t,i,a=this._scope.get(e);if(!a){if(a=new ii(2,this),this._builtins.has(e))a.define(e,t7(this._builtins.get(e)));else if(this._runtime._builtin._scope.has(e))a.import(e,this._runtime._builtin);else{try{i=this._runtime._global(e)}catch(n){return a.define(e,(t=n,function(){throw t}))}void 0===i?this._scope.set(a._name=e,a):a.define(e,t7(i))}}return a},writable:!0,configurable:!0},redefine:{value:function(e){var t=this._scope.get(e);if(!t)throw new t4(e+" is not defined");if(3===t._type)throw new t4(e+" is defined more than once");return t.define.apply(t,arguments)},writable:!0,configurable:!0},define:{value:function(){var e=new ii(1,this);return e.define.apply(e,arguments)},writable:!0,configurable:!0},derive:{value:function(e,t){let i=new Map,a=new Set,n=[];function r(e){let t=i.get(e);return t||((t=new ic(e._runtime,e._builtins))._source=e,i.set(e,t),n.push([t,e]),a.add(e)),t}let o=r(this);for(let l of e){let{alias:s,name:d}="object"==typeof l?l:{name:l};o.import(d,null==s?d:s,t)}for(let c of a)for(let[u,p]of c._scope)if(p._definition===t6){if(c===this&&o._scope.has(u))continue;let f=p._inputs[0]._module;f._source&&r(f)}for(let[m,v]of n)for(let[h,b]of v._scope){let g=m._scope.get(h);if(!g||2===g._type){if(b._definition===t6){let x=b._inputs[0],y=x._module;m.import(x._name,h,i.get(y)||y)}else m.define(h,b._inputs.map(im),b._definition)}}return o},writable:!0,configurable:!0},import:{value:function(){var e=new ii(1,this);return e.import.apply(e,arguments)},writable:!0,configurable:!0},value:{value:iu,writable:!0,configurable:!0},variable:{value:function(e){return new ii(1,this,e)},writable:!0,configurable:!0},builtin:{value:function(e,t){this._builtins.set(e,t)},writable:!0,configurable:!0}});let iv="function"==typeof requestAnimationFrame?requestAnimationFrame:"function"==typeof setImmediate?setImmediate:e=>setTimeout(e,0);var ih={},ib={},ig={};function ix(e=new t5,t=iM){var i=this.module();if(Object.defineProperties(this,{_dirty:{value:new Set},_updates:{value:new Set},_precomputes:{value:[],writable:!0},_computing:{value:null,writable:!0},_init:{value:null,writable:!0},_modules:{value:new Map},_variables:{value:new Set},_disposed:{value:!1,writable:!0},_builtin:{value:i},_global:{value:t}}),e)for(var a in e)new ii(2,i).define(a,[],e[a])}async function iy(){var e,t,i=[],a=this._precomputes;if(a.length){for(let n of(this._precomputes=[],a))n();await function(e=0){let t=Promise.resolve();for(let i=0;i<e;++i)t=t.then(()=>{});return t}(3)}(e=new Set(this._dirty)).forEach(function(t){t._inputs.forEach(e.add,e);let i=function(e){if(e._observer!==it)return!0;var t=new Set(e._outputs);for(let i of t){if(i._observer!==it)return!0;i._outputs.forEach(t.add,t)}return!1}(t);i>t._reachable?this._updates.add(t):i<t._reachable&&t._invalidate(),t._reachable=i},this),(e=new Set(this._updates)).forEach(function(t){t._reachable?(t._indegree=0,t._outputs.forEach(e.add,e)):(t._indegree=NaN,e.delete(t))}),this._computing=null,this._updates.clear(),this._dirty.clear(),e.forEach(function(e){e._outputs.forEach(iA)});do{for(e.forEach(function(e){0===e._indegree&&i.push(e)});t=i.pop();)iS(t),t._outputs.forEach(r),e.delete(t);e.forEach(function(t){iw(t)&&(iO(t,new t4("circular definition")),t._outputs.forEach(iC),e.delete(t))})}while(e.size);function r(e){0==--e._indegree&&i.push(e)}}function iw(e){let t=new Set(e._inputs);for(let i of t){if(i===e)return!0;i._inputs.forEach(t.add,t)}return!1}function iA(e){++e._indegree}function iC(e){--e._indegree}function iE(e){return e._promise.catch(e._rejector)}function i_(e){return new Promise(function(t){e._invalidate=t})}function iT(e,t){let i="function"==typeof IntersectionObserver&&t._observer&&t._observer._node,a=!i,n=ie,r=ie,o,l;return i&&((l=new IntersectionObserver(([e])=>(a=e.isIntersecting)&&(o=null,n()))).observe(i),e.then(()=>(l.disconnect(),l=null,r()))),function(e){return a?Promise.resolve(e):l?(o||(o=new Promise((e,t)=>(n=e,r=t))),o.then(()=>e)):Promise.reject()}}function iS(e){e._invalidate(),e._invalidate=ie,e._pending();let t=e._value,i=++e._version,a=null,n=e._promise=(e._inputs.length?Promise.all(e._inputs.map(iE)).then(function(n){if(e._version!==i)throw il;for(var r=0,o=n.length;r<o;++r)switch(n[r]){case ib:n[r]=a=i_(e);break;case ig:a||(a=i_(e)),n[r]=iT(a,e);break;case ih:n[r]=e}return e._definition.apply(t,n)}):new Promise(i=>i(e._definition.call(t)))).then(function(t){var n,r;if(e._version!==i)throw il;return t&&"function"==typeof t.next&&"function"==typeof t.return?((a||i_(e)).then((r=t,function(){r.return()})),function(e,t,i){let a=e._module._runtime,n;function r(e){return new Promise(e=>e(i.next(n))).then(({done:t,value:i})=>t?void 0:Promise.resolve(i).then(e))}function o(){let i=r(r=>{if(e._version!==t)throw il;return n=r,l(r,i).then(()=>a._precompute(o)),e._fulfilled(r),r});i.catch(a=>{a!==il&&e._version===t&&(l(void 0,i),e._rejected(a))})}function l(t,i){return e._value=t,e._promise=i,e._outputs.forEach(a._updates.add,a._updates),a._compute()}return r(i=>{if(e._version!==t)throw il;return n=i,a._precompute(o),i})}(e,i,t)):t});n.then(t=>{e._value=t,e._fulfilled(t)},t=>{t!==il&&(e._value=void 0,e._rejected(t))})}function iO(e,t){e._invalidate(),e._invalidate=ie,e._pending(),++e._version,e._indegree=NaN,(e._promise=Promise.reject(t)).catch(ie),e._value=void 0,e._rejected(t)}function iM(e){return window[e]}Object.defineProperties(ix,{load:{value:function(e,t,i){if("function"==typeof t&&(i=t,t=null),"function"!=typeof i)throw Error("invalid observer");null==t&&(t=new t5);let{modules:a,id:n}=e,r=new Map,o=new ix(t),l=s(n);function s(e){let t=r.get(e);return t||r.set(e,t=o.module()),t}for(let d of a){let c=s(d.id),u=0;for(let p of d.variables)p.from?c.import(p.remote,p.name,s(p.from)):c===l?c.variable(i(p,u,d.variables)).define(p.name,p.inputs,p.value):c.define(p.name,p.inputs,p.value),++u}return o},writable:!0,configurable:!0}}),Object.defineProperties(ix.prototype,{_precompute:{value:function(e){this._precomputes.push(e),this._compute()},writable:!0,configurable:!0},_compute:{value:function(){return this._computing||(this._computing=this._computeSoon())},writable:!0,configurable:!0},_computeSoon:{value:function(){return new Promise(iv).then(()=>this._disposed?void 0:this._computeNow())},writable:!0,configurable:!0},_computeNow:{value:iy,writable:!0,configurable:!0},dispose:{value:function(){this._computing=Promise.resolve(),this._disposed=!0,this._variables.forEach(e=>{e._invalidate(),e._version=NaN})},writable:!0,configurable:!0},module:{value:function(e,t=ie){let i;if(void 0===e)return(i=this._init)?(this._init=null,i):new ic(this);if(i=this._modules.get(e))return i;this._init=i=new ic(this),this._modules.set(e,i);try{e(this,t)}finally{this._init=null}return i},writable:!0,configurable:!0},fileAttachments:{value:function(e){return Object.assign(t=>{let i=e(t+="");if(null==i)throw Error(`File not found: ${t}`);if("object"==typeof i&&"url"in i){let{url:a,mimeType:n}=i;return new tm(a,t,n)}return new tm(i,t)},{prototype:tm.prototype})},writable:!0,configurable:!0}})},5347:function(e,t,i){e.exports=i.p+"static/media/186949b230e46bbd80611c8b1224e2003c90fd71528ff034cabe25dc74445f782670632623e35cfdc778c27fcc6fce67fe7fc4e12ef7168cbf594a25934412d3.fe6d926d.csv"},1331:function(e,t,i){e.exports=i.p+"static/media/f2201770123f4b364781aee7ac3512db444637a3ad42ef096c62d05e6637e8d48b4875ec59b514f9f028ae6c85b557a5d74de4b1e2d1c18d62c5114c6c9c27fa.213d22d6.csv"},582:function(e,t,i){e.exports=i.p+"static/media/186949b230e46bbd80611c8b1224e2003c90fd71528ff034cabe25dc74445f782670632623e35cfdc778c27fcc6fce67fe7fc4e12ef7168cbf594a25934412d3.fe6d926d.csv"},2221:function(e,t,i){e.exports=i.p+"static/media/f2201770123f4b364781aee7ac3512db444637a3ad42ef096c62d05e6637e8d48b4875ec59b514f9f028ae6c85b557a5d74de4b1e2d1c18d62c5114c6c9c27fa.213d22d6.csv"},5156:function(e,t,i){e.exports=i.p+"static/media/186949b230e46bbd80611c8b1224e2003c90fd71528ff034cabe25dc74445f782670632623e35cfdc778c27fcc6fce67fe7fc4e12ef7168cbf594a25934412d3.fe6d926d.csv"},2236:function(e,t,i){e.exports=i.p+"static/media/f2201770123f4b364781aee7ac3512db444637a3ad42ef096c62d05e6637e8d48b4875ec59b514f9f028ae6c85b557a5d74de4b1e2d1c18d62c5114c6c9c27fa.213d22d6.csv"},2789:function(e,t,i){e.exports=i.p+"static/media/00a731a6f302623f44df0e6ccf0109eb8e6f987662a4a7de47532fa4c4e500e6d7b671b3263883e96ed80ec0c463b92ab37f0727785dd3041c4f5f3f817d69c5.0e85747a.json"},285:function(e,t,i){e.exports=i.p+"static/media/09f204ccffdfb2918af2b98f13ad7ca24c4ea7e07a884e38ecf0e1f26008493cc5ed81a9bec3759c8d9b28453a69b3af7367257282d736e86fd5911219781594.3ce001f0.csv"},1848:function(e,t,i){e.exports=i.p+"static/media/16b2a6ff3bd8958f70981c7dcf3d8df8963d3b090e070356369d0351a4727f07cdcb3671376d5f52bb7885407b82cbb9b91e59be48c59f2561e99be3c3826c7d.28bb8602.csv"},1644:function(e,t,i){e.exports=i.p+"static/media/286bfcab293547b0b0d2222f6055ccef1f064e020131ef4aa44c88546a061dedba121772061f7ab730196cafd5d88cccff0f3446b7f4f61452ae3c46d73fca5d.e1139741.csv"},7591:function(e,t,i){e.exports=i.p+"static/media/2880e81ce12a7c1ddfaeac0771b67ed977ff05b7a4424bcb813c8ae1ba17e4a66c6409f0bd98e4354be268ce56669464a9bcfe94aa862b9982bf7edb6dbcb13c.d68b32e1.json"},1731:function(e,t,i){e.exports=i.p+"static/media/37d83ede2d54f8dc8d4d34fbb343d76c5c35598361224edb9250e1e0cb3d4e4721e48544a66ed0b851a8f450d173ecea158bbbe8b99f9b934dceb7da0ca75362.5a589e33.csv"},9555:function(e,t,i){e.exports=i.p+"static/media/a2301ed0ed118644a516238abc5408f2db17ee67772fd9b7bb61f4680aef60798b2b5e1e9073bdd79a64b00abcdb4491337be8919af1ef13759f229644763a56.918a74b9.png"},8875:function(e,t,i){e.exports=i.p+"static/media/b46883151e041b592666544e68e6e8e4a40c8d8638624dc4b8904749fd0da9325b877aad74811fca5f10756f5b5b269a514f4e6c336ac1a64f3256a598160a4d.b9654907.csv"},5521:function(e,t,i){e.exports=i.p+"static/media/c051fbc024553912e31968b35e537d4ad3592201b5f8e7bd13fd9d02e38599c5d541a704d0858c676328babb3e5c9c35dd7c6d67240090d094882a1cad8eece4.5a9f7c51.gif"},78:function(e,t,i){e.exports=i.p+"static/media/c4a76bf56594363a92c77a42b5a59a5ceec64d0fc1d6d203a7e76e8952eba5fafa4106f11bb323e5636913f9a0377ca33c6e946cd1aa2203fab5767dbe312876.c6b4f5ae.csv"},1371:function(e,t,i){e.exports=i.p+"static/media/cceb7b1fe14fcf7fe29c3983f38219769a40ef20882b1d53a60ae5ea7d7fa4178c5f8d84067424d9530cb9f91ed9e326f443f819d4cb418dd6c915db15774481.b5ea54eb.json"},2742:function(e,t,i){e.exports=i.p+"static/media/df28d6fa9d61d14764b813e3ef9e63448e032cef21b8a16cfe40cb3f966c41f7fe6768b3c707450a18f59c50ad6ae9f64466ef8a07e657ba0a7698190d0c490f.d31e2937.csv"},784:function(e,t,i){function a(e){return e`# Amplia Saude - Fonte de Dados e Menu - AGO2022`}function n(e){return e`## Menu Amplia`}function r(e,t){return function(i,a){let n=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M7.87022 11.875L8.27489 11.5813L8.27479 11.5812L8.27437 11.5806L8.27271 11.5783L8.26613 11.5693L8.24029 11.5336L8.14075 11.3965L7.77298 10.8897L6.54497 9.19795C5.5772 7.86508 4.40312 6.24886 3.57783 5.11549C3.4851 4.9864 3.47887 4.82826 3.53937 4.69659C3.59954 4.56564 3.70401 4.5 3.81824 4.5H15.1818C15.296 4.5 15.4005 4.56564 15.4606 4.69659C15.5211 4.82825 15.5149 4.98637 15.4222 5.11546C14.5967 6.24906 13.4246 7.86547 12.4588 9.19836C11.9758 9.86506 11.5443 10.4609 11.2336 10.8901L10.8667 11.397L10.7674 11.5342L10.7416 11.5698L10.7351 11.5788L10.7334 11.5811L10.733 11.5817L10.7329 11.5818L11.1379 11.875L10.7329 11.5819L10.6379 11.7131V11.875V17.125C10.6379 17.363 10.4624 17.5 10.321 17.5H8.68715C8.54577 17.5 8.37022 17.363 8.37022 17.125V11.875V11.7127L8.27493 11.5814L7.87022 11.875Z" stroke="white"/>
<path d="M18.75 11.5C18.75 13.8472 16.8472 15.75 14.5 15.75C12.1528 15.75 10.25 13.8472 10.25 11.5C10.25 9.15279 12.1528 7.25 14.5 7.25C16.8472 7.25 18.75 9.15279 18.75 11.5Z" fill="white" stroke="#151472" stroke-width="0.5"/>
<path d="M16.8126 9.70565C16.9556 9.56262 16.9556 9.33072 16.8126 9.18769C16.6696 9.04466 16.4377 9.04466 16.2946 9.18769L14.5001 10.9822L12.7056 9.18769C12.5626 9.04466 12.3307 9.04466 12.1877 9.18769C12.0447 9.33072 12.0447 9.56262 12.1877 9.70565L13.9822 11.5001L12.1877 13.2946C12.0447 13.4377 12.0447 13.6696 12.1877 13.8126C12.3307 13.9556 12.5626 13.9556 12.7056 13.8126L14.5001 12.0181L16.2946 13.8126C16.4377 13.9556 16.6696 13.9556 16.8126 13.8126C16.9556 13.6696 16.9556 13.4377 16.8126 13.2946L15.0181 11.5001L16.8126 9.70565Z" fill="#151472"/>
</svg>`,r=`<svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8C2 6 2.39956 2 5.9956 2C11.2138 2 8.9923 8 12.9879 8C17.4829 8 16.9835 4 16.9835 2" stroke="#151472" stroke-width="3"/>
</svg>`,o=`<svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 7C1 5 1.39956 1 4.9956 1C10.2138 1 7.9923 7 11.9879 7C16.4829 7 15.9835 3 15.9835 1" stroke="#151472" stroke-width="1.5" stroke-dasharray="2.5 1"/>
</svg>`,l=0,s=Symbol(),d=Symbol(),c=Symbol();function u(n,r,o,u){r=r||"";let p=document.createElement("div"),m={},v={},h={};Object.defineProperty(m,"expression",{get(){let e={};for(let t in m){let i=m[t];"expression"!=t&&(e[i[0]]=i[1])}return e}}),Object.defineProperty(m,"urlids",{get(){let e=[];for(let t in h)e.push(h[t]);return e.join("")}});let b=document.createElement("div"),g=document.createElement("div"),x=document.createElement("div"),y=document.createElement("div"),w=document.createElement("div"),A=document.createElement("div");b.classList.add("menuAbas"),g.classList.add("abas"),y.classList.add("legenda"),x.classList.add("menuCompacto"),w.classList.add("background-1"),A.classList.add("background-2"),b.append(g),b.append(x),b.append(w),b.append(A),x.append(y),b.setAttribute("style",`--corFundoMenu: ${o};`),u&&b.classList.add("principal"),i.forEach((i,n)=>{!function(i,n,o){let u="m"+ ++l,f=document.createElement("div"),b=document.createElement("div"),g=document.createElement("div"),x=document.createElement("div"),y=document.createElement("div"),w=document.createElement("div"),A=document.createElement("div"),C=document.createElement("div"),E=o+2;m[n.varName]="",v[n.varName]="",h[n.varName]="";let _=[];function T(){f[d](),p.dispatchEvent(new t("input"))}f[d]=function(){let t=_.filter(e=>e.checked).map(t=>e(t.value)),i=_.filter(e=>e.checked).map(e=>e[c].expression),a=_.filter(e=>e.checked).map(e=>e[c].urlid);m[n.varName]=[n.attrIndex,i],h[n.varName]=a.join(""),t.length?b.classList.add("selecionado"):b.classList.remove("selecionado");let r=t.join(e(" ou "));y.innerHTML=r,y.setAttribute("title",r),v[n.varName]=r},f.classList.add("itemMenuCompacto"),f.classList.add(n.varName),b.classList.add("titulo"),b.innerHTML=e(n.title),x.classList.add("valoresSelecionados"),y.classList.add("textoValoresSelecionados"),w.classList.add("icone"),w.innerHTML="expand_more",f.append(b),g.append(x),f.append(g),x.append(w),x.append(y),A.classList.add("submenu"),A.style["grid-column"]=E+"/"+(E+1),C.classList.add("itens"),C.classList.add("i"+o),C.classList.add("ABA"+a),A.append(C),f[s]=A,f.style["grid-column-start"]=E,f.addEventListener("click",e=>{if(f.classList.contains("aberto"))f.classList.remove("aberto"),A.classList.remove("aberto");else{let t=f.parentNode.querySelector(".aberto");t&&(t.classList.remove("aberto"),t[s].classList.remove("aberto")),f.classList.add("aberto"),A.classList.add("aberto")}});let S=null;n.itens.forEach((t,i)=>{let a=document.createElement("div"),o=document.createElement("label"),l=document.createElement("input");o.innerHTML=e(t.name),o.setAttribute("for",u+i),l.setAttribute("type",n.input),l.setAttribute("value",t.name),r.indexOf(t.urlid)>=0&&l.setAttribute("checked","checked"),l.setAttribute("id",u+i),l.setAttribute("name","radio"===n.input?u:u+i),l[c]=t,a.classList.add("item"),a.append(l),a.append(o),C.append(a),_.push(l),l.addEventListener("input",e=>{e.stopPropagation(),T()}),"radio"==n.input&&l.addEventListener("click",e=>{if(e.target===S){e.target.checked=!1,S=null,T();return}S=e.target})}),i.append(f),i.append(A),f[d]()}(x,i,n)});let C=p.attachShadow({mode:"open"});return C.append(function(){let e=document.createElement("style");return e.textContent=`                  
          div.menuAbas {
            --corFundoItemAberto: #F4F4F4;
            --corAltaInfluencia: #B90404;
            --corFonte: #151472;
            --corFonteDesabilitada: #aaa;

            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;     
            display: grid;
            grid-template-columns: 1fr;
            width: 100%;
            font-family: "Roboto Condensed";  
            color: var(--corFonte);
            margin: 0px 0px;
          }

          div.menuAbas div.abas {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            font-size: 14px;
            display: grid;
            grid-template-columns: repeat(3,1fr);
            gap: 1px;
          }

          div.menuAbas div.abas div.aba {
            position: relative;
            display: grid;
            background-color: #F4F4F4;
            padding: 8px 0;
            font-weight: 700;
            border-radius: 6px 6px 0 0;
            grid-template-columns: 80px 1fr;
          }

          div.menuAbas div.abas div.aba div.limpaFiltro {
            display: none;
          }

          div.menuAbas div.abas div.aba.selecionada div.limpaFiltro {
            font-size: 10px;
            line-height: 1;
            display: grid;
            column-gap: 3px;
            grid-template-columns: 25px 50px;
            padding-left: 5px;
            grid-column: 1 / 2;
            grid-row: 1 / 2;
          }

          div.menuAbas div.abas div.aba span.tituloAba {
            grid-column: 1 / 3;
            grid-row: 1 / 2;
            text-align: center;
          }

          div.menuAbas div.abas div.aba.desabilitada {
              color: var(--corFonteDesabilitada);
          }

          div.menuAbas div.abas div.aba.selecionada {
            background-color: #E5E5E5;
            box-shadow: 2px -2px 6px rgba(0, 0, 0, 0.25);
            z-index: 2;
          }

          div.menuAbas div.menuCompacto {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            display: grid;
            grid-template-columns: 80px repeat(${i.length},85px) 8px;
            gap: 10px;
            width: fit-content;
          }

          div.menuAbas div.background-1 {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            z-index: 1;
          }

          div.principal div.background-1 {
            box-shadow: 2px -2px 6px rgba(0, 0, 0, 0.25);
          }

          div.menuAbas div.background-2 {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            background-color: var(--corFundoMenu);
            z-index: 3;
          }

          div.menuAbas .legenda {
            display: flex;
            flex-direction: column;
            background-color: var(--corFundoItemAberto);
            padding: 7px 5px 3px 5px;
            font-size: 12px;
            line-height: 1;
            z-index: 4;
          }

          div.menuAbas .legenda .titulo {
            text-align: center;
            min-height: 18px;
          }

          div.menuAbas .legenda .icone {
            padding-top: 5px;
            text-align: center;
          }

          div.itemMenuCompacto {
            display: flex;
            flex-direction: column;
            background-color: var(--corFundoMenu);
            padding: 7px 5px 3px 5px;
            font-size: 12px;
            line-height: 1;
            grid-row-start: 1;
            grid-row-end: 2;  
            border-radius: 5px 5px 0 0;
            transition: background-color 1s, box-shadow 1s;
            z-index: 4;
            justify-content: end;
          }

          div.itemMenuCompacto.aberto {
            box-shadow: 0px 6px 0px 0px #F4F4F4, 2px 0px 4px #00000030;
            background-color: var(--corFundoItemAberto);
          }

          div.itemMenuCompacto div.titulo {
            font-weight: 300;
            text-transform: uppercase;
            text-align: center;
            white-space: nowrap;
          }

          div.itemMenuCompacto div.titulo.selecionado {
            font-weight: 700;
          }

          div.itemMenuCompacto div.valoresSelecionados {
            display: flex;
            flex-direction: row-reverse;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center; 
            line-height: 20px;
          }

          div.itemMenuCompacto div.valoresSelecionados div.textoValoresSelecionados {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;  
          }

          div.itemMenuCompacto div.valoresSelecionados div.icone {
            display: inline;
            font-family: 'Material Icons';
            font-weight: normal;
            font-style: normal;
            font-size: 24px;
            line-height: 0.8;
            letter-spacing: normal;
            text-transform: none;
            padding: 0px;
            white-space: nowrap;
            word-wrap: normal;
            direction: ltr;
            transform: rotate(0deg);
            transition: transform 1s;
            -webkit-font-feature-settings: 'liga';
            -webkit-font-smoothing: antialiased;
          }

          div.itemMenuCompacto.aberto div.valoresSelecionados div.icone {
            transform: rotate(-180deg);
          }

          div.menuCompacto .submenu {
            box-shadow: 2px -2px 4px #00000030;
            position: relative;
            background-color: var(--corFundoItemAberto);
            grid-row-start: 1;
            grid-row-end: 2;
            top: 20px;
            height: 6px;
            opacity: 0;
            transition: top 1s, opacity 1s;
            z-index: 3;
          }

          div.menuCompacto .submenu::after {
            content: "";
            position: absolute;
            display: block;
            background-color: var(--corFundoItemAberto);
            box-shadow: none;
            top: calc(100% - 12px);
            width: 100%;
            height: 12px;
          }

          div.menuCompacto .submenu.aberto {
            top: 100%;
            opacity: 1;
          }

          div.menuCompacto .submenu .itens {
            box-shadow: 2px -2px 4px #00000030;
            position: absolute;
            left: 50%;
            top: 100%;
            transform: translate(-50%,0);
            background-color: var(--corFundoItemAberto);
            padding: 8px 10px 8px 20px;
            border-radius: 6px;
            margin-top: 0px;
            display: flex;
            width: fit-content;
            gap: 25px;
          }

          div.menuCompacto .submenu.aberto .itens {
          }

          div.menuCompacto .submenu .itens.i0.ABA0 {
            transform: translate(-30%,0);
          }

          div.menuCompacto .submenu .itens.i1.ABA0 {
            left: 50%;
            transform: translate(-20%,0);
          }

          div.menuCompacto .submenu .itens.i10.ABA0 {
            transform: translate(-60%,0);
          }

          div.menuCompacto .submenu .itens.i12.ABA0 {
            transform: translate(-80%,0);
          }

          div.menuCompacto .submenu .itens.i0.ABA1 {
            transform: translate(-30%,0);
          }

          div.menuCompacto .submenu .itens.i1.ABA1 {
            left: 50%;
            transform: translate(-20%,0);
          }

          div.menuCompacto .submenu .itens.i10.ABA1 {
            transform: translate(-60%,0);
          }

          div.menuCompacto .submenu .itens.i12.ABA1 {
            transform: translate(-80%,0);
          }

          div.menuCompacto .submenu .itens.i0.ABA2 {
            transform: translate(-30%,0);
          }

          div.menuCompacto .submenu .itens.i3.ABA2 {
            transform: translate(-30%,0);
          }

          div.menuCompacto .submenu .itens .item {
            display: flex;
            align-items: center;
            white-space: nowrap;
            gap: 6px;
          }

          div.menuCompacto .submenu .itens .item label {
            font-size: 12px;
          }

          div.menuCompacto .submenu .itens .item input {
            -webkit-appearance: none;
            appearance: none;
            margin: 0px;
            width: 17px;
            height: 17px;
            border: 3px var(--corFonte) solid;
          }

          div.menuCompacto .submenu .itens .item input[type=radio] {
            border-radius: 50%;
          }

          div.menuCompacto .submenu .itens .item input:checked {
            background-color: var(--corFonte);  
          }

          div.menuCompacto .submenu .itens .item input:focus {
            outline: 0;  
          }

          div.menuCompacto .submenu .itens .item input[type=checkbox] {
            border-radius: 2px;
          }  
      `,e}()),C.append(b),p.limpa=function(){let e=x.querySelectorAll("input:checked");for(let i=0;i<e.length;i++)e[i].checked=!1;let a=x.querySelectorAll(".itemMenuCompacto");for(let n=0;n<a.length;n++)a[n][d]();p.dispatchEvent(new t("input"))},p.cloneMenu=function(){let e=x.querySelectorAll("input:checked"),t=f(n),i=t.shadowRoot.querySelectorAll("input");for(let a=0;a<e.length;a++)for(let r=0;r<i.length;r++)e[a][c]===i[r][c]&&(i[r].checked=!0);let o=t.shadowRoot.querySelectorAll(".itemMenuCompacto");for(let l=0;l<o.length;l++)o[l][d]();return t},Object.defineProperty(p,"value",{get:()=>m}),Object.defineProperty(p,"texto",{get:()=>v}),[p,g,y]}function p(t,i,r){let o,l;if(o=document.createElement("div"),(l=document.createElement("span")).classList.add("tituloAba"),l.innerHTML=e(i),o.classList.add("aba"),o.appendChild(l),a===r){let s,d,c;o.classList.add("selecionada"),(c=document.createElement("div")).classList.add("limpaFiltro"),s=document.createElement("span"),d=document.createElement("span"),s.innerHTML=n,d.innerHTML=e("LIMPAR<br>FILTROS"),c.appendChild(s),c.appendChild(d),o.appendChild(c),c.addEventListener("click",e=>{t.limpa(),t.dispatchEvent(new CustomEvent("limparFiltros",{detail:{index:r+1}}))})}else o.addEventListener("click",e=>{t.dispatchEvent(new CustomEvent("aba",{detail:{index:r+1}}))});return o}function f(e,t,a){let[n,r,l]=u(null,t,a,!1),s=n.shadowRoot.querySelector(".menuCompacto");s.style["grid-template-columns"]=`110px repeat(${i.length},84px) 0px`,s.style.gap="2px",l.style["background-color"]="#ffffff66",l.style.color="var(--corFonte)",l.style["border-radius"]="0px 0px 0px 8px";let d=document.createElement("div"),c=document.createElement("div");return d.classList.add("titulo"),d.innerHTML="&nbsp",c.classList.add("icone"),c.innerHTML=o,l.append(d),l.append(c),n}return{principal:function(t){let[i,a,n]=u(null,t,"#E5E5E5",!0);a.append(p(i,"NASCIDOS VIVOS",0)),a.append(p(i,"CARACTER\xcdSTICAS DO NASCIMENTO",1)),a.append(p(i,"MORTALIDADE PERINATAL E INFANTIL",2));let o=document.createElement("div"),l=document.createElement("div");return o.classList.add("titulo"),l.classList.add("icone"),l.innerHTML=r,o.innerHTML=e("CONSULTA<br>PRINCIPAL"),n.append(o),n.append(l),i},local:f}}}function o(e){return e`### Nascidos Vivos`}function l(e){return e.principal()}function s(){return[{title:"PESO AO<br>NASCER",varName:"PESO",ordinal:!0,input:"checkbox",attrIndex:0,itens:[{name:"Normal",style:[],expression:[3],urlid:"A"},{name:"Baixo peso",style:["alta-influencia"],expression:[2],urlid:"B"},{name:"Muito baixo peso",style:["alta-influencia"],expression:[1],urlid:"C"},{name:"Ignorado",style:[],expression:[0],urlid:"D"}]},{title:"IDADE<br>GESTACIONAL",varName:"IDADE_GESTACIONAL",ordinal:!0,input:"checkbox",attrIndex:1,itens:[{name:"P\xf3s-termo",style:[],expression:[7],urlid:"E"},{name:"A termo tardio",style:[],expression:[6],urlid:"F"},{name:"A termo completo",style:[],expression:[5],urlid:"G"},{name:"A termo precoce",style:[],expression:[4],urlid:"H"},{name:"Pr\xe9-termo moderado",style:["alta-influencia"],expression:[3],urlid:"I"},{name:"Muito pr\xe9-termo",style:["alta-influencia"],expression:[2],urlid:"J"},{name:"Pr\xe9-termo extremo",style:["alta-influencia"],expression:[1],urlid:"K"},{name:"Ignorado",style:[],expression:[0],urlid:"L"}]},{title:"ADEQUA\xc7\xc3O \xc0<br>IDADE GESTAC.",varName:"ADEQ_IDADE_GESTACIONAL",ordinal:!0,input:"checkbox",attrIndex:2,itens:[{name:"GIG",style:[],expression:[3],urlid:"M"},{name:"AIG",style:["alta-influencia"],expression:[2],urlid:"N"},{name:"PIG",style:["alta-influencia"],expression:[1],urlid:"O"},{name:"Ignorado",style:[],expression:[0],urlid:"P"}]},{title:"SEXO",varName:"SEXO",ordinal:!1,input:"checkbox",attrIndex:3,itens:[{name:"Feminino",style:[],expression:[2],urlid:"Q"},{name:"Masculino",style:[],expression:[1],urlid:"R"},{name:"Indeterminado",style:[],expression:[0],urlid:"S"}]},{title:"ANOMALIA<br>CONG\xcaNITA",varName:"ANOMAL_CONGENITA",ordinal:!1,input:"radio",attrIndex:4,itens:[{name:"N\xe3o",style:[],expression:[2],urlid:"T"},{name:"Sim",style:["alta-influencia"],expression:[1],urlid:"U"},]},{title:"RA\xc7A/COR<br>DA M\xc3E",varName:"RACA_COR_MAE",ordinal:!1,input:"checkbox",attrIndex:5,itens:[{name:"Branca",style:[],expression:[1],urlid:"V"},{name:"Preta",style:[],expression:[2],urlid:"W"},{name:"Parda",style:[],expression:[4],urlid:"X"},{name:"Outros",style:[],expression:[3,4,5],urlid:"Y"},{name:"Ignorado",style:[],expression:[0],urlid:"Z"}]},{title:"ESCOLARIDADE<br>DA M\xc3E",varName:"ESCOLARIDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:6,itens:[{name:"Superior",style:[],expression:[7],urlid:"a"},{name:"Ensino m\xe9dio",style:[],expression:[6],urlid:"b"},{name:"Fundamental completo",style:[],expression:[5],urlid:"c"},{name:"Fundamental incompleto",style:[],expression:[4,3,2],urlid:"d"},{name:"Sem",style:[],expression:[1],urlid:"e"},{name:"Ignorado",style:[],expression:[0],urlid:"f"}]},{title:"ESTADO CIVIL<br>DA M\xc3E",varName:"ESTADO_CIVIL_MAE",ordinal:!1,input:"checkbox",attrIndex:7,itens:[{name:"Solteira",style:[],expression:[1],urlid:"g"},{name:"Casada ou uni\xe3o est\xe1vel",style:[],expression:[2],urlid:"h"},{name:"Vi\xfava",style:[],expression:[3],urlid:"i"},{name:"Separada ou divorcidada",style:[],expression:[4],urlid:"j"},{name:"Ignorado",style:[],expression:[0],urlid:"k"}]},{title:"IDADE<br>DA M\xc3E",varName:"IDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:8,itens:[{name:"10-14",style:[],expression:[1],urlid:"l"},{name:"15-19",style:[],expression:[2],urlid:"m"},{name:"20-29",style:[],expression:[3],urlid:"n"},{name:"30-39",style:[],expression:[4],urlid:"o"},{name:"40-49",style:["alta-influencia"],expression:[5],urlid:"p"},{name:"50+",style:["alta-influencia"],expression:[6],urlid:"q"},{name:"Ignorado",style:[],expression:[0],urlid:"r"}]},{title:"CONSULTAS<BR>DE PR\xc9 NATAL",varName:"CONSULTAS",ordinal:!0,input:"checkbox",attrIndex:9,itens:[{name:"7+",style:[],expression:[4],urlid:"s"},{name:"4 a 6",style:[],expression:[3],urlid:"t"},{name:"1 a 3",style:["alta-influencia"],expression:[2],urlid:"u"},{name:"0",style:["alta-influencia"],expression:[1],urlid:"v"},{name:"Ignorado",style:[],expression:[0],urlid:"w"}]},{title:"TIPO<br>PARTO",varName:"PARTO",ordinal:!1,input:"checkbox",attrIndex:10,itens:[{name:"Vaginal",style:[],expression:[1],urlid:"x"},{name:"Ces\xe1rio",style:[],expression:[2],urlid:"y"},{name:"Indeterminado",style:[],expression:[0],urlid:"z"}]},{title:"TRAB PARTO<br>INDUZIDO",varName:"STTRABPART",ordinal:!1,input:"radio",attrIndex:11,itens:[{name:"SIM",style:[],expression:[1],urlid:"9"},{name:"N\xc3O",style:[],expression:[2],urlid:"8"},]},{title:"ADEQUA\xc7\xc3O<br>PR\xc9 NATAL",varName:"KOTELCHUCK",ordinal:!0,input:"checkbox",attrIndex:12,itens:[{name:"N\xe3o fez",style:["alta-influencia"],expression:[1],urlid:"7"},{name:"Inadequado",style:["alta-influencia"],expression:[2],urlid:"6"},{name:"Intermedi\xe1rio",style:[],expression:[3],urlid:"5"},{name:"Adequado",style:[],expression:[4],urlid:"4"},{name:"Mais que adequado",style:[],expression:[5],urlid:"3"},{name:"Ignorado",style:[],expression:[0],urlid:"2"},]},]}function d(e,t){return e(t,0)}function c(e){return e`### Características do Nascimento`}function u(e){return e.principal()}function p(){return[{title:"PESO AO<br>NASCER",varName:"PESO",ordinal:!0,input:"checkbox",attrIndex:0,itens:[{name:"Normal",style:[],expression:[3],urlid:"A"},{name:"Baixo peso",style:["alta-influencia"],expression:[2],urlid:"B"},{name:"Muito baixo peso",style:["alta-influencia"],expression:[1],urlid:"C"},{name:"Ignorado",style:[],expression:[0],urlid:"D"}]},{title:"IDADE<br>GESTACIONAL",varName:"IDADE_GESTACIONAL",ordinal:!0,input:"checkbox",attrIndex:1,itens:[{name:"P\xf3s-termo",style:[],expression:[7],urlid:"E"},{name:"A termo tardio",style:[],expression:[6],urlid:"F"},{name:"A termo completo",style:[],expression:[5],urlid:"G"},{name:"A termo precoce",style:[],expression:[4],urlid:"H"},{name:"Pr\xe9-termo tardio",style:["alta-influencia"],expression:[3],urlid:"I"},{name:"Pr\xe9-termo moderado",style:["alta-influencia"],expression:[2],urlid:"J"},{name:"Muito pr\xe9-termo",style:["alta-influencia"],expression:[1],urlid:"K"},{name:"Ignorado",style:[],expression:[0],urlid:"L"}]},{title:"ADEQUA\xc7\xc3O \xc0<br>IDADE GESTAC.",varName:"ADEQ_IDADE_GESTACIONAL",ordinal:!0,input:"checkbox",attrIndex:2,itens:[{name:"GIG",style:[],expression:[3],urlid:"M"},{name:"AIG",style:["alta-influencia"],expression:[2],urlid:"N"},{name:"PIG",style:["alta-influencia"],expression:[1],urlid:"O"},{name:"Ignorado",style:[],expression:[0],urlid:"P"}]},{title:"SEXO",varName:"SEXO",ordinal:!1,input:"checkbox",attrIndex:3,itens:[{name:"Feminino",style:[],expression:[2],urlid:"Q"},{name:"Masculino",style:[],expression:[1],urlid:"R"},{name:"Indeterminado",style:[],expression:[0],urlid:"S"}]},{title:"ANOMALIA<br>CONG\xcaNITA",varName:"ANOMAL_CONGENITA",ordinal:!1,input:"radio",attrIndex:4,itens:[{name:"N\xe3o",style:[],expression:[2],urlid:"T"},{name:"Sim",style:["alta-influencia"],expression:[1],urlid:"U"},]},{title:"RA\xc7A/COR<br>DA M\xc3E",varName:"RACA_COR_MAE",ordinal:!1,input:"checkbox",attrIndex:5,itens:[{name:"Branca",style:[],expression:[1],urlid:"V"},{name:"Preta",style:[],expression:[2],urlid:"W"},{name:"Parda",style:[],expression:[4],urlid:"X"},{name:"Outros",style:[],expression:[3,4,5],urlid:"Y"},{name:"Ignorado",style:[],expression:[0],urlid:"Z"}]},{title:"ESCOLARIDADE<br>DA M\xc3E",varName:"ESCOLARIDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:6,itens:[{name:"Superior",style:[],expression:[7],urlid:"a"},{name:"Ensino m\xe9dio",style:[],expression:[6],urlid:"b"},{name:"Fundamental completo",style:[],expression:[5],urlid:"c"},{name:"Fundamental incompleto",style:[],expression:[4,3,2],urlid:"d"},{name:"Sem",style:[],expression:[1],urlid:"e"},{name:"Ignorado",style:[],expression:[0],urlid:"f"}]},{title:"ESTADO CIVIL<br>DA M\xc3E",varName:"ESTADO_CIVIL_MAE",ordinal:!1,input:"checkbox",attrIndex:7,itens:[{name:"Solteira",style:[],expression:[1],urlid:"g"},{name:"Casada ou uni\xe3o est\xe1vel",style:[],expression:[2],urlid:"h"},{name:"Vi\xfava",style:[],expression:[3],urlid:"i"},{name:"Separada ou divorcidada",style:[],expression:[4],urlid:"j"},{name:"Ignorado",style:[],expression:[0],urlid:"k"}]},{title:"IDADE<br>DA M\xc3E",varName:"IDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:8,itens:[{name:"10-14",style:[],expression:[1],urlid:"l"},{name:"15-19",style:[],expression:[2],urlid:"m"},{name:"20-29",style:[],expression:[3],urlid:"n"},{name:"30-39",style:[],expression:[4],urlid:"o"},{name:"40-49",style:["alta-influencia"],expression:[5],urlid:"p"},{name:"50+",style:["alta-influencia"],expression:[6],urlid:"q"},{name:"Ignorado",style:[],expression:[0],urlid:"r"}]},{title:"APGAR<BR>5\xba MINUTO",varName:"APGAR5",ordinal:!0,input:"checkbox",attrIndex:13,itens:[{name:"Boa vitalidade",style:[],expression:[3],urlid:"s"},{name:"Asfixia moderada",style:["alta-influencia"],expression:[2],urlid:"t"},{name:"Asfixia grave",style:["alta-influencia"],expression:[1],urlid:"u"},{name:"Ignorado",style:[],expression:[0],urlid:"v"}]},{title:"TIPO<br>PARTO",varName:"PARTO",ordinal:!1,input:"checkbox",attrIndex:10,itens:[{name:"Vaginal",style:[],expression:[1],urlid:"w"},{name:"Ces\xe1rio",style:[],expression:[2],urlid:"x"},{name:"Indeterminado",style:[],expression:[0],urlid:"y"}]},{title:"TRAB PARTO<br>INDUZIDO",varName:"STTRABPART",ordinal:!1,input:"radio",attrIndex:11,itens:[{name:"SIM",style:[],expression:[1],urlid:"z"},{name:"N\xc3O",style:[],expression:[2],urlid:"9"},]},{title:"ADEQUA\xc7\xc3O<br>PR\xc9 NATAL",varName:"KOTELCHUCK",ordinal:!0,input:"checkbox",attrIndex:12,itens:[{name:"N\xe3o fez",style:["alta-influencia"],expression:[1],urlid:"8"},{name:"Inadequado",style:["alta-influencia"],expression:[2],urlid:"7"},{name:"Intermedi\xe1rio",style:[],expression:[3],urlid:"6"},{name:"Adequado",style:[],expression:[4],urlid:"5"},{name:"Mais que adequado",style:[],expression:[5],urlid:"4"},{name:"Ignorado",style:[],expression:[0],urlid:"3"},]},]}function f(e,t){return e(t,1)}function m(e){return e`### Mortalidade Perinatal e infantil`}function v(e){return e.principal()}function h(){return[{title:"PESO AO<br>NASCER",varName:"PESO",ordinal:!0,input:"checkbox",attrIndex:1,itens:[{name:"Normal",style:[],expression:[3],urlid:"A"},{name:"Baixo peso",style:["alta-influencia"],expression:[2],urlid:"B"},{name:"Muito baixo peso",style:["alta-influencia"],expression:[1],urlid:"C"},{name:"Ignorado.",style:[],expression:[0],urlid:"D"}]},{title:"SEXO",varName:"SEXO",ordinal:!1,input:"checkbox",attrIndex:2,itens:[{name:"Feminino",style:[],expression:[2],urlid:"E"},{name:"Masculino",style:[],expression:[1],urlid:"F"},{name:"Indeterminado",style:[],expression:[0],urlid:"G"}]},{title:"RA\xc7A/COR",varName:"RACA_COR",ordinal:!1,input:"checkbox",attrIndex:3,itens:[{name:"Branca",style:[],expression:[1],urlid:"H"},{name:"Preta",style:[],expression:[2],urlid:"I"},{name:"Parda",style:[],expression:[4],urlid:"J"},{name:"Outros",style:[],expression:[3,4,5],urlid:"K"},{name:"Ignorado",style:[],expression:[0],urlid:"L"}]},{title:"ESCOLARIDADE<br>DA M\xc3E",varName:"ESCOLARIDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:4,itens:[{name:"Superior",style:[],expression:[7],urlid:"M"},{name:"Ensino m\xe9dio",style:[],expression:[6],urlid:"N"},{name:"Fundamental completo",style:[],expression:[5],urlid:"O"},{name:"Fundamental incompleto",style:[],expression:[4,3,2],urlid:"P"},{name:"Sem",style:[],expression:[1],urlid:"Q"},{name:"Ignorado",style:[],expression:[0],urlid:"R"}]},{title:"IDADE<br>DA M\xc3E",varName:"IDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:5,itens:[{name:"10-14",style:[],expression:[1],urlid:"S"},{name:"15-19",style:[],expression:[2],urlid:"T"},{name:"20-29",style:[],expression:[3],urlid:"U"},{name:"30-39",style:[],expression:[4],urlid:"V"},{name:"40-49",style:["alta-influencia"],expression:[5],urlid:"W"},{name:"50+",style:["alta-influencia"],expression:[6],urlid:"X"},{name:"Ignorado",style:[],expression:[0],urlid:"Y"}]},{title:"TIPO<br>PARTO",varName:"PARTO",ordinal:!1,input:"checkbox",attrIndex:6,itens:[{name:"Vaginal",style:[],expression:[1],urlid:"Z"},{name:"Ces\xe1rio",style:[],expression:[2],urlid:"a"},{name:"Indeterminado",style:[],expression:[0],urlid:"b"}]},]}function b(e,t){return e(t,2)}function g(e){return e`## DataSources`}function x(){return function(){let e="https://storage.googleapis.com/amplia/ufs2/",t=(e,t)=>e.data<t.data?-1:e.data>t.data?1:0,i=[2,3,2,2,2,3,3,3,3,3,2,2],a=[3,2,2],n=null;async function r(){return null!=n?n:await fetch(`${e}index.dat`).then(e=>e.arrayBuffer()).then(e=>n=new DataView(e))}async function o(e){let t=await r(),i=t.buffer.byteLength/12,a=0,n=i-1;for(;a<=n;){let o=Math.floor((a+n)/2),l=t.getUint32(12*o);if(e==l)return[t.getUint32(12*o+4),t.getUint32(12*o+8)];e<l?n=o-1:a=o+1}return null}function l(e,t,n,r){r=r||{};let o=(t+n)*11,l=e.getUint32(o).toString();l=l.substring(0,4)+"-"+l.substring(4,6)+"-"+l.substring(6);let s=e.getUint16(o+4),d=e.getUint32(o+6),c=e.getUint8(o+10),u=0,p=[];for(let f=0;f<i.length;f++){let m=((1<<i[f])-1<<u&d)>>u;p.push(m),u+=i[f]}u=0;for(let v=0;v<a.length;v++){let h=((1<<a[v])-1<<u&c)>>u;p.push(h),u+=a[v]}for(let b=0;b<p.length;b++){let g=p[b],x=r[b],y=!0;if(x&&x.length){y=!1;for(let w=0;w<x.length&&!y;w++)y=x[w].includes(g)}if(!y)return[l]}return[l,s,...p]}function s(t){let i=t;return i>1e5&&(i=Math.floor(t/1e4)),fetch(`${e}uf${i}.dat`).then(e=>e.arrayBuffer()).then(e=>new DataView(e)).then(async e=>{let i,a;return t>1e5?[a,i]=await o(t):(a=0,i=e.buffer.byteLength/11),[e,a,i]})}function d(e){let t={};if(e)for(let i in e)t[i]=e[i];return t}return{fetchTotal:function(e,i){return i=d(i),s(e).then(([e,a,n])=>(function(e,a,n){let r=new Map;for(let o=0;o<n;o++){let s=l(e,a,o,i),d=r.get(s[0]);d?d[1]++:(d=[0,1],r.set(s[0],d)),s.length>1&&d[0]++}let c=[],u=[];for(let[p,f]of r)c.push({data:p,valor:f[0]}),u.push({data:p,valor:f[1]});return c.sort(t),u.sort(t),[c,u]})(e,a,n))},fetchPIG:function(e,i){return i=d(i),s(e).then(([e,a,n])=>(function(e,a,n){let r=new Map;for(let o=0;o<n;o++){let s=l(e,a,o,i),d=r.get(s[0]);d?d[3]++:(d=[0,0,0,1],r.set(s[0],d)),s.length>1&&(1==s[4]?d[0]++:2==s[4]?d[1]++:3==s[4]&&d[2]++)}let c=[],u=[];for(let[p,f]of r)(f[0]||f[1]||f[2])&&(c.push({data:p,ig:"PEQUENO",total:f[0]}),c.push({data:p,ig:"ADEQUADO",total:f[1]}),c.push({data:p,ig:"GRANDE",total:f[2]})),u.push({data:p,valor:f[3]});return c.sort(t),u.sort(t),[c,u]})(e,a,n))},fetchPeso:function(e,i){return i=d(i),s(e).then(([e,a,n])=>(function(e,a,n){let r=new Map;for(let o=0;o<n;o++){let s=l(e,a,o,i);if(s.length>1){let d=r.get(s[0]);d?(d[0]+=s[1],d[1]++):(d=[s[1],1],r.set(s[0],d))}}let c=[];for(let[u,p]of r){let f={data:u,valor:p[0]/p[1],total:p[1]};c.push(f)}return c.sort(t),c})(e,a,n))},fetchRobson:function(e,i){return i=d(i),s(e).then(([e,a,n])=>(function(e,a,n){let r=new Map;for(let o=0;o<n;o++){let s=l(e,a,o,i),d=r.get(s[0]);d?d[3]++:(d=[0,0,0,1],r.set(s[0],d)),s.length>1&&(1==s[16]?d[0]++:2==s[16]?d[1]++:3==s[16]&&d[2]++)}let c=[],u=[];for(let[p,f]of r)(f[0]||f[1]||f[2])&&(c.push({data:p,robson:"Robson1a4",total:f[0]}),c.push({data:p,robson:"Robson5",total:f[1]}),c.push({data:p,robson:"Robson6a10",total:f[2]})),u.push({data:p,valor:f[3]});return c.sort(t),u.sort(t),[c,u]})(e,a,n))}}}()}function y(){return function(){let e="https://storage.googleapis.com/amplia/sim-ufs/",t=(e,t)=>e.data<t.data?-1:e.data>t.data?1:0,i=[2,2,2,3,3,3,2,2],a=null;async function n(){return null!=a?a:await fetch(`${e}index.dat`).then(e=>e.arrayBuffer()).then(e=>a=new DataView(e))}async function r(e){let t=await n(),i=t.buffer.byteLength/12,a=0,r=i-1;for(;a<=r;){let o=Math.floor((a+r)/2),l=t.getUint32(12*o);if(e==l)return[t.getUint32(12*o+4),t.getUint32(12*o+8)];e<l?r=o-1:a=o+1}return null}function o(e,t,a,n){n=n||{};let r=(t+a)*10,o=e.getUint32(r).toString();o=o.substring(0,4)+"-"+o.substring(4,6)+"-"+o.substring(6);let l=e.getUint16(r+4),s=e.getUint32(r+6),d=0,c=[];for(let u=0;u<i.length;u++){let p=((1<<i[u])-1<<d&s)>>d;c.push(p),d+=i[u]}for(let f=0;f<c.length;f++){let m=c[f],v=n[f],h=!0;if(v&&v.length){h=!1;for(let b=0;b<v.length&&!h;b++)h=v[b].includes(m)}if(!h)return[o]}return[o,l,...c]}function l(t){let i=t;return i>1e5&&(i=Math.floor(t/1e4)),fetch(`${e}uf${i}.dat`).then(e=>e.arrayBuffer()).then(e=>new DataView(e)).then(async e=>{let i,a;return t>1e5?[a,i]=await r(t):(a=0,i=e.buffer.byteLength/10),[e,a,i]})}function s(e){let t={};if(e)for(let i in e)t[i]=e[i];return t}return{fetchNeoNatal:function(e,i){return i=s(i),l(e).then(([e,a,n])=>(function(e,a,n){let r=new Map;for(let l=0;l<n;l++){let s=o(e,a,l,i),d=r.get(s[0]);d?d[3]++:(d=[0,0,0,1],r.set(s[0],d)),s.length>1&&(1==s[2]?d[0]++:2==s[2]?d[1]++:3==s[2]&&d[2]++)}let c=[],u=[];for(let[p,f]of r)(f[0]||f[1]||f[2])&&(c.push({data:p,neonatal:"PRECOCE",total:f[0]}),c.push({data:p,neonatal:"TARDIO",total:f[1]}),c.push({data:p,neonatal:"NEOTOTAL",total:f[0]+f[1]}),c.push({data:p,neonatal:"POS",total:f[2]})),u.push({data:p,valor:f[3]});return c.sort(t),u.sort(t),[c,u]})(e,a,n))},fetchFetal:function(e,i){return(i=s(i))[3]=[],l(e).then(([e,a,n])=>(function(e,a,n){let r=new Map;for(let l=0;l<n;l++){let s=o(e,a,l,i),d=r.get(s[0]);d?d[3]++:(d=[0,0,0,1],r.set(s[0],d)),s.length>1&&0==s[2]&&d[0]++}let c=[],u=[];for(let[p,f]of r)(f[0]||f[1]||f[2])&&c.push({data:p,valor:f[0]}),u.push({data:p,valor:f[3]});return c.sort(t),u.sort(t),[c,u]})(e,a,n))},fetchRelParto:function(e,i){return i=s(i),l(e).then(([e,a,n])=>(function(e,a,n){let r=new Map;for(let l=0;l<n;l++){let s=o(e,a,l,i),d=r.get(s[0]);d?d[3]++:(d=[0,0,0,1],r.set(s[0],d)),s.length>1&&(1==s[9]?d[0]++:2==s[9]?d[1]++:3==s[9]&&d[2]++)}let c=[],u=[];for(let[p,f]of r)(f[0]||f[1]||f[2])&&(c.push({data:p,relparto:"ANTES",total:f[0]}),c.push({data:p,relparto:"DURANTE",total:f[1]}),c.push({data:p,relparto:"DEPOIS",total:f[2]})),u.push({data:p,valor:f[3]});return c.sort(t),u.sort(t),[c,u]})(e,a,n))},fetchTotal:function(e,i){return i=s(i),l(e).then(([e,a,n])=>(function(e,a,n){let r=new Map;for(let l=0;l<n;l++){let s=o(e,a,l,i),d=r.get(s[0]);d?d[1]++:(d=[0,1],r.set(s[0],d)),s.length>1&&d[0]++}let c=[],u=[];for(let[p,f]of r)c.push({data:p,valor:f[0]}),u.push({data:p,valor:f[1]});return c.sort(t),u.sort(t),[c,u]})(e,a,n))}}}()}function w(e){return e`### Alguns testes com os datasources`}function A(e,t){return e.fetchRobson(11,t.expression)}function C(e,t){return e.fetchPeso(11,t.expression)}function E(e){return e("municipios2.csv").csv()}function _(e,t){return e.fetchRelParto(35,t.expression)}function T(e){return e.expression}function S(e,t){return e.fetchFetal(35,t.expression)}function O(){return new Set}function M(e){return function(t){return e.add(t),t}}function k(e){return e.html`<style>
  @import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap);
  @import url(https://fonts.googleapis.com/icon?family=Material+Icons);    
</style>`}function I(e,t){let I=e.module(),L=new Map([["municipios2.csv",{url:new i.U(i(5347)),mimeType:"text/csv",toString:function(){return this.url}}]]);return I.builtin("FileAttachment",e.fileAttachments(e=>L.get(e))),I.variable(t()).define(["md"],a),I.variable(t()).define(["md"],n),I.variable(t("ampliaMenu")).define("ampliaMenu",["TL","Event"],r),I.variable(t()).define(["md"],o),I.variable(t("mp")).define("mp",["menuNascidosVivos"],l),I.variable(t("dadosMenuNascidosVivos")).define("dadosMenuNascidosVivos",s),I.variable(t("menuNascidosVivos")).define("menuNascidosVivos",["ampliaMenu","dadosMenuNascidosVivos"],d),I.variable(t()).define(["md"],c),I.variable(t("viewof cn")).define("viewof cn",["menuCaracteristicasNascimento"],u),I.variable(t("cn")).define("cn",["Generators","viewof cn"],(e,t)=>e.input(t)),I.variable(t("dadosMenuCaracteristicasNascimento")).define("dadosMenuCaracteristicasNascimento",p),I.variable(t("menuCaracteristicasNascimento")).define("menuCaracteristicasNascimento",["ampliaMenu","dadosMenuCaracteristicasNascimento"],f),I.variable(t()).define(["md"],m),I.variable(t("viewof mpi")).define("viewof mpi",["menuMortalidade"],v),I.variable(t("mpi")).define("mpi",["Generators","viewof mpi"],(e,t)=>e.input(t)),I.variable(t("dadosMenuMortalidade")).define("dadosMenuMortalidade",h),I.variable(t("menuMortalidade")).define("menuMortalidade",["ampliaMenu","dadosMenuMortalidade"],b),I.variable(t()).define(["md"],g),I.variable(t("datasource")).define("datasource",x),I.variable(t("datasource_sim")).define("datasource_sim",y),I.variable(t()).define(["md"],w),I.variable(t()).define(["datasource","cn"],A),I.variable(t()).define(["datasource","cn"],C),I.variable(t("municipios2")).define("municipios2",["FileAttachment"],E),I.variable(t()).define(["datasource_sim","mpi"],_),I.variable(t()).define(["mpi"],T),I.variable(t()).define(["datasource_sim","mpi"],S),I.variable(t("terms")).define("terms",O),I.variable(t("TL")).define("TL",["terms"],M),I.variable(t()).define(["htl"],k),I}function L(e){return e`# Amplia Saúde - Trilhas Exploratórias - v5.0 - Características do Nascimento`}function N(e,t){return e`
    <style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

.cabecalho{
  display:inline-block;
  width:100%;
  border-bottom:1px solid #9C9C9C;
}

.cabecalho-conteudo{
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 6px;
}
      
.titulo{
   font-family:"Open Sans";
   font-weight:700;  
   font-size:24px;
   color: #151472;
}
      
.subtitulo{
   font-family:"Open Sans";
   font-weight:400;  
   font-size:14px;
   margin-left:20px;
   color: #151472;
}
      
.cabecalho-novo:after{
    content: '';
    display: inline-block; /* Adicionando essa linha, */
    width: 100%; /* essa também */
    height: 0; /* e essa foi a última */
}
    </style>
<div class="cabecalho">
<img class="cabecalho-conteudo" src="https://github.com/ampliasaude/ampliasaude.github.io/raw/main/AmpliaSaude-horizontal.png" height="53px">
</div>
    
<div class="cabecalho-novo" style="display:inline-block; width:100%; text-align:justify;">
    
 <div style="margin-bottom:16px; margin-top:16px; display:inline-block;">
   <span class="titulo">Trilhas Exploratórias<span>
   <span class="subtitulo">Saúde materna e neonatal e poluição ambiental por semana de concepção</span>
</div>
     
     <div style="justify-content:space-between; display:inline-block;">
     
     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Capturar imagem</title>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M7 9L4 13H16.5L13.5 7L11.5 9.5L9.5 12L7 9Z" fill="white" stroke="white"/>
</svg>
     
<svg style="margin-right: 28px" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Obter dados</title>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M9.64645 12.3536C9.84171 12.5488 10.1583 12.5488 10.3536 12.3536L13.5355 9.17157C13.7308 8.97631 13.7308 8.65973 13.5355 8.46447C13.3403 8.2692 13.0237 8.2692 12.8284 8.46447L10 11.2929L7.17157 8.46447C6.97631 8.2692 6.65973 8.2692 6.46447 8.46447C6.2692 8.65973 6.2692 8.97631 6.46447 9.17157L9.64645 12.3536ZM10.5 12L10.5 5L9.5 5L9.5 12L10.5 12Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 10V14C4 14.5523 4.44772 15 5 15H15C15.5523 15 16 14.5523 16 14V10H15V14H5L5 10H4Z" fill="white"/>
</svg>

${t}

<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Enviar via email</title>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M16 7.125C16 6.50625 15.46 6 14.8 6H5.2C4.54 6 4 6.50625 4 7.125V13.875C4 14.4937 4.54 15 5.2 15H14.8C15.46 15 16 14.4937 16 13.875V7.125ZM14.8 7.125L10 9.9375L5.2 7.125H14.8ZM14.8 13.875H5.2V8.25L10 11.0625L14.8 8.25V13.875Z" fill="white"/>
</svg>

<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Compartilhar no LinkedIn</title>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M7.075 6.97826C7.075 7.51865 6.6125 7.95652 6.04167 7.95652C5.47083 7.95652 5.00833 7.51865 5.00833 6.97826C5.00833 6.43826 5.47083 6 6.04167 6C6.6125 6 7.075 6.43826 7.075 6.97826ZM7.08333 8.73913H5V15H7.08333V8.73913ZM10.4092 8.73913H8.33917V15H10.4096V11.7134C10.4096 9.88604 12.9217 9.73657 12.9217 11.7134V15H15V11.0357C15 7.95222 11.2825 8.06452 10.4092 9.58239V8.73913Z" fill="white"/>
</svg>
     
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Compartilhar no Facebook</title>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M8.25 8.33333H7V10H8.25V15H10.3333V10H11.8508L12 8.33333H10.3333V7.63875C10.3333 7.24083 10.4133 7.08333 10.7979 7.08333H12V5H10.4133C8.915 5 8.25 5.65958 8.25 6.92292V8.33333Z" fill="white"/>
</svg>

<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Compartilhar no Twitter</title>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M16 7.06547C15.5953 7.24636 15.1603 7.36818 14.7038 7.42309C15.17 7.14207 15.5279 6.69678 15.6961 6.16612C15.2603 6.42637 14.7772 6.61557 14.2629 6.71755C13.8518 6.27594 13.2647 6 12.6157 6C11.1586 6 10.088 7.36864 10.417 8.78943C8.542 8.69483 6.87917 7.7904 5.76588 6.41576C5.17463 7.43694 5.45925 8.77282 6.46392 9.44929C6.0945 9.43729 5.74617 9.33532 5.44229 9.16504C5.41754 10.2176 6.16692 11.2023 7.25225 11.4215C6.93463 11.5083 6.58675 11.5286 6.23292 11.4603C6.51983 12.3628 7.35308 13.0195 8.34125 13.0379C7.3925 13.7869 6.19717 14.1214 5 13.9793C5.99871 14.6239 7.18533 15 8.4595 15C12.6496 15 15.0169 11.4372 14.8739 8.24169C15.3148 7.92099 15.6975 7.52092 16 7.06547Z" fill="white"/>
</svg>
     </div>


 </div>
`}function D(e,t){return e?new t.principal(e.principalUrlids):new t.principal}function R(e,t,i,a,n){return r=>{e.value.filter(e=>"PM25"!=e.variavel).forEach(e=>{t.value=t.value.filter(t=>t.idx!=e.i||t.filtrado),i.value.forEach(i=>{Promise.all([a[e.variavel](i.nome,r.target.value.expression)]).then(a=>{t.value=t.value.filter(t=>t.idx!=e.i||t.filtrado||t.municipio!=i.nome),t.value=t.value.concat({idx:e.i,municipio:i.nome,variavel:e.variavel,dados:n[e.variavel](a[0])})})})})}}function P(e,t,i){return e`
<div style="display:flex; width:100%; align-items:center; justify-content:space-between;">
<div>${t}</div><div>${i}</div>
</div>
`}function F(e,t,i,a,n,r){let o=document.createElement("div");for(let l=0;l<e.length;l++)o.append(t[e[l].variavel](e[l].i));return o.append(i()),a.create(o,{animation:150,handle:".drag",filter:".undraggable",onUpdate(t){let i=e[t.oldIndex];e.splice(t.oldIndex,1),e.splice(t.newIndex,0,i),n.value=e}}),r.select(o).selectAll("g[aria-label=x-axis] g.tick text").each(function(){let e=r.select(this),t=e.text();/[0-9]{4}/.test(t)&&e.style("font-size","14px").style("font-weight","700")}),o}function $(){return 4}function B(e,t,i){return e?t(104,468,e.intervalo[0],e.intervalo[1]):t(104,468,i.intervalo[0],i.intervalo[1])}function U(e,t,i,a,n){return e`${t.map((e,t)=>i(e,t))}${t.length<a?n:""}`}function j(e,t,i,a,n,r,o,l,s,d,c,u,p,f,m){return e.select(t`
<input list="menu-municipios-options" id="menu-municipios" placeholder="Adicione um local" class="caixa-municipio">
<datalist id="menu-municipios-options">
${i.map(e=>e.municipio).sort(Intl.Collator().compare).map(e=>`<option value="${e}">`)}
</datalist>
`).on("change",e=>{if(!i.map(e=>e.municipio).includes(document.getElementById("menu-municipios").value)&&!a.includes(document.getElementById("menu-municipios").value))return;let t=e.target.value;if(!(n.length==r||n.map(e=>e.nome).includes(t))){for(let v of(o.value=o.value.concat([{nome:t,cor:l.find(e=>!n.map(e=>e.cor).includes(e))}]),s.setItem("municipios",JSON.stringify(o.value)),d))"PM25"==v.variavel&&a.includes(t)||Promise.all([c[v.variavel](t,"PM25"!=v.variavel?u.value.expression:null)]).then(e=>{p.value=p.value.concat({idx:v.i,municipio:t,variavel:v.variavel,dados:f[v.variavel](e[0])})});for(let h of[...new Set(m.filter(e=>e.filtrado).map(e=>e.idx))])Promise.all([c[d.find(e=>e.i==h).variavel](t,d.find(e=>e.i==h).filtros.value.expression)]).then(e=>{p.value=p.value.concat({idx:h,municipio:t,variavel:m.find(e=>e.idx==h).variavel,filtrado:!0,dados:f[m.find(e=>e.idx==h).variavel](e[0])})})}}).node()}function G(e,t,i,a,n,r,o,l){return(s,d)=>{let c=e.create("button").attr("class","btn-municipio").style("background-color",s.cor).style("display","inline-flex").style("align-items","flex-center").on("click",e=>{t.length>1&&(i.value=t.filter(e=>e!=s),a.setItem("municipios",JSON.stringify(i.value)),n.value=r.filter(e=>e.municipio!=s.nome))});return o.includes(s.nome)?c.append("span").text(s.nome):c.append("span").text(s.nome+(s.nome.includes("(")?"":" ("+l.find(e=>e.municipio==s.nome).sigla+")")),c.append("span").attr("class","material-icons-outlined").style("font-size","16px").style("margin-left","5px").style("display",1==t.length?"none":"inline").text("remove_circle_outline"),c.node()}}function V(e,t){return()=>e.create("button").attr("class","btn-remove").text("–").on("click",t).attr("title","Eliminar trilha").node()}function H(e,t){return()=>{let i=e.create("button").attr("class","btn-remove").on("click",t);return i.append("span").attr("class","material-icons-outlined").style("font-size","10px").text("content_copy"),i.attr("title","Duplicar trilha"),i.node()}}function z(e,t,i,a){return{PM25:e,PESO:t,ROBSON:i,TOTAL:a}}function q(e,t,i,a){return{PM25:e,PESO:t,ROBSON:i,TOTAL:a}}function Z(e,t,i,a){return{PM25:e,PESO:t,ROBSON:i,TOTAL:a}}function W(e){return e`
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
* {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;     
}

.btn-municipio{
  border-radius: 6px;
  border: none;
  font-family: 'Roboto Condensed';
  font-weight: 700;
  font-size: 14px;
  margin-right: 6px;
  padding: 3px;
  padding-left: 5px;
  padding-right: 5px;
  display: inline-flex;
}
.label-locais{
  font-family: 'Roboto Condensed';
  font-size: 12px;
  margin-right: 12px;
}
.btn-adiciona, .btn-remove{
  border-radius: 50%;
  border: none;
  background-color: #151472;
  color: white;
  font-family: 'Roboto Condensed';
  font-size: 16px;
  
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
}
.trilha{
  border-left: 1px var(--cor-trilha) solid;
  display: inline-block;
  vertical-align: middle;
}

.sombra{
  box-shadow: 2px -2px 6px 0px rgb(0 0 0 / 25%);
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom: 30px;
  border: 3px var(--cor-trilha) solid; 
  border-radius: 10px;
}

div.opcao-trilha {
  display: flex;
  gap: 4px;
  align-items: center;
}

span.titulo-trilha {
  font-weight: 700;
  margin-left: 5px;
  font-size: 12px;
}

span.fonte {
  text-align: right;
  flex-grow: 1;
  margin-right: 5px;
}

div.cabecalho-trilha {
  font-family: 'Roboto Condensed';
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--cor-trilha);
  line-height: 1.5;
  gap: 18px;
  font-size: 10px;
}

.lista-valores {
  font-family: 'Roboto Condensed';
  font-size: 12px;
  font-weight: 400;
  vertical-align: top;
  display: block;
  margin: 6px;
  text-align: center;
}

div.interior-trilha{
  position: relative;
  display: inline-block;
}

.fonte{
  font-weight: 400;
}
.valor{
  border-radius: 5px;
  display: block;
  text-align: center;
}
.conteudo-trilha{
  display: flex;
  justify-content: space-between;
}
.conteudo-trilha svg {
  border-radius: 0px 0px 20px 0px;
}

input{
  margin: 0px 0px 0px 0px;
  -webkit-appearance: none;
  appearance: none;
  margin: 0px;
  width: 12px;
  height: 12px;
  border: 1px #151472 solid;
  vertical-align: middle;
}

input:checked {
  background-color: #151472;  
}

input:focus {
  outline: 0;  
}

input[type=checkbox] {
  border-radius: 2px;
}

input[type=radio] {
  border-radius: 50%;
} 

.titulo-lista-valores{
  font-family: 'Roboto Condensed';
  font-size: 11px;
  color: #141472;
}

.menuIG{
  margin-right: 10px;
  font-size: 12px;
}

.caixa-municipio {
  border: none;
  border-radius: 6px;
  background-color: white;
  border: dashed 2px #C4C4C4;
  font-family: "Roboto Condensed";
  padding: 3px;
  min-width: 150px;
  max-width: 240px;
  height: 20px;
}

button span {
  pointer-events: none;
}

.drag-container{
  display:inline-block;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nova-trilha {
  border: solid 3px #C4C4C4;
  border-radius: 10px 0 0 10px;
  border-right: none;
}

.drag{
  cursor: grab;
  height: 24px;
}

.buttons{
  margin-right: 5px;
  position: relative;
  top: -20px;
}

.icon-blue{
  color: #151472;
  user-select: none;
}

.icon-gray{
  color: #C4C4C4;
  user-select: none;
}

div.rodape-trilha {
  background-color: var(--cor-trilha);
  padding: 0px;
  border: 0px;
  margin: 0 0 0 -25px;
  min-height: 30px;
}

div.rodape-trilha div.menu-local {
  margin-top: -30px;
  min-height: 30px;
}

div.botao-comparacao {
  position: relative;
  width: 100px;
  height: 20px;
  font-family: 'Roboto Condensed';
  font-size: 12px;
  font-weight: 400;
  color: #484796;
  padding:5px;
  z-index: 5;
}

div.botao-comparacao label {
  line-height: 25px;
}

div.botao-comparacao input {
  margin-left: 2px;
  margin-right: 4px;
  margin-top: -2px;
  vertical-align: none;
}

div.tooltip {
  position:absolute;
  padding: 6px; 
  border-radius: 4px; 
  z-index:10; 
  border: 1px #15147266 solid;
  text-align: center;
  font-family: 'Roboto Condensed';
  font-size: 12px;
  font-weight: 700;
  color: #484796;
  top: 10px;
  min-width: 150px;
  transform: translate(-100%,0);
}

div.tooltip.right {
  transform: translate(10px,0);
}


div.tooltip div.c2 {
  display: grid;
  column-gap: 6px;
  row-gap: 1px;
  grid-template-columns: 20px auto auto auto;  
}

div.tooltip div.c1 {
  display: grid;
  column-gap: 4px;
  row-gap: 1px;
  grid-template-columns: 20px auto auto;
}

div.tooltip div.periodo {
  grid-column-start: 1;
  text-align: left;
  font-weight: 400;
}

div.tooltip div.c1 div.periodo {
  grid-column-end: 4; 
}

div.tooltip div.c2 div.periodo {
  grid-column-end: 3;  
}

div.tooltip div.rodape {
  grid-column-start: 1;
  text-align: left;
  font-weight: 400;
  font-style: italic;
  padding-top: 5px;
  line-height:1.2;
}

div.tooltip div.c1 div.rodape {
  grid-column-end: 4; 
}

div.tooltip div.c2 div.rodape {
  grid-column-end: 5;  
}

div.tooltip div.legenda {
  text-align: center;
  margin-top: -2px;
}

div.tooltip div.municipio {
  text-align: left;
  max-width: 130px;
  min-width: 100px;
  overflow: hidden;    
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: default;
}

div.tooltip div.valor {
 text-align: center;
}

div.tooltip div.c2 svg {
  align-self: center;
  justify-self: center;
}

text.rotuloSuscetibilidade {
  font-weight: 400;
  font-family: 'Roboto Condensed';
  font-size: 10px;
  fill: #151472;
}

span.instrucaoSuscetibilidade {
  font-weight: 400;
  font-family: 'Roboto Condensed';
  font-size: 10px;
  color: #151472;
  text-align: right;
  flex-grow: 1;
  margin-right: 5px;
}

g[aria-label=rule] line {
  cursor: ew-resize;
}


</style>
`}function J(){return{PESO:"#C8F9ED",PM25:"#F4947C",PIG:"#CDD9FA",TOTAL:"#FFFCD2",ROBSON:"#FADAE6"}}function X(){return{PESO:"#EDFDF9",PM25:"#FDEEEA",PIG:"#EEECFD",TOTAL:"#FFFEED",ROBSON:"#FDECEE"}}function Q(e,t,i,a,n){return function(r,o,l=!1){function s(e){let t=o.scale("x"),i=e.offsetX;return i<t.range[0]&&(i=t.range[0]),i>t.range[1]&&(i=t.range[1]),i}let d=function(e){let t=n.select(o).select("g[aria-label=rule] line"),i=s(e);t.attr("x1",i).attr("x2",i)},c=function(n){let d=o.scale("x"),c=e[r].dados,u=s(n),p=c[t.center(c,d.invert(u))].x;l?i.value=p:a.value=p},u=0,p=0,f=null;function m(e){f&&f.attr("x",e.offsetX-p)}function v(i){let n=i.offsetX-p-u,l=o.scale("x");n<l.range[0]&&(n=l.range[0]),n>l.range[1]&&(n=l.range[1]);let s=e[r].dados;a.value=s[t.center(s,l.invert(n))].x}n.select(o).call(n.drag().on("start",e=>(function(e){if(n.select(o.parentElement).select("div.tooltip").style("visibility","hidden"),l){let t=n.select(o).select("rect.suscetibilidade"),i=n.select(o).select("line.concepcao"),a=n.select(o).select("g[aria-label=rule] line"),r=+t.attr("x"),s=+t.attr("width")+r;if(Math.abs(+a.attr("x1")-e.offsetX)>8&&r<e.offsetX&&s>e.offsetX){u=+t.attr("x")-i.attr("x1"),p=e.offsetX-r,f=n.select(o).append("rect").attr("x",t.attr("x")).attr("y",t.attr("y")).attr("width",t.attr("width")).attr("height",t.attr("height")).attr("stroke","black").attr("stroke-dasharray","5").attr("fill","none"),d=m,c=v;return}}d(e)})(e.sourceEvent)).on("drag",e=>d(e.sourceEvent)).on("end",e=>c(e.sourceEvent)))}}function Y(e,t,i,a,n){return function(r,o,l,s="valor",d=null){function c(e){let t=document.createElementNS("http://www.w3.org/2000/svg","svg"),i=document.createElementNS("http://www.w3.org/2000/svg","path");return t.setAttribute("width","18"),t.setAttribute("height","8"),t.setAttribute("fill","none"),i.setAttribute("d","M1 7C1 5 1.39956 1 4.9956 1C10.2138 1 7.9923 7 11.9879 7C16.4829 7 15.9835 3 15.9835 1"),i.setAttribute("stroke","#151472"),e?(i.setAttribute("stroke-width","1.5"),i.setAttribute("stroke-dasharray","2.5 1")):i.setAttribute("stroke-width","2"),t.appendChild(i),t}function u(e){let t=["de","da","do","dos","das","e"];if(e.length<=2)return e;let i=e.indexOf("(");i>=0&&(e.substring(i).trim(),e=e.substring(0,i).trim());let a=e.toLowerCase().split(" ");for(let n=0;n<a.length;n++)t.includes(a[n])||(a[n]=a[n][0].toUpperCase()+a[n].substring(1));return a.join(" ")}setTimeout(p=>{let f=r.parentElement.querySelector(".tooltip");f||((f=document.createElement("div")).setAttribute("class","tooltip"),f.style.backgroundColor=n[o]+"CC",r.parentElement.appendChild(f)),function(n){function p(t,i){t.addEventListener("mouseover",t=>{e.select(document.body).selectAll("g[aria-label=line]").style("opacity",function(t){return e.select(this).attr("stroke")==i.cor?1:.3})}),t.addEventListener("mouseout",t=>{e.select(document.body).selectAll("g[aria-label=line]").style("opacity",1)})}let f=a(l,o,s,d),m,v,h;m=r.scale("x"),v=r.scale("y"),h=m.apply("PM25"==o?t:i),n.style.visibility=h<m.range[0]?"hidden":"visible",n.style.top=`${v.range[1]+5}px`,h>250?(n.classList.remove("right"),n.style.left=`${h-10}px`):(n.style.left=`${h}px`,n.classList.add("right"));let b=f.valoresComparacao.length>0,g=document.createElement("div"),x=document.createElement("div");x.classList.add("periodo"),void 0!==f.semanas?x.textContent=`${f.semanaInicio} - ${f.semanaFim} - (sem ${f.semanas})`:x.textContent=`${f.semanaInicio} - ${f.semanaFim}`,g.appendChild(x),b?(g.classList.add("c2"),g.appendChild(c(!1)),g.appendChild(c(!0))):g.classList.add("c1");for(let y=0;y<f.municipios.length;y++){let w=document.createElement("div"),A=document.createElement("div"),C=document.createElement("div"),E=b?document.createElement("div"):null;w.classList.add("legenda"),w.style.color=f.municipios[y].cor,w.textContent="⬤",A.classList.add("municipio"),A.textContent=u(f.municipios[y].nome),p(A,f.municipios[y]),C.classList.add("valor"),C.textContent=f.valoresPrincipal[y],g.appendChild(w),g.appendChild(A),g.appendChild(C),E&&(E.classList.add("valor"),E.textContent=f.valoresComparacao[y],g.appendChild(E))}let _=document.createElement("div");_.classList.add("rodape"),_.innerHTML=`Unidade: <b>${f.unidade}</b><br>M\xe9dia Semanal`,g.appendChild(_),n.replaceChildren(g);let T=e.select(r).select("line.rule-shadow"),S=e.select(r).select("g[aria-label=rule] line");0===T.size()&&(T=e.select(S.node().parentElement).append("line").attr("class","rule-shadow").attr("stroke","#FFFFFF00").attr("stroke-width",5).attr("stroke-dasharray","none").attr("y1",S.attr("y1")).attr("y2",S.attr("y2")).attr("cursor","ew-resize")),T.attr("x1",S.attr("x1")).attr("x2",S.attr("x2"))}(f)})}}function K(e,t,i,a,n,r,o,l,s,d){return function(c,u,p,f){let m="PM25"==u?e:t;function v(e){return e=e.toISOString().substring(0,10).split("-"),`${e[2]}/${e[1]}/${e[0]}`}function h(e){return(f&&(e=e[f]),"percentual"===p||"taxa"===p)?e.toLocaleString("pt-BR",{maximumFractionDigits:2}):e.toFixed(0)}let b={},g=a.filter(e=>e.idx==c).sort(function(e,t){return i.findIndex(e=>e.nome==t.municipio)-i.findIndex(t=>t.nome==e.municipio)}),x=g,y=g.filter(e=>e.filtrado),w=n[r.bisector(e=>e.inicio.getTime()).center(n,m)];if("PM25"==u){let A=e;"number"==typeof A&&(A=new Date(A));let C=t;"number"==typeof C&&(C=new Date(C));let E=Math.floor((A.getTime()-C.getTime())/6048e5);E>0&&E<=42&&(b.semanas=E)}return b.semanaInicio=v(w.inicio).substring(0,5),b.semanaFim=v(w.termino),b.unidade=o[u][p],b.valoresPrincipal=[],b.valoresComparacao=[],b.municipios=[],b.ufSelecionada=i.some(e=>l.includes(e.nome)),y.length>0&&(x=g.filter(e=>!e.filtrado),"PIG"!==u&&(y=y.filter(e=>!Object.values(s).includes(e.municipio)||"PM25"!=u)),y.forEach(e=>{let t=e.dados[d.center(e.dados,m)][p];b.valoresComparacao.push(h("PIG"==u?t[f]:t))})),x.forEach(e=>{let t=i.find(t=>t.nome==e.municipio),a=e.dados[d.center(e.dados,m)][p];b.municipios.push(t),b.valoresPrincipal.push(h("PIG"==u?a[f]:a))}),b}}function ee(e,t){return function(i){let a=i.scale("x"),n=i.scale("y"),r=e;"number"==typeof r&&(r=new Date(r));let o=new Date(r.getTime()),l=new Date(r.getTime());o.setDate(o.getDate()+154),l.setDate(l.getDate()+266);let s=a.apply(r),d=a.apply(o),c=a.apply(l);t.select(i).insert("rect","g[aria-label=rule]").attr("class","suscetibilidade").attr("x",d).attr("y",n.range[1]).attr("width",c-d).attr("height",n.range[0]-n.range[1]).attr("stroke-width","2px").attr("stroke","#F4947C").attr("fill","#FFFFFF00").style("cursor","grab"),t.select(i).insert("line","g[aria-label=rule]").attr("x1",s).attr("y1",n.range[1]).attr("x2",s).attr("y2",n.range[0]).attr("stroke-width","2px").attr("stroke","#F4947C"),t.select(i).insert("line","g[aria-label=rule]").attr("class","concepcao").attr("x1",s).attr("y1",n.range[1]).attr("x2",d).attr("y2",n.range[1]).attr("stroke-width","2px").attr("stroke","#F4947C"),t.select(i).append("text").attr("class","rotuloSuscetibilidade").text("CONCEP\xc7\xc3O").attr("x",s).attr("y",n.range[1]-3),t.select(i).append("text").attr("class","rotuloSuscetibilidade").text("22\xaa SEM").attr("x",d).attr("y",n.range[1]-3),t.select(i).append("text").attr("class","rotuloSuscetibilidade").text("38\xaa SEM").attr("x",c).attr("y",n.range[1]-3)}}function et(e,t,i,a,n,r,o,l,s,d,c,u,p,f,m,v,h,b,g,x,y,w,A,C,E,_,T,S,O){return M=>{let k=e.plot({marginTop:15,marginRight:0,width:t-65,height:i,x:{grid:!0,label:null,format:a,domain:n.find(e=>e.i==M).alterar_tempo?n.find(e=>e.i==M).alterar_tempo.map(e=>r[e].inicio):o.map(e=>r[e].inicio)},y:{grid:!0,domain:[0,l[s]],transform:e=>Math.min(122,e),label:null},marks:[e.rect([{y1:d[s][3],y2:l[s]}],{y1:"y1",y2:"y2",fill:"#FFEBEB",class:"faixa"}),e.rect([{y1:d[s][2],y2:d[s][3]}],{y1:"y1",y2:"y2",fill:"#FFF5EB"}),e.rect([{y1:d[s][1],y2:d[s][2]}],{y1:"y1",y2:"y2",fill:"#FFFFED"}),n.find(e=>e.i==M).mostra_media_movel?c.filter(e=>e.idx==M&&!Object.values(u).includes(e.municipio)).map((t,i)=>e.line(t.dados.filter(e=>p(e,M)),e.windowY({strict:!0,k:f,anchor:"middle",x:"x",y:"valor",curve:"monotone-x",strokeWidth:m,stroke:v.find(e=>e.nome==t.municipio).cor}))):c.filter(e=>e.idx==M&&!Object.values(u).includes(e.municipio)).map((t,i)=>e.line(t.dados.filter(e=>p(e,M)),{x:"x",y:"valor",curve:"monotone-x",strokeWidth:m,stroke:v.find(e=>e.nome==t.municipio).cor})),e.ruleX([c.filter(e=>e.idx==M)[0].dados[h.center(c.filter(e=>e.idx==M)[0].dados,b)]],{x:"x",strokeDasharray:"5"}),n.find(e=>e.i==M).mostra_media_movel?null:c.filter(e=>e.idx==M).map((t,i)=>e.dot([t.dados[h.center(t.dados,b)]],{x:"x",y:"valor",fill:v.find(e=>e.nome==t.municipio).cor}))]});return g(k,"PM25",M),x(k),y(M,k,!0),w`
<div style="--cor-trilha:${A.PM25}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${C.create("button").attr("class","btn-remove").text("–").on("click",E).node()}<br>
  ${_()}
</div>
<div class="sombra">
<div class="drag-container">
<span class="material-icons-outlined ${n[0].i==M?"icon-gray":"icon-blue"}">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-blue">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined ${n[n.length-1].i==M?"icon-gray":"icon-blue"}">
expand_more
</span>
</div>
<div class="trilha poluente" i=${M}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">POLUENTE</span>
    <div class="opcao-trilha">
      <label class="label-cabecalho-trilha">MÉDIA MÓVEL</label>       ${C.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==M).mostra_media_movel).on("change",e=>T(e,M)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">MODIFICAR PERÍODO</label> ${C.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==M).alterar_tempo).on("change",e=>S(e,M)).node()}
  </div>
    <span class="instrucaoSuscetibilidade">A janela no gráfico indica o período de maior suscetibilidade à poluição (22ª  à 38ª semana)</span>
    <span class="fonte" style="flex-grow: 0;">Fonte: SISAM</span>
  </div>
<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right">${k}</div>
</div>
${O(M)}
</div>
</div>
</div>`}}function ei(e,t,i,a,n,r,o,l,s,d,c,u,p,f,m,v,h,b,g,x,y,w,A,C,E,_,T){return S=>{if(!e.map(e=>e.nome).every(e=>t.filter(e=>e.idx==S).map(e=>e.municipio).includes(e))||a.find(e=>e.i==S).filtros.value.expression&&a.find(e=>e.i==S).show_filtros&&t.filter(e=>e.idx==S).every(e=>void 0===e.filtrado)||n.value.expression&&t.filter(e=>e.idx==S).every(e=>void 0!==e.filtrado))return i();let O=r.plot({marginTop:5,marginRight:0,width:o-65,height:l,x:{grid:!0,label:null,domain:a.find(e=>e.i==S).alterar_tempo?a.find(e=>e.i==S).alterar_tempo.map(e=>s[e].inicio):d.map(e=>s[e].inicio)},y:{grid:!0,label:null},marks:[a.find(e=>e.i==S).mostra_media_movel?t.filter(e=>e.idx==S).map((t,i)=>r.line(t.dados.filter(e=>c(e,S)),r.windowY({strict:!0,k:u,anchor:"middle",x:"x",y:"valor",strokeWidth:t.filtrado?p:f,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"}))):t.filter(e=>e.idx==S).map((t,i)=>r.line(t.dados.filter(e=>c(e,S)),{sort:"x",x:"x",y:"valor",curve:"monotone-x",strokeWidth:t.filtrado?p:f,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"})),r.ruleX([t.filter(e=>e.idx==S)[0].dados[m.center(t.filter(e=>e.idx==S)[0].dados,v)]],{x:"x",strokeDasharray:"5"}),a.find(e=>e.i==S).mostra_media_movel?null:t.filter(e=>e.idx==S).map((t,i)=>r.dot([t.dados[m.center(t.dados,v)]],{x:"x",y:"valor",fill:e.find(e=>e.nome==t.municipio).cor}))]});return h(O,"PESO",S),b(S,O),g`
<div style="--cor-trilha: ${x.PESO}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${y.create("button").attr("class","btn-remove").text("–").on("click",w).node()}<br>
  ${A()}
</div>
<div class="sombra">
<div class="drag-container">
<span class="material-icons-outlined ${a[0].i==S?"icon-gray":"icon-blue"}">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-blue">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined ${a[a.length-1].i==S?"icon-gray":"icon-blue"}">
expand_more
</span>
</div>
<div class="trilha peso" i=${S}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">PESO AO NASCER</span>
    <div class="opcoes-trilha">
    <label class="label-cabecalho-trilha">MÉDIA MÓVEL</label> ${y.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==S).mostra_media_movel).on("change",e=>C(e,S)).node()}
    </div>
    <div class="opcoes-trilha">

    <label class="label-cabecalho-trilha">MODIFICAR PERÍODO</label> ${y.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==S).alterar_tempo).on("change",e=>E(e,S)).node()}
    </div>
    <span class="fonte">Fonte: SINASC</span>

  </div>
<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right;">${O}</div>
</div>
${_(S)}
<div class="rodape-trilha">
<div class="botao-comparacao">
${y.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==S).show_filtros).on("change",e=>T(e,S)).node()}
<label>COMPARAÇÃO</label>
</div>
<div class="menu-local">${a.find(e=>e.i==S).show_filtros?a.find(e=>e.i==S).filtros:""}</div>
</div>
</div>
</div>
</div>`}}function ea(e,t,i,a,n,r,o,l,s,d,c,u,p,f,m,v,h,b,g,x,y,w,A,C,E,_,T,S,O){return M=>{if(!e.map(e=>e.nome).every(e=>t.filter(e=>e.idx==M).map(e=>e.municipio).includes(e))||a.find(e=>e.i==M).filtros.value.expression&&a.find(e=>e.i==M).show_filtros&&t.filter(e=>e.idx==M).every(e=>void 0===e.filtrado)||n.value.expression&&t.filter(e=>e.idx==M).every(e=>void 0!==e.filtrado))return i();let k=a.find(e=>e.i==M).escala,I=a.find(e=>e.i==M).robson,L=r.plot({marginTop:5,marginRight:0,width:o-65,height:l,x:{grid:!0,label:null,domain:a.find(e=>e.i==M).alterar_tempo?a.find(e=>e.i==M).alterar_tempo.map(e=>s[e].inicio):d.map(e=>s[e].inicio)},y:{grid:!0,label:null},marks:[a.find(e=>e.i==M).mostra_media_movel?t.filter(e=>e.idx==M).map((t,i)=>r.line(t.dados.filter(e=>c(e,M)),r.windowY({strict:!0,k:u,anchor:"middle",x:"x",y:e=>e[k][I],strokeWidth:t.filtrado?p:f,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"}))):t.filter(e=>e.idx==M).map((t,i)=>r.line(t.dados.filter(e=>c(e,M)),{sort:"x",x:"x",y:e=>e[k][I],curve:"monotone-x",strokeWidth:t.filtrado?p:f,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"})),r.ruleX([t.filter(e=>e.idx==M)[0].dados[m.center(t.filter(e=>e.idx==M)[0].dados,v)]],{x:"x",strokeDasharray:"5"}),a.find(e=>e.i==M).mostra_media_movel?null:t.filter(e=>e.idx==M).map((t,i)=>r.dot([t.dados[m.center(t.dados,v)]],{x:"x",y:e=>e[k][I],fill:e.find(e=>e.nome==t.municipio).cor}))]});h(L,"ROBSON",M,k,I),b(M,L);let N;return g`
<div style="--cor-trilha: ${x.ROBSON}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${y.create("button").attr("class","btn-remove").text("–").on("click",w).node()}<br>
  ${A()}
</div>
<div class="sombra">
<div class="drag-container">
<span class="material-icons-outlined ${a[0].i==M?"icon-gray":"icon-blue"}">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-blue">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined ${a[a.length-1].i==M?"icon-gray":"icon-blue"}">
expand_more
</span>
</div>
<div class="trilha robson" i=${M}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">GRUPOS DE ROBSON</span>

    ${(N=y.create("select").attr("class","menuIG")).style("font-family","Roboto Condensed"),N.append("option").attr("name","Robson1a4").text("Robson1a4").property("selected","Robson1a4"==a.find(e=>e.i==M).robson),N.append("option").attr("name","Robson5").text("Robson5").property("selected","Robson5"==a.find(e=>e.i==M).robson),N.append("option").attr("name","Robson6a10").text("Robson6a10").property("selected","Robson6a10"==a.find(e=>e.i==M).robson),N.on("change",e=>C(e,M)),N.node()}
    <div class="opcoes-trilha">

    <label class="label-cabecalho-trilha">MÉDIA MÓVEL</label> ${y.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==M).mostra_media_movel).on("change",e=>E(e,M)).node()}
    </div>
    <div class="opcoes-trilha">

    <label class="label-cabecalho-trilha">MODIFICAR PERÍODO</label> ${y.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==M).alterar_tempo).on("change",e=>_(e,M)).node()}
    </div>
    <div class="opcoes-trilha">
    
    <label class="label-cabecalho-trilha">ESCALA ABSOLUTO</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+M).property("checked","absoluto"==a.find(e=>e.i==M).escala).attr("value","absoluto").on("change",e=>T(e,M)).node()}
    </div>
    <div class="opcoes-trilha">
    <label class="label-cabecalho-trilha">PERCENTUAL</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+M).property("checked","percentual"==a.find(e=>e.i==M).escala).attr("value","percentual").on("change",e=>T(e,M)).node()}
    </div>
    <div class="opcoes-trilha">
    <label class="label-cabecalho-trilha">TAXA POR 1000</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+M).property("checked","taxa"==a.find(e=>e.i==M).escala).attr("value","taxa").on("change",e=>T(e,M)).node()}
    </div>
    <span class="fonte">Fonte: SINASC</span>
  </div>

<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right;">${L}</div>
</div>
${S(M)}
<div class="rodape-trilha">
<div class="botao-comparacao">
${y.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==M).show_filtros).on("change",e=>O(e,M)).node()}
<label>COMPARAÇÃO</label>
</div>
<div class="menu-local">${a.find(e=>e.i==M).show_filtros?a.find(e=>e.i==M).filtros:""}</div>
</div>
</div>
</div>
</div>`}}function en(e,t,i,a,n,r,o,l,s,d,c,u,p,f,m,v,h,b,g,x,y,w,A,C,E,_,T,S){return O=>{if(!e.map(e=>e.nome).every(e=>t.filter(e=>e.idx==O).map(e=>e.municipio).includes(e))||a.find(e=>e.i==O).filtros.value.expression&&a.find(e=>e.i==O).show_filtros&&t.filter(e=>e.idx==O).every(e=>void 0===e.filtrado)||n.value.expression&&t.filter(e=>e.idx==O).every(e=>void 0!==e.filtrado))return i();let M=a.find(e=>e.i==O).escala,k=r.plot({marginTop:5,marginRight:0,width:o-65,height:l,x:{grid:!0,label:null,domain:a.find(e=>e.i==O).alterar_tempo?a.find(e=>e.i==O).alterar_tempo.map(e=>s[e].inicio):d.map(e=>s[e].inicio)},y:{grid:!0,label:null},marks:[a.find(e=>e.i==O).mostra_media_movel?t.filter(e=>e.idx==O).map((t,i)=>r.line(t.dados.filter(e=>c(e,O)),r.windowY({strict:!0,k:u,anchor:"middle",x:"x",y:e=>e[M],strokeWidth:t.filtrado?p:f,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"}))):t.filter(e=>e.idx==O).map((t,i)=>r.line(t.dados.filter(e=>c(e,O)),{sort:"x",x:"x",y:e=>e[M],curve:"monotone-x",strokeWidth:t.filtrado?p:f,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"})),r.ruleX([t.filter(e=>e.idx==O)[0].dados[m.center(t.filter(e=>e.idx==O)[0].dados,v)]],{x:"x",strokeDasharray:"5"}),a.find(e=>e.i==O).mostra_media_movel?null:t.filter(e=>e.idx==O).map((t,i)=>r.dot([t.dados[m.center(t.dados,v)]],{x:"x",y:e=>e[M],fill:e.find(e=>e.nome==t.municipio).cor}))]});return h(k,"TOTAL",O,M),b(O,k),g`
<div style="--cor-trilha: ${x.TOTAL}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${y.create("button").attr("class","btn-remove").text("–").on("click",w).node()}<br>
  ${A()}
</div>
<div class="sombra">
<div class="drag-container">
<span class="material-icons-outlined ${a[0].i==O?"icon-gray":"icon-blue"}">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-blue">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined ${a[a.length-1].i==O?"icon-gray":"icon-blue"}">
expand_more
</span>
</div>
<div class="trilha" i=${O}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">TOTAL NASCIDOS VIVOS</span>
    <div class="opcoes-trilha">
    <label class="label-cabecalho-trilha">MÉDIA MÓVEL</label> ${y.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==O).mostra_media_movel).on("change",e=>C(e,O)).node()}
    </div>
    <div class="opcoes-trilha">
    <label class="label-cabecalho-trilha">MODIFICAR PERÍODO</label> ${y.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==O).alterar_tempo).on("change",e=>E(e,O)).node()}
    </div>
    <div class="opcoes-trilha">
    <label class="label-cabecalho-trilha">ESCALA ABSOLUTO</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+O).property("checked","absoluto"==a.find(e=>e.i==O).escala).attr("value","absoluto").on("change",e=>_(e,O)).node()}
    </div>
    <div class="opcoes-trilha">
    <label class="label-cabecalho-trilha">PERCENTUAL</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+O).property("checked","percentual"==a.find(e=>e.i==O).escala).attr("value","percentual").on("change",e=>_(e,O)).node()}
    </div>
    <span class="fonte">Fonte: SINASC</span>
  </div>
<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right;">${k}</div>
</div>
${T(O)}
<div class="rodape-trilha">
<div class="botao-comparacao">
${y.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==O).show_filtros).on("change",e=>S(e,O)).node()}
<label>COMPARAÇÃO</label>
</div>
<div class="menu-local">${a.find(e=>e.i==O).show_filtros?a.find(e=>e.i==O).filtros:""}</div>
</div>
</div>
</div>
</div>`}}function er(e,t,i,a,n,r){return o=>{let l;return e`
<div style="display:flex; align-items:center; justify-content:space-between;">
<div style="visibility:hidden;">
  ${t.create("button").attr("class","btn-remove").text("–").on("click",i).node()}<br>
  ${t.create("button").attr("class","btn-remove").text("C").on("click",a).node()}
</div>

<div class="drag-container nova-trilha" style="border:dotted #C4C4C4 2px; border-right:none; height:80px;">
<span class="material-icons-outlined icon-gray">
expand_less
</span>
<div class="drag" style="cursor:auto;">
  <span class="material-icons-outlined icon-gray">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined icon-gray">
expand_more
</span>
</div>

<div class="trilha" style="width:${n-60}px; margin-left:0px; border-radius: 0 10px 10px 0; border:dotted #C4C4C4 2px; box-shadow:none; height:80px;">
  <div class="cabecalho-trilha" style="border-bottom:dotted #C4C4C4 2px;">
${(l=t.create("select").attr("class","menuIG")).style("margin-left","10px").style("font-family","Roboto Condensed"),l.append("option").attr("name","").text("ADICIONE UMA TRILHA").property("disabled",!0).property("selected",!0),l.append("option").attr("name","PM25").text("POLUENTE"),l.append("option").attr("name","PESO AO NASCER").text("PESO AO NASCER"),l.append("option").attr("name","GRUPOS DE ROBSON").text("GRUPOS DE ROBSON"),l.append("option").attr("name","TOTAL").text("TOTAL NASCIDOS VIVOS"),l.on("change",r),l.node()}
  </div>

<div class="conteudo-trilha">
<br><br>
</div>
</div>`}}function eo(e,t,i,a,n){return r=>e`
<div style="--cor-trilha: #c4c4c4; display:flex; align-items:center; justify-content:space-between; margin-bottom:30px;">
<div style="visibility:hidden;">
  ${t.create("button").attr("class","btn-remove").text("–").on("click",i).node()}<br>
  ${t.create("button").attr("class","btn-remove").text("C").on("click",a).node()}
</div>
<div class="sombra" style="border: 3px var(--cor-trilha) solid; border-radius: 10px;">
<div class="drag-container" style="height:80px;">
<span class="material-icons-outlined icon-gray">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-gray">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined icon-gray">
expand_more
</span>
</div>
<div class="trilha" style="width:${n-60}px; margin-left:0px; margin-bottom:0px; height: 80px;">
  <div class="cabecalho-trilha">
  <label class="label-titulo-trilha">CARREGANDO...</label>
  </div>

<div class="conteudo-trilha">
<br><br>
</div>
</div>
</div>`}function el(e,t,i,a,n,r){return o=>{let l=e.findIndex(e=>e.i==o.target.parentNode.parentNode.getElementsByClassName("trilha")[0].getAttribute("i")),s={...e[l]},d=t.max(e.map(e=>e.i))+1;s.i=d,"PM25"!=s.variavel&&(s.filtros=s.filtros.cloneMenu(),s.filtros.addEventListener("input",e=>i(e,s))),e.splice(l+1,0,s),a.value=e;let c=JSON.parse(JSON.stringify(n.filter(e=>e.idx==o.target.parentNode.parentNode.getElementsByClassName("trilha")[0].getAttribute("i"))));c.forEach((e,t,i)=>{i[t].idx=d,i[t].dados.forEach((e,t,i)=>i[t].x=new Date(i[t].x))}),r.value=n.concat(c)}}function es(e,t,i,a){return n=>{e.value=t.filter(e=>e.i!=n.target.parentNode.parentNode.getElementsByClassName("trilha")[0].getAttribute("i")),i.value=a.filter(e=>e.idx!=n.target.parentNode.parentNode.getElementsByClassName("trilha")[0].getAttribute("i"))}}function ed(e,t,i,a,n,r,o,l,s,d,c,u,p,f,m,v){return h=>{let b=e.max(t.map(e=>e.i))||0,g=null;switch(h.target.value){case"POLUENTE":g={i:b+1,mostra_media_movel:!0,variavel:"PM25",alterar_tempo:null,poluente:"PM25"},i.value=t.concat(g),a.forEach(e=>Promise.all([n(e.nome)]).then(t=>{r.value=r.value.concat([{idx:b+1,municipio:e.nome,variavel:"PM25",dados:o(t[0])}])}));break;case"PESO AO NASCER":(g={i:b+1,mostra_media_movel:!1,variavel:"PESO",alterar_tempo:null,filtros:new l.local(null,null,s.PESO),show_filtros:!1}).filtros.addEventListener("input",e=>d(e,g)),i.value=t.concat(g),a.forEach(e=>Promise.all([c(e.nome,g.filtros.expression)]).then(t=>{r.value=r.value.concat([{idx:b+1,municipio:e.nome,variavel:"PESO",dados:u(t[0])}])}));break;case"GRUPOS DE ROBSON":(g={i:b+1,mostra_media_movel:!1,escala:"taxa",robson:"Robson1a4",variavel:"ROBSON",alterar_tempo:null,filtros:new l.local(null,null,s.ROBSON),show_filtros:!1}).filtros.addEventListener("input",e=>d(e,g)),i.value=t.concat(g),a.forEach(e=>Promise.all([p(e.nome,g.filtros.expression)]).then(t=>{r.value=r.value.concat([{idx:b+1,municipio:e.nome,variavel:"ROBSON",dados:f(t[0])}])}));break;case"NASCIMENTOS TOTAIS":(g={i:b+1,mostra_media_movel:!1,variavel:"TOTAL",alterar_tempo:null,filtros:new l.local(null,null,s.TOTAL),show_filtros:!1,escala:"absoluto"}).filtros.addEventListener("input",e=>d(e,g)),i.value=t.concat(g),a.forEach(e=>Promise.all([m(e.nome,g.filtros.expression)]).then(t=>{r.value=r.value.concat([{idx:b+1,municipio:e.nome,variavel:"TOTAL",dados:v(t[0])}])}))}}}function ec(e,t,i,a){return n=>{if(!e.find(e=>e.i==n).alterar_tempo)return"";let r=t(104,468,e.find(e=>e.i==n).alterar_tempo[0],e.find(e=>e.i==n).alterar_tempo[1],i-90,40);return r.addEventListener("input",t=>{let i=e;i.find(e=>e.i==n).alterar_tempo=r.value,a.value=i}),r}}function eu(e,t){return i=>{e.find(e=>e.i==i.target.parentElement.parentElement.getAttribute("i")).poluente=i.target.value,t.value=e}}function ep(e,t,i,a,n,r,o,l,s,d){return(c,u)=>{if(e.find(e=>e.i==u).show_filtros=c.target.checked,c.target.checked){let p=e.find(e=>e.i==u);p.filtros=new i.local(null,a.value.urlids,n[p.variavel]),p.filtros.addEventListener("input",e=>r(e,p)),t.value=t.value.filter(e=>e.idx!=u||!e.filtrado),o.value.forEach(i=>{Promise.all([l[e.find(e=>e.i==u).variavel](i.nome,e.find(e=>e.i==u).filtros.value.expression)]).then(a=>{t.value=t.value.concat({idx:u,municipio:i.nome,variavel:e.find(e=>e.i==u).variavel,filtrado:!0,dados:s[e.find(e=>e.i==u).variavel](a[0])})})})}else t.value=t.value.filter(e=>e.idx!=u||!e.filtrado);d.value=e}}function ef(e,t,i){return(a,n)=>{a.target.checked?e.find(e=>e.i==n).alterar_tempo=t:e.find(e=>e.i==n).alterar_tempo=null,i.value=e}}function em(e,t){return(i,a)=>{e.find(e=>e.i==a).robson=i.target.value,t.value=e}}function ev(e,t){return(i,a)=>{e.find(e=>e.i==a).escala=i.target.value,t.value=e}}function eh(e,t){return(i,a)=>{e.find(e=>e.i==a).mostra_media_movel=i.target.checked,t.value=e}}function eb(e){return t=>{let i=[0,0];return i[0]=e[t[0]].inicio,i[1]=e[t[1]].termino,i}}function eg(){return""}function ex(e,t,i){return e?e.trilhas.map(e=>(e.filtros=new t.local(null,e.filtrosUrlids),e)):[{i:0,mostra_media_movel:!0,variavel:"PM25",alterar_tempo:null,poluente:"PM25"},{i:1,mostra_media_movel:!1,variavel:"PESO",alterar_tempo:null,filtros:new t.local(null,null,i.PESO),show_filtros:!1},{i:2,mostra_media_movel:!1,escala:"taxa",robson:"Robson1a4",variavel:"ROBSON",alterar_tempo:null,filtros:new t.local(null,null,i.ROBSON),show_filtros:!1}]}function ey(){return{PM25:{valor:"\xb5g/m\xb3"},PESO:{valor:"g"},ROBSON:{absoluto:"nascimentos",percentual:"%",taxa:"nasc./1000NV"},TOTAL:{absoluto:"nascimentos",percentual:"%"}}}function ew(){return 2.5}function eA(){return 2}function eC(){return!0}function eE(e,t){return e?e.municipios:t.municipios}function e_(e,t,i,a,n,r,o,l,s,d,c,u,p,f){if(e){for(let m of t.value)i.value=i.value.concat([m]),m=m.nome,a.forEach(e=>{Promise.all([n[e.variavel](m,r.value.expression)]).then(t=>{o.value=o.value.concat({idx:e.i,municipio:m,variavel:e.variavel,dados:l[e.variavel](t[0])})}),e.show_filtros&&Promise.all([n[e.variavel](m,e.filtros.value.expression)]).then(t=>{o.value=o.value.concat({idx:e.i,municipio:m,variavel:e.variavel,filtrado:!0,dados:l[e.variavel](t[0])})})}),a.slice(1).forEach(e=>e.filtros.addEventListener("input",t=>s(t,e)));r.addEventListener("input",e=>d(e)),r.addEventListener("aba",e=>{c.setItem("conf2",JSON.stringify(u())),c.setItem("municipios",JSON.stringify(i.value)),c.setItem("intervalo",JSON.stringify(p.value))}),r.addEventListener("limparFiltros",e=>{for(let t=0;t<a.length;t++)a[t].filtros.limpa()}),f.value=!1}}function eT(e,t,i,a){return(n,r)=>{e.value=e.value.filter(e=>e.idx!=r.i||!e.filtrado),t.value.forEach(t=>{Promise.all([i[r.variavel](t.nome,r.filtros.value.expression)]).then(i=>{e.value=e.value.concat({idx:r.i,municipio:t.nome,variavel:r.variavel,filtrado:!0,dados:a[r.variavel](i[0])})})})}}function eS(e){return e.range([3,53],{label:"Janela em semanas",value:13,step:2})}function eO(e){return e.select(["co_ppb","no2_ppb","o3_ppb","pm25_ugm3","so2_ugm3"],{label:"Indicador",value:"pm25_ugm3"})}function eM(){return["#2F87F5","#D8C56C","#DC5988","#6CC28D","#67AEC2","#ABA6F8","#D8C56C","#2DE8BD","#2F87F5","#94E8F9"]}function ek(){return[]}function eI(e,t,i,a){return e[Math.ceil(t.interpolate(...i?i.intervalo:a.intervalo)(.5))].inicio}function eL(e){return e}function eN(e){return e.bisector(e=>e.x)}function eD(e){return e.timeFormatDefaultLocale({decimal:",",thousands:".",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%d/%m/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Domingo","Segunda-feira","Ter\xe7a-feira","Quarta-feira","Quinta-feira","Sexta-feira","S\xe1bado"],shortDays:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],months:["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],shortMonths:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]})}function eR(e){return e[0]}function eP(e){return e[1]}function eF(e,t,i,a,n){return(r,o)=>{let l=e.find(e=>e.i==o).alterar_tempo,s=e.find(e=>e.i==o).mostra_media_movel?(t-1)/2:0;return l?r.x.getTime()>=i[l[0]-s].inicio.getTime()&&r.x.getTime()<=i[l[1]+s].termino.getTime():r.x.getTime()>=i[a-s].inicio.getTime()&&r.x.getTime()<=i[n+s].termino.getTime()}}function e$(){return 200}function eB(){return!0}function eU(e,t,i){return function(a,n){if(2==a.length)return;e.value=!0;let r=t.find(e=>e.municipio==a).codigo_sdv,o=`https://storage.googleapis.com/amplia/sisam/${r.substring(0,2)}/mun${r}.db`,l=i.open(o).then(e=>e.query(n));return e.value=!1,l}}function ej(e){return e`<style>
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@400;700&display=swap');
  text{
    font-family:"Fira Sans Condensed"
  }
</style>`}function eG(e){return e("municipios2.csv").csv()}function eV(e){return e("semanas_epidemiologicas_estendido.csv").csv().then(e=>e.map(e=>(e.inicio=new Date(Date.UTC(+e.inicio.substr(0,4),+e.inicio.substr(5,2)-1,+e.inicio.substr(8,2))),e.termino=new Date(Date.UTC(+e.termino.substr(0,4),+e.termino.substr(5,2)-1,+e.termino.substr(8,2))),e)).filter(e=>e.ano>=2010))}function eH(){return{ACRE:"RIO BRANCO",ALAGOAS:"MACEI\xd3",AMAPÁ:"MACAP\xc1",AMAZONAS:"MANAUS",BAHIA:"SALVADOR",CEARÁ:"FORTALEZA","DISTRITO FEDERAL":"BRAS\xcdLIA","ESP\xcdRITO SANTO":"VIT\xd3RIA",GOIÁS:"GOI\xc2NIA",MARANHÃO:"S\xc3O LU\xcdS","MATO GROSSO":"CUIAB\xc1","MATO GROSSO DO SUL":"CAMPO GRANDE","MINAS GERAIS":"BELO HORIZONTE",PARÁ:"BEL\xc9M",PARAÍBA:"JO\xc3O PESSOA",PARANÁ:"CURITIBA",PERNAMBUCO:"RECIFE",PIAUÍ:"TERESINA","RIO DE JANEIRO":"RIO DE JANEIRO","RIO GRANDE DO NORTE":"NATAL","RIO GRANDE DO SUL":"PORTO ALEGRE",RONDÔNIA:"PORTO VELHO",RORAIMA:"BOA VISTA","SANTA CATARINA":"FLORIAN\xd3POLIS","S\xc3O PAULO":"S\xc3O PAULO",SERGIPE:"ARACAJU",TOCANTINS:"PALMAS"}}function ez(){return{ACRE:"AC",ALAGOAS:"AL",AMAPÁ:"AP",AMAZONAS:"AM",BAHIA:"BA",CEARÁ:"CE","DISTRITO FEDERAL":"DF","ESP\xcdRITO SANTO":"ES",GOIÁS:"GO",MARANHÃO:"MA","MATO GROSSO":"MT","MATO GROSSO DO SUL":"MS","MINAS GERAIS":"MG",PARÁ:"PA",PARAÍBA:"PB",PARANÁ:"PR",PERNAMBUCO:"PE",PIAUÍ:"PI","RIO DE JANEIRO":"RJ","RIO GRANDE DO NORTE":"RN","RIO GRANDE DO SUL":"RS",RONDÔNIA:"RO",RORAIMA:"RR","SANTA CATARINA":"SC","S\xc3O PAULO":"SP",SERGIPE:"SE",TOCANTINS:"TO"}}function eq(){return[]}function eZ(){return[]}function eW(){return["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"]}function eJ(e){return Object.values(e).sort(Intl.Collator().compare)}function eX(e){return t=>"BRASIL"==t?"":e.includes(t)?"AND res_SIGLA_UF='"+t+"'":"AND res_MUNNOMEX='"+t.normalize("NFD").replace(/\p{Diacritic}/gu,"")+"'"}function eQ(e,t,i){return a=>"BRASIL"==a?"":e.includes(a)?"mun_uf_nome='"+Object.entries(t).find(e=>e[1]==a)[0]+"'":"mun_geocodsdv="+i.find(e=>e.municipio==a).codigo_sdv}function eY(e){return e`## URL stuff`}function eK(e){return function(t){return e.compressToEncodedURIComponent(JSON.stringify(t))}}function e1(e){return function(t){return JSON.parse(e.decompressFromEncodedURIComponent(t))}}function e0(e,t,i,a){return()=>({principalUrlids:e.value.value.urlids,municipios:t.value,intervalo:i,trilhas:a.value.map(e=>{let t={};return Object.assign(t,e),t.filtros&&(t.filtrosUrlids=t.filtros.value.urlids,delete t.filtros),t})})}function e2(){return{principalUrlids:"",municipios:[{nome:"RIO DE JANEIRO",cor:"#2F87F5"}],intervalo:[104,469],trilhas:[{i:0,mostra_media_movel:!0,variavel:"PM25",alterar_tempo:null,poluente:"PM25"},{i:1,mostra_media_movel:!1,variavel:"PESO",alterar_tempo:null,show_filtros:!1,filtrosUrlids:""},{i:2,mostra_media_movel:!1,escala:"taxa",robson:"Robson1a4",variavel:"ROBSON",alterar_tempo:null,show_filtros:!1,filtrosUrlids:""}]}}function e5(e,t,i,a){let n=new e(window.location.search).get("conf");if(n)return t(n);if(n=i.getItem("conf2")){let r=JSON.parse(n),o=i.getItem("municipios");o&&(r.municipios=JSON.parse(o));let l=i.getItem("intervalo");return l&&(r.intervalo=JSON.parse(l)),r}if(n=i.getItem("municipios")){let s=a;return s.municipios=JSON.parse(n),n=i.getItem("intervalo"),s.intervalo=JSON.parse(n),s}}function e3(){return function(e){var t=document.body.appendChild(document.createElement("textarea"));t.style.position="absolute",t.style.left="-9999px",t.setAttribute("readonly",""),t.value=e,t.select();try{return document.execCommand("copy")}catch(i){return!1}finally{t.parentNode.removeChild(t)}}}function e4(){return"https://ampliasaude.github.io/amplia-site/trilhas/CaracteristicasNascimento/"}function e7(e,t,i,a,n){let r=e`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Copiar link compartilhável</title>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M6.045 10C6.045 11.026 6.8095 11.86 7.75 11.86H9.95V13H7.75C6.232 13 5 11.656 5 10C5 8.344 6.232 7 7.75 7H9.95V8.14H7.75C6.8095 8.14 6.045 8.974 6.045 10ZM8.3 9.4H12.7V10.6H8.3V9.4ZM13.25 13H11.05V11.86H13.25C14.1905 11.86 14.955 11.026 14.955 10C14.955 8.974 14.1905 8.14 13.25 8.14H11.05V7H13.25C14.768 7 16 8.344 16 10C16 11.656 14.768 13 13.25 13Z" fill="white"/>
</svg>`;return r.onclick=()=>{n(`${t}?conf=${i(a())}`)},r}function e6(e){return e`## Poluentes`}function e8(){return{pm25_ugm3:120,so2_ugm3:90,no2_ppb:286,o3_ppb:154,co_ppb:9.9}}function e9(){return e=>.08206*(e+293.15)}function te(){return{no2_ppb:46.0055,o3_ppb:48,co_ppb:28.01}}function tt(){return{pm25_ugm3:[25,37,50,60],so2_ugm3:[20,30,40,60],no2_ppb:[200,220,240,260],o3_ppb:[100,120,130,140],co_ppb:[9,9,9,9]}}function ti(e,t){return(i,a="TRUE")=>t(i,`
      select 
        ano,
        mes,
        dia,
        max_${e} as valor,
        temperatura_c_media
      from 
        sisam
      where
          ano >= 2012
      group by
        1,2,3
 `)}function ta(e,t,i,a){return n=>{n.forEach(n=>{let r=n,o=new Date(Date.UTC(r.ano,r.mes-1,r.dia));for(let l of e)if(o>=new Date(l.inicio)&&o<=new Date(l.termino)){r.semana=+l.semana,r.x=l.inicio;break}switch(1==r.mes&&53==r.semana&&(r.ano-=1,r.mes=12),t){case"no2_ppb":case"o3_ppb":let s=i[t]/a(r.temperatura);r.valor*=s;case"co_ppb":r.valor/=1e3}});let r=[];for(let o of n){let l=r.find(e=>e.x==o.x);l?(l.valor+=o.valor,l.temperatura_c_media+=o.temperatura_c_media,l.cont+=1):r.push({ano:o.ano,semana:o.semana,x:o.x,valor:o.valor||0,temperatura_c_media:o.temperatura_c_media,cont:1})}return r.map(e=>(e.valor/=e.cont,e.temperatura_c_media/=e.cont,delete e.cont,e)).filter(e=>e.semana)}}function tn(e){return e`## Fecundação`}function tr(e,t,i){return async(a,n)=>{let r;return await i.fetchPeso(e.includes(a)?Math.floor(t.find(e=>e.sigla==a).codigo_sdv/1e4):t.find(e=>e.municipio==a).codigo_sdv,n)}}function to(e){return t=>{t.forEach(t=>{let i=t;for(let a of(i.data=new Date(i.data),e))if(i.data>=new Date(a.inicio)&&i.data<=new Date(a.termino)){i.x=a.inicio;break}});let i=[];for(let a of t){let n=i.find(e=>e.x.getTime()==a.x.getTime());n?(n.valor+=a.valor*a.total,n.total+=a.total):i.push({x:a.x,valor:a.valor*a.total,total:a.total})}return i.map(e=>(e.valor/=e.total,delete e.total,e)).filter(e=>e.x)}}function tl(e,t,i){return async(a,n)=>{let r;return await i.fetchRobson(e.includes(a)?Math.floor(t.find(e=>e.sigla==a).codigo_sdv/1e4):t.find(e=>e.municipio==a).codigo_sdv,n)}}function ts(e,t){return i=>{let a=e(i[1]);(i=i[0]).forEach(e=>{let i=e;for(let a of(i.data=new Date(i.data),t))if(i.data>=new Date(a.inicio)&&i.data<=new Date(a.termino)){i.x=a.inicio;break}});let n=i,r=[];for(let o of n){let l=r.find(e=>e.x.getTime()==o.x.getTime());l?(l.absoluto[o.robson]+=o.total,l.total+=o.total):r.push({x:o.x,absoluto:{Robson1a4:"Robson1a4"==o.robson?o.total:0,Robson5:"Robson5"==o.robson?o.total:0,Robson6a10:"Robson6a10"==o.ig?o.total:0},total:o.total})}return t.filter(e=>!r.map(e=>e.x.getTime()).includes(e.inicio.getTime())).forEach(e=>{r.push({x:e.inicio,absoluto:{Robson1a4:0,Robson5:0,Robson6a10:0},total:0})}),(r=r.map(e=>{e.percentual={},e.total?(e.percentual.Robson1a4=100*e.absoluto.Robson1a4/e.total,e.percentual.Robson5=100*e.absoluto.Robson5/e.total,e.percentual.Robson6a10=100*e.absoluto.Robson6a10/e.total):(e.percentual.Robson1a4=0,e.percentual.Robson5=0,e.percentual.Robson6a10=0),e.taxa={};let t=a.find(t=>t.x.getTime()==e.x.getTime());return t?(e.taxa.Robson1a4=1e3*e.absoluto.Robson1a4/t.valor,e.taxa.Robson5=1e3*e.absoluto.Robson5/t.valor,e.taxa.Robson6a10=1e3*e.absoluto.Robson6a10/t.valor):(e.taxa.Robson1a4=0,e.taxa.Robson5=0,e.taxa.Robson6a10=0),e})).sort((e,t)=>e.x.getTime()-t.x.getTime())}}function td(e){return t=>{let i=[];t.forEach(t=>{let a=t;if(a.data=new Date(a.data),!(2011>a.data.getFullYear())){for(let n of e)if(a.data>=new Date(n.inicio)&&a.data<=new Date(n.termino)){a.x=n.inicio;break}i.push(a)}});let a=[];for(let n of i){let r=a.find(e=>e.x.getTime()==n.x.getTime());r?r.valor+=n.valor:a.push({x:n.x,valor:n.valor})}return a.filter(e=>e.x)}}function tc(e,t,i){return async(a,n)=>{let r;return await i.fetchTotal(e.includes(a)?Math.floor(t.find(e=>e.sigla==a).codigo_sdv/1e4):t.find(e=>e.municipio==a).codigo_sdv,n)}}function tu(e,t){return i=>{let a=e(i[1]);i=i[0];let n=[];i.forEach(e=>{let i=e;if(i.data=new Date(i.data),!(2011>i.data.getFullYear())){for(let a of t)if(i.data>=new Date(a.inicio)&&i.data<=new Date(a.termino)){i.x=a.inicio;break}n.push(i)}});let r=[];for(let o of n){let l=r.find(e=>e.x.getTime()==o.x.getTime());l?l.absoluto+=o.valor:r.push({x:o.x,absoluto:o.valor})}return(r=r.filter(e=>e.x)).map(e=>{e.percentual={};let t=a.find(t=>t.x.getTime()==e.x.getTime());return t?e.percentual=100*e.absoluto/t.valor:e.percentual=0,e})}}function tp(e){return e`## Imports`}function tf(e){return e("sortablejs/Sortable.js")}function tm(e){return e("d3@5")}function tv(e,t,i,a,n,r,o){return function(l,s,d=l,c=s,u=e.width,p=60){var f=[l,s+1],m=e.height,v=e.margin,h=u-p-v.right,b=m-v.top-v.bottom,g=t.scaleLinear().domain(f).range([0,h]),x=t.select(i.svg(u,m));let y=x.append("g").attr("transform",`translate(${p}, ${v.top})`);var w=y.append("text").attr("id","labelleft").attr("x",0).attr("y",b+5).style("display",60==p?"inline":"none").text(a[n[f[0]].inicio.getMonth()]+" "+n[f[0]].inicio.getFullYear()),A=y.append("text").attr("id","labelright").attr("x",0).attr("y",b+5).style("display",60==p?"inline":"none").text(a[n[f[1]].termino.getMonth()]+" "+n[f[1]].termino.getFullYear());y.append("text").attr("id","labelleft2").attr("x",-8).attr("y",b-b/2+1).style("alignment-baseline","middle").text(2012),y.append("text").attr("id","labelright2").attr("x",h+8).attr("y",b-b/2+1).style("alignment-baseline","middle").text(2019);var C=t.brushX().extent([[0,0],[h,b]]).on("brush",function(){var e=t.event.selection;w.attr("x",e[0]).text(a[n[Math.round(g.invert(e[0]))].inicio.getMonth()]+" "+n[Math.round(g.invert(e[0]))].inicio.getFullYear()),A.attr("x",e[1]).text(a[n[Math.round(g.invert(e[1]))].termino.getMonth()]+" "+n[Math.round(g.invert(e[1]))].termino.getFullYear()),T.attr("display",null).attr("transform",function(t,i){return"translate("+[e[i],-b/4]+")"}),x.node().value=e.map(e=>Math.round(g.invert(e))),x.node().dispatchEvent(new CustomEvent("input"))}).on("end",function(){if(t.event.sourceEvent){var e=t.event.selection.map(g.invert).map(Math.round);t.select(this).transition().call(t.event.target.move,e.map(g)),r.value=Math.max(Math.min(new Date(r.value),n[x.node().value[1]-2].termino),n[x.node().value[0]].inicio)}}),E=y.append("g").attr("class","brush").call(C),_=function(e){return"M -3 12 A 3 3 0 0 1 3 12 V 18 A 3 3 0 0 1 -3 18 Z"},T=E.selectAll(".handle--custom").data([{type:"w"},{type:"e"}]).enter().append("path").attr("class","handle--custom").attr("stroke","#000").attr("fill","#151472").attr("cursor","ew-resize").attr("y",b/2).attr("d",_);return E.selectAll(".overlay").attr("fill","#E5E5E5").each(function(e){e.type="selection"}).on("mousedown touchstart",function(){var e=g(1)-g(0),t=o.mouse(this)[0],i=t-e/2,a=t+e/2;o.select(this.parentNode).call(C.move,a>h?[h-e,h]:i<0?[0,e]:[i,a])}),E.call(C.move,[d,c+1].map(g)),y.append("g").selectAll("line").data(n.filter(e=>1==e.semana).map(e=>n.findIndex(t=>t==e))).enter().append("line").attr("x1",e=>g(e)).attr("x2",e=>g(e)).attr("y1",0).attr("y2",b).style("stroke","#ccc"),x.node()}}function th(){return{width:600,height:60,margin:{top:20,bottom:20,left:60,right:60}}}function tb(e){return e`
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
svg {
	font-family: "Roboto Condensed";
}

rect.overlay {
	stroke: none;
}

rect.selection {
	stroke: none;
  fill: rgba(21, 20, 114, 0.6);
}

#labelleft, #labelright, #labelright2, #labelleft2 {
	dominant-baseline: hanging;
  font-size: 12px;
  font-weight: 400;
  fill: #151472;
}

#labelleft, #labelleft2 {
	text-anchor: end;
}

#labelright, #labelright2 {
	text-anchor: start;
}
</style>
`}function tg(e){return e("https://bundle.run/lz-string@1.4.4")}function tx(e){return e`<style>
  @import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap);
  @import url(https://fonts.googleapis.com/icon?family=Material+Icons);    
</style>
`}function ty(e){return e`
<style>
/* The container must be positioned relative: */
.custom-select {
  position: relative;
  font-family: "Roboto Condensed";
}

.custom-select select {
  display: none; /*hide original SELECT element: */
}

.select-selected {
  border-radius: 6px;
  background-color: white;
  border: dashed 2px #C4C4C4;
  font-family: "Roboto Condensed";
  padding: 3px;
  min-width: 80px;
  max-width: 240px;
}

/* Style the arrow inside the select element: */
.select-selected:after {
  position: absolute;
  content: "";
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #000 transparent transparent transparent;
}

/* Point the arrow upwards when the select box is open (active): */
.select-selected.select-arrow-active:after {
  border-color: transparent transparent #000 transparent;
  top: 7px;
}

/* style the items (options), including the selected item: */
.select-items div {
  color: #000000;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
}

/* Style items (options): */
.select-items {
  position: absolute;
  background-color: white;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
}

/* Hide the items when the select box is closed: */
.select-hide {
  display: none;
}

.select-items div:hover, .same-as-selected {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
`}function tw(e,t){let a=e.module();function n(){return this.url}let r=new Map([["semanas_epidemiologicas_estendido.csv",{url:new i.U(i(1331)),mimeType:"text/csv",toString:n}],["municipios2.csv",{url:new i.U(i(5347)),mimeType:"text/csv",toString:n}]]);a.builtin("FileAttachment",e.fileAttachments(e=>r.get(e))),a.variable(t()).define(["md"],L),a.variable(t("cabecalho")).define("cabecalho",["html","copyLinkButton"],N),a.define("initial mp",["urlParamConf","ampliaMenu"],D),a.variable(t("mutable mp")).define("mutable mp",["Mutable","initial mp"],(e,t)=>new e(t)),a.variable(t("mp")).define("mp",["mutable mp"],e=>e.generator),a.variable(t("listenerFiltroGlobal")).define("listenerFiltroGlobal",["mutable conf_trilhas","mutable data","mutable sel_municipios","funcoesFetch","funcoesProc"],R),a.variable(t("div_controles")).define("div_controles",["html","barra_municipios","viewof intervalo"],P),a.variable(t("vis")).define("vis",["conf_trilhas","funcoesGeradoras","gAdicionaTrilha","Sortable","mutable conf_trilhas","d3"],F),a.variable(t("maxMunicipios")).define("maxMunicipios",$),a.variable(t("viewof intervalo")).define("viewof intervalo",["urlParamConf","slider_snap","defaultConf"],B),a.variable(t("intervalo")).define("intervalo",["Generators","viewof intervalo"],(e,t)=>e.input(t)),a.variable(t("barra_municipios")).define("barra_municipios",["html","sel_municipios","remove_mun_button","maxMunicipios","menu_municipios"],U),a.variable(t("menu_municipios")).define("menu_municipios",["d3","html","municipios","agregacoes","sel_municipios","maxMunicipios","mutable sel_municipios","colors","sessionStorage","conf_trilhas","funcoesFetch","mp","mutable data","funcoesProc","data"],j),a.variable(t("remove_mun_button")).define("remove_mun_button",["d3","sel_municipios","mutable sel_municipios","sessionStorage","mutable data","data","agregacoes","municipios"],G),a.variable(t("remove_trilha_button")).define("remove_trilha_button",["d3","removeTrilha"],V),a.variable(t("copy_button")).define("copy_button",["d3","copyTrilha"],H),a.variable(t("funcoesGeradoras")).define("funcoesGeradoras",["gPM25","gPESO","gROBSON","gTOTAL"],z),a.variable(t("funcoesProc")).define("funcoesProc",["procPM25","procPESO","procRobson","procTOTAL"],q),a.variable(t("funcoesFetch")).define("funcoesFetch",["fetchPM25","fetchPESO","fetchRobson","fetchTOTAL"],Z),a.variable(t("style")).define("style",["html"],W),a.variable(t("corTrilha")).define("corTrilha",J),a.variable(t("corTrilhaFraco")).define("corTrilhaFraco",X),a.variable(t("mouseDownHandler")).define("mouseDownHandler",["data","bisector","mutable sel_pm25","mutable sel","d3"],Q),a.variable(t("legendTooltip")).define("legendTooltip",["d3","sel_pm25","sel","valoresLista","corTrilhaFraco"],Y),a.variable(t("valoresLista")).define("valoresLista",["sel_pm25","sel","sel_municipios","data","semanas_epidemiologicas","d3","unidades","agregacoes","siglas","bisector"],K),a.variable(t("suscetibilidade")).define("suscetibilidade",["sel","d3"],ee),a.variable(t("gPM25")).define("gPM25",["Plot","width","height","formatTime","conf_trilhas","semanas_epidemiologicas","intervalo","maxScale","indicador","padroes","data","siglas","filterDate","janela","lineWidth","sel_municipios","bisector","sel_pm25","legendTooltip","suscetibilidade","mouseDownHandler","html","corTrilha","d3","removeTrilha","copy_button","checkMediaMovel","checkTempo","inner_slider"],et),a.variable(t("gPESO")).define("gPESO",["sel_municipios","data","gLoadingTrilha","conf_trilhas","mp","Plot","width","height","semanas_epidemiologicas","intervalo","filterDate","janela","lineWidthFiltered","lineWidth","bisector","sel","legendTooltip","mouseDownHandler","html","corTrilha","d3","removeTrilha","copy_button","checkMediaMovel","checkTempo","inner_slider","checkFiltros"],ei),a.variable(t("gROBSON")).define("gROBSON",["sel_municipios","data","gLoadingTrilha","conf_trilhas","mp","Plot","width","height","semanas_epidemiologicas","intervalo","filterDate","janela","lineWidthFiltered","lineWidth","bisector","sel","legendTooltip","mouseDownHandler","html","corTrilha","d3","removeTrilha","copy_button","checkRobson","checkMediaMovel","checkTempo","checkEscala","inner_slider","checkFiltros"],ea),a.variable(t("gTOTAL")).define("gTOTAL",["sel_municipios","data","gLoadingTrilha","conf_trilhas","mp","Plot","width","height","semanas_epidemiologicas","intervalo","filterDate","janela","lineWidthFiltered","lineWidth","bisector","sel","legendTooltip","mouseDownHandler","html","corTrilha","d3","removeTrilha","copy_button","checkMediaMovel","checkTempo","checkEscala","inner_slider","checkFiltros"],en),a.variable(t("gAdicionaTrilha")).define("gAdicionaTrilha",["html","d3","removeTrilha","copyTrilha","width","addTrilha"],er),a.variable(t("gLoadingTrilha")).define("gLoadingTrilha",["html","d3","removeTrilha","copyTrilha","width"],eo),a.variable(t("copyTrilha")).define("copyTrilha",["conf_trilhas","d3","listenerFiltro","mutable conf_trilhas","data","mutable data"],el),a.variable(t("removeTrilha")).define("removeTrilha",["mutable conf_trilhas","conf_trilhas","mutable data","data"],es),a.variable(t("addTrilha")).define("addTrilha",["d3","conf_trilhas","mutable conf_trilhas","sel_municipios","fetchPM25","mutable data","procPM25","ampliaMenu","corTrilha","listenerFiltro","fetchPESO","procPESO","fetchRobson","procRobson","fetchTOTAL","procTOTAL"],ed),a.variable(t("inner_slider")).define("inner_slider",["conf_trilhas","slider_snap","width","mutable conf_trilhas"],ec),a.variable(t("checkPoluente")).define("checkPoluente",["conf_trilhas","mutable conf_trilhas"],eu),a.variable(t("checkFiltros")).define("checkFiltros",["conf_trilhas","mutable data","ampliaMenu","mp","corTrilha","listenerFiltro","mutable sel_municipios","funcoesFetch","funcoesProc","mutable conf_trilhas"],ep),a.variable(t("checkTempo")).define("checkTempo",["conf_trilhas","intervalo","mutable conf_trilhas"],ef),a.variable(t("checkRobson")).define("checkRobson",["conf_trilhas","mutable conf_trilhas"],em),a.variable(t("checkEscala")).define("checkEscala",["conf_trilhas","mutable conf_trilhas"],ev),a.variable(t("checkMediaMovel")).define("checkMediaMovel",["conf_trilhas","mutable conf_trilhas"],eh),a.variable(t("converteIntervalo")).define("converteIntervalo",["semanas_epidemiologicas"],eb),a.define("initial conf_principal",eg),a.variable(t("mutable conf_principal")).define("mutable conf_principal",["Mutable","initial conf_principal"],(e,t)=>new e(t)),a.variable(t("conf_principal")).define("conf_principal",["mutable conf_principal"],e=>e.generator),a.define("initial conf_trilhas",["urlParamConf","ampliaMenu","corTrilha"],ex),a.variable(t("mutable conf_trilhas")).define("mutable conf_trilhas",["Mutable","initial conf_trilhas"],(e,t)=>new e(t)),a.variable(t("conf_trilhas")).define("conf_trilhas",["mutable conf_trilhas"],e=>e.generator),a.variable(t("unidades")).define("unidades",ey),a.variable(t("lineWidth")).define("lineWidth",ew),a.variable(t("lineWidthFiltered")).define("lineWidthFiltered",eA),a.define("initial firstload",eC),a.variable(t("mutable firstload")).define("mutable firstload",["Mutable","initial firstload"],(e,t)=>new e(t)),a.variable(t("firstload")).define("firstload",["mutable firstload"],e=>e.generator),a.define("initial municipiosDefault",["urlParamConf","defaultConf"],eE),a.variable(t("mutable municipiosDefault")).define("mutable municipiosDefault",["Mutable","initial municipiosDefault"],(e,t)=>new e(t)),a.variable(t("municipiosDefault")).define("municipiosDefault",["mutable municipiosDefault"],e=>e.generator),a.variable(t("onfirstload")).define("onfirstload",["firstload","mutable municipiosDefault","mutable sel_municipios","conf_trilhas","funcoesFetch","mp","mutable data","funcoesProc","listenerFiltro","listenerFiltroGlobal","sessionStorage","getCurrentConf","viewof intervalo","mutable firstload"],e_),a.variable(t("listenerFiltro")).define("listenerFiltro",["mutable data","mutable sel_municipios","funcoesFetch","funcoesProc"],eT),a.variable(t("viewof janela")).define("viewof janela",["Inputs"],eS),a.variable(t("janela")).define("janela",["Generators","viewof janela"],(e,t)=>e.input(t)),a.variable(t("viewof indicador")).define("viewof indicador",["Inputs"],eO),a.variable(t("indicador")).define("indicador",["Generators","viewof indicador"],(e,t)=>e.input(t)),a.variable(t("colors")).define("colors",eM),a.define("initial sel_municipios",ek),a.variable(t("mutable sel_municipios")).define("mutable sel_municipios",["Mutable","initial sel_municipios"],(e,t)=>new e(t)),a.variable(t("sel_municipios")).define("sel_municipios",["mutable sel_municipios"],e=>e.generator),a.define("initial sel",["semanas_epidemiologicas","d3","urlParamConf","defaultConf"],eI),a.variable(t("mutable sel")).define("mutable sel",["Mutable","initial sel"],(e,t)=>new e(t)),a.variable(t("sel")).define("sel",["mutable sel"],e=>e.generator),a.define("initial sel_pm25",["sel"],eL),a.variable(t("mutable sel_pm25")).define("mutable sel_pm25",["Mutable","initial sel_pm25"],(e,t)=>new e(t)),a.variable(t("sel_pm25")).define("sel_pm25",["mutable sel_pm25"],e=>e.generator),a.variable(t("bisector")).define("bisector",["d3"],eN),a.variable(t("formatTime")).define("formatTime",["d3"],eD),a.variable(t("periodoInicio")).define("periodoInicio",["intervalo"],eR),a.variable(t("periodoFim")).define("periodoFim",["intervalo"],eP),a.variable(t("filterDate")).define("filterDate",["conf_trilhas","janela","semanas_epidemiologicas","periodoInicio","periodoFim"],eF),a.variable(t("height")).define("height",e$),a.define("initial loading",eB),a.variable(t("mutable loading")).define("mutable loading",["Mutable","initial loading"],(e,t)=>new e(t)),a.variable(t("loading")).define("loading",["mutable loading"],e=>e.generator),a.variable(t("sqlSisam")).define("sqlSisam",["mutable loading","municipios","SQLiteDatabaseClient"],eU),a.variable(t("style2")).define("style2",["html"],ej),a.variable(t("municipios")).define("municipios",["FileAttachment"],eG),a.variable(t("semanas_epidemiologicas")).define("semanas_epidemiologicas",["FileAttachment"],eV),a.variable(t("capitais")).define("capitais",eH),a.variable(t("siglas")).define("siglas",ez),a.define("initial data",eq),a.variable(t("mutable data")).define("mutable data",["Mutable","initial data"],(e,t)=>new e(t)),a.variable(t("data")).define("data",["mutable data"],e=>e.generator),a.define("initial cache",eZ),a.variable(t("mutable cache")).define("mutable cache",["Mutable","initial cache"],(e,t)=>new e(t)),a.variable(t("cache")).define("cache",["mutable cache"],e=>e.generator),a.variable(t("months")).define("months",eW),a.variable(t("agregacoes")).define("agregacoes",["siglas"],eJ),a.variable(t("queryLocalSINASC")).define("queryLocalSINASC",["agregacoes"],eX),a.variable(t("queryLocalSISAM")).define("queryLocalSISAM",["agregacoes","siglas","municipios"],eQ),a.variable(t()).define(["md"],eY),a.variable(t("objToUrlParam")).define("objToUrlParam",["lz"],eK),a.variable(t("urlParamToObj")).define("urlParamToObj",["lz"],e1),a.variable(t("getCurrentConf")).define("getCurrentConf",["mutable mp","mutable sel_municipios","intervalo","mutable conf_trilhas"],e0),a.variable(t("defaultConf")).define("defaultConf",e2),a.variable(t("urlParamConf")).define("urlParamConf",["URLSearchParams","urlParamToObj","sessionStorage","defaultConf"],e5),a.variable(t("copyToClipboard")).define("copyToClipboard",e3),a.variable(t("currentHref")).define("currentHref",e4),a.variable(t("copyLinkButton")).define("copyLinkButton",["svg","currentHref","objToUrlParam","getCurrentConf","copyToClipboard"],e7),a.variable(t()).define(["md"],e6),a.variable(t("maxScale")).define("maxScale",e8),a.variable(t("volume_mol")).define("volume_mol",e9),a.variable(t("massa_mol")).define("massa_mol",te),a.variable(t("padroes")).define("padroes",tt),a.variable(t("fetchPM25")).define("fetchPM25",["indicador","sqlSisam"],ti),a.variable(t("procPM25")).define("procPM25",["semanas_epidemiologicas","indicador","massa_mol","volume_mol"],ta),a.variable(t()).define(["md"],tn),a.variable(t("fetchPESO")).define("fetchPESO",["agregacoes","municipios","newDataSource"],tr),a.variable(t("procPESO")).define("procPESO",["semanas_epidemiologicas"],to),a.variable(t("fetchRobson")).define("fetchRobson",["agregacoes","municipios","newDataSource"],tl),a.variable(t("procRobson")).define("procRobson",["procTOTALUnfiltered","semanas_epidemiologicas"],ts),a.variable(t("procTOTALUnfiltered")).define("procTOTALUnfiltered",["semanas_epidemiologicas"],td),a.variable(t("fetchTOTAL")).define("fetchTOTAL",["agregacoes","municipios","newDataSource"],tc),a.variable(t("procTOTAL")).define("procTOTAL",["procTOTALUnfiltered","semanas_epidemiologicas"],tu),a.variable(t()).define(["md"],tp),a.variable(t("Sortable")).define("Sortable",["require"],tf),a.variable(t("d3_5")).define("d3_5",["require"],tm),a.variable(t("slider_snap")).define("slider_snap",["layout","d3_5","DOM","months","semanas_epidemiologicas","mutable sel","d3"],tv),a.variable(t("layout")).define("layout",th),a.variable(t("style_slider")).define("style_slider",["html"],tb);let o=e.module(I);return a.import("menuCaracteristicasNascimento","ampliaMenu",o),a.import("datasource","newDataSource",o),a.variable(t("lz")).define("lz",["require"],tg),a.variable(t("style_menu")).define("style_menu",["html"],tx),a.variable(t("styleMenuMun")).define("styleMenuMun",["html"],ty),a}i.d(t,{Z:function(){return tw}})},7181:function(e,t,i){function a(e){return e`# Amplia Saude - Fonte de Dados e Menu - AGO2022`}function n(e){return e`## Menu Amplia`}function r(e,t){return function(i,a){let n=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M7.87022 11.875L8.27489 11.5813L8.27479 11.5812L8.27437 11.5806L8.27271 11.5783L8.26613 11.5693L8.24029 11.5336L8.14075 11.3965L7.77298 10.8897L6.54497 9.19795C5.5772 7.86508 4.40312 6.24886 3.57783 5.11549C3.4851 4.9864 3.47887 4.82826 3.53937 4.69659C3.59954 4.56564 3.70401 4.5 3.81824 4.5H15.1818C15.296 4.5 15.4005 4.56564 15.4606 4.69659C15.5211 4.82825 15.5149 4.98637 15.4222 5.11546C14.5967 6.24906 13.4246 7.86547 12.4588 9.19836C11.9758 9.86506 11.5443 10.4609 11.2336 10.8901L10.8667 11.397L10.7674 11.5342L10.7416 11.5698L10.7351 11.5788L10.7334 11.5811L10.733 11.5817L10.7329 11.5818L11.1379 11.875L10.7329 11.5819L10.6379 11.7131V11.875V17.125C10.6379 17.363 10.4624 17.5 10.321 17.5H8.68715C8.54577 17.5 8.37022 17.363 8.37022 17.125V11.875V11.7127L8.27493 11.5814L7.87022 11.875Z" stroke="white"/>
<path d="M18.75 11.5C18.75 13.8472 16.8472 15.75 14.5 15.75C12.1528 15.75 10.25 13.8472 10.25 11.5C10.25 9.15279 12.1528 7.25 14.5 7.25C16.8472 7.25 18.75 9.15279 18.75 11.5Z" fill="white" stroke="#151472" stroke-width="0.5"/>
<path d="M16.8126 9.70565C16.9556 9.56262 16.9556 9.33072 16.8126 9.18769C16.6696 9.04466 16.4377 9.04466 16.2946 9.18769L14.5001 10.9822L12.7056 9.18769C12.5626 9.04466 12.3307 9.04466 12.1877 9.18769C12.0447 9.33072 12.0447 9.56262 12.1877 9.70565L13.9822 11.5001L12.1877 13.2946C12.0447 13.4377 12.0447 13.6696 12.1877 13.8126C12.3307 13.9556 12.5626 13.9556 12.7056 13.8126L14.5001 12.0181L16.2946 13.8126C16.4377 13.9556 16.6696 13.9556 16.8126 13.8126C16.9556 13.6696 16.9556 13.4377 16.8126 13.2946L15.0181 11.5001L16.8126 9.70565Z" fill="#151472"/>
</svg>`,r=`<svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8C2 6 2.39956 2 5.9956 2C11.2138 2 8.9923 8 12.9879 8C17.4829 8 16.9835 4 16.9835 2" stroke="#151472" stroke-width="3"/>
</svg>`,o=`<svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 7C1 5 1.39956 1 4.9956 1C10.2138 1 7.9923 7 11.9879 7C16.4829 7 15.9835 3 15.9835 1" stroke="#151472" stroke-width="1.5" stroke-dasharray="2.5 1"/>
</svg>`,l=0,s=Symbol(),d=Symbol(),c=Symbol();function u(n,r,o,u){r=r||"";let p=document.createElement("div"),m={},v={},h={};Object.defineProperty(m,"expression",{get(){let e={};for(let t in m){let i=m[t];"expression"!=t&&(e[i[0]]=i[1])}return e}}),Object.defineProperty(m,"urlids",{get(){let e=[];for(let t in h)e.push(h[t]);return e.join("")}});let b=document.createElement("div"),g=document.createElement("div"),x=document.createElement("div"),y=document.createElement("div"),w=document.createElement("div"),A=document.createElement("div");b.classList.add("menuAbas"),g.classList.add("abas"),y.classList.add("legenda"),x.classList.add("menuCompacto"),w.classList.add("background-1"),A.classList.add("background-2"),b.append(g),b.append(x),b.append(w),b.append(A),x.append(y),b.setAttribute("style",`--corFundoMenu: ${o};`),u&&b.classList.add("principal"),i.forEach((i,n)=>{!function(i,n,o){let u="m"+ ++l,f=document.createElement("div"),b=document.createElement("div"),g=document.createElement("div"),x=document.createElement("div"),y=document.createElement("div"),w=document.createElement("div"),A=document.createElement("div"),C=document.createElement("div"),E=o+2;m[n.varName]="",v[n.varName]="",h[n.varName]="";let _=[];function T(){f[d](),p.dispatchEvent(new t("input"))}f[d]=function(){let t=_.filter(e=>e.checked).map(t=>e(t.value)),i=_.filter(e=>e.checked).map(e=>e[c].expression),a=_.filter(e=>e.checked).map(e=>e[c].urlid);m[n.varName]=[n.attrIndex,i],h[n.varName]=a.join(""),t.length?b.classList.add("selecionado"):b.classList.remove("selecionado");let r=t.join(e(" ou "));y.innerHTML=r,y.setAttribute("title",r),v[n.varName]=r},f.classList.add("itemMenuCompacto"),f.classList.add(n.varName),b.classList.add("titulo"),b.innerHTML=e(n.title),x.classList.add("valoresSelecionados"),y.classList.add("textoValoresSelecionados"),w.classList.add("icone"),w.innerHTML="expand_more",f.append(b),g.append(x),f.append(g),x.append(w),x.append(y),A.classList.add("submenu"),A.style["grid-column"]=E+"/"+(E+1),C.classList.add("itens"),C.classList.add("i"+o),C.classList.add("ABA"+a),A.append(C),f[s]=A,f.style["grid-column-start"]=E,f.addEventListener("click",e=>{if(f.classList.contains("aberto"))f.classList.remove("aberto"),A.classList.remove("aberto");else{let t=f.parentNode.querySelector(".aberto");t&&(t.classList.remove("aberto"),t[s].classList.remove("aberto")),f.classList.add("aberto"),A.classList.add("aberto")}});let S=null;n.itens.forEach((t,i)=>{let a=document.createElement("div"),o=document.createElement("label"),l=document.createElement("input");o.innerHTML=e(t.name),o.setAttribute("for",u+i),l.setAttribute("type",n.input),l.setAttribute("value",t.name),r.indexOf(t.urlid)>=0&&l.setAttribute("checked","checked"),l.setAttribute("id",u+i),l.setAttribute("name","radio"===n.input?u:u+i),l[c]=t,a.classList.add("item"),a.append(l),a.append(o),C.append(a),_.push(l),l.addEventListener("input",e=>{e.stopPropagation(),T()}),"radio"==n.input&&l.addEventListener("click",e=>{if(e.target===S){e.target.checked=!1,S=null,T();return}S=e.target})}),i.append(f),i.append(A),f[d]()}(x,i,n)});let C=p.attachShadow({mode:"open"});return C.append(function(){let e=document.createElement("style");return e.textContent=`                  
          div.menuAbas {
            --corFundoItemAberto: #F4F4F4;
            --corAltaInfluencia: #B90404;
            --corFonte: #151472;
            --corFonteDesabilitada: #aaa;

            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;     
            display: grid;
            grid-template-columns: 1fr;
            width: 100%;
            font-family: "Roboto Condensed";  
            color: var(--corFonte);
            margin: 0px 0px;
          }

          div.menuAbas div.abas {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            font-size: 14px;
            display: grid;
            grid-template-columns: repeat(3,1fr);
            gap: 1px;
          }

          div.menuAbas div.abas div.aba {
            position: relative;
            display: grid;
            background-color: #F4F4F4;
            padding: 8px 0;
            font-weight: 700;
            border-radius: 6px 6px 0 0;
            grid-template-columns: 80px 1fr;
          }

          div.menuAbas div.abas div.aba div.limpaFiltro {
            display: none;
          }

          div.menuAbas div.abas div.aba.selecionada div.limpaFiltro {
            font-size: 10px;
            line-height: 1;
            display: grid;
            column-gap: 3px;
            grid-template-columns: 25px 50px;
            padding-left: 5px;
            grid-column: 1 / 2;
            grid-row: 1 / 2;
          }

          div.menuAbas div.abas div.aba span.tituloAba {
            grid-column: 1 / 3;
            grid-row: 1 / 2;
            text-align: center;
          }

          div.menuAbas div.abas div.aba.desabilitada {
              color: var(--corFonteDesabilitada);
          }

          div.menuAbas div.abas div.aba.selecionada {
            background-color: #E5E5E5;
            box-shadow: 2px -2px 6px rgba(0, 0, 0, 0.25);
            z-index: 2;
          }

          div.menuAbas div.menuCompacto {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            display: grid;
            grid-template-columns: 80px repeat(${i.length},85px) 8px;
            gap: 10px;
            width: fit-content;
          }

          div.menuAbas div.background-1 {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            z-index: 1;
          }

          div.principal div.background-1 {
            box-shadow: 2px -2px 6px rgba(0, 0, 0, 0.25);
          }

          div.menuAbas div.background-2 {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            background-color: var(--corFundoMenu);
            z-index: 3;
          }

          div.menuAbas .legenda {
            display: flex;
            flex-direction: column;
            background-color: var(--corFundoItemAberto);
            padding: 7px 5px 3px 5px;
            font-size: 12px;
            line-height: 1;
            z-index: 4;
          }

          div.menuAbas .legenda .titulo {
            text-align: center;
            min-height: 18px;
          }

          div.menuAbas .legenda .icone {
            padding-top: 5px;
            text-align: center;
          }

          div.itemMenuCompacto {
            display: flex;
            flex-direction: column;
            background-color: var(--corFundoMenu);
            padding: 7px 5px 3px 5px;
            font-size: 12px;
            line-height: 1;
            grid-row-start: 1;
            grid-row-end: 2;  
            border-radius: 5px 5px 0 0;
            transition: background-color 1s, box-shadow 1s;
            z-index: 4;
            justify-content: end;
          }

          div.itemMenuCompacto.aberto {
            box-shadow: 0px 6px 0px 0px #F4F4F4, 2px 0px 4px #00000030;
            background-color: var(--corFundoItemAberto);
          }

          div.itemMenuCompacto div.titulo {
            font-weight: 300;
            text-transform: uppercase;
            text-align: center;
            white-space: nowrap;
          }

          div.itemMenuCompacto div.titulo.selecionado {
            font-weight: 700;
          }

          div.itemMenuCompacto div.valoresSelecionados {
            display: flex;
            flex-direction: row-reverse;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center; 
            line-height: 20px;
          }

          div.itemMenuCompacto div.valoresSelecionados div.textoValoresSelecionados {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;  
          }

          div.itemMenuCompacto div.valoresSelecionados div.icone {
            display: inline;
            font-family: 'Material Icons';
            font-weight: normal;
            font-style: normal;
            font-size: 24px;
            line-height: 0.8;
            letter-spacing: normal;
            text-transform: none;
            padding: 0px;
            white-space: nowrap;
            word-wrap: normal;
            direction: ltr;
            transform: rotate(0deg);
            transition: transform 1s;
            -webkit-font-feature-settings: 'liga';
            -webkit-font-smoothing: antialiased;
          }

          div.itemMenuCompacto.aberto div.valoresSelecionados div.icone {
            transform: rotate(-180deg);
          }

          div.menuCompacto .submenu {
            box-shadow: 2px -2px 4px #00000030;
            position: relative;
            background-color: var(--corFundoItemAberto);
            grid-row-start: 1;
            grid-row-end: 2;
            top: 20px;
            height: 6px;
            opacity: 0;
            transition: top 1s, opacity 1s;
            z-index: 3;
          }

          div.menuCompacto .submenu::after {
            content: "";
            position: absolute;
            display: block;
            background-color: var(--corFundoItemAberto);
            box-shadow: none;
            top: calc(100% - 12px);
            width: 100%;
            height: 12px;
          }

          div.menuCompacto .submenu.aberto {
            top: 100%;
            opacity: 1;
          }

          div.menuCompacto .submenu .itens {
            box-shadow: 2px -2px 4px #00000030;
            position: absolute;
            left: 50%;
            top: 100%;
            transform: translate(-50%,0);
            background-color: var(--corFundoItemAberto);
            padding: 8px 10px 8px 20px;
            border-radius: 6px;
            margin-top: 0px;
            display: flex;
            width: fit-content;
            gap: 25px;
          }

          div.menuCompacto .submenu.aberto .itens {
          }

          div.menuCompacto .submenu .itens.i0.ABA0 {
            transform: translate(-30%,0);
          }

          div.menuCompacto .submenu .itens.i1.ABA0 {
            left: 50%;
            transform: translate(-20%,0);
          }

          div.menuCompacto .submenu .itens.i10.ABA0 {
            transform: translate(-60%,0);
          }

          div.menuCompacto .submenu .itens.i12.ABA0 {
            transform: translate(-80%,0);
          }

          div.menuCompacto .submenu .itens.i0.ABA1 {
            transform: translate(-30%,0);
          }

          div.menuCompacto .submenu .itens.i1.ABA1 {
            left: 50%;
            transform: translate(-20%,0);
          }

          div.menuCompacto .submenu .itens.i10.ABA1 {
            transform: translate(-60%,0);
          }

          div.menuCompacto .submenu .itens.i12.ABA1 {
            transform: translate(-80%,0);
          }

          div.menuCompacto .submenu .itens.i0.ABA2 {
            transform: translate(-30%,0);
          }

          div.menuCompacto .submenu .itens.i3.ABA2 {
            transform: translate(-30%,0);
          }

          div.menuCompacto .submenu .itens .item {
            display: flex;
            align-items: center;
            white-space: nowrap;
            gap: 6px;
          }

          div.menuCompacto .submenu .itens .item label {
            font-size: 12px;
          }

          div.menuCompacto .submenu .itens .item input {
            -webkit-appearance: none;
            appearance: none;
            margin: 0px;
            width: 17px;
            height: 17px;
            border: 3px var(--corFonte) solid;
          }

          div.menuCompacto .submenu .itens .item input[type=radio] {
            border-radius: 50%;
          }

          div.menuCompacto .submenu .itens .item input:checked {
            background-color: var(--corFonte);  
          }

          div.menuCompacto .submenu .itens .item input:focus {
            outline: 0;  
          }

          div.menuCompacto .submenu .itens .item input[type=checkbox] {
            border-radius: 2px;
          }  
      `,e}()),C.append(b),p.limpa=function(){let e=x.querySelectorAll("input:checked");for(let i=0;i<e.length;i++)e[i].checked=!1;let a=x.querySelectorAll(".itemMenuCompacto");for(let n=0;n<a.length;n++)a[n][d]();p.dispatchEvent(new t("input"))},p.cloneMenu=function(){let e=x.querySelectorAll("input:checked"),t=f(n),i=t.shadowRoot.querySelectorAll("input");for(let a=0;a<e.length;a++)for(let r=0;r<i.length;r++)e[a][c]===i[r][c]&&(i[r].checked=!0);let o=t.shadowRoot.querySelectorAll(".itemMenuCompacto");for(let l=0;l<o.length;l++)o[l][d]();return t},Object.defineProperty(p,"value",{get:()=>m}),Object.defineProperty(p,"texto",{get:()=>v}),[p,g,y]}function p(t,i,r){let o,l;if(o=document.createElement("div"),(l=document.createElement("span")).classList.add("tituloAba"),l.innerHTML=e(i),o.classList.add("aba"),o.appendChild(l),a===r){let s,d,c;o.classList.add("selecionada"),(c=document.createElement("div")).classList.add("limpaFiltro"),s=document.createElement("span"),d=document.createElement("span"),s.innerHTML=n,d.innerHTML=e("LIMPAR<br>FILTROS"),c.appendChild(s),c.appendChild(d),o.appendChild(c),c.addEventListener("click",e=>{t.limpa(),t.dispatchEvent(new CustomEvent("limparFiltros",{detail:{index:r+1}}))})}else o.addEventListener("click",e=>{t.dispatchEvent(new CustomEvent("aba",{detail:{index:r+1}}))});return o}function f(e,t,a){let[n,r,l]=u(null,t,a,!1),s=n.shadowRoot.querySelector(".menuCompacto");s.style["grid-template-columns"]=`110px repeat(${i.length},84px) 0px`,s.style.gap="2px",l.style["background-color"]="#ffffff66",l.style.color="var(--corFonte)",l.style["border-radius"]="0px 0px 0px 8px";let d=document.createElement("div"),c=document.createElement("div");return d.classList.add("titulo"),d.innerHTML="&nbsp",c.classList.add("icone"),c.innerHTML=o,l.append(d),l.append(c),n}return{principal:function(t){let[i,a,n]=u(null,t,"#E5E5E5",!0);a.append(p(i,"NASCIDOS VIVOS",0)),a.append(p(i,"CARACTER\xcdSTICAS DO NASCIMENTO",1)),a.append(p(i,"MORTALIDADE PERINATAL E INFANTIL",2));let o=document.createElement("div"),l=document.createElement("div");return o.classList.add("titulo"),l.classList.add("icone"),l.innerHTML=r,o.innerHTML=e("CONSULTA<br>PRINCIPAL"),n.append(o),n.append(l),i},local:f}}}function o(e){return e`### Nascidos Vivos`}function l(e){return e.principal()}function s(){return[{title:"PESO AO<br>NASCER",varName:"PESO",ordinal:!0,input:"checkbox",attrIndex:0,itens:[{name:"Normal",style:[],expression:[3],urlid:"A"},{name:"Baixo peso",style:["alta-influencia"],expression:[2],urlid:"B"},{name:"Muito baixo peso",style:["alta-influencia"],expression:[1],urlid:"C"},{name:"Ignorado",style:[],expression:[0],urlid:"D"}]},{title:"IDADE<br>GESTACIONAL",varName:"IDADE_GESTACIONAL",ordinal:!0,input:"checkbox",attrIndex:1,itens:[{name:"P\xf3s-termo",style:[],expression:[7],urlid:"E"},{name:"A termo tardio",style:[],expression:[6],urlid:"F"},{name:"A termo completo",style:[],expression:[5],urlid:"G"},{name:"A termo precoce",style:[],expression:[4],urlid:"H"},{name:"Pr\xe9-termo moderado",style:["alta-influencia"],expression:[3],urlid:"I"},{name:"Muito pr\xe9-termo",style:["alta-influencia"],expression:[2],urlid:"J"},{name:"Pr\xe9-termo extremo",style:["alta-influencia"],expression:[1],urlid:"K"},{name:"Ignorado",style:[],expression:[0],urlid:"L"}]},{title:"ADEQUA\xc7\xc3O \xc0<br>IDADE GESTAC.",varName:"ADEQ_IDADE_GESTACIONAL",ordinal:!0,input:"checkbox",attrIndex:2,itens:[{name:"GIG",style:[],expression:[3],urlid:"M"},{name:"AIG",style:["alta-influencia"],expression:[2],urlid:"N"},{name:"PIG",style:["alta-influencia"],expression:[1],urlid:"O"},{name:"Ignorado",style:[],expression:[0],urlid:"P"}]},{title:"SEXO",varName:"SEXO",ordinal:!1,input:"checkbox",attrIndex:3,itens:[{name:"Feminino",style:[],expression:[2],urlid:"Q"},{name:"Masculino",style:[],expression:[1],urlid:"R"},{name:"Indeterminado",style:[],expression:[0],urlid:"S"}]},{title:"ANOMALIA<br>CONG\xcaNITA",varName:"ANOMAL_CONGENITA",ordinal:!1,input:"radio",attrIndex:4,itens:[{name:"N\xe3o",style:[],expression:[2],urlid:"T"},{name:"Sim",style:["alta-influencia"],expression:[1],urlid:"U"},]},{title:"RA\xc7A/COR<br>DA M\xc3E",varName:"RACA_COR_MAE",ordinal:!1,input:"checkbox",attrIndex:5,itens:[{name:"Branca",style:[],expression:[1],urlid:"V"},{name:"Preta",style:[],expression:[2],urlid:"W"},{name:"Parda",style:[],expression:[4],urlid:"X"},{name:"Outros",style:[],expression:[3,4,5],urlid:"Y"},{name:"Ignorado",style:[],expression:[0],urlid:"Z"}]},{title:"ESCOLARIDADE<br>DA M\xc3E",varName:"ESCOLARIDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:6,itens:[{name:"Superior",style:[],expression:[7],urlid:"a"},{name:"Ensino m\xe9dio",style:[],expression:[6],urlid:"b"},{name:"Fundamental completo",style:[],expression:[5],urlid:"c"},{name:"Fundamental incompleto",style:[],expression:[4,3,2],urlid:"d"},{name:"Sem",style:[],expression:[1],urlid:"e"},{name:"Ignorado",style:[],expression:[0],urlid:"f"}]},{title:"ESTADO CIVIL<br>DA M\xc3E",varName:"ESTADO_CIVIL_MAE",ordinal:!1,input:"checkbox",attrIndex:7,itens:[{name:"Solteira",style:[],expression:[1],urlid:"g"},{name:"Casada ou uni\xe3o est\xe1vel",style:[],expression:[2],urlid:"h"},{name:"Vi\xfava",style:[],expression:[3],urlid:"i"},{name:"Separada ou divorcidada",style:[],expression:[4],urlid:"j"},{name:"Ignorado",style:[],expression:[0],urlid:"k"}]},{title:"IDADE<br>DA M\xc3E",varName:"IDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:8,itens:[{name:"10-14",style:[],expression:[1],urlid:"l"},{name:"15-19",style:[],expression:[2],urlid:"m"},{name:"20-29",style:[],expression:[3],urlid:"n"},{name:"30-39",style:[],expression:[4],urlid:"o"},{name:"40-49",style:["alta-influencia"],expression:[5],urlid:"p"},{name:"50+",style:["alta-influencia"],expression:[6],urlid:"q"},{name:"Ignorado",style:[],expression:[0],urlid:"r"}]},{title:"CONSULTAS<BR>DE PR\xc9 NATAL",varName:"CONSULTAS",ordinal:!0,input:"checkbox",attrIndex:9,itens:[{name:"7+",style:[],expression:[4],urlid:"s"},{name:"4 a 6",style:[],expression:[3],urlid:"t"},{name:"1 a 3",style:["alta-influencia"],expression:[2],urlid:"u"},{name:"0",style:["alta-influencia"],expression:[1],urlid:"v"},{name:"Ignorado",style:[],expression:[0],urlid:"w"}]},{title:"TIPO<br>PARTO",varName:"PARTO",ordinal:!1,input:"checkbox",attrIndex:10,itens:[{name:"Vaginal",style:[],expression:[1],urlid:"x"},{name:"Ces\xe1rio",style:[],expression:[2],urlid:"y"},{name:"Indeterminado",style:[],expression:[0],urlid:"z"}]},{title:"TRAB PARTO<br>INDUZIDO",varName:"STTRABPART",ordinal:!1,input:"radio",attrIndex:11,itens:[{name:"SIM",style:[],expression:[1],urlid:"9"},{name:"N\xc3O",style:[],expression:[2],urlid:"8"},]},{title:"ADEQUA\xc7\xc3O<br>PR\xc9 NATAL",varName:"KOTELCHUCK",ordinal:!0,input:"checkbox",attrIndex:12,itens:[{name:"N\xe3o fez",style:["alta-influencia"],expression:[1],urlid:"7"},{name:"Inadequado",style:["alta-influencia"],expression:[2],urlid:"6"},{name:"Intermedi\xe1rio",style:[],expression:[3],urlid:"5"},{name:"Adequado",style:[],expression:[4],urlid:"4"},{name:"Mais que adequado",style:[],expression:[5],urlid:"3"},{name:"Ignorado",style:[],expression:[0],urlid:"2"},]},]}function d(e,t){return e(t,0)}function c(e){return e`### Características do Nascimento`}function u(e){return e.principal()}function p(){return[{title:"PESO AO<br>NASCER",varName:"PESO",ordinal:!0,input:"checkbox",attrIndex:0,itens:[{name:"Normal",style:[],expression:[3],urlid:"A"},{name:"Baixo peso",style:["alta-influencia"],expression:[2],urlid:"B"},{name:"Muito baixo peso",style:["alta-influencia"],expression:[1],urlid:"C"},{name:"Ignorado",style:[],expression:[0],urlid:"D"}]},{title:"IDADE<br>GESTACIONAL",varName:"IDADE_GESTACIONAL",ordinal:!0,input:"checkbox",attrIndex:1,itens:[{name:"P\xf3s-termo",style:[],expression:[7],urlid:"E"},{name:"A termo tardio",style:[],expression:[6],urlid:"F"},{name:"A termo completo",style:[],expression:[5],urlid:"G"},{name:"A termo precoce",style:[],expression:[4],urlid:"H"},{name:"Pr\xe9-termo tardio",style:["alta-influencia"],expression:[3],urlid:"I"},{name:"Pr\xe9-termo moderado",style:["alta-influencia"],expression:[2],urlid:"J"},{name:"Muito pr\xe9-termo",style:["alta-influencia"],expression:[1],urlid:"K"},{name:"Ignorado",style:[],expression:[0],urlid:"L"}]},{title:"ADEQUA\xc7\xc3O \xc0<br>IDADE GESTAC.",varName:"ADEQ_IDADE_GESTACIONAL",ordinal:!0,input:"checkbox",attrIndex:2,itens:[{name:"GIG",style:[],expression:[3],urlid:"M"},{name:"AIG",style:["alta-influencia"],expression:[2],urlid:"N"},{name:"PIG",style:["alta-influencia"],expression:[1],urlid:"O"},{name:"Ignorado",style:[],expression:[0],urlid:"P"}]},{title:"SEXO",varName:"SEXO",ordinal:!1,input:"checkbox",attrIndex:3,itens:[{name:"Feminino",style:[],expression:[2],urlid:"Q"},{name:"Masculino",style:[],expression:[1],urlid:"R"},{name:"Indeterminado",style:[],expression:[0],urlid:"S"}]},{title:"ANOMALIA<br>CONG\xcaNITA",varName:"ANOMAL_CONGENITA",ordinal:!1,input:"radio",attrIndex:4,itens:[{name:"N\xe3o",style:[],expression:[2],urlid:"T"},{name:"Sim",style:["alta-influencia"],expression:[1],urlid:"U"},]},{title:"RA\xc7A/COR<br>DA M\xc3E",varName:"RACA_COR_MAE",ordinal:!1,input:"checkbox",attrIndex:5,itens:[{name:"Branca",style:[],expression:[1],urlid:"V"},{name:"Preta",style:[],expression:[2],urlid:"W"},{name:"Parda",style:[],expression:[4],urlid:"X"},{name:"Outros",style:[],expression:[3,4,5],urlid:"Y"},{name:"Ignorado",style:[],expression:[0],urlid:"Z"}]},{title:"ESCOLARIDADE<br>DA M\xc3E",varName:"ESCOLARIDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:6,itens:[{name:"Superior",style:[],expression:[7],urlid:"a"},{name:"Ensino m\xe9dio",style:[],expression:[6],urlid:"b"},{name:"Fundamental completo",style:[],expression:[5],urlid:"c"},{name:"Fundamental incompleto",style:[],expression:[4,3,2],urlid:"d"},{name:"Sem",style:[],expression:[1],urlid:"e"},{name:"Ignorado",style:[],expression:[0],urlid:"f"}]},{title:"ESTADO CIVIL<br>DA M\xc3E",varName:"ESTADO_CIVIL_MAE",ordinal:!1,input:"checkbox",attrIndex:7,itens:[{name:"Solteira",style:[],expression:[1],urlid:"g"},{name:"Casada ou uni\xe3o est\xe1vel",style:[],expression:[2],urlid:"h"},{name:"Vi\xfava",style:[],expression:[3],urlid:"i"},{name:"Separada ou divorcidada",style:[],expression:[4],urlid:"j"},{name:"Ignorado",style:[],expression:[0],urlid:"k"}]},{title:"IDADE<br>DA M\xc3E",varName:"IDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:8,itens:[{name:"10-14",style:[],expression:[1],urlid:"l"},{name:"15-19",style:[],expression:[2],urlid:"m"},{name:"20-29",style:[],expression:[3],urlid:"n"},{name:"30-39",style:[],expression:[4],urlid:"o"},{name:"40-49",style:["alta-influencia"],expression:[5],urlid:"p"},{name:"50+",style:["alta-influencia"],expression:[6],urlid:"q"},{name:"Ignorado",style:[],expression:[0],urlid:"r"}]},{title:"APGAR<BR>5\xba MINUTO",varName:"APGAR5",ordinal:!0,input:"checkbox",attrIndex:13,itens:[{name:"Boa vitalidade",style:[],expression:[3],urlid:"s"},{name:"Asfixia moderada",style:["alta-influencia"],expression:[2],urlid:"t"},{name:"Asfixia grave",style:["alta-influencia"],expression:[1],urlid:"u"},{name:"Ignorado",style:[],expression:[0],urlid:"v"}]},{title:"TIPO<br>PARTO",varName:"PARTO",ordinal:!1,input:"checkbox",attrIndex:10,itens:[{name:"Vaginal",style:[],expression:[1],urlid:"w"},{name:"Ces\xe1rio",style:[],expression:[2],urlid:"x"},{name:"Indeterminado",style:[],expression:[0],urlid:"y"}]},{title:"TRAB PARTO<br>INDUZIDO",varName:"STTRABPART",ordinal:!1,input:"radio",attrIndex:11,itens:[{name:"SIM",style:[],expression:[1],urlid:"z"},{name:"N\xc3O",style:[],expression:[2],urlid:"9"},]},{title:"ADEQUA\xc7\xc3O<br>PR\xc9 NATAL",varName:"KOTELCHUCK",ordinal:!0,input:"checkbox",attrIndex:12,itens:[{name:"N\xe3o fez",style:["alta-influencia"],expression:[1],urlid:"8"},{name:"Inadequado",style:["alta-influencia"],expression:[2],urlid:"7"},{name:"Intermedi\xe1rio",style:[],expression:[3],urlid:"6"},{name:"Adequado",style:[],expression:[4],urlid:"5"},{name:"Mais que adequado",style:[],expression:[5],urlid:"4"},{name:"Ignorado",style:[],expression:[0],urlid:"3"},]},]}function f(e,t){return e(t,1)}function m(e){return e`### Mortalidade Perinatal e infantil`}function v(e){return e.principal()}function h(){return[{title:"PESO AO<br>NASCER",varName:"PESO",ordinal:!0,input:"checkbox",attrIndex:1,itens:[{name:"Normal",style:[],expression:[3],urlid:"A"},{name:"Baixo peso",style:["alta-influencia"],expression:[2],urlid:"B"},{name:"Muito baixo peso",style:["alta-influencia"],expression:[1],urlid:"C"},{name:"Ignorado.",style:[],expression:[0],urlid:"D"}]},{title:"SEXO",varName:"SEXO",ordinal:!1,input:"checkbox",attrIndex:2,itens:[{name:"Feminino",style:[],expression:[2],urlid:"E"},{name:"Masculino",style:[],expression:[1],urlid:"F"},{name:"Indeterminado",style:[],expression:[0],urlid:"G"}]},{title:"RA\xc7A/COR",varName:"RACA_COR",ordinal:!1,input:"checkbox",attrIndex:3,itens:[{name:"Branca",style:[],expression:[1],urlid:"H"},{name:"Preta",style:[],expression:[2],urlid:"I"},{name:"Parda",style:[],expression:[4],urlid:"J"},{name:"Outros",style:[],expression:[3,4,5],urlid:"K"},{name:"Ignorado",style:[],expression:[0],urlid:"L"}]},{title:"ESCOLARIDADE<br>DA M\xc3E",varName:"ESCOLARIDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:4,itens:[{name:"Superior",style:[],expression:[7],urlid:"M"},{name:"Ensino m\xe9dio",style:[],expression:[6],urlid:"N"},{name:"Fundamental completo",style:[],expression:[5],urlid:"O"},{name:"Fundamental incompleto",style:[],expression:[4,3,2],urlid:"P"},{name:"Sem",style:[],expression:[1],urlid:"Q"},{name:"Ignorado",style:[],expression:[0],urlid:"R"}]},{title:"IDADE<br>DA M\xc3E",varName:"IDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:5,itens:[{name:"10-14",style:[],expression:[1],urlid:"S"},{name:"15-19",style:[],expression:[2],urlid:"T"},{name:"20-29",style:[],expression:[3],urlid:"U"},{name:"30-39",style:[],expression:[4],urlid:"V"},{name:"40-49",style:["alta-influencia"],expression:[5],urlid:"W"},{name:"50+",style:["alta-influencia"],expression:[6],urlid:"X"},{name:"Ignorado",style:[],expression:[0],urlid:"Y"}]},{title:"TIPO<br>PARTO",varName:"PARTO",ordinal:!1,input:"checkbox",attrIndex:6,itens:[{name:"Vaginal",style:[],expression:[1],urlid:"Z"},{name:"Ces\xe1rio",style:[],expression:[2],urlid:"a"},{name:"Indeterminado",style:[],expression:[0],urlid:"b"}]},]}function b(e,t){return e(t,2)}function g(e){return e`## DataSources`}function x(){return function(){let e="https://storage.googleapis.com/amplia/ufs2/",t=(e,t)=>e.data<t.data?-1:e.data>t.data?1:0,i=[2,3,2,2,2,3,3,3,3,3,2,2],a=[3,2,2],n=null;async function r(){return null!=n?n:await fetch(`${e}index.dat`).then(e=>e.arrayBuffer()).then(e=>n=new DataView(e))}async function o(e){let t=await r(),i=t.buffer.byteLength/12,a=0,n=i-1;for(;a<=n;){let o=Math.floor((a+n)/2),l=t.getUint32(12*o);if(e==l)return[t.getUint32(12*o+4),t.getUint32(12*o+8)];e<l?n=o-1:a=o+1}return null}function l(e,t,n,r){r=r||{};let o=(t+n)*11,l=e.getUint32(o).toString();l=l.substring(0,4)+"-"+l.substring(4,6)+"-"+l.substring(6);let s=e.getUint16(o+4),d=e.getUint32(o+6),c=e.getUint8(o+10),u=0,p=[];for(let f=0;f<i.length;f++){let m=((1<<i[f])-1<<u&d)>>u;p.push(m),u+=i[f]}u=0;for(let v=0;v<a.length;v++){let h=((1<<a[v])-1<<u&c)>>u;p.push(h),u+=a[v]}for(let b=0;b<p.length;b++){let g=p[b],x=r[b],y=!0;if(x&&x.length){y=!1;for(let w=0;w<x.length&&!y;w++)y=x[w].includes(g)}if(!y)return[l]}return[l,s,...p]}function s(t){let i=t;return i>1e5&&(i=Math.floor(t/1e4)),fetch(`${e}uf${i}.dat`).then(e=>e.arrayBuffer()).then(e=>new DataView(e)).then(async e=>{let i,a;return t>1e5?[a,i]=await o(t):(a=0,i=e.buffer.byteLength/11),[e,a,i]})}function d(e){let t={};if(e)for(let i in e)t[i]=e[i];return t}return{fetchTotal:function(e,i){return i=d(i),s(e).then(([e,a,n])=>(function(e,a,n){let r=new Map;for(let o=0;o<n;o++){let s=l(e,a,o,i),d=r.get(s[0]);d?d[1]++:(d=[0,1],r.set(s[0],d)),s.length>1&&d[0]++}let c=[],u=[];for(let[p,f]of r)c.push({data:p,valor:f[0]}),u.push({data:p,valor:f[1]});return c.sort(t),u.sort(t),[c,u]})(e,a,n))},fetchPIG:function(e,i){return i=d(i),s(e).then(([e,a,n])=>(function(e,a,n){let r=new Map;for(let o=0;o<n;o++){let s=l(e,a,o,i),d=r.get(s[0]);d?d[3]++:(d=[0,0,0,1],r.set(s[0],d)),s.length>1&&(1==s[4]?d[0]++:2==s[4]?d[1]++:3==s[4]&&d[2]++)}let c=[],u=[];for(let[p,f]of r)(f[0]||f[1]||f[2])&&(c.push({data:p,ig:"PEQUENO",total:f[0]}),c.push({data:p,ig:"ADEQUADO",total:f[1]}),c.push({data:p,ig:"GRANDE",total:f[2]})),u.push({data:p,valor:f[3]});return c.sort(t),u.sort(t),[c,u]})(e,a,n))},fetchPeso:function(e,i){return i=d(i),s(e).then(([e,a,n])=>(function(e,a,n){let r=new Map;for(let o=0;o<n;o++){let s=l(e,a,o,i);if(s.length>1){let d=r.get(s[0]);d?(d[0]+=s[1],d[1]++):(d=[s[1],1],r.set(s[0],d))}}let c=[];for(let[u,p]of r){let f={data:u,valor:p[0]/p[1],total:p[1]};c.push(f)}return c.sort(t),c})(e,a,n))},fetchRobson:function(e,i){return i=d(i),s(e).then(([e,a,n])=>(function(e,a,n){let r=new Map;for(let o=0;o<n;o++){let s=l(e,a,o,i),d=r.get(s[0]);d?d[3]++:(d=[0,0,0,1],r.set(s[0],d)),s.length>1&&(1==s[16]?d[0]++:2==s[16]?d[1]++:3==s[16]&&d[2]++)}let c=[],u=[];for(let[p,f]of r)(f[0]||f[1]||f[2])&&(c.push({data:p,robson:"Robson1a4",total:f[0]}),c.push({data:p,robson:"Robson5",total:f[1]}),c.push({data:p,robson:"Robson6a10",total:f[2]})),u.push({data:p,valor:f[3]});return c.sort(t),u.sort(t),[c,u]})(e,a,n))}}}()}function y(){return function(){let e="https://storage.googleapis.com/amplia/sim-ufs/",t=(e,t)=>e.data<t.data?-1:e.data>t.data?1:0,i=[2,2,2,3,3,3,2,2],a=null;async function n(){return null!=a?a:await fetch(`${e}index.dat`).then(e=>e.arrayBuffer()).then(e=>a=new DataView(e))}async function r(e){let t=await n(),i=t.buffer.byteLength/12,a=0,r=i-1;for(;a<=r;){let o=Math.floor((a+r)/2),l=t.getUint32(12*o);if(e==l)return[t.getUint32(12*o+4),t.getUint32(12*o+8)];e<l?r=o-1:a=o+1}return null}function o(e,t,a,n){n=n||{};let r=(t+a)*10,o=e.getUint32(r).toString();o=o.substring(0,4)+"-"+o.substring(4,6)+"-"+o.substring(6);let l=e.getUint16(r+4),s=e.getUint32(r+6),d=0,c=[];for(let u=0;u<i.length;u++){let p=((1<<i[u])-1<<d&s)>>d;c.push(p),d+=i[u]}for(let f=0;f<c.length;f++){let m=c[f],v=n[f],h=!0;if(v&&v.length){h=!1;for(let b=0;b<v.length&&!h;b++)h=v[b].includes(m)}if(!h)return[o]}return[o,l,...c]}function l(t){let i=t;return i>1e5&&(i=Math.floor(t/1e4)),fetch(`${e}uf${i}.dat`).then(e=>e.arrayBuffer()).then(e=>new DataView(e)).then(async e=>{let i,a;return t>1e5?[a,i]=await r(t):(a=0,i=e.buffer.byteLength/10),[e,a,i]})}function s(e){let t={};if(e)for(let i in e)t[i]=e[i];return t}return{fetchNeoNatal:function(e,i){return i=s(i),l(e).then(([e,a,n])=>(function(e,a,n){let r=new Map;for(let l=0;l<n;l++){let s=o(e,a,l,i),d=r.get(s[0]);d?d[3]++:(d=[0,0,0,1],r.set(s[0],d)),s.length>1&&(1==s[2]?d[0]++:2==s[2]?d[1]++:3==s[2]&&d[2]++)}let c=[],u=[];for(let[p,f]of r)(f[0]||f[1]||f[2])&&(c.push({data:p,neonatal:"PRECOCE",total:f[0]}),c.push({data:p,neonatal:"TARDIO",total:f[1]}),c.push({data:p,neonatal:"NEOTOTAL",total:f[0]+f[1]}),c.push({data:p,neonatal:"POS",total:f[2]})),u.push({data:p,valor:f[3]});return c.sort(t),u.sort(t),[c,u]})(e,a,n))},fetchFetal:function(e,i){return(i=s(i))[3]=[],l(e).then(([e,a,n])=>(function(e,a,n){let r=new Map;for(let l=0;l<n;l++){let s=o(e,a,l,i),d=r.get(s[0]);d?d[3]++:(d=[0,0,0,1],r.set(s[0],d)),s.length>1&&0==s[2]&&d[0]++}let c=[],u=[];for(let[p,f]of r)(f[0]||f[1]||f[2])&&c.push({data:p,valor:f[0]}),u.push({data:p,valor:f[3]});return c.sort(t),u.sort(t),[c,u]})(e,a,n))},fetchRelParto:function(e,i){return i=s(i),l(e).then(([e,a,n])=>(function(e,a,n){let r=new Map;for(let l=0;l<n;l++){let s=o(e,a,l,i),d=r.get(s[0]);d?d[3]++:(d=[0,0,0,1],r.set(s[0],d)),s.length>1&&(1==s[9]?d[0]++:2==s[9]?d[1]++:3==s[9]&&d[2]++)}let c=[],u=[];for(let[p,f]of r)(f[0]||f[1]||f[2])&&(c.push({data:p,relparto:"ANTES",total:f[0]}),c.push({data:p,relparto:"DURANTE",total:f[1]}),c.push({data:p,relparto:"DEPOIS",total:f[2]})),u.push({data:p,valor:f[3]});return c.sort(t),u.sort(t),[c,u]})(e,a,n))},fetchTotal:function(e,i){return i=s(i),l(e).then(([e,a,n])=>(function(e,a,n){let r=new Map;for(let l=0;l<n;l++){let s=o(e,a,l,i),d=r.get(s[0]);d?d[1]++:(d=[0,1],r.set(s[0],d)),s.length>1&&d[0]++}let c=[],u=[];for(let[p,f]of r)c.push({data:p,valor:f[0]}),u.push({data:p,valor:f[1]});return c.sort(t),u.sort(t),[c,u]})(e,a,n))}}}()}function w(e){return e`### Alguns testes com os datasources`}function A(e,t){return e.fetchRobson(11,t.expression)}function C(e,t){return e.fetchPeso(11,t.expression)}function E(e){return e("municipios2.csv").csv()}function _(e,t){return e.fetchRelParto(35,t.expression)}function T(e){return e.expression}function S(e,t){return e.fetchFetal(35,t.expression)}function O(){return new Set}function M(e){return function(t){return e.add(t),t}}function k(e){return e.html`<style>
  @import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap);
  @import url(https://fonts.googleapis.com/icon?family=Material+Icons);    
</style>`}function I(e,t){let I=e.module(),L=new Map([["municipios2.csv",{url:new i.U(i(582)),mimeType:"text/csv",toString:function(){return this.url}}]]);return I.builtin("FileAttachment",e.fileAttachments(e=>L.get(e))),I.variable(t()).define(["md"],a),I.variable(t()).define(["md"],n),I.variable(t("ampliaMenu")).define("ampliaMenu",["TL","Event"],r),I.variable(t()).define(["md"],o),I.variable(t("mp")).define("mp",["menuNascidosVivos"],l),I.variable(t("dadosMenuNascidosVivos")).define("dadosMenuNascidosVivos",s),I.variable(t("menuNascidosVivos")).define("menuNascidosVivos",["ampliaMenu","dadosMenuNascidosVivos"],d),I.variable(t()).define(["md"],c),I.variable(t("viewof cn")).define("viewof cn",["menuCaracteristicasNascimento"],u),I.variable(t("cn")).define("cn",["Generators","viewof cn"],(e,t)=>e.input(t)),I.variable(t("dadosMenuCaracteristicasNascimento")).define("dadosMenuCaracteristicasNascimento",p),I.variable(t("menuCaracteristicasNascimento")).define("menuCaracteristicasNascimento",["ampliaMenu","dadosMenuCaracteristicasNascimento"],f),I.variable(t()).define(["md"],m),I.variable(t("viewof mpi")).define("viewof mpi",["menuMortalidade"],v),I.variable(t("mpi")).define("mpi",["Generators","viewof mpi"],(e,t)=>e.input(t)),I.variable(t("dadosMenuMortalidade")).define("dadosMenuMortalidade",h),I.variable(t("menuMortalidade")).define("menuMortalidade",["ampliaMenu","dadosMenuMortalidade"],b),I.variable(t()).define(["md"],g),I.variable(t("datasource")).define("datasource",x),I.variable(t("datasource_sim")).define("datasource_sim",y),I.variable(t()).define(["md"],w),I.variable(t()).define(["datasource","cn"],A),I.variable(t()).define(["datasource","cn"],C),I.variable(t("municipios2")).define("municipios2",["FileAttachment"],E),I.variable(t()).define(["datasource_sim","mpi"],_),I.variable(t()).define(["mpi"],T),I.variable(t()).define(["datasource_sim","mpi"],S),I.variable(t("terms")).define("terms",O),I.variable(t("TL")).define("TL",["terms"],M),I.variable(t()).define(["htl"],k),I}function L(e){return e`# Amplia Saúde - Trilhas Exploratórias - v5.0 - Mortalidade`}function N(e,t){return e`
    <style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

.cabecalho{
  display:inline-block;
  width:100%;
  border-bottom:1px solid #9C9C9C;
}

.cabecalho-conteudo{
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 6px;
}
      
.titulo{
   font-family:"Open Sans";
   font-weight:700;  
   font-size:24px;
   color: #151472;
}
      
.subtitulo{
   font-family:"Open Sans";
   font-weight:400;  
   font-size:14px;
   margin-left:20px;
   color: #151472;
}
      
.cabecalho-novo:after{
    content: '';
    display: inline-block; /* Adicionando essa linha, */
    width: 100%; /* essa também */
    height: 0; /* e essa foi a última */
}
    </style>
<div class="cabecalho">
<img class="cabecalho-conteudo" src="https://github.com/ampliasaude/ampliasaude.github.io/raw/main/AmpliaSaude-horizontal.png" height="53px">
</div>
    
<div class="cabecalho-novo" style="display:inline-block; width:100%; text-align:justify;">
    
 <div style="margin-bottom:16px; margin-top:16px; display:inline-block;">
   <span class="titulo">Trilhas Exploratórias<span>
   <span class="subtitulo">Saúde materna e neonatal e poluição ambiental por semana de concepção</span>
</div>
     
     <div style="justify-content:space-between; display:inline-block;">
     
     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Capturar imagem</title>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M7 9L4 13H16.5L13.5 7L11.5 9.5L9.5 12L7 9Z" fill="white" stroke="white"/>
</svg>
     
<svg style="margin-right: 28px" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Obter dados</title>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M9.64645 12.3536C9.84171 12.5488 10.1583 12.5488 10.3536 12.3536L13.5355 9.17157C13.7308 8.97631 13.7308 8.65973 13.5355 8.46447C13.3403 8.2692 13.0237 8.2692 12.8284 8.46447L10 11.2929L7.17157 8.46447C6.97631 8.2692 6.65973 8.2692 6.46447 8.46447C6.2692 8.65973 6.2692 8.97631 6.46447 9.17157L9.64645 12.3536ZM10.5 12L10.5 5L9.5 5L9.5 12L10.5 12Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 10V14C4 14.5523 4.44772 15 5 15H15C15.5523 15 16 14.5523 16 14V10H15V14H5L5 10H4Z" fill="white"/>
</svg>

${t}

<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Enviar via email</title>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M16 7.125C16 6.50625 15.46 6 14.8 6H5.2C4.54 6 4 6.50625 4 7.125V13.875C4 14.4937 4.54 15 5.2 15H14.8C15.46 15 16 14.4937 16 13.875V7.125ZM14.8 7.125L10 9.9375L5.2 7.125H14.8ZM14.8 13.875H5.2V8.25L10 11.0625L14.8 8.25V13.875Z" fill="white"/>
</svg>

<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Compartilhar no LinkedIn</title>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M7.075 6.97826C7.075 7.51865 6.6125 7.95652 6.04167 7.95652C5.47083 7.95652 5.00833 7.51865 5.00833 6.97826C5.00833 6.43826 5.47083 6 6.04167 6C6.6125 6 7.075 6.43826 7.075 6.97826ZM7.08333 8.73913H5V15H7.08333V8.73913ZM10.4092 8.73913H8.33917V15H10.4096V11.7134C10.4096 9.88604 12.9217 9.73657 12.9217 11.7134V15H15V11.0357C15 7.95222 11.2825 8.06452 10.4092 9.58239V8.73913Z" fill="white"/>
</svg>
     
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Compartilhar no Facebook</title>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M8.25 8.33333H7V10H8.25V15H10.3333V10H11.8508L12 8.33333H10.3333V7.63875C10.3333 7.24083 10.4133 7.08333 10.7979 7.08333H12V5H10.4133C8.915 5 8.25 5.65958 8.25 6.92292V8.33333Z" fill="white"/>
</svg>

<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Compartilhar no Twitter</title>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M16 7.06547C15.5953 7.24636 15.1603 7.36818 14.7038 7.42309C15.17 7.14207 15.5279 6.69678 15.6961 6.16612C15.2603 6.42637 14.7772 6.61557 14.2629 6.71755C13.8518 6.27594 13.2647 6 12.6157 6C11.1586 6 10.088 7.36864 10.417 8.78943C8.542 8.69483 6.87917 7.7904 5.76588 6.41576C5.17463 7.43694 5.45925 8.77282 6.46392 9.44929C6.0945 9.43729 5.74617 9.33532 5.44229 9.16504C5.41754 10.2176 6.16692 11.2023 7.25225 11.4215C6.93463 11.5083 6.58675 11.5286 6.23292 11.4603C6.51983 12.3628 7.35308 13.0195 8.34125 13.0379C7.3925 13.7869 6.19717 14.1214 5 13.9793C5.99871 14.6239 7.18533 15 8.4595 15C12.6496 15 15.0169 11.4372 14.8739 8.24169C15.3148 7.92099 15.6975 7.52092 16 7.06547Z" fill="white"/>
</svg>
     </div>


 </div>
`}function D(e,t){return e?new t.principal(e.principalUrlids):new t.principal}function R(e,t,i){return e`
<div style="display:flex; width:100%; align-items:center; justify-content:space-between;">
<div>${t}</div><div>${i}</div>
</div>
`}function P(e,t,i,a,n,r){let o=document.createElement("div");for(let l=0;l<e.length;l++)o.append(t[e[l].variavel](e[l].i));return o.append(i()),a.create(o,{animation:150,handle:".drag",filter:".undraggable",onUpdate(t){let i=e[t.oldIndex];e.splice(t.oldIndex,1),e.splice(t.newIndex,0,i),n.value=e}}),r.select(o).selectAll("g[aria-label=x-axis] g.tick text").each(function(){let e=r.select(this),t=e.text();/[0-9]{4}/.test(t)&&e.style("font-size","14px").style("font-weight","700")}),o}function F(){return 4}function $(e,t,i){return e?t(104,468,e.intervalo[0],e.intervalo[1]):t(104,468,i.intervalo[0],i.intervalo[1])}function B(e,t,i,a,n){return e`<!-- <label class="label-locais">LOCAIS </label> -->
${t.map((e,t)=>i(e,t))}${t.length<a?n:""}`}function U(e,t,i,a,n,r,o,l,s,d,c,u,p,f,m){return e.select(t`
<input list="menu-municipios-options" id="menu-municipios" placeholder="Adicione um local" class="caixa-municipio">
<datalist id="menu-municipios-options">
${i.map(e=>e.municipio).sort(Intl.Collator().compare).map(e=>`<option value="${e}">`)}
</datalist>
`).on("change",e=>{if(!i.map(e=>e.municipio).includes(document.getElementById("menu-municipios").value)&&!a.includes(document.getElementById("menu-municipios").value))return;let t=e.target.value;if(!(n.length==r||n.map(e=>e.nome).includes(t))){for(let v of(o.value=o.value.concat([{nome:t,cor:l.find(e=>!n.map(e=>e.cor).includes(e))}]),s.setItem("municipios",JSON.stringify(o.value)),d))"PM25"==v.variavel&&a.includes(t)||Promise.all([c[v.variavel](t,"PM25"!=v.variavel?u.value.expression:null)]).then(e=>{p.value=p.value.concat({idx:v.i,municipio:t,variavel:v.variavel,dados:f[v.variavel](e[0])})});for(let h of[...new Set(m.filter(e=>e.filtrado).map(e=>e.idx))])Promise.all([c[d.find(e=>e.i==h).variavel](t,d.find(e=>e.i==h).filtros.value.expression)]).then(e=>{p.value=p.value.concat({idx:h,municipio:t,variavel:m.find(e=>e.idx==h).variavel,filtrado:!0,dados:f[m.find(e=>e.idx==h).variavel](e[0])})})}}).node()}function j(e,t,i,a,n){return r=>{e.value.filter(e=>"PM25"!=e.variavel).forEach(e=>{t.value=t.value.filter(t=>t.idx!=e.i||t.filtrado),i.value.forEach(i=>{Promise.all([a[e.variavel](i.nome,r.target.value.expression)]).then(a=>{t.value=t.value.filter(t=>t.idx!=e.i||t.filtrado||t.municipio!=i.nome),t.value=t.value.concat({idx:e.i,municipio:i.nome,variavel:e.variavel,dados:n[e.variavel](a[0])})})})})}}function G(e,t,i,a,n,r,o,l){return(s,d)=>{let c=e.create("button").attr("class","btn-municipio").style("background-color",s.cor).style("display","inline-flex").style("align-items","flex-center").on("click",e=>{t.length>1&&(i.value=t.filter(e=>e!=s),a.setItem("municipios",JSON.stringify(i.value)),n.value=r.filter(e=>e.municipio!=s.nome))});return o.includes(s.nome)?c.append("span").text(s.nome):c.append("span").text(s.nome+(s.nome.includes("(")?"":" ("+l.find(e=>e.municipio==s.nome).sigla+")")),c.append("span").attr("class","material-icons-outlined").style("font-size","16px").style("margin-left","5px").style("display",1==t.length?"none":"inline").text("remove_circle_outline"),c.node()}}function V(e,t){return()=>e.create("button").attr("class","btn-remove").text("–").on("click",t).attr("title","Eliminar trilha").node()}function H(e,t){return()=>{let i=e.create("button").attr("class","btn-remove").on("click",t);return i.append("span").attr("class","material-icons-outlined").style("font-size","10px").text("content_copy"),i.attr("title","Duplicar trilha"),i.node()}}function z(e,t,i,a,n){return{PM25:e,NEONATAL:t,RELPARTO:i,FETAL:a,TOTAL:n}}function q(e,t,i,a,n){return{PM25:e,NEONATAL:t,TOTAL:i,FETAL:a,RELPARTO:n}}function Z(e,t,i,a,n){return{PM25:e,NEONATAL:t,TOTAL:i,FETAL:a,RELPARTO:n}}function W(){return{PM25:"#F4947C",FETAL:"#DDD9FC",NEONATAL:"#FFD8FD",RELPARTO:"#FCEBD4",TOTAL:"#D9E7FC"}}function J(){return{PM25:"#FDEEEA",FETAL:"#EEECFD",NEONATAL:"#FFEAFE",RELPARTO:"#FFF7ED",TOTAL:"#ECF4FF"}}function X(e){return e`
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
* {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;     
}

.btn-municipio{
  border-radius: 6px;
  border: none;
  font-family: 'Roboto Condensed';
  font-weight: 700;
  font-size: 14px;
  margin-right: 6px;
  padding: 3px;
  padding-left: 5px;
  padding-right: 5px;
  display: inline-flex;
}
.label-locais{
  font-family: 'Roboto Condensed';
  font-size: 12px;
  margin-right: 12px;
}
.btn-adiciona, .btn-remove{
  border-radius: 50%;
  border: none;
  background-color: #151472;
  color: white;
  font-family: 'Roboto Condensed';
  font-size: 16px;
  
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
}
.trilha{
  border-left: 1px var(--cor-trilha) solid;
  display: inline-block;
  vertical-align: middle;
}

.sombra{
  box-shadow: 2px -2px 6px 0px rgb(0 0 0 / 25%);
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom: 30px;
  border: 3px var(--cor-trilha) solid; 
  border-radius: 10px;
}

div.opcao-trilha {
  display: flex;
  gap: 4px;
  align-items: center;
}

span.titulo-trilha {
  font-weight: 700;
  margin-left: 5px;
  font-size: 12px;
}

span.fonte {
  text-align: right;
  flex-grow: 1;
  margin-right: 5px;
}

div.cabecalho-trilha {
  font-family: 'Roboto Condensed';
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--cor-trilha);
  line-height: 1.5;
  gap: 18px;
  font-size: 10px;
}

.lista-valores {
  font-family: 'Roboto Condensed';
  font-size: 12px;
  font-weight: 400;
  vertical-align: top;
  display: block;
  margin: 6px;
  text-align: center;
}

div.interior-trilha{
  position: relative;
  display: inline-block;
}

.fonte{
  font-weight: 400;
}
.valor{
  border-radius: 5px;
  display: block;
  text-align: center;
}
.conteudo-trilha{
  display: flex;
  justify-content: space-between;
}
.conteudo-trilha svg {
  border-radius: 0px 0px 20px 0px;
}

input{
  margin: 0px 0px 0px 0px;
  -webkit-appearance: none;
  appearance: none;
  margin: 0px;
  width: 12px;
  height: 12px;
  border: 1px #151472 solid;
  vertical-align: middle;
}

input:checked {
  background-color: #151472;  
}

input:focus {
  outline: 0;  
}

input[type=checkbox] {
  border-radius: 2px;
}

input[type=radio] {
  border-radius: 50%;
} 

.titulo-lista-valores{
  font-family: 'Roboto Condensed';
  font-size: 11px;
  color: #141472;
}

.menuIG{
  margin-right: 10px;
  font-size: 12px;
}

.caixa-municipio {
  border: none;
  border-radius: 6px;
  background-color: white;
  border: dashed 2px #C4C4C4;
  font-family: "Roboto Condensed";
  padding: 3px;
  min-width: 150px;
  max-width: 240px;
  height: 20px;
}

button span {
  pointer-events: none;
}

.drag-container{
  display:inline-block;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nova-trilha {
  border: solid 3px #C4C4C4;
  border-radius: 10px 0 0 10px;
  border-right: none;
}

.drag{
  cursor: grab;
  height: 24px;
}

.buttons{
  margin-right: 5px;
  position: relative;
  top: -20px;
}

.icon-blue{
  color: #151472;
  user-select: none;
}

.icon-gray{
  color: #C4C4C4;
  user-select: none;
}

div.rodape-trilha {
  background-color: var(--cor-trilha);
  padding: 0px;
  border: 0px;
  margin: 0 0 0 -25px;
  min-height: 30px;
}

div.rodape-trilha div.menu-local {
  margin-top: -30px;
  min-height: 30px;
}

div.botao-comparacao {
  position: relative;
  width: 100px;
  height: 20px;
  font-family: 'Roboto Condensed';
  font-size: 12px;
  font-weight: 400;
  color: #484796;
  padding:5px;
  z-index: 5;
}

div.botao-comparacao label {
  line-height: 25px;
}

div.botao-comparacao input {
  margin-left: 2px;
  margin-right: 4px;
  margin-top: -2px;
  vertical-align: none;
}

div.tooltip {
  position:absolute;
  padding: 6px; 
  border-radius: 4px; 
  z-index:10; 
  border: 1px #15147266 solid;
  text-align: center;
  font-family: 'Roboto Condensed';
  font-size: 12px;
  font-weight: 700;
  color: #484796;
  top: 10px;
  min-width: 150px;
  transform: translate(-100%,0);
}

div.tooltip.right {
  transform: translate(10px,0);
}


div.tooltip div.c2 {
  display: grid;
  column-gap: 6px;
  row-gap: 1px;
  grid-template-columns: 20px auto auto auto;  
}

div.tooltip div.c1 {
  display: grid;
  column-gap: 4px;
  row-gap: 1px;
  grid-template-columns: 20px auto auto;
}

div.tooltip div.periodo {
  grid-column-start: 1;
  text-align: left;
  font-weight: 400;
}

div.tooltip div.c1 div.periodo {
  grid-column-end: 4; 
}

div.tooltip div.c2 div.periodo {
  grid-column-end: 3;  
}

div.tooltip div.rodape {
  grid-column-start: 1;
  text-align: left;
  font-weight: 400;
  font-style: italic;
  padding-top: 5px;
  line-height:1.2;
}

div.tooltip div.c1 div.rodape {
  grid-column-end: 4; 
}

div.tooltip div.c2 div.rodape {
  grid-column-end: 5;  
}

div.tooltip div.legenda {
  text-align: center;
  margin-top: -2px;
}

div.tooltip div.municipio {
  text-align: left;
  max-width: 130px;
  min-width: 100px;
  overflow: hidden;    
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: default;
}

div.tooltip div.valor {
 text-align: center;
}

div.tooltip div.c2 svg {
  align-self: center;
  justify-self: center;
}

text.rotuloSuscetibilidade {
  font-weight: 400;
  font-family: 'Roboto Condensed';
  font-size: 10px;
  fill: #151472;
}

span.instrucaoSuscetibilidade {
  font-weight: 400;
  font-family: 'Roboto Condensed';
  font-size: 10px;
  color: #151472;
  text-align: right;
  flex-grow: 1;
  margin-right: 5px;
}

g[aria-label=rule] line {
  cursor: ew-resize;
}


</style>
`}function Q(e,t){return function(i){let a=i.scale("x"),n=i.scale("y"),r=e;"number"==typeof r&&(r=new Date(r));let o=new Date(r.getTime()),l=new Date(r.getTime());o.setDate(o.getDate()+154),l.setDate(l.getDate()+266);let s=a.apply(r),d=a.apply(o),c=a.apply(l);t.select(i).insert("rect","g[aria-label=rule]").attr("class","suscetibilidade").attr("x",d).attr("y",n.range[1]).attr("width",c-d).attr("height",n.range[0]-n.range[1]).attr("stroke-width","2px").attr("stroke","#F4947C").attr("fill","#FFFFFF00").style("cursor","grab"),t.select(i).insert("line","g[aria-label=rule]").attr("x1",s).attr("y1",n.range[1]).attr("x2",s).attr("y2",n.range[0]).attr("stroke-width","2px").attr("stroke","#F4947C"),t.select(i).insert("line","g[aria-label=rule]").attr("class","concepcao").attr("x1",s).attr("y1",n.range[1]).attr("x2",d).attr("y2",n.range[1]).attr("stroke-width","2px").attr("stroke","#F4947C"),t.select(i).append("text").attr("class","rotuloSuscetibilidade").text("CONCEP\xc7\xc3O").attr("x",s).attr("y",n.range[1]-3),t.select(i).append("text").attr("class","rotuloSuscetibilidade").text("22\xaa SEM").attr("x",d).attr("y",n.range[1]-3),t.select(i).append("text").attr("class","rotuloSuscetibilidade").text("38\xaa SEM").attr("x",c).attr("y",n.range[1]-3)}}function Y(e,t,i,a,n){return function(r,o,l,s="valor",d=null){function c(e){let t=document.createElementNS("http://www.w3.org/2000/svg","svg"),i=document.createElementNS("http://www.w3.org/2000/svg","path");return t.setAttribute("width","18"),t.setAttribute("height","8"),t.setAttribute("fill","none"),i.setAttribute("d","M1 7C1 5 1.39956 1 4.9956 1C10.2138 1 7.9923 7 11.9879 7C16.4829 7 15.9835 3 15.9835 1"),i.setAttribute("stroke","#151472"),e?(i.setAttribute("stroke-width","1.5"),i.setAttribute("stroke-dasharray","2.5 1")):i.setAttribute("stroke-width","2"),t.appendChild(i),t}function u(e){let t=["de","da","do","dos","das","e"];if(e.length<=2)return e;let i=e.indexOf("(");i>=0&&(e.substring(i).trim(),e=e.substring(0,i).trim());let a=e.toLowerCase().split(" ");for(let n=0;n<a.length;n++)t.includes(a[n])||(a[n]=a[n][0].toUpperCase()+a[n].substring(1));return a.join(" ")}setTimeout(p=>{let f=r.parentElement.querySelector(".tooltip");f||((f=document.createElement("div")).setAttribute("class","tooltip"),f.style.backgroundColor=n[o]+"CC",r.parentElement.appendChild(f)),function(n){function p(t,i){t.addEventListener("mouseover",t=>{e.select(document.body).selectAll("g[aria-label=line]").style("opacity",function(t){return e.select(this).attr("stroke")==i.cor?1:.3})}),t.addEventListener("mouseout",t=>{e.select(document.body).selectAll("g[aria-label=line]").style("opacity",1)})}let f=a(l,o,s,d),m,v,h;m=r.scale("x"),v=r.scale("y"),h=m.apply("PM25"==o?t:i),n.style.visibility=h<m.range[0]?"hidden":"visible",n.style.top=`${v.range[1]+5}px`,h>250?(n.classList.remove("right"),n.style.left=`${h-10}px`):(n.style.left=`${h}px`,n.classList.add("right"));let b=f.valoresComparacao.length>0,g=document.createElement("div"),x=document.createElement("div");x.classList.add("periodo"),void 0!==f.semanas?x.textContent=`${f.semanaInicio} - ${f.semanaFim} - (sem ${f.semanas})`:x.textContent=`${f.semanaInicio} - ${f.semanaFim}`,g.appendChild(x),b?(g.classList.add("c2"),g.appendChild(c(!1)),g.appendChild(c(!0))):g.classList.add("c1");for(let y=0;y<f.municipios.length;y++){let w=document.createElement("div"),A=document.createElement("div"),C=document.createElement("div"),E=b?document.createElement("div"):null;w.classList.add("legenda"),w.style.color=f.municipios[y].cor,w.textContent="⬤",A.classList.add("municipio"),A.textContent=u(f.municipios[y].nome),p(A,f.municipios[y]),C.classList.add("valor"),C.textContent=f.valoresPrincipal[y],g.appendChild(w),g.appendChild(A),g.appendChild(C),E&&(E.classList.add("valor"),E.textContent=f.valoresComparacao[y],g.appendChild(E))}let _=document.createElement("div");_.classList.add("rodape"),_.innerHTML=`Unidade: <b>${f.unidade}</b><br>M\xe9dia Semanal`,g.appendChild(_),n.replaceChildren(g);let T=e.select(r).select("line.rule-shadow"),S=e.select(r).select("g[aria-label=rule] line");0===T.size()&&(T=e.select(S.node().parentElement).append("line").attr("class","rule-shadow").attr("stroke","#FFFFFF00").attr("stroke-width",5).attr("stroke-dasharray","none").attr("y1",S.attr("y1")).attr("y2",S.attr("y2")).attr("cursor","ew-resize")),T.attr("x1",S.attr("x1")).attr("x2",S.attr("x2"))}(f)})}}function K(e,t,i,a,n,r,o,l,s,d){return function(c,u,p,f){let m="PM25"==u?e:t;function v(e){return e=e.toISOString().substring(0,10).split("-"),`${e[2]}/${e[1]}/${e[0]}`}function h(e){return(f&&(e=e[f]),"percentual"===p||"taxa"===p)?e.toLocaleString("pt-BR",{maximumFractionDigits:2}):e.toFixed(0)}let b={},g=a.filter(e=>e.idx==c).sort(function(e,t){return i.findIndex(e=>e.nome==t.municipio)-i.findIndex(t=>t.nome==e.municipio)}),x=g,y=g.filter(e=>e.filtrado),w=n[r.bisector(e=>e.inicio.getTime()).center(n,m)];if("PM25"==u){let A=e;"number"==typeof A&&(A=new Date(A));let C=t;"number"==typeof C&&(C=new Date(C));let E=Math.floor((A.getTime()-C.getTime())/6048e5);E>0&&E<=42&&(b.semanas=E)}return b.semanaInicio=v(w.inicio).substring(0,5),b.semanaFim=v(w.termino),b.unidade=o[u][p],b.valoresPrincipal=[],b.valoresComparacao=[],b.municipios=[],b.ufSelecionada=i.some(e=>l.includes(e.nome)),y.length>0&&(x=g.filter(e=>!e.filtrado),"PIG"!==u&&(y=y.filter(e=>!Object.values(s).includes(e.municipio)||"PM25"!=u)),y.forEach(e=>{let t=e.dados[d.center(e.dados,m)][p];b.valoresComparacao.push(h("PIG"==u?t[f]:t))})),x.forEach(e=>{let t=i.find(t=>t.nome==e.municipio),a=e.dados[d.center(e.dados,m)][p];b.municipios.push(t),b.valoresPrincipal.push(h("PIG"==u?a[f]:a))}),b}}function ee(e,t,i,a,n){return function(r,o,l=!1){function s(e){let t=o.scale("x"),i=e.offsetX;return i<t.range[0]&&(i=t.range[0]),i>t.range[1]&&(i=t.range[1]),i}let d=function(e){let t=n.select(o).select("g[aria-label=rule] line"),i=s(e);t.attr("x1",i).attr("x2",i)},c=function(n){let d=o.scale("x"),c=e[r].dados,u=s(n),p=c[t.center(c,d.invert(u))].x;l?i.value=p:a.value=p},u=0,p=0,f=null;function m(e){f&&f.attr("x",e.offsetX-p)}function v(i){let n=i.offsetX-p-u,l=o.scale("x");n<l.range[0]&&(n=l.range[0]),n>l.range[1]&&(n=l.range[1]);let s=e[r].dados;a.value=s[t.center(s,l.invert(n))].x}n.select(o).call(n.drag().on("start",e=>(function(e){if(n.select(o.parentElement).select("div.tooltip").style("visibility","hidden"),l){let t=n.select(o).select("rect.suscetibilidade"),i=n.select(o).select("line.concepcao"),a=n.select(o).select("g[aria-label=rule] line"),r=+t.attr("x"),s=+t.attr("width")+r;if(Math.abs(+a.attr("x1")-e.offsetX)>8&&r<e.offsetX&&s>e.offsetX){u=+t.attr("x")-i.attr("x1"),p=e.offsetX-r,f=n.select(o).append("rect").attr("x",t.attr("x")).attr("y",t.attr("y")).attr("width",t.attr("width")).attr("height",t.attr("height")).attr("stroke","black").attr("stroke-dasharray","5").attr("fill","none"),d=m,c=v;return}}d(e)})(e.sourceEvent)).on("drag",e=>d(e.sourceEvent)).on("end",e=>c(e.sourceEvent)))}}function et(e,t,i,a,n,r,o,l,s,d,c,u,p,f,m,v,h,b,g,x,y,w,A,C,E,_,T,S,O){return M=>{let k=e.plot({marginTop:15,marginRight:0,width:t-65,height:i,x:{grid:!0,label:null,format:a,domain:n.find(e=>e.i==M).alterar_tempo?n.find(e=>e.i==M).alterar_tempo.map(e=>r[e].inicio):o.map(e=>r[e].inicio)},y:{grid:!0,domain:[0,l[s]],transform:e=>Math.min(122,e),label:null},marks:[e.rect([{y1:d[s][3],y2:l[s]}],{y1:"y1",y2:"y2",fill:"#FFEBEB",class:"faixa"}),e.rect([{y1:d[s][2],y2:d[s][3]}],{y1:"y1",y2:"y2",fill:"#FFF5EB"}),e.rect([{y1:d[s][1],y2:d[s][2]}],{y1:"y1",y2:"y2",fill:"#FFFFED"}),n.find(e=>e.i==M).mostra_media_movel?c.filter(e=>e.idx==M&&!Object.values(u).includes(e.municipio)).map((t,i)=>e.line(t.dados.filter(e=>p(e,M)),e.windowY({strict:!0,k:f,anchor:"middle",x:"x",y:"valor",curve:"monotone-x",strokeWidth:m,stroke:v.find(e=>e.nome==t.municipio).cor}))):c.filter(e=>e.idx==M&&!Object.values(u).includes(e.municipio)).map((t,i)=>e.line(t.dados.filter(e=>p(e,M)),{x:"x",y:"valor",curve:"monotone-x",strokeWidth:m,stroke:v.find(e=>e.nome==t.municipio).cor})),e.ruleX([c.filter(e=>e.idx==M)[0].dados[h.center(c.filter(e=>e.idx==M)[0].dados,b)]],{x:"x",strokeDasharray:"5"}),n.find(e=>e.i==M).mostra_media_movel?null:c.filter(e=>e.idx==M).map((t,i)=>e.dot([t.dados[h.center(t.dados,b)]],{x:"x",y:"valor",fill:v.find(e=>e.nome==t.municipio).cor}))]});return g(k,"PM25",M),x(k),y(M,k,!0),w`
<div style="--cor-trilha:${A.PM25}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${C.create("button").attr("class","btn-remove").text("–").on("click",E).node()}<br>
  ${_()}
</div>
<div class="sombra">
<div class="drag-container">
<span class="material-icons-outlined ${n[0].i==M?"icon-gray":"icon-blue"}">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-blue">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined ${n[n.length-1].i==M?"icon-gray":"icon-blue"}">
expand_more
</span>
</div>
<div class="trilha poluente" i=${M}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">POLUENTE</span>
    <div class="opcao-trilha">
      <label class="label-cabecalho-trilha">MÉDIA MÓVEL</label>       ${C.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==M).mostra_media_movel).on("change",e=>T(e,M)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">MODIFICAR PERÍODO</label> ${C.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==M).alterar_tempo).on("change",e=>S(e,M)).node()}
  </div>
    <span class="instrucaoSuscetibilidade">A janela no gráfico indica o período de maior suscetibilidade à poluição (22ª  à 38ª semana)</span>
    <span class="fonte" style="flex-grow: 0;">Fonte: SISAM</span>
  </div>
<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right">${k}</div>
</div>
${O(M)}
</div>
</div>
</div>`}}function ei(e,t,i,a,n,r,o,l,s,d,c,u,p,f,m,v,h,b,g,x,y,w,A,C,E,_,T,S){return O=>{if(!e.map(e=>e.nome).every(e=>t.filter(e=>e.idx==O).map(e=>e.municipio).includes(e))||a.find(e=>e.i==O).filtros.value.expression&&a.find(e=>e.i==O).show_filtros&&t.filter(e=>e.idx==O).every(e=>void 0===e.filtrado)||n.value.expression&&t.filter(e=>e.idx==O).every(e=>void 0!==e.filtrado))return i();let M=a.find(e=>e.i==O).escala,k=r.plot({marginTop:5,marginRight:0,width:o-65,height:l,x:{grid:!0,label:null,domain:a.find(e=>e.i==O).alterar_tempo?a.find(e=>e.i==O).alterar_tempo.map(e=>s[e].inicio):d.map(e=>s[e].inicio)},y:{grid:!0,label:null},marks:[a.find(e=>e.i==O).mostra_media_movel?t.filter(e=>e.idx==O).map((t,i)=>r.line(t.dados.filter(e=>c(e,O)),r.windowY({strict:!0,k:u,anchor:"middle",x:"x",y:e=>e[M],strokeWidth:t.filtrado?p:f,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"}))):t.filter(e=>e.idx==O).map((t,i)=>r.line(t.dados.filter(e=>c(e,O)),{sort:"x",x:"x",y:e=>e[M],curve:"monotone-x",strokeWidth:t.filtrado?p:f,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"})),r.ruleX([t.filter(e=>e.idx==O)[0].dados[m.center(t.filter(e=>e.idx==O)[0].dados,v)]],{x:"x",strokeDasharray:"5"}),a.find(e=>e.i==O).mostra_media_movel?null:t.filter(e=>e.idx==O).map((t,i)=>r.dot([t.dados[m.center(t.dados,v)]],{x:"x",y:e=>e[M],fill:e.find(e=>e.nome==t.municipio).cor}))]});return h(k,"FETAL",O,M),b(O,k),g`
<div style="--cor-trilha:${x.FETAL}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${y.create("button").attr("class","btn-remove").text("–").on("click",w).node()}<br>
  ${A()}
</div>
<div class="sombra">
<div class="drag-container">
<span class="material-icons-outlined ${a[0].i==O?"icon-gray":"icon-blue"}">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-blue">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined ${a[a.length-1].i==O?"icon-gray":"icon-blue"}">
expand_more
</span>
</div>
<div class="trilha fetal" i=${O}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">ÓBITOS FETAIS</span>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">MÉDIA MÓVEL</label> ${y.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==O).mostra_media_movel).on("change",e=>C(e,O)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">MODIFICAR PERÍODO</label> ${y.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==O).alterar_tempo).on("change",e=>E(e,O)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">ESCALA ABSOLUTO</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+O).property("checked","absoluto"==a.find(e=>e.i==O).escala).attr("value","absoluto").on("change",e=>_(e,O)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha"> PERCENTUAL</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+O).property("checked","percentual"==a.find(e=>e.i==O).escala).attr("value","percentual").on("change",e=>_(e,O)).node()}
      </div>
    <span class="fonte">Fonte: SIM<span>
  </div>
<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right;">${k}</div>
</div>
${T(O)}
<div class="rodape-trilha">
<div class="botao-comparacao">
${y.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==O).show_filtros).on("change",e=>S(e,O)).node()}
<label>COMPARAÇÃO</label>
</div>
<div class="menu-local">${a.find(e=>e.i==O).show_filtros?a.find(e=>e.i==O).filtros:""}</div>
</div>
</div>
</div>
</div>`}}function ea(e,t,i,a,n,r,o,l,s,d,c,u,p,f,m,v,h,b,g,x,y,w,A,C,E,_,T,S,O){return M=>{if(!e.map(e=>e.nome).every(e=>t.filter(e=>e.idx==M).map(e=>e.municipio).includes(e))||a.find(e=>e.i==M).filtros.value.expression&&a.find(e=>e.i==M).show_filtros&&t.filter(e=>e.idx==M).every(e=>void 0===e.filtrado)||n.value.expression&&t.filter(e=>e.idx==M).every(e=>void 0!==e.filtrado))return i();let k=a.find(e=>e.i==M).escala,I=a.find(e=>e.i==M).neonatal,L=r.plot({marginTop:5,marginRight:0,width:o-65,height:l,x:{grid:!0,label:null,domain:a.find(e=>e.i==M).alterar_tempo?a.find(e=>e.i==M).alterar_tempo.map(e=>s[e].inicio):d.map(e=>s[e].inicio)},y:{grid:!0,label:null},marks:[a.find(e=>e.i==M).mostra_media_movel?t.filter(e=>e.idx==M).map((t,i)=>r.line(t.dados.filter(e=>c(e,M)),r.windowY({strict:!0,k:u,anchor:"middle",x:"x",y:e=>e[k][I],strokeWidth:t.filtrado?p:f,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"}))):t.filter(e=>e.idx==M).map((t,i)=>r.line(t.dados.filter(e=>c(e,M)),{sort:"x",x:"x",y:e=>e[k][I],curve:"monotone-x",strokeWidth:t.filtrado?p:f,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"})),r.ruleX([t.filter(e=>e.idx==M)[0].dados[m.center(t.filter(e=>e.idx==M)[0].dados,v)]],{x:"x",strokeDasharray:"5"}),a.find(e=>e.i==M).mostra_media_movel?null:t.filter(e=>e.idx==M).map((t,i)=>r.dot([t.dados[m.center(t.dados,v)]],{x:"x",y:e=>e[k][I],fill:e.find(e=>e.nome==t.municipio).cor}))]});h(L,"NEONATAL",M,k,I),b(M,L);let N;return g`
<div style="--cor-trilha: ${x.NEONATAL}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${y.create("button").attr("class","btn-remove").text("–").on("click",w).node()}<br>
  ${A()}
</div>
<div class="sombra">
<div class="drag-container">
<span class="material-icons-outlined ${a[0].i==M?"icon-gray":"icon-blue"}">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-blue">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined ${a[a.length-1].i==M?"icon-gray":"icon-blue"}">
expand_more
</span>
</div>
<div class="trilha neonatal" i=${M}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">ÓBITOS NEONATAIS</span>

    ${(N=y.create("select").attr("class","menuIG")).style("font-family","Roboto Condensed"),N.append("option").attr("name","PRECOCE").text("PRECOCE").property("selected","PRECOCE"==a.find(e=>e.i==M).neonatal),N.append("option").attr("name","TARDIO").text("TARDIO").property("selected","TARDIO"==a.find(e=>e.i==M).neonatal),N.append("option").attr("name","NEOTOTAL").attr("value","NEOTOTAL").text("PRECOCE+TARDIO").property("selected","NEOTOTAL"==a.find(e=>e.i==M).neonatal),N.append("option").attr("name","POS").text("POS").property("selected","POS"==a.find(e=>e.i==M).neonatal),N.on("change",e=>C(e,M)),N.node()}

    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">MÉDIA MÓVEL</label> ${y.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==M).mostra_media_movel).on("change",e=>E(e,M)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">MODIFICAR PERÍODO</label> ${y.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==M).alterar_tempo).on("change",e=>_(e,M)).node()}
    </div>
    <div class="opcao-trilha">
    
    <label class="label-cabecalho-trilha">ESCALA ABSOLUTO</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+M).property("checked","absoluto"==a.find(e=>e.i==M).escala).attr("value","absoluto").on("change",e=>T(e,M)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha"> PERCENTUAL</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+M).property("checked","percentual"==a.find(e=>e.i==M).escala).attr("value","percentual").on("change",e=>T(e,M)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha"> TAXA POR 1000</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+M).property("checked","taxa"==a.find(e=>e.i==M).escala).attr("value","taxa").on("change",e=>T(e,M)).node()}
    </div>
    <span class="fonte">Fonte: SIM</span>
  </div>

<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right;">${L}</div>
</div>
${S(M)}
<div class="rodape-trilha">
<div class="botao-comparacao">
${y.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==M).show_filtros).on("change",e=>O(e,M)).node()}
<label>COMPARAÇÃO</label>
</div>
<div class="menu-local">${a.find(e=>e.i==M).show_filtros?a.find(e=>e.i==M).filtros:""}</div>
</div>
</div>
</div>
</div>`}}function en(e,t,i,a,n,r,o,l,s,d,c,u,p,f,m,v,h,b,g,x,y,w,A,C,E,_,T,S,O){return M=>{if(!e.map(e=>e.nome).every(e=>t.filter(e=>e.idx==M).map(e=>e.municipio).includes(e))||a.find(e=>e.i==M).filtros.value.expression&&a.find(e=>e.i==M).show_filtros&&t.filter(e=>e.idx==M).every(e=>void 0===e.filtrado)||n.value.expression&&t.filter(e=>e.idx==M).every(e=>void 0!==e.filtrado))return i();let k=a.find(e=>e.i==M).escala,I=a.find(e=>e.i==M).relparto,L=r.plot({marginTop:5,marginRight:0,width:o-65,height:l,x:{grid:!0,label:null,domain:a.find(e=>e.i==M).alterar_tempo?a.find(e=>e.i==M).alterar_tempo.map(e=>s[e].inicio):d.map(e=>s[e].inicio)},y:{grid:!0,label:null},marks:[a.find(e=>e.i==M).mostra_media_movel?t.filter(e=>e.idx==M).map((t,i)=>r.line(t.dados.filter(e=>c(e,M)),r.windowY({strict:!0,k:u,anchor:"middle",x:"x",y:e=>e[k][I],strokeWidth:t.filtrado?p:f,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"}))):t.filter(e=>e.idx==M).map((t,i)=>r.line(t.dados.filter(e=>c(e,M)),{sort:"x",x:"x",y:e=>e[k][I],curve:"monotone-x",strokeWidth:t.filtrado?p:f,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"})),r.ruleX([t.filter(e=>e.idx==M)[0].dados[m.center(t.filter(e=>e.idx==M)[0].dados,v)]],{x:"x",strokeDasharray:"5"}),a.find(e=>e.i==M).mostra_media_movel?null:t.filter(e=>e.idx==M).map((t,i)=>r.dot([t.dados[m.center(t.dados,v)]],{x:"x",y:e=>e[k][I],fill:e.find(e=>e.nome==t.municipio).cor}))]});h(L,"RELPARTO",M,k,I),b(M,L);let N;return g`
<div style="--cor-trilha: ${x.RELPARTO}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${y.create("button").attr("class","btn-remove").text("–").on("click",w).node()}<br>
  ${A()}
</div>
<div class="sombra">
<div class="drag-container">
<span class="material-icons-outlined ${a[0].i==M?"icon-gray":"icon-blue"}">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-blue">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined ${a[a.length-1].i==M?"icon-gray":"icon-blue"}">
expand_more
</span>
</div>
<div class="trilha parto" i=${M}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">ÓBITOS EM RELAÇÃO AO PARTO</span>

    ${(N=y.create("select").attr("class","menuIG")).style("font-family","Roboto Condensed"),N.append("option").attr("name","ANTES").text("ANTES").property("selected","ANTES"==a.find(e=>e.i==M).relparto),N.append("option").attr("name","DURANTE").text("DURANTE").property("selected","DURANTE"==a.find(e=>e.i==M).relparto),N.append("option").attr("name","DEPOIS").text("DEPOIS").property("selected","DEPOIS"==a.find(e=>e.i==M).relparto),N.on("change",e=>C(e,M)),N.node()}

    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">MÉDIA MÓVEL</label> ${y.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==M).mostra_media_movel).on("change",e=>E(e,M)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">MODIFICAR PERÍODO</label> ${y.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==M).alterar_tempo).on("change",e=>_(e,M)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">ESCALA ABSOLUTO</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+M).property("checked","absoluto"==a.find(e=>e.i==M).escala).attr("value","absoluto").on("change",e=>T(e,M)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha"> PERCENTUAL</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+M).property("checked","percentual"==a.find(e=>e.i==M).escala).attr("value","percentual").on("change",e=>T(e,M)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha"> TAXA POR 1000</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+M).property("checked","taxa"==a.find(e=>e.i==M).escala).attr("value","taxa").on("change",e=>T(e,M)).node()}
    </div>
    <span class="fonte">Fonte: SIM</span>
  </div>

<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right;">${L}</div>
</div>
${S(M)}
<div class="rodape-trilha">
<div class="botao-comparacao">
${y.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==M).show_filtros).on("change",e=>O(e,M)).node()}
<label>COMPARAÇÃO</label>
</div>
<div class="menu-local">${a.find(e=>e.i==M).show_filtros?a.find(e=>e.i==M).filtros:""}</div>
</div>
</div>
</div>
</div>`}}function er(e,t,i,a,n,r,o,l,s,d,c,u,p,f,m,v,h,b,g,x,y,w,A,C,E,_,T,S){return O=>{if(!e.map(e=>e.nome).every(e=>t.filter(e=>e.idx==O).map(e=>e.municipio).includes(e))||a.find(e=>e.i==O).filtros.value.expression&&a.find(e=>e.i==O).show_filtros&&t.filter(e=>e.idx==O).every(e=>void 0===e.filtrado)||n.value.expression&&t.filter(e=>e.idx==O).every(e=>void 0!==e.filtrado))return i();let M=a.find(e=>e.i==O).escala,k=r.plot({marginTop:5,marginRight:0,width:o-65,height:l,x:{grid:!0,label:null,domain:a.find(e=>e.i==O).alterar_tempo?a.find(e=>e.i==O).alterar_tempo.map(e=>s[e].inicio):d.map(e=>s[e].inicio)},y:{grid:!0,label:null},marks:[a.find(e=>e.i==O).mostra_media_movel?t.filter(e=>e.idx==O).map((t,i)=>r.line(t.dados.filter(e=>c(e,O)),r.windowY({strict:!0,k:u,anchor:"middle",x:"x",y:e=>e[M],strokeWidth:t.filtrado?p:f,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"}))):t.filter(e=>e.idx==O).map((t,i)=>r.line(t.dados.filter(e=>c(e,O)),{sort:"x",x:"x",y:e=>e[M],curve:"monotone-x",strokeWidth:t.filtrado?p:f,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"})),r.ruleX([t.filter(e=>e.idx==O)[0].dados[m.center(t.filter(e=>e.idx==O)[0].dados,v)]],{x:"x",strokeDasharray:"5"}),a.find(e=>e.i==O).mostra_media_movel?null:t.filter(e=>e.idx==O).map((t,i)=>r.dot([t.dados[m.center(t.dados,v)]],{x:"x",y:e=>e[M],fill:e.find(e=>e.nome==t.municipio).cor}))]});return h(k,"TOTAL",O,M),b(O,k),g`
<div style="--cor-trilha: ${x.TOTAL}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${y.create("button").attr("class","btn-remove").text("–").on("click",w).node()}<br>
  ${A()}
</div>
<div class="sombra">
<div class="drag-container">
<span class="material-icons-outlined ${a[0].i==O?"icon-gray":"icon-blue"}">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-blue">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined ${a[a.length-1].i==O?"icon-gray":"icon-blue"}">
expand_more
</span>
</div>
<div class="trilha obitototal" i=${O}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">ÓBITOS TOTAIS</span>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">MÉDIA MÓVEL</label> ${y.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==O).mostra_media_movel).on("change",e=>C(e,O)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">MODIFICAR PERÍODO</label> ${y.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==O).alterar_tempo).on("change",e=>E(e,O)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">ESCALA ABSOLUTO</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+O).property("checked","absoluto"==a.find(e=>e.i==O).escala).attr("value","absoluto").on("change",e=>_(e,O)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha"> PERCENTUAL</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+O).property("checked","percentual"==a.find(e=>e.i==O).escala).attr("value","percentual").on("change",e=>_(e,O)).node()}
    </div>
    <span class="fonte">Fonte: SIM</span>
  </div>
<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right;">${k}</div>
</div>
${T(O)}
<div class="rodape-trilha">
<div class="botao-comparacao">
${y.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==O).show_filtros).on("change",e=>S(e,O)).node()}
<label>COMPARAÇÃO</label>
</div>
<div class="menu-local">${a.find(e=>e.i==O).show_filtros?a.find(e=>e.i==O).filtros:""}</div>
</div>
</div>
</div>
</div>`}}function eo(e,t,i,a,n,r){return o=>{let l;return e`
<div style="display:flex; align-items:center; justify-content:space-between;">
<div style="visibility:hidden;">
  ${t.create("button").attr("class","btn-remove").text("–").on("click",i).node()}<br>
  ${t.create("button").attr("class","btn-remove").text("C").on("click",a).node()}
</div>

<div class="drag-container nova-trilha" style="border:dotted #C4C4C4 2px; border-right:none; height:80px;">
<span class="material-icons-outlined icon-gray">
expand_less
</span>
<div class="drag" style="cursor:auto;">
  <span class="material-icons-outlined icon-gray">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined icon-gray">
expand_more
</span>
</div>

<div class="trilha" style="width:${n-60}px; margin-left:0px; border-radius: 0 10px 10px 0; border:dotted #C4C4C4 2px; box-shadow:none; height:80px;">
  <div class="cabecalho-trilha" style="border-bottom:dotted #C4C4C4 2px;">
${(l=t.create("select").attr("class","menuIG")).style("margin-left","10px").style("font-family","Roboto Condensed"),l.append("option").attr("name","").text("ADICIONE UMA TRILHA").property("disabled",!0).property("selected",!0),l.append("option").attr("name","PM25").text("POLUENTE"),l.append("option").attr("name","\xd3BITOS FETAIS").text("\xd3BITOS FETAIS"),l.append("option").attr("name","\xd3BITOS NEONATAIS TOTAIS").text("\xd3BITOS NEONATAIS TOTAIS"),l.append("option").attr("name","\xd3BITOS EM RELA\xc7\xc3O AO PARTO").text("\xd3BITOS EM RELA\xc7\xc3O AO PARTO"),l.append("option").attr("name","TOTAL").text("\xd3BITOS TOTAIS"),l.on("change",r),l.node()}
  </div>

<div class="conteudo-trilha">
<br><br>
</div>
</div>`}}function el(e,t,i,a,n){return r=>e`
<div style="--cor-trilha: #c4c4c4; display:flex; align-items:center; justify-content:space-between; margin-bottom:30px;">
<div style="visibility:hidden;">
  ${t.create("button").attr("class","btn-remove").text("–").on("click",i).node()}<br>
  ${t.create("button").attr("class","btn-remove").text("C").on("click",a).node()}
</div>
<div class="sombra" style="border: 3px var(--cor-trilha) solid; border-radius: 10px;">
<div class="drag-container" style="height:80px;">
<span class="material-icons-outlined icon-gray">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-gray">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined icon-gray">
expand_more
</span>
</div>
<div class="trilha" style="width:${n-60}px; margin-left:0px; margin-bottom:0px; height: 80px;">
  <div class="cabecalho-trilha">
  <label class="label-titulo-trilha">CARREGANDO...</label>
  </div>

<div class="conteudo-trilha">
<br><br>
</div>
</div>
</div>`}function es(e,t,i,a,n,r){return o=>{let l=e.findIndex(e=>e.i==o.target.parentNode.parentNode.getElementsByClassName("trilha")[0].getAttribute("i")),s={...e[l]},d=t.max(e.map(e=>e.i))+1;s.i=d,"PM25"!=s.variavel&&(s.filtros=s.filtros.cloneMenu(),s.filtros.addEventListener("input",e=>i(e,s))),e.splice(l+1,0,s),a.value=e;let c=JSON.parse(JSON.stringify(n.filter(e=>e.idx==o.target.parentNode.parentNode.getElementsByClassName("trilha")[0].getAttribute("i"))));c.forEach((e,t,i)=>{i[t].idx=d,i[t].dados.forEach((e,t,i)=>i[t].x=new Date(i[t].x))}),r.value=n.concat(c)}}function ed(e,t,i,a){return n=>{e.value=t.filter(e=>e.i!=n.target.parentNode.parentNode.getElementsByClassName("trilha")[0].getAttribute("i")),i.value=a.filter(e=>e.idx!=n.target.parentNode.parentNode.getElementsByClassName("trilha")[0].getAttribute("i"))}}function ec(e,t,i,a,n,r,o,l,s,d,c,u,p,f,m,v,h,b){return g=>{let x=e.max(t.map(e=>e.i))||0,y=null;switch(g.target.value){case"POLUENTE":y={i:x+1,mostra_media_movel:!0,variavel:"PM25",alterar_tempo:null,poluente:"PM25"},i.value=t.concat(y),a.forEach(e=>Promise.all([n(e.nome)]).then(t=>{r.value=r.value.concat([{idx:x+1,municipio:e.nome,variavel:"PM25",dados:o(t[0])}])}));break;case"\xd3BITOS NEONATAIS TOTAIS":(y={i:x+1,mostra_media_movel:!1,escala:"taxa",neonatal:"PRECOCE",variavel:"NEONATAL",alterar_tempo:null,filtros:new l.local(null,null,s.NEONATAL),show_filtros:!1}).filtros.addEventListener("input",e=>d(e,y)),i.value=t.concat(y),a.forEach(e=>Promise.all([c(e.nome,y.filtros.expression)]).then(t=>{r.value=r.value.concat([{idx:x+1,municipio:e.nome,variavel:"NEONATAL",dados:u(t[0])}])}));break;case"\xd3BITOS EM RELA\xc7\xc3O AO PARTO":(y={i:x+1,mostra_media_movel:!1,escala:"taxa",relparto:"ANTES",variavel:"RELPARTO",alterar_tempo:null,filtros:new l.local(null,null,s.RELPARTO),show_filtros:!1}).filtros.addEventListener("input",e=>d(e,y)),i.value=t.concat(y),a.forEach(e=>Promise.all([p(e.nome,y.filtros.expression)]).then(t=>{r.value=r.value.concat([{idx:x+1,municipio:e.nome,variavel:"RELPARTO",dados:f(t[0])}])}));break;case"\xd3BITOS FETAIS":(y={i:x+1,mostra_media_movel:!1,variavel:"FETAL",alterar_tempo:null,filtros:new l.local(null,null,s.FETAIS),show_filtros:!1,escala:"absoluto"}).filtros.addEventListener("input",e=>d(e,y)),i.value=t.concat(y),a.forEach(e=>Promise.all([m(e.nome,y.filtros.expression)]).then(t=>{r.value=r.value.concat([{idx:x+1,municipio:e.nome,variavel:"FETAL",dados:v(t[0])}])}));break;case"\xd3BITOS TOTAIS":(y={i:x+1,mostra_media_movel:!1,variavel:"TOTAL",alterar_tempo:null,filtros:new l.local(null,null,s.TOTAL),show_filtros:!1,escala:"absoluto"}).filtros.addEventListener("input",e=>d(e,y)),i.value=t.concat(y),a.forEach(e=>Promise.all([h(e.nome,y.filtros.expression)]).then(t=>{r.value=r.value.concat([{idx:x+1,municipio:e.nome,variavel:"TOTAL",dados:b(t[0])}])}))}}}function eu(e,t,i,a){return n=>{if(!e.find(e=>e.i==n).alterar_tempo)return"";let r=t(104,468,e.find(e=>e.i==n).alterar_tempo[0],e.find(e=>e.i==n).alterar_tempo[1],i-90,40);return r.addEventListener("input",t=>{let i=e;i.find(e=>e.i==n).alterar_tempo=r.value,a.value=i}),r}}function ep(e,t){return i=>{e.find(e=>e.i==i.target.parentElement.parentElement.getAttribute("i")).poluente=i.target.value,t.value=e}}function ef(e,t,i,a,n,r,o,l,s,d){return(c,u)=>{if(e.find(e=>e.i==u).show_filtros=c.target.checked,c.target.checked){let p=e.find(e=>e.i==u);p.filtros=new i.local(null,a.value.urlids,n[p.variavel]),p.filtros.addEventListener("input",e=>r(e,p)),t.value=t.value.filter(e=>e.idx!=u||!e.filtrado),o.value.forEach(i=>{Promise.all([l[e.find(e=>e.i==u).variavel](i.nome,e.find(e=>e.i==u).filtros.value.expression)]).then(a=>{t.value=t.value.concat({idx:u,municipio:i.nome,variavel:e.find(e=>e.i==u).variavel,filtrado:!0,dados:s[e.find(e=>e.i==u).variavel](a[0])})})})}else t.value=t.value.filter(e=>e.idx!=u||!e.filtrado);d.value=e}}function em(e,t,i){return(a,n)=>{a.target.checked?e.find(e=>e.i==n).alterar_tempo=t:e.find(e=>e.i==n).alterar_tempo=null,i.value=e}}function ev(e,t){return(i,a)=>{e.find(e=>e.i==a).neonatal=i.target.value,t.value=e}}function eh(e,t){return(i,a)=>{e.find(e=>e.i==a).relparto=i.target.value,t.value=e}}function eb(e,t){return(i,a)=>{e.find(e=>e.i==a).escala=i.target.value,t.value=e}}function eg(e,t){return(i,a)=>{e.find(e=>e.i==a).mostra_media_movel=i.target.checked,t.value=e}}function ex(e){return t=>{let i=[0,0];return i[0]=e[t[0]].inicio,i[1]=e[t[1]].termino,i}}function ey(e,t,i){return e?e.trilhas.map(e=>(e.filtros=new t.local(null,e.filtrosUrlids),e)):[{i:0,mostra_media_movel:!0,variavel:"PM25",alterar_tempo:null,poluente:"PM25"},{i:2,mostra_media_movel:!1,escala:"absoluto",variavel:"FETAL",alterar_tempo:null,filtros:new t.local(null,null,i.FETAL),show_filtros:!1},{i:3,mostra_media_movel:!1,escala:"absoluto",neonatal:"PRECOCE",variavel:"NEONATAL",alterar_tempo:null,filtros:new t.local(null,null,i.NEONATAL),show_filtros:!1},{i:4,mostra_media_movel:!1,escala:"absoluto",relparto:"ANTES",variavel:"RELPARTO",alterar_tempo:null,filtros:new t.local(null,null,i.RELPARTO),show_filtros:!1},]}function ew(){return{PM25:{valor:"\xb5g/m\xb3"},NEONATAL:{absoluto:"\xf3bitos",percentual:"%",taxa:"nasc./1000NV"},RELPARTO:{absoluto:"\xf3bitos",percentual:"%",taxa:"nasc./1000NV"},TOTAL:{absoluto:"\xf3bitos",percentual:"%"},FETAL:{absoluto:"\xf3bitos",percentual:"%"}}}function eA(){return 2.5}function eC(){return 2}function eE(){return!0}function e_(e,t){return e?e.municipios:t.municipios}function eT(e,t,i,a,n,r,o,l,s,d,c,u,p,f){if(e){for(let m of t.value)i.value=i.value.concat([m]),m=m.nome,a.forEach(e=>{Promise.all([n[e.variavel](m,r.value.expression)]).then(t=>{o.value=o.value.concat({idx:e.i,municipio:m,variavel:e.variavel,dados:l[e.variavel](t[0])})}),e.show_filtros&&Promise.all([n[e.variavel](m,e.filtros.value.expression)]).then(t=>{o.value=o.value.concat({idx:e.i,municipio:m,variavel:e.variavel,filtrado:!0,dados:l[e.variavel](t[0])})})}),a.slice(1).forEach(e=>e.filtros.addEventListener("input",t=>s(t,e)));r.addEventListener("input",e=>d(e)),r.addEventListener("aba",e=>{c.setItem("conf3",JSON.stringify(u())),c.setItem("municipios",JSON.stringify(i.value)),c.setItem("intervalo",JSON.stringify(p.value))}),r.addEventListener("limparFiltros",e=>{for(let t=0;t<a.length;t++)a[t].filtros.limpa()}),f.value=!1}}function eS(e,t,i,a){return(n,r)=>{e.value=e.value.filter(e=>e.idx!=r.i||!e.filtrado),t.value.forEach(t=>{Promise.all([i[r.variavel](t.nome,r.filtros.value.expression)]).then(i=>{e.value=e.value.concat({idx:r.i,municipio:t.nome,variavel:r.variavel,filtrado:!0,dados:a[r.variavel](i[0])})})})}}function eO(e){return e.range([3,53],{label:"Janela em semanas",value:13,step:2})}function eM(e){return e.select(["co_ppb","no2_ppb","o3_ppb","pm25_ugm3","so2_ugm3"],{label:"Indicador",value:"pm25_ugm3"})}function ek(){return["#2F87F5","#D8C56C","#DC5988","#6CC28D","#67AEC2","#ABA6F8","#D8C56C","#2DE8BD","#2F87F5","#94E8F9"]}function eI(){return[]}function eL(e,t,i,a){return e[Math.ceil(t.interpolate(...i?i.intervalo:a.intervalo)(.5))].inicio}function eN(e){return e}function eD(e){return e.bisector(e=>e.x)}function eR(e){return e.timeFormatDefaultLocale({decimal:",",thousands:".",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%d/%m/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Domingo","Segunda-feira","Ter\xe7a-feira","Quarta-feira","Quinta-feira","Sexta-feira","S\xe1bado"],shortDays:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],months:["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],shortMonths:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]})}function eP(e){return e[0]}function eF(e){return e[1]}function e$(e,t,i,a,n){return(r,o)=>{let l=e.find(e=>e.i==o).alterar_tempo,s=e.find(e=>e.i==o).mostra_media_movel?(t-1)/2:0;return l?r.x.getTime()>=i[l[0]-s].inicio.getTime()&&r.x.getTime()<=i[l[1]+s].termino.getTime():r.x.getTime()>=i[a-s].inicio.getTime()&&r.x.getTime()<=i[n+s].termino.getTime()}}function eB(){return 200}function eU(e,t){return function(i,a){if(2==i.length)return;let n=e.find(e=>e.municipio==i).codigo_sdv,r=`https://storage.googleapis.com/amplia/sisam/${n.substring(0,2)}/mun${n}.db`;return t.open(r).then(e=>e.query(a))}}function ej(e){return e`<style>
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@400;700&display=swap');
  text{
    font-family:"Fira Sans Condensed"
  }
</style>`}function eG(e){return e("municipios2.csv").csv()}function eV(e){return e("semanas_epidemiologicas_estendido.csv").csv().then(e=>e.map(e=>(e.inicio=new Date(Date.UTC(+e.inicio.substr(0,4),+e.inicio.substr(5,2)-1,+e.inicio.substr(8,2))),e.termino=new Date(Date.UTC(+e.termino.substr(0,4),+e.termino.substr(5,2)-1,+e.termino.substr(8,2))),e)).filter(e=>e.ano>=2010))}function eH(){return{ACRE:"AC",ALAGOAS:"AL",AMAPÁ:"AP",AMAZONAS:"AM",BAHIA:"BA",CEARÁ:"CE","DISTRITO FEDERAL":"DF","ESP\xcdRITO SANTO":"ES",GOIÁS:"GO",MARANHÃO:"MA","MATO GROSSO":"MT","MATO GROSSO DO SUL":"MS","MINAS GERAIS":"MG",PARÁ:"PA",PARAÍBA:"PB",PARANÁ:"PR",PERNAMBUCO:"PE",PIAUÍ:"PI","RIO DE JANEIRO":"RJ","RIO GRANDE DO NORTE":"RN","RIO GRANDE DO SUL":"RS",RONDÔNIA:"RO",RORAIMA:"RR","SANTA CATARINA":"SC","S\xc3O PAULO":"SP",SERGIPE:"SE",TOCANTINS:"TO"}}function ez(){return[]}function eq(){return["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"]}function eZ(e){return Object.values(e).sort(Intl.Collator().compare)}function eW(e,t,i){return a=>"BRASIL"==a?"":e.includes(a)?"mun_uf_nome='"+Object.entries(t).find(e=>e[1]==a)[0]+"'":"mun_geocodsdv="+i.find(e=>e.municipio==a).codigo_sdv}function eJ(e){return e`## URL stuff`}function eX(e){return function(t){return e.compressToEncodedURIComponent(JSON.stringify(t))}}function eQ(e){return function(t){return JSON.parse(e.decompressFromEncodedURIComponent(t))}}function eY(e,t,i,a){return()=>({principalUrlids:e.value.value.urlids,municipios:t.value,intervalo:i,trilhas:a.value.map(e=>{let t={};return Object.assign(t,e),t.filtros&&(t.filtrosUrlids=t.filtros.value.urlids,delete t.filtros),t})})}function eK(){return{principalUrlids:"",municipios:[{nome:"RIO DE JANEIRO",cor:"#2F87F5"}],intervalo:[104,469],trilhas:[{i:0,mostra_media_movel:!0,variavel:"PM25",alterar_tempo:null,poluente:"PM25"},{i:2,mostra_media_movel:!1,escala:"absoluto",variavel:"FETAL",alterar_tempo:null,show_filtros:!1,filtrosUrlids:""},{i:3,mostra_media_movel:!1,escala:"absoluto",neonatal:"PRECOCE",variavel:"NEONATAL",alterar_tempo:null,show_filtros:!1,filtrosUrlids:""},{i:4,mostra_media_movel:!1,escala:"absoluto",relparto:"ANTES",variavel:"RELPARTO",alterar_tempo:null,show_filtros:!1,filtrosUrlids:""}]}}function e1(e,t,i,a){let n=new e(window.location.search).get("conf");if(n)return t(n);if(n=i.getItem("conf3")){let r=JSON.parse(n),o=i.getItem("municipios");o&&(r.municipios=JSON.parse(o));let l=i.getItem("intervalo");return l&&(r.intervalo=JSON.parse(l)),r}if(n=i.getItem("municipios")){let s=a;return s.municipios=JSON.parse(n),n=i.getItem("intervalo"),s.intervalo=JSON.parse(n),s}}function e0(){return function(e){var t=document.body.appendChild(document.createElement("textarea"));t.style.position="absolute",t.style.left="-9999px",t.setAttribute("readonly",""),t.value=e,t.select();try{return document.execCommand("copy")}catch(i){return!1}finally{t.parentNode.removeChild(t)}}}function e2(){return"https://ampliasaude.github.io/amplia-site/trilhas/MortalidadeInfantil/"}function e5(e,t,i,a,n){let r=e`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Copiar link compartilhável</title>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M6.045 10C6.045 11.026 6.8095 11.86 7.75 11.86H9.95V13H7.75C6.232 13 5 11.656 5 10C5 8.344 6.232 7 7.75 7H9.95V8.14H7.75C6.8095 8.14 6.045 8.974 6.045 10ZM8.3 9.4H12.7V10.6H8.3V9.4ZM13.25 13H11.05V11.86H13.25C14.1905 11.86 14.955 11.026 14.955 10C14.955 8.974 14.1905 8.14 13.25 8.14H11.05V7H13.25C14.768 7 16 8.344 16 10C16 11.656 14.768 13 13.25 13Z" fill="white"/>
</svg>`;return r.onclick=()=>{n(`${t}?conf=${i(a())}`)},r}function e3(e){return e`## Poluentes`}function e4(){return{pm25_ugm3:120,so2_ugm3:90,no2_ppb:286,o3_ppb:154,co_ppb:9.9}}function e7(){return e=>.08206*(e+293.15)}function e6(){return{no2_ppb:46.0055,o3_ppb:48,co_ppb:28.01}}function e8(){return{pm25_ugm3:[25,37,50,60],so2_ugm3:[20,30,40,60],no2_ppb:[200,220,240,260],o3_ppb:[100,120,130,140],co_ppb:[9,9,9,9]}}function e9(e,t){return(i,a="TRUE")=>t(i,`
      select 
        ano,
        mes,
        dia,
        max_${e} as valor,
        temperatura_c_media
      from 
        sisam
      where
          ano >= 2012
      group by
        1,2,3
 `)}function te(e,t,i,a){return n=>{n.forEach(n=>{let r=n,o=new Date(Date.UTC(r.ano,r.mes-1,r.dia));for(let l of e)if(o>=new Date(l.inicio)&&o<=new Date(l.termino)){r.semana=+l.semana,r.x=l.inicio;break}switch(1==r.mes&&53==r.semana&&(r.ano-=1,r.mes=12),t){case"no2_ppb":case"o3_ppb":let s=i[t]/a(r.temperatura);r.valor*=s;case"co_ppb":r.valor/=1e3}});let r=[];for(let o of n){let l=r.find(e=>e.x==o.x);l?(l.valor+=o.valor,l.temperatura_c_media+=o.temperatura_c_media,l.cont+=1):r.push({ano:o.ano,semana:o.semana,x:o.x,valor:o.valor||0,temperatura_c_media:o.temperatura_c_media,cont:1})}return r.map(e=>(e.valor/=e.cont,e.temperatura_c_media/=e.cont,delete e.cont,e)).filter(e=>e.semana)}}function tt(e){return e`## Mortalidade`}function ti(e,t,i){return async(a,n)=>{let r;return await i.fetchNeoNatal(e.includes(a)?Math.floor(t.find(e=>e.sigla==a).codigo_sdv/1e4):t.find(e=>e.municipio==a).codigo_sdv,n)}}function ta(e,t,i){return async(a,n)=>{let r;return await i.fetchRelParto(e.includes(a)?Math.floor(t.find(e=>e.sigla==a).codigo_sdv/1e4):t.find(e=>e.municipio==a).codigo_sdv,n)}}function tn(e,t){return i=>{let a=e(i[1]);(i=i[0]).forEach(e=>{let i=e;for(let a of(i.data=new Date(i.data),t))if(i.data>=new Date(a.inicio)&&i.data<=new Date(a.termino)){i.x=a.inicio;break}});let n=i,r=[];for(let o of n){let l=r.find(e=>e.x.getTime()==o.x.getTime());l?(l.absoluto[o.neonatal]+=o.total,l.total+=o.total):r.push({x:o.x,absoluto:{PRECOCE:"PRECOCE"==o.neonatal?o.total:0,NEOTOTAL:"NEOTOTAL"==o.neonatal?o.total:0,TARDIO:"TARDIO"==o.neonatal?o.total:0,POS:"POS"==o.neonatal?o.total:0},total:o.total})}return t.filter(e=>!r.map(e=>e.x.getTime()).includes(e.inicio.getTime())).forEach(e=>{r.push({x:e.inicio,absoluto:{PRECOCE:0,TARDIO:0,NEOTOTAL:0,POS:0},total:0})}),(r=r.map(e=>{e.percentual={},e.total?(e.percentual.PRECOCE=100*e.absoluto.PRECOCE/e.total,e.percentual.TARDIO=100*e.absoluto.TARDIO/e.total,e.percentual.NEOTOTAL=100*e.absoluto.NEOTOTAL/e.total,e.percentual.POS=100*e.absoluto.POS/e.total):(e.percentual.PRECOCE=0,e.percentual.TARDIO=0,e.percentual.NEOTOTAL=0,e.percentual.POS=0),e.taxa={};let t=a.find(t=>t.x.getTime()==e.x.getTime());return t?(e.taxa.PRECOCE=1e3*e.absoluto.PRECOCE/t.valor,e.taxa.TARDIO=1e3*e.absoluto.TARDIO/t.valor,e.taxa.NEOTOTAL=1e3*e.absoluto.NEOTOTAL/t.valor,e.taxa.POS=1e3*e.absoluto.POS/t.valor):(e.taxa.PRECOCE=0,e.taxa.TARDIO=0,e.taxa.NEOTOTAL=0,e.taxa.POS=0),e})).sort((e,t)=>e.x.getTime()-t.x.getTime())}}function tr(e,t){return i=>{let a=e(i[1]);(i=i[0]).forEach(e=>{let i=e;for(let a of(i.data=new Date(i.data),t))if(i.data>=new Date(a.inicio)&&i.data<=new Date(a.termino)){i.x=a.inicio;break}});let n=i,r=[];for(let o of n){let l=r.find(e=>e.x.getTime()==o.x.getTime());l?(l.absoluto[o.relparto]+=o.total,l.total+=o.total):r.push({x:o.x,absoluto:{ANTES:"ANTES"==o.relparto?o.total:0,DURANTE:"DURANTE"==o.relparto?o.total:0,DEPOIS:"DEPOIS"==o.relparto?o.total:0},total:o.total})}return t.filter(e=>!r.map(e=>e.x.getTime()).includes(e.inicio.getTime())).forEach(e=>{r.push({x:e.inicio,absoluto:{ANTES:0,DURANTE:0,DEPOIS:0},total:0})}),(r=r.map(e=>{e.percentual={},e.total?(e.percentual.ANTES=100*e.absoluto.ANTES/e.total,e.percentual.DURANTE=100*e.absoluto.DURANTE/e.total,e.percentual.DEPOIS=100*e.absoluto.DEPOIS/e.total):(e.percentual.ANTES=0,e.percentual.DURANTE=0,e.percentual.DEPOIS=0),e.taxa={};let t=a.find(t=>t.x.getTime()==e.x.getTime());return t?(e.taxa.ANTES=1e3*e.absoluto.ANTES/t.valor,e.taxa.DURANTE=1e3*e.absoluto.DURANTE/t.valor,e.taxa.DEPOIS=1e3*e.absoluto.DEPOIS/t.valor):(e.taxa.ANTES=0,e.taxa.DURANTE=0,e.taxa.DEPOIS=0),e})).sort((e,t)=>e.x.getTime()-t.x.getTime())}}function to(e){return t=>{let i=[];t.forEach(t=>{let a=t;if(a.data=new Date(a.data),!(2011>a.data.getFullYear())){for(let n of e)if(a.data>=new Date(n.inicio)&&a.data<=new Date(n.termino)){a.x=n.inicio;break}i.push(a)}});let a=[];for(let n of i){let r=a.find(e=>e.x.getTime()==n.x.getTime());r?r.valor+=n.valor:a.push({x:n.x,valor:n.valor})}return a.filter(e=>e.x)}}function tl(e){return t=>{let i=[];t.forEach(t=>{let a=t;if(a.data=new Date(a.data),!(2011>a.data.getFullYear())){for(let n of e)if(a.data>=new Date(n.inicio)&&a.data<=new Date(n.termino)){a.x=n.inicio;break}i.push(a)}});let a=[];for(let n of i){let r=a.find(e=>e.x.getTime()==n.x.getTime());r?r.valor+=n.valor:a.push({x:n.x,valor:n.valor})}return a.filter(e=>e.x)}}function ts(e,t,i){return async(a,n)=>{let r;return await i.fetchTotal(e.includes(a)?Math.floor(t.find(e=>e.sigla==a).codigo_sdv/1e4):t.find(e=>e.municipio==a).codigo_sdv,n)}}function td(e,t,i){return async(a,n)=>{let r;return await i.fetchFetal(e.includes(a)?Math.floor(t.find(e=>e.sigla==a).codigo_sdv/1e4):t.find(e=>e.municipio==a).codigo_sdv,n)}}function tc(e,t){return i=>{let a=e(i[1]);i=i[0];let n=[];i.forEach(e=>{let i=e;if(i.data=new Date(i.data),!(2011>i.data.getFullYear())){for(let a of t)if(i.data>=new Date(a.inicio)&&i.data<=new Date(a.termino)){i.x=a.inicio;break}n.push(i)}});let r=[];for(let o of n){let l=r.find(e=>e.x.getTime()==o.x.getTime());l?l.absoluto+=o.valor:r.push({x:o.x,absoluto:o.valor})}return(r=r.filter(e=>e.x)).map(e=>{e.percentual={};let t=a.find(t=>t.x.getTime()==e.x.getTime());return t?e.percentual=100*e.absoluto/t.valor:e.percentual=0,e})}}function tu(e,t){return i=>{let a=e(i[1]);i=i[0];let n=[];i.forEach(e=>{let i=e;if(i.data=new Date(i.data),!(2011>i.data.getFullYear())){for(let a of t)if(i.data>=new Date(a.inicio)&&i.data<=new Date(a.termino)){i.x=a.inicio;break}n.push(i)}});let r=[];for(let o of n){let l=r.find(e=>e.x.getTime()==o.x.getTime());l?l.absoluto+=o.valor:r.push({x:o.x,absoluto:o.valor})}return(r=r.filter(e=>e.x)).map(e=>{e.percentual={};let t=a.find(t=>t.x.getTime()==e.x.getTime());return t?e.percentual=100*e.absoluto/t.valor:e.percentual=0,e})}}function tp(e){return e`## Imports`}function tf(e){return e("sortablejs/Sortable.js")}function tm(e){return e("d3@5")}function tv(e,t,i,a,n,r,o){return function(l,s,d=l,c=s,u=e.width,p=60){var f=[l,s+1],m=e.height,v=e.margin,h=u-p-v.right,b=m-v.top-v.bottom,g=t.scaleLinear().domain(f).range([0,h]),x=t.select(i.svg(u,m));let y=x.append("g").attr("transform",`translate(${p}, ${v.top})`);var w=y.append("text").attr("id","labelleft").attr("x",0).attr("y",b+5).style("display",60==p?"inline":"none").text(a[n[f[0]].inicio.getMonth()]+" "+n[f[0]].inicio.getFullYear()),A=y.append("text").attr("id","labelright").attr("x",0).attr("y",b+5).style("display",60==p?"inline":"none").text(a[n[f[1]].termino.getMonth()]+" "+n[f[1]].termino.getFullYear());y.append("text").attr("id","labelleft2").attr("x",-8).attr("y",b-b/2+1).style("alignment-baseline","middle").text(2012),y.append("text").attr("id","labelright2").attr("x",h+8).attr("y",b-b/2+1).style("alignment-baseline","middle").text(2019);var C=t.brushX().extent([[0,0],[h,b]]).on("brush",function(){var e=t.event.selection;w.attr("x",e[0]).text(a[n[Math.round(g.invert(e[0]))].inicio.getMonth()]+" "+n[Math.round(g.invert(e[0]))].inicio.getFullYear()),A.attr("x",e[1]).text(a[n[Math.round(g.invert(e[1]))].termino.getMonth()]+" "+n[Math.round(g.invert(e[1]))].termino.getFullYear()),T.attr("display",null).attr("transform",function(t,i){return"translate("+[e[i],-b/4]+")"}),x.node().value=e.map(e=>Math.round(g.invert(e))),x.node().dispatchEvent(new CustomEvent("input"))}).on("end",function(){if(t.event.sourceEvent){var e=t.event.selection.map(g.invert).map(Math.round);t.select(this).transition().call(t.event.target.move,e.map(g)),r.value=Math.max(Math.min(new Date(r.value),n[x.node().value[1]-2].termino),n[x.node().value[0]].inicio)}}),E=y.append("g").attr("class","brush").call(C),_=function(e){return"M -3 12 A 3 3 0 0 1 3 12 V 18 A 3 3 0 0 1 -3 18 Z"},T=E.selectAll(".handle--custom").data([{type:"w"},{type:"e"}]).enter().append("path").attr("class","handle--custom").attr("stroke","#000").attr("fill","#151472").attr("cursor","ew-resize").attr("y",b/2).attr("d",_);return E.selectAll(".overlay").attr("fill","#E5E5E5").each(function(e){e.type="selection"}).on("mousedown touchstart",function(){var e=g(1)-g(0),t=o.mouse(this)[0],i=t-e/2,a=t+e/2;o.select(this.parentNode).call(C.move,a>h?[h-e,h]:i<0?[0,e]:[i,a])}),E.call(C.move,[d,c+1].map(g)),y.append("g").selectAll("line").data(n.filter(e=>1==e.semana).map(e=>n.findIndex(t=>t==e))).enter().append("line").attr("x1",e=>g(e)).attr("x2",e=>g(e)).attr("y1",0).attr("y2",b).style("stroke","#ccc"),x.node()}}function th(){return{width:600,height:60,margin:{top:20,bottom:20,left:60,right:60}}}function tb(e){return e`
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
svg {
	font-family: "Roboto Condensed";
}

rect.overlay {
	stroke: none;
}

rect.selection {
	stroke: none;
  fill: rgba(21, 20, 114, 0.6);
}

#labelleft, #labelright, #labelright2, #labelleft2 {
	dominant-baseline: hanging;
  font-size: 12px;
  font-weight: 400;
  fill: #151472;
}

#labelleft, #labelleft2 {
	text-anchor: end;
}

#labelright, #labelright2 {
	text-anchor: start;
}
</style>
`}function tg(e){return e("https://bundle.run/lz-string@1.4.4")}function tx(e){return e`<style>
  @import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap);
  @import url(https://fonts.googleapis.com/icon?family=Material+Icons);    
</style>
`}function ty(e){return e`
<style>
/* The container must be positioned relative: */
.custom-select {
  position: relative;
  font-family: "Roboto Condensed";
}

.custom-select select {
  display: none; /*hide original SELECT element: */
}

.select-selected {
  border-radius: 6px;
  background-color: white;
  border: dashed 2px #C4C4C4;
  font-family: "Roboto Condensed";
  padding: 3px;
  min-width: 80px;
  max-width: 240px;
}

/* Style the arrow inside the select element: */
.select-selected:after {
  position: absolute;
  content: "";
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #000 transparent transparent transparent;
}

/* Point the arrow upwards when the select box is open (active): */
.select-selected.select-arrow-active:after {
  border-color: transparent transparent #000 transparent;
  top: 7px;
}

/* style the items (options), including the selected item: */
.select-items div {
  color: #000000;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
}

/* Style items (options): */
.select-items {
  position: absolute;
  background-color: white;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
}

/* Hide the items when the select box is closed: */
.select-hide {
  display: none;
}

.select-items div:hover, .same-as-selected {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
`}function tw(e,t){let a=e.module();function n(){return this.url}let r=new Map([["semanas_epidemiologicas_estendido.csv",{url:new i.U(i(2221)),mimeType:"text/csv",toString:n}],["municipios2.csv",{url:new i.U(i(582)),mimeType:"text/csv",toString:n}]]);a.builtin("FileAttachment",e.fileAttachments(e=>r.get(e))),a.variable(t()).define(["md"],L),a.variable(t("cabecalho")).define("cabecalho",["html","copyLinkButton"],N),a.define("initial mp",["urlParamConf","ampliaMenu"],D),a.variable(t("mutable mp")).define("mutable mp",["Mutable","initial mp"],(e,t)=>new e(t)),a.variable(t("mp")).define("mp",["mutable mp"],e=>e.generator),a.variable(t("div_controles")).define("div_controles",["html","barra_municipios","viewof intervalo"],R),a.variable(t("vis")).define("vis",["conf_trilhas","funcoesGeradoras","gAdicionaTrilha","Sortable","mutable conf_trilhas","d3"],P),a.variable(t("maxMunicipios")).define("maxMunicipios",F),a.variable(t("viewof intervalo")).define("viewof intervalo",["urlParamConf","slider_snap","defaultConf"],$),a.variable(t("intervalo")).define("intervalo",["Generators","viewof intervalo"],(e,t)=>e.input(t)),a.variable(t("barra_municipios")).define("barra_municipios",["html","sel_municipios","remove_mun_button","maxMunicipios","menu_municipios"],B),a.variable(t("menu_municipios")).define("menu_municipios",["d3","html","municipios","agregacoes","sel_municipios","maxMunicipios","mutable sel_municipios","colors","sessionStorage","conf_trilhas","funcoesFetch","mp","mutable data","funcoesProc","data"],U),a.variable(t("listenerFiltroGlobal")).define("listenerFiltroGlobal",["mutable conf_trilhas","mutable data","mutable sel_municipios","funcoesFetch","funcoesProc"],j),a.variable(t("remove_mun_button")).define("remove_mun_button",["d3","sel_municipios","mutable sel_municipios","sessionStorage","mutable data","data","agregacoes","municipios"],G),a.variable(t("remove_trilha_button")).define("remove_trilha_button",["d3","removeTrilha"],V),a.variable(t("copy_button")).define("copy_button",["d3","copyTrilha"],H),a.variable(t("funcoesGeradoras")).define("funcoesGeradoras",["gPM25","gNEONATAL","gRELPARTO","gFETAL","gTOTAL"],z),a.variable(t("funcoesProc")).define("funcoesProc",["procPM25","procNeoNatal","procTOTAL","procFetal","procRelParto"],q),a.variable(t("funcoesFetch")).define("funcoesFetch",["fetchPM25","fetchNeoNatal","fetchTOTAL","fetchFetal","fetchRelParto"],Z),a.variable(t("corTrilha")).define("corTrilha",W),a.variable(t("corTrilhaFraco")).define("corTrilhaFraco",J),a.variable(t("style")).define("style",["html"],X),a.variable(t("suscetibilidade")).define("suscetibilidade",["sel","d3"],Q),a.variable(t("legendTooltip")).define("legendTooltip",["d3","sel_pm25","sel","valoresLista","corTrilhaFraco"],Y),a.variable(t("valoresLista")).define("valoresLista",["sel_pm25","sel","sel_municipios","data","semanas_epidemiologicas","d3","unidades","agregacoes","siglas","bisector"],K),a.variable(t("mouseDownHandler")).define("mouseDownHandler",["data","bisector","mutable sel_pm25","mutable sel","d3"],ee),a.variable(t("gPM25")).define("gPM25",["Plot","width","height","formatTime","conf_trilhas","semanas_epidemiologicas","intervalo","maxScale","indicador","padroes","data","siglas","filterDate","janela","lineWidth","sel_municipios","bisector","sel_pm25","legendTooltip","suscetibilidade","mouseDownHandler","html","corTrilha","d3","removeTrilha","copy_button","checkMediaMovel","checkTempo","inner_slider"],et),a.variable(t("gFETAL")).define("gFETAL",["sel_municipios","data","gLoadingTrilha","conf_trilhas","mp","Plot","width","height","semanas_epidemiologicas","intervalo","filterDate","janela","lineWidthFiltered","lineWidth","bisector","sel","legendTooltip","mouseDownHandler","html","corTrilha","d3","removeTrilha","copy_button","checkMediaMovel","checkTempo","checkEscala","inner_slider","checkFiltros"],ei),a.variable(t("gNEONATAL")).define("gNEONATAL",["sel_municipios","data","gLoadingTrilha","conf_trilhas","mp","Plot","width","height","semanas_epidemiologicas","intervalo","filterDate","janela","lineWidthFiltered","lineWidth","bisector","sel","legendTooltip","mouseDownHandler","html","corTrilha","d3","removeTrilha","copy_button","checkNeoNatal","checkMediaMovel","checkTempo","checkEscala","inner_slider","checkFiltros"],ea),a.variable(t("gRELPARTO")).define("gRELPARTO",["sel_municipios","data","gLoadingTrilha","conf_trilhas","mp","Plot","width","height","semanas_epidemiologicas","intervalo","filterDate","janela","lineWidthFiltered","lineWidth","bisector","sel","legendTooltip","mouseDownHandler","html","corTrilha","d3","removeTrilha","copy_button","checkRelParto","checkMediaMovel","checkTempo","checkEscala","inner_slider","checkFiltros"],en),a.variable(t("gTOTAL")).define("gTOTAL",["sel_municipios","data","gLoadingTrilha","conf_trilhas","mp","Plot","width","height","semanas_epidemiologicas","intervalo","filterDate","janela","lineWidthFiltered","lineWidth","bisector","sel","legendTooltip","mouseDownHandler","html","corTrilha","d3","removeTrilha","copy_button","checkMediaMovel","checkTempo","checkEscala","inner_slider","checkFiltros"],er),a.variable(t("gAdicionaTrilha")).define("gAdicionaTrilha",["html","d3","removeTrilha","copyTrilha","width","addTrilha"],eo),a.variable(t("gLoadingTrilha")).define("gLoadingTrilha",["html","d3","removeTrilha","copyTrilha","width"],el),a.variable(t("copyTrilha")).define("copyTrilha",["conf_trilhas","d3","listenerFiltro","mutable conf_trilhas","data","mutable data"],es),a.variable(t("removeTrilha")).define("removeTrilha",["mutable conf_trilhas","conf_trilhas","mutable data","data"],ed),a.variable(t("addTrilha")).define("addTrilha",["d3","conf_trilhas","mutable conf_trilhas","sel_municipios","fetchPM25","mutable data","procPM25","ampliaMenu","corTrilha","listenerFiltro","fetchNeoNatal","procNeoNatal","fetchRelParto","procRelParto","fetchFetal","procFetal","fetchTOTAL","procTOTAL"],ec),a.variable(t("inner_slider")).define("inner_slider",["conf_trilhas","slider_snap","width","mutable conf_trilhas"],eu),a.variable(t("checkPoluente")).define("checkPoluente",["conf_trilhas","mutable conf_trilhas"],ep),a.variable(t("checkFiltros")).define("checkFiltros",["conf_trilhas","mutable data","ampliaMenu","mp","corTrilha","listenerFiltro","mutable sel_municipios","funcoesFetch","funcoesProc","mutable conf_trilhas"],ef),a.variable(t("checkTempo")).define("checkTempo",["conf_trilhas","intervalo","mutable conf_trilhas"],em),a.variable(t("checkNeoNatal")).define("checkNeoNatal",["conf_trilhas","mutable conf_trilhas"],ev),a.variable(t("checkRelParto")).define("checkRelParto",["conf_trilhas","mutable conf_trilhas"],eh),a.variable(t("checkEscala")).define("checkEscala",["conf_trilhas","mutable conf_trilhas"],eb),a.variable(t("checkMediaMovel")).define("checkMediaMovel",["conf_trilhas","mutable conf_trilhas"],eg),a.variable(t("converteIntervalo")).define("converteIntervalo",["semanas_epidemiologicas"],ex),a.define("initial conf_trilhas",["urlParamConf","ampliaMenu","corTrilha"],ey),a.variable(t("mutable conf_trilhas")).define("mutable conf_trilhas",["Mutable","initial conf_trilhas"],(e,t)=>new e(t)),a.variable(t("conf_trilhas")).define("conf_trilhas",["mutable conf_trilhas"],e=>e.generator),a.variable(t("unidades")).define("unidades",ew),a.variable(t("lineWidth")).define("lineWidth",eA),a.variable(t("lineWidthFiltered")).define("lineWidthFiltered",eC),a.define("initial firstload",eE),a.variable(t("mutable firstload")).define("mutable firstload",["Mutable","initial firstload"],(e,t)=>new e(t)),a.variable(t("firstload")).define("firstload",["mutable firstload"],e=>e.generator),a.define("initial municipiosDefault",["urlParamConf","defaultConf"],e_),a.variable(t("mutable municipiosDefault")).define("mutable municipiosDefault",["Mutable","initial municipiosDefault"],(e,t)=>new e(t)),a.variable(t("municipiosDefault")).define("municipiosDefault",["mutable municipiosDefault"],e=>e.generator),a.variable(t("onfirstload")).define("onfirstload",["firstload","mutable municipiosDefault","mutable sel_municipios","conf_trilhas","funcoesFetch","mp","mutable data","funcoesProc","listenerFiltro","listenerFiltroGlobal","sessionStorage","getCurrentConf","viewof intervalo","mutable firstload"],eT),a.variable(t("listenerFiltro")).define("listenerFiltro",["mutable data","mutable sel_municipios","funcoesFetch","funcoesProc"],eS),a.variable(t("viewof janela")).define("viewof janela",["Inputs"],eO),a.variable(t("janela")).define("janela",["Generators","viewof janela"],(e,t)=>e.input(t)),a.variable(t("viewof indicador")).define("viewof indicador",["Inputs"],eM),a.variable(t("indicador")).define("indicador",["Generators","viewof indicador"],(e,t)=>e.input(t)),a.variable(t("colors")).define("colors",ek),a.define("initial sel_municipios",eI),a.variable(t("mutable sel_municipios")).define("mutable sel_municipios",["Mutable","initial sel_municipios"],(e,t)=>new e(t)),a.variable(t("sel_municipios")).define("sel_municipios",["mutable sel_municipios"],e=>e.generator),a.define("initial sel",["semanas_epidemiologicas","d3","urlParamConf","defaultConf"],eL),a.variable(t("mutable sel")).define("mutable sel",["Mutable","initial sel"],(e,t)=>new e(t)),a.variable(t("sel")).define("sel",["mutable sel"],e=>e.generator),a.define("initial sel_pm25",["sel"],eN),a.variable(t("mutable sel_pm25")).define("mutable sel_pm25",["Mutable","initial sel_pm25"],(e,t)=>new e(t)),a.variable(t("sel_pm25")).define("sel_pm25",["mutable sel_pm25"],e=>e.generator),a.variable(t("bisector")).define("bisector",["d3"],eD),a.variable(t("formatTime")).define("formatTime",["d3"],eR),a.variable(t("periodoInicio")).define("periodoInicio",["intervalo"],eP),a.variable(t("periodoFim")).define("periodoFim",["intervalo"],eF),a.variable(t("filterDate")).define("filterDate",["conf_trilhas","janela","semanas_epidemiologicas","periodoInicio","periodoFim"],e$),a.variable(t("height")).define("height",eB),a.variable(t("sqlSisam")).define("sqlSisam",["municipios","SQLiteDatabaseClient"],eU),a.variable(t("style2")).define("style2",["html"],ej),a.variable(t("municipios")).define("municipios",["FileAttachment"],eG),a.variable(t("semanas_epidemiologicas")).define("semanas_epidemiologicas",["FileAttachment"],eV),a.variable(t("siglas")).define("siglas",eH),a.define("initial data",ez),a.variable(t("mutable data")).define("mutable data",["Mutable","initial data"],(e,t)=>new e(t)),a.variable(t("data")).define("data",["mutable data"],e=>e.generator),a.variable(t("months")).define("months",eq),a.variable(t("agregacoes")).define("agregacoes",["siglas"],eZ),a.variable(t("queryLocalSISAM")).define("queryLocalSISAM",["agregacoes","siglas","municipios"],eW),a.variable(t()).define(["md"],eJ),a.variable(t("objToUrlParam")).define("objToUrlParam",["lz"],eX),a.variable(t("urlParamToObj")).define("urlParamToObj",["lz"],eQ),a.variable(t("getCurrentConf")).define("getCurrentConf",["mutable mp","mutable sel_municipios","intervalo","mutable conf_trilhas"],eY),a.variable(t("defaultConf")).define("defaultConf",eK),a.variable(t("urlParamConf")).define("urlParamConf",["URLSearchParams","urlParamToObj","sessionStorage","defaultConf"],e1),a.variable(t("copyToClipboard")).define("copyToClipboard",e0),a.variable(t("currentHref")).define("currentHref",e2),a.variable(t("copyLinkButton")).define("copyLinkButton",["svg","currentHref","objToUrlParam","getCurrentConf","copyToClipboard"],e5),a.variable(t()).define(["md"],e3),a.variable(t("maxScale")).define("maxScale",e4),a.variable(t("volume_mol")).define("volume_mol",e7),a.variable(t("massa_mol")).define("massa_mol",e6),a.variable(t("padroes")).define("padroes",e8),a.variable(t("fetchPM25")).define("fetchPM25",["indicador","sqlSisam"],e9),a.variable(t("procPM25")).define("procPM25",["semanas_epidemiologicas","indicador","massa_mol","volume_mol"],te),a.variable(t()).define(["md"],tt),a.variable(t("fetchNeoNatal")).define("fetchNeoNatal",["agregacoes","municipios","datasource_sim"],ti),a.variable(t("fetchRelParto")).define("fetchRelParto",["agregacoes","municipios","datasource_sim"],ta),a.variable(t("procNeoNatal")).define("procNeoNatal",["procTOTALUnfiltered","semanas_epidemiologicas"],tn),a.variable(t("procRelParto")).define("procRelParto",["procTOTALUnfiltered","semanas_epidemiologicas"],tr),a.variable(t("procTOTALUnfiltered")).define("procTOTALUnfiltered",["semanas_epidemiologicas"],to),a.variable(t("procFetalUnfiltered")).define("procFetalUnfiltered",["semanas_epidemiologicas"],tl),a.variable(t("fetchTOTAL")).define("fetchTOTAL",["agregacoes","municipios","datasource_sim"],ts),a.variable(t("fetchFetal")).define("fetchFetal",["agregacoes","municipios","datasource_sim"],td),a.variable(t("procTOTAL")).define("procTOTAL",["procTOTALUnfiltered","semanas_epidemiologicas"],tc),a.variable(t("procFetal")).define("procFetal",["procFetalUnfiltered","semanas_epidemiologicas"],tu),a.variable(t()).define(["md"],tp),a.variable(t("Sortable")).define("Sortable",["require"],tf),a.variable(t("d3_5")).define("d3_5",["require"],tm),a.variable(t("slider_snap")).define("slider_snap",["layout","d3_5","DOM","months","semanas_epidemiologicas","mutable sel","d3"],tv),a.variable(t("layout")).define("layout",th),a.variable(t("style_slider")).define("style_slider",["html"],tb);let o=e.module(I);return a.import("menuMortalidade","ampliaMenu",o),a.import("datasource_sim",o),a.variable(t("lz")).define("lz",["require"],tg),a.variable(t("style_menu")).define("style_menu",["html"],tx),a.variable(t("styleMenuMun")).define("styleMenuMun",["html"],ty),a}i.d(t,{Z:function(){return tw}})},5281:function(e,t,i){function a(e){return e`# Amplia Saude - Fonte de Dados e Menu - AGO2022`}function n(e){return e`## Menu Amplia`}function r(e,t){return function(i,a){let n=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M7.87022 11.875L8.27489 11.5813L8.27479 11.5812L8.27437 11.5806L8.27271 11.5783L8.26613 11.5693L8.24029 11.5336L8.14075 11.3965L7.77298 10.8897L6.54497 9.19795C5.5772 7.86508 4.40312 6.24886 3.57783 5.11549C3.4851 4.9864 3.47887 4.82826 3.53937 4.69659C3.59954 4.56564 3.70401 4.5 3.81824 4.5H15.1818C15.296 4.5 15.4005 4.56564 15.4606 4.69659C15.5211 4.82825 15.5149 4.98637 15.4222 5.11546C14.5967 6.24906 13.4246 7.86547 12.4588 9.19836C11.9758 9.86506 11.5443 10.4609 11.2336 10.8901L10.8667 11.397L10.7674 11.5342L10.7416 11.5698L10.7351 11.5788L10.7334 11.5811L10.733 11.5817L10.7329 11.5818L11.1379 11.875L10.7329 11.5819L10.6379 11.7131V11.875V17.125C10.6379 17.363 10.4624 17.5 10.321 17.5H8.68715C8.54577 17.5 8.37022 17.363 8.37022 17.125V11.875V11.7127L8.27493 11.5814L7.87022 11.875Z" stroke="white"/>
<path d="M18.75 11.5C18.75 13.8472 16.8472 15.75 14.5 15.75C12.1528 15.75 10.25 13.8472 10.25 11.5C10.25 9.15279 12.1528 7.25 14.5 7.25C16.8472 7.25 18.75 9.15279 18.75 11.5Z" fill="white" stroke="#151472" stroke-width="0.5"/>
<path d="M16.8126 9.70565C16.9556 9.56262 16.9556 9.33072 16.8126 9.18769C16.6696 9.04466 16.4377 9.04466 16.2946 9.18769L14.5001 10.9822L12.7056 9.18769C12.5626 9.04466 12.3307 9.04466 12.1877 9.18769C12.0447 9.33072 12.0447 9.56262 12.1877 9.70565L13.9822 11.5001L12.1877 13.2946C12.0447 13.4377 12.0447 13.6696 12.1877 13.8126C12.3307 13.9556 12.5626 13.9556 12.7056 13.8126L14.5001 12.0181L16.2946 13.8126C16.4377 13.9556 16.6696 13.9556 16.8126 13.8126C16.9556 13.6696 16.9556 13.4377 16.8126 13.2946L15.0181 11.5001L16.8126 9.70565Z" fill="#151472"/>
</svg>`,r=`<svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8C2 6 2.39956 2 5.9956 2C11.2138 2 8.9923 8 12.9879 8C17.4829 8 16.9835 4 16.9835 2" stroke="#151472" stroke-width="3"/>
</svg>`,o=`<svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 7C1 5 1.39956 1 4.9956 1C10.2138 1 7.9923 7 11.9879 7C16.4829 7 15.9835 3 15.9835 1" stroke="#151472" stroke-width="1.5" stroke-dasharray="2.5 1"/>
</svg>`,l=0,s=Symbol(),d=Symbol(),c=Symbol();function u(n,r,o,u){r=r||"";let p=document.createElement("div"),m={},v={},h={};Object.defineProperty(m,"expression",{get(){let e={};for(let t in m){let i=m[t];"expression"!=t&&(e[i[0]]=i[1])}return e}}),Object.defineProperty(m,"urlids",{get(){let e=[];for(let t in h)e.push(h[t]);return e.join("")}});let b=document.createElement("div"),g=document.createElement("div"),x=document.createElement("div"),y=document.createElement("div"),w=document.createElement("div"),A=document.createElement("div");b.classList.add("menuAbas"),g.classList.add("abas"),y.classList.add("legenda"),x.classList.add("menuCompacto"),w.classList.add("background-1"),A.classList.add("background-2"),b.append(g),b.append(x),b.append(w),b.append(A),x.append(y),b.setAttribute("style",`--corFundoMenu: ${o};`),u&&b.classList.add("principal"),i.forEach((i,n)=>{!function(i,n,o){let u="m"+ ++l,f=document.createElement("div"),b=document.createElement("div"),g=document.createElement("div"),x=document.createElement("div"),y=document.createElement("div"),w=document.createElement("div"),A=document.createElement("div"),C=document.createElement("div"),E=o+2;m[n.varName]="",v[n.varName]="",h[n.varName]="";let _=[];function T(){f[d](),p.dispatchEvent(new t("input"))}f[d]=function(){let t=_.filter(e=>e.checked).map(t=>e(t.value)),i=_.filter(e=>e.checked).map(e=>e[c].expression),a=_.filter(e=>e.checked).map(e=>e[c].urlid);m[n.varName]=[n.attrIndex,i],h[n.varName]=a.join(""),t.length?b.classList.add("selecionado"):b.classList.remove("selecionado");let r=t.join(e(" ou "));y.innerHTML=r,y.setAttribute("title",r),v[n.varName]=r},f.classList.add("itemMenuCompacto"),f.classList.add(n.varName),b.classList.add("titulo"),b.innerHTML=e(n.title),x.classList.add("valoresSelecionados"),y.classList.add("textoValoresSelecionados"),w.classList.add("icone"),w.innerHTML="expand_more",f.append(b),g.append(x),f.append(g),x.append(w),x.append(y),A.classList.add("submenu"),A.style["grid-column"]=E+"/"+(E+1),C.classList.add("itens"),C.classList.add("i"+o),C.classList.add("ABA"+a),A.append(C),f[s]=A,f.style["grid-column-start"]=E,f.addEventListener("click",e=>{if(f.classList.contains("aberto"))f.classList.remove("aberto"),A.classList.remove("aberto");else{let t=f.parentNode.querySelector(".aberto");t&&(t.classList.remove("aberto"),t[s].classList.remove("aberto")),f.classList.add("aberto"),A.classList.add("aberto")}});let S=null;n.itens.forEach((t,i)=>{let a=document.createElement("div"),o=document.createElement("label"),l=document.createElement("input");o.innerHTML=e(t.name),o.setAttribute("for",u+i),l.setAttribute("type",n.input),l.setAttribute("value",t.name),r.indexOf(t.urlid)>=0&&l.setAttribute("checked","checked"),l.setAttribute("id",u+i),l.setAttribute("name","radio"===n.input?u:u+i),l[c]=t,a.classList.add("item"),a.append(l),a.append(o),C.append(a),_.push(l),l.addEventListener("input",e=>{e.stopPropagation(),T()}),"radio"==n.input&&l.addEventListener("click",e=>{if(e.target===S){e.target.checked=!1,S=null,T();return}S=e.target})}),i.append(f),i.append(A),f[d]()}(x,i,n)});let C=p.attachShadow({mode:"open"});return C.append(function(){let e=document.createElement("style");return e.textContent=`                  
          div.menuAbas {
            --corFundoItemAberto: #F4F4F4;
            --corAltaInfluencia: #B90404;
            --corFonte: #151472;
            --corFonteDesabilitada: #aaa;

            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;     
            display: grid;
            grid-template-columns: 1fr;
            width: 100%;
            font-family: "Roboto Condensed";  
            color: var(--corFonte);
            margin: 0px 0px;
          }

          div.menuAbas div.abas {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            font-size: 14px;
            display: grid;
            grid-template-columns: repeat(3,1fr);
            gap: 1px;
          }

          div.menuAbas div.abas div.aba {
            position: relative;
            display: grid;
            background-color: #F4F4F4;
            padding: 8px 0;
            font-weight: 700;
            border-radius: 6px 6px 0 0;
            grid-template-columns: 80px 1fr;
          }

          div.menuAbas div.abas div.aba div.limpaFiltro {
            display: none;
          }

          div.menuAbas div.abas div.aba.selecionada div.limpaFiltro {
            font-size: 10px;
            line-height: 1;
            display: grid;
            column-gap: 3px;
            grid-template-columns: 25px 50px;
            padding-left: 5px;
            grid-column: 1 / 2;
            grid-row: 1 / 2;
          }

          div.menuAbas div.abas div.aba span.tituloAba {
            grid-column: 1 / 3;
            grid-row: 1 / 2;
            text-align: center;
          }

          div.menuAbas div.abas div.aba.desabilitada {
              color: var(--corFonteDesabilitada);
          }

          div.menuAbas div.abas div.aba.selecionada {
            background-color: #E5E5E5;
            box-shadow: 2px -2px 6px rgba(0, 0, 0, 0.25);
            z-index: 2;
          }

          div.menuAbas div.menuCompacto {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            display: grid;
            grid-template-columns: 80px repeat(${i.length},85px) 8px;
            gap: 10px;
            width: fit-content;
          }

          div.menuAbas div.background-1 {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            z-index: 1;
          }

          div.principal div.background-1 {
            box-shadow: 2px -2px 6px rgba(0, 0, 0, 0.25);
          }

          div.menuAbas div.background-2 {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            background-color: var(--corFundoMenu);
            z-index: 3;
          }

          div.menuAbas .legenda {
            display: flex;
            flex-direction: column;
            background-color: var(--corFundoItemAberto);
            padding: 7px 5px 3px 5px;
            font-size: 12px;
            line-height: 1;
            z-index: 4;
          }

          div.menuAbas .legenda .titulo {
            text-align: center;
            min-height: 18px;
          }

          div.menuAbas .legenda .icone {
            padding-top: 5px;
            text-align: center;
          }

          div.itemMenuCompacto {
            display: flex;
            flex-direction: column;
            background-color: var(--corFundoMenu);
            padding: 7px 5px 3px 5px;
            font-size: 12px;
            line-height: 1;
            grid-row-start: 1;
            grid-row-end: 2;  
            border-radius: 5px 5px 0 0;
            transition: background-color 1s, box-shadow 1s;
            z-index: 4;
            justify-content: end;
          }

          div.itemMenuCompacto.aberto {
            box-shadow: 0px 6px 0px 0px #F4F4F4, 2px 0px 4px #00000030;
            background-color: var(--corFundoItemAberto);
          }

          div.itemMenuCompacto div.titulo {
            font-weight: 300;
            text-transform: uppercase;
            text-align: center;
            white-space: nowrap;
          }

          div.itemMenuCompacto div.titulo.selecionado {
            font-weight: 700;
          }

          div.itemMenuCompacto div.valoresSelecionados {
            display: flex;
            flex-direction: row-reverse;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center; 
            line-height: 20px;
          }

          div.itemMenuCompacto div.valoresSelecionados div.textoValoresSelecionados {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;  
          }

          div.itemMenuCompacto div.valoresSelecionados div.icone {
            display: inline;
            font-family: 'Material Icons';
            font-weight: normal;
            font-style: normal;
            font-size: 24px;
            line-height: 0.8;
            letter-spacing: normal;
            text-transform: none;
            padding: 0px;
            white-space: nowrap;
            word-wrap: normal;
            direction: ltr;
            transform: rotate(0deg);
            transition: transform 1s;
            -webkit-font-feature-settings: 'liga';
            -webkit-font-smoothing: antialiased;
          }

          div.itemMenuCompacto.aberto div.valoresSelecionados div.icone {
            transform: rotate(-180deg);
          }

          div.menuCompacto .submenu {
            box-shadow: 2px -2px 4px #00000030;
            position: relative;
            background-color: var(--corFundoItemAberto);
            grid-row-start: 1;
            grid-row-end: 2;
            top: 20px;
            height: 6px;
            opacity: 0;
            transition: top 1s, opacity 1s;
            z-index: 3;
          }

          div.menuCompacto .submenu::after {
            content: "";
            position: absolute;
            display: block;
            background-color: var(--corFundoItemAberto);
            box-shadow: none;
            top: calc(100% - 12px);
            width: 100%;
            height: 12px;
          }

          div.menuCompacto .submenu.aberto {
            top: 100%;
            opacity: 1;
          }

          div.menuCompacto .submenu .itens {
            box-shadow: 2px -2px 4px #00000030;
            position: absolute;
            left: 50%;
            top: 100%;
            transform: translate(-50%,0);
            background-color: var(--corFundoItemAberto);
            padding: 8px 10px 8px 20px;
            border-radius: 6px;
            margin-top: 0px;
            display: flex;
            width: fit-content;
            gap: 25px;
          }

          div.menuCompacto .submenu.aberto .itens {
          }

          div.menuCompacto .submenu .itens.i0.ABA0 {
            transform: translate(-30%,0);
          }

          div.menuCompacto .submenu .itens.i1.ABA0 {
            left: 50%;
            transform: translate(-20%,0);
          }

          div.menuCompacto .submenu .itens.i10.ABA0 {
            transform: translate(-60%,0);
          }

          div.menuCompacto .submenu .itens.i12.ABA0 {
            transform: translate(-80%,0);
          }

          div.menuCompacto .submenu .itens.i0.ABA1 {
            transform: translate(-30%,0);
          }

          div.menuCompacto .submenu .itens.i1.ABA1 {
            left: 50%;
            transform: translate(-20%,0);
          }

          div.menuCompacto .submenu .itens.i10.ABA1 {
            transform: translate(-60%,0);
          }

          div.menuCompacto .submenu .itens.i12.ABA1 {
            transform: translate(-80%,0);
          }

          div.menuCompacto .submenu .itens.i0.ABA2 {
            transform: translate(-30%,0);
          }

          div.menuCompacto .submenu .itens.i3.ABA2 {
            transform: translate(-30%,0);
          }

          div.menuCompacto .submenu .itens .item {
            display: flex;
            align-items: center;
            white-space: nowrap;
            gap: 6px;
          }

          div.menuCompacto .submenu .itens .item label {
            font-size: 12px;
          }

          div.menuCompacto .submenu .itens .item input {
            -webkit-appearance: none;
            appearance: none;
            margin: 0px;
            width: 17px;
            height: 17px;
            border: 3px var(--corFonte) solid;
          }

          div.menuCompacto .submenu .itens .item input[type=radio] {
            border-radius: 50%;
          }

          div.menuCompacto .submenu .itens .item input:checked {
            background-color: var(--corFonte);  
          }

          div.menuCompacto .submenu .itens .item input:focus {
            outline: 0;  
          }

          div.menuCompacto .submenu .itens .item input[type=checkbox] {
            border-radius: 2px;
          }  
      `,e}()),C.append(b),p.limpa=function(){let e=x.querySelectorAll("input:checked");for(let i=0;i<e.length;i++)e[i].checked=!1;let a=x.querySelectorAll(".itemMenuCompacto");for(let n=0;n<a.length;n++)a[n][d]();p.dispatchEvent(new t("input"))},p.cloneMenu=function(){let e=x.querySelectorAll("input:checked"),t=f(n),i=t.shadowRoot.querySelectorAll("input");for(let a=0;a<e.length;a++)for(let r=0;r<i.length;r++)e[a][c]===i[r][c]&&(i[r].checked=!0);let o=t.shadowRoot.querySelectorAll(".itemMenuCompacto");for(let l=0;l<o.length;l++)o[l][d]();return t},Object.defineProperty(p,"value",{get:()=>m}),Object.defineProperty(p,"texto",{get:()=>v}),[p,g,y]}function p(t,i,r){let o,l;if(o=document.createElement("div"),(l=document.createElement("span")).classList.add("tituloAba"),l.innerHTML=e(i),o.classList.add("aba"),o.appendChild(l),a===r){let s,d,c;o.classList.add("selecionada"),(c=document.createElement("div")).classList.add("limpaFiltro"),s=document.createElement("span"),d=document.createElement("span"),s.innerHTML=n,d.innerHTML=e("LIMPAR<br>FILTROS"),c.appendChild(s),c.appendChild(d),o.appendChild(c),c.addEventListener("click",e=>{t.limpa(),t.dispatchEvent(new CustomEvent("limparFiltros",{detail:{index:r+1}}))})}else o.addEventListener("click",e=>{t.dispatchEvent(new CustomEvent("aba",{detail:{index:r+1}}))});return o}function f(e,t,a){let[n,r,l]=u(null,t,a,!1),s=n.shadowRoot.querySelector(".menuCompacto");s.style["grid-template-columns"]=`110px repeat(${i.length},84px) 0px`,s.style.gap="2px",l.style["background-color"]="#ffffff66",l.style.color="var(--corFonte)",l.style["border-radius"]="0px 0px 0px 8px";let d=document.createElement("div"),c=document.createElement("div");return d.classList.add("titulo"),d.innerHTML="&nbsp",c.classList.add("icone"),c.innerHTML=o,l.append(d),l.append(c),n}return{principal:function(t){let[i,a,n]=u(null,t,"#E5E5E5",!0);a.append(p(i,"NASCIDOS VIVOS",0)),a.append(p(i,"CARACTER\xcdSTICAS DO NASCIMENTO",1)),a.append(p(i,"MORTALIDADE PERINATAL E INFANTIL",2));let o=document.createElement("div"),l=document.createElement("div");return o.classList.add("titulo"),l.classList.add("icone"),l.innerHTML=r,o.innerHTML=e("CONSULTA<br>PRINCIPAL"),n.append(o),n.append(l),i},local:f}}}function o(e){return e`### Nascidos Vivos`}function l(e){return e.principal()}function s(){return[{title:"PESO AO<br>NASCER",varName:"PESO",ordinal:!0,input:"checkbox",attrIndex:0,itens:[{name:"Normal",style:[],expression:[3],urlid:"A"},{name:"Baixo peso",style:["alta-influencia"],expression:[2],urlid:"B"},{name:"Muito baixo peso",style:["alta-influencia"],expression:[1],urlid:"C"},{name:"Ignorado",style:[],expression:[0],urlid:"D"}]},{title:"IDADE<br>GESTACIONAL",varName:"IDADE_GESTACIONAL",ordinal:!0,input:"checkbox",attrIndex:1,itens:[{name:"P\xf3s-termo",style:[],expression:[7],urlid:"E"},{name:"A termo tardio",style:[],expression:[6],urlid:"F"},{name:"A termo completo",style:[],expression:[5],urlid:"G"},{name:"A termo precoce",style:[],expression:[4],urlid:"H"},{name:"Pr\xe9-termo moderado",style:["alta-influencia"],expression:[3],urlid:"I"},{name:"Muito pr\xe9-termo",style:["alta-influencia"],expression:[2],urlid:"J"},{name:"Pr\xe9-termo extremo",style:["alta-influencia"],expression:[1],urlid:"K"},{name:"Ignorado",style:[],expression:[0],urlid:"L"}]},{title:"ADEQUA\xc7\xc3O \xc0<br>IDADE GESTAC.",varName:"ADEQ_IDADE_GESTACIONAL",ordinal:!0,input:"checkbox",attrIndex:2,itens:[{name:"GIG",style:[],expression:[3],urlid:"M"},{name:"AIG",style:["alta-influencia"],expression:[2],urlid:"N"},{name:"PIG",style:["alta-influencia"],expression:[1],urlid:"O"},{name:"Ignorado",style:[],expression:[0],urlid:"P"}]},{title:"SEXO",varName:"SEXO",ordinal:!1,input:"checkbox",attrIndex:3,itens:[{name:"Feminino",style:[],expression:[2],urlid:"Q"},{name:"Masculino",style:[],expression:[1],urlid:"R"},{name:"Indeterminado",style:[],expression:[0],urlid:"S"}]},{title:"ANOMALIA<br>CONG\xcaNITA",varName:"ANOMAL_CONGENITA",ordinal:!1,input:"radio",attrIndex:4,itens:[{name:"N\xe3o",style:[],expression:[2],urlid:"T"},{name:"Sim",style:["alta-influencia"],expression:[1],urlid:"U"},]},{title:"RA\xc7A/COR<br>DA M\xc3E",varName:"RACA_COR_MAE",ordinal:!1,input:"checkbox",attrIndex:5,itens:[{name:"Branca",style:[],expression:[1],urlid:"V"},{name:"Preta",style:[],expression:[2],urlid:"W"},{name:"Parda",style:[],expression:[4],urlid:"X"},{name:"Outros",style:[],expression:[3,4,5],urlid:"Y"},{name:"Ignorado",style:[],expression:[0],urlid:"Z"}]},{title:"ESCOLARIDADE<br>DA M\xc3E",varName:"ESCOLARIDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:6,itens:[{name:"Superior",style:[],expression:[7],urlid:"a"},{name:"Ensino m\xe9dio",style:[],expression:[6],urlid:"b"},{name:"Fundamental completo",style:[],expression:[5],urlid:"c"},{name:"Fundamental incompleto",style:[],expression:[4,3,2],urlid:"d"},{name:"Sem",style:[],expression:[1],urlid:"e"},{name:"Ignorado",style:[],expression:[0],urlid:"f"}]},{title:"ESTADO CIVIL<br>DA M\xc3E",varName:"ESTADO_CIVIL_MAE",ordinal:!1,input:"checkbox",attrIndex:7,itens:[{name:"Solteira",style:[],expression:[1],urlid:"g"},{name:"Casada ou uni\xe3o est\xe1vel",style:[],expression:[2],urlid:"h"},{name:"Vi\xfava",style:[],expression:[3],urlid:"i"},{name:"Separada ou divorcidada",style:[],expression:[4],urlid:"j"},{name:"Ignorado",style:[],expression:[0],urlid:"k"}]},{title:"IDADE<br>DA M\xc3E",varName:"IDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:8,itens:[{name:"10-14",style:[],expression:[1],urlid:"l"},{name:"15-19",style:[],expression:[2],urlid:"m"},{name:"20-29",style:[],expression:[3],urlid:"n"},{name:"30-39",style:[],expression:[4],urlid:"o"},{name:"40-49",style:["alta-influencia"],expression:[5],urlid:"p"},{name:"50+",style:["alta-influencia"],expression:[6],urlid:"q"},{name:"Ignorado",style:[],expression:[0],urlid:"r"}]},{title:"CONSULTAS<BR>DE PR\xc9 NATAL",varName:"CONSULTAS",ordinal:!0,input:"checkbox",attrIndex:9,itens:[{name:"7+",style:[],expression:[4],urlid:"s"},{name:"4 a 6",style:[],expression:[3],urlid:"t"},{name:"1 a 3",style:["alta-influencia"],expression:[2],urlid:"u"},{name:"0",style:["alta-influencia"],expression:[1],urlid:"v"},{name:"Ignorado",style:[],expression:[0],urlid:"w"}]},{title:"TIPO<br>PARTO",varName:"PARTO",ordinal:!1,input:"checkbox",attrIndex:10,itens:[{name:"Vaginal",style:[],expression:[1],urlid:"x"},{name:"Ces\xe1rio",style:[],expression:[2],urlid:"y"},{name:"Indeterminado",style:[],expression:[0],urlid:"z"}]},{title:"TRAB PARTO<br>INDUZIDO",varName:"STTRABPART",ordinal:!1,input:"radio",attrIndex:11,itens:[{name:"SIM",style:[],expression:[1],urlid:"9"},{name:"N\xc3O",style:[],expression:[2],urlid:"8"},]},{title:"ADEQUA\xc7\xc3O<br>PR\xc9 NATAL",varName:"KOTELCHUCK",ordinal:!0,input:"checkbox",attrIndex:12,itens:[{name:"N\xe3o fez",style:["alta-influencia"],expression:[1],urlid:"7"},{name:"Inadequado",style:["alta-influencia"],expression:[2],urlid:"6"},{name:"Intermedi\xe1rio",style:[],expression:[3],urlid:"5"},{name:"Adequado",style:[],expression:[4],urlid:"4"},{name:"Mais que adequado",style:[],expression:[5],urlid:"3"},{name:"Ignorado",style:[],expression:[0],urlid:"2"},]},]}function d(e,t){return e(t,0)}function c(e){return e`### Características do Nascimento`}function u(e){return e.principal()}function p(){return[{title:"PESO AO<br>NASCER",varName:"PESO",ordinal:!0,input:"checkbox",attrIndex:0,itens:[{name:"Normal",style:[],expression:[3],urlid:"A"},{name:"Baixo peso",style:["alta-influencia"],expression:[2],urlid:"B"},{name:"Muito baixo peso",style:["alta-influencia"],expression:[1],urlid:"C"},{name:"Ignorado",style:[],expression:[0],urlid:"D"}]},{title:"IDADE<br>GESTACIONAL",varName:"IDADE_GESTACIONAL",ordinal:!0,input:"checkbox",attrIndex:1,itens:[{name:"P\xf3s-termo",style:[],expression:[7],urlid:"E"},{name:"A termo tardio",style:[],expression:[6],urlid:"F"},{name:"A termo completo",style:[],expression:[5],urlid:"G"},{name:"A termo precoce",style:[],expression:[4],urlid:"H"},{name:"Pr\xe9-termo tardio",style:["alta-influencia"],expression:[3],urlid:"I"},{name:"Pr\xe9-termo moderado",style:["alta-influencia"],expression:[2],urlid:"J"},{name:"Muito pr\xe9-termo",style:["alta-influencia"],expression:[1],urlid:"K"},{name:"Ignorado",style:[],expression:[0],urlid:"L"}]},{title:"ADEQUA\xc7\xc3O \xc0<br>IDADE GESTAC.",varName:"ADEQ_IDADE_GESTACIONAL",ordinal:!0,input:"checkbox",attrIndex:2,itens:[{name:"GIG",style:[],expression:[3],urlid:"M"},{name:"AIG",style:["alta-influencia"],expression:[2],urlid:"N"},{name:"PIG",style:["alta-influencia"],expression:[1],urlid:"O"},{name:"Ignorado",style:[],expression:[0],urlid:"P"}]},{title:"SEXO",varName:"SEXO",ordinal:!1,input:"checkbox",attrIndex:3,itens:[{name:"Feminino",style:[],expression:[2],urlid:"Q"},{name:"Masculino",style:[],expression:[1],urlid:"R"},{name:"Indeterminado",style:[],expression:[0],urlid:"S"}]},{title:"ANOMALIA<br>CONG\xcaNITA",varName:"ANOMAL_CONGENITA",ordinal:!1,input:"radio",attrIndex:4,itens:[{name:"N\xe3o",style:[],expression:[2],urlid:"T"},{name:"Sim",style:["alta-influencia"],expression:[1],urlid:"U"},]},{title:"RA\xc7A/COR<br>DA M\xc3E",varName:"RACA_COR_MAE",ordinal:!1,input:"checkbox",attrIndex:5,itens:[{name:"Branca",style:[],expression:[1],urlid:"V"},{name:"Preta",style:[],expression:[2],urlid:"W"},{name:"Parda",style:[],expression:[4],urlid:"X"},{name:"Outros",style:[],expression:[3,4,5],urlid:"Y"},{name:"Ignorado",style:[],expression:[0],urlid:"Z"}]},{title:"ESCOLARIDADE<br>DA M\xc3E",varName:"ESCOLARIDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:6,itens:[{name:"Superior",style:[],expression:[7],urlid:"a"},{name:"Ensino m\xe9dio",style:[],expression:[6],urlid:"b"},{name:"Fundamental completo",style:[],expression:[5],urlid:"c"},{name:"Fundamental incompleto",style:[],expression:[4,3,2],urlid:"d"},{name:"Sem",style:[],expression:[1],urlid:"e"},{name:"Ignorado",style:[],expression:[0],urlid:"f"}]},{title:"ESTADO CIVIL<br>DA M\xc3E",varName:"ESTADO_CIVIL_MAE",ordinal:!1,input:"checkbox",attrIndex:7,itens:[{name:"Solteira",style:[],expression:[1],urlid:"g"},{name:"Casada ou uni\xe3o est\xe1vel",style:[],expression:[2],urlid:"h"},{name:"Vi\xfava",style:[],expression:[3],urlid:"i"},{name:"Separada ou divorcidada",style:[],expression:[4],urlid:"j"},{name:"Ignorado",style:[],expression:[0],urlid:"k"}]},{title:"IDADE<br>DA M\xc3E",varName:"IDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:8,itens:[{name:"10-14",style:[],expression:[1],urlid:"l"},{name:"15-19",style:[],expression:[2],urlid:"m"},{name:"20-29",style:[],expression:[3],urlid:"n"},{name:"30-39",style:[],expression:[4],urlid:"o"},{name:"40-49",style:["alta-influencia"],expression:[5],urlid:"p"},{name:"50+",style:["alta-influencia"],expression:[6],urlid:"q"},{name:"Ignorado",style:[],expression:[0],urlid:"r"}]},{title:"APGAR<BR>5\xba MINUTO",varName:"APGAR5",ordinal:!0,input:"checkbox",attrIndex:13,itens:[{name:"Boa vitalidade",style:[],expression:[3],urlid:"s"},{name:"Asfixia moderada",style:["alta-influencia"],expression:[2],urlid:"t"},{name:"Asfixia grave",style:["alta-influencia"],expression:[1],urlid:"u"},{name:"Ignorado",style:[],expression:[0],urlid:"v"}]},{title:"TIPO<br>PARTO",varName:"PARTO",ordinal:!1,input:"checkbox",attrIndex:10,itens:[{name:"Vaginal",style:[],expression:[1],urlid:"w"},{name:"Ces\xe1rio",style:[],expression:[2],urlid:"x"},{name:"Indeterminado",style:[],expression:[0],urlid:"y"}]},{title:"TRAB PARTO<br>INDUZIDO",varName:"STTRABPART",ordinal:!1,input:"radio",attrIndex:11,itens:[{name:"SIM",style:[],expression:[1],urlid:"z"},{name:"N\xc3O",style:[],expression:[2],urlid:"9"},]},{title:"ADEQUA\xc7\xc3O<br>PR\xc9 NATAL",varName:"KOTELCHUCK",ordinal:!0,input:"checkbox",attrIndex:12,itens:[{name:"N\xe3o fez",style:["alta-influencia"],expression:[1],urlid:"8"},{name:"Inadequado",style:["alta-influencia"],expression:[2],urlid:"7"},{name:"Intermedi\xe1rio",style:[],expression:[3],urlid:"6"},{name:"Adequado",style:[],expression:[4],urlid:"5"},{name:"Mais que adequado",style:[],expression:[5],urlid:"4"},{name:"Ignorado",style:[],expression:[0],urlid:"3"},]},]}function f(e,t){return e(t,1)}function m(e){return e`### Mortalidade Perinatal e infantil`}function v(e){return e.principal()}function h(){return[{title:"PESO AO<br>NASCER",varName:"PESO",ordinal:!0,input:"checkbox",attrIndex:1,itens:[{name:"Normal",style:[],expression:[3],urlid:"A"},{name:"Baixo peso",style:["alta-influencia"],expression:[2],urlid:"B"},{name:"Muito baixo peso",style:["alta-influencia"],expression:[1],urlid:"C"},{name:"Ignorado.",style:[],expression:[0],urlid:"D"}]},{title:"SEXO",varName:"SEXO",ordinal:!1,input:"checkbox",attrIndex:2,itens:[{name:"Feminino",style:[],expression:[2],urlid:"E"},{name:"Masculino",style:[],expression:[1],urlid:"F"},{name:"Indeterminado",style:[],expression:[0],urlid:"G"}]},{title:"RA\xc7A/COR",varName:"RACA_COR",ordinal:!1,input:"checkbox",attrIndex:3,itens:[{name:"Branca",style:[],expression:[1],urlid:"H"},{name:"Preta",style:[],expression:[2],urlid:"I"},{name:"Parda",style:[],expression:[4],urlid:"J"},{name:"Outros",style:[],expression:[3,4,5],urlid:"K"},{name:"Ignorado",style:[],expression:[0],urlid:"L"}]},{title:"ESCOLARIDADE<br>DA M\xc3E",varName:"ESCOLARIDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:4,itens:[{name:"Superior",style:[],expression:[7],urlid:"M"},{name:"Ensino m\xe9dio",style:[],expression:[6],urlid:"N"},{name:"Fundamental completo",style:[],expression:[5],urlid:"O"},{name:"Fundamental incompleto",style:[],expression:[4,3,2],urlid:"P"},{name:"Sem",style:[],expression:[1],urlid:"Q"},{name:"Ignorado",style:[],expression:[0],urlid:"R"}]},{title:"IDADE<br>DA M\xc3E",varName:"IDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:5,itens:[{name:"10-14",style:[],expression:[1],urlid:"S"},{name:"15-19",style:[],expression:[2],urlid:"T"},{name:"20-29",style:[],expression:[3],urlid:"U"},{name:"30-39",style:[],expression:[4],urlid:"V"},{name:"40-49",style:["alta-influencia"],expression:[5],urlid:"W"},{name:"50+",style:["alta-influencia"],expression:[6],urlid:"X"},{name:"Ignorado",style:[],expression:[0],urlid:"Y"}]},{title:"TIPO<br>PARTO",varName:"PARTO",ordinal:!1,input:"checkbox",attrIndex:6,itens:[{name:"Vaginal",style:[],expression:[1],urlid:"Z"},{name:"Ces\xe1rio",style:[],expression:[2],urlid:"a"},{name:"Indeterminado",style:[],expression:[0],urlid:"b"}]},]}function b(e,t){return e(t,2)}function g(e){return e`## DataSources`}function x(){return function(){let e="https://storage.googleapis.com/amplia/ufs2/",t=(e,t)=>e.data<t.data?-1:e.data>t.data?1:0,i=[2,3,2,2,2,3,3,3,3,3,2,2],a=[3,2,2],n=null;async function r(){return null!=n?n:await fetch(`${e}index.dat`).then(e=>e.arrayBuffer()).then(e=>n=new DataView(e))}async function o(e){let t=await r(),i=t.buffer.byteLength/12,a=0,n=i-1;for(;a<=n;){let o=Math.floor((a+n)/2),l=t.getUint32(12*o);if(e==l)return[t.getUint32(12*o+4),t.getUint32(12*o+8)];e<l?n=o-1:a=o+1}return null}function l(e,t,n,r){r=r||{};let o=(t+n)*11,l=e.getUint32(o).toString();l=l.substring(0,4)+"-"+l.substring(4,6)+"-"+l.substring(6);let s=e.getUint16(o+4),d=e.getUint32(o+6),c=e.getUint8(o+10),u=0,p=[];for(let f=0;f<i.length;f++){let m=((1<<i[f])-1<<u&d)>>u;p.push(m),u+=i[f]}u=0;for(let v=0;v<a.length;v++){let h=((1<<a[v])-1<<u&c)>>u;p.push(h),u+=a[v]}for(let b=0;b<p.length;b++){let g=p[b],x=r[b],y=!0;if(x&&x.length){y=!1;for(let w=0;w<x.length&&!y;w++)y=x[w].includes(g)}if(!y)return[l]}return[l,s,...p]}function s(t){let i=t;return i>1e5&&(i=Math.floor(t/1e4)),fetch(`${e}uf${i}.dat`).then(e=>e.arrayBuffer()).then(e=>new DataView(e)).then(async e=>{let i,a;return t>1e5?[a,i]=await o(t):(a=0,i=e.buffer.byteLength/11),[e,a,i]})}function d(e){let t={};if(e)for(let i in e)t[i]=e[i];return t}return{fetchTotal:function(e,i){return i=d(i),s(e).then(([e,a,n])=>(function(e,a,n){let r=new Map;for(let o=0;o<n;o++){let s=l(e,a,o,i),d=r.get(s[0]);d?d[1]++:(d=[0,1],r.set(s[0],d)),s.length>1&&d[0]++}let c=[],u=[];for(let[p,f]of r)c.push({data:p,valor:f[0]}),u.push({data:p,valor:f[1]});return c.sort(t),u.sort(t),[c,u]})(e,a,n))},fetchPIG:function(e,i){return i=d(i),s(e).then(([e,a,n])=>(function(e,a,n){let r=new Map;for(let o=0;o<n;o++){let s=l(e,a,o,i),d=r.get(s[0]);d?d[3]++:(d=[0,0,0,1],r.set(s[0],d)),s.length>1&&(1==s[4]?d[0]++:2==s[4]?d[1]++:3==s[4]&&d[2]++)}let c=[],u=[];for(let[p,f]of r)(f[0]||f[1]||f[2])&&(c.push({data:p,ig:"PEQUENO",total:f[0]}),c.push({data:p,ig:"ADEQUADO",total:f[1]}),c.push({data:p,ig:"GRANDE",total:f[2]})),u.push({data:p,valor:f[3]});return c.sort(t),u.sort(t),[c,u]})(e,a,n))},fetchPeso:function(e,i){return i=d(i),s(e).then(([e,a,n])=>(function(e,a,n){let r=new Map;for(let o=0;o<n;o++){let s=l(e,a,o,i);if(s.length>1){let d=r.get(s[0]);d?(d[0]+=s[1],d[1]++):(d=[s[1],1],r.set(s[0],d))}}let c=[];for(let[u,p]of r){let f={data:u,valor:p[0]/p[1],total:p[1]};c.push(f)}return c.sort(t),c})(e,a,n))},fetchRobson:function(e,i){return i=d(i),s(e).then(([e,a,n])=>(function(e,a,n){let r=new Map;for(let o=0;o<n;o++){let s=l(e,a,o,i),d=r.get(s[0]);d?d[3]++:(d=[0,0,0,1],r.set(s[0],d)),s.length>1&&(1==s[16]?d[0]++:2==s[16]?d[1]++:3==s[16]&&d[2]++)}let c=[],u=[];for(let[p,f]of r)(f[0]||f[1]||f[2])&&(c.push({data:p,robson:"Robson1a4",total:f[0]}),c.push({data:p,robson:"Robson5",total:f[1]}),c.push({data:p,robson:"Robson6a10",total:f[2]})),u.push({data:p,valor:f[3]});return c.sort(t),u.sort(t),[c,u]})(e,a,n))}}}()}function y(){return function(){let e="https://storage.googleapis.com/amplia/sim-ufs/",t=(e,t)=>e.data<t.data?-1:e.data>t.data?1:0,i=[2,2,2,3,3,3,2,2],a=null;async function n(){return null!=a?a:await fetch(`${e}index.dat`).then(e=>e.arrayBuffer()).then(e=>a=new DataView(e))}async function r(e){let t=await n(),i=t.buffer.byteLength/12,a=0,r=i-1;for(;a<=r;){let o=Math.floor((a+r)/2),l=t.getUint32(12*o);if(e==l)return[t.getUint32(12*o+4),t.getUint32(12*o+8)];e<l?r=o-1:a=o+1}return null}function o(e,t,a,n){n=n||{};let r=(t+a)*10,o=e.getUint32(r).toString();o=o.substring(0,4)+"-"+o.substring(4,6)+"-"+o.substring(6);let l=e.getUint16(r+4),s=e.getUint32(r+6),d=0,c=[];for(let u=0;u<i.length;u++){let p=((1<<i[u])-1<<d&s)>>d;c.push(p),d+=i[u]}for(let f=0;f<c.length;f++){let m=c[f],v=n[f],h=!0;if(v&&v.length){h=!1;for(let b=0;b<v.length&&!h;b++)h=v[b].includes(m)}if(!h)return[o]}return[o,l,...c]}function l(t){let i=t;return i>1e5&&(i=Math.floor(t/1e4)),fetch(`${e}uf${i}.dat`).then(e=>e.arrayBuffer()).then(e=>new DataView(e)).then(async e=>{let i,a;return t>1e5?[a,i]=await r(t):(a=0,i=e.buffer.byteLength/10),[e,a,i]})}function s(e){let t={};if(e)for(let i in e)t[i]=e[i];return t}return{fetchNeoNatal:function(e,i){return i=s(i),l(e).then(([e,a,n])=>(function(e,a,n){let r=new Map;for(let l=0;l<n;l++){let s=o(e,a,l,i),d=r.get(s[0]);d?d[3]++:(d=[0,0,0,1],r.set(s[0],d)),s.length>1&&(1==s[2]?d[0]++:2==s[2]?d[1]++:3==s[2]&&d[2]++)}let c=[],u=[];for(let[p,f]of r)(f[0]||f[1]||f[2])&&(c.push({data:p,neonatal:"PRECOCE",total:f[0]}),c.push({data:p,neonatal:"TARDIO",total:f[1]}),c.push({data:p,neonatal:"NEOTOTAL",total:f[0]+f[1]}),c.push({data:p,neonatal:"POS",total:f[2]})),u.push({data:p,valor:f[3]});return c.sort(t),u.sort(t),[c,u]})(e,a,n))},fetchFetal:function(e,i){return(i=s(i))[3]=[],l(e).then(([e,a,n])=>(function(e,a,n){let r=new Map;for(let l=0;l<n;l++){let s=o(e,a,l,i),d=r.get(s[0]);d?d[3]++:(d=[0,0,0,1],r.set(s[0],d)),s.length>1&&0==s[2]&&d[0]++}let c=[],u=[];for(let[p,f]of r)(f[0]||f[1]||f[2])&&c.push({data:p,valor:f[0]}),u.push({data:p,valor:f[3]});return c.sort(t),u.sort(t),[c,u]})(e,a,n))},fetchRelParto:function(e,i){return i=s(i),l(e).then(([e,a,n])=>(function(e,a,n){let r=new Map;for(let l=0;l<n;l++){let s=o(e,a,l,i),d=r.get(s[0]);d?d[3]++:(d=[0,0,0,1],r.set(s[0],d)),s.length>1&&(1==s[9]?d[0]++:2==s[9]?d[1]++:3==s[9]&&d[2]++)}let c=[],u=[];for(let[p,f]of r)(f[0]||f[1]||f[2])&&(c.push({data:p,relparto:"ANTES",total:f[0]}),c.push({data:p,relparto:"DURANTE",total:f[1]}),c.push({data:p,relparto:"DEPOIS",total:f[2]})),u.push({data:p,valor:f[3]});return c.sort(t),u.sort(t),[c,u]})(e,a,n))},fetchTotal:function(e,i){return i=s(i),l(e).then(([e,a,n])=>(function(e,a,n){let r=new Map;for(let l=0;l<n;l++){let s=o(e,a,l,i),d=r.get(s[0]);d?d[1]++:(d=[0,1],r.set(s[0],d)),s.length>1&&d[0]++}let c=[],u=[];for(let[p,f]of r)c.push({data:p,valor:f[0]}),u.push({data:p,valor:f[1]});return c.sort(t),u.sort(t),[c,u]})(e,a,n))}}}()}function w(e){return e`### Alguns testes com os datasources`}function A(e,t){return e.fetchRobson(11,t.expression)}function C(e,t){return e.fetchPeso(11,t.expression)}function E(e){return e("municipios2.csv").csv()}function _(e,t){return e.fetchRelParto(35,t.expression)}function T(e){return e.expression}function S(e,t){return e.fetchFetal(35,t.expression)}function O(){return new Set}function M(e){return function(t){return e.add(t),t}}function k(e){return e.html`<style>
  @import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap);
  @import url(https://fonts.googleapis.com/icon?family=Material+Icons);    
</style>`}function I(e,t){let I=e.module(),L=new Map([["municipios2.csv",{url:new i.U(i(5156)),mimeType:"text/csv",toString:function(){return this.url}}]]);return I.builtin("FileAttachment",e.fileAttachments(e=>L.get(e))),I.variable(t()).define(["md"],a),I.variable(t()).define(["md"],n),I.variable(t("ampliaMenu")).define("ampliaMenu",["TL","Event"],r),I.variable(t()).define(["md"],o),I.variable(t("mp")).define("mp",["menuNascidosVivos"],l),I.variable(t("dadosMenuNascidosVivos")).define("dadosMenuNascidosVivos",s),I.variable(t("menuNascidosVivos")).define("menuNascidosVivos",["ampliaMenu","dadosMenuNascidosVivos"],d),I.variable(t()).define(["md"],c),I.variable(t("viewof cn")).define("viewof cn",["menuCaracteristicasNascimento"],u),I.variable(t("cn")).define("cn",["Generators","viewof cn"],(e,t)=>e.input(t)),I.variable(t("dadosMenuCaracteristicasNascimento")).define("dadosMenuCaracteristicasNascimento",p),I.variable(t("menuCaracteristicasNascimento")).define("menuCaracteristicasNascimento",["ampliaMenu","dadosMenuCaracteristicasNascimento"],f),I.variable(t()).define(["md"],m),I.variable(t("viewof mpi")).define("viewof mpi",["menuMortalidade"],v),I.variable(t("mpi")).define("mpi",["Generators","viewof mpi"],(e,t)=>e.input(t)),I.variable(t("dadosMenuMortalidade")).define("dadosMenuMortalidade",h),I.variable(t("menuMortalidade")).define("menuMortalidade",["ampliaMenu","dadosMenuMortalidade"],b),I.variable(t()).define(["md"],g),I.variable(t("datasource")).define("datasource",x),I.variable(t("datasource_sim")).define("datasource_sim",y),I.variable(t()).define(["md"],w),I.variable(t()).define(["datasource","cn"],A),I.variable(t()).define(["datasource","cn"],C),I.variable(t("municipios2")).define("municipios2",["FileAttachment"],E),I.variable(t()).define(["datasource_sim","mpi"],_),I.variable(t()).define(["mpi"],T),I.variable(t()).define(["datasource_sim","mpi"],S),I.variable(t("terms")).define("terms",O),I.variable(t("TL")).define("TL",["terms"],M),I.variable(t()).define(["htl"],k),I}function L(e){return e`# Amplia Saúde - Trilhas Exploratórias - v5.0 - Nascidos Vivos`}function N(e,t){return e`
    <style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

.cabecalho{
  display:inline-block;
  width:100%;
  border-bottom:1px solid #9C9C9C;
}

.cabecalho-conteudo{
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 6px;
}
      
.titulo{
   font-family:"Open Sans";
   font-weight:700;  
   font-size:24px;
   color: #151472;
}
      
.subtitulo{
   font-family:"Open Sans";
   font-weight:400;  
   font-size:14px;
   margin-left:20px;
   color: #151472;
}
      
.cabecalho-novo:after{
    content: '';
    display: inline-block; /* Adicionando essa linha, */
    width: 100%; /* essa também */
    height: 0; /* e essa foi a última */
}
    </style>
<div class="cabecalho">
<img class="cabecalho-conteudo" src="https://github.com/ampliasaude/ampliasaude.github.io/raw/main/AmpliaSaude-horizontal.png" height="53px">
</div>
    
<div class="cabecalho-novo" style="display:inline-block; width:100%; text-align:justify;">
    
 <div style="margin-bottom:16px; margin-top:16px; display:inline-block;">
   <span class="titulo">Trilhas Exploratórias<span>
   <span class="subtitulo">Saúde materna e neonatal e poluição ambiental por semana de concepção</span>
</div>
     
     <div style="justify-content:space-between; display:inline-block;">
     
     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Capturar imagem</title>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M7 9L4 13H16.5L13.5 7L11.5 9.5L9.5 12L7 9Z" fill="white" stroke="white"/>
</svg>
     
<svg style="margin-right: 28px" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Obter dados</title>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M9.64645 12.3536C9.84171 12.5488 10.1583 12.5488 10.3536 12.3536L13.5355 9.17157C13.7308 8.97631 13.7308 8.65973 13.5355 8.46447C13.3403 8.2692 13.0237 8.2692 12.8284 8.46447L10 11.2929L7.17157 8.46447C6.97631 8.2692 6.65973 8.2692 6.46447 8.46447C6.2692 8.65973 6.2692 8.97631 6.46447 9.17157L9.64645 12.3536ZM10.5 12L10.5 5L9.5 5L9.5 12L10.5 12Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 10V14C4 14.5523 4.44772 15 5 15H15C15.5523 15 16 14.5523 16 14V10H15V14H5L5 10H4Z" fill="white"/>
</svg>

${t}

<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Enviar via email</title>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M16 7.125C16 6.50625 15.46 6 14.8 6H5.2C4.54 6 4 6.50625 4 7.125V13.875C4 14.4937 4.54 15 5.2 15H14.8C15.46 15 16 14.4937 16 13.875V7.125ZM14.8 7.125L10 9.9375L5.2 7.125H14.8ZM14.8 13.875H5.2V8.25L10 11.0625L14.8 8.25V13.875Z" fill="white"/>
</svg>

<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Compartilhar no LinkedIn</title>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M7.075 6.97826C7.075 7.51865 6.6125 7.95652 6.04167 7.95652C5.47083 7.95652 5.00833 7.51865 5.00833 6.97826C5.00833 6.43826 5.47083 6 6.04167 6C6.6125 6 7.075 6.43826 7.075 6.97826ZM7.08333 8.73913H5V15H7.08333V8.73913ZM10.4092 8.73913H8.33917V15H10.4096V11.7134C10.4096 9.88604 12.9217 9.73657 12.9217 11.7134V15H15V11.0357C15 7.95222 11.2825 8.06452 10.4092 9.58239V8.73913Z" fill="white"/>
</svg>
     
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Compartilhar no Facebook</title>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M8.25 8.33333H7V10H8.25V15H10.3333V10H11.8508L12 8.33333H10.3333V7.63875C10.3333 7.24083 10.4133 7.08333 10.7979 7.08333H12V5H10.4133C8.915 5 8.25 5.65958 8.25 6.92292V8.33333Z" fill="white"/>
</svg>

<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Compartilhar no Twitter</title>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M16 7.06547C15.5953 7.24636 15.1603 7.36818 14.7038 7.42309C15.17 7.14207 15.5279 6.69678 15.6961 6.16612C15.2603 6.42637 14.7772 6.61557 14.2629 6.71755C13.8518 6.27594 13.2647 6 12.6157 6C11.1586 6 10.088 7.36864 10.417 8.78943C8.542 8.69483 6.87917 7.7904 5.76588 6.41576C5.17463 7.43694 5.45925 8.77282 6.46392 9.44929C6.0945 9.43729 5.74617 9.33532 5.44229 9.16504C5.41754 10.2176 6.16692 11.2023 7.25225 11.4215C6.93463 11.5083 6.58675 11.5286 6.23292 11.4603C6.51983 12.3628 7.35308 13.0195 8.34125 13.0379C7.3925 13.7869 6.19717 14.1214 5 13.9793C5.99871 14.6239 7.18533 15 8.4595 15C12.6496 15 15.0169 11.4372 14.8739 8.24169C15.3148 7.92099 15.6975 7.52092 16 7.06547Z" fill="white"/>
</svg>
     </div>


 </div>
`}function D(e,t){return e?new t.principal(e.principalUrlids):new t.principal}function R(e,t,i,a,n){return r=>{e.value.filter(e=>"PM25"!=e.variavel).forEach(e=>{t.value=t.value.filter(t=>t.idx!=e.i||t.filtrado),i.value.forEach(i=>{Promise.all([a[e.variavel](i.nome,r.target.value.expression)]).then(a=>{t.value=t.value.filter(t=>t.idx!=e.i||t.filtrado||t.municipio!=i.nome),t.value=t.value.concat({idx:e.i,municipio:i.nome,variavel:e.variavel,dados:n[e.variavel](a[0])})})})})}}function P(e,t,i){return e`
<div style="display:flex; width:100%; align-items:center; justify-content:space-between;">
<div>${t}</div><div>${i}</div>
</div>
`}function F(e,t,i,a,n,r){let o=document.createElement("div");for(let l=0;l<e.length;l++)o.append(t[e[l].variavel](e[l].i));return o.append(i()),a.create(o,{animation:150,handle:".drag",filter:".undraggable",onUpdate(t){let i=e[t.oldIndex];e.splice(t.oldIndex,1),e.splice(t.newIndex,0,i),n.value=e}}),r.select(o).selectAll("g[aria-label=x-axis] g.tick text").each(function(){let e=r.select(this),t=e.text();/[0-9]{4}/.test(t)&&e.style("font-size","14px").style("font-weight","700")}),o}function $(){return 4}function B(e,t,i){return e?t(104,468,e.intervalo[0],e.intervalo[1]):t(104,468,i.intervalo[0],i.intervalo[1])}function U(e,t,i,a,n){return e`${t.map((e,t)=>i(e,t))}${t.length<a?n:""}`}function j(e,t,i,a,n,r,o,l,s,d,c,u,p,f,m,v){return e.select(t`
<input list="menu-municipios-options" id="menu-municipios" placeholder="${i("Adicione um local")}" class="caixa-municipio">
<datalist id="menu-municipios-options">
${a.map(e=>e.municipio).sort(Intl.Collator().compare).map(e=>`<option value="${e}">`)}
</datalist>
`).on("change",e=>{if(!a.map(e=>e.municipio).includes(document.getElementById("menu-municipios").value)&&!n.includes(document.getElementById("menu-municipios").value))return;let t=e.target.value;if(!(r.length==o||r.map(e=>e.nome).includes(t))){for(let i of(l.value=l.value.concat([{nome:t,cor:s.find(e=>!r.map(e=>e.cor).includes(e))}]),d.setItem("municipios",JSON.stringify(l.value)),c))"PM25"==i.variavel&&n.includes(t)||Promise.all([u[i.variavel](t,"PM25"!=i.variavel?p.value.expression:null)]).then(e=>{f.value=f.value.concat({idx:i.i,municipio:t,variavel:i.variavel,dados:m[i.variavel](e[0])})});for(let h of[...new Set(v.filter(e=>e.filtrado).map(e=>e.idx))])Promise.all([u[c.find(e=>e.i==h).variavel](t,c.find(e=>e.i==h).filtros.value.expression)]).then(e=>{f.value=f.value.concat({idx:h,municipio:t,variavel:v.find(e=>e.idx==h).variavel,filtrado:!0,dados:m[v.find(e=>e.idx==h).variavel](e[0])})})}}).node()}function G(e,t,i,a,n,r,o,l){return(s,d)=>{let c=e.create("button").attr("class","btn-municipio").style("background-color",s.cor).style("display","inline-flex").style("align-items","flex-center").on("click",e=>{t.length>1&&(i.value=t.filter(e=>e!=s),a.setItem("municipios",JSON.stringify(i.value)),n.value=r.filter(e=>e.municipio!=s.nome))});return o.includes(s.nome)?c.append("span").text(s.nome):c.append("span").text(s.nome+(s.nome.includes("(")?"":" ("+l.find(e=>e.municipio==s.nome).sigla+")")),c.append("span").attr("class","material-icons-outlined").style("font-size","16px").style("margin-left","5px").style("display",1==t.length?"none":"inline").text("remove_circle_outline"),c.node()}}function V(e,t){return()=>e.create("button").attr("class","btn-remove").text("–").on("click",t).attr("title","Eliminar trilha").node()}function H(e,t){return()=>{let i=e.create("button").attr("class","btn-remove").on("click",t);return i.append("span").attr("class","material-icons-outlined").style("font-size","10px").text("content_copy"),i.attr("title","Duplicar trilha"),i.node()}}function z(e,t,i,a){return{PM25:e,PESO:t,PIG:i,TOTAL:a}}function q(e,t,i,a){return{PM25:e,PESO:t,PIG:i,TOTAL:a}}function Z(e,t,i,a){return{PM25:e,PESO:t,PIG:i,TOTAL:a}}function W(){return{PESO:"#C8F9ED",PM25:"#F4947C",PIG:"#CDD9FA",TOTAL:"#FFFCD2"}}function J(){return{PESO:"#EDFDF9",PM25:"#FDEEEA",PIG:"#EEECFD",TOTAL:"#FFFEED"}}function X(e){return e`
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
* {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;     
}

.btn-municipio{
  border-radius: 6px;
  border: none;
  font-family: 'Roboto Condensed';
  font-weight: 700;
  font-size: 14px;
  margin-right: 6px;
  padding: 3px;
  padding-left: 5px;
  padding-right: 5px;
  display: inline-flex;
}
.label-locais{
  font-family: 'Roboto Condensed';
  font-size: 12px;
  margin-right: 12px;
}
.btn-adiciona, .btn-remove{
  border-radius: 50%;
  border: none;
  background-color: #151472;
  color: white;
  font-family: 'Roboto Condensed';
  font-size: 16px;
  
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
}
.trilha{
  border-left: 1px var(--cor-trilha) solid;
  display: inline-block;
  vertical-align: middle;
}

.sombra{
  box-shadow: 2px -2px 6px 0px rgb(0 0 0 / 25%);
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom: 30px;
  border: 3px var(--cor-trilha) solid; 
  border-radius: 10px;
}

div.opcao-trilha {
  display: flex;
  gap: 4px;
  align-items: center;
}

span.titulo-trilha {
  font-weight: 700;
  margin-left: 5px;
  font-size: 12px;
}

span.fonte {
  text-align: right;
  flex-grow: 1;
  margin-right: 5px;
}

div.cabecalho-trilha {
  font-family: 'Roboto Condensed';
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--cor-trilha);
  line-height: 1.5;
  gap: 18px;
  font-size: 10px;
}

.lista-valores {
  font-family: 'Roboto Condensed';
  font-size: 12px;
  font-weight: 400;
  vertical-align: top;
  display: block;
  margin: 6px;
  text-align: center;
}

div.interior-trilha{
  position: relative;
  display: inline-block;
}

.fonte{
  font-weight: 400;
}
.valor{
  border-radius: 5px;
  display: block;
  text-align: center;
}
.conteudo-trilha{
  display: flex;
  justify-content: space-between;
}
.conteudo-trilha svg {
  border-radius: 0px 0px 20px 0px;
}

input{
  margin: 0px 0px 0px 0px;
  -webkit-appearance: none;
  appearance: none;
  margin: 0px;
  width: 12px;
  height: 12px;
  border: 1px #151472 solid;
  vertical-align: middle;
}

input:checked {
  background-color: #151472;  
}

input:focus {
  outline: 0;  
}

input[type=checkbox] {
  border-radius: 2px;
}

input[type=radio] {
  border-radius: 50%;
} 

.titulo-lista-valores{
  font-family: 'Roboto Condensed';
  font-size: 11px;
  color: #141472;
}

.menuIG{
  margin-right: 10px;
  font-size: 12px;
}

.caixa-municipio {
  border: none;
  border-radius: 6px;
  background-color: white;
  border: dashed 2px #C4C4C4;
  font-family: "Roboto Condensed";
  padding: 3px;
  min-width: 150px;
  max-width: 240px;
  height: 20px;
}

button span {
  pointer-events: none;
}

.drag-container{
  display:inline-block;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nova-trilha {
  border: solid 3px #C4C4C4;
  border-radius: 10px 0 0 10px;
  border-right: none;
}

.drag{
  cursor: grab;
  height: 24px;
}

.buttons{
  margin-right: 5px;
  position: relative;
  top: -20px;
}

.icon-blue{
  color: #151472;
  user-select: none;
}

.icon-gray{
  color: #C4C4C4;
  user-select: none;
}

div.rodape-trilha {
  background-color: var(--cor-trilha);
  padding: 0px;
  border: 0px;
  margin: 0 0 0 -25px;
  min-height: 30px;
}

div.rodape-trilha div.menu-local {
  margin-top: -30px;
  min-height: 30px;
}

div.botao-comparacao {
  position: relative;
  width: 100px;
  height: 20px;
  font-family: 'Roboto Condensed';
  font-size: 12px;
  font-weight: 400;
  color: #484796;
  padding:5px;
  z-index: 5;
}

div.botao-comparacao label {
  line-height: 25px;
}

div.botao-comparacao input {
  margin-left: 2px;
  margin-right: 4px;
  margin-top: -2px;
  vertical-align: none;
}

div.tooltip {
  position:absolute;
  padding: 6px; 
  border-radius: 4px; 
  z-index:10; 
  border: 1px #15147266 solid;
  text-align: center;
  font-family: 'Roboto Condensed';
  font-size: 12px;
  font-weight: 700;
  color: #484796;
  top: 10px;
  min-width: 150px;
  transform: translate(-100%,0);
}

div.tooltip.right {
  transform: translate(10px,0);
}


div.tooltip div.c2 {
  display: grid;
  column-gap: 6px;
  row-gap: 1px;
  grid-template-columns: 20px auto auto auto;  
}

div.tooltip div.c1 {
  display: grid;
  column-gap: 4px;
  row-gap: 1px;
  grid-template-columns: 20px auto auto;
}

div.tooltip div.periodo {
  grid-column-start: 1;
  text-align: left;
  font-weight: 400;
}

div.tooltip div.c1 div.periodo {
  grid-column-end: 4; 
}

div.tooltip div.c2 div.periodo {
  grid-column-end: 3;  
}

div.tooltip div.rodape {
  grid-column-start: 1;
  text-align: left;
  font-weight: 400;
  font-style: italic;
  padding-top: 5px;
  line-height:1.2;
}

div.tooltip div.c1 div.rodape {
  grid-column-end: 4; 
}

div.tooltip div.c2 div.rodape {
  grid-column-end: 5;  
}

div.tooltip div.legenda {
  text-align: center;
  margin-top: -2px;
}

div.tooltip div.municipio {
  text-align: left;
  max-width: 130px;
  min-width: 100px;
  overflow: hidden;    
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: default;
}

div.tooltip div.valor {
 text-align: center;
}

div.tooltip div.c2 svg {
  align-self: center;
  justify-self: center;
}

text.rotuloSuscetibilidade {
  font-weight: 400;
  font-family: 'Roboto Condensed';
  font-size: 10px;
  fill: #151472;
}

span.instrucaoSuscetibilidade {
  font-weight: 400;
  font-family: 'Roboto Condensed';
  font-size: 10px;
  color: #151472;
  text-align: right;
  flex-grow: 1;
  margin-right: 5px;
}

g[aria-label=rule] line {
  cursor: ew-resize;
}


</style>
`}function Q(e,t,i,a,n){return function(r,o,l=!1){function s(e){let t=o.scale("x"),i=e.offsetX;return i<t.range[0]&&(i=t.range[0]),i>t.range[1]&&(i=t.range[1]),i}let d=function(e){let t=n.select(o).select("g[aria-label=rule] line"),i=s(e);t.attr("x1",i).attr("x2",i)},c=function(n){let d=o.scale("x"),c=e[r].dados,u=s(n),p=c[t.center(c,d.invert(u))].x;l?i.value=p:a.value=p},u=0,p=0,f=null;function m(e){f&&f.attr("x",e.offsetX-p)}function v(i){let n=i.offsetX-p-u,l=o.scale("x");n<l.range[0]&&(n=l.range[0]),n>l.range[1]&&(n=l.range[1]);let s=e[r].dados;a.value=s[t.center(s,l.invert(n))].x}n.select(o).call(n.drag().on("start",e=>(function(e){if(n.select(o.parentElement).select("div.tooltip").style("visibility","hidden"),l){let t=n.select(o).select("rect.suscetibilidade"),i=n.select(o).select("line.concepcao"),a=n.select(o).select("g[aria-label=rule] line"),r=+t.attr("x"),s=+t.attr("width")+r;if(Math.abs(+a.attr("x1")-e.offsetX)>8&&r<e.offsetX&&s>e.offsetX){u=+t.attr("x")-i.attr("x1"),p=e.offsetX-r,f=n.select(o).append("rect").attr("x",t.attr("x")).attr("y",t.attr("y")).attr("width",t.attr("width")).attr("height",t.attr("height")).attr("stroke","black").attr("stroke-dasharray","5").attr("fill","none"),d=m,c=v;return}}d(e)})(e.sourceEvent)).on("drag",e=>d(e.sourceEvent)).on("end",e=>c(e.sourceEvent)))}}function Y(e,t,i,a,n,r){return function(o,l,s,d="valor",c=null){function u(e){let t=document.createElementNS("http://www.w3.org/2000/svg","svg"),i=document.createElementNS("http://www.w3.org/2000/svg","path");return t.setAttribute("width","18"),t.setAttribute("height","8"),t.setAttribute("fill","none"),i.setAttribute("d","M1 7C1 5 1.39956 1 4.9956 1C10.2138 1 7.9923 7 11.9879 7C16.4829 7 15.9835 3 15.9835 1"),i.setAttribute("stroke","#151472"),e?(i.setAttribute("stroke-width","1.5"),i.setAttribute("stroke-dasharray","2.5 1")):i.setAttribute("stroke-width","2"),t.appendChild(i),t}function p(e){let t=["de","da","do","dos","das","e"];if(e.length<=2)return e;let i=e.indexOf("(");i>=0&&(e.substring(i).trim(),e=e.substring(0,i).trim());let a=e.toLowerCase().split(" ");for(let n=0;n<a.length;n++)t.includes(a[n])||(a[n]=a[n][0].toUpperCase()+a[n].substring(1));return a.join(" ")}setTimeout(f=>{let m=o.parentElement.querySelector(".tooltip");m||((m=document.createElement("div")).setAttribute("class","tooltip"),m.style.backgroundColor=r[l]+"CC",o.parentElement.appendChild(m)),function(r){function f(t,i){t.addEventListener("mouseover",t=>{e.select(document.body).selectAll("g[aria-label=line]").style("opacity",function(t){return e.select(this).attr("stroke")==i.cor?1:.3})}),t.addEventListener("mouseout",t=>{e.select(document.body).selectAll("g[aria-label=line]").style("opacity",1)})}let m=a(s,l,d,c),v,h,b;v=o.scale("x"),h=o.scale("y"),b=v.apply("PM25"==l?t:i),r.style.visibility=b<v.range[0]?"hidden":"visible",r.style.top=`${h.range[1]+5}px`,b>250?(r.classList.remove("right"),r.style.left=`${b-10}px`):(r.style.left=`${b}px`,r.classList.add("right"));let g=m.valoresComparacao.length>0,x=document.createElement("div"),y=document.createElement("div");y.classList.add("periodo"),void 0!==m.semanas?y.textContent=`${m.semanaInicio} - ${m.semanaFim} - (sem ${m.semanas})`:y.textContent=`${m.semanaInicio} - ${m.semanaFim}`,x.appendChild(y),g?(x.classList.add("c2"),x.appendChild(u(!1)),x.appendChild(u(!0))):x.classList.add("c1");for(let w=0;w<m.municipios.length;w++){let A=document.createElement("div"),C=document.createElement("div"),E=document.createElement("div"),_=g?document.createElement("div"):null;A.classList.add("legenda"),A.style.color=m.municipios[w].cor,A.textContent="⬤",C.classList.add("municipio"),C.textContent=p(m.municipios[w].nome),f(C,m.municipios[w]),E.classList.add("valor"),E.textContent=m.valoresPrincipal[w],x.appendChild(A),x.appendChild(C),x.appendChild(E),_&&(_.classList.add("valor"),_.textContent=m.valoresComparacao[w],x.appendChild(_))}let T=document.createElement("div");T.classList.add("rodape"),T.innerHTML=`${n("Unidade")}: <b>${m.unidade}</b><br>${n("M\xe9dia Semanal")}`,x.appendChild(T),r.replaceChildren(x);let S=e.select(o).select("line.rule-shadow"),O=e.select(o).select("g[aria-label=rule] line");0===S.size()&&(S=e.select(O.node().parentElement).append("line").attr("class","rule-shadow").attr("stroke","#FFFFFF00").attr("stroke-width",5).attr("stroke-dasharray","none").attr("y1",O.attr("y1")).attr("y2",O.attr("y2")).attr("cursor","ew-resize")),S.attr("x1",O.attr("x1")).attr("x2",O.attr("x2"))}(m)})}}function K(e,t){return function(i){let a=i.scale("x"),n=i.scale("y"),r=e;"number"==typeof r&&(r=new Date(r));let o=new Date(r.getTime()),l=new Date(r.getTime());o.setDate(o.getDate()+154),l.setDate(l.getDate()+266);let s=a.apply(r),d=a.apply(o),c=a.apply(l);t.select(i).insert("rect","g[aria-label=rule]").attr("class","suscetibilidade").attr("x",d).attr("y",n.range[1]).attr("width",c-d).attr("height",n.range[0]-n.range[1]).attr("stroke-width","2px").attr("stroke","#F4947C").attr("fill","#FFFFFF00").style("cursor","grab"),t.select(i).insert("line","g[aria-label=rule]").attr("x1",s).attr("y1",n.range[1]).attr("x2",s).attr("y2",n.range[0]).attr("stroke-width","2px").attr("stroke","#F4947C"),t.select(i).insert("line","g[aria-label=rule]").attr("class","concepcao").attr("x1",s).attr("y1",n.range[1]).attr("x2",d).attr("y2",n.range[1]).attr("stroke-width","2px").attr("stroke","#F4947C"),t.select(i).append("text").attr("class","rotuloSuscetibilidade").text("CONCEP\xc7\xc3O").attr("x",s).attr("y",n.range[1]-3),t.select(i).append("text").attr("class","rotuloSuscetibilidade").text("22\xaa SEM").attr("x",d).attr("y",n.range[1]-3),t.select(i).append("text").attr("class","rotuloSuscetibilidade").text("38\xaa SEM").attr("x",c).attr("y",n.range[1]-3)}}function ee(e,t,i,a,n,r,o,l,s,d){return function(c,u,p,f){let m="PM25"==u?e:t;function v(e){return e=e.toISOString().substring(0,10).split("-"),`${e[2]}/${e[1]}/${e[0]}`}function h(e){return"percentual"===p||"taxa"===p?e.toLocaleString("pt-BR",{maximumFractionDigits:2}):e.toFixed(0)}let b={},g=a.filter(e=>e.idx==c).sort(function(e,t){return i.findIndex(e=>e.nome==t.municipio)-i.findIndex(t=>t.nome==e.municipio)}),x=g,y=g.filter(e=>e.filtrado),w=n[r.bisector(e=>e.inicio.getTime()).center(n,m)];if("PM25"==u){let A=e;"number"==typeof A&&(A=new Date(A));let C=t;"number"==typeof C&&(C=new Date(C));let E=Math.floor((A.getTime()-C.getTime())/6048e5);E>0&&E<=42&&(b.semanas=E)}return b.semanaInicio=v(w.inicio).substring(0,5),b.semanaFim=v(w.termino),b.unidade=o[u][p],b.valoresPrincipal=[],b.valoresComparacao=[],b.municipios=[],b.ufSelecionada=i.some(e=>l.includes(e.nome)),y.length>0&&(x=g.filter(e=>!e.filtrado),"PIG"!==u&&(y=y.filter(e=>!Object.values(s).includes(e.municipio)||"PM25"!=u)),y.forEach(e=>{let t=e.dados[d.center(e.dados,m)][p];b.valoresComparacao.push(h("PIG"==u?t[f]:t))})),x.forEach(e=>{let t=i.find(t=>t.nome==e.municipio),a=e.dados[d.center(e.dados,m)][p];b.municipios.push(t),b.valoresPrincipal.push(h("PIG"==u?a[f]:a))}),b}}function et(e,t,i,a,n,r,o,l,s,d,c,u,p,f,m,v,h,b,g,x,y,w,A,C,E,_,T,S,O,M){return k=>{let I=e.plot({marginTop:15,marginRight:0,width:t-65,height:i,x:{grid:!0,label:null,format:a,domain:n.find(e=>e.i==k).alterar_tempo?n.find(e=>e.i==k).alterar_tempo.map(e=>r[e].inicio):o.map(e=>r[e].inicio)},y:{grid:!0,domain:[0,l[s]],transform:e=>Math.min(122,e),label:null},marks:[e.rect([{y1:d[s][3],y2:l[s]}],{y1:"y1",y2:"y2",fill:"#FFEBEB",class:"faixa"}),e.rect([{y1:d[s][2],y2:d[s][3]}],{y1:"y1",y2:"y2",fill:"#FFF5EB"}),e.rect([{y1:d[s][1],y2:d[s][2]}],{y1:"y1",y2:"y2",fill:"#FFFFED"}),n.find(e=>e.i==k).mostra_media_movel?c.filter(e=>e.idx==k&&!Object.values(u).includes(e.municipio)).map((t,i)=>e.line(t.dados.filter(e=>p(e,k)),e.windowY({strict:!0,k:f,anchor:"middle",x:"x",y:"valor",curve:"monotone-x",strokeWidth:m,stroke:v.find(e=>e.nome==t.municipio).cor}))):c.filter(e=>e.idx==k&&!Object.values(u).includes(e.municipio)).map((t,i)=>e.line(t.dados.filter(e=>p(e,k)),{x:"x",y:"valor",curve:"monotone-x",strokeWidth:m,stroke:v.find(e=>e.nome==t.municipio).cor})),e.ruleX([c.filter(e=>e.idx==k)[0].dados[h.center(c.filter(e=>e.idx==k)[0].dados,b)]],{x:"x",strokeDasharray:"5"}),n.find(e=>e.i==k).mostra_media_movel?null:c.filter(e=>e.idx==k).map((t,i)=>e.dot([t.dados[h.center(t.dados,b)]],{x:"x",y:"valor",fill:v.find(e=>e.nome==t.municipio).cor}))]});return g(I,"PM25",k),x(I),y(k,I,!0),w`
<div style="--cor-trilha:${A.PM25}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${C.create("button").attr("class","btn-remove").text("–").on("click",E).node()}<br>
  ${_()}
</div>
<div class="sombra">
<div class="drag-container">
<span class="material-icons-outlined ${n[0].i==k?"icon-gray":"icon-blue"}">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-blue">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined ${n[n.length-1].i==k?"icon-gray":"icon-blue"}">
expand_more
</span>
</div>
<div class="trilha poluente" i=${k}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">${T("POLUENTE")}</span>
    <div class="opcao-trilha">
      <label class="label-cabecalho-trilha">${T("M\xc9DIA M\xd3VEL")}</label>       ${C.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==k).mostra_media_movel).on("change",e=>S(e,k)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">${T("MODIFICAR PER\xcdODO")}</label> ${C.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==k).alterar_tempo).on("change",e=>O(e,k)).node()}
  </div>
    <span class="instrucaoSuscetibilidade">${T("A janela no gr\xe1fico indica o per\xedodo de maior suscetibilidade \xe0 polui\xe7\xe3o (22\xaa  \xe0 38\xaa semana)")}</span>
    <span class="fonte" style="flex-grow: 0;">${T("Fonte: SISAM")}</span>
  </div>
<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right">${I}</div>
</div>
${M(k)}
</div>
</div>
</div>`}}function ei(e,t,i,a,n,r,o,l,s,d,c,u,p,f,m,v,h,b,g,x,y,w,A,C,E,_,T,S){return O=>{if(!e.map(e=>e.nome).every(e=>t.filter(e=>e.idx==O).map(e=>e.municipio).includes(e))||a.find(e=>e.i==O).filtros.value.expression&&a.find(e=>e.i==O).show_filtros&&t.filter(e=>e.idx==O).every(e=>void 0===e.filtrado)||n.value.expression&&t.filter(e=>e.idx==O).every(e=>void 0!==e.filtrado))return i();let M=r.plot({marginTop:5,marginRight:0,width:o-65,height:l,x:{grid:!0,label:null,domain:a.find(e=>e.i==O).alterar_tempo?a.find(e=>e.i==O).alterar_tempo.map(e=>s[e].inicio):d.map(e=>s[e].inicio)},y:{grid:!0,label:null},marks:[a.find(e=>e.i==O).mostra_media_movel?t.filter(e=>e.idx==O).map((t,i)=>r.line(t.dados.filter(e=>c(e,O)),r.windowY({strict:!0,k:u,anchor:"middle",x:"x",y:"valor",strokeWidth:t.filtrado?p:f,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"}))):t.filter(e=>e.idx==O).map((t,i)=>r.line(t.dados.filter(e=>c(e,O)),{sort:"x",x:"x",y:"valor",curve:"monotone-x",strokeWidth:t.filtrado?p:f,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"})),r.ruleX([t.filter(e=>e.idx==O)[0].dados[m.center(t.filter(e=>e.idx==O)[0].dados,v)]],{x:"x",strokeDasharray:"5"}),a.find(e=>e.i==O).mostra_media_movel?null:t.filter(e=>e.idx==O).map((t,i)=>r.dot([t.dados[m.center(t.dados,v)]],{x:"x",y:"valor",fill:e.find(e=>e.nome==t.municipio).cor}))]});return h(M,"PESO",O),b(O,M),g`
<div style="--cor-trilha: ${x.PESO}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${y.create("button").attr("class","btn-remove").text("–").on("click",w).node()}<br>
  ${A()}
</div>
<div class="sombra" style="border: 3px var(--cor-trilha) solid; border-radius: 10px;">
<div class="drag-container"> <span class="material-icons-outlined ${a[0].i==O?"icon-gray":"icon-blue"}">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-blue">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined ${a[a.length-1].i==O?"icon-gray":"icon-blue"}">
expand_more
</span>
</div>
<div class="trilha peso" i=${O}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">${C("PESO AO NASCER")}</span>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">${C("M\xc9DIA M\xd3VEL")}</label> ${y.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==O).mostra_media_movel).on("change",e=>E(e,O)).node()}
    </div><div class="opcao-trilha">
    <label class="label-cabecalho-trilha">${C("MODIFICAR PER\xcdODO")}</label> ${y.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==O).alterar_tempo).on("change",e=>_(e,O)).node()}
  </div><span class="fonte">${C("Fonte: SINASC")}</span>
  </div>
<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right;">${M}</div>

</div>
${T(O)}
<div class="rodape-trilha">
<div class="botao-comparacao">
${y.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==O).show_filtros).on("change",e=>S(e,O)).node()}
<label>${C("COMPARA\xc7\xc3O")}</label>
</div>
<div class="menu-local">${a.find(e=>e.i==O).show_filtros?a.find(e=>e.i==O).filtros:""}</div>
</div>
</div>
</div>
</div>`}}function ea(e,t,i,a,n,r,o,l,s,d,c,u,p,f,m,v,h,b,g,x,y,w,A,C,E,_,T,S,O,M){return k=>{if(!e.map(e=>e.nome).every(e=>t.filter(e=>e.idx==k).map(e=>e.municipio).includes(e))||a.find(e=>e.i==k).filtros.value.expression&&a.find(e=>e.i==k).show_filtros&&t.filter(e=>e.idx==k).every(e=>void 0===e.filtrado)||n.value.expression&&t.filter(e=>e.idx==k).every(e=>void 0!==e.filtrado))return i();let I=a.find(e=>e.i==k).escala,L=a.find(e=>e.i==k).tamanho,N=r.plot({marginTop:5,marginRight:0,width:o-65,height:l,x:{grid:!0,label:null,domain:a.find(e=>e.i==k).alterar_tempo?a.find(e=>e.i==k).alterar_tempo.map(e=>s[e].inicio):d.map(e=>s[e].inicio)},y:{grid:!0,label:null},marks:[a.find(e=>e.i==k).mostra_media_movel?t.filter(e=>e.idx==k).map((t,i)=>r.line(t.dados.filter(e=>c(e,k)),r.windowY({strict:!0,k:u,anchor:"middle",x:"x",y:e=>e[I][L],strokeWidth:t.filtrado?p:f,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"}))):t.filter(e=>e.idx==k).map((t,i)=>r.line(t.dados.filter(e=>c(e,k)),{sort:"x",x:"x",y:e=>e[I][L],curve:"monotone-x",strokeWidth:t.filtrado?p:f,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"})),r.ruleX([t.filter(e=>e.idx==k)[0].dados[m.center(t.filter(e=>e.idx==k)[0].dados,v)]],{x:"x",strokeDasharray:"5"}),a.find(e=>e.i==k).mostra_media_movel?null:t.filter(e=>e.idx==k).map((t,i)=>r.dot([t.dados[m.center(t.dados,v)]],{x:"x",y:e=>e[I][L],fill:e.find(e=>e.nome==t.municipio).cor}))]});h(N,"PIG",k,I,L),b(k,N);let D;return g`
<div style="--cor-trilha: ${x.PIG}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${y.create("button").attr("class","btn-remove").text("–").on("click",w).node()}<br>
  ${A()}
</div>
<div class="sombra">
<div class="drag-container">
<span class="material-icons-outlined ${a[0].i==k?"icon-gray":"icon-blue"}">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-blue">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined ${a[a.length-1].i==k?"icon-gray":"icon-blue"}">
expand_more
</span>
</div>
<div class="trilha adequacao" i=${k}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">${C("ADEQUA\xc7\xc3O \xc0 IDADE GESTACIONAL")}</span>

    ${(D=y.create("select").attr("class","menuIG")).style("font-family","Roboto Condensed"),D.append("option").attr("name","PEQUENO").attr("value","PEQUENO").text(C("PEQUENO")).property("selected","PEQUENO"==a.find(e=>e.i==k).tamanho),D.append("option").attr("name","ADEQUADO").attr("value","ADEQUADO").text(C("ADEQUADO")).property("selected","ADEQUADO"==a.find(e=>e.i==k).tamanho),D.append("option").attr("name","GRANDE").attr("value","GRANDE").text(C("GRANDE")).property("selected","GRANDE"==a.find(e=>e.i==k).tamanho),D.on("change",e=>E(e,k)),D.node()}

    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">${C("M\xc9DIA M\xd3VEL")}</label> ${y.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==k).mostra_media_movel).on("change",e=>_(e,k)).node()}
  </div>
  <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">${C("MODIFICAR PER\xcdODO")}</label> ${y.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==k).alterar_tempo).on("change",e=>T(e,k)).node()}
      </div>
  <div class="opcao-trilha">

    <label class="label-cabecalho-trilha">${C("ESCALA ABSOLUTO")}</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+k).property("checked","absoluto"==a.find(e=>e.i==k).escala).attr("value","absoluto").on("change",e=>S(e,k)).node()}
      </div>
  <div class="opcao-trilha">
<label class="label-cabecalho-trilha">${C("PERCENTUAL")}</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+k).property("checked","percentual"==a.find(e=>e.i==k).escala).attr("value","percentual").on("change",e=>S(e,k)).node()}
      </div>
  <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">${C("TAXA POR 1000")}</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+k).property("checked","taxa"==a.find(e=>e.i==k).escala).attr("value","taxa").on("change",e=>S(e,k)).node()}
      </div>
  <span class="fonte">${C("Fonte: SINASC")}</span>

  </div>

<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right;">${N}</div>
</div>
${O(k)}
<div class="rodape-trilha">
<div class="botao-comparacao">
${y.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==k).show_filtros).on("change",e=>M(e,k)).node()}
<label>${C("COMPARA\xc7\xc3O")}</label>
</div>
<div class="menu-local">${a.find(e=>e.i==k).show_filtros?a.find(e=>e.i==k).filtros:""}</div>
</div>
</div>
</div>
</div>`}}function en(e,t,i,a,n,r,o,l,s,d,c,u,p,f,m,v,h,b,g,x,y,w,A,C,E,_,T,S,O){return M=>{if(!e.map(e=>e.nome).every(e=>t.filter(e=>e.idx==M).map(e=>e.municipio).includes(e))||a.find(e=>e.i==M).filtros.value.expression&&a.find(e=>e.i==M).show_filtros&&t.filter(e=>e.idx==M).every(e=>void 0===e.filtrado)||n.value.expression&&t.filter(e=>e.idx==M).every(e=>void 0!==e.filtrado))return i();let k=a.find(e=>e.i==M).escala,I=r.plot({marginTop:5,marginRight:0,width:o-65,height:l,x:{grid:!0,label:null,domain:a.find(e=>e.i==M).alterar_tempo?a.find(e=>e.i==M).alterar_tempo.map(e=>s[e].inicio):d.map(e=>s[e].inicio)},y:{grid:!0,label:null},marks:[a.find(e=>e.i==M).mostra_media_movel?t.filter(e=>e.idx==M).map((t,i)=>r.line(t.dados.filter(e=>c(e,M)),r.windowY({strict:!0,k:u,anchor:"middle",x:"x",y:e=>e[k],strokeWidth:t.filtrado?p:f,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"}))):t.filter(e=>e.idx==M).map((t,i)=>r.line(t.dados.filter(e=>c(e,M)),{sort:"x",x:"x",y:e=>e[k],curve:"monotone-x",strokeWidth:t.filtrado?p:f,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"})),r.ruleX([t.filter(e=>e.idx==M)[0].dados[m.center(t.filter(e=>e.idx==M)[0].dados,v)]],{x:"x",strokeDasharray:"5"}),a.find(e=>e.i==M).mostra_media_movel?null:t.filter(e=>e.idx==M).map((t,i)=>r.dot([t.dados[m.center(t.dados,v)]],{x:"x",y:e=>e[k],fill:e.find(e=>e.nome==t.municipio).cor}))]});return h(I,"TOTAL",M,k),b(M,I),g`
<div style="--cor-trilha:${x.TOTAL}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${y.create("button").attr("class","btn-remove").text("–").on("click",w).node()}<br>
  ${A()}
</div>
<div class="sombra">
<div class="drag-container">
<span class="material-icons-outlined ${a[0].i==M?"icon-gray":"icon-blue"}">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-blue">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined ${a[a.length-1].i==M?"icon-gray":"icon-blue"}">
expand_more
</span>
</div>
<div class="trilha nasctotal" i=${M}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">${C("TOTAL NASCIDOS VIVOS")}</span>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">${C("M\xc9DIA M\xd3VEL")}</label> ${y.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==M).mostra_media_movel).on("change",e=>E(e,M)).node()}
    </div>
   <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">${C("MODIFICAR PER\xcdODO")}</label> ${y.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==M).alterar_tempo).on("change",e=>_(e,M)).node()}
    </div>
   <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">${C("ESCALA ABSOLUTO")}</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+M).property("checked","absoluto"==a.find(e=>e.i==M).escala).attr("value","absoluto").on("change",e=>T(e,M)).node()}
    </div>
   <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">${C("PERCENTUAL")}</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+M).property("checked","percentual"==a.find(e=>e.i==M).escala).attr("value","percentual").on("change",e=>T(e,M)).node()}
    </div>
   <span class="fonte">${C("Fonte: SINASC")}</span>

  </div>
<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right;">${I}</div>
</div>
${S(M)}
<div class="rodape-trilha">
<div class="botao-comparacao">
${y.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==M).show_filtros).on("change",e=>O(e,M)).node()}
<label>${C("COMPARA\xc7\xc3O")}</label>
</div>
<div class="menu-local">${a.find(e=>e.i==M).show_filtros?a.find(e=>e.i==M).filtros:""}</div>
</div>
</div>
</div>
</div>`}}function er(e,t,i,a,n,r,o){return l=>{let s;return e`
<div style="display:flex; align-items:center; justify-content:space-between;">
<div style="visibility:hidden;">
  ${t.create("button").attr("class","btn-remove").text("–").on("click",i).node()}<br>
  ${t.create("button").attr("class","btn-remove").text("C").on("click",a).node()}
</div>

<div class="drag-container nova-trilha" style="border:dotted #C4C4C4 2px; border-right:none; height:80px;">
<span class="material-icons-outlined icon-gray">
expand_less
</span>
<div class="drag" style="cursor:auto;">
  <span class="material-icons-outlined icon-gray">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined icon-gray">
expand_more
</span>
</div>

<div id="novatrilha" class="trilha" style="width:${n-60}px; margin-left:0px; border-radius: 0 10px 10px 0; border:dotted #C4C4C4 2px; box-shadow:none; height:80px;">
  <div id="i45" class="cabecalho-trilha" style="border-bottom:dotted #C4C4C4 2px;">
${(s=t.create("select").attr("class","menuIG")).style("margin-left","10px").style("font-family","Roboto Condensed"),s.append("option").text(r("ADICIONE UMA TRILHA")).property("disabled",!0).property("selected",!0),s.append("option").attr("value","POLUENTE").text(r("POLUENTE")),s.append("option").attr("value","PESO AO NASCER").text(r("PESO AO NASCER")),s.append("option").attr("value","ADEQUA\xc7\xc3O \xc0 IDADE GESTACIONAL").text(r("ADEQUA\xc7\xc3O \xc0 IDADE GESTACIONAL")),s.append("option").attr("value","NASCIMENTOS TOTAIS").text(r("TOTAL NASCIDOS VIVOS")),s.on("change",o),s.node()}
  </div>

<div class="conteudo-trilha">
<br><br>
</div>
</div>`}}function eo(e,t,i,a,n){return r=>e`
<div style="--cor-trilha: #c4c4c4; display:flex; align-items:center; justify-content:space-between; margin-bottom:30px;">
<div style="visibility:hidden;">
  ${t.create("button").attr("class","btn-remove").text("–").on("click",i).node()}<br>
  ${t.create("button").attr("class","btn-remove").text("C").on("click",a).node()}
</div>
<div class="sombra" style="border: 3px var(--cor-trilha) solid; border-radius: 10px;">
<div class="drag-container" style="height:80px;">
<span class="material-icons-outlined icon-gray">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-gray">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined icon-gray">
expand_more
</span>
</div>
<div class="trilha" style="width:${n-60}px; margin-left:0px; margin-bottom:0px; height: 80px;">
  <div class="cabecalho-trilha">
  <label class="label-titulo-trilha">CARREGANDO...</label>
  </div>

<div class="conteudo-trilha">
<br><br>
</div>
</div>
</div>`}function el(e,t,i,a,n,r){return o=>{let l=e.findIndex(e=>e.i==o.target.parentNode.parentNode.getElementsByClassName("trilha")[0].getAttribute("i")),s={...e[l]},d=t.max(e.map(e=>e.i))+1;s.i=d,"PM25"!=s.variavel&&(s.filtros=s.filtros.cloneMenu(),s.filtros.addEventListener("input",e=>i(e,s))),e.splice(l+1,0,s),a.value=e;let c=JSON.parse(JSON.stringify(n.filter(e=>e.idx==o.target.parentNode.parentNode.getElementsByClassName("trilha")[0].getAttribute("i"))));c.forEach((e,t,i)=>{i[t].idx=d,i[t].dados.forEach((e,t,i)=>i[t].x=new Date(i[t].x))}),r.value=n.concat(c)}}function es(e,t,i,a){return n=>{e.value=t.filter(e=>e.i!=n.target.parentNode.parentNode.getElementsByClassName("trilha")[0].getAttribute("i")),i.value=a.filter(e=>e.idx!=n.target.parentNode.parentNode.getElementsByClassName("trilha")[0].getAttribute("i"))}}function ed(e,t,i,a,n,r,o,l,s,d,c,u,p,f,m,v){return h=>{let b=e.max(t.map(e=>e.i))||0,g=null;switch(h.target.value){case"POLUENTE":g={i:b+1,mostra_media_movel:!0,variavel:"PM25",alterar_tempo:null,poluente:"PM25"},i.value=t.concat(g),a.forEach(e=>Promise.all([n(e.nome)]).then(t=>{r.value=r.value.concat([{idx:b+1,municipio:e.nome,variavel:"PM25",dados:o(t[0])}])}));break;case"PESO AO NASCER":(g={i:b+1,mostra_media_movel:!1,variavel:"PESO",alterar_tempo:null,filtros:new l.local(null,null,s.PESO),show_filtros:!1}).filtros.addEventListener("input",e=>d(e,g)),i.value=t.concat(g),a.forEach(e=>Promise.all([c(e.nome,g.filtros.expression)]).then(t=>{r.value=r.value.concat([{idx:b+1,municipio:e.nome,variavel:"PESO",dados:u(t[0])}])}));break;case"ADEQUA\xc7\xc3O \xc0 IDADE GESTACIONAL":(g={i:b+1,mostra_media_movel:!1,escala:"taxa",tamanho:"PEQUENO",variavel:"PIG",alterar_tempo:null,filtros:new l.local(null,null,s.PIG),show_filtros:!1}).filtros.addEventListener("input",e=>d(e,g)),i.value=t.concat(g),a.forEach(e=>Promise.all([p(e.nome,g.filtros.expression)]).then(t=>{r.value=r.value.concat([{idx:b+1,municipio:e.nome,variavel:"PIG",dados:f(t[0])}])}));break;case"NASCIMENTOS TOTAIS":(g={i:b+1,mostra_media_movel:!1,variavel:"TOTAL",alterar_tempo:null,filtros:new l.local(null,null,s.TOTAL),show_filtros:!1,escala:"absoluto"}).filtros.addEventListener("input",e=>d(e,g)),i.value=t.concat(g),a.forEach(e=>Promise.all([m(e.nome,g.filtros.expression)]).then(t=>{r.value=r.value.concat([{idx:b+1,municipio:e.nome,variavel:"TOTAL",dados:v(t[0])}])}))}}}function ec(e,t,i,a){return n=>{if(!e.find(e=>e.i==n).alterar_tempo)return"";let r=t(104,468,e.find(e=>e.i==n).alterar_tempo[0],e.find(e=>e.i==n).alterar_tempo[1],i-90,40);return r.addEventListener("input",t=>{let i=e;i.find(e=>e.i==n).alterar_tempo=r.value,a.value=i}),r}}function eu(e,t,i,a,n,r,o,l,s,d){return(c,u)=>{if(e.find(e=>e.i==u).show_filtros=c.target.checked,c.target.checked){let p=e.find(e=>e.i==u);p.filtros=new i.local(null,a.value.urlids,n[p.variavel]),p.filtros.addEventListener("input",e=>r(e,p)),t.value=t.value.filter(e=>e.idx!=u||!e.filtrado),o.value.forEach(i=>{Promise.all([l[e.find(e=>e.i==u).variavel](i.nome,e.find(e=>e.i==u).filtros.value.expression)]).then(a=>{t.value=t.value.concat({idx:u,municipio:i.nome,variavel:e.find(e=>e.i==u).variavel,filtrado:!0,dados:s[e.find(e=>e.i==u).variavel](a[0])})})})}else t.value=t.value.filter(e=>e.idx!=u||!e.filtrado);d.value=e}}function ep(e,t,i){return(a,n)=>{a.target.checked?e.find(e=>e.i==n).alterar_tempo=t:e.find(e=>e.i==n).alterar_tempo=null,i.value=e}}function ef(e,t){return(i,a)=>{e.find(e=>e.i==a).tamanho=i.target.value,t.value=e}}function em(e,t){return(i,a)=>{e.find(e=>e.i==a).escala=i.target.value,t.value=e}}function ev(e,t){return(i,a)=>{e.find(e=>e.i==a).mostra_media_movel=i.target.checked,t.value=e}}function eh(e){return t=>{let i=[0,0];return i[0]=e[t[0]].inicio,i[1]=e[t[1]].termino,i}}function eb(){return""}function eg(e,t,i){return e?e.trilhas.map(e=>(e.filtros=new t.local(null,e.filtrosUrlids),e)):[{i:0,mostra_media_movel:!0,variavel:"PM25",alterar_tempo:null,poluente:"PM25"},{i:1,mostra_media_movel:!1,variavel:"PESO",alterar_tempo:null,filtros:new t.local(null,null,i.PESO),show_filtros:!1},{i:2,mostra_media_movel:!1,escala:"taxa",tamanho:"PEQUENO",variavel:"PIG",alterar_tempo:null,filtros:new t.local(null,null,i.PIG),show_filtros:!1}]}function ex(e){return{PM25:{valor:"\xb5g/m\xb3"},PESO:{valor:"g"},PIG:{absoluto:e("nascimentos"),percentual:"%",taxa:e("nasc./1000NV")},TOTAL:{absoluto:e("nascimentos"),percentual:"%"}}}function ey(){return 2.5}function ew(){return 2}function eA(){return!0}function eC(e,t){return e?e.municipios:t.municipios}function eE(e,t,i,a,n,r,o,l,s,d,c,u,p,f){if(e){for(let m of t.value)i.value=i.value.concat([m]),m=m.nome,a.forEach(e=>{Promise.all([n[e.variavel](m,r.value.expression)]).then(t=>{o.value=o.value.concat({idx:e.i,municipio:m,variavel:e.variavel,dados:l[e.variavel](t[0])})}),e.show_filtros&&Promise.all([n[e.variavel](m,e.filtros.value.expression)]).then(t=>{o.value=o.value.concat({idx:e.i,municipio:m,variavel:e.variavel,filtrado:!0,dados:l[e.variavel](t[0])})})}),a.slice(1).forEach(e=>e.filtros.addEventListener("input",t=>s(t,e)));r.addEventListener("input",e=>d(e)),r.addEventListener("aba",e=>{c.setItem("conf",JSON.stringify(u())),c.setItem("municipios",JSON.stringify(i.value)),c.setItem("intervalo",JSON.stringify(p.value))}),r.addEventListener("limparFiltros",e=>{for(let t=0;t<a.length;t++)a[t].filtros.limpa()}),f.value=!1}}function e_(e,t,i,a){return(n,r)=>{e.value=e.value.filter(e=>e.idx!=r.i||!e.filtrado),t.value.forEach(t=>{Promise.all([i[r.variavel](t.nome,r.filtros.value.expression)]).then(i=>{e.value=e.value.concat({idx:r.i,municipio:t.nome,variavel:r.variavel,filtrado:!0,dados:a[r.variavel](i[0])})})})}}function eT(e){return e.range([3,53],{label:"Janela em semanas",value:13,step:2})}function eS(e){return e.select(["co_ppb","no2_ppb","o3_ppb","pm25_ugm3","so2_ugm3"],{label:"Indicador",value:"pm25_ugm3"})}function eO(){return["#2F87F5","#D8C56C","#DC5988","#6CC28D","#67AEC2","#ABA6F8","#D8C56C","#2DE8BD","#2F87F5","#94E8F9"]}function eM(){return[]}function ek(){return[]}function eI(e,t,i,a){return e[Math.ceil(t.interpolate(...i?i.intervalo:a.intervalo)(.5))].inicio}function eL(e){return e}function eN(e){return e.bisector(e=>e.x)}function eD(e){return e.timeFormatDefaultLocale({decimal:",",thousands:".",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%d/%m/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Domingo","Segunda-feira","Ter\xe7a-feira","Quarta-feira","Quinta-feira","Sexta-feira","S\xe1bado"],shortDays:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],months:["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],shortMonths:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]})}function eR(e){return e[0]}function eP(e){return e[1]}function eF(e,t,i,a,n){return(r,o)=>{let l=e.find(e=>e.i==o).alterar_tempo,s=e.find(e=>e.i==o).mostra_media_movel?(t-1)/2:0;return l?r.x.getTime()>=i[l[0]-s].inicio.getTime()&&r.x.getTime()<=i[l[1]+s].termino.getTime():r.x.getTime()>=i[a-s].inicio.getTime()&&r.x.getTime()<=i[n+s].termino.getTime()}}function e$(){return 200}function eB(e,t){return function(i,a){let n=e.find(e=>e.municipio==i).codigo_sdv,r=`https://storage.googleapis.com/amplia/municipios-v2/${n.substring(0,2)}/mun${n}.db`;return t.open(r).then(e=>e.query(a))}}function eU(e,t){return function(i,a){if(2==i.length)return;let n=e.find(e=>e.municipio==i).codigo_sdv,r=`https://storage.googleapis.com/amplia/sisam/${n.substring(0,2)}/mun${n}.db`;return t.open(r).then(e=>e.query(a))}}function ej(e){return e`<style>
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@400;700&display=swap');
  text{
    font-family:"Fira Sans Condensed"
  }
</style>`}function eG(e){return e("municipios2.csv").csv()}function eV(e){return e("semanas_epidemiologicas_estendido.csv").csv().then(e=>e.map(e=>(e.inicio=new Date(Date.UTC(+e.inicio.substr(0,4),+e.inicio.substr(5,2)-1,+e.inicio.substr(8,2))),e.termino=new Date(Date.UTC(+e.termino.substr(0,4),+e.termino.substr(5,2)-1,+e.termino.substr(8,2))),e)).filter(e=>e.ano>=2010))}function eH(){return{ACRE:"RIO BRANCO",ALAGOAS:"MACEI\xd3",AMAPÁ:"MACAP\xc1",AMAZONAS:"MANAUS",BAHIA:"SALVADOR",CEARÁ:"FORTALEZA","DISTRITO FEDERAL":"BRAS\xcdLIA","ESP\xcdRITO SANTO":"VIT\xd3RIA",GOIÁS:"GOI\xc2NIA",MARANHÃO:"S\xc3O LU\xcdS","MATO GROSSO":"CUIAB\xc1","MATO GROSSO DO SUL":"CAMPO GRANDE","MINAS GERAIS":"BELO HORIZONTE",PARÁ:"BEL\xc9M",PARAÍBA:"JO\xc3O PESSOA",PARANÁ:"CURITIBA",PERNAMBUCO:"RECIFE",PIAUÍ:"TERESINA","RIO DE JANEIRO":"RIO DE JANEIRO","RIO GRANDE DO NORTE":"NATAL","RIO GRANDE DO SUL":"PORTO ALEGRE",RONDÔNIA:"PORTO VELHO",RORAIMA:"BOA VISTA","SANTA CATARINA":"FLORIAN\xd3POLIS","S\xc3O PAULO":"S\xc3O PAULO",SERGIPE:"ARACAJU",TOCANTINS:"PALMAS"}}function ez(){return{ACRE:"AC",ALAGOAS:"AL",AMAPÁ:"AP",AMAZONAS:"AM",BAHIA:"BA",CEARÁ:"CE","DISTRITO FEDERAL":"DF","ESP\xcdRITO SANTO":"ES",GOIÁS:"GO",MARANHÃO:"MA","MATO GROSSO":"MT","MATO GROSSO DO SUL":"MS","MINAS GERAIS":"MG",PARÁ:"PA",PARAÍBA:"PB",PARANÁ:"PR",PERNAMBUCO:"PE",PIAUÍ:"PI","RIO DE JANEIRO":"RJ","RIO GRANDE DO NORTE":"RN","RIO GRANDE DO SUL":"RS",RONDÔNIA:"RO",RORAIMA:"RR","SANTA CATARINA":"SC","S\xc3O PAULO":"SP",SERGIPE:"SE",TOCANTINS:"TO"}}function eq(){return[]}function eZ(){return["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"]}function eW(e){return Object.values(e).sort(Intl.Collator().compare)}function eJ(e){return t=>"BRASIL"==t?"":e.includes(t)?"AND res_SIGLA_UF='"+t+"'":"AND res_MUNNOMEX='"+t.normalize("NFD").replace(/\p{Diacritic}/gu,"")+"'"}function eX(e,t,i){return a=>"BRASIL"==a?"":e.includes(a)?"mun_uf_nome='"+Object.entries(t).find(e=>e[1]==a)[0]+"'":"mun_geocodsdv="+i.find(e=>e.municipio==a).codigo_sdv}function eQ(e){return e`## URL stuff`}function eY(e){return function(t){return e.compressToEncodedURIComponent(JSON.stringify(t))}}function eK(e){return function(t){return JSON.parse(e.decompressFromEncodedURIComponent(t))}}function e1(e,t,i,a){return()=>({principalUrlids:e.value.value.urlids,municipios:t.value,intervalo:i,trilhas:a.value.map(e=>{let t={};return Object.assign(t,e),t.filtros&&(t.filtrosUrlids=t.filtros.value.urlids,delete t.filtros),t})})}function e0(){return{principalUrlids:"",municipios:[{nome:"RIO DE JANEIRO",cor:"#2F87F5"}],intervalo:[262,366],trilhas:[{i:0,mostra_media_movel:!0,variavel:"PM25",alterar_tempo:null,poluente:"PM25"},{i:1,mostra_media_movel:!1,variavel:"PESO",alterar_tempo:null,show_filtros:!1,filtrosUrlids:""},{i:2,mostra_media_movel:!1,escala:"taxa",tamanho:"PEQUENO",variavel:"PIG",alterar_tempo:null,show_filtros:!1,filtrosUrlids:""}]}}function e2(e,t,i,a){let n=new e(window.location.search).get("conf");if(n)return t(n);if(n=i.getItem("conf")){let r=JSON.parse(n),o=i.getItem("municipios");o&&(r.municipios=JSON.parse(o));let l=i.getItem("intervalo");return l&&(r.intervalo=JSON.parse(l)),r}let s=a;return(n=i.getItem("municipios"))&&(s.municipios=JSON.parse(n)),(n=i.getItem("intervalo"))&&(s.intervalo=JSON.parse(n)),s}function e5(){return function(e){var t=document.body.appendChild(document.createElement("textarea"));t.style.position="absolute",t.style.left="-9999px",t.setAttribute("readonly",""),t.value=e,t.select();try{return document.execCommand("copy")}catch(i){return!1}finally{t.parentNode.removeChild(t)}}}function e3(){return"https://ampliasaude.github.io/amplia-site/trilhas/NascidosVivos/"}function e4(e,t,i,a,n){let r=e`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Copiar link compartilhável</title>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M6.045 10C6.045 11.026 6.8095 11.86 7.75 11.86H9.95V13H7.75C6.232 13 5 11.656 5 10C5 8.344 6.232 7 7.75 7H9.95V8.14H7.75C6.8095 8.14 6.045 8.974 6.045 10ZM8.3 9.4H12.7V10.6H8.3V9.4ZM13.25 13H11.05V11.86H13.25C14.1905 11.86 14.955 11.026 14.955 10C14.955 8.974 14.1905 8.14 13.25 8.14H11.05V7H13.25C14.768 7 16 8.344 16 10C16 11.656 14.768 13 13.25 13Z" fill="white"/>
</svg>`;return r.onclick=()=>{n(`${t}?conf=${i(a())}`)},r}function e7(e){return e`## Poluentes`}function e6(){return{pm25_ugm3:120,so2_ugm3:90,no2_ppb:286,o3_ppb:154,co_ppb:9.9}}function e8(){return e=>.08206*(e+293.15)}function e9(){return{no2_ppb:46.0055,o3_ppb:48,co_ppb:28.01}}function te(){return{pm25_ugm3:[25,37,50,60],so2_ugm3:[20,30,40,60],no2_ppb:[200,220,240,260],o3_ppb:[100,120,130,140],co_ppb:[9,9,9,9]}}function tt(e,t){return(i,a="TRUE")=>t(i,`
      select 
        ano,
        mes,
        dia,
        max_${e} as valor,
        temperatura_c_media
      from 
        sisam
      where
          ano >= 2012
      group by
        1,2,3
 `)}function ti(e,t,i,a){return n=>{n.forEach(n=>{let r=n,o=new Date(Date.UTC(r.ano,r.mes-1,r.dia));for(let l of e)if(o>=new Date(l.inicio)&&o<=new Date(l.termino)){r.semana=+l.semana,r.x=l.inicio;break}switch(1==r.mes&&53==r.semana&&(r.ano-=1,r.mes=12),t){case"no2_ppb":case"o3_ppb":let s=i[t]/a(r.temperatura);r.valor*=s;case"co_ppb":r.valor/=1e3}});let r=[];for(let o of n){let l=r.find(e=>e.x==o.x);l?(l.valor+=o.valor,l.temperatura_c_media+=o.temperatura_c_media,l.cont+=1):r.push({ano:o.ano,semana:o.semana,x:o.x,valor:o.valor||0,temperatura_c_media:o.temperatura_c_media,cont:1})}return r.map(e=>(e.valor/=e.cont,e.temperatura_c_media/=e.cont,delete e.cont,e)).filter(e=>e.semana)}}function ta(e){return e`## Fecundação`}function tn(e,t,i){return async(a,n)=>{let r;return await i.fetchPeso(e.includes(a)?Math.floor(t.find(e=>e.sigla==a).codigo_sdv/1e4):t.find(e=>e.municipio==a).codigo_sdv,n)}}function tr(e){return t=>{t.forEach(t=>{let i=t;for(let a of(i.data=new Date(i.data),e))if(i.data>=new Date(a.inicio)&&i.data<=new Date(a.termino)){i.x=a.inicio;break}});let i=[];for(let a of t){let n=i.find(e=>e.x.getTime()==a.x.getTime());n?(n.valor+=a.valor*a.total,n.total+=a.total):i.push({x:a.x,valor:a.valor*a.total,total:a.total})}return i.map(e=>(e.valor/=e.total,delete e.total,e)).filter(e=>e.x)}}function to(e,t,i){return async(a,n)=>{let r;return await i.fetchPIG(e.includes(a)?Math.floor(t.find(e=>e.sigla==a).codigo_sdv/1e4):t.find(e=>e.municipio==a).codigo_sdv,n)}}function tl(e,t){return i=>{let a=e(i[1]);(i=i[0]).forEach(e=>{let i=e;for(let a of(i.data=new Date(i.data),t))if(i.data>=new Date(a.inicio)&&i.data<=new Date(a.termino)){i.x=a.inicio;break}});let n=i,r=[];for(let o of n){let l=r.find(e=>e.x.getTime()==o.x.getTime());l?(l.absoluto[o.ig]+=o.total,l.total+=o.total):r.push({x:o.x,absoluto:{PEQUENO:"PEQUENO"==o.ig?o.total:0,ADEQUADO:"ADEQUADO"==o.ig?o.total:0,GRANDE:"GRANDE"==o.ig?o.total:0},total:o.total})}return t.filter(e=>!r.map(e=>e.x.getTime()).includes(e.inicio.getTime())).forEach(e=>{r.push({x:e.inicio,absoluto:{PEQUENO:0,ADEQUADO:0,GRANDE:0},total:0})}),(r=r.map(e=>{e.percentual={},e.total?(e.percentual.PEQUENO=100*e.absoluto.PEQUENO/e.total,e.percentual.ADEQUADO=100*e.absoluto.ADEQUADO/e.total,e.percentual.GRANDE=100*e.absoluto.GRANDE/e.total):(e.percentual.PEQUENO=0,e.percentual.ADEQUADO=0,e.percentual.GRANDE=0),e.taxa={};let t=a.find(t=>t.x.getTime()==e.x.getTime());return t?(e.taxa.PEQUENO=1e3*e.absoluto.PEQUENO/t.valor,e.taxa.ADEQUADO=1e3*e.absoluto.ADEQUADO/t.valor,e.taxa.GRANDE=1e3*e.absoluto.GRANDE/t.valor):(e.taxa.PEQUENO=0,e.taxa.ADEQUADO=0,e.taxa.GRANDE=0),e})).sort((e,t)=>e.x.getTime()-t.x.getTime())}}function ts(e){return t=>{let i=[];t.forEach(t=>{let a=t;if(a.data=new Date(a.data),!(2011>a.data.getFullYear())){for(let n of e)if(a.data>=new Date(n.inicio)&&a.data<=new Date(n.termino)){a.x=n.inicio;break}i.push(a)}});let a=[];for(let n of i){let r=a.find(e=>e.x.getTime()==n.x.getTime());r?r.valor+=n.valor:a.push({x:n.x,valor:n.valor})}return a.filter(e=>e.x)}}function td(e,t,i){return async(a,n)=>{let r;return await i.fetchTotal(e.includes(a)?Math.floor(t.find(e=>e.sigla==a).codigo_sdv/1e4):t.find(e=>e.municipio==a).codigo_sdv,n)}}function tc(e,t){return i=>{let a=e(i[1]);i=i[0];let n=[];i.forEach(e=>{let i=e;if(i.data=new Date(i.data),!(2011>i.data.getFullYear())){for(let a of t)if(i.data>=new Date(a.inicio)&&i.data<=new Date(a.termino)){i.x=a.inicio;break}n.push(i)}});let r=[];for(let o of n){let l=r.find(e=>e.x.getTime()==o.x.getTime());l?l.absoluto+=o.valor:r.push({x:o.x,absoluto:o.valor})}return(r=r.filter(e=>e.x)).map(e=>{e.percentual={};let t=a.find(t=>t.x.getTime()==e.x.getTime());return t?e.percentual=100*e.absoluto/t.valor:e.percentual=0,e})}}function tu(e){return e`## Imports`}function tp(e){return e("sortablejs/Sortable.js")}function tf(e){return e("d3@5")}function tm(e,t,i,a,n,r,o,l){return function(s,d,c=s,u=d,p=e.width,f=60){var m=[s,d+1],v=e.height,h=e.margin,b=p-f-h.right,g=v-h.top-h.bottom,x=t.scaleLinear().domain(m).range([0,b]),y=t.select(i.svg(p,v));let w=y.append("g").attr("transform",`translate(${f}, ${h.top})`);var A=w.append("text").attr("id","labelleft").attr("x",0).attr("y",g+5).style("display",60==f?"inline":"none").text(a(n[r[m[0]].inicio.getMonth()])+" "+r[m[0]].inicio.getFullYear()),C=w.append("text").attr("id","labelright").attr("x",0).attr("y",g+5).style("display",60==f?"inline":"none").text(a(n[r[m[1]].termino.getMonth()])+" "+r[m[1]].termino.getFullYear());w.append("text").attr("id","labelleft2").attr("x",-8).attr("y",g-g/2+1).style("alignment-baseline","middle").text(2012),w.append("text").attr("id","labelright2").attr("x",b+8).attr("y",g-g/2+1).style("alignment-baseline","middle").text(2019);var E=t.brushX().extent([[0,0],[b,g]]).on("brush",function(){var e=t.event.selection;A.attr("x",e[0]).text(n[r[Math.round(x.invert(e[0]))].inicio.getMonth()]+" "+r[Math.round(x.invert(e[0]))].inicio.getFullYear()),C.attr("x",e[1]).text(n[r[Math.round(x.invert(e[1]))].termino.getMonth()]+" "+r[Math.round(x.invert(e[1]))].termino.getFullYear()),S.attr("display",null).attr("transform",function(t,i){return"translate("+[e[i],-g/4]+")"}),y.node().value=e.map(e=>Math.round(x.invert(e))),y.node().dispatchEvent(new CustomEvent("input"))}).on("end",function(){if(t.event.sourceEvent){var e=t.event.selection.map(x.invert).map(Math.round);t.select(this).transition().call(t.event.target.move,e.map(x)),o.value=Math.max(Math.min(new Date(o.value),r[y.node().value[1]-2].termino),r[y.node().value[0]].inicio)}}),_=w.append("g").attr("class","brush").call(E),T=function(e){return"M -3 12 A 3 3 0 0 1 3 12 V 18 A 3 3 0 0 1 -3 18 Z"},S=_.selectAll(".handle--custom").data([{type:"w"},{type:"e"}]).enter().append("path").attr("class","handle--custom").attr("stroke","#000").attr("fill","#151472").attr("cursor","ew-resize").attr("y",g/2).attr("d",T);return _.selectAll(".overlay").attr("fill","#E5E5E5").each(function(e){e.type="selection"}).on("mousedown touchstart",function(){var e=x(1)-x(0),t=l.mouse(this)[0],i=t-e/2,a=t+e/2;l.select(this.parentNode).call(E.move,a>b?[b-e,b]:i<0?[0,e]:[i,a])}),_.call(E.move,[c,u+1].map(x)),w.append("g").selectAll("line").data(r.filter(e=>1==e.semana).map(e=>r.findIndex(t=>t==e))).enter().append("line").attr("x1",e=>x(e)).attr("x2",e=>x(e)).attr("y1",0).attr("y2",g).style("stroke","#ccc"),y.node()}}function tv(){return{width:600,height:60,margin:{top:20,bottom:20,left:60,right:60}}}function th(e){return e`
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
svg {
	font-family: "Roboto Condensed";
}

rect.overlay {
	stroke: none;
}

rect.selection {
	stroke: none;
  fill: rgba(21, 20, 114, 0.6);
}

#labelleft, #labelright, #labelright2, #labelleft2 {
	dominant-baseline: hanging;
  font-size: 12px;
  font-weight: 400;
  fill: #151472;
}

#labelleft, #labelleft2 {
	text-anchor: end;
}

#labelright, #labelright2 {
	text-anchor: start;
}
</style>
`}function tb(e){return e("https://bundle.run/lz-string@1.4.4")}function tg(e){return e`<style>
  @import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap);
  @import url(https://fonts.googleapis.com/icon?family=Material+Icons);    
</style>
`}function tx(e){return e`
<style>
/* The container must be positioned relative: */
.custom-select {
  position: relative;
  font-family: "Roboto Condensed";
}

.custom-select select {
  display: none; /*hide original SELECT element: */
}

.select-selected {
  border-radius: 6px;
  background-color: white;
  border: dashed 2px #C4C4C4;
  font-family: "Roboto Condensed";
  padding: 3px;
  min-width: 80px;
  max-width: 240px;
}

/* Style the arrow inside the select element: */
.select-selected:after {
  position: absolute;
  content: "";
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #000 transparent transparent transparent;
}

/* Point the arrow upwards when the select box is open (active): */
.select-selected.select-arrow-active:after {
  border-color: transparent transparent #000 transparent;
  top: 7px;
}

/* style the items (options), including the selected item: */
.select-items div {
  color: #000000;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
}

/* Style items (options): */
.select-items {
  position: absolute;
  background-color: white;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
}

/* Hide the items when the select box is closed: */
.select-hide {
  display: none;
}

.select-items div:hover, .same-as-selected {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
`}function ty(e,t){let a=e.module();function n(){return this.url}let r=new Map([["semanas_epidemiologicas_estendido.csv",{url:new i.U(i(2236)),mimeType:"text/csv",toString:n}],["municipios2.csv",{url:new i.U(i(5156)),mimeType:"text/csv",toString:n}]]);a.builtin("FileAttachment",e.fileAttachments(e=>r.get(e))),a.variable(t()).define(["md"],L),a.variable(t("cabecalho")).define("cabecalho",["html","copyLinkButton"],N),a.define("initial mp",["urlParamConf","ampliaMenu"],D),a.variable(t("mutable mp")).define("mutable mp",["Mutable","initial mp"],(e,t)=>new e(t)),a.variable(t("mp")).define("mp",["mutable mp"],e=>e.generator),a.variable(t("listenerFiltroGlobal")).define("listenerFiltroGlobal",["mutable conf_trilhas","mutable data","mutable sel_municipios","funcoesFetch","funcoesProc"],R),a.variable(t("div_controles")).define("div_controles",["html","barra_municipios","viewof intervalo"],P),a.variable(t("vis")).define("vis",["conf_trilhas","funcoesGeradoras","gAdicionaTrilha","Sortable","mutable conf_trilhas","d3"],F),a.variable(t("maxMunicipios")).define("maxMunicipios",$),a.variable(t("viewof intervalo")).define("viewof intervalo",["urlParamConf","slider_snap","defaultConf"],B),a.variable(t("intervalo")).define("intervalo",["Generators","viewof intervalo"],(e,t)=>e.input(t)),a.variable(t("barra_municipios")).define("barra_municipios",["html","sel_municipios","remove_mun_button","maxMunicipios","menu_municipios"],U),a.variable(t("menu_municipios")).define("menu_municipios",["d3","html","TL","municipios","agregacoes","sel_municipios","maxMunicipios","mutable sel_municipios","colors","sessionStorage","conf_trilhas","funcoesFetch","mp","mutable data","funcoesProc","data"],j),a.variable(t("remove_mun_button")).define("remove_mun_button",["d3","sel_municipios","mutable sel_municipios","sessionStorage","mutable data","data","agregacoes","municipios"],G),a.variable(t("remove_trilha_button")).define("remove_trilha_button",["d3","removeTrilha"],V),a.variable(t("copy_button")).define("copy_button",["d3","copyTrilha"],H),a.variable(t("funcoesGeradoras")).define("funcoesGeradoras",["gPM25","gPESO","gPIG","gTOTAL"],z),a.variable(t("funcoesProc")).define("funcoesProc",["procPM25","procPESO","procPIG","procTOTAL"],q),a.variable(t("funcoesFetch")).define("funcoesFetch",["fetchPM25","fetchPESO","fetchPIG","fetchTOTAL"],Z),a.variable(t("corTrilha")).define("corTrilha",W),a.variable(t("corTrilhaFraco")).define("corTrilhaFraco",J),a.variable(t("style")).define("style",["html"],X),a.variable(t("mouseDownHandler")).define("mouseDownHandler",["data","bisector","mutable sel_pm25","mutable sel","d3"],Q),a.variable(t("legendTooltip")).define("legendTooltip",["d3","sel_pm25","sel","valoresLista","TL","corTrilhaFraco"],Y),a.variable(t("suscetibilidade")).define("suscetibilidade",["sel","d3"],K),a.variable(t("valoresLista")).define("valoresLista",["sel_pm25","sel","sel_municipios","data","semanas_epidemiologicas","d3","unidades","agregacoes","siglas","bisector"],ee),a.variable(t("gPM25")).define("gPM25",["Plot","width","height","formatTime","conf_trilhas","semanas_epidemiologicas","intervalo","maxScale","indicador","padroes","data","siglas","filterDate","janela","lineWidth","sel_municipios","bisector","sel_pm25","legendTooltip","suscetibilidade","mouseDownHandler","html","corTrilha","d3","removeTrilha","copy_button","TL","checkMediaMovel","checkTempo","inner_slider"],et),a.variable(t("gPESO")).define("gPESO",["sel_municipios","data","gLoadingTrilha","conf_trilhas","mp","Plot","width","height","semanas_epidemiologicas","intervalo","filterDate","janela","lineWidthFiltered","lineWidth","bisector","sel","legendTooltip","mouseDownHandler","html","corTrilha","d3","removeTrilha","copy_button","TL","checkMediaMovel","checkTempo","inner_slider","checkFiltros"],ei),a.variable(t("gPIG")).define("gPIG",["sel_municipios","data","gLoadingTrilha","conf_trilhas","mp","Plot","width","height","semanas_epidemiologicas","intervalo","filterDate","janela","lineWidthFiltered","lineWidth","bisector","sel","legendTooltip","mouseDownHandler","html","corTrilha","d3","removeTrilha","copy_button","TL","checkTamanho","checkMediaMovel","checkTempo","checkEscala","inner_slider","checkFiltros"],ea),a.variable(t("gTOTAL")).define("gTOTAL",["sel_municipios","data","gLoadingTrilha","conf_trilhas","mp","Plot","width","height","semanas_epidemiologicas","intervalo","filterDate","janela","lineWidthFiltered","lineWidth","bisector","sel","legendTooltip","mouseDownHandler","html","corTrilha","d3","removeTrilha","copy_button","TL","checkMediaMovel","checkTempo","checkEscala","inner_slider","checkFiltros"],en),a.variable(t("gAdicionaTrilha")).define("gAdicionaTrilha",["html","d3","removeTrilha","copyTrilha","width","TL","addTrilha"],er),a.variable(t("gLoadingTrilha")).define("gLoadingTrilha",["html","d3","removeTrilha","copyTrilha","width"],eo),a.variable(t("copyTrilha")).define("copyTrilha",["conf_trilhas","d3","listenerFiltro","mutable conf_trilhas","data","mutable data"],el),a.variable(t("removeTrilha")).define("removeTrilha",["mutable conf_trilhas","conf_trilhas","mutable data","data"],es),a.variable(t("addTrilha")).define("addTrilha",["d3","conf_trilhas","mutable conf_trilhas","sel_municipios","fetchPM25","mutable data","procPM25","ampliaMenu","corTrilha","listenerFiltro","fetchPESO","procPESO","fetchPIG","procPIG","fetchTOTAL","procTOTAL"],ed),a.variable(t("inner_slider")).define("inner_slider",["conf_trilhas","slider_snap","width","mutable conf_trilhas"],ec),a.variable(t("checkFiltros")).define("checkFiltros",["conf_trilhas","mutable data","ampliaMenu","mp","corTrilha","listenerFiltro","mutable sel_municipios","funcoesFetch","funcoesProc","mutable conf_trilhas"],eu),a.variable(t("checkTempo")).define("checkTempo",["conf_trilhas","intervalo","mutable conf_trilhas"],ep),a.variable(t("checkTamanho")).define("checkTamanho",["conf_trilhas","mutable conf_trilhas"],ef),a.variable(t("checkEscala")).define("checkEscala",["conf_trilhas","mutable conf_trilhas"],em),a.variable(t("checkMediaMovel")).define("checkMediaMovel",["conf_trilhas","mutable conf_trilhas"],ev),a.variable(t("converteIntervalo")).define("converteIntervalo",["semanas_epidemiologicas"],eh),a.define("initial conf_principal",eb),a.variable(t("mutable conf_principal")).define("mutable conf_principal",["Mutable","initial conf_principal"],(e,t)=>new e(t)),a.variable(t("conf_principal")).define("conf_principal",["mutable conf_principal"],e=>e.generator),a.define("initial conf_trilhas",["urlParamConf","ampliaMenu","corTrilha"],eg),a.variable(t("mutable conf_trilhas")).define("mutable conf_trilhas",["Mutable","initial conf_trilhas"],(e,t)=>new e(t)),a.variable(t("conf_trilhas")).define("conf_trilhas",["mutable conf_trilhas"],e=>e.generator),a.variable(t("unidades")).define("unidades",["TL"],ex),a.variable(t("lineWidth")).define("lineWidth",ey),a.variable(t("lineWidthFiltered")).define("lineWidthFiltered",ew),a.define("initial firstload",eA),a.variable(t("mutable firstload")).define("mutable firstload",["Mutable","initial firstload"],(e,t)=>new e(t)),a.variable(t("firstload")).define("firstload",["mutable firstload"],e=>e.generator),a.define("initial municipiosDefault",["urlParamConf","defaultConf"],eC),a.variable(t("mutable municipiosDefault")).define("mutable municipiosDefault",["Mutable","initial municipiosDefault"],(e,t)=>new e(t)),a.variable(t("municipiosDefault")).define("municipiosDefault",["mutable municipiosDefault"],e=>e.generator),a.variable(t("onfirstload")).define("onfirstload",["firstload","mutable municipiosDefault","mutable sel_municipios","conf_trilhas","funcoesFetch","mp","mutable data","funcoesProc","listenerFiltro","listenerFiltroGlobal","sessionStorage","getCurrentConf","viewof intervalo","mutable firstload"],eE),a.variable(t("listenerFiltro")).define("listenerFiltro",["mutable data","mutable sel_municipios","funcoesFetch","funcoesProc"],e_),a.variable(t("viewof janela")).define("viewof janela",["Inputs"],eT),a.variable(t("janela")).define("janela",["Generators","viewof janela"],(e,t)=>e.input(t)),a.variable(t("viewof indicador")).define("viewof indicador",["Inputs"],eS),a.variable(t("indicador")).define("indicador",["Generators","viewof indicador"],(e,t)=>e.input(t)),a.variable(t("colors")).define("colors",eO),a.define("initial sel_variaveis",eM),a.variable(t("mutable sel_variaveis")).define("mutable sel_variaveis",["Mutable","initial sel_variaveis"],(e,t)=>new e(t)),a.variable(t("sel_variaveis")).define("sel_variaveis",["mutable sel_variaveis"],e=>e.generator),a.define("initial sel_municipios",ek),a.variable(t("mutable sel_municipios")).define("mutable sel_municipios",["Mutable","initial sel_municipios"],(e,t)=>new e(t)),a.variable(t("sel_municipios")).define("sel_municipios",["mutable sel_municipios"],e=>e.generator),a.define("initial sel",["semanas_epidemiologicas","d3","urlParamConf","defaultConf"],eI),a.variable(t("mutable sel")).define("mutable sel",["Mutable","initial sel"],(e,t)=>new e(t)),a.variable(t("sel")).define("sel",["mutable sel"],e=>e.generator),a.define("initial sel_pm25",["sel"],eL),a.variable(t("mutable sel_pm25")).define("mutable sel_pm25",["Mutable","initial sel_pm25"],(e,t)=>new e(t)),a.variable(t("sel_pm25")).define("sel_pm25",["mutable sel_pm25"],e=>e.generator),a.variable(t("bisector")).define("bisector",["d3"],eN),a.variable(t("formatTime")).define("formatTime",["d3"],eD),a.variable(t("periodoInicio")).define("periodoInicio",["intervalo"],eR),a.variable(t("periodoFim")).define("periodoFim",["intervalo"],eP),a.variable(t("filterDate")).define("filterDate",["conf_trilhas","janela","semanas_epidemiologicas","periodoInicio","periodoFim"],eF),a.variable(t("height")).define("height",e$),a.variable(t("sqlSinasc")).define("sqlSinasc",["municipios","SQLiteDatabaseClient"],eB),a.variable(t("sqlSisam")).define("sqlSisam",["municipios","SQLiteDatabaseClient"],eU),a.variable(t("style2")).define("style2",["html"],ej),a.variable(t("municipios")).define("municipios",["FileAttachment"],eG),a.variable(t("semanas_epidemiologicas")).define("semanas_epidemiologicas",["FileAttachment"],eV),a.variable(t("capitais")).define("capitais",eH),a.variable(t("siglas")).define("siglas",ez),a.define("initial data",eq),a.variable(t("mutable data")).define("mutable data",["Mutable","initial data"],(e,t)=>new e(t)),a.variable(t("data")).define("data",["mutable data"],e=>e.generator),a.variable(t("months")).define("months",eZ),a.variable(t("agregacoes")).define("agregacoes",["siglas"],eW),a.variable(t("queryLocalSINASC")).define("queryLocalSINASC",["agregacoes"],eJ),a.variable(t("queryLocalSISAM")).define("queryLocalSISAM",["agregacoes","siglas","municipios"],eX),a.variable(t()).define(["md"],eQ),a.variable(t("objToUrlParam")).define("objToUrlParam",["lz"],eY),a.variable(t("urlParamToObj")).define("urlParamToObj",["lz"],eK),a.variable(t("getCurrentConf")).define("getCurrentConf",["mutable mp","mutable sel_municipios","intervalo","mutable conf_trilhas"],e1),a.variable(t("defaultConf")).define("defaultConf",e0),a.variable(t("urlParamConf")).define("urlParamConf",["URLSearchParams","urlParamToObj","sessionStorage","defaultConf"],e2),a.variable(t("copyToClipboard")).define("copyToClipboard",e5),a.variable(t("currentHref")).define("currentHref",e3),a.variable(t("copyLinkButton")).define("copyLinkButton",["svg","currentHref","objToUrlParam","getCurrentConf","copyToClipboard"],e4),a.variable(t()).define(["md"],e7),a.variable(t("maxScale")).define("maxScale",e6),a.variable(t("volume_mol")).define("volume_mol",e8),a.variable(t("massa_mol")).define("massa_mol",e9),a.variable(t("padroes")).define("padroes",te),a.variable(t("fetchPM25")).define("fetchPM25",["indicador","sqlSisam"],tt),a.variable(t("procPM25")).define("procPM25",["semanas_epidemiologicas","indicador","massa_mol","volume_mol"],ti),a.variable(t()).define(["md"],ta),a.variable(t("fetchPESO")).define("fetchPESO",["agregacoes","municipios","newDataSource"],tn),a.variable(t("procPESO")).define("procPESO",["semanas_epidemiologicas"],tr),a.variable(t("fetchPIG")).define("fetchPIG",["agregacoes","municipios","newDataSource"],to),a.variable(t("procPIG")).define("procPIG",["procTOTALUnfiltered","semanas_epidemiologicas"],tl),a.variable(t("procTOTALUnfiltered")).define("procTOTALUnfiltered",["semanas_epidemiologicas"],ts),a.variable(t("fetchTOTAL")).define("fetchTOTAL",["agregacoes","municipios","newDataSource"],td),a.variable(t("procTOTAL")).define("procTOTAL",["procTOTALUnfiltered","semanas_epidemiologicas"],tc),a.variable(t()).define(["md"],tu),a.variable(t("Sortable")).define("Sortable",["require"],tp),a.variable(t("d3_5")).define("d3_5",["require"],tf),a.variable(t("slider_snap")).define("slider_snap",["layout","d3_5","DOM","TL","months","semanas_epidemiologicas","mutable sel","d3"],tm),a.variable(t("layout")).define("layout",tv),a.variable(t("style_slider")).define("style_slider",["html"],th);let o=e.module(I);return a.import("menuNascidosVivos","ampliaMenu",o),a.import("datasource","newDataSource",o),a.import("TL",o),a.variable(t("lz")).define("lz",["require"],tb),a.variable(t("style_menu")).define("style_menu",["html"],tg),a.variable(t("styleMenuMun")).define("styleMenuMun",["html"],tx),a}i.d(t,{Z:function(){return ty}})},3236:function(e,t,i){function a(e){return e`# Color Legend

A simple legend for a [color scale](/@d3/color-schemes). Supports [continuous](/@d3/continuous-scales), [sequential](/@d3/sequential-scales), [diverging](/@d3/diverging-scales), [quantize, quantile, threshold](/@d3/quantile-quantize-and-threshold-scales) and [ordinal](/@d3/d3-scaleordinal) scales. To use:

~~~js
import {Legend, Swatches} from "@d3/color-legend"
~~~

Then call the legend function as shown below. (For ordinal scales, also consider the swatches function.)`}function n(e,t){return e(t.scaleSequential([0,100],t.interpolateViridis),{title:"Temperature (\xb0F)"})}function r(e,t){return e(t.scaleSequentialSqrt([0,1],t.interpolateTurbo),{title:"Speed (kts)"})}function o(e,t){return e(t.scaleDiverging([-.1,0,.1],t.interpolatePiYG),{title:"Daily change",tickFormat:"+%"})}function l(e,t){return e(t.scaleDivergingSqrt([-.1,0,.1],t.interpolateRdBu),{title:"Daily change",tickFormat:"+%"})}function s(e,t){return e(t.scaleSequentialLog([1,100],t.interpolateBlues),{title:"Energy (joules)",ticks:10})}function d(e,t){return e(t.scaleSequentialQuantile(t.range(100).map(()=>Math.random()**2),t.interpolateBlues),{title:"Quantile",tickFormat:".2f"})}function c(e,t){return e(t.scaleSqrt([-100,0,100],["blue","white","red"]),{title:"Temperature (\xb0C)"})}function u(e,t){return e(t.scaleQuantize([1,10],t.schemePurples[9]),{title:"Unemployment rate (%)"})}function p(e,t){return e(t.scaleQuantile(t.range(1e3).map(t.randomNormal(100,20)),t.schemeSpectral[9]),{title:"Height (cm)",tickFormat:".0f"})}function f(e,t){return e(t.scaleThreshold([2.5,3.1,3.5,3.9,6,7,8,9.5],t.schemeRdBu[9]),{title:"Unemployment rate (%)",tickSize:0})}function m(e,t){return e(t.scaleOrdinal(["<10","10-19","20-29","30-39","40-49","50-59","60-69","70-79","≥80"],t.schemeSpectral[10]),{title:"Age (years)",tickSize:0})}function v(e){return e`But wait, there’s more!

How about swatches for ordinal color scales? Both variable-width swatches and [column layout](https://developer.mozilla.org/en-US/docs/Web/CSS/columns) are supported.`}function h(e,t){return e(t.scaleOrdinal(["blueberries","oranges","apples"],t.schemeCategory10))}function b(e,t){return e(t.scaleOrdinal(["Wholesale and Retail Trade","Manufacturing","Leisure and hospitality","Business services","Construction","Education and Health","Government","Finance","Self-employed","Other"],t.schemeTableau10),{columns:"180px"})}function g(e){return e`---

## Implementation`}function x(e){return function(t,{title:i,tickSize:a=6,width:n=320,height:r=44+a,marginTop:o=18,marginRight:l=0,marginBottom:s=16+a,marginLeft:d=0,ticks:c=n/64,tickFormat:u,tickValues:p}={}){function f(e,t=256){let i=document.createElement("canvas");i.width=t,i.height=1;let a=i.getContext("2d");for(let n=0;n<t;++n)a.fillStyle=e(n/(t-1)),a.fillRect(n,0,1,1);return i}let m=e.create("svg").attr("width",n).attr("height",r).attr("viewBox",[0,0,n,r]).style("overflow","visible").style("display","block"),v=e=>e.selectAll(".tick line").attr("y1",o+s-r),h;if(t.interpolate){let b=Math.min(t.domain().length,t.range().length);h=t.copy().rangeRound(e.quantize(e.interpolate(d,n-l),b)),m.append("image").attr("x",d).attr("y",o).attr("width",n-d-l).attr("height",r-o-s).attr("preserveAspectRatio","none").attr("xlink:href",f(t.copy().domain(e.quantize(e.interpolate(0,1),b))).toDataURL())}else if(t.interpolator){if(h=Object.assign(t.copy().interpolator(e.interpolateRound(d,n-l)),{range:()=>[d,n-l]}),m.append("image").attr("x",d).attr("y",o).attr("width",n-d-l).attr("height",r-o-s).attr("preserveAspectRatio","none").attr("xlink:href",f(t.interpolator()).toDataURL()),!h.ticks){if(void 0===p){let g=Math.round(c+1);p=e.range(g).map(i=>e.quantile(t.domain(),i/(g-1)))}"function"!=typeof u&&(u=e.format(void 0===u?",f":u))}}else if(t.invertExtent){let x=t.thresholds?t.thresholds():t.quantiles?t.quantiles():t.domain(),y=void 0===u?e=>e:"string"==typeof u?e.format(u):u;h=e.scaleLinear().domain([-1,t.range().length-1]).rangeRound([d,n-l]),m.append("g").selectAll("rect").data(t.range()).join("rect").attr("x",(e,t)=>h(t-1)).attr("y",o).attr("width",(e,t)=>h(t)-h(t-1)).attr("height",r-o-s).attr("fill",e=>e),p=e.range(x.length),u=e=>y(x[e],e)}else h=e.scaleBand().domain(t.domain()).rangeRound([d,n-l]),m.append("g").selectAll("rect").data(t.domain()).join("rect").attr("x",h).attr("y",o).attr("width",Math.max(0,h.bandwidth()-1)).attr("height",r-o-s).attr("fill",t),v=()=>{};return m.append("g").attr("transform",`translate(0,${r-s})`).call(e.axisBottom(h).ticks(c,"string"==typeof u?u:void 0).tickFormat("function"==typeof u?u:void 0).tickSize(a).tickValues(p)).call(v).call(e=>e.select(".domain").remove()).call(e=>e.append("text").attr("x",d).attr("y",o+s-r-6).attr("fill","currentColor").attr("text-anchor","start").attr("font-weight","bold").attr("class","title").text(i)),m.node()}}function y(e){return function({color:t,...i}){return e(t,i)}}function w(e,t){return function(i,{columns:a=null,format:n,unknown:r,swatchSize:o=15,swatchWidth:l=o,swatchHeight:s=o,marginLeft:d=0}={}){let c=`-swatches-${Math.random().toString(16).slice(2)}`,u=null==r?void 0:i.unknown(),p=null==u||u===e.scaleImplicit?[]:[u],f=i.domain().concat(p);return(void 0===n&&(n=e=>e===u?r:e),null!==a)?t.html`<div style="display: flex; align-items: center; margin-left: ${+d}px; min-height: 33px; font: 10px sans-serif;">
  <style>

.${c}-item {
  break-inside: avoid;
  display: flex;
  align-items: center;
  padding-bottom: 1px;
}

.${c}-label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - ${+l}px - 0.5em);
}

.${c}-swatch {
  width: ${+l}px;
  height: ${+s}px;
  margin: 0 0.5em 0 0;
}

  </style>
  <div style=${{width:"100%",columns:a}}>${f.map(e=>{let a=`${n(e)}`;return t.html`<div class=${c}-item>
      <div class=${c}-swatch style=${{background:i(e)}}></div>
      <div class=${c}-label title=${a}>${a}</div>
    </div>`})}
  </div>
</div>`:t.html`<div style="display: flex; align-items: center; min-height: 33px; margin-left: ${+d}px; font: 10px sans-serif;">
  <style>

.${c} {
  display: inline-flex;
  align-items: center;
  margin-right: 1em;
}

.${c}::before {
  content: "";
  width: ${+l}px;
  height: ${+s}px;
  margin-right: 0.5em;
  background: var(--color);
}

  </style>
  <div>${f.map(e=>t.html`<span class="${c}" style="--color: ${i(e)}">${n(e)}</span>`)}</div>`}}function A(e){return function({color:t,...i}){return e(t,i)}}function C(e,t){let i=e.module();return i.variable(t()).define(["md"],a),i.variable(t()).define(["Legend","d3"],n),i.variable(t()).define(["Legend","d3"],r),i.variable(t()).define(["Legend","d3"],o),i.variable(t()).define(["Legend","d3"],l),i.variable(t()).define(["Legend","d3"],s),i.variable(t()).define(["Legend","d3"],d),i.variable(t()).define(["Legend","d3"],c),i.variable(t()).define(["Legend","d3"],u),i.variable(t()).define(["Legend","d3"],p),i.variable(t()).define(["Legend","d3"],f),i.variable(t()).define(["Legend","d3"],m),i.variable(t()).define(["md"],v),i.variable(t()).define(["Swatches","d3"],h),i.variable(t()).define(["Swatches","d3"],b),i.variable(t()).define(["md"],g),i.variable(t("Legend")).define("Legend",["d3"],x),i.variable(t("legend")).define("legend",["Legend"],y),i.variable(t("Swatches")).define("Swatches",["d3","htl"],w),i.variable(t("swatches")).define("swatches",["Swatches"],A),i}async function E(e,t){return e`# Inputs
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
  * [\`password\`](#passwordDemo)`}function _(e){return e`| <h3>Friends & Family:</h3>  |   |
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

<br>*If you have any improvements for the bazaar, [please make your change in a fork and send it to me as a suggestion.](https://observablehq.com/@observablehq/suggestions-and-comments)*`}function T(e){return e`---
## Sliders

~~~js
import {slider} from "@jashkenas/inputs"
~~~`}function S(e){return e()}function O(e){return e({min:0,max:1,step:.01,format:".0%",description:"Zero to one, formatted as a percentage"})}function M(e){return e({min:0,max:1,step:.01,format:e=>`${Math.round(100*e)} per cent`,description:"Zero to one, formatted with a custom function"})}function k(e){return e({min:0,max:1e9,step:1e3,value:325e4,format:",",description:"Zero to one billion, in steps of one thousand, formatted as a (US) number"})}function I(e){return e({min:0,max:100,step:1,value:10,title:"Integers",description:"Integers from zero through 100"})}function L(e){return e({min:.9,max:1.1,precision:3,description:"A high precision slider example"})}function N(e){return e({min:.9,max:1.1,precision:3,submit:!0,description:"The same as a4, but only changes value on submit"})}function D(e){return e`More [fancy slider techniques](https://observablehq.com/@mootari/prime-numbers-slider).`}function R(e){return function(t={}){let{min:i=0,max:a=1,value:n=(a+i)/2,step:r="any",precision:o=2,title:l,description:s,disabled:d,getValue:c,format:u,display:p,submit:f}="number"==typeof t?{value:t}:t;return o=Math.pow(10,o),c||(c=e=>Math.round(e.valueAsNumber*o)/o),e({type:"range",title:l,description:s,submit:f,format:u,display:p,attributes:{min:i,max:a,step:r,disabled:d,value:n},getValue:c})}}function P(e){return e`---
## Buttons

~~~js
import {button} from "@jashkenas/inputs"
~~~`}function F(e){return e()}function $(e){return!this}function B(e){return e({value:"Click me",description:"We use a reference to the button below to record the time you pressed it."})}function U(e){return new Date(Date.now()).toUTCString()}function j(e){return function(t={}){let{value:i="Ok",title:a,description:n,disabled:r}="string"==typeof t?{value:t}:t,o=e({type:"button",title:a,description:n,attributes:{disabled:r,value:i}});return o.output.remove(),o}}function G(e){return e`---
## Dropdown Menus and Multiselects

~~~js
import {select} from "@jashkenas/inputs"
~~~`}function V(e){return e(["Spring","Summer","Fall","Winter"])}function H(e){return e}function z(e){return e({title:"Stooges",description:"Please pick your favorite stooge.",options:["Curly","Larry","Moe","Shemp"],value:"Moe"})}function q(e){return e}function Z(e){return e({description:"As a child, which vegetables did you refuse to eat?",options:["Spinach","Broccoli","Brussels Sprouts","Cauliflower","Kale","Turnips","Green Beans","Asparagus"],multiple:!0})}function W(e){return e}function J(e){let t=e({title:"How are you feeling today?",options:[{label:"\uD83E\uDD37",value:"shrug"},{label:"\uD83D\uDE02",value:"tears-of-joy"},{label:"\uD83D\uDE0D",value:"loving-it"},{label:"\uD83E\uDD14",value:"hmmm"},{label:"\uD83D\uDE31",value:"yikes",disabled:!0},{label:"\uD83D\uDE08",value:"mischievous"},{label:"\uD83D\uDCA9",value:"poo"}],value:"hmmm"});return t.input.style.fontSize="30px",t.input.style.marginTop="8px",t}function X(e){return e}function Q(e,t){return function(i={}){let{value:a,title:n,description:r,disabled:o,submit:l,multiple:s,size:d,options:c}=Array.isArray(i)?{options:i}:i;c=c.map(e=>"object"==typeof e?e:{value:e,label:e});let u=e({type:"select",title:n,description:r,submit:l,attributes:{disabled:o},getValue(e){let t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>e.value);return s?t:t[0]},form:t`
      <form>
        <select name="input" ${s?`multiple size="${d||c.length}"`:""}>
          ${c.map(({value:e,label:i,disabled:n})=>Object.assign(t`<option>`,{value:e,selected:Array.isArray(a)?a.includes(e):a===e,disabled:!!n&&n,textContent:i}))}
        </select>
      </form>
    `});return u.output.remove(),u}}function Y(e){return e`---
## Autoselects
*A variant of an option menu, using an autocompleting text input, via HTML’s datalist element.* 

~~~js
import {autoSelect} from "@jashkenas/inputs"
~~~`}function K(e,t){return e({options:t.objects.states.geometries.map(e=>e.properties.name),placeholder:"Search for a US state . . ."})}function ee(e){return e}function et(e,t){return function(i={}){let{value:a,title:n,description:r,disabled:o,autocomplete:l="off",placeholder:s,size:d,options:c,list:u="options"}=Array.isArray(i)?{options:i}:i,p=new Set(c),f=e({type:"text",title:n,description:r,attributes:{disabled:o},action(e){e.value=e.input.value=a||"",e.onsubmit=e=>e.preventDefault(),e.input.oninput=function(t){t.stopPropagation(),e.value=e.input.value,(!e.value||p.has(e.value))&&e.dispatchEvent(new CustomEvent("input"))}},form:t`
      <form>
         <input name="input" type="text" autocomplete="off" 
          placeholder="${s||""}" style="font-size: 1em;" list=${u}>
          <datalist id="${u}">
              ${c.map(e=>Object.assign(t`<option>`,{value:e}))}
          </datalist>
      </form>
      `});return f.output.remove(),f}}function ei(e){return e`---
## Color Pickers

*value: a hexadecimal string, e.g. * \`"#bada55"\` 

~~~js
import {color} from "@jashkenas/inputs"
~~~`}function ea(e){return e()}function en(e){return e({value:"#0000ff",title:"Background Color",description:"This color picker starts out blue"})}function er(e){return function(t={}){let{value:i="#000000",title:a,description:n,disabled:r,submit:o,display:l}="string"==typeof t?{value:t}:t,s=e({type:"color",title:a,description:n,submit:o,display:l,attributes:{disabled:r,value:i}});return s.input.value="",s.input.value=i,(a||n)&&(s.input.style.margin="5px 0"),s}}function eo(e){return e` ---
## Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {coordinates} from "@jashkenas/inputs"
~~~`}function el(e){return e()}function es(e){return e}function ed(e){return e({title:"Hometown",description:"Enter the coordinates of where you were born",value:[-122.27,37.87],submit:!0})}function ec(e){return e}function eu(e,t){return function(i={}){let{value:a=[],title:n,description:r,submit:o}=Array.isArray(i)?{value:i}:i,[l,s]=a;l=null!=l?l:"",s=null!=s?s:"";let d=e`<input name="input" type="number" autocomplete="off" min="-180" max="180" style="width: 80px;" step="any" value="${l}" />`,c=e`<input name="input" type="number" autocomplete="off" min="-90" max="90" style="width: 80px;" step="any" value="${s}" />`,u=t({type:"coordinates",title:n,description:r,submit:o,getValue(){let e=d.valueAsNumber,t=c.valueAsNumber;return[isNaN(e)?null:e,isNaN(t)?null:t]},form:e`
      <form>
        <label style="display: inline-block; font: 600 0.8rem sans-serif; margin: 6px 0 3px;">
          <span style="display: inline-block; width: 70px;">Longitude:</span>
          ${d}
        </label>
        <br>
        <label style="display: inline-block; font: 600 0.8rem sans-serif; margin: 0 0 6px;">
          <span style="display: inline-block; width: 70px;">Latitude:</span>
          ${c}
        </label>
      </form>
    `});return u.output.remove(),u}}function ep(e){return e` ---
## World Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {worldMapCoordinates} from "@jashkenas/inputs"
~~~`}function ef(e){return e([-122.27,37.87])}function em(e){return e}function ev(e,t,i,a,n,r,o){return function(l={}){let{value:s=[],title:d,description:c,width:u=400}=Array.isArray(l)?{value:l}:l,p=Math.round(.525*u),[f,m]=s;f=null!=f?f:null,m=null!=m?m:null;let v=e`<form style="width: ${u}px;"></form>`,h=t.context2d(u,p),b=h.canvas;b.style.margin="10px 0 3px";let g=i.geoNaturalEarth1().precision(.1).fitSize([u,p],{type:"Sphere"}),x=i.geoPath(g,h).pointRadius(2.5);function y(){if(h.fillStyle="#fff",h.fillRect(0,0,u,p),h.beginPath(),x(a),h.lineWidth=.35,h.strokeStyle="#ddd",h.stroke(),h.beginPath(),x(n),h.fillStyle="#f4f4f4",h.fill(),h.beginPath(),x(r),h.strokeStyle="#aaa",h.stroke(),null!=f&&null!=m){let e={type:"MultiPoint",coordinates:[[f,m]]};h.beginPath(),x(e),h.fillStyle="#f00",h.fill()}}v.append(b),b.onclick=function(e){let{offsetX:t,offsetY:i}=e;var a=g.invert([t,i]);f=+a[0].toFixed(2),m=+a[1].toFixed(2),y(),b.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},y();let w=o({type:"worldMapCoordinates",title:d,description:c,display:t=>e`<div style="width: ${u}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-bottom: 5px;">
            <span style="color: #777;">Longitude:</span> ${null!=f?f.toFixed(2):""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${null!=m?m.toFixed(2):""} 
          </div>`,getValue:()=>[null!=f?f:null,null!=m?m:null],form:v});return w}}function eh(e){return e` ---
## U.S.A. Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {usaMapCoordinates} from "@jashkenas/inputs"
~~~`}function eb(e){return e([-122.27,37.87])}function eg(e){return e}function ex(e){return e({title:"A Mini Map",description:"Defaults to New York City",width:200,value:[-74,40.71]})}function ey(e){return e}function ew(e,t,i,a,n,r){return function(o={}){let{value:l=[],title:s,description:d,width:c=400}=Array.isArray(o)?{value:o}:o,u=c/960,p=600*u,[f,m]=l;f=null!=f?f:null,m=null!=m?m:null;let v=e`<form style="width: ${c}px;"></form>`,h=t.context2d(c,p),b=h.canvas;b.style.margin="5px 0 20px";let g=i.geoAlbersUsa().scale(1280).translate([480,300]),x=i.geoPath().context(h).pointRadius(2.5/u);function y(){if(h.clearRect(0,0,c,p),h.save(),h.scale(u,u),h.lineWidth=.35/u,h.beginPath(),x(a),h.fillStyle="#f4f4f4",h.fill(),h.beginPath(),x(n),h.strokeStyle="#aaa",h.stroke(),null!=f&&null!=m){let e={type:"MultiPoint",coordinates:[g([f,m])]};h.beginPath(),x(e),h.fillStyle="#f00",h.fill()}h.restore()}v.append(b),b.onclick=function(e){let{offsetX:t,offsetY:i}=e;var a=g.invert([t/u,i/u]);f=+a[0].toFixed(2),m=+a[1].toFixed(2),y(),b.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},y();let w=r({type:"worldMapCoordinates",title:s,description:d,display:t=>e`<div style="position: absolute; width: ${c}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-top: -18px;">
            <span style="color: #777;">Longitude:</span> ${null!=f?f:""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${null!=m?m:""} 
          </div>`,getValue:()=>[null!=f?f:null,null!=m?m:null],form:v});return w}}function eA(e){return e` ---
## Dates

*value: a YYYY-MM-DD formatted string: * \`"2016-11-08"\` 

~~~js
import {date} from "@jashkenas/inputs"
~~~`}function eC(e){return e()}function eE(e){return e({title:"2017",min:"2017-01-01",max:"2017-12-31",value:"2017-01-01",description:"Only dates within the 2017 calendar year are allowed"})}function e_(e){return function(t={}){let{min:i,max:a,value:n,title:r,description:o,disabled:l,display:s}="string"==typeof t?{value:t}:t;return e({type:"date",title:r,description:o,display:s,attributes:{min:i,max:a,disabled:l,value:n}})}}function eT(e){return e` ---
## Times

*value: a HH:MM:SS formatted string: * \`"09:30:45"\`
<br>*(Time values are always in 24-hour format)*

~~~js
import {time} from "@jashkenas/inputs"
~~~`}function eS(e){return e()}function eO(e){return e}function eM(e){return e({title:"Afternoon",min:"12:00:00",max:"23:59:59",value:"13:00:00",step:1,description:"Only times after noon are allowed, and seconds are included"})}function ek(e){return e}function eI(e){return function(t={}){let{min:i,max:a,step:n,value:r,title:o,description:l,disabled:s,display:d}="string"==typeof t?{value:t}:t,c=e({type:"time",title:o,description:l,display:d,getValue:e=>e.value?e.value:void 0,attributes:{min:i,max:a,step:n,disabled:s,value:r}});return c.output.remove(),c}}function eL(e){return e`---
## File Upload
*Use the JavaScript [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications) to work with uploaded file contents.*

\`import {file} from "@jashkenas/inputs"\``}function eN(e){return e()}function eD(e){return e({title:"Photographs",description:"Only .jpg files are allowed in this example. Choose some images, and they’ll appear in the cell below.",accept:".jpg",multiple:!0})}async function eR(e,t,i){let a=e`<div>`;for(var n=0;n<t.length;n++){t[n];let r=e`<img height="125px" style="margin: 2px;" />`;r.src=await i.url(t[n]),a.append(r)}return a}function eP(e){return function(t={}){let{multiple:i,accept:a,title:n,description:r,disabled:o}=t,l=e({type:"file",title:n,description:r,attributes:{multiple:i,accept:a,disabled:o},action(e){e.input.onchange=()=>{e.value=i?e.input.files:e.input.files[0],e.dispatchEvent(new CustomEvent("input"))}}});return l.output.remove(),l.input.onchange(),l}}function eF(e){return e`---
## Text Inputs

~~~js
import {text} from "@jashkenas/inputs"
~~~`}function e$(e){return e()}function eB(e){return e({title:"A Text Input",placeholder:"Placeholder text",description:"Note that text inputs don’t show output on the right"})}function eU(e){return e}function ej(e){return e({placeholder:"Placeholder text",description:"This input only changes value on submit",submit:"Go"})}function eG(e){return e}function eV(e){return function(t={}){let{value:i,title:a,description:n,disabled:r,autocomplete:o="off",maxlength:l,minlength:s,pattern:d,placeholder:c,size:u,submit:p,getValue:f}="string"==typeof t?{value:t}:t,m=e({type:"text",title:a,description:n,submit:p,getValue:f,attributes:{value:i,autocomplete:o,maxlength:l,minlength:s,pattern:d,placeholder:c,size:u,disabled:r}});return m.output.remove(),m.input.style.fontSize="1em",m}}function eH(e){return e`---
## Textareas

~~~js
import {textarea} from "@jashkenas/inputs"
~~~`}function ez(e){return e()}function eq(e){return e}function eZ(e){return e({title:"Your Great American Novel",placeholder:"Insert story here...",spellcheck:!0,width:"100%",rows:10,submit:"Publish"})}function eW(e){return e}function eJ(e,t){return function(i={}){let{value:a="",title:n,description:r,autocomplete:o,cols:l=45,rows:s=3,width:d,height:c,maxlength:u,placeholder:p,spellcheck:f,wrap:m,submit:v,disabled:h,getValue:b}="string"==typeof i?{value:i}:i,g=e({form:t`<form><textarea style="display: block; font-size: 0.8em;" name=input>${a}</textarea></form>`,title:n,description:r,submit:v,getValue:b,attributes:{autocomplete:o,cols:l,rows:s,maxlength:u,placeholder:p,spellcheck:f,wrap:m,disabled:h}});return g.output.remove(),null!=d&&(g.input.style.width=d),null!=c&&(g.input.style.height=c),v&&(g.submit.style.margin="0"),(n||r)&&(g.input.style.margin="3px 0"),g}}function eX(e){return e`---
## Radio Buttons

~~~js
import {radio} from "@jashkenas/inputs"
~~~`}function eQ(e){return e(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function eY(e){return e}function eK(e){return e({title:"Contact Us",description:"Please select your preferred contact method",options:[{label:"By Email",value:"email"},{label:"By Phone",value:"phone"},{label:"By Pager",value:"pager"},],value:"pager"})}function e1(e){return e}function e0(e,t){return function(i={}){let{value:a,title:n,description:r,submit:o,options:l,disabled:s}=Array.isArray(i)?{options:i}:i;l=l.map(e=>"string"==typeof e?{value:e,label:e}:e);let d=e({type:"radio",title:n,description:r,submit:o,getValue(e){if(e.checked)return e.value;let t=Array.prototype.find.call(e,e=>e.checked);return t?t.value:void 0},form:t`
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
~~~`}function e5(e){return e(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function e3(e){return e}function e4(e){return e({title:"Colors",description:"Please select your favorite colors",options:[{value:"r",label:"Red"},{value:"o",label:"Orange"},{value:"y",label:"Yellow"},{value:"g",label:"Green"},{value:"b",label:"Blue"},{value:"i",label:"Indigo"},{value:"v",label:"Violet"}],value:["r","g","b"],submit:!0})}function e7(e){return e}function e6(e){return e({description:"Just a single checkbox to toggle",options:[{value:"toggle",label:"On"}],value:"toggle"})}function e8(e){return e}function e9(e,t){return function(i={}){let{value:a,title:n,description:r,submit:o,disabled:l,options:s}=Array.isArray(i)?{options:i}:i;s=s.map(e=>"string"==typeof e?{value:e,label:e}:e);let d=e({type:"checkbox",title:n,description:r,submit:o,getValue:e=>e.length?Array.prototype.filter.call(e,e=>e.checked).map(e=>e.value):!!e.checked&&e.value,form:t`
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
~~~`}function tt(e){return e()}function ti(e){return e}function ta(e){return e({placeholder:"13+",title:"Your Age",submit:!0})}function tn(e){return e}function tr(e){return function(t={}){let{value:i,title:a,description:n,disabled:r,placeholder:o,submit:l,step:s="any",min:d,max:c}="number"==typeof t||"string"==typeof t?{value:+t}:t,u=e({type:"number",title:a,description:n,submit:l,attributes:{value:i,placeholder:o,step:s,min:d,max:c,autocomplete:"off",disabled:r},getValue:e=>e.valueAsNumber});return u.output.remove(),u.input.style.width="auto",u.input.style.fontSize="1em",u}}function to(e){return e`---
## Passwords

~~~js
import {password} from "@jashkenas/inputs"
~~~`}function tl(e){return e({value:"password"})}function ts(e){return e}function td(e){return e({title:"Your super secret password",description:"Less than 12 characters, please.",minlength:6,maxlength:12})}function tc(e){return e}function tu(e){return function(t={}){let{value:i,title:a,description:n,disabled:r,autocomplete:o="off",maxlength:l,minlength:s,pattern:d,placeholder:c,size:u,submit:p}="string"==typeof t?{value:t}:t,f=e({type:"password",title:a,description:n,submit:p,attributes:{value:i,autocomplete:o,maxlength:l,minlength:s,pattern:d,placeholder:c,size:u,disabled:r}});return f.output.remove(),f.input.style.fontSize="1em",f}}function tp(e){return e`---
## Wishlist (Send suggestions, please!)

* 3D coordinate input (for say, positioning a camera in a WebGL sketch)
* Geocoder search with location autocomplete that returns longitude and latitude.
* Degrees or radians input, for circular things, or angles.
* A dimensions input, or a box-model input, with margin (and optionally, padding).
* A map-projection-picker input, rendering little thumbnails of all the d3-geo-projections.
* Drag and drop file upload input.
* Alternative coordinate inputs, e.g. Right Ascension, Declination.
* Other useful formatting options.

---`}function tf(e,t){return function(i){let{form:a,type:n="text",attributes:r={},action:o,getValue:l,title:s,description:d,format:c,display:u,submit:p,options:f}=i,m=e`<div></div>`;if(a||(a=e`<form>
	<input name=input type=${n} />
  </form>`),Object.keys(r).forEach(e=>{let t=r[e];null!=t&&a.input.setAttribute(e,t)}),p&&a.append(e`<input name=submit type=submit style="margin: 0 0.75em" value="${"string"==typeof p?p:"Submit"}" />`),a.append(e`<output name=output style="font: 14px Menlo, Consolas, monospace; margin-left: 0.5em;"></output>`),s&&a.prepend(e`<div style="font: 700 0.9rem sans-serif; margin-bottom: 3px;">${s}</div>`),d&&a.append(e`<div style="font-size: 0.85rem; font-style: italic; margin-top: 3px;">${d}</div>`),c&&(c="function"==typeof c?c:t.format(c)),o)o(a);else{let v=p?"onsubmit":"button"==n?"onclick":"checkbox"==n||"radio"==n?"onchange":"oninput";a[v]=e=>{e&&e.preventDefault();let t=l?l(a.input):a.input.value;if(a.output){let i=u?u(t):c?c(t):t;if(i instanceof window.Element){for(;a.output.hasChildNodes();)a.output.removeChild(a.output.lastChild);a.output.append(i)}else a.output.value=i}a.value=t,"oninput"!==v&&a.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},"oninput"!==v&&(m.oninput=e=>e&&e.stopPropagation()&&e.preventDefault()),"onsubmit"!==v&&(a.onsubmit=e=>e&&e.preventDefault()),a[v]()}for(;a.childNodes.length;)m.appendChild(a.childNodes[0]);return a.append(m),a}}function tm(e){return e("d3-geo@1")}function tv(e){return e("d3-format@1")}function th(e){return e("topojson-client@3")}async function tb(){return(await fetch("https://cdn.jsdelivr.net/npm/world-atlas@1/world/110m.json")).json()}function tg(e,t){return e.feature(t,t.objects.land)}function tx(e,t){return e.feature(t,t.objects.countries)}async function ty(){return(await fetch("https://cdn.jsdelivr.net/npm/us-atlas@^2.1/us/states-10m.json")).json()}function tw(e,t){return e.feature(t,t.objects.nation)}function tA(e,t){return e.feature(t,t.objects.states)}function tC(e){return e.geoGraticule10()}function tE(e){let t=e`License: [MIT](https://opensource.org/licenses/MIT)`;return t.value="MIT",t}function t_(e){return e`*Clip art courtesy [ClipArt ETC](https://etc.usf.edu/clipart/), radio buttons and checkboxes courtesy [Amit Sch](https://observablehq.com/@meetamit/multiple-choice-inputs).*`}function tT(e,t){let a=e.module(),n=new Map([["capstan.gif",{url:new i.U(i(5521)),mimeType:"image/gif",toString:function(){return this.url}}]]);return a.builtin("FileAttachment",e.fileAttachments(e=>n.get(e))),a.variable(t()).define(["md","FileAttachment"],E),a.variable(t()).define(["md"],_),a.variable(t("sliderDemo")).define("sliderDemo",["md"],T),a.variable(t("viewof a")).define("viewof a",["slider"],S),a.variable(t("a")).define("a",["Generators","viewof a"],(e,t)=>e.input(t)),a.variable(t("viewof a1")).define("viewof a1",["slider"],O),a.variable(t("a1")).define("a1",["Generators","viewof a1"],(e,t)=>e.input(t)),a.variable(t("viewof a1_1")).define("viewof a1_1",["slider"],M),a.variable(t("a1_1")).define("a1_1",["Generators","viewof a1_1"],(e,t)=>e.input(t)),a.variable(t("viewof a2")).define("viewof a2",["slider"],k),a.variable(t("a2")).define("a2",["Generators","viewof a2"],(e,t)=>e.input(t)),a.variable(t("viewof a3")).define("viewof a3",["slider"],I),a.variable(t("a3")).define("a3",["Generators","viewof a3"],(e,t)=>e.input(t)),a.variable(t("viewof a4")).define("viewof a4",["slider"],L),a.variable(t("a4")).define("a4",["Generators","viewof a4"],(e,t)=>e.input(t)),a.variable(t("viewof a5")).define("viewof a5",["slider"],N),a.variable(t("a5")).define("a5",["Generators","viewof a5"],(e,t)=>e.input(t)),a.variable(t()).define(["md"],D),a.variable(t("slider")).define("slider",["input"],R),a.variable(t("buttonDemo")).define("buttonDemo",["md"],P),a.variable(t("viewof b")).define("viewof b",["button"],F),a.variable(t("b")).define("b",["Generators","viewof b"],(e,t)=>e.input(t)),a.variable(t()).define(["b"],$),a.variable(t("viewof b1")).define("viewof b1",["button"],B),a.variable(t("b1")).define("b1",["Generators","viewof b1"],(e,t)=>e.input(t)),a.variable(t()).define(["b1"],U),a.variable(t("button")).define("button",["input"],j),a.variable(t("selectDemo")).define("selectDemo",["md"],G),a.variable(t("viewof dd")).define("viewof dd",["select"],V),a.variable(t("dd")).define("dd",["Generators","viewof dd"],(e,t)=>e.input(t)),a.variable(t()).define(["dd"],H),a.variable(t("viewof dd1")).define("viewof dd1",["select"],z),a.variable(t("dd1")).define("dd1",["Generators","viewof dd1"],(e,t)=>e.input(t)),a.variable(t()).define(["dd1"],q),a.variable(t("viewof dd2")).define("viewof dd2",["select"],Z),a.variable(t("dd2")).define("dd2",["Generators","viewof dd2"],(e,t)=>e.input(t)),a.variable(t()).define(["dd2"],W),a.variable(t("viewof dd3")).define("viewof dd3",["select"],J),a.variable(t("dd3")).define("dd3",["Generators","viewof dd3"],(e,t)=>e.input(t)),a.variable(t()).define(["dd3"],X),a.variable(t("select")).define("select",["input","html"],Q),a.variable(t("autoSelectDemo")).define("autoSelectDemo",["md"],Y),a.variable(t("viewof as")).define("viewof as",["autoSelect","usa"],K),a.variable(t("as")).define("as",["Generators","viewof as"],(e,t)=>e.input(t)),a.variable(t()).define(["as"],ee),a.variable(t("autoSelect")).define("autoSelect",["input","html"],et),a.variable(t("colorDemo")).define("colorDemo",["md"],ei),a.variable(t("viewof c")).define("viewof c",["color"],ea),a.variable(t("c")).define("c",["Generators","viewof c"],(e,t)=>e.input(t)),a.variable(t("viewof c1")).define("viewof c1",["color"],en),a.variable(t("c1")).define("c1",["Generators","viewof c1"],(e,t)=>e.input(t)),a.variable(t("color")).define("color",["input"],er),a.variable(t("coordinatesDemo")).define("coordinatesDemo",["md"],eo),a.variable(t("viewof coords1")).define("viewof coords1",["coordinates"],el),a.variable(t("coords1")).define("coords1",["Generators","viewof coords1"],(e,t)=>e.input(t)),a.variable(t()).define(["coords1"],es),a.variable(t("viewof coords2")).define("viewof coords2",["coordinates"],ed),a.variable(t("coords2")).define("coords2",["Generators","viewof coords2"],(e,t)=>e.input(t)),a.variable(t()).define(["coords2"],ec),a.variable(t("coordinates")).define("coordinates",["html","input"],eu),a.variable(t("worldMapCoordinatesDemo")).define("worldMapCoordinatesDemo",["md"],ep),a.variable(t("viewof worldMap1")).define("viewof worldMap1",["worldMapCoordinates"],ef),a.variable(t("worldMap1")).define("worldMap1",["Generators","viewof worldMap1"],(e,t)=>e.input(t)),a.variable(t()).define(["worldMap1"],em),a.variable(t("worldMapCoordinates")).define("worldMapCoordinates",["html","DOM","d3geo","graticule","land","countries","input"],ev),a.variable(t("usaMapCoordinatesDemo")).define("usaMapCoordinatesDemo",["md"],eh),a.variable(t("viewof usaMap1")).define("viewof usaMap1",["usaMapCoordinates"],eb),a.variable(t("usaMap1")).define("usaMap1",["Generators","viewof usaMap1"],(e,t)=>e.input(t)),a.variable(t()).define(["usaMap1"],eg),a.variable(t("viewof usaMap2")).define("viewof usaMap2",["usaMapCoordinates"],ex),a.variable(t("usaMap2")).define("usaMap2",["Generators","viewof usaMap2"],(e,t)=>e.input(t)),a.variable(t()).define(["usaMap2"],ey),a.variable(t("usaMapCoordinates")).define("usaMapCoordinates",["html","DOM","d3geo","nation","states","input"],ew),a.variable(t("dateDemo")).define("dateDemo",["md"],eA),a.variable(t("viewof d")).define("viewof d",["date"],eC),a.variable(t("d")).define("d",["Generators","viewof d"],(e,t)=>e.input(t)),a.variable(t("viewof d1")).define("viewof d1",["date"],eE),a.variable(t("d1")).define("d1",["Generators","viewof d1"],(e,t)=>e.input(t)),a.variable(t("date")).define("date",["input"],e_),a.variable(t("timeDemo")).define("timeDemo",["md"],eT),a.variable(t("viewof t")).define("viewof t",["time"],eS),a.variable(t("t")).define("t",["Generators","viewof t"],(e,t)=>e.input(t)),a.variable(t()).define(["t"],eO),a.variable(t("viewof t1")).define("viewof t1",["time"],eM),a.variable(t("t1")).define("t1",["Generators","viewof t1"],(e,t)=>e.input(t)),a.variable(t()).define(["t1"],ek),a.variable(t("time")).define("time",["input"],eI),a.variable(t("fileDemo")).define("fileDemo",["md"],eL),a.variable(t("viewof e")).define("viewof e",["file"],eN),a.variable(t("e")).define("e",["Generators","viewof e"],(e,t)=>e.input(t)),a.variable(t("viewof e1")).define("viewof e1",["file"],eD),a.variable(t("e1")).define("e1",["Generators","viewof e1"],(e,t)=>e.input(t)),a.variable(t()).define(["html","e1","Files"],eR),a.variable(t("file")).define("file",["input"],eP),a.variable(t("textDemo")).define("textDemo",["md"],eF),a.variable(t("viewof f")).define("viewof f",["text"],e$),a.variable(t("f")).define("f",["Generators","viewof f"],(e,t)=>e.input(t)),a.variable(t("viewof f1")).define("viewof f1",["text"],eB),a.variable(t("f1")).define("f1",["Generators","viewof f1"],(e,t)=>e.input(t)),a.variable(t()).define(["f1"],eU),a.variable(t("viewof f2")).define("viewof f2",["text"],ej),a.variable(t("f2")).define("f2",["Generators","viewof f2"],(e,t)=>e.input(t)),a.variable(t()).define(["f2"],eG),a.variable(t("text")).define("text",["input"],eV),a.variable(t("textareaDemo")).define("textareaDemo",["md"],eH),a.variable(t("viewof g")).define("viewof g",["textarea"],ez),a.variable(t("g")).define("g",["Generators","viewof g"],(e,t)=>e.input(t)),a.variable(t()).define(["g"],eq),a.variable(t("viewof g1")).define("viewof g1",["textarea"],eZ),a.variable(t("g1")).define("g1",["Generators","viewof g1"],(e,t)=>e.input(t)),a.variable(t()).define(["g1"],eW),a.variable(t("textarea")).define("textarea",["input","html"],eJ),a.variable(t("radioDemo")).define("radioDemo",["md"],eX),a.variable(t("viewof r")).define("viewof r",["radio"],eQ),a.variable(t("r")).define("r",["Generators","viewof r"],(e,t)=>e.input(t)),a.variable(t()).define(["r"],eY),a.variable(t("viewof r1")).define("viewof r1",["radio"],eK),a.variable(t("r1")).define("r1",["Generators","viewof r1"],(e,t)=>e.input(t)),a.variable(t()).define(["r1"],e1),a.variable(t("radio")).define("radio",["input","html"],e0),a.variable(t("checkboxDemo")).define("checkboxDemo",["md"],e2),a.variable(t("viewof ch")).define("viewof ch",["checkbox"],e5),a.variable(t("ch")).define("ch",["Generators","viewof ch"],(e,t)=>e.input(t)),a.variable(t()).define(["ch"],e3),a.variable(t("viewof ch1")).define("viewof ch1",["checkbox"],e4),a.variable(t("ch1")).define("ch1",["Generators","viewof ch1"],(e,t)=>e.input(t)),a.variable(t()).define(["ch1"],e7),a.variable(t("viewof ch3")).define("viewof ch3",["checkbox"],e6),a.variable(t("ch3")).define("ch3",["Generators","viewof ch3"],(e,t)=>e.input(t)),a.variable(t()).define(["ch3"],e8),a.variable(t("checkbox")).define("checkbox",["input","html"],e9),a.variable(t("numberDemo")).define("numberDemo",["md"],te),a.variable(t("viewof h")).define("viewof h",["number"],tt),a.variable(t("h")).define("h",["Generators","viewof h"],(e,t)=>e.input(t)),a.variable(t()).define(["h"],ti),a.variable(t("viewof h1")).define("viewof h1",["number"],ta),a.variable(t("h1")).define("h1",["Generators","viewof h1"],(e,t)=>e.input(t)),a.variable(t()).define(["h1"],tn),a.variable(t("number")).define("number",["input"],tr),a.variable(t("passwordDemo")).define("passwordDemo",["md"],to),a.variable(t("viewof i")).define("viewof i",["password"],tl),a.variable(t("i")).define("i",["Generators","viewof i"],(e,t)=>e.input(t)),a.variable(t()).define(["i"],ts),a.variable(t("viewof i1")).define("viewof i1",["password"],td),a.variable(t("i1")).define("i1",["Generators","viewof i1"],(e,t)=>e.input(t)),a.variable(t()).define(["i1"],tc),a.variable(t("password")).define("password",["input"],tu),a.variable(t()).define(["md"],tp),a.variable(t("input")).define("input",["html","d3format"],tf),a.variable(t("d3geo")).define("d3geo",["require"],tm),a.variable(t("d3format")).define("d3format",["require"],tv),a.variable(t("topojson")).define("topojson",["require"],th),a.variable(t("world")).define("world",tb),a.variable(t("land")).define("land",["topojson","world"],tg),a.variable(t("countries")).define("countries",["topojson","world"],tx),a.variable(t("usa")).define("usa",ty),a.variable(t("nation")).define("nation",["topojson","usa"],tw),a.variable(t("states")).define("states",["topojson","usa"],tA),a.variable(t("graticule")).define("graticule",["d3geo"],tC),a.variable(t("viewof license")).define("viewof license",["md"],tE),a.variable(t("license")).define("license",["Generators","viewof license"],(e,t)=>e.input(t)),a.variable(t()).define(["md"],t_),a}function tS(e){return e`# Circle Legend

To use in your notebook:

~~~js
import { legendCircle } from "@harrystevens/circle-legend";
~~~`}function tO(e,t,i){return e().scale(t.scaleSqrt().domain([0,500]).range([0,40])).tickValues([15,150,500]).tickFormat((e,t,i)=>t===i.length-1?e+" bushels of hay":e).tickSize(i)}function tM(e){return e({title:"Tick size",value:5,min:0,max:100,step:1,description:"What happens when you adjust this?"})}function tk(e,t,i,a){let n=e.select(t.svg()).attr("height",90).attr("width",180+i);return n.append("g").call(a),n.node()}function tI(){return function(e){let t,i,a=e=>e,n=5;function r(e){let r=e.select("g");r._groups[0][0]||(r=e.append("g")),r.attr("transform","translate(11,)");let o=i||t.ticks(),l=o[o.length-1];r.selectAll("circle").data(o.slice().reverse()).enter().append("circle").attr("fill","none").attr("stroke","currentColor").attr("cx",t(l)).attr("cy",t).attr("r",t),r.selectAll("line").data(o).enter().append("line").attr("stroke","currentColor").attr("stroke-dasharray","4, 2").attr("x1",t(l)).attr("x2",n+2*t(l)).attr("y1",e=>2*t(e)).attr("y2",e=>2*t(e)),r.selectAll("text").data(o).enter().append("text").attr("font-family","'Helvetica Neue', sans-serif").attr("font-size",11).attr("dx",3).attr("dy",4).attr("x",n+2*t(l)).attr("y",e=>2*t(e)).text(a)}return r.tickSize=function(e){return arguments.length?(n=+e,r):n},r.scale=function(e){return arguments.length?(t=e,r):t},r.tickFormat=function(e){return arguments.length?(a=e,r):a},r.tickValues=function(e){return arguments.length?(i=e,r):i},r}}function tL(e){return e`## Todo
* Ensure circles are drawn biggest to smallest so they can be styled
* Make it work with a threshold scale
`}function tN(e){return e("d3-scale@3","d3-selection@1")}function tD(e,t){let i=e.module();i.variable(t()).define(["md"],tS),i.variable(t("legend")).define("legend",["legendCircle","d3","tickSize"],tO),i.variable(t("viewof tickSize")).define("viewof tickSize",["slider"],tM),i.variable(t("tickSize")).define("tickSize",["Generators","viewof tickSize"],(e,t)=>e.input(t)),i.variable(t()).define(["d3","DOM","tickSize","legend"],tk),i.variable(t("legendCircle")).define("legendCircle",tI),i.variable(t()).define(["md"],tL),i.variable(t("d3")).define("d3",["require"],tN);let a=e.module(tT);return i.import("slider",a),i}function tR(e){return e`# TOC

This notebook can generate a table of contents automatically for your notebook.

\`\`\`js
import {toc} from "@harrystevens/toc"
\`\`\`

Here’s an example:`}function tP(e){return e({selector:"h2,h3,h4,h5,h6",heading:"Jump to:"})}function tF(e){return e`## Implementation`}function t$(e,t,i,a){return function(n){let r=n&&n.selector?n.selector:"h1,h2,h3,h4,h5,h6",o=n&&n.heading?n.heading:"Table of Contents";return e.observe(e=>{let n=[];function l(){let a=Math.min(...r.split(",").map(e=>+e.replace("h",""))),l=Array.from(document.querySelectorAll(r));(l.length!==n.length||l.some((e,t)=>n[t]!==e))&&e(t`<b>${o}</b><ul>${Array.from(n=l,e=>{let n=parseInt(e.tagName.slice(1));return Object.assign(t`${n>a?"<ul>".repeat(n-a)+"<li>":"<li>"}<a href=#${e.id}>${i.text(e.textContent)}`,{onclick:t=>(t.preventDefault(),e.scrollIntoView())})})}`)}let s=new a(l);return s.observe(document.body,{childList:!0,subtree:!0}),l(),()=>s.disconnect()})}}function tB(e){return e`## Hooray

It worked!`}function tU(e){return e`### This is a sub-section`}function tj(e){return e`A little text`}function tG(e){return e`#### A sub-sub-section?`}function tV(e){return e`##### A sub-sub-sub-section?`}function tH(e){return e`###### A sub-sub-sub-sub-section! (h6!)`}function tz(e){return e`### Another sub-section`}function tq(e,t){let i=e.module();return i.variable(t()).define(["md"],tR),i.variable(t()).define(["toc"],tP),i.variable(t()).define(["md"],tF),i.variable(t("toc")).define("toc",["Generators","html","DOM","MutationObserver"],t$),i.variable(t()).define(["md"],tB),i.variable(t()).define(["md"],tU),i.variable(t()).define(["md"],tj),i.variable(t()).define(["md"],tG),i.variable(t()).define(["md"],tV),i.variable(t()).define(["md"],tH),i.variable(t()).define(["md"],tz),i}function tZ(e){return e`# Keys

A reusable notebook for displaying platform-appropriate keyboard shortcuts.`}function tW(e){return e("Alt-Enter")}function tJ(e){return e("Alt-Enter")}function tX(e){return e("Alt-Enter")}function tQ(e){return e("Alt-Enter")}function tY(){return/Mac|iPhone/.test(navigator.platform)}function tK(){return navigator.platform}function t1(e){return e?{Alt:"⌥",Tab:"⇥",Up:"↑",Down:"↓",Left:"←",Right:"→",Mod:"⌘",Cmd:"⌘",Ctrl:"⌃",Shift:"⇧",Enter:"↩︎",Backspace:"⌫",Escape:"⎋"}:{Mod:"Ctrl"}}function t0(e){return e?{Alt:"Option",Backspace:"Delete",Mod:"Command",Cmd:"Command",Ctrl:"Control",Enter:"Return",Escape:"Esc","/":"Slash","?":"Question mark"}:{Mod:"Ctrl"}}function t2(e){return e?{Alt:"⌥opt",Tab:"⇥tab",Up:"↑",Down:"↓",Left:"←",Right:"→",Mod:"⌘cmd",Cmd:"⌘cmd",Ctrl:"⌃ctrl",Shift:"⇧shift",Enter:"↩︎return",Backspace:"⌫delete",Escape:"⎋esc"}:{Up:"↑",Down:"↓",Left:"←",Right:"→",Mod:"Ctrl"}}function t5(){return{Ctrl:-4,Alt:-3,Shift:-2,Mod:-1,Cmd:-1}}function t3(e){return function(t,i){let a=t.split("-");return a.slice().sort((t,i)=>(e[t]||a.indexOf(t))-(e[i]||a.indexOf(i))).map(e=>i&&i[e]||e)}}function t4(e,t){return function(i){return e(i,t).join("-")}}function t7(e,t){return function(i){return e(i,t).join("")}}function t6(e,t,i){return function(a){return e(a)+(t?` ${i(a)}`:"")}}function t8(e,t){return function(i){return e.html`<span style="font-family: var(--sans-serif); font-size: 90%;">${t(i)}</span>`}}function t9(e,t,i){return function(a){return e.html`${t(a,i).map(t=>e.html`<span style="font: 500 12px/1.25 var(--sans-serif); margin: 0 4px; padding: 0 4px; border-radius: 0.25rem; box-shadow: 0 0 0 1px #dedede, 1px 1px 0 1px #e8e8e8; display: inline-block;">${t.toLowerCase()}`)}</span>`}}function ie(e,t){let i=e.module();return i.variable(t()).define(["md"],tZ),i.variable(t()).define(["keyWords"],tW),i.variable(t()).define(["keySymbols"],tJ),i.variable(t()).define(["keys"],tX),i.variable(t()).define(["buttons"],tQ),i.variable(t("mac")).define("mac",tY),i.variable(t()).define(tK),i.variable(t("symbols")).define("symbols",["mac"],t1),i.variable(t("words")).define("words",["mac"],t0),i.variable(t("shortwords")).define("shortwords",["mac"],t2),i.variable(t("order")).define("order",t5),i.variable(t("remap")).define("remap",["order"],t3),i.variable(t("keyWords")).define("keyWords",["remap","words"],t4),i.variable(t("keySymbols")).define("keySymbols",["remap","symbols"],t7),i.variable(t("keys")).define("keys",["keyWords","symbols","keySymbols"],t6),i.variable(t("keyStyled")).define("keyStyled",["htl","keys"],t8),i.variable(t("buttons")).define("buttons",["htl","remap","shortwords"],t9),i}function it(e){return e`# Text search input with autocomplete

A reusable autocomplete search that can be used in a real-time fashion (e.g., querying an API). It exploits [\`<datalist>\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist), the HTML Data List element.`}function ii(e){return e`## How to use it in your notebook

\`\`\`javascript
import { SearchForm } from "@floatingpurr/input-autocomplete"
\`\`\``}function ia(e){return e`## Examples`}function ir(e){return e`This search form can be used with a flat array of suggestions. Let's give it a spin:`}function io(e,t){return e({placeholder:"Type-in to search...",description:"Searching en.wikipedia.org entities",async suggestion(e){let i=await t.json(`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${e}&namespace=0&limit=10&origin=*`);return i[1]}})}function il(e){return e}function is(e){return e`But it can be also useful to explore and return data from an array of objects coming from an API, e.g.:`}async function id(e){let t=await e.json("https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=Skywalker&namespace=0&limit=10&origin=*");return t[1].map((e,i)=>({entry:e,url:t[3][i]}))}function ic(e){return e`Let's see it in action:`}function iu(e,t){return e({placeholder:"Type-in to search...",description:"Searching en.wikipedia.org entities with their URLs",format:e=>e.entry,async suggestion(e){let i=await t.json(`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${e}&namespace=0&limit=10&origin=*`);return i[1].map((e,t)=>({entry:e,url:i[3][t]}))}})}function ip(e){return e}function im(e){return e`## Configuration

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

Heavily inspired by the example of [Chris Henrick](https://observablehq.com/@clhenrick/autocomplete-search) and by suggestions of [Fabian Iwand](https://talk.observablehq.com/t/dynamic-datalist/6404/2).`}function ih(e,t,i){return function({uid:a=e.uid("autosuggestion").id,placeholder:n="",description:r="",format:o=e=>e,suggestion:l=()=>[]}={}){let s=t.html`<input 
        type="text"
        placeholder="${n}" 
        list="${a}"
        autocomplete="off"
      >`,d=t.html`<div style="font-size: 0.85rem; font-style: italic; margin-top: 3px;">${r}</div>`,c=t.html`<datalist id="${a}">`,u=t.html`<div>${s}${d}${c}`,p=[];u.value="",u.onsubmit=e=>e.preventDefault(),u.onchange=e=>{let t=e.target.value;u.value=p.find(e=>o(e)==t)||"",s.blur(),u.dispatchEvent(new CustomEvent("input"))};let f=new Map,m=async e=>f.get(e)||(e?f.set(e,await l(e)):f.set(e,[]),f.get(e));return s.oninput=async e=>{p=await m(e.target.value),i.select(`#${a}`).selectAll("option").data(p).join("option").attr("value",o)},u}}function ib(e,t){let i=e.module();return i.variable(t()).define(["md"],it),i.variable(t()).define(["md"],ii),i.variable(t()).define(["md"],ia),i.variable(t()).define(["md"],ir),i.variable(t("viewof wiki")).define("viewof wiki",["SearchForm","d3"],io),i.variable(t("wiki")).define("wiki",["Generators","viewof wiki"],(e,t)=>e.input(t)),i.variable(t()).define(["wiki"],il),i.variable(t()).define(["md"],is),i.variable(t()).define(["d3"],id),i.variable(t()).define(["md"],ic),i.variable(t("viewof wikiObject")).define("viewof wikiObject",["SearchForm","d3"],iu),i.variable(t("wikiObject")).define("wikiObject",["Generators","viewof wikiObject"],(e,t)=>e.input(t)),i.variable(t()).define(["wikiObject"],ip),i.variable(t()).define(["md"],im),i.variable(t()).define(["md"],iv),i.variable(t("SearchForm")).define("SearchForm",["DOM","htl","d3"],ih),i}function ig(e){return e`# Menu Localidade`}function ix(e){return e({value:["RIO DE JANEIRO","S\xc3O PAULO"],cores:["#2F87F5","#D8C56C","#DC5988","#6CC28D"]})}function iy(e){return e.value=["RIO DE JANEIRO","BELO HORIZONTE"]}function iw(e){return e}function iA(e,t){return function(i){let a=[...i.cores],n=new Map;function r(){let t,i,r;return t=document.createElement("input"),i=document.createElement("datalist"),t.setAttribute("list","menu-municipios-options"),t.setAttribute("placeholder","Adicione um local"),t.style.borderRadius="6px",t.style.backgroundColor="white",t.style.border="dashed 2px #c4c4c4",t.style.fontFamily="Roboto Condensed",t.style.padding="3px",t.style.minWidth="150px",t.style.maxWidth="240px",t.style.height="20px",i.setAttribute("id","menu-municipios-options"),e.forEach(e=>{(r=document.createElement("option")).setAttribute("value",e.nome),i.appendChild(r)}),t.appendChild(i),t.addEventListener("input",e=>{e.stopPropagation()}),t.addEventListener("change",i=>{let r=t.value;t.value="";let o=e.find(e=>e.nome===r);if(o&&!n.has(o.cod)&&a.length>0){let s=a.pop(),d={nome:r,cor:s,cod:o.cod};o.uf&&(d.uf=o.uf),n.set(d.cod,d),l()}}),t}function o(e){let t=document.createElement("button"),i=document.createElement("span");if(t.style.backgroundColor=e.cor,t.style.display="inline-flex",t.style.alignItems="flex-center",t.style.borderRadius="6px",t.style.border="none",t.style.fontFamily="Roboto Condensed",t.style.fontWeight="700",t.style.fontSize="14px",t.style.marginRight="6px",t.style.padding="3px 5px",i.style.lineHeight="16px",i.style.color="black",e.nome.indexOf("(")>0||e.cod<100?i.textContent=e.nome:i.textContent=e.nome+" ("+e.uf+")",t.appendChild(i),n.size>1){let r=document.createElement("span");r.style.paddingLeft="5px",r.style.fontWeight="400",r.textContent="✖",r.style.lineHeight="16px",r.style.color="black",t.appendChild(r)}return t.addEventListener("click",t=>{n.size>1&&(n.delete(e.cod),a.push(e.cor),l())}),t}function l(){for(let e of(d.innerHTML="",n.values()))d.appendChild(o(e));4==n.size?c&&(s.removeChild(c),c=null):null===c&&(c=r(),s.appendChild(c)),s.dispatchEvent(new t("input"))}let s=document.createElement("div"),d=document.createElement("div"),c=r();return d.style.display="inline",s.appendChild(d),s.appendChild(c),Object.defineProperty(s,"value",{get:()=>[...n.values()],set(t){for(let r of(n.clear(),a=[...i.cores],t)){if("string"==typeof r&&(r={nome:r}),void 0===r.cor)r.cor=a.pop();else{let o=a.indexOf(r.cor);o>=0&&a.splice(o,1)}if(void 0===r.cod){let s=e.find(e=>0==e.nome.localeCompare(r.nome));s&&(r.cod=s.cod,s.uf&&(r.uf=s.uf))}r.cod&&!n.has(r.cod)&&n.set(r.cod,r)}l()}}),s.value=i.value||[],s}}function iC(e){return e("municipios-ord@1.csv").csv({separator:";"})}function iE(e){return e.html`<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
</style>`}function i_(e,t){let a=e.module(),n=new Map([["municipios-ord@1.csv",{url:new i.U(i(78)),mimeType:"text/csv",toString:function(){return this.url}}]]);return a.builtin("FileAttachment",e.fileAttachments(e=>n.get(e))),a.variable(t()).define(["md"],ig),a.variable(t("viewof sels")).define("viewof sels",["menuLocalidade"],ix),a.variable(t("sels")).define("sels",["Generators","viewof sels"],(e,t)=>e.input(t)),a.variable(t()).define(["viewof sels"],iy),a.variable(t()).define(["sels"],iw),a.variable(t("menuLocalidade")).define("menuLocalidade",["municipios","Event"],iA),a.variable(t("municipios")).define("municipios",["FileAttachment"],iC),a.variable(t()).define(["htl"],iE),a}function iT(e){return e`# Sliders`}function iS(e){return e`## Mapa`}function iO(e){return e`### Ano`}function iM(e){return e({range:[2012,2019],value:2015,ticks:1,width:600})}function ik(e){return e`### Intervalo Número de Nascimentos`}function iI(){return function(e){return["0","10","100","1K","10K","50K","100K","1M"][e]}}function iL(e,t,i){return e({range:[0,10,1e3,1e4,1e5,5e5,1e6,1e7],ticksLabelFormatter:t},i)}function iN(e,t,i){return{ano:e,anoMesTrilha:t,nascimentosTotais:i}}function iD(e,t,i){let a=[];for(let n=2012;n<=2018;n++)for(let r=1;r<=12;r++)a.push(100*n+r);a.push(201901);let o=e=>~~(a[e]/100),l=t=>e[a[t]%100-1];return t({range:a,ticksLabelFormatter:o,handleLabelFormatter:l,ticks:12,width:600},i)}function iR(){return["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"]}function iP(e){return e`## Componentes`}function iF(){return function(e,t){let i=e.range;return e.range=[0,i.length-1],e.ticksLabelFormatter||(e.ticksLabelFormatter=e=>i[e]),t(e)}}function i$(e,t){return function(i){void 0!==i.value&&(i.value=[i.range[0],i.value]);let a=e(i);t.select(a).selectAll(".handle--custom").each(function(e){"w"===e.type&&t.select(this).remove()}),t.select(a).selectAll(".handle--w").remove(),t.select(a).select(".selection").attr("pointer-events","none").attr("opacity",0);let n=a.vl;return a.vl=function(e){return void 0===e?n.call(a)[1]:n.call(a,[0,e])},a}}function iB(e,t){return function(i){let{range:a=[0,10],width:n=400,height:r=60,marginTop:o=20,marginBottom:l=20,marginRight:s=20,marginLeft:d=20,ticks:c=1,value:u=null,dispatchOnDrag:p=!1,ticksLabelFormatter:f=e=>e,handleLabelFormatter:m=null}=i;null==u&&(u=[...a]);let v=n-d-s,h=r-o-l,b=[];for(let g=a[0];g<=a[1];g+=c)b.push(g);let x=e.scaleLinear().domain(a).range([0,v]),y=e.select(t.svg(n,r)),w=y.node(),A=y.append("g").attr("transform",`translate(${d},${o})`);y.on("click touch",t=>{let i=t.offsetX-d;if(i>=0&&i<=v){let a=e.brushSelection(_.node())||[0,0],n=a.map(e=>Math.round(x.invert(e))),r=Math.round(x.invert(i));a[r<n[0]?0:1]=x(r),_.call(E.move,a)}});let C=[0,0];var E=e.brushX().extent([[0,0],[v,h]]).on("brush",function(e){let t=e.selection;C=t;let i=t[1]-t[0];if(S.attr("transform",(e,i)=>`translate(${t[i]},0)`),m){let a=t.map(x.invert).map(Math.round);S.select("text").attr("text-anchor",e=>i>30?"middle":"w"==e.type?"end":"start").text(e=>m("w"==e.type?a[0]:a[1]))}p&&w.dispatchEvent(new CustomEvent("input"))}).on("end",function(t){if(t.sourceEvent){let i=(t.selection||C).map(x.invert).map(Math.round);e.select(this).transition().call(t.target.move,i.map(x)),p||setTimeout(e=>{w.dispatchEvent(new CustomEvent("input"))})}});let _=A.append("g").attr("class","brush").call(E);_.select(".selection").attr("fill","#151472CC").style("cursor","grab"),_.select(".overlay").attr("fill","#E5E5E5").attr("pointer-events","none");let T=_.insert("g",".selection").attr("class","ticks").selectAll(".tick").data(b).enter().append("g").attr("class","tick").attr("transform",e=>`translate(${x(e)},0)`);T.append("line").attr("x1",0).attr("x2",0).attr("y1",0).attr("y2",h).attr("stroke","#999"),f&&T.append("text").attr("x",0).attr("y",h+4).attr("dominant-baseline","hanging").attr("text-anchor","middle").attr("font-size","12px").attr("font-weight","400").attr("fill","#151472").text(f);let S=_.selectAll(".handle--custom").data([{type:"w"},{type:"e"}]).enter().append("g").attr("class","handle--custom");return S.append("rect").attr("stroke","#000").attr("fill","#151472").attr("cursor","ew-resize").attr("width",8).attr("height",h+4).attr("y",-2).attr("x",-4).attr("rx",4),m&&S.append("text").attr("fill","#F00").attr("y",-4).attr("font-size","12px").attr("font-weight","400").attr("fill","#151472"),w.vl=function(t){if(void 0===t)return(e.brushSelection(_.node())||[0,0]).map(e=>Math.round(x.invert(e)));if(t[0]>t[1]){let i=t[0];t[0]=t[1],t[1]=i}return t[1]<a[0]?(t[0]=a[0],t[1]=a[0]):t[0]>a[1]?(t[0]=a[1],t[1]=a[1]):(t[0]<a[0]&&(t[0]=a[0]),t[1]>a[1]&&(t[1]=a[1])),_.call(E.move,t.map(x)),w.dispatchEvent(new CustomEvent("input")),w},Object.defineProperty(w,"value",{get(){return this.vl()},set(e){this.vl(e)}}),w.value=u,w}}function iU(e){return e`
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
svg {
	font-family: "Roboto Condensed";
}

* { user-select: none;  }


</style>
`}function ij(e,t){let i=e.module();return i.variable(t()).define(["md"],iT),i.variable(t()).define(["md"],iS),i.variable(t()).define(["md"],iO),i.variable(t("viewof ano")).define("viewof ano",["sliderbase"],iM),i.variable(t("ano")).define("ano",["Generators","viewof ano"],(e,t)=>e.input(t)),i.variable(t()).define(["md"],ik),i.variable(t("fmt")).define("fmt",iI),i.variable(t("viewof nascimentosTotais")).define("viewof nascimentosTotais",["sliderArray","fmt","sliderRangeBase"],iL),i.variable(t("nascimentosTotais")).define("nascimentosTotais",["Generators","viewof nascimentosTotais"],(e,t)=>e.input(t)),i.variable(t("filtro")).define("filtro",["ano","anoMesTrilha","nascimentosTotais"],iN),i.variable(t("viewof anoMesTrilha")).define("viewof anoMesTrilha",["meses","sliderArray","sliderRangeBase"],iD),i.variable(t("anoMesTrilha")).define("anoMesTrilha",["Generators","viewof anoMesTrilha"],(e,t)=>e.input(t)),i.variable(t("meses")).define("meses",iR),i.variable(t()).define(["md"],iP),i.variable(t("sliderArray")).define("sliderArray",iF),i.variable(t("sliderbase")).define("sliderbase",["sliderRangeBase","d3"],i$),i.variable(t("sliderRangeBase")).define("sliderRangeBase",["d3","DOM"],iB),i.variable(t("style_slider")).define("style_slider",["html"],iU),i}function iG(e){return e`# Scatter-plot dados mapa`}function iV(e){return e.range([2012,2019],{label:"Ano",step:1,value:2012})}function iH(e){return e.button("Limpar zoom")}function iz(){return!1}function iq(e){return e`<svg width="18" height="18" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="padding:5px;background:white;border-radius:10px;">
<path d="M7.1595 0H3.47242C1.56577 0 0 1.55368 0 3.47373V6.50535C0 6.78325 0.227241 7.01057 0.505035 7.01057C0.782828 7.01057 1.01007 6.78325 1.01007 6.50535L1.01016 3.47373C1.01016 2.12209 2.10868 1.02317 3.45979 1.02317H7.13425C8.51057 1.02317 9.60914 2.12211 9.60914 3.47373V6.1264C9.60914 7.47804 8.51061 8.57696 7.1595 8.57696L2.60116 8.57687L4.12907 7.04838C4.33112 6.84625 4.33112 6.53046 4.12907 6.32833C3.92702 6.1262 3.61134 6.1262 3.40929 6.32833L1.01016 8.72836C0.808105 8.93049 0.808105 9.24628 1.01016 9.44841L3.40929 11.8484C3.51031 11.9495 3.63653 12 3.77542 12C3.90173 12 4.04063 11.9495 4.14156 11.8484C4.34361 11.6463 4.34361 11.3305 4.14156 11.1284L2.60116 9.60017H7.1595C9.07882 9.60017 10.6319 8.04649 10.6319 6.12644V3.47378C10.6319 1.55373 9.06615 4.72183e-05 7.1595 4.72183e-05L7.1595 0Z" fill="#151472"/>
</svg>`}function iZ(e,t){return e({value:["RIO DE JANEIRO"],cores:t})}function iW(e,t){return e.select(t,{label:"Eixo X",format:e=>e.name,value:t[0]})}function iJ(e,t){return e.select(t,{label:"Eixo Y",format:e=>e.name,value:t[1]})}function iX(e,t){return e.select(t,{label:"Cor",format:e=>e.name,value:t[3]})}function iQ(e){return e}function iY(e){return e}function iK(e,t){return e({range:[1,10,100,1e3,1e4,5e4,1e5],value:[1,6],ticksLabelFormatter:e=>["0","10","100","1K","10K","50K","100K"][e],width:310,height:56},t)}function i1(e){return e}function i0(e){return e}function i2(e,t){return e.scaleThreshold(t.thresholds,t.range)}function i5(e,t,i){return e(t,{width:300,title:i.label})}function i3(e,t,i,a,n,r,o,l,s,d,c,u,p,f,m,v,h,b,g,x,y){let w=t=>e.filter(e=>e.cod==t.CODMUNRES)[0].cor,A=t.plot({width:i.width,height:i.height,marginBottom:40,x:{line:!0,ticks:10,label:a.label,domain:"IDH 2010"==a.name&&n.xmin<0?a.domain:void 0},y:{line:!0,label:r.label,domain:"IDH 2010"==r.name&&n.ymin<0?r.domain:void 0},marks:[t.dot(o,{x:"x",y:"y",title:e=>l(e.municipio)+`
${a.label}: ${e.x.toFixed(2)}`+`
${r.label}: ${e.y.toFixed(2)}`+`
${s.label}: ${e.val.toFixed(2)}`,fill:e=>d(e.val),stroke:"rgba(0,0,0,0.1)"}),t.dot(c,{x:"x",y:"y",symbol:{draw:u},title:e=>l(e.municipio)+`
${a.label}: ${e.x.toFixed(2)}`+`
${r.label}: ${e.y.toFixed(2)}`+`
${s.label}: ${e.val.toFixed(2)}`,stroke:"currentColor",fill:e=>w(e),r:1.7,strokeWidth:1})]});A.style.fontFamily=i.fontFamily,A.style.fontSize=11,A=b(A=h(A=m(A=p(A,e=>{f.value=e}),e=>v(e.municipio)),e=>{3==e.attr("r")&&e.attr("stroke","black")},e=>{3==e.attr("r")&&e.attr("stroke","rgba(0,0,0,0.1)")}),[o,c]);let C=g.html`<div style="position:relative;display:inline-block;">`;return C.append(A),n.xmin!=Number.NEGATIVE_INFINITY&&(C.append(x),x.style.position="absolute",x.style.right="10px",x.style.top="10px",x.onclick=()=>{f.value=y}),C}function i4(){return{width:400,height:300,fontFamily:"Roboto Condensed"}}function i7(e,t){return i=>{let a=e.value,n=a.map(e=>e.cod).indexOf(i.cod);if(n<0){if(a.length<4){let r=Object.assign({},i);r.cor=t(a),a.push(r)}}else a.length>1&&a.splice(n,1);e.value=a}}function i6(){return null}function i8(e){return e`<br>
# Implementação`}function i9(e){return e`## Cores municípios`}function ae(){return["#2F87F5","#D8C56C","#DC5988","#6CC28D"]}function at(e){return function(t){let i=[...e];for(let a of t){let n=i.indexOf(a.cor);n>=0&&i.splice(n,1)}if(i.length>0)return i[0]}}function ai(e,t,i){return e.html`<button style="background:${t(i)};">Próxima cor`}function aa(e){return e`<br>
## Flags`}function an(e,t){let i=e.canvas(200,200),a={draw:t},n=i.getContext("2d");return n.translate(100,100),n.strokeStyle="black",a.draw(n,30),n.stroke(),i.mySymbol=a,i}function ar(){return(e,t)=>{e.moveTo(0,0),e.bezierCurveTo(0,-(.5*t),-t,-(1.3*t),-t,-(1.8*t)),e.bezierCurveTo(-t,-(2.3*t),-(.5*t),-(2.8*t),0,-(2.8*t)),e.bezierCurveTo(.5*t,-(2.8*t),t,-(2.3*t),t,-(1.8*t)),e.bezierCurveTo(t,-(1.3*t),0,-(.5*t),0,0)}}function ao(e,t){return e.svg`<svg width=100 height=100>
 <path transform="translate(50,50)" 
 d="${t(10)}" stroke=black fill=none /> 
 </svg>`}function al(){return function(e){let t=(e,t,i,a,n,r)=>`C${e},${t} ${i},${a} ${n},${r}`;return"M 0,0"+t(0,-(.5*e),-e,-(1.3*e),-e,-(1.8*e))+t(-e,-(2.3*e),-(.5*e),-(2.8*e),0,-(2.8*e))+t(.5*e,-(2.8*e),e,-(2.3*e),e,-(1.8*e))+t(e,-(1.3*e),0,-(.5*e),0,0)+"Z"}}function as(e){return e`## Dados`}function ad(e,t,i,a,n,r,o){return e.map(e=>Object.assign(e,{x:+t.field(e),y:+i.field(e),val:+a.field(e),regiao:["N","NE","SE","S","CO"][Math.floor(e.CODMUNRES/1e5)-1],municipio:n.get(e.CODMUNRES)})).filter(e=>e.municipio&&r(e)&&e.x>=o.xmin&&e.y>=o.ymin&&e.x<=o.xmax&&e.y<=o.ymax)}function ac(e,t){let[i,a]=e.map(e=>[0,10,1e3,1e4,1e5,5e5,1e6][e]);return e=>e.ANO==t&&e.TOTAL>=i&&e.TOTAL<=a}function au(e,t){let i=e.map(e=>e.cod);return t.filter(e=>i.includes(e.CODMUNRES))}function ap(){return[{label:"M\xe9dia anual de polui\xe7\xe3o (\xb5g/m\xb3)",labelBarChart:"Polui\xe7\xe3o m\xe9dia por ano (\xb5g/m\xb3)",labelRanking:"Ranking por m\xe9dia de polui\xe7\xe3o",labelTooltip:"m\xe9dia anual (\xb5g/m\xb3)",name:"Polui\xe7\xe3o",field:e=>e.AVG_PM25,domain:[0,70],thresholds:[5,15,25,35],range:["#260800","#662514","#B26B59","#E5B8AC","#FFD6CC"].reverse()},{label:"Baixo peso (por cem nascidos vivos)",labelBarChart:"Baixo peso m\xe9dio anual (por 100 N.V.)",labelRanking:"Ranking por m\xe9dia de baixo peso",labelTooltip:"por cem nascidos vivos",name:"Baixo peso",field:e=>100*(e.BAIXO_PESO||0)/(e.TOTAL||1),domain:[0,200],thresholds:[5.2,6.8,8.3,100],range:["#00261D","#125948","#4D9986","#99CCC0","#CEF2E9"].reverse()},{label:"\xd3bitos perinatais (por mil nascidos vivos)",labelBarChart:"\xd3bitos perinatais anuais (por mil N.V.)",labelRanking:"Ranking por m\xe9dia de \xf3bitos perinatais",labelTooltip:"por mil nascidos vivos",name:"Mort. Perinatal",field:e=>1e3*(e.OBITOS_PERINATAIS||0)/(e.TOTAL||1),domain:[0,20],thresholds:[0,.6,1.4,3.9],range:["#070040","#291C8C","#6359B2","#A9A3D9","#DDD9FF"].reverse()},{label:"\xd3bitos neonatais (por mil nascidos vivos)",labelBarChart:"\xd3bitos neonatais anuais (por mil N.V.)",labelRanking:"Ranking por m\xe9dia de \xf3bitos neonatais",labelTooltip:"por mil nascidos vivos",name:"Mort. Neonatal",field:e=>1e3*(e.OBITOS_NEONATAIS||0)/(e.TOTAL||1),domain:[0,30],thresholds:[0,.7,1.7,3.9],range:["#200040","#541C8C","#8659B2","#BEA3D9","#ECD9FF"].reverse()},{label:"\xd3bitos infantis (por mil nascidos vivos)",labelBarChart:"\xd3bitos infantis anuais (por mil N.V.)",labelRanking:"Ranking por m\xe9dia de \xf3bitos infantis",labelTooltip:"por mil nascidos vivos",name:"Mort. Infantil",field:e=>1e3*(e.OBITOS_INFANTIS||0)/(e.TOTAL||1),domain:[0,100],thresholds:[0,9,14,20],range:["#260024","#661461","#B259AD","#E5ACE2","#FFD9FD"].reverse()},{label:"\xcdndice de Desenvolvimento Humano (2010)",labelBarChart:"\xcdndice de Desenvolvimento Humano (2010)",labelRanking:"Ranking por IDH (2010)",labelTooltip:"",name:"IDH 2010",field:e=>e.IDH||0,domain:[.4,.9],thresholds:[.6,.65,.7,.75],range:["#001A40","#1C498C","#597DB2","#A3B8D9","#D9E8FF"].reverse()}]}function af(e){return function(t){return e.filter(e=>e.x>=t.xmin&&e.y>=t.ymin&&e.x<=t.xmax&&e.y<=t.ymax)}}function am(){return{xmin:Number.NEGATIVE_INFINITY,ymin:Number.NEGATIVE_INFINITY,xmax:Number.POSITIVE_INFINITY,ymax:Number.POSITIVE_INFINITY}}function av(e,t){return e.value,t}function ah(e){return e`### Interação com mouse`}function ab(e){return(t,i,a)=>{let n=e.select(t).selectAll("circle");return n.on("mouseover",function(){i(e.select(this))}),n.on("mouseleave",function(){a(e.select(this))}),t}}function ag(e,t,i){return(a,n)=>{let r=e.select(a).selectAll("[aria-label=dot]>circle");r.on("dblclick",function(){n(t[e.select(this).datum()])});let o=e.select(a).selectAll("[aria-label=dot]>path");return o.on("dblclick",function(){n(i[e.select(this).datum()])}),a}}function ax(e){return function(t,i){let a=t.scale("x"),n=t.scale("y"),r={},o=e.select(t).style("user-select","none");return t.onmousedown=e=>{r.x0=r.x1=e.offsetX,r.y0=r.y1=e.offsetY,r.dx=r.dy=0,r.sel=o.append("rect").attr("fill","rgba(0,0,0,0.2)")},t.onmousemove=e=>{e.buttons&&([r.x1,r.y1]=[e.offsetX,e.offsetY],r.dx=Math.abs(r.x1-r.x0),r.dy=Math.abs(r.y1-r.y0),r.x=Math.min(r.x0,r.x1),r.y=Math.min(r.y0,r.y1),r.sel.attr("x",r.x),r.sel.attr("y",r.y),r.sel.attr("width",r.dx),r.sel.attr("height",r.dy))},t.onmouseup=e=>{r.sel.remove(),r.dx>2&&r.dy>2&&i({xmin:Math.min(a.invert(r.x0),a.invert(r.x1)),xmax:Math.max(a.invert(r.x0),a.invert(r.x1)),ymin:Math.min(n.invert(r.y0),n.invert(r.y1)),ymax:Math.max(n.invert(r.y0),n.invert(r.y1))})},t}}function ay(e){return e`### Animação`}function aw(){return[]}function aA(e,t){return function(i,a){let n=a.map((t,i)=>({dataset:t,map:new Map,oldMap:e.value[i]?e.value[i].map:new Map}));return t.select(i).selectAll("g[aria-label=dot]").each(function(e,i){let a=t.select(this),{dataset:r,map:o,oldMap:l}=n[i];a.selectAll("circle").each(function(e,i){let a=t.select(this),n=r[i].CODMUNRES,s={cx:+a.attr("cx"),cy:+a.attr("cy")};if(o.set(n,s),l.has(n)){let d=l.get(n);a.attr("cx",d.cx),a.attr("newcx",s.cx),a.attr("cy",d.cy),a.attr("newcy",s.cy)}})}),t.select(i).selectAll("circle[newcx]").transition().duration(1500).attr("cx",function(){return t.select(this).attr("newcx")}).attr("cy",function(){return t.select(this).attr("newcy")}),e.value=n,i}}function aC(e){return e`### Seleção de município por nome`}function aE(e,t,i,a){return function(){let n=e.html`<div style="caret-color:transparent;display:inline;tabindex=-1">`,r=[],o=e=>(e=e.toUpperCase(),t.filter(t=>t.municipio.includes(e)).sort((e,t)=>e.municipio.localeCompare(t.municipio))),l=()=>i({placeholder:"Novo local...",format:e=>e.municipio,suggestion:o}),s=()=>{for(let t of(n.innerHTML="",r)){let i=e.html`<span style="padding:0px 4px;font-size:10pt;"> ⊝ </span>`;i.onclick=()=>{r.splice(r.indexOf(t),1),s()},n.append(e.html`<button style="padding-right:0px;border-radius:15px;border-width:thin;
                 font-size:8pt;margin-right:2px;caret-color: transparent">
                 ${a(t)} ${i}`)}if(r.length<4){let o=l();o.style.display="inline",o.style.caretColor="black",n.append(o),o.focus(),o.addEventListener("change",()=>{""!=o.value&&0>r.indexOf(o.value)&&r.push(o.value),s()})}n.value=r,n.dispatchEvent(new CustomEvent("input"))},d=e=>{r=e,s()};return s(),n.setValue=d,n}}function a_(e){return e`## Dados`}async function aT(e,t){return new Map(e.dsvFormat(";").parse(await t("regiaosaude.csv").text()).map(e=>[e.CODMUNRES,`${e.UF}, ${e.REGIAOSAUDE}`]))}function aS(e){return new Set(e.values())}function aO(e){return new Map(e.map(e=>[e.cod,e]))}function aM(e){return function(t){try{if(")"==t.nome[t.nome.length-1])return t.nome;return`${t.nome} (${t.uf})`}catch(i){return e.value={error:i,registro:t},"UNKNOWN"}}}function ak(e){return e("dadosMunicipio.csv").csv()}function aI(e){return e.html`<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
</style>`}function aL(e,t){let a=e.module();function n(){return this.url}let r=new Map([["dadosMunicipio.csv",{url:new i.U(i(1731)),mimeType:"text/csv",toString:n}],["regiaosaude.csv",{url:new i.U(i(2742)),mimeType:"text/csv",toString:n}]]);a.builtin("FileAttachment",e.fileAttachments(e=>r.get(e))),a.variable(t()).define(["md"],iG),a.variable(t("viewof ano")).define("viewof ano",["Inputs"],iV),a.variable(t("ano")).define("ano",["Generators","viewof ano"],(e,t)=>e.input(t)),a.variable(t("viewof limpar")).define("viewof limpar",["Inputs"],iH),a.variable(t("limpar")).define("limpar",["Generators","viewof limpar"],(e,t)=>e.input(t)),a.define("initial clearWindowSelection",iz),a.variable(t("mutable clearWindowSelection")).define("mutable clearWindowSelection",["Mutable","initial clearWindowSelection"],(e,t)=>new e(t)),a.variable(t("clearWindowSelection")).define("clearWindowSelection",["mutable clearWindowSelection"],e=>e.generator),a.variable(t("clearButton")).define("clearButton",["svg"],iq),a.variable(t("viewof munSelecionados")).define("viewof munSelecionados",["menuLocalidade","coresMunicipios"],iZ),a.variable(t("munSelecionados")).define("munSelecionados",["Generators","viewof munSelecionados"],(e,t)=>e.input(t)),a.variable(t("viewof xAxisSel")).define("viewof xAxisSel",["Inputs","variables"],iW),a.variable(t("xAxisSel")).define("xAxisSel",["Generators","viewof xAxisSel"],(e,t)=>e.input(t)),a.variable(t("viewof yAxisSel")).define("viewof yAxisSel",["Inputs","variables"],iJ),a.variable(t("yAxisSel")).define("yAxisSel",["Generators","viewof yAxisSel"],(e,t)=>e.input(t)),a.variable(t("viewof colorSel")).define("viewof colorSel",["Inputs","variables"],iX),a.variable(t("colorSel")).define("colorSel",["Generators","viewof colorSel"],(e,t)=>e.input(t)),a.variable(t()).define(["colorSel"],iQ),a.define("initial colorVar",["colorSel"],iY),a.variable(t("mutable colorVar")).define("mutable colorVar",["Mutable","initial colorVar"],(e,t)=>new e(t)),a.variable(t("colorVar")).define("colorVar",["mutable colorVar"],e=>e.generator),a.variable(t("viewof intervaloNascimentos")).define("viewof intervaloNascimentos",["sliderArray","sliderRangeBase"],iK),a.variable(t("intervaloNascimentos")).define("intervaloNascimentos",["Generators","viewof intervaloNascimentos"],(e,t)=>e.input(t)),a.define("initial xAxisVar",["xAxisSel"],i1),a.variable(t("mutable xAxisVar")).define("mutable xAxisVar",["Mutable","initial xAxisVar"],(e,t)=>new e(t)),a.variable(t("xAxisVar")).define("xAxisVar",["mutable xAxisVar"],e=>e.generator),a.define("initial yAxisVar",["yAxisSel"],i0),a.variable(t("mutable yAxisVar")).define("mutable yAxisVar",["Mutable","initial yAxisVar"],(e,t)=>new e(t)),a.variable(t("yAxisVar")).define("yAxisVar",["mutable yAxisVar"],e=>e.generator),a.variable(t("colorScale")).define("colorScale",["d3","colorVar"],i2),a.variable(t("colorLegend")).define("colorLegend",["Legend","colorScale","colorVar"],i5),a.variable(t("scatterplot")).define("scatterplot",["munSelecionados","Plot","scatterConfig","xAxisVar","dataRange","yAxisVar","data","nomeMunicipio","colorVar","colorScale","highlightData","flagDraw","rectSelect","mutable dataRange","dblClickInteraction","alteraMenuLocalidade","hoverInteraction","applyDotAnimation","htl","clearButton","allRange"],i3),a.define("initial scatterConfig",i4),a.variable(t("mutable scatterConfig")).define("mutable scatterConfig",["Mutable","initial scatterConfig"],(e,t)=>new e(t)),a.variable(t("scatterConfig")).define("scatterConfig",["mutable scatterConfig"],e=>e.generator),a.variable(t("alteraMenuLocalidade")).define("alteraMenuLocalidade",["viewof munSelecionados","corMunNaoUsada"],i7),a.define("initial debug",i6),a.variable(t("mutable debug")).define("mutable debug",["Mutable","initial debug"],(e,t)=>new e(t)),a.variable(t("debug")).define("debug",["mutable debug"],e=>e.generator),a.variable(t()).define(["md"],i8),a.variable(t()).define(["md"],i9),a.variable(t("coresMunicipios")).define("coresMunicipios",ae),a.variable(t("corMunNaoUsada")).define("corMunNaoUsada",["coresMunicipios"],at),a.variable(t()).define(["htl","corMunNaoUsada","munSelecionados"],ai),a.variable(t()).define(["md"],aa),a.variable(t("flagCanvasTest")).define("flagCanvasTest",["DOM","flagDraw"],an),a.variable(t("flagDraw")).define("flagDraw",ar),a.variable(t("flagSvgTest")).define("flagSvgTest",["htl","flagPath"],ao),a.variable(t("flagPath")).define("flagPath",al),a.variable(t()).define(["md"],as),a.variable(t("data")).define("data",["dadosMunicipio","xAxisVar","yAxisVar","colorVar","codigoToMunicipio","dataFilter","dataRange"],ad),a.define("initial dataFilter",["intervaloNascimentos","ano"],ac),a.variable(t("mutable dataFilter")).define("mutable dataFilter",["Mutable","initial dataFilter"],(e,t)=>new e(t)),a.variable(t("dataFilter")).define("dataFilter",["mutable dataFilter"],e=>e.generator),a.variable(t("highlightData")).define("highlightData",["munSelecionados","data"],au),a.variable(t("variables")).define("variables",ap),a.variable(t("selectRange")).define("selectRange",["data"],af),a.variable(t("allRange")).define("allRange",am),a.define("initial dataRange",["mutable clearWindowSelection","allRange"],av),a.variable(t("mutable dataRange")).define("mutable dataRange",["Mutable","initial dataRange"],(e,t)=>new e(t)),a.variable(t("dataRange")).define("dataRange",["mutable dataRange"],e=>e.generator),a.variable(t()).define(["md"],ah),a.variable(t("hoverInteraction")).define("hoverInteraction",["d3"],ab),a.variable(t("dblClickInteraction")).define("dblClickInteraction",["d3","data","highlightData"],ag),a.variable(t("rectSelect")).define("rectSelect",["d3"],ax),a.variable(t()).define(["md"],ay),a.define("initial oldDataMap",aw),a.variable(t("mutable oldDataMap")).define("mutable oldDataMap",["Mutable","initial oldDataMap"],(e,t)=>new e(t)),a.variable(t("oldDataMap")).define("oldDataMap",["mutable oldDataMap"],e=>e.generator),a.variable(t("applyDotAnimation")).define("applyDotAnimation",["mutable oldDataMap","d3"],aA),a.variable(t()).define(["md"],aC),a.variable(t("munInput")).define("munInput",["htl","municipios","SearchForm","nomeMunicipio"],aE),a.variable(t()).define(["md"],a_),a.variable(t("codigoToRegiaoSaude")).define("codigoToRegiaoSaude",["d3","FileAttachment"],aT),a.variable(t("regioesSaude")).define("regioesSaude",["codigoToRegiaoSaude"],aS),a.variable(t("codigoToMunicipio")).define("codigoToMunicipio",["municipios"],aO),a.variable(t("nomeMunicipio")).define("nomeMunicipio",["mutable debug"],aM),a.variable(t("dadosMunicipio")).define("dadosMunicipio",["FileAttachment"],ak);let o=e.module(ib);a.import("SearchForm",o);let l=e.module(i_);a.import("menuLocalidade",l),a.import("municipios",l);let s=e.module(ij);a.import("sliderbase",s),a.import("sliderArray",s),a.import("sliderRangeBase",s),a.import("style_slider",s);let d=e.module(C);return a.import("Legend",d),a.variable(t("estiloFonteMenuLocalidade")).define("estiloFonteMenuLocalidade",["htl"],aI),a}function aN(e){return e`# Bar chart dados mapa`}function aD(e){return e}function aR(e,t){return e.select(t,{label:"Vari\xe1vel",format:e=>e.name,value:t[0]})}function aP(){return function(e,t){let i=new Set(e.map(e=>e.cod)),a=e.length>2?2:0;return t.filter(e=>i.has(e.CODMUNRES)).map(t=>{let i=e.findIndex(e=>e.cod==t.CODMUNRES),n=e[i],r={i,row:i%2,col:~~(i/2)};return Object.assign(r,n),Object.assign(r,t),r.ANO=r.ANO.slice(a,4),r})}}function aF(e,t,i){return e(t,i)}function a$(e,t){return function(i,a,n,r,o,l){let s=e.plot({y:{grid:!0,tickSize:0,tickPadding:3,domain:n},x:{tickSize:0,tickPadding:4,tickFormat:e=>e},width:r,height:o,marginTop:25,marginLeft:20,marginRight:5,marginBottom:15,marks:[e.barY(i,{x:e=>+e.ANO,y:a.field,fill:e=>e.cor})]}),d=t`<text x=25 y=20>${l}`;return d.style=`
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
  `,s}}function aB(e,t,i){return e(t.filter(e=>0==e.i),i,void 0,318,150,"TEST")}function aU(e,t,i,a){return function(n,r,o,l,s){let d=e(n,r),c=t`<svg width=${l} height=${s} >`,u=n.length,[p,f]=[[1,1],[2,1],[2,2],[2,2]][u-1],[m,v]=[l/f,s/p],h=[0,Math.max(...d.map(e=>+o.field(e)))];for(let b=0;b<u;b++){let g=~~(b/2),x=b%2,y=i(d.filter(e=>e.i==b),o,h,m,v,n[b].nome),w=a.svg`<g transform=translate(${g*m},${x*v}) >${y}</g>`;c.append(w)}return c}}function aj(e,t,i,a){return e(t,i,a,300,300)}function aG(e){return e`## Vis Toggle`}function aV(e){return e()}function aH(e){return e}function az(e,t,i){return()=>{let a=e.html`<div class=visToggle>`;a.style=`
    display:inline-block;
    vertical-align: middle;
    line-height:0;
  `,a.value="barchart";let n=t();return a.append(n),a.onclick=()=>{a.removeChild(n),"ranking"==a.value?(a.value="barchart",n=t()):(a.value="ranking",n=i()),a.append(n),a.dispatchEvent(new CustomEvent("input"))},a}}function aq(e){return()=>e.svg`<svg width="52" height="24" viewBox="0 0 52 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
</style>`}function aJ(e){return e`## Imports`}function aX(e,t){let i=e.module();i.variable(t()).define(["md"],aN),i.variable(t()).define(["viewof munSelecionados"],aD),i.variable(t("viewof variable")).define("viewof variable",["Inputs","variables"],aR),i.variable(t("variable")).define("variable",["Generators","viewof variable"],(e,t)=>e.input(t)),i.variable(t("makeBarChartData")).define("makeBarChartData",aP),i.variable(t("barChartData")).define("barChartData",["makeBarChartData","munSelecionados","dadosMunicipio"],aF),i.variable(t("makeBarChart")).define("makeBarChart",["Plot","svg"],a$),i.variable(t()).define(["makeBarChart","barChartData","variable"],aB),i.variable(t("makeBarChartVis")).define("makeBarChartVis",["makeBarChartData","svg","makeBarChart","htl"],aU),i.variable(t()).define(["makeBarChartVis","munSelecionados","dadosMunicipio","variable"],aj),i.variable(t()).define(["md"],aG),i.variable(t("viewof visToggle")).define("viewof visToggle",["visToggleInput"],aV),i.variable(t("visToggle")).define("visToggle",["Generators","viewof visToggle"],(e,t)=>e.input(t)),i.variable(t()).define(["visToggle"],aH),i.variable(t("visToggleInput")).define("visToggleInput",["htl","barChartSelected","rankingSelected"],az),i.variable(t("rankingSelected")).define("rankingSelected",["htl"],aq),i.variable(t("barChartSelected")).define("barChartSelected",["htl"],aZ),i.variable(t()).define(["htl"],aW),i.variable(t()).define(["md"],aJ);let a=e.module(aL);return i.import("viewof munSelecionados",a),i.import("munSelecionados",a),i.import("dadosMunicipio",a),i.import("variables",a),i}function aQ(e){return e`# ASlider`}function aY(e,t){return e({values:t.range(100),value:3})}function aK(e,t){return e({values:t.range(100),value:[5,59]})}function a1(e,t){return function(i={}){let{height:a=80,rulerThickness:n=10,thumbThickness:r=6,thumbHeight:o=16,margin:l=10,labelDy:s=2,width:d=400,values:c=[1,2,3,4,5,6],value:u=[3,4]}=i,p=!(u instanceof Array),f=e.svg`<svg width=${d} height=${a} >`,m=t.select(f).attr("class","aslider"),v=d-l,h=(a-n)/2,b=h+n,g=e=>c[Math.round(((e=Math.max(l,Math.min(v,e)))-l)/(v-l)*(c.length-1))],x=e=>{let t=l,i=Number.MAX_VALUE;for(let a=0;a<c.length;a++){let n=(v-l)/(c.length-1)*a+l,r=Math.abs(g(n)-e);r<i&&([t,i]=[n,r])}return t};m.append("rect").attr("class","ruler").attr("width",d-2*l).attr("height",n).attr("x",l).attr("y",h);let y=m.append("rect").attr("class","range").attr("y",h).attr("height",n);m.selectAll("line.tick").data(c.slice(1,-1)).join("line").attr("class","tick").attr("x1",x).attr("x2",x).attr("y1",h).attr("y2",b),m.selectAll("text.label").data([c[0],c[c.length-1]]).join("text").attr("class","label").attr("dominant-baseline","hanging").attr("x",x).attr("y",(b+h+o)/2+s).text(e=>e);let w=m.append("rect").attr("class","thumb min").attr("width",r).attr("height",o).attr("rx",r/2),A=m.append("rect").attr("class","thumb max").attr("width",r).attr("height",o).attr("rx",r/2);p&&A.remove();let C=e=>{u=e;let t,i;p?[t,i]=[u,u]:[t,i]=u,t!=i||p?(w.attr("x",x(t)-r/2),A.attr("x",x(i)-r/2)):(w.attr("x",x(t)-r),A.attr("x",x(i))),w.attr("y",(b+h-o)/2),A.attr("y",(b+h-o)/2),y.attr("x",x(t)).attr("width",x(i)-x(t)),m.selectAll("text.thumbLabel").remove(),m.selectAll("text.thumbLabel").data([t,i]).join("text").attr("class","thumbLabel").attr("dominant-baseline","auto").attr("x",x).attr("y",(b+h-o)/2-s).text(e=>e),f.value=u,f.dispatchEvent(new CustomEvent("input"))},E=null,_=null;return m.selectAll(".thumb").on("mousedown",function(e){1==e.buttons&&(_=(E=t.select(this)).classed("min")?"min":"max")}),m.on("mousemove",function(e){if(!E)return;let t=e.offsetX,i=g(t),[a,n]=p?[u,u]:u;"min"==_?(i<=n||p)&&(a=i):i>=a&&(n=i),C(p?a:[a,n])}).on("mouseup mouseleave",e=>{E=null}),C(u),f}}function a0(e){return e.html`<style>
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

</style>`}function a2(e,t){let i=e.module();return i.variable(t()).define(["md"],aQ),i.variable(t("viewof testSingle")).define("viewof testSingle",["aSlider","d3"],aY),i.variable(t("testSingle")).define("testSingle",["Generators","viewof testSingle"],(e,t)=>e.input(t)),i.variable(t("viewof testInterval")).define("viewof testInterval",["aSlider","d3"],aK),i.variable(t("testInterval")).define("testInterval",["Generators","viewof testInterval"],(e,t)=>e.input(t)),i.variable(t("aSlider")).define("aSlider",["htl","d3"],a1),i.variable(t("aSliderStyles")).define("aSliderStyles",["htl"],a0),i}function a5(e){return e`# ADrawer`}function a3(e,t){return e(t,{shown:!0,title:"Nascimentos",subtitle:"Exibir somente munic\xedpios com total de nascimentos entre:"})}function a4(e){return e({values:[0,10,100,1e3,1e5,1e6],value:[0,1e6],width:300,rulerThickness:16,thumbHeight:20,height:50,margin:20})}function a7(e){return e}function a6(e){return()=>e.html`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="#151472"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.76426 4.76462C3.89443 4.63445 4.10549 4.63445 4.23566 4.76462L5.99996 6.52892L7.76426 4.76462C7.89443 4.63445 8.10549 4.63445 8.23566 4.76462C8.36584 4.8948 8.36584 5.10585 8.23566 5.23603L6.23566 7.23603C6.10549 7.3662 5.89443 7.3662 5.76426 7.23603L3.76426 5.23603C3.63408 5.10585 3.63408 4.8948 3.76426 4.76462Z" fill="#E5E5E5"/>
</svg>
`}function a8(e){return()=>e.html`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="#151472"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.09763 3.76462C5.22781 3.63445 5.43886 3.63445 5.56904 3.76462L7.56904 5.76462C7.69921 5.8948 7.69921 6.10585 7.56904 6.23603L5.56904 8.23603C5.43886 8.3662 5.22781 8.3662 5.09763 8.23603C4.96746 8.10585 4.96746 7.8948 5.09763 7.76462L6.86193 6.00033L5.09763 4.23603C4.96746 4.10585 4.96746 3.8948 5.09763 3.76462Z" fill="#E5E5E5"/>
</svg>
`}function a9(e,t,i){return function(a,n={}){let{shown:r=!1,title:o="title",subtitle:l=null}=n,s=e.html`<div class=adrawer>`,d=e.html`<div class=titleArea>`,c=e.html`<div class=icon>`,u=e.html`<div class=title>${o}`;d.append(c,u);let p=e.html`<div class=contentArea>`;l&&p.append(e.html`<div class=subtitle >${l}`),p.append(a);let f=()=>{c.innerHTML="",c.append(r?t():i()),p.style.display=r?"block":"none"};return f(),d.onclick=()=>{r=!r,f()},s.append(d,p),s}}function ne(e){return e.html`<style>
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
</style>`}function nt(e){return e}function ni(e,t){let i=e.module();i.variable(t()).define(["md"],a5),i.variable(t()).define(["aDrawer","viewof filtroNascimentos"],a3),i.variable(t("viewof filtroNascimentos")).define("viewof filtroNascimentos",["aSlider"],a4),i.variable(t("filtroNascimentos")).define("filtroNascimentos",["Generators","viewof filtroNascimentos"],(e,t)=>e.input(t)),i.variable(t()).define(["filtroNascimentos"],a7),i.variable(t("chevronDown")).define("chevronDown",["htl"],a6),i.variable(t("chevronRight")).define("chevronRight",["htl"],a8),i.variable(t("aDrawer")).define("aDrawer",["htl","chevronDown","chevronRight"],a9),i.variable(t("aDrawerStyles")).define("aDrawerStyles",["htl"],ne);let a=e.module(a2);return i.import("aSlider",a),i.import("aSliderStyles",a),i.variable(t()).define(["aSliderStyles"],nt),i}function na(e){return e`# ASelect`}function nn(e){return e({options:["foo","bar","xpto"],width:300,value:"xpto",placeholder:"Select one"})}function nr(e){return e({width:300,placeholder:"\uD83D\uDD0D buscar"})}function no(e){return e}function nl(e){return function(t={}){let{placeholder:i="",width:a=200}=t,n=e.html`<input type=text class=atext placeholder=${i}>`;return n.style.width=`${a}px`,n}}function ns(e){return function(t={}){let{placeholder:i="",options:a=["abc","def","xpto"],width:n=200,value:r="xpto"}=t,o=e.html`<select class=aselect>`;for(let l of(o.style.width=`${n}px`,i&&""!=i&&o.append(e.html`<option value="" disabled selected >${i}`),a)){let s=l==r?"selected":"",d=e.html`<option value="${l}" >${l}`;s&&(d.selected=!0),o.append(d)}return o}}function nd(e,t){return t.html`<style>
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
</style>`}function nc(e){return()=>e.html`<svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.146447C0.841709 -0.0488155 1.15829 -0.0488155 1.35355 0.146447L4 2.79289L6.64645 0.146447C6.84171 -0.0488155 7.15829 -0.0488155 7.35355 0.146447C7.54882 0.341709 7.54882 0.658291 7.35355 0.853553L4.35355 3.85355C4.15829 4.04882 3.84171 4.04882 3.64645 3.85355L0.646447 0.853553C0.451184 0.658291 0.451184 0.341709 0.646447 0.146447Z" fill="black"/>
</svg>`}async function nu(e){return await e("da.png").url()}function np(e){return new URL(e)}function nf(e,t){return t.html`<div style="background:url(${e}) right; background-size:10px; background-repeat:no-repeat;">XXX  `}function nm(e,t){let a=e.module(),n=new Map([["da.png",{url:new i.U(i(9555)),mimeType:"image/png",toString:function(){return this.url}}]]);return a.builtin("FileAttachment",e.fileAttachments(e=>n.get(e))),a.variable(t()).define(["md"],na),a.variable(t()).define(["aSelect"],nn),a.variable(t("viewof term")).define("viewof term",["aText"],nr),a.variable(t("term")).define("term",["Generators","viewof term"],(e,t)=>e.input(t)),a.variable(t()).define(["term"],no),a.variable(t("aText")).define("aText",["htl"],nl),a.variable(t("aSelect")).define("aSelect",["htl"],ns),a.variable(t("aSelectStyles")).define("aSelectStyles",["daPath","htl"],nd),a.variable(t("downArrow")).define("downArrow",["htl"],nc),a.variable(t("daPath")).define("daPath",["FileAttachment"],nu),a.variable(t("daUrl")).define("daUrl",["daPath"],np),a.variable(t()).define(["daPath","htl"],nf),a}function nv(e){return e`# Amplia Saúde - Mapa
`}function nh(e){return e.html`<style>
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
</div>`}function nb(e){return e.toggle({label:"Mostrar Interface",value:!0})}function ng(){return!1}function nx(){return!1}function ny(e,t,i,a,n){for(let r of["menuPrincipal","indicadorChave","rankingBarChart","mapa","scatterplot","scatterplotBig","filtrarPor","filtrarPorSmall"]){let o=i.querySelector(`div.${r}`);o.innerHTML=r}i.querySelector("div.indicadorChave").style.display="block",a?(i.querySelector("div.scatterplot").style.display="none",i.querySelector("div.scatterplotBig").style.display="block",i.querySelector("div.rankingBarChart").style.display="none"):(i.querySelector("div.scatterplotBig").style.display="none",i.querySelector("div.scatterplot").style.display="block",i.querySelector("div.rankingBarChart").style.display="block"),n?(i.querySelector("div.filtrarPorSmall").style.display="none",i.querySelector("div.filtrarPor").style.display="block"):(i.querySelector("div.filtrarPorSmall").style.display="block",i.querySelector("div.filtrarPor").style.display="none")}function nw(e,t){let i={};for(let a of["menuPrincipal","indicadorChave","rankingBarChart","mapa","scatterplot","scatterplotBig","filtrarPor","filtrarPorSmall"]){let n=t.querySelector(`div.${a}`);i[a]={elem:n,w:n.clientWidth,h:n.clientHeight}}return i}function nA(e,t,i,a,n,r,o,l,s,d,c,u,p,f,m,v,h,b,g,x){if(e){t.menuPrincipal.elem.innerHTML="",t.menuPrincipal.elem.append(i.html`<div>${a}<br><div style="margin-top:10px">Selecione até 4 municípios com duplo clique nos gráficos</div></div>`),a.style.display="inline",a.style.paddingTop="10px",t.menuPrincipal.elem.append(n),n.style.display="inline";let y=t.indicadorChave;y.elem.innerHTML="",y.elem.append(r,i.html`<br><br>`,o);let w=t.rankingBarChart;w.elem.innerHTML="",l||w.elem.append(s);let A=l?t.scatterplotBig:t.scatterplot;A.elem.innerHTML="",d.style.display="inline-block",d.style.marginBottom="10px",d.style.lineHeight="15px",c.style.display="inline-block",c.style.float="right",c.style.marginTop="5px",c.style.lineHeight="15px";let C=l?u():p();C.style.marginLeft="5px",C.style.cursor="pointer",C.style.position="absolute",C.style.right="10px",C.style.top="10px",C.style.zIndex=20,C.onclick=()=>f.value=!f.value,A.elem.append(C,d,m,c);let E=v?t.filtrarPor:t.filtrarPorSmall,_=i.html`<div style = "display:flex; justify-content: space-between;margin-bottom:10px">`,T=i.html`<span style="display:inline">FILTRAR POR</span>`,S=v?h():b();_.onclick=()=>g.value=!g.value,_.append(T,S),E.elem.innerHTML="",E.elem.append(_),v&&E.elem.append(x)}}function nC(e,t,i){t.mapa.oldW=t.mapa.w,t.mapa.oldH=t.mapa.h,(t.mapa.elem.clientWidth!=t.mapa.w||t.mapa.elem.clientHeight!=t.mapa.h||0==t.mapa.elem.children.length)&&(t.mapa.w=t.mapa.elem.clientWidth,t.mapa.h=t.mapa.elem.clientHeight,i.value=!0)}function nE(e,t,i){e&&t.mapa.oldElem!=i&&(t.mapa.elem.innerHTML="",t.mapa.elem.append(i))}function n_(){return!1}function nT(e){return e`## Session Storage
Armazenamento da coleção de municípios`}function nS(e,t){e.setItem("municipios",JSON.stringify(t))}function nO(e){return e.getItem("municipios")}function nM(e,t){let i=e.getItem("municipios");i=i?JSON.parse(i):["RIO DE JANEIRO"],t.value=i}function nk(e){return e`## Filtros`}function nI(e){return e`### Ano`}function nL(e){return e({range:[2012,2019],value:2018,ticks:1,width:400,height:56})}function nN(e){return e`### IDH`}function nD(e,t,i){return t({range:[0,.4,.5,.6,.7,.8,1],value:[0,6],width:300,height:50,marginTop:10},i)}function nR(e,t){return e(t,{shown:!0,title:"IDH (2010)",subtitle:"Exibir somente munic\xedpios com IDH entre:"})}function nP(e){return e`### Nascimentos`}function nF(e,t,i){return t({range:[1,10,100,1e3,1e4,1e5,2e5],value:[2,6],ticksLabelFormatter:e=>["1","10","100","1K","10K","100K","200K"][e],width:300,height:56},i)}function n$(e,t){return e(t,{shown:!0,title:"Nascimentos",subtitle:"Exibir somente munic\xedpios com total de nascimentos entre:"})}function nB(e){return e`### Poluição`}function nU(e,t,i){return t({range:[5,15,25,35,45,55,65],value:[0,6],ticksLabelFormatter:e=>["5","15","25","35","45","55","65"][e],marginTop:10,width:300,height:46},i)}function nj(e,t){return e(t,{shown:!0,title:"Polui\xe7\xe3o",subtitle:"Exibir somente munic\xedpios com polui\xe7\xe3o m\xe9dia (\xb5g/m\xb3) entre:"})}function nG(e){return e`### Baixo peso`}function nV(e,t,i){return t({range:[1,5,6.5,7.5,9,100],value:[0,5],ticksLabelFormatter:e=>["1","5","6.5","7.5","9","100"][e],marginTop:10,width:300,height:46},i)}function nH(e,t){return e(t,{shown:!0,title:"Baixo Peso",subtitle:"Munic\xedpios com taxa de baixo peso (por cem nascidos vivos) entre:"})}function nz(e){return e`### Mortalidade`}function nq(e){return e`#### Perinatal`}function nZ(e,t,i){return t({range:[0,.5,1.5,2.5,5,500],value:[0,5],ticksLabelFormatter:e=>["0","0,5","1,5","2,5","5","500"][e],marginTop:10,width:300,height:46},i)}function nW(e,t){return e(t,{shown:!0,title:"Mortalidade Perinatal",subtitle:"Munic\xedpios com mortalidade perinatal (por mil nascidos vivos) entre:"})}function nJ(e){return e`#### Neonatal`}function nX(e,t,i){return t({range:[0,1.5,2.5,7.5,10,500],value:[0,5],ticksLabelFormatter:e=>["0","1,5","2,5","7,5","10","500"][e],marginTop:10,width:300,height:46},i)}function nQ(e,t){return e(t,{shown:!0,title:"Mortalidade Neonatal",subtitle:"Munic\xedpios com mortalidade neonatal (por mil nascidos vivos) entre:"})}function nY(e){return e`#### Infantil`}function nK(e,t,i){return t({range:[0,8,12,16,23,1e3],value:[0,5],ticksLabelFormatter:e=>["0","8","12","16","23","1000"][e],marginTop:10,width:300,height:46},i)}function n1(e,t){return e(t,{shown:!0,title:"Mortalidade Infantil",subtitle:"Munic\xedpios com mortalidade infatil (por mil nascidos vivos) entre:"})}function n0(e){return e`### Região`}function n2(e,t){return t({options:["Selecionar uma regi\xe3o","Centro-oeste","Nordeste","Norte","Sudeste","Sul"],width:250})}function n5(e,t,i){return e(t`<div style="padding:4px 0px 20px 10px;">${i}`,{shown:!0,title:"Regi\xe3o",subtitle:"Mostrar apenas uma regi\xe3o"})}function n3(e,t,i){return t({options:["Selecionar um estado"].concat(i.map(e=>e.name).sort()),width:250})}function n4(e,t,i){return e(t`<div style="padding:4px 0px 20px 10px;">${i}`,{shown:!0,title:"UF",subtitle:"Mostrar apenas um estado"})}function n7(e,t,i){return i({options:["Selecionar regi\xe3o de sa\xfade"].concat([...new Set([...t.values()])]),width:250})}function n6(e,t,i){return e(t`<div style="padding:4px 0px 20px 10px;">${i}`,{shown:!0,title:"Regi\xe3o de sa\xfade",subtitle:"Mostrar apenas uma regi\xe3o de sa\xfade"})}function n8(e){return e`### Caixa com todos os filtros`}function n9(e,t,i,a,n,r,o,l,s,d,c,u){let p=t.html`<div>`;return p.append(i,a,n,r,o,l,s,d,c,u),p}function re(e){return e`### Função de filtragem configurada conforme a interface`}function rt(e,t,i,a,n,r,o,l,s,d,c,u){let p=["Norte","Nordeste","Sudeste","Sul","Centro-oeste"].indexOf(e),f=t.filter(e=>e.name==i),m=f.length?+f[0].uf:null,[v,h]=a.map(e=>[1,10,100,1e3,1e4,1e5,2e5][e]),[b,g]=n.map(e=>[5,15,25,35,45,55,65][e]),[x,y]=r.map(e=>[1,5,6.5,7.5,9,100][e]),[w,A]=o.map(e=>[0,.5,1.5,2.5,5,500][e]),[C,E]=l.map(e=>[0,1.5,2.5,7.5,10,500][e]),[_,T]=s.map(e=>[0,8,12,16,23,3125][e]),[S,O]=d.map(e=>[0,.3,.4,.5,.6,.7,1][e]),M=e=>(-1==p||p==Math.floor(e.CODMUNRES/1e5)-1)&&(!m||m==Math.floor(e.CODMUNRES/1e4))&&e.IDH>=S&&e.IDH<=O&&e.ANO==c&&+e.TOTAL>=v&&+e.TOTAL<=h&&+e.AVG_PM25>=b&&+e.AVG_PM25<=g&&100*(e.BAIXO_PESO||0)/(e.TOTAL||1)>=x&&100*(e.BAIXO_PESO||0)/(e.TOTAL||1)<=y&&1e3*(e.OBITOS_PERINATAIS||0)/(e.TOTAL||1)>=w&&1e3*(e.OBITOS_PERINATAIS||0)/(e.TOTAL||1)<=A&&1e3*(e.OBITOS_NEONATAIS||0)/(e.TOTAL||1)>=C&&1e3*(e.OBITOS_NEONATAIS||0)/(e.TOTAL||1)<=E&&1e3*(e.OBITOS_INFANTIS||0)/(e.TOTAL||1)>=_&&1e3*(e.OBITOS_INFANTIS||0)/(e.TOTAL||1)<=T;return u.value=M,M}function ri(e){return e`## Variáveis`}function ra(e,t,i){return t({options:i.map(e=>e.name),width:280})}function rn(e,t,i){return e.value=t.find(e=>e.name==i),e.value}function rr(e,t,i){return t({options:i.map(e=>e.name),value:"Mort. Infantil",width:110})}function ro(e,t,i){return e.value=t.find(e=>e.name==i),e.value}function rl(e,t,i){return t({options:i.map(e=>e.name),value:"Baixo peso",width:110})}function rs(e,t,i){return e.value=t.find(e=>e.name==i),e.value}function rd(e){return e`## Ranking and Bar Chart `}function rc(e,t,i,a,n,r,o,l,s,d,c,u){let p=e.html`<div>`;p.style=`
    display:flex; 
    justify-content: space-between;
    line-height:0;
    margin-bottom: 10px;
  `;let f="ranking"==t?i.labelRanking:i.labelBarChart,m=e.html`<div class=rankTitle>${f}`,v=a?n():r();v.style.cursor="pointer",v.onclick=()=>o.value=!o.value,l.querySelector("div.rankBox").dispatchEvent(new CustomEvent("scroll",{scrollTop:0})),p.append(s,m,v);let h=e.html`<div style="max-width:290px">`;return h.append(p),"ranking"==t?h.append(l):h.append(d(c,u,i,280,260)),h}function ru(e){return e`## Ranking`}function rp(){return e=>e.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function rf(){return null}function rm(e){return e}function rv(e,t,i,a,n,r){e.value=[];let o=[];return t.filter(i).forEach(t=>{let i=a.get(t.CODMUNRES);if(!i){e.value.push(t);return}let l=i.nome,s=i.uf,d=+n.field(t);o.push({name:l,uf:s,mun:i,normName:r(l),val:d})}),o.sort((e,t)=>t.val-e.val),o}function rh(e){return e()}function rb(e,t){return function(){return e.filter(t).map(e=>{let t=Object.assign({},e.municipio);for(let i of(Object.assign(t,e),["CODMUNRES","x","y","val","municipio"]))delete t[i];return t})}}function rg(e){return e.html`<style>
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
  </style>`}function rx(e,t,i,a,n,r,o,l,s,d){let c=t.html`<div class=rankBox >`;i.range;let u=a({width:280,placeholder:"\uD83D\uDD0D BUSCAR"}),p=(e,i)=>{let a=t.html`<div class=rankItem>`,l=n(e.val),s=r.hsl(l).l>.5?"black":"white",d=t.html`<div class=rank style="color:${s};background:${l};" >${i+1}`,c=t.html`<div class=name>${e.name}`,u=t.html`<div class=uf>${e.uf}`,p=e.mun;return a.append(d,c,u),a.ondblclick=()=>o(p),a};u.style.marginBottom="10px";let f=t.html`<div style="position:relative;min-width:265px;min-height:${20*l.length}px;" >`,m=t.html`<div style="position:absolute;min-width:265px;min-height:${160}px;" >`;f.append(m),c.append(f);let v=e=>{m.style.top=e+"px",m.innerHTML="";let t=~~(e/20),i=Math.min(t+10,l.length);for(let a=t;a<i;a++){let n=p(l[a],a);m.append(n)}};return c.onscroll=e=>{v(c.scrollTop)},v(0),u.oninput=e=>{let t=s(u.value);for(let i=0;i<l.length;i++)if(l[i].normName.includes(t)){c.scrollTo(0,20*i);break}},d`<div>${u}${c}`}function ry(e){return e`## Cartograma de Dorling`}function rw(e){return e`
<style>
.circle:not(.disabled):hover {
  stroke:black;
  stroke-width:1px;
}
</style>
`}function rA(e,t,i,a,n,r,o,l,s,d,c,u,p,f,m,v,h){let[[b,g],[x,y]]=i,w=a.mapa.w,A=Math.max(a.mapa.h),C=Math.max(.2,Math.min(3,(w-318*(n.value?2:1))/(x-b))),E=r`<div style="position:relative;width:${w}px;height:${A}px;">`,_=o;Object.assign(_.style,{position:"absolute",zIndex:10,top:"10px",left:e?"328px":"10px"});let T=l;Object.assign(T.style,{position:"absolute",zIndex:10,top:"38px",left:e?"328px":"10px"}),E.append(_,T),_.onclick=()=>P(1.1),T.onclick=()=>P(10/11);let S=s.create("svg").attr("width",w).attr("height",A).attr("viewBox",[0,0,w,A]).attr("id","dorling");E.append(S.node()),E.value=[],E.hovered;let O=S.append("g").attr("class","mainGroup"),M=[e?328:0,0],k=null;S.on("mousedown",function(e){k=[e.offsetX,e.offsetY],S.style("cursor","grab")}).on("mousemove",function(e){if(!k)return;let t=[e.offsetX,e.offsetY],i=[t[0]-k[0],t[1]-k[1]];M[0]+=i[0],M[1]+=i[1],O.attr("transform",`translate(${M})`),k=t}).on("mouseup",function(e){k&&(S.style("cursor","auto"),k=null)}).on("wheel",function(e){e.preventDefault(),e.stopPropagation();let t=e.deltaY<0?1.1:10/11,i=[e.offsetX,e.offsetY];P(t,i)}),O.attr("transform",`translate(${M})`);let I=O.append("g").classed("circles",!0).attr("transform",`scale(${C},${C})`),L=I.selectAll("circle").data(d).join("circle").on("dblclick",function(){p.value;let e=s.select(this);h((e=>{let t=e.data()[0].properties.codarea.slice(0,-1),i=v.filter(e=>e.cod==t);return i[0]})(e)),R()}).classed("circle",!0).attr("cx",e=>e.x).attr("cy",e=>e.y);var N=c().html((e,t)=>`
      ${u(t)}`);S.call(N),L.on("mouseover",N.show).on("mouseout",N.hide);let D=O.append("g").classed("flags",!0),R=()=>{D.selectAll("path").remove(),D.selectAll("path").data(p.value).join("path").attr("transform",e=>{let t=f.get(e.cod);return`translate(${t.x*C},${t.y*C})`}).attr("d",m(12)).attr("fill",e=>e.cor).attr("stroke","black").on("dblclick",F)};function P(e,t){let[i,a]=t||[w/2,A/2],[n,r]=M,o=Math.max(.5,Math.min(3,C*e)),[l,s]=[(i-n)/C,(a-r)/C],[d,c]=[i-l*o,a-s*o];M=[d,c],C=o,O.attr("transform",`translate(${M})`),I.attr("transform",`scale(${C},${C})`),R()}function F(){let e=s.select(this).datum();h(e),R()}function $(){let e=p.value,t=e.map(e=>e.cod);L.each(function(e){let i=s.select(this),a=t.includes(e.properties.codarea.slice(0,-1));i.classed("clicked",a)}),R()}return $(),E.updateSelected=$,E.circleSelection=L,E}function rC(){return 0}function rE(e,t,i,a,n,r,o,l){e.circleSelection.each(function(e){let s=e.properties.codarea,d=t.get(s.slice(0,-1)),c=i.select(this),u=!a(d);c.classed("disabled",u).attr("r",n(r.get(s))).attr("fill",u?"#F1F1F1":o(l.field(d)))})}function r_(e){return e`## Ícones`}function rT(e){return e`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#151472"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 6C7.567 6 6 7.567 6 9.5C6 11.433 7.567 13 9.5 13C10.443 13 11.2988 12.6271 11.9282 12.0207C11.9414 12.0036 11.9558 11.9871 11.9714 11.9714C11.9871 11.9558 12.0036 11.9414 12.0207 11.9282C12.6271 11.2988 13 10.443 13 9.5C13 7.567 11.433 6 9.5 6ZM13.0159 12.3088C13.6318 11.539 14 10.5625 14 9.5C14 7.01472 11.9853 5 9.5 5C7.01472 5 5 7.01472 5 9.5C5 11.9853 7.01472 14 9.5 14C10.5625 14 11.539 13.6318 12.3088 13.0159L14.1464 14.8536C14.3417 15.0488 14.6583 15.0488 14.8536 14.8536C15.0488 14.6583 15.0488 14.3417 14.8536 14.1464L13.0159 12.3088ZM9.5 7.5C9.77614 7.5 10 7.72386 10 8V9H11C11.2761 9 11.5 9.22386 11.5 9.5C11.5 9.77614 11.2761 10 11 10H10V11C10 11.2761 9.77614 11.5 9.5 11.5C9.22386 11.5 9 11.2761 9 11V10H8C7.72386 10 7.5 9.77614 7.5 9.5C7.5 9.22386 7.72386 9 8 9H9V8C9 7.72386 9.22386 7.5 9.5 7.5Z" fill="#E5E5E5"/>
</svg>`}function rS(e){return e`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#151472"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 6C7.567 6 6 7.567 6 9.5C6 11.433 7.567 13 9.5 13C10.443 13 11.2988 12.6271 11.9282 12.0207C11.9414 12.0036 11.9558 11.9871 11.9714 11.9714C11.9871 11.9558 12.0036 11.9414 12.0207 11.9282C12.6271 11.2988 13 10.443 13 9.5C13 7.567 11.433 6 9.5 6ZM13.0159 12.3088C13.6318 11.539 14 10.5625 14 9.5C14 7.01472 11.9853 5 9.5 5C7.01472 5 5 7.01472 5 9.5C5 11.9853 7.01472 14 9.5 14C10.5625 14 11.539 13.6318 12.3088 13.0159L14.1464 14.8536C14.3417 15.0488 14.6583 15.0488 14.8536 14.8536C15.0488 14.6583 15.0488 14.3417 14.8536 14.1464L13.0159 12.3088ZM7.5 9.5C7.5 9.22386 7.72386 9 8 9H11C11.2761 9 11.5 9.22386 11.5 9.5C11.5 9.77614 11.2761 10 11 10H8C7.72386 10 7.5 9.77614 7.5 9.5Z" fill="#E5E5E5"/>
</svg>`}function rO(e){return()=>e`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 2C7.22386 2 7 1.77614 7 1.5C7 1.22386 7.22386 1 7.5 1H10.5C10.7761 1 11 1.22386 11 1.5V4.5C11 4.77614 10.7761 5 10.5 5C10.2239 5 10 4.77614 10 4.5V2.70711L7.35355 5.35355C7.15829 5.54882 6.84171 5.54882 6.64645 5.35355C6.45118 5.15829 6.45118 4.84171 6.64645 4.64645L9.29289 2H7.5ZM4.64645 6.64645C4.84171 6.45118 5.15829 6.45118 5.35355 6.64645C5.54882 6.84171 5.54882 7.15829 5.35355 7.35355L2.70711 10H4.5C4.77614 10 5 10.2239 5 10.5C5 10.7761 4.77614 11 4.5 11H1.5C1.22386 11 1 10.7761 1 10.5V7.5C1 7.22386 1.22386 7 1.5 7C1.77614 7 2 7.22386 2 7.5V9.29289L4.64645 6.64645Z" fill="black"/>
</svg>`}function rM(e){return()=>e`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.1464 1.14645C10.3417 0.951184 10.6583 0.951184 10.8536 1.14645C11.0488 1.34171 11.0488 1.65829 10.8536 1.85355L8.20711 4.5H10C10.2761 4.5 10.5 4.72386 10.5 5C10.5 5.27614 10.2761 5.5 10 5.5H7C6.72386 5.5 6.5 5.27614 6.5 5V2C6.5 1.72386 6.72386 1.5 7 1.5C7.27614 1.5 7.5 1.72386 7.5 2V3.79289L10.1464 1.14645ZM1.5 7C1.5 6.72386 1.72386 6.5 2 6.5H5C5.27614 6.5 5.5 6.72386 5.5 7V10C5.5 10.2761 5.27614 10.5 5 10.5C4.72386 10.5 4.5 10.2761 4.5 10V8.20711L1.85355 10.8536C1.65829 11.0488 1.34171 11.0488 1.14645 10.8536C0.951184 10.6583 0.951184 10.3417 1.14645 10.1464L3.79289 7.5H2C1.72386 7.5 1.5 7.27614 1.5 7Z" fill="black"/>
</svg>`}function rk(e){return()=>e.html`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.20544 6.45505C5.36816 6.29233 5.63198 6.29233 5.7947 6.45505L8.00007 8.66042L10.2054 6.45505C10.3682 6.29233 10.632 6.29233 10.7947 6.45505C10.9574 6.61777 10.9574 6.88158 10.7947 7.0443L8.2947 9.5443C8.13198 9.70702 7.86816 9.70702 7.70544 9.5443L5.20544 7.0443C5.04272 6.88158 5.04272 6.61777 5.20544 6.45505Z" fill="#151472"/>
</svg>`}function rI(e){return()=>e.html`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70541 6.45505C7.86813 6.29233 8.13195 6.29233 8.29467 6.45505L10.7947 8.95505C10.9574 9.11776 10.9574 9.38158 10.7947 9.5443C10.632 9.70702 10.3681 9.70702 10.2054 9.5443L8.00004 7.33893L5.79467 9.5443C5.63195 9.70702 5.36813 9.70702 5.20541 9.5443C5.04269 9.38158 5.04269 9.11776 5.20541 8.95505L7.70541 6.45505Z" fill="#151472"/>
</svg>
`}function rL(e){return e`## Scatterplot`}function rN(){return 0}function rD(e,t){let i=e?496:286;t.value.width=i,t.value.height=3*i/4,t.value=t.value}function rR(e,t){return t}function rP(e){return e`## Tooltip`}function rF(e){return e`
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
    white-space: normal;
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
</style>`}function r$(e){return e[0]}function rB(e,t){return(i,a)=>{let n=e.scaleThreshold(a.thresholds,a.range),r=n(i),o=(n.range().indexOf(r)+1).toString();var l=t`<p><span class="title">${a.name}</span><span class="label">${a.labelTooltip}</span><span class="value">${e.format(".3r")(i).replace(/\./g,",")}</span></p>
<table>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>`;return e.select(l).selectAll("td:nth-child("+o+")").style("background",r),l.outerHTML}}function rU(e,t,i,a,n,r,o){return l=>{let s=e.format(","),d=t.get(l.properties.codarea.slice(0,-1));return`
    <div class="tooltip">
    <h1>${d.municipio.nome} <span>${d.municipio.uf}</span></h1>
    <h2>${s(i.get(l.properties.codarea)).replace(/,/g,".")} habitantes</h2>
    ${a(n.field(d),n)}
    ${a(r.field(d),r)}
    ${a(o.field(d),o)}
    </div>
`}}function rj(e,t){t.updateSelected()}function rG(e){return e({selector:"h2",heading:"Ir para:"})}function rV(e){return e`## Funções`}function rH(e){return(t,i,a)=>{let n=e.select(t).selectAll("circle");return n.on("mouseover",function(){e.select(this).attr("stroke","black"),i(e.select(this).data())}),n.on("mouseleave",function(){e.select(this).attr("stroke","none"),a(e.select(this).data())}),t}}function rz(e){return e`## Dados`}function rq(e){return e("baixopeso-mun-ano.csv").csv()}function rZ(e){return e("pm25-mun-ano.csv").csv()}function rW(e){return e("malhabrasil.json").json()}function rJ(e,t,i){let a=e(t.feature(i,i.objects.foo),!0);for(let n of a.features){let r=n.properties.centroide;if(0==r[0]&&0==r[1]){let o=n.geometry.coordinates.flat(4);r[0]=o[0],r[1]=o[1]}}return a}function rX(e){return e("ufnomes.json").json()}function rQ(e){return e("municipios.csv").csv()}function rY(e){return new Map(e.map(e=>[e["C\xf3digo Munic\xedpio Completo"],e]))}function rK(e){return new Map(e.map(e=>[e.properties.codarea.slice(0,6),e]))}function r1(e){return t=>e.get(t).properties.codarea}function r0(e){return e("populacao_municipio_2018.csv").csv()}function r2(e){return new Map(e.map(e=>[e.municipio,+e.populacao]))}function r5(e,t){return e.extent(t.values())}function r3(e,t){return new Map(e.filter(e=>e.ANO==t).sort(function(e,t){return t.BAIXO_PESO/t.TOTAL-e.BAIXO_PESO/e.TOTAL}).map((e,t)=>[e.CODMUNRES,["0"==e.TOTAL?0:e.BAIXO_PESO/e.TOTAL,t,e.TOTAL]]))}function r4(e,t){return new Map(e.filter(e=>e.ANO==t).map(e=>[e.CODMUNRES,e.TOTAL]))}function r7(e,t){return new Map(e.filter(e=>e.ANO==t).map(e=>[e.CODMUNRES,e]))}function r6(e){return e.map(function(e){return 1e3*e.BAIXO_PESO/e.TOTAL})}function r8(e){return e.map(function(e){return parseFloat(e.AVG_PM25)})}function r9(e){return e.map(function(e){return 1e3*e.OBITOS_PERINATAIS/e.TOTAL}).filter(e=>0!==e)}function oe(e){return e.map(function(e){return 1e3*e.OBITOS_NEONATAIS/e.TOTAL}).filter(e=>0!==e)}function ot(e){return e.map(function(e){return e.OBITOS_TOTAIS})}function oi(e){return e.map(function(e){return 1e3*e.OBITOS_INFANTIS/e.TOTAL}).filter(e=>0!==e)}function oa(e){return e.map(function(e){return e.IDH})}function on(e,t){return e(t)}function or(e){return function(t){return{limits:e.extent(t.values()),quantiles:[e.quantile(t,.25),e.quantile(t,.5),e.quantile(t,.75),e.quantile(t,1)]}}}function oo(e,t){return e(t).quantiles}function ol(e,t){return e(t)}function os(e,t){return e(t)}function od(e,t){return e(t).quantiles}function oc(e,t){return e(t)}function ou(e,t){return e(t)}function op(e,t,i,a,n){return function(){return e.features.map(e=>{let r=t.get(e.properties.codarea);return{pos:[e.x,e.y],centroid:i(e.properties.centroide),id:+e.properties.codarea,name:r.Nome_Município,idRegion:+r.UF,regionName:r.Nome_UF,radius:a(n.get(e.properties.codarea))}})}}function of(e){return e`## Geo`}function om(){return 1152}function ov(e,t,i){return e.geoMercator().fitWidth(t,i)}function oh(e,t){return e.geoPath(t)}function ob(e,t){return e.bounds(t)}function og(e){let[[t,i],[a,n]]=e;return Math.abs((a-t)/(n-i))}function ox(e){return e`## Escalas`}function oy(e,t){return e.scaleThreshold(t.thresholds,t.range)}function ow(e,t,i,a,n){let r=t(i,{width:280,title:a.label,tickSize:0});return n.select(r).selectAll("text").style("font-family","Roboto Condensed"),n.select(r).selectAll(".tick").selectAll("line").style("stroke","white"),n.select(r).selectAll(".tick").selectAll("text").style("color","#C4C4C4"),r}function oA(e){return e.scaleOrdinal(e.range(27),e.schemeDark2)}function oC(){return 24}function oE(e,t){return e.scaleSqrt().domain(t).range([1.5,24])}function o_(e,t){return e().tickValues([1e5,1e6,1e7]).tickFormat((e,t,i)=>{let a=e>=1e6?`${e/1e6} M`:`${e/1e3} m`,n=t===i.length-1?" habitantes":"";return`${a}${n}`}).scale(t)}function oT(e){return e`## Simulação física para o cartograma de Dorling`}async function oS(e,t,i,a,n,r,o){return await e("posicoesFinais@1.json").json()}function oO(e){return e`## Dependências e Imports`}function oM(e){return e("d3@6").then(e=>(e.formatLocale({decimal:",",thousands:"\xa0"}),e))}function ok(e){return e("d3-tip")}function oI(e){return e("https://bundle.run/@mapbox/geojson-rewind@0.5.0")}function oL(e){return e("topojson-client@3")}function oN(e){return e`### Componentes de input`}function oD(e,t,i,a,n,r,o,l){return l.html`${e}
${t}
${i}
${a}
${n}
${r}
${o}`}function oR(e,t){let a=e.module();function n(){return this.url}let r=new Map([["ufnomes.json",{url:new i.U(i(2789)),mimeType:"application/json",toString:n}],["pm25-mun-ano.csv",{url:new i.U(i(1644)),mimeType:"text/csv",toString:n}],["municipios.csv",{url:new i.U(i(285)),mimeType:"text/csv",toString:n}],["malhabrasil.json",{url:new i.U(i(1371)),mimeType:"application/json",toString:n}],["baixopeso-mun-ano.csv",{url:new i.U(i(1848)),mimeType:"text/csv",toString:n}],["posicoesFinais@1.json",{url:new i.U(i(7591)),mimeType:"application/json",toString:n}],["populacao_municipio_2018.csv",{url:new i.U(i(8875)),mimeType:"text/csv",toString:n}]]);a.builtin("FileAttachment",e.fileAttachments(e=>r.get(e))),a.variable(t()).define(["md"],nv),a.variable(t("mainWindow")).define("mainWindow",["htl"],nh),a.variable(t("viewof interfaceToggle")).define("viewof interfaceToggle",["Inputs"],nb),a.variable(t("interfaceToggle")).define("interfaceToggle",["Generators","viewof interfaceToggle"],(e,t)=>e.input(t)),a.define("initial biglayoutToggle",ng),a.variable(t("mutable biglayoutToggle")).define("mutable biglayoutToggle",["Mutable","initial biglayoutToggle"],(e,t)=>new e(t)),a.variable(t("biglayoutToggle")).define("biglayoutToggle",["mutable biglayoutToggle"],e=>e.generator),a.define("initial filtrarPorRolldownToggle",nx),a.variable(t("mutable filtrarPorRolldownToggle")).define("mutable filtrarPorRolldownToggle",["Mutable","initial filtrarPorRolldownToggle"],(e,t)=>new e(t)),a.variable(t("filtrarPorRolldownToggle")).define("filtrarPorRolldownToggle",["mutable filtrarPorRolldownToggle"],e=>e.generator),a.variable(t("clearMainWindow")).define("clearMainWindow",["interfaceToggle","width","mainWindow","biglayoutToggle","filtrarPorRolldownToggle"],ny),a.variable(t("panel")).define("panel",["clearMainWindow","mainWindow"],nw),a.variable(t("populate")).define("populate",["interfaceToggle","panel","htl","viewof munSelecionados","viewof ano","viewof colorSelect","legendaEscalaCores","biglayoutToggle","rankingBarChartContents","viewof yAxisSelect","viewof xAxisSelect","makeReduceIcon","makeEnlargeIcon","mutable biglayoutToggle","scatterplotComponent","filtrarPorRolldownToggle","makeRollUpIcon","makeRollDownIcon","mutable filtrarPorRolldownToggle","painelFiltros"],nA),a.variable(t("afterInitialLayout")).define("afterInitialLayout",["populate","panel","mutable remakeMapa"],nC),a.variable(t("populateMapa")).define("populateMapa",["interfaceToggle","panel","viewof dorling"],nE),a.define("initial remakeMapa",n_),a.variable(t("mutable remakeMapa")).define("mutable remakeMapa",["Mutable","initial remakeMapa"],(e,t)=>new e(t)),a.variable(t("remakeMapa")).define("remakeMapa",["mutable remakeMapa"],e=>e.generator),a.variable(t()).define(["md"],nT),a.variable(t("storageUpdate")).define("storageUpdate",["sessionStorage","munSelecionados"],nS),a.variable(t()).define(["sessionStorage"],nO),a.variable(t("initialLoad")).define("initialLoad",["sessionStorage","viewof munSelecionados"],nM),a.variable(t()).define(["md"],nk),a.variable(t()).define(["md"],nI),a.variable(t("viewof ano")).define("viewof ano",["sliderbase"],nL),a.variable(t("ano")).define("ano",["Generators","viewof ano"],(e,t)=>e.input(t)),a.variable(t()).define(["md"],nN),a.variable(t("viewof filtroIDH")).define("viewof filtroIDH",["interfaceToggle","sliderArray","sliderRangeBase"],nD),a.variable(t("filtroIDH")).define("filtroIDH",["Generators","viewof filtroIDH"],(e,t)=>e.input(t)),a.variable(t("filtroIDHDrawer")).define("filtroIDHDrawer",["aDrawer","viewof filtroIDH"],nR),a.variable(t()).define(["md"],nP),a.variable(t("viewof filtroNascimentos")).define("viewof filtroNascimentos",["interfaceToggle","sliderArray","sliderRangeBase"],nF),a.variable(t("filtroNascimentos")).define("filtroNascimentos",["Generators","viewof filtroNascimentos"],(e,t)=>e.input(t)),a.variable(t("filtroNascimentosDrawer")).define("filtroNascimentosDrawer",["aDrawer","viewof filtroNascimentos"],n$),a.variable(t()).define(["md"],nB),a.variable(t("viewof filtroPoluicao")).define("viewof filtroPoluicao",["interfaceToggle","sliderArray","sliderRangeBase"],nU),a.variable(t("filtroPoluicao")).define("filtroPoluicao",["Generators","viewof filtroPoluicao"],(e,t)=>e.input(t)),a.variable(t("filtroPoluicaoDrawer")).define("filtroPoluicaoDrawer",["aDrawer","viewof filtroPoluicao"],nj),a.variable(t()).define(["md"],nG),a.variable(t("viewof filtroBaixoPeso")).define("viewof filtroBaixoPeso",["interfaceToggle","sliderArray","sliderRangeBase"],nV),a.variable(t("filtroBaixoPeso")).define("filtroBaixoPeso",["Generators","viewof filtroBaixoPeso"],(e,t)=>e.input(t)),a.variable(t("filtroBaixoPesoDrawer")).define("filtroBaixoPesoDrawer",["aDrawer","viewof filtroBaixoPeso"],nH),a.variable(t()).define(["md"],nz),a.variable(t()).define(["md"],nq),a.variable(t("viewof filtroMortPerinatal")).define("viewof filtroMortPerinatal",["interfaceToggle","sliderArray","sliderRangeBase"],nZ),a.variable(t("filtroMortPerinatal")).define("filtroMortPerinatal",["Generators","viewof filtroMortPerinatal"],(e,t)=>e.input(t)),a.variable(t("filtroMortPerinatalDrawer")).define("filtroMortPerinatalDrawer",["aDrawer","viewof filtroMortPerinatal"],nW),a.variable(t()).define(["md"],nJ),a.variable(t("viewof filtroMortNeonatal")).define("viewof filtroMortNeonatal",["interfaceToggle","sliderArray","sliderRangeBase"],nX),a.variable(t("filtroMortNeonatal")).define("filtroMortNeonatal",["Generators","viewof filtroMortNeonatal"],(e,t)=>e.input(t)),a.variable(t("filtroMortNeonatalDrawer")).define("filtroMortNeonatalDrawer",["aDrawer","viewof filtroMortNeonatal"],nQ),a.variable(t()).define(["md"],nY),a.variable(t("viewof filtroMortInfantil")).define("viewof filtroMortInfantil",["interfaceToggle","sliderArray","sliderRangeBase"],nK),a.variable(t("filtroMortInfantil")).define("filtroMortInfantil",["Generators","viewof filtroMortInfantil"],(e,t)=>e.input(t)),a.variable(t("filtroMortInfatilDrawer")).define("filtroMortInfatilDrawer",["aDrawer","viewof filtroMortInfantil"],n1),a.variable(t()).define(["md"],n0),a.variable(t("viewof filtroRegiao")).define("viewof filtroRegiao",["interfaceToggle","aSelect"],n2),a.variable(t("filtroRegiao")).define("filtroRegiao",["Generators","viewof filtroRegiao"],(e,t)=>e.input(t)),a.variable(t("filtroRegiaoDrawer")).define("filtroRegiaoDrawer",["aDrawer","html","viewof filtroRegiao"],n5),a.variable(t("viewof filtroEstado")).define("viewof filtroEstado",["interfaceToggle","aSelect","ufnome"],n3),a.variable(t("filtroEstado")).define("filtroEstado",["Generators","viewof filtroEstado"],(e,t)=>e.input(t)),a.variable(t("filtroEstadoDrawer")).define("filtroEstadoDrawer",["aDrawer","html","viewof filtroEstado"],n4),a.variable(t("viewof filtroRegSaude")).define("viewof filtroRegSaude",["interfaceToggle","codigoToRegiaoSaude","aSelect"],n7),a.variable(t("filtroRegSaude")).define("filtroRegSaude",["Generators","viewof filtroRegSaude"],(e,t)=>e.input(t)),a.variable(t("filtroRegSaudeDrawer")).define("filtroRegSaudeDrawer",["aDrawer","html","viewof filtroRegSaude"],n6),a.variable(t()).define(["md"],n8),a.variable(t("painelFiltros")).define("painelFiltros",["interfaceToggle","htl","filtroNascimentosDrawer","filtroRegiaoDrawer","filtroEstadoDrawer","filtroRegSaudeDrawer","filtroPoluicaoDrawer","filtroBaixoPesoDrawer","filtroMortPerinatalDrawer","filtroMortNeonatalDrawer","filtroMortInfatilDrawer","filtroIDHDrawer"],n9),a.variable(t()).define(["md"],re),a.variable(t("allFilters")).define("allFilters",["filtroRegiao","ufnome","filtroEstado","filtroNascimentos","filtroPoluicao","filtroBaixoPeso","filtroMortPerinatal","filtroMortNeonatal","filtroMortInfantil","filtroIDH","ano","mutable dataFilter"],rt),a.variable(t()).define(["md"],ri),a.variable(t("viewof colorSelect")).define("viewof colorSelect",["interfaceToggle","aSelect","variables"],ra),a.variable(t("colorSelect")).define("colorSelect",["Generators","viewof colorSelect"],(e,t)=>e.input(t)),a.variable(t("color")).define("color",["mutable colorVar","variables","colorSelect"],rn),a.variable(t("viewof xAxisSelect")).define("viewof xAxisSelect",["interfaceToggle","aSelect","variables"],rr),a.variable(t("xAxisSelect")).define("xAxisSelect",["Generators","viewof xAxisSelect"],(e,t)=>e.input(t)),a.variable(t("xaxis")).define("xaxis",["mutable xAxisVar","variables","xAxisSelect"],ro),a.variable(t("viewof yAxisSelect")).define("viewof yAxisSelect",["interfaceToggle","aSelect","variables"],rl),a.variable(t("yAxisSelect")).define("yAxisSelect",["Generators","viewof yAxisSelect"],(e,t)=>e.input(t)),a.variable(t("yaxis")).define("yaxis",["mutable yAxisVar","variables","yAxisSelect"],rs),a.variable(t()).define(["md"],rd),a.variable(t("rankingBarChartContents")).define("rankingBarChartContents",["htl","visToggle","colorVar","biglayoutToggle","makeRollDownIcon","makeRollUpIcon","mutable biglayoutToggle","rankingBox","viewof visToggle","makeBarChartVis","munSelecionados","dadosMunicipio"],rc),a.variable(t()).define(["md"],ru),a.variable(t("normalizeString")).define("normalizeString",rp),a.define("initial unknownData",rf),a.variable(t("mutable unknownData")).define("mutable unknownData",["Mutable","initial unknownData"],(e,t)=>new e(t)),a.variable(t("unknownData")).define("unknownData",["mutable unknownData"],e=>e.generator),a.variable(t()).define(["colorVar"],rm),a.variable(t("filteredData")).define("filteredData",["mutable unknownData","dadosMunicipio","allFilters","codigoToMunicipio","colorVar","normalizeString"],rv),a.variable(t()).define(["makeDownloadData"],rh),a.variable(t("makeDownloadData")).define("makeDownloadData",["dadosMunicipio","allFilters"],rb),a.variable(t("rankStyles")).define("rankStyles",["htl"],rg),a.variable(t("rankingBox")).define("rankingBox",["interfaceToggle","htl","colorVar","aText","escalaCores","d3","alteraMenuLocalidade","filteredData","normalizeString","html"],rx),a.variable(t()).define(["md"],ry),a.variable(t("dorlingStyles")).define("dorlingStyles",["html"],rw),a.variable(t("viewof dorling")).define("viewof dorling",["interfaceToggle","remakeMapa","limites","panel","mutable filtrarPorRolldownToggle","html","zoomInIcon","zoomOutIcon","d3","posicoesFinais","d3tip","tooltip","viewof munSelecionados","posicoesPorCod","flagPath","municipios","alteraMenuLocalidade"],rA),a.variable(t("dorling")).define("dorling",["Generators","viewof dorling"],(e,t)=>e.input(t)),a.define("initial debug",rC),a.variable(t("mutable debug")).define("mutable debug",["Mutable","initial debug"],(e,t)=>new e(t)),a.variable(t("debug")).define("debug",["mutable debug"],e=>e.generator),a.variable(t("dorlingCircleConf")).define("dorlingCircleConf",["viewof dorling","dadosPorCodigo","d3","allFilters","raio","populacaoPorCodigo","escalaCores","colorVar"],rE),a.variable(t()).define(["md"],r_),a.variable(t("zoomInIcon")).define("zoomInIcon",["html"],rT),a.variable(t("zoomOutIcon")).define("zoomOutIcon",["html"],rS),a.variable(t("makeEnlargeIcon")).define("makeEnlargeIcon",["html"],rO),a.variable(t("makeReduceIcon")).define("makeReduceIcon",["html"],rM),a.variable(t("makeRollDownIcon")).define("makeRollDownIcon",["htl"],rk),a.variable(t("makeRollUpIcon")).define("makeRollUpIcon",["htl"],rI),a.variable(t()).define(["md"],rL),a.define("initial TESTE",rN),a.variable(t("mutable TESTE")).define("mutable TESTE",["Mutable","initial TESTE"],(e,t)=>new e(t)),a.variable(t("TESTE")).define("TESTE",["mutable TESTE"],e=>e.generator),a.variable(t("updateScatterConfig")).define("updateScatterConfig",["biglayoutToggle","mutable scatterConfig"],rD),a.variable(t("scatterplotComponent")).define("scatterplotComponent",["interfaceToggle","scatterplot"],rR),a.variable(t()).define(["md"],rP),a.variable(t("styles")).define("styles",["html"],rF),a.variable(t()).define(["dadosMunicipio"],r$),a.variable(t("ttipScale")).define("ttipScale",["d3","html"],rB),a.variable(t("tooltip")).define("tooltip",["d3","dadosPorCodigo","populacaoPorCodigo","ttipScale","colorVar","yAxisVar","xAxisVar"],rU),a.variable(t("reactToMunSelecionados")).define("reactToMunSelecionados",["munSelecionados","viewof dorling"],rj),a.variable(t()).define(["toc"],rG),a.variable(t()).define(["md"],rV),a.variable(t("hoverInteraction")).define("hoverInteraction",["d3"],rH),a.variable(t()).define(["md"],rz),a.variable(t("baixopesoMunAno")).define("baixopesoMunAno",["FileAttachment"],rq),a.variable(t("pm25MunAno")).define("pm25MunAno",["FileAttachment"],rZ),a.variable(t("malhaBrasil")).define("malhaBrasil",["FileAttachment"],rW),a.variable(t("feicoesMunicipio")).define("feicoesMunicipio",["rewind","topojson","malhaBrasil"],rJ),a.variable(t("ufnome")).define("ufnome",["FileAttachment"],rX),a.variable(t("municipioInfo")).define("municipioInfo",["FileAttachment"],rQ),a.variable(t("municipioPorCodigo")).define("municipioPorCodigo",["municipioInfo"],rY),a.variable(t("posicoesPorCod")).define("posicoesPorCod",["posicoesFinais"],rK),a.variable(t("codToCodarea")).define("codToCodarea",["posicoesPorCod"],r1),a.variable(t("populacaoMunicipio")).define("populacaoMunicipio",["FileAttachment"],r0),a.variable(t("populacaoPorCodigo")).define("populacaoPorCodigo",["populacaoMunicipio"],r2),a.variable(t("populacaoLimites")).define("populacaoLimites",["d3","populacaoPorCodigo"],r5),a.variable(t("bpPorCodigo")).define("bpPorCodigo",["baixopesoMunAno","ano"],r3),a.variable(t("totalPorCodigo")).define("totalPorCodigo",["baixopesoMunAno","ano"],r4),a.variable(t("dadosPorCodigo")).define("dadosPorCodigo",["dadosMunicipio","ano"],r7),a.variable(t("bp")).define("bp",["dadosMunicipio"],r6),a.variable(t("AVGPM25")).define("AVGPM25",["dadosMunicipio"],r8),a.variable(t("obper")).define("obper",["dadosMunicipio"],r9),a.variable(t("obneo")).define("obneo",["dadosMunicipio"],oe),a.variable(t("obtotal")).define("obtotal",["dadosMunicipio"],ot),a.variable(t("obinf")).define("obinf",["dadosMunicipio"],oi),a.variable(t("idh")).define("idh",["dadosMunicipio"],oa),a.variable(t()).define(["valueAnalysis","idh"],on),a.variable(t("valueAnalysis")).define("valueAnalysis",["d3"],or),a.variable(t()).define(["valueAnalysis","obper"],oo),a.variable(t()).define(["valueAnalysis","obneo"],ol),a.variable(t()).define(["valueAnalysis","obinf"],os),a.variable(t()).define(["valueAnalysis","bp"],od),a.variable(t()).define(["valueAnalysis","AVGPM25"],oc),a.variable(t()).define(["valueAnalysis","AVGPM25"],ou),a.variable(t("getCircles")).define("getCircles",["feicoesMunicipio","municipioPorCodigo","projecao","raio","populacaoPorCodigo"],op),a.variable(t()).define(["md"],of),a.variable(t("larguraDefault")).define("larguraDefault",om),a.variable(t("projecao")).define("projecao",["d3","larguraDefault","feicoesMunicipio"],ov),a.variable(t("funcaoPath")).define("funcaoPath",["d3","projecao"],oh),a.variable(t("limites")).define("limites",["funcaoPath","feicoesMunicipio"],ob),a.variable(t("razaoAspecto")).define("razaoAspecto",["limites"],og),a.variable(t()).define(["md"],ox),a.variable(t("escalaCores")).define("escalaCores",["d3","colorVar"],oy),a.variable(t("legendaEscalaCores")).define("legendaEscalaCores",["interfaceToggle","Legend","escalaCores","colorVar","d3"],ow),a.variable(t("coresCirculos")).define("coresCirculos",["d3"],oA),a.variable(t("raioMax")).define("raioMax",oC),a.variable(t("raio")).define("raio",["d3","populacaoLimites"],oE),a.variable(t("legendaCirculos")).define("legendaCirculos",["legendCircle","raio"],o_),a.variable(t()).define(["md"],oT),a.variable(t("posicoesFinais")).define("posicoesFinais",["FileAttachment","dadosMunicipio","feicoesMunicipio","projecao","d3","raio","populacaoPorCodigo"],oS),a.variable(t()).define(["md"],oO),a.variable(t("d3")).define("d3",["require"],oM),a.variable(t("d3tip")).define("d3tip",["require"],ok),a.variable(t("rewind")).define("rewind",["require"],oI),a.variable(t("topojson")).define("topojson",["require"],oL);let o=e.module(C);a.import("legend",o);let l=e.module(tT);a.import("checkbox",l);let s=e.module(tD);a.import("legendCircle",s);let d=e.module(tq);a.import("toc",d);let c=e.module(ie);a.import("keys",c);let u=e.module(C);a.import("Legend",u);let p=e.module(aL);a.import("scatterplot",p),a.import("municipios",p),a.import("dadosMunicipio",p),a.import("codigoToMunicipio",p),a.import("viewof munSelecionados",p),a.import("munSelecionados",p),a.import("variables",p),a.import("viewof limpar",p),a.import("limpar",p),a.import("flagPath",p),a.import("corMunNaoUsada",p),a.import("alteraMenuLocalidade",p),a.import("codigoToRegiaoSaude",p),a.import("mutable scatterConfig",p),a.import("scatterConfig",p),a.import("mutable dataFilter",p),a.import("dataFilter",p),a.import("mutable xAxisVar",p),a.import("xAxisVar",p),a.import("mutable yAxisVar",p),a.import("yAxisVar",p),a.import("mutable colorVar",p),a.import("colorVar",p);let f=e.module(aX);a.import("viewof visToggle",f),a.import("visToggle",f),a.import("makeBarChartVis",f),a.variable(t()).define(["md"],oN);let m=e.module(ni);a.import("aDrawer",m),a.import("aDrawerStyles",m);let v=e.module(a2);a.import("aSlider",v),a.import("aSliderStyles",v);let h=e.module(nm);a.import("aSelect",h),a.import("aText",h),a.import("aSelectStyles",h);let b=e.module(ij);return a.import("sliderbase",b),a.import("sliderArray",b),a.import("sliderRangeBase",b),a.import("style_slider",b),a.variable(t("allStyles")).define("allStyles",["aDrawerStyles","aSliderStyles","aSelectStyles","style_slider","rankStyles","styles","dorlingStyles","htl"],oD),a}i.d(t,{Z:function(){return oR}})}}]);