(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a(5),s=a.n(r),o=a(2),n=a(0),l=function(e){var t=e.title,a=e.activeClass,c=e._callback;return Object(n.jsx)("div",{children:Object(n.jsx)("button",{className:a,disabled:"redb"===a,onClick:c,children:t})})},i=a(6),j=a(3),b=a(7),d=a.p+"static/media/public_bell.65997859.mp3",u=Object(c.createContext)(),h=localStorage.getItem("timers");null!==h&&(h=JSON.parse(h),console.log("local storage timerobj"+h));var O=function(e){var t=Object(b.a)(d),a=Object(o.a)(t,1)[0];null!==(h=localStorage.getItem("timers"))&&(h=JSON.parse(h),console.log("local storage timerobj"+h));var r=0;if(null!==h)switch(h.active){case"work":r=h.work;break;case"short":r=h.short;break;case"long":r=h.long;break;default:r=0}var s=Object(c.useState)(void 0===r?0:r),l=Object(o.a)(s,2),i=l[0],O=l[1],m=Object(c.useState)({}),k=Object(o.a)(m,2),g=k[0],v=k[1],x=Object(c.useState)(!1),p=Object(o.a)(x,2),f=p[0],N=p[1],S=Object(c.useState)(localStorage.getItem("shorts")&&parseFloat(localStorage.getItem("shorts"))||0),w=Object(o.a)(S,2),C=w[0],I=w[1],T=Object(c.useState)(localStorage.getItem("longs")&&parseFloat(localStorage.getItem("longs"))||0),_=Object(o.a)(T,2),F=_[0],E=_[1];Object(c.useEffect)((function(){localStorage.setItem("shorts",C),localStorage.setItem("longs",F)}),[C,F,g]);var y=function(e){v(e),B(e)},B=function(e){switch(e.active){case"work":O(e.work);break;case"short":O(e.short);break;case"long":O(e.long);break;default:O(0)}};return Object(n.jsx)(u.Provider,{value:{stopTimer:function(){switch(a(),g.active){case"short":I(C+1),console.log(C);break;case"long":E(F+1)}},updateExecute:y,pomodoro:i,executing:g,startAnimate:f,startTimer:function(){N(!0)},pauseTimer:function(){N(!1)},settingBtn:function(){v({}),localStorage.setItem("shorts",0),localStorage.setItem("longs",0),O(0),E(0),I(0)},setCurrentTimer:function(e){y(Object(j.a)(Object(j.a)({},g),{},{active:e})),B(g)},children:function(e){var t=e.remainingTime,a=Math.floor(t/60),c=t%60;return"".concat(a," : ").concat(c)},shorts:C,longs:F,setLongs:E,setShorts:I},children:e.children})},m=function(e){var t=e.key1,a=void 0===t?1:t,r=e.timer,s=void 0===r?1:r,o=e.animate,l=void 0===o||o,j=e.children,b=Object(c.useContext)(u).stopTimer;return Object(n.jsx)("div",{children:Object(n.jsx)(i.CountdownCircleTimer,{isPlaying:l,duration:60*s,size:220,colors:[["#d15d5d",.05],["#d15dd1",.05],["#5d72d1",.15],["#bcd15d",.15],["#82d15d",.1],["#F7B801",.25],["#A30000",.25]],strokeWidth:8,trailColor:"#151932",onComplete:function(){return b(),[!0,1500]},children:j},a)})},k=function(){var e=localStorage.getItem("timers");null!==e&&(e=JSON.parse(e));var t=Object(c.useState)(null!==e?e:{work:.3,short:.1,long:.2,active:"work"}),a=Object(o.a)(t,2),r=a[0],s=a[1],i=Object(c.useState)(.3),b=Object(o.a)(i,2),d=b[0],h=b[1],O=Object(c.useState)(.1),m=Object(o.a)(O,2),k=m[0],g=m[1],v=Object(c.useState)(.2),x=Object(o.a)(v,2),p=x[0],f=x[1],N=Object(c.useContext)(u).updateExecute,S=function(e){var t=e.target,a=t.name,c=t.value;switch(a){case"work":h(c),s(Object(j.a)(Object(j.a)({},r),{},{work:parseFloat(c)}));break;case"short":g(e.target.value),s(Object(j.a)(Object(j.a)({},r),{},{short:parseFloat(c)}));break;case"long":f(e.target.value),s(Object(j.a)(Object(j.a)({},r),{},{long:parseFloat(c)}))}};Object(c.useEffect)((function(){localStorage.setItem("timers",JSON.stringify(r))}),[r,k,p,d]);return Object(n.jsx)("div",{className:"form-container",children:Object(n.jsx)("form",{noValidate:!0,children:Object(n.jsxs)("div",{className:"input-wrapper",children:[Object(n.jsx)("h3",{children:"Make Necessary Changes here. "}),Object(n.jsxs)("label",{htmlFor:"work",className:"input",children:["Working Time:",Object(n.jsx)("input",{name:"work",id:"work",placeholder:"value in minutes",onChange:S,value:isNaN(r.work)?0:r.work,className:"".concat(isNaN(r.work)?"red":"")}),"Minutes"]}),Object(n.jsxs)("label",{htmlFor:"short",className:"input",children:["Shortbreak Time:",Object(n.jsx)("input",{name:"short",id:"short",placeholder:"value in minutes",onChange:S,value:isNaN(r.short)?0:r.short,className:"".concat(isNaN(r.short)?"red":"")}),"Minutes"]}),Object(n.jsxs)("label",{htmlFor:"long",className:"input",children:["Longbreak time:",Object(n.jsx)("input",{name:"long",id:"long",placeholder:"value in minutes",onChange:S,value:isNaN(r.long)?0:r.long,className:"".concat(isNaN(r.long)?"red":"")}),"Minutes"]}),Object(n.jsx)(l,{title:"Set Timer",activeClass:"".concat(isNaN(r.long)||isNaN(r.short)||isNaN(r.work)?"redb":""),_callback:function(e){e.preventDefault(),s(Object(j.a)(Object(j.a)({},r),{},{long:p,short:k,work:d})),N(r)}})]})})})};var g=function(){var e=Object(c.useContext)(u),t=e.pomodoro,a=e.executing,r=e.setCurrentTimer,s=e.settingBtn,i=e.children,j=e.startAnimate,b=e.startTimer,d=e.pauseTimer,h=e.updateExecute,O=e.shorts,g=e.longs;Object(c.useEffect)((function(){h(a)}),[a,j]),Object(c.useEffect)((function(){}),[O,g]);var v=Object(c.useState)("light"),x=Object(o.a)(v,2),p=x[0],f=x[1];return Object(n.jsxs)("div",{className:"container ".concat("dark"===p?"dark":""),children:[Object(n.jsx)("h1",{children:"pomodoro"}),Object(n.jsx)("small",{children:"Be productive the right way."}),Object(n.jsx)(l,{title:"".concat("dark"===p?"Dark":"Light"),activeClass:"themechanger ".concat("dark"===p?"dark":""),_callback:function(){"light"===p?f("dark"):"dark"===p&&f("light")}}),0===t?Object(n.jsx)(k,{}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("ul",{className:"labels ".concat("dark"===p?"dark":""),children:[Object(n.jsx)("li",{children:Object(n.jsx)(l,{title:"Short Break",activeClass:"".concat("short"===a.active?"active-label":"","\n                ").concat("dark"===p?"dark":""," "),_callback:function(){return r("short")}})}),Object(n.jsx)("li",{children:Object(n.jsx)(l,{title:"Work",activeClass:"".concat("work"===a.active?"active-label":"","\n                ").concat("dark"===p?"dark":""," "),_callback:function(){return r("work")}})}),Object(n.jsx)("li",{children:Object(n.jsx)(l,{title:"Long Break",activeClass:"".concat("long"===a.active?"active-label":"","\n                ").concat("dark"===p?"dark":""," "),_callback:function(){return r("long")}})})]}),Object(n.jsx)(l,{title:"Settings",activeClass:"".concat("dark"===p?"dark":""),_callback:s}),Object(n.jsx)("div",{className:"time-container",children:Object(n.jsx)("div",{className:"time-wrapper ".concat("dark"===p?"dark":""),children:Object(n.jsx)(m,{key1:t,timer:t,animate:j,children:i})})}),Object(n.jsxs)("div",{className:"button-wrapper",children:[Object(n.jsx)(l,{title:"Start",activeClass:"".concat(!0===j?"start":""," ").concat("dark"===p?"dark":""),_callback:b}),Object(n.jsx)(l,{title:"Pause",activeClass:"".concat(!0===!j?"pause":""," ").concat("dark"===p?"dark":""),_callback:d}),Object(n.jsx)(l,{title:"Reset",activeClass:"reset",_callback:s})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Your logs"}),Object(n.jsxs)("h3",{children:["Short breaks taken: ",O," "]}),Object(n.jsxs)("h3",{children:["Long breaks taken: ",g," "]})]})]})]})};a(13);s.a.render(Object(n.jsx)(O,{children:Object(n.jsx)(g,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.3b6b1e21.chunk.js.map