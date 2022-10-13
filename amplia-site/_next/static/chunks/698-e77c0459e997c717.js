(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[698],{1163:function(e,t,a){e.exports=a(387)},582:function(e,t,a){"use strict";e.exports=a.p+"static/media/186949b230e46bbd80611c8b1224e2003c90fd71528ff034cabe25dc74445f782670632623e35cfdc778c27fcc6fce67fe7fc4e12ef7168cbf594a25934412d3.fe6d926d.csv"},2221:function(e,t,a){"use strict";e.exports=a.p+"static/media/f2201770123f4b364781aee7ac3512db444637a3ad42ef096c62d05e6637e8d48b4875ec59b514f9f028ae6c85b557a5d74de4b1e2d1c18d62c5114c6c9c27fa.213d22d6.csv"},8782:function(e,t,a){"use strict";function i(e){return e`# Amplia Saude - Fonte de Dados e Menu - AGO2022`}function n(e){return e`## Menu Amplia`}function l(e){return function(t,a){let i=`<svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8C2 6 2.39956 2 5.9956 2C11.2138 2 8.9923 8 12.9879 8C17.4829 8 16.9835 4 16.9835 2" stroke="#151472" stroke-width="3"/>
</svg>`,n=`<svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 7C1 5 1.39956 1 4.9956 1C10.2138 1 7.9923 7 11.9879 7C16.4829 7 15.9835 3 15.9835 1" stroke="#151472" stroke-width="1.5" stroke-dasharray="2.5 1"/>
</svg>`,l=0,o=Symbol(),r=Symbol(),s=Symbol();function d(i,n,d,u){n=n||"";let p=document.createElement("div"),m={},f={},v={};Object.defineProperty(m,"expression",{get(){let e={};for(let t in m){let a=m[t];"expression"!=t&&(e[a[0]]=a[1])}return e}}),Object.defineProperty(m,"urlids",{get(){let e=[];for(let t in v)e.push(v[t]);return e.join("")}});let h=document.createElement("div"),x=document.createElement("div"),b=document.createElement("div"),g=document.createElement("div"),y=document.createElement("div"),A=document.createElement("div");h.classList.add("menuAbas"),x.classList.add("abas"),g.classList.add("legenda"),b.classList.add("menuCompacto"),y.classList.add("background-1"),A.classList.add("background-2"),h.append(x),h.append(b),h.append(y),h.append(A),b.append(g),h.setAttribute("style",`--corFundoMenu: ${d};`),u&&h.classList.add("principal"),t.forEach((t,i)=>{!function(t,i,d){let c="m"+ ++l,u=document.createElement("div"),h=document.createElement("div"),x=document.createElement("div"),b=document.createElement("div"),g=document.createElement("div"),y=document.createElement("div"),A=document.createElement("div"),E=document.createElement("div"),T=d+2;m[i.varName]="",f[i.varName]="",v[i.varName]="";let w=[];function C(){u[r](),p.dispatchEvent(new e("input"))}u[r]=function(){let e=w.filter(e=>e.checked).map(e=>e.value),t=w.filter(e=>e.checked).map(e=>e[s].expression),a=w.filter(e=>e.checked).map(e=>e[s].urlid);m[i.varName]=[i.attrIndex,t],v[i.varName]=a.join(""),e.length?h.classList.add("selecionado"):h.classList.remove("selecionado");let n=e.join(" ou ");g.innerHTML=n,g.setAttribute("title",n),f[i.varName]=n},u.classList.add("itemMenuCompacto"),u.classList.add(i.varName),h.classList.add("titulo"),h.innerHTML=i.title,b.classList.add("valoresSelecionados"),g.classList.add("textoValoresSelecionados"),y.classList.add("icone"),y.innerHTML="expand_more",u.append(h),x.append(b),u.append(x),b.append(y),b.append(g),A.classList.add("submenu"),A.style["grid-column"]=T+"/"+(T+1),E.classList.add("itens"),E.classList.add("i"+d),E.classList.add("ABA"+a),A.append(E),u[o]=A,u.style["grid-column-start"]=T,u.addEventListener("click",e=>{if(u.classList.contains("aberto"))u.classList.remove("aberto"),A.classList.remove("aberto");else{let t=u.parentNode.querySelector(".aberto");t&&(t.classList.remove("aberto"),t[o].classList.remove("aberto")),u.classList.add("aberto"),A.classList.add("aberto")}});let _=null;i.itens.forEach((e,t)=>{let a=document.createElement("div"),l=document.createElement("label"),o=document.createElement("input");l.innerHTML=e.name,l.setAttribute("for",c+t),o.setAttribute("type",i.input),o.setAttribute("value",e.name),n.indexOf(e.urlid)>=0&&o.setAttribute("checked","checked"),o.setAttribute("id",c+t),o.setAttribute("name","radio"===i.input?c:c+t),o[s]=e,a.classList.add("item"),a.append(o),a.append(l),E.append(a),w.push(o),o.addEventListener("input",e=>{e.stopPropagation(),C()}),"radio"==i.input&&o.addEventListener("click",e=>{if(e.target===_){e.target.checked=!1,_=null,C();return}_=e.target})}),t.append(u),t.append(A),u[r]()}(b,t,i)});let E=p.attachShadow({mode:"open"});return E.append(function(){let e=document.createElement("style");return e.textContent=`                  
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
            grid-template-columns: repeat(4,1fr);
            gap: 1px;
          }

          div.menuAbas div.abas div.aba {
            position: relative;
            background-color: #F4F4F4;
            text-align: center;
            padding: 8px 0;
            font-weight: 700;
            border-radius: 6px 6px 0 0;
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
            grid-template-columns: 80px repeat(${t.length},85px) 8px;
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
      `,e}()),E.append(h),p.cloneMenu=function(){let e=b.querySelectorAll("input:checked"),t=c(i),a=t.shadowRoot.querySelectorAll("input");for(let n=0;n<e.length;n++)for(let l=0;l<a.length;l++)e[n][s]===a[l][s]&&(a[l].checked=!0);let o=t.shadowRoot.querySelectorAll(".itemMenuCompacto");for(let d=0;d<o.length;d++)o[d][r]();return t},Object.defineProperty(p,"value",{get:()=>m}),Object.defineProperty(p,"texto",{get:()=>f}),[p,x,g]}function c(e,a,i){let[l,o,r]=d(null,a,i,!1),s=l.shadowRoot.querySelector(".menuCompacto");s.style["grid-template-columns"]=`110px repeat(${t.length},84px) 0px`,s.style.gap="2px",r.style["background-color"]="#ffffff66",r.style.color="var(--corFonte)",r.style["border-radius"]="0px 0px 0px 8px";let c=document.createElement("div"),u=document.createElement("div");return c.classList.add("titulo"),c.innerHTML="&nbsp",u.classList.add("icone"),u.innerHTML=n,r.append(c),r.append(u),l}return{principal:function(e){let[t,n,l]=d(null,e,"#E5E5E5",!0),o;(o=document.createElement("div")).classList.add("aba"),0===a&&o.classList.add("selecionada"),o.addEventListener("click",e=>{t.dispatchEvent(new CustomEvent("aba",{detail:{index:1}}))}),o.innerHTML="NASCIDOS VIVOS",n.append(o),(o=document.createElement("div")).classList.add("aba"),1===a&&o.classList.add("selecionada"),o.addEventListener("click",e=>{t.dispatchEvent(new CustomEvent("aba",{detail:{index:2}}))}),o.innerHTML="CARACTER\xcdSTICAS DO NASCIMENTO",n.append(o),(o=document.createElement("div")).classList.add("aba"),2===a&&o.classList.add("selecionada"),o.addEventListener("click",e=>{t.dispatchEvent(new CustomEvent("aba",{detail:{index:3}}))}),o.innerHTML="MORTALIDADE PERINATAL E INFANTIL",n.append(o),(o=document.createElement("div")).classList.add("aba"),3===a&&o.classList.add("selecionada"),o.addEventListener("click",e=>{t.dispatchEvent(new CustomEvent("aba",{detail:{index:4}}))}),o.innerHTML="SA\xdaDE DA GESTANTE",o.classList.add("desabilitada"),n.append(o);let r=document.createElement("div"),s=document.createElement("div");return r.classList.add("titulo"),s.classList.add("icone"),s.innerHTML=i,r.innerHTML="CONSULTA<br>PRINCIPAL",l.append(r),l.append(s),t},local:c}}}function o(e){return e`### Nascidos Vivos`}function r(e){return e.principal()}function s(){return[{title:"PESO AO<br>NASCER",varName:"PESO",ordinal:!0,input:"checkbox",attrIndex:0,itens:[{name:"Normal",style:[],expression:[3],urlid:"A"},{name:"Baixo peso",style:["alta-influencia"],expression:[2],urlid:"B"},{name:"Muito baixo peso",style:["alta-influencia"],expression:[1],urlid:"C"},{name:"Ignorado",style:[],expression:[0],urlid:"E"}]},{title:"IDADE<br>GESTACIONAL",varName:"IDADE_GESTACIONAL",ordinal:!0,input:"checkbox",attrIndex:1,itens:[{name:"P\xf3s-termo",style:[],expression:[7],urlid:"F"},{name:"A termo tardio",style:[],expression:[6],urlid:"G"},{name:"A termo completo",style:[],expression:[5],urlid:"H"},{name:"A termo precoce",style:[],expression:[4],urlid:"I"},{name:"Pr\xe9-termo moderado",style:["alta-influencia"],expression:[3],urlid:"W"},{name:"Muito pr\xe9-termo",style:["alta-influencia"],expression:[2],urlid:"X"},{name:"Pr\xe9-termo extremo",style:["alta-influencia"],expression:[1],urlid:"7"},{name:"Ignorado",style:[],expression:[0],urlid:"6"}]},{title:"ADEQUA\xc7\xc3O \xc0<br>IDADE GESTAC.",varName:"ADEQ_IDADE_GESTACIONAL",ordinal:!0,input:"checkbox",attrIndex:2,itens:[{name:"GIG",style:[],expression:[3],urlid:"J"},{name:"AIG",style:["alta-influencia"],expression:[2],urlid:"K"},{name:"PIG",style:["alta-influencia"],expression:[1],urlid:"L"},{name:"Ignorado",style:[],expression:[0],urlid:"M"}]},{title:"SEXO",varName:"SEXO",ordinal:!1,input:"checkbox",attrIndex:3,itens:[{name:"Feminino",style:[],expression:[2],urlid:"N"},{name:"Masculino",style:[],expression:[1],urlid:"O"},{name:"Indeterminado",style:[],expression:[0],urlid:"P"}]},{title:"ANOMALIA<br>CONG\xcaNITA",varName:"ANOMAL_CONGENITA",ordinal:!1,input:"radio",attrIndex:4,itens:[{name:"N\xe3o",style:[],expression:[2],urlid:"Q"},{name:"Sim",style:["alta-influencia"],expression:[1],urlid:"R"},]},{title:"RA\xc7A/COR<br>DA M\xc3E",varName:"RACA_COR_MAE",ordinal:!1,input:"checkbox",attrIndex:5,itens:[{name:"Branca",style:[],expression:[1],urlid:"S"},{name:"Preta ou Parda",style:[],expression:[2,4],urlid:"T"},{name:"Outros",style:[],expression:[3,4,5],urlid:"U"},{name:"Ignorado",style:[],expression:[0],urlid:"V"}]},{title:"ESCOLARIDADE<br>DA M\xc3E",varName:"ESCOLARIDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:6,itens:[{name:"Superior",style:[],expression:[7],urlid:"Y"},{name:"Ensino m\xe9dio",style:[],expression:[6],urlid:"Z"},{name:"Fundamental completo",style:[],expression:[5],urlid:"a"},{name:"Fundamental incompleto",style:[],expression:[4,3,2],urlid:"b"},{name:"Sem",style:[],expression:[1],urlid:"e"},{name:"Ignorado",style:[],expression:[0],urlid:"f"}]},{title:"ESTADO CIVIL<br>DA M\xc3E",varName:"ESTADO_CIVIL_MAE",ordinal:!1,input:"checkbox",attrIndex:7,itens:[{name:"Solteira",style:[],expression:[1],urlid:"g"},{name:"Casada ou uni\xe3o est\xe1vel",style:[],expression:[2],urlid:"h"},{name:"Vi\xfava",style:[],expression:[3],urlid:"i"},{name:"Separada ou divorcidada",style:[],expression:[4],urlid:"j"},{name:"Ignorado",style:[],expression:[0],urlid:"k"}]},{title:"IDADE<br>DA M\xc3E",varName:"IDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:8,itens:[{name:"10-14",style:[],expression:[1],urlid:"l"},{name:"15-19",style:[],expression:[2],urlid:"m"},{name:"20-29",style:[],expression:[3],urlid:"n"},{name:"30-39",style:[],expression:[4],urlid:"o"},{name:"40-49",style:["alta-influencia"],expression:[5],urlid:"p"},{name:"50+",style:["alta-influencia"],expression:[6],urlid:"q"},{name:"Ignorado",style:[],expression:[0],urlid:"r"}]},{title:"CONSULTAS<BR>DE PR\xc9 NATAL",varName:"CONSULTAS",ordinal:!0,input:"checkbox",attrIndex:9,itens:[{name:"7+",style:[],expression:[4],urlid:"s"},{name:"4 a 6",style:[],expression:[3],urlid:"t"},{name:"1 a 3",style:["alta-influencia"],expression:[2],urlid:"u"},{name:"0",style:["alta-influencia"],expression:[1],urlid:"v"},{name:"Ignorado",style:[],expression:[0],urlid:"w"}]},{title:"TIPO<br>PARTO",varName:"PARTO",ordinal:!1,input:"checkbox",attrIndex:10,itens:[{name:"Vaginal",style:[],expression:[1],urlid:"x"},{name:"Ces\xe1rio",style:[],expression:[2],urlid:"y"},{name:"Indeterminado",style:[],expression:[0],urlid:"z"}]},{title:"TRAB PARTO<br>INDUZIDO",varName:"STTRABPART",ordinal:!1,input:"radio",attrIndex:11,itens:[{name:"SIM",style:[],expression:[1],urlid:"9"},{name:"N\xc3O",style:[],expression:[2],urlid:"8"},]},{title:"ADEQUA\xc7\xc3O<br>PR\xc9 NATAL",varName:"KOTELCHUCK",ordinal:!0,input:"checkbox",attrIndex:12,itens:[{name:"N\xe3o fez",style:["alta-influencia"],expression:[1],urlid:"5"},{name:"Inadequado",style:["alta-influencia"],expression:[2],urlid:"4"},{name:"Intermedi\xe1rio",style:[],expression:[3],urlid:"3"},{name:"Adequado",style:[],expression:[4],urlid:"2"},{name:"Mais que adequado",style:[],expression:[5],urlid:"1"},{name:"Ignorado",style:[],expression:[0],urlid:"0"},]},]}function d(e,t){return e(t,0)}function c(e){return e`### Características do Nascimento`}function u(e){return e.principal()}function p(){return[{title:"PESO AO<br>NASCER",varName:"PESO",ordinal:!0,input:"checkbox",attrIndex:0,itens:[{name:"Normal",style:[],expression:[3],urlid:"A"},{name:"Baixo peso",style:["alta-influencia"],expression:[2],urlid:"B"},{name:"Muito baixo peso",style:["alta-influencia"],expression:[1],urlid:"C"},{name:"Ignorado",style:[],expression:[0],urlid:"E"}]},{title:"IDADE<br>GESTACIONAL",varName:"IDADE_GESTACIONAL",ordinal:!0,input:"checkbox",attrIndex:1,itens:[{name:"P\xf3s-termo",style:[],expression:[7],urlid:"F"},{name:"A termo tardio",style:[],expression:[6],urlid:"G"},{name:"A termo completo",style:[],expression:[5],urlid:"H"},{name:"A termo precoce",style:[],expression:[4],urlid:"I"},{name:"Pr\xe9-termo tardio",style:["alta-influencia"],expression:[3],urlid:"W"},{name:"Pr\xe9-termo moderado",style:["alta-influencia"],expression:[2],urlid:"X"},{name:"Muito pr\xe9-termo",style:["alta-influencia"],expression:[1],urlid:"7"},{name:"Ignorado",style:[],expression:[0],urlid:"6"}]},{title:"ADEQUA\xc7\xc3O \xc0<br>IDADE GESTAC.",varName:"ADEQ_IDADE_GESTACIONAL",ordinal:!0,input:"checkbox",attrIndex:2,itens:[{name:"GIG",style:[],expression:[3],urlid:"J"},{name:"AIG",style:["alta-influencia"],expression:[2],urlid:"K"},{name:"PIG",style:["alta-influencia"],expression:[1],urlid:"L"},{name:"Ignorado",style:[],expression:[0],urlid:"M"}]},{title:"SEXO",varName:"SEXO",ordinal:!1,input:"checkbox",attrIndex:3,itens:[{name:"Feminino",style:[],expression:[2],urlid:"N"},{name:"Masculino",style:[],expression:[1],urlid:"O"},{name:"Indeterminado",style:[],expression:[0],urlid:"P"}]},{title:"ANOMALIA<br>CONG\xcaNITA",varName:"ANOMAL_CONGENITA",ordinal:!1,input:"radio",attrIndex:4,itens:[{name:"N\xe3o",style:[],expression:[2],urlid:"Q"},{name:"Sim",style:["alta-influencia"],expression:[1],urlid:"R"},]},{title:"RA\xc7A/COR<br>DA M\xc3E",varName:"RACA_COR_MAE",ordinal:!1,input:"checkbox",attrIndex:5,itens:[{name:"Branca",style:[],expression:[1],urlid:"S"},{name:"Preta ou Parda",style:[],expression:[2,4],urlid:"T"},{name:"Outros",style:[],expression:[3,4,5],urlid:"U"},{name:"Ignorado",style:[],expression:[0],urlid:"V"}]},{title:"ESCOLARIDADE<br>DA M\xc3E",varName:"ESCOLARIDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:6,itens:[{name:"Superior",style:[],expression:[7],urlid:"Y"},{name:"Ensino m\xe9dio",style:[],expression:[6],urlid:"Z"},{name:"Fundamental completo",style:[],expression:[5],urlid:"a"},{name:"Fundamental incompleto",style:[],expression:[4,3,2],urlid:"b"},{name:"Sem",style:[],expression:[1],urlid:"e"},{name:"Ignorado",style:[],expression:[0],urlid:"f"}]},{title:"ESTADO CIVIL<br>DA M\xc3E",varName:"ESTADO_CIVIL_MAE",ordinal:!1,input:"checkbox",attrIndex:7,itens:[{name:"Solteira",style:[],expression:[1],urlid:"g"},{name:"Casada ou uni\xe3o est\xe1vel",style:[],expression:[2],urlid:"h"},{name:"Vi\xfava",style:[],expression:[3],urlid:"i"},{name:"Separada ou divorcidada",style:[],expression:[4],urlid:"j"},{name:"Ignorado",style:[],expression:[0],urlid:"k"}]},{title:"IDADE<br>DA M\xc3E",varName:"IDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:8,itens:[{name:"10-14",style:[],expression:[1],urlid:"l"},{name:"15-19",style:[],expression:[2],urlid:"m"},{name:"20-29",style:[],expression:[3],urlid:"n"},{name:"30-39",style:[],expression:[4],urlid:"o"},{name:"40-49",style:["alta-influencia"],expression:[5],urlid:"p"},{name:"50+",style:["alta-influencia"],expression:[6],urlid:"q"},{name:"Ignorado",style:[],expression:[0],urlid:"r"}]},{title:"APGAR<BR>5\xba MINUTO",varName:"APGAR5",ordinal:!0,input:"checkbox",attrIndex:13,itens:[{name:"Boa vitalidade",style:[],expression:[3],urlid:"s"},{name:"Asfixia moderada",style:["alta-influencia"],expression:[2],urlid:"t"},{name:"Asfixia grave",style:["alta-influencia"],expression:[1],urlid:"u"},{name:"Ignorado",style:[],expression:[0],urlid:"v"}]},{title:"TIPO<br>PARTO",varName:"PARTO",ordinal:!1,input:"checkbox",attrIndex:10,itens:[{name:"Vaginal",style:[],expression:[1],urlid:"x"},{name:"Ces\xe1rio",style:[],expression:[2],urlid:"y"},{name:"Indeterminado",style:[],expression:[0],urlid:"z"}]},{title:"TRAB PARTO<br>INDUZIDO",varName:"STTRABPART",ordinal:!1,input:"radio",attrIndex:11,itens:[{name:"SIM",style:[],expression:[1],urlid:"9"},{name:"N\xc3O",style:[],expression:[2],urlid:"8"},]},{title:"ADEQUA\xc7\xc3O<br>PR\xc9 NATAL",varName:"KOTELCHUCK",ordinal:!0,input:"checkbox",attrIndex:12,itens:[{name:"N\xe3o fez",style:["alta-influencia"],expression:[1],urlid:"5"},{name:"Inadequado",style:["alta-influencia"],expression:[2],urlid:"4"},{name:"Intermedi\xe1rio",style:[],expression:[3],urlid:"3"},{name:"Adequado",style:[],expression:[4],urlid:"2"},{name:"Mais que adequado",style:[],expression:[5],urlid:"1"},{name:"Ignorado",style:[],expression:[0],urlid:"0"},]},]}function m(e,t){return e(t,1)}function f(e){return e`### Mortalidade Perinatal e infantil`}function v(e){return e.principal()}function h(){return[{title:"PESO AO<br>NASCER",varName:"PESO",ordinal:!0,input:"checkbox",attrIndex:1,itens:[{name:"Normal",style:[],expression:[3],urlid:"A"},{name:"Baixo peso",style:["alta-influencia"],expression:[2],urlid:"B"},{name:"Muito baixo peso",style:["alta-influencia"],expression:[1],urlid:"C"},{name:"Ignorado.",style:[],expression:[0],urlid:"E"}]},{title:"SEXO",varName:"SEXO",ordinal:!1,input:"checkbox",attrIndex:2,itens:[{name:"Feminino",style:[],expression:[2],urlid:"N"},{name:"Masculino",style:[],expression:[1],urlid:"O"},{name:"Indeterminado",style:[],expression:[0],urlid:"P"}]},{title:"RA\xc7A/COR",varName:"RACA_COR",ordinal:!1,input:"checkbox",attrIndex:3,itens:[{name:"Branca",style:[],expression:[1],urlid:"S"},{name:"Preta ou Parda",style:[],expression:[2,4],urlid:"T"},{name:"Outros",style:[],expression:[3,4,5],urlid:"U"},{name:"Ignorado",style:[],expression:[0],urlid:"V"}]},{title:"ESCOLARIDADE<br>DA M\xc3E",varName:"ESCOLARIDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:4,itens:[{name:"Superior",style:[],expression:[7],urlid:"Y"},{name:"Ensino m\xe9dio",style:[],expression:[6],urlid:"Z"},{name:"Fundamental completo",style:[],expression:[5],urlid:"a"},{name:"Fundamental incompleto",style:[],expression:[4,3,2],urlid:"b"},{name:"Sem",style:[],expression:[1],urlid:"e"},{name:"Ignorado",style:[],expression:[0],urlid:"f"}]},{title:"IDADE<br>DA M\xc3E",varName:"IDADE_MAE",ordinal:!0,input:"checkbox",attrIndex:5,itens:[{name:"10-14",style:[],expression:[1],urlid:"l"},{name:"15-19",style:[],expression:[2],urlid:"m"},{name:"20-29",style:[],expression:[3],urlid:"n"},{name:"30-39",style:[],expression:[4],urlid:"o"},{name:"40-49",style:["alta-influencia"],expression:[5],urlid:"p"},{name:"50+",style:["alta-influencia"],expression:[6],urlid:"q"},{name:"Ignorado",style:[],expression:[0],urlid:"r"}]},{title:"TIPO<br>PARTO",varName:"PARTO",ordinal:!1,input:"checkbox",attrIndex:6,itens:[{name:"Vaginal",style:[],expression:[1],urlid:"x"},{name:"Ces\xe1rio",style:[],expression:[2],urlid:"y"},{name:"Indeterminado",style:[],expression:[0],urlid:"z"}]},]}function x(e,t){return e(t,2)}function b(e){return e`### Saude da Gestante`}function g(e){return e`## DataSources`}function y(){return function(){let e="https://storage.googleapis.com/amplia/ufs2/",t=(e,t)=>e.data<t.data?-1:e.data>t.data?1:0,a=[2,3,2,2,2,3,3,3,3,3,2,2],i=[3,2,2],n=null;async function l(){return null!=n?n:await fetch(`${e}index.dat`).then(e=>e.arrayBuffer()).then(e=>n=new DataView(e))}async function o(e){let t=await l(),a=t.buffer.byteLength/12,i=0,n=a-1;for(;i<=n;){let o=Math.floor((i+n)/2),r=t.getUint32(12*o);if(e==r)return[t.getUint32(12*o+4),t.getUint32(12*o+8)];e<r?n=o-1:i=o+1}return null}function r(e,t,n,l){l=l||{};let o=(t+n)*11,r=e.getUint32(o).toString();r=r.substring(0,4)+"-"+r.substring(4,6)+"-"+r.substring(6);let s=e.getUint16(o+4),d=e.getUint32(o+6),c=e.getUint8(o+10),u=0,p=[];for(let m=0;m<a.length;m++){let f=((1<<a[m])-1<<u&d)>>u;p.push(f),u+=a[m]}u=0;for(let v=0;v<i.length;v++){let h=((1<<i[v])-1<<u&c)>>u;p.push(h),u+=i[v]}for(let x=0;x<p.length;x++){let b=p[x],g=l[x],y=!0;if(g&&g.length){y=!1;for(let A=0;A<g.length&&!y;A++)y=g[A].includes(b)}if(!y)return[r]}return[r,s,...p]}function s(t){let a=t;return a>1e5&&(a=Math.floor(t/1e4)),fetch(`${e}uf${a}.dat`).then(e=>e.arrayBuffer()).then(e=>new DataView(e)).then(async e=>{let a,i;return t>1e5?[i,a]=await o(t):(i=0,a=e.buffer.byteLength/11),[e,i,a]})}function d(e){let t={};if(e)for(let a in e)t[a]=e[a];return t}return{fetchTotal:function(e,a){return a=d(a),s(e).then(([e,i,n])=>(function(e,i,n){let l=new Map;for(let o=0;o<n;o++){let s=r(e,i,o,a),d=l.get(s[0]);d?d[1]++:(d=[0,1],l.set(s[0],d)),s.length>1&&d[0]++}let c=[],u=[];for(let[p,m]of l)c.push({data:p,valor:m[0]}),u.push({data:p,valor:m[1]});return c.sort(t),u.sort(t),[c,u]})(e,i,n))},fetchPIG:function(e,a){return a=d(a),s(e).then(([e,i,n])=>(function(e,i,n){let l=new Map;for(let o=0;o<n;o++){let s=r(e,i,o,a),d=l.get(s[0]);d?d[3]++:(d=[0,0,0,1],l.set(s[0],d)),s.length>1&&(1==s[4]?d[0]++:2==s[4]?d[1]++:3==s[4]&&d[2]++)}let c=[],u=[];for(let[p,m]of l)(m[0]||m[1]||m[2])&&(c.push({data:p,ig:"PEQUENO",total:m[0]}),c.push({data:p,ig:"ADEQUADO",total:m[1]}),c.push({data:p,ig:"GRANDE",total:m[2]})),u.push({data:p,valor:m[3]});return c.sort(t),u.sort(t),[c,u]})(e,i,n))},fetchPeso:function(e,a){return a=d(a),s(e).then(([e,i,n])=>(function(e,i,n){let l=new Map;for(let o=0;o<n;o++){let s=r(e,i,o,a);if(s.length>1){let d=l.get(s[0]);d?(d[0]+=s[1],d[1]++):(d=[s[1],1],l.set(s[0],d))}}let c=[];for(let[u,p]of l){let m={data:u,valor:p[0]/p[1],total:p[1]};c.push(m)}return c.sort(t),c})(e,i,n))},fetchRobson:function(e,a){return a=d(a),s(e).then(([e,i,n])=>(function(e,i,n){let l=new Map;for(let o=0;o<n;o++){let s=r(e,i,o,a),d=l.get(s[0]);d?d[3]++:(d=[0,0,0,1],l.set(s[0],d)),s.length>1&&(1==s[16]?d[0]++:2==s[16]?d[1]++:3==s[16]&&d[2]++)}let c=[],u=[];for(let[p,m]of l)(m[0]||m[1]||m[2])&&(c.push({data:p,robson:"Robson1a4",total:m[0]}),c.push({data:p,robson:"Robson5",total:m[1]}),c.push({data:p,robson:"Robson6a10",total:m[2]})),u.push({data:p,valor:m[3]});return c.sort(t),u.sort(t),[c,u]})(e,i,n))}}}()}function A(){return function(){let e="https://storage.googleapis.com/amplia/sim-ufs/",t=(e,t)=>e.data<t.data?-1:e.data>t.data?1:0,a=[2,2,2,3,3,3,2,2],i=null;async function n(){return null!=i?i:await fetch(`${e}index.dat`).then(e=>e.arrayBuffer()).then(e=>i=new DataView(e))}async function l(e){let t=await n(),a=t.buffer.byteLength/12,i=0,l=a-1;for(;i<=l;){let o=Math.floor((i+l)/2),r=t.getUint32(12*o);if(e==r)return[t.getUint32(12*o+4),t.getUint32(12*o+8)];e<r?l=o-1:i=o+1}return null}function o(e,t,i,n){n=n||{};let l=(t+i)*10,o=e.getUint32(l).toString();o=o.substring(0,4)+"-"+o.substring(4,6)+"-"+o.substring(6);let r=e.getUint16(l+4),s=e.getUint32(l+6),d=0,c=[];for(let u=0;u<a.length;u++){let p=((1<<a[u])-1<<d&s)>>d;c.push(p),d+=a[u]}for(let m=0;m<c.length;m++){let f=c[m],v=n[m],h=!0;if(v&&v.length){h=!1;for(let x=0;x<v.length&&!h;x++)h=v[x].includes(f)}if(!h)return[o]}return[o,r,...c]}function r(t){let a=t;return a>1e5&&(a=Math.floor(t/1e4)),fetch(`${e}uf${a}.dat`).then(e=>e.arrayBuffer()).then(e=>new DataView(e)).then(async e=>{let a,i;return t>1e5?[i,a]=await l(t):(i=0,a=e.buffer.byteLength/10),[e,i,a]})}function s(e){let t={};if(e)for(let a in e)t[a]=e[a];return t}return{fetchNeoNatal:function(e,a){return a=s(a),r(e).then(([e,i,n])=>(function(e,i,n){let l=new Map;for(let r=0;r<n;r++){let s=o(e,i,r,a),d=l.get(s[0]);d?d[3]++:(d=[0,0,0,1],l.set(s[0],d)),s.length>1&&(1==s[2]?d[0]++:2==s[2]?d[1]++:3==s[2]&&d[2]++)}let c=[],u=[];for(let[p,m]of l)(m[0]||m[1]||m[2])&&(c.push({data:p,neonatal:"PRECOCE",total:m[0]}),c.push({data:p,neonatal:"TARDIO",total:m[1]}),c.push({data:p,neonatal:"NEOTOTAL",total:m[0]+m[1]}),c.push({data:p,neonatal:"POS",total:m[2]})),u.push({data:p,valor:m[3]});return c.sort(t),u.sort(t),[c,u]})(e,i,n))},fetchFetal:function(e,a){return(a=s(a))[3]=[],r(e).then(([e,i,n])=>(function(e,i,n){let l=new Map;for(let r=0;r<n;r++){let s=o(e,i,r,a),d=l.get(s[0]);d?d[3]++:(d=[0,0,0,1],l.set(s[0],d)),s.length>1&&0==s[2]&&d[0]++}let c=[],u=[];for(let[p,m]of l)(m[0]||m[1]||m[2])&&c.push({data:p,valor:m[0]}),u.push({data:p,valor:m[3]});return c.sort(t),u.sort(t),[c,u]})(e,i,n))},fetchRelParto:function(e,a){return a=s(a),r(e).then(([e,i,n])=>(function(e,i,n){let l=new Map;for(let r=0;r<n;r++){let s=o(e,i,r,a),d=l.get(s[0]);d?d[3]++:(d=[0,0,0,1],l.set(s[0],d)),s.length>1&&(1==s[9]?d[0]++:2==s[9]?d[1]++:3==s[9]&&d[2]++)}let c=[],u=[];for(let[p,m]of l)(m[0]||m[1]||m[2])&&(c.push({data:p,relparto:"ANTES",total:m[0]}),c.push({data:p,relparto:"DURANTE",total:m[1]}),c.push({data:p,relparto:"DEPOIS",total:m[2]})),u.push({data:p,valor:m[3]});return c.sort(t),u.sort(t),[c,u]})(e,i,n))},fetchTotal:function(e,a){return a=s(a),r(e).then(([e,i,n])=>(function(e,i,n){let l=new Map;for(let r=0;r<n;r++){let s=o(e,i,r,a),d=l.get(s[0]);d?d[1]++:(d=[0,1],l.set(s[0],d)),s.length>1&&d[0]++}let c=[],u=[];for(let[p,m]of l)c.push({data:p,valor:m[0]}),u.push({data:p,valor:m[1]});return c.sort(t),u.sort(t),[c,u]})(e,i,n))}}}()}function E(e){return e`### Alguns testes com os datasources`}function T(e,t){return e.fetchRobson(11,t.expression)}function w(e,t){return e.fetchPeso(11,t.expression)}function C(e){return e("municipios2.csv").csv()}function _(e,t){return e.fetchRelParto(35,t.expression)}function O(e){return e.expression}function I(e,t){return e.fetchFetal(35,t.expression)}function L(e){return e.html`<style>
  @import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap);
  @import url(https://fonts.googleapis.com/icon?family=Material+Icons);    
</style>`}function M(e,t){let M=e.module(),N=new Map([["municipios2.csv",{url:new a.U(a(582)),mimeType:"text/csv",toString:function(){return this.url}}]]);return M.builtin("FileAttachment",e.fileAttachments(e=>N.get(e))),M.variable(t()).define(["md"],i),M.variable(t()).define(["md"],n),M.variable(t("ampliaMenu")).define("ampliaMenu",["Event"],l),M.variable(t()).define(["md"],o),M.variable(t("mp")).define("mp",["menuNascidosVivos"],r),M.variable(t("dadosMenuNascidosVivos")).define("dadosMenuNascidosVivos",s),M.variable(t("menuNascidosVivos")).define("menuNascidosVivos",["ampliaMenu","dadosMenuNascidosVivos"],d),M.variable(t()).define(["md"],c),M.variable(t("viewof cn")).define("viewof cn",["menuCaracteristicasNascimento"],u),M.variable(t("cn")).define("cn",["Generators","viewof cn"],(e,t)=>e.input(t)),M.variable(t("dadosMenuCaracteristicasNascimento")).define("dadosMenuCaracteristicasNascimento",p),M.variable(t("menuCaracteristicasNascimento")).define("menuCaracteristicasNascimento",["ampliaMenu","dadosMenuCaracteristicasNascimento"],m),M.variable(t()).define(["md"],f),M.variable(t("viewof mpi")).define("viewof mpi",["menuMortalidade"],v),M.variable(t("mpi")).define("mpi",["Generators","viewof mpi"],(e,t)=>e.input(t)),M.variable(t("dadosMenuMortalidade")).define("dadosMenuMortalidade",h),M.variable(t("menuMortalidade")).define("menuMortalidade",["ampliaMenu","dadosMenuMortalidade"],x),M.variable(t()).define(["md"],b),M.variable(t()).define(["md"],g),M.variable(t("datasource")).define("datasource",y),M.variable(t("datasource_sim")).define("datasource_sim",A),M.variable(t()).define(["md"],E),M.variable(t()).define(["datasource","cn"],T),M.variable(t()).define(["datasource","cn"],w),M.variable(t("municipios2")).define("municipios2",["FileAttachment"],C),M.variable(t()).define(["datasource_sim","mpi"],_),M.variable(t()).define(["mpi"],O),M.variable(t()).define(["datasource_sim","mpi"],I),M.variable(t()).define(["htl"],L),M}function N(e){return e`# Amplia Saúde - Trilhas Exploratórias - v5.0 - Mortalidade`}function k(e,t){return e`
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

${t()}

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
`}function S(e,t){return e?new t.principal(e.principalUrlids):new t.principal}function R(e,t,a){return e`
<div style="display:flex; width:100%; align-items:center; justify-content:space-between;">
<div>${t}</div><div>${a}</div>
</div>
`}function P(e,t,a,i,n,l){let o=document.createElement("div");for(let r=0;r<e.length;r++)o.append(t[e[r].variavel](e[r].i));return o.append(a()),i.create(o,{animation:150,handle:".drag",filter:".undraggable",onUpdate(t){let a=e[t.oldIndex];e.splice(t.oldIndex,1),e.splice(t.newIndex,0,a),n.value=e}}),l.select(o).selectAll("g[aria-label=x-axis] g.tick text").each(function(){let e=l.select(this),t=e.text();/[0-9]{4}/.test(t)&&e.style("font-size","14px").style("font-weight","700")}),o}function D(){return 4}function F(e,t,a){return e?t(104,468,e.intervalo[0],e.intervalo[1]):t(104,468,a.intervalo[0],a.intervalo[1])}function $(e,t,a,i,n){return e`<!-- <label class="label-locais">LOCAIS </label> -->
${t.map((e,t)=>a(e,t))}${t.length<i?n:""}`}function U(e,t,a,i,n,l,o,r,s,d,c,u,p,m,f){return e.select(t`
<input list="menu-municipios-options" id="menu-municipios" placeholder="Adicione um local" class="caixa-municipio">
<datalist id="menu-municipios-options">
${a.map(e=>e.municipio).sort(Intl.Collator().compare).map(e=>`<option value="${e}">`)}
</datalist>
`).on("change",e=>{if(!a.map(e=>e.municipio).includes(document.getElementById("menu-municipios").value)&&!i.includes(document.getElementById("menu-municipios").value))return;let t=e.target.value;if(!(n.length==l||n.map(e=>e.nome).includes(t))){for(let v of(o.value=o.value.concat([{nome:t,cor:r.find(e=>!n.map(e=>e.cor).includes(e))}]),s.setItem("municipios",JSON.stringify(o.value)),d))"PM25"==v.variavel&&i.includes(t)||Promise.all([c[v.variavel](t,"PM25"!=v.variavel?u.value.expression:null)]).then(e=>{p.value=p.value.concat({idx:v.i,municipio:t,variavel:v.variavel,dados:m[v.variavel](e[0])})});for(let h of[...new Set(f.filter(e=>e.filtrado).map(e=>e.idx))])Promise.all([c[d.find(e=>e.i==h).variavel](t,d.find(e=>e.i==h).filtros.value.expression)]).then(e=>{p.value=p.value.concat({idx:h,municipio:t,variavel:f.find(e=>e.idx==h).variavel,filtrado:!0,dados:m[f.find(e=>e.idx==h).variavel](e[0])})})}}).node()}function B(e,t,a,i,n){return l=>{e.value.filter(e=>"PM25"!=e.variavel).forEach(e=>{t.value=t.value.filter(t=>t.idx!=e.i||t.filtrado),a.value.forEach(a=>{Promise.all([i[e.variavel](a.nome,l.target.value.expression)]).then(i=>{t.value=t.value.filter(t=>t.idx!=e.i||t.filtrado||t.municipio!=a.nome),t.value=t.value.concat({idx:e.i,municipio:a.nome,variavel:e.variavel,dados:n[e.variavel](i[0])})})})})}}function H(e,t,a,i,n,l,o,r){return(s,d)=>{let c=e.create("button").attr("class","btn-municipio").style("background-color",s.cor).style("display","inline-flex").style("align-items","flex-center").on("click",e=>{t.length>1&&(a.value=t.filter(e=>e!=s),i.setItem("municipios",JSON.stringify(a.value)),n.value=l.filter(e=>e.municipio!=s.nome))});return o.includes(s.nome)?c.append("span").text(s.nome):c.append("span").text(s.nome+(s.nome.includes("(")?"":" ("+r.find(e=>e.municipio==s.nome).sigla+")")),c.append("span").attr("class","material-icons-outlined").style("font-size","16px").style("margin-left","5px").style("display",1==t.length?"none":"inline").text("remove_circle_outline"),c.node()}}function V(e,t){return()=>e.create("button").attr("class","btn-remove").text("–").on("click",t).attr("title","Eliminar trilha").node()}function G(e,t){return()=>{let a=e.create("button").attr("class","btn-remove").on("click",t);return a.append("span").attr("class","material-icons-outlined").style("font-size","10px").text("content_copy"),a.attr("title","Duplicar trilha"),a.node()}}function j(e,t,a,i,n){return{PM25:e,NEONATAL:t,RELPARTO:a,FETAL:i,TOTAL:n}}function z(e,t,a,i,n){return{PM25:e,NEONATAL:t,TOTAL:a,FETAL:i,RELPARTO:n}}function Z(e,t,a,i,n){return{PM25:e,NEONATAL:t,TOTAL:a,FETAL:i,RELPARTO:n}}function J(){return{PM25:"#F4947C",FETAL:"#DDD9FC",NEONATAL:"#FFD8FD",RELPARTO:"#FCEBD4",TOTAL:"#D9E7FC"}}function q(){return{PM25:"#FDEEEA",FETAL:"#EEECFD",NEONATAL:"#FFEAFE",RELPARTO:"#FFF7ED",TOTAL:"#ECF4FF"}}function W(e){return e`
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
  align-items: flex-center;
  height: 22px;
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
`}function X(e,t){return function(a){let i=a.scale("x"),n=a.scale("y"),l=e;"number"==typeof l&&(l=new Date(l));let o=new Date(l.getTime()),r=new Date(l.getTime());o.setDate(o.getDate()+154),r.setDate(r.getDate()+266);let s=i.apply(l),d=i.apply(o),c=i.apply(r);t.select(a).insert("rect","g[aria-label=rule]").attr("class","suscetibilidade").attr("x",d).attr("y",n.range[1]).attr("width",c-d).attr("height",n.range[0]-n.range[1]).attr("stroke-width","2px").attr("stroke","#F4947C").attr("fill","#FFFFFF00").style("cursor","grab"),t.select(a).insert("line","g[aria-label=rule]").attr("x1",s).attr("y1",n.range[1]).attr("x2",s).attr("y2",n.range[0]).attr("stroke-width","2px").attr("stroke","#F4947C"),t.select(a).insert("line","g[aria-label=rule]").attr("class","concepcao").attr("x1",s).attr("y1",n.range[1]).attr("x2",d).attr("y2",n.range[1]).attr("stroke-width","2px").attr("stroke","#F4947C"),t.select(a).append("text").attr("class","rotuloSuscetibilidade").text("CONCEP\xc7\xc3O").attr("x",s).attr("y",n.range[1]-3),t.select(a).append("text").attr("class","rotuloSuscetibilidade").text("22\xaa SEM").attr("x",d).attr("y",n.range[1]-3),t.select(a).append("text").attr("class","rotuloSuscetibilidade").text("38\xaa SEM").attr("x",c).attr("y",n.range[1]-3)}}function Y(e,t,a,i,n){return function(l,o,r,s="valor",d=null){function c(e){let t=document.createElementNS("http://www.w3.org/2000/svg","svg"),a=document.createElementNS("http://www.w3.org/2000/svg","path");return t.setAttribute("width","18"),t.setAttribute("height","8"),t.setAttribute("fill","none"),a.setAttribute("d","M1 7C1 5 1.39956 1 4.9956 1C10.2138 1 7.9923 7 11.9879 7C16.4829 7 15.9835 3 15.9835 1"),a.setAttribute("stroke","#151472"),e?(a.setAttribute("stroke-width","1.5"),a.setAttribute("stroke-dasharray","2.5 1")):a.setAttribute("stroke-width","2"),t.appendChild(a),t}function u(e){let t=["de","da","do","dos","das","e"];if(e.length<=2)return e;let a=e.indexOf("(");a>=0&&(e.substring(a).trim(),e=e.substring(0,a).trim());let i=e.toLowerCase().split(" ");for(let n=0;n<i.length;n++)t.includes(i[n])||(i[n]=i[n][0].toUpperCase()+i[n].substring(1));return i.join(" ")}setTimeout(p=>{let m=l.parentElement.querySelector(".tooltip");m||((m=document.createElement("div")).setAttribute("class","tooltip"),m.style.backgroundColor=n[o]+"CC",l.parentElement.appendChild(m)),function(n){function p(t,a){t.addEventListener("mouseover",t=>{e.select(document.body).selectAll("g[aria-label=line]").style("opacity",function(t){return e.select(this).attr("stroke")==a.cor?1:.3})}),t.addEventListener("mouseout",t=>{e.select(document.body).selectAll("g[aria-label=line]").style("opacity",1)})}let m=i(r,o,s,d),f,v,h;f=l.scale("x"),v=l.scale("y"),h=f.apply("PM25"==o?t:a),n.style.visibility=h<f.range[0]?"hidden":"visible",n.style.top=`${v.range[1]+5}px`,h>250?(n.classList.remove("right"),n.style.left=`${h-10}px`):(n.style.left=`${h}px`,n.classList.add("right"));let x=m.valoresComparacao.length>0,b=document.createElement("div"),g=document.createElement("div");g.classList.add("periodo"),void 0!==m.semanas?g.textContent=`${m.semanaInicio} - ${m.semanaFim} - (sem ${m.semanas})`:g.textContent=`${m.semanaInicio} - ${m.semanaFim}`,b.appendChild(g),x?(b.classList.add("c2"),b.appendChild(c(!1)),b.appendChild(c(!0))):b.classList.add("c1");for(let y=0;y<m.municipios.length;y++){let A=document.createElement("div"),E=document.createElement("div"),T=document.createElement("div"),w=x?document.createElement("div"):null;A.classList.add("legenda"),A.style.color=m.municipios[y].cor,A.textContent="⬤",E.classList.add("municipio"),E.textContent=u(m.municipios[y].nome),p(E,m.municipios[y]),T.classList.add("valor"),T.textContent=m.valoresPrincipal[y],b.appendChild(A),b.appendChild(E),b.appendChild(T),w&&(w.classList.add("valor"),w.textContent=m.valoresComparacao[y],b.appendChild(w))}let C=document.createElement("div");C.classList.add("rodape"),C.innerHTML=`Unidade: <b>${m.unidade}</b><br>M\xe9dia Semanal`,b.appendChild(C),n.replaceChildren(b);let _=e.select(l).select("line.rule-shadow"),O=e.select(l).select("g[aria-label=rule] line");0===_.size()&&(_=e.select(O.node().parentElement).append("line").attr("class","rule-shadow").attr("stroke","#FFFFFF00").attr("stroke-width",5).attr("stroke-dasharray","none").attr("y1",O.attr("y1")).attr("y2",O.attr("y2")).attr("cursor","ew-resize")),_.attr("x1",O.attr("x1")).attr("x2",O.attr("x2"))}(m)})}}function Q(e,t,a,i,n,l,o,r,s,d){return function(c,u,p,m){let f="PM25"==u?e:t;function v(e){return e=e.toISOString().substring(0,10).split("-"),`${e[2]}/${e[1]}/${e[0]}`}function h(e){return(m&&(e=e[m]),"percentual"===p||"taxa"===p)?e.toLocaleString("pt-BR",{maximumFractionDigits:2}):e.toFixed(0)}let x={},b=i.filter(e=>e.idx==c).sort(function(e,t){return a.findIndex(e=>e.nome==t.municipio)-a.findIndex(t=>t.nome==e.municipio)}),g=b,y=b.filter(e=>e.filtrado),A=n[l.bisector(e=>e.inicio.getTime()).center(n,f)];if("PM25"==u){let E=e;"number"==typeof E&&(E=new Date(E));let T=t;"number"==typeof T&&(T=new Date(T));let w=Math.floor((E.getTime()-T.getTime())/6048e5);w>0&&w<=42&&(x.semanas=w)}return x.semanaInicio=v(A.inicio).substring(0,5),x.semanaFim=v(A.termino),x.unidade=o[u][p],x.valoresPrincipal=[],x.valoresComparacao=[],x.municipios=[],x.ufSelecionada=a.some(e=>r.includes(e.nome)),y.length>0&&(g=b.filter(e=>!e.filtrado),"PIG"!==u&&(y=y.filter(e=>!Object.values(s).includes(e.municipio)||"PM25"!=u)),y.forEach(e=>{let t=e.dados[d.center(e.dados,f)][p];x.valoresComparacao.push(h("PIG"==u?t[m]:t))})),g.forEach(e=>{let t=a.find(t=>t.nome==e.municipio),i=e.dados[d.center(e.dados,f)][p];x.municipios.push(t),x.valoresPrincipal.push(h("PIG"==u?i[m]:i))}),x}}function K(e,t,a,i,n){return function(l,o,r=!1){function s(e){let t=o.scale("x"),a=e.offsetX;return a<t.range[0]&&(a=t.range[0]),a>t.range[1]&&(a=t.range[1]),a}let d=function(e){let t=n.select(o).select("g[aria-label=rule] line"),a=s(e);t.attr("x1",a).attr("x2",a)},c=function(n){let d=o.scale("x"),c=e[l].dados,u=s(n),p=c[t.center(c,d.invert(u))].x;r?a.value=p:i.value=p},u=0,p=0,m=null;function f(e){m&&m.attr("x",e.offsetX-p)}function v(a){let n=a.offsetX-p-u,r=o.scale("x");n<r.range[0]&&(n=r.range[0]),n>r.range[1]&&(n=r.range[1]);let s=e[l].dados;i.value=s[t.center(s,r.invert(n))].x}n.select(o).call(n.drag().on("start",e=>(function(e){if(n.select(o.parentElement).select("div.tooltip").style("visibility","hidden"),r){let t=n.select(o).select("rect.suscetibilidade"),a=n.select(o).select("line.concepcao"),i=n.select(o).select("g[aria-label=rule] line"),l=+t.attr("x"),s=+t.attr("width")+l;if(Math.abs(+i.attr("x1")-e.offsetX)>8&&l<e.offsetX&&s>e.offsetX){u=+t.attr("x")-a.attr("x1"),p=e.offsetX-l,m=n.select(o).append("rect").attr("x",t.attr("x")).attr("y",t.attr("y")).attr("width",t.attr("width")).attr("height",t.attr("height")).attr("stroke","black").attr("stroke-dasharray","5").attr("fill","none"),d=f,c=v;return}}d(e)})(e.sourceEvent)).on("drag",e=>d(e.sourceEvent)).on("end",e=>c(e.sourceEvent)))}}function ee(e,t,a,i,n,l,o,r,s,d,c,u,p,m,f,v,h,x,b,g,y,A,E,T,w,C,_,O,I){return L=>{let M=e.plot({marginTop:15,marginRight:0,width:t-65,height:a,x:{grid:!0,label:null,format:i,domain:n.find(e=>e.i==L).alterar_tempo?n.find(e=>e.i==L).alterar_tempo.map(e=>l[e].inicio):o.map(e=>l[e].inicio)},y:{grid:!0,domain:[0,r[s]],transform:e=>Math.min(122,e),label:null},marks:[e.rect([{y1:d[s][3],y2:r[s]}],{y1:"y1",y2:"y2",fill:"#FFEBEB"}),e.rect([{y1:d[s][2],y2:d[s][3]}],{y1:"y1",y2:"y2",fill:"#FFF5EB"}),e.rect([{y1:d[s][1],y2:d[s][2]}],{y1:"y1",y2:"y2",fill:"#FFFFED"}),n.find(e=>e.i==L).mostra_media_movel?c.filter(e=>e.idx==L&&!Object.values(u).includes(e.municipio)).map((t,a)=>e.line(t.dados.filter(e=>p(e,L)),e.windowY({strict:!0,k:m,anchor:"middle",x:"x",y:"valor",curve:"monotone-x",strokeWidth:f,stroke:v.find(e=>e.nome==t.municipio).cor}))):c.filter(e=>e.idx==L&&!Object.values(u).includes(e.municipio)).map((t,a)=>e.line(t.dados.filter(e=>p(e,L)),{x:"x",y:"valor",curve:"monotone-x",strokeWidth:f,stroke:v.find(e=>e.nome==t.municipio).cor})),e.ruleX([c.filter(e=>e.idx==L)[0].dados[h.center(c.filter(e=>e.idx==L)[0].dados,x)]],{x:"x",strokeDasharray:"5"}),n.find(e=>e.i==L).mostra_media_movel?null:c.filter(e=>e.idx==L).map((t,a)=>e.dot([t.dados[h.center(t.dados,x)]],{x:"x",y:"valor",fill:v.find(e=>e.nome==t.municipio).cor}))]});return b(M,"PM25",L),g(M),y(L,M,!0),A`
<div style="--cor-trilha:${E.PM25}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${T.create("button").attr("class","btn-remove").text("–").on("click",w).node()}<br>
  ${C()}
</div>
<div class="sombra">
<div class="drag-container">
<span class="material-icons-outlined ${n[0].i==L?"icon-gray":"icon-blue"}">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-blue">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined ${n[n.length-1].i==L?"icon-gray":"icon-blue"}">
expand_more
</span>
</div>
<div class="trilha" i=${L}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">POLUENTE</span>
    <div class="opcao-trilha">
      <label class="label-cabecalho-trilha">MÉDIA MÓVEL</label>       ${T.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==L).mostra_media_movel).on("change",e=>_(e,L)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">MODIFICAR PERÍODO</label> ${T.create("input").attr("type","checkbox").property("checked",n.find(e=>e.i==L).alterar_tempo).on("change",e=>O(e,L)).node()}
  </div>
    <span class="instrucaoSuscetibilidade">A janela no gráfico indica o período de maior suscetibilidade à poluição (22ª  à 38ª semana)</span>
    <span class="fonte" style="flex-grow: 0;">Fonte: SISAM</span>
  </div>
<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right">${M}</div>
</div>
${I(L)}
</div>
</div>
</div>`}}function et(e,t,a,i,n,l,o,r,s,d,c,u,p,m,f,v,h,x,b,g,y,A,E,T,w,C,_,O){return I=>{if(!e.map(e=>e.nome).every(e=>t.filter(e=>e.idx==I).map(e=>e.municipio).includes(e))||i.find(e=>e.i==I).filtros.value.expression&&i.find(e=>e.i==I).show_filtros&&t.filter(e=>e.idx==I).every(e=>void 0===e.filtrado)||n.value.expression&&t.filter(e=>e.idx==I).every(e=>void 0!==e.filtrado))return a();let L=i.find(e=>e.i==I).escala,M=l.plot({marginTop:5,marginRight:0,width:o-65,height:r,x:{grid:!0,label:null,domain:i.find(e=>e.i==I).alterar_tempo?i.find(e=>e.i==I).alterar_tempo.map(e=>s[e].inicio):d.map(e=>s[e].inicio)},y:{grid:!0,label:null},marks:[i.find(e=>e.i==I).mostra_media_movel?t.filter(e=>e.idx==I).map((t,a)=>l.line(t.dados.filter(e=>c(e,I)),l.windowY({strict:!0,k:u,anchor:"middle",x:"x",y:e=>e[L],strokeWidth:t.filtrado?p:m,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"}))):t.filter(e=>e.idx==I).map((t,a)=>l.line(t.dados.filter(e=>c(e,I)),{sort:"x",x:"x",y:e=>e[L],curve:"monotone-x",strokeWidth:t.filtrado?p:m,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"})),l.ruleX([t.filter(e=>e.idx==I)[0].dados[f.center(t.filter(e=>e.idx==I)[0].dados,v)]],{x:"x",strokeDasharray:"5"}),i.find(e=>e.i==I).mostra_media_movel?null:t.filter(e=>e.idx==I).map((t,a)=>l.dot([t.dados[f.center(t.dados,v)]],{x:"x",y:e=>e[L],fill:e.find(e=>e.nome==t.municipio).cor}))]});return h(M,"FETAL",I,L),x(I,M),b`
<div style="--cor-trilha:${g.FETAL}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${y.create("button").attr("class","btn-remove").text("–").on("click",A).node()}<br>
  ${E()}
</div>
<div class="sombra">
<div class="drag-container">
<span class="material-icons-outlined ${i[0].i==I?"icon-gray":"icon-blue"}">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-blue">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined ${i[i.length-1].i==I?"icon-gray":"icon-blue"}">
expand_more
</span>
</div>
<div class="trilha" i=${I}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">ÓBITOS FETAIS</span>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">MÉDIA MÓVEL</label> ${y.create("input").attr("type","checkbox").property("checked",i.find(e=>e.i==I).mostra_media_movel).on("change",e=>T(e,I)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">MODIFICAR PERÍODO</label> ${y.create("input").attr("type","checkbox").property("checked",i.find(e=>e.i==I).alterar_tempo).on("change",e=>w(e,I)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">ESCALA ABSOLUTO</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+I).property("checked","absoluto"==i.find(e=>e.i==I).escala).attr("value","absoluto").on("change",e=>C(e,I)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha"> PERCENTUAL</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+I).property("checked","percentual"==i.find(e=>e.i==I).escala).attr("value","percentual").on("change",e=>C(e,I)).node()}
      </div>
    <span class="fonte">Fonte: SIM<span>
  </div>
<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right;">${M}</div>
</div>
${_(I)}
<div class="rodape-trilha">
<div class="botao-comparacao">
${y.create("input").attr("type","checkbox").property("checked",i.find(e=>e.i==I).show_filtros).on("change",e=>O(e,I)).node()}
<label>COMPARAÇÃO</label>
</div>
<div class="menu-local">${i.find(e=>e.i==I).show_filtros?i.find(e=>e.i==I).filtros:""}</div>
</div>
</div>
</div>
</div>`}}function ea(e,t,a,i,n,l,o,r,s,d,c,u,p,m,f,v,h,x,b,g,y,A,E,T,w,C,_,O,I){return L=>{if(!e.map(e=>e.nome).every(e=>t.filter(e=>e.idx==L).map(e=>e.municipio).includes(e))||i.find(e=>e.i==L).filtros.value.expression&&i.find(e=>e.i==L).show_filtros&&t.filter(e=>e.idx==L).every(e=>void 0===e.filtrado)||n.value.expression&&t.filter(e=>e.idx==L).every(e=>void 0!==e.filtrado))return a();let M=i.find(e=>e.i==L).escala,N=i.find(e=>e.i==L).neonatal,k=l.plot({marginTop:5,marginRight:0,width:o-65,height:r,x:{grid:!0,label:null,domain:i.find(e=>e.i==L).alterar_tempo?i.find(e=>e.i==L).alterar_tempo.map(e=>s[e].inicio):d.map(e=>s[e].inicio)},y:{grid:!0,label:null},marks:[i.find(e=>e.i==L).mostra_media_movel?t.filter(e=>e.idx==L).map((t,a)=>l.line(t.dados.filter(e=>c(e,L)),l.windowY({strict:!0,k:u,anchor:"middle",x:"x",y:e=>e[M][N],strokeWidth:t.filtrado?p:m,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"}))):t.filter(e=>e.idx==L).map((t,a)=>l.line(t.dados.filter(e=>c(e,L)),{sort:"x",x:"x",y:e=>e[M][N],curve:"monotone-x",strokeWidth:t.filtrado?p:m,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"})),l.ruleX([t.filter(e=>e.idx==L)[0].dados[f.center(t.filter(e=>e.idx==L)[0].dados,v)]],{x:"x",strokeDasharray:"5"}),i.find(e=>e.i==L).mostra_media_movel?null:t.filter(e=>e.idx==L).map((t,a)=>l.dot([t.dados[f.center(t.dados,v)]],{x:"x",y:e=>e[M][N],fill:e.find(e=>e.nome==t.municipio).cor}))]});h(k,"NEONATAL",L,M,N),x(L,k);let S;return b`
<div style="--cor-trilha: ${g.NEONATAL}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${y.create("button").attr("class","btn-remove").text("–").on("click",A).node()}<br>
  ${E()}
</div>
<div class="sombra">
<div class="drag-container">
<span class="material-icons-outlined ${i[0].i==L?"icon-gray":"icon-blue"}">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-blue">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined ${i[i.length-1].i==L?"icon-gray":"icon-blue"}">
expand_more
</span>
</div>
<div class="trilha" i=${L}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">ÓBITOS NEONATAIS</span>

    ${(S=y.create("select").attr("class","menuIG")).style("font-family","Roboto Condensed"),S.append("option").attr("name","PRECOCE").text("PRECOCE").property("selected","PRECOCE"==i.find(e=>e.i==L).neonatal),S.append("option").attr("name","TARDIO").text("TARDIO").property("selected","TARDIO"==i.find(e=>e.i==L).neonatal),S.append("option").attr("name","NEOTOTAL").attr("value","NEOTOTAL").text("PRECOCE+TARDIO").property("selected","NEOTOTAL"==i.find(e=>e.i==L).neonatal),S.append("option").attr("name","POS").text("POS").property("selected","POS"==i.find(e=>e.i==L).neonatal),S.on("change",e=>T(e,L)),S.node()}

    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">MÉDIA MÓVEL</label> ${y.create("input").attr("type","checkbox").property("checked",i.find(e=>e.i==L).mostra_media_movel).on("change",e=>w(e,L)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">MODIFICAR PERÍODO</label> ${y.create("input").attr("type","checkbox").property("checked",i.find(e=>e.i==L).alterar_tempo).on("change",e=>C(e,L)).node()}
    </div>
    <div class="opcao-trilha">
    
    <label class="label-cabecalho-trilha">ESCALA ABSOLUTO</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+L).property("checked","absoluto"==i.find(e=>e.i==L).escala).attr("value","absoluto").on("change",e=>_(e,L)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha"> PERCENTUAL</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+L).property("checked","percentual"==i.find(e=>e.i==L).escala).attr("value","percentual").on("change",e=>_(e,L)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha"> TAXA POR 1000</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+L).property("checked","taxa"==i.find(e=>e.i==L).escala).attr("value","taxa").on("change",e=>_(e,L)).node()}
    </div>
    <span class="fonte">Fonte: SIM</span>
  </div>

<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right;">${k}</div>
</div>
${O(L)}
<div class="rodape-trilha">
<div class="botao-comparacao">
${y.create("input").attr("type","checkbox").property("checked",i.find(e=>e.i==L).show_filtros).on("change",e=>I(e,L)).node()}
<label>COMPARAÇÃO</label>
</div>
<div class="menu-local">${i.find(e=>e.i==L).show_filtros?i.find(e=>e.i==L).filtros:""}</div>
</div>
</div>
</div>
</div>`}}function ei(e,t,a,i,n,l,o,r,s,d,c,u,p,m,f,v,h,x,b,g,y,A,E,T,w,C,_,O,I){return L=>{if(!e.map(e=>e.nome).every(e=>t.filter(e=>e.idx==L).map(e=>e.municipio).includes(e))||i.find(e=>e.i==L).filtros.value.expression&&i.find(e=>e.i==L).show_filtros&&t.filter(e=>e.idx==L).every(e=>void 0===e.filtrado)||n.value.expression&&t.filter(e=>e.idx==L).every(e=>void 0!==e.filtrado))return a();let M=i.find(e=>e.i==L).escala,N=i.find(e=>e.i==L).relparto,k=l.plot({marginTop:5,marginRight:0,width:o-65,height:r,x:{grid:!0,label:null,domain:i.find(e=>e.i==L).alterar_tempo?i.find(e=>e.i==L).alterar_tempo.map(e=>s[e].inicio):d.map(e=>s[e].inicio)},y:{grid:!0,label:null},marks:[i.find(e=>e.i==L).mostra_media_movel?t.filter(e=>e.idx==L).map((t,a)=>l.line(t.dados.filter(e=>c(e,L)),l.windowY({strict:!0,k:u,anchor:"middle",x:"x",y:e=>e[M][N],strokeWidth:t.filtrado?p:m,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"}))):t.filter(e=>e.idx==L).map((t,a)=>l.line(t.dados.filter(e=>c(e,L)),{sort:"x",x:"x",y:e=>e[M][N],curve:"monotone-x",strokeWidth:t.filtrado?p:m,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"})),l.ruleX([t.filter(e=>e.idx==L)[0].dados[f.center(t.filter(e=>e.idx==L)[0].dados,v)]],{x:"x",strokeDasharray:"5"}),i.find(e=>e.i==L).mostra_media_movel?null:t.filter(e=>e.idx==L).map((t,a)=>l.dot([t.dados[f.center(t.dados,v)]],{x:"x",y:e=>e[M][N],fill:e.find(e=>e.nome==t.municipio).cor}))]});h(k,"RELPARTO",L,M,N),x(L,k);let S;return b`
<div style="--cor-trilha: ${g.RELPARTO}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${y.create("button").attr("class","btn-remove").text("–").on("click",A).node()}<br>
  ${E()}
</div>
<div class="sombra">
<div class="drag-container">
<span class="material-icons-outlined ${i[0].i==L?"icon-gray":"icon-blue"}">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-blue">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined ${i[i.length-1].i==L?"icon-gray":"icon-blue"}">
expand_more
</span>
</div>
<div class="trilha" i=${L}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">ÓBITOS EM RELAÇÃO AO PARTO</span>

    ${(S=y.create("select").attr("class","menuIG")).style("font-family","Roboto Condensed"),S.append("option").attr("name","ANTES").text("ANTES").property("selected","ANTES"==i.find(e=>e.i==L).relparto),S.append("option").attr("name","DURANTE").text("DURANTE").property("selected","DURANTE"==i.find(e=>e.i==L).relparto),S.append("option").attr("name","DEPOIS").text("DEPOIS").property("selected","DEPOIS"==i.find(e=>e.i==L).relparto),S.on("change",e=>T(e,L)),S.node()}

    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">MÉDIA MÓVEL</label> ${y.create("input").attr("type","checkbox").property("checked",i.find(e=>e.i==L).mostra_media_movel).on("change",e=>w(e,L)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">MODIFICAR PERÍODO</label> ${y.create("input").attr("type","checkbox").property("checked",i.find(e=>e.i==L).alterar_tempo).on("change",e=>C(e,L)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">ESCALA ABSOLUTO</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+L).property("checked","absoluto"==i.find(e=>e.i==L).escala).attr("value","absoluto").on("change",e=>_(e,L)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha"> PERCENTUAL</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+L).property("checked","percentual"==i.find(e=>e.i==L).escala).attr("value","percentual").on("change",e=>_(e,L)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha"> TAXA POR 1000</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+L).property("checked","taxa"==i.find(e=>e.i==L).escala).attr("value","taxa").on("change",e=>_(e,L)).node()}
    </div>
    <span class="fonte">Fonte: SIM</span>
  </div>

<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right;">${k}</div>
</div>
${O(L)}
<div class="rodape-trilha">
<div class="botao-comparacao">
${y.create("input").attr("type","checkbox").property("checked",i.find(e=>e.i==L).show_filtros).on("change",e=>I(e,L)).node()}
<label>COMPARAÇÃO</label>
</div>
<div class="menu-local">${i.find(e=>e.i==L).show_filtros?i.find(e=>e.i==L).filtros:""}</div>
</div>
</div>
</div>
</div>`}}function en(e,t,a,i,n,l,o,r,s,d,c,u,p,m,f,v,h,x,b,g,y,A,E,T,w,C,_,O){return I=>{if(!e.map(e=>e.nome).every(e=>t.filter(e=>e.idx==I).map(e=>e.municipio).includes(e))||i.find(e=>e.i==I).filtros.value.expression&&i.find(e=>e.i==I).show_filtros&&t.filter(e=>e.idx==I).every(e=>void 0===e.filtrado)||n.value.expression&&t.filter(e=>e.idx==I).every(e=>void 0!==e.filtrado))return a();let L=i.find(e=>e.i==I).escala,M=l.plot({marginTop:5,marginRight:0,width:o-65,height:r,x:{grid:!0,label:null,domain:i.find(e=>e.i==I).alterar_tempo?i.find(e=>e.i==I).alterar_tempo.map(e=>s[e].inicio):d.map(e=>s[e].inicio)},y:{grid:!0,label:null},marks:[i.find(e=>e.i==I).mostra_media_movel?t.filter(e=>e.idx==I).map((t,a)=>l.line(t.dados.filter(e=>c(e,I)),l.windowY({strict:!0,k:u,anchor:"middle",x:"x",y:e=>e[L],strokeWidth:t.filtrado?p:m,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"}))):t.filter(e=>e.idx==I).map((t,a)=>l.line(t.dados.filter(e=>c(e,I)),{sort:"x",x:"x",y:e=>e[L],curve:"monotone-x",strokeWidth:t.filtrado?p:m,stroke:e.find(e=>e.nome==t.municipio).cor,strokeDasharray:t.filtrado?"3":"1"})),l.ruleX([t.filter(e=>e.idx==I)[0].dados[f.center(t.filter(e=>e.idx==I)[0].dados,v)]],{x:"x",strokeDasharray:"5"}),i.find(e=>e.i==I).mostra_media_movel?null:t.filter(e=>e.idx==I).map((t,a)=>l.dot([t.dados[f.center(t.dados,v)]],{x:"x",y:e=>e[L],fill:e.find(e=>e.nome==t.municipio).cor}))]});return h(M,"TOTAL",I,L),x(I,M),b`
<div style="--cor-trilha: ${g.TOTAL}; display:inline-flex; align-items:center; justify-content:space-between;">
<div class="buttons">
  ${y.create("button").attr("class","btn-remove").text("–").on("click",A).node()}<br>
  ${E()}
</div>
<div class="sombra">
<div class="drag-container">
<span class="material-icons-outlined ${i[0].i==I?"icon-gray":"icon-blue"}">
expand_less
</span>
<div class="drag">
  <span class="material-icons-outlined icon-blue">
  drag_indicator
  </span>
</div>
<span class="material-icons-outlined ${i[i.length-1].i==I?"icon-gray":"icon-blue"}">
expand_more
</span>
</div>
<div class="trilha" i=${I}>
  <div class="cabecalho-trilha">
    <span class="titulo-trilha">ÓBITOS TOTAIS</span>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">MÉDIA MÓVEL</label> ${y.create("input").attr("type","checkbox").property("checked",i.find(e=>e.i==I).mostra_media_movel).on("change",e=>T(e,I)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">MODIFICAR PERÍODO</label> ${y.create("input").attr("type","checkbox").property("checked",i.find(e=>e.i==I).alterar_tempo).on("change",e=>w(e,I)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha">ESCALA ABSOLUTO</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+I).property("checked","absoluto"==i.find(e=>e.i==I).escala).attr("value","absoluto").on("change",e=>C(e,I)).node()}
    </div>
    <div class="opcao-trilha">
    <label class="label-cabecalho-trilha"> PERCENTUAL</label>
    ${y.create("input").attr("type","radio").attr("name","escala_"+I).property("checked","percentual"==i.find(e=>e.i==I).escala).attr("value","percentual").on("change",e=>C(e,I)).node()}
    </div>
    <span class="fonte">Fonte: SIM</span>
  </div>
<div class="conteudo-trilha">
<div class="interior-trilha" style="text-align:right;">${M}</div>
</div>
${_(I)}
<div class="rodape-trilha">
<div class="botao-comparacao">
${y.create("input").attr("type","checkbox").property("checked",i.find(e=>e.i==I).show_filtros).on("change",e=>O(e,I)).node()}
<label>COMPARAÇÃO</label>
</div>
<div class="menu-local">${i.find(e=>e.i==I).show_filtros?i.find(e=>e.i==I).filtros:""}</div>
</div>
</div>
</div>
</div>`}}function el(e,t,a,i,n,l){return o=>{let r;return e`
<div style="display:flex; align-items:center; justify-content:space-between;">
<div style="visibility:hidden;">
  ${t.create("button").attr("class","btn-remove").text("–").on("click",a).node()}<br>
  ${t.create("button").attr("class","btn-remove").text("C").on("click",i).node()}
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
${(r=t.create("select").attr("class","menuIG")).style("margin-left","10px").style("font-family","Roboto Condensed"),r.append("option").attr("name","").text("ADICIONE UMA TRILHA").property("disabled",!0).property("selected",!0),r.append("option").attr("name","PM25").text("POLUENTE"),r.append("option").attr("name","\xd3BITOS FETAIS").text("\xd3BITOS FETAIS"),r.append("option").attr("name","\xd3BITOS NEONATAIS TOTAIS").text("\xd3BITOS NEONATAIS TOTAIS"),r.append("option").attr("name","\xd3BITOS EM RELA\xc7\xc3O AO PARTO").text("\xd3BITOS EM RELA\xc7\xc3O AO PARTO"),r.append("option").attr("name","TOTAL").text("\xd3BITOS TOTAIS"),r.on("change",l),r.node()}
  </div>

<div class="conteudo-trilha">
<br><br>
</div>
</div>`}}function eo(e,t,a,i,n){return l=>e`
<div style="--cor-trilha: #c4c4c4; display:flex; align-items:center; justify-content:space-between; margin-bottom:30px;">
<div style="visibility:hidden;">
  ${t.create("button").attr("class","btn-remove").text("–").on("click",a).node()}<br>
  ${t.create("button").attr("class","btn-remove").text("C").on("click",i).node()}
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
</div>`}function er(e,t,a,i,n,l){return o=>{let r=e.findIndex(e=>e.i==o.target.parentNode.parentNode.getElementsByClassName("trilha")[0].getAttribute("i")),s={...e[r]},d=t.max(e.map(e=>e.i))+1;s.i=d,"PM25"!=s.variavel&&(s.filtros=s.filtros.cloneMenu(),s.filtros.addEventListener("input",e=>a(e,s))),e.splice(r+1,0,s),i.value=e;let c=JSON.parse(JSON.stringify(n.filter(e=>e.idx==o.target.parentNode.parentNode.getElementsByClassName("trilha")[0].getAttribute("i"))));c.forEach((e,t,a)=>{a[t].idx=d,a[t].dados.forEach((e,t,a)=>a[t].x=new Date(a[t].x))}),l.value=n.concat(c)}}function es(e,t,a,i){return n=>{e.value=t.filter(e=>e.i!=n.target.parentNode.parentNode.getElementsByClassName("trilha")[0].getAttribute("i")),a.value=i.filter(e=>e.idx!=n.target.parentNode.parentNode.getElementsByClassName("trilha")[0].getAttribute("i"))}}function ed(e,t,a,i,n,l,o,r,s,d,c,u,p,m,f,v,h,x){return b=>{let g=e.max(t.map(e=>e.i))||0,y=null;switch(b.target.value){case"POLUENTE":y={i:g+1,mostra_media_movel:!0,variavel:"PM25",alterar_tempo:null,poluente:"PM25"},a.value=t.concat(y),i.forEach(e=>Promise.all([n(e.nome)]).then(t=>{l.value=l.value.concat([{idx:g+1,municipio:e.nome,variavel:"PM25",dados:o(t[0])}])}));break;case"\xd3BITOS NEONATAIS TOTAIS":(y={i:g+1,mostra_media_movel:!1,escala:"taxa",neonatal:"PRECOCE",variavel:"NEONATAL",alterar_tempo:null,filtros:new r.local(null,null,s.NEONATAL),show_filtros:!1}).filtros.addEventListener("input",e=>d(e,y)),a.value=t.concat(y),i.forEach(e=>Promise.all([c(e.nome,y.filtros.expression)]).then(t=>{l.value=l.value.concat([{idx:g+1,municipio:e.nome,variavel:"NEONATAL",dados:u(t[0])}])}));break;case"\xd3BITOS EM RELA\xc7\xc3O AO PARTO":(y={i:g+1,mostra_media_movel:!1,escala:"taxa",relparto:"ANTES",variavel:"RELPARTO",alterar_tempo:null,filtros:new r.local(null,null,s.RELPARTO),show_filtros:!1}).filtros.addEventListener("input",e=>d(e,y)),a.value=t.concat(y),i.forEach(e=>Promise.all([p(e.nome,y.filtros.expression)]).then(t=>{l.value=l.value.concat([{idx:g+1,municipio:e.nome,variavel:"RELPARTO",dados:m(t[0])}])}));break;case"\xd3BITOS FETAIS":(y={i:g+1,mostra_media_movel:!1,variavel:"FETAL",alterar_tempo:null,filtros:new r.local(null,null,s.FETAIS),show_filtros:!1,escala:"absoluto"}).filtros.addEventListener("input",e=>d(e,y)),a.value=t.concat(y),i.forEach(e=>Promise.all([f(e.nome,y.filtros.expression)]).then(t=>{l.value=l.value.concat([{idx:g+1,municipio:e.nome,variavel:"FETAL",dados:v(t[0])}])}));break;case"\xd3BITOS TOTAIS":(y={i:g+1,mostra_media_movel:!1,variavel:"TOTAL",alterar_tempo:null,filtros:new r.local(null,null,s.TOTAL),show_filtros:!1,escala:"absoluto"}).filtros.addEventListener("input",e=>d(e,y)),a.value=t.concat(y),i.forEach(e=>Promise.all([h(e.nome,y.filtros.expression)]).then(t=>{l.value=l.value.concat([{idx:g+1,municipio:e.nome,variavel:"TOTAL",dados:x(t[0])}])}))}}}function ec(e,t,a,i){return n=>{if(!e.find(e=>e.i==n).alterar_tempo)return"";let l=t(104,468,e.find(e=>e.i==n).alterar_tempo[0],e.find(e=>e.i==n).alterar_tempo[1],a-90,40);return l.addEventListener("input",t=>{let a=e;a.find(e=>e.i==n).alterar_tempo=l.value,i.value=a}),l}}function eu(e,t){return a=>{e.find(e=>e.i==a.target.parentElement.parentElement.getAttribute("i")).poluente=a.target.value,t.value=e}}function ep(e,t,a,i,n,l,o,r,s,d){return(c,u)=>{if(e.find(e=>e.i==u).show_filtros=c.target.checked,c.target.checked){let p=e.find(e=>e.i==u);p.filtros=new a.local(null,i.value.urlids,n[p.variavel]),p.filtros.addEventListener("input",e=>l(e,p)),t.value=t.value.filter(e=>e.idx!=u||!e.filtrado),o.value.forEach(a=>{Promise.all([r[e.find(e=>e.i==u).variavel](a.nome,e.find(e=>e.i==u).filtros.value.expression)]).then(i=>{t.value=t.value.concat({idx:u,municipio:a.nome,variavel:e.find(e=>e.i==u).variavel,filtrado:!0,dados:s[e.find(e=>e.i==u).variavel](i[0])})})})}else t.value=t.value.filter(e=>e.idx!=u||!e.filtrado);d.value=e}}function em(e,t,a){return(i,n)=>{i.target.checked?e.find(e=>e.i==n).alterar_tempo=t:e.find(e=>e.i==n).alterar_tempo=null,a.value=e}}function ef(e,t){return(a,i)=>{e.find(e=>e.i==i).neonatal=a.target.value,t.value=e}}function ev(e,t){return(a,i)=>{e.find(e=>e.i==i).relparto=a.target.value,t.value=e}}function eh(e,t){return(a,i)=>{e.find(e=>e.i==i).escala=a.target.value,t.value=e}}function ex(e,t){return(a,i)=>{e.find(e=>e.i==i).mostra_media_movel=a.target.checked,t.value=e}}function eb(e){return t=>{let a=[0,0];return a[0]=e[t[0]].inicio,a[1]=e[t[1]].termino,a}}function eg(e,t,a){return e?e.trilhas.map(e=>(e.filtros=new t.local(null,e.filtrosUrlids),e)):[{i:0,mostra_media_movel:!0,variavel:"PM25",alterar_tempo:null,poluente:"PM25"},{i:2,mostra_media_movel:!1,escala:"absoluto",variavel:"FETAL",alterar_tempo:null,filtros:new t.local(null,null,a.FETAL),show_filtros:!1},{i:3,mostra_media_movel:!1,escala:"absoluto",neonatal:"PRECOCE",variavel:"NEONATAL",alterar_tempo:null,filtros:new t.local(null,null,a.NEONATAL),show_filtros:!1},{i:4,mostra_media_movel:!1,escala:"absoluto",relparto:"ANTES",variavel:"RELPARTO",alterar_tempo:null,filtros:new t.local(null,null,a.RELPARTO),show_filtros:!1},]}function ey(){return{PM25:{valor:"\xb5g/m\xb3"},NEONATAL:{absoluto:"\xf3bitos",percentual:"%",taxa:"nasc./1000NV"},RELPARTO:{absoluto:"\xf3bitos",percentual:"%",taxa:"nasc./1000NV"},TOTAL:{absoluto:"\xf3bitos",percentual:"%"},FETAL:{absoluto:"\xf3bitos",percentual:"%"}}}function eA(){return 2.5}function eE(){return 2}function eT(){return!0}function ew(e,t){return e?e.municipios:t.municipios}function eC(e,t,a,i,n,l,o,r,s,d,c,u,p,m){if(e){for(let f of t.value)a.value=a.value.concat([f]),f=f.nome,i.forEach(e=>{Promise.all([n[e.variavel](f,l.value.expression)]).then(t=>{o.value=o.value.concat({idx:e.i,municipio:f,variavel:e.variavel,dados:r[e.variavel](t[0])})}),e.show_filtros&&Promise.all([n[e.variavel](f,e.filtros.value.expression)]).then(t=>{o.value=o.value.concat({idx:e.i,municipio:f,variavel:e.variavel,filtrado:!0,dados:r[e.variavel](t[0])})})}),i.slice(1).forEach(e=>e.filtros.addEventListener("input",t=>s(t,e)));l.addEventListener("input",e=>d(e)),l.addEventListener("aba",e=>{c.setItem("conf3",JSON.stringify(u())),c.setItem("municipios",JSON.stringify(a.value)),c.setItem("intervalo",JSON.stringify(p.value))}),m.value=!1}}function e_(e,t,a,i){return(n,l)=>{e.value=e.value.filter(e=>e.idx!=l.i||!e.filtrado),t.value.forEach(t=>{Promise.all([a[l.variavel](t.nome,l.filtros.value.expression)]).then(a=>{e.value=e.value.concat({idx:l.i,municipio:t.nome,variavel:l.variavel,filtrado:!0,dados:i[l.variavel](a[0])})})})}}function eO(e){return e.range([3,53],{label:"Janela em semanas",value:13,step:2})}function eI(e){return e.select(["co_ppb","no2_ppb","o3_ppb","pm25_ugm3","so2_ugm3"],{label:"Indicador",value:"pm25_ugm3"})}function eL(){return["#2F87F5","#D8C56C","#DC5988","#6CC28D","#67AEC2","#ABA6F8","#D8C56C","#2DE8BD","#2F87F5","#94E8F9"]}function eM(){return[]}function eN(e,t,a,i){return e[Math.ceil(t.interpolate(...a?a.intervalo:i.intervalo)(.5))].inicio}function ek(e){return e}function eS(e){return e.bisector(e=>e.x)}function eR(e){return e.timeFormatDefaultLocale({decimal:",",thousands:".",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%d/%m/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Domingo","Segunda-feira","Ter\xe7a-feira","Quarta-feira","Quinta-feira","Sexta-feira","S\xe1bado"],shortDays:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],months:["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],shortMonths:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]})}function eP(e){return e[0]}function eD(e){return e[1]}function eF(e,t,a,i,n){return(l,o)=>{let r=e.find(e=>e.i==o).alterar_tempo,s=e.find(e=>e.i==o).mostra_media_movel?(t-1)/2:0;return r?l.x.getTime()>=a[r[0]-s].inicio.getTime()&&l.x.getTime()<=a[r[1]+s].termino.getTime():l.x.getTime()>=a[i-s].inicio.getTime()&&l.x.getTime()<=a[n+s].termino.getTime()}}function e$(){return 200}function eU(e,t){return function(a,i){if(2==a.length)return;let n=e.find(e=>e.municipio==a).codigo_sdv,l=`https://storage.googleapis.com/amplia/sisam/${n.substring(0,2)}/mun${n}.db`;return t.open(l).then(e=>e.query(i))}}function eB(e){return e`<style>
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@400;700&display=swap');
  text{
    font-family:"Fira Sans Condensed"
  }
</style>`}function eH(e){return e("municipios2.csv").csv()}function eV(e){return e("semanas_epidemiologicas_estendido.csv").csv().then(e=>e.map(e=>(e.inicio=new Date(Date.UTC(+e.inicio.substr(0,4),+e.inicio.substr(5,2)-1,+e.inicio.substr(8,2))),e.termino=new Date(Date.UTC(+e.termino.substr(0,4),+e.termino.substr(5,2)-1,+e.termino.substr(8,2))),e)).filter(e=>e.ano>=2010))}function eG(){return{ACRE:"AC",ALAGOAS:"AL",AMAPÁ:"AP",AMAZONAS:"AM",BAHIA:"BA",CEARÁ:"CE","DISTRITO FEDERAL":"DF","ESP\xcdRITO SANTO":"ES",GOIÁS:"GO",MARANHÃO:"MA","MATO GROSSO":"MT","MATO GROSSO DO SUL":"MS","MINAS GERAIS":"MG",PARÁ:"PA",PARAÍBA:"PB",PARANÁ:"PR",PERNAMBUCO:"PE",PIAUÍ:"PI","RIO DE JANEIRO":"RJ","RIO GRANDE DO NORTE":"RN","RIO GRANDE DO SUL":"RS",RONDÔNIA:"RO",RORAIMA:"RR","SANTA CATARINA":"SC","S\xc3O PAULO":"SP",SERGIPE:"SE",TOCANTINS:"TO"}}function ej(){return[]}function ez(){return["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"]}function eZ(e){return Object.values(e).sort(Intl.Collator().compare)}function eJ(e,t,a){return i=>"BRASIL"==i?"":e.includes(i)?"mun_uf_nome='"+Object.entries(t).find(e=>e[1]==i)[0]+"'":"mun_geocodsdv="+a.find(e=>e.municipio==i).codigo_sdv}function eq(e){return e`## URL stuff`}function eW(e){return function(t){return e.compressToEncodedURIComponent(JSON.stringify(t))}}function eX(e){return function(t){return JSON.parse(e.decompressFromEncodedURIComponent(t))}}function eY(e,t,a,i){return()=>({principalUrlids:e.value.value.urlids,municipios:t.value,intervalo:a,trilhas:i.value.map(e=>{let t={};return Object.assign(t,e),t.filtros&&(t.filtrosUrlids=t.filtros.value.urlids,delete t.filtros),t})})}function eQ(){return{principalUrlids:"",municipios:[{nome:"RIO DE JANEIRO",cor:"#2F87F5"}],intervalo:[104,469],trilhas:[{i:0,mostra_media_movel:!0,variavel:"PM25",alterar_tempo:null,poluente:"PM25"},{i:2,mostra_media_movel:!1,escala:"absoluto",variavel:"FETAL",alterar_tempo:null,show_filtros:!1,filtrosUrlids:""},{i:3,mostra_media_movel:!1,escala:"absoluto",neonatal:"PRECOCE",variavel:"NEONATAL",alterar_tempo:null,show_filtros:!1,filtrosUrlids:""},{i:4,mostra_media_movel:!1,escala:"absoluto",relparto:"ANTES",variavel:"RELPARTO",alterar_tempo:null,show_filtros:!1,filtrosUrlids:""}]}}function eK(e,t,a,i){let n=new e(window.location.search).get("conf");if(n)return t(n);if(n=a.getItem("conf3")){let l=JSON.parse(n),o=a.getItem("municipios");o&&(l.municipios=JSON.parse(o));let r=a.getItem("intervalo");return r&&(l.intervalo=JSON.parse(r)),l}if(n=a.getItem("municipios")){let s=i;return s.municipios=JSON.parse(n),n=a.getItem("intervalo"),s.intervalo=JSON.parse(n),s}}function e0(){return function(e){var t=document.body.appendChild(document.createElement("textarea"));t.style.position="absolute",t.style.left="-9999px",t.setAttribute("readonly",""),t.value=e,t.select();try{return document.execCommand("copy")}catch(a){return!1}finally{t.parentNode.removeChild(t)}}}function e1(){return"https://ampliasaude.github.io/trilhas5-3.html"}function e2(e,t,a,i,n){return()=>{let l=e`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Copiar link compartilhável</title>
<path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#151472"/>
<path d="M6.045 10C6.045 11.026 6.8095 11.86 7.75 11.86H9.95V13H7.75C6.232 13 5 11.656 5 10C5 8.344 6.232 7 7.75 7H9.95V8.14H7.75C6.8095 8.14 6.045 8.974 6.045 10ZM8.3 9.4H12.7V10.6H8.3V9.4ZM13.25 13H11.05V11.86H13.25C14.1905 11.86 14.955 11.026 14.955 10C14.955 8.974 14.1905 8.14 13.25 8.14H11.05V7H13.25C14.768 7 16 8.344 16 10C16 11.656 14.768 13 13.25 13Z" fill="white"/>
</svg>`;return l.onclick=()=>{n(`${t}?conf=${a(i())}`)},l}}function e5(e){return e`## Poluentes`}function e3(){return{pm25_ugm3:120,so2_ugm3:90,no2_ppb:286,o3_ppb:154,co_ppb:9.9}}function e4(){return e=>.08206*(e+293.15)}function e7(){return{no2_ppb:46.0055,o3_ppb:48,co_ppb:28.01}}function e6(){return{pm25_ugm3:[25,37,50,60],so2_ugm3:[20,30,40,60],no2_ppb:[200,220,240,260],o3_ppb:[100,120,130,140],co_ppb:[9,9,9,9]}}function e8(e,t){return(a,i="TRUE")=>t(a,`
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
 `)}function e9(e,t,a,i){return n=>{n.forEach(n=>{let l=n,o=new Date(Date.UTC(l.ano,l.mes-1,l.dia));for(let r of e)if(o>=new Date(r.inicio)&&o<=new Date(r.termino)){l.semana=+r.semana,l.x=r.inicio;break}switch(1==l.mes&&53==l.semana&&(l.ano-=1,l.mes=12),t){case"no2_ppb":case"o3_ppb":let s=a[t]/i(l.temperatura);l.valor*=s;case"co_ppb":l.valor/=1e3}});let l=[];for(let o of n){let r=l.find(e=>e.x==o.x);r?(r.valor+=o.valor,r.temperatura_c_media+=o.temperatura_c_media,r.cont+=1):l.push({ano:o.ano,semana:o.semana,x:o.x,valor:o.valor||0,temperatura_c_media:o.temperatura_c_media,cont:1})}return l.map(e=>(e.valor/=e.cont,e.temperatura_c_media/=e.cont,delete e.cont,e)).filter(e=>e.semana)}}function te(e){return e`## Mortalidade`}function tt(e,t,a){return async(i,n)=>{let l;return await a.fetchNeoNatal(e.includes(i)?Math.floor(t.find(e=>e.sigla==i).codigo_sdv/1e4):t.find(e=>e.municipio==i).codigo_sdv,n)}}function ta(e,t,a){return async(i,n)=>{let l;return await a.fetchRelParto(e.includes(i)?Math.floor(t.find(e=>e.sigla==i).codigo_sdv/1e4):t.find(e=>e.municipio==i).codigo_sdv,n)}}function ti(e,t){return a=>{let i=e(a[1]);(a=a[0]).forEach(e=>{let a=e;for(let i of(a.data=new Date(a.data),t))if(a.data>=new Date(i.inicio)&&a.data<=new Date(i.termino)){a.x=i.inicio;break}});let n=a,l=[];for(let o of n){let r=l.find(e=>e.x.getTime()==o.x.getTime());r?(r.absoluto[o.neonatal]+=o.total,r.total+=o.total):l.push({x:o.x,absoluto:{PRECOCE:"PRECOCE"==o.neonatal?o.total:0,NEOTOTAL:"NEOTOTAL"==o.neonatal?o.total:0,TARDIO:"TARDIO"==o.neonatal?o.total:0,POS:"POS"==o.neonatal?o.total:0},total:o.total})}return t.filter(e=>!l.map(e=>e.x.getTime()).includes(e.inicio.getTime())).forEach(e=>{l.push({x:e.inicio,absoluto:{PRECOCE:0,TARDIO:0,NEOTOTAL:0,POS:0},total:0})}),(l=l.map(e=>{e.percentual={},e.total?(e.percentual.PRECOCE=100*e.absoluto.PRECOCE/e.total,e.percentual.TARDIO=100*e.absoluto.TARDIO/e.total,e.percentual.NEOTOTAL=100*e.absoluto.NEOTOTAL/e.total,e.percentual.POS=100*e.absoluto.POS/e.total):(e.percentual.PRECOCE=0,e.percentual.TARDIO=0,e.percentual.NEOTOTAL=0,e.percentual.POS=0),e.taxa={};let t=i.find(t=>t.x.getTime()==e.x.getTime());return t?(e.taxa.PRECOCE=1e3*e.absoluto.PRECOCE/t.valor,e.taxa.TARDIO=1e3*e.absoluto.TARDIO/t.valor,e.taxa.NEOTOTAL=1e3*e.absoluto.NEOTOTAL/t.valor,e.taxa.POS=1e3*e.absoluto.POS/t.valor):(e.taxa.PRECOCE=0,e.taxa.TARDIO=0,e.taxa.NEOTOTAL=0,e.taxa.POS=0),e})).sort((e,t)=>e.x.getTime()-t.x.getTime())}}function tn(e,t){return a=>{let i=e(a[1]);(a=a[0]).forEach(e=>{let a=e;for(let i of(a.data=new Date(a.data),t))if(a.data>=new Date(i.inicio)&&a.data<=new Date(i.termino)){a.x=i.inicio;break}});let n=a,l=[];for(let o of n){let r=l.find(e=>e.x.getTime()==o.x.getTime());r?(r.absoluto[o.relparto]+=o.total,r.total+=o.total):l.push({x:o.x,absoluto:{ANTES:"ANTES"==o.relparto?o.total:0,DURANTE:"DURANTE"==o.relparto?o.total:0,DEPOIS:"DEPOIS"==o.relparto?o.total:0},total:o.total})}return t.filter(e=>!l.map(e=>e.x.getTime()).includes(e.inicio.getTime())).forEach(e=>{l.push({x:e.inicio,absoluto:{ANTES:0,DURANTE:0,DEPOIS:0},total:0})}),(l=l.map(e=>{e.percentual={},e.total?(e.percentual.ANTES=100*e.absoluto.ANTES/e.total,e.percentual.DURANTE=100*e.absoluto.DURANTE/e.total,e.percentual.DEPOIS=100*e.absoluto.DEPOIS/e.total):(e.percentual.ANTES=0,e.percentual.DURANTE=0,e.percentual.DEPOIS=0),e.taxa={};let t=i.find(t=>t.x.getTime()==e.x.getTime());return t?(e.taxa.ANTES=1e3*e.absoluto.ANTES/t.valor,e.taxa.DURANTE=1e3*e.absoluto.DURANTE/t.valor,e.taxa.DEPOIS=1e3*e.absoluto.DEPOIS/t.valor):(e.taxa.ANTES=0,e.taxa.DURANTE=0,e.taxa.DEPOIS=0),e})).sort((e,t)=>e.x.getTime()-t.x.getTime())}}function tl(e){return t=>{let a=[];t.forEach(t=>{let i=t;if(i.data=new Date(i.data),!(2011>i.data.getFullYear())){for(let n of e)if(i.data>=new Date(n.inicio)&&i.data<=new Date(n.termino)){i.x=n.inicio;break}a.push(i)}});let i=[];for(let n of a){let l=i.find(e=>e.x.getTime()==n.x.getTime());l?l.valor+=n.valor:i.push({x:n.x,valor:n.valor})}return i.filter(e=>e.x)}}function to(e){return t=>{let a=[];t.forEach(t=>{let i=t;if(i.data=new Date(i.data),!(2011>i.data.getFullYear())){for(let n of e)if(i.data>=new Date(n.inicio)&&i.data<=new Date(n.termino)){i.x=n.inicio;break}a.push(i)}});let i=[];for(let n of a){let l=i.find(e=>e.x.getTime()==n.x.getTime());l?l.valor+=n.valor:i.push({x:n.x,valor:n.valor})}return i.filter(e=>e.x)}}function tr(e,t,a){return async(i,n)=>{let l;return await a.fetchTotal(e.includes(i)?Math.floor(t.find(e=>e.sigla==i).codigo_sdv/1e4):t.find(e=>e.municipio==i).codigo_sdv,n)}}function ts(e,t,a){return async(i,n)=>{let l;return await a.fetchFetal(e.includes(i)?Math.floor(t.find(e=>e.sigla==i).codigo_sdv/1e4):t.find(e=>e.municipio==i).codigo_sdv,n)}}function td(e,t){return a=>{let i=e(a[1]);a=a[0];let n=[];a.forEach(e=>{let a=e;if(a.data=new Date(a.data),!(2011>a.data.getFullYear())){for(let i of t)if(a.data>=new Date(i.inicio)&&a.data<=new Date(i.termino)){a.x=i.inicio;break}n.push(a)}});let l=[];for(let o of n){let r=l.find(e=>e.x.getTime()==o.x.getTime());r?r.absoluto+=o.valor:l.push({x:o.x,absoluto:o.valor})}return(l=l.filter(e=>e.x)).map(e=>{e.percentual={};let t=i.find(t=>t.x.getTime()==e.x.getTime());return t?e.percentual=100*e.absoluto/t.valor:e.percentual=0,e})}}function tc(e,t){return a=>{let i=e(a[1]);a=a[0];let n=[];a.forEach(e=>{let a=e;if(a.data=new Date(a.data),!(2011>a.data.getFullYear())){for(let i of t)if(a.data>=new Date(i.inicio)&&a.data<=new Date(i.termino)){a.x=i.inicio;break}n.push(a)}});let l=[];for(let o of n){let r=l.find(e=>e.x.getTime()==o.x.getTime());r?r.absoluto+=o.valor:l.push({x:o.x,absoluto:o.valor})}return(l=l.filter(e=>e.x)).map(e=>{e.percentual={};let t=i.find(t=>t.x.getTime()==e.x.getTime());return t?e.percentual=100*e.absoluto/t.valor:e.percentual=0,e})}}function tu(e){return e`## Imports`}function tp(e){return e("sortablejs/Sortable.js")}function tm(e){return e("d3@5")}function tf(e,t,a,i,n,l,o){return function(r,s,d=r,c=s,u=e.width,p=60){var m=[r,s+1],f=e.height,v=e.margin,h=u-p-v.right,x=f-v.top-v.bottom,b=t.scaleLinear().domain(m).range([0,h]),g=t.select(a.svg(u,f));let y=g.append("g").attr("transform",`translate(${p}, ${v.top})`);var A=y.append("text").attr("id","labelleft").attr("x",0).attr("y",x+5).style("display",60==p?"inline":"none").text(i[n[m[0]].inicio.getMonth()]+" "+n[m[0]].inicio.getFullYear()),E=y.append("text").attr("id","labelright").attr("x",0).attr("y",x+5).style("display",60==p?"inline":"none").text(i[n[m[1]].termino.getMonth()]+" "+n[m[1]].termino.getFullYear());y.append("text").attr("id","labelleft2").attr("x",-8).attr("y",x-x/2+1).style("alignment-baseline","middle").text(2012),y.append("text").attr("id","labelright2").attr("x",h+8).attr("y",x-x/2+1).style("alignment-baseline","middle").text(2019);var T=t.brushX().extent([[0,0],[h,x]]).on("brush",function(){var e=t.event.selection;A.attr("x",e[0]).text(i[n[Math.round(b.invert(e[0]))].inicio.getMonth()]+" "+n[Math.round(b.invert(e[0]))].inicio.getFullYear()),E.attr("x",e[1]).text(i[n[Math.round(b.invert(e[1]))].termino.getMonth()]+" "+n[Math.round(b.invert(e[1]))].termino.getFullYear()),_.attr("display",null).attr("transform",function(t,a){return"translate("+[e[a],-x/4]+")"}),g.node().value=e.map(e=>Math.round(b.invert(e))),g.node().dispatchEvent(new CustomEvent("input"))}).on("end",function(){if(t.event.sourceEvent){var e=t.event.selection.map(b.invert).map(Math.round);t.select(this).transition().call(t.event.target.move,e.map(b)),l.value=Math.max(Math.min(new Date(l.value),n[g.node().value[1]-2].termino),n[g.node().value[0]].inicio)}}),w=y.append("g").attr("class","brush").call(T),C=function(e){return"M -3 12 A 3 3 0 0 1 3 12 V 18 A 3 3 0 0 1 -3 18 Z"},_=w.selectAll(".handle--custom").data([{type:"w"},{type:"e"}]).enter().append("path").attr("class","handle--custom").attr("stroke","#000").attr("fill","#151472").attr("cursor","ew-resize").attr("y",x/2).attr("d",C);return w.selectAll(".overlay").attr("fill","#E5E5E5").each(function(e){e.type="selection"}).on("mousedown touchstart",function(){var e=b(1)-b(0),t=o.mouse(this)[0],a=t-e/2,i=t+e/2;o.select(this.parentNode).call(T.move,i>h?[h-e,h]:a<0?[0,e]:[a,i])}),w.call(T.move,[d,c+1].map(b)),y.append("g").selectAll("line").data(n.filter(e=>1==e.semana).map(e=>n.findIndex(t=>t==e))).enter().append("line").attr("x1",e=>b(e)).attr("x2",e=>b(e)).attr("y1",0).attr("y2",x).style("stroke","#ccc"),g.node()}}function tv(){return{width:600,height:60,margin:{top:20,bottom:20,left:60,right:60}}}function th(e){return e`
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
`}function tx(e){return e("https://bundle.run/lz-string@1.4.4")}function tb(e){return e`<style>
  @import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap);
  @import url(https://fonts.googleapis.com/icon?family=Material+Icons);    
</style>
`}function tg(e){return e`
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
`}function ty(e,t){let i=e.module();function n(){return this.url}let l=new Map([["semanas_epidemiologicas_estendido.csv",{url:new a.U(a(2221)),mimeType:"text/csv",toString:n}],["municipios2.csv",{url:new a.U(a(582)),mimeType:"text/csv",toString:n}]]);i.builtin("FileAttachment",e.fileAttachments(e=>l.get(e))),i.variable(t()).define(["md"],N),i.variable(t("cabecalho")).define("cabecalho",["html","copyLinkButton"],k),i.define("initial mp",["urlParamConf","ampliaMenu"],S),i.variable(t("mutable mp")).define("mutable mp",["Mutable","initial mp"],(e,t)=>new e(t)),i.variable(t("mp")).define("mp",["mutable mp"],e=>e.generator),i.variable(t("div_controles")).define("div_controles",["html","barra_municipios","viewof intervalo"],R),i.variable(t("vis")).define("vis",["conf_trilhas","funcoesGeradoras","gAdicionaTrilha","Sortable","mutable conf_trilhas","d3"],P),i.variable(t("maxMunicipios")).define("maxMunicipios",D),i.variable(t("viewof intervalo")).define("viewof intervalo",["urlParamConf","slider_snap","defaultConf"],F),i.variable(t("intervalo")).define("intervalo",["Generators","viewof intervalo"],(e,t)=>e.input(t)),i.variable(t("barra_municipios")).define("barra_municipios",["html","sel_municipios","remove_mun_button","maxMunicipios","menu_municipios"],$),i.variable(t("menu_municipios")).define("menu_municipios",["d3","html","municipios","agregacoes","sel_municipios","maxMunicipios","mutable sel_municipios","colors","sessionStorage","conf_trilhas","funcoesFetch","mp","mutable data","funcoesProc","data"],U),i.variable(t("listenerFiltroGlobal")).define("listenerFiltroGlobal",["mutable conf_trilhas","mutable data","mutable sel_municipios","funcoesFetch","funcoesProc"],B),i.variable(t("remove_mun_button")).define("remove_mun_button",["d3","sel_municipios","mutable sel_municipios","sessionStorage","mutable data","data","agregacoes","municipios"],H),i.variable(t("remove_trilha_button")).define("remove_trilha_button",["d3","removeTrilha"],V),i.variable(t("copy_button")).define("copy_button",["d3","copyTrilha"],G),i.variable(t("funcoesGeradoras")).define("funcoesGeradoras",["gPM25","gNEONATAL","gRELPARTO","gFETAL","gTOTAL"],j),i.variable(t("funcoesProc")).define("funcoesProc",["procPM25","procNeoNatal","procTOTAL","procFetal","procRelParto"],z),i.variable(t("funcoesFetch")).define("funcoesFetch",["fetchPM25","fetchNeoNatal","fetchTOTAL","fetchFetal","fetchRelParto"],Z),i.variable(t("corTrilha")).define("corTrilha",J),i.variable(t("corTrilhaFraco")).define("corTrilhaFraco",q),i.variable(t("style")).define("style",["html"],W),i.variable(t("suscetibilidade")).define("suscetibilidade",["sel","d3"],X),i.variable(t("legendTooltip")).define("legendTooltip",["d3","sel_pm25","sel","valoresLista","corTrilhaFraco"],Y),i.variable(t("valoresLista")).define("valoresLista",["sel_pm25","sel","sel_municipios","data","semanas_epidemiologicas","d3","unidades","agregacoes","siglas","bisector"],Q),i.variable(t("mouseDownHandler")).define("mouseDownHandler",["data","bisector","mutable sel_pm25","mutable sel","d3"],K),i.variable(t("gPM25")).define("gPM25",["Plot","width","height","formatTime","conf_trilhas","semanas_epidemiologicas","intervalo","maxScale","indicador","padroes","data","siglas","filterDate","janela","lineWidth","sel_municipios","bisector","sel_pm25","legendTooltip","suscetibilidade","mouseDownHandler","html","corTrilha","d3","removeTrilha","copy_button","checkMediaMovel","checkTempo","inner_slider"],ee),i.variable(t("gFETAL")).define("gFETAL",["sel_municipios","data","gLoadingTrilha","conf_trilhas","mp","Plot","width","height","semanas_epidemiologicas","intervalo","filterDate","janela","lineWidthFiltered","lineWidth","bisector","sel","legendTooltip","mouseDownHandler","html","corTrilha","d3","removeTrilha","copy_button","checkMediaMovel","checkTempo","checkEscala","inner_slider","checkFiltros"],et),i.variable(t("gNEONATAL")).define("gNEONATAL",["sel_municipios","data","gLoadingTrilha","conf_trilhas","mp","Plot","width","height","semanas_epidemiologicas","intervalo","filterDate","janela","lineWidthFiltered","lineWidth","bisector","sel","legendTooltip","mouseDownHandler","html","corTrilha","d3","removeTrilha","copy_button","checkNeoNatal","checkMediaMovel","checkTempo","checkEscala","inner_slider","checkFiltros"],ea),i.variable(t("gRELPARTO")).define("gRELPARTO",["sel_municipios","data","gLoadingTrilha","conf_trilhas","mp","Plot","width","height","semanas_epidemiologicas","intervalo","filterDate","janela","lineWidthFiltered","lineWidth","bisector","sel","legendTooltip","mouseDownHandler","html","corTrilha","d3","removeTrilha","copy_button","checkRelParto","checkMediaMovel","checkTempo","checkEscala","inner_slider","checkFiltros"],ei),i.variable(t("gTOTAL")).define("gTOTAL",["sel_municipios","data","gLoadingTrilha","conf_trilhas","mp","Plot","width","height","semanas_epidemiologicas","intervalo","filterDate","janela","lineWidthFiltered","lineWidth","bisector","sel","legendTooltip","mouseDownHandler","html","corTrilha","d3","removeTrilha","copy_button","checkMediaMovel","checkTempo","checkEscala","inner_slider","checkFiltros"],en),i.variable(t("gAdicionaTrilha")).define("gAdicionaTrilha",["html","d3","removeTrilha","copyTrilha","width","addTrilha"],el),i.variable(t("gLoadingTrilha")).define("gLoadingTrilha",["html","d3","removeTrilha","copyTrilha","width"],eo),i.variable(t("copyTrilha")).define("copyTrilha",["conf_trilhas","d3","listenerFiltro","mutable conf_trilhas","data","mutable data"],er),i.variable(t("removeTrilha")).define("removeTrilha",["mutable conf_trilhas","conf_trilhas","mutable data","data"],es),i.variable(t("addTrilha")).define("addTrilha",["d3","conf_trilhas","mutable conf_trilhas","sel_municipios","fetchPM25","mutable data","procPM25","ampliaMenu","corTrilha","listenerFiltro","fetchNeoNatal","procNeoNatal","fetchRelParto","procRelParto","fetchFetal","procFetal","fetchTOTAL","procTOTAL"],ed),i.variable(t("inner_slider")).define("inner_slider",["conf_trilhas","slider_snap","width","mutable conf_trilhas"],ec),i.variable(t("checkPoluente")).define("checkPoluente",["conf_trilhas","mutable conf_trilhas"],eu),i.variable(t("checkFiltros")).define("checkFiltros",["conf_trilhas","mutable data","ampliaMenu","mp","corTrilha","listenerFiltro","mutable sel_municipios","funcoesFetch","funcoesProc","mutable conf_trilhas"],ep),i.variable(t("checkTempo")).define("checkTempo",["conf_trilhas","intervalo","mutable conf_trilhas"],em),i.variable(t("checkNeoNatal")).define("checkNeoNatal",["conf_trilhas","mutable conf_trilhas"],ef),i.variable(t("checkRelParto")).define("checkRelParto",["conf_trilhas","mutable conf_trilhas"],ev),i.variable(t("checkEscala")).define("checkEscala",["conf_trilhas","mutable conf_trilhas"],eh),i.variable(t("checkMediaMovel")).define("checkMediaMovel",["conf_trilhas","mutable conf_trilhas"],ex),i.variable(t("converteIntervalo")).define("converteIntervalo",["semanas_epidemiologicas"],eb),i.define("initial conf_trilhas",["urlParamConf","ampliaMenu","corTrilha"],eg),i.variable(t("mutable conf_trilhas")).define("mutable conf_trilhas",["Mutable","initial conf_trilhas"],(e,t)=>new e(t)),i.variable(t("conf_trilhas")).define("conf_trilhas",["mutable conf_trilhas"],e=>e.generator),i.variable(t("unidades")).define("unidades",ey),i.variable(t("lineWidth")).define("lineWidth",eA),i.variable(t("lineWidthFiltered")).define("lineWidthFiltered",eE),i.define("initial firstload",eT),i.variable(t("mutable firstload")).define("mutable firstload",["Mutable","initial firstload"],(e,t)=>new e(t)),i.variable(t("firstload")).define("firstload",["mutable firstload"],e=>e.generator),i.define("initial municipiosDefault",["urlParamConf","defaultConf"],ew),i.variable(t("mutable municipiosDefault")).define("mutable municipiosDefault",["Mutable","initial municipiosDefault"],(e,t)=>new e(t)),i.variable(t("municipiosDefault")).define("municipiosDefault",["mutable municipiosDefault"],e=>e.generator),i.variable(t("onfirstload")).define("onfirstload",["firstload","mutable municipiosDefault","mutable sel_municipios","conf_trilhas","funcoesFetch","mp","mutable data","funcoesProc","listenerFiltro","listenerFiltroGlobal","sessionStorage","getCurrentConf","viewof intervalo","mutable firstload"],eC),i.variable(t("listenerFiltro")).define("listenerFiltro",["mutable data","mutable sel_municipios","funcoesFetch","funcoesProc"],e_),i.variable(t("viewof janela")).define("viewof janela",["Inputs"],eO),i.variable(t("janela")).define("janela",["Generators","viewof janela"],(e,t)=>e.input(t)),i.variable(t("viewof indicador")).define("viewof indicador",["Inputs"],eI),i.variable(t("indicador")).define("indicador",["Generators","viewof indicador"],(e,t)=>e.input(t)),i.variable(t("colors")).define("colors",eL),i.define("initial sel_municipios",eM),i.variable(t("mutable sel_municipios")).define("mutable sel_municipios",["Mutable","initial sel_municipios"],(e,t)=>new e(t)),i.variable(t("sel_municipios")).define("sel_municipios",["mutable sel_municipios"],e=>e.generator),i.define("initial sel",["semanas_epidemiologicas","d3","urlParamConf","defaultConf"],eN),i.variable(t("mutable sel")).define("mutable sel",["Mutable","initial sel"],(e,t)=>new e(t)),i.variable(t("sel")).define("sel",["mutable sel"],e=>e.generator),i.define("initial sel_pm25",["sel"],ek),i.variable(t("mutable sel_pm25")).define("mutable sel_pm25",["Mutable","initial sel_pm25"],(e,t)=>new e(t)),i.variable(t("sel_pm25")).define("sel_pm25",["mutable sel_pm25"],e=>e.generator),i.variable(t("bisector")).define("bisector",["d3"],eS),i.variable(t("formatTime")).define("formatTime",["d3"],eR),i.variable(t("periodoInicio")).define("periodoInicio",["intervalo"],eP),i.variable(t("periodoFim")).define("periodoFim",["intervalo"],eD),i.variable(t("filterDate")).define("filterDate",["conf_trilhas","janela","semanas_epidemiologicas","periodoInicio","periodoFim"],eF),i.variable(t("height")).define("height",e$),i.variable(t("sqlSisam")).define("sqlSisam",["municipios","SQLiteDatabaseClient"],eU),i.variable(t("style2")).define("style2",["html"],eB),i.variable(t("municipios")).define("municipios",["FileAttachment"],eH),i.variable(t("semanas_epidemiologicas")).define("semanas_epidemiologicas",["FileAttachment"],eV),i.variable(t("siglas")).define("siglas",eG),i.define("initial data",ej),i.variable(t("mutable data")).define("mutable data",["Mutable","initial data"],(e,t)=>new e(t)),i.variable(t("data")).define("data",["mutable data"],e=>e.generator),i.variable(t("months")).define("months",ez),i.variable(t("agregacoes")).define("agregacoes",["siglas"],eZ),i.variable(t("queryLocalSISAM")).define("queryLocalSISAM",["agregacoes","siglas","municipios"],eJ),i.variable(t()).define(["md"],eq),i.variable(t("objToUrlParam")).define("objToUrlParam",["lz"],eW),i.variable(t("urlParamToObj")).define("urlParamToObj",["lz"],eX),i.variable(t("getCurrentConf")).define("getCurrentConf",["mutable mp","mutable sel_municipios","intervalo","mutable conf_trilhas"],eY),i.variable(t("defaultConf")).define("defaultConf",eQ),i.variable(t("urlParamConf")).define("urlParamConf",["URLSearchParams","urlParamToObj","sessionStorage","defaultConf"],eK),i.variable(t("copyToClipboard")).define("copyToClipboard",e0),i.variable(t("currentHref")).define("currentHref",e1),i.variable(t("copyLinkButton")).define("copyLinkButton",["svg","currentHref","objToUrlParam","getCurrentConf","copyToClipboard"],e2),i.variable(t()).define(["md"],e5),i.variable(t("maxScale")).define("maxScale",e3),i.variable(t("volume_mol")).define("volume_mol",e4),i.variable(t("massa_mol")).define("massa_mol",e7),i.variable(t("padroes")).define("padroes",e6),i.variable(t("fetchPM25")).define("fetchPM25",["indicador","sqlSisam"],e8),i.variable(t("procPM25")).define("procPM25",["semanas_epidemiologicas","indicador","massa_mol","volume_mol"],e9),i.variable(t()).define(["md"],te),i.variable(t("fetchNeoNatal")).define("fetchNeoNatal",["agregacoes","municipios","datasource_sim"],tt),i.variable(t("fetchRelParto")).define("fetchRelParto",["agregacoes","municipios","datasource_sim"],ta),i.variable(t("procNeoNatal")).define("procNeoNatal",["procTOTALUnfiltered","semanas_epidemiologicas"],ti),i.variable(t("procRelParto")).define("procRelParto",["procTOTALUnfiltered","semanas_epidemiologicas"],tn),i.variable(t("procTOTALUnfiltered")).define("procTOTALUnfiltered",["semanas_epidemiologicas"],tl),i.variable(t("procFetalUnfiltered")).define("procFetalUnfiltered",["semanas_epidemiologicas"],to),i.variable(t("fetchTOTAL")).define("fetchTOTAL",["agregacoes","municipios","datasource_sim"],tr),i.variable(t("fetchFetal")).define("fetchFetal",["agregacoes","municipios","datasource_sim"],ts),i.variable(t("procTOTAL")).define("procTOTAL",["procTOTALUnfiltered","semanas_epidemiologicas"],td),i.variable(t("procFetal")).define("procFetal",["procFetalUnfiltered","semanas_epidemiologicas"],tc),i.variable(t()).define(["md"],tu),i.variable(t("Sortable")).define("Sortable",["require"],tp),i.variable(t("d3_5")).define("d3_5",["require"],tm),i.variable(t("slider_snap")).define("slider_snap",["layout","d3_5","DOM","months","semanas_epidemiologicas","mutable sel","d3"],tf),i.variable(t("layout")).define("layout",tv),i.variable(t("style_slider")).define("style_slider",["html"],th);let o=e.module(M);return i.import("menuMortalidade","ampliaMenu",o),i.import("datasource_sim",o),i.variable(t("lz")).define("lz",["require"],tx),i.variable(t("style_menu")).define("style_menu",["html"],tb),i.variable(t("styleMenuMun")).define("styleMenuMun",["html"],tg),i}a.d(t,{Z:function(){return ty}})}}]);