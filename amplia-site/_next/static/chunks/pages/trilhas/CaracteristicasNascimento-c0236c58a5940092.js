(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[611],{4824:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trilhas/CaracteristicasNascimento",function(){return t(897)}])},1331:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(9177);e.exports={menuListener:function(e,n){return e._chain=e.fulfilled,e.fulfilled=function(e,t){return e.addEventListener("aba",function(e){1==e.detail.index?n.push("/trilhas/NascidosVivos"):2==e.detail.index?n.push("/trilhas/CaracteristicasNascimento"):3==e.detail.index&&n.push("/trilhas/MortalidadeInfantil")}),this._chain(e,t)},e},adjustObservableWidth:function(e,n){var t=new r.Library;n.redefine("width",t.Generators.observe(function(n){var t=0;function r(){if(e.current){var i=e.current.clientWidth;i!==t&&(n(t=i),console.log(t))}else setTimeout(r)}return addEventListener("resize",r),setTimeout(r),function(){return removeEventListener("resize",r)}}))}}},897:function(e,n,t){"use strict";t.r(n);var r=t(5893),i=t(7294),s=t(9177),u=t(5733),c=t(1163),o=t(1331);n.default=function(){var e=(0,i.useRef)(),n=(0,i.useRef)(),t=(0,i.useRef)(),a=(0,i.useRef)(),l=(0,c.useRouter)();return(0,i.useEffect)(function(){var r=new s.Runtime,i=r.module(u.Z,function(r){return"mp"===r?(0,o.menuListener)(new s.Inspector(n.current),l):"vis"===r?new s.Inspector(e.current):"div_controles"===r?new s.Inspector(t.current):"style"===r?new s.Inspector(a.current):["menu_municipios","barra_municipios","gPESO","funcoesGeradoras","gROBSON","gTOTAL","checkFiltros","onfirstload","getCurrentConf","copyLinkButton","cabecalho"].includes(r)});return(0,o.adjustObservableWidth)(e,i),function(){return r.dispose()}},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"blocoLocal",ref:t}),(0,r.jsx)("div",{className:"blocoMenu",ref:n}),(0,r.jsx)("div",{className:"blocoTrilha",ref:e}),(0,r.jsx)("div",{ref:a})]})}}},function(e){e.O(0,[481,733,774,888,179],function(){return e(e.s=4824)}),_N_E=e.O()}]);