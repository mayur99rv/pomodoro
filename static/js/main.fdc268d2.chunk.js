(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(5),r=a.n(s),o=a(0),l=function(e){var t=e.title,a=e.activeClass,c=e._callback;return Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:a,disabled:"redb"===a,onClick:c,children:t})})},n=a(6),i=a(3),j=a(2),b=a(7),u=a.p+"static/media/public_bell.65997859.mp3",d=Object(c.createContext)(),h=localStorage.getItem("timers");null!==h&&(h=JSON.parse(h),console.log("local storage timerobj"+h));var O=function(e){var t=Object(b.a)(u),a=Object(j.a)(t,1)[0];null!==(h=localStorage.getItem("timers"))&&(h=JSON.parse(h),console.log("local storage timerobj"+h));var s=0;if(null!==h)switch(h.active){case"work":s=h.work;break;case"short":s=h.short;break;case"long":s=h.long;break;default:s=0}var r=Object(c.useState)(void 0===s?0:s),l=Object(j.a)(r,2),n=l[0],O=l[1],m=Object(c.useState)({}),g=Object(j.a)(m,2),v=g[0],k=g[1],x=Object(c.useState)(!1),p=Object(j.a)(x,2),f=p[0],N=p[1],S=Object(c.useState)(localStorage.getItem("shorts")&&parseFloat(localStorage.getItem("shorts"))||0),w=Object(j.a)(S,2),C=w[0],I=w[1],T=Object(c.useState)(localStorage.getItem("longs")&&parseFloat(localStorage.getItem("longs"))||0),F=Object(j.a)(T,2),_=F[0],E=F[1];Object(c.useEffect)((function(){localStorage.setItem("shorts",C),localStorage.setItem("longs",_)}),[C,_,v]);var y=function(e){k(e),B(e)},B=function(e){switch(e.active){case"work":O(e.work);break;case"short":O(e.short);break;case"long":O(e.long);break;default:O(0)}};return Object(o.jsx)(d.Provider,{value:{stopTimer:function(){switch(a(),v.active){case"short":I(C+1),console.log(C);break;case"long":E(_+1)}},updateExecute:y,pomodoro:n,executing:v,startAnimate:f,startTimer:function(){N(!0)},pauseTimer:function(){N(!1)},settingBtn:function(){k({}),localStorage.setItem("shorts",0),localStorage.setItem("longs",0),O(0),E(0),I(0)},setCurrentTimer:function(e){y(Object(i.a)(Object(i.a)({},v),{},{active:e})),B(v)},children:function(e){var t=e.remainingTime,a=Math.floor(t/60),c=t%60;return"".concat(a," : ").concat(c)},shorts:C,longs:_,setLongs:E,setShorts:I},children:e.children})},m=function(e){var t=e.key1,a=void 0===t?1:t,s=e.timer,r=void 0===s?1:s,l=e.animate,i=void 0===l||l,j=e.children,b=Object(c.useContext)(d).stopTimer;return Object(o.jsx)("div",{children:Object(o.jsx)(n.CountdownCircleTimer,{isPlaying:i,duration:60*r,size:220,colors:[["#d15d5d",.05],["#d15dd1",.05],["#5d72d1",.15],["#bcd15d",.15],["#82d15d",.1],["#F7B801",.25],["#A30000",.25]],strokeWidth:8,trailColor:"#151932",onComplete:function(){return b(),[!0,1500]},children:j},a)})},g=function(){var e=localStorage.getItem("timers");null!==e&&(e=JSON.parse(e));var t=Object(c.useState)(null!==e?e:{work:.3,short:.1,long:.2,active:"work"}),a=Object(j.a)(t,2),s=a[0],r=a[1],n=Object(c.useState)(.3),b=Object(j.a)(n,2),u=b[0],h=b[1],O=Object(c.useState)(.1),m=Object(j.a)(O,2),g=m[0],v=m[1],k=Object(c.useState)(.2),x=Object(j.a)(k,2),p=x[0],f=x[1],N=Object(c.useContext)(d).updateExecute,S=function(e){var t=e.target,a=t.name,c=t.value;switch(a){case"work":h(c),r(Object(i.a)(Object(i.a)({},s),{},{work:parseFloat(c)}));break;case"short":v(e.target.value),r(Object(i.a)(Object(i.a)({},s),{},{short:parseFloat(c)}));break;case"long":f(e.target.value),r(Object(i.a)(Object(i.a)({},s),{},{long:parseFloat(c)}))}};Object(c.useEffect)((function(){localStorage.setItem("timers",JSON.stringify(s))}),[s,g,p,u]);return Object(o.jsx)("div",{className:"form-container",children:Object(o.jsx)("form",{noValidate:!0,children:Object(o.jsxs)("div",{className:"input-wrapper",children:[Object(o.jsx)("h3",{children:"Make Necessary Changes here. "}),Object(o.jsxs)("label",{htmlFor:"work",className:"input",children:["Working Time:",Object(o.jsx)("input",{name:"work",id:"work",placeholder:"value in minutes",onChange:S,value:isNaN(s.work)?0:s.work,className:"".concat(isNaN(s.work)?"red":"")}),"Minutes"]}),Object(o.jsxs)("label",{htmlFor:"short",className:"input",children:["Shortbreak Time:",Object(o.jsx)("input",{name:"short",id:"short",placeholder:"value in minutes",onChange:S,value:isNaN(s.short)?0:s.short,className:"".concat(isNaN(s.short)?"red":"")}),"Minutes"]}),Object(o.jsxs)("label",{htmlFor:"long",className:"input",children:["Longbreak time:",Object(o.jsx)("input",{name:"long",id:"long",placeholder:"value in minutes",onChange:S,value:isNaN(s.long)?0:s.long,className:"".concat(isNaN(s.long)?"red":"")}),"Minutes"]}),Object(o.jsx)(l,{title:"Set Timer",activeClass:"".concat(isNaN(s.long)||isNaN(s.short)||isNaN(s.work)?"redb":""),_callback:function(e){e.preventDefault(),r(Object(i.a)(Object(i.a)({},s),{},{long:p,short:g,work:u})),N(s)}})]})})})};var v=function(){var e=Object(c.useContext)(d),t=e.pomodoro,a=e.executing,s=e.setCurrentTimer,r=e.settingBtn,n=e.children,i=e.startAnimate,j=e.startTimer,b=e.pauseTimer,u=e.updateExecute,h=e.shorts,O=e.longs;return Object(c.useEffect)((function(){u(a)}),[a,i]),Object(c.useEffect)((function(){}),[h,O]),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"pomodoro"}),Object(o.jsx)("small",{children:"Be productive the right way."}),console.log("po "+t),0===t?Object(o.jsx)(g,{}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("ul",{className:"labels",children:[Object(o.jsx)("li",{children:Object(o.jsx)(l,{title:"Work",activeClass:"work"===a.active?"active-label":"",_callback:function(){return s("work")}})}),Object(o.jsx)("li",{children:Object(o.jsx)(l,{title:"Short Break",activeClass:"short"===a.active?"active-label":"",_callback:function(){return s("short")}})}),Object(o.jsx)("li",{children:Object(o.jsx)(l,{title:"Long Break",activeClass:"long"===a.active?"active-label":"",_callback:function(){return s("long")}})})]}),Object(o.jsx)(l,{title:"Settings",_callback:r}),Object(o.jsx)("div",{className:"time-container",children:Object(o.jsx)("div",{className:"time-wrapper",children:Object(o.jsx)(m,{key1:t,timer:t,animate:i,children:n})})}),Object(o.jsxs)("div",{className:"button-wrapper",children:[Object(o.jsx)(l,{title:"Start",activeClass:!0===i?"start":"",_callback:j}),Object(o.jsx)(l,{title:"Pause",activeClass:!0===!i?"pause":"",_callback:b}),Object(o.jsx)(l,{title:"Reset",activeClass:"reset",_callback:r})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Your logs"}),Object(o.jsxs)("h3",{children:["Short breaks taken: ",h," "]}),Object(o.jsxs)("h3",{children:["Long breaks taken: ",O," "]})]})]})]})};a(13);r.a.render(Object(o.jsx)(O,{children:Object(o.jsx)(v,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.fdc268d2.chunk.js.map