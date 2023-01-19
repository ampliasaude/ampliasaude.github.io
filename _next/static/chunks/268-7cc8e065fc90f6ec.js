"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[268],{3273:function(n){n.exports={i18n:{defaultLocale:"pt",locales:["en","pt"]}}},4268:function(n,e,t){t.d(e,{Z:function(){return na}});var i=t(7297),r=t(5893),o=t(7991),a=t(7294),c=t(9521),s=t(1163),l=t(3273),d=t.n(l),u=t(4939),f=function(n){var e=n.isFooter,t=n.mode,i=(0,o.$G)("header").t,a="light"===(void 0===t?"light":t)?"/assets/logo.png":"/assets/logo-dark.png";return e?(0,r.jsx)("picture",{children:(0,r.jsx)("img",{alt:i("logoAlt"),height:65,src:a,width:210})}):(0,r.jsx)("picture",{children:(0,r.jsx)("img",{alt:i("logoAlt"),height:45,src:a,width:146})})},h=t(3507);function p(){var n=(0,i.Z)(["\n        font-size: 0.75rem;\n\n        ul {\n          margin: 0 3.5em 0 0;\n\n          li {\n            display: inline;\n\n            &:not(:last-of-type) {\n              margin-right: 1.5em;\n            }\n          }\n        }\n      "]);return p=function(){return n},n}function m(){var n=(0,i.Z)(["\n  color: ",";\n\n  ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    text-align: ",";\n    text-transform: uppercase;\n\n    li {\n      margin-bottom: 1em;\n    }\n  }\n\n  /* Responsiveness applies only to header */\n  @media (min-width: 768px) {\n    ","\n  }\n"]);return m=function(){return n},n}var g=c.ZP.nav.withConfig({componentId:"sc-351b5bb0-0"})(m(),function(n){return"dark"===n.mode?"var(--white)":"var(--blue)"},function(n){return n.isFooter?"left":"right"},function(n){return!n.isFooter&&(0,c.iv)(p())}),x=function(n){var e=n.closeMenu,t=n.menuItems,i=n.isFooter,o=n.mode;return(0,r.jsx)(g,{mode:o,isFooter:i,children:(0,r.jsx)("ul",{children:t.map(function(n){return(0,r.jsx)("li",{onClick:function(){return e&&e()},children:(0,r.jsx)(h.Z,{href:n.path,children:n.label})},n.path)})})})};function v(){var n=(0,i.Z)(["\n  display: flex;\n  height: 30px;\n  list-style: none;\n  padding: 0;\n\n  li {\n    align-items: center;\n    display: flex;\n\n    &:not(:last-of-type) {\n      margin-right: 1em;\n    }\n\n    img {\n      object-fit: contain;\n    }\n  }\n"]);return v=function(){return n},n}var j=c.ZP.ul.withConfig({componentId:"sc-2157d67c-0"})(v()),Z=function(){var n=(0,(0,o.$G)(["common"]).t)("socialMedia",{returnObjects:!0});return(0,r.jsx)(j,{children:n.length&&n.map(function(n){return(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:n.path,target:"_blank",rel:"noreferrer noopener",children:(0,r.jsx)("picture",{children:(0,r.jsx)("img",{alt:n.alt,height:30,src:"/assets/".concat(n.icon,".svg"),width:30})})})},n.path)})})};function w(){var n=(0,i.Z)(["\n      background: var(--gray);\n    "]);return w=function(){return n},n}function C(){var n=(0,i.Z)(["\n  background: var(--blue-dark);\n  color: var(--white);\n  padding: 30px 0;\n\n  // Dark mode\n  ","\n"]);return C=function(){return n},n}function b(){var n=(0,i.Z)(["\n  @media (min-width: 768px) {\n    align-items: top;\n    display: flex;\n    justify-content: space-between;\n  }\n"]);return b=function(){return n},n}function y(){var n=(0,i.Z)(["\n  flex: 250px 0 0;\n  order: 2;\n\n  & > * {\n    margin-bottom: 2em !important;\n  }\n"]);return y=function(){return n},n}function k(){var n=(0,i.Z)(["\n  flex: auto;\n  order: 1;\n\n  img {\n    max-width: 350px;\n    width: 100%;\n  }\n"]);return k=function(){return n},n}var I=c.ZP.footer.withConfig({componentId:"sc-9339f433-0"})(C(),function(n){return"dark"===n.mode&&(0,c.iv)(w())}),P=(0,c.ZP)(u.i).withConfig({componentId:"sc-9339f433-1"})(b()),M=c.ZP.div.withConfig({componentId:"sc-9339f433-2"})(y()),O=c.ZP.div.withConfig({componentId:"sc-9339f433-3"})(k()),F=function(n){var e=n.mode,t=(0,s.useRouter)(),i=(0,o.$G)("common").t,a=i("email");t.query.locale||d().i18n.defaultLocale;var c=i("menuItems",{returnObjects:!0});return(0,r.jsx)(I,{mode:void 0===e?"light":e,children:(0,r.jsxs)(P,{children:[(0,r.jsxs)(M,{children:[(0,r.jsx)(f,{isFooter:!0,mode:"dark"}),(0,r.jsx)(x,{isFooter:!0,menuItems:c,mode:"dark"}),(0,r.jsx)("a",{href:"mailTo:".concat(a),style:{display:"block"},children:a}),(0,r.jsx)(Z,{})]}),(0,r.jsx)(O,{children:(0,r.jsx)("picture",{children:(0,r.jsx)("img",{alt:"",src:"/assets/credits.png"})})})]})})},H=t(9008),L=t.n(H);function V(){var n=(0,i.Z)(["\n  align-items: center;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  margin-left: auto;\n  padding: 10px;\n  transform: translateX(10px);\n\n  @media (min-width: 1200px) {\n    display: none;\n    visibility: hidden;\n  }\n"]);return V=function(){return n},n}var _=c.ZP.button.withConfig({componentId:"sc-e0e0c859-0"})(V()),q=function(n){var e=n.mode,t=n.toggleMenu;return(0,r.jsx)(_,{onClick:t,children:(0,r.jsx)("svg",{width:"36",height:"25",viewBox:"0 0 36 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M34.25 20H1.75C1.41848 20 1.10054 20.1317 0.866117 20.3661C0.631696 20.6005 0.5 20.9185 0.5 21.25V23.75C0.5 24.0815 0.631696 24.3995 0.866117 24.6339C1.10054 24.8683 1.41848 25 1.75 25H34.25C34.5815 25 34.8995 24.8683 35.1339 24.6339C35.3683 24.3995 35.5 24.0815 35.5 23.75V21.25C35.5 20.9185 35.3683 20.6005 35.1339 20.3661C34.8995 20.1317 34.5815 20 34.25 20ZM34.25 10H1.75C1.41848 10 1.10054 10.1317 0.866117 10.3661C0.631696 10.6005 0.5 10.9185 0.5 11.25V13.75C0.5 14.0815 0.631696 14.3995 0.866117 14.6339C1.10054 14.8683 1.41848 15 1.75 15H34.25C34.5815 15 34.8995 14.8683 35.1339 14.6339C35.3683 14.3995 35.5 14.0815 35.5 13.75V11.25C35.5 10.9185 35.3683 10.6005 35.1339 10.3661C34.8995 10.1317 34.5815 10 34.25 10ZM34.25 0H1.75C1.41848 0 1.10054 0.131697 0.866117 0.366117C0.631696 0.600538 0.5 0.918479 0.5 1.25V3.75C0.5 4.08152 0.631696 4.39946 0.866117 4.63388C1.10054 4.8683 1.41848 5 1.75 5H34.25C34.5815 5 34.8995 4.8683 35.1339 4.63388C35.3683 4.39946 35.5 4.08152 35.5 3.75V1.25C35.5 0.918479 35.3683 0.600538 35.1339 0.366117C34.8995 0.131697 34.5815 0 34.25 0Z",fill:"dark"===e?"var(--white)":"var(--blue)"})})})},G=t(9534),R=t(4328),$=t(1664),z=t.n($);function E(){var n=(0,i.Z)(["\n  display: inline;\n"]);return E=function(){return n},n}var T=c.ZP.a.withConfig({componentId:"sc-e6060c94-0"})(E()),W=function(n){var e=n.isCurrent,t=n.locale,i=(0,G.Z)(n,["isCurrent","locale"]),o=(0,s.useRouter)(),a=i.href||o.asPath,c=o.pathname;return Object.keys(o.query).forEach(function(n){if("locale"===n){c=c.replace("[".concat(n,"]"),t);return}c=c.replace("[".concat(n,"]"),o.query[n])}),t&&(a=i.href?"/".concat(t).concat(i.href):c),(0,r.jsx)(z(),{href:a,children:(0,r.jsx)(T,{as:e?"span":"a",href:a,onClick:function(){return!e&&(null===R.Z||void 0===R.Z?void 0:R.Z.cache)&&R.Z.cache(t)},children:t})})};function A(){var n=(0,i.Z)(['\n  list-style: none;\n  padding: 0;\n  text-align: right;\n  text-transform: uppercase;\n\n  li {\n    display: inline;\n\n    &:not(:last-of-type):after {\n      content: " | ";\n    }\n\n    span {\n      opacity: 0.5;\n    }\n  }\n\n  @media (min-width: 768px) {\n    display: inline-block;\n    font-size: 0.75rem;\n  }\n']);return A=function(){return n},n}var D=c.ZP.ul.withConfig({componentId:"sc-8d12a6e6-0"})(A()),N=function(){var n=(0,s.useRouter)().query.locale||d().i18n.defaultLocale;return(0,r.jsx)(D,{children:d().i18n.locales.map(function(e){return(0,r.jsx)("li",{children:(0,r.jsx)(W,{isCurrent:e===n,locale:e},e)},e)})})};function S(){var n=(0,i.Z)(["\n      background: var(--gray);\n      color: var(--white);\n    "]);return S=function(){return n},n}function B(){var n=(0,i.Z)(["\n  background: var(--white);\n  color: var(--black);\n  left: 0;\n  max-height: ",";\n  overflow: hidden;\n  padding: var(--padding-header);\n  position: fixed;\n  top: 0;\n  transition: max-height 300ms ease;\n  width: 100%;\n  z-index: 9;\n\n  // Dark mode\n  ","\n\n  a {\n    text-decoration: none;\n  }\n"]);return B=function(){return n},n}function X(){var n=(0,i.Z)(["\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n"]);return X=function(){return n},n}function J(){var n=(0,i.Z)(["\n  margin: 0;\n  a {\n    display: block;\n  }\n"]);return J=function(){return n},n}function K(){var n=(0,i.Z)(["\n  flex: 100% 0 0;\n  margin: 10px 0;\n  visibility: ",";\n  transition: visibility 0s;\n  transition-delay: ",";\n\n  @media (min-width: 1200px) {\n    align-items: center;\n    display: flex;\n    justify-content: flex-end;\n    flex: auto;\n    visibility: visible;\n  }\n"]);return K=function(){return n},n}function Q(){var n=(0,i.Z)(["\n  display: none;\n\n  @media (min-width: 500px) {\n    display: block;\n    color: var(--blue);\n    display: inline;\n    font: var(--title-font);\n    font-size: 0.875rem;\n    font-weight: 400;\n    margin: 0 0 0 1rem;\n  }\n"]);return Q=function(){return n},n}var U=c.ZP.div.withConfig({componentId:"sc-d668b000-0"})(B(),function(n){return n.isMenuOpen?"80vh":"65px"},function(n){return"dark"===n.mode&&(0,c.iv)(S())}),Y=c.ZP.div.withConfig({componentId:"sc-d668b000-1"})(X()),nn=c.ZP.h1.withConfig({componentId:"sc-d668b000-2"})(J()),ne=c.ZP.div.withConfig({componentId:"sc-d668b000-3"})(K(),function(n){return n.isMenuOpen?"visible":"hidden"},function(n){return n.isMenuOpen?"0s":"300ms"}),nt=c.ZP.p.withConfig({componentId:"sc-d668b000-4"})(Q()),ni=function(n){var e=n.mode,t=void 0===e?"light":e,i=n.title,c=n.tool,s=(0,o.$G)("common").t,l=s("description"),d=s("url")+"/assets/share.png",p=(0,a.useState)(!1),m=p[0],g=p[1],v=function(){return g(!m)},j=function(){return g(!1)},Z=s("menuItems",{returnObjects:!0});return(0,r.jsxs)(U,{mode:t,isMenuOpen:m,children:[(0,r.jsxs)(L(),{children:[(0,r.jsx)("title",{children:i}),(0,r.jsx)("meta",{name:"description",content:l}),(0,r.jsx)("meta",{property:"og:site_name",content:i}),(0,r.jsx)("meta",{property:"og:description",content:l}),(0,r.jsx)("meta",{property:"og:image",content:d}),(0,r.jsx)("meta",{property:"og:image:height",content:"675"}),(0,r.jsx)("meta",{property:"og:image:type",content:"image/jpeg"}),(0,r.jsx)("meta",{property:"og:image:width",content:"1200"})]}),(0,r.jsx)(u.Z,{children:(0,r.jsxs)(Y,{children:[(0,r.jsx)(nn,{children:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(h.Z,{href:"/",children:(0,r.jsx)(f,{mode:t})})})}),void 0!==c&&c&&(0,r.jsxs)(nt,{children:[(0,r.jsx)("strong",{children:"Trilhas Explorat\xf3rias"}),(0,r.jsx)("br",{}),"dados de gesta\xe7\xf5es \xfanicas"]}),(0,r.jsx)(q,{mode:t,toggleMenu:v}),(0,r.jsxs)(ne,{isMenuOpen:m,children:[(0,r.jsx)(x,{closeMenu:j,menuItems:Z,mode:t}),(0,r.jsx)(N,{})]})]})})]})};function nr(){var n=(0,i.Z)(["\n  min-height: 100vh;\n  padding-top: 65px;\n"]);return nr=function(){return n},n}var no=c.ZP.main.withConfig({componentId:"sc-bdbd463-0"})(nr()),na=function(n){var e=n.children,t=n.mode,i=void 0===t?"light":t,a=n.tool,c=n.title,s=(0,o.$G)("common").t,l=c||s("siteTitle");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ni,{title:l,tool:void 0!==a&&a,mode:i}),(0,r.jsx)(no,{children:e}),(0,r.jsx)(F,{mode:i})]})}},4939:function(n,e,t){t.d(e,{i:function(){return c}});var i=t(7297),r=t(5893);t(7294);var o=t(9521);function a(){var n=(0,i.Z)(["\n  max-width: ",";\n  margin: 0 auto;\n  padding: 0 var(--padding-page);\n"]);return a=function(){return n},n}var c=o.ZP.div.withConfig({componentId:"sc-4990b891-0"})(a(),function(n){var e=n.maxWidth;return e?"calc(".concat(e,"px + var(--padding-page) * 2)"):"calc(var(--max-width) + var(--padding-page) * 2)"}),s=function(n){var e=n.children,t=n.maxWidth;return(0,r.jsx)(c,{maxWidth:t,children:e})};e.Z=s},3507:function(n,e,t){var i=t(1799),r=t(9396),o=t(9534),a=t(5893);t(7294);var c=t(1163),s=t(1664),l=t.n(s),d=function(n){var e=n.children,t=n.skipLocaleHandling,s=(0,o.Z)(n,["children","skipLocaleHandling"]),d=(0,c.useRouter)(),u=s.locale||d.query.locale||"",f=s.href||d.asPath;return 0===f.indexOf("http")&&(t=!0),u&&!t&&(f=f?"/".concat(u).concat(f):d.pathname.replace("[locale]",String(u))),(0,a.jsx)(l(),{href:f,children:(0,a.jsx)("a",(0,r.Z)((0,i.Z)({},s),{children:e}))})};e.Z=d},4328:function(n,e,t){var i=t(9515),r=t(3273),o=t.n(r);e.Z=(0,i.Z)({supportedLngs:o().i18n.locales,fallbackLng:o().i18n.defaultLocale})}}]);