(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[611],{4824:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trilhas/CaracteristicasNascimento",function(){return t(897)}])},1331:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(9177);e.exports={menuListener:function(e,n){return e._chain=e.fulfilled,e.fulfilled=function(e,t){return e.addEventListener("aba",function(e){1==e.detail.index?n.push("/trilhas/NascidosVivos"):2==e.detail.index?n.push("/trilhas/CaracteristicasNascimento"):3==e.detail.index&&n.push("/trilhas/MortalidadeInfantil")}),this._chain(e,t)},e},adjustObservableWidth:function(e,n){var t=new r.Library;n.redefine("width",t.Generators.observe(function(n){var t=null;function r(){if(e.current){var i=Math.max(e.current.clientWidth,1340);i!==t&&n(t=i)}else setTimeout(r,10)}return addEventListener("resize",r),r(),function(){return removeEventListener("resize",r)}}))}}},897:function(e,n,t){"use strict";t.r(n);var r=t(5893),i=t(7294),s=t(9177),u=t(4819),a=t(1163),c=t(1331);function o(){var e=(0,i.useRef)(),n=(0,i.useRef)(),t=(0,i.useRef)(),o=(0,i.useRef)(),l=(0,a.useRouter)();return(0,i.useEffect)(function(){var r=new s.Runtime,i=r.module(u.Z,function(r){return"mp"===r?(0,c.menuListener)(new s.Inspector(n.current),l):"vis"===r?new s.Inspector(e.current):"div_controles"===r?new s.Inspector(t.current):"style"===r?new s.Inspector(o.current):["menu_municipios","barra_municipios","gPESO","funcoesGeradoras","gROBSON","gTOTAL","checkFiltros","onfirstload","getCurrentConf","copyLinkButton","cabecalho"].includes(r)});return(0,c.adjustObservableWidth)(e,i),function(){return r.dispose()}},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"blocoLocal",ref:t}),(0,r.jsx)("div",{className:"blocoMenu",ref:n}),(0,r.jsx)("div",{className:"blocoTrilha",ref:e}),(0,r.jsx)("div",{ref:o})]})}o.tipo="trilha",n.default=o}},function(e){e.O(0,[177,426,774,888,179],function(){return e(e.s=4824)}),_N_E=e.O()}]);