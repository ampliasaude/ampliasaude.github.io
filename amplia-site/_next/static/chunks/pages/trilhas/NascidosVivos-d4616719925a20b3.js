(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[96],{7501:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trilhas/NascidosVivos",function(){return t(7251)}])},3798:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(9177);e.exports={menuListener:function(e,n){return e._chain=e.fulfilled,e.fulfilled=function(e,t){return e.addEventListener("aba",function(e){1==e.detail.index?n.push("/trilhas/NascidosVivos"):2==e.detail.index?n.push("/trilhas/CaracteristicasNascimento"):3==e.detail.index&&n.push("/trilhas/MortalidadeInfantil")}),this._chain(e,t)},e},adjustObservableWidth:function(e,n){var t=new r.Library;n.redefine("width",t.Generators.observe(function(n){var t=null;function r(){if(e.current){var i=Math.max(e.current.clientWidth,1340);i!==t&&n(t=i)}else setTimeout(r,10)}return addEventListener("resize",r),r(),function(){return removeEventListener("resize",r)}}))}}},7251:function(e,n,t){"use strict";t.r(n);var r=t(5893),i=t(7294),s=t(9177),u=t(8675),o=t(3798),c=t(1163);function a(){var e=(0,i.useRef)(),n=(0,i.useRef)(),t=(0,i.useRef)(),a=(0,i.useRef)(),l=(0,c.useRouter)();return(0,i.useEffect)(function(){var r=new s.Runtime,i=r.module(u.Z,function(r){return"mp"===r?(0,o.menuListener)(new s.Inspector(e.current),l):"div_controles"===r?new s.Inspector(n.current):"vis"===r?new s.Inspector(t.current):"style"===r?new s.Inspector(a.current):["menu_municipios","barra_municipios","gPESO","funcoesGeradoras","gPIG","gTOTAL","checkFiltros","onfirstload","getCurrentConf","copyLinkButton","cabecalho"].includes(r)});return(0,o.adjustObservableWidth)(t,i),function(){return r.dispose()}},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"blocoLocal",ref:n}),(0,r.jsx)("div",{className:"blocoMenu",ref:e}),(0,r.jsx)("div",{className:"blocoTrilha",ref:t}),(0,r.jsx)("div",{ref:a})]})}a.tipo="trilha",n.default=a}},function(e){e.O(0,[177,131,774,888,179],function(){return e(e.s=7501)}),_N_E=e.O()}]);