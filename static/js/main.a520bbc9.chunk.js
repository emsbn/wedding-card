(this["webpackJsonpwedding-card"]=this["webpackJsonpwedding-card"]||[]).push([[0],{15:function(t,e,n){},36:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var r,c,i,s,a,l,o,j,d,h,u=n(1),b=n.n(u),f=n(7),O=n.n(f),x=(n(15),n(5)),p=n(8),v=(n(36),n(2)),y=n(3),g=y.a.header(r||(r=Object(v.a)(["\n  position: fixed;\n  max-width: 600px;\n  width: 100%;\n  height: 3rem;\n  top: 0;\n  z-index: 999;\n  background: red;\n"]))),m=n(0),w=function(){return Object(m.jsx)(g,{children:"test"})},k=y.a.div(c||(c=Object(v.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  height: 5000px;\n  flex-flow: column;\n  position: relative;\n"]))),z=y.a.div(i||(i=Object(v.a)(["\n  position: sticky;\n  top: 0;\n  max-width: 600px;\n  width: 100%;\n  height: 100vh;\n  perspective: 1000px;\n  perspective-origin: center center;\n  overflow: hidden;\n"]))),Z=y.a.div(s||(s=Object(v.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  transform-style: preserve-3d;\n  transform: translateZ(0vw);\n"]))),S=y.a.div(a||(a=Object(v.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  background: blueviolet;\n  transition: opacity 0.35s;\n\n  &:nth-of-type(1) {\n    transform: translateZ(0vw);\n  }\n  &:nth-of-type(2) {\n    transform: translateZ(-300vw);\n  }\n  &:nth-of-type(3) {\n    transform: translateZ(-600vw);\n  }\n  &:nth-of-type(4) {\n    transform: translateZ(-900vw);\n  }\n  &:nth-of-type(5) {\n    transform: translateZ(-1200vw);\n  }\n  //&:nth-of-type(6) {\n  //  transform: translateZ(-2500vw);\n  //}\n"]))),F=y.a.div(l||(l=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  color: #333;\n  font-size: 5em;\n"]))),C=y.a.img(o||(o=Object(v.a)(["\n  height: 55%;\n  max-width: 100%;\n  object-fit: cover;\n"]))),V=y.a.p(j||(j=Object(v.a)(["\n  margin: 1rem 0;\n  font-size: 1.75rem;\n"]))),_=function(t){var e=t.zValue,n=Object(u.useRef)(null),r=Array(6).fill(void 0).map((function(){return Object(u.useRef)(null)}));return Object(u.useEffect)((function(){n.current&&(n.current.style.transform="translateZ(".concat(e,"vw)")),e>25?r[0].current&&(r[0].current.style.opacity="0"):r[0].current&&(r[0].current.style.opacity="1"),e>325?r[1].current&&(r[1].current.style.opacity="0"):r[1].current&&(r[1].current.style.opacity="1"),e>625?r[2].current&&(r[2].current.style.opacity="0"):r[2].current&&(r[2].current.style.opacity="1"),e>925?r[3].current&&(r[3].current.style.opacity="0"):r[3].current&&(r[3].current.style.opacity="1"),e>1225?r[4].current&&(r[4].current.style.opacity="0"):r[4].current&&(r[4].current.style.opacity="1")}),[e,n,r]),Object(m.jsx)(z,{children:Object(m.jsxs)(Z,{ref:n,className:"Frame3D",children:[Object(m.jsx)(S,{ref:r[0],children:Object(m.jsxs)(F,{children:[Object(m.jsx)(C,{src:"images/story/test.jpg",alt:"test"}),Object(m.jsx)(V,{children:"9\uc6d4\uc758 \uc5b4\ub290 \uc544\ub984\ub2e4\uc6b4 \ub0a0"})]})}),Object(m.jsx)(S,{ref:r[1],children:Object(m.jsxs)(F,{children:[Object(m.jsx)(C,{src:"images/story/test_1.jpg",alt:"test"}),Object(m.jsx)(V,{children:"\uc0b4\uc544\uc628 \ud658\uacbd, \uc88b\uc544\ud558\ub294 \uac83\ub3c4 \ub2e4\ub978 \uc800\ud76c\uac00"})]})}),Object(m.jsx)(S,{ref:r[2],children:Object(m.jsxs)(F,{children:[Object(m.jsx)(C,{src:"images/story/test_2.png",alt:"test"}),Object(m.jsx)(V,{children:"\uc774\uc81c \uc11c\ub85c\ub97c \ub2ee\uc544 \uac00\ub824 \ud569\ub2c8\ub2e4."})]})}),Object(m.jsx)(S,{ref:r[3],children:Object(m.jsxs)(F,{children:[Object(m.jsx)(C,{src:"images/story/test_3.jpg",alt:"test"}),Object(m.jsx)(V,{children:"\ud63c\uc790\uac00 \uc544\ub2cc \uc6b0\ub9ac\ub85c\uc11c \ud589\ubcf5\ud558\uac8c \uc798 \uc0b4\uaca0\uc2b5\ub2c8\ub2e4."})]})}),Object(m.jsx)(S,{ref:r[4],children:Object(m.jsxs)(F,{children:[Object(m.jsx)(C,{src:"images/story/test_4.jpg",alt:"test"}),Object(m.jsx)(V,{children:"9\uc6d4 \uc18c\uc911\ud55c \uc57d\uc18d\uc758 \ub0a0\uc744 \ucd95\ubcf5\ud574\uc8fc\uc2ed\uc2dc\uc624."})]})})]})})},E=y.a.div(d||(d=Object(v.a)(["\n  display: block;\n  position: absolute;\n  bottom: 2rem;\n  z-index: -2;\n  height: calc(100vh - 5rem);\n  width: 100%;\n  background: pink;\n"]))),R=function(){return Object(m.jsxs)(E,{children:["\ucd08\ub300\ud569\ub2c8\ub2e4",Object(m.jsx)("div",{children:"\ub300\ucda9 \uc0ac\uc9c4"}),Object(m.jsx)("div",{children:"\ub300\ucda9 \ub2ec\ub825"}),Object(m.jsx)("div",{children:"\ub300\ucda9 \uc9c0\ub3c4"}),Object(m.jsx)("div",{children:"\ub300\ucda9 \ub0a0\uc9dc"}),Object(m.jsx)("div",{children:"\ub300\ucda9 \uc5f0\ub77d\ucc98"}),Object(m.jsx)("div",{children:"\ub300\ucda9 \ub9c8\uc74c\uc804\ud558\uae30"})]})},T=function(t){var e=t.zValue;return Object(m.jsxs)(k,{children:[Object(m.jsx)(_,{zValue:e}),Object(m.jsx)(R,{})]})},A=y.a.div(h||(h=Object(v.a)(["\n  max-width: 600px;\n  width: 100%;\n  height: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  bottom: 0;\n  background: violet;\n"]))),B=function(){return Object(m.jsx)(A,{children:"\uc218\ube48 \u2764 \ucc44\uc740 all rights reserved"})};var D=function(){var t=Object(u.useState)(0),e=Object(x.a)(t,2),n=e[0],r=e[1],c=Object(u.useState)(0),i=Object(x.a)(c,2),s=i[0],a=i[1],l=Object(u.useRef)(null);Object(u.useEffect)((function(){(null===l||void 0===l?void 0:l.current)&&a(l.current.getScrollHeight()-(null===l||void 0===l?void 0:l.current.getClientHeight()))}),[l,s]);var o=Object(u.useCallback)((function(t){r(t.scrollTop/s*1500)}),[s,l,n]);return Object(m.jsx)(p.Scrollbars,{ref:l,onScrollFrame:o,style:{height:"100vh"},children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(w,{}),Object(m.jsx)(T,{zValue:n}),Object(m.jsx)(B,{})]})})},H=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),r(t),c(t),i(t),s(t)}))};O.a.render(Object(m.jsx)(b.a.StrictMode,{children:Object(m.jsx)(D,{})}),document.getElementById("root")),H()}},[[41,1,2]]]);
//# sourceMappingURL=main.a520bbc9.chunk.js.map