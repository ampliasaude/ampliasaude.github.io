(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[683],{5462:function(e,t,i){"use strict";function n(e,t,i){i=i||{};var n=e.ownerDocument,a=n.defaultView.CustomEvent;"function"==typeof a?a=new a(t,{detail:i}):((a=n.createEvent("Event")).initEvent(t,!1,!1),a.detail=i),e.dispatchEvent(a)}function a(e){return Array.isArray(e)||e instanceof Int8Array||e instanceof Int16Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Uint16Array||e instanceof Uint32Array||e instanceof Float32Array||e instanceof Float64Array}function r(e){return e===(0|e)+""}function o(e){let t=document.createElement("span");return t.className="observablehq--cellname",t.textContent=`${e} = `,t}i.d(t,{lj:function(){return ed},Zu:function(){return t5},r_:function(){return ix}});let l=Symbol.prototype.toString;function s(e){return l.call(e)}let{getOwnPropertySymbols:d,prototype:{hasOwnProperty:c}}=Object,{toStringTag:u}=Symbol,f={};function p(e,t){return c.call(e,t)}function m(e){return e[u]||e.constructor&&e.constructor.name||"Object"}function h(e,t){try{let i=e[t];return i&&i.constructor,i}catch(n){return f}}let v=[{symbol:"@@__IMMUTABLE_INDEXED__@@",name:"Indexed",modifier:!0},{symbol:"@@__IMMUTABLE_KEYED__@@",name:"Keyed",modifier:!0},{symbol:"@@__IMMUTABLE_LIST__@@",name:"List",arrayish:!0},{symbol:"@@__IMMUTABLE_MAP__@@",name:"Map"},{symbol:"@@__IMMUTABLE_ORDERED__@@",name:"Ordered",modifier:!0,prefix:!0},{symbol:"@@__IMMUTABLE_RECORD__@@",name:"Record"},{symbol:"@@__IMMUTABLE_SET__@@",name:"Set",arrayish:!0,setish:!0},{symbol:"@@__IMMUTABLE_STACK__@@",name:"Stack",arrayish:!0}];function b(e){try{let t=v.filter(({symbol:t})=>!0===e[t]);if(!t.length)return;let i=t.find(e=>!e.modifier),n="Map"===i.name&&t.find(e=>e.modifier&&e.prefix),a=t.some(e=>e.arrayish),r=t.some(e=>e.setish);return{name:`${n?n.name:""}${i.name}`,symbols:t,arrayish:a&&!r,setish:r}}catch(o){return null}}let{getPrototypeOf:g,getOwnPropertyDescriptors:x}=Object,y=g({});function w(e,t,i,r){let l=a(e),s,d,c,u;e instanceof Map?e instanceof e.constructor?(s=`Map(${e.size})`,d=A):(s="Map()",d=T):e instanceof Set?e instanceof e.constructor?(s=`Set(${e.size})`,d=_):(s="Set()",d=T):l?(s=`${e.constructor.name}(${e.length})`,d=E):(u=b(e))?(s=`Immutable.${u.name}${"Record"===u.name?"":`(${e.size})`}`,l=u.arrayish,d=u.arrayish?S:u.setish?C:O):r?(s=m(e),d=k):(s=m(e),d=T);let f=document.createElement("span");f.className="observablehq--expanded",i&&f.appendChild(o(i));let p=f.appendChild(document.createElement("a"));p.innerHTML=`<svg width=8 height=8 class='observablehq--caret'>
    <path d='M4 7L0 1h8z' fill='currentColor' />
  </svg>`,p.appendChild(document.createTextNode(`${s}${l?" [":" {"}`)),p.addEventListener("mouseup",function(t){t.stopPropagation(),el(f,R(e,null,i,r))}),d=d(e);for(let h=0;!(c=d.next()).done&&h<20;++h)f.appendChild(c.value);if(!c.done){let v=f.appendChild(document.createElement("a"));v.className="observablehq--field",v.style.display="block",v.appendChild(document.createTextNode(`  … more`)),v.addEventListener("mouseup",function(e){e.stopPropagation(),f.insertBefore(c.value,f.lastChild.previousSibling);for(let t=0;!(c=d.next()).done&&t<19;++t)f.insertBefore(c.value,f.lastChild.previousSibling);c.done&&f.removeChild(f.lastChild.previousSibling),n(f,"load")})}return f.appendChild(document.createTextNode(l?"]":"}")),f}function*A(e){for(let[t,i]of e)yield D(t,i);yield*T(e)}function*_(e){for(let t of e)yield N(t);yield*T(e)}function*C(e){for(let t of e)yield N(t)}function*E(e){for(let t=0,i=e.length;t<i;++t)t in e&&(yield M(t,h(e,t),"observablehq--index"));for(let n in e)!r(n)&&p(e,n)&&(yield M(n,h(e,n),"observablehq--key"));for(let a of d(e))yield M(s(a),h(e,a),"observablehq--symbol")}function*S(e){let t=0;for(let i=e.size;t<i;++t)yield M(t,e.get(t),!0)}function*k(e){for(let t in x(e))yield M(t,h(e,t),"observablehq--key");for(let i of d(e))yield M(s(i),h(e,i),"observablehq--symbol");let n=g(e);n&&n!==y&&(yield I(n))}function*T(e){for(let t in e)p(e,t)&&(yield M(t,h(e,t),"observablehq--key"));for(let i of d(e))yield M(s(i),h(e,i),"observablehq--symbol");let n=g(e);n&&n!==y&&(yield I(n))}function*O(e){for(let[t,i]of e)yield M(t,i,"observablehq--key")}function I(e){let t=document.createElement("div"),i=t.appendChild(document.createElement("span"));return t.className="observablehq--field",i.className="observablehq--prototype-key",i.textContent="  <prototype>",t.appendChild(document.createTextNode(": ")),t.appendChild(eo(e,void 0,void 0,void 0,!0)),t}function M(e,t,i){let n=document.createElement("div"),a=n.appendChild(document.createElement("span"));return n.className="observablehq--field",a.className=i,a.textContent=`  ${e}`,n.appendChild(document.createTextNode(": ")),n.appendChild(eo(t)),n}function D(e,t){let i=document.createElement("div");return i.className="observablehq--field",i.appendChild(document.createTextNode("  ")),i.appendChild(eo(e)),i.appendChild(document.createTextNode(" => ")),i.appendChild(eo(t)),i}function N(e){let t=document.createElement("div");return t.className="observablehq--field",t.appendChild(document.createTextNode("  ")),t.appendChild(eo(e)),t}function L(e){let t=window.getSelection();return"Range"===t.type&&(t.containsNode(e,!0)||t.anchorNode.isSelfOrDescendant(e)||t.focusNode.isSelfOrDescendant(e))}function R(e,t,i,n){let r=a(e),l,s,d,c;if(e instanceof Map?e instanceof e.constructor?(l=`Map(${e.size})`,s=P):(l="Map()",s=j):e instanceof Set?e instanceof e.constructor?(l=`Set(${e.size})`,s=F):(l="Set()",s=j):r?(l=`${e.constructor.name}(${e.length})`,s=$):(c=b(e))?(l=`Immutable.${c.name}${"Record"===c.name?"":`(${e.size})`}`,r=c.arrayish,s=c.arrayish?U:c.setish?B:z):(l=m(e),s=j),t){let u=document.createElement("span");return u.className="observablehq--shallow",i&&u.appendChild(o(i)),u.appendChild(document.createTextNode(l)),u.addEventListener("mouseup",function(t){L(u)||(t.stopPropagation(),el(u,R(e)))}),u}let f=document.createElement("span");f.className="observablehq--collapsed",i&&f.appendChild(o(i));let p=f.appendChild(document.createElement("a"));p.innerHTML=`<svg width=8 height=8 class='observablehq--caret'>
    <path d='M7 4L1 8V0z' fill='currentColor' />
  </svg>`,p.appendChild(document.createTextNode(`${l}${r?" [":" {"}`)),f.addEventListener("mouseup",function(t){L(f)||(t.stopPropagation(),el(f,w(e,null,i,n)))},!0),s=s(e);for(let h=0;!(d=s.next()).done&&h<20;++h)h>0&&f.appendChild(document.createTextNode(", ")),f.appendChild(d.value);return d.done||f.appendChild(document.createTextNode(", …")),f.appendChild(document.createTextNode(r?"]":"}")),f}function*P(e){for(let[t,i]of e)yield V(t,i);yield*j(e)}function*F(e){for(let t of e)yield eo(t,!0);yield*j(e)}function*B(e){for(let t of e)yield eo(t,!0)}function*U(e){let t=-1,i=0;for(let n=e.size;i<n;++i)i>t+1&&(yield G(i-t-1)),yield eo(e.get(i),!0),t=i;i>t+1&&(yield G(i-t-1))}function*$(e){let t=-1,i=0;for(let n=e.length;i<n;++i)i in e&&(i>t+1&&(yield G(i-t-1)),yield eo(h(e,i),!0),t=i);for(let a in i>t+1&&(yield G(i-t-1)),e)!r(a)&&p(e,a)&&(yield H(a,h(e,a),"observablehq--key"));for(let o of d(e))yield H(s(o),h(e,o),"observablehq--symbol")}function*j(e){for(let t in e)p(e,t)&&(yield H(t,h(e,t),"observablehq--key"));for(let i of d(e))yield H(s(i),h(e,i),"observablehq--symbol")}function*z(e){for(let[t,i]of e)yield H(t,i,"observablehq--key")}function G(e){let t=document.createElement("span");return t.className="observablehq--empty",t.textContent=1===e?"empty":`empty \xd7 ${e}`,t}function H(e,t,i){let n=document.createDocumentFragment(),a=n.appendChild(document.createElement("span"));return a.className=i,a.textContent=e,n.appendChild(document.createTextNode(": ")),n.appendChild(eo(t,!0)),n}function V(e,t){let i=document.createDocumentFragment();return i.appendChild(eo(e,!0)),i.appendChild(document.createTextNode(" => ")),i.appendChild(eo(t,!0)),i}function q(e,t){return`${e}`.padStart(t,"0")}var W=Error.prototype.toString,Z=RegExp.prototype.toString;function X(e){return e.replace(/[\\`\x00-\x09\x0b-\x19]|\${/g,J)}function J(e){var t=e.charCodeAt(0);switch(t){case 8:return"\\b";case 9:return"\\t";case 11:return"\\v";case 12:return"\\f";case 13:return"\\r"}return t<16?"\\x0"+t.toString(16):t<32?"\\x"+t.toString(16):"\\"+e}function Y(e,t){for(var i=0;t.exec(e);)++i;return i}var Q=Function.prototype.toString,K={prefix:"async ƒ"},ee={prefix:"async ƒ*"},et={prefix:"class"},ei={prefix:"ƒ"},en={prefix:"ƒ*"};function ea(e,t,i){var n=document.createElement("span");n.className="observablehq--function",i&&n.appendChild(o(i));var a=n.appendChild(document.createElement("span"));return a.className="observablehq--keyword",a.textContent=e.prefix,n.appendChild(document.createTextNode(t)),n}let{prototype:{toString:er}}=Object;function eo(e,t,i,n,a){let r=typeof e;switch(r){case"boolean":case"undefined":e+="";break;case"number":e=0===e&&1/e<0?"-0":e+"";break;case"bigint":e+="n";break;case"symbol":e=s(e,n);break;case"function":return function(e,t){var i,n,a=Q.call(e);switch(e.constructor&&e.constructor.name){case"AsyncFunction":i=K;break;case"AsyncGeneratorFunction":i=ee;break;case"GeneratorFunction":i=en;break;default:i=/^class\b/.test(a)?et:ei}return i===et?ea(i,"",t):(n=/^(?:async\s*)?(\w+)\s*=>/.exec(a))?ea(i,"("+n[1]+")",t):(n=/^(?:async\s*)?\(\s*(\w+(?:\s*,\s*\w+)*)?\s*\)/.exec(a))||(n=/^(?:async\s*)?function(?:\s*\*)?(?:\s*\w+)?\s*\(\s*(\w+(?:\s*,\s*\w+)*)?\s*\)/.exec(a))?ea(i,n[1]?"("+n[1].replace(/\s*,\s*/g,", ")+")":"()",t):ea(i,"(…)",t)}(e,n);case"string":return function(e,t,i,n){if(!1===t){if(Y(e,/["\n]/g)<=Y(e,/`|\${/g)){let a=document.createElement("span");n&&a.appendChild(o(n));let r=a.appendChild(document.createElement("span"));return r.className="observablehq--string",r.textContent=JSON.stringify(e),a}let l=e.split("\n");if(l.length>20&&!i){let s=document.createElement("div");n&&s.appendChild(o(n));let d=s.appendChild(document.createElement("span"));d.className="observablehq--string",d.textContent="`"+X(l.slice(0,20).join("\n"));let c=s.appendChild(document.createElement("span")),u=l.length-20;return c.textContent=`Show ${u} truncated line${u>1?"s":""}`,c.className="observablehq--string-expand",c.addEventListener("mouseup",function(i){i.stopPropagation(),el(s,eo(e,t,!0,n))}),s}let f=document.createElement("span");n&&f.appendChild(o(n));let p=f.appendChild(document.createElement("span"));return p.className=`observablehq--string${i?" observablehq--expanded":""}`,p.textContent="`"+X(e)+"`",f}let m=document.createElement("span");n&&m.appendChild(o(n));let h=m.appendChild(document.createElement("span"));return h.className="observablehq--string",h.textContent=JSON.stringify(e.length>100?`${e.slice(0,50)}…${e.slice(-49)}`:e),m}(e,t,i,n);default:var l,d;if(null===e){r=null,e="null";break}if(e instanceof Date){r="date",e=function(e,t){var i;if(e instanceof Date||(e=new Date(+e)),isNaN(e))return"function"==typeof t?t(e):t;let n=e.getUTCHours(),a=e.getUTCMinutes(),r=e.getUTCSeconds(),o=e.getUTCMilliseconds();return`${i=e.getUTCFullYear(),i<0?`-${q(-i,6)}`:i>9999?`+${q(i,6)}`:q(i,4)}-${q(e.getUTCMonth()+1,2)}-${q(e.getUTCDate(),2)}${n||a||r||o?`T${q(n,2)}:${q(a,2)}${r||o?`:${q(r,2)}${o?`.${q(o,3)}`:""}`:""}Z`:""}`}(e,"Invalid Date");break}if(e===f){r="forbidden",e="[forbidden]";break}switch(er.call(e)){case"[object RegExp]":r="regexp",l=e,e=Z.call(l);break;case"[object Error]":case"[object DOMException]":r="error",e=(d=e).stack||W.call(d);break;default:return(i?w:R)(e,t,n,a)}}let c=document.createElement("span");n&&c.appendChild(o(n));let u=c.appendChild(document.createElement("span"));return u.className=`observablehq--${r}`,u.textContent=e,c}function el(e,t){e.classList.contains("observablehq--inspect")&&t.classList.add("observablehq--inspect"),e.parentNode.replaceChild(t,e),n(t,"load")}let es=/\s+\(\d+:\d+\)$/m;class ed{constructor(e){if(!e)throw Error("invalid node");this._node=e,e.classList.add("observablehq")}pending(){let{_node:e}=this;e.classList.remove("observablehq--error"),e.classList.add("observablehq--running")}fulfilled(e,t){var i;let{_node:a}=this;if(i=e,(i instanceof Element||i instanceof Text)&&i instanceof i.constructor&&(!e.parentNode||e.parentNode===a)||(e=eo(e,!1,a.firstChild&&a.firstChild.classList&&a.firstChild.classList.contains("observablehq--expanded"),t)).classList.add("observablehq--inspect"),a.classList.remove("observablehq--running","observablehq--error"),a.firstChild!==e){if(a.firstChild){for(;a.lastChild!==a.firstChild;)a.removeChild(a.lastChild);a.replaceChild(e,a.firstChild)}else a.appendChild(e)}n(a,"update")}rejected(e,t){let{_node:i}=this;for(i.classList.remove("observablehq--running"),i.classList.add("observablehq--error");i.lastChild;)i.removeChild(i.lastChild);var a=document.createElement("div");a.className="observablehq--inspect",t&&a.appendChild(o(t)),a.appendChild(document.createTextNode((e+"").replace(es,""))),i.appendChild(a),n(i,"error",{error:e})}}ed.into=function(e){if("string"==typeof e&&null==(e=document.querySelector(e)))throw Error("container not found");return function(){return new ed(e.appendChild(document.createElement("div")))}};var ec={},eu={};function ef(e){return Function("d","return {"+e.map(function(e,t){return JSON.stringify(e)+": d["+t+'] || ""'}).join(",")+"}")}function ep(e){var t=Object.create(null),i=[];return e.forEach(function(e){for(var n in e)n in t||i.push(t[n]=n)}),i}function em(e,t){var i=e+"",n=i.length;return n<t?Array(t-n+1).join(0)+i:i}function eh(e){var t=RegExp('["'+e+"\n\r]"),i=e.charCodeAt(0);function n(e,t){var n,a=[],r=e.length,o=0,l=0,s=r<=0,d=!1;function c(){if(s)return eu;if(d)return d=!1,ec;var t,n,a=o;if(34===e.charCodeAt(a)){for(;o++<r&&34!==e.charCodeAt(o)||34===e.charCodeAt(++o););return(t=o)>=r?s=!0:10===(n=e.charCodeAt(o++))?d=!0:13===n&&(d=!0,10===e.charCodeAt(o)&&++o),e.slice(a+1,t-1).replace(/""/g,'"')}for(;o<r;){if(10===(n=e.charCodeAt(t=o++)))d=!0;else if(13===n)d=!0,10===e.charCodeAt(o)&&++o;else if(n!==i)continue;return e.slice(a,t)}return s=!0,e.slice(a,r)}for(10===e.charCodeAt(r-1)&&--r,13===e.charCodeAt(r-1)&&--r;(n=c())!==eu;){for(var u=[];n!==ec&&n!==eu;)u.push(n),n=c();(!t||null!=(u=t(u,l++)))&&a.push(u)}return a}function a(t,i){return t.map(function(t){return i.map(function(e){return o(t[e])}).join(e)})}function r(t){return t.map(o).join(e)}function o(e){var i,n,a,r,o,l;return null==e?"":e instanceof Date?(n=e.getUTCHours(),a=e.getUTCMinutes(),r=e.getUTCSeconds(),o=e.getUTCMilliseconds(),isNaN(e)?"Invalid Date":((l=e.getUTCFullYear())<0?"-"+em(-l,6):l>9999?"+"+em(l,6):em(l,4))+"-"+em(e.getUTCMonth()+1,2)+"-"+em(e.getUTCDate(),2)+(o?"T"+em(n,2)+":"+em(a,2)+":"+em(r,2)+"."+em(o,3)+"Z":r?"T"+em(n,2)+":"+em(a,2)+":"+em(r,2)+"Z":a||n?"T"+em(n,2)+":"+em(a,2)+"Z":"")):t.test(e+="")?'"'+e.replace(/"/g,'""')+'"':e}return{parse:function(e,t){var i,a,r=n(e,function(e,n){var r,o,l;if(i)return i(e,n-1);a=e,i=t?(l=ef(e),function(i,n){return t(l(i),n,e)}):ef(e)});return r.columns=a||[],r},parseRows:n,format:function(t,i){return null==i&&(i=ep(t)),[i.map(o).join(e)].concat(a(t,i)).join("\n")},formatBody:function(e,t){return null==t&&(t=ep(e)),a(e,t).join("\n")},formatRows:function(e){return e.map(r).join("\n")},formatRow:r,formatValue:o}}var ev=eh("	"),eb=ev.parse,eg=ev.parseRows;ev.format,ev.formatBody,ev.formatRows,ev.formatRow,ev.formatValue;var ex=eh(","),ey=ex.parse,ew=ex.parseRows;function eA(e){for(var t in e){var i,n,a=e[t].trim();if(a){if("true"===a)a=!0;else if("false"===a)a=!1;else if("NaN"===a)a=NaN;else if(isNaN(i=+a)){if(!(n=a.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/)))continue;e_&&n[4]&&!n[7]&&(a=a.replace(/-/g,"/").replace(/T/," ")),a=new Date(a)}else a=i}else a=null;e[t]=a}return e}ex.format,ex.formatBody,ex.formatRows,ex.formatRow,ex.formatValue;let e_=new Date("2019-01-01T00:00").getHours()||new Date("2019-07-01T00:00").getHours();function eC(e,t,i){return{resolve:(n=i)=>`${e}@${t}/${n}`}}let eE=eC("d3","7.6.1","dist/d3.min.js"),eS=eC("@observablehq/inputs","0.10.4","dist/inputs.min.js"),ek=eC("@observablehq/plot","0.6.0","dist/plot.umd.min.js"),eT=eC("@observablehq/graphviz","0.2.1","dist/graphviz.min.js"),eO=eC("@observablehq/highlight.js","2.0.0","highlight.min.js"),eI=eC("@observablehq/katex","0.11.1","dist/katex.min.js"),eM=eC("lodash","4.17.21","lodash.min.js"),eD=eC("htl","0.3.1","dist/htl.min.js"),eN=eC("jszip","3.10.0","dist/jszip.min.js"),eL=eC("marked","0.3.12","marked.min.js"),eR=eC("sql.js","1.7.0","dist/sql-wasm.js"),eP=eC("vega","5.22.1","build/vega.min.js"),eF=eC("vega-lite","5.5.0","build/vega-lite.min.js"),eB=eC("vega-lite-api","5.0.0","build/vega-lite-api.min.js"),eU=eC("apache-arrow","4.0.1","Arrow.es2015.min.js"),e$=eC("arquero","4.8.8","dist/arquero.min.js"),ej=eC("topojson-client","3.1.0","dist/topojson-client.min.js"),ez=eC("exceljs","4.3.0","dist/exceljs.min.js"),eG=eC("mermaid","9.1.6","dist/mermaid.min.js"),eH=eC("leaflet","1.8.0","dist/leaflet.js"),eV=new Map,eq=[],eW=eq.map,eZ=eq.some,eX=eq.hasOwnProperty,eJ=/^((?:@[^/@]+\/)?[^/@]+)(?:@([^/]+))?(?:\/(.*))?$/,eY=/^\d+\.\d+\.\d+(-[\w-.+]+)?$/,eQ=/(?:\.[^/]*|\/)$/;class eK extends Error{constructor(e){super(e)}}function e0(e){let t=eJ.exec(e);return t&&{name:t[1],version:t[2],path:t[3]}}function e1(e="https://cdn.jsdelivr.net/npm/",t=["unpkg","jsdelivr","browser","main"]){if(!/\/$/.test(e))throw Error("origin lacks trailing slash");function i(t){let i=`${e}${t.name}${t.version?`@${t.version}`:""}/package.json`,n=eV.get(i);return n||eV.set(i,n=fetch(i).then(e=>{if(!e.ok)throw new eK("unable to load package.json");return e.redirected&&!eV.has(e.url)&&eV.set(e.url,n),e.json()})),n}return async function(n,a){if(n.startsWith(e)&&(n=n.substring(e.length)),/^(\w+:)|\/\//i.test(n))return n;if(/^[.]{0,2}\//i.test(n))return new URL(n,null==a?location:a).href;if(!n.length||/^[\s._]/.test(n)||/\s$/.test(n))throw new eK("illegal name");let r=e0(n);if(!r)return`${e}${n}`;if(!r.version&&null!=a&&a.startsWith(e)){let o=await i(e0(a.substring(e.length)));r.version=o.dependencies&&o.dependencies[r.name]||o.peerDependencies&&o.peerDependencies[r.name]}if(r.path&&!eQ.test(r.path)&&(r.path+=".js"),r.path&&r.version&&eY.test(r.version))return`${e}${r.name}@${r.version}/${r.path}`;let l=await i(r);return`${e}${l.name}@${l.version}/${r.path||function(e){for(let i of t){let n=e[i];if("string"==typeof n)return n.startsWith("./")&&(n=n.slice(2)),eQ.test(n)?n:`${n}.js`}}(l)||"index.js"}`}}eK.prototype.name=eK.name;var e2=e5(e1());function e5(e){let t=new Map,i=a(null);function n(e){if("string"!=typeof e)return e;let i=t.get(e);return i||t.set(e,i=new Promise((t,i)=>{let n=document.createElement("script");n.onload=()=>{try{t(eq.pop()(a(e)))}catch(r){i(new eK("invalid module"))}n.remove()},n.onerror=()=>{i(new eK("unable to load module")),n.remove()},n.async=!0,n.src=e,window.define=e8,document.head.appendChild(n)})),i}function a(t){return i=>Promise.resolve(e(i,t)).then(n)}function r(e){return arguments.length>1?Promise.all(eW.call(arguments,i)).then(e3):i(e)}return r.alias=function(t){return e5((i,n)=>i in t&&(i=t[i],n=null,"string"!=typeof i)?i:e(i,n))},r.resolve=e,r}function e3(e){let t={};for(let i of e)for(let n in i)eX.call(i,n)&&(null==i[n]?Object.defineProperty(t,n,{get:e4(i,n)}):t[n]=i[n]);return t}function e4(e,t){return()=>e[t]}function e6(e){return"exports"==(e+="")||"module"===e}function e8(e,t,i){let n=arguments.length;n<2?(i=e,t=[]):n<3&&(i=t,t="string"==typeof e?[]:e),eq.push(eZ.call(t,e6)?e=>{let n={},a={exports:n};return Promise.all(eW.call(t,t=>"exports"==(t+="")?n:"module"===t?a:e(t))).then(e=>(i.apply(null,e),a.exports))}:e=>Promise.all(eW.call(t,e)).then(e=>"function"==typeof i?i.apply(null,e):i))}e8.amd={};let e7=e2;function e9(e){e7=e}async function te(e){let[t,i]=await Promise.all([e(eR.resolve()),e.resolve(eR.resolve("dist/"))]);return t({locateFile:e=>`${i}${e}`})}class tt{constructor(e){Object.defineProperties(this,{_db:{value:e}})}static async open(e){let[t,i]=await Promise.all([te(e7),Promise.resolve(e).then(ti)]);return new tt(new t.Database(i))}async query(e,t){return await tn(this._db,e,t)}async queryRow(e,t){return(await this.query(e,t))[0]||null}async explain(e,t){let i=await this.query(`EXPLAIN QUERY PLAN ${e}`,t);return ta("pre",{className:"observablehq--inspect"},[tr(i.map(e=>e.detail).join("\n"))])}async describeTables({schema:e}={}){return this.query(`SELECT NULLIF(schema, 'main') AS schema, name FROM pragma_table_list() WHERE type = 'table'${null==e?"":" AND schema = ?"} AND name NOT LIKE 'sqlite_%'`,null==e?[]:[e])}async describeColumns({schema:e,table:t}={}){if(null==t)throw Error("missing table");let i=await this.query(`SELECT name, type, "notnull" FROM pragma_table_info(?${null==e?"":", ?"}) ORDER BY cid`,null==e?[t]:[t,e]);if(!i.length)throw Error(`table not found: ${t}`);return i.map(({name:e,type:t,notnull:i})=>({name:e,type:function(e){switch(e){case"NULL":return"null";case"INT":case"INTEGER":case"TINYINT":case"SMALLINT":case"MEDIUMINT":case"BIGINT":case"UNSIGNED BIG INT":case"INT2":case"INT8":return"integer";case"TEXT":case"CLOB":case"DATE":case"DATETIME":return"string";case"REAL":case"DOUBLE":case"DOUBLE PRECISION":case"FLOAT":case"NUMERIC":return"number";case"BLOB":return"buffer";default:return/^(?:(?:(?:VARYING|NATIVE) )?CHARACTER|(?:N|VAR|NVAR)CHAR)\(/.test(e)?"string":/^(?:DECIMAL|NUMERIC)\(/.test(e)?"number":"other"}}(t),databaseType:t,nullable:!i}))}async describe(e){let t=await (void 0===e?this.query("SELECT name FROM sqlite_master WHERE type = 'table'"):this.query("SELECT * FROM pragma_table_info(?)",[e]));if(!t.length)throw Error("Not found");let{columns:i}=t;return ta("table",{value:t},[ta("thead",[ta("tr",i.map(e=>ta("th",[tr(e)])))]),ta("tbody",t.map(e=>ta("tr",i.map(t=>ta("td",[tr(e[t])])))))])}async sql(){return this.query(...this.queryTag.apply(this,arguments))}queryTag(e,...t){return[e.join("?"),t]}}function ti(e){return"string"==typeof e?fetch(e).then(ti):e instanceof Response||e instanceof Blob?e.arrayBuffer().then(ti):e instanceof ArrayBuffer?new Uint8Array(e):e}async function tn(e,t,i){let[n]=await e.exec(t,i);if(!n)return[];let{columns:a,values:r}=n,o=r.map(e=>Object.fromEntries(e.map((e,t)=>[a[t],e])));return o.columns=a,o}function ta(e,t,i){2===arguments.length&&(i=t,t=void 0);let n=document.createElement(e);if(void 0!==t)for(let a in t)n[a]=t[a];if(void 0!==i)for(let r of i)n.appendChild(r);return n}function tr(e){return document.createTextNode(e)}Object.defineProperty(tt.prototype,"dialect",{value:"sqlite"});class to{constructor(e){Object.defineProperties(this,{_:{value:e},sheetNames:{value:e.worksheets.map(e=>e.name),enumerable:!0}})}sheet(e,t){let i="number"==typeof e?this.sheetNames[e]:this.sheetNames.includes(e+="")?e:null;if(null==i)throw Error(`Sheet not found: ${e}`);let n=this._.getWorksheet(i);return function(e,{range:t,headers:i}={}){let[[n,a],[r,o]]=function(e=":",{columnCount:t,rowCount:i}){if(!(e+="").match(/^[A-Z]*\d*:[A-Z]*\d*$/))throw Error("Malformed range specifier");let[[n=0,a=0],[r=t-1,o=i-1]]=e.split(":").map(tc);return[[n,a],[r,o]]}(t,e),l=i?e._rows[a++]:null,s=new Set(["#"]);for(let d=n;d<=r;d++){let c=l?tl(l.findCell(d+1)):null,u=c&&c+""||td(d);for(;s.has(u);)u+="_";s.add(u)}s=Array(n).concat(Array.from(s));let f=Array(o-a+1);for(let p=a;p<=o;p++){let m=f[p-a]=Object.create(null,{"#":{value:p+1}}),h=e.getRow(p+1);if(h.hasValues)for(let v=n;v<=r;v++){let b=tl(h.findCell(v+1));null!=b&&(m[s[v+1]]=b)}}return f.columns=s.filter(()=>!0),f}(n,t)}}function tl(e){if(!e)return;let{value:t}=e;if(t&&"object"==typeof t&&!(t instanceof Date)){if(t.formula||t.sharedFormula)return t.result&&t.result.error?NaN:t.result;if(t.richText)return ts(t);if(t.text){let{text:i}=t;return i.richText&&(i=ts(i)),t.hyperlink&&t.hyperlink!==i?`${t.hyperlink} ${i}`:i}}return t}function ts(e){return e.richText.map(e=>e.text).join("")}function td(e){let t="";e++;do t=String.fromCharCode(64+(e%26||26))+t;while(e=Math.floor((e-1)/26));return t}function tc(e){let[,t,i]=e.match(/^([A-Z]*)(\d*)$/),n=0;if(t)for(let a=0;a<t.length;a++)n+=Math.pow(26,t.length-a-1)*(t.charCodeAt(a)-64);return[n?n-1:void 0,i?+i-1:void 0]}async function tu(e){let t=await fetch(await e.url());if(!t.ok)throw Error(`Unable to load file: ${e.name}`);return t}async function tf(e,t,{array:i=!1,typed:n=!1}={}){let a=await e.text();return("	"===t?i?eg:eb:i?ew:ey)(a,n&&eA)}class tp{constructor(e,t){Object.defineProperty(this,"name",{value:e,enumerable:!0}),void 0!==t&&Object.defineProperty(this,"mimeType",{value:t+"",enumerable:!0})}async blob(){return(await tu(this)).blob()}async arrayBuffer(){return(await tu(this)).arrayBuffer()}async text(){return(await tu(this)).text()}async json(){return(await tu(this)).json()}async stream(){return(await tu(this)).body}async csv(e){return tf(this,",",e)}async tsv(e){return tf(this,"	",e)}async image(e){let t=await this.url();return new Promise((i,n)=>{let a=new Image;new URL(t,document.baseURI).origin!==new URL(location).origin&&(a.crossOrigin="anonymous"),Object.assign(a,e),a.onload=()=>i(a),a.onerror=()=>n(Error(`Unable to load file: ${this.name}`)),a.src=t})}async arrow(){let[e,t]=await Promise.all([e7(eU.resolve()),tu(this)]);return e.Table.from(t)}async sqlite(){return tt.open(tu(this))}async zip(){let[e,t]=await Promise.all([e7(eN.resolve()),this.arrayBuffer()]);return new tv(await e.loadAsync(t))}async xml(e="application/xml"){return(new DOMParser).parseFromString(await this.text(),e)}async html(){return this.xml("text/html")}async xlsx(){let[e,t]=await Promise.all([e7(ez.resolve()),this.arrayBuffer()]);return new to(await new e.Workbook().xlsx.load(t))}}class tm extends tp{constructor(e,t,i){super(t,i),Object.defineProperty(this,"_url",{value:e})}async url(){return await this._url+""}}function th(e){throw Error(`File not found: ${e}`)}class tv{constructor(e){Object.defineProperty(this,"_",{value:e}),this.filenames=Object.keys(e.files).filter(t=>!e.files[t].dir)}file(e){let t=this._.file(e+="");if(!t||t.dir)throw Error(`file not found: ${e}`);return new tb(t)}}class tb extends tp{constructor(e){super(e.name),Object.defineProperty(this,"_",{value:e}),Object.defineProperty(this,"_url",{writable:!0})}async url(){return this._url||(this._url=this.blob().then(URL.createObjectURL))}async blob(){return this._.async("blob")}async arrayBuffer(){return this._.async("arraybuffer")}async text(){return this._.async("text")}async json(){return JSON.parse(await this.text())}}var tg={math:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},tx=0;function ty(e){return new tw("O-"+(null==e?"":e+"-")+ ++tx)}function tw(e){this.id=e,this.href=new URL(`#${e}`,location)+""}tw.prototype.toString=function(){return"url("+this.href+")"};var tA={canvas:function(e,t){var i=document.createElement("canvas");return i.width=e,i.height=t,i},context2d:function(e,t,i){null==i&&(i=devicePixelRatio);var n=document.createElement("canvas");n.width=e*i,n.height=t*i,n.style.width=e+"px";var a=n.getContext("2d");return a.scale(i,i),a},download:function(e,t="untitled",i="Save"){let n=document.createElement("a"),a=n.appendChild(document.createElement("button"));async function r(){await new Promise(requestAnimationFrame),URL.revokeObjectURL(n.href),n.removeAttribute("href"),a.textContent=i,a.disabled=!1}return a.textContent=i,n.download=t,n.onclick=async t=>{if(a.disabled=!0,n.href)return r();a.textContent="Saving…";try{let o=await ("function"==typeof e?e():e);a.textContent="Download",n.href=URL.createObjectURL(o)}catch(l){a.textContent=i}if(t.eventPhase)return r();a.disabled=!1},n},element:function(e,t){var i,n=e+="",a=n.indexOf(":");a>=0&&"xmlns"!==(n=e.slice(0,a))&&(e=e.slice(a+1));var r=tg.hasOwnProperty(n)?document.createElementNS(tg[n],e):document.createElement(e);if(t)for(var o in t)a=(n=o).indexOf(":"),i=t[o],a>=0&&"xmlns"!==(n=o.slice(0,a))&&(o=o.slice(a+1)),tg.hasOwnProperty(n)?r.setAttributeNS(tg[n],o,i):r.setAttribute(o,i);return r},input:function(e){var t=document.createElement("input");return null!=e&&(t.type=e),t},range:function(e,t,i){1===arguments.length&&(t=e,e=null);var n=document.createElement("input");return n.min=e=null==e?0:+e,n.max=t=null==t?1:+t,n.step=null==i?"any":i=+i,n.type="range",n},select:function(e){var t=document.createElement("select");return Array.prototype.forEach.call(e,function(e){var i=document.createElement("option");i.value=i.textContent=e,t.appendChild(i)}),t},svg:function(e,t){var i=document.createElementNS("http://www.w3.org/2000/svg","svg");return i.setAttribute("viewBox",[0,0,e,t]),i.setAttribute("width",e),i.setAttribute("height",t),i},text:function(e){return document.createTextNode(e)},uid:ty},t_={buffer:function(e){return new Promise(function(t,i){var n=new FileReader;n.onload=function(){t(n.result)},n.onerror=i,n.readAsArrayBuffer(e)})},text:function(e){return new Promise(function(t,i){var n=new FileReader;n.onload=function(){t(n.result)},n.onerror=i,n.readAsText(e)})},url:function(e){return new Promise(function(t,i){var n=new FileReader;n.onload=function(){t(n.result)},n.onerror=i,n.readAsDataURL(e)})}};function tC(){return this}function tE(e,t){let i=!1;if("function"!=typeof t)throw Error("dispose is not a function");return{[Symbol.iterator]:tC,next:()=>i?{done:!0}:(i=!0,{done:!1,value:e}),return:()=>(i=!0,t(e),{done:!0}),throw:()=>({done:i=!0})}}function tS(e){let t=!1,i,n,a=e(function(e){return n?(n(e),n=null):t=!0,i=e});if(null!=a&&"function"!=typeof a)throw Error("function"==typeof a.then?"async initializers are not supported":"initializer returned something, but not a dispose function");return{[Symbol.iterator]:tC,throw:()=>({done:!0}),return:()=>(null!=a&&a(),{done:!0}),next:function(){return{done:!1,value:t?(t=!1,Promise.resolve(i)):new Promise(e=>n=e)}}}}function tk(e){switch(e.type){case"range":case"number":return e.valueAsNumber;case"date":return e.valueAsDate;case"checkbox":return e.checked;case"file":return e.multiple?e.files:e.files[0];case"select-multiple":return Array.from(e.selectedOptions,e=>e.value);default:return e.value}}var tT={disposable:tE,filter:function*(e,t){for(var i,n=-1;!(i=e.next()).done;)t(i.value,++n)&&(yield i.value)},input:function(e){return tS(function(t){var i=function(e){switch(e.type){case"button":case"submit":case"checkbox":return"click";case"file":return"change";default:return"input"}}(e),n=tk(e);function a(){t(tk(e))}return e.addEventListener(i,a),void 0!==n&&t(n),function(){e.removeEventListener(i,a)}})},map:function*(e,t){for(var i,n=-1;!(i=e.next()).done;)yield t(i.value,++n)},observe:tS,queue:function(e){let t,i=[],n=e(function(e){return i.push(e),t&&(t(i.shift()),t=null),e});if(null!=n&&"function"!=typeof n)throw Error("function"==typeof n.then?"async initializers are not supported":"initializer returned something, but not a dispose function");return{[Symbol.iterator]:tC,throw:()=>({done:!0}),return:()=>(null!=n&&n(),{done:!0}),next:function(){return{done:!1,value:i.length?Promise.resolve(i.shift()):new Promise(e=>t=e)}}}},range:function*(e,t,i){e=+e,t=+t,i=(a=arguments.length)<2?(t=e,e=0,1):a<3?1:+i;for(var n=-1,a=0|Math.max(0,Math.ceil((t-e)/i));++n<a;)yield e+n*i},valueAt:function(e,t){if(isFinite(t=+t)&&!(t<0)&&!(t!=t|0)){for(var i,n=-1;!(i=e.next()).done;)if(++n===t)return i.value}},worker:function(e){let t=URL.createObjectURL(new Blob([e],{type:"text/javascript"})),i=new Worker(t);return tE(i,()=>{i.terminate(),URL.revokeObjectURL(t)})}};function tO(e,t){return function(i){var n,a,r,o,l,s,d,c,u=i[0],f=[],p=null,m=-1;for(l=1,s=arguments.length;l<s;++l){if(n=arguments[l],n instanceof Node)f[++m]=n,u+="<!--o:"+m+"-->";else if(Array.isArray(n)){for(d=0,c=n.length;d<c;++d)(a=n[d])instanceof Node?(null===p&&(f[++m]=p=document.createDocumentFragment(),u+="<!--o:"+m+"-->"),p.appendChild(a)):(p=null,u+=a);p=null}else u+=n;u+=i[l]}if(p=e(u),++m>0){for(r=Array(m),o=document.createTreeWalker(p,NodeFilter.SHOW_COMMENT,null,!1);o.nextNode();)a=o.currentNode,/^o:/.test(a.nodeValue)&&(r[+a.nodeValue.slice(2)]=a);for(l=0;l<m;++l)(a=r[l])&&a.parentNode.replaceChild(f[l],a)}return 1===p.childNodes.length?p.removeChild(p.firstChild):11===p.nodeType?((a=t()).appendChild(p),a):p}}var tI=tO(function(e){var t=document.createElement("template");return t.innerHTML=e.trim(),document.importNode(t.content,!0)},function(){return document.createElement("span")});async function tM(e){let t=await e(eH.resolve());if(!t._style){let i=document.createElement("link");i.rel="stylesheet",i.href=await e.resolve(eH.resolve("dist/leaflet.css")),t._style=document.head.appendChild(i)}return t}async function tD(e){let t=await e(eG.resolve());return t.initialize({securityLevel:"loose",theme:"neutral"}),function(){let e=document.createElement("div");return e.innerHTML=t.render(ty().id,String.raw.apply(String,arguments)),e.removeChild(e.firstChild)}}function tN(e){let t;Object.defineProperties(this,{generator:{value:tS(e=>void(t=e))},value:{get:()=>e,set:i=>t(e=i)}}),void 0!==e&&t(e)}function*tL(){for(;;)yield Date.now()}var tR=new Map;function tP(e,t){var i,n,a,r;return(i=tR.get(e=+e))?i.then(()=>t):(i=Date.now())>=e?Promise.resolve(t):(n=i,a=e,r=new Promise(function(e){tR.delete(a);var t=a-n;if(!(t>0))throw Error("invalid time");if(t>2147483647)throw Error("too long to wait");setTimeout(e,t)}),tR.set(a,r),r).then(()=>t)}var tF={delay:function(e,t){return new Promise(function(i){setTimeout(function(){i(t)},e)})},tick:function(e,t){return tP(Math.ceil((Date.now()+1)/e)*e,t)},when:tP};function tB(e,t){if(/^(\w+:)|\/\//i.test(e))return e;if(/^[.]{0,2}\//i.test(e))return new URL(e,null==t?location:t).href;if(!e.length||/^[\s._]/.test(e)||/\s$/.test(e))throw Error("illegal name");return"https://unpkg.com/"+e}var tU=tO(function(e){var t=document.createElementNS("http://www.w3.org/2000/svg","g");return t.innerHTML=e.trim(),t},function(){return document.createElementNS("http://www.w3.org/2000/svg","g")}),t$=String.raw;function tj(e){return new Promise(function(t,i){var n=document.createElement("link");n.rel="stylesheet",n.href=e,n.onerror=i,n.onload=t,document.head.appendChild(n)})}async function tz(e){let[t,i,n]=await Promise.all([eP,eF,eB].map(t=>e(t.resolve())));return n.register(t,i)}function tG(){return tS(function(e){var t=e(document.body.clientWidth);function i(){var i=document.body.clientWidth;i!==t&&e(t=i)}return window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}})}function tH(e,t){return null==e||null==t?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function tV(e,t){return null==e||null==t?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function tq(e){let t=Math.min(20,e.length);if(!(t>0))return!1;let i,n=!1;for(let a=0;a<t;++a){let r=e[a];if(null==r)continue;let o=typeof r;if(void 0===i)switch(o){case"number":case"boolean":case"string":case"bigint":i=o;break;default:return!1}else if(o!==i)return!1;n=!0}return n}function tW(e){let t=Math.min(20,e.length);if(!(t>0))return!1;let i=!1;for(let n=0;n<t;++n){let a=e[n];if(null!=a){if(!(a instanceof Date))return!1;i=!0}}return i}function tZ(e){return e instanceof Int8Array||e instanceof Int16Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Uint16Array||e instanceof Uint32Array||e instanceof Float32Array||e instanceof Float64Array}let tX=Object.assign(async(e,t,i)=>{var n,a,r,o;if((n=e=await tJ(await e,"table"))&&("function"==typeof n.sql||"function"==typeof n.queryTag&&("function"==typeof n.query||"function"==typeof n.queryStream))&&n!==tX)return tY(e,function(e,t){let i="function"==typeof t.escape?t.escape:e=>e,{select:n,from:a,filter:r,sort:o,slice:l}=e;if(!a.table)throw Error("missing from table");if(n.columns&&0===n.columns.length)throw Error("at least one column must be selected");let s=n.columns?n.columns.map(e=>`t.${i(e)}`):"*",d=[[`SELECT ${s} FROM ${function(e,t){if("object"==typeof e){let i="";return null!=e.database&&(i+=t(e.database)+"."),null!=e.schema&&(i+=t(e.schema)+"."),i+=t(e.table)}return e}(a.table,i)} t`]];for(let c=0;c<r.length;++c)tK(c?`
AND `:`
WHERE `,d),t1(r[c],d,i);for(let u=0;u<o.length;++u)tK(u?", ":`
ORDER BY `,d),t0(o[u],d,i);if("mssql"===t.dialect){if(null!==l.to||null!==l.from){if(!o.length){if(!n.columns)throw Error("at least one column must be explicitly specified. Received '*'.");tK(`
ORDER BY `,d),t0({column:n.columns[0],direction:"ASC"},d,i)}tK(`
OFFSET ${l.from||0} ROWS`,d),tK(`
FETCH NEXT ${null!==l.to?l.to-(l.from||0):1e9} ROWS ONLY`,d)}}else(null!==l.to||null!==l.from)&&tK(`
LIMIT ${null!==l.to?l.to-(l.from||0):1e9}`,d),null!==l.from&&tK(` OFFSET ${l.from}`,d);return d}(t,e),i);if(Array.isArray(a=e)&&(r=a.schema,Array.isArray(r)&&r.every(e=>e&&"string"==typeof e.name)||(o=a.columns,Array.isArray(o)&&o.every(e=>"string"==typeof e))||function(e){let t=Math.min(20,e.length);for(let i=0;i<t;++i){let n=e[i];if(null===n||"object"!=typeof n)return!1}return t>0&&function(e){for(let t in e)return!0;return!1}(e[0])}(a)||tq(a)||tW(a))||tZ(a))return function(e,t){var i;let n=e,{schema:a,columns:r}=e,o=(i=e,tZ(i)||tq(i)||tW(i));for(let{type:l,operands:s}of(o&&(e=Array.from(e,e=>({value:e}))),t.filter)){let[{value:d}]=s,c=s.slice(1).map(({value:e})=>e);switch(l){case"eq":{let[u]=c;if(u instanceof Date){let f=+u;e=e.filter(e=>+e[d]===f)}else e=e.filter(e=>e[d]===u);break}case"ne":{let[p]=c;e=e.filter(e=>e[d]!==p);break}case"c":{let[m]=c;e=e.filter(e=>"string"==typeof e[d]&&e[d].includes(m));break}case"nc":{let[h]=c;e=e.filter(e=>"string"==typeof e[d]&&!e[d].includes(h));break}case"in":{let v=new Set(c);e=e.filter(e=>v.has(e[d]));break}case"nin":{let b=new Set(c);e=e.filter(e=>!b.has(e[d]));break}case"n":e=e.filter(e=>null==e[d]);break;case"nn":e=e.filter(e=>null!=e[d]);break;case"lt":{let[g]=c;e=e.filter(e=>e[d]<g);break}case"lte":{let[x]=c;e=e.filter(e=>e[d]<=x);break}case"gt":{let[y]=c;e=e.filter(e=>e[d]>y);break}case"gte":{let[w]=c;e=e.filter(e=>e[d]>=w);break}default:throw Error(`unknown filter type: ${l}`)}}for(let{column:A,direction:_}of function(e){if("function"!=typeof e[Symbol.iterator])throw TypeError("values is not iterable");return Array.from(e).reverse()}(t.sort)){let C="desc"===_?tH:tV;e===n&&(e=e.slice()),e.sort((e,t)=>C(e[A],t[A]))}let{from:E,to:S}=t.slice;if(E=null==E?0:Math.max(0,E),S=null==S?1/0:Math.max(0,S),(E>0||S<1/0)&&(e=e.slice(Math.max(0,E),Math.max(0,S))),t.select.columns){if(a){let k=new Map(a.map(e=>[e.name,e]));a=t.select.columns.map(e=>k.get(e))}r&&(r=t.select.columns),e=e.map(e=>Object.fromEntries(t.select.columns.map(t=>[t,e[t]])))}return o&&(e=e.map(e=>e.value)),e!==n&&(a&&(e.schema=a),r&&(e.columns=r)),e}(e,t);if(!e)throw Error("missing data source");throw Error("invalid data source")},{sql:(e,t)=>async function(){return tY(await tJ(await e,"sql"),arguments,t)}});async function tJ(e,t){if(e instanceof tm){if("table"===t)switch(e.mimeType){case"text/csv":return e.csv({typed:!0});case"text/tab-separated-values":return e.tsv({typed:!0});case"application/json":return e.json()}if(("table"===t||"sql"===t)&&"application/x-sqlite3"===e.mimeType)return e.sqlite();throw Error(`unsupported file type: ${e.mimeType}`)}return e}async function tY(e,t,i){if(!e)throw Error("missing data source");if("function"==typeof e.queryTag){let n=new AbortController,a={signal:n.signal};if(i.then(()=>n.abort("invalidated")),"function"==typeof e.queryStream)return tQ(e.queryStream(...e.queryTag.apply(e,t),a));if("function"==typeof e.query)return e.query(...e.queryTag.apply(e,t),a)}if("function"==typeof e.sql)return e.sql.apply(e,t);throw Error("source does not implement query, queryStream, or sql")}async function*tQ(e){let t=await e,i=[];i.done=!1,i.error=null,i.schema=t.schema;try{let n=t.readRows();do{let a=await n.next();if(a.done)i.done=!0;else for(let r of a.value)i.push(r);yield i}while(!i.done)}catch(o){i.error=o,yield i}}function tK(e,t){let i=t[0];i[i.length-1]+=e}function t0({column:e,direction:t},i,n){tK(`t.${n(e)} ${t.toUpperCase()}`,i)}function t1({type:e,operands:t},i,n){if(t.length<1)throw Error("Invalid operand length");if(1===t.length)switch(t2(t[0],i,n),e){case"n":tK(" IS NULL",i);return;case"nn":tK(" IS NOT NULL",i);return;default:throw Error("Invalid filter operation")}if(2===t.length){if(["in","nin"].includes(e));else if(["c","nc"].includes(e)){var a;switch(t2(t[0],i,n),e){case"c":tK(" LIKE ",i);break;case"nc":tK(" NOT LIKE ",i)}t2((a=t[1],{...a,value:`%${a.value}%`}),i,n);return}else{switch(t2(t[0],i,n),e){case"eq":tK(" = ",i);break;case"ne":tK(" <> ",i);break;case"gt":tK(" > ",i);break;case"lt":tK(" < ",i);break;case"gte":tK(" >= ",i);break;case"lte":tK(" <= ",i);break;default:throw Error("Invalid filter operation")}t2(t[1],i,n);return}}switch(t2(t[0],i,n),e){case"in":tK(" IN (",i);break;case"nin":tK(" NOT IN (",i);break;default:throw Error("Invalid filter operation")}(function(e,t){let i=!0;for(let n of e)i?i=!1:tK(",",t),t.push(n.value),t[0].push("")})(t.slice(1),i),tK(")",i)}function t2(e,t,i){"column"===e.type?tK(`t.${i(e.value)}`,t):(t.push(e.value),t[0].push(""))}var t5=Object.assign(Object.defineProperties(function(e){var t,i;let n=null==e?e7:e5(e);Object.defineProperties(this,(i={FileAttachment:()=>th,Mutable:()=>tN,now:tL,width:tG,dot:()=>n(eT.resolve()),htl:()=>n(eD.resolve()),html:()=>tI,md(){var e;return n(eL.resolve()).then(function(e){return tO(function(t){var i=document.createElement("div");i.innerHTML=e(t,{langPrefix:""}).trim();var a=i.querySelectorAll("pre code[class]");return a.length>0&&n(eO.resolve()).then(function(e){a.forEach(function(t){function i(){e.highlightBlock(t),t.parentNode.classList.add("observablehq--md-pre")}e.getLanguage(t.className)?i():n(eO.resolve("async-languages/index.js")).then(i=>{if(i.has(t.className))return n(eO.resolve("async-languages/"+i.get(t.className))).then(i=>{e.registerLanguage(t.className,i)})}).then(i,i)})}),i},function(){return document.createElement("div")})})},svg:()=>tU,tex(){var e;return Promise.all([n(eI.resolve()),n.resolve(eI.resolve("dist/katex.min.css")).then(tj)]).then(function(e){var t=e[0],i=n();function n(e){return function(){var i=document.createElement("div");return t.render(t$.apply(String,arguments),i,e),i.removeChild(i.firstChild)}}return i.options=n,i.block=n({displayMode:!0}),i})},_:()=>n(eM.resolve()),aq:()=>n.alias({"apache-arrow":eU.resolve()})(e$.resolve()),Arrow:()=>n(eU.resolve()),d3:()=>n(eE.resolve()),Inputs:()=>n(eS.resolve()).then(e=>({...e,file:e.fileOf(tp)})),L:()=>tM(n),mermaid:()=>tD(n),Plot:()=>n(ek.resolve()),__query:()=>tX,require:()=>n,resolve:()=>tB,SQLite:()=>te(n),SQLiteDatabaseClient:()=>tt,topojson:()=>n(ej.resolve()),vl:()=>tz(n),aapl:()=>new tm("https://static.observableusercontent.com/files/3ccff97fd2d93da734e76829b2b066eafdaac6a1fafdec0faf6ebc443271cfc109d29e80dd217468fcb2aff1e6bffdc73f356cc48feb657f35378e6abbbb63b9").csv({typed:!0}),alphabet:()=>new tm("https://static.observableusercontent.com/files/75d52e6c3130b1cae83cda89305e17b50f33e7420ef205587a135e8562bcfd22e483cf4fa2fb5df6dff66f9c5d19740be1cfaf47406286e2eb6574b49ffc685d").csv({typed:!0}),cars:()=>new tm("https://static.observableusercontent.com/files/048ec3dfd528110c0665dfa363dd28bc516ffb7247231f3ab25005036717f5c4c232a5efc7bb74bc03037155cb72b1abe85a33d86eb9f1a336196030443be4f6").csv({typed:!0}),citywages:()=>new tm("https://static.observableusercontent.com/files/39837ec5121fcc163131dbc2fe8c1a2e0b3423a5d1e96b5ce371e2ac2e20a290d78b71a4fb08b9fa6a0107776e17fb78af313b8ea70f4cc6648fad68ddf06f7a").csv({typed:!0}),diamonds:()=>new tm("https://static.observableusercontent.com/files/87942b1f5d061a21fa4bb8f2162db44e3ef0f7391301f867ab5ba718b225a63091af20675f0bfe7f922db097b217b377135203a7eab34651e21a8d09f4e37252").csv({typed:!0}),flare:()=>new tm("https://static.observableusercontent.com/files/a6b0d94a7f5828fd133765a934f4c9746d2010e2f342d335923991f31b14120de96b5cb4f160d509d8dc627f0107d7f5b5070d2516f01e4c862b5b4867533000").csv({typed:!0}),industries:()=>new tm("https://static.observableusercontent.com/files/76f13741128340cc88798c0a0b7fa5a2df8370f57554000774ab8ee9ae785ffa2903010cad670d4939af3e9c17e5e18e7e05ed2b38b848ac2fc1a0066aa0005f").csv({typed:!0}),miserables:()=>new tm("https://static.observableusercontent.com/files/31d904f6e21d42d4963ece9c8cc4fbd75efcbdc404bf511bc79906f0a1be68b5a01e935f65123670ed04e35ca8cae3c2b943f82bf8db49c5a67c85cbb58db052").json(),olympians:()=>new tm("https://static.observableusercontent.com/files/31ca24545a0603dce099d10ee89ee5ae72d29fa55e8fc7c9ffb5ded87ac83060d80f1d9e21f4ae8eb04c1e8940b7287d179fe8060d887fb1f055f430e210007c").csv({typed:!0}),penguins:()=>new tm("https://static.observableusercontent.com/files/715db1223e067f00500780077febc6cebbdd90c151d3d78317c802732252052ab0e367039872ab9c77d6ef99e5f55a0724b35ddc898a1c99cb14c31a379af80a").csv({typed:!0}),weather:()=>new tm("https://static.observableusercontent.com/files/693a46b22b33db0f042728700e0c73e836fa13d55446df89120682d55339c6db7cc9e574d3d73f24ecc9bc7eb9ac9a1e7e104a1ee52c00aab1e77eb102913c1f").csv({typed:!0}),DOM:tA,Files:t_,Generators:tT,Promises:tF},Object.fromEntries(Object.entries(i).map(t3))))},{resolve:{get:()=>e7.resolve,enumerable:!0,configurable:!0},require:{get:()=>e7,set:e9,enumerable:!0,configurable:!0}}),{resolveFrom:e1,requireFrom:e5});function t3([e,t]){return[e,{value:t,writable:!0,enumerable:!0}]}function t4(e,t){this.message=e+"",this.input=t}function t6(e){return function(){return e}}function t8(e){return e}t4.prototype=Object.create(Error.prototype),t4.prototype.name="RuntimeError",t4.prototype.constructor=t4;var t7=Array.prototype,t9=t7.map;function ie(){}t7.forEach;var it={};function ii(e,t,i){var n;i||(i=it),Object.defineProperties(this,{_observer:{value:i,writable:!0},_definition:{value:io,writable:!0},_duplicate:{value:void 0,writable:!0},_duplicates:{value:void 0,writable:!0},_indegree:{value:NaN,writable:!0},_inputs:{value:[],writable:!0},_invalidate:{value:ie,writable:!0},_module:{value:t},_name:{value:null,writable:!0},_outputs:{value:new Set,writable:!0},_promise:{value:Promise.resolve(void 0),writable:!0},_reachable:{value:i!==it,writable:!0},_rejector:{value:(n=this,function(e){if(e===il)throw e;if(e===io)throw new t4(n._name+" is not defined",n._name);if(e instanceof Error&&e.message)throw new t4(e.message,n._name);throw new t4(n._name+" could not be resolved",n._name)})},_type:{value:e},_value:{value:void 0,writable:!0},_version:{value:0,writable:!0}})}function ia(e){e._module._runtime._dirty.add(e),e._outputs.add(this)}function ir(e){e._module._runtime._dirty.add(e),e._outputs.delete(this)}function io(){throw io}function il(){throw il}function is(e){return function(){throw new t4(e+" is defined more than once")}}function id(e,t,i){var n,a,r=this._module._scope,o=this._module._runtime;if(this._inputs.forEach(ir,this),t.forEach(ia,this),this._inputs=t,this._definition=i,this._value=void 0,i===ie?o._variables.delete(this):o._variables.add(this),e!==this._name||r.get(e)!==this){if(this._name){if(this._outputs.size)r.delete(this._name),(a=this._module._resolve(this._name))._outputs=this._outputs,this._outputs=new Set,a._outputs.forEach(function(e){e._inputs[e._inputs.indexOf(this)]=a},this),a._outputs.forEach(o._updates.add,o._updates),o._dirty.add(a).add(this),r.set(this._name,a);else if((a=r.get(this._name))===this)r.delete(this._name);else if(3===a._type)a._duplicates.delete(this),this._duplicate=void 0,1===a._duplicates.size&&(a=a._duplicates.keys().next().value,n=r.get(this._name),a._outputs=n._outputs,n._outputs=new Set,a._outputs.forEach(function(e){e._inputs[e._inputs.indexOf(n)]=a}),a._definition=a._duplicate,a._duplicate=void 0,o._dirty.add(n).add(a),o._updates.add(a),r.set(this._name,a));else throw Error()}if(this._outputs.size)throw Error();e&&((a=r.get(e))?3===a._type?(this._definition=is(e),this._duplicate=i,a._duplicates.add(this)):2===a._type?(this._outputs=a._outputs,a._outputs=new Set,this._outputs.forEach(function(e){e._inputs[e._inputs.indexOf(a)]=this},this),o._dirty.add(a).add(this),r.set(e,this)):(a._duplicate=a._definition,this._duplicate=i,(n=new ii(3,this._module))._name=e,n._definition=this._definition=a._definition=is(e),n._outputs=a._outputs,a._outputs=new Set,n._outputs.forEach(function(e){e._inputs[e._inputs.indexOf(a)]=n}),n._duplicates=new Set([this,a]),o._dirty.add(a).add(n),o._updates.add(a).add(n),r.set(e,n)):r.set(e,this)),this._name=e}return this._version>0&&++this._version,o._updates.add(this),o._compute(),this}function ic(e,t=[]){Object.defineProperties(this,{_runtime:{value:e},_scope:{value:new Map},_builtins:{value:new Map([["@variable",iv],["invalidation",ib],["visibility",ig],...t])},_source:{value:null,writable:!0}})}async function iu(e){var t=this._scope.get(e);if(!t)throw new t4(e+" is not defined");if(t._observer!==it)return ip(this._runtime,t);t=this.variable(!0).define([e],t8);try{return await ip(this._runtime,t)}finally{t.delete()}}async function ip(e,t){await e._compute();try{return await t._promise}catch(i){if(i===il)return ip(e,t);throw i}}function im(e){return e._name}Object.defineProperties(ii.prototype,{_pending:{value:function(){this._observer.pending&&this._observer.pending()},writable:!0,configurable:!0},_fulfilled:{value:function(e){this._observer.fulfilled&&this._observer.fulfilled(e,this._name)},writable:!0,configurable:!0},_rejected:{value:function(e){this._observer.rejected&&this._observer.rejected(e,this._name)},writable:!0,configurable:!0},define:{value:function(e,t,i){switch(arguments.length){case 1:i=e,e=t=null;break;case 2:i=t,"string"==typeof e?t=null:(t=e,e=null)}return id.call(this,null==e?null:e+"",null==t?[]:t9.call(t,this._module._resolve,this._module),"function"==typeof i?i:t6(i))},writable:!0,configurable:!0},delete:{value:function(){return id.call(this,null,[],ie)},writable:!0,configurable:!0},import:{value:function(e,t,i){return arguments.length<3&&(i=t,t=e),id.call(this,t+"",[i._resolve(e+"")],t8)},writable:!0,configurable:!0}}),Object.defineProperties(ic.prototype,{_resolve:{value:function(e){var t,i,n=this._scope.get(e);if(!n){if(n=new ii(2,this),this._builtins.has(e))n.define(e,t6(this._builtins.get(e)));else if(this._runtime._builtin._scope.has(e))n.import(e,this._runtime._builtin);else{try{i=this._runtime._global(e)}catch(a){return n.define(e,(t=a,function(){throw t}))}void 0===i?this._scope.set(n._name=e,n):n.define(e,t6(i))}}return n},writable:!0,configurable:!0},redefine:{value:function(e){var t=this._scope.get(e);if(!t)throw new t4(e+" is not defined");if(3===t._type)throw new t4(e+" is defined more than once");return t.define.apply(t,arguments)},writable:!0,configurable:!0},define:{value:function(){var e=new ii(1,this);return e.define.apply(e,arguments)},writable:!0,configurable:!0},derive:{value:function(e,t){let i=new Map,n=new Set,a=[];function r(e){let t=i.get(e);return t||((t=new ic(e._runtime,e._builtins))._source=e,i.set(e,t),a.push([t,e]),n.add(e)),t}let o=r(this);for(let l of e){let{alias:s,name:d}="object"==typeof l?l:{name:l};o.import(d,null==s?d:s,t)}for(let c of n)for(let[u,f]of c._scope)if(f._definition===t8){if(c===this&&o._scope.has(u))continue;let p=f._inputs[0]._module;p._source&&r(p)}for(let[m,h]of a)for(let[v,b]of h._scope){let g=m._scope.get(v);if(!g||2===g._type){if(b._definition===t8){let x=b._inputs[0],y=x._module;m.import(x._name,v,i.get(y)||y)}else m.define(v,b._inputs.map(im),b._definition)}}return o},writable:!0,configurable:!0},import:{value:function(){var e=new ii(1,this);return e.import.apply(e,arguments)},writable:!0,configurable:!0},value:{value:iu,writable:!0,configurable:!0},variable:{value:function(e){return new ii(1,this,e)},writable:!0,configurable:!0},builtin:{value:function(e,t){this._builtins.set(e,t)},writable:!0,configurable:!0}});let ih="function"==typeof requestAnimationFrame?requestAnimationFrame:"function"==typeof setImmediate?setImmediate:e=>setTimeout(e,0);var iv={},ib={},ig={};function ix(e=new t5,t=iO){var i=this.module();if(Object.defineProperties(this,{_dirty:{value:new Set},_updates:{value:new Set},_precomputes:{value:[],writable:!0},_computing:{value:null,writable:!0},_init:{value:null,writable:!0},_modules:{value:new Map},_variables:{value:new Set},_disposed:{value:!1,writable:!0},_builtin:{value:i},_global:{value:t}}),e)for(var n in e)new ii(2,i).define(n,[],e[n])}async function iy(){var e,t,i=[],n=this._precomputes;if(n.length){for(let a of(this._precomputes=[],n))a();await function(e=0){let t=Promise.resolve();for(let i=0;i<e;++i)t=t.then(()=>{});return t}(3)}(e=new Set(this._dirty)).forEach(function(t){t._inputs.forEach(e.add,e);let i=function(e){if(e._observer!==it)return!0;var t=new Set(e._outputs);for(let i of t){if(i._observer!==it)return!0;i._outputs.forEach(t.add,t)}return!1}(t);i>t._reachable?this._updates.add(t):i<t._reachable&&t._invalidate(),t._reachable=i},this),(e=new Set(this._updates)).forEach(function(t){t._reachable?(t._indegree=0,t._outputs.forEach(e.add,e)):(t._indegree=NaN,e.delete(t))}),this._computing=null,this._updates.clear(),this._dirty.clear(),e.forEach(function(e){e._outputs.forEach(iA)});do{for(e.forEach(function(e){0===e._indegree&&i.push(e)});t=i.pop();)ik(t),t._outputs.forEach(r),e.delete(t);e.forEach(function(t){iw(t)&&(iT(t,new t4("circular definition")),t._outputs.forEach(i_),e.delete(t))})}while(e.size);function r(e){0==--e._indegree&&i.push(e)}}function iw(e){let t=new Set(e._inputs);for(let i of t){if(i===e)return!0;i._inputs.forEach(t.add,t)}return!1}function iA(e){++e._indegree}function i_(e){--e._indegree}function iC(e){return e._promise.catch(e._rejector)}function iE(e){return new Promise(function(t){e._invalidate=t})}function iS(e,t){let i="function"==typeof IntersectionObserver&&t._observer&&t._observer._node,n=!i,a=ie,r=ie,o,l;return i&&((l=new IntersectionObserver(([e])=>(n=e.isIntersecting)&&(o=null,a()))).observe(i),e.then(()=>(l.disconnect(),l=null,r()))),function(e){return n?Promise.resolve(e):l?(o||(o=new Promise((e,t)=>(a=e,r=t))),o.then(()=>e)):Promise.reject()}}function ik(e){e._invalidate(),e._invalidate=ie,e._pending();let t=e._value,i=++e._version,n=null,a=e._promise=(e._inputs.length?Promise.all(e._inputs.map(iC)).then(function(a){if(e._version!==i)throw il;for(var r=0,o=a.length;r<o;++r)switch(a[r]){case ib:a[r]=n=iE(e);break;case ig:n||(n=iE(e)),a[r]=iS(n,e);break;case iv:a[r]=e}return e._definition.apply(t,a)}):new Promise(i=>i(e._definition.call(t)))).then(function(t){var a,r;if(e._version!==i)throw il;return t&&"function"==typeof t.next&&"function"==typeof t.return?((n||iE(e)).then((r=t,function(){r.return()})),function(e,t,i){let n=e._module._runtime,a;function r(e){return new Promise(e=>e(i.next(a))).then(({done:t,value:i})=>t?void 0:Promise.resolve(i).then(e))}function o(){let i=r(r=>{if(e._version!==t)throw il;return a=r,l(r,i).then(()=>n._precompute(o)),e._fulfilled(r),r});i.catch(n=>{n!==il&&e._version===t&&(l(void 0,i),e._rejected(n))})}function l(t,i){return e._value=t,e._promise=i,e._outputs.forEach(n._updates.add,n._updates),n._compute()}return r(i=>{if(e._version!==t)throw il;return a=i,n._precompute(o),i})}(e,i,t)):t});a.then(t=>{e._value=t,e._fulfilled(t)},t=>{t!==il&&(e._value=void 0,e._rejected(t))})}function iT(e,t){e._invalidate(),e._invalidate=ie,e._pending(),++e._version,e._indegree=NaN,(e._promise=Promise.reject(t)).catch(ie),e._value=void 0,e._rejected(t)}function iO(e){return window[e]}Object.defineProperties(ix,{load:{value:function(e,t,i){if("function"==typeof t&&(i=t,t=null),"function"!=typeof i)throw Error("invalid observer");null==t&&(t=new t5);let{modules:n,id:a}=e,r=new Map,o=new ix(t),l=s(a);function s(e){let t=r.get(e);return t||r.set(e,t=o.module()),t}for(let d of n){let c=s(d.id),u=0;for(let f of d.variables)f.from?c.import(f.remote,f.name,s(f.from)):c===l?c.variable(i(f,u,d.variables)).define(f.name,f.inputs,f.value):c.define(f.name,f.inputs,f.value),++u}return o},writable:!0,configurable:!0}}),Object.defineProperties(ix.prototype,{_precompute:{value:function(e){this._precomputes.push(e),this._compute()},writable:!0,configurable:!0},_compute:{value:function(){return this._computing||(this._computing=this._computeSoon())},writable:!0,configurable:!0},_computeSoon:{value:function(){return new Promise(ih).then(()=>this._disposed?void 0:this._computeNow())},writable:!0,configurable:!0},_computeNow:{value:iy,writable:!0,configurable:!0},dispose:{value:function(){this._computing=Promise.resolve(),this._disposed=!0,this._variables.forEach(e=>{e._invalidate(),e._version=NaN})},writable:!0,configurable:!0},module:{value:function(e,t=ie){let i;if(void 0===e)return(i=this._init)?(this._init=null,i):new ic(this);if(i=this._modules.get(e))return i;this._init=i=new ic(this),this._modules.set(e,i);try{e(this,t)}finally{this._init=null}return i},writable:!0,configurable:!0},fileAttachments:{value:function(e){return Object.assign(t=>{let i=e(t+="");if(null==i)throw Error(`File not found: ${t}`);if("object"==typeof i&&"url"in i){let{url:n,mimeType:a}=i;return new tm(n,t,a)}return new tm(i,t)},{prototype:tm.prototype})},writable:!0,configurable:!0}})},9742:function(e,t){"use strict";t.byteLength=function(e){var t=s(e),i=t[0],n=t[1];return(i+n)*3/4-n},t.toByteArray=function(e){var t,i,r,o,l=s(e),d=l[0],c=l[1],u=new a((d+c)*3/4-c),f=0,p=c>0?d-4:d;for(i=0;i<p;i+=4)t=n[e.charCodeAt(i)]<<18|n[e.charCodeAt(i+1)]<<12|n[e.charCodeAt(i+2)]<<6|n[e.charCodeAt(i+3)],u[f++]=t>>16&255,u[f++]=t>>8&255,u[f++]=255&t;return 2===c&&(t=n[e.charCodeAt(i)]<<2|n[e.charCodeAt(i+1)]>>4,u[f++]=255&t),1===c&&(t=n[e.charCodeAt(i)]<<10|n[e.charCodeAt(i+1)]<<4|n[e.charCodeAt(i+2)]>>2,u[f++]=t>>8&255,u[f++]=255&t),u},t.fromByteArray=function(e){for(var t,n=e.length,a=n%3,r=[],o=0,l=n-a;o<l;o+=16383)r.push(c(e,o,o+16383>l?l:o+16383));return 1===a?r.push(i[(t=e[n-1])>>2]+i[t<<4&63]+"=="):2===a&&r.push(i[(t=(e[n-2]<<8)+e[n-1])>>10]+i[t>>4&63]+i[t<<2&63]+"="),r.join("")};for(var i=[],n=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=0,l=r.length;o<l;++o)i[o]=r[o],n[r.charCodeAt(o)]=o;function s(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var i=e.indexOf("=");-1===i&&(i=t);var n=i===t?0:4-i%4;return[i,n]}function d(e){return i[e>>18&63]+i[e>>12&63]+i[e>>6&63]+i[63&e]}function c(e,t,i){for(var n,a=[],r=t;r<i;r+=3)a.push(d(n=(e[r]<<16&16711680)+(e[r+1]<<8&65280)+(255&e[r+2])));return a.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},8764:function(e,t,i){"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var n=i(9742),a=i(645),r="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function o(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,l.prototype),t}function l(e,t,i){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return c(e)}return s(e,t,i)}function s(e,t,i){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!l.isEncoding(t))throw TypeError("Unknown encoding: "+t);var i=0|m(e,t),n=o(i),a=n.write(e,t);return a!==i&&(n=n.slice(0,a)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(U(e,Uint8Array)){var t=new Uint8Array(e);return f(t.buffer,t.byteOffset,t.byteLength)}return u(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(U(e,ArrayBuffer)||e&&U(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(U(e,SharedArrayBuffer)||e&&U(e.buffer,SharedArrayBuffer)))return f(e,t,i);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return l.from(n,t,i);var a=function(e){if(l.isBuffer(e)){var t=0|p(e.length),i=o(t);return 0===i.length||e.copy(i,0,0,t),i}return void 0!==e.length?"number"!=typeof e.length||function(e){return e!=e}(e.length)?o(0):u(e):"Buffer"===e.type&&Array.isArray(e.data)?u(e.data):void 0}(e);if(a)return a;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return l.from(e[Symbol.toPrimitive]("string"),t,i);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function d(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function c(e){return d(e),o(e<0?0:0|p(e))}function u(e){for(var t=e.length<0?0:0|p(e.length),i=o(t),n=0;n<t;n+=1)i[n]=255&e[n];return i}function f(e,t,i){var n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(i||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===t&&void 0===i?new Uint8Array(e):void 0===i?new Uint8Array(e,t):new Uint8Array(e,t,i),l.prototype),n}function p(e){if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|e}function m(e,t){if(l.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||U(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var i=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===i)return 0;for(var a=!1;;)switch(t){case"ascii":case"latin1":case"binary":return i;case"utf8":case"utf-8":return P(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*i;case"hex":return i>>>1;case"base64":return F(e).length;default:if(a)return n?-1:P(e).length;t=(""+t).toLowerCase(),a=!0}}function h(e,t,i){var n=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===i||i>this.length)&&(i=this.length),i<=0||(i>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return T(this,t,i);case"utf8":case"utf-8":return E(this,t,i);case"ascii":return S(this,t,i);case"latin1":case"binary":return k(this,t,i);case"base64":return C(this,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return O(this,t,i);default:if(n)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function v(e,t,i){var n=e[t];e[t]=e[i],e[i]=n}function b(e,t,i,n,a){var r;if(0===e.length)return -1;if("string"==typeof i?(n=i,i=0):i>2147483647?i=2147483647:i<-2147483648&&(i=-2147483648),r=i=+i,r!=r&&(i=a?0:e.length-1),i<0&&(i=e.length+i),i>=e.length){if(a)return -1;i=e.length-1}else if(i<0){if(!a)return -1;i=0}if("string"==typeof t&&(t=l.from(t,n)),l.isBuffer(t))return 0===t.length?-1:g(e,t,i,n,a);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?a?Uint8Array.prototype.indexOf.call(e,t,i):Uint8Array.prototype.lastIndexOf.call(e,t,i):g(e,[t],i,n,a);throw TypeError("val must be string, number or Buffer")}function g(e,t,i,n,a){var r,o=1,l=e.length,s=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;o=2,l/=2,s/=2,i/=2}function d(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(a){var c=-1;for(r=i;r<l;r++)if(d(e,r)===d(t,-1===c?0:r-c)){if(-1===c&&(c=r),r-c+1===s)return c*o}else -1!==c&&(r-=r-c),c=-1}else for(i+s>l&&(i=l-s),r=i;r>=0;r--){for(var u=!0,f=0;f<s;f++)if(d(e,r+f)!==d(t,f)){u=!1;break}if(u)return r}return -1}function x(e,t,i,n){i=Number(i)||0;var a=e.length-i;n?(n=Number(n))>a&&(n=a):n=a;var r=t.length;n>r/2&&(n=r/2);for(var o=0;o<n;++o){var l,s=parseInt(t.substr(2*o,2),16);if(l=s,l!=l)break;e[i+o]=s}return o}function y(e,t,i,n){return B(P(t,e.length-i),e,i,n)}function w(e,t,i,n){return B(function(e){for(var t=[],i=0;i<e.length;++i)t.push(255&e.charCodeAt(i));return t}(t),e,i,n)}function A(e,t,i,n){return B(F(t),e,i,n)}function _(e,t,i,n){return B(function(e,t){for(var i,n,a,r=[],o=0;o<e.length&&!((t-=2)<0);++o)n=(i=e.charCodeAt(o))>>8,a=i%256,r.push(a),r.push(n);return r}(t,e.length-i),e,i,n)}function C(e,t,i){return 0===t&&i===e.length?n.fromByteArray(e):n.fromByteArray(e.slice(t,i))}function E(e,t,i){i=Math.min(e.length,i);for(var n=[],a=t;a<i;){var r,o,l,s,d=e[a],c=null,u=d>239?4:d>223?3:d>191?2:1;if(a+u<=i)switch(u){case 1:d<128&&(c=d);break;case 2:(192&(r=e[a+1]))==128&&(s=(31&d)<<6|63&r)>127&&(c=s);break;case 3:r=e[a+1],o=e[a+2],(192&r)==128&&(192&o)==128&&(s=(15&d)<<12|(63&r)<<6|63&o)>2047&&(s<55296||s>57343)&&(c=s);break;case 4:r=e[a+1],o=e[a+2],l=e[a+3],(192&r)==128&&(192&o)==128&&(192&l)==128&&(s=(15&d)<<18|(63&r)<<12|(63&o)<<6|63&l)>65535&&s<1114112&&(c=s)}null===c?(c=65533,u=1):c>65535&&(c-=65536,n.push(c>>>10&1023|55296),c=56320|1023&c),n.push(c),a+=u}return function(e){var t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);for(var i="",n=0;n<t;)i+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return i}(n)}function S(e,t,i){var n="";i=Math.min(e.length,i);for(var a=t;a<i;++a)n+=String.fromCharCode(127&e[a]);return n}function k(e,t,i){var n="";i=Math.min(e.length,i);for(var a=t;a<i;++a)n+=String.fromCharCode(e[a]);return n}function T(e,t,i){var n=e.length;(!t||t<0)&&(t=0),(!i||i<0||i>n)&&(i=n);for(var a="",r=t;r<i;++r)a+=j[e[r]];return a}function O(e,t,i){for(var n=e.slice(t,i),a="",r=0;r<n.length-1;r+=2)a+=String.fromCharCode(n[r]+256*n[r+1]);return a}function I(e,t,i){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>i)throw RangeError("Trying to access beyond buffer length")}function M(e,t,i,n,a,r){if(!l.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>a||t<r)throw RangeError('"value" argument is out of bounds');if(i+n>e.length)throw RangeError("Index out of range")}function D(e,t,i,n,a,r){if(i+n>e.length||i<0)throw RangeError("Index out of range")}function N(e,t,i,n,r){return t=+t,i>>>=0,r||D(e,t,i,4,34028234663852886e22,-34028234663852886e22),a.write(e,t,i,n,23,4),i+4}function L(e,t,i,n,r){return t=+t,i>>>=0,r||D(e,t,i,8,17976931348623157e292,-17976931348623157e292),a.write(e,t,i,n,52,8),i+8}t.lW=l,t.h2=50,l.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(i){return!1}}(),l.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.buffer}}),Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.byteOffset}}),l.poolSize=8192,l.from=function(e,t,i){return s(e,t,i)},Object.setPrototypeOf(l.prototype,Uint8Array.prototype),Object.setPrototypeOf(l,Uint8Array),l.alloc=function(e,t,i){var n,a,r;return(d(e),e<=0)?o(e):void 0!==t?"string"==typeof i?o(e).fill(t,i):o(e).fill(t):o(e)},l.allocUnsafe=function(e){return c(e)},l.allocUnsafeSlow=function(e){return c(e)},l.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==l.prototype},l.compare=function(e,t){if(U(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),U(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(e)||!l.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var i=e.length,n=t.length,a=0,r=Math.min(i,n);a<r;++a)if(e[a]!==t[a]){i=e[a],n=t[a];break}return i<n?-1:n<i?1:0},l.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(e,t){if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return l.alloc(0);if(void 0===t)for(i=0,t=0;i<e.length;++i)t+=e[i].length;var i,n=l.allocUnsafe(t),a=0;for(i=0;i<e.length;++i){var r=e[i];if(U(r,Uint8Array))a+r.length>n.length?l.from(r).copy(n,a):Uint8Array.prototype.set.call(n,r,a);else if(l.isBuffer(r))r.copy(n,a);else throw TypeError('"list" argument must be an Array of Buffers');a+=r.length}return n},l.byteLength=m,l.prototype._isBuffer=!0,l.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)v(this,t,t+1);return this},l.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)v(this,t,t+3),v(this,t+1,t+2);return this},l.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)v(this,t,t+7),v(this,t+1,t+6),v(this,t+2,t+5),v(this,t+3,t+4);return this},l.prototype.toString=function(){var e=this.length;return 0===e?"":0===arguments.length?E(this,0,e):h.apply(this,arguments)},l.prototype.toLocaleString=l.prototype.toString,l.prototype.equals=function(e){if(!l.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===l.compare(this,e)},l.prototype.inspect=function(){var e="",i=t.h2;return e=this.toString("hex",0,i).replace(/(.{2})/g,"$1 ").trim(),this.length>i&&(e+=" ... "),"<Buffer "+e+">"},r&&(l.prototype[r]=l.prototype.inspect),l.prototype.compare=function(e,t,i,n,a){if(U(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),!l.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===i&&(i=e?e.length:0),void 0===n&&(n=0),void 0===a&&(a=this.length),t<0||i>e.length||n<0||a>this.length)throw RangeError("out of range index");if(n>=a&&t>=i)return 0;if(n>=a)return -1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,a>>>=0,this===e)return 0;for(var r=a-n,o=i-t,s=Math.min(r,o),d=this.slice(n,a),c=e.slice(t,i),u=0;u<s;++u)if(d[u]!==c[u]){r=d[u],o=c[u];break}return r<o?-1:o<r?1:0},l.prototype.includes=function(e,t,i){return -1!==this.indexOf(e,t,i)},l.prototype.indexOf=function(e,t,i){return b(this,e,t,i,!0)},l.prototype.lastIndexOf=function(e,t,i){return b(this,e,t,i,!1)},l.prototype.write=function(e,t,i,n){if(void 0===t)n="utf8",i=this.length,t=0;else if(void 0===i&&"string"==typeof t)n=t,i=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(i)?(i>>>=0,void 0===n&&(n="utf8")):(n=i,i=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var a=this.length-t;if((void 0===i||i>a)&&(i=a),e.length>0&&(i<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var r=!1;;)switch(n){case"hex":return x(this,e,t,i);case"utf8":case"utf-8":return y(this,e,t,i);case"ascii":case"latin1":case"binary":return w(this,e,t,i);case"base64":return A(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _(this,e,t,i);default:if(r)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),r=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},l.prototype.slice=function(e,t){var i=this.length;e=~~e,t=void 0===t?i:~~t,e<0?(e+=i)<0&&(e=0):e>i&&(e=i),t<0?(t+=i)<0&&(t=0):t>i&&(t=i),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,l.prototype),n},l.prototype.readUintLE=l.prototype.readUIntLE=function(e,t,i){e>>>=0,t>>>=0,i||I(e,t,this.length);for(var n=this[e],a=1,r=0;++r<t&&(a*=256);)n+=this[e+r]*a;return n},l.prototype.readUintBE=l.prototype.readUIntBE=function(e,t,i){e>>>=0,t>>>=0,i||I(e,t,this.length);for(var n=this[e+--t],a=1;t>0&&(a*=256);)n+=this[e+--t]*a;return n},l.prototype.readUint8=l.prototype.readUInt8=function(e,t){return e>>>=0,t||I(e,1,this.length),this[e]},l.prototype.readUint16LE=l.prototype.readUInt16LE=function(e,t){return e>>>=0,t||I(e,2,this.length),this[e]|this[e+1]<<8},l.prototype.readUint16BE=l.prototype.readUInt16BE=function(e,t){return e>>>=0,t||I(e,2,this.length),this[e]<<8|this[e+1]},l.prototype.readUint32LE=l.prototype.readUInt32LE=function(e,t){return e>>>=0,t||I(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},l.prototype.readUint32BE=l.prototype.readUInt32BE=function(e,t){return e>>>=0,t||I(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},l.prototype.readIntLE=function(e,t,i){e>>>=0,t>>>=0,i||I(e,t,this.length);for(var n=this[e],a=1,r=0;++r<t&&(a*=256);)n+=this[e+r]*a;return n>=(a*=128)&&(n-=Math.pow(2,8*t)),n},l.prototype.readIntBE=function(e,t,i){e>>>=0,t>>>=0,i||I(e,t,this.length);for(var n=t,a=1,r=this[e+--n];n>0&&(a*=256);)r+=this[e+--n]*a;return r>=(a*=128)&&(r-=Math.pow(2,8*t)),r},l.prototype.readInt8=function(e,t){return(e>>>=0,t||I(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},l.prototype.readInt16LE=function(e,t){e>>>=0,t||I(e,2,this.length);var i=this[e]|this[e+1]<<8;return 32768&i?4294901760|i:i},l.prototype.readInt16BE=function(e,t){e>>>=0,t||I(e,2,this.length);var i=this[e+1]|this[e]<<8;return 32768&i?4294901760|i:i},l.prototype.readInt32LE=function(e,t){return e>>>=0,t||I(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},l.prototype.readInt32BE=function(e,t){return e>>>=0,t||I(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},l.prototype.readFloatLE=function(e,t){return e>>>=0,t||I(e,4,this.length),a.read(this,e,!0,23,4)},l.prototype.readFloatBE=function(e,t){return e>>>=0,t||I(e,4,this.length),a.read(this,e,!1,23,4)},l.prototype.readDoubleLE=function(e,t){return e>>>=0,t||I(e,8,this.length),a.read(this,e,!0,52,8)},l.prototype.readDoubleBE=function(e,t){return e>>>=0,t||I(e,8,this.length),a.read(this,e,!1,52,8)},l.prototype.writeUintLE=l.prototype.writeUIntLE=function(e,t,i,n){e=+e,t>>>=0,i>>>=0,!n&&M(this,e,t,i,Math.pow(2,8*i)-1,0);var a=1,r=0;for(this[t]=255&e;++r<i&&(a*=256);)this[t+r]=e/a&255;return t+i},l.prototype.writeUintBE=l.prototype.writeUIntBE=function(e,t,i,n){e=+e,t>>>=0,i>>>=0,!n&&M(this,e,t,i,Math.pow(2,8*i)-1,0);var a=i-1,r=1;for(this[t+a]=255&e;--a>=0&&(r*=256);)this[t+a]=e/r&255;return t+i},l.prototype.writeUint8=l.prototype.writeUInt8=function(e,t,i){return e=+e,t>>>=0,i||M(this,e,t,1,255,0),this[t]=255&e,t+1},l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(e,t,i){return e=+e,t>>>=0,i||M(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(e,t,i){return e=+e,t>>>=0,i||M(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(e,t,i){return e=+e,t>>>=0,i||M(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(e,t,i){return e=+e,t>>>=0,i||M(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t>>>=0,!n){var a=Math.pow(2,8*i-1);M(this,e,t,i,a-1,-a)}var r=0,o=1,l=0;for(this[t]=255&e;++r<i&&(o*=256);)e<0&&0===l&&0!==this[t+r-1]&&(l=1),this[t+r]=(e/o>>0)-l&255;return t+i},l.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t>>>=0,!n){var a=Math.pow(2,8*i-1);M(this,e,t,i,a-1,-a)}var r=i-1,o=1,l=0;for(this[t+r]=255&e;--r>=0&&(o*=256);)e<0&&0===l&&0!==this[t+r+1]&&(l=1),this[t+r]=(e/o>>0)-l&255;return t+i},l.prototype.writeInt8=function(e,t,i){return e=+e,t>>>=0,i||M(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},l.prototype.writeInt16LE=function(e,t,i){return e=+e,t>>>=0,i||M(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeInt16BE=function(e,t,i){return e=+e,t>>>=0,i||M(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeInt32LE=function(e,t,i){return e=+e,t>>>=0,i||M(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},l.prototype.writeInt32BE=function(e,t,i){return e=+e,t>>>=0,i||M(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeFloatLE=function(e,t,i){return N(this,e,t,!0,i)},l.prototype.writeFloatBE=function(e,t,i){return N(this,e,t,!1,i)},l.prototype.writeDoubleLE=function(e,t,i){return L(this,e,t,!0,i)},l.prototype.writeDoubleBE=function(e,t,i){return L(this,e,t,!1,i)},l.prototype.copy=function(e,t,i,n){if(!l.isBuffer(e))throw TypeError("argument should be a Buffer");if(i||(i=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);var a=n-i;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),a},l.prototype.fill=function(e,t,i,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,i=this.length):"string"==typeof i&&(n=i,i=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!l.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){var a,r=e.charCodeAt(0);("utf8"===n&&r<128||"latin1"===n)&&(e=r)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw RangeError("Out of range index");if(i<=t)return this;if(t>>>=0,i=void 0===i?this.length:i>>>0,e||(e=0),"number"==typeof e)for(a=t;a<i;++a)this[a]=e;else{var o=l.isBuffer(e)?e:l.from(e,n),s=o.length;if(0===s)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<i-t;++a)this[a+t]=o[a%s]}return this};var R=/[^+/0-9A-Za-z-_]/g;function P(e,t){t=t||1/0;for(var i,n=e.length,a=null,r=[],o=0;o<n;++o){if((i=e.charCodeAt(o))>55295&&i<57344){if(!a){if(i>56319||o+1===n){(t-=3)>-1&&r.push(239,191,189);continue}a=i;continue}if(i<56320){(t-=3)>-1&&r.push(239,191,189),a=i;continue}i=(a-55296<<10|i-56320)+65536}else a&&(t-=3)>-1&&r.push(239,191,189);if(a=null,i<128){if((t-=1)<0)break;r.push(i)}else if(i<2048){if((t-=2)<0)break;r.push(i>>6|192,63&i|128)}else if(i<65536){if((t-=3)<0)break;r.push(i>>12|224,i>>6&63|128,63&i|128)}else if(i<1114112){if((t-=4)<0)break;r.push(i>>18|240,i>>12&63|128,i>>6&63|128,63&i|128)}else throw Error("Invalid code point")}return r}function F(e){return n.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(R,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function B(e,t,i,n){for(var a=0;a<n&&!(a+i>=t.length)&&!(a>=e.length);++a)t[a+i]=e[a];return a}function U(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function $(e){return e!=e}var j=function(){for(var e="0123456789abcdef",t=Array(256),i=0;i<16;++i)for(var n=16*i,a=0;a<16;++a)t[n+a]=e[i]+e[a];return t}()},3162:function(e,t,i){var n,a,r,o;o=function(){"use strict";function t(e,t,i){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){l(n.response,t,i)},n.onerror=function(){console.error("could not download file")},n.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(i){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(i){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof i.g&&i.g.global===i.g?i.g:void 0,o=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!o?function(e,i,o){var l=r.URL||r.webkitURL,s=document.createElement("a");i=i||e.name||"download",s.download=i,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?a(s):n(s.href)?t(e,i,o):a(s,s.target="_blank")):(s.href=l.createObjectURL(e),setTimeout(function(){l.revokeObjectURL(s.href)},4e4),setTimeout(function(){a(s)},0))}:"msSaveOrOpenBlob"in navigator?function(e,i,r){if(i=i||e.name||"download","string"!=typeof e){var o,l;navigator.msSaveOrOpenBlob((void 0===(l=r)?l={autoBom:!1}:"object"!=typeof l&&(console.warn("Deprecated: Expected third argument to be a object"),l={autoBom:!l}),l.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e),i)}else if(n(e))t(e,i,r);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout(function(){a(s)})}}:function(e,i,n,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return t(e,i,n);var l="application/octet-stream"===e.type,s=/constructor/i.test(r.HTMLElement)||r.safari,d=/CriOS\/[\d]+/.test(navigator.userAgent);if((d||l&&s||o)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var e=c.result;e=d?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},c.readAsDataURL(e)}else{var u=r.URL||r.webkitURL,f=u.createObjectURL(e);a?a.location=f:location.href=f,a=null,setTimeout(function(){u.revokeObjectURL(f)},4e4)}});r.saveAs=l.saveAs=l,e.exports=l},void 0!==(r=o.apply(t,[]))&&(e.exports=r)},645:function(e,t){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ t.read=function(e,t,i,n,a){var r,o,l=8*a-n-1,s=(1<<l)-1,d=s>>1,c=-7,u=i?a-1:0,f=i?-1:1,p=e[t+u];for(u+=f,r=p&(1<<-c)-1,p>>=-c,c+=l;c>0;r=256*r+e[t+u],u+=f,c-=8);for(o=r&(1<<-c)-1,r>>=-c,c+=n;c>0;o=256*o+e[t+u],u+=f,c-=8);if(0===r)r=1-d;else{if(r===s)return o?NaN:(p?-1:1)*(1/0);o+=Math.pow(2,n),r-=d}return(p?-1:1)*o*Math.pow(2,r-n)},t.write=function(e,t,i,n,a,r){var o,l,s,d=8*r-a-1,c=(1<<d)-1,u=c>>1,f=23===a?5960464477539062e-23:0,p=n?0:r-1,m=n?1:-1,h=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(l=isNaN(t)?1:0,o=c):(o=Math.floor(Math.log(t)/Math.LN2),t*(s=Math.pow(2,-o))<1&&(o--,s*=2),o+u>=1?t+=f/s:t+=f*Math.pow(2,1-u),t*s>=2&&(o++,s/=2),o+u>=c?(l=0,o=c):o+u>=1?(l=(t*s-1)*Math.pow(2,a),o+=u):(l=t*Math.pow(2,u-1)*Math.pow(2,a),o=0));a>=8;e[i+p]=255&l,p+=m,l/=256,a-=8);for(o=o<<a|l,d+=a;d>0;e[i+p]=255&o,p+=m,o/=256,d-=8);e[i+p-m]|=128*h}},5733:function(e,t,i){var n,a=i(8764).lW,r=i(3454);n=function(){return(function e(t,i,n){function a(o,l){if(!i[o]){if(!t[o]){if(r)return r(o,!0);var s=Error("Cannot find module '"+o+"'");throw s.code="MODULE_NOT_FOUND",s}var d=i[o]={exports:{}};t[o][0].call(d.exports,function(e){return a(t[o][1][e]||e)},d,d.exports,e,t,i,n)}return i[o].exports}for(var r=void 0,o=0;o<n.length;o++)a(n[o]);return a})({1:[function(e,t,i){"use strict";var n=e("./utils"),a=e("./support"),r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i.encode=function(e){for(var t,i,a,o,l,s,d,c=[],u=0,f=e.length,p=f,m="string"!==n.getTypeOf(e);u<e.length;)p=f-u,a=m?(t=e[u++],i=u<f?e[u++]:0,u<f?e[u++]:0):(t=e.charCodeAt(u++),i=u<f?e.charCodeAt(u++):0,u<f?e.charCodeAt(u++):0),o=t>>2,l=(3&t)<<4|i>>4,s=1<p?(15&i)<<2|a>>6:64,d=2<p?63&a:64,c.push(r.charAt(o)+r.charAt(l)+r.charAt(s)+r.charAt(d));return c.join("")},i.decode=function(e){var t,i,n,o,l,s,d=0,c=0,u="data:";if(e.substr(0,u.length)===u)throw Error("Invalid base64 input, it looks like a data url.");var f,p=3*(e=e.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(e.charAt(e.length-1)===r.charAt(64)&&p--,e.charAt(e.length-2)===r.charAt(64)&&p--,p%1!=0)throw Error("Invalid base64 input, bad content length.");for(f=a.uint8array?new Uint8Array(0|p):Array(0|p);d<e.length;)t=r.indexOf(e.charAt(d++))<<2|(o=r.indexOf(e.charAt(d++)))>>4,i=(15&o)<<4|(l=r.indexOf(e.charAt(d++)))>>2,n=(3&l)<<6|(s=r.indexOf(e.charAt(d++))),f[c++]=t,64!==l&&(f[c++]=i),64!==s&&(f[c++]=n);return f}},{"./support":30,"./utils":32}],2:[function(e,t,i){"use strict";var n=e("./external"),a=e("./stream/DataWorker"),r=e("./stream/Crc32Probe"),o=e("./stream/DataLengthProbe");function l(e,t,i,n,a){this.compressedSize=e,this.uncompressedSize=t,this.crc32=i,this.compression=n,this.compressedContent=a}l.prototype={getContentWorker:function(){var e=new a(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o("data_length")),t=this;return e.on("end",function(){if(this.streamInfo.data_length!==t.uncompressedSize)throw Error("Bug : uncompressed data size mismatch")}),e},getCompressedWorker:function(){return new a(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},l.createWorkerFrom=function(e,t,i){return e.pipe(new r).pipe(new o("uncompressedSize")).pipe(t.compressWorker(i)).pipe(new o("compressedSize")).withStreamInfo("compression",t)},t.exports=l},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,t,i){"use strict";var n=e("./stream/GenericWorker");i.STORE={magic:"\0\0",compressWorker:function(){return new n("STORE compression")},uncompressWorker:function(){return new n("STORE decompression")}},i.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,t,i){"use strict";var n=e("./utils"),a=function(){for(var e,t=[],i=0;i<256;i++){e=i;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[i]=e}return t}();t.exports=function(e,t){return void 0!==e&&e.length?"string"!==n.getTypeOf(e)?function(e,t,i,n){var r=n+i;e^=-1;for(var o=n;o<r;o++)e=e>>>8^a[255&(e^t[o])];return -1^e}(0|t,e,e.length,0):function(e,t,i,n){var r=n+i;e^=-1;for(var o=n;o<r;o++)e=e>>>8^a[255&(e^t.charCodeAt(o))];return -1^e}(0|t,e,e.length,0):0}},{"./utils":32}],5:[function(e,t,i){"use strict";i.base64=!1,i.binary=!1,i.dir=!1,i.createFolders=!0,i.date=null,i.compression=null,i.compressionOptions=null,i.comment=null,i.unixPermissions=null,i.dosPermissions=null},{}],6:[function(e,t,i){"use strict";var n=null;n="undefined"!=typeof Promise?Promise:e("lie"),t.exports={Promise:n}},{lie:37}],7:[function(e,t,i){"use strict";var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,a=e("pako"),r=e("./utils"),o=e("./stream/GenericWorker"),l=n?"uint8array":"array";function s(e,t){o.call(this,"FlateWorker/"+e),this._pako=null,this._pakoAction=e,this._pakoOptions=t,this.meta={}}i.magic="\b\0",r.inherits(s,o),s.prototype.processChunk=function(e){this.meta=e.meta,null===this._pako&&this._createPako(),this._pako.push(r.transformTo(l,e.data),!1)},s.prototype.flush=function(){o.prototype.flush.call(this),null===this._pako&&this._createPako(),this._pako.push([],!0)},s.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this._pako=null},s.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var e=this;this._pako.onData=function(t){e.push({data:t,meta:e.meta})}},i.compressWorker=function(e){return new s("Deflate",e)},i.uncompressWorker=function(){return new s("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,t,i){"use strict";function n(e,t){var i,n="";for(i=0;i<t;i++)n+=String.fromCharCode(255&e),e>>>=8;return n}function a(e,t,i,a,o,c){var u,f,p=e.file,m=e.compression,h=c!==l.utf8encode,v=r.transformTo("string",c(p.name)),b=r.transformTo("string",l.utf8encode(p.name)),g=p.comment,x=r.transformTo("string",c(g)),y=r.transformTo("string",l.utf8encode(g)),w=b.length!==p.name.length,A=y.length!==g.length,_="",C="",E="",S=p.dir,k=p.date,T={crc32:0,compressedSize:0,uncompressedSize:0};t&&!i||(T.crc32=e.crc32,T.compressedSize=e.compressedSize,T.uncompressedSize=e.uncompressedSize);var O=0;t&&(O|=8),!h&&(w||A)&&(O|=2048);var I,M,D,N,L=0,R=0;S&&(L|=16),"UNIX"===o?(R=798,L|=(D=I=p.unixPermissions,I||(D=S?16893:33204),(65535&D)<<16)):(R=20,L|=63&((N=p.dosPermissions)||0)),u=k.getUTCHours(),u<<=6,u|=k.getUTCMinutes(),u<<=5,u|=k.getUTCSeconds()/2,f=k.getUTCFullYear()-1980,f<<=4,f|=k.getUTCMonth()+1,f<<=5,f|=k.getUTCDate(),w&&(C=n(1,1)+n(s(v),4)+b,_+="up"+n(C.length,2)+C),A&&(E=n(1,1)+n(s(x),4)+y,_+="uc"+n(E.length,2)+E);var P="";return P+="\n\0",P+=n(O,2),P+=m.magic,P+=n(u,2),P+=n(f,2),P+=n(T.crc32,4),P+=n(T.compressedSize,4),P+=n(T.uncompressedSize,4),P+=n(v.length,2),P+=n(_.length,2),{fileRecord:d.LOCAL_FILE_HEADER+P+v+_,dirRecord:d.CENTRAL_FILE_HEADER+n(R,2)+P+n(x.length,2)+"\0\0\0\0"+n(L,4)+n(a,4)+v+_+x}}var r=e("../utils"),o=e("../stream/GenericWorker"),l=e("../utf8"),s=e("../crc32"),d=e("../signature");function c(e,t,i,n){o.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=t,this.zipPlatform=i,this.encodeFileName=n,this.streamFiles=e,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}r.inherits(c,o),c.prototype.push=function(e){var t=e.meta.percent||0,i=this.entriesCount,n=this._sources.length;this.accumulate?this.contentBuffer.push(e):(this.bytesWritten+=e.data.length,o.prototype.push.call(this,{data:e.data,meta:{currentFile:this.currentFile,percent:i?(t+100*(i-n-1))/i:100}}))},c.prototype.openedSource=function(e){this.currentSourceOffset=this.bytesWritten,this.currentFile=e.file.name;var t=this.streamFiles&&!e.file.dir;if(t){var i=a(e,t,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:i.fileRecord,meta:{percent:0}})}else this.accumulate=!0},c.prototype.closedSource=function(e){this.accumulate=!1;var t,i=this.streamFiles&&!e.file.dir,r=a(e,i,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(r.dirRecord),i)this.push({data:(t=e,d.DATA_DESCRIPTOR+n(t.crc32,4)+n(t.compressedSize,4)+n(t.uncompressedSize,4)),meta:{percent:100}});else for(this.push({data:r.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},c.prototype.flush=function(){for(var e=this.bytesWritten,t=0;t<this.dirRecords.length;t++)this.push({data:this.dirRecords[t],meta:{percent:100}});var i,a,o,l,s,c,u=this.bytesWritten-e,f=(i=this.dirRecords.length,l=this.zipComment,s=this.encodeFileName,c=r.transformTo("string",s(l)),d.CENTRAL_DIRECTORY_END+"\0\0\0\0"+n(i,2)+n(i,2)+n(u,4)+n(e,4)+n(c.length,2)+c);this.push({data:f,meta:{percent:100}})},c.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},c.prototype.registerPrevious=function(e){this._sources.push(e);var t=this;return e.on("data",function(e){t.processChunk(e)}),e.on("end",function(){t.closedSource(t.previous.streamInfo),t._sources.length?t.prepareNextSource():t.end()}),e.on("error",function(e){t.error(e)}),this},c.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},c.prototype.error=function(e){var t=this._sources;if(!o.prototype.error.call(this,e))return!1;for(var i=0;i<t.length;i++)try{t[i].error(e)}catch(n){}return!0},c.prototype.lock=function(){o.prototype.lock.call(this);for(var e=this._sources,t=0;t<e.length;t++)e[t].lock()},t.exports=c},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,t,i){"use strict";var n=e("../compressions"),a=e("./ZipFileWorker");i.generateWorker=function(e,t,i){var r=new a(t.streamFiles,i,t.platform,t.encodeFileName),o=0;try{e.forEach(function(e,i){o++;var a=function(e,t){var i=e||t,a=n[i];if(!a)throw Error(i+" is not a valid compression method !");return a}(i.options.compression,t.compression),l=i.options.compressionOptions||t.compressionOptions||{},s=i.dir,d=i.date;i._compressWorker(a,l).withStreamInfo("file",{name:e,dir:s,date:d,comment:i.comment||"",unixPermissions:i.unixPermissions,dosPermissions:i.dosPermissions}).pipe(r)}),r.entriesCount=o}catch(l){r.error(l)}return r}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,t,i){"use strict";function n(){if(!(this instanceof n))return new n;if(arguments.length)throw Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var e=new n;for(var t in this)"function"!=typeof this[t]&&(e[t]=this[t]);return e}}(n.prototype=e("./object")).loadAsync=e("./load"),n.support=e("./support"),n.defaults=e("./defaults"),n.version="3.10.1",n.loadAsync=function(e,t){return(new n).loadAsync(e,t)},n.external=e("./external"),t.exports=n},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,t,i){"use strict";var n=e("./utils"),a=e("./external"),r=e("./utf8"),o=e("./zipEntries"),l=e("./stream/Crc32Probe"),s=e("./nodejsUtils");function d(e){return new a.Promise(function(t,i){var n=e.decompressed.getContentWorker().pipe(new l);n.on("error",function(e){i(e)}).on("end",function(){n.streamInfo.crc32!==e.decompressed.crc32?i(Error("Corrupted zip : CRC32 mismatch")):t()}).resume()})}t.exports=function(e,t){var i=this;return t=n.extend(t||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:r.utf8decode}),s.isNode&&s.isStream(e)?a.Promise.reject(Error("JSZip can't accept a stream when loading a zip file.")):n.prepareContent("the loaded zip file",e,!0,t.optimizedBinaryString,t.base64).then(function(e){var i=new o(t);return i.load(e),i}).then(function(e){var i=[a.Promise.resolve(e)],n=e.files;if(t.checkCRC32)for(var r=0;r<n.length;r++)i.push(d(n[r]));return a.Promise.all(i)}).then(function(e){for(var a=e.shift(),r=a.files,o=0;o<r.length;o++){var l=r[o],s=l.fileNameStr,d=n.resolve(l.fileNameStr);i.file(d,l.decompressed,{binary:!0,optimizedBinaryString:!0,date:l.date,dir:l.dir,comment:l.fileCommentStr.length?l.fileCommentStr:null,unixPermissions:l.unixPermissions,dosPermissions:l.dosPermissions,createFolders:t.createFolders}),l.dir||(i.file(d).unsafeOriginalName=s)}return a.zipComment.length&&(i.comment=a.zipComment),i})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,t,i){"use strict";var n=e("../utils"),a=e("../stream/GenericWorker");function r(e,t){a.call(this,"Nodejs stream input adapter for "+e),this._upstreamEnded=!1,this._bindStream(t)}n.inherits(r,a),r.prototype._bindStream=function(e){var t=this;(this._stream=e).pause(),e.on("data",function(e){t.push({data:e,meta:{percent:0}})}).on("error",function(e){t.isPaused?this.generatedError=e:t.error(e)}).on("end",function(){t.isPaused?t._upstreamEnded=!0:t.end()})},r.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},r.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},t.exports=r},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,t,i){"use strict";var n=e("readable-stream").Readable;function a(e,t,i){n.call(this,t),this._helper=e;var a=this;e.on("data",function(e,t){a.push(e)||a._helper.pause(),i&&i(t)}).on("error",function(e){a.emit("error",e)}).on("end",function(){a.push(null)})}e("../utils").inherits(a,n),a.prototype._read=function(){this._helper.resume()},t.exports=a},{"../utils":32,"readable-stream":16}],14:[function(e,t,i){"use strict";t.exports={isNode:void 0!==a,newBufferFrom:function(e,t){if(a.from&&a.from!==Uint8Array.from)return a.from(e,t);if("number"==typeof e)throw Error('The "data" argument must not be a number');return new a(e,t)},allocBuffer:function(e){if(a.alloc)return a.alloc(e);var t=new a(e);return t.fill(0),t},isBuffer:function(e){return a.isBuffer(e)},isStream:function(e){return e&&"function"==typeof e.on&&"function"==typeof e.pause&&"function"==typeof e.resume}}},{}],15:[function(e,t,i){"use strict";function n(e,t,i){var n,a=r.getTypeOf(t),l=r.extend(i||{},s);l.date=l.date||new Date,null!==l.compression&&(l.compression=l.compression.toUpperCase()),"string"==typeof l.unixPermissions&&(l.unixPermissions=parseInt(l.unixPermissions,8)),l.unixPermissions&&16384&l.unixPermissions&&(l.dir=!0),l.dosPermissions&&16&l.dosPermissions&&(l.dir=!0),l.dir&&(e=h(e)),l.createFolders&&(n=m(e))&&v.call(this,n,!0);var u="string"===a&&!1===l.binary&&!1===l.base64;i&&void 0!==i.binary||(l.binary=!u),(t instanceof d&&0===t.uncompressedSize||l.dir||!t||0===t.length)&&(l.base64=!1,l.binary=!0,t="",l.compression="STORE",a="string");var b=null;b=t instanceof d||t instanceof o?t:f.isNode&&f.isStream(t)?new p(e,t):r.prepareContent(e,t,l.binary,l.optimizedBinaryString,l.base64);var g=new c(e,b,l);this.files[e]=g}var a=e("./utf8"),r=e("./utils"),o=e("./stream/GenericWorker"),l=e("./stream/StreamHelper"),s=e("./defaults"),d=e("./compressedObject"),c=e("./zipObject"),u=e("./generate"),f=e("./nodejsUtils"),p=e("./nodejs/NodejsStreamInputAdapter"),m=function(e){"/"===e.slice(-1)&&(e=e.substring(0,e.length-1));var t=e.lastIndexOf("/");return 0<t?e.substring(0,t):""},h=function(e){return"/"!==e.slice(-1)&&(e+="/"),e},v=function(e,t){return t=void 0!==t?t:s.createFolders,e=h(e),this.files[e]||n.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]};function b(e){return"[object RegExp]"===Object.prototype.toString.call(e)}t.exports={load:function(){throw Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(e){var t,i,n;for(t in this.files)n=this.files[t],(i=t.slice(this.root.length,t.length))&&t.slice(0,this.root.length)===this.root&&e(i,n)},filter:function(e){var t=[];return this.forEach(function(i,n){e(i,n)&&t.push(n)}),t},file:function(e,t,i){if(1!==arguments.length)return e=this.root+e,n.call(this,e,t,i),this;if(b(e)){var a=e;return this.filter(function(e,t){return!t.dir&&a.test(e)})}var r=this.files[this.root+e];return r&&!r.dir?r:null},folder:function(e){if(!e)return this;if(b(e))return this.filter(function(t,i){return i.dir&&e.test(t)});var t=this.root+e,i=v.call(this,t),n=this.clone();return n.root=i.name,n},remove:function(e){e=this.root+e;var t=this.files[e];if(t||("/"!==e.slice(-1)&&(e+="/"),t=this.files[e]),t&&!t.dir)delete this.files[e];else for(var i=this.filter(function(t,i){return i.name.slice(0,e.length)===e}),n=0;n<i.length;n++)delete this.files[i[n].name];return this},generate:function(){throw Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(e){var t,i={};try{if((i=r.extend(e||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=i.type.toLowerCase(),i.compression=i.compression.toUpperCase(),"binarystring"===i.type&&(i.type="string"),!i.type)throw Error("No output type specified.");r.checkSupport(i.type),"darwin"!==i.platform&&"freebsd"!==i.platform&&"linux"!==i.platform&&"sunos"!==i.platform||(i.platform="UNIX"),"win32"===i.platform&&(i.platform="DOS");var n=i.comment||this.comment||"";t=u.generateWorker(this,i,n)}catch(s){(t=new o("error")).error(s)}return new l(t,i.type||"string",i.mimeType)},generateAsync:function(e,t){return this.generateInternalStream(e).accumulate(t)},generateNodeStream:function(e,t){return(e=e||{}).type||(e.type="nodebuffer"),this.generateInternalStream(e).toNodejsStream(t)}}},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,t,i){"use strict";t.exports=e("stream")},{stream:void 0}],17:[function(e,t,i){"use strict";var n=e("./DataReader");function a(e){n.call(this,e);for(var t=0;t<this.data.length;t++)e[t]=255&e[t]}e("../utils").inherits(a,n),a.prototype.byteAt=function(e){return this.data[this.zero+e]},a.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),i=e.charCodeAt(1),n=e.charCodeAt(2),a=e.charCodeAt(3),r=this.length-4;0<=r;--r)if(this.data[r]===t&&this.data[r+1]===i&&this.data[r+2]===n&&this.data[r+3]===a)return r-this.zero;return -1},a.prototype.readAndCheckSignature=function(e){var t=e.charCodeAt(0),i=e.charCodeAt(1),n=e.charCodeAt(2),a=e.charCodeAt(3),r=this.readData(4);return t===r[0]&&i===r[1]&&n===r[2]&&a===r[3]},a.prototype.readData=function(e){if(this.checkOffset(e),0===e)return[];var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=a},{"../utils":32,"./DataReader":18}],18:[function(e,t,i){"use strict";var n=e("../utils");function a(e){this.data=e,this.length=e.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(e){this.checkIndex(this.index+e)},checkIndex:function(e){if(this.length<this.zero+e||e<0)throw Error("End of data reached (data length = "+this.length+", asked index = "+e+"). Corrupted zip ?")},setIndex:function(e){this.checkIndex(e),this.index=e},skip:function(e){this.setIndex(this.index+e)},byteAt:function(){},readInt:function(e){var t,i=0;for(this.checkOffset(e),t=this.index+e-1;t>=this.index;t--)i=(i<<8)+this.byteAt(t);return this.index+=e,i},readString:function(e){return n.transformTo("string",this.readData(e))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var e=this.readInt(4);return new Date(Date.UTC(1980+(e>>25&127),(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(31&e)<<1))}},t.exports=a},{"../utils":32}],19:[function(e,t,i){"use strict";var n=e("./Uint8ArrayReader");function a(e){n.call(this,e)}e("../utils").inherits(a,n),a.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,t,i){"use strict";var n=e("./DataReader");function a(e){n.call(this,e)}e("../utils").inherits(a,n),a.prototype.byteAt=function(e){return this.data.charCodeAt(this.zero+e)},a.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)-this.zero},a.prototype.readAndCheckSignature=function(e){return e===this.readData(4)},a.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=a},{"../utils":32,"./DataReader":18}],21:[function(e,t,i){"use strict";var n=e("./ArrayReader");function a(e){n.call(this,e)}e("../utils").inherits(a,n),a.prototype.readData=function(e){if(this.checkOffset(e),0===e)return new Uint8Array(0);var t=this.data.subarray(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(e,t,i){"use strict";var n=e("../utils"),a=e("../support"),r=e("./ArrayReader"),o=e("./StringReader"),l=e("./NodeBufferReader"),s=e("./Uint8ArrayReader");t.exports=function(e){var t=n.getTypeOf(e);return n.checkSupport(t),"string"!==t||a.uint8array?"nodebuffer"===t?new l(e):a.uint8array?new s(n.transformTo("uint8array",e)):new r(n.transformTo("array",e)):new o(e)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,t,i){"use strict";i.LOCAL_FILE_HEADER="PK\x03\x04",i.CENTRAL_FILE_HEADER="PK\x01\x02",i.CENTRAL_DIRECTORY_END="PK\x05\x06",i.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x06\x07",i.ZIP64_CENTRAL_DIRECTORY_END="PK\x06\x06",i.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,t,i){"use strict";var n=e("./GenericWorker"),a=e("../utils");function r(e){n.call(this,"ConvertWorker to "+e),this.destType=e}a.inherits(r,n),r.prototype.processChunk=function(e){this.push({data:a.transformTo(this.destType,e.data),meta:e.meta})},t.exports=r},{"../utils":32,"./GenericWorker":28}],25:[function(e,t,i){"use strict";var n=e("./GenericWorker"),a=e("../crc32");function r(){n.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(r,n),r.prototype.processChunk=function(e){this.streamInfo.crc32=a(e.data,this.streamInfo.crc32||0),this.push(e)},t.exports=r},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,t,i){"use strict";var n=e("../utils"),a=e("./GenericWorker");function r(e){a.call(this,"DataLengthProbe for "+e),this.propName=e,this.withStreamInfo(e,0)}n.inherits(r,a),r.prototype.processChunk=function(e){if(e){var t=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=t+e.data.length}a.prototype.processChunk.call(this,e)},t.exports=r},{"../utils":32,"./GenericWorker":28}],27:[function(e,t,i){"use strict";var n=e("../utils"),a=e("./GenericWorker");function r(e){a.call(this,"DataWorker");var t=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,e.then(function(e){t.dataIsReady=!0,t.data=e,t.max=e&&e.length||0,t.type=n.getTypeOf(e),t.isPaused||t._tickAndRepeat()},function(e){t.error(e)})}n.inherits(r,a),r.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},r.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,n.delay(this._tickAndRepeat,[],this)),!0)},r.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(n.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},r.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var e=null,t=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":e=this.data.substring(this.index,t);break;case"uint8array":e=this.data.subarray(this.index,t);break;case"array":case"nodebuffer":e=this.data.slice(this.index,t)}return this.index=t,this.push({data:e,meta:{percent:this.max?this.index/this.max*100:0}})},t.exports=r},{"../utils":32,"./GenericWorker":28}],28:[function(e,t,i){"use strict";function n(e){this.name=e||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}n.prototype={push:function(e){this.emit("data",e)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(e){this.emit("error",e)}return!0},error:function(e){return!this.isFinished&&(this.isPaused?this.generatedError=e:(this.isFinished=!0,this.emit("error",e),this.previous&&this.previous.error(e),this.cleanUp()),!0)},on:function(e,t){return this._listeners[e].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(e,t){if(this._listeners[e])for(var i=0;i<this._listeners[e].length;i++)this._listeners[e][i].call(this,t)},pipe:function(e){return e.registerPrevious(this)},registerPrevious:function(e){if(this.isLocked)throw Error("The stream '"+this+"' has already been used.");this.streamInfo=e.streamInfo,this.mergeStreamInfo(),this.previous=e;var t=this;return e.on("data",function(e){t.processChunk(e)}),e.on("end",function(){t.end()}),e.on("error",function(e){t.error(e)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var e=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),e=!0),this.previous&&this.previous.resume(),!e},flush:function(){},processChunk:function(e){this.push(e)},withStreamInfo:function(e,t){return this.extraStreamInfo[e]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var e in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,e)&&(this.streamInfo[e]=this.extraStreamInfo[e])},lock:function(){if(this.isLocked)throw Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var e="Worker "+this.name;return this.previous?this.previous+" -> "+e:e}},t.exports=n},{}],29:[function(e,t,i){"use strict";var n=e("../utils"),r=e("./ConvertWorker"),o=e("./GenericWorker"),l=e("../base64"),s=e("../support"),d=e("../external"),c=null;if(s.nodestream)try{c=e("../nodejs/NodejsStreamOutputAdapter")}catch(u){}function f(e,t,i){var a=t;switch(t){case"blob":case"arraybuffer":a="uint8array";break;case"base64":a="string"}try{this._internalType=a,this._outputType=t,this._mimeType=i,n.checkSupport(a),this._worker=e.pipe(new r(a)),e.lock()}catch(l){this._worker=new o("error"),this._worker.error(l)}}f.prototype={accumulate:function(e){var t,i;return t=this,new d.Promise(function(i,r){var o=[],s=t._internalType,d=t._outputType,c=t._mimeType;t.on("data",function(t,i){o.push(t),e&&e(i)}).on("error",function(e){o=[],r(e)}).on("end",function(){try{var e=function(e,t,i){switch(e){case"blob":return n.newBlob(n.transformTo("arraybuffer",t),i);case"base64":return l.encode(t);default:return n.transformTo(e,t)}}(d,function(e,t){var i,n=0,r=null,o=0;for(i=0;i<t.length;i++)o+=t[i].length;switch(e){case"string":return t.join("");case"array":return Array.prototype.concat.apply([],t);case"uint8array":for(r=new Uint8Array(o),i=0;i<t.length;i++)r.set(t[i],n),n+=t[i].length;return r;case"nodebuffer":return a.concat(t);default:throw Error("concat : unsupported type '"+e+"'")}}(s,o),c);i(e)}catch(t){r(t)}o=[]}).resume()})},on:function(e,t){var i=this;return"data"===e?this._worker.on(e,function(e){t.call(i,e.data,e.meta)}):this._worker.on(e,function(){n.delay(t,arguments,i)}),this},resume:function(){return n.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(e){if(n.checkSupport("nodestream"),"nodebuffer"!==this._outputType)throw Error(this._outputType+" is not supported by this method");return new c(this,{objectMode:"nodebuffer"!==this._outputType},e)}},t.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,t,i){"use strict";if(i.base64=!0,i.array=!0,i.string=!0,i.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,i.nodebuffer=void 0!==a,i.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)i.blob=!1;else{var n=new ArrayBuffer(0);try{i.blob=0===new Blob([n],{type:"application/zip"}).size}catch(l){try{var r=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);r.append(n),i.blob=0===r.getBlob("application/zip").size}catch(o){i.blob=!1}}}try{i.nodestream=!!e("readable-stream").Readable}catch(s){i.nodestream=!1}},{"readable-stream":16}],31:[function(e,t,i){"use strict";for(var n=e("./utils"),a=e("./support"),r=e("./nodejsUtils"),o=e("./stream/GenericWorker"),l=Array(256),s=0;s<256;s++)l[s]=252<=s?6:248<=s?5:240<=s?4:224<=s?3:192<=s?2:1;function d(){o.call(this,"utf-8 decode"),this.leftOver=null}function c(){o.call(this,"utf-8 encode")}l[254]=l[254]=1,i.utf8encode=function(e){return a.nodebuffer?r.newBufferFrom(e,"utf-8"):function(e){var t,i,n,r,o,l=e.length,s=0;for(r=0;r<l;r++)55296==(64512&(i=e.charCodeAt(r)))&&r+1<l&&56320==(64512&(n=e.charCodeAt(r+1)))&&(i=65536+(i-55296<<10)+(n-56320),r++),s+=i<128?1:i<2048?2:i<65536?3:4;for(t=a.uint8array?new Uint8Array(s):Array(s),r=o=0;o<s;r++)55296==(64512&(i=e.charCodeAt(r)))&&r+1<l&&56320==(64512&(n=e.charCodeAt(r+1)))&&(i=65536+(i-55296<<10)+(n-56320),r++),i<128?t[o++]=i:(i<2048?t[o++]=192|i>>>6:(i<65536?t[o++]=224|i>>>12:(t[o++]=240|i>>>18,t[o++]=128|i>>>12&63),t[o++]=128|i>>>6&63),t[o++]=128|63&i);return t}(e)},i.utf8decode=function(e){return a.nodebuffer?n.transformTo("nodebuffer",e).toString("utf-8"):function(e){var t,i,a,r,o=e.length,s=Array(2*o);for(t=i=0;t<o;)if((a=e[t++])<128)s[i++]=a;else if(4<(r=l[a]))s[i++]=65533,t+=r-1;else{for(a&=2===r?31:3===r?15:7;1<r&&t<o;)a=a<<6|63&e[t++],r--;1<r?s[i++]=65533:a<65536?s[i++]=a:(a-=65536,s[i++]=55296|a>>10&1023,s[i++]=56320|1023&a)}return s.length!==i&&(s.subarray?s=s.subarray(0,i):s.length=i),n.applyFromCharCode(s)}(e=n.transformTo(a.uint8array?"uint8array":"array",e))},n.inherits(d,o),d.prototype.processChunk=function(e){var t=n.transformTo(a.uint8array?"uint8array":"array",e.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var r=t;(t=new Uint8Array(r.length+this.leftOver.length)).set(this.leftOver,0),t.set(r,this.leftOver.length)}else t=this.leftOver.concat(t);this.leftOver=null}var o=function(e,t){var i;for((t=t||e.length)>e.length&&(t=e.length),i=t-1;0<=i&&128==(192&e[i]);)i--;return i<0?t:0===i?t:i+l[e[i]]>t?i:t}(t),s=t;o!==t.length&&(a.uint8array?(s=t.subarray(0,o),this.leftOver=t.subarray(o,t.length)):(s=t.slice(0,o),this.leftOver=t.slice(o,t.length))),this.push({data:i.utf8decode(s),meta:e.meta})},d.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:i.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},i.Utf8DecodeWorker=d,n.inherits(c,o),c.prototype.processChunk=function(e){this.push({data:i.utf8encode(e.data),meta:e.meta})},i.Utf8EncodeWorker=c},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,t,i){"use strict";var n=e("./support"),a=e("./base64"),r=e("./nodejsUtils"),o=e("./external");function l(e){return e}function s(e,t){for(var i=0;i<e.length;++i)t[i]=255&e.charCodeAt(i);return t}e("setimmediate"),i.newBlob=function(e,t){i.checkSupport("blob");try{return new Blob([e],{type:t})}catch(r){try{var n=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return n.append(e),n.getBlob(t)}catch(a){throw Error("Bug : can't construct the Blob.")}}};var d={stringifyByChunk:function(e,t,i){var n=[],a=0,r=e.length;if(r<=i)return String.fromCharCode.apply(null,e);for(;a<r;)"array"===t||"nodebuffer"===t?n.push(String.fromCharCode.apply(null,e.slice(a,Math.min(a+i,r)))):n.push(String.fromCharCode.apply(null,e.subarray(a,Math.min(a+i,r)))),a+=i;return n.join("")},stringifyByChar:function(e){for(var t="",i=0;i<e.length;i++)t+=String.fromCharCode(e[i]);return t},applyCanBeUsed:{uint8array:function(){try{return n.uint8array&&1===String.fromCharCode.apply(null,new Uint8Array(1)).length}catch(e){return!1}}(),nodebuffer:function(){try{return n.nodebuffer&&1===String.fromCharCode.apply(null,r.allocBuffer(1)).length}catch(e){return!1}}()}};function c(e){var t=65536,n=i.getTypeOf(e),a=!0;if("uint8array"===n?a=d.applyCanBeUsed.uint8array:"nodebuffer"===n&&(a=d.applyCanBeUsed.nodebuffer),a)for(;1<t;)try{return d.stringifyByChunk(e,n,t)}catch(r){t=Math.floor(t/2)}return d.stringifyByChar(e)}function u(e,t){for(var i=0;i<e.length;i++)t[i]=e[i];return t}i.applyFromCharCode=c;var f={};f.string={string:l,array:function(e){return s(e,Array(e.length))},arraybuffer:function(e){return f.string.uint8array(e).buffer},uint8array:function(e){return s(e,new Uint8Array(e.length))},nodebuffer:function(e){return s(e,r.allocBuffer(e.length))}},f.array={string:c,array:l,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return r.newBufferFrom(e)}},f.arraybuffer={string:function(e){return c(new Uint8Array(e))},array:function(e){return u(new Uint8Array(e),Array(e.byteLength))},arraybuffer:l,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return r.newBufferFrom(new Uint8Array(e))}},f.uint8array={string:c,array:function(e){return u(e,Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:l,nodebuffer:function(e){return r.newBufferFrom(e)}},f.nodebuffer={string:c,array:function(e){return u(e,Array(e.length))},arraybuffer:function(e){return f.nodebuffer.uint8array(e).buffer},uint8array:function(e){return u(e,new Uint8Array(e.length))},nodebuffer:l},i.transformTo=function(e,t){return(t=t||"",e)?(i.checkSupport(e),f[i.getTypeOf(t)][e](t)):t},i.resolve=function(e){for(var t=e.split("/"),i=[],n=0;n<t.length;n++){var a=t[n];"."===a||""===a&&0!==n&&n!==t.length-1||(".."===a?i.pop():i.push(a))}return i.join("/")},i.getTypeOf=function(e){return"string"==typeof e?"string":"[object Array]"===Object.prototype.toString.call(e)?"array":n.nodebuffer&&r.isBuffer(e)?"nodebuffer":n.uint8array&&e instanceof Uint8Array?"uint8array":n.arraybuffer&&e instanceof ArrayBuffer?"arraybuffer":void 0},i.checkSupport=function(e){if(!n[e.toLowerCase()])throw Error(e+" is not supported by this platform")},i.MAX_VALUE_16BITS=65535,i.MAX_VALUE_32BITS=-1,i.pretty=function(e){var t,i,n="";for(i=0;i<(e||"").length;i++)n+="\\x"+((t=e.charCodeAt(i))<16?"0":"")+t.toString(16).toUpperCase();return n},i.delay=function(e,t,i){setImmediate(function(){e.apply(i||null,t||[])})},i.inherits=function(e,t){function i(){}i.prototype=t.prototype,e.prototype=new i},i.extend=function(){var e,t,i={};for(e=0;e<arguments.length;e++)for(t in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],t)&&void 0===i[t]&&(i[t]=arguments[e][t]);return i},i.prepareContent=function(e,t,r,l,d){return o.Promise.resolve(t).then(function(e){return n.blob&&(e instanceof Blob||-1!==["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(e)))&&"undefined"!=typeof FileReader?new o.Promise(function(t,i){var n=new FileReader;n.onload=function(e){t(e.target.result)},n.onerror=function(e){i(e.target.error)},n.readAsArrayBuffer(e)}):e}).then(function(t){var c,u=i.getTypeOf(t);return u?("arraybuffer"===u?t=i.transformTo("uint8array",t):"string"===u&&(d?t=a.decode(t):r&&!0!==l&&(t=s(c=t,n.uint8array?new Uint8Array(c.length):Array(c.length)))),t):o.Promise.reject(Error("Can't read the data of '"+e+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,t,i){"use strict";var n=e("./reader/readerFor"),a=e("./utils"),r=e("./signature"),o=e("./zipEntry"),l=e("./support");function s(e){this.files=[],this.loadOptions=e}s.prototype={checkSignature:function(e){if(!this.reader.readAndCheckSignature(e)){this.reader.index-=4;var t=this.reader.readString(4);throw Error("Corrupted zip or bug: unexpected signature ("+a.pretty(t)+", expected "+a.pretty(e)+")")}},isSignature:function(e,t){var i=this.reader.index;this.reader.setIndex(e);var n=this.reader.readString(4)===t;return this.reader.setIndex(i),n},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var e=this.reader.readData(this.zipCommentLength),t=l.uint8array?"uint8array":"array",i=a.transformTo(t,e);this.zipComment=this.loadOptions.decodeFileName(i)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var e,t,i,n=this.zip64EndOfCentralSize-44;0<n;)e=this.reader.readInt(2),t=this.reader.readInt(4),i=this.reader.readData(t),this.zip64ExtensibleData[e]={id:e,length:t,value:i}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var e,t;for(e=0;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature(r.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8(),t.processAttributes()},readCentralDir:function(){var e;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(r.CENTRAL_FILE_HEADER);)(e=new o({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(e);if(this.centralDirRecords!==this.files.length&&0!==this.centralDirRecords&&0===this.files.length)throw Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(r.CENTRAL_DIRECTORY_END);if(e<0)throw this.isSignature(0,r.LOCAL_FILE_HEADER)?Error("Corrupted zip: can't find end of central directory"):Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(e);var t=e;if(this.checkSignature(r.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(e=this.reader.lastIndexOfSignature(r.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(e),this.checkSignature(r.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,r.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(r.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(r.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var i=this.centralDirOffset+this.centralDirSize;this.zip64&&(i+=20,i+=12+this.zip64EndOfCentralSize);var n=t-i;if(0<n)this.isSignature(t,r.CENTRAL_FILE_HEADER)||(this.reader.zero=n);else if(n<0)throw Error("Corrupted zip: missing "+Math.abs(n)+" bytes.")},prepareReader:function(e){this.reader=n(e)},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},t.exports=s},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,t,i){"use strict";var n=e("./reader/readerFor"),a=e("./utils"),r=e("./compressedObject"),o=e("./crc32"),l=e("./utf8"),s=e("./compressions"),d=e("./support");function c(e,t){this.options=e,this.loadOptions=t}c.prototype={isEncrypted:function(){return 1==(1&this.bitFlag)},useUTF8:function(){return 2048==(2048&this.bitFlag)},readLocalPart:function(e){var t,i;if(e.skip(22),this.fileNameLength=e.readInt(2),i=e.readInt(2),this.fileName=e.readData(this.fileNameLength),e.skip(i),-1===this.compressedSize||-1===this.uncompressedSize)throw Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(null===(t=function(e){for(var t in s)if(Object.prototype.hasOwnProperty.call(s,t)&&s[t].magic===e)return s[t];return null}(this.compressionMethod)))throw Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new r(this.compressedSize,this.uncompressedSize,this.crc32,t,e.readData(this.compressedSize))},readCentralPart:function(e){this.versionMadeBy=e.readInt(2),e.skip(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4);var t=e.readInt(2);if(this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw Error("Encrypted zip are not supported");e.skip(t),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var e=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),0==e&&(this.dosPermissions=63&this.externalFileAttributes),3==e&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileNameStr.slice(-1)||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var e=n(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(e){var t,i,n,a=e.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});e.index+4<a;)t=e.readInt(2),i=e.readInt(2),n=e.readData(i),this.extraFields[t]={id:t,length:i,value:n};e.setIndex(a)},handleUTF8:function(){var e=d.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=l.utf8decode(this.fileName),this.fileCommentStr=l.utf8decode(this.fileComment);else{var t=this.findExtraFieldUnicodePath();if(null!==t)this.fileNameStr=t;else{var i=a.transformTo(e,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(i)}var n=this.findExtraFieldUnicodeComment();if(null!==n)this.fileCommentStr=n;else{var r=a.transformTo(e,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(r)}}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789];if(e){var t=n(e.value);return 1!==t.readInt(1)?null:o(this.fileName)!==t.readInt(4)?null:l.utf8decode(t.readData(e.length-5))}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461];if(e){var t=n(e.value);return 1!==t.readInt(1)?null:o(this.fileComment)!==t.readInt(4)?null:l.utf8decode(t.readData(e.length-5))}return null}},t.exports=c},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,t,i){"use strict";function n(e,t,i){this.name=e,this.dir=i.dir,this.date=i.date,this.comment=i.comment,this.unixPermissions=i.unixPermissions,this.dosPermissions=i.dosPermissions,this._data=t,this._dataBinary=i.binary,this.options={compression:i.compression,compressionOptions:i.compressionOptions}}var a=e("./stream/StreamHelper"),r=e("./stream/DataWorker"),o=e("./utf8"),l=e("./compressedObject"),s=e("./stream/GenericWorker");n.prototype={internalStream:function(e){var t=null,i="string";try{if(!e)throw Error("No output type specified.");var n="string"===(i=e.toLowerCase())||"text"===i;"binarystring"!==i&&"text"!==i||(i="string"),t=this._decompressWorker();var r=!this._dataBinary;r&&!n&&(t=t.pipe(new o.Utf8EncodeWorker)),!r&&n&&(t=t.pipe(new o.Utf8DecodeWorker))}catch(l){(t=new s("error")).error(l)}return new a(t,i,"")},async:function(e,t){return this.internalStream(e).accumulate(t)},nodeStream:function(e,t){return this.internalStream(e||"nodebuffer").toNodejsStream(t)},_compressWorker:function(e,t){if(this._data instanceof l&&this._data.compression.magic===e.magic)return this._data.getCompressedWorker();var i=this._decompressWorker();return this._dataBinary||(i=i.pipe(new o.Utf8EncodeWorker)),l.createWorkerFrom(i,e,t)},_decompressWorker:function(){return this._data instanceof l?this._data.getContentWorker():this._data instanceof s?this._data:new r(this._data)}};for(var d=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],c=function(){throw Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},u=0;u<d.length;u++)n.prototype[d[u]]=c;t.exports=n},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,t,n){(function(e){"use strict";var i,n,a=e.MutationObserver||e.WebKitMutationObserver;if(a){var r=0,o=new a(c),l=e.document.createTextNode("");o.observe(l,{characterData:!0}),i=function(){l.data=r=++r%2}}else if(e.setImmediate||void 0===e.MessageChannel)i="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var t=e.document.createElement("script");t.onreadystatechange=function(){c(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(c,0)};else{var s=new e.MessageChannel;s.port1.onmessage=c,i=function(){s.port2.postMessage(0)}}var d=[];function c(){var e,t;n=!0;for(var i=d.length;i;){for(t=d,d=[],e=-1;++e<i;)t[e]();i=d.length}n=!1}t.exports=function(e){1!==d.push(e)||n||i()}}).call(this,void 0!==i.g?i.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],37:[function(e,t,i){"use strict";var n=e("immediate");function a(){}var r={},o=["REJECTED"],l=["FULFILLED"],s=["PENDING"];function d(e){if("function"!=typeof e)throw TypeError("resolver must be a function");this.state=s,this.queue=[],this.outcome=void 0,e!==a&&p(this,e)}function c(e,t,i){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof i&&(this.onRejected=i,this.callRejected=this.otherCallRejected)}function u(e,t,i){n(function(){var n;try{n=t(i)}catch(a){return r.reject(e,a)}n===e?r.reject(e,TypeError("Cannot resolve promise with itself")):r.resolve(e,n)})}function f(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments)}}function p(e,t){var i=!1;function n(t){i||(i=!0,r.reject(e,t))}function a(t){i||(i=!0,r.resolve(e,t))}var o=m(function(){t(a,n)});"error"===o.status&&n(o.value)}function m(e,t){var i={};try{i.value=e(t),i.status="success"}catch(n){i.status="error",i.value=n}return i}(t.exports=d).prototype.finally=function(e){if("function"!=typeof e)return this;var t=this.constructor;return this.then(function(i){return t.resolve(e()).then(function(){return i})},function(i){return t.resolve(e()).then(function(){throw i})})},d.prototype.catch=function(e){return this.then(null,e)},d.prototype.then=function(e,t){if("function"!=typeof e&&this.state===l||"function"!=typeof t&&this.state===o)return this;var i=new this.constructor(a);return this.state!==s?u(i,this.state===l?e:t,this.outcome):this.queue.push(new c(i,e,t)),i},c.prototype.callFulfilled=function(e){r.resolve(this.promise,e)},c.prototype.otherCallFulfilled=function(e){u(this.promise,this.onFulfilled,e)},c.prototype.callRejected=function(e){r.reject(this.promise,e)},c.prototype.otherCallRejected=function(e){u(this.promise,this.onRejected,e)},r.resolve=function(e,t){var i=m(f,t);if("error"===i.status)return r.reject(e,i.value);var n=i.value;if(n)p(e,n);else{e.state=l,e.outcome=t;for(var a=-1,o=e.queue.length;++a<o;)e.queue[a].callFulfilled(t)}return e},r.reject=function(e,t){e.state=o,e.outcome=t;for(var i=-1,n=e.queue.length;++i<n;)e.queue[i].callRejected(t);return e},d.resolve=function(e){return e instanceof this?e:r.resolve(new this(a),e)},d.reject=function(e){var t=new this(a);return r.reject(t,e)},d.all=function(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(TypeError("must be an array"));var i=e.length,n=!1;if(!i)return this.resolve([]);for(var o=Array(i),l=0,s=-1,d=new this(a);++s<i;)c(e[s],s);return d;function c(e,a){t.resolve(e).then(function(e){o[a]=e,++l!==i||n||(n=!0,r.resolve(d,o))},function(e){n||(n=!0,r.reject(d,e))})}},d.race=function(e){if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(TypeError("must be an array"));var t,i=e.length,n=!1;if(!i)return this.resolve([]);for(var o=-1,l=new this(a);++o<i;)t=e[o],this.resolve(t).then(function(e){n||(n=!0,r.resolve(l,e))},function(e){n||(n=!0,r.reject(l,e))});return l}},{immediate:36}],38:[function(e,t,i){"use strict";var n={};(0,e("./lib/utils/common").assign)(n,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),t.exports=n},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,t,i){"use strict";var n=e("./zlib/deflate"),a=e("./utils/common"),r=e("./utils/strings"),o=e("./zlib/messages"),l=e("./zlib/zstream"),s=Object.prototype.toString;function d(e){if(!(this instanceof d))return new d(e);this.options=a.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},e||{});var t,i=this.options;i.raw&&0<i.windowBits?i.windowBits=-i.windowBits:i.gzip&&0<i.windowBits&&i.windowBits<16&&(i.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var c=n.deflateInit2(this.strm,i.level,i.method,i.windowBits,i.memLevel,i.strategy);if(0!==c)throw Error(o[c]);if(i.header&&n.deflateSetHeader(this.strm,i.header),i.dictionary){if(t="string"==typeof i.dictionary?r.string2buf(i.dictionary):"[object ArrayBuffer]"===s.call(i.dictionary)?new Uint8Array(i.dictionary):i.dictionary,0!==(c=n.deflateSetDictionary(this.strm,t)))throw Error(o[c]);this._dict_set=!0}}function c(e,t){var i=new d(t);if(i.push(e,!0),i.err)throw i.msg||o[i.err];return i.result}d.prototype.push=function(e,t){var i,o,l=this.strm,d=this.options.chunkSize;if(this.ended)return!1;o=t===~~t?t:!0===t?4:0,"string"==typeof e?l.input=r.string2buf(e):"[object ArrayBuffer]"===s.call(e)?l.input=new Uint8Array(e):l.input=e,l.next_in=0,l.avail_in=l.input.length;do{if(0===l.avail_out&&(l.output=new a.Buf8(d),l.next_out=0,l.avail_out=d),1!==(i=n.deflate(l,o))&&0!==i)return this.onEnd(i),this.ended=!0,!1;0!==l.avail_out&&(0!==l.avail_in||4!==o&&2!==o)||("string"===this.options.to?this.onData(r.buf2binstring(a.shrinkBuf(l.output,l.next_out))):this.onData(a.shrinkBuf(l.output,l.next_out)))}while((0<l.avail_in||0===l.avail_out)&&1!==i);return 4===o?(i=n.deflateEnd(this.strm),this.onEnd(i),this.ended=!0,0===i):2!==o||(this.onEnd(0),l.avail_out=0,!0)},d.prototype.onData=function(e){this.chunks.push(e)},d.prototype.onEnd=function(e){0===e&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},i.Deflate=d,i.deflate=c,i.deflateRaw=function(e,t){return(t=t||{}).raw=!0,c(e,t)},i.gzip=function(e,t){return(t=t||{}).gzip=!0,c(e,t)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,t,i){"use strict";var n=e("./zlib/inflate"),a=e("./utils/common"),r=e("./utils/strings"),o=e("./zlib/constants"),l=e("./zlib/messages"),s=e("./zlib/zstream"),d=e("./zlib/gzheader"),c=Object.prototype.toString;function u(e){if(!(this instanceof u))return new u(e);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;var i=n.inflateInit2(this.strm,t.windowBits);if(i!==o.Z_OK)throw Error(l[i]);this.header=new d,n.inflateGetHeader(this.strm,this.header)}function f(e,t){var i=new u(t);if(i.push(e,!0),i.err)throw i.msg||l[i.err];return i.result}u.prototype.push=function(e,t){var i,l,s,d,u,f,p=this.strm,m=this.options.chunkSize,h=this.options.dictionary,v=!1;if(this.ended)return!1;l=t===~~t?t:!0===t?o.Z_FINISH:o.Z_NO_FLUSH,"string"==typeof e?p.input=r.binstring2buf(e):"[object ArrayBuffer]"===c.call(e)?p.input=new Uint8Array(e):p.input=e,p.next_in=0,p.avail_in=p.input.length;do{if(0===p.avail_out&&(p.output=new a.Buf8(m),p.next_out=0,p.avail_out=m),(i=n.inflate(p,o.Z_NO_FLUSH))===o.Z_NEED_DICT&&h&&(f="string"==typeof h?r.string2buf(h):"[object ArrayBuffer]"===c.call(h)?new Uint8Array(h):h,i=n.inflateSetDictionary(this.strm,f)),i===o.Z_BUF_ERROR&&!0===v&&(i=o.Z_OK,v=!1),i!==o.Z_STREAM_END&&i!==o.Z_OK)return this.onEnd(i),this.ended=!0,!1;p.next_out&&(0!==p.avail_out&&i!==o.Z_STREAM_END&&(0!==p.avail_in||l!==o.Z_FINISH&&l!==o.Z_SYNC_FLUSH)||("string"===this.options.to?(s=r.utf8border(p.output,p.next_out),d=p.next_out-s,u=r.buf2string(p.output,s),p.next_out=d,p.avail_out=m-d,d&&a.arraySet(p.output,p.output,s,d,0),this.onData(u)):this.onData(a.shrinkBuf(p.output,p.next_out)))),0===p.avail_in&&0===p.avail_out&&(v=!0)}while((0<p.avail_in||0===p.avail_out)&&i!==o.Z_STREAM_END);return i===o.Z_STREAM_END&&(l=o.Z_FINISH),l===o.Z_FINISH?(i=n.inflateEnd(this.strm),this.onEnd(i),this.ended=!0,i===o.Z_OK):l!==o.Z_SYNC_FLUSH||(this.onEnd(o.Z_OK),p.avail_out=0,!0)},u.prototype.onData=function(e){this.chunks.push(e)},u.prototype.onEnd=function(e){e===o.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},i.Inflate=u,i.inflate=f,i.inflateRaw=function(e,t){return(t=t||{}).raw=!0,f(e,t)},i.ungzip=f},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,t,i){"use strict";var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;i.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var i=t.shift();if(i){if("object"!=typeof i)throw TypeError(i+"must be non-object");for(var n in i)i.hasOwnProperty(n)&&(e[n]=i[n])}}return e},i.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var a={arraySet:function(e,t,i,n,a){if(t.subarray&&e.subarray)e.set(t.subarray(i,i+n),a);else for(var r=0;r<n;r++)e[a+r]=t[i+r]},flattenChunks:function(e){var t,i,n,a,r,o;for(t=n=0,i=e.length;t<i;t++)n+=e[t].length;for(o=new Uint8Array(n),t=a=0,i=e.length;t<i;t++)r=e[t],o.set(r,a),a+=r.length;return o}},r={arraySet:function(e,t,i,n,a){for(var r=0;r<n;r++)e[a+r]=t[i+r]},flattenChunks:function(e){return[].concat.apply([],e)}};i.setTyped=function(e){e?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,a)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,r))},i.setTyped(n)},{}],42:[function(e,t,i){"use strict";var n=e("./common"),a=!0,r=!0;try{String.fromCharCode.apply(null,[0])}catch(o){a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(l){r=!1}for(var s=new n.Buf8(256),d=0;d<256;d++)s[d]=252<=d?6:248<=d?5:240<=d?4:224<=d?3:192<=d?2:1;function c(e,t){if(t<65537&&(e.subarray&&r||!e.subarray&&a))return String.fromCharCode.apply(null,n.shrinkBuf(e,t));for(var i="",o=0;o<t;o++)i+=String.fromCharCode(e[o]);return i}s[254]=s[254]=1,i.string2buf=function(e){var t,i,a,r,o,l=e.length,s=0;for(r=0;r<l;r++)55296==(64512&(i=e.charCodeAt(r)))&&r+1<l&&56320==(64512&(a=e.charCodeAt(r+1)))&&(i=65536+(i-55296<<10)+(a-56320),r++),s+=i<128?1:i<2048?2:i<65536?3:4;for(t=new n.Buf8(s),r=o=0;o<s;r++)55296==(64512&(i=e.charCodeAt(r)))&&r+1<l&&56320==(64512&(a=e.charCodeAt(r+1)))&&(i=65536+(i-55296<<10)+(a-56320),r++),i<128?t[o++]=i:(i<2048?t[o++]=192|i>>>6:(i<65536?t[o++]=224|i>>>12:(t[o++]=240|i>>>18,t[o++]=128|i>>>12&63),t[o++]=128|i>>>6&63),t[o++]=128|63&i);return t},i.buf2binstring=function(e){return c(e,e.length)},i.binstring2buf=function(e){for(var t=new n.Buf8(e.length),i=0,a=t.length;i<a;i++)t[i]=e.charCodeAt(i);return t},i.buf2string=function(e,t){var i,n,a,r,o=t||e.length,l=Array(2*o);for(i=n=0;i<o;)if((a=e[i++])<128)l[n++]=a;else if(4<(r=s[a]))l[n++]=65533,i+=r-1;else{for(a&=2===r?31:3===r?15:7;1<r&&i<o;)a=a<<6|63&e[i++],r--;1<r?l[n++]=65533:a<65536?l[n++]=a:(a-=65536,l[n++]=55296|a>>10&1023,l[n++]=56320|1023&a)}return c(l,n)},i.utf8border=function(e,t){var i;for((t=t||e.length)>e.length&&(t=e.length),i=t-1;0<=i&&128==(192&e[i]);)i--;return i<0?t:0===i?t:i+s[e[i]]>t?i:t}},{"./common":41}],43:[function(e,t,i){"use strict";t.exports=function(e,t,i,n){for(var a=65535&e|0,r=e>>>16&65535|0,o=0;0!==i;){for(i-=o=2e3<i?2e3:i;r=r+(a=a+t[n++]|0)|0,--o;);a%=65521,r%=65521}return a|r<<16|0}},{}],44:[function(e,t,i){"use strict";t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,t,i){"use strict";var n=function(){for(var e,t=[],i=0;i<256;i++){e=i;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[i]=e}return t}();t.exports=function(e,t,i,a){var r=a+i;e^=-1;for(var o=a;o<r;o++)e=e>>>8^n[255&(e^t[o])];return -1^e}},{}],46:[function(e,t,i){"use strict";var n,a=e("../utils/common"),r=e("./trees"),o=e("./adler32"),l=e("./crc32"),s=e("./messages");function d(e,t){return e.msg=s[t],t}function c(e){return(e<<1)-(4<e?9:0)}function u(e){for(var t=e.length;0<=--t;)e[t]=0}function f(e){var t=e.state,i=t.pending;i>e.avail_out&&(i=e.avail_out),0!==i&&(a.arraySet(e.output,t.pending_buf,t.pending_out,i,e.next_out),e.next_out+=i,t.pending_out+=i,e.total_out+=i,e.avail_out-=i,t.pending-=i,0===t.pending&&(t.pending_out=0))}function p(e,t){r._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,f(e.strm)}function m(e,t){e.pending_buf[e.pending++]=t}function h(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function v(e,t){var i,n,a=e.max_chain_length,r=e.strstart,o=e.prev_length,l=e.nice_match,s=e.strstart>e.w_size-262?e.strstart-(e.w_size-262):0,d=e.window,c=e.w_mask,u=e.prev,f=e.strstart+258,p=d[r+o-1],m=d[r+o];e.prev_length>=e.good_match&&(a>>=2),l>e.lookahead&&(l=e.lookahead);do if(d[(i=t)+o]===m&&d[i+o-1]===p&&d[i]===d[r]&&d[++i]===d[r+1]){r+=2,i++;do;while(d[++r]===d[++i]&&d[++r]===d[++i]&&d[++r]===d[++i]&&d[++r]===d[++i]&&d[++r]===d[++i]&&d[++r]===d[++i]&&d[++r]===d[++i]&&d[++r]===d[++i]&&r<f);if(n=258-(f-r),r=f-258,o<n){if(e.match_start=t,l<=(o=n))break;p=d[r+o-1],m=d[r+o]}}while((t=u[t&c])>s&&0!=--a);return o<=e.lookahead?o:e.lookahead}function b(e){var t,i,n,r,s,d,c,u,f,p,m=e.w_size;do{if(r=e.window_size-e.lookahead-e.strstart,e.strstart>=m+(m-262)){for(a.arraySet(e.window,e.window,m,m,0),e.match_start-=m,e.strstart-=m,e.block_start-=m,t=i=e.hash_size;n=e.head[--t],e.head[t]=m<=n?n-m:0,--i;);for(t=i=m;n=e.prev[--t],e.prev[t]=m<=n?n-m:0,--i;);r+=m}if(0===e.strm.avail_in)break;if(d=e.strm,c=e.window,u=e.strstart+e.lookahead,p=void 0,(f=r)<(p=d.avail_in)&&(p=f),i=0===p?0:(d.avail_in-=p,a.arraySet(c,d.input,d.next_in,p,u),1===d.state.wrap?d.adler=o(d.adler,c,p,u):2===d.state.wrap&&(d.adler=l(d.adler,c,p,u)),d.next_in+=p,d.total_in+=p,p),e.lookahead+=i,e.lookahead+e.insert>=3)for(s=e.strstart-e.insert,e.ins_h=e.window[s],e.ins_h=(e.ins_h<<e.hash_shift^e.window[s+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[s+3-1])&e.hash_mask,e.prev[s&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=s,s++,e.insert--,!(e.lookahead+e.insert<3)););}while(e.lookahead<262&&0!==e.strm.avail_in)}function g(e,t){for(var i,n;;){if(e.lookahead<262){if(b(e),e.lookahead<262&&0===t)return 1;if(0===e.lookahead)break}if(i=0,e.lookahead>=3&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+3-1])&e.hash_mask,i=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==i&&e.strstart-i<=e.w_size-262&&(e.match_length=v(e,i)),e.match_length>=3){if(n=r._tr_tally(e,e.strstart-e.match_start,e.match_length-3),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=3){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+3-1])&e.hash_mask,i=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,0!=--e.match_length;);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask}else n=r._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(n&&(p(e,!1),0===e.strm.avail_out))return 1}return e.insert=e.strstart<2?e.strstart:2,4===t?(p(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(p(e,!1),0===e.strm.avail_out)?1:2}function x(e,t){for(var i,n,a;;){if(e.lookahead<262){if(b(e),e.lookahead<262&&0===t)return 1;if(0===e.lookahead)break}if(i=0,e.lookahead>=3&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+3-1])&e.hash_mask,i=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=2,0!==i&&e.prev_length<e.max_lazy_match&&e.strstart-i<=e.w_size-262&&(e.match_length=v(e,i),e.match_length<=5&&(1===e.strategy||3===e.match_length&&4096<e.strstart-e.match_start)&&(e.match_length=2)),e.prev_length>=3&&e.match_length<=e.prev_length){for(a=e.strstart+e.lookahead-3,n=r._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-3),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=a&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+3-1])&e.hash_mask,i=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!=--e.prev_length;);if(e.match_available=0,e.match_length=2,e.strstart++,n&&(p(e,!1),0===e.strm.avail_out))return 1}else if(e.match_available){if((n=r._tr_tally(e,0,e.window[e.strstart-1]))&&p(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return 1}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(n=r._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<2?e.strstart:2,4===t?(p(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(p(e,!1),0===e.strm.avail_out)?1:2}function y(e,t,i,n,a){this.good_length=e,this.max_lazy=t,this.nice_length=i,this.max_chain=n,this.func=a}function w(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=8,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(1146),this.dyn_dtree=new a.Buf16(122),this.bl_tree=new a.Buf16(78),u(this.dyn_ltree),u(this.dyn_dtree),u(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(16),this.heap=new a.Buf16(573),u(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(573),u(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function A(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=2,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?42:113,e.adler=2===t.wrap?0:1,t.last_flush=0,r._tr_init(t),0):d(e,-2)}function _(e){var t,i=A(e);return 0===i&&((t=e.state).window_size=2*t.w_size,u(t.head),t.max_lazy_match=n[t.level].max_lazy,t.good_match=n[t.level].good_length,t.nice_match=n[t.level].nice_length,t.max_chain_length=n[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=2,t.match_available=0,t.ins_h=0),i}function C(e,t,i,n,r,o){if(!e)return -2;var l=1;if(-1===t&&(t=6),n<0?(l=0,n=-n):15<n&&(l=2,n-=16),r<1||9<r||8!==i||n<8||15<n||t<0||9<t||o<0||4<o)return d(e,-2);8===n&&(n=9);var s=new w;return(e.state=s).strm=e,s.wrap=l,s.gzhead=null,s.w_bits=n,s.w_size=1<<s.w_bits,s.w_mask=s.w_size-1,s.hash_bits=r+7,s.hash_size=1<<s.hash_bits,s.hash_mask=s.hash_size-1,s.hash_shift=~~((s.hash_bits+3-1)/3),s.window=new a.Buf8(2*s.w_size),s.head=new a.Buf16(s.hash_size),s.prev=new a.Buf16(s.w_size),s.lit_bufsize=1<<r+6,s.pending_buf_size=4*s.lit_bufsize,s.pending_buf=new a.Buf8(s.pending_buf_size),s.d_buf=1*s.lit_bufsize,s.l_buf=3*s.lit_bufsize,s.level=t,s.strategy=o,s.method=i,_(e)}n=[new y(0,0,0,0,function(e,t){var i=65535;for(i>e.pending_buf_size-5&&(i=e.pending_buf_size-5);;){if(e.lookahead<=1){if(b(e),0===e.lookahead&&0===t)return 1;if(0===e.lookahead)break}e.strstart+=e.lookahead,e.lookahead=0;var n=e.block_start+i;if((0===e.strstart||e.strstart>=n)&&(e.lookahead=e.strstart-n,e.strstart=n,p(e,!1),0===e.strm.avail_out)||e.strstart-e.block_start>=e.w_size-262&&(p(e,!1),0===e.strm.avail_out))return 1}return e.insert=0,4===t?(p(e,!0),0===e.strm.avail_out?3:4):(e.strstart>e.block_start&&(p(e,!1),e.strm.avail_out),1)}),new y(4,4,8,4,g),new y(4,5,16,8,g),new y(4,6,32,32,g),new y(4,4,16,16,x),new y(8,16,32,32,x),new y(8,16,128,128,x),new y(8,32,128,256,x),new y(32,128,258,1024,x),new y(32,258,258,4096,x)],i.deflateInit=function(e,t){return C(e,t,8,15,8,0)},i.deflateInit2=C,i.deflateReset=_,i.deflateResetKeep=A,i.deflateSetHeader=function(e,t){return e&&e.state?2!==e.state.wrap?-2:(e.state.gzhead=t,0):-2},i.deflate=function(e,t){var i,a,o,s;if(!e||!e.state||5<t||t<0)return e?d(e,-2):-2;if(a=e.state,!e.output||!e.input&&0!==e.avail_in||666===a.status&&4!==t)return d(e,0===e.avail_out?-5:-2);if(a.strm=e,i=a.last_flush,a.last_flush=t,42===a.status){if(2===a.wrap)e.adler=0,m(a,31),m(a,139),m(a,8),a.gzhead?(m(a,(a.gzhead.text?1:0)+(a.gzhead.hcrc?2:0)+(a.gzhead.extra?4:0)+(a.gzhead.name?8:0)+(a.gzhead.comment?16:0)),m(a,255&a.gzhead.time),m(a,a.gzhead.time>>8&255),m(a,a.gzhead.time>>16&255),m(a,a.gzhead.time>>24&255),m(a,9===a.level?2:2<=a.strategy||a.level<2?4:0),m(a,255&a.gzhead.os),a.gzhead.extra&&a.gzhead.extra.length&&(m(a,255&a.gzhead.extra.length),m(a,a.gzhead.extra.length>>8&255)),a.gzhead.hcrc&&(e.adler=l(e.adler,a.pending_buf,a.pending,0)),a.gzindex=0,a.status=69):(m(a,0),m(a,0),m(a,0),m(a,0),m(a,0),m(a,9===a.level?2:2<=a.strategy||a.level<2?4:0),m(a,3),a.status=113);else{var v=8+(a.w_bits-8<<4)<<8;v|=(2<=a.strategy||a.level<2?0:a.level<6?1:6===a.level?2:3)<<6,0!==a.strstart&&(v|=32),v+=31-v%31,a.status=113,h(a,v),0!==a.strstart&&(h(a,e.adler>>>16),h(a,65535&e.adler)),e.adler=1}}if(69===a.status){if(a.gzhead.extra){for(o=a.pending;a.gzindex<(65535&a.gzhead.extra.length)&&(a.pending!==a.pending_buf_size||(a.gzhead.hcrc&&a.pending>o&&(e.adler=l(e.adler,a.pending_buf,a.pending-o,o)),f(e),o=a.pending,a.pending!==a.pending_buf_size));)m(a,255&a.gzhead.extra[a.gzindex]),a.gzindex++;a.gzhead.hcrc&&a.pending>o&&(e.adler=l(e.adler,a.pending_buf,a.pending-o,o)),a.gzindex===a.gzhead.extra.length&&(a.gzindex=0,a.status=73)}else a.status=73}if(73===a.status){if(a.gzhead.name){o=a.pending;do{if(a.pending===a.pending_buf_size&&(a.gzhead.hcrc&&a.pending>o&&(e.adler=l(e.adler,a.pending_buf,a.pending-o,o)),f(e),o=a.pending,a.pending===a.pending_buf_size)){s=1;break}s=a.gzindex<a.gzhead.name.length?255&a.gzhead.name.charCodeAt(a.gzindex++):0,m(a,s)}while(0!==s);a.gzhead.hcrc&&a.pending>o&&(e.adler=l(e.adler,a.pending_buf,a.pending-o,o)),0===s&&(a.gzindex=0,a.status=91)}else a.status=91}if(91===a.status){if(a.gzhead.comment){o=a.pending;do{if(a.pending===a.pending_buf_size&&(a.gzhead.hcrc&&a.pending>o&&(e.adler=l(e.adler,a.pending_buf,a.pending-o,o)),f(e),o=a.pending,a.pending===a.pending_buf_size)){s=1;break}s=a.gzindex<a.gzhead.comment.length?255&a.gzhead.comment.charCodeAt(a.gzindex++):0,m(a,s)}while(0!==s);a.gzhead.hcrc&&a.pending>o&&(e.adler=l(e.adler,a.pending_buf,a.pending-o,o)),0===s&&(a.status=103)}else a.status=103}if(103===a.status&&(a.gzhead.hcrc?(a.pending+2>a.pending_buf_size&&f(e),a.pending+2<=a.pending_buf_size&&(m(a,255&e.adler),m(a,e.adler>>8&255),e.adler=0,a.status=113)):a.status=113),0!==a.pending){if(f(e),0===e.avail_out)return a.last_flush=-1,0}else if(0===e.avail_in&&c(t)<=c(i)&&4!==t)return d(e,-5);if(666===a.status&&0!==e.avail_in)return d(e,-5);if(0!==e.avail_in||0!==a.lookahead||0!==t&&666!==a.status){var g=2===a.strategy?function(e,t){for(var i;;){if(0===e.lookahead&&(b(e),0===e.lookahead)){if(0===t)return 1;break}if(e.match_length=0,i=r._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,i&&(p(e,!1),0===e.strm.avail_out))return 1}return e.insert=0,4===t?(p(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(p(e,!1),0===e.strm.avail_out)?1:2}(a,t):3===a.strategy?function(e,t){for(var i,n,a,o,l=e.window;;){if(e.lookahead<=258){if(b(e),e.lookahead<=258&&0===t)return 1;if(0===e.lookahead)break}if(e.match_length=0,e.lookahead>=3&&0<e.strstart&&(n=l[a=e.strstart-1])===l[++a]&&n===l[++a]&&n===l[++a]){o=e.strstart+258;do;while(n===l[++a]&&n===l[++a]&&n===l[++a]&&n===l[++a]&&n===l[++a]&&n===l[++a]&&n===l[++a]&&n===l[++a]&&a<o);e.match_length=258-(o-a),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=3?(i=r._tr_tally(e,1,e.match_length-3),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(i=r._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),i&&(p(e,!1),0===e.strm.avail_out))return 1}return e.insert=0,4===t?(p(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(p(e,!1),0===e.strm.avail_out)?1:2}(a,t):n[a.level].func(a,t);if(3!==g&&4!==g||(a.status=666),1===g||3===g)return 0===e.avail_out&&(a.last_flush=-1),0;if(2===g&&(1===t?r._tr_align(a):5!==t&&(r._tr_stored_block(a,0,0,!1),3===t&&(u(a.head),0===a.lookahead&&(a.strstart=0,a.block_start=0,a.insert=0))),f(e),0===e.avail_out))return a.last_flush=-1,0}return 4!==t?0:a.wrap<=0?1:(2===a.wrap?(m(a,255&e.adler),m(a,e.adler>>8&255),m(a,e.adler>>16&255),m(a,e.adler>>24&255),m(a,255&e.total_in),m(a,e.total_in>>8&255),m(a,e.total_in>>16&255),m(a,e.total_in>>24&255)):(h(a,e.adler>>>16),h(a,65535&e.adler)),f(e),0<a.wrap&&(a.wrap=-a.wrap),0!==a.pending?0:1)},i.deflateEnd=function(e){var t;return e&&e.state?42!==(t=e.state.status)&&69!==t&&73!==t&&91!==t&&103!==t&&113!==t&&666!==t?d(e,-2):(e.state=null,113===t?d(e,-3):0):-2},i.deflateSetDictionary=function(e,t){var i,n,r,l,s,d,c,f,p=t.length;if(!e||!e.state||2===(l=(i=e.state).wrap)||1===l&&42!==i.status||i.lookahead)return -2;for(1===l&&(e.adler=o(e.adler,t,p,0)),i.wrap=0,p>=i.w_size&&(0===l&&(u(i.head),i.strstart=0,i.block_start=0,i.insert=0),f=new a.Buf8(i.w_size),a.arraySet(f,t,p-i.w_size,i.w_size,0),t=f,p=i.w_size),s=e.avail_in,d=e.next_in,c=e.input,e.avail_in=p,e.next_in=0,e.input=t,b(i);i.lookahead>=3;){for(n=i.strstart,r=i.lookahead-2;i.ins_h=(i.ins_h<<i.hash_shift^i.window[n+3-1])&i.hash_mask,i.prev[n&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=n,n++,--r;);i.strstart=n,i.lookahead=2,b(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=2,i.match_available=0,e.next_in=d,e.input=c,e.avail_in=s,i.wrap=l,0},i.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,t,i){"use strict";t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,t,i){"use strict";t.exports=function(e,t){var i,n,a,r,o,l,s,d,c,u,f,p,m,h,v,b,g,x,y,w,A,_,C,E,S;i=e.state,n=e.next_in,E=e.input,a=n+(e.avail_in-5),r=e.next_out,S=e.output,o=r-(t-e.avail_out),l=r+(e.avail_out-257),s=i.dmax,d=i.wsize,c=i.whave,u=i.wnext,f=i.window,p=i.hold,m=i.bits,h=i.lencode,v=i.distcode,b=(1<<i.lenbits)-1,g=(1<<i.distbits)-1;e:do{m<15&&(p+=E[n++]<<m,m+=8,p+=E[n++]<<m,m+=8),x=h[p&b];t:for(;;){if(p>>>=y=x>>>24,m-=y,0==(y=x>>>16&255))S[r++]=65535&x;else{if(!(16&y)){if(0==(64&y)){x=h[(65535&x)+(p&(1<<y)-1)];continue t}if(32&y){i.mode=12;break e}e.msg="invalid literal/length code",i.mode=30;break e}w=65535&x,(y&=15)&&(m<y&&(p+=E[n++]<<m,m+=8),w+=p&(1<<y)-1,p>>>=y,m-=y),m<15&&(p+=E[n++]<<m,m+=8,p+=E[n++]<<m,m+=8),x=v[p&g];r:for(;;){if(p>>>=y=x>>>24,m-=y,!(16&(y=x>>>16&255))){if(0==(64&y)){x=v[(65535&x)+(p&(1<<y)-1)];continue r}e.msg="invalid distance code",i.mode=30;break e}if(A=65535&x,m<(y&=15)&&(p+=E[n++]<<m,(m+=8)<y&&(p+=E[n++]<<m,m+=8)),s<(A+=p&(1<<y)-1)){e.msg="invalid distance too far back",i.mode=30;break e}if(p>>>=y,m-=y,(y=r-o)<A){if(c<(y=A-y)&&i.sane){e.msg="invalid distance too far back",i.mode=30;break e}if(C=f,(_=0)===u){if(_+=d-y,y<w){for(w-=y;S[r++]=f[_++],--y;);_=r-A,C=S}}else if(u<y){if(_+=d+u-y,(y-=u)<w){for(w-=y;S[r++]=f[_++],--y;);if(_=0,u<w){for(w-=y=u;S[r++]=f[_++],--y;);_=r-A,C=S}}}else if(_+=u-y,y<w){for(w-=y;S[r++]=f[_++],--y;);_=r-A,C=S}for(;2<w;)S[r++]=C[_++],S[r++]=C[_++],S[r++]=C[_++],w-=3;w&&(S[r++]=C[_++],1<w&&(S[r++]=C[_++]))}else{for(_=r-A;S[r++]=S[_++],S[r++]=S[_++],S[r++]=S[_++],2<(w-=3););w&&(S[r++]=S[_++],1<w&&(S[r++]=S[_++]))}break}}break}}while(n<a&&r<l);n-=w=m>>3,p&=(1<<(m-=w<<3))-1,e.next_in=n,e.next_out=r,e.avail_in=n<a?a-n+5:5-(n-a),e.avail_out=r<l?l-r+257:257-(r-l),i.hold=p,i.bits=m}},{}],49:[function(e,t,i){"use strict";var n=e("../utils/common"),a=e("./adler32"),r=e("./crc32"),o=e("./inffast"),l=e("./inftrees");function s(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function d(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new n.Buf16(320),this.work=new n.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function c(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=1,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new n.Buf32(852),t.distcode=t.distdyn=new n.Buf32(592),t.sane=1,t.back=-1,0):-2}function u(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,c(e)):-2}function f(e,t){var i,n;return e&&e.state?(n=e.state,t<0?(i=0,t=-t):(i=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?-2:(null!==n.window&&n.wbits!==t&&(n.window=null),n.wrap=i,n.wbits=t,u(e))):-2}function p(e,t){var i,n;return e?(n=new d,(e.state=n).window=null,0!==(i=f(e,t))&&(e.state=null),i):-2}var m,h,v=!0;function b(e){if(v){var t;for(m=new n.Buf32(512),h=new n.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(l(1,e.lens,0,288,m,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;l(2,e.lens,0,32,h,0,e.work,{bits:5}),v=!1}e.lencode=m,e.lenbits=9,e.distcode=h,e.distbits=5}function g(e,t,i,a){var r,o=e.state;return null===o.window&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new n.Buf8(o.wsize)),a>=o.wsize?(n.arraySet(o.window,t,i-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):(a<(r=o.wsize-o.wnext)&&(r=a),n.arraySet(o.window,t,i-a,r,o.wnext),(a-=r)?(n.arraySet(o.window,t,i-a,a,0),o.wnext=a,o.whave=o.wsize):(o.wnext+=r,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=r))),0}i.inflateReset=u,i.inflateReset2=f,i.inflateResetKeep=c,i.inflateInit=function(e){return p(e,15)},i.inflateInit2=p,i.inflate=function(e,t){var i,d,c,u,f,p,m,h,v,x,y,w,A,_,C,E,S,k,T,O,I,M,D,N,L=0,R=new n.Buf8(4),P=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return -2;12===(i=e.state).mode&&(i.mode=13),f=e.next_out,c=e.output,m=e.avail_out,u=e.next_in,d=e.input,p=e.avail_in,h=i.hold,v=i.bits,x=p,y=m,M=0;e:for(;;)switch(i.mode){case 1:if(0===i.wrap){i.mode=13;break}for(;v<16;){if(0===p)break e;p--,h+=d[u++]<<v,v+=8}if(2&i.wrap&&35615===h){R[i.check=0]=255&h,R[1]=h>>>8&255,i.check=r(i.check,R,2,0),v=h=0,i.mode=2;break}if(i.flags=0,i.head&&(i.head.done=!1),!(1&i.wrap)||(((255&h)<<8)+(h>>8))%31){e.msg="incorrect header check",i.mode=30;break}if(8!=(15&h)){e.msg="unknown compression method",i.mode=30;break}if(v-=4,I=8+(15&(h>>>=4)),0===i.wbits)i.wbits=I;else if(I>i.wbits){e.msg="invalid window size",i.mode=30;break}i.dmax=1<<I,e.adler=i.check=1,i.mode=512&h?10:12,v=h=0;break;case 2:for(;v<16;){if(0===p)break e;p--,h+=d[u++]<<v,v+=8}if(i.flags=h,8!=(255&i.flags)){e.msg="unknown compression method",i.mode=30;break}if(57344&i.flags){e.msg="unknown header flags set",i.mode=30;break}i.head&&(i.head.text=h>>8&1),512&i.flags&&(R[0]=255&h,R[1]=h>>>8&255,i.check=r(i.check,R,2,0)),v=h=0,i.mode=3;case 3:for(;v<32;){if(0===p)break e;p--,h+=d[u++]<<v,v+=8}i.head&&(i.head.time=h),512&i.flags&&(R[0]=255&h,R[1]=h>>>8&255,R[2]=h>>>16&255,R[3]=h>>>24&255,i.check=r(i.check,R,4,0)),v=h=0,i.mode=4;case 4:for(;v<16;){if(0===p)break e;p--,h+=d[u++]<<v,v+=8}i.head&&(i.head.xflags=255&h,i.head.os=h>>8),512&i.flags&&(R[0]=255&h,R[1]=h>>>8&255,i.check=r(i.check,R,2,0)),v=h=0,i.mode=5;case 5:if(1024&i.flags){for(;v<16;){if(0===p)break e;p--,h+=d[u++]<<v,v+=8}i.length=h,i.head&&(i.head.extra_len=h),512&i.flags&&(R[0]=255&h,R[1]=h>>>8&255,i.check=r(i.check,R,2,0)),v=h=0}else i.head&&(i.head.extra=null);i.mode=6;case 6:if(1024&i.flags&&(p<(w=i.length)&&(w=p),w&&(i.head&&(I=i.head.extra_len-i.length,i.head.extra||(i.head.extra=Array(i.head.extra_len)),n.arraySet(i.head.extra,d,u,w,I)),512&i.flags&&(i.check=r(i.check,d,w,u)),p-=w,u+=w,i.length-=w),i.length))break e;i.length=0,i.mode=7;case 7:if(2048&i.flags){if(0===p)break e;for(w=0;I=d[u+w++],i.head&&I&&i.length<65536&&(i.head.name+=String.fromCharCode(I)),I&&w<p;);if(512&i.flags&&(i.check=r(i.check,d,w,u)),p-=w,u+=w,I)break e}else i.head&&(i.head.name=null);i.length=0,i.mode=8;case 8:if(4096&i.flags){if(0===p)break e;for(w=0;I=d[u+w++],i.head&&I&&i.length<65536&&(i.head.comment+=String.fromCharCode(I)),I&&w<p;);if(512&i.flags&&(i.check=r(i.check,d,w,u)),p-=w,u+=w,I)break e}else i.head&&(i.head.comment=null);i.mode=9;case 9:if(512&i.flags){for(;v<16;){if(0===p)break e;p--,h+=d[u++]<<v,v+=8}if(h!==(65535&i.check)){e.msg="header crc mismatch",i.mode=30;break}v=h=0}i.head&&(i.head.hcrc=i.flags>>9&1,i.head.done=!0),e.adler=i.check=0,i.mode=12;break;case 10:for(;v<32;){if(0===p)break e;p--,h+=d[u++]<<v,v+=8}e.adler=i.check=s(h),v=h=0,i.mode=11;case 11:if(0===i.havedict)return e.next_out=f,e.avail_out=m,e.next_in=u,e.avail_in=p,i.hold=h,i.bits=v,2;e.adler=i.check=1,i.mode=12;case 12:if(5===t||6===t)break e;case 13:if(i.last){h>>>=7&v,v-=7&v,i.mode=27;break}for(;v<3;){if(0===p)break e;p--,h+=d[u++]<<v,v+=8}switch(i.last=1&h,v-=1,3&(h>>>=1)){case 0:i.mode=14;break;case 1:if(b(i),i.mode=20,6!==t)break;h>>>=2,v-=2;break e;case 2:i.mode=17;break;case 3:e.msg="invalid block type",i.mode=30}h>>>=2,v-=2;break;case 14:for(h>>>=7&v,v-=7&v;v<32;){if(0===p)break e;p--,h+=d[u++]<<v,v+=8}if((65535&h)!=(h>>>16^65535)){e.msg="invalid stored block lengths",i.mode=30;break}if(i.length=65535&h,v=h=0,i.mode=15,6===t)break e;case 15:i.mode=16;case 16:if(w=i.length){if(p<w&&(w=p),m<w&&(w=m),0===w)break e;n.arraySet(c,d,u,w,f),p-=w,u+=w,m-=w,f+=w,i.length-=w;break}i.mode=12;break;case 17:for(;v<14;){if(0===p)break e;p--,h+=d[u++]<<v,v+=8}if(i.nlen=257+(31&h),h>>>=5,v-=5,i.ndist=1+(31&h),h>>>=5,v-=5,i.ncode=4+(15&h),h>>>=4,v-=4,286<i.nlen||30<i.ndist){e.msg="too many length or distance symbols",i.mode=30;break}i.have=0,i.mode=18;case 18:for(;i.have<i.ncode;){for(;v<3;){if(0===p)break e;p--,h+=d[u++]<<v,v+=8}i.lens[P[i.have++]]=7&h,h>>>=3,v-=3}for(;i.have<19;)i.lens[P[i.have++]]=0;if(i.lencode=i.lendyn,i.lenbits=7,D={bits:i.lenbits},M=l(0,i.lens,0,19,i.lencode,0,i.work,D),i.lenbits=D.bits,M){e.msg="invalid code lengths set",i.mode=30;break}i.have=0,i.mode=19;case 19:for(;i.have<i.nlen+i.ndist;){for(;E=(L=i.lencode[h&(1<<i.lenbits)-1])>>>16&255,S=65535&L,!((C=L>>>24)<=v);){if(0===p)break e;p--,h+=d[u++]<<v,v+=8}if(S<16)h>>>=C,v-=C,i.lens[i.have++]=S;else{if(16===S){for(N=C+2;v<N;){if(0===p)break e;p--,h+=d[u++]<<v,v+=8}if(h>>>=C,v-=C,0===i.have){e.msg="invalid bit length repeat",i.mode=30;break}I=i.lens[i.have-1],w=3+(3&h),h>>>=2,v-=2}else if(17===S){for(N=C+3;v<N;){if(0===p)break e;p--,h+=d[u++]<<v,v+=8}v-=C,I=0,w=3+(7&(h>>>=C)),h>>>=3,v-=3}else{for(N=C+7;v<N;){if(0===p)break e;p--,h+=d[u++]<<v,v+=8}v-=C,I=0,w=11+(127&(h>>>=C)),h>>>=7,v-=7}if(i.have+w>i.nlen+i.ndist){e.msg="invalid bit length repeat",i.mode=30;break}for(;w--;)i.lens[i.have++]=I}}if(30===i.mode)break;if(0===i.lens[256]){e.msg="invalid code -- missing end-of-block",i.mode=30;break}if(i.lenbits=9,D={bits:i.lenbits},M=l(1,i.lens,0,i.nlen,i.lencode,0,i.work,D),i.lenbits=D.bits,M){e.msg="invalid literal/lengths set",i.mode=30;break}if(i.distbits=6,i.distcode=i.distdyn,D={bits:i.distbits},M=l(2,i.lens,i.nlen,i.ndist,i.distcode,0,i.work,D),i.distbits=D.bits,M){e.msg="invalid distances set",i.mode=30;break}if(i.mode=20,6===t)break e;case 20:i.mode=21;case 21:if(6<=p&&258<=m){e.next_out=f,e.avail_out=m,e.next_in=u,e.avail_in=p,i.hold=h,i.bits=v,o(e,y),f=e.next_out,c=e.output,m=e.avail_out,u=e.next_in,d=e.input,p=e.avail_in,h=i.hold,v=i.bits,12===i.mode&&(i.back=-1);break}for(i.back=0;E=(L=i.lencode[h&(1<<i.lenbits)-1])>>>16&255,S=65535&L,!((C=L>>>24)<=v);){if(0===p)break e;p--,h+=d[u++]<<v,v+=8}if(E&&0==(240&E)){for(k=C,T=E,O=S;E=(L=i.lencode[O+((h&(1<<k+T)-1)>>k)])>>>16&255,S=65535&L,!(k+(C=L>>>24)<=v);){if(0===p)break e;p--,h+=d[u++]<<v,v+=8}h>>>=k,v-=k,i.back+=k}if(h>>>=C,v-=C,i.back+=C,i.length=S,0===E){i.mode=26;break}if(32&E){i.back=-1,i.mode=12;break}if(64&E){e.msg="invalid literal/length code",i.mode=30;break}i.extra=15&E,i.mode=22;case 22:if(i.extra){for(N=i.extra;v<N;){if(0===p)break e;p--,h+=d[u++]<<v,v+=8}i.length+=h&(1<<i.extra)-1,h>>>=i.extra,v-=i.extra,i.back+=i.extra}i.was=i.length,i.mode=23;case 23:for(;E=(L=i.distcode[h&(1<<i.distbits)-1])>>>16&255,S=65535&L,!((C=L>>>24)<=v);){if(0===p)break e;p--,h+=d[u++]<<v,v+=8}if(0==(240&E)){for(k=C,T=E,O=S;E=(L=i.distcode[O+((h&(1<<k+T)-1)>>k)])>>>16&255,S=65535&L,!(k+(C=L>>>24)<=v);){if(0===p)break e;p--,h+=d[u++]<<v,v+=8}h>>>=k,v-=k,i.back+=k}if(h>>>=C,v-=C,i.back+=C,64&E){e.msg="invalid distance code",i.mode=30;break}i.offset=S,i.extra=15&E,i.mode=24;case 24:if(i.extra){for(N=i.extra;v<N;){if(0===p)break e;p--,h+=d[u++]<<v,v+=8}i.offset+=h&(1<<i.extra)-1,h>>>=i.extra,v-=i.extra,i.back+=i.extra}if(i.offset>i.dmax){e.msg="invalid distance too far back",i.mode=30;break}i.mode=25;case 25:if(0===m)break e;if(w=y-m,i.offset>w){if((w=i.offset-w)>i.whave&&i.sane){e.msg="invalid distance too far back",i.mode=30;break}A=w>i.wnext?(w-=i.wnext,i.wsize-w):i.wnext-w,w>i.length&&(w=i.length),_=i.window}else _=c,A=f-i.offset,w=i.length;for(m<w&&(w=m),m-=w,i.length-=w;c[f++]=_[A++],--w;);0===i.length&&(i.mode=21);break;case 26:if(0===m)break e;c[f++]=i.length,m--,i.mode=21;break;case 27:if(i.wrap){for(;v<32;){if(0===p)break e;p--,h|=d[u++]<<v,v+=8}if(y-=m,e.total_out+=y,i.total+=y,y&&(e.adler=i.check=i.flags?r(i.check,c,y,f-y):a(i.check,c,y,f-y)),y=m,(i.flags?h:s(h))!==i.check){e.msg="incorrect data check",i.mode=30;break}v=h=0}i.mode=28;case 28:if(i.wrap&&i.flags){for(;v<32;){if(0===p)break e;p--,h+=d[u++]<<v,v+=8}if(h!==(4294967295&i.total)){e.msg="incorrect length check",i.mode=30;break}v=h=0}i.mode=29;case 29:M=1;break e;case 30:M=-3;break e;case 31:return -4;default:return -2}return e.next_out=f,e.avail_out=m,e.next_in=u,e.avail_in=p,i.hold=h,i.bits=v,(i.wsize||y!==e.avail_out&&i.mode<30&&(i.mode<27||4!==t))&&g(e,e.output,e.next_out,y-e.avail_out)?(i.mode=31,-4):(x-=e.avail_in,y-=e.avail_out,e.total_in+=x,e.total_out+=y,i.total+=y,i.wrap&&y&&(e.adler=i.check=i.flags?r(i.check,c,y,e.next_out-y):a(i.check,c,y,e.next_out-y)),e.data_type=i.bits+(i.last?64:0)+(12===i.mode?128:0)+(20===i.mode||15===i.mode?256:0),(0==x&&0===y||4===t)&&0===M&&(M=-5),M)},i.inflateEnd=function(e){if(!e||!e.state)return -2;var t=e.state;return t.window&&(t.window=null),e.state=null,0},i.inflateGetHeader=function(e,t){var i;return e&&e.state?0==(2&(i=e.state).wrap)?-2:((i.head=t).done=!1,0):-2},i.inflateSetDictionary=function(e,t){var i,n=t.length;return e&&e.state?0!==(i=e.state).wrap&&11!==i.mode?-2:11===i.mode&&a(1,t,n,0)!==i.check?-3:g(e,t,n,n)?(i.mode=31,-4):(i.havedict=1,0):-2},i.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,t,i){"use strict";var n=e("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],r=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],o=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],l=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,i,s,d,c,u,f){var p,m,h,v,b,g,x,y,w,A=f.bits,_=0,C=0,E=0,S=0,k=0,T=0,O=0,I=0,M=0,D=0,N=null,L=0,R=new n.Buf16(16),P=new n.Buf16(16),F=null,B=0;for(_=0;_<=15;_++)R[_]=0;for(C=0;C<s;C++)R[t[i+C]]++;for(k=A,S=15;1<=S&&0===R[S];S--);if(S<k&&(k=S),0===S)return d[c++]=20971520,d[c++]=20971520,f.bits=1,0;for(E=1;E<S&&0===R[E];E++);for(k<E&&(k=E),_=I=1;_<=15;_++)if(I<<=1,(I-=R[_])<0)return -1;if(0<I&&(0===e||1!==S))return -1;for(P[1]=0,_=1;_<15;_++)P[_+1]=P[_]+R[_];for(C=0;C<s;C++)0!==t[i+C]&&(u[P[t[i+C]]++]=C);if(g=0===e?(N=F=u,19):1===e?(N=a,L-=257,F=r,B-=257,256):(N=o,F=l,-1),_=E,b=c,O=C=D=0,h=-1,v=(M=1<<(T=k))-1,1===e&&852<M||2===e&&592<M)return 1;for(;;){for(x=_-O,w=u[C]<g?(y=0,u[C]):u[C]>g?(y=F[B+u[C]],N[L+u[C]]):(y=96,0),p=1<<_-O,E=m=1<<T;d[b+(D>>O)+(m-=p)]=x<<24|y<<16|w|0,0!==m;);for(p=1<<_-1;D&p;)p>>=1;if(0!==p?(D&=p-1,D+=p):D=0,C++,0==--R[_]){if(_===S)break;_=t[i+u[C]]}if(k<_&&(D&v)!==h){for(0===O&&(O=k),b+=E,I=1<<(T=_-O);T+O<S&&!((I-=R[T+O])<=0);)T++,I<<=1;if(M+=1<<T,1===e&&852<M||2===e&&592<M)return 1;d[h=D&v]=k<<24|T<<16|b-c|0}}return 0!==D&&(d[b+D]=_-O<<24|4194304),f.bits=k,0}},{"../utils/common":41}],51:[function(e,t,i){"use strict";t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,t,i){"use strict";var n=e("../utils/common");function a(e){for(var t=e.length;0<=--t;)e[t]=0}var r=573,o=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],l=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],s=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],d=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],c=Array(576);a(c);var u=Array(60);a(u);var f=Array(512);a(f);var p=Array(256);a(p);var m=Array(29);a(m);var h,v,b,g=Array(30);function x(e,t,i,n,a){this.static_tree=e,this.extra_bits=t,this.extra_base=i,this.elems=n,this.max_length=a,this.has_stree=e&&e.length}function y(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function w(e){return e<256?f[e]:f[256+(e>>>7)]}function A(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function _(e,t,i){e.bi_valid>16-i?(e.bi_buf|=t<<e.bi_valid&65535,A(e,e.bi_buf),e.bi_buf=t>>16-e.bi_valid,e.bi_valid+=i-16):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=i)}function C(e,t,i){_(e,i[2*t],i[2*t+1])}function E(e,t){for(var i=0;i|=1&e,e>>>=1,i<<=1,0<--t;);return i>>>1}function S(e,t,i){var n,a,r=Array(16),o=0;for(n=1;n<=15;n++)r[n]=o=o+i[n-1]<<1;for(a=0;a<=t;a++){var l=e[2*a+1];0!==l&&(e[2*a]=E(r[l]++,l))}}function k(e){var t;for(t=0;t<286;t++)e.dyn_ltree[2*t]=0;for(t=0;t<30;t++)e.dyn_dtree[2*t]=0;for(t=0;t<19;t++)e.bl_tree[2*t]=0;e.dyn_ltree[512]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function T(e){8<e.bi_valid?A(e,e.bi_buf):0<e.bi_valid&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function O(e,t,i,n){var a=2*t,r=2*i;return e[a]<e[r]||e[a]===e[r]&&n[t]<=n[i]}function I(e,t,i){for(var n=e.heap[i],a=i<<1;a<=e.heap_len&&(a<e.heap_len&&O(t,e.heap[a+1],e.heap[a],e.depth)&&a++,!O(t,n,e.heap[a],e.depth));)e.heap[i]=e.heap[a],i=a,a<<=1;e.heap[i]=n}function M(e,t,i){var n,a,r,s,d=0;if(0!==e.last_lit)for(;n=e.pending_buf[e.d_buf+2*d]<<8|e.pending_buf[e.d_buf+2*d+1],a=e.pending_buf[e.l_buf+d],d++,0===n?C(e,a,t):(C(e,(r=p[a])+256+1,t),0!==(s=o[r])&&_(e,a-=m[r],s),C(e,r=w(--n),i),0!==(s=l[r])&&_(e,n-=g[r],s)),d<e.last_lit;);C(e,256,t)}function D(e,t){var i,n,a,o=t.dyn_tree,l=t.stat_desc.static_tree,s=t.stat_desc.has_stree,d=t.stat_desc.elems,c=-1;for(e.heap_len=0,e.heap_max=r,i=0;i<d;i++)0!==o[2*i]?(e.heap[++e.heap_len]=c=i,e.depth[i]=0):o[2*i+1]=0;for(;e.heap_len<2;)o[2*(a=e.heap[++e.heap_len]=c<2?++c:0)]=1,e.depth[a]=0,e.opt_len--,s&&(e.static_len-=l[2*a+1]);for(t.max_code=c,i=e.heap_len>>1;1<=i;i--)I(e,o,i);for(a=d;i=e.heap[1],e.heap[1]=e.heap[e.heap_len--],I(e,o,1),n=e.heap[1],e.heap[--e.heap_max]=i,e.heap[--e.heap_max]=n,o[2*a]=o[2*i]+o[2*n],e.depth[a]=(e.depth[i]>=e.depth[n]?e.depth[i]:e.depth[n])+1,o[2*i+1]=o[2*n+1]=a,e.heap[1]=a++,I(e,o,1),2<=e.heap_len;);e.heap[--e.heap_max]=e.heap[1],function(e,t){var i,n,a,o,l,s,d=t.dyn_tree,c=t.max_code,u=t.stat_desc.static_tree,f=t.stat_desc.has_stree,p=t.stat_desc.extra_bits,m=t.stat_desc.extra_base,h=t.stat_desc.max_length,v=0;for(o=0;o<=15;o++)e.bl_count[o]=0;for(d[2*e.heap[e.heap_max]+1]=0,i=e.heap_max+1;i<r;i++)h<(o=d[2*d[2*(n=e.heap[i])+1]+1]+1)&&(o=h,v++),d[2*n+1]=o,c<n||(e.bl_count[o]++,l=0,m<=n&&(l=p[n-m]),s=d[2*n],e.opt_len+=s*(o+l),f&&(e.static_len+=s*(u[2*n+1]+l)));if(0!==v){do{for(o=h-1;0===e.bl_count[o];)o--;e.bl_count[o]--,e.bl_count[o+1]+=2,e.bl_count[h]--,v-=2}while(0<v);for(o=h;0!==o;o--)for(n=e.bl_count[o];0!==n;)c<(a=e.heap[--i])||(d[2*a+1]!==o&&(e.opt_len+=(o-d[2*a+1])*d[2*a],d[2*a+1]=o),n--)}}(e,t),S(o,c,e.bl_count)}function N(e,t,i){var n,a,r=-1,o=t[1],l=0,s=7,d=4;for(0===o&&(s=138,d=3),t[2*(i+1)+1]=65535,n=0;n<=i;n++)a=o,o=t[2*(n+1)+1],++l<s&&a===o||(l<d?e.bl_tree[2*a]+=l:0!==a?(a!==r&&e.bl_tree[2*a]++,e.bl_tree[32]++):l<=10?e.bl_tree[34]++:e.bl_tree[36]++,r=a,d=(l=0)===o?(s=138,3):a===o?(s=6,3):(s=7,4))}function L(e,t,i){var n,a,r=-1,o=t[1],l=0,s=7,d=4;for(0===o&&(s=138,d=3),n=0;n<=i;n++)if(a=o,o=t[2*(n+1)+1],!(++l<s&&a===o)){if(l<d)for(;C(e,a,e.bl_tree),0!=--l;);else 0!==a?(a!==r&&(C(e,a,e.bl_tree),l--),C(e,16,e.bl_tree),_(e,l-3,2)):l<=10?(C(e,17,e.bl_tree),_(e,l-3,3)):(C(e,18,e.bl_tree),_(e,l-11,7));r=a,d=(l=0)===o?(s=138,3):a===o?(s=6,3):(s=7,4)}}a(g);var R=!1;function P(e,t,i,a){var r,o,l,s;_(e,0+(a?1:0),3),T(r=e),A(r,i),A(r,~i),n.arraySet(r.pending_buf,r.window,t,i,r.pending),r.pending+=i}i._tr_init=function(e){R||(function(){var e,t,i,n,a,r=Array(16);for(n=i=0;n<28;n++)for(m[n]=i,e=0;e<1<<o[n];e++)p[i++]=n;for(p[i-1]=n,n=a=0;n<16;n++)for(g[n]=a,e=0;e<1<<l[n];e++)f[a++]=n;for(a>>=7;n<30;n++)for(g[n]=a<<7,e=0;e<1<<l[n]-7;e++)f[256+a++]=n;for(t=0;t<=15;t++)r[t]=0;for(e=0;e<=143;)c[2*e+1]=8,e++,r[8]++;for(;e<=255;)c[2*e+1]=9,e++,r[9]++;for(;e<=279;)c[2*e+1]=7,e++,r[7]++;for(;e<=287;)c[2*e+1]=8,e++,r[8]++;for(S(c,287,r),e=0;e<30;e++)u[2*e+1]=5,u[2*e]=E(e,5);h=new x(c,o,257,286,15),v=new x(u,l,0,30,15),b=new x([],s,0,19,7)}(),R=!0),e.l_desc=new y(e.dyn_ltree,h),e.d_desc=new y(e.dyn_dtree,v),e.bl_desc=new y(e.bl_tree,b),e.bi_buf=0,e.bi_valid=0,k(e)},i._tr_stored_block=P,i._tr_flush_block=function(e,t,i,n){var a,r,o=0;0<e.level?(2===e.strm.data_type&&(e.strm.data_type=function(e){var t,i=4093624447;for(t=0;t<=31;t++,i>>>=1)if(1&i&&0!==e.dyn_ltree[2*t])return 0;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return 1;for(t=32;t<256;t++)if(0!==e.dyn_ltree[2*t])return 1;return 0}(e)),D(e,e.l_desc),D(e,e.d_desc),o=function(e){var t;for(N(e,e.dyn_ltree,e.l_desc.max_code),N(e,e.dyn_dtree,e.d_desc.max_code),D(e,e.bl_desc),t=18;3<=t&&0===e.bl_tree[2*d[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),a=e.opt_len+3+7>>>3,(r=e.static_len+3+7>>>3)<=a&&(a=r)):a=r=i+5,i+4<=a&&-1!==t?P(e,t,i,n):4===e.strategy||r===a?(_(e,2+(n?1:0),3),M(e,c,u)):(_(e,4+(n?1:0),3),function(e,t,i,n){var a;for(_(e,t-257,5),_(e,i-1,5),_(e,n-4,4),a=0;a<n;a++)_(e,e.bl_tree[2*d[a]+1],3);L(e,e.dyn_ltree,t-1),L(e,e.dyn_dtree,i-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,o+1),M(e,e.dyn_ltree,e.dyn_dtree)),k(e),n&&T(e)},i._tr_tally=function(e,t,i){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&i,e.last_lit++,0===t?e.dyn_ltree[2*i]++:(e.matches++,t--,e.dyn_ltree[2*(p[i]+256+1)]++,e.dyn_dtree[2*w(t)]++),e.last_lit===e.lit_bufsize-1},i._tr_align=function(e){var t;_(e,2,3),C(e,256,c),16===(t=e).bi_valid?(A(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):8<=t.bi_valid&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}},{"../utils/common":41}],53:[function(e,t,i){"use strict";t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,t,n){(function(e){!function(e,t){"use strict";if(!e.setImmediate){var i,n,a,o,l=1,s={},d=!1,c=e.document,u=Object.getPrototypeOf&&Object.getPrototypeOf(e);u=u&&u.setTimeout?u:e,i="[object process]"===({}).toString.call(e.process)?function(e){r.nextTick(function(){p(e)})}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,i=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=i,t}}()?e.MessageChannel?((a=new MessageChannel).port1.onmessage=function(e){p(e.data)},function(e){a.port2.postMessage(e)}):c&&"onreadystatechange"in c.createElement("script")?(n=c.documentElement,function(e){var t=c.createElement("script");t.onreadystatechange=function(){p(e),t.onreadystatechange=null,n.removeChild(t),t=null},n.appendChild(t)}):function(e){setTimeout(p,0,e)}:(o="setImmediate$"+Math.random()+"$",e.addEventListener?e.addEventListener("message",m,!1):e.attachEvent("onmessage",m),function(t){e.postMessage(o+t,"*")}),u.setImmediate=function(e){"function"!=typeof e&&(e=Function(""+e));for(var t=Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var a={callback:e,args:t};return s[l]=a,i(l),l++},u.clearImmediate=f}function f(e){delete s[e]}function p(e){if(d)setTimeout(p,0,e);else{var t=s[e];if(t){d=!0;try{!function(e){var t=e.callback,i=e.args;switch(i.length){case 0:t();break;case 1:t(i[0]);break;case 2:t(i[0],i[1]);break;case 3:t(i[0],i[1],i[2]);break;default:t.apply(void 0,i)}}(t)}finally{f(e),d=!1}}}}function m(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(o)&&p(+t.data.slice(o.length))}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,void 0!==i.g?i.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[10])(10)},e.exports=n()},1809:function(e,t,i){"use strict";i.d(t,{wu:function(){return eu}});let n=(()=>{let e=0,t=()=>`0000${(1679616*Math.random()<<0).toString(36)}`.slice(-4);return()=>`u${t()}${e+=1}`})();function a(e){let t=[];for(let i=0,n=e.length;i<n;i++)t.push(e[i]);return t}function r(e,t){let i=e.ownerDocument.defaultView||window,n=i.getComputedStyle(e).getPropertyValue(t);return n?parseFloat(n.replace("px","")):0}function o(e,t={}){let i=t.width||function(e){let t=r(e,"border-left-width"),i=r(e,"border-right-width");return e.clientWidth+t+i}(e),n=t.height||function(e){let t=r(e,"border-top-width"),i=r(e,"border-bottom-width");return e.clientHeight+t+i}(e);return{width:i,height:n}}function l(e){return new Promise((t,i)=>{let n=new Image;n.decode=()=>t(n),n.onload=()=>t(n),n.onerror=i,n.crossOrigin="anonymous",n.decoding="async",n.src=e})}async function s(e){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(e=>`data:image/svg+xml;charset=utf-8,${e}`)}async function d(e,t,i){let n="http://www.w3.org/2000/svg",a=document.createElementNS(n,"svg"),r=document.createElementNS(n,"foreignObject");return a.setAttribute("width",`${t}`),a.setAttribute("height",`${i}`),a.setAttribute("viewBox",`0 0 ${t} ${i}`),r.setAttribute("width","100%"),r.setAttribute("height","100%"),r.setAttribute("x","0"),r.setAttribute("y","0"),r.setAttribute("externalResourcesRequired","true"),a.appendChild(r),r.appendChild(e),s(a)}function c(e,t,i){let r=window.getComputedStyle(e,i),o=r.getPropertyValue("content");if(""===o||"none"===o)return;let l=n();try{t.className=`${t.className} ${l}`}catch(s){return}let d=document.createElement("style");d.appendChild(function(e,t,i){var n;let r=`.${e}:${t}`,o=i.cssText?function(e){let t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}(i):a(i).map(e=>{let t=i.getPropertyValue(e),n=i.getPropertyPriority(e);return`${e}: ${t}${n?" !important":""};`}).join(" ");return document.createTextNode(`${r}{${o}}`)}(l,i,r)),t.appendChild(d)}let u="application/font-woff",f="image/jpeg",p={woff:u,woff2:u,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:f,jpeg:f,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function m(e){let t=(function(e){let t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""})(e).toLowerCase();return p[t]||""}function h(e){return -1!==e.search(/^(data:)/)}function v(e,t){return`data:${t};base64,${e}`}async function b(e,t,i){let n=await fetch(e,t);if(404===n.status)throw Error(`Resource "${n.url}" not found`);let a=await n.blob();return new Promise((e,t)=>{let r=new FileReader;r.onerror=t,r.onloadend=()=>{try{e(i({res:n,result:r.result}))}catch(a){t(a)}},r.readAsDataURL(a)})}let g={};async function x(e,t,i){var n,a,r;let o,l=(a=t,r=i.includeQueryParams,o=e.replace(/\?.*/,""),r&&(o=e),/ttf|otf|eot|woff2?/i.test(o)&&(o=o.replace(/.*\//,"")),a?`[${a}]${o}`:o);if(null!=g[l])return g[l];i.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+new Date().getTime());let s;try{let d=await b(e,i.fetchRequestInit,({res:e,result:i})=>{var n;return t||(t=e.headers.get("Content-Type")||""),i.split(/,/)[1]});s=v(d,t)}catch(u){s=i.imagePlaceholder||"";let c=`Failed to fetch resource: ${e}`;u&&(c="string"==typeof u?u:u.message),c&&console.warn(c)}return g[l]=s,s}async function y(e){let t=e.toDataURL();return"data:,"===t?e.cloneNode(!1):l(t)}async function w(e,t){if(e.currentSrc){let i=document.createElement("canvas"),n=i.getContext("2d");i.width=e.clientWidth,i.height=e.clientHeight,null==n||n.drawImage(e,0,0,i.width,i.height);let a=i.toDataURL();return l(a)}let r=e.poster,o=m(r),s=await x(r,o,t);return l(s)}async function A(e){var t;try{if(null===(t=null==e?void 0:e.contentDocument)||void 0===t?void 0:t.body)return await k(e.contentDocument.body,{},!0)}catch(i){}return e.cloneNode(!1)}async function _(e,t){return e instanceof HTMLCanvasElement?y(e):e instanceof HTMLVideoElement?w(e,t):e instanceof HTMLIFrameElement?A(e):e.cloneNode(!1)}let C=e=>null!=e.tagName&&"SLOT"===e.tagName.toUpperCase();async function E(e,t,i){var n;let r=C(e)&&e.assignedNodes?a(e.assignedNodes()):a((null!==(n=e.shadowRoot)&&void 0!==n?n:e).childNodes);return 0===r.length||e instanceof HTMLVideoElement||await r.reduce((e,n)=>e.then(()=>k(n,i)).then(e=>{e&&t.appendChild(e)}),Promise.resolve()),t}async function S(e,t){let i=e.querySelectorAll?e.querySelectorAll("use"):[];if(0===i.length)return e;let n={};for(let a=0;a<i.length;a++){let r=i[a],o=r.getAttribute("xlink:href");if(o){let l=e.querySelector(o),s=document.querySelector(o);l||!s||n[o]||(n[o]=await k(s,t,!0))}}let d=Object.values(n);if(d.length){let c="http://www.w3.org/1999/xhtml",u=document.createElementNS(c,"svg");u.setAttribute("xmlns",c),u.style.position="absolute",u.style.width="0",u.style.height="0",u.style.overflow="hidden",u.style.display="none";let f=document.createElementNS(c,"defs");u.appendChild(f);for(let p=0;p<d.length;p++)f.appendChild(d[p]);e.appendChild(u)}return e}async function k(e,t,i){return i||!t.filter||t.filter(e)?Promise.resolve(e).then(e=>_(e,t)).then(i=>E(e,i,t)).then(t=>(function(e,t){if(t instanceof Element){var i,n,r,o;!function(e,t){let i=t.style;if(!i)return;let n=window.getComputedStyle(e);n.cssText?(i.cssText=n.cssText,i.transformOrigin=n.transformOrigin):a(n).forEach(e=>{let t=n.getPropertyValue(e);if("font-size"===e&&t.endsWith("px")){let a=Math.floor(parseFloat(t.substring(0,t.length-2)))-.1;t=`${a}px`}i.setProperty(e,t,n.getPropertyPriority(e))})}(e,t),c(e,t,":before"),c(e,t,":after"),o=t,e instanceof HTMLTextAreaElement&&(o.innerHTML=e.value),e instanceof HTMLInputElement&&o.setAttribute("value",e.value),function(e,t){if(e instanceof HTMLSelectElement){let i=Array.from(t.children).find(t=>e.value===t.getAttribute("value"));i&&i.setAttribute("selected","")}}(e,t)}return t})(e,t)).then(e=>S(e,t)):null}let T=/url\((['"]?)([^'"]+?)\1\)/g,O=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,I=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;async function M(e,t,i,n,a){try{let r=i?function(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;let i=document.implementation.createHTMLDocument(),n=i.createElement("base"),a=i.createElement("a");return i.head.appendChild(n),i.body.appendChild(a),t&&(n.href=t),a.href=e,a.href}(t,i):t,o=m(t),l;if(a){let s=await a(r);l=v(s,o)}else l=await x(r,o,n);return e.replace(function(e){let t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}(t),`$1${l}$3`)}catch(d){}return e}function D(e){return -1!==e.search(T)}async function N(e,t,i){if(!D(e))return e;let n=function(e,{preferredFontFormat:t}){return t?e.replace(I,e=>{for(;;){let[i,,n]=O.exec(e)||[];if(!n)return"";if(n===t)return`src: ${i};`}}):e}(e,i),a=function(e){let t=[];return e.replace(T,(e,i,n)=>(t.push(n),e)),t.filter(e=>!h(e))}(n);return a.reduce((e,n)=>e.then(e=>M(e,n,t,i)),Promise.resolve(n))}async function L(e,t){var i;let n=null===(i=e.style)||void 0===i?void 0:i.getPropertyValue("background");if(n){let a=await N(n,null,t);e.style.setProperty("background",a,e.style.getPropertyPriority("background"))}}async function R(e,t){if(!(e instanceof HTMLImageElement&&!h(e.src))&&!(e instanceof SVGImageElement&&!h(e.href.baseVal)))return;let i=e instanceof HTMLImageElement?e.src:e.href.baseVal,n=await x(i,m(i),t);await new Promise((t,i)=>{e.onload=t,e.onerror=i;let a=e;a.decode&&(a.decode=t),e instanceof HTMLImageElement?(e.srcset="",e.src=n):e.href.baseVal=n})}async function P(e,t){let i=a(e.childNodes),n=i.map(e=>F(e,t));await Promise.all(n).then(()=>e)}async function F(e,t){e instanceof Element&&(await L(e,t),await R(e,t),await P(e,t))}let B={};async function U(e){let t=B[e];if(null!=t)return t;let i=await fetch(e),n=await i.text();return t={url:e,cssText:n},B[e]=t,t}async function $(e,t){let i=e.cssText,n=/url\(["']?([^"')]+)["']?\)/g,a=i.match(/url\([^)]+\)/g)||[],r=a.map(async a=>{let r=a.replace(n,"$1");return r.startsWith("https://")||(r=new URL(r,e.url).href),b(r,t.fetchRequestInit,({result:e})=>(i=i.replace(a,`url(${e})`),[a,e]))});return Promise.all(r).then(()=>i)}function j(e){if(null==e)return[];let t=[],i=e.replace(/(\/\*[\s\S]*?\*\/)/gi,""),n=RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){let a=n.exec(i);if(null===a)break;t.push(a[0])}i=i.replace(n,"");let r=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,o=RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");for(;;){let l=r.exec(i);if(null===l){if(null===(l=o.exec(i)))break;r.lastIndex=o.lastIndex}else o.lastIndex=r.lastIndex;t.push(l[0])}return t}async function z(e,t){let i=[],n=[];return e.forEach(i=>{if("cssRules"in i)try{a(i.cssRules||[]).forEach((e,a)=>{if(e.type===CSSRule.IMPORT_RULE){let r=a+1,o=e.href,l=U(o).then(e=>$(e,t)).then(e=>j(e).forEach(e=>{try{i.insertRule(e,e.startsWith("@import")?r+=1:i.cssRules.length)}catch(t){console.error("Error inserting rule from remote css",{rule:e,error:t})}})).catch(e=>{console.error("Error loading remote css",e.toString())});n.push(l)}})}catch(o){let r=e.find(e=>null==e.href)||document.styleSheets[0];null!=i.href&&n.push(U(i.href).then(e=>$(e,t)).then(e=>j(e).forEach(e=>{r.insertRule(e,i.cssRules.length)})).catch(e=>{console.error("Error loading remote stylesheet",e.toString())})),console.error("Error inlining remote css file",o.toString())}}),Promise.all(n).then(()=>(e.forEach(e=>{if("cssRules"in e)try{a(e.cssRules||[]).forEach(e=>{i.push(e)})}catch(t){console.error(`Error while reading CSS rules from ${e.href}`,t.toString())}}),i))}async function G(e,t){var i;if(null==e.ownerDocument)throw Error("Provided element is not within a Document");let n=a(e.ownerDocument.styleSheets),r=await z(n,t);return r.filter(e=>e.type===CSSRule.FONT_FACE_RULE).filter(e=>D(e.style.getPropertyValue("src")))}async function H(e,t){let i=await G(e,t),n=await Promise.all(i.map(e=>{let i=e.parentStyleSheet?e.parentStyleSheet.href:null;return N(e.cssText,i,t)}));return n.join("\n")}async function V(e,t){let i=null!=t.fontEmbedCSS?t.fontEmbedCSS:t.skipFonts?null:await H(e,t);if(i){let n=document.createElement("style"),a=document.createTextNode(i);n.appendChild(a),e.firstChild?e.insertBefore(n,e.firstChild):e.appendChild(n)}}async function q(e,t={}){let{width:i,height:n}=o(e,t),a=await k(e,t,!0);await V(a,t),await F(a,t),function(e,t){let{style:i}=e;t.backgroundColor&&(i.backgroundColor=t.backgroundColor),t.width&&(i.width=`${t.width}px`),t.height&&(i.height=`${t.height}px`);let n=t.style;null!=n&&Object.keys(n).forEach(e=>{i[e]=n[e]})}(a,t);let r=await d(a,i,n);return r}async function W(e,t={}){let{width:i,height:n}=o(e,t),a=await q(e,t),r=await l(a),s=document.createElement("canvas"),d=s.getContext("2d"),c=t.pixelRatio||function(){let e,t;try{t=process}catch(i){}let n=t&&t.env?t.env.devicePixelRatio:null;return n&&Number.isNaN(e=parseInt(n,10))&&(e=1),e||window.devicePixelRatio||1}(),u=t.canvasWidth||i,f=t.canvasHeight||n;if(s.width=u*c,s.height=f*c,!t.skipAutoScale){var p;((p=s).width>16384||p.height>16384)&&(p.width>16384&&p.height>16384?p.width>p.height?(p.height*=16384/p.width,p.width=16384):(p.width*=16384/p.height,p.height=16384):p.width>16384?(p.height*=16384/p.width,p.width=16384):(p.width*=16384/p.height,p.height=16384))}return s.style.width=`${u}`,s.style.height=`${f}`,t.backgroundColor&&(d.fillStyle=t.backgroundColor,d.fillRect(0,0,s.width,s.height)),d.drawImage(r,0,0,s.width,s.height),s}async function Z(e,t={}){let i=await W(e,t);return i.toDataURL()}var X=i(1803),J=i(3162);function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=Array(t);i<t;i++)n[i]=e[i];return n}function K(e,t){var i;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return Q(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?Q(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(i=e[Symbol.iterator]()).next.bind(i)}var ee="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function et(e,t,i){if(!e.s){if(i instanceof ei){if(!i.s)return void(i.o=et.bind(null,e,t));1&t&&(t=i.s),i=i.v}if(i&&i.then)return void i.then(et.bind(null,e,t),et.bind(null,e,2));e.s=t,e.v=i;var n=e.o;n&&n(e)}}var ei=function(){function e(){}return e.prototype.then=function(t,i){var n=new e,a=this.s;if(a){var r=1&a?t:i;if(r){try{et(n,1,r(this.v))}catch(o){et(n,2,o)}return n}return this}return this.o=function(e){try{var a=e.v;1&e.s?et(n,1,t?t(a):a):i?et(n,1,i(a)):et(n,2,a)}catch(r){et(n,2,r)}},n},e}();function en(e){return e instanceof ei&&1&e.s}var ea={filename:"Image",forceFixText:!1,printDate:!0},er=function(e){var t=window.getComputedStyle(e);e.style.color=t.color},eo=function(e){var t=window.getComputedStyle(e);e.style.width=t.width,e.style.height=t.height},el=function(e,t){void 0===t&&(t=["b","h1","h2","h3","h4","h5","h6","i","mark","p","small","strong"]);for(var i,n=K(e.querySelectorAll(t));!(i=n()).done;){var a=i.value;a.style.fontFamily=window.getComputedStyle(a).fontFamily,a.style.fontSize=window.getComputedStyle(a).fontSize,a.style.fontWeight=window.getComputedStyle(a).fontWeight,a.style.width=window.getComputedStyle(a).width}},es=function(e){return"hide-when-downloading"!==e.className},ed=function(e,t,i,n){void 0===n&&(n="png");try{var a,r=function(){!function(e){for(var t,i=K(e.querySelectorAll([".remove-when-downloading"]));!(t=i()).done;){var n=t.value;n.style.display=n.getAttribute("original_display")}}(e),(0,J.saveAs)(l,function(e){if(e.printDate){var t=(new Date).toDateString();return e.filename+" ("+t+")"}return e.filename||"Image"}(o)+"."+n)},o=Y({},ea,t||{}),l=null;(function(e,t){void 0===t&&(t=!1);var i,n=e.querySelectorAll("svg");el(e,[".fixed-text"]),t&&el(e);for(var a,r=K(n);!(a=r()).done;){var o=a.value;er(o),eo(o)}})(e,o.forceFixText),function(e){for(var t,i=K(e.querySelectorAll([".remove-when-downloading"]));!(t=i()).done;){var n=t.value;n.setAttribute("original_display",window.getComputedStyle(n).display),n.style.display="none"}}(e);var s=function(e,t){try{var n=Promise.resolve(i()).then(function(e){l=e})}catch(a){return t()}return n&&n.then?n.then(void 0,t):n}(0,function(){return Promise.resolve(function(e){try{var t=e.querySelectorAll("svg"),i=[],n=function(e,t,i){if("function"==typeof e[ee]){var n,a,r,o,l,s,d,c,u=e[ee]();if(function e(i){try{for(;!(s=u.next()).done;)if((i=t(s.value))&&i.then){if(!en(i))return void i.then(e,c||(c=et.bind(null,d=new ei,2)));i=i.v}d?et(d,1,i):d=i}catch(n){et(d||(d=new ei),2,n)}}(),u.return){var f=function(e){try{s.done||u.return()}catch(t){}return e};if(d&&d.then)return d.then(f,function(e){throw f(e)});f()}return d}if(!("length"in e))throw TypeError("Object is not iterable");for(var p=[],m=0;m<e.length;m++)p.push(e[m]);return l=-1,function e(i){try{for(;++l<p.length;){var n;if(n=l,(i=t(p[n]))&&i.then){if(!en(i))return void i.then(e,o||(o=et.bind(null,r=new ei,2)));i=i.v}}r?et(r,1,i):r=i}catch(a){et(r||(r=new ei),2,a)}}(),r}(t,function(e){function t(){r.dataset.icon=n,r.width=e.clientWidth,r.height=e.clientHeight,e.replaceWith(r)}var n=e.getAttribute("data-icon"),a=i.find(function(e){return e.dataIcon===n}),r=document.createElement("img"),o=function(){if(!a)return Promise.resolve((0,X.svgAsPngUri)(e,"icon.png")).then(function(e){r.src=e,i.push({dataIcon:n,uri:e})});r.src=a.uri}();return o&&o.then?o.then(t):t()});return Promise.resolve(n&&n.then?n.then(function(){}):void 0)}catch(a){return Promise.reject(a)}}(e)).then(function(){return Promise.resolve(i()).then(function(){return Promise.resolve(i()).then(function(e){l=e})})})});return Promise.resolve(s&&s.then?s.then(r):r())}catch(d){return Promise.reject(d)}},ec=function(e,t,i){void 0===i&&(i="png");var n=t.backgroundColor,a=t.quality,r=t.pixelRatio,o=t.style,l=Y({},function(e,t){if(t.width&&t.height)return{width:t.width,height:t.height};var i=window.getComputedStyle(e),n=i.height;return{width:Number.parseInt(i.width.replace("px",""),10)+4,height:Number.parseInt(n.replace("px",""),10)+4}}(e,t),{pixelRatio:1});return o&&(l=Y({},l,{style:o})),n&&(l=Y({},l,{backgroundColor:n})),r&&r>0&&(l=Y({},l,{pixelRatio:r})),a&&i.includes("jpeg")&&(l=Y({},l,{quality:a>=0&&a<=1?a:1})),l||{}},eu=function(e,t,i){void 0===t&&(t={}),void 0===i&&(i={});try{return Promise.resolve(ed(e,t,function(){return Z(e,Y({filter:es},ec(e,i,"png")))},"png")).then(function(){})}catch(n){return Promise.reject(n)}}},1803:function(e,t){"use strict";var i,n,a,r,o,l,s,d,c,u,f,p,m,h,v,b,g,x,y,w;n=t||{},void 0!==(i=(function(){return n}).apply(t,[]))&&(e.exports=i),n.default=n,a="http://www.w3.org/2000/xmlns/",r="http://www.w3.org/2000/svg",o=/url\(["']?(.+?)["']?\)/,l={woff2:"font/woff2",woff:"font/woff",otf:"application/x-font-opentype",ttf:"application/x-font-ttf",eot:"application/vnd.ms-fontobject",sfnt:"application/font-sfnt",svg:"image/svg+xml"},s=function(e){return e instanceof HTMLElement||e instanceof SVGElement},d=function(e){if(!s(e))throw Error("an HTMLElement or SVGElement is required; got "+e)},c=function(e){return new Promise(function(t,i){s(e)?t(e):i(Error("an HTMLElement or SVGElement is required; got "+e))})},u=function(e){var t=Object.keys(l).filter(function(t){return e.indexOf("."+t)>0}).map(function(e){return l[e]});return t?t[0]:(console.error("Unknown font format for "+e+". Fonts may not be working correctly."),"application/octet-stream")},f=function(e){for(var t="",i=new Uint8Array(e),n=0;n<i.byteLength;n++)t+=String.fromCharCode(i[n]);return window.btoa(t)},p=function(e,t,i){var n=e.viewBox&&e.viewBox.baseVal&&e.viewBox.baseVal[i]||null!==t.getAttribute(i)&&!t.getAttribute(i).match(/%$/)&&parseInt(t.getAttribute(i))||e.getBoundingClientRect()[i]||parseInt(t.style[i])||parseInt(window.getComputedStyle(e).getPropertyValue(i));return null==n||isNaN(parseFloat(n))?0:n},m=function(e,t,i,n){if("svg"===e.tagName)return{width:i||p(e,t,"width"),height:n||p(e,t,"height")};if(e.getBBox){var a,r=e.getBBox(),o=r.x,l=r.y;return{width:o+r.width,height:l+r.height}}},h=function(e){for(var t=window.atob(e.split(",")[1]),i=e.split(",")[0].split(":")[1].split(";")[0],n=new ArrayBuffer(t.length),a=new Uint8Array(n),r=0;r<t.length;r++)a[r]=t.charCodeAt(r);return new Blob([n],{type:i})},v=function(e,t){if(t)try{return e.querySelector(t)||e.parentNode&&e.parentNode.querySelector(t)}catch(i){console.warn('Invalid CSS selector "'+t+'"',i)}},b=function(e,t){var i=e.cssText.match(o),n=i&&i[1]||"";if(!(!n||n.match(/^data:/))&&"about:blank"!==n){var a=n.startsWith("../")?t+"/../"+n:n.startsWith("./")?t+"/."+n:n;return{text:e.cssText,format:u(a),url:a}}},g={},x=null,y=function(e,t){var i,n=t||{},a=n.selectorRemap,r=n.modifyStyle,l=n.modifyCss,s=n.fonts,d=n.excludeUnusedCss,c=l||function(e,t){var i=a?a(e):e,n=r?r(t):t;return i+"{"+n+"}\n"},u=[],p=void 0===s,m=s||[];return(x||(x=Array.from(document.styleSheets).map(function(e){try{return{rules:e.cssRules,href:e.href}}catch(t){return console.warn("Stylesheet could not be loaded: "+e.href,t),{}}}))).forEach(function(t){var i=t.rules,n=t.href;i&&Array.from(i).forEach(function(t){if(void 0!==t.style){if(v(e,t.selectorText))u.push(c(t.selectorText,t.style.cssText));else if(p&&t.cssText.match(/^@font-face/)){var i=b(t,n);i&&m.push(i)}else d||u.push(t.cssText)}})}),Promise.all(m.map(function(e){return new Promise(function(t,i){if(g[e.url])return t(g[e.url]);var n=new XMLHttpRequest;n.addEventListener("load",function(){var i=f(n.response),a=e.text.replace(o,'url("data:'+e.format+";base64,"+i+'")')+"\n";g[e.url]=a,t(a)}),n.addEventListener("error",function(i){console.warn("Failed to load font from: "+e.url,i),g[e.url]=null,t(null)}),n.addEventListener("abort",function(i){console.warn("Aborted loading font from: "+e.url,i),t(null)}),n.open("GET",e.url),n.responseType="arraybuffer",n.send()})})).then(function(e){return e.filter(function(e){return e}).join("")}).then(function(e){return u.join("\n")+e})},w=function(){if(!navigator.msSaveOrOpenBlob&&!("download"in document.createElement("a")))return{popup:window.open()}},n.prepareSvg=function(e,t,i){d(e);var n,o=t||{},l=o.left,s=void 0===l?0:l,c=o.top,u=void 0===c?0:c,f=o.width,p=o.height,h=o.scale,v=void 0===h?1:h,b=o.responsive,g=void 0!==b&&b,x=o.excludeCss,w=void 0!==x&&x;return Promise.all(Array.from(e.querySelectorAll("image")).map(function(e){var t,i=e.getAttributeNS("http://www.w3.org/1999/xlink","href")||e.getAttribute("href");return i?(i&&0===i.lastIndexOf("http",0)&&-1===i.lastIndexOf(window.location.host)&&(i+=(-1===i.indexOf("?")?"?":"&")+"t="+new Date().valueOf()),new Promise(function(t,n){var a=document.createElement("canvas"),r=new Image;r.crossOrigin="anonymous",r.src=i,r.onerror=function(){return n(Error("Could not load "+i))},r.onload=function(){a.width=r.width,a.height=r.height,a.getContext("2d").drawImage(r,0,0),e.setAttributeNS("http://www.w3.org/1999/xlink","href",a.toDataURL("image/png")),t(!0)}})):Promise.resolve(null)})).then(function(){var n=e.cloneNode(!0);n.style.backgroundColor=(t||{}).backgroundColor||e.style.backgroundColor;var o=m(e,n,f,p),l=o.width,d=o.height;if("svg"!==e.tagName){if(e.getBBox){null!=n.getAttribute("transform")&&n.setAttribute("transform",n.getAttribute("transform").replace(/translate\(.*?\)/,""));var c=document.createElementNS("http://www.w3.org/2000/svg","svg");c.appendChild(n),n=c}else{console.error("Attempted to render non-SVG element",e);return}}if(n.setAttribute("version","1.1"),n.setAttribute("viewBox",[s,u,l,d].join(" ")),n.getAttribute("xmlns")||n.setAttributeNS(a,"xmlns",r),n.getAttribute("xmlns:xlink")||n.setAttributeNS(a,"xmlns:xlink","http://www.w3.org/1999/xlink"),g?(n.removeAttribute("width"),n.removeAttribute("height"),n.setAttribute("preserveAspectRatio","xMinYMin meet")):(n.setAttribute("width",l*v),n.setAttribute("height",d*v)),Array.from(n.querySelectorAll("foreignObject > *")).forEach(function(e){e.setAttributeNS(a,"xmlns","svg"===e.tagName?r:"http://www.w3.org/1999/xhtml")}),!w)return y(e,t).then(function(e){var t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML="<![CDATA[\n"+e+"\n]]>";var a=document.createElement("defs");a.appendChild(t),n.insertBefore(a,n.firstChild);var r=document.createElement("div");r.appendChild(n);var o=r.innerHTML.replace(/NS\d+:href/gi,'xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href');if("function"!=typeof i)return{src:o,width:l,height:d};i(o,l,d)});var h=document.createElement("div");h.appendChild(n);var b=h.innerHTML;if("function"!=typeof i)return{src:b,width:l,height:d};i(b,l,d)})},n.svgAsDataUri=function(e,t,i){return d(e),n.prepareSvg(e,t).then(function(e){var t,n=e.src,a=e.width,r=e.height,o="data:image/svg+xml;base64,"+window.btoa(decodeURIComponent(encodeURIComponent('<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" [<!ENTITY nbsp "&#160;">]>'+n).replace(/%([0-9A-F]{2})/g,function(e,t){var i=String.fromCharCode("0x"+t);return"%"===i?"%25":i})));return"function"==typeof i&&i(o,a,r),o})},n.svgAsPngUri=function(e,t,i){d(e);var a=t||{},r=a.encoderType,o=void 0===r?"image/png":r,l=a.encoderOptions,s=void 0===l?.8:l,c=a.canvg,u=function(e){var t=e.src,n=e.width,a=e.height,r=document.createElement("canvas"),l=r.getContext("2d"),d=window.devicePixelRatio||1;r.width=n*d,r.height=a*d,r.style.width=r.width+"px",r.style.height=r.height+"px",l.setTransform(d,0,0,d,0,0),c?c(r,t):l.drawImage(t,0,0);var u=void 0;try{u=r.toDataURL(o,s)}catch(f){if("undefined"!=typeof SecurityError&&f instanceof SecurityError||"SecurityError"===f.name){console.error("Rendered SVG images cannot be downloaded in this browser.");return}throw f}return"function"==typeof i&&i(u,r.width,r.height),Promise.resolve(u)};return c?n.prepareSvg(e,t).then(u):n.svgAsDataUri(e,t).then(function(e){return new Promise(function(t,i){var n=new Image;n.onload=function(){return t(u({src:n,width:n.width,height:n.height}))},n.onerror=function(){i("There was an error loading the data URI as an image on the following SVG\n"+window.atob(e.slice(26))+"Open the following link to see browser's diagnosis\n"+e)},n.src=e})})},n.download=function(e,t,i){if(navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(h(t),e);else{var n=document.createElement("a");if("download"in n){n.download=e,n.style.display="none",document.body.appendChild(n);try{var a=h(t),r=URL.createObjectURL(a);n.href=r,n.onclick=function(){return requestAnimationFrame(function(){return URL.revokeObjectURL(r)})}}catch(o){console.error(o),console.warn("Error while getting object URL. Falling back to string URL."),n.href=t}n.click(),document.body.removeChild(n)}else i&&i.popup&&(i.popup.document.title=e,i.popup.location.replace(t))}},n.saveSvg=function(e,t,i){var a=w();return c(e).then(function(e){return n.svgAsDataUri(e,i||{})}).then(function(e){return n.download(t,e,a)})},n.saveSvgAsPng=function(e,t,i){var a=w();return c(e).then(function(e){return n.svgAsPngUri(e,i||{})}).then(function(e){return n.download(t,e,a)})}},9909:function(e,t,i){"use strict";e.exports=i.p+"static/media/186949b230e46bbd80611c8b1224e2003c90fd71528ff034cabe25dc74445f782670632623e35cfdc778c27fcc6fce67fe7fc4e12ef7168cbf594a25934412d3.fe6d926d.csv"},8897:function(e,t,i){"use strict";e.exports=i.p+"static/media/f2201770123f4b364781aee7ac3512db444637a3ad42ef096c62d05e6637e8d48b4875ec59b514f9f028ae6c85b557a5d74de4b1e2d1c18d62c5114c6c9c27fa.213d22d6.csv"},9359:function(e,t,i){"use strict";e.exports=i.p+"static/media/00a731a6f302623f44df0e6ccf0109eb8e6f987662a4a7de47532fa4c4e500e6d7b671b3263883e96ed80ec0c463b92ab37f0727785dd3041c4f5f3f817d69c5.0e85747a.json"},8825:function(e,t,i){"use strict";e.exports=i.p+"static/media/09f204ccffdfb2918af2b98f13ad7ca24c4ea7e07a884e38ecf0e1f26008493cc5ed81a9bec3759c8d9b28453a69b3af7367257282d736e86fd5911219781594.3ce001f0.csv"},8227:function(e,t,i){"use strict";e.exports=i.p+"static/media/16b2a6ff3bd8958f70981c7dcf3d8df8963d3b090e070356369d0351a4727f07cdcb3671376d5f52bb7885407b82cbb9b91e59be48c59f2561e99be3c3826c7d.28bb8602.csv"},2673:function(e,t,i){"use strict";e.exports=i.p+"static/media/286bfcab293547b0b0d2222f6055ccef1f064e020131ef4aa44c88546a061dedba121772061f7ab730196cafd5d88cccff0f3446b7f4f61452ae3c46d73fca5d.e1139741.csv"},5645:function(e,t,i){"use strict";e.exports=i.p+"static/media/2880e81ce12a7c1ddfaeac0771b67ed977ff05b7a4424bcb813c8ae1ba17e4a66c6409f0bd98e4354be268ce56669464a9bcfe94aa862b9982bf7edb6dbcb13c.d68b32e1.json"},7375:function(e,t,i){"use strict";e.exports=i.p+"static/media/37d83ede2d54f8dc8d4d34fbb343d76c5c35598361224edb9250e1e0cb3d4e4721e48544a66ed0b851a8f450d173ecea158bbbe8b99f9b934dceb7da0ca75362.5a589e33.csv"},6210:function(e,t,i){"use strict";e.exports=i.p+"static/media/4c1bb0307299fcd88447463f790cffd46c524240fb688db45a20e691337c8d1972ef61667686474630a6209a54a99e96fc96a53c4c2d9313db2ea186af0bf29f.f6f1734d.png"},4735:function(e,t,i){"use strict";e.exports=i.p+"static/media/a2301ed0ed118644a516238abc5408f2db17ee67772fd9b7bb61f4680aef60798b2b5e1e9073bdd79a64b00abcdb4491337be8919af1ef13759f229644763a56.918a74b9.png"},2849:function(e,t,i){"use strict";e.exports=i.p+"static/media/b46883151e041b592666544e68e6e8e4a40c8d8638624dc4b8904749fd0da9325b877aad74811fca5f10756f5b5b269a514f4e6c336ac1a64f3256a598160a4d.b9654907.csv"},129:function(e,t,i){"use strict";e.exports=i.p+"static/media/c051fbc024553912e31968b35e537d4ad3592201b5f8e7bd13fd9d02e38599c5d541a704d0858c676328babb3e5c9c35dd7c6d67240090d094882a1cad8eece4.5a9f7c51.gif"},8673:function(e,t,i){"use strict";e.exports=i.p+"static/media/c4a76bf56594363a92c77a42b5a59a5ceec64d0fc1d6d203a7e76e8952eba5fafa4106f11bb323e5636913f9a0377ca33c6e946cd1aa2203fab5767dbe312876.c6b4f5ae.csv"},5585:function(e,t,i){"use strict";e.exports=i.p+"static/media/cceb7b1fe14fcf7fe29c3983f38219769a40ef20882b1d53a60ae5ea7d7fa4178c5f8d84067424d9530cb9f91ed9e326f443f819d4cb418dd6c915db15774481.b5ea54eb.json"},515:function(e,t,i){"use strict";e.exports=i.p+"static/media/df28d6fa9d61d14764b813e3ef9e63448e032cef21b8a16cfe40cb3f966c41f7fe6768b3c707450a18f59c50ad6ae9f64466ef8a07e657ba0a7698190d0c490f.d31e2937.csv"},2054:function(e,t,i){"use strict";e.exports=i.p+"static/media/186949b230e46bbd80611c8b1224e2003c90fd71528ff034cabe25dc74445f782670632623e35cfdc778c27fcc6fce67fe7fc4e12ef7168cbf594a25934412d3.fe6d926d.csv"},1400:function(e,t,i){"use strict";e.exports=i.p+"static/media/f2201770123f4b364781aee7ac3512db444637a3ad42ef096c62d05e6637e8d48b4875ec59b514f9f028ae6c85b557a5d74de4b1e2d1c18d62c5114c6c9c27fa.213d22d6.csv"},4144:function(e,t,i){"use strict";e.exports=i.p+"static/media/186949b230e46bbd80611c8b1224e2003c90fd71528ff034cabe25dc74445f782670632623e35cfdc778c27fcc6fce67fe7fc4e12ef7168cbf594a25934412d3.fe6d926d.csv"},6763:function(e,t,i){"use strict";e.exports=i.p+"static/media/f2201770123f4b364781aee7ac3512db444637a3ad42ef096c62d05e6637e8d48b4875ec59b514f9f028ae6c85b557a5d74de4b1e2d1c18d62c5114c6c9c27fa.213d22d6.csv"},9456:function(e,t,i){"use strict";function n(e){return e`# Amplia Saude - Fonte de Dados e Menu - AGO2022`}function a(e){return e`## Menu Amplia`}function r(e,t){return function(i,n){let a=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M7.87022 11.875L8.27489 11.5813L8.27479 11.5812L8.27437 11.5806L8.27271 11.5783L8.26613 11.5693L8.24029 11.5336L8.14075 11.3965L7.77298 10.8897L6.54497 9.19795C5.5772 7.86508 4.40312 6.24886 3.57783 5.11549C3.4851 4.9864 3.47887 4.82826 3.53937 4.69659C3.59954 4.56564 3.70401 4.5 3.81824 4.5H15.1818C15.296 4.5 15.4005 4.56564 15.4606 4.69659C15.5211 4.82825 15.5149 4.98637 15.4222 5.11546C14.5967 6.24906 13.4246 7.86547 12.4588 9.19836C11.9758 9.86506 11.5443 10.4609 11.2336 10.8901L10.8667 11.397L10.7674 11.5342L10.7416 11.5698L10.7351 11.5788L10.7334 11.5811L10.733 11.5817L10.7329 11.5818L11.1379 11.875L10.7329 11.5819L10.6379 11.7131V11.875V17.125C10.6379 17.363 10.4624 17.5 10.321 17.5H8.68715C8.54577 17.5 8.37022 17.363 8.37022 17.125V11.875V11.7127L8.27493 11.5814L7.87022 11.875Z" stroke="white"/>
<path d="M18.75 11.5C18.75 13.8472 16.8472 15.75 14.5 15.75C12.1528 15.75 10.25 13.8472 10.25 11.5C10.25 9.15279 12.1528 7.25 14.5 7.25C16.8472 7.25 18.75 9.15279 18.75 11.5Z" fill="white" stroke="#151472" stroke-width="0.5"/>
<path d="M16.8126 9.70565C16.9556 9.56262 16.9556 9.33072 16.8126 9.18769C16.6696 9.04466 16.4377 9.04466 16.2946 9.18769L14.5001 10.9822L12.7056 9.18769C12.5626 9.04466 12.3307 9.04466 12.1877 9.18769C12.0447 9.33072 12.0447 9.56262 12.1877 9.70565L13.9822 11.5001L12.1877 13.2946C12.0447 13.4377 12.0447 13.6696 12.1877 13.8126C12.3307 13.9556 12.5626 13.9556 12.7056 13.8126L14.5001 12.0181L16.2946 13.8126C16.4377 13.9556 16.6696 13.9556 16.8126 13.8126C16.9556 13.6696 16.9556 13.4377 16.8126 13.2946L15.0181 11.5001L16.8126 9.70565Z" fill="#151472"/>
</svg>`,r=`<svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8C2 6 2.39956 2 5.9956 2C11.2138 2 8.9923 8 12.9879 8C17.4829 8 16.9835 4 16.9835 2" stroke="#151472" stroke-width="3"/>
</svg>`,o=`<svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 7C1 5 1.39956 1 4.9956 1C10.2138 1 7.9923 7 11.9879 7C16.4829 7 15.9835 3 15.9835 1" stroke="#151472" stroke-width="1.5" stroke-dasharray="2.5 1"/>
</svg>`,l=0,s=Symbol(),d=Symbol(),c=Symbol();function u(a,r,o,u){r=r||"";let f=document.createElement("div"),m={},h={},v={};Object.defineProperty(m,"expression",{get(){let e={};for(let t in m){let i=m[t];"expression"!=t&&(e[i[0]]=i[1])}return e}}),Object.defineProperty(m,"urlids",{get(){let e=[];for(let t in v)e.push(v[t]);return e.join("")}});let b=document.createElement("div"),g=document.createElement("div"),x=document.createElement("div"),y=document.createElement("div"),w=document.createElement("div"),A=document.createElement("div");b.classList.add("menuAbas"),g.classList.add("abas"),y.classList.add("legenda"),x.classList.add("menuCompacto"),w.classList.add("background-1"),A.classList.add("background-2"),b.append(g),b.append(x),b.append(w),b.append(A),x.append(y),b.setAttribute("style",`--corFundoMenu: ${o};`),u&&b.classList.add("principal"),i.forEach((i,a)=>{!function(i,a,o){let u="m"+ ++l,p=document.createElement("div"),b=document.createElement("div"),g=document.createElement("div"),x=document.createElement("div"),y=document.createElement("div"),w=document.createElement("div"),A=document.createElement("div"),_=document.createElement("div"),C=o+2;m[a.varName]="",h[a.varName]="",v[a.varName]="";let E=[];function S(){p[d](),f.dispatchEvent(new t("input"))}p[d]=function(){let t=E.filter(e=>e.checked).map(t=>e(t.value)),i=E.filter(e=>e.checked).map(e=>e[c].expression),n=E.filter(e=>e.checked).map(e=>e[c].urlid);m[a.varName]=[a.attrIndex,i],v[a.varName]=n.join(""),t.length?b.classList.add("selecionado"):b.classList.remove("selecionado");let r=t.join(e(" ou "));y.innerHTML=r,y.setAttribute("title",r),h[a.varName]=r},p.classList.add("itemMenuCompacto"),p.classList.add(a.varName),b.classList.add("titulo"),b.innerHTML=e(a.title),x.classList.add("valoresSelecionados"),y.classList.add("textoValoresSelecionados"),w.classList.add("icone"),w.innerHTML="expand_more",p.append(b),g.append(x),p.append(g),x.append(w),x.append(y),A.classList.add("submenu"),A.style["grid-column"]=C+"/"+(C+1),_.classList.add("itens"),_.classList.add("i"+o),_.classList.add("ABA"+n),A.append(_),p[s]=A,p.style["grid-column-start"]=C,p.addEventListener("click",e=>{if(p.classList.contains("aberto"))p.classList.remove("aberto"),A.classList.remove("aberto");else{let t=p.parentNode.querySelector(".aberto");t&&(t.classList.remove("aberto"),t[s].classList.remove("aberto")),p.classList.add("aberto"),A.classList.add("aberto")}});let k=null;a.itens.forEach((t,i)=>{let n=document.createElement("div"),o=document.createElement("label"),l=document.createElement("input");o.innerHTML=e(t.name),o.setAttribute("for",u+i),l.setAttribute("type",a.input),l.setAttribute("value",t.name),r.indexOf(t.urlid)>=0&&l.setAttribute("checked","checked"),l.setAttribute("id",u+i),l.setAttribute("name","radio"===a.input?u:u+i),l[c]=t,n.classList.add("item"),n.append(l),n.append(o),_.append(n),E.push(l),l.addEventListener("input",e=>{e.stopPropagation(),S()}),"radio"==a.input&&l.addEventListener("click",e=>{if(e.target===k){e.target.checked=!1,k=null,S();return}k=e.target})}),i.append(p),i.append(A),p[d]()}(x,i,a)});let _=f.attachShadow({mode:"open"});return _.append(function(){let e=document.createElement("style");return e.textContent=`                  
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
      `,e}()),_.append(b),f.limpa=function(){let e=x.querySelectorAll("input:checked");for(let i=0;i<e.length;i++)e[i].checked=!1;let n=x.querySelectorAll(".itemMenuCompacto");for(let a=0;a<n.length;a++)n[a][d]();f.dispatchEvent(new t("input"))},f.cloneMenu=function(){let e=x.querySelectorAll("input:checked"),t=p(a),i=t.shadowRoot.querySelectorAll("input");for(let n=0;n<e.length;n++)for(let r=0;r<i.length;r++)e[n][c]===i[r][c]&&(i[r].checked=!0);let o=t.shadowRoot.querySelectorAll(".itemMenuCompacto");for(let l=0;l<o.length;l++)o[l][d]();return t},Object.defineProperty(f,"value",{get:()=>m}),Object.defineProperty(f,"texto",{get:()=>h}),[f,g,y]}function f(t,i,r){let o,l;if(o=document.createElement("div"),(l=document.createElement("span")).classList.add("tituloAba"),l.innerHTML=e(i),o.classList.add("aba"),o.appendChild(l),n===r){let s,d,c;o.classList.add("selecionada"),(c=document.createElement("div")).classList.add("limpaFiltro"),s=document.createElement("span"),d=document.createElement("span"),s.innerHTML=a,d.innerHTML=e("LIMPAR<br>FILTROS"),c.appendChild(s),c.appendChild(d),o.appendChild(c),c.addEventListener("click",e=>{t.limpa(),t.dispatchEvent(new CustomEvent("limparFiltros",{detail:{index:r+1}}))})}else o.addEventListener("click",e=>{t.dispatchEvent(new CustomEvent("aba",{detail:{index:r+1}}))});return o}function p(e,t,n){let[a,r,l]=u(null,t,n,!1),s=a.shadowRoot.querySelector(".menuCompacto");s.style["grid-template-columns"]=`110px repeat(${i.length},84px) 0px`,s.style.gap="2px",l.style["background-color"]="#ffffff66",l.style.color="var(--corFonte)",l.style["border-radius"]="0px 0px 0px 8px";let d=document.createElement("div"),c=document.createElement("div");return d.classList.add("titulo"),d.innerHTML="&nbsp",c.classList.add("icone"),c.innerHTML=o,l.append(d),l.append(c),a}return{principal:function(t){let[i,n,a]=u(null,t,"#E5E5E5",!0);n.append(f(i,"NASCIDOS VIVOS",0)),n.append(f(i,"CARACTER\xcdSTICAS DO NASCIMENTO",1)),n.append(f(i,"MORTALIDADE PERINATAL E INFANTIL",2));let o=document.createElement("div"),l=document.createElement("div");return o.classList.add("titulo"),l.classList.add("icone"),l.innerHTML=r,o.innerHTML=e("CONSULTA<br>PRINCIPAL"),a.append(o),a.append(l),i},local:p}}}function o(e){return e`### Nascidos Vivos`}function l(e){return e.principal()}function s(){return[{title:"PESO AO<br>NASCER",varName:"PESO",ordinal:!0,input:"checkbox",attrIndex:0,itens:[{name:"Normal",style:[],expression:[3],urlid:"A"},{name:"Baixo peso",style:["alta-influencia"],expression:[2],urlid:"B"},{name:"Muito baixo peso",style:["alta-influencia"],expression:[1],urlid:"C"},{name:"Ignorado",style:[],expression:[0],urlid:"D"}]},{title:"IDADE<br>GESTACIONAL",varName:"IDADE_GESTACIONAL",ordinal:!0,input:"checkbox",attrIndex:1,itens:[{name:"P\xf3s-termo",style:[],expression:[7],urlid:"E"},{name:"A termo tardio",style:[],expression:[6],urlid:"F"},{name:"A termo completo",style:[],expression:[5],urlid:"G"},{name:"A termo precoce",style:[],expression:[4],urlid:"H"},{name:"Pr\xe9-termo moderado",style:["alta-influencia"],expression:[3],urlid:"I"},{name:"Muito pr\xe9-termo",style:["alta-influencia"],expression:[2],urlid:"J"},{name:"Pr\xe9-termo extremo",style:["alta-influencia"],expression:[1],urlid:"K"},{name:"Ignorado",style:[],expression:[0],urlid:"L"}]},{title:"ADEQUA\xc7\xc3O \xc0<br>IDADE GESTAC.",varName:"ADEQ_IDADE_GESTACIONAL",ordinal:!0,input:"checkbox",attrIndex:2,itens:[{name:"GIG",style:[],expression:[3],urlid:"M"},{name:"AIG",style:["alta-influencia"],expression:[2],urlid:"N"},{name:"PIG",style:["alta-influencia"],expression:[1],urlid:"O"},{name:"Ignorado",style:[],expression:[0],urlid:"P"}]},{title:"SEXO",varName:"SEXO",ordinal:!1,input:"checkbox",attrIndex:3,itens:[{name:"Feminino",style:[],expression:[2],urlid:"Q"},{name:"Masculino",style:[],expression:[1],urlid:"R"},{name:"Indeterminado",style:[],expression:[0],urlid:"S"}]},{title:"ANOMALIA<br>CONG\xcaNITA",varName:"ANOMAL_CONGENITA",ordinal:!1,input:"radio",attrIndex:4,itens:[{name:"N\xe3o",style:[],expression:[2],urlid:"T"},{name:"Sim",style:["alta-influencia"],expression:[1],urlid:"U"},]},{title:"RA\xc7A/COR<br>DA M\xc3E",varName:"RACA_COR_MAE",ordinal:!1,input:"checkbox",attrIndex:5,itens:[{name:"Branca",style:[],expression:[1],urlid:"V"},{name:"Preta",style:[],expression:[2],urlid:"W"},{name:"Parda",style:[],expression:[4],urlid:"X"},{name:"Outros",style:[],expression:[3,4,5],urlid:"Y"},{name:"Ignorado",style:[],expression:[0],urlid:"Z"}]},{title:"ESCOLARIDADE<br>DA M\xc3E",varName:"ESCOLARIDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:6,itens:[{name:"Superior",style:[],expression:[7],urlid:"a"},{name:"Ensino m\xe9dio",style:[],expression:[6],urlid:"b"},{name:"Fundamental completo",style:[],expression:[5],urlid:"c"},{name:"Fundamental incompleto",style:[],expression:[4,3,2],urlid:"d"},{name:"Sem",style:[],expression:[1],urlid:"e"},{name:"Ignorado",style:[],expression:[0],urlid:"f"}]},{title:"ESTADO CIVIL<br>DA M\xc3E",varName:"ESTADO_CIVIL_MAE",ordinal:!1,input:"checkbox",attrIndex:7,itens:[{name:"Solteira",style:[],expression:[1],urlid:"g"},{name:"Casada ou uni\xe3o est\xe1vel",style:[],expression:[2],urlid:"h"},{name:"Vi\xfava",style:[],expression:[3],urlid:"i"},{name:"Separada ou divorcidada",style:[],expression:[4],urlid:"j"},{name:"Ignorado",style:[],expression:[0],urlid:"k"}]},{title:"IDADE<br>DA M\xc3E",varName:"IDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:8,itens:[{name:"10-14",style:[],expression:[1],urlid:"l"},{name:"15-19",style:[],expression:[2],urlid:"m"},{name:"20-29",style:[],expression:[3],urlid:"n"},{name:"30-39",style:[],expression:[4],urlid:"o"},{name:"40-49",style:["alta-influencia"],expression:[5],urlid:"p"},{name:"50+",style:["alta-influencia"],expression:[6],urlid:"q"},{name:"Ignorado",style:[],expression:[0],urlid:"r"}]},{title:"CONSULTAS<BR>DE PR\xc9 NATAL",varName:"CONSULTAS",ordinal:!0,input:"checkbox",attrIndex:9,itens:[{name:"7+",style:[],expression:[4],urlid:"s"},{name:"4 a 6",style:[],expression:[3],urlid:"t"},{name:"1 a 3",style:["alta-influencia"],expression:[2],urlid:"u"},{name:"0",style:["alta-influencia"],expression:[1],urlid:"v"},{name:"Ignorado",style:[],expression:[0],urlid:"w"}]},{title:"TIPO<br>PARTO",varName:"PARTO",ordinal:!1,input:"checkbox",attrIndex:10,itens:[{name:"Vaginal",style:[],expression:[1],urlid:"x"},{name:"Ces\xe1rio",style:[],expression:[2],urlid:"y"},{name:"Indeterminado",style:[],expression:[0],urlid:"z"}]},{title:"TRAB PARTO<br>INDUZIDO",varName:"STTRABPART",ordinal:!1,input:"radio",attrIndex:11,itens:[{name:"SIM",style:[],expression:[1],urlid:"9"},{name:"N\xc3O",style:[],expression:[2],urlid:"8"},]},{title:"ADEQUA\xc7\xc3O<br>PR\xc9 NATAL",varName:"KOTELCHUCK",ordinal:!0,input:"checkbox",attrIndex:12,itens:[{name:"N\xe3o fez",style:["alta-influencia"],expression:[1],urlid:"7"},{name:"Inadequado",style:["alta-influencia"],expression:[2],urlid:"6"},{name:"Intermedi\xe1rio",style:[],expression:[3],urlid:"5"},{name:"Adequado",style:[],expression:[4],urlid:"4"},{name:"Mais que adequado",style:[],expression:[5],urlid:"3"},{name:"Ignorado",style:[],expression:[0],urlid:"2"},]},]}function d(e,t){return e(t,0)}function c(e){return e`### Características do Nascimento`}function u(e){return e.principal()}function f(){return[{title:"PESO AO<br>NASCER",varName:"PESO",ordinal:!0,input:"checkbox",attrIndex:0,itens:[{name:"Normal",style:[],expression:[3],urlid:"A"},{name:"Baixo peso",style:["alta-influencia"],expression:[2],urlid:"B"},{name:"Muito baixo peso",style:["alta-influencia"],expression:[1],urlid:"C"},{name:"Ignorado",style:[],expression:[0],urlid:"D"}]},{title:"IDADE<br>GESTACIONAL",varName:"IDADE_GESTACIONAL",ordinal:!0,input:"checkbox",attrIndex:1,itens:[{name:"P\xf3s-termo",style:[],expression:[7],urlid:"E"},{name:"A termo tardio",style:[],expression:[6],urlid:"F"},{name:"A termo completo",style:[],expression:[5],urlid:"G"},{name:"A termo precoce",style:[],expression:[4],urlid:"H"},{name:"Pr\xe9-termo tardio",style:["alta-influencia"],expression:[3],urlid:"I"},{name:"Pr\xe9-termo moderado",style:["alta-influencia"],expression:[2],urlid:"J"},{name:"Muito pr\xe9-termo",style:["alta-influencia"],expression:[1],urlid:"K"},{name:"Ignorado",style:[],expression:[0],urlid:"L"}]},{title:"ADEQUA\xc7\xc3O \xc0<br>IDADE GESTAC.",varName:"ADEQ_IDADE_GESTACIONAL",ordinal:!0,input:"checkbox",attrIndex:2,itens:[{name:"GIG",style:[],expression:[3],urlid:"M"},{name:"AIG",style:["alta-influencia"],expression:[2],urlid:"N"},{name:"PIG",style:["alta-influencia"],expression:[1],urlid:"O"},{name:"Ignorado",style:[],expression:[0],urlid:"P"}]},{title:"SEXO",varName:"SEXO",ordinal:!1,input:"checkbox",attrIndex:3,itens:[{name:"Feminino",style:[],expression:[2],urlid:"Q"},{name:"Masculino",style:[],expression:[1],urlid:"R"},{name:"Indeterminado",style:[],expression:[0],urlid:"S"}]},{title:"ANOMALIA<br>CONG\xcaNITA",varName:"ANOMAL_CONGENITA",ordinal:!1,input:"radio",attrIndex:4,itens:[{name:"N\xe3o",style:[],expression:[2],urlid:"T"},{name:"Sim",style:["alta-influencia"],expression:[1],urlid:"U"},]},{title:"RA\xc7A/COR<br>DA M\xc3E",varName:"RACA_COR_MAE",ordinal:!1,input:"checkbox",attrIndex:5,itens:[{name:"Branca",style:[],expression:[1],urlid:"V"},{name:"Preta",style:[],expression:[2],urlid:"W"},{name:"Parda",style:[],expression:[4],urlid:"X"},{name:"Outros",style:[],expression:[3,4,5],urlid:"Y"},{name:"Ignorado",style:[],expression:[0],urlid:"Z"}]},{title:"ESCOLARIDADE<br>DA M\xc3E",varName:"ESCOLARIDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:6,itens:[{name:"Superior",style:[],expression:[7],urlid:"a"},{name:"Ensino m\xe9dio",style:[],expression:[6],urlid:"b"},{name:"Fundamental completo",style:[],expression:[5],urlid:"c"},{name:"Fundamental incompleto",style:[],expression:[4,3,2],urlid:"d"},{name:"Sem",style:[],expression:[1],urlid:"e"},{name:"Ignorado",style:[],expression:[0],urlid:"f"}]},{title:"ESTADO CIVIL<br>DA M\xc3E",varName:"ESTADO_CIVIL_MAE",ordinal:!1,input:"checkbox",attrIndex:7,itens:[{name:"Solteira",style:[],expression:[1],urlid:"g"},{name:"Casada ou uni\xe3o est\xe1vel",style:[],expression:[2],urlid:"h"},{name:"Vi\xfava",style:[],expression:[3],urlid:"i"},{name:"Separada ou divorcidada",style:[],expression:[4],urlid:"j"},{name:"Ignorado",style:[],expression:[0],urlid:"k"}]},{title:"IDADE<br>DA M\xc3E",varName:"IDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:8,itens:[{name:"10-14",style:[],expression:[1],urlid:"l"},{name:"15-19",style:[],expression:[2],urlid:"m"},{name:"20-29",style:[],expression:[3],urlid:"n"},{name:"30-39",style:[],expression:[4],urlid:"o"},{name:"40-49",style:["alta-influencia"],expression:[5],urlid:"p"},{name:"50+",style:["alta-influencia"],expression:[6],urlid:"q"},{name:"Ignorado",style:[],expression:[0],urlid:"r"}]},{title:"APGAR<BR>5\xba MINUTO",varName:"APGAR5",ordinal:!0,input:"checkbox",attrIndex:13,itens:[{name:"Boa vitalidade",style:[],expression:[3],urlid:"s"},{name:"Asfixia moderada",style:["alta-influencia"],expression:[2],urlid:"t"},{name:"Asfixia grave",style:["alta-influencia"],expression:[1],urlid:"u"},{name:"Ignorado",style:[],expression:[0],urlid:"v"}]},{title:"TIPO<br>PARTO",varName:"PARTO",ordinal:!1,input:"checkbox",attrIndex:10,itens:[{name:"Vaginal",style:[],expression:[1],urlid:"w"},{name:"Ces\xe1rio",style:[],expression:[2],urlid:"x"},{name:"Indeterminado",style:[],expression:[0],urlid:"y"}]},{title:"TRAB PARTO<br>INDUZIDO",varName:"STTRABPART",ordinal:!1,input:"radio",attrIndex:11,itens:[{name:"SIM",style:[],expression:[1],urlid:"z"},{name:"N\xc3O",style:[],expression:[2],urlid:"9"},]},{title:"ADEQUA\xc7\xc3O<br>PR\xc9 NATAL",varName:"KOTELCHUCK",ordinal:!0,input:"checkbox",attrIndex:12,itens:[{name:"N\xe3o fez",style:["alta-influencia"],expression:[1],urlid:"8"},{name:"Inadequado",style:["alta-influencia"],expression:[2],urlid:"7"},{name:"Intermedi\xe1rio",style:[],expression:[3],urlid:"6"},{name:"Adequado",style:[],expression:[4],urlid:"5"},{name:"Mais que adequado",style:[],expression:[5],urlid:"4"},{name:"Ignorado",style:[],expression:[0],urlid:"3"},]},]}function p(e,t){return e(t,1)}function m(e){return e`### Mortalidade Perinatal e infantil`}function h(e){return e.principal()}function v(){return[{title:"PESO AO<br>NASCER",varName:"PESO",ordinal:!0,input:"checkbox",attrIndex:1,itens:[{name:"Normal",style:[],expression:[3],urlid:"A"},{name:"Baixo peso",style:["alta-influencia"],expression:[2],urlid:"B"},{name:"Muito baixo peso",style:["alta-influencia"],expression:[1],urlid:"C"},{name:"Ignorado.",style:[],expression:[0],urlid:"D"}]},{title:"SEXO",varName:"SEXO",ordinal:!1,input:"checkbox",attrIndex:2,itens:[{name:"Feminino",style:[],expression:[2],urlid:"E"},{name:"Masculino",style:[],expression:[1],urlid:"F"},{name:"Indeterminado",style:[],expression:[0],urlid:"G"}]},{title:"RA\xc7A/COR",varName:"RACA_COR",ordinal:!1,input:"checkbox",attrIndex:3,itens:[{name:"Branca",style:[],expression:[1],urlid:"H"},{name:"Preta",style:[],expression:[2],urlid:"I"},{name:"Parda",style:[],expression:[4],urlid:"J"},{name:"Outros",style:[],expression:[3,4,5],urlid:"K"},{name:"Ignorado",style:[],expression:[0],urlid:"L"}]},{title:"ESCOLARIDADE<br>DA M\xc3E",varName:"ESCOLARIDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:4,itens:[{name:"Superior",style:[],expression:[7],urlid:"M"},{name:"Ensino m\xe9dio",style:[],expression:[6],urlid:"N"},{name:"Fundamental completo",style:[],expression:[5],urlid:"O"},{name:"Fundamental incompleto",style:[],expression:[4,3,2],urlid:"P"},{name:"Sem",style:[],expression:[1],urlid:"Q"},{name:"Ignorado",style:[],expression:[0],urlid:"R"}]},{title:"IDADE<br>DA M\xc3E",varName:"IDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:5,itens:[{name:"10-14",style:[],expression:[1],urlid:"S"},{name:"15-19",style:[],expression:[2],urlid:"T"},{name:"20-29",style:[],expression:[3],urlid:"U"},{name:"30-39",style:[],expression:[4],urlid:"V"},{name:"40-49",style:["alta-influencia"],expression:[5],urlid:"W"},{name:"50+",style:["alta-influencia"],expression:[6],urlid:"X"},{name:"Ignorado",style:[],expression:[0],urlid:"Y"}]},{title:"TIPO<br>PARTO",varName:"PARTO",ordinal:!1,input:"checkbox",attrIndex:6,itens:[{name:"Vaginal",style:[],expression:[1],urlid:"Z"},{name:"Ces\xe1rio",style:[],expression:[2],urlid:"a"},{name:"Indeterminado",style:[],expression:[0],urlid:"b"}]},]}function b(e,t){return e(t,2)}function g(e){return e`## DataSources`}function x(){return function(){let e="https://storage.googleapis.com/amplia/ufs2/",t=(e,t)=>e.data<t.data?-1:e.data>t.data?1:0,i=[2,3,2,2,2,3,3,3,3,3,2,2],n=[3,2,2],a=null;async function r(){return null!=a?a:await fetch(`${e}index.dat`).then(e=>e.arrayBuffer()).then(e=>a=new DataView(e))}async function o(e){let t=await r(),i=t.buffer.byteLength/12,n=0,a=i-1;for(;n<=a;){let o=Math.floor((n+a)/2),l=t.getUint32(12*o);if(e==l)return[t.getUint32(12*o+4),t.getUint32(12*o+8)];e<l?a=o-1:n=o+1}return null}function l(e,t,a,r){r=r||{};let o=(t+a)*11,l=e.getUint32(o).toString();l=l.substring(0,4)+"-"+l.substring(4,6)+"-"+l.substring(6);let s=e.getUint16(o+4),d=e.getUint32(o+6),c=e.getUint8(o+10),u=0,f=[];for(let p=0;p<i.length;p++){let m=((1<<i[p])-1<<u&d)>>u;f.push(m),u+=i[p]}u=0;for(let h=0;h<n.length;h++){let v=((1<<n[h])-1<<u&c)>>u;f.push(v),u+=n[h]}for(let b=0;b<f.length;b++){let g=f[b],x=r[b],y=!0;if(x&&x.length){y=!1;for(let w=0;w<x.length&&!y;w++)y=x[w].includes(g)}if(!y)return[l]}return[l,s,...f]}function s(t){let i=t;return i>1e5&&(i=Math.floor(t/1e4)),fetch(`${e}uf${i}.dat`).then(e=>e.arrayBuffer()).then(e=>new DataView(e)).then(async e=>{let i,n;return t>1e5?[n,i]=await o(t):(n=0,i=e.buffer.byteLength/11),[e,n,i]})}function d(e){let t={};if(e)for(let i in e)t[i]=e[i];return t}return{fetchTotal:function(e,i){return i=d(i),s(e).then(([e,n,a])=>(function(e,n,a){let r=new Map;for(let o=0;o<a;o++){let s=l(e,n,o,i),d=r.get(s[0]);d?d[1]++:(d=[0,1],r.set(s[0],d)),s.length>1&&d[0]++}let c=[],u=[];for(let[f,p]of r)c.push({data:f,valor:p[0]}),u.push({data:f,valor:p[1]});return c.sort(t),u.sort(t),[c,u]})(e,n,a))},fetchPIG:function(e,i){return i=d(i),s(e).then(([e,n,a])=>(function(e,n,a){let r=new Map;for(let o=0;o<a;o++){let s=l(e,n,o,i),d=r.get(s[0]);d?d[3]++:(d=[0,0,0,1],r.set(s[0],d)),s.length>1&&(1==s[4]?d[0]++:2==s[4]?d[1]++:3==s[4]&&d[2]++)}let c=[],u=[];for(let[f,p]of r)(p[0]||p[1]||p[2])&&(c.push({data:f,ig:"PEQUENO",total:p[0]}),c.push({data:f,ig:"ADEQUADO",total:p[1]}),c.push({data:f,ig:"GRANDE",total:p[2]})),u.push({data:f,valor:p[3]});return c.sort(t),u.sort(t),[c,u]})(e,n,a))},fetchPeso:function(e,i){return i=d(i),s(e).then(([e,n,a])=>(function(e,n,a){let r=new Map;for(let o=0;o<a;o++){let s=l(e,n,o,i);if(s.length>1){let d=r.get(s[0]);d?(d[0]+=s[1],d[1]++):(d=[s[1],1],r.set(s[0],d))}}let c=[];for(let[u,f]of r){let p={data:u,valor:f[0]/f[1],total:f[1]};c.push(p)}return c.sort(t),c})(e,n,a))},fetchRobson:function(e,i){return i=d(i),s(e).then(([e,n,a])=>(function(e,n,a){let r=new Map;for(let o=0;o<a;o++){let s=l(e,n,o,i),d=r.get(s[0]);d?d[3]++:(d=[0,0,0,1],r.set(s[0],d)),s.length>1&&(1==s[16]?d[0]++:2==s[16]?d[1]++:3==s[16]&&d[2]++)}let c=[],u=[];for(let[f,p]of r)(p[0]||p[1]||p[2])&&(c.push({data:f,robson:"Robson1a4",total:p[0]}),c.push({data:f,robson:"Robson5",total:p[1]}),c.push({data:f,robson:"Robson6a10",total:p[2]})),u.push({data:f,valor:p[3]});return c.sort(t),u.sort(t),[c,u]})(e,n,a))}}}()}function y(){return function(){let e="https://storage.googleapis.com/amplia/sim-ufs/",t=(e,t)=>e.data<t.data?-1:e.data>t.data?1:0,i=[2,2,2,3,3,3,2,2],n=null;async function a(){return null!=n?n:await fetch(`${e}index.dat`).then(e=>e.arrayBuffer()).then(e=>n=new DataView(e))}async function r(e){let t=await a(),i=t.buffer.byteLength/12,n=0,r=i-1;for(;n<=r;){let o=Math.floor((n+r)/2),l=t.getUint32(12*o);if(e==l)return[t.getUint32(12*o+4),t.getUint32(12*o+8)];e<l?r=o-1:n=o+1}return null}function o(e,t,n,a){a=a||{};let r=(t+n)*10,o=e.getUint32(r).toString();o=o.substring(0,4)+"-"+o.substring(4,6)+"-"+o.substring(6);let l=e.getUint16(r+4),s=e.getUint32(r+6),d=0,c=[];for(let u=0;u<i.length;u++){let f=((1<<i[u])-1<<d&s)>>d;c.push(f),d+=i[u]}for(let p=0;p<c.length;p++){let m=c[p],h=a[p],v=!0;if(h&&h.length){v=!1;for(let b=0;b<h.length&&!v;b++)v=h[b].includes(m)}if(!v)return[o]}return[o,l,...c]}function l(t){let i=t;return i>1e5&&(i=Math.floor(t/1e4)),fetch(`${e}uf${i}.dat`).then(e=>e.arrayBuffer()).then(e=>new DataView(e)).then(async e=>{let i,n;return t>1e5?[n,i]=await r(t):(n=0,i=e.buffer.byteLength/10),[e,n,i]})}function s(e){let t={};if(e)for(let i in e)t[i]=e[i];return t}return{fetchNeoNatal:function(e,i){return i=s(i),l(e).then(([e,n,a])=>(function(e,n,a){let r=new Map;for(let l=0;l<a;l++){let s=o(e,n,l,i),d=r.get(s[0]);d?d[3]++:(d=[0,0,0,1],r.set(s[0],d)),s.length>1&&(1==s[2]?d[0]++:2==s[2]?d[1]++:3==s[2]&&d[2]++)}let c=[],u=[];for(let[f,p]of r)(p[0]||p[1]||p[2])&&(c.push({data:f,neonatal:"PRECOCE",total:p[0]}),c.push({data:f,neonatal:"TARDIO",total:p[1]}),c.push({data:f,neonatal:"NEOTOTAL",total:p[0]+p[1]}),c.push({data:f,neonatal:"POS",total:p[2]})),u.push({data:f,valor:p[3]});return c.sort(t),u.sort(t),[c,u]})(e,n,a))},fetchFetal:function(e,i){return(i=s(i))[3]=[],l(e).then(([e,n,a])=>(function(e,n,a){let r=new Map;for(let l=0;l<a;l++){let s=o(e,n,l,i),d=r.get(s[0]);d?d[3]++:(d=[0,0,0,1],r.set(s[0],d)),s.length>1&&0==s[2]&&d[0]++}let c=[],u=[];for(let[f,p]of r)(p[0]||p[1]||p[2])&&c.push({data:f,valor:p[0]}),u.push({data:f,valor:p[3]});return c.sort(t),u.sort(t),[c,u]})(e,n,a))},fetchRelParto:function(e,i){return i=s(i),l(e).then(([e,n,a])=>(function(e,n,a){let r=new Map;for(let l=0;l<a;l++){let s=o(e,n,l,i),d=r.get(s[0]);d?d[3]++:(d=[0,0,0,1],r.set(s[0],d)),s.length>1&&(1==s[9]?d[0]++:2==s[9]?d[1]++:3==s[9]&&d[2]++)}let c=[],u=[];for(let[f,p]of r)(p[0]||p[1]||p[2])&&(c.push({data:f,relparto:"ANTES",total:p[0]}),c.push({data:f,relparto:"DURANTE",total:p[1]}),c.push({data:f,relparto:"DEPOIS",total:p[2]})),u.push({data:f,valor:p[3]});return c.sort(t),u.sort(t),[c,u]})(e,n,a))},fetchTotal:function(e,i){return i=s(i),l(e).then(([e,n,a])=>(function(e,n,a){let r=new Map;for(let l=0;l<a;l++){let s=o(e,n,l,i),d=r.get(s[0]);d?d[1]++:(d=[0,1],r.set(s[0],d)),s.length>1&&d[0]++}let c=[],u=[];for(let[f,p]of r)c.push({data:f,valor:p[0]}),u.push({data:f,valor:p[1]});return c.sort(t),u.sort(t),[c,u]})(e,n,a))}}}()}function w(e){return e`### Alguns testes com os datasources`}function A(e,t){return e.fetchRobson(11,t.expression)}function _(e,t){return e.fetchPeso(11,t.expression)}function C(e){return e("municipios2.csv").csv()}function E(e,t){return e.fetchRelParto(35,t.expression)}function S(e){return e.expression}function k(e,t){return e.fetchFetal(35,t.expression)}function T(){return new Set}function O(e){return function(t){return e.add(t),t}}function I(e){return e.html`<style>
  @import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap);
  @import url(https://fonts.googleapis.com/icon?family=Material+Icons);    
</style>`}function M(e,t){let M=e.module(),D=new Map([["municipios2.csv",{url:new i.U(i(9909)),mimeType:"text/csv",toString:function(){return this.url}}]]);return M.builtin("FileAttachment",e.fileAttachments(e=>D.get(e))),M.variable(t()).define(["md"],n),M.variable(t()).define(["md"],a),M.variable(t("ampliaMenu")).define("ampliaMenu",["TL","Event"],r),M.variable(t()).define(["md"],o),M.variable(t("mp")).define("mp",["menuNascidosVivos"],l),M.variable(t("dadosMenuNascidosVivos")).define("dadosMenuNascidosVivos",s),M.variable(t("menuNascidosVivos")).define("menuNascidosVivos",["ampliaMenu","dadosMenuNascidosVivos"],d),M.variable(t()).define(["md"],c),M.variable(t("viewof cn")).define("viewof cn",["menuCaracteristicasNascimento"],u),M.variable(t("cn")).define("cn",["Generators","viewof cn"],(e,t)=>e.input(t)),M.variable(t("dadosMenuCaracteristicasNascimento")).define("dadosMenuCaracteristicasNascimento",f),M.variable(t("menuCaracteristicasNascimento")).define("menuCaracteristicasNascimento",["ampliaMenu","dadosMenuCaracteristicasNascimento"],p),M.variable(t()).define(["md"],m),M.variable(t("viewof mpi")).define("viewof mpi",["menuMortalidade"],h),M.variable(t("mpi")).define("mpi",["Generators","viewof mpi"],(e,t)=>e.input(t)),M.variable(t("dadosMenuMortalidade")).define("dadosMenuMortalidade",v),M.variable(t("menuMortalidade")).define("menuMortalidade",["ampliaMenu","dadosMenuMortalidade"],b),M.variable(t()).define(["md"],g),M.variable(t("datasource")).define("datasource",x),M.variable(t("datasource_sim")).define("datasource_sim",y),M.variable(t()).define(["md"],w),M.variable(t()).define(["datasource","cn"],A),M.variable(t()).define(["datasource","cn"],_),M.variable(t("municipios2")).define("municipios2",["FileAttachment"],C),M.variable(t()).define(["datasource_sim","mpi"],E),M.variable(t()).define(["mpi"],S),M.variable(t()).define(["datasource_sim","mpi"],k),M.variable(t("terms")).define("terms",T),M.variable(t("TL")).define("TL",["terms"],O),M.variable(t()).define(["htl"],I),M}function D(e){return e`# Amplia Saúde - Trilhas Exploratórias - v6.0 - Características do Nascimento`}function N(e,t){return e?new t.principal(e.principalUrlids):new t.principal}function L(e,t,i,n,a){return r=>{e.value.filter(e=>"PM25"!=e.variavel).forEach(e=>{t.value=t.value.filter(t=>t.idx!=e.i||t.filtrado),i.value.forEach(i=>{Promise.all([n[e.variavel](i.nome,r.target.value.expression)]).then(n=>{t.value=t.value.filter(t=>t.idx!=e.i||t.filtrado||t.municipio!=i.nome),t.value=t.value.concat({idx:e.i,municipio:i.nome,variavel:e.variavel,dados:a[e.variavel](n[0])})})})})}}function R(e,t,i){return e`
<div style="display:flex; width:100%; align-items:center; justify-content:space-between;">
<div>${t}</div><div>${i}</div>
</div>
`}function P(e,t,i,n,a,r,o){let l=document.createElement("div");for(let s=0;s<e.length;s++)l.append(t[e[s].variavel](e[s].i));return l.append(i()),n.create(l,{animation:150,handle:".drag",filter:".undraggable",onUpdate(t){let i=e[t.oldIndex];e.splice(t.oldIndex,1),e.splice(t.newIndex,0,i),a.value=e}}),r.select(l).selectAll("g[aria-label=x-axis] g.tick text").each(function(){let e=r.select(this),t=e.text();/[0-9]{4}/.test(t)&&e.style("font-size","14px").style("font-weight","700")}),o(),l}function F(){return 4}function B(e,t,i){return e?t(104,468,e.intervalo[0],e.intervalo[1]):t(104,468,i.intervalo[0],i.intervalo[1])}function U(e,t,i,n,a){return e`${t.map((e,t)=>i(e,t))}${t.length<n?a:""}`}function $(e,t,i,n,a,r,o,l,s,d,c,u,f,p,m){return e.select(t`
<input list="menu-municipios-options" id="menu-municipios" placeholder="Adicione um local" class="caixa-municipio">
<datalist id="menu-municipios-options">
${i.map(e=>e.municipio).sort(Intl.Collator().compare).map(e=>`<option value="${e}">`)}
</datalist>
`).on("change",e=>{if(!i.map(e=>e.municipio).includes(document.getElementById("menu-municipios").value)&&!n.includes(document.getElementById("menu-municipios").value))return;let t=e.target.value;if(!(a.length==r||a.map(e=>e.nome).includes(t))){for(let h of(o.value=o.value.concat([{nome:t,cor:l.find(e=>!a.map(e=>e.cor).includes(e))}]),s.setItem("municipios",JSON.stringify(o.value)),d))"PM25"==h.variavel&&n.includes(t)||Promise.all([c[h.variavel](t,"PM25"!=h.variavel?u.value.expression:null)]).then(e=>{f.value=f.value.concat({idx:h.i,municipio:t,variavel:h.variavel,dados:p[h.variavel](e[0])})});for(let v of[...new Set(m.filter(e=>e.filtrado).map(e=>e.idx))])Promise.all([c[d.find(e=>e.i==v).variavel](t,d.find(e=>e.i==v).filtros.value.expression)]).then(e=>{f.value=f.value.concat({idx:v,municipio:t,variavel:m.find(e=>e.idx==v).variavel,filtrado:!0,dados:p[m.find(e=>e.idx==v).variavel](e[0])})})}}).node()}function j(e,t,i,n,a,r,o,l){return(s,d)=>{let c=e.create("button").attr("class","btn-municipio").style("background-color",s.cor).style("display","inline-flex").style("align-items","flex-center").on("click",e=>{t.length>1&&(i.value=t.filter(e=>e!=s),n.setItem("municipios",JSON.stringify(i.value)),a.value=r.filter(e=>e.municipio!=s.nome))});return o.includes(s.nome)?c.append("span").text(s.nome):c.append("span").text(s.nome+(s.nome.includes("(")?"":" ("+l.find(e=>e.municipio==s.nome).sigla+")")),c.append("span").attr("class","material-icons-outlined").style("font-size","16px").style("margin-left","5px").style("display",1==t.length?"none":"inline").text("remove_circle_outline"),c.node()}}function z(e,t){return()=>e.create("button").attr("class","btn-remove").text("–").on("click",t).attr("title","Eliminar trilha").node()}function G(e,t){return()=>{let i=e.create("button").attr("class","btn-remove").on("click",t);return i.append("span").attr("class","material-icons-outlined").style("font-size","10px").text("content_copy"),i.attr("title","Duplicar trilha"),i.node()}}function H(e,t,i,n){return{PM25:e,PESO:t,ROBSON:i,TOTAL:n}}function V(e,t,i,n){return{PM25:e,PESO:t,ROBSON:i,TOTAL:n}}function q(e,t,i,n){return{PM25:e,PESO:t,ROBSON:i,TOTAL:n}}function W(e){return e`
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
`}function Z(){return{PESO:"#C8F9ED",PM25:"#F4947C",PIG:"#CDD9FA",TOTAL:"#FFFCD2",ROBSON:"#FADAE6"}}function X(){return{PESO:"#EDFDF9",PM25:"#FDEEEA",PIG:"#EEECFD",TOTAL:"#FFFEED",ROBSON:"#FDECEE"}}function J(e,t,i,n,a){return function(r,o,l=!1){function s(e){let t=o.scale("x"),i=e.offsetX;return i<t.range[0]&&(i=t.range[0]),i>t.range[1]&&(i=t.range[1]),i}let d=function(e){let t=a.select(o).select("g[aria-label=rule] line"),i=s(e);t.attr("x1",i).attr("x2",i)},c=function(a){let d=o.scale("x"),c=e[r].dados,u=s(a),f=c[t.center(c,d.invert(u))].x;l?i.value=f:n.value=f},u=0,f=0,p=null;function m(e){p&&p.attr("x",e.offsetX-f)}function h(i){let a=i.offsetX-f-u,l=o.scale("x");a<l.range[0]&&(a=l.range[0]),a>l.range[1]&&(a=l.range[1]);let s=e[r].dados;n.value=s[t.center(s,l.invert(a))].x}a.select(o).call(a.drag().on("start",e=>(function(e){if(a.select(o.parentElement).select("div.tooltip").style("visibility","hidden"),l){let t=a.select(o).select("rect.suscetibilidade"),i=a.select(o).select("line.concepcao"),n=a.select(o).select("g[aria-label=rule] line"),r=+t.attr("x"),s=+t.attr("width")+r;if(Math.abs(+n.attr("x1")-e.offsetX)>8&&r<e.offsetX&&s>e.offsetX){u=+t.attr("x")-i.attr("x1"),f=e.offsetX-r,p=a.select(o).append("rect").attr("x",t.attr("x")).attr("y",t.attr("y")).attr("width",t.attr("width")).attr("height",t.attr("height")).attr("stroke","black").attr("stroke-dasharray","5").attr("fill","none"),d=m,c=h;return}}d(e)})(e.sourceEvent)).on("drag",e=>d(e.sourceEvent)).on("end",e=>c(e.sourceEvent)))}}function Y(e,t,i,n,a){return function(r,o,l,s="valor",d=null){function c(e){let t=document.createElementNS("http://www.w3.org/2000/svg","svg"),i=document.createElementNS("http://www.w3.org/2000/svg","path");return t.setAttribute("width","18"),t.setAttribute("height","8"),t.setAttribute("fill","none"),i.setAttribute("d","M1 7C1 5 1.39956 1 4.9956 1C10.2138 1 7.9923 7 11.9879 7C16.4829 7 15.9835 3 15.9835 1"),i.setAttribute("stroke","#151472"),e?(i.setAttribute("stroke-width","1.5"),i.setAttribute("stroke-dasharray","2.5 1")):i.setAttribute("stroke-width","2"),t.appendChild(i),t}function u(e){let t=["de","da","do","dos","das","e"];if(e.length<=2)return e;let i=e.indexOf("(");i>=0&&(e.substring(i).trim(),e=e.substring(0,i).trim());let n=e.toLowerCase().split(" ");for(let a=0;a<n.length;a++)t.includes(n[a])||(n[a]=n[a][0].toUpperCase()+n[a].substring(1));return n.join(" ")}setTimeout(f=>{let p=r.parentElement.querySelector(".tooltip");p||((p=document.createElement("div")).setAttribute("class","tooltip"),p.style.backgroundColor=a[o]+"CC",r.parentElement.appendChild(p)),function(a){function f(t,i){t.addEventListener("mouseover",t=>{e.select(document.body).selectAll("g[aria-label=line]").style("opacity",function(t){return e.select(this).attr("stroke")==i.cor?1:.3})}),t.addEventListener("mouseout",t=>{e.select(document.body).selectAll("g[aria-label=line]").style("opacity",1)})}let p=n(l,o,s,d),m,h,v;m=r.scale("x"),h=r.scale("y"),v=m.apply("PM25"==o?t:i),a.style.visibility=v<m.range[0]?"hidden":"visible",a.style.top=`${h.range[1]+5}px`,v>250?(a.classList.remove("right"),a.style.left=`${v-10}px`):(a.style.left=`${v}px`,a.classList.add("right"));let b=p.valoresComparacao.length>0,g=document.createElement("div"),x=document.createElement("div");x.classList.add("periodo"),void 0!==p.semanas?x.textContent=`${p.semanaInicio} - ${p.semanaFim} - (sem ${p.semanas})`:x.textContent=`${p.semanaInicio} - ${p.semanaFim}`,g.appendChild(x),b?(g.classList.add("c2"),g.appendChild(c(!1)),g.appendChild(c(!0))):g.classList.add("c1");for(let y=0;y<p.municipios.length;y++){let w=document.createElement("div"),A=document.createElement("div"),_=document.createElement("div"),C=b?document.createElement("div"):null;w.classList.add("legenda"),w.style.color=p.municipios[y].cor,w.textContent="⬤",A.classList.add("municipio"),A.textContent=u(p.municipios[y].nome),f(A,p.municipios[y]),_.classList.add("valor"),_.textContent=p.valoresPrincipal[y],g.appendChild(w),g.appendChild(A),g.appendChild(_),C&&(C.classList.add("valor"),C.textContent=p.valoresComparacao[y],g.appendChild(C))}let E=document.createElement("div");E.classList.add("rodape"),E.innerHTML=`Unidade: <b>${p.unidade}</b><br>M\xe9dia Semanal`,g.appendChild(E),a.replaceChildren(g);let S=e.select(r).select("line.rule-shadow"),k=e.select(r).select("g[aria-label=rule] line");0===S.size()&&(S=e.select(k.node().parentElement).append("line").attr("class","rule-shadow").attr("stroke","#FFFFFF00").attr("stroke-width",5).attr("stroke-dasharray","none").attr("y1",k.attr("y1")).attr("y2",k.attr("y2")).attr("cursor","ew-resize")),S.attr("x1",k.attr("x1")).attr("x2",k.attr("x2"))}(p)})}}function Q(e,t,i,n,a,r,o,l,s,d){return function(c,u,f,p){let m="PM25"==u?e:t;function h(e){return e=e.toISOString().substring(0,10).split("-"),`${e[2]}/${e[1]}/${e[0]}`}function v(e){return(p&&(e=e[p]),"percentual"===f||"taxa"===f)?e.toLocaleString("pt-BR",{maximumFractionDigits:2}):e.toFixed(0)}let b={},g=n.filter(e=>e.idx==c).sort(function(e,t){return i.findIndex(e=>e.nome==t.municipio)-i.findIndex(t=>t.nome==e.municipio)}),x=g,y=g.filter(e=>e.filtrado),w=a[r.bisector(e=>e.inicio.getTime()).center(a,m)];if("PM25"==u){let A=e;"number"==typeof A&&(A=new Date(A));let _=t;"number"==typeof _&&(_=new Date(_));let C=Math.floor((A.getTime()-_.getTime())/6048e5);C>0&&C<=42&&(b.semanas=C)}return b.semanaInicio=h(w.inicio).substring(0,5),b.semanaFim=h(w.termino),b.unidade=o[u][f],b.valoresPrincipal=[],b.valoresComparacao=[],b.municipios=[],b.ufSelecionada=i.some(e=>l.includes(e.nome)),y.length>0&&(x=g.filter(e=>!e.filtrado),"PIG"!==u&&(y=y.filter(e=>!Object.values(s).includes(e.municipio)||"PM25"!=u)),y.forEach(e=>{let t=e.dados[d.center(e.dados,m)][f];b.valoresComparacao.push(v("PIG"==u?t[p]:t))})),x.forEach(e=>{let t=i.find(t=>t.nome==e.municipio),n=e.dados[d.center(e.dados,m)][f];b.municipios.push(t),b.valoresPrincipal.push(v("PIG"==u?n[p]:n))}),b}}function K(e,t){return function(i){let n=i.scale("x"),a=i.scale("y"),r=e;"number"==typeof r&&(r=new Date(r));let o=new Date(r.getTime()),l=new Date(r.getTime());o.setDate(o.getDate()+154),l.setDate(l.getDate()+266);let s=n.apply(r),d=n.apply(o),c=n.apply(l);t.select(i).insert("rect","g[aria-label=rule]").attr("class","suscetibilidade").attr("x",d).attr("y",a.range[1]).attr("width",c-d).attr("height",a.range[0]-a.range[1]).attr("stroke-width","2px").attr("stroke","#F4947C").attr("fill","#FFFFFF00").style("cursor","grab"),t.select(i).insert("line","g[aria-label=rule]").attr("x1",s).attr("y1",a.range[1]).attr("x2",s).attr("y2",a.range[0]).attr("stroke-width","2px").attr("stroke","#F4947C"),t.select(i).insert("line","g[aria-label=rule]").attr("class","concepcao").attr("x1",s).attr("y1",a.range[1]).attr("x2",d).attr("y2",a.range[1]).attr("stroke-width","2px").attr("stroke","#F4947C"),t.select(i).append("text").attr("class","rotuloSuscetibilidade").text("CONCEP\xc7\xc3O").attr("x",s).attr("y",a.range[1]-3),t.select(i).append("text").attr("class","rotuloSuscetibilidade").text("22\xaa SEM").attr("x",d).attr("y",a.range[1]-3),t.select(i).append("text").attr("class","rotuloSuscetibilidade").text("38\xaa SEM").attr("x",c).attr("y",a.range[1]-3)}}function ee(e,t,i,n,a,r,o,l,s,d,c,u,f,p,m,h,v,b,g,x,y,w,A,_,C,E,S,k,T){return O=>{let I=e.plot({marginTop:15,marginRight:0,width:t-65,height:i,x:{grid:!0,label:null,format:n,domain:a.find(e=>e.i==O).alterar_tempo?a.find(e=>e.i==O).alterar_tempo.map(e=>r[e].inicio):o.map(e=>r[e].inicio)},y:{grid:!0,domain:[0,l[s]],transform:e=>Math.min(122,e),label:null},marks:[e.rect([{y1:d[s][3],y2:l[s]}],{y1:"y1",y2:"y2",fill:"#FFEBEB",class:"faixa"}),e.rect([{y1:d[s][2],y2:d[s][3]}],{y1:"y1",y2:"y2",fill:"#FFF5EB"}),e.rect([{y1:d[s][1],y2:d[s][2]}],{y1:"y1",y2:"y2",fill:"#FFFFED"}),a.find(e=>e.i==O).mostra_media_movel?c.filter(e=>e.idx==O&&!Object.values(u).includes(e.municipio)).map((t,i)=>e.line(t.dados.filter(e=>f(e,O)),e.windowY({strict:!0,k:p,anchor:"middle",x:"x",y:"valor",curve:"monotone-x",strokeWidth:m,stroke:h.find(e=>e.nome==t.municipio).cor}))):c.filter(e=>e.idx==O&&!Object.values(u).includes(e.municipio)).map((t,i)=>e.line(t.dados.filter(e=>f(e,O)),{x:"x",y:"valor",curve:"monotone-x",strokeWidth:m,stroke:h.find(e=>e.nome==t.municipio).cor})),e.ruleX([c.filter(e=>e.idx==O)[0].dados[v.center(c.filter(e=>e.idx==O)[0].dados,b)]],{x:"x",strokeDasharray:"5"}),a.find(e=>e.i==O).mostra_media_movel?null:c.filter(e=>e.idx==O).map((t,i)=>e.dot([t.dados[v.center(t.dados,b)]],{x:"x",y:"valor",fill:h.find(e=>e.nome==t.municipio).cor}))]});return g(I,"PM25",O),x(I),y(O,I,!0),w`
<div style="--cor-trilha:${A.PM25}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${_.create("button").attr("class","btn-remove").text("–").on("click",C).node()}<br>
  ${E()}
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
<div class="trilha poluente" i=${O}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">POLUENTE</span>
    <div class="opcao-trilha">
      <label class="label-cabecalho-trilha">MÉDIA MÓVEL</label>       ${_.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==O).mostra_media_movel).on("change",e=>S(e,O)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">MODIFICAR PERÍODO</label> ${_.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==O).alterar_tempo).on("change",e=>k(e,O)).node()}
  </div>
    <span class="instrucaoSuscetibilidade">A janela no gráfico indica o período de maior suscetibilidade à poluição (22ª  à 38ª semana)</span>
    <span class="fonte" style="flex-grow: 0;">Fonte: SISAM</span>
  </div>
<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right">${I}</div>
</div>
${T(O)}
</div>
</div>
</div>`}}function et(e,t,i,n,a,r,o,l,s,d,c,u,f,p,m,h,v,b,g,x,y,w,A,_,C,E,S){return k=>{if(!e.map(e=>e.nome).every(e=>t.filter(e=>e.idx==k).map(e=>e.municipio).includes(e))||n.find(e=>e.i==k).filtros.value.expression&&n.find(e=>e.i==k).show_filtros&&t.filter(e=>e.idx==k).every(e=>void 0===e.filtrado)||a.value.expression&&t.filter(e=>e.idx==k).every(e=>void 0!==e.filtrado))return i();let T=r.plot({marginTop:5,marginRight:0,width:o-65,height:l,x:{grid:!0,label:null,domain:n.find(e=>e.i==k).alterar_tempo?n.find(e=>e.i==k).alterar_tempo.map(e=>s[e].inicio):d.map(e=>s[e].inicio)},y:{grid:!0,label:null},marks:[n.find(e=>e.i==k).mostra_media_movel?t.filter(e=>e.idx==k).map((t,i)=>r.line(t.dados.filter(e=>c(e,k)),r.windowY({strict:!0,k:u,anchor:"middle",x:"x",y:"valor",strokeWidth:t.filtrado?f:p,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"}))):t.filter(e=>e.idx==k).map((t,i)=>r.line(t.dados.filter(e=>c(e,k)),{sort:"x",x:"x",y:"valor",curve:"monotone-x",strokeWidth:t.filtrado?f:p,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"})),r.ruleX([t.filter(e=>e.idx==k)[0].dados[m.center(t.filter(e=>e.idx==k)[0].dados,h)]],{x:"x",strokeDasharray:"5"}),n.find(e=>e.i==k).mostra_media_movel?null:t.filter(e=>e.idx==k).map((t,i)=>r.dot([t.dados[m.center(t.dados,h)]],{x:"x",y:"valor",fill:e.find(e=>e.nome==t.municipio).cor}))]});return v(T,"PESO",k),b(k,T),g`
<div style="--cor-trilha: ${x.PESO}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${y.create("button").attr("class","btn-remove").text("–").on("click",w).node()}<br>
  ${A()}
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
<div class="trilha peso" i=${k}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">PESO AO NASCER</span>
    <div class="opcoes-trilha">
    <label class="label-cabecalho-trilha">MÉDIA MÓVEL</label> ${y.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==k).mostra_media_movel).on("change",e=>_(e,k)).node()}
    </div>
    <div class="opcoes-trilha">

    <label class="label-cabecalho-trilha">MODIFICAR PERÍODO</label> ${y.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==k).alterar_tempo).on("change",e=>C(e,k)).node()}
    </div>
    <span class="fonte">Fonte: SINASC</span>

  </div>
<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right;">${T}</div>
</div>
${E(k)}
<div class="rodape-trilha">
<div class="botao-comparacao">
${y.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==k).show_filtros).on("change",e=>S(e,k)).node()}
<label>COMPARAÇÃO</label>
</div>
<div class="menu-local">${n.find(e=>e.i==k).show_filtros?n.find(e=>e.i==k).filtros:""}</div>
</div>
</div>
</div>
</div>`}}function ei(e,t,i,n,a,r,o,l,s,d,c,u,f,p,m,h,v,b,g,x,y,w,A,_,C,E,S,k,T){return O=>{if(!e.map(e=>e.nome).every(e=>t.filter(e=>e.idx==O).map(e=>e.municipio).includes(e))||n.find(e=>e.i==O).filtros.value.expression&&n.find(e=>e.i==O).show_filtros&&t.filter(e=>e.idx==O).every(e=>void 0===e.filtrado)||a.value.expression&&t.filter(e=>e.idx==O).every(e=>void 0!==e.filtrado))return i();let I=n.find(e=>e.i==O).escala,M=n.find(e=>e.i==O).robson,D=r.plot({marginTop:5,marginRight:0,width:o-65,height:l,x:{grid:!0,label:null,domain:n.find(e=>e.i==O).alterar_tempo?n.find(e=>e.i==O).alterar_tempo.map(e=>s[e].inicio):d.map(e=>s[e].inicio)},y:{grid:!0,label:null},marks:[n.find(e=>e.i==O).mostra_media_movel?t.filter(e=>e.idx==O).map((t,i)=>r.line(t.dados.filter(e=>c(e,O)),r.windowY({strict:!0,k:u,anchor:"middle",x:"x",y:e=>e[I][M],strokeWidth:t.filtrado?f:p,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"}))):t.filter(e=>e.idx==O).map((t,i)=>r.line(t.dados.filter(e=>c(e,O)),{sort:"x",x:"x",y:e=>e[I][M],curve:"monotone-x",strokeWidth:t.filtrado?f:p,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"})),r.ruleX([t.filter(e=>e.idx==O)[0].dados[m.center(t.filter(e=>e.idx==O)[0].dados,h)]],{x:"x",strokeDasharray:"5"}),n.find(e=>e.i==O).mostra_media_movel?null:t.filter(e=>e.idx==O).map((t,i)=>r.dot([t.dados[m.center(t.dados,h)]],{x:"x",y:e=>e[I][M],fill:e.find(e=>e.nome==t.municipio).cor}))]});v(D,"ROBSON",O,I,M),b(O,D);let N;return g`
<div style="--cor-trilha: ${x.ROBSON}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${y.create("button").attr("class","btn-remove").text("–").on("click",w).node()}<br>
  ${A()}
</div>
<div class="sombra">
<div class="drag-container">
<span class="material-icons-outlined ${n[0].i==O?"icon-gray":"icon-blue"}">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-blue">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined ${n[n.length-1].i==O?"icon-gray":"icon-blue"}">
expand_more
</span>
</div>
<div class="trilha robson" i=${O}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">GRUPOS DE ROBSON</span>

    ${(N=y.create("select").attr("class","menuIG")).style("font-family","Roboto Condensed"),N.append("option").attr("name","Robson1a4").text("Robson1a4").property("selected","Robson1a4"==n.find(e=>e.i==O).robson),N.append("option").attr("name","Robson5").text("Robson5").property("selected","Robson5"==n.find(e=>e.i==O).robson),N.append("option").attr("name","Robson6a10").text("Robson6a10").property("selected","Robson6a10"==n.find(e=>e.i==O).robson),N.on("change",e=>_(e,O)),N.node()}
    <div class="opcoes-trilha">

    <label class="label-cabecalho-trilha">MÉDIA MÓVEL</label> ${y.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==O).mostra_media_movel).on("change",e=>C(e,O)).node()}
    </div>
    <div class="opcoes-trilha">

    <label class="label-cabecalho-trilha">MODIFICAR PERÍODO</label> ${y.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==O).alterar_tempo).on("change",e=>E(e,O)).node()}
    </div>
    <div class="opcoes-trilha">
    
    <label class="label-cabecalho-trilha">ESCALA ABSOLUTO</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+O).property("checked","absoluto"==n.find(e=>e.i==O).escala).attr("value","absoluto").on("change",e=>S(e,O)).node()}
    </div>
    <div class="opcoes-trilha">
    <label class="label-cabecalho-trilha">PERCENTUAL</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+O).property("checked","percentual"==n.find(e=>e.i==O).escala).attr("value","percentual").on("change",e=>S(e,O)).node()}
    </div>
    <div class="opcoes-trilha">
    <label class="label-cabecalho-trilha">TAXA POR 1000</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+O).property("checked","taxa"==n.find(e=>e.i==O).escala).attr("value","taxa").on("change",e=>S(e,O)).node()}
    </div>
    <span class="fonte">Fonte: SINASC</span>
  </div>

<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right;">${D}</div>
</div>
${k(O)}
<div class="rodape-trilha">
<div class="botao-comparacao">
${y.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==O).show_filtros).on("change",e=>T(e,O)).node()}
<label>COMPARAÇÃO</label>
</div>
<div class="menu-local">${n.find(e=>e.i==O).show_filtros?n.find(e=>e.i==O).filtros:""}</div>
</div>
</div>
</div>
</div>`}}function en(e,t,i,n,a,r,o,l,s,d,c,u,f,p,m,h,v,b,g,x,y,w,A,_,C,E,S,k){return T=>{if(!e.map(e=>e.nome).every(e=>t.filter(e=>e.idx==T).map(e=>e.municipio).includes(e))||n.find(e=>e.i==T).filtros.value.expression&&n.find(e=>e.i==T).show_filtros&&t.filter(e=>e.idx==T).every(e=>void 0===e.filtrado)||a.value.expression&&t.filter(e=>e.idx==T).every(e=>void 0!==e.filtrado))return i();let O=n.find(e=>e.i==T).escala,I=r.plot({marginTop:5,marginRight:0,width:o-65,height:l,x:{grid:!0,label:null,domain:n.find(e=>e.i==T).alterar_tempo?n.find(e=>e.i==T).alterar_tempo.map(e=>s[e].inicio):d.map(e=>s[e].inicio)},y:{grid:!0,label:null},marks:[n.find(e=>e.i==T).mostra_media_movel?t.filter(e=>e.idx==T).map((t,i)=>r.line(t.dados.filter(e=>c(e,T)),r.windowY({strict:!0,k:u,anchor:"middle",x:"x",y:e=>e[O],strokeWidth:t.filtrado?f:p,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"}))):t.filter(e=>e.idx==T).map((t,i)=>r.line(t.dados.filter(e=>c(e,T)),{sort:"x",x:"x",y:e=>e[O],curve:"monotone-x",strokeWidth:t.filtrado?f:p,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"})),r.ruleX([t.filter(e=>e.idx==T)[0].dados[m.center(t.filter(e=>e.idx==T)[0].dados,h)]],{x:"x",strokeDasharray:"5"}),n.find(e=>e.i==T).mostra_media_movel?null:t.filter(e=>e.idx==T).map((t,i)=>r.dot([t.dados[m.center(t.dados,h)]],{x:"x",y:e=>e[O],fill:e.find(e=>e.nome==t.municipio).cor}))]});return v(I,"TOTAL",T,O),b(T,I),g`
<div style="--cor-trilha: ${x.TOTAL}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${y.create("button").attr("class","btn-remove").text("–").on("click",w).node()}<br>
  ${A()}
</div>
<div class="sombra">
<div class="drag-container">
<span class="material-icons-outlined ${n[0].i==T?"icon-gray":"icon-blue"}">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-blue">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined ${n[n.length-1].i==T?"icon-gray":"icon-blue"}">
expand_more
</span>
</div>
<div class="trilha" i=${T}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">TOTAL NASCIDOS VIVOS</span>
    <div class="opcoes-trilha">
    <label class="label-cabecalho-trilha">MÉDIA MÓVEL</label> ${y.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==T).mostra_media_movel).on("change",e=>_(e,T)).node()}
    </div>
    <div class="opcoes-trilha">
    <label class="label-cabecalho-trilha">MODIFICAR PERÍODO</label> ${y.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==T).alterar_tempo).on("change",e=>C(e,T)).node()}
    </div>
    <div class="opcoes-trilha">
    <label class="label-cabecalho-trilha">ESCALA ABSOLUTO</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+T).property("checked","absoluto"==n.find(e=>e.i==T).escala).attr("value","absoluto").on("change",e=>E(e,T)).node()}
    </div>
    <div class="opcoes-trilha">
    <label class="label-cabecalho-trilha">PERCENTUAL</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+T).property("checked","percentual"==n.find(e=>e.i==T).escala).attr("value","percentual").on("change",e=>E(e,T)).node()}
    </div>
    <span class="fonte">Fonte: SINASC</span>
  </div>
<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right;">${I}</div>
</div>
${S(T)}
<div class="rodape-trilha">
<div class="botao-comparacao">
${y.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==T).show_filtros).on("change",e=>k(e,T)).node()}
<label>COMPARAÇÃO</label>
</div>
<div class="menu-local">${n.find(e=>e.i==T).show_filtros?n.find(e=>e.i==T).filtros:""}</div>
</div>
</div>
</div>
</div>`}}function ea(e,t,i,n,a,r){return o=>{let l;return e`
<div style="display:flex; align-items:center; justify-content:space-between;">
<div style="visibility:hidden;">
  ${t.create("button").attr("class","btn-remove").text("–").on("click",i).node()}<br>
  ${t.create("button").attr("class","btn-remove").text("C").on("click",n).node()}
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

<div class="trilha" style="width:${a-60}px; margin-left:0px; border-radius: 0 10px 10px 0; border:dotted #C4C4C4 2px; box-shadow:none; height:80px;">
  <div class="cabecalho-trilha" style="border-bottom:dotted #C4C4C4 2px;">
${(l=t.create("select").attr("class","menuIG")).style("margin-left","10px").style("font-family","Roboto Condensed"),l.append("option").attr("name","").text("ADICIONE UMA TRILHA").property("disabled",!0).property("selected",!0),l.append("option").attr("name","PM25").text("POLUENTE"),l.append("option").attr("name","PESO AO NASCER").text("PESO AO NASCER"),l.append("option").attr("name","GRUPOS DE ROBSON").text("GRUPOS DE ROBSON"),l.append("option").attr("name","TOTAL").text("TOTAL NASCIDOS VIVOS"),l.on("change",r),l.node()}
  </div>

<div class="conteudo-trilha">
<br><br>
</div>
</div>`}}function er(e,t,i,n,a){return r=>e`
<div style="--cor-trilha: #c4c4c4; display:flex; align-items:center; justify-content:space-between; margin-bottom:30px;">
<div style="visibility:hidden;">
  ${t.create("button").attr("class","btn-remove").text("–").on("click",i).node()}<br>
  ${t.create("button").attr("class","btn-remove").text("C").on("click",n).node()}
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
<div class="trilha" style="width:${a-60}px; margin-left:0px; margin-bottom:0px; height: 80px;">
  <div class="cabecalho-trilha">
  <label class="label-titulo-trilha">CARREGANDO...</label>
  </div>

<div class="conteudo-trilha">
<br><br>
</div>
</div>
</div>`}function eo(e,t,i,n,a,r){return o=>{let l=e.findIndex(e=>e.i==o.target.parentNode.parentNode.getElementsByClassName("trilha")[0].getAttribute("i")),s={...e[l]},d=t.max(e.map(e=>e.i))+1;s.i=d,"PM25"!=s.variavel&&(s.filtros=s.filtros.cloneMenu(),s.filtros.addEventListener("input",e=>i(e,s))),e.splice(l+1,0,s),n.value=e;let c=JSON.parse(JSON.stringify(a.filter(e=>e.idx==o.target.parentNode.parentNode.getElementsByClassName("trilha")[0].getAttribute("i"))));c.forEach((e,t,i)=>{i[t].idx=d,i[t].dados.forEach((e,t,i)=>i[t].x=new Date(i[t].x))}),r.value=a.concat(c)}}function el(e,t,i,n){return a=>{e.value=t.filter(e=>e.i!=a.target.parentNode.parentNode.getElementsByClassName("trilha")[0].getAttribute("i")),i.value=n.filter(e=>e.idx!=a.target.parentNode.parentNode.getElementsByClassName("trilha")[0].getAttribute("i"))}}function es(e,t,i,n,a,r,o,l,s,d,c,u,f,p,m,h){return v=>{let b=e.max(t.map(e=>e.i))||0,g=null;switch(v.target.value){case"POLUENTE":g={i:b+1,mostra_media_movel:!0,variavel:"PM25",alterar_tempo:null,poluente:"PM25"},i.value=t.concat(g),n.forEach(e=>Promise.all([a(e.nome)]).then(t=>{r.value=r.value.concat([{idx:b+1,municipio:e.nome,variavel:"PM25",dados:o(t[0])}])}));break;case"PESO AO NASCER":(g={i:b+1,mostra_media_movel:!1,variavel:"PESO",alterar_tempo:null,filtros:new l.local(null,null,s.PESO),show_filtros:!1}).filtros.addEventListener("input",e=>d(e,g)),i.value=t.concat(g),n.forEach(e=>Promise.all([c(e.nome,g.filtros.expression)]).then(t=>{r.value=r.value.concat([{idx:b+1,municipio:e.nome,variavel:"PESO",dados:u(t[0])}])}));break;case"GRUPOS DE ROBSON":(g={i:b+1,mostra_media_movel:!1,escala:"taxa",robson:"Robson1a4",variavel:"ROBSON",alterar_tempo:null,filtros:new l.local(null,null,s.ROBSON),show_filtros:!1}).filtros.addEventListener("input",e=>d(e,g)),i.value=t.concat(g),n.forEach(e=>Promise.all([f(e.nome,g.filtros.expression)]).then(t=>{r.value=r.value.concat([{idx:b+1,municipio:e.nome,variavel:"ROBSON",dados:p(t[0])}])}));break;case"NASCIMENTOS TOTAIS":(g={i:b+1,mostra_media_movel:!1,variavel:"TOTAL",alterar_tempo:null,filtros:new l.local(null,null,s.TOTAL),show_filtros:!1,escala:"absoluto"}).filtros.addEventListener("input",e=>d(e,g)),i.value=t.concat(g),n.forEach(e=>Promise.all([m(e.nome,g.filtros.expression)]).then(t=>{r.value=r.value.concat([{idx:b+1,municipio:e.nome,variavel:"TOTAL",dados:h(t[0])}])}))}}}function ed(e,t,i,n){return a=>{if(!e.find(e=>e.i==a).alterar_tempo)return"";let r=t(104,468,e.find(e=>e.i==a).alterar_tempo[0],e.find(e=>e.i==a).alterar_tempo[1],i-90,40);return r.addEventListener("input",t=>{let i=e;i.find(e=>e.i==a).alterar_tempo=r.value,n.value=i}),r}}function ec(e,t){return i=>{e.find(e=>e.i==i.target.parentElement.parentElement.getAttribute("i")).poluente=i.target.value,t.value=e}}function eu(e,t,i,n,a,r,o,l,s,d){return(c,u)=>{if(e.find(e=>e.i==u).show_filtros=c.target.checked,c.target.checked){let f=e.find(e=>e.i==u);f.filtros=new i.local(null,n.value.urlids,a[f.variavel]),f.filtros.addEventListener("input",e=>r(e,f)),t.value=t.value.filter(e=>e.idx!=u||!e.filtrado),o.value.forEach(i=>{Promise.all([l[e.find(e=>e.i==u).variavel](i.nome,e.find(e=>e.i==u).filtros.value.expression)]).then(n=>{t.value=t.value.concat({idx:u,municipio:i.nome,variavel:e.find(e=>e.i==u).variavel,filtrado:!0,dados:s[e.find(e=>e.i==u).variavel](n[0])})})})}else t.value=t.value.filter(e=>e.idx!=u||!e.filtrado);d.value=e}}function ef(e,t,i){return(n,a)=>{n.target.checked?e.find(e=>e.i==a).alterar_tempo=t:e.find(e=>e.i==a).alterar_tempo=null,i.value=e}}function ep(e,t){return(i,n)=>{e.find(e=>e.i==n).robson=i.target.value,t.value=e}}function em(e,t){return(i,n)=>{e.find(e=>e.i==n).escala=i.target.value,t.value=e}}function eh(e,t){return(i,n)=>{e.find(e=>e.i==n).mostra_media_movel=i.target.checked,t.value=e}}function ev(e){return t=>{let i=[0,0];return i[0]=e[t[0]].inicio,i[1]=e[t[1]].termino,i}}function eb(){return""}function eg(e,t,i){return e?e.trilhas.map(e=>(e.filtros=new t.local(null,e.filtrosUrlids),e)):[{i:0,mostra_media_movel:!0,variavel:"PM25",alterar_tempo:null,poluente:"PM25"},{i:1,mostra_media_movel:!1,variavel:"PESO",alterar_tempo:null,filtros:new t.local(null,null,i.PESO),show_filtros:!1},{i:2,mostra_media_movel:!1,escala:"taxa",robson:"Robson1a4",variavel:"ROBSON",alterar_tempo:null,filtros:new t.local(null,null,i.ROBSON),show_filtros:!1}]}function ex(){return{PM25:{valor:"\xb5g/m\xb3"},PESO:{valor:"g"},ROBSON:{absoluto:"nascimentos",percentual:"%",taxa:"nasc./1000NV"},TOTAL:{absoluto:"nascimentos",percentual:"%"}}}function ey(){return 2.5}function ew(){return 2}function eA(){return!0}function e_(e,t){return e?e.municipios:t.municipios}function eC(e,t,i,n,a,r,o,l,s,d,c,u){if(e){for(let f of t.value)i.value=i.value.concat([f]),f=f.nome,n.forEach(e=>{Promise.all([a[e.variavel](f,r.value.expression)]).then(t=>{o.value=o.value.concat({idx:e.i,municipio:f,variavel:e.variavel,dados:l[e.variavel](t[0])})}),e.show_filtros&&Promise.all([a[e.variavel](f,e.filtros.value.expression)]).then(t=>{o.value=o.value.concat({idx:e.i,municipio:f,variavel:e.variavel,filtrado:!0,dados:l[e.variavel](t[0])})})}),n.slice(1).forEach(e=>e.filtros.addEventListener("input",t=>s(t,e)));r.addEventListener("input",d),r.addEventListener("aba",c),r.addEventListener("limparFiltros",e=>{for(let t=0;t<n.length;t++)n[t].filtros.limpa(),n[t].show_filtros=!1}),u.value=!1}}function eE(e,t,i,n){return function(){e.setItem("conf2",JSON.stringify(t())),e.setItem("municipios",JSON.stringify(i.value)),e.setItem("intervalo",JSON.stringify(n.value))}}function eS(e,t,i,n){return(a,r)=>{e.value=e.value.filter(e=>e.idx!=r.i||!e.filtrado),t.value.forEach(t=>{Promise.all([i[r.variavel](t.nome,r.filtros.value.expression)]).then(i=>{e.value=e.value.concat({idx:r.i,municipio:t.nome,variavel:r.variavel,filtrado:!0,dados:n[r.variavel](i[0])})})})}}function ek(e){return e.range([3,53],{label:"Janela em semanas",value:13,step:2})}function eT(e){return e.select(["co_ppb","no2_ppb","o3_ppb","pm25_ugm3","so2_ugm3"],{label:"Indicador",value:"pm25_ugm3"})}function eO(){return["#2F87F5","#D8C56C","#DC5988","#6CC28D","#67AEC2","#ABA6F8","#D8C56C","#2DE8BD","#2F87F5","#94E8F9"]}function eI(){return[]}function eM(e,t,i,n){return e[Math.ceil(t.interpolate(...i?i.intervalo:n.intervalo)(.5))].inicio}function eD(e){return e}function eN(e){return e.bisector(e=>e.x)}function eL(e){return e.timeFormatDefaultLocale({decimal:",",thousands:".",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%d/%m/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Domingo","Segunda-feira","Ter\xe7a-feira","Quarta-feira","Quinta-feira","Sexta-feira","S\xe1bado"],shortDays:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],months:["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],shortMonths:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]})}function eR(e){return e[0]}function eP(e){return e[1]}function eF(e,t,i,n,a){return(r,o)=>{let l=e.find(e=>e.i==o).alterar_tempo,s=e.find(e=>e.i==o).mostra_media_movel?(t-1)/2:0;return l?r.x.getTime()>=i[l[0]-s].inicio.getTime()&&r.x.getTime()<=i[l[1]+s].termino.getTime():r.x.getTime()>=i[n-s].inicio.getTime()&&r.x.getTime()<=i[a+s].termino.getTime()}}function eB(){return 200}function eU(){return!0}function e$(e,t,i){return function(n,a){if(2==n.length)return;e.value=!0;let r=t.find(e=>e.municipio==n).codigo_sdv,o=`https://storage.googleapis.com/amplia/sisam/${r.substring(0,2)}/mun${r}.db`,l=i.open(o).then(e=>e.query(a));return e.value=!1,l}}function ej(e){return e`<style>
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@400;700&display=swap');
  text{
    font-family:"Fira Sans Condensed"
  }
</style>`}function ez(e){return e("municipios2.csv").csv()}function eG(e){return e("semanas_epidemiologicas_estendido.csv").csv().then(e=>e.map(e=>(e.inicio=new Date(Date.UTC(+e.inicio.substr(0,4),+e.inicio.substr(5,2)-1,+e.inicio.substr(8,2))),e.termino=new Date(Date.UTC(+e.termino.substr(0,4),+e.termino.substr(5,2)-1,+e.termino.substr(8,2))),e)).filter(e=>e.ano>=2010))}function eH(){return{ACRE:"RIO BRANCO",ALAGOAS:"MACEI\xd3",AMAPÁ:"MACAP\xc1",AMAZONAS:"MANAUS",BAHIA:"SALVADOR",CEARÁ:"FORTALEZA","DISTRITO FEDERAL":"BRAS\xcdLIA","ESP\xcdRITO SANTO":"VIT\xd3RIA",GOIÁS:"GOI\xc2NIA",MARANHÃO:"S\xc3O LU\xcdS","MATO GROSSO":"CUIAB\xc1","MATO GROSSO DO SUL":"CAMPO GRANDE","MINAS GERAIS":"BELO HORIZONTE",PARÁ:"BEL\xc9M",PARAÍBA:"JO\xc3O PESSOA",PARANÁ:"CURITIBA",PERNAMBUCO:"RECIFE",PIAUÍ:"TERESINA","RIO DE JANEIRO":"RIO DE JANEIRO","RIO GRANDE DO NORTE":"NATAL","RIO GRANDE DO SUL":"PORTO ALEGRE",RONDÔNIA:"PORTO VELHO",RORAIMA:"BOA VISTA","SANTA CATARINA":"FLORIAN\xd3POLIS","S\xc3O PAULO":"S\xc3O PAULO",SERGIPE:"ARACAJU",TOCANTINS:"PALMAS"}}function eV(){return{ACRE:"AC",ALAGOAS:"AL",AMAPÁ:"AP",AMAZONAS:"AM",BAHIA:"BA",CEARÁ:"CE","DISTRITO FEDERAL":"DF","ESP\xcdRITO SANTO":"ES",GOIÁS:"GO",MARANHÃO:"MA","MATO GROSSO":"MT","MATO GROSSO DO SUL":"MS","MINAS GERAIS":"MG",PARÁ:"PA",PARAÍBA:"PB",PARANÁ:"PR",PERNAMBUCO:"PE",PIAUÍ:"PI","RIO DE JANEIRO":"RJ","RIO GRANDE DO NORTE":"RN","RIO GRANDE DO SUL":"RS",RONDÔNIA:"RO",RORAIMA:"RR","SANTA CATARINA":"SC","S\xc3O PAULO":"SP",SERGIPE:"SE",TOCANTINS:"TO"}}function eq(){return[]}function eW(){return[]}function eZ(){return["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"]}function eX(e){return Object.values(e).sort(Intl.Collator().compare)}function eJ(e){return t=>"BRASIL"==t?"":e.includes(t)?"AND res_SIGLA_UF='"+t+"'":"AND res_MUNNOMEX='"+t.normalize("NFD").replace(/\p{Diacritic}/gu,"")+"'"}function eY(e,t,i){return n=>"BRASIL"==n?"":e.includes(n)?"mun_uf_nome='"+Object.entries(t).find(e=>e[1]==n)[0]+"'":"mun_geocodsdv="+i.find(e=>e.municipio==n).codigo_sdv}function eQ(e){return e`## URL stuff`}function eK(e){return function(t){return e.compressToEncodedURIComponent(JSON.stringify(t))}}function e0(e){return function(t){return JSON.parse(e.decompressFromEncodedURIComponent(t))}}function e1(e,t,i,n){return()=>({principalUrlids:e.value.value.urlids,municipios:t.value,intervalo:i,trilhas:n.value.map(e=>{let t={};return Object.assign(t,e),t.filtros&&(t.filtrosUrlids=t.filtros.value.urlids,delete t.filtros),t})})}function e2(){return{principalUrlids:"",municipios:[{nome:"RIO DE JANEIRO",cor:"#2F87F5"}],intervalo:[104,469],trilhas:[{i:0,mostra_media_movel:!0,variavel:"PM25",alterar_tempo:null,poluente:"PM25"},{i:1,mostra_media_movel:!1,variavel:"PESO",alterar_tempo:null,show_filtros:!1,filtrosUrlids:""},{i:2,mostra_media_movel:!1,escala:"taxa",robson:"Robson1a4",variavel:"ROBSON",alterar_tempo:null,show_filtros:!1,filtrosUrlids:""}]}}function e5(e,t,i,n){let a=new e(window.location.search).get("conf");if(a)return t(a);if(a=i.getItem("conf2")){let r=JSON.parse(a),o=i.getItem("municipios");o&&(r.municipios=JSON.parse(o));let l=i.getItem("intervalo");return l&&(r.intervalo=JSON.parse(l)),r}if(a=i.getItem("municipios")){let s=n;return s.municipios=JSON.parse(a),a=i.getItem("intervalo"),s.intervalo=JSON.parse(a),s}}function e3(){return function(e){var t=document.body.appendChild(document.createElement("textarea"));t.style.position="absolute",t.style.left="-9999px",t.setAttribute("readonly",""),t.value=e,t.select();try{return document.execCommand("copy")}catch(i){return!1}finally{t.parentNode.removeChild(t)}}}function e4(){return"https://ampliasaude.github.io/amplia-site/trilhas/CaracteristicasNascimento/"}function e6(e,t,i,n,a){let r=e`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Copiar link compartilhável</title>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M6.045 10C6.045 11.026 6.8095 11.86 7.75 11.86H9.95V13H7.75C6.232 13 5 11.656 5 10C5 8.344 6.232 7 7.75 7H9.95V8.14H7.75C6.8095 8.14 6.045 8.974 6.045 10ZM8.3 9.4H12.7V10.6H8.3V9.4ZM13.25 13H11.05V11.86H13.25C14.1905 11.86 14.955 11.026 14.955 10C14.955 8.974 14.1905 8.14 13.25 8.14H11.05V7H13.25C14.768 7 16 8.344 16 10C16 11.656 14.768 13 13.25 13Z" fill="white"/>
</svg>`;return r.onclick=()=>{a(`${t}?conf=${i(n())}`)},r}function e8(e,t){return function(){return`conf=${e(t())}`}}function e7(e){return e`## Poluentes`}function e9(){return{pm25_ugm3:120,so2_ugm3:90,no2_ppb:286,o3_ppb:154,co_ppb:9.9}}function te(){return e=>.08206*(e+293.15)}function tt(){return{no2_ppb:46.0055,o3_ppb:48,co_ppb:28.01}}function ti(){return{pm25_ugm3:[25,37,50,60],so2_ugm3:[20,30,40,60],no2_ppb:[200,220,240,260],o3_ppb:[100,120,130,140],co_ppb:[9,9,9,9]}}function tn(e,t){return(i,n="TRUE")=>t(i,`
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
 `)}function ta(e,t,i,n){return a=>{a.forEach(a=>{let r=a,o=new Date(Date.UTC(r.ano,r.mes-1,r.dia));for(let l of e)if(o>=new Date(l.inicio)&&o<=new Date(l.termino)){r.semana=+l.semana,r.x=l.inicio;break}switch(1==r.mes&&53==r.semana&&(r.ano-=1,r.mes=12),t){case"no2_ppb":case"o3_ppb":let s=i[t]/n(r.temperatura);r.valor*=s;case"co_ppb":r.valor/=1e3}});let r=[];for(let o of a){let l=r.find(e=>e.x==o.x);l?(l.valor+=o.valor,l.temperatura_c_media+=o.temperatura_c_media,l.cont+=1):r.push({ano:o.ano,semana:o.semana,x:o.x,valor:o.valor||0,temperatura_c_media:o.temperatura_c_media,cont:1})}return r.map(e=>(e.valor/=e.cont,e.temperatura_c_media/=e.cont,delete e.cont,e)).filter(e=>e.semana)}}function tr(e){return e`## Fecundação`}function to(e,t,i){return async(n,a)=>{let r;return await i.fetchPeso(e.includes(n)?Math.floor(t.find(e=>e.sigla==n).codigo_sdv/1e4):t.find(e=>e.municipio==n).codigo_sdv,a)}}function tl(e){return t=>{t.forEach(t=>{let i=t;for(let n of(i.data=new Date(i.data),e))if(i.data>=new Date(n.inicio)&&i.data<=new Date(n.termino)){i.x=n.inicio;break}});let i=[];for(let n of t){let a=i.find(e=>e.x.getTime()==n.x.getTime());a?(a.valor+=n.valor*n.total,a.total+=n.total):i.push({x:n.x,valor:n.valor*n.total,total:n.total})}return i.map(e=>(e.valor/=e.total,delete e.total,e)).filter(e=>e.x)}}function ts(e,t,i){return async(n,a)=>{let r;return await i.fetchRobson(e.includes(n)?Math.floor(t.find(e=>e.sigla==n).codigo_sdv/1e4):t.find(e=>e.municipio==n).codigo_sdv,a)}}function td(e,t){return i=>{let n=e(i[1]);(i=i[0]).forEach(e=>{let i=e;for(let n of(i.data=new Date(i.data),t))if(i.data>=new Date(n.inicio)&&i.data<=new Date(n.termino)){i.x=n.inicio;break}});let a=i,r=[];for(let o of a){let l=r.find(e=>e.x.getTime()==o.x.getTime());l?(l.absoluto[o.robson]+=o.total,l.total+=o.total):r.push({x:o.x,absoluto:{Robson1a4:"Robson1a4"==o.robson?o.total:0,Robson5:"Robson5"==o.robson?o.total:0,Robson6a10:"Robson6a10"==o.ig?o.total:0},total:o.total})}return t.filter(e=>!r.map(e=>e.x.getTime()).includes(e.inicio.getTime())).forEach(e=>{r.push({x:e.inicio,absoluto:{Robson1a4:0,Robson5:0,Robson6a10:0},total:0})}),(r=r.map(e=>{e.percentual={},e.total?(e.percentual.Robson1a4=100*e.absoluto.Robson1a4/e.total,e.percentual.Robson5=100*e.absoluto.Robson5/e.total,e.percentual.Robson6a10=100*e.absoluto.Robson6a10/e.total):(e.percentual.Robson1a4=0,e.percentual.Robson5=0,e.percentual.Robson6a10=0),e.taxa={};let t=n.find(t=>t.x.getTime()==e.x.getTime());return t?(e.taxa.Robson1a4=1e3*e.absoluto.Robson1a4/t.valor,e.taxa.Robson5=1e3*e.absoluto.Robson5/t.valor,e.taxa.Robson6a10=1e3*e.absoluto.Robson6a10/t.valor):(e.taxa.Robson1a4=0,e.taxa.Robson5=0,e.taxa.Robson6a10=0),e})).sort((e,t)=>e.x.getTime()-t.x.getTime())}}function tc(e){return t=>{let i=[];t.forEach(t=>{let n=t;if(n.data=new Date(n.data),!(2011>n.data.getFullYear())){for(let a of e)if(n.data>=new Date(a.inicio)&&n.data<=new Date(a.termino)){n.x=a.inicio;break}i.push(n)}});let n=[];for(let a of i){let r=n.find(e=>e.x.getTime()==a.x.getTime());r?r.valor+=a.valor:n.push({x:a.x,valor:a.valor})}return n.filter(e=>e.x)}}function tu(e,t,i){return async(n,a)=>{let r;return await i.fetchTotal(e.includes(n)?Math.floor(t.find(e=>e.sigla==n).codigo_sdv/1e4):t.find(e=>e.municipio==n).codigo_sdv,a)}}function tf(e,t){return i=>{let n=e(i[1]);i=i[0];let a=[];i.forEach(e=>{let i=e;if(i.data=new Date(i.data),!(2011>i.data.getFullYear())){for(let n of t)if(i.data>=new Date(n.inicio)&&i.data<=new Date(n.termino)){i.x=n.inicio;break}a.push(i)}});let r=[];for(let o of a){let l=r.find(e=>e.x.getTime()==o.x.getTime());l?l.absoluto+=o.valor:r.push({x:o.x,absoluto:o.valor})}return(r=r.filter(e=>e.x)).map(e=>{e.percentual={};let t=n.find(t=>t.x.getTime()==e.x.getTime());return t?e.percentual=100*e.absoluto/t.valor:e.percentual=0,e})}}function tp(e){return e`## Imports`}function tm(e){return e("sortablejs/Sortable.js")}function th(e){return e("d3@5")}function tv(e,t,i,n,a,r,o){return function(l,s,d=l,c=s,u=e.width,f=60){var p=[l,s+1],m=e.height,h=e.margin,v=u-f-h.right,b=m-h.top-h.bottom,g=t.scaleLinear().domain(p).range([0,v]),x=t.select(i.svg(u,m));let y=x.append("g").attr("transform",`translate(${f}, ${h.top})`);var w=y.append("text").attr("id","labelleft").attr("x",0).attr("y",b+5).style("display",60==f?"inline":"none").text(n[a[p[0]].inicio.getMonth()]+" "+a[p[0]].inicio.getFullYear()),A=y.append("text").attr("id","labelright").attr("x",0).attr("y",b+5).style("display",60==f?"inline":"none").text(n[a[p[1]].termino.getMonth()]+" "+a[p[1]].termino.getFullYear());y.append("text").attr("id","labelleft2").attr("x",-8).attr("y",b-b/2+1).style("alignment-baseline","middle").text(2012),y.append("text").attr("id","labelright2").attr("x",v+8).attr("y",b-b/2+1).style("alignment-baseline","middle").text(2019);var _=t.brushX().extent([[0,0],[v,b]]).on("brush",function(){var e=t.event.selection;w.attr("x",e[0]).text(n[a[Math.round(g.invert(e[0]))].inicio.getMonth()]+" "+a[Math.round(g.invert(e[0]))].inicio.getFullYear()),A.attr("x",e[1]).text(n[a[Math.round(g.invert(e[1]))].termino.getMonth()]+" "+a[Math.round(g.invert(e[1]))].termino.getFullYear()),S.attr("display",null).attr("transform",function(t,i){return"translate("+[e[i],-b/4]+")"}),x.node().value=e.map(e=>Math.round(g.invert(e))),x.node().dispatchEvent(new CustomEvent("input"))}).on("end",function(){if(t.event.sourceEvent){var e=t.event.selection.map(g.invert).map(Math.round);t.select(this).transition().call(t.event.target.move,e.map(g)),r.value=Math.max(Math.min(new Date(r.value),a[x.node().value[1]-2].termino),a[x.node().value[0]].inicio)}}),C=y.append("g").attr("class","brush").call(_),E=function(e){return"M -3 12 A 3 3 0 0 1 3 12 V 18 A 3 3 0 0 1 -3 18 Z"},S=C.selectAll(".handle--custom").data([{type:"w"},{type:"e"}]).enter().append("path").attr("class","handle--custom").attr("stroke","#000").attr("fill","#151472").attr("cursor","ew-resize").attr("y",b/2).attr("d",E);return C.selectAll(".overlay").attr("fill","#E5E5E5").each(function(e){e.type="selection"}).on("mousedown touchstart",function(){var e=g(1)-g(0),t=o.mouse(this)[0],i=t-e/2,n=t+e/2;o.select(this.parentNode).call(_.move,n>v?[v-e,v]:i<0?[0,e]:[i,n])}),C.call(_.move,[d,c+1].map(g)),y.append("g").selectAll("line").data(a.filter(e=>1==e.semana).map(e=>a.findIndex(t=>t==e))).enter().append("line").attr("x1",e=>g(e)).attr("x2",e=>g(e)).attr("y1",0).attr("y2",b).style("stroke","#ccc"),x.node()}}function tb(){return{width:600,height:60,margin:{top:20,bottom:20,left:60,right:60}}}function tg(e){return e`
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
`}function tx(e){return e("https://bundle.run/lz-string@1.4.4")}function ty(e){return e`<style>
  @import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap);
  @import url(https://fonts.googleapis.com/icon?family=Material+Icons);    
</style>
`}function tw(e){return e`
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
`}function tA(e,t){let n=e.module();function a(){return this.url}let r=new Map([["semanas_epidemiologicas_estendido.csv",{url:new i.U(i(8897)),mimeType:"text/csv",toString:a}],["municipios2.csv",{url:new i.U(i(9909)),mimeType:"text/csv",toString:a}]]);n.builtin("FileAttachment",e.fileAttachments(e=>r.get(e))),n.variable(t()).define(["md"],D),n.define("initial mp",["urlParamConf","ampliaMenu"],N),n.variable(t("mutable mp")).define("mutable mp",["Mutable","initial mp"],(e,t)=>new e(t)),n.variable(t("mp")).define("mp",["mutable mp"],e=>e.generator),n.variable(t("listenerFiltroGlobal")).define("listenerFiltroGlobal",["mutable conf_trilhas","mutable data","mutable sel_municipios","funcoesFetch","funcoesProc"],L),n.variable(t("div_controles")).define("div_controles",["html","barra_municipios","viewof intervalo"],R),n.variable(t("vis")).define("vis",["conf_trilhas","funcoesGeradoras","gAdicionaTrilha","Sortable","mutable conf_trilhas","d3","saveState"],P),n.variable(t("maxMunicipios")).define("maxMunicipios",F),n.variable(t("viewof intervalo")).define("viewof intervalo",["urlParamConf","slider_snap","defaultConf"],B),n.variable(t("intervalo")).define("intervalo",["Generators","viewof intervalo"],(e,t)=>e.input(t)),n.variable(t("barra_municipios")).define("barra_municipios",["html","sel_municipios","remove_mun_button","maxMunicipios","menu_municipios"],U),n.variable(t("menu_municipios")).define("menu_municipios",["d3","html","municipios","agregacoes","sel_municipios","maxMunicipios","mutable sel_municipios","colors","sessionStorage","conf_trilhas","funcoesFetch","mp","mutable data","funcoesProc","data"],$),n.variable(t("remove_mun_button")).define("remove_mun_button",["d3","sel_municipios","mutable sel_municipios","sessionStorage","mutable data","data","agregacoes","municipios"],j),n.variable(t("remove_trilha_button")).define("remove_trilha_button",["d3","removeTrilha"],z),n.variable(t("copy_button")).define("copy_button",["d3","copyTrilha"],G),n.variable(t("funcoesGeradoras")).define("funcoesGeradoras",["gPM25","gPESO","gROBSON","gTOTAL"],H),n.variable(t("funcoesProc")).define("funcoesProc",["procPM25","procPESO","procRobson","procTOTAL"],V),n.variable(t("funcoesFetch")).define("funcoesFetch",["fetchPM25","fetchPESO","fetchRobson","fetchTOTAL"],q),n.variable(t("style")).define("style",["html"],W),n.variable(t("corTrilha")).define("corTrilha",Z),n.variable(t("corTrilhaFraco")).define("corTrilhaFraco",X),n.variable(t("mouseDownHandler")).define("mouseDownHandler",["data","bisector","mutable sel_pm25","mutable sel","d3"],J),n.variable(t("legendTooltip")).define("legendTooltip",["d3","sel_pm25","sel","valoresLista","corTrilhaFraco"],Y),n.variable(t("valoresLista")).define("valoresLista",["sel_pm25","sel","sel_municipios","data","semanas_epidemiologicas","d3","unidades","agregacoes","siglas","bisector"],Q),n.variable(t("suscetibilidade")).define("suscetibilidade",["sel","d3"],K),n.variable(t("gPM25")).define("gPM25",["Plot","width","height","formatTime","conf_trilhas","semanas_epidemiologicas","intervalo","maxScale","indicador","padroes","data","siglas","filterDate","janela","lineWidth","sel_municipios","bisector","sel_pm25","legendTooltip","suscetibilidade","mouseDownHandler","html","corTrilha","d3","removeTrilha","copy_button","checkMediaMovel","checkTempo","inner_slider"],ee),n.variable(t("gPESO")).define("gPESO",["sel_municipios","data","gLoadingTrilha","conf_trilhas","mp","Plot","width","height","semanas_epidemiologicas","intervalo","filterDate","janela","lineWidthFiltered","lineWidth","bisector","sel","legendTooltip","mouseDownHandler","html","corTrilha","d3","removeTrilha","copy_button","checkMediaMovel","checkTempo","inner_slider","checkFiltros"],et),n.variable(t("gROBSON")).define("gROBSON",["sel_municipios","data","gLoadingTrilha","conf_trilhas","mp","Plot","width","height","semanas_epidemiologicas","intervalo","filterDate","janela","lineWidthFiltered","lineWidth","bisector","sel","legendTooltip","mouseDownHandler","html","corTrilha","d3","removeTrilha","copy_button","checkRobson","checkMediaMovel","checkTempo","checkEscala","inner_slider","checkFiltros"],ei),n.variable(t("gTOTAL")).define("gTOTAL",["sel_municipios","data","gLoadingTrilha","conf_trilhas","mp","Plot","width","height","semanas_epidemiologicas","intervalo","filterDate","janela","lineWidthFiltered","lineWidth","bisector","sel","legendTooltip","mouseDownHandler","html","corTrilha","d3","removeTrilha","copy_button","checkMediaMovel","checkTempo","checkEscala","inner_slider","checkFiltros"],en),n.variable(t("gAdicionaTrilha")).define("gAdicionaTrilha",["html","d3","removeTrilha","copyTrilha","width","addTrilha"],ea),n.variable(t("gLoadingTrilha")).define("gLoadingTrilha",["html","d3","removeTrilha","copyTrilha","width"],er),n.variable(t("copyTrilha")).define("copyTrilha",["conf_trilhas","d3","listenerFiltro","mutable conf_trilhas","data","mutable data"],eo),n.variable(t("removeTrilha")).define("removeTrilha",["mutable conf_trilhas","conf_trilhas","mutable data","data"],el),n.variable(t("addTrilha")).define("addTrilha",["d3","conf_trilhas","mutable conf_trilhas","sel_municipios","fetchPM25","mutable data","procPM25","ampliaMenu","corTrilha","listenerFiltro","fetchPESO","procPESO","fetchRobson","procRobson","fetchTOTAL","procTOTAL"],es),n.variable(t("inner_slider")).define("inner_slider",["conf_trilhas","slider_snap","width","mutable conf_trilhas"],ed),n.variable(t("checkPoluente")).define("checkPoluente",["conf_trilhas","mutable conf_trilhas"],ec),n.variable(t("checkFiltros")).define("checkFiltros",["conf_trilhas","mutable data","ampliaMenu","mp","corTrilha","listenerFiltro","mutable sel_municipios","funcoesFetch","funcoesProc","mutable conf_trilhas"],eu),n.variable(t("checkTempo")).define("checkTempo",["conf_trilhas","intervalo","mutable conf_trilhas"],ef),n.variable(t("checkRobson")).define("checkRobson",["conf_trilhas","mutable conf_trilhas"],ep),n.variable(t("checkEscala")).define("checkEscala",["conf_trilhas","mutable conf_trilhas"],em),n.variable(t("checkMediaMovel")).define("checkMediaMovel",["conf_trilhas","mutable conf_trilhas"],eh),n.variable(t("converteIntervalo")).define("converteIntervalo",["semanas_epidemiologicas"],ev),n.define("initial conf_principal",eb),n.variable(t("mutable conf_principal")).define("mutable conf_principal",["Mutable","initial conf_principal"],(e,t)=>new e(t)),n.variable(t("conf_principal")).define("conf_principal",["mutable conf_principal"],e=>e.generator),n.define("initial conf_trilhas",["urlParamConf","ampliaMenu","corTrilha"],eg),n.variable(t("mutable conf_trilhas")).define("mutable conf_trilhas",["Mutable","initial conf_trilhas"],(e,t)=>new e(t)),n.variable(t("conf_trilhas")).define("conf_trilhas",["mutable conf_trilhas"],e=>e.generator),n.variable(t("unidades")).define("unidades",ex),n.variable(t("lineWidth")).define("lineWidth",ey),n.variable(t("lineWidthFiltered")).define("lineWidthFiltered",ew),n.define("initial firstload",eA),n.variable(t("mutable firstload")).define("mutable firstload",["Mutable","initial firstload"],(e,t)=>new e(t)),n.variable(t("firstload")).define("firstload",["mutable firstload"],e=>e.generator),n.define("initial municipiosDefault",["urlParamConf","defaultConf"],e_),n.variable(t("mutable municipiosDefault")).define("mutable municipiosDefault",["Mutable","initial municipiosDefault"],(e,t)=>new e(t)),n.variable(t("municipiosDefault")).define("municipiosDefault",["mutable municipiosDefault"],e=>e.generator),n.variable(t("onfirstload")).define("onfirstload",["firstload","mutable municipiosDefault","mutable sel_municipios","conf_trilhas","funcoesFetch","mp","mutable data","funcoesProc","listenerFiltro","listenerFiltroGlobal","saveState","mutable firstload"],eC),n.variable(t("saveState")).define("saveState",["sessionStorage","getCurrentConf","mutable sel_municipios","viewof intervalo"],eE),n.variable(t("listenerFiltro")).define("listenerFiltro",["mutable data","mutable sel_municipios","funcoesFetch","funcoesProc"],eS),n.variable(t("viewof janela")).define("viewof janela",["Inputs"],ek),n.variable(t("janela")).define("janela",["Generators","viewof janela"],(e,t)=>e.input(t)),n.variable(t("viewof indicador")).define("viewof indicador",["Inputs"],eT),n.variable(t("indicador")).define("indicador",["Generators","viewof indicador"],(e,t)=>e.input(t)),n.variable(t("colors")).define("colors",eO),n.define("initial sel_municipios",eI),n.variable(t("mutable sel_municipios")).define("mutable sel_municipios",["Mutable","initial sel_municipios"],(e,t)=>new e(t)),n.variable(t("sel_municipios")).define("sel_municipios",["mutable sel_municipios"],e=>e.generator),n.define("initial sel",["semanas_epidemiologicas","d3","urlParamConf","defaultConf"],eM),n.variable(t("mutable sel")).define("mutable sel",["Mutable","initial sel"],(e,t)=>new e(t)),n.variable(t("sel")).define("sel",["mutable sel"],e=>e.generator),n.define("initial sel_pm25",["sel"],eD),n.variable(t("mutable sel_pm25")).define("mutable sel_pm25",["Mutable","initial sel_pm25"],(e,t)=>new e(t)),n.variable(t("sel_pm25")).define("sel_pm25",["mutable sel_pm25"],e=>e.generator),n.variable(t("bisector")).define("bisector",["d3"],eN),n.variable(t("formatTime")).define("formatTime",["d3"],eL),n.variable(t("periodoInicio")).define("periodoInicio",["intervalo"],eR),n.variable(t("periodoFim")).define("periodoFim",["intervalo"],eP),n.variable(t("filterDate")).define("filterDate",["conf_trilhas","janela","semanas_epidemiologicas","periodoInicio","periodoFim"],eF),n.variable(t("height")).define("height",eB),n.define("initial loading",eU),n.variable(t("mutable loading")).define("mutable loading",["Mutable","initial loading"],(e,t)=>new e(t)),n.variable(t("loading")).define("loading",["mutable loading"],e=>e.generator),n.variable(t("sqlSisam")).define("sqlSisam",["mutable loading","municipios","SQLiteDatabaseClient"],e$),n.variable(t("style2")).define("style2",["html"],ej),n.variable(t("municipios")).define("municipios",["FileAttachment"],ez),n.variable(t("semanas_epidemiologicas")).define("semanas_epidemiologicas",["FileAttachment"],eG),n.variable(t("capitais")).define("capitais",eH),n.variable(t("siglas")).define("siglas",eV),n.define("initial data",eq),n.variable(t("mutable data")).define("mutable data",["Mutable","initial data"],(e,t)=>new e(t)),n.variable(t("data")).define("data",["mutable data"],e=>e.generator),n.define("initial cache",eW),n.variable(t("mutable cache")).define("mutable cache",["Mutable","initial cache"],(e,t)=>new e(t)),n.variable(t("cache")).define("cache",["mutable cache"],e=>e.generator),n.variable(t("months")).define("months",eZ),n.variable(t("agregacoes")).define("agregacoes",["siglas"],eX),n.variable(t("queryLocalSINASC")).define("queryLocalSINASC",["agregacoes"],eJ),n.variable(t("queryLocalSISAM")).define("queryLocalSISAM",["agregacoes","siglas","municipios"],eY),n.variable(t()).define(["md"],eQ),n.variable(t("objToUrlParam")).define("objToUrlParam",["lz"],eK),n.variable(t("urlParamToObj")).define("urlParamToObj",["lz"],e0),n.variable(t("getCurrentConf")).define("getCurrentConf",["mutable mp","mutable sel_municipios","intervalo","mutable conf_trilhas"],e1),n.variable(t("defaultConf")).define("defaultConf",e2),n.variable(t("urlParamConf")).define("urlParamConf",["URLSearchParams","urlParamToObj","sessionStorage","defaultConf"],e5),n.variable(t("copyToClipboard")).define("copyToClipboard",e3),n.variable(t("currentHref")).define("currentHref",e4),n.variable(t("copyLinkButton")).define("copyLinkButton",["svg","currentHref","objToUrlParam","getCurrentConf","copyToClipboard"],e6),n.variable(t("linkParam")).define("linkParam",["objToUrlParam","getCurrentConf"],e8),n.variable(t()).define(["md"],e7),n.variable(t("maxScale")).define("maxScale",e9),n.variable(t("volume_mol")).define("volume_mol",te),n.variable(t("massa_mol")).define("massa_mol",tt),n.variable(t("padroes")).define("padroes",ti),n.variable(t("fetchPM25")).define("fetchPM25",["indicador","sqlSisam"],tn),n.variable(t("procPM25")).define("procPM25",["semanas_epidemiologicas","indicador","massa_mol","volume_mol"],ta),n.variable(t()).define(["md"],tr),n.variable(t("fetchPESO")).define("fetchPESO",["agregacoes","municipios","newDataSource"],to),n.variable(t("procPESO")).define("procPESO",["semanas_epidemiologicas"],tl),n.variable(t("fetchRobson")).define("fetchRobson",["agregacoes","municipios","newDataSource"],ts),n.variable(t("procRobson")).define("procRobson",["procTOTALUnfiltered","semanas_epidemiologicas"],td),n.variable(t("procTOTALUnfiltered")).define("procTOTALUnfiltered",["semanas_epidemiologicas"],tc),n.variable(t("fetchTOTAL")).define("fetchTOTAL",["agregacoes","municipios","newDataSource"],tu),n.variable(t("procTOTAL")).define("procTOTAL",["procTOTALUnfiltered","semanas_epidemiologicas"],tf),n.variable(t()).define(["md"],tp),n.variable(t("Sortable")).define("Sortable",["require"],tm),n.variable(t("d3_5")).define("d3_5",["require"],th),n.variable(t("slider_snap")).define("slider_snap",["layout","d3_5","DOM","months","semanas_epidemiologicas","mutable sel","d3"],tv),n.variable(t("layout")).define("layout",tb),n.variable(t("style_slider")).define("style_slider",["html"],tg);let o=e.module(M);return n.import("menuCaracteristicasNascimento","ampliaMenu",o),n.import("datasource","newDataSource",o),n.variable(t("lz")).define("lz",["require"],tx),n.variable(t("style_menu")).define("style_menu",["html"],ty),n.variable(t("styleMenuMun")).define("styleMenuMun",["html"],tw),n}i.d(t,{Z:function(){return tA}})},7584:function(e,t,i){"use strict";function n(e){return e`# Help Layer

Suppose you have an application with a nice interface for which you want to provide interactive help. One way to do it is to overlay information panels attached to selected interface elements and make them appear when help is solicited.`}function a(e,t,i){return e(t.querySelector("div"),i,!0)}async function r(e,t){return t.html`<div class=container>
  <div class=PET>
    <label for="pet-select">Choose a pet:</label>
    
    <select name="pets" id="pet-select">
        <option value="">--Please choose an option--</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
    </select>
  </div>
  
  <div class=MONTH > 
  <label for="start">Start month:</label>
  <input type="month" id="start" name="start"
         min="2018-03" value="2018-05">
  </div>

  <img src="${await e("sample9.png").url()}" width=400 />
  <table class=TAB>
    <tr><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td></tr> 
    <tr><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr> 
    <tr><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr> 
  </table>
</div>
<style>
  .container {
    display:flex;
    flex-wrap: wrap;
    border:1px solid gray;
    padding:5px;
  }
  
  .PET, .MONTH {
    flex: 1 1 auto;
  }
  .TAB td {
    min-width:100px;
  }
</style>`}function o(e){return e.csvParse(`description,selector,corner,xoffset,yoffset,text
pet menu,.PET,NW,0,25,"Pet menu - lets you select your current pet"
month chooser,.MONTH input,E,20,0,"Month menu - lets you select a month"
image,.container img,N,0,10,"An illustrative image"
a sample table,table,C,0,0,"A table with 3 rows and 4 columns. This help text is bigger than the others so that it fills many lines."`)}function l(e,t){return e.table(t)}function s(e,t,i,n,a){return function(r,o,l=!0){let[s,d]=[r.clientWidth,r.clientHeight],c=e`<div class="helpLayer">`;l||(c.style.pointerEvents="none"),Object.assign(c.style,{position:"absolute",top:"0px",left:"0px",minWidth:`${s}px`,minHeight:`${d}px`,zIndex:1e3,background:"rgba(0,0,0,0)"});let u=[],f=e=>{for(let t of u)t===e?t.style.display="block"==t.style.display?"none":"block":t.style.display="none"};for(let p of o){let m=r.querySelector(p.selector);if(!m){console.log("Can't find:"+p.selector);continue}let h={x:m.offsetLeft,y:m.offsetTop,width:m.clientWidth,height:m.clientHeight};if(0==h.x&&0==h.y&&0==h.width&&0==h.height){console.log("Element with null geometry:"+p.selector);continue}let v=e`<div class="helpPanel">`;Object.assign(v.style,{position:"absolute",top:`${h.y}px`,left:`${h.x}px`,minWidth:`${h.width}px`,minHeight:`${h.height}px`,pointerEvents:"none"});let b=function(e,n){let[a,r]=[+e.xoffset,+e.yoffset],o={},l=i(t,e.text);return e.corner.includes("N")?(o.y=r,l.y=r+15+5):e.corner.includes("S")?(o.y=n.height+r-15,l.y=o.y-5-l.height):(o.y=n.height/2+r-7.5,l.y=o.y+7.5-l.height/2),e.corner.includes("W")?(o.x=a,l.x=o.x+5+15):e.corner.includes("E")?(o.x=n.width+a-15,l.x=o.x-5-l.width):(o.x=n.width/2+a-7.5,l.x=o.x-l.width/2+7.5,e.corner.includes("S")||e.corner.includes("N")||(o.y-=l.height/4+7.5+5,l.y+=l.height/4)),{icon:o,box:l}}(p,h),g=n();Object.assign(g.style,{position:"absolute",top:`${b.icon.y}px`,left:`${b.icon.x}px`,pointerEvents:"auto"});let x=a.html`<div class=helpBox>${p.text}`;Object.assign(x.style,{display:"none",position:"absolute",pointerEvents:"none",top:`${b.box.y}px`,left:`${b.box.x}px`,width:`${b.box.width}px`}),u.push(x),g.onclick=()=>f(x),v.append(g,x),c.append(v)}return c}}function d(e,t,i,n){return function(a,r,o=!0){let l=e.html`<div>`;l.value=!1;let s=null,d=()=>{l.innerHTML="",l.value?(l.append(t()),s=i(a,r),a.append(s)):(l.append(n()),s&&s.remove())};return l.onclick=()=>{l.value=!l.value,d(),l.dispatchEvent(new CustomEvent("input"))},d(),l}}function c(e){return e`## Icons`}function u(e){return()=>e.html`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 0C3.36 0 0 3.36 0 7.5C0 11.64 3.36 15 7.5 15C11.64 15 15 11.64 15 7.5C15 3.36 11.64 0 7.5 0ZM8.25 11.25H6.75V6.75H8.25V11.25ZM8.25 5.25H6.75V3.75H8.25V5.25Z" fill="#E23C12"/>
</svg>`}function f(e){return()=>e.html`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   width="41"
   height="22"
   viewBox="0 0 41 22"
   fill="none"
   version="1.1"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs70" />
  <path
     d="m 10.354126,20.5 h 20 c 5.51997,0 9.999974,-4.48 9.999974,-10 0,-5.52 -4.480004,-10 -9.999974,-10 h -20 c -5.52,0 -10,4.48 -10,10 0,5.52 4.48,10 10,10 z m 20,-16 c 3.31997,0 5.99997,2.68 5.99997,6 0,3.32 -2.68,6 -5.99997,6 -3.32,0 -6,-2.68 -6,-6 0,-3.32 2.68,-6 6,-6 z"
     fill="#151472"
     id="path62" />
  <text
     xml:space="preserve"
     style="fill:#000000"
     x="11.813002"
     y="9.0818624"
     id="text284"><tspan
       sodipodi:role="line"
       id="tspan282"
       x="11.813002"
       y="9.0818624" /></text>
  <g
     aria-label="ON"
     id="text338"
     style="fill:#000000">
    <path
       d="m 12.644481,6.9202013 q 0.533203,0.5859375 0.814453,1.4355469 0.287109,0.8496094 0.287109,1.9277348 0,1.078125 -0.292969,1.933593 -0.287109,0.84961 -0.808593,1.417969 -0.539063,0.591797 -1.277344,0.890625 -0.732422,0.298828 -1.6757813,0.298828 -0.9199219,0 -1.6757812,-0.304687 -0.75,-0.304688 -1.2773438,-0.884766 -0.5273437,-0.580078 -0.8144531,-1.423828 -0.28125,-0.84375 -0.28125,-1.927734 0,-1.0664067 0.28125,-1.9101567 0.28125,-0.8496094 0.8203125,-1.453125 0.515625,-0.5742187 1.2773437,-0.8789062 0.7675782,-0.3046875 1.6699219,-0.3046875 0.9375003,0 1.6816403,0.3105468 0.75,0.3046875 1.271485,0.8730469 z m -0.105469,3.3632817 q 0,-1.6992192 -0.761719,-2.6191411 -0.761719,-0.9257812 -2.0800779,-0.9257812 -1.3300781,0 -2.0917969,0.9257812 -0.7558594,0.9199219 -0.7558594,2.6191411 0,1.716796 0.7734375,2.630859 0.7734375,0.908203 2.0742188,0.908203 1.3007809,0 2.0683589,-0.908203 0.773438,-0.914063 0.773438,-2.630859 z"
       style="fill:#ffffff"
       id="path442" />
    <path
       d="M 22.242137,14.642858 H 20.80659 L 16.669871,6.8381701 V 14.642858 H 15.585887 V 5.9182482 h 1.798828 l 3.773438,7.1249998 V 5.9182482 h 1.083984 z"
       style="fill:#ffffff"
       id="path444" />
  </g>
</svg>
`}function p(e){return()=>e.html`<svg width="41" height="22" viewBox="0 0 41 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.3541 0.5H10.3541C4.83413 0.5 0.354126 4.98 0.354126 10.5C0.354126 16.02 4.83413 20.5 10.3541 20.5H30.3541C35.8741 20.5 40.3541 16.02 40.3541 10.5C40.3541 4.98 35.8741 0.5 30.3541 0.5ZM10.3541 16.5C7.03413 16.5 4.35413 13.82 4.35413 10.5C4.35413 7.18 7.03413 4.5 10.3541 4.5C13.6741 4.5 16.3541 7.18 16.3541 10.5C16.3541 13.82 13.6741 16.5 10.3541 16.5Z" fill="#151472"/>
<path d="M24.7448 10.3301V11.5654C24.7448 12.0667 24.6894 12.5078 24.5787 12.8887C24.4713 13.2663 24.3134 13.582 24.1051 13.8359C23.8968 14.0898 23.6461 14.2803 23.3531 14.4072C23.0602 14.5342 22.7298 14.5977 22.3619 14.5977C22.0071 14.5977 21.6832 14.5342 21.3903 14.4072C21.0973 14.2803 20.845 14.0898 20.6334 13.8359C20.4218 13.582 20.2574 13.2663 20.1403 12.8887C20.0263 12.5078 19.9694 12.0667 19.9694 11.5654V10.3301C19.9694 9.82878 20.0263 9.38932 20.1403 9.01172C20.2542 8.63086 20.417 8.31348 20.6285 8.05957C20.8401 7.80566 21.0924 7.61523 21.3854 7.48828C21.6783 7.35807 22.0022 7.29297 22.3571 7.29297C22.7249 7.29297 23.0553 7.35807 23.3483 7.48828C23.6445 7.61523 23.8951 7.80566 24.1002 8.05957C24.3086 8.31348 24.4681 8.63086 24.5787 9.01172C24.6894 9.38932 24.7448 9.82878 24.7448 10.3301ZM23.8561 11.5654V10.3203C23.8561 9.92969 23.8235 9.5944 23.7584 9.31445C23.6933 9.03125 23.5973 8.80013 23.4703 8.62109C23.3434 8.44206 23.1871 8.31022 23.0016 8.22559C22.816 8.1377 22.6012 8.09375 22.3571 8.09375C22.1259 8.09375 21.9176 8.1377 21.7321 8.22559C21.5498 8.31022 21.3935 8.44206 21.2633 8.62109C21.1331 8.80013 21.0322 9.03125 20.9606 9.31445C20.8922 9.5944 20.858 9.92969 20.858 10.3203V11.5654C20.858 11.9593 20.8922 12.2979 20.9606 12.5811C21.0322 12.861 21.1331 13.0921 21.2633 13.2744C21.3968 13.4535 21.5563 13.5869 21.7418 13.6748C21.9274 13.7594 22.1341 13.8018 22.3619 13.8018C22.6061 13.8018 22.8209 13.7594 23.0065 13.6748C23.1953 13.5869 23.3515 13.4535 23.4752 13.2744C23.6022 13.0921 23.6966 12.861 23.7584 12.5811C23.8235 12.2979 23.8561 11.9593 23.8561 11.5654ZM27.0348 7.39062V14.5H26.1364V7.39062H27.0348ZM29.4323 10.5889V11.3604H26.8639V10.5889H29.4323ZM29.8375 7.39062V8.16211H26.8639V7.39062H29.8375ZM31.8492 7.39062V14.5H30.9508V7.39062H31.8492ZM34.2467 10.5889V11.3604H31.6783V10.5889H34.2467ZM34.652 7.39062V8.16211H31.6783V7.39062H34.652Z" fill="white"/>
</svg>
`}function m(e,t,i,n){return n.html`${e()} ${t()} ${i()}`}function h(e){return e`## Help box stuff`}function v(e){return e`<style>
.helpBox {
  box-sizing: border-box;
  border: 1px solid rgba(0,0,0,0.4);
  border-radius: 4px;	
  box-shadow: 0px 0px 6px 0px #868789;
  background: rgba(240,240,240,0.9);
  padding: 5px;
  font-family: Roboto condensed, Helvetica, sans-serif, Arial;
  font-size: 10px;
  user-select: none;
}
</style>`}function b(){return 250}function g(e,t){return e(t,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")}function x(e,t){return function(i,n){let a=e.html`<div class=helpBox >`;Object.assign(a.style,{width:i+"px",position:"absolute",bottom:"-1000px"}),a.innerHTML=n,document.body.append(a),t.delay(0);let r=a.getBoundingClientRect();return a.remove(),{width:r.width,height:r.height}}}function y(e,t){let y=e.module(),w=new Map([["sample9.png",{url:new i.U(i(6210)),mimeType:"image/png",toString:function(){return this.url}}]]);return y.builtin("FileAttachment",e.fileAttachments(e=>w.get(e))),y.variable(t()).define(["md"],n),y.variable(t()).define(["helpToggle","GUI","data"],a),y.variable(t("GUI")).define("GUI",["FileAttachment","htl"],r),y.variable(t("data")).define("data",["d3"],o),y.variable(t()).define(["Inputs","data"],l),y.variable(t("createHelpLayer")).define("createHelpLayer",["html","helpBoxWidth","measure","helpIcon","htl"],s),y.variable(t("helpToggle")).define("helpToggle",["htl","onToggleIcon","createHelpLayer","offToggleIcon"],d),y.variable(t()).define(["md"],c),y.variable(t("helpIcon")).define("helpIcon",["htl"],u),y.variable(t("onToggleIcon")).define("onToggleIcon",["htl"],f),y.variable(t("offToggleIcon")).define("offToggleIcon",["htl"],p),y.variable(t()).define(["onToggleIcon","offToggleIcon","helpIcon","htl"],m),y.variable(t()).define(["md"],h),y.variable(t("helpBoxStyle")).define("helpBoxStyle",["html"],v),y.variable(t("helpBoxWidth")).define("helpBoxWidth",b),y.variable(t()).define(["measure","helpBoxWidth"],g),y.variable(t("measure")).define("measure",["htl","Promises"],x),y}function w(e){return e`# Color Legend

A simple legend for a [color scale](/@d3/color-schemes). Supports [continuous](/@d3/continuous-scales), [sequential](/@d3/sequential-scales), [diverging](/@d3/diverging-scales), [quantize, quantile, threshold](/@d3/quantile-quantize-and-threshold-scales) and [ordinal](/@d3/d3-scaleordinal) scales. To use:

~~~js
import {Legend, Swatches} from "@d3/color-legend"
~~~

Then call the legend function as shown below. (For ordinal scales, also consider the swatches function.)`}function A(e,t){return e(t.scaleSequential([0,100],t.interpolateViridis),{title:"Temperature (\xb0F)"})}function _(e,t){return e(t.scaleSequentialSqrt([0,1],t.interpolateTurbo),{title:"Speed (kts)"})}function C(e,t){return e(t.scaleDiverging([-.1,0,.1],t.interpolatePiYG),{title:"Daily change",tickFormat:"+%"})}function E(e,t){return e(t.scaleDivergingSqrt([-.1,0,.1],t.interpolateRdBu),{title:"Daily change",tickFormat:"+%"})}function S(e,t){return e(t.scaleSequentialLog([1,100],t.interpolateBlues),{title:"Energy (joules)",ticks:10})}function k(e,t){return e(t.scaleSequentialQuantile(t.range(100).map(()=>Math.random()**2),t.interpolateBlues),{title:"Quantile",tickFormat:".2f"})}function T(e,t){return e(t.scaleSqrt([-100,0,100],["blue","white","red"]),{title:"Temperature (\xb0C)"})}function O(e,t){return e(t.scaleQuantize([1,10],t.schemePurples[9]),{title:"Unemployment rate (%)"})}function I(e,t){return e(t.scaleQuantile(t.range(1e3).map(t.randomNormal(100,20)),t.schemeSpectral[9]),{title:"Height (cm)",tickFormat:".0f"})}function M(e,t){return e(t.scaleThreshold([2.5,3.1,3.5,3.9,6,7,8,9.5],t.schemeRdBu[9]),{title:"Unemployment rate (%)",tickSize:0})}function D(e,t){return e(t.scaleOrdinal(["<10","10-19","20-29","30-39","40-49","50-59","60-69","70-79","≥80"],t.schemeSpectral[10]),{title:"Age (years)",tickSize:0})}function N(e){return e`But wait, there’s more!

How about swatches for ordinal color scales? Both variable-width swatches and [column layout](https://developer.mozilla.org/en-US/docs/Web/CSS/columns) are supported.`}function L(e,t){return e(t.scaleOrdinal(["blueberries","oranges","apples"],t.schemeCategory10))}function R(e,t){return e(t.scaleOrdinal(["Wholesale and Retail Trade","Manufacturing","Leisure and hospitality","Business services","Construction","Education and Health","Government","Finance","Self-employed","Other"],t.schemeTableau10),{columns:"180px"})}function P(e){return e`---

## Implementation`}function F(e){return function(t,{title:i,tickSize:n=6,width:a=320,height:r=44+n,marginTop:o=18,marginRight:l=0,marginBottom:s=16+n,marginLeft:d=0,ticks:c=a/64,tickFormat:u,tickValues:f}={}){function p(e,t=256){let i=document.createElement("canvas");i.width=t,i.height=1;let n=i.getContext("2d");for(let a=0;a<t;++a)n.fillStyle=e(a/(t-1)),n.fillRect(a,0,1,1);return i}let m=e.create("svg").attr("width",a).attr("height",r).attr("viewBox",[0,0,a,r]).style("overflow","visible").style("display","block"),h=e=>e.selectAll(".tick line").attr("y1",o+s-r),v;if(t.interpolate){let b=Math.min(t.domain().length,t.range().length);v=t.copy().rangeRound(e.quantize(e.interpolate(d,a-l),b)),m.append("image").attr("x",d).attr("y",o).attr("width",a-d-l).attr("height",r-o-s).attr("preserveAspectRatio","none").attr("xlink:href",p(t.copy().domain(e.quantize(e.interpolate(0,1),b))).toDataURL())}else if(t.interpolator){if(v=Object.assign(t.copy().interpolator(e.interpolateRound(d,a-l)),{range:()=>[d,a-l]}),m.append("image").attr("x",d).attr("y",o).attr("width",a-d-l).attr("height",r-o-s).attr("preserveAspectRatio","none").attr("xlink:href",p(t.interpolator()).toDataURL()),!v.ticks){if(void 0===f){let g=Math.round(c+1);f=e.range(g).map(i=>e.quantile(t.domain(),i/(g-1)))}"function"!=typeof u&&(u=e.format(void 0===u?",f":u))}}else if(t.invertExtent){let x=t.thresholds?t.thresholds():t.quantiles?t.quantiles():t.domain(),y=void 0===u?e=>e:"string"==typeof u?e.format(u):u;v=e.scaleLinear().domain([-1,t.range().length-1]).rangeRound([d,a-l]),m.append("g").selectAll("rect").data(t.range()).join("rect").attr("x",(e,t)=>v(t-1)).attr("y",o).attr("width",(e,t)=>v(t)-v(t-1)).attr("height",r-o-s).attr("fill",e=>e),f=e.range(x.length),u=e=>y(x[e],e)}else v=e.scaleBand().domain(t.domain()).rangeRound([d,a-l]),m.append("g").selectAll("rect").data(t.domain()).join("rect").attr("x",v).attr("y",o).attr("width",Math.max(0,v.bandwidth()-1)).attr("height",r-o-s).attr("fill",t),h=()=>{};return m.append("g").attr("transform",`translate(0,${r-s})`).call(e.axisBottom(v).ticks(c,"string"==typeof u?u:void 0).tickFormat("function"==typeof u?u:void 0).tickSize(n).tickValues(f)).call(h).call(e=>e.select(".domain").remove()).call(e=>e.append("text").attr("x",d).attr("y",o+s-r-6).attr("fill","currentColor").attr("text-anchor","start").attr("font-weight","bold").attr("class","title").text(i)),m.node()}}function B(e){return function({color:t,...i}){return e(t,i)}}function U(e,t){return function(i,{columns:n=null,format:a,unknown:r,swatchSize:o=15,swatchWidth:l=o,swatchHeight:s=o,marginLeft:d=0}={}){let c=`-swatches-${Math.random().toString(16).slice(2)}`,u=null==r?void 0:i.unknown(),f=null==u||u===e.scaleImplicit?[]:[u],p=i.domain().concat(f);return(void 0===a&&(a=e=>e===u?r:e),null!==n)?t.html`<div style="display: flex; align-items: center; margin-left: ${+d}px; min-height: 33px; font: 10px sans-serif;">
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
  <div style=${{width:"100%",columns:n}}>${p.map(e=>{let n=`${a(e)}`;return t.html`<div class=${c}-item>
      <div class=${c}-swatch style=${{background:i(e)}}></div>
      <div class=${c}-label title=${n}>${n}</div>
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
  <div>${p.map(e=>t.html`<span class="${c}" style="--color: ${i(e)}">${a(e)}</span>`)}</div>`}}function $(e){return function({color:t,...i}){return e(t,i)}}function j(e,t){let i=e.module();return i.variable(t()).define(["md"],w),i.variable(t()).define(["Legend","d3"],A),i.variable(t()).define(["Legend","d3"],_),i.variable(t()).define(["Legend","d3"],C),i.variable(t()).define(["Legend","d3"],E),i.variable(t()).define(["Legend","d3"],S),i.variable(t()).define(["Legend","d3"],k),i.variable(t()).define(["Legend","d3"],T),i.variable(t()).define(["Legend","d3"],O),i.variable(t()).define(["Legend","d3"],I),i.variable(t()).define(["Legend","d3"],M),i.variable(t()).define(["Legend","d3"],D),i.variable(t()).define(["md"],N),i.variable(t()).define(["Swatches","d3"],L),i.variable(t()).define(["Swatches","d3"],R),i.variable(t()).define(["md"],P),i.variable(t("Legend")).define("Legend",["d3"],F),i.variable(t("legend")).define("legend",["Legend"],B),i.variable(t("Swatches")).define("Swatches",["d3","htl"],U),i.variable(t("swatches")).define("swatches",["Swatches"],$),i}async function z(e,t){return e`# Inputs
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
  * [\`password\`](#passwordDemo)`}function G(e){return e`| <h3>Friends & Family:</h3>  |   |
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

<br>*If you have any improvements for the bazaar, [please make your change in a fork and send it to me as a suggestion.](https://observablehq.com/@observablehq/suggestions-and-comments)*`}function H(e){return e`---
## Sliders

~~~js
import {slider} from "@jashkenas/inputs"
~~~`}function V(e){return e()}function q(e){return e({min:0,max:1,step:.01,format:".0%",description:"Zero to one, formatted as a percentage"})}function W(e){return e({min:0,max:1,step:.01,format:e=>`${Math.round(100*e)} per cent`,description:"Zero to one, formatted with a custom function"})}function Z(e){return e({min:0,max:1e9,step:1e3,value:325e4,format:",",description:"Zero to one billion, in steps of one thousand, formatted as a (US) number"})}function X(e){return e({min:0,max:100,step:1,value:10,title:"Integers",description:"Integers from zero through 100"})}function J(e){return e({min:.9,max:1.1,precision:3,description:"A high precision slider example"})}function Y(e){return e({min:.9,max:1.1,precision:3,submit:!0,description:"The same as a4, but only changes value on submit"})}function Q(e){return e`More [fancy slider techniques](https://observablehq.com/@mootari/prime-numbers-slider).`}function K(e){return function(t={}){let{min:i=0,max:n=1,value:a=(n+i)/2,step:r="any",precision:o=2,title:l,description:s,disabled:d,getValue:c,format:u,display:f,submit:p}="number"==typeof t?{value:t}:t;return o=Math.pow(10,o),c||(c=e=>Math.round(e.valueAsNumber*o)/o),e({type:"range",title:l,description:s,submit:p,format:u,display:f,attributes:{min:i,max:n,step:r,disabled:d,value:a},getValue:c})}}function ee(e){return e`---
## Buttons

~~~js
import {button} from "@jashkenas/inputs"
~~~`}function et(e){return e()}function ei(e){return!this}function en(e){return e({value:"Click me",description:"We use a reference to the button below to record the time you pressed it."})}function ea(e){return new Date(Date.now()).toUTCString()}function er(e){return function(t={}){let{value:i="Ok",title:n,description:a,disabled:r}="string"==typeof t?{value:t}:t,o=e({type:"button",title:n,description:a,attributes:{disabled:r,value:i}});return o.output.remove(),o}}function eo(e){return e`---
## Dropdown Menus and Multiselects

~~~js
import {select} from "@jashkenas/inputs"
~~~`}function el(e){return e(["Spring","Summer","Fall","Winter"])}function es(e){return e}function ed(e){return e({title:"Stooges",description:"Please pick your favorite stooge.",options:["Curly","Larry","Moe","Shemp"],value:"Moe"})}function ec(e){return e}function eu(e){return e({description:"As a child, which vegetables did you refuse to eat?",options:["Spinach","Broccoli","Brussels Sprouts","Cauliflower","Kale","Turnips","Green Beans","Asparagus"],multiple:!0})}function ef(e){return e}function ep(e){let t=e({title:"How are you feeling today?",options:[{label:"\uD83E\uDD37",value:"shrug"},{label:"\uD83D\uDE02",value:"tears-of-joy"},{label:"\uD83D\uDE0D",value:"loving-it"},{label:"\uD83E\uDD14",value:"hmmm"},{label:"\uD83D\uDE31",value:"yikes",disabled:!0},{label:"\uD83D\uDE08",value:"mischievous"},{label:"\uD83D\uDCA9",value:"poo"}],value:"hmmm"});return t.input.style.fontSize="30px",t.input.style.marginTop="8px",t}function em(e){return e}function eh(e,t){return function(i={}){let{value:n,title:a,description:r,disabled:o,submit:l,multiple:s,size:d,options:c}=Array.isArray(i)?{options:i}:i;c=c.map(e=>"object"==typeof e?e:{value:e,label:e});let u=e({type:"select",title:a,description:r,submit:l,attributes:{disabled:o},getValue(e){let t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>e.value);return s?t:t[0]},form:t`
      <form>
        <select name="input" ${s?`multiple size="${d||c.length}"`:""}>
          ${c.map(({value:e,label:i,disabled:a})=>Object.assign(t`<option>`,{value:e,selected:Array.isArray(n)?n.includes(e):n===e,disabled:!!a&&a,textContent:i}))}
        </select>
      </form>
    `});return u.output.remove(),u}}function ev(e){return e`---
## Autoselects
*A variant of an option menu, using an autocompleting text input, via HTML’s datalist element.* 

~~~js
import {autoSelect} from "@jashkenas/inputs"
~~~`}function eb(e,t){return e({options:t.objects.states.geometries.map(e=>e.properties.name),placeholder:"Search for a US state . . ."})}function eg(e){return e}function ex(e,t){return function(i={}){let{value:n,title:a,description:r,disabled:o,autocomplete:l="off",placeholder:s,size:d,options:c,list:u="options"}=Array.isArray(i)?{options:i}:i,f=new Set(c),p=e({type:"text",title:a,description:r,attributes:{disabled:o},action(e){e.value=e.input.value=n||"",e.onsubmit=e=>e.preventDefault(),e.input.oninput=function(t){t.stopPropagation(),e.value=e.input.value,(!e.value||f.has(e.value))&&e.dispatchEvent(new CustomEvent("input"))}},form:t`
      <form>
         <input name="input" type="text" autocomplete="off" 
          placeholder="${s||""}" style="font-size: 1em;" list=${u}>
          <datalist id="${u}">
              ${c.map(e=>Object.assign(t`<option>`,{value:e}))}
          </datalist>
      </form>
      `});return p.output.remove(),p}}function ey(e){return e`---
## Color Pickers

*value: a hexadecimal string, e.g. * \`"#bada55"\` 

~~~js
import {color} from "@jashkenas/inputs"
~~~`}function ew(e){return e()}function eA(e){return e({value:"#0000ff",title:"Background Color",description:"This color picker starts out blue"})}function e_(e){return function(t={}){let{value:i="#000000",title:n,description:a,disabled:r,submit:o,display:l}="string"==typeof t?{value:t}:t,s=e({type:"color",title:n,description:a,submit:o,display:l,attributes:{disabled:r,value:i}});return s.input.value="",s.input.value=i,(n||a)&&(s.input.style.margin="5px 0"),s}}function eC(e){return e` ---
## Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {coordinates} from "@jashkenas/inputs"
~~~`}function eE(e){return e()}function eS(e){return e}function ek(e){return e({title:"Hometown",description:"Enter the coordinates of where you were born",value:[-122.27,37.87],submit:!0})}function eT(e){return e}function eO(e,t){return function(i={}){let{value:n=[],title:a,description:r,submit:o}=Array.isArray(i)?{value:i}:i,[l,s]=n;l=null!=l?l:"",s=null!=s?s:"";let d=e`<input name="input" type="number" autocomplete="off" min="-180" max="180" style="width: 80px;" step="any" value="${l}" />`,c=e`<input name="input" type="number" autocomplete="off" min="-90" max="90" style="width: 80px;" step="any" value="${s}" />`,u=t({type:"coordinates",title:a,description:r,submit:o,getValue(){let e=d.valueAsNumber,t=c.valueAsNumber;return[isNaN(e)?null:e,isNaN(t)?null:t]},form:e`
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
    `});return u.output.remove(),u}}function eI(e){return e` ---
## World Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {worldMapCoordinates} from "@jashkenas/inputs"
~~~`}function eM(e){return e([-122.27,37.87])}function eD(e){return e}function eN(e,t,i,n,a,r,o){return function(l={}){let{value:s=[],title:d,description:c,width:u=400}=Array.isArray(l)?{value:l}:l,f=Math.round(.525*u),[p,m]=s;p=null!=p?p:null,m=null!=m?m:null;let h=e`<form style="width: ${u}px;"></form>`,v=t.context2d(u,f),b=v.canvas;b.style.margin="10px 0 3px";let g=i.geoNaturalEarth1().precision(.1).fitSize([u,f],{type:"Sphere"}),x=i.geoPath(g,v).pointRadius(2.5);function y(){if(v.fillStyle="#fff",v.fillRect(0,0,u,f),v.beginPath(),x(n),v.lineWidth=.35,v.strokeStyle="#ddd",v.stroke(),v.beginPath(),x(a),v.fillStyle="#f4f4f4",v.fill(),v.beginPath(),x(r),v.strokeStyle="#aaa",v.stroke(),null!=p&&null!=m){let e={type:"MultiPoint",coordinates:[[p,m]]};v.beginPath(),x(e),v.fillStyle="#f00",v.fill()}}h.append(b),b.onclick=function(e){let{offsetX:t,offsetY:i}=e;var n=g.invert([t,i]);p=+n[0].toFixed(2),m=+n[1].toFixed(2),y(),b.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},y();let w=o({type:"worldMapCoordinates",title:d,description:c,display:t=>e`<div style="width: ${u}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-bottom: 5px;">
            <span style="color: #777;">Longitude:</span> ${null!=p?p.toFixed(2):""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${null!=m?m.toFixed(2):""} 
          </div>`,getValue:()=>[null!=p?p:null,null!=m?m:null],form:h});return w}}function eL(e){return e` ---
## U.S.A. Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {usaMapCoordinates} from "@jashkenas/inputs"
~~~`}function eR(e){return e([-122.27,37.87])}function eP(e){return e}function eF(e){return e({title:"A Mini Map",description:"Defaults to New York City",width:200,value:[-74,40.71]})}function eB(e){return e}function eU(e,t,i,n,a,r){return function(o={}){let{value:l=[],title:s,description:d,width:c=400}=Array.isArray(o)?{value:o}:o,u=c/960,f=600*u,[p,m]=l;p=null!=p?p:null,m=null!=m?m:null;let h=e`<form style="width: ${c}px;"></form>`,v=t.context2d(c,f),b=v.canvas;b.style.margin="5px 0 20px";let g=i.geoAlbersUsa().scale(1280).translate([480,300]),x=i.geoPath().context(v).pointRadius(2.5/u);function y(){if(v.clearRect(0,0,c,f),v.save(),v.scale(u,u),v.lineWidth=.35/u,v.beginPath(),x(n),v.fillStyle="#f4f4f4",v.fill(),v.beginPath(),x(a),v.strokeStyle="#aaa",v.stroke(),null!=p&&null!=m){let e={type:"MultiPoint",coordinates:[g([p,m])]};v.beginPath(),x(e),v.fillStyle="#f00",v.fill()}v.restore()}h.append(b),b.onclick=function(e){let{offsetX:t,offsetY:i}=e;var n=g.invert([t/u,i/u]);p=+n[0].toFixed(2),m=+n[1].toFixed(2),y(),b.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},y();let w=r({type:"worldMapCoordinates",title:s,description:d,display:t=>e`<div style="position: absolute; width: ${c}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-top: -18px;">
            <span style="color: #777;">Longitude:</span> ${null!=p?p:""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${null!=m?m:""} 
          </div>`,getValue:()=>[null!=p?p:null,null!=m?m:null],form:h});return w}}function e$(e){return e` ---
## Dates

*value: a YYYY-MM-DD formatted string: * \`"2016-11-08"\` 

~~~js
import {date} from "@jashkenas/inputs"
~~~`}function ej(e){return e()}function ez(e){return e({title:"2017",min:"2017-01-01",max:"2017-12-31",value:"2017-01-01",description:"Only dates within the 2017 calendar year are allowed"})}function eG(e){return function(t={}){let{min:i,max:n,value:a,title:r,description:o,disabled:l,display:s}="string"==typeof t?{value:t}:t;return e({type:"date",title:r,description:o,display:s,attributes:{min:i,max:n,disabled:l,value:a}})}}function eH(e){return e` ---
## Times

*value: a HH:MM:SS formatted string: * \`"09:30:45"\`
<br>*(Time values are always in 24-hour format)*

~~~js
import {time} from "@jashkenas/inputs"
~~~`}function eV(e){return e()}function eq(e){return e}function eW(e){return e({title:"Afternoon",min:"12:00:00",max:"23:59:59",value:"13:00:00",step:1,description:"Only times after noon are allowed, and seconds are included"})}function eZ(e){return e}function eX(e){return function(t={}){let{min:i,max:n,step:a,value:r,title:o,description:l,disabled:s,display:d}="string"==typeof t?{value:t}:t,c=e({type:"time",title:o,description:l,display:d,getValue:e=>e.value?e.value:void 0,attributes:{min:i,max:n,step:a,disabled:s,value:r}});return c.output.remove(),c}}function eJ(e){return e`---
## File Upload
*Use the JavaScript [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications) to work with uploaded file contents.*

\`import {file} from "@jashkenas/inputs"\``}function eY(e){return e()}function eQ(e){return e({title:"Photographs",description:"Only .jpg files are allowed in this example. Choose some images, and they’ll appear in the cell below.",accept:".jpg",multiple:!0})}async function eK(e,t,i){let n=e`<div>`;for(var a=0;a<t.length;a++){t[a];let r=e`<img height="125px" style="margin: 2px;" />`;r.src=await i.url(t[a]),n.append(r)}return n}function e0(e){return function(t={}){let{multiple:i,accept:n,title:a,description:r,disabled:o}=t,l=e({type:"file",title:a,description:r,attributes:{multiple:i,accept:n,disabled:o},action(e){e.input.onchange=()=>{e.value=i?e.input.files:e.input.files[0],e.dispatchEvent(new CustomEvent("input"))}}});return l.output.remove(),l.input.onchange(),l}}function e1(e){return e`---
## Text Inputs

~~~js
import {text} from "@jashkenas/inputs"
~~~`}function e2(e){return e()}function e5(e){return e({title:"A Text Input",placeholder:"Placeholder text",description:"Note that text inputs don’t show output on the right"})}function e3(e){return e}function e4(e){return e({placeholder:"Placeholder text",description:"This input only changes value on submit",submit:"Go"})}function e6(e){return e}function e8(e){return function(t={}){let{value:i,title:n,description:a,disabled:r,autocomplete:o="off",maxlength:l,minlength:s,pattern:d,placeholder:c,size:u,submit:f,getValue:p}="string"==typeof t?{value:t}:t,m=e({type:"text",title:n,description:a,submit:f,getValue:p,attributes:{value:i,autocomplete:o,maxlength:l,minlength:s,pattern:d,placeholder:c,size:u,disabled:r}});return m.output.remove(),m.input.style.fontSize="1em",m}}function e7(e){return e`---
## Textareas

~~~js
import {textarea} from "@jashkenas/inputs"
~~~`}function e9(e){return e()}function te(e){return e}function tt(e){return e({title:"Your Great American Novel",placeholder:"Insert story here...",spellcheck:!0,width:"100%",rows:10,submit:"Publish"})}function ti(e){return e}function tn(e,t){return function(i={}){let{value:n="",title:a,description:r,autocomplete:o,cols:l=45,rows:s=3,width:d,height:c,maxlength:u,placeholder:f,spellcheck:p,wrap:m,submit:h,disabled:v,getValue:b}="string"==typeof i?{value:i}:i,g=e({form:t`<form><textarea style="display: block; font-size: 0.8em;" name=input>${n}</textarea></form>`,title:a,description:r,submit:h,getValue:b,attributes:{autocomplete:o,cols:l,rows:s,maxlength:u,placeholder:f,spellcheck:p,wrap:m,disabled:v}});return g.output.remove(),null!=d&&(g.input.style.width=d),null!=c&&(g.input.style.height=c),h&&(g.submit.style.margin="0"),(a||r)&&(g.input.style.margin="3px 0"),g}}function ta(e){return e`---
## Radio Buttons

~~~js
import {radio} from "@jashkenas/inputs"
~~~`}function tr(e){return e(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function to(e){return e}function tl(e){return e({title:"Contact Us",description:"Please select your preferred contact method",options:[{label:"By Email",value:"email"},{label:"By Phone",value:"phone"},{label:"By Pager",value:"pager"},],value:"pager"})}function ts(e){return e}function td(e,t){return function(i={}){let{value:n,title:a,description:r,submit:o,options:l,disabled:s}=Array.isArray(i)?{options:i}:i;l=l.map(e=>"string"==typeof e?{value:e,label:e}:e);let d=e({type:"radio",title:a,description:r,submit:o,getValue(e){if(e.checked)return e.value;let t=Array.prototype.find.call(e,e=>e.checked);return t?t.value:void 0},form:t`
      <form>
        ${l.map(({value:e,label:i},a)=>{let r=t`<input type=radio name=input ${e===n?"checked":""} style="vertical-align: top; ${0===a?"margin-left: 1px;":""}" />`;r.setAttribute("value",e),s&&r.setAttribute("value",s);let o=t`
          <label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${r}
           ${i}
          </label>`;return o})}
      </form>
    `});return d.output.remove(),d}}function tc(e){return e`---
## Checkboxes

~~~js
import {checkbox} from "@jashkenas/inputs"
~~~`}function tu(e){return e(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function tf(e){return e}function tp(e){return e({title:"Colors",description:"Please select your favorite colors",options:[{value:"r",label:"Red"},{value:"o",label:"Orange"},{value:"y",label:"Yellow"},{value:"g",label:"Green"},{value:"b",label:"Blue"},{value:"i",label:"Indigo"},{value:"v",label:"Violet"}],value:["r","g","b"],submit:!0})}function tm(e){return e}function th(e){return e({description:"Just a single checkbox to toggle",options:[{value:"toggle",label:"On"}],value:"toggle"})}function tv(e){return e}function tb(e,t){return function(i={}){let{value:n,title:a,description:r,submit:o,disabled:l,options:s}=Array.isArray(i)?{options:i}:i;s=s.map(e=>"string"==typeof e?{value:e,label:e}:e);let d=e({type:"checkbox",title:a,description:r,submit:o,getValue:e=>e.length?Array.prototype.filter.call(e,e=>e.checked).map(e=>e.value):!!e.checked&&e.value,form:t`
      <form>
        ${s.map(({value:e,label:i},a)=>{let r=t`<input type=checkbox name=input ${(n||[]).indexOf(e)>-1?"checked":""} style="vertical-align: top; ${0===a?"margin-left: 1px;":""}" />`;r.setAttribute("value",e),l&&r.setAttribute("disabled",l);let o=t`<label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${r}
           ${i}
          </label>`;return o})}
      </form>
    `});return d.output.remove(),d}}function tg(e){return e`---
## Numbers

~~~js
import {number} from "@jashkenas/inputs"
~~~`}function tx(e){return e()}function ty(e){return e}function tw(e){return e({placeholder:"13+",title:"Your Age",submit:!0})}function tA(e){return e}function t_(e){return function(t={}){let{value:i,title:n,description:a,disabled:r,placeholder:o,submit:l,step:s="any",min:d,max:c}="number"==typeof t||"string"==typeof t?{value:+t}:t,u=e({type:"number",title:n,description:a,submit:l,attributes:{value:i,placeholder:o,step:s,min:d,max:c,autocomplete:"off",disabled:r},getValue:e=>e.valueAsNumber});return u.output.remove(),u.input.style.width="auto",u.input.style.fontSize="1em",u}}function tC(e){return e`---
## Passwords

~~~js
import {password} from "@jashkenas/inputs"
~~~`}function tE(e){return e({value:"password"})}function tS(e){return e}function tk(e){return e({title:"Your super secret password",description:"Less than 12 characters, please.",minlength:6,maxlength:12})}function tT(e){return e}function tO(e){return function(t={}){let{value:i,title:n,description:a,disabled:r,autocomplete:o="off",maxlength:l,minlength:s,pattern:d,placeholder:c,size:u,submit:f}="string"==typeof t?{value:t}:t,p=e({type:"password",title:n,description:a,submit:f,attributes:{value:i,autocomplete:o,maxlength:l,minlength:s,pattern:d,placeholder:c,size:u,disabled:r}});return p.output.remove(),p.input.style.fontSize="1em",p}}function tI(e){return e`---
## Wishlist (Send suggestions, please!)

* 3D coordinate input (for say, positioning a camera in a WebGL sketch)
* Geocoder search with location autocomplete that returns longitude and latitude.
* Degrees or radians input, for circular things, or angles.
* A dimensions input, or a box-model input, with margin (and optionally, padding).
* A map-projection-picker input, rendering little thumbnails of all the d3-geo-projections.
* Drag and drop file upload input.
* Alternative coordinate inputs, e.g. Right Ascension, Declination.
* Other useful formatting options.

---`}function tM(e,t){return function(i){let{form:n,type:a="text",attributes:r={},action:o,getValue:l,title:s,description:d,format:c,display:u,submit:f,options:p}=i,m=e`<div></div>`;if(n||(n=e`<form>
	<input name=input type=${a} />
  </form>`),Object.keys(r).forEach(e=>{let t=r[e];null!=t&&n.input.setAttribute(e,t)}),f&&n.append(e`<input name=submit type=submit style="margin: 0 0.75em" value="${"string"==typeof f?f:"Submit"}" />`),n.append(e`<output name=output style="font: 14px Menlo, Consolas, monospace; margin-left: 0.5em;"></output>`),s&&n.prepend(e`<div style="font: 700 0.9rem sans-serif; margin-bottom: 3px;">${s}</div>`),d&&n.append(e`<div style="font-size: 0.85rem; font-style: italic; margin-top: 3px;">${d}</div>`),c&&(c="function"==typeof c?c:t.format(c)),o)o(n);else{let h=f?"onsubmit":"button"==a?"onclick":"checkbox"==a||"radio"==a?"onchange":"oninput";n[h]=e=>{e&&e.preventDefault();let t=l?l(n.input):n.input.value;if(n.output){let i=u?u(t):c?c(t):t;if(i instanceof window.Element){for(;n.output.hasChildNodes();)n.output.removeChild(n.output.lastChild);n.output.append(i)}else n.output.value=i}n.value=t,"oninput"!==h&&n.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},"oninput"!==h&&(m.oninput=e=>e&&e.stopPropagation()&&e.preventDefault()),"onsubmit"!==h&&(n.onsubmit=e=>e&&e.preventDefault()),n[h]()}for(;n.childNodes.length;)m.appendChild(n.childNodes[0]);return n.append(m),n}}function tD(e){return e("d3-geo@1")}function tN(e){return e("d3-format@1")}function tL(e){return e("topojson-client@3")}async function tR(){return(await fetch("https://cdn.jsdelivr.net/npm/world-atlas@1/world/110m.json")).json()}function tP(e,t){return e.feature(t,t.objects.land)}function tF(e,t){return e.feature(t,t.objects.countries)}async function tB(){return(await fetch("https://cdn.jsdelivr.net/npm/us-atlas@^2.1/us/states-10m.json")).json()}function tU(e,t){return e.feature(t,t.objects.nation)}function t$(e,t){return e.feature(t,t.objects.states)}function tj(e){return e.geoGraticule10()}function tz(e){let t=e`License: [MIT](https://opensource.org/licenses/MIT)`;return t.value="MIT",t}function tG(e){return e`*Clip art courtesy [ClipArt ETC](https://etc.usf.edu/clipart/), radio buttons and checkboxes courtesy [Amit Sch](https://observablehq.com/@meetamit/multiple-choice-inputs).*`}function tH(e,t){let n=e.module(),a=new Map([["capstan.gif",{url:new i.U(i(129)),mimeType:"image/gif",toString:function(){return this.url}}]]);return n.builtin("FileAttachment",e.fileAttachments(e=>a.get(e))),n.variable(t()).define(["md","FileAttachment"],z),n.variable(t()).define(["md"],G),n.variable(t("sliderDemo")).define("sliderDemo",["md"],H),n.variable(t("viewof a")).define("viewof a",["slider"],V),n.variable(t("a")).define("a",["Generators","viewof a"],(e,t)=>e.input(t)),n.variable(t("viewof a1")).define("viewof a1",["slider"],q),n.variable(t("a1")).define("a1",["Generators","viewof a1"],(e,t)=>e.input(t)),n.variable(t("viewof a1_1")).define("viewof a1_1",["slider"],W),n.variable(t("a1_1")).define("a1_1",["Generators","viewof a1_1"],(e,t)=>e.input(t)),n.variable(t("viewof a2")).define("viewof a2",["slider"],Z),n.variable(t("a2")).define("a2",["Generators","viewof a2"],(e,t)=>e.input(t)),n.variable(t("viewof a3")).define("viewof a3",["slider"],X),n.variable(t("a3")).define("a3",["Generators","viewof a3"],(e,t)=>e.input(t)),n.variable(t("viewof a4")).define("viewof a4",["slider"],J),n.variable(t("a4")).define("a4",["Generators","viewof a4"],(e,t)=>e.input(t)),n.variable(t("viewof a5")).define("viewof a5",["slider"],Y),n.variable(t("a5")).define("a5",["Generators","viewof a5"],(e,t)=>e.input(t)),n.variable(t()).define(["md"],Q),n.variable(t("slider")).define("slider",["input"],K),n.variable(t("buttonDemo")).define("buttonDemo",["md"],ee),n.variable(t("viewof b")).define("viewof b",["button"],et),n.variable(t("b")).define("b",["Generators","viewof b"],(e,t)=>e.input(t)),n.variable(t()).define(["b"],ei),n.variable(t("viewof b1")).define("viewof b1",["button"],en),n.variable(t("b1")).define("b1",["Generators","viewof b1"],(e,t)=>e.input(t)),n.variable(t()).define(["b1"],ea),n.variable(t("button")).define("button",["input"],er),n.variable(t("selectDemo")).define("selectDemo",["md"],eo),n.variable(t("viewof dd")).define("viewof dd",["select"],el),n.variable(t("dd")).define("dd",["Generators","viewof dd"],(e,t)=>e.input(t)),n.variable(t()).define(["dd"],es),n.variable(t("viewof dd1")).define("viewof dd1",["select"],ed),n.variable(t("dd1")).define("dd1",["Generators","viewof dd1"],(e,t)=>e.input(t)),n.variable(t()).define(["dd1"],ec),n.variable(t("viewof dd2")).define("viewof dd2",["select"],eu),n.variable(t("dd2")).define("dd2",["Generators","viewof dd2"],(e,t)=>e.input(t)),n.variable(t()).define(["dd2"],ef),n.variable(t("viewof dd3")).define("viewof dd3",["select"],ep),n.variable(t("dd3")).define("dd3",["Generators","viewof dd3"],(e,t)=>e.input(t)),n.variable(t()).define(["dd3"],em),n.variable(t("select")).define("select",["input","html"],eh),n.variable(t("autoSelectDemo")).define("autoSelectDemo",["md"],ev),n.variable(t("viewof as")).define("viewof as",["autoSelect","usa"],eb),n.variable(t("as")).define("as",["Generators","viewof as"],(e,t)=>e.input(t)),n.variable(t()).define(["as"],eg),n.variable(t("autoSelect")).define("autoSelect",["input","html"],ex),n.variable(t("colorDemo")).define("colorDemo",["md"],ey),n.variable(t("viewof c")).define("viewof c",["color"],ew),n.variable(t("c")).define("c",["Generators","viewof c"],(e,t)=>e.input(t)),n.variable(t("viewof c1")).define("viewof c1",["color"],eA),n.variable(t("c1")).define("c1",["Generators","viewof c1"],(e,t)=>e.input(t)),n.variable(t("color")).define("color",["input"],e_),n.variable(t("coordinatesDemo")).define("coordinatesDemo",["md"],eC),n.variable(t("viewof coords1")).define("viewof coords1",["coordinates"],eE),n.variable(t("coords1")).define("coords1",["Generators","viewof coords1"],(e,t)=>e.input(t)),n.variable(t()).define(["coords1"],eS),n.variable(t("viewof coords2")).define("viewof coords2",["coordinates"],ek),n.variable(t("coords2")).define("coords2",["Generators","viewof coords2"],(e,t)=>e.input(t)),n.variable(t()).define(["coords2"],eT),n.variable(t("coordinates")).define("coordinates",["html","input"],eO),n.variable(t("worldMapCoordinatesDemo")).define("worldMapCoordinatesDemo",["md"],eI),n.variable(t("viewof worldMap1")).define("viewof worldMap1",["worldMapCoordinates"],eM),n.variable(t("worldMap1")).define("worldMap1",["Generators","viewof worldMap1"],(e,t)=>e.input(t)),n.variable(t()).define(["worldMap1"],eD),n.variable(t("worldMapCoordinates")).define("worldMapCoordinates",["html","DOM","d3geo","graticule","land","countries","input"],eN),n.variable(t("usaMapCoordinatesDemo")).define("usaMapCoordinatesDemo",["md"],eL),n.variable(t("viewof usaMap1")).define("viewof usaMap1",["usaMapCoordinates"],eR),n.variable(t("usaMap1")).define("usaMap1",["Generators","viewof usaMap1"],(e,t)=>e.input(t)),n.variable(t()).define(["usaMap1"],eP),n.variable(t("viewof usaMap2")).define("viewof usaMap2",["usaMapCoordinates"],eF),n.variable(t("usaMap2")).define("usaMap2",["Generators","viewof usaMap2"],(e,t)=>e.input(t)),n.variable(t()).define(["usaMap2"],eB),n.variable(t("usaMapCoordinates")).define("usaMapCoordinates",["html","DOM","d3geo","nation","states","input"],eU),n.variable(t("dateDemo")).define("dateDemo",["md"],e$),n.variable(t("viewof d")).define("viewof d",["date"],ej),n.variable(t("d")).define("d",["Generators","viewof d"],(e,t)=>e.input(t)),n.variable(t("viewof d1")).define("viewof d1",["date"],ez),n.variable(t("d1")).define("d1",["Generators","viewof d1"],(e,t)=>e.input(t)),n.variable(t("date")).define("date",["input"],eG),n.variable(t("timeDemo")).define("timeDemo",["md"],eH),n.variable(t("viewof t")).define("viewof t",["time"],eV),n.variable(t("t")).define("t",["Generators","viewof t"],(e,t)=>e.input(t)),n.variable(t()).define(["t"],eq),n.variable(t("viewof t1")).define("viewof t1",["time"],eW),n.variable(t("t1")).define("t1",["Generators","viewof t1"],(e,t)=>e.input(t)),n.variable(t()).define(["t1"],eZ),n.variable(t("time")).define("time",["input"],eX),n.variable(t("fileDemo")).define("fileDemo",["md"],eJ),n.variable(t("viewof e")).define("viewof e",["file"],eY),n.variable(t("e")).define("e",["Generators","viewof e"],(e,t)=>e.input(t)),n.variable(t("viewof e1")).define("viewof e1",["file"],eQ),n.variable(t("e1")).define("e1",["Generators","viewof e1"],(e,t)=>e.input(t)),n.variable(t()).define(["html","e1","Files"],eK),n.variable(t("file")).define("file",["input"],e0),n.variable(t("textDemo")).define("textDemo",["md"],e1),n.variable(t("viewof f")).define("viewof f",["text"],e2),n.variable(t("f")).define("f",["Generators","viewof f"],(e,t)=>e.input(t)),n.variable(t("viewof f1")).define("viewof f1",["text"],e5),n.variable(t("f1")).define("f1",["Generators","viewof f1"],(e,t)=>e.input(t)),n.variable(t()).define(["f1"],e3),n.variable(t("viewof f2")).define("viewof f2",["text"],e4),n.variable(t("f2")).define("f2",["Generators","viewof f2"],(e,t)=>e.input(t)),n.variable(t()).define(["f2"],e6),n.variable(t("text")).define("text",["input"],e8),n.variable(t("textareaDemo")).define("textareaDemo",["md"],e7),n.variable(t("viewof g")).define("viewof g",["textarea"],e9),n.variable(t("g")).define("g",["Generators","viewof g"],(e,t)=>e.input(t)),n.variable(t()).define(["g"],te),n.variable(t("viewof g1")).define("viewof g1",["textarea"],tt),n.variable(t("g1")).define("g1",["Generators","viewof g1"],(e,t)=>e.input(t)),n.variable(t()).define(["g1"],ti),n.variable(t("textarea")).define("textarea",["input","html"],tn),n.variable(t("radioDemo")).define("radioDemo",["md"],ta),n.variable(t("viewof r")).define("viewof r",["radio"],tr),n.variable(t("r")).define("r",["Generators","viewof r"],(e,t)=>e.input(t)),n.variable(t()).define(["r"],to),n.variable(t("viewof r1")).define("viewof r1",["radio"],tl),n.variable(t("r1")).define("r1",["Generators","viewof r1"],(e,t)=>e.input(t)),n.variable(t()).define(["r1"],ts),n.variable(t("radio")).define("radio",["input","html"],td),n.variable(t("checkboxDemo")).define("checkboxDemo",["md"],tc),n.variable(t("viewof ch")).define("viewof ch",["checkbox"],tu),n.variable(t("ch")).define("ch",["Generators","viewof ch"],(e,t)=>e.input(t)),n.variable(t()).define(["ch"],tf),n.variable(t("viewof ch1")).define("viewof ch1",["checkbox"],tp),n.variable(t("ch1")).define("ch1",["Generators","viewof ch1"],(e,t)=>e.input(t)),n.variable(t()).define(["ch1"],tm),n.variable(t("viewof ch3")).define("viewof ch3",["checkbox"],th),n.variable(t("ch3")).define("ch3",["Generators","viewof ch3"],(e,t)=>e.input(t)),n.variable(t()).define(["ch3"],tv),n.variable(t("checkbox")).define("checkbox",["input","html"],tb),n.variable(t("numberDemo")).define("numberDemo",["md"],tg),n.variable(t("viewof h")).define("viewof h",["number"],tx),n.variable(t("h")).define("h",["Generators","viewof h"],(e,t)=>e.input(t)),n.variable(t()).define(["h"],ty),n.variable(t("viewof h1")).define("viewof h1",["number"],tw),n.variable(t("h1")).define("h1",["Generators","viewof h1"],(e,t)=>e.input(t)),n.variable(t()).define(["h1"],tA),n.variable(t("number")).define("number",["input"],t_),n.variable(t("passwordDemo")).define("passwordDemo",["md"],tC),n.variable(t("viewof i")).define("viewof i",["password"],tE),n.variable(t("i")).define("i",["Generators","viewof i"],(e,t)=>e.input(t)),n.variable(t()).define(["i"],tS),n.variable(t("viewof i1")).define("viewof i1",["password"],tk),n.variable(t("i1")).define("i1",["Generators","viewof i1"],(e,t)=>e.input(t)),n.variable(t()).define(["i1"],tT),n.variable(t("password")).define("password",["input"],tO),n.variable(t()).define(["md"],tI),n.variable(t("input")).define("input",["html","d3format"],tM),n.variable(t("d3geo")).define("d3geo",["require"],tD),n.variable(t("d3format")).define("d3format",["require"],tN),n.variable(t("topojson")).define("topojson",["require"],tL),n.variable(t("world")).define("world",tR),n.variable(t("land")).define("land",["topojson","world"],tP),n.variable(t("countries")).define("countries",["topojson","world"],tF),n.variable(t("usa")).define("usa",tB),n.variable(t("nation")).define("nation",["topojson","usa"],tU),n.variable(t("states")).define("states",["topojson","usa"],t$),n.variable(t("graticule")).define("graticule",["d3geo"],tj),n.variable(t("viewof license")).define("viewof license",["md"],tz),n.variable(t("license")).define("license",["Generators","viewof license"],(e,t)=>e.input(t)),n.variable(t()).define(["md"],tG),n}function tV(e){return e`# Circle Legend

To use in your notebook:

~~~js
import { legendCircle } from "@harrystevens/circle-legend";
~~~`}function tq(e,t,i){return e().scale(t.scaleSqrt().domain([0,500]).range([0,40])).tickValues([15,150,500]).tickFormat((e,t,i)=>t===i.length-1?e+" bushels of hay":e).tickSize(i)}function tW(e){return e({title:"Tick size",value:5,min:0,max:100,step:1,description:"What happens when you adjust this?"})}function tZ(e,t,i,n){let a=e.select(t.svg()).attr("height",90).attr("width",180+i);return a.append("g").call(n),a.node()}function tX(){return function(e){let t,i,n=e=>e,a=5;function r(e){let r=e.select("g");r._groups[0][0]||(r=e.append("g")),r.attr("transform","translate(11,)");let o=i||t.ticks(),l=o[o.length-1];r.selectAll("circle").data(o.slice().reverse()).enter().append("circle").attr("fill","none").attr("stroke","currentColor").attr("cx",t(l)).attr("cy",t).attr("r",t),r.selectAll("line").data(o).enter().append("line").attr("stroke","currentColor").attr("stroke-dasharray","4, 2").attr("x1",t(l)).attr("x2",a+2*t(l)).attr("y1",e=>2*t(e)).attr("y2",e=>2*t(e)),r.selectAll("text").data(o).enter().append("text").attr("font-family","'Helvetica Neue', sans-serif").attr("font-size",11).attr("dx",3).attr("dy",4).attr("x",a+2*t(l)).attr("y",e=>2*t(e)).text(n)}return r.tickSize=function(e){return arguments.length?(a=+e,r):a},r.scale=function(e){return arguments.length?(t=e,r):t},r.tickFormat=function(e){return arguments.length?(n=e,r):n},r.tickValues=function(e){return arguments.length?(i=e,r):i},r}}function tJ(e){return e`## Todo
* Ensure circles are drawn biggest to smallest so they can be styled
* Make it work with a threshold scale
`}function tY(e){return e("d3-scale@3","d3-selection@1")}function tQ(e,t){let i=e.module();i.variable(t()).define(["md"],tV),i.variable(t("legend")).define("legend",["legendCircle","d3","tickSize"],tq),i.variable(t("viewof tickSize")).define("viewof tickSize",["slider"],tW),i.variable(t("tickSize")).define("tickSize",["Generators","viewof tickSize"],(e,t)=>e.input(t)),i.variable(t()).define(["d3","DOM","tickSize","legend"],tZ),i.variable(t("legendCircle")).define("legendCircle",tX),i.variable(t()).define(["md"],tJ),i.variable(t("d3")).define("d3",["require"],tY);let n=e.module(tH);return i.import("slider",n),i}function tK(e){return e`# TOC

This notebook can generate a table of contents automatically for your notebook.

\`\`\`js
import {toc} from "@harrystevens/toc"
\`\`\`

Here’s an example:`}function t0(e){return e({selector:"h2,h3,h4,h5,h6",heading:"Jump to:"})}function t1(e){return e`## Implementation`}function t2(e,t,i,n){return function(a){let r=a&&a.selector?a.selector:"h1,h2,h3,h4,h5,h6",o=a&&a.heading?a.heading:"Table of Contents";return e.observe(e=>{let a=[];function l(){let n=Math.min(...r.split(",").map(e=>+e.replace("h",""))),l=Array.from(document.querySelectorAll(r));(l.length!==a.length||l.some((e,t)=>a[t]!==e))&&e(t`<b>${o}</b><ul>${Array.from(a=l,e=>{let a=parseInt(e.tagName.slice(1));return Object.assign(t`${a>n?"<ul>".repeat(a-n)+"<li>":"<li>"}<a href=#${e.id}>${i.text(e.textContent)}`,{onclick:t=>(t.preventDefault(),e.scrollIntoView())})})}`)}let s=new n(l);return s.observe(document.body,{childList:!0,subtree:!0}),l(),()=>s.disconnect()})}}function t5(e){return e`## Hooray

It worked!`}function t3(e){return e`### This is a sub-section`}function t4(e){return e`A little text`}function t6(e){return e`#### A sub-sub-section?`}function t8(e){return e`##### A sub-sub-sub-section?`}function t7(e){return e`###### A sub-sub-sub-sub-section! (h6!)`}function t9(e){return e`### Another sub-section`}function ie(e,t){let i=e.module();return i.variable(t()).define(["md"],tK),i.variable(t()).define(["toc"],t0),i.variable(t()).define(["md"],t1),i.variable(t("toc")).define("toc",["Generators","html","DOM","MutationObserver"],t2),i.variable(t()).define(["md"],t5),i.variable(t()).define(["md"],t3),i.variable(t()).define(["md"],t4),i.variable(t()).define(["md"],t6),i.variable(t()).define(["md"],t8),i.variable(t()).define(["md"],t7),i.variable(t()).define(["md"],t9),i}function it(e){return e`# Keys

A reusable notebook for displaying platform-appropriate keyboard shortcuts.`}function ii(e){return e("Alt-Enter")}function ia(e){return e("Alt-Enter")}function ir(e){return e("Alt-Enter")}function io(e){return e("Alt-Enter")}function il(){return/Mac|iPhone/.test(navigator.platform)}function is(){return navigator.platform}function id(e){return e?{Alt:"⌥",Tab:"⇥",Up:"↑",Down:"↓",Left:"←",Right:"→",Mod:"⌘",Cmd:"⌘",Ctrl:"⌃",Shift:"⇧",Enter:"↩︎",Backspace:"⌫",Escape:"⎋"}:{Mod:"Ctrl"}}function ic(e){return e?{Alt:"Option",Backspace:"Delete",Mod:"Command",Cmd:"Command",Ctrl:"Control",Enter:"Return",Escape:"Esc","/":"Slash","?":"Question mark"}:{Mod:"Ctrl"}}function iu(e){return e?{Alt:"⌥opt",Tab:"⇥tab",Up:"↑",Down:"↓",Left:"←",Right:"→",Mod:"⌘cmd",Cmd:"⌘cmd",Ctrl:"⌃ctrl",Shift:"⇧shift",Enter:"↩︎return",Backspace:"⌫delete",Escape:"⎋esc"}:{Up:"↑",Down:"↓",Left:"←",Right:"→",Mod:"Ctrl"}}function ip(){return{Ctrl:-4,Alt:-3,Shift:-2,Mod:-1,Cmd:-1}}function im(e){return function(t,i){let n=t.split("-");return n.slice().sort((t,i)=>(e[t]||n.indexOf(t))-(e[i]||n.indexOf(i))).map(e=>i&&i[e]||e)}}function ih(e,t){return function(i){return e(i,t).join("-")}}function iv(e,t){return function(i){return e(i,t).join("")}}function ib(e,t,i){return function(n){return e(n)+(t?` ${i(n)}`:"")}}function ig(e,t){return function(i){return e.html`<span style="font-family: var(--sans-serif); font-size: 90%;">${t(i)}</span>`}}function ix(e,t,i){return function(n){return e.html`${t(n,i).map(t=>e.html`<span style="font: 500 12px/1.25 var(--sans-serif); margin: 0 4px; padding: 0 4px; border-radius: 0.25rem; box-shadow: 0 0 0 1px #dedede, 1px 1px 0 1px #e8e8e8; display: inline-block;">${t.toLowerCase()}`)}</span>`}}function iy(e,t){let i=e.module();return i.variable(t()).define(["md"],it),i.variable(t()).define(["keyWords"],ii),i.variable(t()).define(["keySymbols"],ia),i.variable(t()).define(["keys"],ir),i.variable(t()).define(["buttons"],io),i.variable(t("mac")).define("mac",il),i.variable(t()).define(is),i.variable(t("symbols")).define("symbols",["mac"],id),i.variable(t("words")).define("words",["mac"],ic),i.variable(t("shortwords")).define("shortwords",["mac"],iu),i.variable(t("order")).define("order",ip),i.variable(t("remap")).define("remap",["order"],im),i.variable(t("keyWords")).define("keyWords",["remap","words"],ih),i.variable(t("keySymbols")).define("keySymbols",["remap","symbols"],iv),i.variable(t("keys")).define("keys",["keyWords","symbols","keySymbols"],ib),i.variable(t("keyStyled")).define("keyStyled",["htl","keys"],ig),i.variable(t("buttons")).define("buttons",["htl","remap","shortwords"],ix),i}function iw(e){return e`# Text search input with autocomplete

A reusable autocomplete search that can be used in a real-time fashion (e.g., querying an API). It exploits [\`<datalist>\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist), the HTML Data List element.`}function iA(e){return e`## How to use it in your notebook

\`\`\`javascript
import { SearchForm } from "@floatingpurr/input-autocomplete"
\`\`\``}function i_(e){return e`## Examples`}function iC(e){return e`This search form can be used with a flat array of suggestions. Let's give it a spin:`}function iE(e,t){return e({placeholder:"Type-in to search...",description:"Searching en.wikipedia.org entities",async suggestion(e){let i=await t.json(`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${e}&namespace=0&limit=10&origin=*`);return i[1]}})}function iS(e){return e}function ik(e){return e`But it can be also useful to explore and return data from an array of objects coming from an API, e.g.:`}async function iT(e){let t=await e.json("https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=Skywalker&namespace=0&limit=10&origin=*");return t[1].map((e,i)=>({entry:e,url:t[3][i]}))}function iO(e){return e`Let's see it in action:`}function iI(e,t){return e({placeholder:"Type-in to search...",description:"Searching en.wikipedia.org entities with their URLs",format:e=>e.entry,async suggestion(e){let i=await t.json(`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${e}&namespace=0&limit=10&origin=*`);return i[1].map((e,t)=>({entry:e,url:i[3][t]}))}})}function iM(e){return e}function iD(e){return e`## Configuration

* \`suggestion\`: a function providing data for live suggestions (i.e., \`<datalist>\`). This function should accept an input text and returns an array of suggestions (default: \`() => []\`)
  
* \`placeholder\`: the default text you want to use as a placeholder (default: \`""\`)
  
* \`description\`: the label describing your input (default: \`""\`)

* \`format\`: the accessor function (default: \`(d) => d\`)

* \`namespace\`: the identifier of the SearchForm, use it if you plan to use more SearchForm(s) in the same notebook (default: \`""\`)`}function iN(e){return e`## Implementation

The machinery works as follows:
* read the value the user has just typed-in
* use such a value to retrieve suggestions (i.e., an array of matching values)
* (*suggestions are memoized*)
* inject suggestions in the \`<datalist>\` elements
* finally, the user can return a value from the suggestion list

Heavily inspired by the example of [Chris Henrick](https://observablehq.com/@clhenrick/autocomplete-search) and by suggestions of [Fabian Iwand](https://talk.observablehq.com/t/dynamic-datalist/6404/2).`}function iL(e,t,i){return function({uid:n=e.uid("autosuggestion").id,placeholder:a="",description:r="",format:o=e=>e,suggestion:l=()=>[]}={}){let s=t.html`<input 
        type="text"
        placeholder="${a}" 
        list="${n}"
        autocomplete="off"
      >`,d=t.html`<div style="font-size: 0.85rem; font-style: italic; margin-top: 3px;">${r}</div>`,c=t.html`<datalist id="${n}">`,u=t.html`<div>${s}${d}${c}`,f=[];u.value="",u.onsubmit=e=>e.preventDefault(),u.onchange=e=>{let t=e.target.value;u.value=f.find(e=>o(e)==t)||"",s.blur(),u.dispatchEvent(new CustomEvent("input"))};let p=new Map,m=async e=>p.get(e)||(e?p.set(e,await l(e)):p.set(e,[]),p.get(e));return s.oninput=async e=>{f=await m(e.target.value),i.select(`#${n}`).selectAll("option").data(f).join("option").attr("value",o)},u}}function iR(e,t){let i=e.module();return i.variable(t()).define(["md"],iw),i.variable(t()).define(["md"],iA),i.variable(t()).define(["md"],i_),i.variable(t()).define(["md"],iC),i.variable(t("viewof wiki")).define("viewof wiki",["SearchForm","d3"],iE),i.variable(t("wiki")).define("wiki",["Generators","viewof wiki"],(e,t)=>e.input(t)),i.variable(t()).define(["wiki"],iS),i.variable(t()).define(["md"],ik),i.variable(t()).define(["d3"],iT),i.variable(t()).define(["md"],iO),i.variable(t("viewof wikiObject")).define("viewof wikiObject",["SearchForm","d3"],iI),i.variable(t("wikiObject")).define("wikiObject",["Generators","viewof wikiObject"],(e,t)=>e.input(t)),i.variable(t()).define(["wikiObject"],iM),i.variable(t()).define(["md"],iD),i.variable(t()).define(["md"],iN),i.variable(t("SearchForm")).define("SearchForm",["DOM","htl","d3"],iL),i}function iP(e){return e`# Menu Localidade`}function iF(e){return e({value:["RIO DE JANEIRO","S\xc3O PAULO"],cores:["#2F87F5","#D8C56C","#DC5988","#6CC28D"]})}function iB(e){return e.value=["RIO DE JANEIRO","BELO HORIZONTE"]}function iU(e){return e}function i$(e,t){return function(i){let n=[...i.cores],a=new Map;function r(){let t,i,r;return t=document.createElement("input"),i=document.createElement("datalist"),t.setAttribute("list","menu-municipios-options"),t.setAttribute("placeholder","Adicione um local"),t.style.borderRadius="6px",t.style.backgroundColor="white",t.style.border="dashed 2px #c4c4c4",t.style.fontFamily="Roboto Condensed",t.style.padding="3px",t.style.minWidth="150px",t.style.maxWidth="240px",t.style.height="20px",i.setAttribute("id","menu-municipios-options"),e.forEach(e=>{(r=document.createElement("option")).setAttribute("value",e.nome),i.appendChild(r)}),t.appendChild(i),t.addEventListener("input",e=>{e.stopPropagation()}),t.addEventListener("change",i=>{let r=t.value;t.value="";let o=e.find(e=>e.nome===r);if(o&&!a.has(o.cod)&&n.length>0){let s=n.pop(),d={nome:r,cor:s,cod:o.cod};o.uf&&(d.uf=o.uf),a.set(d.cod,d),l()}}),t}function o(e){let t=document.createElement("button"),i=document.createElement("span");if(t.style.backgroundColor=e.cor,t.style.display="inline-flex",t.style.alignItems="flex-center",t.style.borderRadius="6px",t.style.border="none",t.style.fontFamily="Roboto Condensed",t.style.fontWeight="700",t.style.fontSize="14px",t.style.marginRight="6px",t.style.padding="3px 5px",i.style.lineHeight="16px",i.style.color="black",e.nome.indexOf("(")>0||e.cod<100?i.textContent=e.nome:i.textContent=e.nome+" ("+e.uf+")",t.appendChild(i),a.size>1){let r=document.createElement("span");r.style.paddingLeft="5px",r.style.fontWeight="400",r.textContent="✖",r.style.lineHeight="16px",r.style.color="black",t.appendChild(r)}return t.addEventListener("click",t=>{a.size>1&&(a.delete(e.cod),n.push(e.cor),l())}),t}function l(){for(let e of(d.innerHTML="",a.values()))d.appendChild(o(e));4==a.size?c&&(s.removeChild(c),c=null):null===c&&(c=r(),s.appendChild(c)),s.dispatchEvent(new t("input"))}let s=document.createElement("div"),d=document.createElement("div"),c=r();return d.style.display="inline",s.appendChild(d),s.appendChild(c),Object.defineProperty(s,"value",{get:()=>[...a.values()],set(t){for(let r of(a.clear(),n=[...i.cores],t)){if("string"==typeof r&&(r={nome:r}),void 0===r.cor)r.cor=n.pop();else{let o=n.indexOf(r.cor);o>=0&&n.splice(o,1)}if(void 0===r.cod){let s=e.find(e=>0==e.nome.localeCompare(r.nome));s&&(r.cod=s.cod,s.uf&&(r.uf=s.uf))}r.cod&&!a.has(r.cod)&&a.set(r.cod,r)}l()}}),s.value=i.value||[],s}}function ij(e){return e("municipios-ord@1.csv").csv({separator:";"})}function iz(e){return e.html`<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
</style>`}function iG(e,t){let n=e.module(),a=new Map([["municipios-ord@1.csv",{url:new i.U(i(8673)),mimeType:"text/csv",toString:function(){return this.url}}]]);return n.builtin("FileAttachment",e.fileAttachments(e=>a.get(e))),n.variable(t()).define(["md"],iP),n.variable(t("viewof sels")).define("viewof sels",["menuLocalidade"],iF),n.variable(t("sels")).define("sels",["Generators","viewof sels"],(e,t)=>e.input(t)),n.variable(t()).define(["viewof sels"],iB),n.variable(t()).define(["sels"],iU),n.variable(t("menuLocalidade")).define("menuLocalidade",["municipios","Event"],i$),n.variable(t("municipios")).define("municipios",["FileAttachment"],ij),n.variable(t()).define(["htl"],iz),n}function iH(e){return e`# Sliders`}function iV(e){return e`## Mapa`}function iq(e){return e`### Ano`}function iW(e){return e({range:[2012,2019],value:2015,ticks:1,width:600})}function iZ(e){return e`### Intervalo Número de Nascimentos`}function iX(){return function(e){return["0","10","100","1K","10K","50K","100K","1M"][e]}}function iJ(e,t,i){return e({range:[0,10,1e3,1e4,1e5,5e5,1e6,1e7],ticksLabelFormatter:t},i)}function iY(e,t,i){return{ano:e,anoMesTrilha:t,nascimentosTotais:i}}function iQ(e,t,i){let n=[];for(let a=2012;a<=2018;a++)for(let r=1;r<=12;r++)n.push(100*a+r);n.push(201901);let o=e=>~~(n[e]/100),l=t=>e[n[t]%100-1];return t({range:n,ticksLabelFormatter:o,handleLabelFormatter:l,ticks:12,width:600},i)}function iK(){return["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"]}function i0(e){return e`## Componentes`}function i1(){return function(e,t){let i=e.range;return e.range=[0,i.length-1],e.ticksLabelFormatter||(e.ticksLabelFormatter=e=>i[e]),t(e)}}function i2(e,t){return function(i){void 0!==i.value&&(i.value=[i.range[0],i.value]);let n=e(i);t.select(n).selectAll(".handle--custom").each(function(e){"w"===e.type&&t.select(this).remove()}),t.select(n).selectAll(".handle--w").remove(),t.select(n).select(".selection").attr("pointer-events","none").attr("opacity",0);let a=n.vl;return n.vl=function(e){return void 0===e?a.call(n)[1]:a.call(n,[0,e])},n}}function i5(e,t){return function(i){let{range:n=[0,10],width:a=400,height:r=60,marginTop:o=20,marginBottom:l=20,marginRight:s=20,marginLeft:d=20,ticks:c=1,value:u=null,dispatchOnDrag:f=!1,ticksLabelFormatter:p=e=>e,handleLabelFormatter:m=null}=i;null==u&&(u=[...n]);let h=a-d-s,v=r-o-l,b=[];for(let g=n[0];g<=n[1];g+=c)b.push(g);let x=e.scaleLinear().domain(n).range([0,h]),y=e.select(t.svg(a,r)),w=y.node(),A=y.append("g").attr("transform",`translate(${d},${o})`);y.on("click touch",t=>{let i=t.offsetX-d;if(i>=0&&i<=h){let n=e.brushSelection(E.node())||[0,0],a=n.map(e=>Math.round(x.invert(e))),r=Math.round(x.invert(i));n[r<a[0]?0:1]=x(r),E.call(C.move,n)}});let _=[0,0];var C=e.brushX().extent([[0,0],[h,v]]).on("brush",function(e){let t=e.selection;_=t;let i=t[1]-t[0];if(k.attr("transform",(e,i)=>`translate(${t[i]},0)`),m){let n=t.map(x.invert).map(Math.round);k.select("text").attr("text-anchor",e=>i>30?"middle":"w"==e.type?"end":"start").text(e=>m("w"==e.type?n[0]:n[1]))}f&&w.dispatchEvent(new CustomEvent("input"))}).on("end",function(t){if(t.sourceEvent){let i=(t.selection||_).map(x.invert).map(Math.round);e.select(this).transition().call(t.target.move,i.map(x)),f||setTimeout(e=>{w.dispatchEvent(new CustomEvent("input"))})}});let E=A.append("g").attr("class","brush").call(C);E.select(".selection").attr("fill","#151472CC").style("cursor","grab"),E.select(".overlay").attr("fill","#E5E5E5").attr("pointer-events","none");let S=E.insert("g",".selection").attr("class","ticks").selectAll(".tick").data(b).enter().append("g").attr("class","tick").attr("transform",e=>`translate(${x(e)},0)`);S.append("line").attr("x1",0).attr("x2",0).attr("y1",0).attr("y2",v).attr("stroke","#999"),p&&S.append("text").attr("x",0).attr("y",v+4).attr("dominant-baseline","hanging").attr("text-anchor","middle").attr("font-size","12px").attr("font-weight","400").attr("fill","#151472").text(p);let k=E.selectAll(".handle--custom").data([{type:"w"},{type:"e"}]).enter().append("g").attr("class","handle--custom");return k.append("rect").attr("stroke","#000").attr("fill","#151472").attr("cursor","ew-resize").attr("width",8).attr("height",v+4).attr("y",-2).attr("x",-4).attr("rx",4),m&&k.append("text").attr("fill","#F00").attr("y",-4).attr("font-size","12px").attr("font-weight","400").attr("fill","#151472"),w.vl=function(t){if(void 0===t)return(e.brushSelection(E.node())||[0,0]).map(e=>Math.round(x.invert(e)));if(t[0]>t[1]){let i=t[0];t[0]=t[1],t[1]=i}return t[1]<n[0]?(t[0]=n[0],t[1]=n[0]):t[0]>n[1]?(t[0]=n[1],t[1]=n[1]):(t[0]<n[0]&&(t[0]=n[0]),t[1]>n[1]&&(t[1]=n[1])),E.call(C.move,t.map(x)),w.dispatchEvent(new CustomEvent("input")),w},Object.defineProperty(w,"value",{get(){return this.vl()},set(e){this.vl(e)}}),w.value=u,w}}function i3(e){return e`
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
svg {
	font-family: "Roboto Condensed";
}

* { user-select: none;  }


</style>
`}function i4(e,t){let i=e.module();return i.variable(t()).define(["md"],iH),i.variable(t()).define(["md"],iV),i.variable(t()).define(["md"],iq),i.variable(t("viewof ano")).define("viewof ano",["sliderbase"],iW),i.variable(t("ano")).define("ano",["Generators","viewof ano"],(e,t)=>e.input(t)),i.variable(t()).define(["md"],iZ),i.variable(t("fmt")).define("fmt",iX),i.variable(t("viewof nascimentosTotais")).define("viewof nascimentosTotais",["sliderArray","fmt","sliderRangeBase"],iJ),i.variable(t("nascimentosTotais")).define("nascimentosTotais",["Generators","viewof nascimentosTotais"],(e,t)=>e.input(t)),i.variable(t("filtro")).define("filtro",["ano","anoMesTrilha","nascimentosTotais"],iY),i.variable(t("viewof anoMesTrilha")).define("viewof anoMesTrilha",["meses","sliderArray","sliderRangeBase"],iQ),i.variable(t("anoMesTrilha")).define("anoMesTrilha",["Generators","viewof anoMesTrilha"],(e,t)=>e.input(t)),i.variable(t("meses")).define("meses",iK),i.variable(t()).define(["md"],i0),i.variable(t("sliderArray")).define("sliderArray",i1),i.variable(t("sliderbase")).define("sliderbase",["sliderRangeBase","d3"],i2),i.variable(t("sliderRangeBase")).define("sliderRangeBase",["d3","DOM"],i5),i.variable(t("style_slider")).define("style_slider",["html"],i3),i}function i6(e){return e`# Scatter-plot dados mapa`}function i8(e){return e.range([2012,2019],{label:"Ano",step:1,value:2012})}function i7(e){return e.button("Limpar zoom")}function i9(){return!1}function ne(e){return e`<svg width="18" height="18" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="padding:5px;background:white;border-radius:10px;">
<path d="M7.1595 0H3.47242C1.56577 0 0 1.55368 0 3.47373V6.50535C0 6.78325 0.227241 7.01057 0.505035 7.01057C0.782828 7.01057 1.01007 6.78325 1.01007 6.50535L1.01016 3.47373C1.01016 2.12209 2.10868 1.02317 3.45979 1.02317H7.13425C8.51057 1.02317 9.60914 2.12211 9.60914 3.47373V6.1264C9.60914 7.47804 8.51061 8.57696 7.1595 8.57696L2.60116 8.57687L4.12907 7.04838C4.33112 6.84625 4.33112 6.53046 4.12907 6.32833C3.92702 6.1262 3.61134 6.1262 3.40929 6.32833L1.01016 8.72836C0.808105 8.93049 0.808105 9.24628 1.01016 9.44841L3.40929 11.8484C3.51031 11.9495 3.63653 12 3.77542 12C3.90173 12 4.04063 11.9495 4.14156 11.8484C4.34361 11.6463 4.34361 11.3305 4.14156 11.1284L2.60116 9.60017H7.1595C9.07882 9.60017 10.6319 8.04649 10.6319 6.12644V3.47378C10.6319 1.55373 9.06615 4.72183e-05 7.1595 4.72183e-05L7.1595 0Z" fill="#151472"/>
</svg>`}function nt(e,t){return e({value:["RIO DE JANEIRO"],cores:t})}function ni(e,t){return e.select(t,{label:"Eixo X",format:e=>e.name,value:t[0]})}function nn(e,t){return e.select(t,{label:"Eixo Y",format:e=>e.name,value:t[1]})}function na(e,t){return e.select(t,{label:"Cor",format:e=>e.name,value:t[3]})}function nr(e){return e}function no(e){return e}function nl(e,t){return e({range:[1,10,100,1e3,1e4,5e4,1e5],value:[1,6],ticksLabelFormatter:e=>["0","10","100","1K","10K","50K","100K"][e],width:310,height:56},t)}function ns(e){return e}function nd(e){return e}function nc(e,t){return e.scaleThreshold(t.thresholds,t.range)}function nu(e,t,i){return e(t,{width:300,title:i.label})}function nf(e,t,i,n,a,r,o,l,s,d,c,u,f,p,m,h,v,b,g,x,y){let w=t=>e.filter(e=>e.cod==t.CODMUNRES)[0].cor,A=t.plot({width:i.width,height:i.height,marginBottom:40,x:{line:!0,ticks:10,label:n.label,domain:"IDH 2010"==n.name&&a.xmin<0?n.domain:void 0},y:{line:!0,label:r.label,domain:"IDH 2010"==r.name&&a.ymin<0?r.domain:void 0},marks:[t.dot(o,{x:"x",y:"y",title:e=>l(e.municipio)+`
${n.label}: ${e.x.toFixed(2)}`+`
${r.label}: ${e.y.toFixed(2)}`+`
${s.label}: ${e.val.toFixed(2)}`,fill:e=>d(e.val),stroke:"rgba(0,0,0,0.1)"}),t.dot(c,{x:"x",y:"y",symbol:{draw:u},title:e=>l(e.municipio)+`
${n.label}: ${e.x.toFixed(2)}`+`
${r.label}: ${e.y.toFixed(2)}`+`
${s.label}: ${e.val.toFixed(2)}`,stroke:"currentColor",fill:e=>w(e),r:1.7,strokeWidth:1})]});A.style.fontFamily=i.fontFamily,A.style.fontSize=11,A=b(A=v(A=m(A=f(A,e=>{p.value=e}),e=>h(e.municipio)),e=>{3==e.attr("r")&&e.attr("stroke","black")},e=>{3==e.attr("r")&&e.attr("stroke","rgba(0,0,0,0.1)")}),[o,c]);let _=g.html`<div style="position:relative;display:inline-block;">`;return _.append(A),a.xmin!=Number.NEGATIVE_INFINITY&&(_.append(x),x.style.position="absolute",x.style.right="10px",x.style.top="10px",x.onclick=()=>{p.value=y}),_}function np(){return{width:400,height:300,fontFamily:"Roboto Condensed"}}function nm(e,t){return i=>{let n=e.value,a=n.map(e=>e.cod).indexOf(i.cod);if(a<0){if(n.length<4){let r=Object.assign({},i);r.cor=t(n),n.push(r)}}else n.length>1&&n.splice(a,1);e.value=n}}function nh(){return null}function nv(e){return e`<br>
# Implementação`}function nb(e){return e`## Cores municípios`}function ng(){return["#2F87F5","#D8C56C","#DC5988","#6CC28D"]}function nx(e){return function(t){let i=[...e];for(let n of t){let a=i.indexOf(n.cor);a>=0&&i.splice(a,1)}if(i.length>0)return i[0]}}function ny(e,t,i){return e.html`<button style="background:${t(i)};">Próxima cor`}function nw(e){return e`<br>
## Flags`}function nA(e,t){let i=e.canvas(200,200),n={draw:t},a=i.getContext("2d");return a.translate(100,100),a.strokeStyle="black",n.draw(a,30),a.stroke(),i.mySymbol=n,i}function n_(){return(e,t)=>{e.moveTo(0,0),e.bezierCurveTo(0,-(.5*t),-t,-(1.3*t),-t,-(1.8*t)),e.bezierCurveTo(-t,-(2.3*t),-(.5*t),-(2.8*t),0,-(2.8*t)),e.bezierCurveTo(.5*t,-(2.8*t),t,-(2.3*t),t,-(1.8*t)),e.bezierCurveTo(t,-(1.3*t),0,-(.5*t),0,0)}}function nC(e,t){return e.svg`<svg width=100 height=100>
 <path transform="translate(50,50)" 
 d="${t(10)}" stroke=black fill=none /> 
 </svg>`}function nE(){return function(e){let t=(e,t,i,n,a,r)=>`C${e},${t} ${i},${n} ${a},${r}`;return"M 0,0"+t(0,-(.5*e),-e,-(1.3*e),-e,-(1.8*e))+t(-e,-(2.3*e),-(.5*e),-(2.8*e),0,-(2.8*e))+t(.5*e,-(2.8*e),e,-(2.3*e),e,-(1.8*e))+t(e,-(1.3*e),0,-(.5*e),0,0)+"Z"}}function nS(e){return e`## Dados`}function nk(e,t,i,n,a,r,o){return e.map(e=>Object.assign(e,{x:+t.field(e),y:+i.field(e),val:+n.field(e),regiao:["N","NE","SE","S","CO"][Math.floor(e.CODMUNRES/1e5)-1],municipio:a.get(e.CODMUNRES)})).filter(e=>e.municipio&&r(e)&&e.x>=o.xmin&&e.y>=o.ymin&&e.x<=o.xmax&&e.y<=o.ymax)}function nT(e,t){let[i,n]=e.map(e=>[0,10,1e3,1e4,1e5,5e5,1e6][e]);return e=>e.ANO==t&&e.TOTAL>=i&&e.TOTAL<=n}function nO(e,t){let i=e.map(e=>e.cod);return t.filter(e=>i.includes(e.CODMUNRES))}function nI(){return[{label:"M\xe9dia anual de polui\xe7\xe3o (\xb5g/m\xb3)",labelBarChart:"Polui\xe7\xe3o m\xe9dia por ano (\xb5g/m\xb3)",labelRanking:"Ranking por m\xe9dia de polui\xe7\xe3o",labelTooltip:"m\xe9dia anual (\xb5g/m\xb3)",name:"Polui\xe7\xe3o",field:e=>e.AVG_PM25,domain:[0,70],thresholds:[5,15,25,35],range:["#260800","#662514","#B26B59","#E5B8AC","#FFD6CC"].reverse()},{label:"Baixo peso (por cem nascidos vivos)",labelBarChart:"Baixo peso m\xe9dio anual (por 100 N.V.)",labelRanking:"Ranking por m\xe9dia de baixo peso",labelTooltip:"por cem nascidos vivos",name:"Baixo peso",field:e=>100*(e.BAIXO_PESO||0)/(e.TOTAL||1),domain:[0,200],thresholds:[5.2,6.8,8.3,100],range:["#00261D","#125948","#4D9986","#99CCC0","#CEF2E9"].reverse()},{label:"\xd3bitos perinatais (por mil nascidos vivos)",labelBarChart:"\xd3bitos perinatais anuais (por mil N.V.)",labelRanking:"Ranking por m\xe9dia de \xf3bitos perinatais",labelTooltip:"por mil nascidos vivos",name:"Mort. Perinatal",field:e=>1e3*(e.OBITOS_PERINATAIS||0)/(e.TOTAL||1),domain:[0,20],thresholds:[0,.6,1.4,3.9],range:["#070040","#291C8C","#6359B2","#A9A3D9","#DDD9FF"].reverse()},{label:"\xd3bitos neonatais (por mil nascidos vivos)",labelBarChart:"\xd3bitos neonatais anuais (por mil N.V.)",labelRanking:"Ranking por m\xe9dia de \xf3bitos neonatais",labelTooltip:"por mil nascidos vivos",name:"Mort. Neonatal",field:e=>1e3*(e.OBITOS_NEONATAIS||0)/(e.TOTAL||1),domain:[0,30],thresholds:[0,.7,1.7,3.9],range:["#200040","#541C8C","#8659B2","#BEA3D9","#ECD9FF"].reverse()},{label:"\xd3bitos infantis (por mil nascidos vivos)",labelBarChart:"\xd3bitos infantis anuais (por mil N.V.)",labelRanking:"Ranking por m\xe9dia de \xf3bitos infantis",labelTooltip:"por mil nascidos vivos",name:"Mort. Infantil",field:e=>1e3*(e.OBITOS_INFANTIS||0)/(e.TOTAL||1),domain:[0,100],thresholds:[0,9,14,20],range:["#260024","#661461","#B259AD","#E5ACE2","#FFD9FD"].reverse()},{label:"\xcdndice de Desenvolvimento Humano (2010)",labelBarChart:"\xcdndice de Desenvolvimento Humano (2010)",labelRanking:"Ranking por IDH (2010)",labelTooltip:"",name:"IDH 2010",field:e=>e.IDH||0,domain:[.4,.9],thresholds:[.6,.65,.7,.75],range:["#001A40","#1C498C","#597DB2","#A3B8D9","#D9E8FF"].reverse()}]}function nM(e){return function(t){return e.filter(e=>e.x>=t.xmin&&e.y>=t.ymin&&e.x<=t.xmax&&e.y<=t.ymax)}}function nD(){return{xmin:Number.NEGATIVE_INFINITY,ymin:Number.NEGATIVE_INFINITY,xmax:Number.POSITIVE_INFINITY,ymax:Number.POSITIVE_INFINITY}}function nN(e,t){return e.value,t}function nL(e){return e`### Interação com mouse`}function nR(e){return(t,i,n)=>{let a=e.select(t).selectAll("circle");return a.on("mouseover",function(){i(e.select(this))}),a.on("mouseleave",function(){n(e.select(this))}),t}}function nP(e,t,i){return(n,a)=>{let r=e.select(n).selectAll("[aria-label=dot]>circle");r.on("dblclick",function(){a(t[e.select(this).datum()])});let o=e.select(n).selectAll("[aria-label=dot]>path");return o.on("dblclick",function(){a(i[e.select(this).datum()])}),n}}function nF(e){return function(t,i){let n=t.scale("x"),a=t.scale("y"),r={},o=e.select(t).style("user-select","none");return t.onmousedown=e=>{r.x0=r.x1=e.offsetX,r.y0=r.y1=e.offsetY,r.dx=r.dy=0,r.sel=o.append("rect").attr("fill","rgba(0,0,0,0.2)")},t.onmousemove=e=>{e.buttons&&([r.x1,r.y1]=[e.offsetX,e.offsetY],r.dx=Math.abs(r.x1-r.x0),r.dy=Math.abs(r.y1-r.y0),r.x=Math.min(r.x0,r.x1),r.y=Math.min(r.y0,r.y1),r.sel.attr("x",r.x),r.sel.attr("y",r.y),r.sel.attr("width",r.dx),r.sel.attr("height",r.dy))},t.onmouseup=e=>{r.sel.remove(),r.dx>2&&r.dy>2&&i({xmin:Math.min(n.invert(r.x0),n.invert(r.x1)),xmax:Math.max(n.invert(r.x0),n.invert(r.x1)),ymin:Math.min(a.invert(r.y0),a.invert(r.y1)),ymax:Math.max(a.invert(r.y0),a.invert(r.y1))})},t}}function nB(e){return e`### Animação`}function nU(){return[]}function n$(e,t){return function(i,n){let a=n.map((t,i)=>({dataset:t,map:new Map,oldMap:e.value[i]?e.value[i].map:new Map}));return t.select(i).selectAll("g[aria-label=dot]").each(function(e,i){let n=t.select(this),{dataset:r,map:o,oldMap:l}=a[i];n.selectAll("circle").each(function(e,i){let n=t.select(this),a=r[i].CODMUNRES,s={cx:+n.attr("cx"),cy:+n.attr("cy")};if(o.set(a,s),l.has(a)){let d=l.get(a);n.attr("cx",d.cx),n.attr("newcx",s.cx),n.attr("cy",d.cy),n.attr("newcy",s.cy)}})}),t.select(i).selectAll("circle[newcx]").transition().duration(1500).attr("cx",function(){return t.select(this).attr("newcx")}).attr("cy",function(){return t.select(this).attr("newcy")}),e.value=a,i}}function nj(e){return e`### Seleção de município por nome`}function nz(e,t,i,n){return function(){let a=e.html`<div style="caret-color:transparent;display:inline;tabindex=-1">`,r=[],o=e=>(e=e.toUpperCase(),t.filter(t=>t.municipio.includes(e)).sort((e,t)=>e.municipio.localeCompare(t.municipio))),l=()=>i({placeholder:"Novo local...",format:e=>e.municipio,suggestion:o}),s=()=>{for(let t of(a.innerHTML="",r)){let i=e.html`<span style="padding:0px 4px;font-size:10pt;"> ⊝ </span>`;i.onclick=()=>{r.splice(r.indexOf(t),1),s()},a.append(e.html`<button style="padding-right:0px;border-radius:15px;border-width:thin;
                 font-size:8pt;margin-right:2px;caret-color: transparent">
                 ${n(t)} ${i}`)}if(r.length<4){let o=l();o.style.display="inline",o.style.caretColor="black",a.append(o),o.focus(),o.addEventListener("change",()=>{""!=o.value&&0>r.indexOf(o.value)&&r.push(o.value),s()})}a.value=r,a.dispatchEvent(new CustomEvent("input"))},d=e=>{r=e,s()};return s(),a.setValue=d,a}}function nG(e){return e`## Dados`}async function nH(e,t){return new Map(e.dsvFormat(";").parse(await t("regiaosaude.csv").text()).map(e=>[e.CODMUNRES,`${e.UF}, ${e.REGIAOSAUDE}`]))}function nV(e){return new Set(e.values())}function nq(e){return new Map(e.map(e=>[e.cod,e]))}function nW(e){return function(t){try{if(")"==t.nome[t.nome.length-1])return t.nome;return`${t.nome} (${t.uf})`}catch(i){return e.value={error:i,registro:t},"UNKNOWN"}}}function nZ(e){return e("dadosMunicipio.csv").csv()}function nX(e){return e.html`<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
</style>`}function nJ(e,t){let n=e.module();function a(){return this.url}let r=new Map([["dadosMunicipio.csv",{url:new i.U(i(7375)),mimeType:"text/csv",toString:a}],["regiaosaude.csv",{url:new i.U(i(515)),mimeType:"text/csv",toString:a}]]);n.builtin("FileAttachment",e.fileAttachments(e=>r.get(e))),n.variable(t()).define(["md"],i6),n.variable(t("viewof ano")).define("viewof ano",["Inputs"],i8),n.variable(t("ano")).define("ano",["Generators","viewof ano"],(e,t)=>e.input(t)),n.variable(t("viewof limpar")).define("viewof limpar",["Inputs"],i7),n.variable(t("limpar")).define("limpar",["Generators","viewof limpar"],(e,t)=>e.input(t)),n.define("initial clearWindowSelection",i9),n.variable(t("mutable clearWindowSelection")).define("mutable clearWindowSelection",["Mutable","initial clearWindowSelection"],(e,t)=>new e(t)),n.variable(t("clearWindowSelection")).define("clearWindowSelection",["mutable clearWindowSelection"],e=>e.generator),n.variable(t("clearButton")).define("clearButton",["svg"],ne),n.variable(t("viewof munSelecionados")).define("viewof munSelecionados",["menuLocalidade","coresMunicipios"],nt),n.variable(t("munSelecionados")).define("munSelecionados",["Generators","viewof munSelecionados"],(e,t)=>e.input(t)),n.variable(t("viewof xAxisSel")).define("viewof xAxisSel",["Inputs","variables"],ni),n.variable(t("xAxisSel")).define("xAxisSel",["Generators","viewof xAxisSel"],(e,t)=>e.input(t)),n.variable(t("viewof yAxisSel")).define("viewof yAxisSel",["Inputs","variables"],nn),n.variable(t("yAxisSel")).define("yAxisSel",["Generators","viewof yAxisSel"],(e,t)=>e.input(t)),n.variable(t("viewof colorSel")).define("viewof colorSel",["Inputs","variables"],na),n.variable(t("colorSel")).define("colorSel",["Generators","viewof colorSel"],(e,t)=>e.input(t)),n.variable(t()).define(["colorSel"],nr),n.define("initial colorVar",["colorSel"],no),n.variable(t("mutable colorVar")).define("mutable colorVar",["Mutable","initial colorVar"],(e,t)=>new e(t)),n.variable(t("colorVar")).define("colorVar",["mutable colorVar"],e=>e.generator),n.variable(t("viewof intervaloNascimentos")).define("viewof intervaloNascimentos",["sliderArray","sliderRangeBase"],nl),n.variable(t("intervaloNascimentos")).define("intervaloNascimentos",["Generators","viewof intervaloNascimentos"],(e,t)=>e.input(t)),n.define("initial xAxisVar",["xAxisSel"],ns),n.variable(t("mutable xAxisVar")).define("mutable xAxisVar",["Mutable","initial xAxisVar"],(e,t)=>new e(t)),n.variable(t("xAxisVar")).define("xAxisVar",["mutable xAxisVar"],e=>e.generator),n.define("initial yAxisVar",["yAxisSel"],nd),n.variable(t("mutable yAxisVar")).define("mutable yAxisVar",["Mutable","initial yAxisVar"],(e,t)=>new e(t)),n.variable(t("yAxisVar")).define("yAxisVar",["mutable yAxisVar"],e=>e.generator),n.variable(t("colorScale")).define("colorScale",["d3","colorVar"],nc),n.variable(t("colorLegend")).define("colorLegend",["Legend","colorScale","colorVar"],nu),n.variable(t("scatterplot")).define("scatterplot",["munSelecionados","Plot","scatterConfig","xAxisVar","dataRange","yAxisVar","data","nomeMunicipio","colorVar","colorScale","highlightData","flagDraw","rectSelect","mutable dataRange","dblClickInteraction","alteraMenuLocalidade","hoverInteraction","applyDotAnimation","htl","clearButton","allRange"],nf),n.define("initial scatterConfig",np),n.variable(t("mutable scatterConfig")).define("mutable scatterConfig",["Mutable","initial scatterConfig"],(e,t)=>new e(t)),n.variable(t("scatterConfig")).define("scatterConfig",["mutable scatterConfig"],e=>e.generator),n.variable(t("alteraMenuLocalidade")).define("alteraMenuLocalidade",["viewof munSelecionados","corMunNaoUsada"],nm),n.define("initial debug",nh),n.variable(t("mutable debug")).define("mutable debug",["Mutable","initial debug"],(e,t)=>new e(t)),n.variable(t("debug")).define("debug",["mutable debug"],e=>e.generator),n.variable(t()).define(["md"],nv),n.variable(t()).define(["md"],nb),n.variable(t("coresMunicipios")).define("coresMunicipios",ng),n.variable(t("corMunNaoUsada")).define("corMunNaoUsada",["coresMunicipios"],nx),n.variable(t()).define(["htl","corMunNaoUsada","munSelecionados"],ny),n.variable(t()).define(["md"],nw),n.variable(t("flagCanvasTest")).define("flagCanvasTest",["DOM","flagDraw"],nA),n.variable(t("flagDraw")).define("flagDraw",n_),n.variable(t("flagSvgTest")).define("flagSvgTest",["htl","flagPath"],nC),n.variable(t("flagPath")).define("flagPath",nE),n.variable(t()).define(["md"],nS),n.variable(t("data")).define("data",["dadosMunicipio","xAxisVar","yAxisVar","colorVar","codigoToMunicipio","dataFilter","dataRange"],nk),n.define("initial dataFilter",["intervaloNascimentos","ano"],nT),n.variable(t("mutable dataFilter")).define("mutable dataFilter",["Mutable","initial dataFilter"],(e,t)=>new e(t)),n.variable(t("dataFilter")).define("dataFilter",["mutable dataFilter"],e=>e.generator),n.variable(t("highlightData")).define("highlightData",["munSelecionados","data"],nO),n.variable(t("variables")).define("variables",nI),n.variable(t("selectRange")).define("selectRange",["data"],nM),n.variable(t("allRange")).define("allRange",nD),n.define("initial dataRange",["mutable clearWindowSelection","allRange"],nN),n.variable(t("mutable dataRange")).define("mutable dataRange",["Mutable","initial dataRange"],(e,t)=>new e(t)),n.variable(t("dataRange")).define("dataRange",["mutable dataRange"],e=>e.generator),n.variable(t()).define(["md"],nL),n.variable(t("hoverInteraction")).define("hoverInteraction",["d3"],nR),n.variable(t("dblClickInteraction")).define("dblClickInteraction",["d3","data","highlightData"],nP),n.variable(t("rectSelect")).define("rectSelect",["d3"],nF),n.variable(t()).define(["md"],nB),n.define("initial oldDataMap",nU),n.variable(t("mutable oldDataMap")).define("mutable oldDataMap",["Mutable","initial oldDataMap"],(e,t)=>new e(t)),n.variable(t("oldDataMap")).define("oldDataMap",["mutable oldDataMap"],e=>e.generator),n.variable(t("applyDotAnimation")).define("applyDotAnimation",["mutable oldDataMap","d3"],n$),n.variable(t()).define(["md"],nj),n.variable(t("munInput")).define("munInput",["htl","municipios","SearchForm","nomeMunicipio"],nz),n.variable(t()).define(["md"],nG),n.variable(t("codigoToRegiaoSaude")).define("codigoToRegiaoSaude",["d3","FileAttachment"],nH),n.variable(t("regioesSaude")).define("regioesSaude",["codigoToRegiaoSaude"],nV),n.variable(t("codigoToMunicipio")).define("codigoToMunicipio",["municipios"],nq),n.variable(t("nomeMunicipio")).define("nomeMunicipio",["mutable debug"],nW),n.variable(t("dadosMunicipio")).define("dadosMunicipio",["FileAttachment"],nZ);let o=e.module(iR);n.import("SearchForm",o);let l=e.module(iG);n.import("menuLocalidade",l),n.import("municipios",l);let s=e.module(i4);n.import("sliderbase",s),n.import("sliderArray",s),n.import("sliderRangeBase",s),n.import("style_slider",s);let d=e.module(j);return n.import("Legend",d),n.variable(t("estiloFonteMenuLocalidade")).define("estiloFonteMenuLocalidade",["htl"],nX),n}function nY(e){return e`# Bar chart dados mapa`}function nQ(e){return e}function nK(e,t){return e.select(t,{label:"Vari\xe1vel",format:e=>e.name,value:t[0]})}function n0(){return function(e,t){let i=new Set(e.map(e=>e.cod)),n=e.length>2?2:0;return t.filter(e=>i.has(e.CODMUNRES)).map(t=>{let i=e.findIndex(e=>e.cod==t.CODMUNRES),a=e[i],r={i,row:i%2,col:~~(i/2)};return Object.assign(r,a),Object.assign(r,t),r.ANO=r.ANO.slice(n,4),r})}}function n1(e,t,i){return e(t,i)}function n2(e,t){return function(i,n,a,r,o,l){let s=e.plot({y:{grid:!0,tickSize:0,tickPadding:3,domain:a},x:{tickSize:0,tickPadding:4,tickFormat:e=>e},width:r,height:o,marginTop:25,marginLeft:20,marginRight:5,marginBottom:15,marks:[e.barY(i,{x:e=>+e.ANO,y:n.field,fill:e=>e.cor})]}),d=t`<text x=25 y=20>${l}`;return d.style=`
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
  `,s}}function n5(e,t,i){return e(t.filter(e=>0==e.i),i,void 0,318,150,"TEST")}function n3(e,t,i,n){return function(a,r,o,l,s){let d=e(a,r),c=t`<svg width=${l} height=${s} >`,u=a.length,[f,p]=[[1,1],[2,1],[2,2],[2,2]][u-1],[m,h]=[l/p,s/f],v=[0,Math.max(...d.map(e=>+o.field(e)))];for(let b=0;b<u;b++){let g=~~(b/2),x=b%2,y=i(d.filter(e=>e.i==b),o,v,m,h,a[b].nome),w=n.svg`<g transform=translate(${g*m},${x*h}) >${y}</g>`;c.append(w)}return c}}function n4(e,t,i,n){return e(t,i,n,300,300)}function n6(e){return e`## Vis Toggle`}function n8(e){return e()}function n7(e){return e}function n9(e,t,i){return()=>{let n=e.html`<div class=visToggle>`;n.style=`
    display:inline-block;
    vertical-align: middle;
    line-height:0;
  `,n.value="barchart";let a=t();return n.append(a),n.onclick=()=>{n.removeChild(a),"ranking"==n.value?(n.value="barchart",a=t()):(n.value="ranking",a=i()),n.append(a),n.dispatchEvent(new CustomEvent("input"))},n}}function ae(e){return()=>e.svg`<svg width="52" height="24" viewBox="0 0 52 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="52" height="24" rx="4" fill="#151472"/>
<rect x="2" y="2" width="24" height="20" rx="3" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 8.40078C8 8.06941 8.26863 7.80078 8.6 7.80078H8.606C8.93737 7.80078 9.206 8.06941 9.206 8.40078C9.206 8.73215 8.93737 9.00078 8.606 9.00078H8.6C8.26863 9.00078 8 8.73215 8 8.40078ZM11 8.40078C11 8.06941 11.2686 7.80078 11.6 7.80078H19.4C19.7314 7.80078 20 8.06941 20 8.40078C20 8.73215 19.7314 9.00078 19.4 9.00078H11.6C11.2686 9.00078 11 8.73215 11 8.40078ZM8 12.0008C8 11.6694 8.26863 11.4008 8.6 11.4008H8.606C8.93737 11.4008 9.206 11.6694 9.206 12.0008C9.206 12.3322 8.93737 12.6008 8.606 12.6008H8.6C8.26863 12.6008 8 12.3322 8 12.0008ZM11 12.0008C11 11.6694 11.2686 11.4008 11.6 11.4008H19.4C19.7314 11.4008 20 11.6694 20 12.0008C20 12.3322 19.7314 12.6008 19.4 12.6008H11.6C11.2686 12.6008 11 12.3322 11 12.0008ZM8 15.6008C8 15.2694 8.26863 15.0008 8.6 15.0008H8.606C8.93737 15.0008 9.206 15.2694 9.206 15.6008C9.206 15.9322 8.93737 16.2008 8.606 16.2008H8.6C8.26863 16.2008 8 15.9322 8 15.6008ZM11 15.6008C11 15.2694 11.2686 15.0008 11.6 15.0008H19.4C19.7314 15.0008 20 15.2694 20 15.6008C20 15.9322 19.7314 16.2008 19.4 16.2008H11.6C11.2686 16.2008 11 15.9322 11 15.6008Z" fill="#151472"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.975 17C32.6298 17 32.35 16.7202 32.35 16.375L32.35 11.625C32.35 11.2798 32.6298 11 32.975 11C33.3202 11 33.6 11.2798 33.6 11.625L33.6 16.375C33.6 16.7202 33.3202 17 32.975 17Z" fill="#E5E5E5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M36.3251 17C35.9799 17 35.7001 16.7202 35.7001 16.375L35.7001 7.625C35.7001 7.27982 35.9799 7 36.3251 7C36.6703 7 36.9501 7.27982 36.9501 7.625L36.9501 16.375C36.9501 16.7202 36.6703 17 36.3251 17Z" fill="#E5E5E5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.6752 17C39.33 17 39.0502 16.7202 39.0502 16.375L39.0502 9.625C39.0502 9.27982 39.33 9 39.6752 9C40.0203 9 40.3002 9.27982 40.3002 9.625L40.3002 16.375C40.3002 16.7202 40.0203 17 39.6752 17Z" fill="#E5E5E5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M43.0253 17C42.6801 17 42.4003 16.7202 42.4003 16.375L42.4003 14.625C42.4003 14.2798 42.6801 14 43.0253 14C43.3704 14 43.6503 14.2798 43.6503 14.625L43.6503 16.375C43.6503 16.7202 43.3704 17 43.0253 17Z" fill="#E5E5E5"/>
</svg>`}function at(e){return()=>e.svg`<svg width="52" height="24" viewBox="0 0 52 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="52" height="24" rx="4" fill="#151472"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 8.40078C8 8.06941 8.26863 7.80078 8.6 7.80078H8.606C8.93737 7.80078 9.206 8.06941 9.206 8.40078C9.206 8.73215 8.93737 9.00078 8.606 9.00078H8.6C8.26863 9.00078 8 8.73215 8 8.40078ZM11 8.40078C11 8.06941 11.2686 7.80078 11.6 7.80078H19.4C19.7314 7.80078 20 8.06941 20 8.40078C20 8.73215 19.7314 9.00078 19.4 9.00078H11.6C11.2686 9.00078 11 8.73215 11 8.40078ZM8 12.0008C8 11.6694 8.26863 11.4008 8.6 11.4008H8.606C8.93737 11.4008 9.206 11.6694 9.206 12.0008C9.206 12.3322 8.93737 12.6008 8.606 12.6008H8.6C8.26863 12.6008 8 12.3322 8 12.0008ZM11 12.0008C11 11.6694 11.2686 11.4008 11.6 11.4008H19.4C19.7314 11.4008 20 11.6694 20 12.0008C20 12.3322 19.7314 12.6008 19.4 12.6008H11.6C11.2686 12.6008 11 12.3322 11 12.0008ZM8 15.6008C8 15.2694 8.26863 15.0008 8.6 15.0008H8.606C8.93737 15.0008 9.206 15.2694 9.206 15.6008C9.206 15.9322 8.93737 16.2008 8.606 16.2008H8.6C8.26863 16.2008 8 15.9322 8 15.6008ZM11 15.6008C11 15.2694 11.2686 15.0008 11.6 15.0008H19.4C19.7314 15.0008 20 15.2694 20 15.6008C20 15.9322 19.7314 16.2008 19.4 16.2008H11.6C11.2686 16.2008 11 15.9322 11 15.6008Z" fill="#E5E5E5"/>
<rect x="26" y="2" width="24" height="20" rx="3" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.975 17C32.6298 17 32.35 16.7202 32.35 16.375L32.35 11.625C32.35 11.2798 32.6298 11 32.975 11C33.3202 11 33.6 11.2798 33.6 11.625L33.6 16.375C33.6 16.7202 33.3202 17 32.975 17Z" fill="#151472"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M36.3251 17C35.9799 17 35.7001 16.7202 35.7001 16.375L35.7001 7.625C35.7001 7.27982 35.9799 7 36.3251 7C36.6703 7 36.9501 7.27982 36.9501 7.625L36.9501 16.375C36.9501 16.7202 36.6703 17 36.3251 17Z" fill="#151472"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.6752 17C39.33 17 39.0502 16.7202 39.0502 16.375L39.0502 9.625C39.0502 9.27982 39.33 9 39.6752 9C40.0203 9 40.3002 9.27982 40.3002 9.625L40.3002 16.375C40.3002 16.7202 40.0203 17 39.6752 17Z" fill="#151472"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M43.0253 17C42.6801 17 42.4003 16.7202 42.4003 16.375L42.4003 14.625C42.4003 14.2798 42.6801 14 43.0253 14C43.3704 14 43.6503 14.2798 43.6503 14.625L43.6503 16.375C43.6503 16.7202 43.3704 17 43.0253 17Z" fill="#151472"/>
</svg>`}function ai(e){return e.html`<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
</style>`}function an(e){return e`## Imports`}function aa(e,t){let i=e.module();i.variable(t()).define(["md"],nY),i.variable(t()).define(["viewof munSelecionados"],nQ),i.variable(t("viewof variable")).define("viewof variable",["Inputs","variables"],nK),i.variable(t("variable")).define("variable",["Generators","viewof variable"],(e,t)=>e.input(t)),i.variable(t("makeBarChartData")).define("makeBarChartData",n0),i.variable(t("barChartData")).define("barChartData",["makeBarChartData","munSelecionados","dadosMunicipio"],n1),i.variable(t("makeBarChart")).define("makeBarChart",["Plot","svg"],n2),i.variable(t()).define(["makeBarChart","barChartData","variable"],n5),i.variable(t("makeBarChartVis")).define("makeBarChartVis",["makeBarChartData","svg","makeBarChart","htl"],n3),i.variable(t()).define(["makeBarChartVis","munSelecionados","dadosMunicipio","variable"],n4),i.variable(t()).define(["md"],n6),i.variable(t("viewof visToggle")).define("viewof visToggle",["visToggleInput"],n8),i.variable(t("visToggle")).define("visToggle",["Generators","viewof visToggle"],(e,t)=>e.input(t)),i.variable(t()).define(["visToggle"],n7),i.variable(t("visToggleInput")).define("visToggleInput",["htl","barChartSelected","rankingSelected"],n9),i.variable(t("rankingSelected")).define("rankingSelected",["htl"],ae),i.variable(t("barChartSelected")).define("barChartSelected",["htl"],at),i.variable(t()).define(["htl"],ai),i.variable(t()).define(["md"],an);let n=e.module(nJ);return i.import("viewof munSelecionados",n),i.import("munSelecionados",n),i.import("dadosMunicipio",n),i.import("variables",n),i}function ar(e){return e`# ASlider`}function ao(e,t){return e({values:t.range(100),value:3})}function al(e,t){return e({values:t.range(100),value:[5,59]})}function as(e,t){return function(i={}){let{height:n=80,rulerThickness:a=10,thumbThickness:r=6,thumbHeight:o=16,margin:l=10,labelDy:s=2,width:d=400,values:c=[1,2,3,4,5,6],value:u=[3,4]}=i,f=!(u instanceof Array),p=e.svg`<svg width=${d} height=${n} >`,m=t.select(p).attr("class","aslider"),h=d-l,v=(n-a)/2,b=v+a,g=e=>c[Math.round(((e=Math.max(l,Math.min(h,e)))-l)/(h-l)*(c.length-1))],x=e=>{let t=l,i=Number.MAX_VALUE;for(let n=0;n<c.length;n++){let a=(h-l)/(c.length-1)*n+l,r=Math.abs(g(a)-e);r<i&&([t,i]=[a,r])}return t};m.append("rect").attr("class","ruler").attr("width",d-2*l).attr("height",a).attr("x",l).attr("y",v);let y=m.append("rect").attr("class","range").attr("y",v).attr("height",a);m.selectAll("line.tick").data(c.slice(1,-1)).join("line").attr("class","tick").attr("x1",x).attr("x2",x).attr("y1",v).attr("y2",b),m.selectAll("text.label").data([c[0],c[c.length-1]]).join("text").attr("class","label").attr("dominant-baseline","hanging").attr("x",x).attr("y",(b+v+o)/2+s).text(e=>e);let w=m.append("rect").attr("class","thumb min").attr("width",r).attr("height",o).attr("rx",r/2),A=m.append("rect").attr("class","thumb max").attr("width",r).attr("height",o).attr("rx",r/2);f&&A.remove();let _=e=>{u=e;let t,i;f?[t,i]=[u,u]:[t,i]=u,t!=i||f?(w.attr("x",x(t)-r/2),A.attr("x",x(i)-r/2)):(w.attr("x",x(t)-r),A.attr("x",x(i))),w.attr("y",(b+v-o)/2),A.attr("y",(b+v-o)/2),y.attr("x",x(t)).attr("width",x(i)-x(t)),m.selectAll("text.thumbLabel").remove(),m.selectAll("text.thumbLabel").data([t,i]).join("text").attr("class","thumbLabel").attr("dominant-baseline","auto").attr("x",x).attr("y",(b+v-o)/2-s).text(e=>e),p.value=u,p.dispatchEvent(new CustomEvent("input"))},C=null,E=null;return m.selectAll(".thumb").on("mousedown",function(e){1==e.buttons&&(E=(C=t.select(this)).classed("min")?"min":"max")}),m.on("mousemove",function(e){if(!C)return;let t=e.offsetX,i=g(t),[n,a]=f?[u,u]:u;"min"==E?(i<=a||f)&&(n=i):i>=n&&(a=i),_(f?n:[n,a])}).on("mouseup mouseleave",e=>{C=null}),_(u),p}}function ad(e){return e.html`<style>
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

</style>`}function ac(e,t){let i=e.module();return i.variable(t()).define(["md"],ar),i.variable(t("viewof testSingle")).define("viewof testSingle",["aSlider","d3"],ao),i.variable(t("testSingle")).define("testSingle",["Generators","viewof testSingle"],(e,t)=>e.input(t)),i.variable(t("viewof testInterval")).define("viewof testInterval",["aSlider","d3"],al),i.variable(t("testInterval")).define("testInterval",["Generators","viewof testInterval"],(e,t)=>e.input(t)),i.variable(t("aSlider")).define("aSlider",["htl","d3"],as),i.variable(t("aSliderStyles")).define("aSliderStyles",["htl"],ad),i}function au(e){return e`# ADrawer`}function af(e,t){return e(t,{shown:!0,title:"Nascimentos",subtitle:"Exibir somente munic\xedpios com total de nascimentos entre:"})}function ap(e){return e({values:[0,10,100,1e3,1e5,1e6],value:[0,1e6],width:300,rulerThickness:16,thumbHeight:20,height:50,margin:20})}function am(e){return e}function ah(e){return()=>e.html`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="#151472"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.76426 4.76462C3.89443 4.63445 4.10549 4.63445 4.23566 4.76462L5.99996 6.52892L7.76426 4.76462C7.89443 4.63445 8.10549 4.63445 8.23566 4.76462C8.36584 4.8948 8.36584 5.10585 8.23566 5.23603L6.23566 7.23603C6.10549 7.3662 5.89443 7.3662 5.76426 7.23603L3.76426 5.23603C3.63408 5.10585 3.63408 4.8948 3.76426 4.76462Z" fill="#E5E5E5"/>
</svg>
`}function av(e){return()=>e.html`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="#151472"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.09763 3.76462C5.22781 3.63445 5.43886 3.63445 5.56904 3.76462L7.56904 5.76462C7.69921 5.8948 7.69921 6.10585 7.56904 6.23603L5.56904 8.23603C5.43886 8.3662 5.22781 8.3662 5.09763 8.23603C4.96746 8.10585 4.96746 7.8948 5.09763 7.76462L6.86193 6.00033L5.09763 4.23603C4.96746 4.10585 4.96746 3.8948 5.09763 3.76462Z" fill="#E5E5E5"/>
</svg>
`}function ab(e,t,i){return function(n,a={}){let{shown:r=!1,title:o="title",subtitle:l=null}=a,s=e.html`<div class=adrawer>`,d=e.html`<div class=titleArea>`,c=e.html`<div class=icon>`,u=e.html`<div class=title>${o}`;d.append(c,u);let f=e.html`<div class=contentArea>`;l&&f.append(e.html`<div class=subtitle >${l}`),f.append(n);let p=()=>{c.innerHTML="",c.append(r?t():i()),f.style.display=r?"block":"none"};return p(),d.onclick=()=>{r=!r,p()},s.append(d,f),s}}function ag(e){return e.html`<style>
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
</style>`}function ax(e){return e}function ay(e,t){let i=e.module();i.variable(t()).define(["md"],au),i.variable(t()).define(["aDrawer","viewof filtroNascimentos"],af),i.variable(t("viewof filtroNascimentos")).define("viewof filtroNascimentos",["aSlider"],ap),i.variable(t("filtroNascimentos")).define("filtroNascimentos",["Generators","viewof filtroNascimentos"],(e,t)=>e.input(t)),i.variable(t()).define(["filtroNascimentos"],am),i.variable(t("chevronDown")).define("chevronDown",["htl"],ah),i.variable(t("chevronRight")).define("chevronRight",["htl"],av),i.variable(t("aDrawer")).define("aDrawer",["htl","chevronDown","chevronRight"],ab),i.variable(t("aDrawerStyles")).define("aDrawerStyles",["htl"],ag);let n=e.module(ac);return i.import("aSlider",n),i.import("aSliderStyles",n),i.variable(t()).define(["aSliderStyles"],ax),i}function aw(e){return e`# ASelect`}function aA(e){return e({options:["foo","bar","xpto"],width:300,value:"xpto",placeholder:"Select one"})}function a_(e){return e({width:300,placeholder:"\uD83D\uDD0D buscar"})}function aC(e){return e}function aE(e){return function(t={}){let{placeholder:i="",width:n=200}=t,a=e.html`<input type=text class=atext placeholder=${i}>`;return a.style.width=`${n}px`,a}}function aS(e){return function(t={}){let{placeholder:i="",options:n=["abc","def","xpto"],width:a=200,value:r="xpto"}=t,o=e.html`<select class=aselect>`;for(let l of(o.style.width=`${a}px`,i&&""!=i&&o.append(e.html`<option value="" disabled selected >${i}`),n)){let s=l==r?"selected":"",d=e.html`<option value="${l}" >${l}`;s&&(d.selected=!0),o.append(d)}return o}}function ak(e,t){return t.html`<style>
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
</style>`}function aT(e){return()=>e.html`<svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.146447C0.841709 -0.0488155 1.15829 -0.0488155 1.35355 0.146447L4 2.79289L6.64645 0.146447C6.84171 -0.0488155 7.15829 -0.0488155 7.35355 0.146447C7.54882 0.341709 7.54882 0.658291 7.35355 0.853553L4.35355 3.85355C4.15829 4.04882 3.84171 4.04882 3.64645 3.85355L0.646447 0.853553C0.451184 0.658291 0.451184 0.341709 0.646447 0.146447Z" fill="black"/>
</svg>`}async function aO(e){return await e("da.png").url()}function aI(e){return new URL(e)}function aM(e,t){return t.html`<div style="background:url(${e}) right; background-size:10px; background-repeat:no-repeat;">XXX  `}function aD(e,t){let n=e.module(),a=new Map([["da.png",{url:new i.U(i(4735)),mimeType:"image/png",toString:function(){return this.url}}]]);return n.builtin("FileAttachment",e.fileAttachments(e=>a.get(e))),n.variable(t()).define(["md"],aw),n.variable(t()).define(["aSelect"],aA),n.variable(t("viewof term")).define("viewof term",["aText"],a_),n.variable(t("term")).define("term",["Generators","viewof term"],(e,t)=>e.input(t)),n.variable(t()).define(["term"],aC),n.variable(t("aText")).define("aText",["htl"],aE),n.variable(t("aSelect")).define("aSelect",["htl"],aS),n.variable(t("aSelectStyles")).define("aSelectStyles",["daPath","htl"],ak),n.variable(t("downArrow")).define("downArrow",["htl"],aT),n.variable(t("daPath")).define("daPath",["FileAttachment"],aO),n.variable(t("daUrl")).define("daUrl",["daPath"],aI),n.variable(t()).define(["daPath","htl"],aM),n}function aN(e){return e`# Amplia Saúde - Mapa
`}function aL(e,t){return e(document.querySelector(".containerPrincipal"),t)}function aR(e){return e.html`<style>
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
</div>`}function aP(e){return e`## Camada de ajuda
`}function aF(e){return e.csvParse(`description,selector,corner,xoffset,yoffset,text
Mapa,div.mapa,N,0,0,"O mapa \xe9 definido como um cartograma circular de Dorling, no qual a \xe1rea das unidades de observa\xe7\xe3o (munic\xedpios = c\xedrculos) tornam-se proporcionais aos valores de determinada vari\xe1vel (popula\xe7\xe3o local). Por conta do tamanho assumido pelos c\xedrculos, a contiguidade geogr\xe1fica entre munic\xedpios n\xe3o \xe9 representada de forma precisa. Al\xe9m disso, o tom crom\xe1tico dos c\xedrculos \xe9 referente ao valor do indicador principal previamente selecionado. Duplo clique na bolinha seleciona/desseleciona o munic\xedpio no mapa e no gr\xe1fico de dispers\xe3o de forma coordenada."
Bot\xf5es de Zoom,div.mapa,NW,350,25,"Utilize os bot\xf5es de zoom para aumentar ou diminuir a imagem. A mesma funcionalidade \xe9 implementada a partir da intera\xe7\xe3o com a rodinha central do mouse, ou gestos de zoom em tela touch ou trackpad."
Bot\xe3o ranking-barras,div.visToggle,NW,0,0,Alterne entre o modo s\xe9rie temporal e o modo ranking. O modo s\xe9rie temporal apresenta a evoluc\xe3o da m\xe9dia anual do indicador selecionado. O modo ranking apresenta a lista de munic\xedpios em ordem decrescente para o indicador e ano selecionados. \xc9 poss\xedvel realizar uma busca e sele\xe7\xe3o por munic\xedpio no modo ranking.
Ranking,div.rankingChartDiv,C,0,0,Munic\xedpios ranqueados pela vari\xe1vel principal. Duplo-clique para selecionar um munic\xedpio.
Bar chart,div.barChartDiv,C,0,0,Gr\xe1fico de barras mostrando o valor da vari\xe1vel principal ao longo dos anos para os munic\xedpios selecionados.
Scatterplot,div.scatterplot,C,0,0,O gr\xe1fico de dispers\xe3o apresenta a correla\xe7\xe3o entre tr\xeas indicadores para cada munic\xedpio brasileiro (representado por um c\xedrculo). O tom crom\xe1tico do c\xedrculo representa o valor do indicador principal selecionado previamente. Selecione os indicadores representados no eixo x e y atrav\xe9s do menu de tipo dropdown. Duplo clique na bolinha seleciona/desseleciona o munic\xedpio no gr\xe1fico e no mapa de forma coordenada. \xc9 poss\xedvel expandir/retrair o gr\xe1fico clicando no \xedcone de seta.
Scatterplot,div.scatterplotBig,C,0,0,O gr\xe1fico de dispers\xe3o apresenta a correla\xe7\xe3o entre tr\xeas indicadores para cada munic\xedpio brasileiro (representado por um c\xedrculo). O tom crom\xe1tico do c\xedrculo representa o valor do indicador principal selecionado previamente. Selecione os indicadores representados no eixo x e y atrav\xe9s do menu de tipo dropdown. Duplo clique na bolinha seleciona/desseleciona o munic\xedpio no gr\xe1fico e no mapa de forma coordenada. \xc9 poss\xedvel expandir/retrair o gr\xe1fico clicando no \xedcone de seta.
Filtros,div.filtrarPor,N,0,0,Painel contendo filtros de diversas vari\xe1veis associadas aos munic\xedpios
Filtros,div.filtrarPorSmall,NE,-20,0,Clique neste \xedcone para mostrar filtros de diversas vari\xe1veis associadas aos munic\xedpios
Menu munic\xedpios,div.menuPrincipal div,W,0,0,Selecione at\xe9 quatro munic\xedpios para visualizar e comparar seus dados no mapa e gr\xe1ficos apresentados na tela. As cores dos \xedcones de posi\xe7\xe3o correspondem \xe0s cores dos munic\xedpios selecionados neste menu.
Menu ano,div.menuPrincipal>:nth-child(2),NW,0,0,Arraste as al\xe7as do slider para selecionar o ano a ser exibido. Os dados do ano escolhido ser\xe3o atualizados em todos os gr\xe1ficos.
Indicador chave,div.indicadorChave,NW,0,0,"Selecione um indicador dentre Polui\xe7\xe3o atmosf\xe9rica, Baixo peso ao nascer, Mortalidade Perinatal, Mortalidade Neonatal, Mortalidade Infantil e \xcdndice de Desenvolvimento Humano para ver os dados representados no mapa e gr\xe1ficos. Dados obtidos da base SISAM (polui\xe7\xe3o), IBGE (IDH) e SINASC, SIM e DOFET/DATASUS (indicadores de sa\xfade) e agregados por m\xe9dia anual."
Filtro Nascimentos,div.filtrarPor>div:nth-child(2)>div:nth-child(1),NW,0,0,"Filtre os munic\xedpios apresentados no mapa, gr\xe1ficos e ranking selecionando um intervalo de nascimentos (valores m\xednimo e m\xe1ximo)."
Filtro Regi\xe3o,div.filtrarPor>div:nth-child(2)>div:nth-child(2),NW,0,0,"Filtre os munic\xedpios apresentados no mapa, gr\xe1ficos e ranking para a regi\xe3o geogr\xe1fica do local de resid\xeancia das m\xe3es."
Filtro UF,div.filtrarPor>div:nth-child(2)>div:nth-child(3),NW,0,0,"Filtre os munic\xedpios apresentados no mapa, gr\xe1ficos e ranking para a Unidade Federativa (UF) do local de resid\xeancia das m\xe3es."
Filtro Regi\xe3o de Sa\xfade,div.filtrarPor>div:nth-child(2)>div:nth-child(4),NW,0,0,"Filtre os munic\xedpios apresentados no mapa, gr\xe1ficos e ranking selecionando uma regi\xe3o de sa\xfade do local de resid\xeancia das m\xe3es."
Filtro Polui\xe7\xe3o,div.filtrarPor>div:nth-child(2)>div:nth-child(5),NW,0,0,"Filtre os munic\xedpios apresentados no mapa, gr\xe1ficos e ranking selecionando um intervalo de m\xe9dia anual (valores m\xednimo e m\xe1ximo) para polui\xe7\xe3o atmosf\xe9rica (material particulado - MP de 2,5\xb5), classificado de acordo aos n\xedveis alvo da Organiza\xe7\xe3o Mundial da Sa\xfade em 2021. MP2.5 > 5,0 \xb5g/m3 micr\xf4metros \xe9 considerado prejudicial \xe0 sa\xfade humana"
Filtro Baixo Peso,div.filtrarPor>div:nth-child(2)>div:nth-child(6),NW,0,0,"Filtre os munic\xedpios apresentados no mapa, gr\xe1ficos e ranking selecionando um intervalo de m\xe9dia anual (valores m\xednimo e m\xe1ximo) para baixo peso ao nascer (<2.500 gramas)."
Filtro Mortalidade Perinatal,div.filtrarPor>div:nth-child(2)>div:nth-child(7),NW,0,0,"Filtre os munic\xedpios apresentados no mapa, gr\xe1ficos e ranking selecionando um intervalo de m\xe9dia anual (valores m\xednimo e m\xe1ximo) para mortalidade perinatal (\xf3bitos fetais - a partir da 22a semana de gesta\xe7\xe3o - e neonatais precoces - at\xe9 o 7 dia completo de vida)."
Filtro Mortalidade Neonatal,div.filtrarPor>div:nth-child(2)>div:nth-child(8),NW,0,0,"Filtre os munic\xedpios apresentados no mapa, gr\xe1ficos e ranking selecionando um intervalo de m\xe9dia anual (valores m\xednimo e m\xe1ximo) para mortalidade neonatal (\xf3bitos ocorridos nos primeiros 28 dias de vida)."
Filtro Mortalidade Infantil,div.filtrarPor>div:nth-child(2)>div:nth-child(9),NW,0,0,"Filtre os munic\xedpios apresentados no mapa, gr\xe1ficos e ranking selecionando um intervalo de m\xe9dia anual (valores m\xednimo e m\xe1ximo) para mortalidade infantil (\xf3bitos em crian\xe7as menores de um ano)."
Filtro IDH,div.filtrarPor>div:nth-child(2)>div:nth-child(10),NW,0,0,"Filtre os munic\xedpios apresentados no mapa, gr\xe1ficos e ranking selecionando um intervalo (valores m\xednimo e m\xe1ximo) para o \xcdndice de Desenvolvimento Humano (IDH) de 2010."`)}function aB(e,t){return e.table(t)}function aU(e){return e.toggle({label:"Mostrar Interface",value:!0})}function a$(){return!1}function aj(){return!1}function az(e,t,i,n,a){for(let r of["menuPrincipal","indicadorChave","rankingBarChart","mapa","scatterplot","scatterplotBig","filtrarPor","filtrarPorSmall"]){let o=i.querySelector(`div.${r}`);o.innerHTML=r}i.querySelector("div.indicadorChave").style.display="block",n?(i.querySelector("div.scatterplot").style.display="none",i.querySelector("div.scatterplotBig").style.display="block",i.querySelector("div.rankingBarChart").style.display="none"):(i.querySelector("div.scatterplotBig").style.display="none",i.querySelector("div.scatterplot").style.display="block",i.querySelector("div.rankingBarChart").style.display="block"),a?(i.querySelector("div.filtrarPorSmall").style.display="none",i.querySelector("div.filtrarPor").style.display="block"):(i.querySelector("div.filtrarPorSmall").style.display="block",i.querySelector("div.filtrarPor").style.display="none")}function aG(e,t){let i={};for(let n of["menuPrincipal","indicadorChave","rankingBarChart","mapa","scatterplot","scatterplotBig","filtrarPor","filtrarPorSmall"]){let a=t.querySelector(`div.${n}`);i[n]={elem:a,w:a.clientWidth,h:a.clientHeight}}return i}function aH(e,t,i,n,a,r,o,l,s,d,c,u,f,p,m,h,v,b,g,x){if(e){t.menuPrincipal.elem.innerHTML="",t.menuPrincipal.elem.append(i.html`<div>${n}<br><div style="margin-top:10px">Selecione até 4 municípios com duplo clique nos gráficos</div></div>`),n.style.display="inline",n.style.paddingTop="10px";let y=i.html`<div>${a}`;t.menuPrincipal.elem.append(y),a.style.display="inline";let w=t.indicadorChave;w.elem.innerHTML="",w.elem.append(r,i.html`<br><br>`,o);let A=t.rankingBarChart;A.elem.innerHTML="",l||A.elem.append(s);let _=l?t.scatterplotBig:t.scatterplot;_.elem.innerHTML="",d.style.display="inline-block",d.style.marginBottom="10px",d.style.lineHeight="15px",c.style.display="inline-block",c.style.float="right",c.style.marginTop="5px",c.style.lineHeight="15px";let C=l?u():f();C.style.marginLeft="5px",C.style.cursor="pointer",C.style.position="absolute",C.style.right="10px",C.style.top="10px",C.style.zIndex=20,C.onclick=()=>p.value=!p.value,_.elem.append(C,d,m,c);let E=h?t.filtrarPor:t.filtrarPorSmall,S=i.html`<div style = "display:flex; justify-content: space-between;margin-bottom:10px">`,k=i.html`<span style="display:inline">FILTRAR POR</span>`,T=h?v():b();S.onclick=()=>g.value=!g.value,S.append(k,T),E.elem.innerHTML="",E.elem.append(S),h&&E.elem.append(x)}}function aV(e,t,i){t.mapa.oldW=t.mapa.w,t.mapa.oldH=t.mapa.h,(t.mapa.elem.clientWidth!=t.mapa.w||t.mapa.elem.clientHeight!=t.mapa.h||0==t.mapa.elem.children.length)&&(t.mapa.w=t.mapa.elem.clientWidth,t.mapa.h=t.mapa.elem.clientHeight,i.value=!0)}function aq(e,t,i){e&&t.mapa.oldElem!=i&&(t.mapa.elem.innerHTML="",t.mapa.elem.append(i))}function aW(){return!1}function aZ(e){return e`## Session Storage
Armazenamento da coleção de municípios`}function aX(e,t){e.setItem("municipios",JSON.stringify(t))}function aJ(e){return e.getItem("municipios")}function aY(e,t){let i=e.getItem("municipios");i=i?JSON.parse(i):["RIO DE JANEIRO"],t.value=i}function aQ(e){return e`## Filtros`}function aK(e){return e`### Ano`}function a0(e){return e({range:[2012,2019],value:2018,ticks:1,width:400,height:56})}function a1(e){return e`### IDH`}function a2(e,t,i){return t({range:[0,.4,.5,.6,.7,.8,1],value:[0,6],width:300,height:50,marginTop:10},i)}function a5(e,t){return e(t,{shown:!0,title:"IDH (2010)",subtitle:"Exibir somente munic\xedpios com IDH entre:"})}function a3(e){return e`### Nascimentos`}function a4(e,t,i){return t({range:[1,10,100,1e3,1e4,1e5,2e5],value:[2,6],ticksLabelFormatter:e=>["1","10","100","1K","10K","100K","200K"][e],width:300,height:56},i)}function a6(e,t){return e(t,{shown:!0,title:"Nascimentos",subtitle:"Exibir somente munic\xedpios com total de nascimentos entre:"})}function a8(e){return e`### Poluição`}function a7(e,t,i){return t({range:[5,15,25,35,45,55,65],value:[0,6],ticksLabelFormatter:e=>["5","15","25","35","45","55","65"][e],marginTop:10,width:300,height:46},i)}function a9(e,t){return e(t,{shown:!0,title:"Polui\xe7\xe3o",subtitle:"Exibir somente munic\xedpios com polui\xe7\xe3o m\xe9dia (\xb5g/m\xb3) entre:"})}function re(e){return e`### Baixo peso`}function rt(e,t,i){return t({range:[1,5,6.5,7.5,9,100],value:[0,5],ticksLabelFormatter:e=>["1","5","6.5","7.5","9","100"][e],marginTop:10,width:300,height:46},i)}function ri(e,t){return e(t,{shown:!0,title:"Baixo Peso",subtitle:"Munic\xedpios com taxa de baixo peso (por cem nascidos vivos) entre:"})}function rn(e){return e`### Mortalidade`}function ra(e){return e`#### Perinatal`}function rr(e,t,i){return t({range:[0,.5,1.5,2.5,5,500],value:[0,5],ticksLabelFormatter:e=>["0","0,5","1,5","2,5","5","500"][e],marginTop:10,width:300,height:46},i)}function ro(e,t){return e(t,{shown:!0,title:"Mortalidade Perinatal",subtitle:"Munic\xedpios com mortalidade perinatal (por mil nascidos vivos) entre:"})}function rl(e){return e`#### Neonatal`}function rs(e,t,i){return t({range:[0,1.5,2.5,7.5,10,500],value:[0,5],ticksLabelFormatter:e=>["0","1,5","2,5","7,5","10","500"][e],marginTop:10,width:300,height:46},i)}function rd(e,t){return e(t,{shown:!0,title:"Mortalidade Neonatal",subtitle:"Munic\xedpios com mortalidade neonatal (por mil nascidos vivos) entre:"})}function rc(e){return e`#### Infantil`}function ru(e,t,i){return t({range:[0,8,12,16,23,1e3],value:[0,5],ticksLabelFormatter:e=>["0","8","12","16","23","1000"][e],marginTop:10,width:300,height:46},i)}function rf(e,t){return e(t,{shown:!0,title:"Mortalidade Infantil",subtitle:"Munic\xedpios com mortalidade infatil (por mil nascidos vivos) entre:"})}function rp(e){return e`### Região`}function rm(e,t){return t({options:["Selecionar uma regi\xe3o","Centro-oeste","Nordeste","Norte","Sudeste","Sul"],width:250})}function rh(e,t,i){return e(t`<div style="padding:4px 0px 20px 10px;">${i}`,{shown:!0,title:"Regi\xe3o",subtitle:"Mostrar apenas uma regi\xe3o"})}function rv(e,t,i){return t({options:["Selecionar um estado"].concat(i.map(e=>e.name).sort()),width:250})}function rb(e,t,i){return e(t`<div style="padding:4px 0px 20px 10px;">${i}`,{shown:!0,title:"UF",subtitle:"Mostrar apenas um estado"})}function rg(e,t,i){return i({options:["Selecionar regi\xe3o de sa\xfade"].concat([...new Set([...t.values()])]),width:250})}function rx(e,t,i){return e(t`<div style="padding:4px 0px 20px 10px;">${i}`,{shown:!0,title:"Regi\xe3o de sa\xfade",subtitle:"Mostrar apenas uma regi\xe3o de sa\xfade"})}function ry(e){return e`### Caixa com todos os filtros`}function rw(e,t,i,n,a,r,o,l,s,d,c,u){let f=t.html`<div>`;return f.append(i,n,a,r,o,l,s,d,c,u),f}function rA(e){return e`### Função de filtragem configurada conforme a interface`}function r_(e,t,i,n,a,r,o,l,s,d,c,u){let f=["Norte","Nordeste","Sudeste","Sul","Centro-oeste"].indexOf(e),p=t.filter(e=>e.name==i),m=p.length?+p[0].uf:null,[h,v]=n.map(e=>[1,10,100,1e3,1e4,1e5,2e5][e]),[b,g]=a.map(e=>[5,15,25,35,45,55,65][e]),[x,y]=r.map(e=>[1,5,6.5,7.5,9,100][e]),[w,A]=o.map(e=>[0,.5,1.5,2.5,5,500][e]),[_,C]=l.map(e=>[0,1.5,2.5,7.5,10,500][e]),[E,S]=s.map(e=>[0,8,12,16,23,3125][e]),[k,T]=d.map(e=>[0,.3,.4,.5,.6,.7,1][e]),O=e=>(-1==f||f==Math.floor(e.CODMUNRES/1e5)-1)&&(!m||m==Math.floor(e.CODMUNRES/1e4))&&e.IDH>=k&&e.IDH<=T&&e.ANO==c&&+e.TOTAL>=h&&+e.TOTAL<=v&&+e.AVG_PM25>=b&&+e.AVG_PM25<=g&&100*(e.BAIXO_PESO||0)/(e.TOTAL||1)>=x&&100*(e.BAIXO_PESO||0)/(e.TOTAL||1)<=y&&1e3*(e.OBITOS_PERINATAIS||0)/(e.TOTAL||1)>=w&&1e3*(e.OBITOS_PERINATAIS||0)/(e.TOTAL||1)<=A&&1e3*(e.OBITOS_NEONATAIS||0)/(e.TOTAL||1)>=_&&1e3*(e.OBITOS_NEONATAIS||0)/(e.TOTAL||1)<=C&&1e3*(e.OBITOS_INFANTIS||0)/(e.TOTAL||1)>=E&&1e3*(e.OBITOS_INFANTIS||0)/(e.TOTAL||1)<=S;return u.value=O,O}function rC(e){return e`## Variáveis`}function rE(e,t,i){return t({options:i.map(e=>e.name),width:280})}function rS(e,t,i){return e.value=t.find(e=>e.name==i),e.value}function rk(e,t,i){return t({options:i.map(e=>e.name),value:"Mort. Infantil",width:110})}function rT(e,t,i){return e.value=t.find(e=>e.name==i),e.value}function rO(e,t,i){return t({options:i.map(e=>e.name),value:"Baixo peso",width:110})}function rI(e,t,i){return e.value=t.find(e=>e.name==i),e.value}function rM(e){return e`## Ranking and Bar Chart `}function rD(e,t,i,n,a,r,o,l,s,d,c,u){let f=e.html`<div>`;f.style=`
    display:flex; 
    justify-content: space-between;
    line-height:0;
    margin-bottom: 10px;
  `;let p="ranking"==t?i.labelRanking:i.labelBarChart,m=e.html`<div class=rankTitle>${p}`,h=n?a():r();h.style.cursor="pointer",h.onclick=()=>o.value=!o.value,l.querySelector("div.rankBox").dispatchEvent(new CustomEvent("scroll",{scrollTop:0})),f.append(s,m,h);let v=e.html`<div class=${"ranking"==t?"rankingChartDiv":"barChartDiv"} style="max-width:290px">`;return v.append(f),"ranking"==t?v.append(l):v.append(d(c,u,i,280,260)),v}function rN(e){return e`## Ranking`}function rL(){return e=>e.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function rR(){return null}function rP(e){return e}function rF(e,t,i,n,a,r){e.value=[];let o=[];return t.filter(i).forEach(t=>{let i=n.get(t.CODMUNRES);if(!i){e.value.push(t);return}let l=i.nome,s=i.uf,d=+a.field(t);o.push({name:l,uf:s,mun:i,normName:r(l),val:d})}),o.sort((e,t)=>t.val-e.val),o}function rB(e){return e()}function rU(e,t){return function(){return e.filter(t).map(e=>{let t=Object.assign({},e.municipio);for(let i of(Object.assign(t,e),["CODMUNRES","x","y","val","municipio"]))delete t[i];return t})}}function r$(e){return e.html`<style>
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
  </style>`}function rj(e,t,i,n,a,r,o,l,s,d){let c=t.html`<div class=rankBox >`;i.range;let u=n({width:280,placeholder:"\uD83D\uDD0D BUSCAR"}),f=(e,i)=>{let n=t.html`<div class=rankItem>`,l=a(e.val),s=r.hsl(l).l>.5?"black":"white",d=t.html`<div class=rank style="color:${s};background:${l};" >${i+1}`,c=t.html`<div class=name>${e.name}`,u=t.html`<div class=uf>${e.uf}`,f=e.mun;return n.append(d,c,u),n.ondblclick=()=>o(f),n};u.style.marginBottom="10px";let p=t.html`<div style="position:relative;min-width:265px;min-height:${20*l.length}px;" >`,m=t.html`<div style="position:absolute;min-width:265px;min-height:${160}px;" >`;p.append(m),c.append(p);let h=e=>{m.style.top=e+"px",m.innerHTML="";let t=~~(e/20),i=Math.min(t+10,l.length);for(let n=t;n<i;n++){let a=f(l[n],n);m.append(a)}};return c.onscroll=e=>{h(c.scrollTop)},h(0),u.oninput=e=>{let t=s(u.value);for(let i=0;i<l.length;i++)if(l[i].normName.includes(t)){c.scrollTo(0,20*i);break}},d`<div>${u}${c}`}function rz(e){return e`## Cartograma de Dorling`}function rG(e){return e`
<style>
.circle:not(.disabled):hover {
  stroke:black;
  stroke-width:1px;
}
</style>
`}function rH(e,t,i,n,a,r,o,l,s,d,c,u,f,p,m,h,v){let[[b,g],[x,y]]=i,w=n.mapa.w,A=Math.max(n.mapa.h),_=Math.max(.2,Math.min(3,(w-318*(a.value?2:1))/(x-b))),C=r`<div style="position:relative;width:${w}px;height:${A}px;">`,E=o;Object.assign(E.style,{position:"absolute",zIndex:10,top:"10px",left:e?"328px":"10px"});let S=l;Object.assign(S.style,{position:"absolute",zIndex:10,top:"38px",left:e?"328px":"10px"}),C.append(E,S),E.onclick=()=>P(1.1),S.onclick=()=>P(10/11);let k=s.create("svg").attr("width",w).attr("height",A).attr("viewBox",[0,0,w,A]).attr("id","dorling");C.append(k.node()),C.value=[],C.hovered;let T=k.append("g").attr("class","mainGroup"),O=[e?328:0,0],I=null;k.on("mousedown",function(e){I=[e.offsetX,e.offsetY],k.style("cursor","grab")}).on("mousemove",function(e){if(!I)return;let t=[e.offsetX,e.offsetY],i=[t[0]-I[0],t[1]-I[1]];O[0]+=i[0],O[1]+=i[1],T.attr("transform",`translate(${O})`),I=t}).on("mouseup",function(e){I&&(k.style("cursor","auto"),I=null)}).on("wheel",function(e){e.preventDefault(),e.stopPropagation();let t=e.deltaY<0?1.1:10/11,i=[e.offsetX,e.offsetY];P(t,i)}),T.attr("transform",`translate(${O})`);let M=T.append("g").classed("circles",!0).attr("transform",`scale(${_},${_})`),D=M.selectAll("circle").data(d).join("circle").on("dblclick",function(){f.value;let e=s.select(this);v((e=>{let t=e.data()[0].properties.codarea.slice(0,-1),i=h.filter(e=>e.cod==t);return i[0]})(e)),R()}).classed("circle",!0).attr("cx",e=>e.x).attr("cy",e=>e.y);var N=c().html((e,t)=>`
      ${u(t)}`);k.call(N),D.on("mouseover",N.show).on("mouseout",N.hide);let L=T.append("g").classed("flags",!0),R=()=>{L.selectAll("path").remove(),L.selectAll("path").data(f.value).join("path").attr("transform",e=>{let t=p.get(e.cod);return`translate(${t.x*_},${t.y*_})`}).attr("d",m(12)).attr("fill",e=>e.cor).attr("stroke","black").on("dblclick",F)};function P(e,t){let[i,n]=t||[w/2,A/2],[a,r]=O,o=Math.max(.5,Math.min(3,_*e)),[l,s]=[(i-a)/_,(n-r)/_],[d,c]=[i-l*o,n-s*o];O=[d,c],_=o,T.attr("transform",`translate(${O})`),M.attr("transform",`scale(${_},${_})`),R()}function F(){let e=s.select(this).datum();v(e),R()}function B(){let e=f.value,t=e.map(e=>e.cod);D.each(function(e){let i=s.select(this),n=t.includes(e.properties.codarea.slice(0,-1));i.classed("clicked",n)}),R()}return B(),C.updateSelected=B,C.circleSelection=D,C}function rV(){return 0}function rq(e,t,i,n,a,r,o,l){e.circleSelection.each(function(e){let s=e.properties.codarea,d=t.get(s.slice(0,-1)),c=i.select(this),u=!n(d);c.classed("disabled",u).attr("r",a(r.get(s))).attr("fill",u?"#F1F1F1":o(l.field(d)))})}function rW(e){return e`## Ícones`}function rZ(e){return e`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#151472"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 6C7.567 6 6 7.567 6 9.5C6 11.433 7.567 13 9.5 13C10.443 13 11.2988 12.6271 11.9282 12.0207C11.9414 12.0036 11.9558 11.9871 11.9714 11.9714C11.9871 11.9558 12.0036 11.9414 12.0207 11.9282C12.6271 11.2988 13 10.443 13 9.5C13 7.567 11.433 6 9.5 6ZM13.0159 12.3088C13.6318 11.539 14 10.5625 14 9.5C14 7.01472 11.9853 5 9.5 5C7.01472 5 5 7.01472 5 9.5C5 11.9853 7.01472 14 9.5 14C10.5625 14 11.539 13.6318 12.3088 13.0159L14.1464 14.8536C14.3417 15.0488 14.6583 15.0488 14.8536 14.8536C15.0488 14.6583 15.0488 14.3417 14.8536 14.1464L13.0159 12.3088ZM9.5 7.5C9.77614 7.5 10 7.72386 10 8V9H11C11.2761 9 11.5 9.22386 11.5 9.5C11.5 9.77614 11.2761 10 11 10H10V11C10 11.2761 9.77614 11.5 9.5 11.5C9.22386 11.5 9 11.2761 9 11V10H8C7.72386 10 7.5 9.77614 7.5 9.5C7.5 9.22386 7.72386 9 8 9H9V8C9 7.72386 9.22386 7.5 9.5 7.5Z" fill="#E5E5E5"/>
</svg>`}function rX(e){return e`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#151472"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 6C7.567 6 6 7.567 6 9.5C6 11.433 7.567 13 9.5 13C10.443 13 11.2988 12.6271 11.9282 12.0207C11.9414 12.0036 11.9558 11.9871 11.9714 11.9714C11.9871 11.9558 12.0036 11.9414 12.0207 11.9282C12.6271 11.2988 13 10.443 13 9.5C13 7.567 11.433 6 9.5 6ZM13.0159 12.3088C13.6318 11.539 14 10.5625 14 9.5C14 7.01472 11.9853 5 9.5 5C7.01472 5 5 7.01472 5 9.5C5 11.9853 7.01472 14 9.5 14C10.5625 14 11.539 13.6318 12.3088 13.0159L14.1464 14.8536C14.3417 15.0488 14.6583 15.0488 14.8536 14.8536C15.0488 14.6583 15.0488 14.3417 14.8536 14.1464L13.0159 12.3088ZM7.5 9.5C7.5 9.22386 7.72386 9 8 9H11C11.2761 9 11.5 9.22386 11.5 9.5C11.5 9.77614 11.2761 10 11 10H8C7.72386 10 7.5 9.77614 7.5 9.5Z" fill="#E5E5E5"/>
</svg>`}function rJ(e){return()=>e`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 2C7.22386 2 7 1.77614 7 1.5C7 1.22386 7.22386 1 7.5 1H10.5C10.7761 1 11 1.22386 11 1.5V4.5C11 4.77614 10.7761 5 10.5 5C10.2239 5 10 4.77614 10 4.5V2.70711L7.35355 5.35355C7.15829 5.54882 6.84171 5.54882 6.64645 5.35355C6.45118 5.15829 6.45118 4.84171 6.64645 4.64645L9.29289 2H7.5ZM4.64645 6.64645C4.84171 6.45118 5.15829 6.45118 5.35355 6.64645C5.54882 6.84171 5.54882 7.15829 5.35355 7.35355L2.70711 10H4.5C4.77614 10 5 10.2239 5 10.5C5 10.7761 4.77614 11 4.5 11H1.5C1.22386 11 1 10.7761 1 10.5V7.5C1 7.22386 1.22386 7 1.5 7C1.77614 7 2 7.22386 2 7.5V9.29289L4.64645 6.64645Z" fill="black"/>
</svg>`}function rY(e){return()=>e`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.1464 1.14645C10.3417 0.951184 10.6583 0.951184 10.8536 1.14645C11.0488 1.34171 11.0488 1.65829 10.8536 1.85355L8.20711 4.5H10C10.2761 4.5 10.5 4.72386 10.5 5C10.5 5.27614 10.2761 5.5 10 5.5H7C6.72386 5.5 6.5 5.27614 6.5 5V2C6.5 1.72386 6.72386 1.5 7 1.5C7.27614 1.5 7.5 1.72386 7.5 2V3.79289L10.1464 1.14645ZM1.5 7C1.5 6.72386 1.72386 6.5 2 6.5H5C5.27614 6.5 5.5 6.72386 5.5 7V10C5.5 10.2761 5.27614 10.5 5 10.5C4.72386 10.5 4.5 10.2761 4.5 10V8.20711L1.85355 10.8536C1.65829 11.0488 1.34171 11.0488 1.14645 10.8536C0.951184 10.6583 0.951184 10.3417 1.14645 10.1464L3.79289 7.5H2C1.72386 7.5 1.5 7.27614 1.5 7Z" fill="black"/>
</svg>`}function rQ(e){return()=>e.html`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.20544 6.45505C5.36816 6.29233 5.63198 6.29233 5.7947 6.45505L8.00007 8.66042L10.2054 6.45505C10.3682 6.29233 10.632 6.29233 10.7947 6.45505C10.9574 6.61777 10.9574 6.88158 10.7947 7.0443L8.2947 9.5443C8.13198 9.70702 7.86816 9.70702 7.70544 9.5443L5.20544 7.0443C5.04272 6.88158 5.04272 6.61777 5.20544 6.45505Z" fill="#151472"/>
</svg>`}function rK(e){return()=>e.html`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70541 6.45505C7.86813 6.29233 8.13195 6.29233 8.29467 6.45505L10.7947 8.95505C10.9574 9.11776 10.9574 9.38158 10.7947 9.5443C10.632 9.70702 10.3681 9.70702 10.2054 9.5443L8.00004 7.33893L5.79467 9.5443C5.63195 9.70702 5.36813 9.70702 5.20541 9.5443C5.04269 9.38158 5.04269 9.11776 5.20541 8.95505L7.70541 6.45505Z" fill="#151472"/>
</svg>
`}function r0(e){return e`## Scatterplot`}function r1(){return 0}function r2(e,t){let i=e?496:286;t.value.width=i,t.value.height=3*i/4,t.value=t.value}function r5(e,t){return t}function r3(e){return e`## Tooltip`}function r4(e){return e`
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
</style>`}function r6(e){return e[0]}function r8(e,t){return(i,n)=>{let a=e.scaleThreshold(n.thresholds,n.range),r=a(i),o=(a.range().indexOf(r)+1).toString();var l=t`<p><span class="title">${n.name}</span><span class="label">${n.labelTooltip}</span><span class="value">${e.format(".3r")(i).replace(/\./g,",")}</span></p>
<table>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>`;return e.select(l).selectAll("td:nth-child("+o+")").style("background",r),l.outerHTML}}function r7(e,t,i,n,a,r,o){return l=>{let s=e.format(","),d=t.get(l.properties.codarea.slice(0,-1));return`
    <div class="tooltip">
    <h1>${d.municipio.nome} <span>${d.municipio.uf}</span></h1>
    <h2>${s(i.get(l.properties.codarea)).replace(/,/g,".")} habitantes</h2>
    ${n(a.field(d),a)}
    ${n(r.field(d),r)}
    ${n(o.field(d),o)}
    </div>
`}}function r9(e,t){t.updateSelected()}function oe(e){return e({selector:"h2",heading:"Ir para:"})}function ot(e){return e`## Funções`}function oi(e){return(t,i,n)=>{let a=e.select(t).selectAll("circle");return a.on("mouseover",function(){e.select(this).attr("stroke","black"),i(e.select(this).data())}),a.on("mouseleave",function(){e.select(this).attr("stroke","none"),n(e.select(this).data())}),t}}function on(e){return e`## Dados`}function oa(e){return e("baixopeso-mun-ano.csv").csv()}function or(e){return e("pm25-mun-ano.csv").csv()}function oo(e){return e("malhabrasil.json").json()}function ol(e,t,i){let n=e(t.feature(i,i.objects.foo),!0);for(let a of n.features){let r=a.properties.centroide;if(0==r[0]&&0==r[1]){let o=a.geometry.coordinates.flat(4);r[0]=o[0],r[1]=o[1]}}return n}function os(e){return e("ufnomes.json").json()}function od(e){return e("municipios.csv").csv()}function oc(e){return new Map(e.map(e=>[e["C\xf3digo Munic\xedpio Completo"],e]))}function ou(e){return new Map(e.map(e=>[e.properties.codarea.slice(0,6),e]))}function of(e){return t=>e.get(t).properties.codarea}function op(e){return e("populacao_municipio_2018.csv").csv()}function om(e){return new Map(e.map(e=>[e.municipio,+e.populacao]))}function oh(e,t){return e.extent(t.values())}function ov(e,t){return new Map(e.filter(e=>e.ANO==t).sort(function(e,t){return t.BAIXO_PESO/t.TOTAL-e.BAIXO_PESO/e.TOTAL}).map((e,t)=>[e.CODMUNRES,["0"==e.TOTAL?0:e.BAIXO_PESO/e.TOTAL,t,e.TOTAL]]))}function ob(e,t){return new Map(e.filter(e=>e.ANO==t).map(e=>[e.CODMUNRES,e.TOTAL]))}function og(e,t){return new Map(e.filter(e=>e.ANO==t).map(e=>[e.CODMUNRES,e]))}function ox(e){return e.map(function(e){return 1e3*e.BAIXO_PESO/e.TOTAL})}function oy(e){return e.map(function(e){return parseFloat(e.AVG_PM25)})}function ow(e){return e.map(function(e){return 1e3*e.OBITOS_PERINATAIS/e.TOTAL}).filter(e=>0!==e)}function oA(e){return e.map(function(e){return 1e3*e.OBITOS_NEONATAIS/e.TOTAL}).filter(e=>0!==e)}function o_(e){return e.map(function(e){return e.OBITOS_TOTAIS})}function oC(e){return e.map(function(e){return 1e3*e.OBITOS_INFANTIS/e.TOTAL}).filter(e=>0!==e)}function oE(e){return e.map(function(e){return e.IDH})}function oS(e,t){return e(t)}function ok(e){return function(t){return{limits:e.extent(t.values()),quantiles:[e.quantile(t,.25),e.quantile(t,.5),e.quantile(t,.75),e.quantile(t,1)]}}}function oT(e,t){return e(t).quantiles}function oO(e,t){return e(t)}function oI(e,t){return e(t)}function oM(e,t){return e(t).quantiles}function oD(e,t){return e(t)}function oN(e,t){return e(t)}function oL(e,t,i,n,a){return function(){return e.features.map(e=>{let r=t.get(e.properties.codarea);return{pos:[e.x,e.y],centroid:i(e.properties.centroide),id:+e.properties.codarea,name:r.Nome_Município,idRegion:+r.UF,regionName:r.Nome_UF,radius:n(a.get(e.properties.codarea))}})}}function oR(e){return e`## Geo`}function oP(){return 1152}function oF(e,t,i){return e.geoMercator().fitWidth(t,i)}function oB(e,t){return e.geoPath(t)}function oU(e,t){return e.bounds(t)}function o$(e){let[[t,i],[n,a]]=e;return Math.abs((n-t)/(a-i))}function oj(e){return e`## Escalas`}function oz(e,t){return e.scaleThreshold(t.thresholds,t.range)}function oG(e,t,i,n,a){let r=t(i,{width:280,title:n.label,tickSize:0});return a.select(r).selectAll("text").style("font-family","Roboto Condensed"),a.select(r).selectAll(".tick").selectAll("line").style("stroke","white"),a.select(r).selectAll(".tick").selectAll("text").style("color","#C4C4C4"),r}function oH(e){return e.scaleOrdinal(e.range(27),e.schemeDark2)}function oV(){return 24}function oq(e,t){return e.scaleSqrt().domain(t).range([1.5,24])}function oW(e,t){return e().tickValues([1e5,1e6,1e7]).tickFormat((e,t,i)=>{let n=e>=1e6?`${e/1e6} M`:`${e/1e3} m`,a=t===i.length-1?" habitantes":"";return`${n}${a}`}).scale(t)}function oZ(e){return e`## Simulação física para o cartograma de Dorling`}async function oX(e,t,i,n,a,r,o){return await e("posicoesFinais@1.json").json()}function oJ(e){return e`## Dependências e Imports`}function oY(e){return e("d3@6").then(e=>(e.formatLocale({decimal:",",thousands:"\xa0"}),e))}function oQ(e){return e("d3-tip")}function oK(e){return e("https://bundle.run/@mapbox/geojson-rewind@0.5.0")}function o0(e){return e("topojson-client@3")}function o1(e){return e`### Componentes de input`}function o2(e,t,i,n,a,r,o,l,s){return s.html`${e}
${t}
${i}
${n}
${a}
${r}
${o}
${l}`}function o5(e,t){let n=e.module();function a(){return this.url}let r=new Map([["posicoesFinais@1.json",{url:new i.U(i(5645)),mimeType:"application/json",toString:a}],["populacao_municipio_2018.csv",{url:new i.U(i(2849)),mimeType:"text/csv",toString:a}],["municipios.csv",{url:new i.U(i(8825)),mimeType:"text/csv",toString:a}],["ufnomes.json",{url:new i.U(i(9359)),mimeType:"application/json",toString:a}],["malhabrasil.json",{url:new i.U(i(5585)),mimeType:"application/json",toString:a}],["pm25-mun-ano.csv",{url:new i.U(i(2673)),mimeType:"text/csv",toString:a}],["baixopeso-mun-ano.csv",{url:new i.U(i(8227)),mimeType:"text/csv",toString:a}]]);n.builtin("FileAttachment",e.fileAttachments(e=>r.get(e))),n.variable(t()).define(["md"],aN),n.variable(t("helpButton")).define("helpButton",["helpToggle","helpData"],aL),n.variable(t("mainWindow")).define("mainWindow",["htl"],aR),n.variable(t()).define(["md"],aP),n.variable(t("helpData")).define("helpData",["d3"],aF),n.variable(t()).define(["Inputs","helpData"],aB),n.variable(t("viewof interfaceToggle")).define("viewof interfaceToggle",["Inputs"],aU),n.variable(t("interfaceToggle")).define("interfaceToggle",["Generators","viewof interfaceToggle"],(e,t)=>e.input(t)),n.define("initial biglayoutToggle",a$),n.variable(t("mutable biglayoutToggle")).define("mutable biglayoutToggle",["Mutable","initial biglayoutToggle"],(e,t)=>new e(t)),n.variable(t("biglayoutToggle")).define("biglayoutToggle",["mutable biglayoutToggle"],e=>e.generator),n.define("initial filtrarPorRolldownToggle",aj),n.variable(t("mutable filtrarPorRolldownToggle")).define("mutable filtrarPorRolldownToggle",["Mutable","initial filtrarPorRolldownToggle"],(e,t)=>new e(t)),n.variable(t("filtrarPorRolldownToggle")).define("filtrarPorRolldownToggle",["mutable filtrarPorRolldownToggle"],e=>e.generator),n.variable(t("clearMainWindow")).define("clearMainWindow",["interfaceToggle","width","mainWindow","biglayoutToggle","filtrarPorRolldownToggle"],az),n.variable(t("panel")).define("panel",["clearMainWindow","mainWindow"],aG),n.variable(t("populate")).define("populate",["interfaceToggle","panel","htl","viewof munSelecionados","viewof ano","viewof colorSelect","legendaEscalaCores","biglayoutToggle","rankingBarChartContents","viewof yAxisSelect","viewof xAxisSelect","makeReduceIcon","makeEnlargeIcon","mutable biglayoutToggle","scatterplotComponent","filtrarPorRolldownToggle","makeRollUpIcon","makeRollDownIcon","mutable filtrarPorRolldownToggle","painelFiltros"],aH),n.variable(t("afterInitialLayout")).define("afterInitialLayout",["populate","panel","mutable remakeMapa"],aV),n.variable(t("populateMapa")).define("populateMapa",["interfaceToggle","panel","viewof dorling"],aq),n.define("initial remakeMapa",aW),n.variable(t("mutable remakeMapa")).define("mutable remakeMapa",["Mutable","initial remakeMapa"],(e,t)=>new e(t)),n.variable(t("remakeMapa")).define("remakeMapa",["mutable remakeMapa"],e=>e.generator),n.variable(t()).define(["md"],aZ),n.variable(t("storageUpdate")).define("storageUpdate",["sessionStorage","munSelecionados"],aX),n.variable(t("initialStorageLoad")).define("initialStorageLoad",["sessionStorage"],aJ),n.variable(t("initialLoad")).define("initialLoad",["sessionStorage","viewof munSelecionados"],aY),n.variable(t()).define(["md"],aQ),n.variable(t()).define(["md"],aK),n.variable(t("viewof ano")).define("viewof ano",["sliderbase"],a0),n.variable(t("ano")).define("ano",["Generators","viewof ano"],(e,t)=>e.input(t)),n.variable(t()).define(["md"],a1),n.variable(t("viewof filtroIDH")).define("viewof filtroIDH",["interfaceToggle","sliderArray","sliderRangeBase"],a2),n.variable(t("filtroIDH")).define("filtroIDH",["Generators","viewof filtroIDH"],(e,t)=>e.input(t)),n.variable(t("filtroIDHDrawer")).define("filtroIDHDrawer",["aDrawer","viewof filtroIDH"],a5),n.variable(t()).define(["md"],a3),n.variable(t("viewof filtroNascimentos")).define("viewof filtroNascimentos",["interfaceToggle","sliderArray","sliderRangeBase"],a4),n.variable(t("filtroNascimentos")).define("filtroNascimentos",["Generators","viewof filtroNascimentos"],(e,t)=>e.input(t)),n.variable(t("filtroNascimentosDrawer")).define("filtroNascimentosDrawer",["aDrawer","viewof filtroNascimentos"],a6),n.variable(t()).define(["md"],a8),n.variable(t("viewof filtroPoluicao")).define("viewof filtroPoluicao",["interfaceToggle","sliderArray","sliderRangeBase"],a7),n.variable(t("filtroPoluicao")).define("filtroPoluicao",["Generators","viewof filtroPoluicao"],(e,t)=>e.input(t)),n.variable(t("filtroPoluicaoDrawer")).define("filtroPoluicaoDrawer",["aDrawer","viewof filtroPoluicao"],a9),n.variable(t()).define(["md"],re),n.variable(t("viewof filtroBaixoPeso")).define("viewof filtroBaixoPeso",["interfaceToggle","sliderArray","sliderRangeBase"],rt),n.variable(t("filtroBaixoPeso")).define("filtroBaixoPeso",["Generators","viewof filtroBaixoPeso"],(e,t)=>e.input(t)),n.variable(t("filtroBaixoPesoDrawer")).define("filtroBaixoPesoDrawer",["aDrawer","viewof filtroBaixoPeso"],ri),n.variable(t()).define(["md"],rn),n.variable(t()).define(["md"],ra),n.variable(t("viewof filtroMortPerinatal")).define("viewof filtroMortPerinatal",["interfaceToggle","sliderArray","sliderRangeBase"],rr),n.variable(t("filtroMortPerinatal")).define("filtroMortPerinatal",["Generators","viewof filtroMortPerinatal"],(e,t)=>e.input(t)),n.variable(t("filtroMortPerinatalDrawer")).define("filtroMortPerinatalDrawer",["aDrawer","viewof filtroMortPerinatal"],ro),n.variable(t()).define(["md"],rl),n.variable(t("viewof filtroMortNeonatal")).define("viewof filtroMortNeonatal",["interfaceToggle","sliderArray","sliderRangeBase"],rs),n.variable(t("filtroMortNeonatal")).define("filtroMortNeonatal",["Generators","viewof filtroMortNeonatal"],(e,t)=>e.input(t)),n.variable(t("filtroMortNeonatalDrawer")).define("filtroMortNeonatalDrawer",["aDrawer","viewof filtroMortNeonatal"],rd),n.variable(t()).define(["md"],rc),n.variable(t("viewof filtroMortInfantil")).define("viewof filtroMortInfantil",["interfaceToggle","sliderArray","sliderRangeBase"],ru),n.variable(t("filtroMortInfantil")).define("filtroMortInfantil",["Generators","viewof filtroMortInfantil"],(e,t)=>e.input(t)),n.variable(t("filtroMortInfatilDrawer")).define("filtroMortInfatilDrawer",["aDrawer","viewof filtroMortInfantil"],rf),n.variable(t()).define(["md"],rp),n.variable(t("viewof filtroRegiao")).define("viewof filtroRegiao",["interfaceToggle","aSelect"],rm),n.variable(t("filtroRegiao")).define("filtroRegiao",["Generators","viewof filtroRegiao"],(e,t)=>e.input(t)),n.variable(t("filtroRegiaoDrawer")).define("filtroRegiaoDrawer",["aDrawer","html","viewof filtroRegiao"],rh),n.variable(t("viewof filtroEstado")).define("viewof filtroEstado",["interfaceToggle","aSelect","ufnome"],rv),n.variable(t("filtroEstado")).define("filtroEstado",["Generators","viewof filtroEstado"],(e,t)=>e.input(t)),n.variable(t("filtroEstadoDrawer")).define("filtroEstadoDrawer",["aDrawer","html","viewof filtroEstado"],rb),n.variable(t("viewof filtroRegSaude")).define("viewof filtroRegSaude",["interfaceToggle","codigoToRegiaoSaude","aSelect"],rg),n.variable(t("filtroRegSaude")).define("filtroRegSaude",["Generators","viewof filtroRegSaude"],(e,t)=>e.input(t)),n.variable(t("filtroRegSaudeDrawer")).define("filtroRegSaudeDrawer",["aDrawer","html","viewof filtroRegSaude"],rx),n.variable(t()).define(["md"],ry),n.variable(t("painelFiltros")).define("painelFiltros",["interfaceToggle","htl","filtroNascimentosDrawer","filtroRegiaoDrawer","filtroEstadoDrawer","filtroRegSaudeDrawer","filtroPoluicaoDrawer","filtroBaixoPesoDrawer","filtroMortPerinatalDrawer","filtroMortNeonatalDrawer","filtroMortInfatilDrawer","filtroIDHDrawer"],rw),n.variable(t()).define(["md"],rA),n.variable(t("allFilters")).define("allFilters",["filtroRegiao","ufnome","filtroEstado","filtroNascimentos","filtroPoluicao","filtroBaixoPeso","filtroMortPerinatal","filtroMortNeonatal","filtroMortInfantil","filtroIDH","ano","mutable dataFilter"],r_),n.variable(t()).define(["md"],rC),n.variable(t("viewof colorSelect")).define("viewof colorSelect",["interfaceToggle","aSelect","variables"],rE),n.variable(t("colorSelect")).define("colorSelect",["Generators","viewof colorSelect"],(e,t)=>e.input(t)),n.variable(t("color")).define("color",["mutable colorVar","variables","colorSelect"],rS),n.variable(t("viewof xAxisSelect")).define("viewof xAxisSelect",["interfaceToggle","aSelect","variables"],rk),n.variable(t("xAxisSelect")).define("xAxisSelect",["Generators","viewof xAxisSelect"],(e,t)=>e.input(t)),n.variable(t("xaxis")).define("xaxis",["mutable xAxisVar","variables","xAxisSelect"],rT),n.variable(t("viewof yAxisSelect")).define("viewof yAxisSelect",["interfaceToggle","aSelect","variables"],rO),n.variable(t("yAxisSelect")).define("yAxisSelect",["Generators","viewof yAxisSelect"],(e,t)=>e.input(t)),n.variable(t("yaxis")).define("yaxis",["mutable yAxisVar","variables","yAxisSelect"],rI),n.variable(t()).define(["md"],rM),n.variable(t("rankingBarChartContents")).define("rankingBarChartContents",["htl","visToggle","colorVar","biglayoutToggle","makeRollDownIcon","makeRollUpIcon","mutable biglayoutToggle","rankingBox","viewof visToggle","makeBarChartVis","munSelecionados","dadosMunicipio"],rD),n.variable(t()).define(["md"],rN),n.variable(t("normalizeString")).define("normalizeString",rL),n.define("initial unknownData",rR),n.variable(t("mutable unknownData")).define("mutable unknownData",["Mutable","initial unknownData"],(e,t)=>new e(t)),n.variable(t("unknownData")).define("unknownData",["mutable unknownData"],e=>e.generator),n.variable(t()).define(["colorVar"],rP),n.variable(t("filteredData")).define("filteredData",["mutable unknownData","dadosMunicipio","allFilters","codigoToMunicipio","colorVar","normalizeString"],rF),n.variable(t()).define(["makeDownloadData"],rB),n.variable(t("makeDownloadData")).define("makeDownloadData",["dadosMunicipio","allFilters"],rU),n.variable(t("rankStyles")).define("rankStyles",["htl"],r$),n.variable(t("rankingBox")).define("rankingBox",["interfaceToggle","htl","colorVar","aText","escalaCores","d3","alteraMenuLocalidade","filteredData","normalizeString","html"],rj),n.variable(t()).define(["md"],rz),n.variable(t("dorlingStyles")).define("dorlingStyles",["html"],rG),n.variable(t("viewof dorling")).define("viewof dorling",["interfaceToggle","remakeMapa","limites","panel","mutable filtrarPorRolldownToggle","html","zoomInIcon","zoomOutIcon","d3","posicoesFinais","d3tip","tooltip","viewof munSelecionados","posicoesPorCod","flagPath","municipios","alteraMenuLocalidade"],rH),n.variable(t("dorling")).define("dorling",["Generators","viewof dorling"],(e,t)=>e.input(t)),n.define("initial debug",rV),n.variable(t("mutable debug")).define("mutable debug",["Mutable","initial debug"],(e,t)=>new e(t)),n.variable(t("debug")).define("debug",["mutable debug"],e=>e.generator),n.variable(t("dorlingCircleConf")).define("dorlingCircleConf",["viewof dorling","dadosPorCodigo","d3","allFilters","raio","populacaoPorCodigo","escalaCores","colorVar"],rq),n.variable(t()).define(["md"],rW),n.variable(t("zoomInIcon")).define("zoomInIcon",["html"],rZ),n.variable(t("zoomOutIcon")).define("zoomOutIcon",["html"],rX),n.variable(t("makeEnlargeIcon")).define("makeEnlargeIcon",["html"],rJ),n.variable(t("makeReduceIcon")).define("makeReduceIcon",["html"],rY),n.variable(t("makeRollDownIcon")).define("makeRollDownIcon",["htl"],rQ),n.variable(t("makeRollUpIcon")).define("makeRollUpIcon",["htl"],rK),n.variable(t()).define(["md"],r0),n.define("initial TESTE",r1),n.variable(t("mutable TESTE")).define("mutable TESTE",["Mutable","initial TESTE"],(e,t)=>new e(t)),n.variable(t("TESTE")).define("TESTE",["mutable TESTE"],e=>e.generator),n.variable(t("updateScatterConfig")).define("updateScatterConfig",["biglayoutToggle","mutable scatterConfig"],r2),n.variable(t("scatterplotComponent")).define("scatterplotComponent",["interfaceToggle","scatterplot"],r5),n.variable(t()).define(["md"],r3),n.variable(t("styles")).define("styles",["html"],r4),n.variable(t()).define(["dadosMunicipio"],r6),n.variable(t("ttipScale")).define("ttipScale",["d3","html"],r8),n.variable(t("tooltip")).define("tooltip",["d3","dadosPorCodigo","populacaoPorCodigo","ttipScale","colorVar","yAxisVar","xAxisVar"],r7),n.variable(t("reactToMunSelecionados")).define("reactToMunSelecionados",["munSelecionados","viewof dorling"],r9),n.variable(t()).define(["toc"],oe),n.variable(t()).define(["md"],ot),n.variable(t("hoverInteraction")).define("hoverInteraction",["d3"],oi),n.variable(t()).define(["md"],on),n.variable(t("baixopesoMunAno")).define("baixopesoMunAno",["FileAttachment"],oa),n.variable(t("pm25MunAno")).define("pm25MunAno",["FileAttachment"],or),n.variable(t("malhaBrasil")).define("malhaBrasil",["FileAttachment"],oo),n.variable(t("feicoesMunicipio")).define("feicoesMunicipio",["rewind","topojson","malhaBrasil"],ol),n.variable(t("ufnome")).define("ufnome",["FileAttachment"],os),n.variable(t("municipioInfo")).define("municipioInfo",["FileAttachment"],od),n.variable(t("municipioPorCodigo")).define("municipioPorCodigo",["municipioInfo"],oc),n.variable(t("posicoesPorCod")).define("posicoesPorCod",["posicoesFinais"],ou),n.variable(t("codToCodarea")).define("codToCodarea",["posicoesPorCod"],of),n.variable(t("populacaoMunicipio")).define("populacaoMunicipio",["FileAttachment"],op),n.variable(t("populacaoPorCodigo")).define("populacaoPorCodigo",["populacaoMunicipio"],om),n.variable(t("populacaoLimites")).define("populacaoLimites",["d3","populacaoPorCodigo"],oh),n.variable(t("bpPorCodigo")).define("bpPorCodigo",["baixopesoMunAno","ano"],ov),n.variable(t("totalPorCodigo")).define("totalPorCodigo",["baixopesoMunAno","ano"],ob),n.variable(t("dadosPorCodigo")).define("dadosPorCodigo",["dadosMunicipio","ano"],og),n.variable(t("bp")).define("bp",["dadosMunicipio"],ox),n.variable(t("AVGPM25")).define("AVGPM25",["dadosMunicipio"],oy),n.variable(t("obper")).define("obper",["dadosMunicipio"],ow),n.variable(t("obneo")).define("obneo",["dadosMunicipio"],oA),n.variable(t("obtotal")).define("obtotal",["dadosMunicipio"],o_),n.variable(t("obinf")).define("obinf",["dadosMunicipio"],oC),n.variable(t("idh")).define("idh",["dadosMunicipio"],oE),n.variable(t()).define(["valueAnalysis","idh"],oS),n.variable(t("valueAnalysis")).define("valueAnalysis",["d3"],ok),n.variable(t()).define(["valueAnalysis","obper"],oT),n.variable(t()).define(["valueAnalysis","obneo"],oO),n.variable(t()).define(["valueAnalysis","obinf"],oI),n.variable(t()).define(["valueAnalysis","bp"],oM),n.variable(t()).define(["valueAnalysis","AVGPM25"],oD),n.variable(t()).define(["valueAnalysis","AVGPM25"],oN),n.variable(t("getCircles")).define("getCircles",["feicoesMunicipio","municipioPorCodigo","projecao","raio","populacaoPorCodigo"],oL),n.variable(t()).define(["md"],oR),n.variable(t("larguraDefault")).define("larguraDefault",oP),n.variable(t("projecao")).define("projecao",["d3","larguraDefault","feicoesMunicipio"],oF),n.variable(t("funcaoPath")).define("funcaoPath",["d3","projecao"],oB),n.variable(t("limites")).define("limites",["funcaoPath","feicoesMunicipio"],oU),n.variable(t("razaoAspecto")).define("razaoAspecto",["limites"],o$),n.variable(t()).define(["md"],oj),n.variable(t("escalaCores")).define("escalaCores",["d3","colorVar"],oz),n.variable(t("legendaEscalaCores")).define("legendaEscalaCores",["interfaceToggle","Legend","escalaCores","colorVar","d3"],oG),n.variable(t("coresCirculos")).define("coresCirculos",["d3"],oH),n.variable(t("raioMax")).define("raioMax",oV),n.variable(t("raio")).define("raio",["d3","populacaoLimites"],oq),n.variable(t("legendaCirculos")).define("legendaCirculos",["legendCircle","raio"],oW),n.variable(t()).define(["md"],oZ),n.variable(t("posicoesFinais")).define("posicoesFinais",["FileAttachment","dadosMunicipio","feicoesMunicipio","projecao","d3","raio","populacaoPorCodigo"],oX),n.variable(t()).define(["md"],oJ);let o=e.module(y);n.import("helpToggle",o),n.import("helpBoxStyle",o),n.variable(t("d3")).define("d3",["require"],oY),n.variable(t("d3tip")).define("d3tip",["require"],oQ),n.variable(t("rewind")).define("rewind",["require"],oK),n.variable(t("topojson")).define("topojson",["require"],o0);let l=e.module(j);n.import("legend",l);let s=e.module(tH);n.import("checkbox",s);let d=e.module(tQ);n.import("legendCircle",d);let c=e.module(ie);n.import("toc",c);let u=e.module(iy);n.import("keys",u);let f=e.module(j);n.import("Legend",f);let p=e.module(nJ);n.import("scatterplot",p),n.import("municipios",p),n.import("dadosMunicipio",p),n.import("codigoToMunicipio",p),n.import("viewof munSelecionados",p),n.import("munSelecionados",p),n.import("variables",p),n.import("viewof limpar",p),n.import("limpar",p),n.import("flagPath",p),n.import("corMunNaoUsada",p),n.import("alteraMenuLocalidade",p),n.import("codigoToRegiaoSaude",p),n.import("mutable scatterConfig",p),n.import("scatterConfig",p),n.import("mutable dataFilter",p),n.import("dataFilter",p),n.import("mutable xAxisVar",p),n.import("xAxisVar",p),n.import("mutable yAxisVar",p),n.import("yAxisVar",p),n.import("mutable colorVar",p),n.import("colorVar",p);let m=e.module(aa);n.import("viewof visToggle",m),n.import("visToggle",m),n.import("makeBarChartVis",m),n.variable(t()).define(["md"],o1);let h=e.module(ay);n.import("aDrawer",h),n.import("aDrawerStyles",h);let v=e.module(ac);n.import("aSlider",v),n.import("aSliderStyles",v);let b=e.module(aD);n.import("aSelect",b),n.import("aText",b),n.import("aSelectStyles",b);let g=e.module(i4);return n.import("sliderbase",g),n.import("sliderArray",g),n.import("sliderRangeBase",g),n.import("style_slider",g),n.variable(t("allStyles")).define("allStyles",["aDrawerStyles","aSliderStyles","aSelectStyles","style_slider","rankStyles","styles","dorlingStyles","helpBoxStyle","htl"],o2),n}i.d(t,{Z:function(){return o5}})},7675:function(e,t,i){"use strict";function n(e){return e`# Amplia Saude - Fonte de Dados e Menu - AGO2022`}function a(e){return e`## Menu Amplia`}function r(e,t){return function(i,n){let a=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M7.87022 11.875L8.27489 11.5813L8.27479 11.5812L8.27437 11.5806L8.27271 11.5783L8.26613 11.5693L8.24029 11.5336L8.14075 11.3965L7.77298 10.8897L6.54497 9.19795C5.5772 7.86508 4.40312 6.24886 3.57783 5.11549C3.4851 4.9864 3.47887 4.82826 3.53937 4.69659C3.59954 4.56564 3.70401 4.5 3.81824 4.5H15.1818C15.296 4.5 15.4005 4.56564 15.4606 4.69659C15.5211 4.82825 15.5149 4.98637 15.4222 5.11546C14.5967 6.24906 13.4246 7.86547 12.4588 9.19836C11.9758 9.86506 11.5443 10.4609 11.2336 10.8901L10.8667 11.397L10.7674 11.5342L10.7416 11.5698L10.7351 11.5788L10.7334 11.5811L10.733 11.5817L10.7329 11.5818L11.1379 11.875L10.7329 11.5819L10.6379 11.7131V11.875V17.125C10.6379 17.363 10.4624 17.5 10.321 17.5H8.68715C8.54577 17.5 8.37022 17.363 8.37022 17.125V11.875V11.7127L8.27493 11.5814L7.87022 11.875Z" stroke="white"/>
<path d="M18.75 11.5C18.75 13.8472 16.8472 15.75 14.5 15.75C12.1528 15.75 10.25 13.8472 10.25 11.5C10.25 9.15279 12.1528 7.25 14.5 7.25C16.8472 7.25 18.75 9.15279 18.75 11.5Z" fill="white" stroke="#151472" stroke-width="0.5"/>
<path d="M16.8126 9.70565C16.9556 9.56262 16.9556 9.33072 16.8126 9.18769C16.6696 9.04466 16.4377 9.04466 16.2946 9.18769L14.5001 10.9822L12.7056 9.18769C12.5626 9.04466 12.3307 9.04466 12.1877 9.18769C12.0447 9.33072 12.0447 9.56262 12.1877 9.70565L13.9822 11.5001L12.1877 13.2946C12.0447 13.4377 12.0447 13.6696 12.1877 13.8126C12.3307 13.9556 12.5626 13.9556 12.7056 13.8126L14.5001 12.0181L16.2946 13.8126C16.4377 13.9556 16.6696 13.9556 16.8126 13.8126C16.9556 13.6696 16.9556 13.4377 16.8126 13.2946L15.0181 11.5001L16.8126 9.70565Z" fill="#151472"/>
</svg>`,r=`<svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8C2 6 2.39956 2 5.9956 2C11.2138 2 8.9923 8 12.9879 8C17.4829 8 16.9835 4 16.9835 2" stroke="#151472" stroke-width="3"/>
</svg>`,o=`<svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 7C1 5 1.39956 1 4.9956 1C10.2138 1 7.9923 7 11.9879 7C16.4829 7 15.9835 3 15.9835 1" stroke="#151472" stroke-width="1.5" stroke-dasharray="2.5 1"/>
</svg>`,l=0,s=Symbol(),d=Symbol(),c=Symbol();function u(a,r,o,u){r=r||"";let f=document.createElement("div"),m={},h={},v={};Object.defineProperty(m,"expression",{get(){let e={};for(let t in m){let i=m[t];"expression"!=t&&(e[i[0]]=i[1])}return e}}),Object.defineProperty(m,"urlids",{get(){let e=[];for(let t in v)e.push(v[t]);return e.join("")}});let b=document.createElement("div"),g=document.createElement("div"),x=document.createElement("div"),y=document.createElement("div"),w=document.createElement("div"),A=document.createElement("div");b.classList.add("menuAbas"),g.classList.add("abas"),y.classList.add("legenda"),x.classList.add("menuCompacto"),w.classList.add("background-1"),A.classList.add("background-2"),b.append(g),b.append(x),b.append(w),b.append(A),x.append(y),b.setAttribute("style",`--corFundoMenu: ${o};`),u&&b.classList.add("principal"),i.forEach((i,a)=>{!function(i,a,o){let u="m"+ ++l,p=document.createElement("div"),b=document.createElement("div"),g=document.createElement("div"),x=document.createElement("div"),y=document.createElement("div"),w=document.createElement("div"),A=document.createElement("div"),_=document.createElement("div"),C=o+2;m[a.varName]="",h[a.varName]="",v[a.varName]="";let E=[];function S(){p[d](),f.dispatchEvent(new t("input"))}p[d]=function(){let t=E.filter(e=>e.checked).map(t=>e(t.value)),i=E.filter(e=>e.checked).map(e=>e[c].expression),n=E.filter(e=>e.checked).map(e=>e[c].urlid);m[a.varName]=[a.attrIndex,i],v[a.varName]=n.join(""),t.length?b.classList.add("selecionado"):b.classList.remove("selecionado");let r=t.join(e(" ou "));y.innerHTML=r,y.setAttribute("title",r),h[a.varName]=r},p.classList.add("itemMenuCompacto"),p.classList.add(a.varName),b.classList.add("titulo"),b.innerHTML=e(a.title),x.classList.add("valoresSelecionados"),y.classList.add("textoValoresSelecionados"),w.classList.add("icone"),w.innerHTML="expand_more",p.append(b),g.append(x),p.append(g),x.append(w),x.append(y),A.classList.add("submenu"),A.style["grid-column"]=C+"/"+(C+1),_.classList.add("itens"),_.classList.add("i"+o),_.classList.add("ABA"+n),A.append(_),p[s]=A,p.style["grid-column-start"]=C,p.addEventListener("click",e=>{if(p.classList.contains("aberto"))p.classList.remove("aberto"),A.classList.remove("aberto");else{let t=p.parentNode.querySelector(".aberto");t&&(t.classList.remove("aberto"),t[s].classList.remove("aberto")),p.classList.add("aberto"),A.classList.add("aberto")}});let k=null;a.itens.forEach((t,i)=>{let n=document.createElement("div"),o=document.createElement("label"),l=document.createElement("input");o.innerHTML=e(t.name),o.setAttribute("for",u+i),l.setAttribute("type",a.input),l.setAttribute("value",t.name),r.indexOf(t.urlid)>=0&&l.setAttribute("checked","checked"),l.setAttribute("id",u+i),l.setAttribute("name","radio"===a.input?u:u+i),l[c]=t,n.classList.add("item"),n.append(l),n.append(o),_.append(n),E.push(l),l.addEventListener("input",e=>{e.stopPropagation(),S()}),"radio"==a.input&&l.addEventListener("click",e=>{if(e.target===k){e.target.checked=!1,k=null,S();return}k=e.target})}),i.append(p),i.append(A),p[d]()}(x,i,a)});let _=f.attachShadow({mode:"open"});return _.append(function(){let e=document.createElement("style");return e.textContent=`                  
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
      `,e}()),_.append(b),f.limpa=function(){let e=x.querySelectorAll("input:checked");for(let i=0;i<e.length;i++)e[i].checked=!1;let n=x.querySelectorAll(".itemMenuCompacto");for(let a=0;a<n.length;a++)n[a][d]();f.dispatchEvent(new t("input"))},f.cloneMenu=function(){let e=x.querySelectorAll("input:checked"),t=p(a),i=t.shadowRoot.querySelectorAll("input");for(let n=0;n<e.length;n++)for(let r=0;r<i.length;r++)e[n][c]===i[r][c]&&(i[r].checked=!0);let o=t.shadowRoot.querySelectorAll(".itemMenuCompacto");for(let l=0;l<o.length;l++)o[l][d]();return t},Object.defineProperty(f,"value",{get:()=>m}),Object.defineProperty(f,"texto",{get:()=>h}),[f,g,y]}function f(t,i,r){let o,l;if(o=document.createElement("div"),(l=document.createElement("span")).classList.add("tituloAba"),l.innerHTML=e(i),o.classList.add("aba"),o.appendChild(l),n===r){let s,d,c;o.classList.add("selecionada"),(c=document.createElement("div")).classList.add("limpaFiltro"),s=document.createElement("span"),d=document.createElement("span"),s.innerHTML=a,d.innerHTML=e("LIMPAR<br>FILTROS"),c.appendChild(s),c.appendChild(d),o.appendChild(c),c.addEventListener("click",e=>{t.limpa(),t.dispatchEvent(new CustomEvent("limparFiltros",{detail:{index:r+1}}))})}else o.addEventListener("click",e=>{t.dispatchEvent(new CustomEvent("aba",{detail:{index:r+1}}))});return o}function p(e,t,n){let[a,r,l]=u(null,t,n,!1),s=a.shadowRoot.querySelector(".menuCompacto");s.style["grid-template-columns"]=`110px repeat(${i.length},84px) 0px`,s.style.gap="2px",l.style["background-color"]="#ffffff66",l.style.color="var(--corFonte)",l.style["border-radius"]="0px 0px 0px 8px";let d=document.createElement("div"),c=document.createElement("div");return d.classList.add("titulo"),d.innerHTML="&nbsp",c.classList.add("icone"),c.innerHTML=o,l.append(d),l.append(c),a}return{principal:function(t){let[i,n,a]=u(null,t,"#E5E5E5",!0);n.append(f(i,"NASCIDOS VIVOS",0)),n.append(f(i,"CARACTER\xcdSTICAS DO NASCIMENTO",1)),n.append(f(i,"MORTALIDADE PERINATAL E INFANTIL",2));let o=document.createElement("div"),l=document.createElement("div");return o.classList.add("titulo"),l.classList.add("icone"),l.innerHTML=r,o.innerHTML=e("CONSULTA<br>PRINCIPAL"),a.append(o),a.append(l),i},local:p}}}function o(e){return e`### Nascidos Vivos`}function l(e){return e.principal()}function s(){return[{title:"PESO AO<br>NASCER",varName:"PESO",ordinal:!0,input:"checkbox",attrIndex:0,itens:[{name:"Normal",style:[],expression:[3],urlid:"A"},{name:"Baixo peso",style:["alta-influencia"],expression:[2],urlid:"B"},{name:"Muito baixo peso",style:["alta-influencia"],expression:[1],urlid:"C"},{name:"Ignorado",style:[],expression:[0],urlid:"D"}]},{title:"IDADE<br>GESTACIONAL",varName:"IDADE_GESTACIONAL",ordinal:!0,input:"checkbox",attrIndex:1,itens:[{name:"P\xf3s-termo",style:[],expression:[7],urlid:"E"},{name:"A termo tardio",style:[],expression:[6],urlid:"F"},{name:"A termo completo",style:[],expression:[5],urlid:"G"},{name:"A termo precoce",style:[],expression:[4],urlid:"H"},{name:"Pr\xe9-termo moderado",style:["alta-influencia"],expression:[3],urlid:"I"},{name:"Muito pr\xe9-termo",style:["alta-influencia"],expression:[2],urlid:"J"},{name:"Pr\xe9-termo extremo",style:["alta-influencia"],expression:[1],urlid:"K"},{name:"Ignorado",style:[],expression:[0],urlid:"L"}]},{title:"ADEQUA\xc7\xc3O \xc0<br>IDADE GESTAC.",varName:"ADEQ_IDADE_GESTACIONAL",ordinal:!0,input:"checkbox",attrIndex:2,itens:[{name:"GIG",style:[],expression:[3],urlid:"M"},{name:"AIG",style:["alta-influencia"],expression:[2],urlid:"N"},{name:"PIG",style:["alta-influencia"],expression:[1],urlid:"O"},{name:"Ignorado",style:[],expression:[0],urlid:"P"}]},{title:"SEXO",varName:"SEXO",ordinal:!1,input:"checkbox",attrIndex:3,itens:[{name:"Feminino",style:[],expression:[2],urlid:"Q"},{name:"Masculino",style:[],expression:[1],urlid:"R"},{name:"Indeterminado",style:[],expression:[0],urlid:"S"}]},{title:"ANOMALIA<br>CONG\xcaNITA",varName:"ANOMAL_CONGENITA",ordinal:!1,input:"radio",attrIndex:4,itens:[{name:"N\xe3o",style:[],expression:[2],urlid:"T"},{name:"Sim",style:["alta-influencia"],expression:[1],urlid:"U"},]},{title:"RA\xc7A/COR<br>DA M\xc3E",varName:"RACA_COR_MAE",ordinal:!1,input:"checkbox",attrIndex:5,itens:[{name:"Branca",style:[],expression:[1],urlid:"V"},{name:"Preta",style:[],expression:[2],urlid:"W"},{name:"Parda",style:[],expression:[4],urlid:"X"},{name:"Outros",style:[],expression:[3,4,5],urlid:"Y"},{name:"Ignorado",style:[],expression:[0],urlid:"Z"}]},{title:"ESCOLARIDADE<br>DA M\xc3E",varName:"ESCOLARIDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:6,itens:[{name:"Superior",style:[],expression:[7],urlid:"a"},{name:"Ensino m\xe9dio",style:[],expression:[6],urlid:"b"},{name:"Fundamental completo",style:[],expression:[5],urlid:"c"},{name:"Fundamental incompleto",style:[],expression:[4,3,2],urlid:"d"},{name:"Sem",style:[],expression:[1],urlid:"e"},{name:"Ignorado",style:[],expression:[0],urlid:"f"}]},{title:"ESTADO CIVIL<br>DA M\xc3E",varName:"ESTADO_CIVIL_MAE",ordinal:!1,input:"checkbox",attrIndex:7,itens:[{name:"Solteira",style:[],expression:[1],urlid:"g"},{name:"Casada ou uni\xe3o est\xe1vel",style:[],expression:[2],urlid:"h"},{name:"Vi\xfava",style:[],expression:[3],urlid:"i"},{name:"Separada ou divorcidada",style:[],expression:[4],urlid:"j"},{name:"Ignorado",style:[],expression:[0],urlid:"k"}]},{title:"IDADE<br>DA M\xc3E",varName:"IDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:8,itens:[{name:"10-14",style:[],expression:[1],urlid:"l"},{name:"15-19",style:[],expression:[2],urlid:"m"},{name:"20-29",style:[],expression:[3],urlid:"n"},{name:"30-39",style:[],expression:[4],urlid:"o"},{name:"40-49",style:["alta-influencia"],expression:[5],urlid:"p"},{name:"50+",style:["alta-influencia"],expression:[6],urlid:"q"},{name:"Ignorado",style:[],expression:[0],urlid:"r"}]},{title:"CONSULTAS<BR>DE PR\xc9 NATAL",varName:"CONSULTAS",ordinal:!0,input:"checkbox",attrIndex:9,itens:[{name:"7+",style:[],expression:[4],urlid:"s"},{name:"4 a 6",style:[],expression:[3],urlid:"t"},{name:"1 a 3",style:["alta-influencia"],expression:[2],urlid:"u"},{name:"0",style:["alta-influencia"],expression:[1],urlid:"v"},{name:"Ignorado",style:[],expression:[0],urlid:"w"}]},{title:"TIPO<br>PARTO",varName:"PARTO",ordinal:!1,input:"checkbox",attrIndex:10,itens:[{name:"Vaginal",style:[],expression:[1],urlid:"x"},{name:"Ces\xe1rio",style:[],expression:[2],urlid:"y"},{name:"Indeterminado",style:[],expression:[0],urlid:"z"}]},{title:"TRAB PARTO<br>INDUZIDO",varName:"STTRABPART",ordinal:!1,input:"radio",attrIndex:11,itens:[{name:"SIM",style:[],expression:[1],urlid:"9"},{name:"N\xc3O",style:[],expression:[2],urlid:"8"},]},{title:"ADEQUA\xc7\xc3O<br>PR\xc9 NATAL",varName:"KOTELCHUCK",ordinal:!0,input:"checkbox",attrIndex:12,itens:[{name:"N\xe3o fez",style:["alta-influencia"],expression:[1],urlid:"7"},{name:"Inadequado",style:["alta-influencia"],expression:[2],urlid:"6"},{name:"Intermedi\xe1rio",style:[],expression:[3],urlid:"5"},{name:"Adequado",style:[],expression:[4],urlid:"4"},{name:"Mais que adequado",style:[],expression:[5],urlid:"3"},{name:"Ignorado",style:[],expression:[0],urlid:"2"},]},]}function d(e,t){return e(t,0)}function c(e){return e`### Características do Nascimento`}function u(e){return e.principal()}function f(){return[{title:"PESO AO<br>NASCER",varName:"PESO",ordinal:!0,input:"checkbox",attrIndex:0,itens:[{name:"Normal",style:[],expression:[3],urlid:"A"},{name:"Baixo peso",style:["alta-influencia"],expression:[2],urlid:"B"},{name:"Muito baixo peso",style:["alta-influencia"],expression:[1],urlid:"C"},{name:"Ignorado",style:[],expression:[0],urlid:"D"}]},{title:"IDADE<br>GESTACIONAL",varName:"IDADE_GESTACIONAL",ordinal:!0,input:"checkbox",attrIndex:1,itens:[{name:"P\xf3s-termo",style:[],expression:[7],urlid:"E"},{name:"A termo tardio",style:[],expression:[6],urlid:"F"},{name:"A termo completo",style:[],expression:[5],urlid:"G"},{name:"A termo precoce",style:[],expression:[4],urlid:"H"},{name:"Pr\xe9-termo tardio",style:["alta-influencia"],expression:[3],urlid:"I"},{name:"Pr\xe9-termo moderado",style:["alta-influencia"],expression:[2],urlid:"J"},{name:"Muito pr\xe9-termo",style:["alta-influencia"],expression:[1],urlid:"K"},{name:"Ignorado",style:[],expression:[0],urlid:"L"}]},{title:"ADEQUA\xc7\xc3O \xc0<br>IDADE GESTAC.",varName:"ADEQ_IDADE_GESTACIONAL",ordinal:!0,input:"checkbox",attrIndex:2,itens:[{name:"GIG",style:[],expression:[3],urlid:"M"},{name:"AIG",style:["alta-influencia"],expression:[2],urlid:"N"},{name:"PIG",style:["alta-influencia"],expression:[1],urlid:"O"},{name:"Ignorado",style:[],expression:[0],urlid:"P"}]},{title:"SEXO",varName:"SEXO",ordinal:!1,input:"checkbox",attrIndex:3,itens:[{name:"Feminino",style:[],expression:[2],urlid:"Q"},{name:"Masculino",style:[],expression:[1],urlid:"R"},{name:"Indeterminado",style:[],expression:[0],urlid:"S"}]},{title:"ANOMALIA<br>CONG\xcaNITA",varName:"ANOMAL_CONGENITA",ordinal:!1,input:"radio",attrIndex:4,itens:[{name:"N\xe3o",style:[],expression:[2],urlid:"T"},{name:"Sim",style:["alta-influencia"],expression:[1],urlid:"U"},]},{title:"RA\xc7A/COR<br>DA M\xc3E",varName:"RACA_COR_MAE",ordinal:!1,input:"checkbox",attrIndex:5,itens:[{name:"Branca",style:[],expression:[1],urlid:"V"},{name:"Preta",style:[],expression:[2],urlid:"W"},{name:"Parda",style:[],expression:[4],urlid:"X"},{name:"Outros",style:[],expression:[3,4,5],urlid:"Y"},{name:"Ignorado",style:[],expression:[0],urlid:"Z"}]},{title:"ESCOLARIDADE<br>DA M\xc3E",varName:"ESCOLARIDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:6,itens:[{name:"Superior",style:[],expression:[7],urlid:"a"},{name:"Ensino m\xe9dio",style:[],expression:[6],urlid:"b"},{name:"Fundamental completo",style:[],expression:[5],urlid:"c"},{name:"Fundamental incompleto",style:[],expression:[4,3,2],urlid:"d"},{name:"Sem",style:[],expression:[1],urlid:"e"},{name:"Ignorado",style:[],expression:[0],urlid:"f"}]},{title:"ESTADO CIVIL<br>DA M\xc3E",varName:"ESTADO_CIVIL_MAE",ordinal:!1,input:"checkbox",attrIndex:7,itens:[{name:"Solteira",style:[],expression:[1],urlid:"g"},{name:"Casada ou uni\xe3o est\xe1vel",style:[],expression:[2],urlid:"h"},{name:"Vi\xfava",style:[],expression:[3],urlid:"i"},{name:"Separada ou divorcidada",style:[],expression:[4],urlid:"j"},{name:"Ignorado",style:[],expression:[0],urlid:"k"}]},{title:"IDADE<br>DA M\xc3E",varName:"IDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:8,itens:[{name:"10-14",style:[],expression:[1],urlid:"l"},{name:"15-19",style:[],expression:[2],urlid:"m"},{name:"20-29",style:[],expression:[3],urlid:"n"},{name:"30-39",style:[],expression:[4],urlid:"o"},{name:"40-49",style:["alta-influencia"],expression:[5],urlid:"p"},{name:"50+",style:["alta-influencia"],expression:[6],urlid:"q"},{name:"Ignorado",style:[],expression:[0],urlid:"r"}]},{title:"APGAR<BR>5\xba MINUTO",varName:"APGAR5",ordinal:!0,input:"checkbox",attrIndex:13,itens:[{name:"Boa vitalidade",style:[],expression:[3],urlid:"s"},{name:"Asfixia moderada",style:["alta-influencia"],expression:[2],urlid:"t"},{name:"Asfixia grave",style:["alta-influencia"],expression:[1],urlid:"u"},{name:"Ignorado",style:[],expression:[0],urlid:"v"}]},{title:"TIPO<br>PARTO",varName:"PARTO",ordinal:!1,input:"checkbox",attrIndex:10,itens:[{name:"Vaginal",style:[],expression:[1],urlid:"w"},{name:"Ces\xe1rio",style:[],expression:[2],urlid:"x"},{name:"Indeterminado",style:[],expression:[0],urlid:"y"}]},{title:"TRAB PARTO<br>INDUZIDO",varName:"STTRABPART",ordinal:!1,input:"radio",attrIndex:11,itens:[{name:"SIM",style:[],expression:[1],urlid:"z"},{name:"N\xc3O",style:[],expression:[2],urlid:"9"},]},{title:"ADEQUA\xc7\xc3O<br>PR\xc9 NATAL",varName:"KOTELCHUCK",ordinal:!0,input:"checkbox",attrIndex:12,itens:[{name:"N\xe3o fez",style:["alta-influencia"],expression:[1],urlid:"8"},{name:"Inadequado",style:["alta-influencia"],expression:[2],urlid:"7"},{name:"Intermedi\xe1rio",style:[],expression:[3],urlid:"6"},{name:"Adequado",style:[],expression:[4],urlid:"5"},{name:"Mais que adequado",style:[],expression:[5],urlid:"4"},{name:"Ignorado",style:[],expression:[0],urlid:"3"},]},]}function p(e,t){return e(t,1)}function m(e){return e`### Mortalidade Perinatal e infantil`}function h(e){return e.principal()}function v(){return[{title:"PESO AO<br>NASCER",varName:"PESO",ordinal:!0,input:"checkbox",attrIndex:1,itens:[{name:"Normal",style:[],expression:[3],urlid:"A"},{name:"Baixo peso",style:["alta-influencia"],expression:[2],urlid:"B"},{name:"Muito baixo peso",style:["alta-influencia"],expression:[1],urlid:"C"},{name:"Ignorado.",style:[],expression:[0],urlid:"D"}]},{title:"SEXO",varName:"SEXO",ordinal:!1,input:"checkbox",attrIndex:2,itens:[{name:"Feminino",style:[],expression:[2],urlid:"E"},{name:"Masculino",style:[],expression:[1],urlid:"F"},{name:"Indeterminado",style:[],expression:[0],urlid:"G"}]},{title:"RA\xc7A/COR",varName:"RACA_COR",ordinal:!1,input:"checkbox",attrIndex:3,itens:[{name:"Branca",style:[],expression:[1],urlid:"H"},{name:"Preta",style:[],expression:[2],urlid:"I"},{name:"Parda",style:[],expression:[4],urlid:"J"},{name:"Outros",style:[],expression:[3,4,5],urlid:"K"},{name:"Ignorado",style:[],expression:[0],urlid:"L"}]},{title:"ESCOLARIDADE<br>DA M\xc3E",varName:"ESCOLARIDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:4,itens:[{name:"Superior",style:[],expression:[7],urlid:"M"},{name:"Ensino m\xe9dio",style:[],expression:[6],urlid:"N"},{name:"Fundamental completo",style:[],expression:[5],urlid:"O"},{name:"Fundamental incompleto",style:[],expression:[4,3,2],urlid:"P"},{name:"Sem",style:[],expression:[1],urlid:"Q"},{name:"Ignorado",style:[],expression:[0],urlid:"R"}]},{title:"IDADE<br>DA M\xc3E",varName:"IDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:5,itens:[{name:"10-14",style:[],expression:[1],urlid:"S"},{name:"15-19",style:[],expression:[2],urlid:"T"},{name:"20-29",style:[],expression:[3],urlid:"U"},{name:"30-39",style:[],expression:[4],urlid:"V"},{name:"40-49",style:["alta-influencia"],expression:[5],urlid:"W"},{name:"50+",style:["alta-influencia"],expression:[6],urlid:"X"},{name:"Ignorado",style:[],expression:[0],urlid:"Y"}]},{title:"TIPO<br>PARTO",varName:"PARTO",ordinal:!1,input:"checkbox",attrIndex:6,itens:[{name:"Vaginal",style:[],expression:[1],urlid:"Z"},{name:"Ces\xe1rio",style:[],expression:[2],urlid:"a"},{name:"Indeterminado",style:[],expression:[0],urlid:"b"}]},]}function b(e,t){return e(t,2)}function g(e){return e`## DataSources`}function x(){return function(){let e="https://storage.googleapis.com/amplia/ufs2/",t=(e,t)=>e.data<t.data?-1:e.data>t.data?1:0,i=[2,3,2,2,2,3,3,3,3,3,2,2],n=[3,2,2],a=null;async function r(){return null!=a?a:await fetch(`${e}index.dat`).then(e=>e.arrayBuffer()).then(e=>a=new DataView(e))}async function o(e){let t=await r(),i=t.buffer.byteLength/12,n=0,a=i-1;for(;n<=a;){let o=Math.floor((n+a)/2),l=t.getUint32(12*o);if(e==l)return[t.getUint32(12*o+4),t.getUint32(12*o+8)];e<l?a=o-1:n=o+1}return null}function l(e,t,a,r){r=r||{};let o=(t+a)*11,l=e.getUint32(o).toString();l=l.substring(0,4)+"-"+l.substring(4,6)+"-"+l.substring(6);let s=e.getUint16(o+4),d=e.getUint32(o+6),c=e.getUint8(o+10),u=0,f=[];for(let p=0;p<i.length;p++){let m=((1<<i[p])-1<<u&d)>>u;f.push(m),u+=i[p]}u=0;for(let h=0;h<n.length;h++){let v=((1<<n[h])-1<<u&c)>>u;f.push(v),u+=n[h]}for(let b=0;b<f.length;b++){let g=f[b],x=r[b],y=!0;if(x&&x.length){y=!1;for(let w=0;w<x.length&&!y;w++)y=x[w].includes(g)}if(!y)return[l]}return[l,s,...f]}function s(t){let i=t;return i>1e5&&(i=Math.floor(t/1e4)),fetch(`${e}uf${i}.dat`).then(e=>e.arrayBuffer()).then(e=>new DataView(e)).then(async e=>{let i,n;return t>1e5?[n,i]=await o(t):(n=0,i=e.buffer.byteLength/11),[e,n,i]})}function d(e){let t={};if(e)for(let i in e)t[i]=e[i];return t}return{fetchTotal:function(e,i){return i=d(i),s(e).then(([e,n,a])=>(function(e,n,a){let r=new Map;for(let o=0;o<a;o++){let s=l(e,n,o,i),d=r.get(s[0]);d?d[1]++:(d=[0,1],r.set(s[0],d)),s.length>1&&d[0]++}let c=[],u=[];for(let[f,p]of r)c.push({data:f,valor:p[0]}),u.push({data:f,valor:p[1]});return c.sort(t),u.sort(t),[c,u]})(e,n,a))},fetchPIG:function(e,i){return i=d(i),s(e).then(([e,n,a])=>(function(e,n,a){let r=new Map;for(let o=0;o<a;o++){let s=l(e,n,o,i),d=r.get(s[0]);d?d[3]++:(d=[0,0,0,1],r.set(s[0],d)),s.length>1&&(1==s[4]?d[0]++:2==s[4]?d[1]++:3==s[4]&&d[2]++)}let c=[],u=[];for(let[f,p]of r)(p[0]||p[1]||p[2])&&(c.push({data:f,ig:"PEQUENO",total:p[0]}),c.push({data:f,ig:"ADEQUADO",total:p[1]}),c.push({data:f,ig:"GRANDE",total:p[2]})),u.push({data:f,valor:p[3]});return c.sort(t),u.sort(t),[c,u]})(e,n,a))},fetchPeso:function(e,i){return i=d(i),s(e).then(([e,n,a])=>(function(e,n,a){let r=new Map;for(let o=0;o<a;o++){let s=l(e,n,o,i);if(s.length>1){let d=r.get(s[0]);d?(d[0]+=s[1],d[1]++):(d=[s[1],1],r.set(s[0],d))}}let c=[];for(let[u,f]of r){let p={data:u,valor:f[0]/f[1],total:f[1]};c.push(p)}return c.sort(t),c})(e,n,a))},fetchRobson:function(e,i){return i=d(i),s(e).then(([e,n,a])=>(function(e,n,a){let r=new Map;for(let o=0;o<a;o++){let s=l(e,n,o,i),d=r.get(s[0]);d?d[3]++:(d=[0,0,0,1],r.set(s[0],d)),s.length>1&&(1==s[16]?d[0]++:2==s[16]?d[1]++:3==s[16]&&d[2]++)}let c=[],u=[];for(let[f,p]of r)(p[0]||p[1]||p[2])&&(c.push({data:f,robson:"Robson1a4",total:p[0]}),c.push({data:f,robson:"Robson5",total:p[1]}),c.push({data:f,robson:"Robson6a10",total:p[2]})),u.push({data:f,valor:p[3]});return c.sort(t),u.sort(t),[c,u]})(e,n,a))}}}()}function y(){return function(){let e="https://storage.googleapis.com/amplia/sim-ufs/",t=(e,t)=>e.data<t.data?-1:e.data>t.data?1:0,i=[2,2,2,3,3,3,2,2],n=null;async function a(){return null!=n?n:await fetch(`${e}index.dat`).then(e=>e.arrayBuffer()).then(e=>n=new DataView(e))}async function r(e){let t=await a(),i=t.buffer.byteLength/12,n=0,r=i-1;for(;n<=r;){let o=Math.floor((n+r)/2),l=t.getUint32(12*o);if(e==l)return[t.getUint32(12*o+4),t.getUint32(12*o+8)];e<l?r=o-1:n=o+1}return null}function o(e,t,n,a){a=a||{};let r=(t+n)*10,o=e.getUint32(r).toString();o=o.substring(0,4)+"-"+o.substring(4,6)+"-"+o.substring(6);let l=e.getUint16(r+4),s=e.getUint32(r+6),d=0,c=[];for(let u=0;u<i.length;u++){let f=((1<<i[u])-1<<d&s)>>d;c.push(f),d+=i[u]}for(let p=0;p<c.length;p++){let m=c[p],h=a[p],v=!0;if(h&&h.length){v=!1;for(let b=0;b<h.length&&!v;b++)v=h[b].includes(m)}if(!v)return[o]}return[o,l,...c]}function l(t){let i=t;return i>1e5&&(i=Math.floor(t/1e4)),fetch(`${e}uf${i}.dat`).then(e=>e.arrayBuffer()).then(e=>new DataView(e)).then(async e=>{let i,n;return t>1e5?[n,i]=await r(t):(n=0,i=e.buffer.byteLength/10),[e,n,i]})}function s(e){let t={};if(e)for(let i in e)t[i]=e[i];return t}return{fetchNeoNatal:function(e,i){return i=s(i),l(e).then(([e,n,a])=>(function(e,n,a){let r=new Map;for(let l=0;l<a;l++){let s=o(e,n,l,i),d=r.get(s[0]);d?d[3]++:(d=[0,0,0,1],r.set(s[0],d)),s.length>1&&(1==s[2]?d[0]++:2==s[2]?d[1]++:3==s[2]&&d[2]++)}let c=[],u=[];for(let[f,p]of r)(p[0]||p[1]||p[2])&&(c.push({data:f,neonatal:"PRECOCE",total:p[0]}),c.push({data:f,neonatal:"TARDIO",total:p[1]}),c.push({data:f,neonatal:"NEOTOTAL",total:p[0]+p[1]}),c.push({data:f,neonatal:"POS",total:p[2]})),u.push({data:f,valor:p[3]});return c.sort(t),u.sort(t),[c,u]})(e,n,a))},fetchFetal:function(e,i){return(i=s(i))[3]=[],l(e).then(([e,n,a])=>(function(e,n,a){let r=new Map;for(let l=0;l<a;l++){let s=o(e,n,l,i),d=r.get(s[0]);d?d[3]++:(d=[0,0,0,1],r.set(s[0],d)),s.length>1&&0==s[2]&&d[0]++}let c=[],u=[];for(let[f,p]of r)(p[0]||p[1]||p[2])&&c.push({data:f,valor:p[0]}),u.push({data:f,valor:p[3]});return c.sort(t),u.sort(t),[c,u]})(e,n,a))},fetchRelParto:function(e,i){return i=s(i),l(e).then(([e,n,a])=>(function(e,n,a){let r=new Map;for(let l=0;l<a;l++){let s=o(e,n,l,i),d=r.get(s[0]);d?d[3]++:(d=[0,0,0,1],r.set(s[0],d)),s.length>1&&(1==s[9]?d[0]++:2==s[9]?d[1]++:3==s[9]&&d[2]++)}let c=[],u=[];for(let[f,p]of r)(p[0]||p[1]||p[2])&&(c.push({data:f,relparto:"ANTES",total:p[0]}),c.push({data:f,relparto:"DURANTE",total:p[1]}),c.push({data:f,relparto:"DEPOIS",total:p[2]})),u.push({data:f,valor:p[3]});return c.sort(t),u.sort(t),[c,u]})(e,n,a))},fetchTotal:function(e,i){return i=s(i),l(e).then(([e,n,a])=>(function(e,n,a){let r=new Map;for(let l=0;l<a;l++){let s=o(e,n,l,i),d=r.get(s[0]);d?d[1]++:(d=[0,1],r.set(s[0],d)),s.length>1&&d[0]++}let c=[],u=[];for(let[f,p]of r)c.push({data:f,valor:p[0]}),u.push({data:f,valor:p[1]});return c.sort(t),u.sort(t),[c,u]})(e,n,a))}}}()}function w(e){return e`### Alguns testes com os datasources`}function A(e,t){return e.fetchRobson(11,t.expression)}function _(e,t){return e.fetchPeso(11,t.expression)}function C(e){return e("municipios2.csv").csv()}function E(e,t){return e.fetchRelParto(35,t.expression)}function S(e){return e.expression}function k(e,t){return e.fetchFetal(35,t.expression)}function T(){return new Set}function O(e){return function(t){return e.add(t),t}}function I(e){return e.html`<style>
  @import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap);
  @import url(https://fonts.googleapis.com/icon?family=Material+Icons);    
</style>`}function M(e,t){let M=e.module(),D=new Map([["municipios2.csv",{url:new i.U(i(2054)),mimeType:"text/csv",toString:function(){return this.url}}]]);return M.builtin("FileAttachment",e.fileAttachments(e=>D.get(e))),M.variable(t()).define(["md"],n),M.variable(t()).define(["md"],a),M.variable(t("ampliaMenu")).define("ampliaMenu",["TL","Event"],r),M.variable(t()).define(["md"],o),M.variable(t("mp")).define("mp",["menuNascidosVivos"],l),M.variable(t("dadosMenuNascidosVivos")).define("dadosMenuNascidosVivos",s),M.variable(t("menuNascidosVivos")).define("menuNascidosVivos",["ampliaMenu","dadosMenuNascidosVivos"],d),M.variable(t()).define(["md"],c),M.variable(t("viewof cn")).define("viewof cn",["menuCaracteristicasNascimento"],u),M.variable(t("cn")).define("cn",["Generators","viewof cn"],(e,t)=>e.input(t)),M.variable(t("dadosMenuCaracteristicasNascimento")).define("dadosMenuCaracteristicasNascimento",f),M.variable(t("menuCaracteristicasNascimento")).define("menuCaracteristicasNascimento",["ampliaMenu","dadosMenuCaracteristicasNascimento"],p),M.variable(t()).define(["md"],m),M.variable(t("viewof mpi")).define("viewof mpi",["menuMortalidade"],h),M.variable(t("mpi")).define("mpi",["Generators","viewof mpi"],(e,t)=>e.input(t)),M.variable(t("dadosMenuMortalidade")).define("dadosMenuMortalidade",v),M.variable(t("menuMortalidade")).define("menuMortalidade",["ampliaMenu","dadosMenuMortalidade"],b),M.variable(t()).define(["md"],g),M.variable(t("datasource")).define("datasource",x),M.variable(t("datasource_sim")).define("datasource_sim",y),M.variable(t()).define(["md"],w),M.variable(t()).define(["datasource","cn"],A),M.variable(t()).define(["datasource","cn"],_),M.variable(t("municipios2")).define("municipios2",["FileAttachment"],C),M.variable(t()).define(["datasource_sim","mpi"],E),M.variable(t()).define(["mpi"],S),M.variable(t()).define(["datasource_sim","mpi"],k),M.variable(t("terms")).define("terms",T),M.variable(t("TL")).define("TL",["terms"],O),M.variable(t()).define(["htl"],I),M}function D(e){return e`# Amplia Saúde - Trilhas Exploratórias - v6.0 - Mortalidade`}function N(e,t){return e?new t.principal(e.principalUrlids):new t.principal}function L(e,t,i){return e`
<div style="display:flex; width:100%; align-items:center; justify-content:space-between;">
<div>${t}</div><div>${i}</div>
</div>
`}function R(e,t,i,n,a,r,o){let l=document.createElement("div");for(let s=0;s<e.length;s++)l.append(t[e[s].variavel](e[s].i));return l.append(i()),n.create(l,{animation:150,handle:".drag",filter:".undraggable",onUpdate(t){let i=e[t.oldIndex];e.splice(t.oldIndex,1),e.splice(t.newIndex,0,i),a.value=e}}),r.select(l).selectAll("g[aria-label=x-axis] g.tick text").each(function(){let e=r.select(this),t=e.text();/[0-9]{4}/.test(t)&&e.style("font-size","14px").style("font-weight","700")}),o(),l}function P(){return 4}function F(e,t,i){return e?t(104,468,e.intervalo[0],e.intervalo[1]):t(104,468,i.intervalo[0],i.intervalo[1])}function B(e,t,i,n,a){return e`<!-- <label class="label-locais">LOCAIS </label> -->
${t.map((e,t)=>i(e,t))}${t.length<n?a:""}`}function U(e,t,i,n,a,r,o,l,s,d,c,u,f,p,m){return e.select(t`
<input list="menu-municipios-options" id="menu-municipios" placeholder="Adicione um local" class="caixa-municipio">
<datalist id="menu-municipios-options">
${i.map(e=>e.municipio).sort(Intl.Collator().compare).map(e=>`<option value="${e}">`)}
</datalist>
`).on("change",e=>{if(!i.map(e=>e.municipio).includes(document.getElementById("menu-municipios").value)&&!n.includes(document.getElementById("menu-municipios").value))return;let t=e.target.value;if(!(a.length==r||a.map(e=>e.nome).includes(t))){for(let h of(o.value=o.value.concat([{nome:t,cor:l.find(e=>!a.map(e=>e.cor).includes(e))}]),s.setItem("municipios",JSON.stringify(o.value)),d))"PM25"==h.variavel&&n.includes(t)||Promise.all([c[h.variavel](t,"PM25"!=h.variavel?u.value.expression:null)]).then(e=>{f.value=f.value.concat({idx:h.i,municipio:t,variavel:h.variavel,dados:p[h.variavel](e[0])})});for(let v of[...new Set(m.filter(e=>e.filtrado).map(e=>e.idx))])Promise.all([c[d.find(e=>e.i==v).variavel](t,d.find(e=>e.i==v).filtros.value.expression)]).then(e=>{f.value=f.value.concat({idx:v,municipio:t,variavel:m.find(e=>e.idx==v).variavel,filtrado:!0,dados:p[m.find(e=>e.idx==v).variavel](e[0])})})}}).node()}function $(e,t,i,n,a){return r=>{e.value.filter(e=>"PM25"!=e.variavel).forEach(e=>{t.value=t.value.filter(t=>t.idx!=e.i||t.filtrado),i.value.forEach(i=>{Promise.all([n[e.variavel](i.nome,r.target.value.expression)]).then(n=>{t.value=t.value.filter(t=>t.idx!=e.i||t.filtrado||t.municipio!=i.nome),t.value=t.value.concat({idx:e.i,municipio:i.nome,variavel:e.variavel,dados:a[e.variavel](n[0])})})})})}}function j(e,t,i,n,a,r,o,l){return(s,d)=>{let c=e.create("button").attr("class","btn-municipio").style("background-color",s.cor).style("display","inline-flex").style("align-items","flex-center").on("click",e=>{t.length>1&&(i.value=t.filter(e=>e!=s),n.setItem("municipios",JSON.stringify(i.value)),a.value=r.filter(e=>e.municipio!=s.nome))});return o.includes(s.nome)?c.append("span").text(s.nome):c.append("span").text(s.nome+(s.nome.includes("(")?"":" ("+l.find(e=>e.municipio==s.nome).sigla+")")),c.append("span").attr("class","material-icons-outlined").style("font-size","16px").style("margin-left","5px").style("display",1==t.length?"none":"inline").text("remove_circle_outline"),c.node()}}function z(e,t){return()=>e.create("button").attr("class","btn-remove").text("–").on("click",t).attr("title","Eliminar trilha").node()}function G(e,t){return()=>{let i=e.create("button").attr("class","btn-remove").on("click",t);return i.append("span").attr("class","material-icons-outlined").style("font-size","10px").text("content_copy"),i.attr("title","Duplicar trilha"),i.node()}}function H(e,t,i,n,a){return{PM25:e,NEONATAL:t,RELPARTO:i,FETAL:n,TOTAL:a}}function V(e,t,i,n,a){return{PM25:e,NEONATAL:t,TOTAL:i,FETAL:n,RELPARTO:a}}function q(e,t,i,n,a){return{PM25:e,NEONATAL:t,TOTAL:i,FETAL:n,RELPARTO:a}}function W(){return{PM25:"#F4947C",FETAL:"#DDD9FC",NEONATAL:"#FFD8FD",RELPARTO:"#FCEBD4",TOTAL:"#D9E7FC"}}function Z(){return{PM25:"#FDEEEA",FETAL:"#EEECFD",NEONATAL:"#FFEAFE",RELPARTO:"#FFF7ED",TOTAL:"#ECF4FF"}}function X(e){return e`
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
`}function J(e,t){return function(i){let n=i.scale("x"),a=i.scale("y"),r=e;"number"==typeof r&&(r=new Date(r));let o=new Date(r.getTime()),l=new Date(r.getTime());o.setDate(o.getDate()+154),l.setDate(l.getDate()+266);let s=n.apply(r),d=n.apply(o),c=n.apply(l);t.select(i).insert("rect","g[aria-label=rule]").attr("class","suscetibilidade").attr("x",d).attr("y",a.range[1]).attr("width",c-d).attr("height",a.range[0]-a.range[1]).attr("stroke-width","2px").attr("stroke","#F4947C").attr("fill","#FFFFFF00").style("cursor","grab"),t.select(i).insert("line","g[aria-label=rule]").attr("x1",s).attr("y1",a.range[1]).attr("x2",s).attr("y2",a.range[0]).attr("stroke-width","2px").attr("stroke","#F4947C"),t.select(i).insert("line","g[aria-label=rule]").attr("class","concepcao").attr("x1",s).attr("y1",a.range[1]).attr("x2",d).attr("y2",a.range[1]).attr("stroke-width","2px").attr("stroke","#F4947C"),t.select(i).append("text").attr("class","rotuloSuscetibilidade").text("CONCEP\xc7\xc3O").attr("x",s).attr("y",a.range[1]-3),t.select(i).append("text").attr("class","rotuloSuscetibilidade").text("22\xaa SEM").attr("x",d).attr("y",a.range[1]-3),t.select(i).append("text").attr("class","rotuloSuscetibilidade").text("38\xaa SEM").attr("x",c).attr("y",a.range[1]-3)}}function Y(e,t,i,n,a){return function(r,o,l,s="valor",d=null){function c(e){let t=document.createElementNS("http://www.w3.org/2000/svg","svg"),i=document.createElementNS("http://www.w3.org/2000/svg","path");return t.setAttribute("width","18"),t.setAttribute("height","8"),t.setAttribute("fill","none"),i.setAttribute("d","M1 7C1 5 1.39956 1 4.9956 1C10.2138 1 7.9923 7 11.9879 7C16.4829 7 15.9835 3 15.9835 1"),i.setAttribute("stroke","#151472"),e?(i.setAttribute("stroke-width","1.5"),i.setAttribute("stroke-dasharray","2.5 1")):i.setAttribute("stroke-width","2"),t.appendChild(i),t}function u(e){let t=["de","da","do","dos","das","e"];if(e.length<=2)return e;let i=e.indexOf("(");i>=0&&(e.substring(i).trim(),e=e.substring(0,i).trim());let n=e.toLowerCase().split(" ");for(let a=0;a<n.length;a++)t.includes(n[a])||(n[a]=n[a][0].toUpperCase()+n[a].substring(1));return n.join(" ")}setTimeout(f=>{let p=r.parentElement.querySelector(".tooltip");p||((p=document.createElement("div")).setAttribute("class","tooltip"),p.style.backgroundColor=a[o]+"CC",r.parentElement.appendChild(p)),function(a){function f(t,i){t.addEventListener("mouseover",t=>{e.select(document.body).selectAll("g[aria-label=line]").style("opacity",function(t){return e.select(this).attr("stroke")==i.cor?1:.3})}),t.addEventListener("mouseout",t=>{e.select(document.body).selectAll("g[aria-label=line]").style("opacity",1)})}let p=n(l,o,s,d),m,h,v;m=r.scale("x"),h=r.scale("y"),v=m.apply("PM25"==o?t:i),a.style.visibility=v<m.range[0]?"hidden":"visible",a.style.top=`${h.range[1]+5}px`,v>250?(a.classList.remove("right"),a.style.left=`${v-10}px`):(a.style.left=`${v}px`,a.classList.add("right"));let b=p.valoresComparacao.length>0,g=document.createElement("div"),x=document.createElement("div");x.classList.add("periodo"),void 0!==p.semanas?x.textContent=`${p.semanaInicio} - ${p.semanaFim} - (sem ${p.semanas})`:x.textContent=`${p.semanaInicio} - ${p.semanaFim}`,g.appendChild(x),b?(g.classList.add("c2"),g.appendChild(c(!1)),g.appendChild(c(!0))):g.classList.add("c1");for(let y=0;y<p.municipios.length;y++){let w=document.createElement("div"),A=document.createElement("div"),_=document.createElement("div"),C=b?document.createElement("div"):null;w.classList.add("legenda"),w.style.color=p.municipios[y].cor,w.textContent="⬤",A.classList.add("municipio"),A.textContent=u(p.municipios[y].nome),f(A,p.municipios[y]),_.classList.add("valor"),_.textContent=p.valoresPrincipal[y],g.appendChild(w),g.appendChild(A),g.appendChild(_),C&&(C.classList.add("valor"),C.textContent=p.valoresComparacao[y],g.appendChild(C))}let E=document.createElement("div");E.classList.add("rodape"),E.innerHTML=`Unidade: <b>${p.unidade}</b><br>M\xe9dia Semanal`,g.appendChild(E),a.replaceChildren(g);let S=e.select(r).select("line.rule-shadow"),k=e.select(r).select("g[aria-label=rule] line");0===S.size()&&(S=e.select(k.node().parentElement).append("line").attr("class","rule-shadow").attr("stroke","#FFFFFF00").attr("stroke-width",5).attr("stroke-dasharray","none").attr("y1",k.attr("y1")).attr("y2",k.attr("y2")).attr("cursor","ew-resize")),S.attr("x1",k.attr("x1")).attr("x2",k.attr("x2"))}(p)})}}function Q(e,t,i,n,a,r,o,l,s,d){return function(c,u,f,p){let m="PM25"==u?e:t;function h(e){return e=e.toISOString().substring(0,10).split("-"),`${e[2]}/${e[1]}/${e[0]}`}function v(e){return(p&&(e=e[p]),"percentual"===f||"taxa"===f)?e.toLocaleString("pt-BR",{maximumFractionDigits:2}):e.toFixed(0)}let b={},g=n.filter(e=>e.idx==c).sort(function(e,t){return i.findIndex(e=>e.nome==t.municipio)-i.findIndex(t=>t.nome==e.municipio)}),x=g,y=g.filter(e=>e.filtrado),w=a[r.bisector(e=>e.inicio.getTime()).center(a,m)];if("PM25"==u){let A=e;"number"==typeof A&&(A=new Date(A));let _=t;"number"==typeof _&&(_=new Date(_));let C=Math.floor((A.getTime()-_.getTime())/6048e5);C>0&&C<=42&&(b.semanas=C)}return b.semanaInicio=h(w.inicio).substring(0,5),b.semanaFim=h(w.termino),b.unidade=o[u][f],b.valoresPrincipal=[],b.valoresComparacao=[],b.municipios=[],b.ufSelecionada=i.some(e=>l.includes(e.nome)),y.length>0&&(x=g.filter(e=>!e.filtrado),"PIG"!==u&&(y=y.filter(e=>!Object.values(s).includes(e.municipio)||"PM25"!=u)),y.forEach(e=>{let t=e.dados[d.center(e.dados,m)][f];b.valoresComparacao.push(v("PIG"==u?t[p]:t))})),x.forEach(e=>{let t=i.find(t=>t.nome==e.municipio),n=e.dados[d.center(e.dados,m)][f];b.municipios.push(t),b.valoresPrincipal.push(v("PIG"==u?n[p]:n))}),b}}function K(e,t,i,n,a){return function(r,o,l=!1){function s(e){let t=o.scale("x"),i=e.offsetX;return i<t.range[0]&&(i=t.range[0]),i>t.range[1]&&(i=t.range[1]),i}let d=function(e){let t=a.select(o).select("g[aria-label=rule] line"),i=s(e);t.attr("x1",i).attr("x2",i)},c=function(a){let d=o.scale("x"),c=e[r].dados,u=s(a),f=c[t.center(c,d.invert(u))].x;l?i.value=f:n.value=f},u=0,f=0,p=null;function m(e){p&&p.attr("x",e.offsetX-f)}function h(i){let a=i.offsetX-f-u,l=o.scale("x");a<l.range[0]&&(a=l.range[0]),a>l.range[1]&&(a=l.range[1]);let s=e[r].dados;n.value=s[t.center(s,l.invert(a))].x}a.select(o).call(a.drag().on("start",e=>(function(e){if(a.select(o.parentElement).select("div.tooltip").style("visibility","hidden"),l){let t=a.select(o).select("rect.suscetibilidade"),i=a.select(o).select("line.concepcao"),n=a.select(o).select("g[aria-label=rule] line"),r=+t.attr("x"),s=+t.attr("width")+r;if(Math.abs(+n.attr("x1")-e.offsetX)>8&&r<e.offsetX&&s>e.offsetX){u=+t.attr("x")-i.attr("x1"),f=e.offsetX-r,p=a.select(o).append("rect").attr("x",t.attr("x")).attr("y",t.attr("y")).attr("width",t.attr("width")).attr("height",t.attr("height")).attr("stroke","black").attr("stroke-dasharray","5").attr("fill","none"),d=m,c=h;return}}d(e)})(e.sourceEvent)).on("drag",e=>d(e.sourceEvent)).on("end",e=>c(e.sourceEvent)))}}function ee(e,t,i,n,a,r,o,l,s,d,c,u,f,p,m,h,v,b,g,x,y,w,A,_,C,E,S,k,T){return O=>{let I=e.plot({marginTop:15,marginRight:0,width:t-65,height:i,x:{grid:!0,label:null,format:n,domain:a.find(e=>e.i==O).alterar_tempo?a.find(e=>e.i==O).alterar_tempo.map(e=>r[e].inicio):o.map(e=>r[e].inicio)},y:{grid:!0,domain:[0,l[s]],transform:e=>Math.min(122,e),label:null},marks:[e.rect([{y1:d[s][3],y2:l[s]}],{y1:"y1",y2:"y2",fill:"#FFEBEB",class:"faixa"}),e.rect([{y1:d[s][2],y2:d[s][3]}],{y1:"y1",y2:"y2",fill:"#FFF5EB"}),e.rect([{y1:d[s][1],y2:d[s][2]}],{y1:"y1",y2:"y2",fill:"#FFFFED"}),a.find(e=>e.i==O).mostra_media_movel?c.filter(e=>e.idx==O&&!Object.values(u).includes(e.municipio)).map((t,i)=>e.line(t.dados.filter(e=>f(e,O)),e.windowY({strict:!0,k:p,anchor:"middle",x:"x",y:"valor",curve:"monotone-x",strokeWidth:m,stroke:h.find(e=>e.nome==t.municipio).cor}))):c.filter(e=>e.idx==O&&!Object.values(u).includes(e.municipio)).map((t,i)=>e.line(t.dados.filter(e=>f(e,O)),{x:"x",y:"valor",curve:"monotone-x",strokeWidth:m,stroke:h.find(e=>e.nome==t.municipio).cor})),e.ruleX([c.filter(e=>e.idx==O)[0].dados[v.center(c.filter(e=>e.idx==O)[0].dados,b)]],{x:"x",strokeDasharray:"5"}),a.find(e=>e.i==O).mostra_media_movel?null:c.filter(e=>e.idx==O).map((t,i)=>e.dot([t.dados[v.center(t.dados,b)]],{x:"x",y:"valor",fill:h.find(e=>e.nome==t.municipio).cor}))]});return g(I,"PM25",O),x(I),y(O,I,!0),w`
<div style="--cor-trilha:${A.PM25}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${_.create("button").attr("class","btn-remove").text("–").on("click",C).node()}<br>
  ${E()}
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
<div class="trilha poluente" i=${O}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">POLUENTE</span>
    <div class="opcao-trilha">
      <label class="label-cabecalho-trilha">MÉDIA MÓVEL</label>       ${_.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==O).mostra_media_movel).on("change",e=>S(e,O)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">MODIFICAR PERÍODO</label> ${_.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==O).alterar_tempo).on("change",e=>k(e,O)).node()}
  </div>
    <span class="instrucaoSuscetibilidade">A janela no gráfico indica o período de maior suscetibilidade à poluição (22ª  à 38ª semana)</span>
    <span class="fonte" style="flex-grow: 0;">Fonte: SISAM</span>
  </div>
<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right">${I}</div>
</div>
${T(O)}
</div>
</div>
</div>`}}function et(e,t,i,n,a,r,o,l,s,d,c,u,f,p,m,h,v,b,g,x,y,w,A,_,C,E,S,k){return T=>{if(!e.map(e=>e.nome).every(e=>t.filter(e=>e.idx==T).map(e=>e.municipio).includes(e))||n.find(e=>e.i==T).filtros.value.expression&&n.find(e=>e.i==T).show_filtros&&t.filter(e=>e.idx==T).every(e=>void 0===e.filtrado)||a.value.expression&&t.filter(e=>e.idx==T).every(e=>void 0!==e.filtrado))return i();let O=n.find(e=>e.i==T).escala,I=r.plot({marginTop:5,marginRight:0,width:o-65,height:l,x:{grid:!0,label:null,domain:n.find(e=>e.i==T).alterar_tempo?n.find(e=>e.i==T).alterar_tempo.map(e=>s[e].inicio):d.map(e=>s[e].inicio)},y:{grid:!0,label:null},marks:[n.find(e=>e.i==T).mostra_media_movel?t.filter(e=>e.idx==T).map((t,i)=>r.line(t.dados.filter(e=>c(e,T)),r.windowY({strict:!0,k:u,anchor:"middle",x:"x",y:e=>e[O],strokeWidth:t.filtrado?f:p,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"}))):t.filter(e=>e.idx==T).map((t,i)=>r.line(t.dados.filter(e=>c(e,T)),{sort:"x",x:"x",y:e=>e[O],curve:"monotone-x",strokeWidth:t.filtrado?f:p,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"})),r.ruleX([t.filter(e=>e.idx==T)[0].dados[m.center(t.filter(e=>e.idx==T)[0].dados,h)]],{x:"x",strokeDasharray:"5"}),n.find(e=>e.i==T).mostra_media_movel?null:t.filter(e=>e.idx==T).map((t,i)=>r.dot([t.dados[m.center(t.dados,h)]],{x:"x",y:e=>e[O],fill:e.find(e=>e.nome==t.municipio).cor}))]});return v(I,"FETAL",T,O),b(T,I),g`
<div style="--cor-trilha:${x.FETAL}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${y.create("button").attr("class","btn-remove").text("–").on("click",w).node()}<br>
  ${A()}
</div>
<div class="sombra">
<div class="drag-container">
<span class="material-icons-outlined ${n[0].i==T?"icon-gray":"icon-blue"}">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-blue">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined ${n[n.length-1].i==T?"icon-gray":"icon-blue"}">
expand_more
</span>
</div>
<div class="trilha fetal" i=${T}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">ÓBITOS FETAIS</span>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">MÉDIA MÓVEL</label> ${y.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==T).mostra_media_movel).on("change",e=>_(e,T)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">MODIFICAR PERÍODO</label> ${y.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==T).alterar_tempo).on("change",e=>C(e,T)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">ESCALA ABSOLUTO</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+T).property("checked","absoluto"==n.find(e=>e.i==T).escala).attr("value","absoluto").on("change",e=>E(e,T)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha"> PERCENTUAL</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+T).property("checked","percentual"==n.find(e=>e.i==T).escala).attr("value","percentual").on("change",e=>E(e,T)).node()}
      </div>
    <span class="fonte">Fonte: SIM<span>
  </div>
<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right;">${I}</div>
</div>
${S(T)}
<div class="rodape-trilha">
<div class="botao-comparacao">
${y.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==T).show_filtros).on("change",e=>k(e,T)).node()}
<label>COMPARAÇÃO</label>
</div>
<div class="menu-local">${n.find(e=>e.i==T).show_filtros?n.find(e=>e.i==T).filtros:""}</div>
</div>
</div>
</div>
</div>`}}function ei(e,t,i,n,a,r,o,l,s,d,c,u,f,p,m,h,v,b,g,x,y,w,A,_,C,E,S,k,T){return O=>{if(!e.map(e=>e.nome).every(e=>t.filter(e=>e.idx==O).map(e=>e.municipio).includes(e))||n.find(e=>e.i==O).filtros.value.expression&&n.find(e=>e.i==O).show_filtros&&t.filter(e=>e.idx==O).every(e=>void 0===e.filtrado)||a.value.expression&&t.filter(e=>e.idx==O).every(e=>void 0!==e.filtrado))return i();let I=n.find(e=>e.i==O).escala,M=n.find(e=>e.i==O).neonatal,D=r.plot({marginTop:5,marginRight:0,width:o-65,height:l,x:{grid:!0,label:null,domain:n.find(e=>e.i==O).alterar_tempo?n.find(e=>e.i==O).alterar_tempo.map(e=>s[e].inicio):d.map(e=>s[e].inicio)},y:{grid:!0,label:null},marks:[n.find(e=>e.i==O).mostra_media_movel?t.filter(e=>e.idx==O).map((t,i)=>r.line(t.dados.filter(e=>c(e,O)),r.windowY({strict:!0,k:u,anchor:"middle",x:"x",y:e=>e[I][M],strokeWidth:t.filtrado?f:p,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"}))):t.filter(e=>e.idx==O).map((t,i)=>r.line(t.dados.filter(e=>c(e,O)),{sort:"x",x:"x",y:e=>e[I][M],curve:"monotone-x",strokeWidth:t.filtrado?f:p,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"})),r.ruleX([t.filter(e=>e.idx==O)[0].dados[m.center(t.filter(e=>e.idx==O)[0].dados,h)]],{x:"x",strokeDasharray:"5"}),n.find(e=>e.i==O).mostra_media_movel?null:t.filter(e=>e.idx==O).map((t,i)=>r.dot([t.dados[m.center(t.dados,h)]],{x:"x",y:e=>e[I][M],fill:e.find(e=>e.nome==t.municipio).cor}))]});v(D,"NEONATAL",O,I,M),b(O,D);let N;return g`
<div style="--cor-trilha: ${x.NEONATAL}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${y.create("button").attr("class","btn-remove").text("–").on("click",w).node()}<br>
  ${A()}
</div>
<div class="sombra">
<div class="drag-container">
<span class="material-icons-outlined ${n[0].i==O?"icon-gray":"icon-blue"}">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-blue">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined ${n[n.length-1].i==O?"icon-gray":"icon-blue"}">
expand_more
</span>
</div>
<div class="trilha neonatal" i=${O}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">ÓBITOS NEONATAIS</span>

    ${(N=y.create("select").attr("class","menuIG")).style("font-family","Roboto Condensed"),N.append("option").attr("value","PRECOCE").text("PRECOCE").property("selected","PRECOCE"==n.find(e=>e.i==O).neonatal),N.append("option").attr("value","TARDIO").text("TARDIO").property("selected","TARDIO"==n.find(e=>e.i==O).neonatal),N.append("option").attr("value","NEOTOTAL").text("TOTAL").property("selected","NEOTOTAL"==n.find(e=>e.i==O).neonatal),N.on("change",e=>_(e,O)),N.node()}

    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">MÉDIA MÓVEL</label> ${y.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==O).mostra_media_movel).on("change",e=>C(e,O)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">MODIFICAR PERÍODO</label> ${y.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==O).alterar_tempo).on("change",e=>E(e,O)).node()}
    </div>
    <div class="opcao-trilha">
    
    <label class="label-cabecalho-trilha">ESCALA ABSOLUTO</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+O).property("checked","absoluto"==n.find(e=>e.i==O).escala).attr("value","absoluto").on("change",e=>S(e,O)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha"> PERCENTUAL</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+O).property("checked","percentual"==n.find(e=>e.i==O).escala).attr("value","percentual").on("change",e=>S(e,O)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha"> TAXA POR 1000</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+O).property("checked","taxa"==n.find(e=>e.i==O).escala).attr("value","taxa").on("change",e=>S(e,O)).node()}
    </div>
    <span class="fonte">Fonte: SIM</span>
  </div>

<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right;">${D}</div>
</div>
${k(O)}
<div class="rodape-trilha">
<div class="botao-comparacao">
${y.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==O).show_filtros).on("change",e=>T(e,O)).node()}
<label>COMPARAÇÃO</label>
</div>
<div class="menu-local">${n.find(e=>e.i==O).show_filtros?n.find(e=>e.i==O).filtros:""}</div>
</div>
</div>
</div>
</div>`}}function en(e,t,i,n,a,r,o,l,s,d,c,u,f,p,m,h,v,b,g,x,y,w,A,_,C,E,S,k,T){return O=>{if(!e.map(e=>e.nome).every(e=>t.filter(e=>e.idx==O).map(e=>e.municipio).includes(e))||n.find(e=>e.i==O).filtros.value.expression&&n.find(e=>e.i==O).show_filtros&&t.filter(e=>e.idx==O).every(e=>void 0===e.filtrado)||a.value.expression&&t.filter(e=>e.idx==O).every(e=>void 0!==e.filtrado))return i();let I=n.find(e=>e.i==O).escala,M=n.find(e=>e.i==O).relparto,D=r.plot({marginTop:5,marginRight:0,width:o-65,height:l,x:{grid:!0,label:null,domain:n.find(e=>e.i==O).alterar_tempo?n.find(e=>e.i==O).alterar_tempo.map(e=>s[e].inicio):d.map(e=>s[e].inicio)},y:{grid:!0,label:null},marks:[n.find(e=>e.i==O).mostra_media_movel?t.filter(e=>e.idx==O).map((t,i)=>r.line(t.dados.filter(e=>c(e,O)),r.windowY({strict:!0,k:u,anchor:"middle",x:"x",y:e=>e[I][M],strokeWidth:t.filtrado?f:p,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"}))):t.filter(e=>e.idx==O).map((t,i)=>r.line(t.dados.filter(e=>c(e,O)),{sort:"x",x:"x",y:e=>e[I][M],curve:"monotone-x",strokeWidth:t.filtrado?f:p,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"})),r.ruleX([t.filter(e=>e.idx==O)[0].dados[m.center(t.filter(e=>e.idx==O)[0].dados,h)]],{x:"x",strokeDasharray:"5"}),n.find(e=>e.i==O).mostra_media_movel?null:t.filter(e=>e.idx==O).map((t,i)=>r.dot([t.dados[m.center(t.dados,h)]],{x:"x",y:e=>e[I][M],fill:e.find(e=>e.nome==t.municipio).cor}))]});v(D,"RELPARTO",O,I,M),b(O,D);let N;return g`
<div style="--cor-trilha: ${x.RELPARTO}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${y.create("button").attr("class","btn-remove").text("–").on("click",w).node()}<br>
  ${A()}
</div>
<div class="sombra">
<div class="drag-container">
<span class="material-icons-outlined ${n[0].i==O?"icon-gray":"icon-blue"}">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-blue">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined ${n[n.length-1].i==O?"icon-gray":"icon-blue"}">
expand_more
</span>
</div>
<div class="trilha parto" i=${O}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">ÓBITOS EM RELAÇÃO AO PARTO</span>

    ${(N=y.create("select").attr("class","menuIG")).style("font-family","Roboto Condensed"),N.append("option").attr("name","ANTES").text("ANTES").property("selected","ANTES"==n.find(e=>e.i==O).relparto),N.append("option").attr("name","DURANTE").text("DURANTE").property("selected","DURANTE"==n.find(e=>e.i==O).relparto),N.append("option").attr("name","DEPOIS").text("DEPOIS").property("selected","DEPOIS"==n.find(e=>e.i==O).relparto),N.on("change",e=>_(e,O)),N.node()}

    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">MÉDIA MÓVEL</label> ${y.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==O).mostra_media_movel).on("change",e=>C(e,O)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">MODIFICAR PERÍODO</label> ${y.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==O).alterar_tempo).on("change",e=>E(e,O)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">ESCALA ABSOLUTO</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+O).property("checked","absoluto"==n.find(e=>e.i==O).escala).attr("value","absoluto").on("change",e=>S(e,O)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha"> PERCENTUAL</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+O).property("checked","percentual"==n.find(e=>e.i==O).escala).attr("value","percentual").on("change",e=>S(e,O)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha"> TAXA POR 1000</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+O).property("checked","taxa"==n.find(e=>e.i==O).escala).attr("value","taxa").on("change",e=>S(e,O)).node()}
    </div>
    <span class="fonte">Fonte: SIM</span>
  </div>

<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right;">${D}</div>
</div>
${k(O)}
<div class="rodape-trilha">
<div class="botao-comparacao">
${y.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==O).show_filtros).on("change",e=>T(e,O)).node()}
<label>COMPARAÇÃO</label>
</div>
<div class="menu-local">${n.find(e=>e.i==O).show_filtros?n.find(e=>e.i==O).filtros:""}</div>
</div>
</div>
</div>
</div>`}}function ea(e,t,i,n,a,r,o,l,s,d,c,u,f,p,m,h,v,b,g,x,y,w,A,_,C,E,S,k){return T=>{if(!e.map(e=>e.nome).every(e=>t.filter(e=>e.idx==T).map(e=>e.municipio).includes(e))||n.find(e=>e.i==T).filtros.value.expression&&n.find(e=>e.i==T).show_filtros&&t.filter(e=>e.idx==T).every(e=>void 0===e.filtrado)||a.value.expression&&t.filter(e=>e.idx==T).every(e=>void 0!==e.filtrado))return i();let O=n.find(e=>e.i==T).escala,I=r.plot({marginTop:5,marginRight:0,width:o-65,height:l,x:{grid:!0,label:null,domain:n.find(e=>e.i==T).alterar_tempo?n.find(e=>e.i==T).alterar_tempo.map(e=>s[e].inicio):d.map(e=>s[e].inicio)},y:{grid:!0,label:null},marks:[n.find(e=>e.i==T).mostra_media_movel?t.filter(e=>e.idx==T).map((t,i)=>r.line(t.dados.filter(e=>c(e,T)),r.windowY({strict:!0,k:u,anchor:"middle",x:"x",y:e=>e[O],strokeWidth:t.filtrado?f:p,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"}))):t.filter(e=>e.idx==T).map((t,i)=>r.line(t.dados.filter(e=>c(e,T)),{sort:"x",x:"x",y:e=>e[O],curve:"monotone-x",strokeWidth:t.filtrado?f:p,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"})),r.ruleX([t.filter(e=>e.idx==T)[0].dados[m.center(t.filter(e=>e.idx==T)[0].dados,h)]],{x:"x",strokeDasharray:"5"}),n.find(e=>e.i==T).mostra_media_movel?null:t.filter(e=>e.idx==T).map((t,i)=>r.dot([t.dados[m.center(t.dados,h)]],{x:"x",y:e=>e[O],fill:e.find(e=>e.nome==t.municipio).cor}))]});return v(I,"TOTAL",T,O),b(T,I),g`
<div style="--cor-trilha: ${x.TOTAL}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${y.create("button").attr("class","btn-remove").text("–").on("click",w).node()}<br>
  ${A()}
</div>
<div class="sombra">
<div class="drag-container">
<span class="material-icons-outlined ${n[0].i==T?"icon-gray":"icon-blue"}">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-blue">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined ${n[n.length-1].i==T?"icon-gray":"icon-blue"}">
expand_more
</span>
</div>
<div class="trilha obitototal" i=${T}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">ÓBITOS TOTAIS</span>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">MÉDIA MÓVEL</label> ${y.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==T).mostra_media_movel).on("change",e=>_(e,T)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">MODIFICAR PERÍODO</label> ${y.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==T).alterar_tempo).on("change",e=>C(e,T)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">ESCALA ABSOLUTO</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+T).property("checked","absoluto"==n.find(e=>e.i==T).escala).attr("value","absoluto").on("change",e=>E(e,T)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha"> PERCENTUAL</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+T).property("checked","percentual"==n.find(e=>e.i==T).escala).attr("value","percentual").on("change",e=>E(e,T)).node()}
    </div>
    <span class="fonte">Fonte: SIM</span>
  </div>
<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right;">${I}</div>
</div>
${S(T)}
<div class="rodape-trilha">
<div class="botao-comparacao">
${y.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==T).show_filtros).on("change",e=>k(e,T)).node()}
<label>COMPARAÇÃO</label>
</div>
<div class="menu-local">${n.find(e=>e.i==T).show_filtros?n.find(e=>e.i==T).filtros:""}</div>
</div>
</div>
</div>
</div>`}}function er(e,t,i,n,a,r){return o=>{let l;return e`
<div style="display:flex; align-items:center; justify-content:space-between;">
<div style="visibility:hidden;">
  ${t.create("button").attr("class","btn-remove").text("–").on("click",i).node()}<br>
  ${t.create("button").attr("class","btn-remove").text("C").on("click",n).node()}
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

<div class="trilha" style="width:${a-60}px; margin-left:0px; border-radius: 0 10px 10px 0; border:dotted #C4C4C4 2px; box-shadow:none; height:80px;">
  <div class="cabecalho-trilha" style="border-bottom:dotted #C4C4C4 2px;">
${(l=t.create("select").attr("class","menuIG")).style("margin-left","10px").style("font-family","Roboto Condensed"),l.append("option").attr("name","").text("ADICIONE UMA TRILHA").property("disabled",!0).property("selected",!0),l.append("option").attr("name","PM25").text("POLUENTE"),l.append("option").attr("name","\xd3BITOS FETAIS").text("\xd3BITOS FETAIS"),l.append("option").attr("name","\xd3BITOS NEONATAIS TOTAIS").text("\xd3BITOS NEONATAIS TOTAIS"),l.append("option").attr("name","\xd3BITOS EM RELA\xc7\xc3O AO PARTO").text("\xd3BITOS EM RELA\xc7\xc3O AO PARTO"),l.append("option").attr("name","TOTAL").text("\xd3BITOS TOTAIS"),l.on("change",r),l.node()}
  </div>

<div class="conteudo-trilha">
<br><br>
</div>
</div>`}}function eo(e,t,i,n,a){return r=>e`
<div style="--cor-trilha: #c4c4c4; display:flex; align-items:center; justify-content:space-between; margin-bottom:30px;">
<div style="visibility:hidden;">
  ${t.create("button").attr("class","btn-remove").text("–").on("click",i).node()}<br>
  ${t.create("button").attr("class","btn-remove").text("C").on("click",n).node()}
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
<div class="trilha" style="width:${a-60}px; margin-left:0px; margin-bottom:0px; height: 80px;">
  <div class="cabecalho-trilha">
  <label class="label-titulo-trilha">CARREGANDO...</label>
  </div>

<div class="conteudo-trilha">
<br><br>
</div>
</div>
</div>`}function el(e,t,i,n,a,r){return o=>{let l=e.findIndex(e=>e.i==o.target.parentNode.parentNode.getElementsByClassName("trilha")[0].getAttribute("i")),s={...e[l]},d=t.max(e.map(e=>e.i))+1;s.i=d,"PM25"!=s.variavel&&(s.filtros=s.filtros.cloneMenu(),s.filtros.addEventListener("input",e=>i(e,s))),e.splice(l+1,0,s),n.value=e;let c=JSON.parse(JSON.stringify(a.filter(e=>e.idx==o.target.parentNode.parentNode.getElementsByClassName("trilha")[0].getAttribute("i"))));c.forEach((e,t,i)=>{i[t].idx=d,i[t].dados.forEach((e,t,i)=>i[t].x=new Date(i[t].x))}),r.value=a.concat(c)}}function es(e,t,i,n){return a=>{e.value=t.filter(e=>e.i!=a.target.parentNode.parentNode.getElementsByClassName("trilha")[0].getAttribute("i")),i.value=n.filter(e=>e.idx!=a.target.parentNode.parentNode.getElementsByClassName("trilha")[0].getAttribute("i"))}}function ed(e,t,i,n,a,r,o,l,s,d,c,u,f,p,m,h,v,b){return g=>{let x=e.max(t.map(e=>e.i))||0,y=null;switch(g.target.value){case"POLUENTE":y={i:x+1,mostra_media_movel:!0,variavel:"PM25",alterar_tempo:null,poluente:"PM25"},i.value=t.concat(y),n.forEach(e=>Promise.all([a(e.nome)]).then(t=>{r.value=r.value.concat([{idx:x+1,municipio:e.nome,variavel:"PM25",dados:o(t[0])}])}));break;case"\xd3BITOS NEONATAIS TOTAIS":(y={i:x+1,mostra_media_movel:!1,escala:"taxa",neonatal:"PRECOCE",variavel:"NEONATAL",alterar_tempo:null,filtros:new l.local(null,null,s.NEONATAL),show_filtros:!1}).filtros.addEventListener("input",e=>d(e,y)),i.value=t.concat(y),n.forEach(e=>Promise.all([c(e.nome,y.filtros.expression)]).then(t=>{r.value=r.value.concat([{idx:x+1,municipio:e.nome,variavel:"NEONATAL",dados:u(t[0])}])}));break;case"\xd3BITOS EM RELA\xc7\xc3O AO PARTO":(y={i:x+1,mostra_media_movel:!1,escala:"taxa",relparto:"ANTES",variavel:"RELPARTO",alterar_tempo:null,filtros:new l.local(null,null,s.RELPARTO),show_filtros:!1}).filtros.addEventListener("input",e=>d(e,y)),i.value=t.concat(y),n.forEach(e=>Promise.all([f(e.nome,y.filtros.expression)]).then(t=>{r.value=r.value.concat([{idx:x+1,municipio:e.nome,variavel:"RELPARTO",dados:p(t[0])}])}));break;case"\xd3BITOS FETAIS":(y={i:x+1,mostra_media_movel:!1,variavel:"FETAL",alterar_tempo:null,filtros:new l.local(null,null,s.FETAIS),show_filtros:!1,escala:"absoluto"}).filtros.addEventListener("input",e=>d(e,y)),i.value=t.concat(y),n.forEach(e=>Promise.all([m(e.nome,y.filtros.expression)]).then(t=>{r.value=r.value.concat([{idx:x+1,municipio:e.nome,variavel:"FETAL",dados:h(t[0])}])}));break;case"\xd3BITOS TOTAIS":(y={i:x+1,mostra_media_movel:!1,variavel:"TOTAL",alterar_tempo:null,filtros:new l.local(null,null,s.TOTAL),show_filtros:!1,escala:"absoluto"}).filtros.addEventListener("input",e=>d(e,y)),i.value=t.concat(y),n.forEach(e=>Promise.all([v(e.nome,y.filtros.expression)]).then(t=>{r.value=r.value.concat([{idx:x+1,municipio:e.nome,variavel:"TOTAL",dados:b(t[0])}])}))}}}function ec(e,t,i,n){return a=>{if(!e.find(e=>e.i==a).alterar_tempo)return"";let r=t(104,468,e.find(e=>e.i==a).alterar_tempo[0],e.find(e=>e.i==a).alterar_tempo[1],i-90,40);return r.addEventListener("input",t=>{let i=e;i.find(e=>e.i==a).alterar_tempo=r.value,n.value=i}),r}}function eu(e,t){return i=>{e.find(e=>e.i==i.target.parentElement.parentElement.getAttribute("i")).poluente=i.target.value,t.value=e}}function ef(e,t,i,n,a,r,o,l,s,d){return(c,u)=>{if(e.find(e=>e.i==u).show_filtros=c.target.checked,c.target.checked){let f=e.find(e=>e.i==u);f.filtros=new i.local(null,n.value.urlids,a[f.variavel]),f.filtros.addEventListener("input",e=>r(e,f)),t.value=t.value.filter(e=>e.idx!=u||!e.filtrado),o.value.forEach(i=>{Promise.all([l[e.find(e=>e.i==u).variavel](i.nome,e.find(e=>e.i==u).filtros.value.expression)]).then(n=>{t.value=t.value.concat({idx:u,municipio:i.nome,variavel:e.find(e=>e.i==u).variavel,filtrado:!0,dados:s[e.find(e=>e.i==u).variavel](n[0])})})})}else t.value=t.value.filter(e=>e.idx!=u||!e.filtrado);d.value=e}}function ep(e,t,i){return(n,a)=>{n.target.checked?e.find(e=>e.i==a).alterar_tempo=t:e.find(e=>e.i==a).alterar_tempo=null,i.value=e}}function em(e,t){return(i,n)=>{e.find(e=>e.i==n).neonatal=i.target.value,t.value=e}}function eh(e,t){return(i,n)=>{e.find(e=>e.i==n).relparto=i.target.value,t.value=e}}function ev(e,t){return(i,n)=>{e.find(e=>e.i==n).escala=i.target.value,t.value=e}}function eb(e,t){return(i,n)=>{e.find(e=>e.i==n).mostra_media_movel=i.target.checked,t.value=e}}function eg(e){return t=>{let i=[0,0];return i[0]=e[t[0]].inicio,i[1]=e[t[1]].termino,i}}function ex(e,t,i){return e?e.trilhas.map(e=>(e.filtros=new t.local(null,e.filtrosUrlids),e)):[{i:0,mostra_media_movel:!0,variavel:"PM25",alterar_tempo:null,poluente:"PM25"},{i:2,mostra_media_movel:!1,escala:"absoluto",variavel:"FETAL",alterar_tempo:null,filtros:new t.local(null,null,i.FETAL),show_filtros:!1},{i:3,mostra_media_movel:!1,escala:"absoluto",neonatal:"PRECOCE",variavel:"NEONATAL",alterar_tempo:null,filtros:new t.local(null,null,i.NEONATAL),show_filtros:!1},{i:4,mostra_media_movel:!1,escala:"absoluto",relparto:"ANTES",variavel:"RELPARTO",alterar_tempo:null,filtros:new t.local(null,null,i.RELPARTO),show_filtros:!1},]}function ey(){return{PM25:{valor:"\xb5g/m\xb3"},NEONATAL:{absoluto:"\xf3bitos",percentual:"%",taxa:"nasc./1000NV"},RELPARTO:{absoluto:"\xf3bitos",percentual:"%",taxa:"nasc./1000NV"},TOTAL:{absoluto:"\xf3bitos",percentual:"%"},FETAL:{absoluto:"\xf3bitos",percentual:"%"}}}function ew(){return 2.5}function eA(){return 2}function e_(){return!0}function eC(e,t){return e?e.municipios:t.municipios}function eE(e,t,i,n,a,r,o,l,s,d,c){if(e){for(let u of t.value)i.value=i.value.concat([u]),u=u.nome,n.forEach(e=>{Promise.all([a[e.variavel](u,r.value.expression)]).then(t=>{o.value=o.value.concat({idx:e.i,municipio:u,variavel:e.variavel,dados:l[e.variavel](t[0])})}),e.show_filtros&&Promise.all([a[e.variavel](u,e.filtros.value.expression)]).then(t=>{o.value=o.value.concat({idx:e.i,municipio:u,variavel:e.variavel,filtrado:!0,dados:l[e.variavel](t[0])})})}),n.slice(1).forEach(e=>e.filtros.addEventListener("input",t=>s(t,e)));r.addEventListener("input",e=>d(e)),r.addEventListener("limparFiltros",e=>{for(let t=0;t<n.length;t++)n[t].filtros.limpa(),n[t].show_filtros=!1}),c.value=!1}}function eS(e,t,i,n){return function(){e.setItem("conf3",JSON.stringify(t())),e.setItem("municipios",JSON.stringify(i.value)),e.setItem("intervalo",JSON.stringify(n.value))}}function ek(e,t,i,n){return(a,r)=>{e.value=e.value.filter(e=>e.idx!=r.i||!e.filtrado),t.value.forEach(t=>{Promise.all([i[r.variavel](t.nome,r.filtros.value.expression)]).then(i=>{e.value=e.value.concat({idx:r.i,municipio:t.nome,variavel:r.variavel,filtrado:!0,dados:n[r.variavel](i[0])})})})}}function eT(e){return e.range([3,53],{label:"Janela em semanas",value:13,step:2})}function eO(e){return e.select(["co_ppb","no2_ppb","o3_ppb","pm25_ugm3","so2_ugm3"],{label:"Indicador",value:"pm25_ugm3"})}function eI(){return["#2F87F5","#D8C56C","#DC5988","#6CC28D","#67AEC2","#ABA6F8","#D8C56C","#2DE8BD","#2F87F5","#94E8F9"]}function eM(){return[]}function eD(e,t,i,n){return e[Math.ceil(t.interpolate(...i?i.intervalo:n.intervalo)(.5))].inicio}function eN(e){return e}function eL(e){return e.bisector(e=>e.x)}function eR(e){return e.timeFormatDefaultLocale({decimal:",",thousands:".",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%d/%m/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Domingo","Segunda-feira","Ter\xe7a-feira","Quarta-feira","Quinta-feira","Sexta-feira","S\xe1bado"],shortDays:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],months:["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],shortMonths:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]})}function eP(e){return e[0]}function eF(e){return e[1]}function eB(e,t,i,n,a){return(r,o)=>{let l=e.find(e=>e.i==o).alterar_tempo,s=e.find(e=>e.i==o).mostra_media_movel?(t-1)/2:0;return l?r.x.getTime()>=i[l[0]-s].inicio.getTime()&&r.x.getTime()<=i[l[1]+s].termino.getTime():r.x.getTime()>=i[n-s].inicio.getTime()&&r.x.getTime()<=i[a+s].termino.getTime()}}function eU(){return 200}function e$(e,t){return function(i,n){if(2==i.length)return;let a=e.find(e=>e.municipio==i).codigo_sdv,r=`https://storage.googleapis.com/amplia/sisam/${a.substring(0,2)}/mun${a}.db`;return t.open(r).then(e=>e.query(n))}}function ej(e){return e`<style>
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@400;700&display=swap');
  text{
    font-family:"Fira Sans Condensed"
  }
</style>`}function ez(e){return e("municipios2.csv").csv()}function eG(e){return e("semanas_epidemiologicas_estendido.csv").csv().then(e=>e.map(e=>(e.inicio=new Date(Date.UTC(+e.inicio.substr(0,4),+e.inicio.substr(5,2)-1,+e.inicio.substr(8,2))),e.termino=new Date(Date.UTC(+e.termino.substr(0,4),+e.termino.substr(5,2)-1,+e.termino.substr(8,2))),e)).filter(e=>e.ano>=2010))}function eH(){return{ACRE:"AC",ALAGOAS:"AL",AMAPÁ:"AP",AMAZONAS:"AM",BAHIA:"BA",CEARÁ:"CE","DISTRITO FEDERAL":"DF","ESP\xcdRITO SANTO":"ES",GOIÁS:"GO",MARANHÃO:"MA","MATO GROSSO":"MT","MATO GROSSO DO SUL":"MS","MINAS GERAIS":"MG",PARÁ:"PA",PARAÍBA:"PB",PARANÁ:"PR",PERNAMBUCO:"PE",PIAUÍ:"PI","RIO DE JANEIRO":"RJ","RIO GRANDE DO NORTE":"RN","RIO GRANDE DO SUL":"RS",RONDÔNIA:"RO",RORAIMA:"RR","SANTA CATARINA":"SC","S\xc3O PAULO":"SP",SERGIPE:"SE",TOCANTINS:"TO"}}function eV(){return[]}function eq(){return["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"]}function eW(e){return Object.values(e).sort(Intl.Collator().compare)}function eZ(e,t,i){return n=>"BRASIL"==n?"":e.includes(n)?"mun_uf_nome='"+Object.entries(t).find(e=>e[1]==n)[0]+"'":"mun_geocodsdv="+i.find(e=>e.municipio==n).codigo_sdv}function eX(e){return e`## URL stuff`}function eJ(e){return function(t){return e.compressToEncodedURIComponent(JSON.stringify(t))}}function eY(e){return function(t){return JSON.parse(e.decompressFromEncodedURIComponent(t))}}function eQ(e,t,i,n){return()=>({principalUrlids:e.value.value.urlids,municipios:t.value,intervalo:i,trilhas:n.value.map(e=>{let t={};return Object.assign(t,e),t.filtros&&(t.filtrosUrlids=t.filtros.value.urlids,delete t.filtros),t})})}function eK(){return{principalUrlids:"",municipios:[{nome:"RIO DE JANEIRO",cor:"#2F87F5"}],intervalo:[104,469],trilhas:[{i:0,mostra_media_movel:!0,variavel:"PM25",alterar_tempo:null,poluente:"PM25"},{i:2,mostra_media_movel:!1,escala:"absoluto",variavel:"FETAL",alterar_tempo:null,show_filtros:!1,filtrosUrlids:""},{i:3,mostra_media_movel:!1,escala:"absoluto",neonatal:"PRECOCE",variavel:"NEONATAL",alterar_tempo:null,show_filtros:!1,filtrosUrlids:""},{i:4,mostra_media_movel:!1,escala:"absoluto",relparto:"ANTES",variavel:"RELPARTO",alterar_tempo:null,show_filtros:!1,filtrosUrlids:""}]}}function e0(e,t,i,n){let a=new e(window.location.search).get("conf");if(a)return t(a);if(a=i.getItem("conf3")){let r=JSON.parse(a),o=i.getItem("municipios");o&&(r.municipios=JSON.parse(o));let l=i.getItem("intervalo");return l&&(r.intervalo=JSON.parse(l)),r}if(a=i.getItem("municipios")){let s=n;return s.municipios=JSON.parse(a),a=i.getItem("intervalo"),s.intervalo=JSON.parse(a),s}}function e1(){return function(e){var t=document.body.appendChild(document.createElement("textarea"));t.style.position="absolute",t.style.left="-9999px",t.setAttribute("readonly",""),t.value=e,t.select();try{return document.execCommand("copy")}catch(i){return!1}finally{t.parentNode.removeChild(t)}}}function e2(){return"https://ampliasaude.github.io/amplia-site/trilhas/MortalidadeInfantil/"}function e5(e,t,i,n,a){let r=e`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Copiar link compartilhável</title>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M6.045 10C6.045 11.026 6.8095 11.86 7.75 11.86H9.95V13H7.75C6.232 13 5 11.656 5 10C5 8.344 6.232 7 7.75 7H9.95V8.14H7.75C6.8095 8.14 6.045 8.974 6.045 10ZM8.3 9.4H12.7V10.6H8.3V9.4ZM13.25 13H11.05V11.86H13.25C14.1905 11.86 14.955 11.026 14.955 10C14.955 8.974 14.1905 8.14 13.25 8.14H11.05V7H13.25C14.768 7 16 8.344 16 10C16 11.656 14.768 13 13.25 13Z" fill="white"/>
</svg>`;return r.onclick=()=>{a(`${t}?conf=${i(n())}`)},r}function e3(e,t){return function(){return`conf=${e(t())}`}}function e4(e){return e`## Poluentes`}function e6(){return{pm25_ugm3:120,so2_ugm3:90,no2_ppb:286,o3_ppb:154,co_ppb:9.9}}function e8(){return e=>.08206*(e+293.15)}function e7(){return{no2_ppb:46.0055,o3_ppb:48,co_ppb:28.01}}function e9(){return{pm25_ugm3:[25,37,50,60],so2_ugm3:[20,30,40,60],no2_ppb:[200,220,240,260],o3_ppb:[100,120,130,140],co_ppb:[9,9,9,9]}}function te(e,t){return(i,n="TRUE")=>t(i,`
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
 `)}function tt(e,t,i,n){return a=>{a.forEach(a=>{let r=a,o=new Date(Date.UTC(r.ano,r.mes-1,r.dia));for(let l of e)if(o>=new Date(l.inicio)&&o<=new Date(l.termino)){r.semana=+l.semana,r.x=l.inicio;break}switch(1==r.mes&&53==r.semana&&(r.ano-=1,r.mes=12),t){case"no2_ppb":case"o3_ppb":let s=i[t]/n(r.temperatura);r.valor*=s;case"co_ppb":r.valor/=1e3}});let r=[];for(let o of a){let l=r.find(e=>e.x==o.x);l?(l.valor+=o.valor,l.temperatura_c_media+=o.temperatura_c_media,l.cont+=1):r.push({ano:o.ano,semana:o.semana,x:o.x,valor:o.valor||0,temperatura_c_media:o.temperatura_c_media,cont:1})}return r.map(e=>(e.valor/=e.cont,e.temperatura_c_media/=e.cont,delete e.cont,e)).filter(e=>e.semana)}}function ti(e){return e`## Mortalidade`}function tn(e,t,i){return async(n,a)=>{let r;return await i.fetchNeoNatal(e.includes(n)?Math.floor(t.find(e=>e.sigla==n).codigo_sdv/1e4):t.find(e=>e.municipio==n).codigo_sdv,a)}}function ta(e,t,i){return async(n,a)=>{let r;return await i.fetchRelParto(e.includes(n)?Math.floor(t.find(e=>e.sigla==n).codigo_sdv/1e4):t.find(e=>e.municipio==n).codigo_sdv,a)}}function tr(e,t){return i=>{let n=e(i[1]);(i=i[0]).forEach(e=>{let i=e;for(let n of(i.data=new Date(i.data),t))if(i.data>=new Date(n.inicio)&&i.data<=new Date(n.termino)){i.x=n.inicio;break}});let a=i,r=[];for(let o of a){let l=r.find(e=>e.x.getTime()==o.x.getTime());l?(l.absoluto[o.neonatal]+=o.total,l.total+=o.total):r.push({x:o.x,absoluto:{PRECOCE:"PRECOCE"==o.neonatal?o.total:0,NEOTOTAL:"NEOTOTAL"==o.neonatal?o.total:0,TARDIO:"TARDIO"==o.neonatal?o.total:0,POS:"POS"==o.neonatal?o.total:0},total:o.total})}return t.filter(e=>!r.map(e=>e.x.getTime()).includes(e.inicio.getTime())).forEach(e=>{r.push({x:e.inicio,absoluto:{PRECOCE:0,TARDIO:0,NEOTOTAL:0,POS:0},total:0})}),(r=r.map(e=>{e.percentual={},e.total?(e.percentual.PRECOCE=100*e.absoluto.PRECOCE/e.total,e.percentual.TARDIO=100*e.absoluto.TARDIO/e.total,e.percentual.NEOTOTAL=100*e.absoluto.NEOTOTAL/e.total,e.percentual.POS=100*e.absoluto.POS/e.total):(e.percentual.PRECOCE=0,e.percentual.TARDIO=0,e.percentual.NEOTOTAL=0,e.percentual.POS=0),e.taxa={};let t=n.find(t=>t.x.getTime()==e.x.getTime());return t?(e.taxa.PRECOCE=1e3*e.absoluto.PRECOCE/t.valor,e.taxa.TARDIO=1e3*e.absoluto.TARDIO/t.valor,e.taxa.NEOTOTAL=1e3*e.absoluto.NEOTOTAL/t.valor,e.taxa.POS=1e3*e.absoluto.POS/t.valor):(e.taxa.PRECOCE=0,e.taxa.TARDIO=0,e.taxa.NEOTOTAL=0,e.taxa.POS=0),e})).sort((e,t)=>e.x.getTime()-t.x.getTime())}}function to(e,t){return i=>{let n=e(i[1]);(i=i[0]).forEach(e=>{let i=e;for(let n of(i.data=new Date(i.data),t))if(i.data>=new Date(n.inicio)&&i.data<=new Date(n.termino)){i.x=n.inicio;break}});let a=i,r=[];for(let o of a){let l=r.find(e=>e.x.getTime()==o.x.getTime());l?(l.absoluto[o.relparto]+=o.total,l.total+=o.total):r.push({x:o.x,absoluto:{ANTES:"ANTES"==o.relparto?o.total:0,DURANTE:"DURANTE"==o.relparto?o.total:0,DEPOIS:"DEPOIS"==o.relparto?o.total:0},total:o.total})}return t.filter(e=>!r.map(e=>e.x.getTime()).includes(e.inicio.getTime())).forEach(e=>{r.push({x:e.inicio,absoluto:{ANTES:0,DURANTE:0,DEPOIS:0},total:0})}),(r=r.map(e=>{e.percentual={},e.total?(e.percentual.ANTES=100*e.absoluto.ANTES/e.total,e.percentual.DURANTE=100*e.absoluto.DURANTE/e.total,e.percentual.DEPOIS=100*e.absoluto.DEPOIS/e.total):(e.percentual.ANTES=0,e.percentual.DURANTE=0,e.percentual.DEPOIS=0),e.taxa={};let t=n.find(t=>t.x.getTime()==e.x.getTime());return t?(e.taxa.ANTES=1e3*e.absoluto.ANTES/t.valor,e.taxa.DURANTE=1e3*e.absoluto.DURANTE/t.valor,e.taxa.DEPOIS=1e3*e.absoluto.DEPOIS/t.valor):(e.taxa.ANTES=0,e.taxa.DURANTE=0,e.taxa.DEPOIS=0),e})).sort((e,t)=>e.x.getTime()-t.x.getTime())}}function tl(e){return t=>{let i=[];t.forEach(t=>{let n=t;if(n.data=new Date(n.data),!(2011>n.data.getFullYear())){for(let a of e)if(n.data>=new Date(a.inicio)&&n.data<=new Date(a.termino)){n.x=a.inicio;break}i.push(n)}});let n=[];for(let a of i){let r=n.find(e=>e.x.getTime()==a.x.getTime());r?r.valor+=a.valor:n.push({x:a.x,valor:a.valor})}return n.filter(e=>e.x)}}function ts(e){return t=>{let i=[];t.forEach(t=>{let n=t;if(n.data=new Date(n.data),!(2011>n.data.getFullYear())){for(let a of e)if(n.data>=new Date(a.inicio)&&n.data<=new Date(a.termino)){n.x=a.inicio;break}i.push(n)}});let n=[];for(let a of i){let r=n.find(e=>e.x.getTime()==a.x.getTime());r?r.valor+=a.valor:n.push({x:a.x,valor:a.valor})}return n.filter(e=>e.x)}}function td(e,t,i){return async(n,a)=>{let r;return await i.fetchTotal(e.includes(n)?Math.floor(t.find(e=>e.sigla==n).codigo_sdv/1e4):t.find(e=>e.municipio==n).codigo_sdv,a)}}function tc(e,t,i){return async(n,a)=>{let r;return await i.fetchFetal(e.includes(n)?Math.floor(t.find(e=>e.sigla==n).codigo_sdv/1e4):t.find(e=>e.municipio==n).codigo_sdv,a)}}function tu(e,t){return i=>{let n=e(i[1]);i=i[0];let a=[];i.forEach(e=>{let i=e;if(i.data=new Date(i.data),!(2011>i.data.getFullYear())){for(let n of t)if(i.data>=new Date(n.inicio)&&i.data<=new Date(n.termino)){i.x=n.inicio;break}a.push(i)}});let r=[];for(let o of a){let l=r.find(e=>e.x.getTime()==o.x.getTime());l?l.absoluto+=o.valor:r.push({x:o.x,absoluto:o.valor})}return(r=r.filter(e=>e.x)).map(e=>{e.percentual={};let t=n.find(t=>t.x.getTime()==e.x.getTime());return t?e.percentual=100*e.absoluto/t.valor:e.percentual=0,e})}}function tf(e,t){return i=>{let n=e(i[1]);i=i[0];let a=[];i.forEach(e=>{let i=e;if(i.data=new Date(i.data),!(2011>i.data.getFullYear())){for(let n of t)if(i.data>=new Date(n.inicio)&&i.data<=new Date(n.termino)){i.x=n.inicio;break}a.push(i)}});let r=[];for(let o of a){let l=r.find(e=>e.x.getTime()==o.x.getTime());l?l.absoluto+=o.valor:r.push({x:o.x,absoluto:o.valor})}return(r=r.filter(e=>e.x)).map(e=>{e.percentual={};let t=n.find(t=>t.x.getTime()==e.x.getTime());return t?e.percentual=100*e.absoluto/t.valor:e.percentual=0,e})}}function tp(e){return e`## Imports`}function tm(e){return e("sortablejs/Sortable.js")}function th(e){return e("d3@5")}function tv(e,t,i,n,a,r,o){return function(l,s,d=l,c=s,u=e.width,f=60){var p=[l,s+1],m=e.height,h=e.margin,v=u-f-h.right,b=m-h.top-h.bottom,g=t.scaleLinear().domain(p).range([0,v]),x=t.select(i.svg(u,m));let y=x.append("g").attr("transform",`translate(${f}, ${h.top})`);var w=y.append("text").attr("id","labelleft").attr("x",0).attr("y",b+5).style("display",60==f?"inline":"none").text(n[a[p[0]].inicio.getMonth()]+" "+a[p[0]].inicio.getFullYear()),A=y.append("text").attr("id","labelright").attr("x",0).attr("y",b+5).style("display",60==f?"inline":"none").text(n[a[p[1]].termino.getMonth()]+" "+a[p[1]].termino.getFullYear());y.append("text").attr("id","labelleft2").attr("x",-8).attr("y",b-b/2+1).style("alignment-baseline","middle").text(2012),y.append("text").attr("id","labelright2").attr("x",v+8).attr("y",b-b/2+1).style("alignment-baseline","middle").text(2019);var _=t.brushX().extent([[0,0],[v,b]]).on("brush",function(){var e=t.event.selection;w.attr("x",e[0]).text(n[a[Math.round(g.invert(e[0]))].inicio.getMonth()]+" "+a[Math.round(g.invert(e[0]))].inicio.getFullYear()),A.attr("x",e[1]).text(n[a[Math.round(g.invert(e[1]))].termino.getMonth()]+" "+a[Math.round(g.invert(e[1]))].termino.getFullYear()),S.attr("display",null).attr("transform",function(t,i){return"translate("+[e[i],-b/4]+")"}),x.node().value=e.map(e=>Math.round(g.invert(e))),x.node().dispatchEvent(new CustomEvent("input"))}).on("end",function(){if(t.event.sourceEvent){var e=t.event.selection.map(g.invert).map(Math.round);t.select(this).transition().call(t.event.target.move,e.map(g)),r.value=Math.max(Math.min(new Date(r.value),a[x.node().value[1]-2].termino),a[x.node().value[0]].inicio)}}),C=y.append("g").attr("class","brush").call(_),E=function(e){return"M -3 12 A 3 3 0 0 1 3 12 V 18 A 3 3 0 0 1 -3 18 Z"},S=C.selectAll(".handle--custom").data([{type:"w"},{type:"e"}]).enter().append("path").attr("class","handle--custom").attr("stroke","#000").attr("fill","#151472").attr("cursor","ew-resize").attr("y",b/2).attr("d",E);return C.selectAll(".overlay").attr("fill","#E5E5E5").each(function(e){e.type="selection"}).on("mousedown touchstart",function(){var e=g(1)-g(0),t=o.mouse(this)[0],i=t-e/2,n=t+e/2;o.select(this.parentNode).call(_.move,n>v?[v-e,v]:i<0?[0,e]:[i,n])}),C.call(_.move,[d,c+1].map(g)),y.append("g").selectAll("line").data(a.filter(e=>1==e.semana).map(e=>a.findIndex(t=>t==e))).enter().append("line").attr("x1",e=>g(e)).attr("x2",e=>g(e)).attr("y1",0).attr("y2",b).style("stroke","#ccc"),x.node()}}function tb(){return{width:600,height:60,margin:{top:20,bottom:20,left:60,right:60}}}function tg(e){return e`
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
`}function tx(e){return e("https://bundle.run/lz-string@1.4.4")}function ty(e){return e`<style>
  @import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap);
  @import url(https://fonts.googleapis.com/icon?family=Material+Icons);    
</style>
`}function tw(e){return e`
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
`}function tA(e,t){let n=e.module();function a(){return this.url}let r=new Map([["semanas_epidemiologicas_estendido.csv",{url:new i.U(i(1400)),mimeType:"text/csv",toString:a}],["municipios2.csv",{url:new i.U(i(2054)),mimeType:"text/csv",toString:a}]]);n.builtin("FileAttachment",e.fileAttachments(e=>r.get(e))),n.variable(t()).define(["md"],D),n.define("initial mp",["urlParamConf","ampliaMenu"],N),n.variable(t("mutable mp")).define("mutable mp",["Mutable","initial mp"],(e,t)=>new e(t)),n.variable(t("mp")).define("mp",["mutable mp"],e=>e.generator),n.variable(t("div_controles")).define("div_controles",["html","barra_municipios","viewof intervalo"],L),n.variable(t("vis")).define("vis",["conf_trilhas","funcoesGeradoras","gAdicionaTrilha","Sortable","mutable conf_trilhas","d3","saveState"],R),n.variable(t("maxMunicipios")).define("maxMunicipios",P),n.variable(t("viewof intervalo")).define("viewof intervalo",["urlParamConf","slider_snap","defaultConf"],F),n.variable(t("intervalo")).define("intervalo",["Generators","viewof intervalo"],(e,t)=>e.input(t)),n.variable(t("barra_municipios")).define("barra_municipios",["html","sel_municipios","remove_mun_button","maxMunicipios","menu_municipios"],B),n.variable(t("menu_municipios")).define("menu_municipios",["d3","html","municipios","agregacoes","sel_municipios","maxMunicipios","mutable sel_municipios","colors","sessionStorage","conf_trilhas","funcoesFetch","mp","mutable data","funcoesProc","data"],U),n.variable(t("listenerFiltroGlobal")).define("listenerFiltroGlobal",["mutable conf_trilhas","mutable data","mutable sel_municipios","funcoesFetch","funcoesProc"],$),n.variable(t("remove_mun_button")).define("remove_mun_button",["d3","sel_municipios","mutable sel_municipios","sessionStorage","mutable data","data","agregacoes","municipios"],j),n.variable(t("remove_trilha_button")).define("remove_trilha_button",["d3","removeTrilha"],z),n.variable(t("copy_button")).define("copy_button",["d3","copyTrilha"],G),n.variable(t("funcoesGeradoras")).define("funcoesGeradoras",["gPM25","gNEONATAL","gRELPARTO","gFETAL","gTOTAL"],H),n.variable(t("funcoesProc")).define("funcoesProc",["procPM25","procNeoNatal","procTOTAL","procFetal","procRelParto"],V),n.variable(t("funcoesFetch")).define("funcoesFetch",["fetchPM25","fetchNeoNatal","fetchTOTAL","fetchFetal","fetchRelParto"],q),n.variable(t("corTrilha")).define("corTrilha",W),n.variable(t("corTrilhaFraco")).define("corTrilhaFraco",Z),n.variable(t("style")).define("style",["html"],X),n.variable(t("suscetibilidade")).define("suscetibilidade",["sel","d3"],J),n.variable(t("legendTooltip")).define("legendTooltip",["d3","sel_pm25","sel","valoresLista","corTrilhaFraco"],Y),n.variable(t("valoresLista")).define("valoresLista",["sel_pm25","sel","sel_municipios","data","semanas_epidemiologicas","d3","unidades","agregacoes","siglas","bisector"],Q),n.variable(t("mouseDownHandler")).define("mouseDownHandler",["data","bisector","mutable sel_pm25","mutable sel","d3"],K),n.variable(t("gPM25")).define("gPM25",["Plot","width","height","formatTime","conf_trilhas","semanas_epidemiologicas","intervalo","maxScale","indicador","padroes","data","siglas","filterDate","janela","lineWidth","sel_municipios","bisector","sel_pm25","legendTooltip","suscetibilidade","mouseDownHandler","html","corTrilha","d3","removeTrilha","copy_button","checkMediaMovel","checkTempo","inner_slider"],ee),n.variable(t("gFETAL")).define("gFETAL",["sel_municipios","data","gLoadingTrilha","conf_trilhas","mp","Plot","width","height","semanas_epidemiologicas","intervalo","filterDate","janela","lineWidthFiltered","lineWidth","bisector","sel","legendTooltip","mouseDownHandler","html","corTrilha","d3","removeTrilha","copy_button","checkMediaMovel","checkTempo","checkEscala","inner_slider","checkFiltros"],et),n.variable(t("gNEONATAL")).define("gNEONATAL",["sel_municipios","data","gLoadingTrilha","conf_trilhas","mp","Plot","width","height","semanas_epidemiologicas","intervalo","filterDate","janela","lineWidthFiltered","lineWidth","bisector","sel","legendTooltip","mouseDownHandler","html","corTrilha","d3","removeTrilha","copy_button","checkNeoNatal","checkMediaMovel","checkTempo","checkEscala","inner_slider","checkFiltros"],ei),n.variable(t("gRELPARTO")).define("gRELPARTO",["sel_municipios","data","gLoadingTrilha","conf_trilhas","mp","Plot","width","height","semanas_epidemiologicas","intervalo","filterDate","janela","lineWidthFiltered","lineWidth","bisector","sel","legendTooltip","mouseDownHandler","html","corTrilha","d3","removeTrilha","copy_button","checkRelParto","checkMediaMovel","checkTempo","checkEscala","inner_slider","checkFiltros"],en),n.variable(t("gTOTAL")).define("gTOTAL",["sel_municipios","data","gLoadingTrilha","conf_trilhas","mp","Plot","width","height","semanas_epidemiologicas","intervalo","filterDate","janela","lineWidthFiltered","lineWidth","bisector","sel","legendTooltip","mouseDownHandler","html","corTrilha","d3","removeTrilha","copy_button","checkMediaMovel","checkTempo","checkEscala","inner_slider","checkFiltros"],ea),n.variable(t("gAdicionaTrilha")).define("gAdicionaTrilha",["html","d3","removeTrilha","copyTrilha","width","addTrilha"],er),n.variable(t("gLoadingTrilha")).define("gLoadingTrilha",["html","d3","removeTrilha","copyTrilha","width"],eo),n.variable(t("copyTrilha")).define("copyTrilha",["conf_trilhas","d3","listenerFiltro","mutable conf_trilhas","data","mutable data"],el),n.variable(t("removeTrilha")).define("removeTrilha",["mutable conf_trilhas","conf_trilhas","mutable data","data"],es),n.variable(t("addTrilha")).define("addTrilha",["d3","conf_trilhas","mutable conf_trilhas","sel_municipios","fetchPM25","mutable data","procPM25","ampliaMenu","corTrilha","listenerFiltro","fetchNeoNatal","procNeoNatal","fetchRelParto","procRelParto","fetchFetal","procFetal","fetchTOTAL","procTOTAL"],ed),n.variable(t("inner_slider")).define("inner_slider",["conf_trilhas","slider_snap","width","mutable conf_trilhas"],ec),n.variable(t("checkPoluente")).define("checkPoluente",["conf_trilhas","mutable conf_trilhas"],eu),n.variable(t("checkFiltros")).define("checkFiltros",["conf_trilhas","mutable data","ampliaMenu","mp","corTrilha","listenerFiltro","mutable sel_municipios","funcoesFetch","funcoesProc","mutable conf_trilhas"],ef),n.variable(t("checkTempo")).define("checkTempo",["conf_trilhas","intervalo","mutable conf_trilhas"],ep),n.variable(t("checkNeoNatal")).define("checkNeoNatal",["conf_trilhas","mutable conf_trilhas"],em),n.variable(t("checkRelParto")).define("checkRelParto",["conf_trilhas","mutable conf_trilhas"],eh),n.variable(t("checkEscala")).define("checkEscala",["conf_trilhas","mutable conf_trilhas"],ev),n.variable(t("checkMediaMovel")).define("checkMediaMovel",["conf_trilhas","mutable conf_trilhas"],eb),n.variable(t("converteIntervalo")).define("converteIntervalo",["semanas_epidemiologicas"],eg),n.define("initial conf_trilhas",["urlParamConf","ampliaMenu","corTrilha"],ex),n.variable(t("mutable conf_trilhas")).define("mutable conf_trilhas",["Mutable","initial conf_trilhas"],(e,t)=>new e(t)),n.variable(t("conf_trilhas")).define("conf_trilhas",["mutable conf_trilhas"],e=>e.generator),n.variable(t("unidades")).define("unidades",ey),n.variable(t("lineWidth")).define("lineWidth",ew),n.variable(t("lineWidthFiltered")).define("lineWidthFiltered",eA),n.define("initial firstload",e_),n.variable(t("mutable firstload")).define("mutable firstload",["Mutable","initial firstload"],(e,t)=>new e(t)),n.variable(t("firstload")).define("firstload",["mutable firstload"],e=>e.generator),n.define("initial municipiosDefault",["urlParamConf","defaultConf"],eC),n.variable(t("mutable municipiosDefault")).define("mutable municipiosDefault",["Mutable","initial municipiosDefault"],(e,t)=>new e(t)),n.variable(t("municipiosDefault")).define("municipiosDefault",["mutable municipiosDefault"],e=>e.generator),n.variable(t("onfirstload")).define("onfirstload",["firstload","mutable municipiosDefault","mutable sel_municipios","conf_trilhas","funcoesFetch","mp","mutable data","funcoesProc","listenerFiltro","listenerFiltroGlobal","mutable firstload"],eE),n.variable(t("saveState")).define("saveState",["sessionStorage","getCurrentConf","mutable sel_municipios","viewof intervalo"],eS),n.variable(t("listenerFiltro")).define("listenerFiltro",["mutable data","mutable sel_municipios","funcoesFetch","funcoesProc"],ek),n.variable(t("viewof janela")).define("viewof janela",["Inputs"],eT),n.variable(t("janela")).define("janela",["Generators","viewof janela"],(e,t)=>e.input(t)),n.variable(t("viewof indicador")).define("viewof indicador",["Inputs"],eO),n.variable(t("indicador")).define("indicador",["Generators","viewof indicador"],(e,t)=>e.input(t)),n.variable(t("colors")).define("colors",eI),n.define("initial sel_municipios",eM),n.variable(t("mutable sel_municipios")).define("mutable sel_municipios",["Mutable","initial sel_municipios"],(e,t)=>new e(t)),n.variable(t("sel_municipios")).define("sel_municipios",["mutable sel_municipios"],e=>e.generator),n.define("initial sel",["semanas_epidemiologicas","d3","urlParamConf","defaultConf"],eD),n.variable(t("mutable sel")).define("mutable sel",["Mutable","initial sel"],(e,t)=>new e(t)),n.variable(t("sel")).define("sel",["mutable sel"],e=>e.generator),n.define("initial sel_pm25",["sel"],eN),n.variable(t("mutable sel_pm25")).define("mutable sel_pm25",["Mutable","initial sel_pm25"],(e,t)=>new e(t)),n.variable(t("sel_pm25")).define("sel_pm25",["mutable sel_pm25"],e=>e.generator),n.variable(t("bisector")).define("bisector",["d3"],eL),n.variable(t("formatTime")).define("formatTime",["d3"],eR),n.variable(t("periodoInicio")).define("periodoInicio",["intervalo"],eP),n.variable(t("periodoFim")).define("periodoFim",["intervalo"],eF),n.variable(t("filterDate")).define("filterDate",["conf_trilhas","janela","semanas_epidemiologicas","periodoInicio","periodoFim"],eB),n.variable(t("height")).define("height",eU),n.variable(t("sqlSisam")).define("sqlSisam",["municipios","SQLiteDatabaseClient"],e$),n.variable(t("style2")).define("style2",["html"],ej),n.variable(t("municipios")).define("municipios",["FileAttachment"],ez),n.variable(t("semanas_epidemiologicas")).define("semanas_epidemiologicas",["FileAttachment"],eG),n.variable(t("siglas")).define("siglas",eH),n.define("initial data",eV),n.variable(t("mutable data")).define("mutable data",["Mutable","initial data"],(e,t)=>new e(t)),n.variable(t("data")).define("data",["mutable data"],e=>e.generator),n.variable(t("months")).define("months",eq),n.variable(t("agregacoes")).define("agregacoes",["siglas"],eW),n.variable(t("queryLocalSISAM")).define("queryLocalSISAM",["agregacoes","siglas","municipios"],eZ),n.variable(t()).define(["md"],eX),n.variable(t("objToUrlParam")).define("objToUrlParam",["lz"],eJ),n.variable(t("urlParamToObj")).define("urlParamToObj",["lz"],eY),n.variable(t("getCurrentConf")).define("getCurrentConf",["mutable mp","mutable sel_municipios","intervalo","mutable conf_trilhas"],eQ),n.variable(t("defaultConf")).define("defaultConf",eK),n.variable(t("urlParamConf")).define("urlParamConf",["URLSearchParams","urlParamToObj","sessionStorage","defaultConf"],e0),n.variable(t("copyToClipboard")).define("copyToClipboard",e1),n.variable(t("currentHref")).define("currentHref",e2),n.variable(t("copyLinkButton")).define("copyLinkButton",["svg","currentHref","objToUrlParam","getCurrentConf","copyToClipboard"],e5),n.variable(t("linkParam")).define("linkParam",["objToUrlParam","getCurrentConf"],e3),n.variable(t()).define(["md"],e4),n.variable(t("maxScale")).define("maxScale",e6),n.variable(t("volume_mol")).define("volume_mol",e8),n.variable(t("massa_mol")).define("massa_mol",e7),n.variable(t("padroes")).define("padroes",e9),n.variable(t("fetchPM25")).define("fetchPM25",["indicador","sqlSisam"],te),n.variable(t("procPM25")).define("procPM25",["semanas_epidemiologicas","indicador","massa_mol","volume_mol"],tt),n.variable(t()).define(["md"],ti),n.variable(t("fetchNeoNatal")).define("fetchNeoNatal",["agregacoes","municipios","datasource_sim"],tn),n.variable(t("fetchRelParto")).define("fetchRelParto",["agregacoes","municipios","datasource_sim"],ta),n.variable(t("procNeoNatal")).define("procNeoNatal",["procTOTALUnfiltered","semanas_epidemiologicas"],tr),n.variable(t("procRelParto")).define("procRelParto",["procTOTALUnfiltered","semanas_epidemiologicas"],to),n.variable(t("procTOTALUnfiltered")).define("procTOTALUnfiltered",["semanas_epidemiologicas"],tl),n.variable(t("procFetalUnfiltered")).define("procFetalUnfiltered",["semanas_epidemiologicas"],ts),n.variable(t("fetchTOTAL")).define("fetchTOTAL",["agregacoes","municipios","datasource_sim"],td),n.variable(t("fetchFetal")).define("fetchFetal",["agregacoes","municipios","datasource_sim"],tc),n.variable(t("procTOTAL")).define("procTOTAL",["procTOTALUnfiltered","semanas_epidemiologicas"],tu),n.variable(t("procFetal")).define("procFetal",["procFetalUnfiltered","semanas_epidemiologicas"],tf),n.variable(t()).define(["md"],tp),n.variable(t("Sortable")).define("Sortable",["require"],tm),n.variable(t("d3_5")).define("d3_5",["require"],th),n.variable(t("slider_snap")).define("slider_snap",["layout","d3_5","DOM","months","semanas_epidemiologicas","mutable sel","d3"],tv),n.variable(t("layout")).define("layout",tb),n.variable(t("style_slider")).define("style_slider",["html"],tg);let o=e.module(M);return n.import("menuMortalidade","ampliaMenu",o),n.import("datasource_sim",o),n.variable(t("lz")).define("lz",["require"],tx),n.variable(t("style_menu")).define("style_menu",["html"],ty),n.variable(t("styleMenuMun")).define("styleMenuMun",["html"],tw),n}i.d(t,{Z:function(){return tA}})},3474:function(e,t,i){"use strict";function n(e){return e`# Amplia Saude - Fonte de Dados e Menu - AGO2022`}function a(e){return e`## Menu Amplia`}function r(e,t){return function(i,n){let a=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M7.87022 11.875L8.27489 11.5813L8.27479 11.5812L8.27437 11.5806L8.27271 11.5783L8.26613 11.5693L8.24029 11.5336L8.14075 11.3965L7.77298 10.8897L6.54497 9.19795C5.5772 7.86508 4.40312 6.24886 3.57783 5.11549C3.4851 4.9864 3.47887 4.82826 3.53937 4.69659C3.59954 4.56564 3.70401 4.5 3.81824 4.5H15.1818C15.296 4.5 15.4005 4.56564 15.4606 4.69659C15.5211 4.82825 15.5149 4.98637 15.4222 5.11546C14.5967 6.24906 13.4246 7.86547 12.4588 9.19836C11.9758 9.86506 11.5443 10.4609 11.2336 10.8901L10.8667 11.397L10.7674 11.5342L10.7416 11.5698L10.7351 11.5788L10.7334 11.5811L10.733 11.5817L10.7329 11.5818L11.1379 11.875L10.7329 11.5819L10.6379 11.7131V11.875V17.125C10.6379 17.363 10.4624 17.5 10.321 17.5H8.68715C8.54577 17.5 8.37022 17.363 8.37022 17.125V11.875V11.7127L8.27493 11.5814L7.87022 11.875Z" stroke="white"/>
<path d="M18.75 11.5C18.75 13.8472 16.8472 15.75 14.5 15.75C12.1528 15.75 10.25 13.8472 10.25 11.5C10.25 9.15279 12.1528 7.25 14.5 7.25C16.8472 7.25 18.75 9.15279 18.75 11.5Z" fill="white" stroke="#151472" stroke-width="0.5"/>
<path d="M16.8126 9.70565C16.9556 9.56262 16.9556 9.33072 16.8126 9.18769C16.6696 9.04466 16.4377 9.04466 16.2946 9.18769L14.5001 10.9822L12.7056 9.18769C12.5626 9.04466 12.3307 9.04466 12.1877 9.18769C12.0447 9.33072 12.0447 9.56262 12.1877 9.70565L13.9822 11.5001L12.1877 13.2946C12.0447 13.4377 12.0447 13.6696 12.1877 13.8126C12.3307 13.9556 12.5626 13.9556 12.7056 13.8126L14.5001 12.0181L16.2946 13.8126C16.4377 13.9556 16.6696 13.9556 16.8126 13.8126C16.9556 13.6696 16.9556 13.4377 16.8126 13.2946L15.0181 11.5001L16.8126 9.70565Z" fill="#151472"/>
</svg>`,r=`<svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8C2 6 2.39956 2 5.9956 2C11.2138 2 8.9923 8 12.9879 8C17.4829 8 16.9835 4 16.9835 2" stroke="#151472" stroke-width="3"/>
</svg>`,o=`<svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 7C1 5 1.39956 1 4.9956 1C10.2138 1 7.9923 7 11.9879 7C16.4829 7 15.9835 3 15.9835 1" stroke="#151472" stroke-width="1.5" stroke-dasharray="2.5 1"/>
</svg>`,l=0,s=Symbol(),d=Symbol(),c=Symbol();function u(a,r,o,u){r=r||"";let f=document.createElement("div"),m={},h={},v={};Object.defineProperty(m,"expression",{get(){let e={};for(let t in m){let i=m[t];"expression"!=t&&(e[i[0]]=i[1])}return e}}),Object.defineProperty(m,"urlids",{get(){let e=[];for(let t in v)e.push(v[t]);return e.join("")}});let b=document.createElement("div"),g=document.createElement("div"),x=document.createElement("div"),y=document.createElement("div"),w=document.createElement("div"),A=document.createElement("div");b.classList.add("menuAbas"),g.classList.add("abas"),y.classList.add("legenda"),x.classList.add("menuCompacto"),w.classList.add("background-1"),A.classList.add("background-2"),b.append(g),b.append(x),b.append(w),b.append(A),x.append(y),b.setAttribute("style",`--corFundoMenu: ${o};`),u&&b.classList.add("principal"),i.forEach((i,a)=>{!function(i,a,o){let u="m"+ ++l,p=document.createElement("div"),b=document.createElement("div"),g=document.createElement("div"),x=document.createElement("div"),y=document.createElement("div"),w=document.createElement("div"),A=document.createElement("div"),_=document.createElement("div"),C=o+2;m[a.varName]="",h[a.varName]="",v[a.varName]="";let E=[];function S(){p[d](),f.dispatchEvent(new t("input"))}p[d]=function(){let t=E.filter(e=>e.checked).map(t=>e(t.value)),i=E.filter(e=>e.checked).map(e=>e[c].expression),n=E.filter(e=>e.checked).map(e=>e[c].urlid);m[a.varName]=[a.attrIndex,i],v[a.varName]=n.join(""),t.length?b.classList.add("selecionado"):b.classList.remove("selecionado");let r=t.join(e(" ou "));y.innerHTML=r,y.setAttribute("title",r),h[a.varName]=r},p.classList.add("itemMenuCompacto"),p.classList.add(a.varName),b.classList.add("titulo"),b.innerHTML=e(a.title),x.classList.add("valoresSelecionados"),y.classList.add("textoValoresSelecionados"),w.classList.add("icone"),w.innerHTML="expand_more",p.append(b),g.append(x),p.append(g),x.append(w),x.append(y),A.classList.add("submenu"),A.style["grid-column"]=C+"/"+(C+1),_.classList.add("itens"),_.classList.add("i"+o),_.classList.add("ABA"+n),A.append(_),p[s]=A,p.style["grid-column-start"]=C,p.addEventListener("click",e=>{if(p.classList.contains("aberto"))p.classList.remove("aberto"),A.classList.remove("aberto");else{let t=p.parentNode.querySelector(".aberto");t&&(t.classList.remove("aberto"),t[s].classList.remove("aberto")),p.classList.add("aberto"),A.classList.add("aberto")}});let k=null;a.itens.forEach((t,i)=>{let n=document.createElement("div"),o=document.createElement("label"),l=document.createElement("input");o.innerHTML=e(t.name),o.setAttribute("for",u+i),l.setAttribute("type",a.input),l.setAttribute("value",t.name),r.indexOf(t.urlid)>=0&&l.setAttribute("checked","checked"),l.setAttribute("id",u+i),l.setAttribute("name","radio"===a.input?u:u+i),l[c]=t,n.classList.add("item"),n.append(l),n.append(o),_.append(n),E.push(l),l.addEventListener("input",e=>{e.stopPropagation(),S()}),"radio"==a.input&&l.addEventListener("click",e=>{if(e.target===k){e.target.checked=!1,k=null,S();return}k=e.target})}),i.append(p),i.append(A),p[d]()}(x,i,a)});let _=f.attachShadow({mode:"open"});return _.append(function(){let e=document.createElement("style");return e.textContent=`                  
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
      `,e}()),_.append(b),f.limpa=function(){let e=x.querySelectorAll("input:checked");for(let i=0;i<e.length;i++)e[i].checked=!1;let n=x.querySelectorAll(".itemMenuCompacto");for(let a=0;a<n.length;a++)n[a][d]();f.dispatchEvent(new t("input"))},f.cloneMenu=function(){let e=x.querySelectorAll("input:checked"),t=p(a),i=t.shadowRoot.querySelectorAll("input");for(let n=0;n<e.length;n++)for(let r=0;r<i.length;r++)e[n][c]===i[r][c]&&(i[r].checked=!0);let o=t.shadowRoot.querySelectorAll(".itemMenuCompacto");for(let l=0;l<o.length;l++)o[l][d]();return t},Object.defineProperty(f,"value",{get:()=>m}),Object.defineProperty(f,"texto",{get:()=>h}),[f,g,y]}function f(t,i,r){let o,l;if(o=document.createElement("div"),(l=document.createElement("span")).classList.add("tituloAba"),l.innerHTML=e(i),o.classList.add("aba"),o.appendChild(l),n===r){let s,d,c;o.classList.add("selecionada"),(c=document.createElement("div")).classList.add("limpaFiltro"),s=document.createElement("span"),d=document.createElement("span"),s.innerHTML=a,d.innerHTML=e("LIMPAR<br>FILTROS"),c.appendChild(s),c.appendChild(d),o.appendChild(c),c.addEventListener("click",e=>{t.limpa(),t.dispatchEvent(new CustomEvent("limparFiltros",{detail:{index:r+1}}))})}else o.addEventListener("click",e=>{t.dispatchEvent(new CustomEvent("aba",{detail:{index:r+1}}))});return o}function p(e,t,n){let[a,r,l]=u(null,t,n,!1),s=a.shadowRoot.querySelector(".menuCompacto");s.style["grid-template-columns"]=`110px repeat(${i.length},84px) 0px`,s.style.gap="2px",l.style["background-color"]="#ffffff66",l.style.color="var(--corFonte)",l.style["border-radius"]="0px 0px 0px 8px";let d=document.createElement("div"),c=document.createElement("div");return d.classList.add("titulo"),d.innerHTML="&nbsp",c.classList.add("icone"),c.innerHTML=o,l.append(d),l.append(c),a}return{principal:function(t){let[i,n,a]=u(null,t,"#E5E5E5",!0);n.append(f(i,"NASCIDOS VIVOS",0)),n.append(f(i,"CARACTER\xcdSTICAS DO NASCIMENTO",1)),n.append(f(i,"MORTALIDADE PERINATAL E INFANTIL",2));let o=document.createElement("div"),l=document.createElement("div");return o.classList.add("titulo"),l.classList.add("icone"),l.innerHTML=r,o.innerHTML=e("CONSULTA<br>PRINCIPAL"),a.append(o),a.append(l),i},local:p}}}function o(e){return e`### Nascidos Vivos`}function l(e){return e.principal()}function s(){return[{title:"PESO AO<br>NASCER",varName:"PESO",ordinal:!0,input:"checkbox",attrIndex:0,itens:[{name:"Normal",style:[],expression:[3],urlid:"A"},{name:"Baixo peso",style:["alta-influencia"],expression:[2],urlid:"B"},{name:"Muito baixo peso",style:["alta-influencia"],expression:[1],urlid:"C"},{name:"Ignorado",style:[],expression:[0],urlid:"D"}]},{title:"IDADE<br>GESTACIONAL",varName:"IDADE_GESTACIONAL",ordinal:!0,input:"checkbox",attrIndex:1,itens:[{name:"P\xf3s-termo",style:[],expression:[7],urlid:"E"},{name:"A termo tardio",style:[],expression:[6],urlid:"F"},{name:"A termo completo",style:[],expression:[5],urlid:"G"},{name:"A termo precoce",style:[],expression:[4],urlid:"H"},{name:"Pr\xe9-termo moderado",style:["alta-influencia"],expression:[3],urlid:"I"},{name:"Muito pr\xe9-termo",style:["alta-influencia"],expression:[2],urlid:"J"},{name:"Pr\xe9-termo extremo",style:["alta-influencia"],expression:[1],urlid:"K"},{name:"Ignorado",style:[],expression:[0],urlid:"L"}]},{title:"ADEQUA\xc7\xc3O \xc0<br>IDADE GESTAC.",varName:"ADEQ_IDADE_GESTACIONAL",ordinal:!0,input:"checkbox",attrIndex:2,itens:[{name:"GIG",style:[],expression:[3],urlid:"M"},{name:"AIG",style:["alta-influencia"],expression:[2],urlid:"N"},{name:"PIG",style:["alta-influencia"],expression:[1],urlid:"O"},{name:"Ignorado",style:[],expression:[0],urlid:"P"}]},{title:"SEXO",varName:"SEXO",ordinal:!1,input:"checkbox",attrIndex:3,itens:[{name:"Feminino",style:[],expression:[2],urlid:"Q"},{name:"Masculino",style:[],expression:[1],urlid:"R"},{name:"Indeterminado",style:[],expression:[0],urlid:"S"}]},{title:"ANOMALIA<br>CONG\xcaNITA",varName:"ANOMAL_CONGENITA",ordinal:!1,input:"radio",attrIndex:4,itens:[{name:"N\xe3o",style:[],expression:[2],urlid:"T"},{name:"Sim",style:["alta-influencia"],expression:[1],urlid:"U"},]},{title:"RA\xc7A/COR<br>DA M\xc3E",varName:"RACA_COR_MAE",ordinal:!1,input:"checkbox",attrIndex:5,itens:[{name:"Branca",style:[],expression:[1],urlid:"V"},{name:"Preta",style:[],expression:[2],urlid:"W"},{name:"Parda",style:[],expression:[4],urlid:"X"},{name:"Outros",style:[],expression:[3,4,5],urlid:"Y"},{name:"Ignorado",style:[],expression:[0],urlid:"Z"}]},{title:"ESCOLARIDADE<br>DA M\xc3E",varName:"ESCOLARIDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:6,itens:[{name:"Superior",style:[],expression:[7],urlid:"a"},{name:"Ensino m\xe9dio",style:[],expression:[6],urlid:"b"},{name:"Fundamental completo",style:[],expression:[5],urlid:"c"},{name:"Fundamental incompleto",style:[],expression:[4,3,2],urlid:"d"},{name:"Sem",style:[],expression:[1],urlid:"e"},{name:"Ignorado",style:[],expression:[0],urlid:"f"}]},{title:"ESTADO CIVIL<br>DA M\xc3E",varName:"ESTADO_CIVIL_MAE",ordinal:!1,input:"checkbox",attrIndex:7,itens:[{name:"Solteira",style:[],expression:[1],urlid:"g"},{name:"Casada ou uni\xe3o est\xe1vel",style:[],expression:[2],urlid:"h"},{name:"Vi\xfava",style:[],expression:[3],urlid:"i"},{name:"Separada ou divorcidada",style:[],expression:[4],urlid:"j"},{name:"Ignorado",style:[],expression:[0],urlid:"k"}]},{title:"IDADE<br>DA M\xc3E",varName:"IDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:8,itens:[{name:"10-14",style:[],expression:[1],urlid:"l"},{name:"15-19",style:[],expression:[2],urlid:"m"},{name:"20-29",style:[],expression:[3],urlid:"n"},{name:"30-39",style:[],expression:[4],urlid:"o"},{name:"40-49",style:["alta-influencia"],expression:[5],urlid:"p"},{name:"50+",style:["alta-influencia"],expression:[6],urlid:"q"},{name:"Ignorado",style:[],expression:[0],urlid:"r"}]},{title:"CONSULTAS<BR>DE PR\xc9 NATAL",varName:"CONSULTAS",ordinal:!0,input:"checkbox",attrIndex:9,itens:[{name:"7+",style:[],expression:[4],urlid:"s"},{name:"4 a 6",style:[],expression:[3],urlid:"t"},{name:"1 a 3",style:["alta-influencia"],expression:[2],urlid:"u"},{name:"0",style:["alta-influencia"],expression:[1],urlid:"v"},{name:"Ignorado",style:[],expression:[0],urlid:"w"}]},{title:"TIPO<br>PARTO",varName:"PARTO",ordinal:!1,input:"checkbox",attrIndex:10,itens:[{name:"Vaginal",style:[],expression:[1],urlid:"x"},{name:"Ces\xe1rio",style:[],expression:[2],urlid:"y"},{name:"Indeterminado",style:[],expression:[0],urlid:"z"}]},{title:"TRAB PARTO<br>INDUZIDO",varName:"STTRABPART",ordinal:!1,input:"radio",attrIndex:11,itens:[{name:"SIM",style:[],expression:[1],urlid:"9"},{name:"N\xc3O",style:[],expression:[2],urlid:"8"},]},{title:"ADEQUA\xc7\xc3O<br>PR\xc9 NATAL",varName:"KOTELCHUCK",ordinal:!0,input:"checkbox",attrIndex:12,itens:[{name:"N\xe3o fez",style:["alta-influencia"],expression:[1],urlid:"7"},{name:"Inadequado",style:["alta-influencia"],expression:[2],urlid:"6"},{name:"Intermedi\xe1rio",style:[],expression:[3],urlid:"5"},{name:"Adequado",style:[],expression:[4],urlid:"4"},{name:"Mais que adequado",style:[],expression:[5],urlid:"3"},{name:"Ignorado",style:[],expression:[0],urlid:"2"},]},]}function d(e,t){return e(t,0)}function c(e){return e`### Características do Nascimento`}function u(e){return e.principal()}function f(){return[{title:"PESO AO<br>NASCER",varName:"PESO",ordinal:!0,input:"checkbox",attrIndex:0,itens:[{name:"Normal",style:[],expression:[3],urlid:"A"},{name:"Baixo peso",style:["alta-influencia"],expression:[2],urlid:"B"},{name:"Muito baixo peso",style:["alta-influencia"],expression:[1],urlid:"C"},{name:"Ignorado",style:[],expression:[0],urlid:"D"}]},{title:"IDADE<br>GESTACIONAL",varName:"IDADE_GESTACIONAL",ordinal:!0,input:"checkbox",attrIndex:1,itens:[{name:"P\xf3s-termo",style:[],expression:[7],urlid:"E"},{name:"A termo tardio",style:[],expression:[6],urlid:"F"},{name:"A termo completo",style:[],expression:[5],urlid:"G"},{name:"A termo precoce",style:[],expression:[4],urlid:"H"},{name:"Pr\xe9-termo tardio",style:["alta-influencia"],expression:[3],urlid:"I"},{name:"Pr\xe9-termo moderado",style:["alta-influencia"],expression:[2],urlid:"J"},{name:"Muito pr\xe9-termo",style:["alta-influencia"],expression:[1],urlid:"K"},{name:"Ignorado",style:[],expression:[0],urlid:"L"}]},{title:"ADEQUA\xc7\xc3O \xc0<br>IDADE GESTAC.",varName:"ADEQ_IDADE_GESTACIONAL",ordinal:!0,input:"checkbox",attrIndex:2,itens:[{name:"GIG",style:[],expression:[3],urlid:"M"},{name:"AIG",style:["alta-influencia"],expression:[2],urlid:"N"},{name:"PIG",style:["alta-influencia"],expression:[1],urlid:"O"},{name:"Ignorado",style:[],expression:[0],urlid:"P"}]},{title:"SEXO",varName:"SEXO",ordinal:!1,input:"checkbox",attrIndex:3,itens:[{name:"Feminino",style:[],expression:[2],urlid:"Q"},{name:"Masculino",style:[],expression:[1],urlid:"R"},{name:"Indeterminado",style:[],expression:[0],urlid:"S"}]},{title:"ANOMALIA<br>CONG\xcaNITA",varName:"ANOMAL_CONGENITA",ordinal:!1,input:"radio",attrIndex:4,itens:[{name:"N\xe3o",style:[],expression:[2],urlid:"T"},{name:"Sim",style:["alta-influencia"],expression:[1],urlid:"U"},]},{title:"RA\xc7A/COR<br>DA M\xc3E",varName:"RACA_COR_MAE",ordinal:!1,input:"checkbox",attrIndex:5,itens:[{name:"Branca",style:[],expression:[1],urlid:"V"},{name:"Preta",style:[],expression:[2],urlid:"W"},{name:"Parda",style:[],expression:[4],urlid:"X"},{name:"Outros",style:[],expression:[3,4,5],urlid:"Y"},{name:"Ignorado",style:[],expression:[0],urlid:"Z"}]},{title:"ESCOLARIDADE<br>DA M\xc3E",varName:"ESCOLARIDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:6,itens:[{name:"Superior",style:[],expression:[7],urlid:"a"},{name:"Ensino m\xe9dio",style:[],expression:[6],urlid:"b"},{name:"Fundamental completo",style:[],expression:[5],urlid:"c"},{name:"Fundamental incompleto",style:[],expression:[4,3,2],urlid:"d"},{name:"Sem",style:[],expression:[1],urlid:"e"},{name:"Ignorado",style:[],expression:[0],urlid:"f"}]},{title:"ESTADO CIVIL<br>DA M\xc3E",varName:"ESTADO_CIVIL_MAE",ordinal:!1,input:"checkbox",attrIndex:7,itens:[{name:"Solteira",style:[],expression:[1],urlid:"g"},{name:"Casada ou uni\xe3o est\xe1vel",style:[],expression:[2],urlid:"h"},{name:"Vi\xfava",style:[],expression:[3],urlid:"i"},{name:"Separada ou divorcidada",style:[],expression:[4],urlid:"j"},{name:"Ignorado",style:[],expression:[0],urlid:"k"}]},{title:"IDADE<br>DA M\xc3E",varName:"IDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:8,itens:[{name:"10-14",style:[],expression:[1],urlid:"l"},{name:"15-19",style:[],expression:[2],urlid:"m"},{name:"20-29",style:[],expression:[3],urlid:"n"},{name:"30-39",style:[],expression:[4],urlid:"o"},{name:"40-49",style:["alta-influencia"],expression:[5],urlid:"p"},{name:"50+",style:["alta-influencia"],expression:[6],urlid:"q"},{name:"Ignorado",style:[],expression:[0],urlid:"r"}]},{title:"APGAR<BR>5\xba MINUTO",varName:"APGAR5",ordinal:!0,input:"checkbox",attrIndex:13,itens:[{name:"Boa vitalidade",style:[],expression:[3],urlid:"s"},{name:"Asfixia moderada",style:["alta-influencia"],expression:[2],urlid:"t"},{name:"Asfixia grave",style:["alta-influencia"],expression:[1],urlid:"u"},{name:"Ignorado",style:[],expression:[0],urlid:"v"}]},{title:"TIPO<br>PARTO",varName:"PARTO",ordinal:!1,input:"checkbox",attrIndex:10,itens:[{name:"Vaginal",style:[],expression:[1],urlid:"w"},{name:"Ces\xe1rio",style:[],expression:[2],urlid:"x"},{name:"Indeterminado",style:[],expression:[0],urlid:"y"}]},{title:"TRAB PARTO<br>INDUZIDO",varName:"STTRABPART",ordinal:!1,input:"radio",attrIndex:11,itens:[{name:"SIM",style:[],expression:[1],urlid:"z"},{name:"N\xc3O",style:[],expression:[2],urlid:"9"},]},{title:"ADEQUA\xc7\xc3O<br>PR\xc9 NATAL",varName:"KOTELCHUCK",ordinal:!0,input:"checkbox",attrIndex:12,itens:[{name:"N\xe3o fez",style:["alta-influencia"],expression:[1],urlid:"8"},{name:"Inadequado",style:["alta-influencia"],expression:[2],urlid:"7"},{name:"Intermedi\xe1rio",style:[],expression:[3],urlid:"6"},{name:"Adequado",style:[],expression:[4],urlid:"5"},{name:"Mais que adequado",style:[],expression:[5],urlid:"4"},{name:"Ignorado",style:[],expression:[0],urlid:"3"},]},]}function p(e,t){return e(t,1)}function m(e){return e`### Mortalidade Perinatal e infantil`}function h(e){return e.principal()}function v(){return[{title:"PESO AO<br>NASCER",varName:"PESO",ordinal:!0,input:"checkbox",attrIndex:1,itens:[{name:"Normal",style:[],expression:[3],urlid:"A"},{name:"Baixo peso",style:["alta-influencia"],expression:[2],urlid:"B"},{name:"Muito baixo peso",style:["alta-influencia"],expression:[1],urlid:"C"},{name:"Ignorado.",style:[],expression:[0],urlid:"D"}]},{title:"SEXO",varName:"SEXO",ordinal:!1,input:"checkbox",attrIndex:2,itens:[{name:"Feminino",style:[],expression:[2],urlid:"E"},{name:"Masculino",style:[],expression:[1],urlid:"F"},{name:"Indeterminado",style:[],expression:[0],urlid:"G"}]},{title:"RA\xc7A/COR",varName:"RACA_COR",ordinal:!1,input:"checkbox",attrIndex:3,itens:[{name:"Branca",style:[],expression:[1],urlid:"H"},{name:"Preta",style:[],expression:[2],urlid:"I"},{name:"Parda",style:[],expression:[4],urlid:"J"},{name:"Outros",style:[],expression:[3,4,5],urlid:"K"},{name:"Ignorado",style:[],expression:[0],urlid:"L"}]},{title:"ESCOLARIDADE<br>DA M\xc3E",varName:"ESCOLARIDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:4,itens:[{name:"Superior",style:[],expression:[7],urlid:"M"},{name:"Ensino m\xe9dio",style:[],expression:[6],urlid:"N"},{name:"Fundamental completo",style:[],expression:[5],urlid:"O"},{name:"Fundamental incompleto",style:[],expression:[4,3,2],urlid:"P"},{name:"Sem",style:[],expression:[1],urlid:"Q"},{name:"Ignorado",style:[],expression:[0],urlid:"R"}]},{title:"IDADE<br>DA M\xc3E",varName:"IDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:5,itens:[{name:"10-14",style:[],expression:[1],urlid:"S"},{name:"15-19",style:[],expression:[2],urlid:"T"},{name:"20-29",style:[],expression:[3],urlid:"U"},{name:"30-39",style:[],expression:[4],urlid:"V"},{name:"40-49",style:["alta-influencia"],expression:[5],urlid:"W"},{name:"50+",style:["alta-influencia"],expression:[6],urlid:"X"},{name:"Ignorado",style:[],expression:[0],urlid:"Y"}]},{title:"TIPO<br>PARTO",varName:"PARTO",ordinal:!1,input:"checkbox",attrIndex:6,itens:[{name:"Vaginal",style:[],expression:[1],urlid:"Z"},{name:"Ces\xe1rio",style:[],expression:[2],urlid:"a"},{name:"Indeterminado",style:[],expression:[0],urlid:"b"}]},]}function b(e,t){return e(t,2)}function g(e){return e`## DataSources`}function x(){return function(){let e="https://storage.googleapis.com/amplia/ufs2/",t=(e,t)=>e.data<t.data?-1:e.data>t.data?1:0,i=[2,3,2,2,2,3,3,3,3,3,2,2],n=[3,2,2],a=null;async function r(){return null!=a?a:await fetch(`${e}index.dat`).then(e=>e.arrayBuffer()).then(e=>a=new DataView(e))}async function o(e){let t=await r(),i=t.buffer.byteLength/12,n=0,a=i-1;for(;n<=a;){let o=Math.floor((n+a)/2),l=t.getUint32(12*o);if(e==l)return[t.getUint32(12*o+4),t.getUint32(12*o+8)];e<l?a=o-1:n=o+1}return null}function l(e,t,a,r){r=r||{};let o=(t+a)*11,l=e.getUint32(o).toString();l=l.substring(0,4)+"-"+l.substring(4,6)+"-"+l.substring(6);let s=e.getUint16(o+4),d=e.getUint32(o+6),c=e.getUint8(o+10),u=0,f=[];for(let p=0;p<i.length;p++){let m=((1<<i[p])-1<<u&d)>>u;f.push(m),u+=i[p]}u=0;for(let h=0;h<n.length;h++){let v=((1<<n[h])-1<<u&c)>>u;f.push(v),u+=n[h]}for(let b=0;b<f.length;b++){let g=f[b],x=r[b],y=!0;if(x&&x.length){y=!1;for(let w=0;w<x.length&&!y;w++)y=x[w].includes(g)}if(!y)return[l]}return[l,s,...f]}function s(t){let i=t;return i>1e5&&(i=Math.floor(t/1e4)),fetch(`${e}uf${i}.dat`).then(e=>e.arrayBuffer()).then(e=>new DataView(e)).then(async e=>{let i,n;return t>1e5?[n,i]=await o(t):(n=0,i=e.buffer.byteLength/11),[e,n,i]})}function d(e){let t={};if(e)for(let i in e)t[i]=e[i];return t}return{fetchTotal:function(e,i){return i=d(i),s(e).then(([e,n,a])=>(function(e,n,a){let r=new Map;for(let o=0;o<a;o++){let s=l(e,n,o,i),d=r.get(s[0]);d?d[1]++:(d=[0,1],r.set(s[0],d)),s.length>1&&d[0]++}let c=[],u=[];for(let[f,p]of r)c.push({data:f,valor:p[0]}),u.push({data:f,valor:p[1]});return c.sort(t),u.sort(t),[c,u]})(e,n,a))},fetchPIG:function(e,i){return i=d(i),s(e).then(([e,n,a])=>(function(e,n,a){let r=new Map;for(let o=0;o<a;o++){let s=l(e,n,o,i),d=r.get(s[0]);d?d[3]++:(d=[0,0,0,1],r.set(s[0],d)),s.length>1&&(1==s[4]?d[0]++:2==s[4]?d[1]++:3==s[4]&&d[2]++)}let c=[],u=[];for(let[f,p]of r)(p[0]||p[1]||p[2])&&(c.push({data:f,ig:"PEQUENO",total:p[0]}),c.push({data:f,ig:"ADEQUADO",total:p[1]}),c.push({data:f,ig:"GRANDE",total:p[2]})),u.push({data:f,valor:p[3]});return c.sort(t),u.sort(t),[c,u]})(e,n,a))},fetchPeso:function(e,i){return i=d(i),s(e).then(([e,n,a])=>(function(e,n,a){let r=new Map;for(let o=0;o<a;o++){let s=l(e,n,o,i);if(s.length>1){let d=r.get(s[0]);d?(d[0]+=s[1],d[1]++):(d=[s[1],1],r.set(s[0],d))}}let c=[];for(let[u,f]of r){let p={data:u,valor:f[0]/f[1],total:f[1]};c.push(p)}return c.sort(t),c})(e,n,a))},fetchRobson:function(e,i){return i=d(i),s(e).then(([e,n,a])=>(function(e,n,a){let r=new Map;for(let o=0;o<a;o++){let s=l(e,n,o,i),d=r.get(s[0]);d?d[3]++:(d=[0,0,0,1],r.set(s[0],d)),s.length>1&&(1==s[16]?d[0]++:2==s[16]?d[1]++:3==s[16]&&d[2]++)}let c=[],u=[];for(let[f,p]of r)(p[0]||p[1]||p[2])&&(c.push({data:f,robson:"Robson1a4",total:p[0]}),c.push({data:f,robson:"Robson5",total:p[1]}),c.push({data:f,robson:"Robson6a10",total:p[2]})),u.push({data:f,valor:p[3]});return c.sort(t),u.sort(t),[c,u]})(e,n,a))}}}()}function y(){return function(){let e="https://storage.googleapis.com/amplia/sim-ufs/",t=(e,t)=>e.data<t.data?-1:e.data>t.data?1:0,i=[2,2,2,3,3,3,2,2],n=null;async function a(){return null!=n?n:await fetch(`${e}index.dat`).then(e=>e.arrayBuffer()).then(e=>n=new DataView(e))}async function r(e){let t=await a(),i=t.buffer.byteLength/12,n=0,r=i-1;for(;n<=r;){let o=Math.floor((n+r)/2),l=t.getUint32(12*o);if(e==l)return[t.getUint32(12*o+4),t.getUint32(12*o+8)];e<l?r=o-1:n=o+1}return null}function o(e,t,n,a){a=a||{};let r=(t+n)*10,o=e.getUint32(r).toString();o=o.substring(0,4)+"-"+o.substring(4,6)+"-"+o.substring(6);let l=e.getUint16(r+4),s=e.getUint32(r+6),d=0,c=[];for(let u=0;u<i.length;u++){let f=((1<<i[u])-1<<d&s)>>d;c.push(f),d+=i[u]}for(let p=0;p<c.length;p++){let m=c[p],h=a[p],v=!0;if(h&&h.length){v=!1;for(let b=0;b<h.length&&!v;b++)v=h[b].includes(m)}if(!v)return[o]}return[o,l,...c]}function l(t){let i=t;return i>1e5&&(i=Math.floor(t/1e4)),fetch(`${e}uf${i}.dat`).then(e=>e.arrayBuffer()).then(e=>new DataView(e)).then(async e=>{let i,n;return t>1e5?[n,i]=await r(t):(n=0,i=e.buffer.byteLength/10),[e,n,i]})}function s(e){let t={};if(e)for(let i in e)t[i]=e[i];return t}return{fetchNeoNatal:function(e,i){return i=s(i),l(e).then(([e,n,a])=>(function(e,n,a){let r=new Map;for(let l=0;l<a;l++){let s=o(e,n,l,i),d=r.get(s[0]);d?d[3]++:(d=[0,0,0,1],r.set(s[0],d)),s.length>1&&(1==s[2]?d[0]++:2==s[2]?d[1]++:3==s[2]&&d[2]++)}let c=[],u=[];for(let[f,p]of r)(p[0]||p[1]||p[2])&&(c.push({data:f,neonatal:"PRECOCE",total:p[0]}),c.push({data:f,neonatal:"TARDIO",total:p[1]}),c.push({data:f,neonatal:"NEOTOTAL",total:p[0]+p[1]}),c.push({data:f,neonatal:"POS",total:p[2]})),u.push({data:f,valor:p[3]});return c.sort(t),u.sort(t),[c,u]})(e,n,a))},fetchFetal:function(e,i){return(i=s(i))[3]=[],l(e).then(([e,n,a])=>(function(e,n,a){let r=new Map;for(let l=0;l<a;l++){let s=o(e,n,l,i),d=r.get(s[0]);d?d[3]++:(d=[0,0,0,1],r.set(s[0],d)),s.length>1&&0==s[2]&&d[0]++}let c=[],u=[];for(let[f,p]of r)(p[0]||p[1]||p[2])&&c.push({data:f,valor:p[0]}),u.push({data:f,valor:p[3]});return c.sort(t),u.sort(t),[c,u]})(e,n,a))},fetchRelParto:function(e,i){return i=s(i),l(e).then(([e,n,a])=>(function(e,n,a){let r=new Map;for(let l=0;l<a;l++){let s=o(e,n,l,i),d=r.get(s[0]);d?d[3]++:(d=[0,0,0,1],r.set(s[0],d)),s.length>1&&(1==s[9]?d[0]++:2==s[9]?d[1]++:3==s[9]&&d[2]++)}let c=[],u=[];for(let[f,p]of r)(p[0]||p[1]||p[2])&&(c.push({data:f,relparto:"ANTES",total:p[0]}),c.push({data:f,relparto:"DURANTE",total:p[1]}),c.push({data:f,relparto:"DEPOIS",total:p[2]})),u.push({data:f,valor:p[3]});return c.sort(t),u.sort(t),[c,u]})(e,n,a))},fetchTotal:function(e,i){return i=s(i),l(e).then(([e,n,a])=>(function(e,n,a){let r=new Map;for(let l=0;l<a;l++){let s=o(e,n,l,i),d=r.get(s[0]);d?d[1]++:(d=[0,1],r.set(s[0],d)),s.length>1&&d[0]++}let c=[],u=[];for(let[f,p]of r)c.push({data:f,valor:p[0]}),u.push({data:f,valor:p[1]});return c.sort(t),u.sort(t),[c,u]})(e,n,a))}}}()}function w(e){return e`### Alguns testes com os datasources`}function A(e,t){return e.fetchRobson(11,t.expression)}function _(e,t){return e.fetchPeso(11,t.expression)}function C(e){return e("municipios2.csv").csv()}function E(e,t){return e.fetchRelParto(35,t.expression)}function S(e){return e.expression}function k(e,t){return e.fetchFetal(35,t.expression)}function T(){return new Set}function O(e){return function(t){return e.add(t),t}}function I(e){return e.html`<style>
  @import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap);
  @import url(https://fonts.googleapis.com/icon?family=Material+Icons);    
</style>`}function M(e,t){let M=e.module(),D=new Map([["municipios2.csv",{url:new i.U(i(4144)),mimeType:"text/csv",toString:function(){return this.url}}]]);return M.builtin("FileAttachment",e.fileAttachments(e=>D.get(e))),M.variable(t()).define(["md"],n),M.variable(t()).define(["md"],a),M.variable(t("ampliaMenu")).define("ampliaMenu",["TL","Event"],r),M.variable(t()).define(["md"],o),M.variable(t("mp")).define("mp",["menuNascidosVivos"],l),M.variable(t("dadosMenuNascidosVivos")).define("dadosMenuNascidosVivos",s),M.variable(t("menuNascidosVivos")).define("menuNascidosVivos",["ampliaMenu","dadosMenuNascidosVivos"],d),M.variable(t()).define(["md"],c),M.variable(t("viewof cn")).define("viewof cn",["menuCaracteristicasNascimento"],u),M.variable(t("cn")).define("cn",["Generators","viewof cn"],(e,t)=>e.input(t)),M.variable(t("dadosMenuCaracteristicasNascimento")).define("dadosMenuCaracteristicasNascimento",f),M.variable(t("menuCaracteristicasNascimento")).define("menuCaracteristicasNascimento",["ampliaMenu","dadosMenuCaracteristicasNascimento"],p),M.variable(t()).define(["md"],m),M.variable(t("viewof mpi")).define("viewof mpi",["menuMortalidade"],h),M.variable(t("mpi")).define("mpi",["Generators","viewof mpi"],(e,t)=>e.input(t)),M.variable(t("dadosMenuMortalidade")).define("dadosMenuMortalidade",v),M.variable(t("menuMortalidade")).define("menuMortalidade",["ampliaMenu","dadosMenuMortalidade"],b),M.variable(t()).define(["md"],g),M.variable(t("datasource")).define("datasource",x),M.variable(t("datasource_sim")).define("datasource_sim",y),M.variable(t()).define(["md"],w),M.variable(t()).define(["datasource","cn"],A),M.variable(t()).define(["datasource","cn"],_),M.variable(t("municipios2")).define("municipios2",["FileAttachment"],C),M.variable(t()).define(["datasource_sim","mpi"],E),M.variable(t()).define(["mpi"],S),M.variable(t()).define(["datasource_sim","mpi"],k),M.variable(t("terms")).define("terms",T),M.variable(t("TL")).define("TL",["terms"],O),M.variable(t()).define(["htl"],I),M}function D(e){return e`# Amplia Saúde - Trilhas Exploratórias - v6.0 - Nascidos Vivos`}function N(e,t){return e?new t.principal(e.principalUrlids):new t.principal}function L(e,t,i,n,a){return r=>{e.value.filter(e=>"PM25"!=e.variavel).forEach(e=>{t.value=t.value.filter(t=>t.idx!=e.i||t.filtrado),i.value.forEach(i=>{Promise.all([n[e.variavel](i.nome,r.target.value.expression)]).then(n=>{t.value=t.value.filter(t=>t.idx!=e.i||t.filtrado||t.municipio!=i.nome),t.value=t.value.concat({idx:e.i,municipio:i.nome,variavel:e.variavel,dados:a[e.variavel](n[0])})})})})}}function R(e,t,i){return e`
<div style="display:flex; width:100%; align-items:center; justify-content:space-between;">
<div>${t}</div><div>${i}</div>
</div>
`}function P(e,t,i,n,a,r,o){let l=document.createElement("div");for(let s=0;s<e.length;s++)l.append(t[e[s].variavel](e[s].i));return l.append(i()),n.create(l,{animation:150,handle:".drag",filter:".undraggable",onUpdate(t){let i=e[t.oldIndex];e.splice(t.oldIndex,1),e.splice(t.newIndex,0,i),a.value=e}}),r.select(l).selectAll("g[aria-label=x-axis] g.tick text").each(function(){let e=r.select(this),t=e.text();/[0-9]{4}/.test(t)&&e.style("font-size","14px").style("font-weight","700")}),o(),l}function F(){return 4}function B(e,t,i){return e?t(104,468,e.intervalo[0],e.intervalo[1]):t(104,468,i.intervalo[0],i.intervalo[1])}function U(e,t,i,n,a){return e`${t.map((e,t)=>i(e,t))}${t.length<n?a:""}`}function $(e,t,i,n,a,r,o,l,s,d,c,u,f,p,m,h){return e.select(t`
<input list="menu-municipios-options" id="menu-municipios" placeholder="${i("Adicione um local")}" class="caixa-municipio">
<datalist id="menu-municipios-options">
${n.map(e=>e.municipio).sort(Intl.Collator().compare).map(e=>`<option value="${e}">`)}
</datalist>
`).on("change",e=>{if(!n.map(e=>e.municipio).includes(document.getElementById("menu-municipios").value)&&!a.includes(document.getElementById("menu-municipios").value))return;let t=e.target.value;if(!(r.length==o||r.map(e=>e.nome).includes(t))){for(let i of(l.value=l.value.concat([{nome:t,cor:s.find(e=>!r.map(e=>e.cor).includes(e))}]),d.setItem("municipios",JSON.stringify(l.value)),c))"PM25"==i.variavel&&a.includes(t)||Promise.all([u[i.variavel](t,"PM25"!=i.variavel?f.value.expression:null)]).then(e=>{p.value=p.value.concat({idx:i.i,municipio:t,variavel:i.variavel,dados:m[i.variavel](e[0])})});for(let v of[...new Set(h.filter(e=>e.filtrado).map(e=>e.idx))])Promise.all([u[c.find(e=>e.i==v).variavel](t,c.find(e=>e.i==v).filtros.value.expression)]).then(e=>{p.value=p.value.concat({idx:v,municipio:t,variavel:h.find(e=>e.idx==v).variavel,filtrado:!0,dados:m[h.find(e=>e.idx==v).variavel](e[0])})})}}).node()}function j(e,t,i,n,a,r,o,l){return(s,d)=>{let c=e.create("button").attr("class","btn-municipio").style("background-color",s.cor).style("display","inline-flex").style("align-items","flex-center").on("click",e=>{t.length>1&&(i.value=t.filter(e=>e!=s),n.setItem("municipios",JSON.stringify(i.value)),a.value=r.filter(e=>e.municipio!=s.nome))});return o.includes(s.nome)?c.append("span").text(s.nome):c.append("span").text(s.nome+(s.nome.includes("(")?"":" ("+l.find(e=>e.municipio==s.nome).sigla+")")),c.append("span").attr("class","material-icons-outlined").style("font-size","16px").style("margin-left","5px").style("display",1==t.length?"none":"inline").text("remove_circle_outline"),c.node()}}function z(e,t){return()=>e.create("button").attr("class","btn-remove").text("–").on("click",t).attr("title","Eliminar trilha").node()}function G(e,t){return()=>{let i=e.create("button").attr("class","btn-remove").on("click",t);return i.append("span").attr("class","material-icons-outlined").style("font-size","10px").text("content_copy"),i.attr("title","Duplicar trilha"),i.node()}}function H(e,t,i,n){return{PM25:e,PESO:t,PIG:i,TOTAL:n}}function V(e,t,i,n){return{PM25:e,PESO:t,PIG:i,TOTAL:n}}function q(e,t,i,n){return{PM25:e,PESO:t,PIG:i,TOTAL:n}}function W(){return{PESO:"#C8F9ED",PM25:"#F4947C",PIG:"#CDD9FA",TOTAL:"#FFFCD2"}}function Z(){return{PESO:"#EDFDF9",PM25:"#FDEEEA",PIG:"#EEECFD",TOTAL:"#FFFEED"}}function X(e){return e`
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
`}function J(e,t,i,n,a){return function(r,o,l=!1){function s(e){let t=o.scale("x"),i=e.offsetX;return i<t.range[0]&&(i=t.range[0]),i>t.range[1]&&(i=t.range[1]),i}let d=function(e){let t=a.select(o).select("g[aria-label=rule] line"),i=s(e);t.attr("x1",i).attr("x2",i)},c=function(a){let d=o.scale("x"),c=e[r].dados,u=s(a),f=c[t.center(c,d.invert(u))].x;l?i.value=f:n.value=f},u=0,f=0,p=null;function m(e){p&&p.attr("x",e.offsetX-f)}function h(i){let a=i.offsetX-f-u,l=o.scale("x");a<l.range[0]&&(a=l.range[0]),a>l.range[1]&&(a=l.range[1]);let s=e[r].dados;n.value=s[t.center(s,l.invert(a))].x}a.select(o).call(a.drag().on("start",e=>(function(e){if(a.select(o.parentElement).select("div.tooltip").style("visibility","hidden"),l){let t=a.select(o).select("rect.suscetibilidade"),i=a.select(o).select("line.concepcao"),n=a.select(o).select("g[aria-label=rule] line"),r=+t.attr("x"),s=+t.attr("width")+r;if(Math.abs(+n.attr("x1")-e.offsetX)>8&&r<e.offsetX&&s>e.offsetX){u=+t.attr("x")-i.attr("x1"),f=e.offsetX-r,p=a.select(o).append("rect").attr("x",t.attr("x")).attr("y",t.attr("y")).attr("width",t.attr("width")).attr("height",t.attr("height")).attr("stroke","black").attr("stroke-dasharray","5").attr("fill","none"),d=m,c=h;return}}d(e)})(e.sourceEvent)).on("drag",e=>d(e.sourceEvent)).on("end",e=>c(e.sourceEvent)))}}function Y(e,t,i,n,a,r){return function(o,l,s,d="valor",c=null){function u(e){let t=document.createElementNS("http://www.w3.org/2000/svg","svg"),i=document.createElementNS("http://www.w3.org/2000/svg","path");return t.setAttribute("width","18"),t.setAttribute("height","8"),t.setAttribute("fill","none"),i.setAttribute("d","M1 7C1 5 1.39956 1 4.9956 1C10.2138 1 7.9923 7 11.9879 7C16.4829 7 15.9835 3 15.9835 1"),i.setAttribute("stroke","#151472"),e?(i.setAttribute("stroke-width","1.5"),i.setAttribute("stroke-dasharray","2.5 1")):i.setAttribute("stroke-width","2"),t.appendChild(i),t}function f(e){let t=["de","da","do","dos","das","e"];if(e.length<=2)return e;let i=e.indexOf("(");i>=0&&(e.substring(i).trim(),e=e.substring(0,i).trim());let n=e.toLowerCase().split(" ");for(let a=0;a<n.length;a++)t.includes(n[a])||(n[a]=n[a][0].toUpperCase()+n[a].substring(1));return n.join(" ")}setTimeout(p=>{let m=o.parentElement.querySelector(".tooltip");m||((m=document.createElement("div")).setAttribute("class","tooltip"),m.style.backgroundColor=r[l]+"CC",o.parentElement.appendChild(m)),function(r){function p(t,i){t.addEventListener("mouseover",t=>{e.select(document.body).selectAll("g[aria-label=line]").style("opacity",function(t){return e.select(this).attr("stroke")==i.cor?1:.3})}),t.addEventListener("mouseout",t=>{e.select(document.body).selectAll("g[aria-label=line]").style("opacity",1)})}let m=n(s,l,d,c),h,v,b;h=o.scale("x"),v=o.scale("y"),b=h.apply("PM25"==l?t:i),r.style.visibility=b<h.range[0]?"hidden":"visible",r.style.top=`${v.range[1]+5}px`,b>250?(r.classList.remove("right"),r.style.left=`${b-10}px`):(r.style.left=`${b}px`,r.classList.add("right"));let g=m.valoresComparacao.length>0,x=document.createElement("div"),y=document.createElement("div");y.classList.add("periodo"),void 0!==m.semanas?y.textContent=`${m.semanaInicio} - ${m.semanaFim} - (sem ${m.semanas})`:y.textContent=`${m.semanaInicio} - ${m.semanaFim}`,x.appendChild(y),g?(x.classList.add("c2"),x.appendChild(u(!1)),x.appendChild(u(!0))):x.classList.add("c1");for(let w=0;w<m.municipios.length;w++){let A=document.createElement("div"),_=document.createElement("div"),C=document.createElement("div"),E=g?document.createElement("div"):null;A.classList.add("legenda"),A.style.color=m.municipios[w].cor,A.textContent="⬤",_.classList.add("municipio"),_.textContent=f(m.municipios[w].nome),p(_,m.municipios[w]),C.classList.add("valor"),C.textContent=m.valoresPrincipal[w],x.appendChild(A),x.appendChild(_),x.appendChild(C),E&&(E.classList.add("valor"),E.textContent=m.valoresComparacao[w],x.appendChild(E))}let S=document.createElement("div");S.classList.add("rodape"),S.innerHTML=`${a("Unidade")}: <b>${m.unidade}</b><br>${a("M\xe9dia Semanal")}`,x.appendChild(S),r.replaceChildren(x);let k=e.select(o).select("line.rule-shadow"),T=e.select(o).select("g[aria-label=rule] line");0===k.size()&&(k=e.select(T.node().parentElement).append("line").attr("class","rule-shadow").attr("stroke","#FFFFFF00").attr("stroke-width",5).attr("stroke-dasharray","none").attr("y1",T.attr("y1")).attr("y2",T.attr("y2")).attr("cursor","ew-resize")),k.attr("x1",T.attr("x1")).attr("x2",T.attr("x2"))}(m)})}}function Q(e,t){return function(i){let n=i.scale("x"),a=i.scale("y"),r=e;"number"==typeof r&&(r=new Date(r));let o=new Date(r.getTime()),l=new Date(r.getTime());o.setDate(o.getDate()+154),l.setDate(l.getDate()+266);let s=n.apply(r),d=n.apply(o),c=n.apply(l);t.select(i).insert("rect","g[aria-label=rule]").attr("class","suscetibilidade").attr("x",d).attr("y",a.range[1]).attr("width",c-d).attr("height",a.range[0]-a.range[1]).attr("stroke-width","2px").attr("stroke","#F4947C").attr("fill","#FFFFFF00").style("cursor","grab"),t.select(i).insert("line","g[aria-label=rule]").attr("x1",s).attr("y1",a.range[1]).attr("x2",s).attr("y2",a.range[0]).attr("stroke-width","2px").attr("stroke","#F4947C"),t.select(i).insert("line","g[aria-label=rule]").attr("class","concepcao").attr("x1",s).attr("y1",a.range[1]).attr("x2",d).attr("y2",a.range[1]).attr("stroke-width","2px").attr("stroke","#F4947C"),t.select(i).append("text").attr("class","rotuloSuscetibilidade").text("CONCEP\xc7\xc3O").attr("x",s).attr("y",a.range[1]-3),t.select(i).append("text").attr("class","rotuloSuscetibilidade").text("22\xaa SEM").attr("x",d).attr("y",a.range[1]-3),t.select(i).append("text").attr("class","rotuloSuscetibilidade").text("38\xaa SEM").attr("x",c).attr("y",a.range[1]-3)}}function K(e,t,i,n,a,r,o,l,s,d){return function(c,u,f,p){let m="PM25"==u?e:t;function h(e){return e=e.toISOString().substring(0,10).split("-"),`${e[2]}/${e[1]}/${e[0]}`}function v(e){return"percentual"===f||"taxa"===f?e.toLocaleString("pt-BR",{maximumFractionDigits:2}):e.toFixed(0)}let b={},g=n.filter(e=>e.idx==c).sort(function(e,t){return i.findIndex(e=>e.nome==t.municipio)-i.findIndex(t=>t.nome==e.municipio)}),x=g,y=g.filter(e=>e.filtrado),w=a[r.bisector(e=>e.inicio.getTime()).center(a,m)];if("PM25"==u){let A=e;"number"==typeof A&&(A=new Date(A));let _=t;"number"==typeof _&&(_=new Date(_));let C=Math.floor((A.getTime()-_.getTime())/6048e5);C>0&&C<=42&&(b.semanas=C)}return b.semanaInicio=h(w.inicio).substring(0,5),b.semanaFim=h(w.termino),b.unidade=o[u][f],b.valoresPrincipal=[],b.valoresComparacao=[],b.municipios=[],b.ufSelecionada=i.some(e=>l.includes(e.nome)),y.length>0&&(x=g.filter(e=>!e.filtrado),"PIG"!==u&&(y=y.filter(e=>!Object.values(s).includes(e.municipio)||"PM25"!=u)),y.forEach(e=>{let t=e.dados[d.center(e.dados,m)][f];b.valoresComparacao.push(v("PIG"==u?t[p]:t))})),x.forEach(e=>{let t=i.find(t=>t.nome==e.municipio),n=e.dados[d.center(e.dados,m)][f];b.municipios.push(t),b.valoresPrincipal.push(v("PIG"==u?n[p]:n))}),b}}function ee(e,t,i,n,a,r,o,l,s,d,c,u,f,p,m,h,v,b,g,x,y,w,A,_,C,E,S,k,T,O){return I=>{let M=e.plot({marginTop:15,marginRight:0,width:t-65,height:i,x:{grid:!0,label:null,format:n,domain:a.find(e=>e.i==I).alterar_tempo?a.find(e=>e.i==I).alterar_tempo.map(e=>r[e].inicio):o.map(e=>r[e].inicio)},y:{grid:!0,domain:[0,l[s]],transform:e=>Math.min(122,e),label:null},marks:[e.rect([{y1:d[s][3],y2:l[s]}],{y1:"y1",y2:"y2",fill:"#FFEBEB",class:"faixa"}),e.rect([{y1:d[s][2],y2:d[s][3]}],{y1:"y1",y2:"y2",fill:"#FFF5EB"}),e.rect([{y1:d[s][1],y2:d[s][2]}],{y1:"y1",y2:"y2",fill:"#FFFFED"}),a.find(e=>e.i==I).mostra_media_movel?c.filter(e=>e.idx==I&&!Object.values(u).includes(e.municipio)).map((t,i)=>e.line(t.dados.filter(e=>f(e,I)),e.windowY({strict:!0,k:p,anchor:"middle",x:"x",y:"valor",curve:"monotone-x",strokeWidth:m,stroke:h.find(e=>e.nome==t.municipio).cor}))):c.filter(e=>e.idx==I&&!Object.values(u).includes(e.municipio)).map((t,i)=>e.line(t.dados.filter(e=>f(e,I)),{x:"x",y:"valor",curve:"monotone-x",strokeWidth:m,stroke:h.find(e=>e.nome==t.municipio).cor})),e.ruleX([c.filter(e=>e.idx==I)[0].dados[v.center(c.filter(e=>e.idx==I)[0].dados,b)]],{x:"x",strokeDasharray:"5"}),a.find(e=>e.i==I).mostra_media_movel?null:c.filter(e=>e.idx==I).map((t,i)=>e.dot([t.dados[v.center(t.dados,b)]],{x:"x",y:"valor",fill:h.find(e=>e.nome==t.municipio).cor}))]});return g(M,"PM25",I),x(M),y(I,M,!0),w`
<div style="--cor-trilha:${A.PM25}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${_.create("button").attr("class","btn-remove").text("–").on("click",C).node()}<br>
  ${E()}
</div>
<div class="sombra">
<div class="drag-container">
<span class="material-icons-outlined ${a[0].i==I?"icon-gray":"icon-blue"}">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-blue">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined ${a[a.length-1].i==I?"icon-gray":"icon-blue"}">
expand_more
</span>
</div>
<div class="trilha poluente" i=${I}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">${S("POLUENTE")}</span>
    <div class="opcao-trilha">
      <label class="label-cabecalho-trilha">${S("M\xc9DIA M\xd3VEL")}</label>       ${_.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==I).mostra_media_movel).on("change",e=>k(e,I)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">${S("MODIFICAR PER\xcdODO")}</label> ${_.create("input").attr("type","checkbox").property("checked",a.find(e=>e.i==I).alterar_tempo).on("change",e=>T(e,I)).node()}
  </div>
    <span class="instrucaoSuscetibilidade">${S("A janela no gr\xe1fico indica o per\xedodo de maior suscetibilidade \xe0 polui\xe7\xe3o (22\xaa  \xe0 38\xaa semana)")}</span>
    <span class="fonte" style="flex-grow: 0;">${S("Fonte: SISAM")}</span>
  </div>
<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right">${M}</div>
</div>
${O(I)}
</div>
</div>
</div>`}}function et(e,t,i,n,a,r,o,l,s,d,c,u,f,p,m,h,v,b,g,x,y,w,A,_,C,E,S,k){return T=>{if(!e.map(e=>e.nome).every(e=>t.filter(e=>e.idx==T).map(e=>e.municipio).includes(e))||n.find(e=>e.i==T).filtros.value.expression&&n.find(e=>e.i==T).show_filtros&&t.filter(e=>e.idx==T).every(e=>void 0===e.filtrado)||a.value.expression&&t.filter(e=>e.idx==T).every(e=>void 0!==e.filtrado))return i();let O=r.plot({marginTop:5,marginRight:0,width:o-65,height:l,x:{grid:!0,label:null,domain:n.find(e=>e.i==T).alterar_tempo?n.find(e=>e.i==T).alterar_tempo.map(e=>s[e].inicio):d.map(e=>s[e].inicio)},y:{grid:!0,label:null},marks:[n.find(e=>e.i==T).mostra_media_movel?t.filter(e=>e.idx==T).map((t,i)=>r.line(t.dados.filter(e=>c(e,T)),r.windowY({strict:!0,k:u,anchor:"middle",x:"x",y:"valor",strokeWidth:t.filtrado?f:p,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"}))):t.filter(e=>e.idx==T).map((t,i)=>r.line(t.dados.filter(e=>c(e,T)),{sort:"x",x:"x",y:"valor",curve:"monotone-x",strokeWidth:t.filtrado?f:p,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"})),r.ruleX([t.filter(e=>e.idx==T)[0].dados[m.center(t.filter(e=>e.idx==T)[0].dados,h)]],{x:"x",strokeDasharray:"5"}),n.find(e=>e.i==T).mostra_media_movel?null:t.filter(e=>e.idx==T).map((t,i)=>r.dot([t.dados[m.center(t.dados,h)]],{x:"x",y:"valor",fill:e.find(e=>e.nome==t.municipio).cor}))]});return v(O,"PESO",T),b(T,O),g`
<div style="--cor-trilha: ${x.PESO}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${y.create("button").attr("class","btn-remove").text("–").on("click",w).node()}<br>
  ${A()}
</div>
<div class="sombra" style="border: 3px var(--cor-trilha) solid; border-radius: 10px;">
<div class="drag-container"> <span class="material-icons-outlined ${n[0].i==T?"icon-gray":"icon-blue"}">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-blue">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined ${n[n.length-1].i==T?"icon-gray":"icon-blue"}">
expand_more
</span>
</div>
<div class="trilha peso" i=${T}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">${_("PESO AO NASCER")}</span>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">${_("M\xc9DIA M\xd3VEL")}</label> ${y.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==T).mostra_media_movel).on("change",e=>C(e,T)).node()}
    </div><div class="opcao-trilha">
    <label class="label-cabecalho-trilha">${_("MODIFICAR PER\xcdODO")}</label> ${y.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==T).alterar_tempo).on("change",e=>E(e,T)).node()}
  </div><span class="fonte">${_("Fonte: SINASC")}</span>
  </div>
<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right;">${O}</div>

</div>
${S(T)}
<div class="rodape-trilha">
<div class="botao-comparacao">
${y.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==T).show_filtros).on("change",e=>k(e,T)).node()}
<label>${_("COMPARA\xc7\xc3O")}</label>
</div>
<div class="menu-local">${n.find(e=>e.i==T).show_filtros?n.find(e=>e.i==T).filtros:""}</div>
</div>
</div>
</div>
</div>`}}function ei(e,t,i,n,a,r,o,l,s,d,c,u,f,p,m,h,v,b,g,x,y,w,A,_,C,E,S,k,T,O){return I=>{if(!e.map(e=>e.nome).every(e=>t.filter(e=>e.idx==I).map(e=>e.municipio).includes(e))||n.find(e=>e.i==I).filtros.value.expression&&n.find(e=>e.i==I).show_filtros&&t.filter(e=>e.idx==I).every(e=>void 0===e.filtrado)||a.value.expression&&t.filter(e=>e.idx==I).every(e=>void 0!==e.filtrado))return i();let M=n.find(e=>e.i==I).escala,D=n.find(e=>e.i==I).tamanho,N=r.plot({marginTop:5,marginRight:0,width:o-65,height:l,x:{grid:!0,label:null,domain:n.find(e=>e.i==I).alterar_tempo?n.find(e=>e.i==I).alterar_tempo.map(e=>s[e].inicio):d.map(e=>s[e].inicio)},y:{grid:!0,label:null},marks:[n.find(e=>e.i==I).mostra_media_movel?t.filter(e=>e.idx==I).map((t,i)=>r.line(t.dados.filter(e=>c(e,I)),r.windowY({strict:!0,k:u,anchor:"middle",x:"x",y:e=>e[M][D],strokeWidth:t.filtrado?f:p,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"}))):t.filter(e=>e.idx==I).map((t,i)=>r.line(t.dados.filter(e=>c(e,I)),{sort:"x",x:"x",y:e=>e[M][D],curve:"monotone-x",strokeWidth:t.filtrado?f:p,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"})),r.ruleX([t.filter(e=>e.idx==I)[0].dados[m.center(t.filter(e=>e.idx==I)[0].dados,h)]],{x:"x",strokeDasharray:"5"}),n.find(e=>e.i==I).mostra_media_movel?null:t.filter(e=>e.idx==I).map((t,i)=>r.dot([t.dados[m.center(t.dados,h)]],{x:"x",y:e=>e[M][D],fill:e.find(e=>e.nome==t.municipio).cor}))]});v(N,"PIG",I,M,D),b(I,N);let L;return g`
<div style="--cor-trilha: ${x.PIG}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${y.create("button").attr("class","btn-remove").text("–").on("click",w).node()}<br>
  ${A()}
</div>
<div class="sombra">
<div class="drag-container">
<span class="material-icons-outlined ${n[0].i==I?"icon-gray":"icon-blue"}">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-blue">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined ${n[n.length-1].i==I?"icon-gray":"icon-blue"}">
expand_more
</span>
</div>
<div class="trilha adequacao" i=${I}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">${_("ADEQUA\xc7\xc3O \xc0 IDADE GESTACIONAL")}</span>

    ${(L=y.create("select").attr("class","menuIG")).style("font-family","Roboto Condensed"),L.append("option").attr("name","PEQUENO").attr("value","PEQUENO").text(_("PEQUENO")).property("selected","PEQUENO"==n.find(e=>e.i==I).tamanho),L.append("option").attr("name","ADEQUADO").attr("value","ADEQUADO").text(_("ADEQUADO")).property("selected","ADEQUADO"==n.find(e=>e.i==I).tamanho),L.append("option").attr("name","GRANDE").attr("value","GRANDE").text(_("GRANDE")).property("selected","GRANDE"==n.find(e=>e.i==I).tamanho),L.on("change",e=>C(e,I)),L.node()}

    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">${_("M\xc9DIA M\xd3VEL")}</label> ${y.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==I).mostra_media_movel).on("change",e=>E(e,I)).node()}
  </div>
  <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">${_("MODIFICAR PER\xcdODO")}</label> ${y.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==I).alterar_tempo).on("change",e=>S(e,I)).node()}
      </div>
  <div class="opcao-trilha">

    <label class="label-cabecalho-trilha">${_("ESCALA ABSOLUTO")}</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+I).property("checked","absoluto"==n.find(e=>e.i==I).escala).attr("value","absoluto").on("change",e=>k(e,I)).node()}
      </div>
  <div class="opcao-trilha">
<label class="label-cabecalho-trilha">${_("PERCENTUAL")}</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+I).property("checked","percentual"==n.find(e=>e.i==I).escala).attr("value","percentual").on("change",e=>k(e,I)).node()}
      </div>
  <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">${_("TAXA POR 1000")}</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+I).property("checked","taxa"==n.find(e=>e.i==I).escala).attr("value","taxa").on("change",e=>k(e,I)).node()}
      </div>
  <span class="fonte">${_("Fonte: SINASC")}</span>

  </div>

<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right;">${N}</div>
</div>
${T(I)}
<div class="rodape-trilha">
<div class="botao-comparacao">
${y.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==I).show_filtros).on("change",e=>O(e,I)).node()}
<label>${_("COMPARA\xc7\xc3O")}</label>
</div>
<div class="menu-local">${n.find(e=>e.i==I).show_filtros?n.find(e=>e.i==I).filtros:""}</div>
</div>
</div>
</div>
</div>`}}function en(e,t,i,n,a,r,o,l,s,d,c,u,f,p,m,h,v,b,g,x,y,w,A,_,C,E,S,k,T){return O=>{if(!e.map(e=>e.nome).every(e=>t.filter(e=>e.idx==O).map(e=>e.municipio).includes(e))||n.find(e=>e.i==O).filtros.value.expression&&n.find(e=>e.i==O).show_filtros&&t.filter(e=>e.idx==O).every(e=>void 0===e.filtrado)||a.value.expression&&t.filter(e=>e.idx==O).every(e=>void 0!==e.filtrado))return i();let I=n.find(e=>e.i==O).escala,M=r.plot({marginTop:5,marginRight:0,width:o-65,height:l,x:{grid:!0,label:null,domain:n.find(e=>e.i==O).alterar_tempo?n.find(e=>e.i==O).alterar_tempo.map(e=>s[e].inicio):d.map(e=>s[e].inicio)},y:{grid:!0,label:null},marks:[n.find(e=>e.i==O).mostra_media_movel?t.filter(e=>e.idx==O).map((t,i)=>r.line(t.dados.filter(e=>c(e,O)),r.windowY({strict:!0,k:u,anchor:"middle",x:"x",y:e=>e[I],strokeWidth:t.filtrado?f:p,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"}))):t.filter(e=>e.idx==O).map((t,i)=>r.line(t.dados.filter(e=>c(e,O)),{sort:"x",x:"x",y:e=>e[I],curve:"monotone-x",strokeWidth:t.filtrado?f:p,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"})),r.ruleX([t.filter(e=>e.idx==O)[0].dados[m.center(t.filter(e=>e.idx==O)[0].dados,h)]],{x:"x",strokeDasharray:"5"}),n.find(e=>e.i==O).mostra_media_movel?null:t.filter(e=>e.idx==O).map((t,i)=>r.dot([t.dados[m.center(t.dados,h)]],{x:"x",y:e=>e[I],fill:e.find(e=>e.nome==t.municipio).cor}))]});return v(M,"TOTAL",O,I),b(O,M),g`
<div style="--cor-trilha:${x.TOTAL}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${y.create("button").attr("class","btn-remove").text("–").on("click",w).node()}<br>
  ${A()}
</div>
<div class="sombra">
<div class="drag-container">
<span class="material-icons-outlined ${n[0].i==O?"icon-gray":"icon-blue"}">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-blue">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined ${n[n.length-1].i==O?"icon-gray":"icon-blue"}">
expand_more
</span>
</div>
<div class="trilha nasctotal" i=${O}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">${_("TOTAL NASCIDOS VIVOS")}</span>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">${_("M\xc9DIA M\xd3VEL")}</label> ${y.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==O).mostra_media_movel).on("change",e=>C(e,O)).node()}
    </div>
   <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">${_("MODIFICAR PER\xcdODO")}</label> ${y.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==O).alterar_tempo).on("change",e=>E(e,O)).node()}
    </div>
   <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">${_("ESCALA ABSOLUTO")}</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+O).property("checked","absoluto"==n.find(e=>e.i==O).escala).attr("value","absoluto").on("change",e=>S(e,O)).node()}
    </div>
   <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">${_("PERCENTUAL")}</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+O).property("checked","percentual"==n.find(e=>e.i==O).escala).attr("value","percentual").on("change",e=>S(e,O)).node()}
    </div>
   <span class="fonte">${_("Fonte: SINASC")}</span>

  </div>
<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right;">${M}</div>
</div>
${k(O)}
<div class="rodape-trilha">
<div class="botao-comparacao">
${y.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==O).show_filtros).on("change",e=>T(e,O)).node()}
<label>${_("COMPARA\xc7\xc3O")}</label>
</div>
<div class="menu-local">${n.find(e=>e.i==O).show_filtros?n.find(e=>e.i==O).filtros:""}</div>
</div>
</div>
</div>
</div>`}}function ea(e,t,i,n,a,r,o){return l=>{let s;return e`
<div style="display:flex; align-items:center; justify-content:space-between;">
<div style="visibility:hidden;">
  ${t.create("button").attr("class","btn-remove").text("–").on("click",i).node()}<br>
  ${t.create("button").attr("class","btn-remove").text("C").on("click",n).node()}
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

<div id="novatrilha" class="trilha" style="width:${a-60}px; margin-left:0px; border-radius: 0 10px 10px 0; border:dotted #C4C4C4 2px; box-shadow:none; height:80px;">
  <div id="i45" class="cabecalho-trilha" style="border-bottom:dotted #C4C4C4 2px;">
${(s=t.create("select").attr("class","menuIG")).style("margin-left","10px").style("font-family","Roboto Condensed"),s.append("option").text(r("ADICIONE UMA TRILHA")).property("disabled",!0).property("selected",!0),s.append("option").attr("value","POLUENTE").text(r("POLUENTE")),s.append("option").attr("value","PESO AO NASCER").text(r("PESO AO NASCER")),s.append("option").attr("value","ADEQUA\xc7\xc3O \xc0 IDADE GESTACIONAL").text(r("ADEQUA\xc7\xc3O \xc0 IDADE GESTACIONAL")),s.append("option").attr("value","NASCIMENTOS TOTAIS").text(r("TOTAL NASCIDOS VIVOS")),s.on("change",o),s.node()}
  </div>

<div class="conteudo-trilha">
<br><br>
</div>
</div>`}}function er(e,t,i,n,a){return r=>e`
<div style="--cor-trilha: #c4c4c4; display:flex; align-items:center; justify-content:space-between; margin-bottom:30px;">
<div style="visibility:hidden;">
  ${t.create("button").attr("class","btn-remove").text("–").on("click",i).node()}<br>
  ${t.create("button").attr("class","btn-remove").text("C").on("click",n).node()}
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
<div class="trilha" style="width:${a-60}px; margin-left:0px; margin-bottom:0px; height: 80px;">
  <div class="cabecalho-trilha">
  <label class="label-titulo-trilha">CARREGANDO...</label>
  </div>

<div class="conteudo-trilha">
<br><br>
</div>
</div>
</div>`}function eo(e,t,i,n,a,r){return o=>{let l=e.findIndex(e=>e.i==o.target.parentNode.parentNode.getElementsByClassName("trilha")[0].getAttribute("i")),s={...e[l]},d=t.max(e.map(e=>e.i))+1;s.i=d,"PM25"!=s.variavel&&(s.filtros=s.filtros.cloneMenu(),s.filtros.addEventListener("input",e=>i(e,s))),e.splice(l+1,0,s),n.value=e;let c=JSON.parse(JSON.stringify(a.filter(e=>e.idx==o.target.parentNode.parentNode.getElementsByClassName("trilha")[0].getAttribute("i"))));c.forEach((e,t,i)=>{i[t].idx=d,i[t].dados.forEach((e,t,i)=>i[t].x=new Date(i[t].x))}),r.value=a.concat(c)}}function el(e,t,i,n){return a=>{e.value=t.filter(e=>e.i!=a.target.parentNode.parentNode.getElementsByClassName("trilha")[0].getAttribute("i")),i.value=n.filter(e=>e.idx!=a.target.parentNode.parentNode.getElementsByClassName("trilha")[0].getAttribute("i"))}}function es(e,t,i,n,a,r,o,l,s,d,c,u,f,p,m,h){return v=>{let b=e.max(t.map(e=>e.i))||0,g=null;switch(v.target.value){case"POLUENTE":g={i:b+1,mostra_media_movel:!0,variavel:"PM25",alterar_tempo:null,poluente:"PM25"},i.value=t.concat(g),n.forEach(e=>Promise.all([a(e.nome)]).then(t=>{r.value=r.value.concat([{idx:b+1,municipio:e.nome,variavel:"PM25",dados:o(t[0])}])}));break;case"PESO AO NASCER":(g={i:b+1,mostra_media_movel:!1,variavel:"PESO",alterar_tempo:null,filtros:new l.local(null,null,s.PESO),show_filtros:!1}).filtros.addEventListener("input",e=>d(e,g)),i.value=t.concat(g),n.forEach(e=>Promise.all([c(e.nome,g.filtros.expression)]).then(t=>{r.value=r.value.concat([{idx:b+1,municipio:e.nome,variavel:"PESO",dados:u(t[0])}])}));break;case"ADEQUA\xc7\xc3O \xc0 IDADE GESTACIONAL":(g={i:b+1,mostra_media_movel:!1,escala:"taxa",tamanho:"PEQUENO",variavel:"PIG",alterar_tempo:null,filtros:new l.local(null,null,s.PIG),show_filtros:!1}).filtros.addEventListener("input",e=>d(e,g)),i.value=t.concat(g),n.forEach(e=>Promise.all([f(e.nome,g.filtros.expression)]).then(t=>{r.value=r.value.concat([{idx:b+1,municipio:e.nome,variavel:"PIG",dados:p(t[0])}])}));break;case"NASCIMENTOS TOTAIS":(g={i:b+1,mostra_media_movel:!1,variavel:"TOTAL",alterar_tempo:null,filtros:new l.local(null,null,s.TOTAL),show_filtros:!1,escala:"absoluto"}).filtros.addEventListener("input",e=>d(e,g)),i.value=t.concat(g),n.forEach(e=>Promise.all([m(e.nome,g.filtros.expression)]).then(t=>{r.value=r.value.concat([{idx:b+1,municipio:e.nome,variavel:"TOTAL",dados:h(t[0])}])}))}}}function ed(e,t,i,n){return a=>{if(!e.find(e=>e.i==a).alterar_tempo)return"";let r=t(104,468,e.find(e=>e.i==a).alterar_tempo[0],e.find(e=>e.i==a).alterar_tempo[1],i-90,40);return r.addEventListener("input",t=>{let i=e;i.find(e=>e.i==a).alterar_tempo=r.value,n.value=i}),r}}function ec(e,t,i,n,a,r,o,l,s,d){return(c,u)=>{if(e.find(e=>e.i==u).show_filtros=c.target.checked,c.target.checked){let f=e.find(e=>e.i==u);f.filtros=new i.local(null,n.value.urlids,a[f.variavel]),f.filtros.addEventListener("input",e=>r(e,f)),t.value=t.value.filter(e=>e.idx!=u||!e.filtrado),o.value.forEach(i=>{Promise.all([l[e.find(e=>e.i==u).variavel](i.nome,e.find(e=>e.i==u).filtros.value.expression)]).then(n=>{t.value=t.value.concat({idx:u,municipio:i.nome,variavel:e.find(e=>e.i==u).variavel,filtrado:!0,dados:s[e.find(e=>e.i==u).variavel](n[0])})})})}else t.value=t.value.filter(e=>e.idx!=u||!e.filtrado);d.value=e}}function eu(e,t,i){return(n,a)=>{n.target.checked?e.find(e=>e.i==a).alterar_tempo=t:e.find(e=>e.i==a).alterar_tempo=null,i.value=e}}function ef(e,t){return(i,n)=>{e.find(e=>e.i==n).tamanho=i.target.value,t.value=e}}function ep(e,t){return(i,n)=>{e.find(e=>e.i==n).escala=i.target.value,t.value=e}}function em(e,t){return(i,n)=>{e.find(e=>e.i==n).mostra_media_movel=i.target.checked,t.value=e}}function eh(e){return t=>{let i=[0,0];return i[0]=e[t[0]].inicio,i[1]=e[t[1]].termino,i}}function ev(){return""}function eb(e,t,i){return e?e.trilhas.map(e=>(e.filtros=new t.local(null,e.filtrosUrlids),e)):[{i:0,mostra_media_movel:!0,variavel:"PM25",alterar_tempo:null,poluente:"PM25"},{i:1,mostra_media_movel:!1,variavel:"PESO",alterar_tempo:null,filtros:new t.local(null,null,i.PESO),show_filtros:!1},{i:2,mostra_media_movel:!1,escala:"taxa",tamanho:"PEQUENO",variavel:"PIG",alterar_tempo:null,filtros:new t.local(null,null,i.PIG),show_filtros:!1}]}function eg(e){return{PM25:{valor:"\xb5g/m\xb3"},PESO:{valor:"g"},PIG:{absoluto:e("nascimentos"),percentual:"%",taxa:e("nasc./1000NV")},TOTAL:{absoluto:e("nascimentos"),percentual:"%"}}}function ex(){return 2.5}function ey(){return 2}function ew(){return!0}function eA(e,t){return e?e.municipios:t.municipios}function e_(e,t,i,n,a,r,o,l,s,d,c){if(e){for(let u of t.value)i.value=i.value.concat([u]),u=u.nome,n.forEach(e=>{Promise.all([a[e.variavel](u,r.value.expression)]).then(t=>{o.value=o.value.concat({idx:e.i,municipio:u,variavel:e.variavel,dados:l[e.variavel](t[0])})}),e.show_filtros&&Promise.all([a[e.variavel](u,e.filtros.value.expression)]).then(t=>{o.value=o.value.concat({idx:e.i,municipio:u,variavel:e.variavel,filtrado:!0,dados:l[e.variavel](t[0])})})}),n.slice(1).forEach(e=>e.filtros.addEventListener("input",t=>s(t,e)));r.addEventListener("input",d),r.addEventListener("limparFiltros",e=>{for(let t=0;t<n.length;t++)n[t].filtros.limpa(),n[t].show_filtros=!1}),c.value=!1}}function eC(e,t,i,n){return function(){e.setItem("conf",JSON.stringify(t())),e.setItem("municipios",JSON.stringify(i.value)),e.setItem("intervalo",JSON.stringify(n.value)),console.log("SAVE STATE")}}function eE(e,t,i,n){return(a,r)=>{e.value=e.value.filter(e=>e.idx!=r.i||!e.filtrado),t.value.forEach(t=>{Promise.all([i[r.variavel](t.nome,r.filtros.value.expression)]).then(i=>{e.value=e.value.concat({idx:r.i,municipio:t.nome,variavel:r.variavel,filtrado:!0,dados:n[r.variavel](i[0])})})})}}function eS(e){return e.range([3,53],{label:"Janela em semanas",value:13,step:2})}function ek(e){return e.select(["co_ppb","no2_ppb","o3_ppb","pm25_ugm3","so2_ugm3"],{label:"Indicador",value:"pm25_ugm3"})}function eT(){return["#2F87F5","#D8C56C","#DC5988","#6CC28D","#67AEC2","#ABA6F8","#D8C56C","#2DE8BD","#2F87F5","#94E8F9"]}function eO(){return[]}function eI(){return[]}function eM(e,t,i,n){return e[Math.ceil(t.interpolate(...i?i.intervalo:n.intervalo)(.5))].inicio}function eD(e){return e}function eN(e){return e.bisector(e=>e.x)}function eL(e){return e.timeFormatDefaultLocale({decimal:",",thousands:".",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%d/%m/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Domingo","Segunda-feira","Ter\xe7a-feira","Quarta-feira","Quinta-feira","Sexta-feira","S\xe1bado"],shortDays:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],months:["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],shortMonths:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]})}function eR(e){return e[0]}function eP(e){return e[1]}function eF(e,t,i,n,a){return(r,o)=>{let l=e.find(e=>e.i==o).alterar_tempo,s=e.find(e=>e.i==o).mostra_media_movel?(t-1)/2:0;return l?r.x.getTime()>=i[l[0]-s].inicio.getTime()&&r.x.getTime()<=i[l[1]+s].termino.getTime():r.x.getTime()>=i[n-s].inicio.getTime()&&r.x.getTime()<=i[a+s].termino.getTime()}}function eB(){return 200}function eU(e,t){return function(i,n){let a=e.find(e=>e.municipio==i).codigo_sdv,r=`https://storage.googleapis.com/amplia/municipios-v2/${a.substring(0,2)}/mun${a}.db`;return t.open(r).then(e=>e.query(n))}}function e$(e,t){return function(i,n){if(2==i.length)return;let a=e.find(e=>e.municipio==i).codigo_sdv,r=`https://storage.googleapis.com/amplia/sisam/${a.substring(0,2)}/mun${a}.db`;return t.open(r).then(e=>e.query(n))}}function ej(e){return e`<style>
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@400;700&display=swap');
  text{
    font-family:"Fira Sans Condensed"
  }
</style>`}function ez(e){return e("municipios2.csv").csv()}function eG(e){return e("semanas_epidemiologicas_estendido.csv").csv().then(e=>e.map(e=>(e.inicio=new Date(Date.UTC(+e.inicio.substr(0,4),+e.inicio.substr(5,2)-1,+e.inicio.substr(8,2))),e.termino=new Date(Date.UTC(+e.termino.substr(0,4),+e.termino.substr(5,2)-1,+e.termino.substr(8,2))),e)).filter(e=>e.ano>=2010))}function eH(){return{ACRE:"RIO BRANCO",ALAGOAS:"MACEI\xd3",AMAPÁ:"MACAP\xc1",AMAZONAS:"MANAUS",BAHIA:"SALVADOR",CEARÁ:"FORTALEZA","DISTRITO FEDERAL":"BRAS\xcdLIA","ESP\xcdRITO SANTO":"VIT\xd3RIA",GOIÁS:"GOI\xc2NIA",MARANHÃO:"S\xc3O LU\xcdS","MATO GROSSO":"CUIAB\xc1","MATO GROSSO DO SUL":"CAMPO GRANDE","MINAS GERAIS":"BELO HORIZONTE",PARÁ:"BEL\xc9M",PARAÍBA:"JO\xc3O PESSOA",PARANÁ:"CURITIBA",PERNAMBUCO:"RECIFE",PIAUÍ:"TERESINA","RIO DE JANEIRO":"RIO DE JANEIRO","RIO GRANDE DO NORTE":"NATAL","RIO GRANDE DO SUL":"PORTO ALEGRE",RONDÔNIA:"PORTO VELHO",RORAIMA:"BOA VISTA","SANTA CATARINA":"FLORIAN\xd3POLIS","S\xc3O PAULO":"S\xc3O PAULO",SERGIPE:"ARACAJU",TOCANTINS:"PALMAS"}}function eV(){return{ACRE:"AC",ALAGOAS:"AL",AMAPÁ:"AP",AMAZONAS:"AM",BAHIA:"BA",CEARÁ:"CE","DISTRITO FEDERAL":"DF","ESP\xcdRITO SANTO":"ES",GOIÁS:"GO",MARANHÃO:"MA","MATO GROSSO":"MT","MATO GROSSO DO SUL":"MS","MINAS GERAIS":"MG",PARÁ:"PA",PARAÍBA:"PB",PARANÁ:"PR",PERNAMBUCO:"PE",PIAUÍ:"PI","RIO DE JANEIRO":"RJ","RIO GRANDE DO NORTE":"RN","RIO GRANDE DO SUL":"RS",RONDÔNIA:"RO",RORAIMA:"RR","SANTA CATARINA":"SC","S\xc3O PAULO":"SP",SERGIPE:"SE",TOCANTINS:"TO"}}function eq(){return[]}function eW(){return["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"]}function eZ(e){return Object.values(e).sort(Intl.Collator().compare)}function eX(e){return t=>"BRASIL"==t?"":e.includes(t)?"AND res_SIGLA_UF='"+t+"'":"AND res_MUNNOMEX='"+t.normalize("NFD").replace(/\p{Diacritic}/gu,"")+"'"}function eJ(e,t,i){return n=>"BRASIL"==n?"":e.includes(n)?"mun_uf_nome='"+Object.entries(t).find(e=>e[1]==n)[0]+"'":"mun_geocodsdv="+i.find(e=>e.municipio==n).codigo_sdv}function eY(e){return e`## URL stuff`}function eQ(e){return function(t){return e.compressToEncodedURIComponent(JSON.stringify(t))}}function eK(e){return function(t){return JSON.parse(e.decompressFromEncodedURIComponent(t))}}function e0(e,t,i,n){return()=>({principalUrlids:e.value.value.urlids,municipios:t.value,intervalo:i,trilhas:n.value.map(e=>{let t={};return Object.assign(t,e),t.filtros&&(t.filtrosUrlids=t.filtros.value.urlids,delete t.filtros),t})})}function e1(){return{principalUrlids:"",municipios:[{nome:"RIO DE JANEIRO",cor:"#2F87F5"}],intervalo:[262,366],trilhas:[{i:0,mostra_media_movel:!0,variavel:"PM25",alterar_tempo:null,poluente:"PM25"},{i:1,mostra_media_movel:!1,variavel:"PESO",alterar_tempo:null,show_filtros:!1,filtrosUrlids:""},{i:2,mostra_media_movel:!1,escala:"taxa",tamanho:"PEQUENO",variavel:"PIG",alterar_tempo:null,show_filtros:!1,filtrosUrlids:""}]}}function e2(e,t,i,n){let a=new e(window.location.search).get("conf");if(a)return t(a);if(a=i.getItem("conf")){let r=JSON.parse(a),o=i.getItem("municipios");o&&(r.municipios=JSON.parse(o));let l=i.getItem("intervalo");return l&&(r.intervalo=JSON.parse(l)),r}let s=n;return(a=i.getItem("municipios"))&&(s.municipios=JSON.parse(a)),(a=i.getItem("intervalo"))&&(s.intervalo=JSON.parse(a)),s}function e5(){return function(e){var t=document.body.appendChild(document.createElement("textarea"));t.style.position="absolute",t.style.left="-9999px",t.setAttribute("readonly",""),t.value=e,t.select();try{return document.execCommand("copy")}catch(i){return!1}finally{t.parentNode.removeChild(t)}}}function e3(){return"https://ampliasaude.github.io/amplia-site/trilhas/NascidosVivos/"}function e4(e,t,i,n,a){let r=e`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Copiar link compartilhável</title>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M6.045 10C6.045 11.026 6.8095 11.86 7.75 11.86H9.95V13H7.75C6.232 13 5 11.656 5 10C5 8.344 6.232 7 7.75 7H9.95V8.14H7.75C6.8095 8.14 6.045 8.974 6.045 10ZM8.3 9.4H12.7V10.6H8.3V9.4ZM13.25 13H11.05V11.86H13.25C14.1905 11.86 14.955 11.026 14.955 10C14.955 8.974 14.1905 8.14 13.25 8.14H11.05V7H13.25C14.768 7 16 8.344 16 10C16 11.656 14.768 13 13.25 13Z" fill="white"/>
</svg>`;return r.onclick=()=>{a(`${t}?conf=${i(n())}`)},r}function e6(e,t){return function(){return`conf=${e(t())}`}}function e8(e){return e`## Poluentes`}function e7(){return{pm25_ugm3:120,so2_ugm3:90,no2_ppb:286,o3_ppb:154,co_ppb:9.9}}function e9(){return e=>.08206*(e+293.15)}function te(){return{no2_ppb:46.0055,o3_ppb:48,co_ppb:28.01}}function tt(){return{pm25_ugm3:[25,37,50,60],so2_ugm3:[20,30,40,60],no2_ppb:[200,220,240,260],o3_ppb:[100,120,130,140],co_ppb:[9,9,9,9]}}function ti(e,t){return(i,n="TRUE")=>t(i,`
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
 `)}function tn(e,t,i,n){return a=>{a.forEach(a=>{let r=a,o=new Date(Date.UTC(r.ano,r.mes-1,r.dia));for(let l of e)if(o>=new Date(l.inicio)&&o<=new Date(l.termino)){r.semana=+l.semana,r.x=l.inicio;break}switch(1==r.mes&&53==r.semana&&(r.ano-=1,r.mes=12),t){case"no2_ppb":case"o3_ppb":let s=i[t]/n(r.temperatura);r.valor*=s;case"co_ppb":r.valor/=1e3}});let r=[];for(let o of a){let l=r.find(e=>e.x==o.x);l?(l.valor+=o.valor,l.temperatura_c_media+=o.temperatura_c_media,l.cont+=1):r.push({ano:o.ano,semana:o.semana,x:o.x,valor:o.valor||0,temperatura_c_media:o.temperatura_c_media,cont:1})}return r.map(e=>(e.valor/=e.cont,e.temperatura_c_media/=e.cont,delete e.cont,e)).filter(e=>e.semana)}}function ta(e){return e`## Fecundação`}function tr(e,t,i){return async(n,a)=>{let r;return await i.fetchPeso(e.includes(n)?Math.floor(t.find(e=>e.sigla==n).codigo_sdv/1e4):t.find(e=>e.municipio==n).codigo_sdv,a)}}function to(e){return t=>{t.forEach(t=>{let i=t;for(let n of(i.data=new Date(i.data),e))if(i.data>=new Date(n.inicio)&&i.data<=new Date(n.termino)){i.x=n.inicio;break}});let i=[];for(let n of t){let a=i.find(e=>e.x.getTime()==n.x.getTime());a?(a.valor+=n.valor*n.total,a.total+=n.total):i.push({x:n.x,valor:n.valor*n.total,total:n.total})}return i.map(e=>(e.valor/=e.total,delete e.total,e)).filter(e=>e.x)}}function tl(e,t,i){return async(n,a)=>{let r;return await i.fetchPIG(e.includes(n)?Math.floor(t.find(e=>e.sigla==n).codigo_sdv/1e4):t.find(e=>e.municipio==n).codigo_sdv,a)}}function ts(e,t){return i=>{let n=e(i[1]);(i=i[0]).forEach(e=>{let i=e;for(let n of(i.data=new Date(i.data),t))if(i.data>=new Date(n.inicio)&&i.data<=new Date(n.termino)){i.x=n.inicio;break}});let a=i,r=[];for(let o of a){let l=r.find(e=>e.x.getTime()==o.x.getTime());l?(l.absoluto[o.ig]+=o.total,l.total+=o.total):r.push({x:o.x,absoluto:{PEQUENO:"PEQUENO"==o.ig?o.total:0,ADEQUADO:"ADEQUADO"==o.ig?o.total:0,GRANDE:"GRANDE"==o.ig?o.total:0},total:o.total})}return t.filter(e=>!r.map(e=>e.x.getTime()).includes(e.inicio.getTime())).forEach(e=>{r.push({x:e.inicio,absoluto:{PEQUENO:0,ADEQUADO:0,GRANDE:0},total:0})}),(r=r.map(e=>{e.percentual={},e.total?(e.percentual.PEQUENO=100*e.absoluto.PEQUENO/e.total,e.percentual.ADEQUADO=100*e.absoluto.ADEQUADO/e.total,e.percentual.GRANDE=100*e.absoluto.GRANDE/e.total):(e.percentual.PEQUENO=0,e.percentual.ADEQUADO=0,e.percentual.GRANDE=0),e.taxa={};let t=n.find(t=>t.x.getTime()==e.x.getTime());return t?(e.taxa.PEQUENO=1e3*e.absoluto.PEQUENO/t.valor,e.taxa.ADEQUADO=1e3*e.absoluto.ADEQUADO/t.valor,e.taxa.GRANDE=1e3*e.absoluto.GRANDE/t.valor):(e.taxa.PEQUENO=0,e.taxa.ADEQUADO=0,e.taxa.GRANDE=0),e})).sort((e,t)=>e.x.getTime()-t.x.getTime())}}function td(e){return t=>{let i=[];t.forEach(t=>{let n=t;if(n.data=new Date(n.data),!(2011>n.data.getFullYear())){for(let a of e)if(n.data>=new Date(a.inicio)&&n.data<=new Date(a.termino)){n.x=a.inicio;break}i.push(n)}});let n=[];for(let a of i){let r=n.find(e=>e.x.getTime()==a.x.getTime());r?r.valor+=a.valor:n.push({x:a.x,valor:a.valor})}return n.filter(e=>e.x)}}function tc(e,t,i){return async(n,a)=>{let r;return await i.fetchTotal(e.includes(n)?Math.floor(t.find(e=>e.sigla==n).codigo_sdv/1e4):t.find(e=>e.municipio==n).codigo_sdv,a)}}function tu(e,t){return i=>{let n=e(i[1]);i=i[0];let a=[];i.forEach(e=>{let i=e;if(i.data=new Date(i.data),!(2011>i.data.getFullYear())){for(let n of t)if(i.data>=new Date(n.inicio)&&i.data<=new Date(n.termino)){i.x=n.inicio;break}a.push(i)}});let r=[];for(let o of a){let l=r.find(e=>e.x.getTime()==o.x.getTime());l?l.absoluto+=o.valor:r.push({x:o.x,absoluto:o.valor})}return(r=r.filter(e=>e.x)).map(e=>{e.percentual={};let t=n.find(t=>t.x.getTime()==e.x.getTime());return t?e.percentual=100*e.absoluto/t.valor:e.percentual=0,e})}}function tf(e){return e`## Imports`}function tp(e){return e("sortablejs/Sortable.js")}function tm(e){return e("d3@5")}function th(e,t,i,n,a,r,o,l){return function(s,d,c=s,u=d,f=e.width,p=60){var m=[s,d+1],h=e.height,v=e.margin,b=f-p-v.right,g=h-v.top-v.bottom,x=t.scaleLinear().domain(m).range([0,b]),y=t.select(i.svg(f,h));let w=y.append("g").attr("transform",`translate(${p}, ${v.top})`);var A=w.append("text").attr("id","labelleft").attr("x",0).attr("y",g+5).style("display",60==p?"inline":"none").text(n(a[r[m[0]].inicio.getMonth()])+" "+r[m[0]].inicio.getFullYear()),_=w.append("text").attr("id","labelright").attr("x",0).attr("y",g+5).style("display",60==p?"inline":"none").text(n(a[r[m[1]].termino.getMonth()])+" "+r[m[1]].termino.getFullYear());w.append("text").attr("id","labelleft2").attr("x",-8).attr("y",g-g/2+1).style("alignment-baseline","middle").text(2012),w.append("text").attr("id","labelright2").attr("x",b+8).attr("y",g-g/2+1).style("alignment-baseline","middle").text(2019);var C=t.brushX().extent([[0,0],[b,g]]).on("brush",function(){var e=t.event.selection;A.attr("x",e[0]).text(a[r[Math.round(x.invert(e[0]))].inicio.getMonth()]+" "+r[Math.round(x.invert(e[0]))].inicio.getFullYear()),_.attr("x",e[1]).text(a[r[Math.round(x.invert(e[1]))].termino.getMonth()]+" "+r[Math.round(x.invert(e[1]))].termino.getFullYear()),k.attr("display",null).attr("transform",function(t,i){return"translate("+[e[i],-g/4]+")"}),y.node().value=e.map(e=>Math.round(x.invert(e))),y.node().dispatchEvent(new CustomEvent("input"))}).on("end",function(){if(t.event.sourceEvent){var e=t.event.selection.map(x.invert).map(Math.round);t.select(this).transition().call(t.event.target.move,e.map(x)),o.value=Math.max(Math.min(new Date(o.value),r[y.node().value[1]-2].termino),r[y.node().value[0]].inicio)}}),E=w.append("g").attr("class","brush").call(C),S=function(e){return"M -3 12 A 3 3 0 0 1 3 12 V 18 A 3 3 0 0 1 -3 18 Z"},k=E.selectAll(".handle--custom").data([{type:"w"},{type:"e"}]).enter().append("path").attr("class","handle--custom").attr("stroke","#000").attr("fill","#151472").attr("cursor","ew-resize").attr("y",g/2).attr("d",S);return E.selectAll(".overlay").attr("fill","#E5E5E5").each(function(e){e.type="selection"}).on("mousedown touchstart",function(){var e=x(1)-x(0),t=l.mouse(this)[0],i=t-e/2,n=t+e/2;l.select(this.parentNode).call(C.move,n>b?[b-e,b]:i<0?[0,e]:[i,n])}),E.call(C.move,[c,u+1].map(x)),w.append("g").selectAll("line").data(r.filter(e=>1==e.semana).map(e=>r.findIndex(t=>t==e))).enter().append("line").attr("x1",e=>x(e)).attr("x2",e=>x(e)).attr("y1",0).attr("y2",g).style("stroke","#ccc"),y.node()}}function tv(){return{width:600,height:60,margin:{top:20,bottom:20,left:60,right:60}}}function tb(e){return e`
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
`}function tw(e,t){let n=e.module();function a(){return this.url}let r=new Map([["semanas_epidemiologicas_estendido.csv",{url:new i.U(i(6763)),mimeType:"text/csv",toString:a}],["municipios2.csv",{url:new i.U(i(4144)),mimeType:"text/csv",toString:a}]]);n.builtin("FileAttachment",e.fileAttachments(e=>r.get(e))),n.variable(t()).define(["md"],D),n.define("initial mp",["urlParamConf","ampliaMenu"],N),n.variable(t("mutable mp")).define("mutable mp",["Mutable","initial mp"],(e,t)=>new e(t)),n.variable(t("mp")).define("mp",["mutable mp"],e=>e.generator),n.variable(t("listenerFiltroGlobal")).define("listenerFiltroGlobal",["mutable conf_trilhas","mutable data","mutable sel_municipios","funcoesFetch","funcoesProc"],L),n.variable(t("div_controles")).define("div_controles",["html","barra_municipios","viewof intervalo"],R),n.variable(t("vis")).define("vis",["conf_trilhas","funcoesGeradoras","gAdicionaTrilha","Sortable","mutable conf_trilhas","d3","saveState"],P),n.variable(t("maxMunicipios")).define("maxMunicipios",F),n.variable(t("viewof intervalo")).define("viewof intervalo",["urlParamConf","slider_snap","defaultConf"],B),n.variable(t("intervalo")).define("intervalo",["Generators","viewof intervalo"],(e,t)=>e.input(t)),n.variable(t("barra_municipios")).define("barra_municipios",["html","sel_municipios","remove_mun_button","maxMunicipios","menu_municipios"],U),n.variable(t("menu_municipios")).define("menu_municipios",["d3","html","TL","municipios","agregacoes","sel_municipios","maxMunicipios","mutable sel_municipios","colors","sessionStorage","conf_trilhas","funcoesFetch","mp","mutable data","funcoesProc","data"],$),n.variable(t("remove_mun_button")).define("remove_mun_button",["d3","sel_municipios","mutable sel_municipios","sessionStorage","mutable data","data","agregacoes","municipios"],j),n.variable(t("remove_trilha_button")).define("remove_trilha_button",["d3","removeTrilha"],z),n.variable(t("copy_button")).define("copy_button",["d3","copyTrilha"],G),n.variable(t("funcoesGeradoras")).define("funcoesGeradoras",["gPM25","gPESO","gPIG","gTOTAL"],H),n.variable(t("funcoesProc")).define("funcoesProc",["procPM25","procPESO","procPIG","procTOTAL"],V),n.variable(t("funcoesFetch")).define("funcoesFetch",["fetchPM25","fetchPESO","fetchPIG","fetchTOTAL"],q),n.variable(t("corTrilha")).define("corTrilha",W),n.variable(t("corTrilhaFraco")).define("corTrilhaFraco",Z),n.variable(t("style")).define("style",["html"],X),n.variable(t("mouseDownHandler")).define("mouseDownHandler",["data","bisector","mutable sel_pm25","mutable sel","d3"],J),n.variable(t("legendTooltip")).define("legendTooltip",["d3","sel_pm25","sel","valoresLista","TL","corTrilhaFraco"],Y),n.variable(t("suscetibilidade")).define("suscetibilidade",["sel","d3"],Q),n.variable(t("valoresLista")).define("valoresLista",["sel_pm25","sel","sel_municipios","data","semanas_epidemiologicas","d3","unidades","agregacoes","siglas","bisector"],K),n.variable(t("gPM25")).define("gPM25",["Plot","width","height","formatTime","conf_trilhas","semanas_epidemiologicas","intervalo","maxScale","indicador","padroes","data","siglas","filterDate","janela","lineWidth","sel_municipios","bisector","sel_pm25","legendTooltip","suscetibilidade","mouseDownHandler","html","corTrilha","d3","removeTrilha","copy_button","TL","checkMediaMovel","checkTempo","inner_slider"],ee),n.variable(t("gPESO")).define("gPESO",["sel_municipios","data","gLoadingTrilha","conf_trilhas","mp","Plot","width","height","semanas_epidemiologicas","intervalo","filterDate","janela","lineWidthFiltered","lineWidth","bisector","sel","legendTooltip","mouseDownHandler","html","corTrilha","d3","removeTrilha","copy_button","TL","checkMediaMovel","checkTempo","inner_slider","checkFiltros"],et),n.variable(t("gPIG")).define("gPIG",["sel_municipios","data","gLoadingTrilha","conf_trilhas","mp","Plot","width","height","semanas_epidemiologicas","intervalo","filterDate","janela","lineWidthFiltered","lineWidth","bisector","sel","legendTooltip","mouseDownHandler","html","corTrilha","d3","removeTrilha","copy_button","TL","checkTamanho","checkMediaMovel","checkTempo","checkEscala","inner_slider","checkFiltros"],ei),n.variable(t("gTOTAL")).define("gTOTAL",["sel_municipios","data","gLoadingTrilha","conf_trilhas","mp","Plot","width","height","semanas_epidemiologicas","intervalo","filterDate","janela","lineWidthFiltered","lineWidth","bisector","sel","legendTooltip","mouseDownHandler","html","corTrilha","d3","removeTrilha","copy_button","TL","checkMediaMovel","checkTempo","checkEscala","inner_slider","checkFiltros"],en),n.variable(t("gAdicionaTrilha")).define("gAdicionaTrilha",["html","d3","removeTrilha","copyTrilha","width","TL","addTrilha"],ea),n.variable(t("gLoadingTrilha")).define("gLoadingTrilha",["html","d3","removeTrilha","copyTrilha","width"],er),n.variable(t("copyTrilha")).define("copyTrilha",["conf_trilhas","d3","listenerFiltro","mutable conf_trilhas","data","mutable data"],eo),n.variable(t("removeTrilha")).define("removeTrilha",["mutable conf_trilhas","conf_trilhas","mutable data","data"],el),n.variable(t("addTrilha")).define("addTrilha",["d3","conf_trilhas","mutable conf_trilhas","sel_municipios","fetchPM25","mutable data","procPM25","ampliaMenu","corTrilha","listenerFiltro","fetchPESO","procPESO","fetchPIG","procPIG","fetchTOTAL","procTOTAL"],es),n.variable(t("inner_slider")).define("inner_slider",["conf_trilhas","slider_snap","width","mutable conf_trilhas"],ed),n.variable(t("checkFiltros")).define("checkFiltros",["conf_trilhas","mutable data","ampliaMenu","mp","corTrilha","listenerFiltro","mutable sel_municipios","funcoesFetch","funcoesProc","mutable conf_trilhas"],ec),n.variable(t("checkTempo")).define("checkTempo",["conf_trilhas","intervalo","mutable conf_trilhas"],eu),n.variable(t("checkTamanho")).define("checkTamanho",["conf_trilhas","mutable conf_trilhas"],ef),n.variable(t("checkEscala")).define("checkEscala",["conf_trilhas","mutable conf_trilhas"],ep),n.variable(t("checkMediaMovel")).define("checkMediaMovel",["conf_trilhas","mutable conf_trilhas"],em),n.variable(t("converteIntervalo")).define("converteIntervalo",["semanas_epidemiologicas"],eh),n.define("initial conf_principal",ev),n.variable(t("mutable conf_principal")).define("mutable conf_principal",["Mutable","initial conf_principal"],(e,t)=>new e(t)),n.variable(t("conf_principal")).define("conf_principal",["mutable conf_principal"],e=>e.generator),n.define("initial conf_trilhas",["urlParamConf","ampliaMenu","corTrilha"],eb),n.variable(t("mutable conf_trilhas")).define("mutable conf_trilhas",["Mutable","initial conf_trilhas"],(e,t)=>new e(t)),n.variable(t("conf_trilhas")).define("conf_trilhas",["mutable conf_trilhas"],e=>e.generator),n.variable(t("unidades")).define("unidades",["TL"],eg),n.variable(t("lineWidth")).define("lineWidth",ex),n.variable(t("lineWidthFiltered")).define("lineWidthFiltered",ey),n.define("initial firstload",ew),n.variable(t("mutable firstload")).define("mutable firstload",["Mutable","initial firstload"],(e,t)=>new e(t)),n.variable(t("firstload")).define("firstload",["mutable firstload"],e=>e.generator),n.define("initial municipiosDefault",["urlParamConf","defaultConf"],eA),n.variable(t("mutable municipiosDefault")).define("mutable municipiosDefault",["Mutable","initial municipiosDefault"],(e,t)=>new e(t)),n.variable(t("municipiosDefault")).define("municipiosDefault",["mutable municipiosDefault"],e=>e.generator),n.variable(t("onfirstload")).define("onfirstload",["firstload","mutable municipiosDefault","mutable sel_municipios","conf_trilhas","funcoesFetch","mp","mutable data","funcoesProc","listenerFiltro","listenerFiltroGlobal","mutable firstload"],e_),n.variable(t("saveState")).define("saveState",["sessionStorage","getCurrentConf","mutable sel_municipios","viewof intervalo"],eC),n.variable(t("listenerFiltro")).define("listenerFiltro",["mutable data","mutable sel_municipios","funcoesFetch","funcoesProc"],eE),n.variable(t("viewof janela")).define("viewof janela",["Inputs"],eS),n.variable(t("janela")).define("janela",["Generators","viewof janela"],(e,t)=>e.input(t)),n.variable(t("viewof indicador")).define("viewof indicador",["Inputs"],ek),n.variable(t("indicador")).define("indicador",["Generators","viewof indicador"],(e,t)=>e.input(t)),n.variable(t("colors")).define("colors",eT),n.define("initial sel_variaveis",eO),n.variable(t("mutable sel_variaveis")).define("mutable sel_variaveis",["Mutable","initial sel_variaveis"],(e,t)=>new e(t)),n.variable(t("sel_variaveis")).define("sel_variaveis",["mutable sel_variaveis"],e=>e.generator),n.define("initial sel_municipios",eI),n.variable(t("mutable sel_municipios")).define("mutable sel_municipios",["Mutable","initial sel_municipios"],(e,t)=>new e(t)),n.variable(t("sel_municipios")).define("sel_municipios",["mutable sel_municipios"],e=>e.generator),n.define("initial sel",["semanas_epidemiologicas","d3","urlParamConf","defaultConf"],eM),n.variable(t("mutable sel")).define("mutable sel",["Mutable","initial sel"],(e,t)=>new e(t)),n.variable(t("sel")).define("sel",["mutable sel"],e=>e.generator),n.define("initial sel_pm25",["sel"],eD),n.variable(t("mutable sel_pm25")).define("mutable sel_pm25",["Mutable","initial sel_pm25"],(e,t)=>new e(t)),n.variable(t("sel_pm25")).define("sel_pm25",["mutable sel_pm25"],e=>e.generator),n.variable(t("bisector")).define("bisector",["d3"],eN),n.variable(t("formatTime")).define("formatTime",["d3"],eL),n.variable(t("periodoInicio")).define("periodoInicio",["intervalo"],eR),n.variable(t("periodoFim")).define("periodoFim",["intervalo"],eP),n.variable(t("filterDate")).define("filterDate",["conf_trilhas","janela","semanas_epidemiologicas","periodoInicio","periodoFim"],eF),n.variable(t("height")).define("height",eB),n.variable(t("sqlSinasc")).define("sqlSinasc",["municipios","SQLiteDatabaseClient"],eU),n.variable(t("sqlSisam")).define("sqlSisam",["municipios","SQLiteDatabaseClient"],e$),n.variable(t("style2")).define("style2",["html"],ej),n.variable(t("municipios")).define("municipios",["FileAttachment"],ez),n.variable(t("semanas_epidemiologicas")).define("semanas_epidemiologicas",["FileAttachment"],eG),n.variable(t("capitais")).define("capitais",eH),n.variable(t("siglas")).define("siglas",eV),n.define("initial data",eq),n.variable(t("mutable data")).define("mutable data",["Mutable","initial data"],(e,t)=>new e(t)),n.variable(t("data")).define("data",["mutable data"],e=>e.generator),n.variable(t("months")).define("months",eW),n.variable(t("agregacoes")).define("agregacoes",["siglas"],eZ),n.variable(t("queryLocalSINASC")).define("queryLocalSINASC",["agregacoes"],eX),n.variable(t("queryLocalSISAM")).define("queryLocalSISAM",["agregacoes","siglas","municipios"],eJ),n.variable(t()).define(["md"],eY),n.variable(t("objToUrlParam")).define("objToUrlParam",["lz"],eQ),n.variable(t("urlParamToObj")).define("urlParamToObj",["lz"],eK),n.variable(t("getCurrentConf")).define("getCurrentConf",["mutable mp","mutable sel_municipios","intervalo","mutable conf_trilhas"],e0),n.variable(t("defaultConf")).define("defaultConf",e1),n.variable(t("urlParamConf")).define("urlParamConf",["URLSearchParams","urlParamToObj","sessionStorage","defaultConf"],e2),n.variable(t("copyToClipboard")).define("copyToClipboard",e5),n.variable(t("currentHref")).define("currentHref",e3),n.variable(t("copyLinkButton")).define("copyLinkButton",["svg","currentHref","objToUrlParam","getCurrentConf","copyToClipboard"],e4),n.variable(t("linkParam")).define("linkParam",["objToUrlParam","getCurrentConf"],e6),n.variable(t()).define(["md"],e8),n.variable(t("maxScale")).define("maxScale",e7),n.variable(t("volume_mol")).define("volume_mol",e9),n.variable(t("massa_mol")).define("massa_mol",te),n.variable(t("padroes")).define("padroes",tt),n.variable(t("fetchPM25")).define("fetchPM25",["indicador","sqlSisam"],ti),n.variable(t("procPM25")).define("procPM25",["semanas_epidemiologicas","indicador","massa_mol","volume_mol"],tn),n.variable(t()).define(["md"],ta),n.variable(t("fetchPESO")).define("fetchPESO",["agregacoes","municipios","newDataSource"],tr),n.variable(t("procPESO")).define("procPESO",["semanas_epidemiologicas"],to),n.variable(t("fetchPIG")).define("fetchPIG",["agregacoes","municipios","newDataSource"],tl),n.variable(t("procPIG")).define("procPIG",["procTOTALUnfiltered","semanas_epidemiologicas"],ts),n.variable(t("procTOTALUnfiltered")).define("procTOTALUnfiltered",["semanas_epidemiologicas"],td),n.variable(t("fetchTOTAL")).define("fetchTOTAL",["agregacoes","municipios","newDataSource"],tc),n.variable(t("procTOTAL")).define("procTOTAL",["procTOTALUnfiltered","semanas_epidemiologicas"],tu),n.variable(t()).define(["md"],tf),n.variable(t("Sortable")).define("Sortable",["require"],tp),n.variable(t("d3_5")).define("d3_5",["require"],tm),n.variable(t("slider_snap")).define("slider_snap",["layout","d3_5","DOM","TL","months","semanas_epidemiologicas","mutable sel","d3"],th),n.variable(t("layout")).define("layout",tv),n.variable(t("style_slider")).define("style_slider",["html"],tb);let o=e.module(M);return n.import("menuNascidosVivos","ampliaMenu",o),n.import("datasource","newDataSource",o),n.import("TL",o),n.variable(t("lz")).define("lz",["require"],tg),n.variable(t("style_menu")).define("style_menu",["html"],tx),n.variable(t("styleMenuMun")).define("styleMenuMun",["html"],ty),n}i.d(t,{Z:function(){return tw}})},6825:function(e,t,i){"use strict";i.d(t,{Z:function(){return B}});var n=i(5733),a=i(3162);function r(e,t){return"".concat(function e(t){if("number"!=typeof t)return"";var i=Math.floor(t/26),n=String.fromCharCode(97+t%26).toUpperCase();return 0===i?n:e(i-1)+n}(e)).concat(t)}function o(e){var t=e.align,i=e.alignVertical,n=e.fontFamily,a=e.fontSize,r=e.fontWeight,o=e.fontStyle,l=e.wrap,s=e.color,d=e.backgroundColor,c=e.borderColor,u=e.borderStyle,f=e.leftBorderColor,p=e.leftBorderStyle,m=e.rightBorderColor,h=e.rightBorderStyle,v=e.topBorderColor,b=e.topBorderStyle,g=e.bottomBorderColor,x=e.bottomBorderStyle;if(t||i||n||a||r||o||l||s||d||c||u||f||p||m||h||v||b||g||x)return function(e){var t={};for(var i in e)void 0!==e[i]&&(t[i]=e[i]);return t}({align:t,alignVertical:i,fontFamily:n,fontSize:a,fontWeight:r,fontStyle:o,wrap:l,color:s,backgroundColor:d,borderColor:c,borderStyle:u,leftBorderColor:f,leftBorderStyle:p,rightBorderColor:m,rightBorderStyle:h,topBorderColor:v,topBorderStyle:b,bottomBorderColor:g,bottomBorderStyle:x})}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function d(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach(function(t){c(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function c(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=Array(t);i<t;i++)n[i]=e[i];return n}var f={fontWeight:"bold"};function p(e,t){if(!e||(e.type!==Date||e.width||(e.width=14),!e.width))return"";var i=t+1;return'<col min="'.concat(i,'" max="').concat(i,'" width="').concat(e.width,'" customWidth="1"/>')}function m(e){var t=e.data,i=e.rowIndex,n=e.columnIndex,a=e.span,r=e.rowSpan,l=e.cloneData,s=o(t[i][n]);s&&(t=l());for(var d=i;d<=i+(r-1);){for(var c=n;c<=n+(a-1);){var u=t[d][c];if(d>i||c>n){if(null!=u)throw Error("[write-excel-file] When using `span` or `rowSpan` parameters, all hidden overlapped cells should be represented by `null`s or `undefined`s. Cell at row ".concat(i+1," and column ").concat(n+1," is configured with `span` ").concat(a," and `rowSpan` ").concat(r,". Cell at row ").concat(d+1," and column ").concat(c+1," is neither `null` nor `undefined`: ").concat(JSON.stringify(u)));s&&(t[d][c]=s)}c++}d++}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=Array(t);i<t;i++)n[i]=e[i];return n}function v(e,t){var i=t.attribute;return e=e.replace(b,"&amp;").replace(g,"&gt;").replace(x,"&lt;"),i&&(e=e.replace(y,"&apos;").replace(w,"&quot;")),e}var b=/&/g,g=/>/g,x=/</g,y=/'/g,w=/"/g,A=/((?:[\0-\x08\x0B\f\x0E-\x1F\uFFFD\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]))/g,_=RegExp("([\\x7F-\\x84]|[\\x86-\\x9F]|[\\uFDD0-\\uFDEF]|(?:\uD83F[\uDFFE\uDFFF])|(?:\uD87F[\uDFFE\uDFFF])|(?:\uD8BF[\uDFFE\uDFFF])|(?:\uD8FF[\uDFFE\uDFFF])|(?:\uD93F[\uDFFE\uDFFF])|(?:\uD97F[\uDFFE\uDFFF])|(?:\uD9BF[\uDFFE\uDFFF])|(?:\uD9FF[\uDFFE\uDFFF])|(?:\uDA3F[\uDFFE\uDFFF])|(?:\uDA7F[\uDFFE\uDFFF])|(?:\uDABF[\uDFFE\uDFFF])|(?:\uDAFF[\uDFFE\uDFFF])|(?:\uDB3F[\uDFFE\uDFFF])|(?:\uDB7F[\uDFFE\uDFFF])|(?:\uDBBF[\uDFFE\uDFFF])|(?:\uDBFF[\uDFFE\uDFFF])(?:[\\0-\\t\\x0B\\f\\x0E-\\u2027\\u202A-\uD7FF\\uE000-\\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]))","g");function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.removeDiscouragedCharacters;return e=e.replace(A,""),(void 0===i||i)&&(e=e.replace(_,"")),e}function E(e){return v(C(e),{attribute:!0})}function S(e,t){var i=t.schema,n=t.columns,a=t.headerStyle,s=t.getStyle,c=t.getSharedString,v=t.customFont,b=t.dateFormat,g=t.orientation,x=t.stickyRowsCount,y=t.stickyColumnsCount,w=t.sheetId;!function(e,t){if(t.schema){if(!Array.isArray(e))throw TypeError("Expected an array of objects")}else if(!Array.isArray(e)||e.length>0&&!Array.isArray(e[0]))throw TypeError("Expected an array of arrays")}(e,{schema:i});var A,_,C,S,k,T=function(e,t){var i=t.schema,n=[];if(i)return{data:e,mergedCells:n};for(var a=function(){e=e.slice();for(var t=0;t<e.length;)e[t]=e[t].slice(),t++;return a=function(){return e},e},r=0;r<e.length;){for(var o=e[r],l=0;l<o.length;){var s=o[l];if(s){var d=s.span,c=void 0===d?1:d,u=s.rowSpan,f=void 0===u?1:u;(c>1||f>1)&&(m({data:e,rowIndex:r,columnIndex:l,span:c,rowSpan:f,cloneData:a}),n.push([[r,l],[r+(f?f-1:0),l+(c?c-1:0)]]))}l++}r++}return{data:e,mergedCells:n}}(e,{schema:i}),O=T.data,I=T.mergedCells;return'<?xml version="1.0" ?>\n<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main">{views}{columnsDescription}<sheetData>{data}</sheetData>{mergedCellsDescription}{layout}</worksheet>'.replace("{data}",function(e,t){var i=t.schema,n=t.headerStyle,a=t.getStyle,s=t.getSharedString,c=t.customFont,p=t.dateFormat;if(i){for(var m,h=[],v=function(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(i)return(i=i.call(e)).next.bind(i);if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return u(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return u(e,t)}}(e))){i&&(e=i);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(i);!(m=v()).done;)if(m.value.column){h=[i.map(function(e){return d({type:String,value:e.column,align:e.align},n||f)})];break}e=h.concat(e.map(function(e){return i.map(function(t){return d(d({},t),{},{value:t.value(e)})})}))}return e.map(function(e,t){var n,d,u,f,m,h,v,b,g,x,y;return m=(u={getStyle:a,getSharedString:s,customFont:c,dateFormat:p,usesSchema:void 0!==i}).getStyle,h=u.getSharedString,v=u.customFont,b=u.dateFormat,g=u.usesSchema,x=t+1,y=e.map(function(e,t){if(null==e)return"";var i,n,a=e.height,s=o(e),d=e.type,c=e.value,u=e.format;if((n=c,null==n||""===n)?c=null:void 0===d&&(g||(d=function(e){switch(l(e)){case"string":return String;case"number":return Number;case"boolean":return Boolean;default:if(e instanceof Date)return Date}}(c)),void 0===d&&(d=String,c=String(c))),u){if(d!==Date&&d!==Number)throw Error("`format` can only be used on `Date` or `Number` cells")}else d===Date&&(u=b);return(u||v||s)&&(i=m(s||{},{format:u})),a&&(void 0===f||f<a)&&(f=a),function(e,t,i,n,a,o){if(null===i&&!a)return"";var l='<c r="'.concat(r(t,e),'"');if(a&&(l+=' s="'.concat(a,'"')),null===i)return l+"/>";if(n===Date&&!a)throw Error('No "format" has been specified for a Date cell');return i=function(e,t,i){switch(e){case String:if("string"!=typeof t)throw Error("Invalid cell value: ".concat(t,". Expected a string"));return i(t);case Number:if("number"!=typeof t)throw Error("Invalid cell value: ".concat(t,". Expected a number"));return String(t);case Date:var n;if(!(t instanceof Date))throw Error("Invalid cell value: ".concat(t,". Expected a Date"));return String(t.getTime()/864e5+25569);case Boolean:if("boolean"!=typeof t)throw Error("Invalid cell value: ".concat(t,". Expected a boolean"));return t?"1":"0";default:throw Error("Unknown schema type: ".concat(e&&e.name||e))}}(n,i,o),(n=function(e){switch(e){case String:return"s";case Number:case Date:return;case Boolean:return"b";default:throw Error("Unknown schema type: ".concat(e&&e.name||e))}}(n))&&(l+=' t="'.concat(n,'"')),l+">"+("inlineStr"===n?"<is><t>":"<v>")+i+("inlineStr"===n?"</t></is>":"</v>")+"</c>"}(x,t,c,d,i,h)}).join(""),'<row r="'.concat(x,'"')+(f?' ht="'.concat(f,'" customHeight="1"'):"")+">"+y+"</row>"}).join("")}(O,{schema:i,headerStyle:a,getStyle:s,getSharedString:c,customFont:v,dateFormat:b})).replace("{views}",function(e){var t=e.stickyRowsCount,i=e.stickyColumnsCount;if(!t&&!i)return"";var n="";return n+="<sheetViews>",n+='<sheetView tabSelected="1" workbookViewId="0">',n+='<pane ySplit="'.concat(t||0,'" xSplit="').concat(i||0,'" topLeftCell="').concat(r(i||0,(t||0)+1),'" activePane="bottomRight" state="frozen"/>'),n+="</sheetView>",n+="</sheetViews>"}({stickyRowsCount:x,stickyColumnsCount:y})).replace("{columnsDescription}",function(e){var t=e.schema,i=e.columns;if(t||i){var n=(t||i).map(p).join("");if(n)return"<cols>".concat(n,"</cols>")}return""}({schema:i,columns:n})).replace("{mergedCellsDescription}",0===I.length?"":'<mergeCells count="'.concat(I.length,'">')+I.map(function(e){var t,i,n=function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i,n,a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r=[],o=!0,l=!1;try{for(a=a.call(e);!(o=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);o=!0);}catch(s){l=!0,n=s}finally{try{o||null==a.return||a.return()}finally{if(l)throw n}}return r}}(e,2)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return h(e,t)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),a=n[0],o=n[1],l=r(a[1],a[0]+1)+":"+r(o[1],o[0]+1);return'<mergeCell ref="'.concat(l,'"/>')}).join("")+"</mergeCells>").replace("{layout}",(C=(_={sheetId:w,orientation:g}).sheetId,S=_.orientation,k="",S&&(k+="<pageMargins",k+=' left="'.concat(.7,'"'),k+=' right="'.concat(.7,'"'),k+=' top="'.concat(.75,'"'),k+=' bottom="'.concat(.75,'"'),k+=' header="'.concat(.3,'"'),k+=' footer="'.concat(.3,'"'),k+="/>"),S&&(k+="<pageSetup",k+=' paperSize="'.concat(9,'"'),k+=' orientation="'.concat(E(S),'"'),k+=' r:id="rId'.concat(C,'"'),k+="/>"),k))}function k(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(i)return(i=i.call(e)).next.bind(i);if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return T(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return T(e,t)}}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=Array(t);i<t;i++)n[i]=e[i];return n}function O(e){if("#"!==e[0])throw Error('Color "'.concat(e,'" must start with a "#"'));return"FF".concat(e.slice(1).toUpperCase())}function I(e){return v(C(e),{attribute:!1})}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=Array(t);i<t;i++)n[i]=e[i];return n}var D=/[\[\]\/\\:*?]+/;function N(e){if(!e)throw Error("Sheet name can't be empty");if(e.length>31)throw Error('Sheet name "'.concat(e,"\" can't be longer than 31 characters"));if(D.test(e))throw Error('Sheet name "'.concat(e,'" contains illegal characters: []/\\:*?'))}function L(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(i)return(i=i.call(e)).next.bind(i);if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return R(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return R(e,t)}}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=Array(t);i<t;i++)n[i]=e[i];return n}var P=["fileName"];function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=Array(t);i<t;i++)n[i]=e[i];return n}function B(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.fileName;return(function(e,t){var i=t.sheet,a=t.sheets,r=t.schema,o=t.columns,l=t.headerStyle,s=t.fontFamily,d=t.fontSize,c=t.orientation,u=t.stickyRowsCount,f=t.stickyColumnsCount,p=t.dateFormat,m=new n;m.file("_rels/.rels",'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>'),m.file("[Content_Types].xml",'<?xml version="1.0" ?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default ContentType="application/xml" Extension="xml"/><Default ContentType="application/vnd.openxmlformats-package.relationships+xml" Extension="rels"/><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" PartName="/xl/worksheets/sheet1.xml"/><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" PartName="/xl/workbook.xml"/><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml" PartName="/xl/sharedStrings.xml"/><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" PartName="/xl/styles.xml"/></Types>');var h,v,b,g,x,y,w=function(e){var t,i,n=e.data,a=e.sheetName,r=e.sheetNames,o=e.schema,l=e.columns,s=e.headerStyle,d=e.fontFamily,c=e.fontSize,u=e.orientation,f=e.stickyRowsCount,p=e.stickyColumnsCount,m=e.dateFormat,h=(t=[],i={},{getSharedStringsXml:function(){return function(e){var t='<?xml version="1.0"?>';t+='<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">';for(var i,n=function(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(i)return(i=i.call(e)).next.bind(i);if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return M(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return M(e,t)}}(e))){i&&(e=i);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(e);!(i=n()).done;){var a=i.value,r=a.trim().length===a.length?"":' xml:space="preserve"';t+="<si><t".concat(r,">"),t+=I(a),t+="</t></si>"}return t+"</sst>"}(t)},getSharedString:function(e){var n=i[e];return void 0===n&&(n=String(t.length),i[e]=n,t.push(e)),n}}),v=h.getSharedStringsXml,b=h.getSharedString,g=function(e){var t=e.fontFamily,i=e.fontSize,n=Boolean(t||i);void 0===t&&(t="Calibri"),void 0===i&&(i=12);var a=[],r={},o=[],l={},s=[],d={},c=[],u={},f=[],p={};function m(e,m){var h,v,b,g=e.fontFamily,x=e.fontSize,y=e.fontWeight,w=e.fontStyle,A=e.align,_=e.alignVertical,C=e.wrap,E=e.color,S=e.backgroundColor,k=e.borderColor,T=e.borderStyle,O=e.leftBorderColor,I=e.leftBorderStyle,M=e.rightBorderColor,D=e.rightBorderStyle,N=e.topBorderColor,L=e.topBorderStyle,R=e.bottomBorderColor,P=e.bottomBorderStyle,F=m.format,B="".concat(g||"-",":").concat(x||"-",":").concat(y||"-",":").concat(w||"-",":").concat(E||"-"),U=S||"-",$="".concat(N||k||"-",":").concat(L||T||"-")+"/"+"".concat(M||k||"-",":").concat(D||T||"-")+"/"+"".concat(R||k||"-",":").concat(P||T||"-")+"/"+"".concat(O||k||"-",":").concat(I||T||"-"),j="".concat(A||"-","/").concat(_||"-","/").concat(F||"-","/").concat(C||"-","/").concat(B,"/").concat(U,"/").concat($),z=l[j];if(void 0!==z)return z;F&&void 0===(h=r[F])&&(h=r[F]=String(100+a.length),a.push(F));var G=n?0:void 0;return(g||x||y||w||E)&&void 0===(G=d[B])&&(G=d[B]=String(s.length),s.push({custom:!0,size:x||i,family:g||t,weight:y,style:w,color:E})),S&&void 0===(v=u[U])&&(v=u[U]=String(c.length),c.push({color:S})),(k||T||O||I||M||D||N||L||R||P)&&void 0===(b=p[$])&&(b=p[$]=String(f.length),f.push({left:{style:I||T,color:O||k},right:{style:D||T,color:M||k},top:{style:L||T,color:N||k},bottom:{style:P||T,color:R||k}})),o.push({fontId:G,fillId:v,borderId:b,align:A,alignVertical:_,wrap:C,formatId:h}),l[j]=String(o.length-1)}return s.push({size:i,family:t,custom:n}),d["-:-"]=0,c.push({}),u["-"]=0,f.push({left:{},right:{},top:{},bottom:{}}),p["-:-/-:-/-:-/-:-"]=0,c.push({gray125:!0}),m({},{}),{getStylesXml:function(){return function(e){var t=e.formats,i=e.styles,n=e.fonts,a=e.fills,r=e.borders,o='<?xml version="1.0" ?>';if(o+='<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">',t.length>0){o+='<numFmts count="'.concat(t.length,'">');for(var l=0;l<t.length;l++)o+='<numFmt numFmtId="'.concat(100+l,'" formatCode="').concat(E(t[l]),'"/>');o+="</numFmts>"}o+='<fonts count="'.concat(n.length,'">');for(var s,d=k(n);!(s=d()).done;){var c=s.value,u=c.size,f=c.family,p=c.color,m=c.weight,h=c.style,v=c.custom;o+="<font>",o+='<sz val="'.concat(u,'"/>'),o+="<color ".concat(p?'rgb="'+E(O(p))+'"':'theme="1"',"/>"),o+='<name val="'.concat(E(f),'"/>'),o+='<family val="2"/>',v||(o+='<scheme val="minor"/>'),"bold"===m&&(o+="<b/>"),"italic"===h&&(o+="<i/>"),o+="</font>"}o+="</fonts>",o+='<fills count="'.concat(a.length,'">');for(var b,g=k(a);!(b=g()).done;){var x=b.value,y=x.color,w=x.gray125;o+="<fill>",y?(o+='<patternFill patternType="solid">',o+='<fgColor rgb="'.concat(E(O(y)),'"/>'),o+='<bgColor indexed="64"/>',o+="</patternFill>"):w?o+='<patternFill patternType="gray125"/>':o+='<patternFill patternType="none"/>',o+="</fill>"}o+="</fills>",o+='<borders count="'.concat(r.length,'">');for(var A,_=k(r);!(A=_()).done;){var C=A.value,S=C.left,T=C.right,I=C.top,M=C.bottom,D=function(e,t){var i=t.style,n=t.color;n&&!i&&(i="thin");var a=!!n;return"<".concat(e)+(i?' style="'.concat(E(i),'"'):"")+(a?">":"/>")+(n?'<color rgb="'.concat(E(O(n)),'"/>'):"")+(a?"</".concat(e,">"):"")};o+="<border>",o+=D("left",S),o+=D("right",T),o+=D("top",I),o+=D("bottom",M),o+="<diagonal/>",o+="</border>"}o+="</borders>",o+='<cellXfs count="'.concat(i.length,'">');for(var N,L=k(i);!(N=L()).done;){var R=N.value,P=R.fontId,F=R.fillId,B=R.borderId,U=R.align,$=R.alignVertical,j=R.wrap,z=R.formatId;o+="<xf "+[void 0!==z?'numFmtId="'.concat(z,'"'):void 0,void 0!==z?'applyNumberFormat="1"':void 0,void 0!==P?'fontId="'.concat(P,'"'):void 0,void 0!==P?'applyFont="1"':void 0,void 0!==F?'fillId="'.concat(F,'"'):void 0,void 0!==F?'applyFill="1"':void 0,void 0!==B?'borderId="'.concat(B,'"'):void 0,void 0!==B?'applyBorder="1"':void 0,U||$||j?'applyAlignment="1"':void 0].filter(function(e){return e}).join(" ")+">"+(U||$||j?"<alignment"+(U?' horizontal="'.concat(E(U),'"'):"")+($?' vertical="'.concat(E($),'"'):"")+(j?' wrapText="1"':"")+"/>":"")+"</xf>"}return o+="</cellXfs>",o+="</styleSheet>"}({formats:a,styles:o,fonts:s,fills:c,borders:f})},getStyle:m}}({fontFamily:d,fontSize:c}),x=g.getStylesXml,y=g.getStyle;if(r&&l&&!Array.isArray(l[0]))throw Error('In a "write multiple sheets" scenario, `columns` parameter must be an array of `columns` for each sheet.');!r&&(r=[a||"Sheet1"],n=[n],l&&(l=[l]),o&&(o=[o]));for(var w,A=L(r);!(w=A()).done;)N(w.value);for(var _,C=[],T=0,D=L(r);!(_=D()).done;)_.value,C.push(S(n[T],{schema:o&&o[T],columns:l&&l[T],headerStyle:s,getStyle:y,getSharedString:b,customFont:d||c,dateFormat:m,orientation:u,stickyRowsCount:f,stickyColumnsCount:p,sheetId:T+1})),T++;return{sheets:r.map(function(e,t){return{id:t+1,name:e,data:C[t]}}),getSharedStringsXml:v,getStylesXml:x}}({data:e,sheetName:i,sheetNames:a,schema:r,columns:o,headerStyle:l,fontFamily:s,fontSize:d,orientation:c,stickyRowsCount:u,stickyColumnsCount:f,dateFormat:p}),A=w.sheets,_=w.getSharedStringsXml,C=w.getStylesXml,T=m.folder("xl");T.file("_rels/workbook.xml.rels",'<?xml version="1.0" ?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'+(v=(h={sheets:A}).sheets).map(function(e){var t=e.id;return'<Relationship Id="rId'.concat(t,'" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet').concat(t,'.xml"/>')}).join("")+'<Relationship Id="rId'.concat(v.length+1,'" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>')+'<Relationship Id="rId'.concat(v.length+2,'" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>')+"</Relationships>"),T.file("workbook.xml",(g=(b={sheets:A,stickyRowsCount:u,stickyColumnsCount:f}).sheets,x=b.stickyRowsCount,y=b.stickyColumnsCount,'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main"><workbookPr/>'+(x||y?"<bookViews><workbookView/></bookViews>":"")+"<sheets>"+g.map(function(e){var t=e.id,i=e.name;return'<sheet name="'.concat(i,'" sheetId="').concat(t,'" r:id="rId').concat(t,'"/>')}).join("")+"</sheets><definedNames/><calcPr/></workbook>")),T.file("styles.xml",C()),T.file("sharedStrings.xml",_());for(var D,R=function(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(i)return(i=i.call(e)).next.bind(i);if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return F(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return F(e,t)}}(e))){i&&(e=i);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(A);!(D=R()).done;){var P=D.value,B=P.id,U=P.data;T.file("worksheets/sheet".concat(B,".xml"),U)}return m.generateAsync({type:"blob",mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"})})(e,function(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}(t,P)).then(function(e){return i?a.saveAs(e,i):e})}}}]);