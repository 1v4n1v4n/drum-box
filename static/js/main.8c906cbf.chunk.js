(this["webpackJsonpdrum-box"]=this["webpackJsonpdrum-box"]||[]).push([[0],{14:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(6),o=n.n(c),u=(n(14),Object(r.createContext)()),l=function(e){var t=e.id,n=e.letter,c=e.src,o=e.audio,l=Object(r.useContext)(u);Object(r.useEffect)((function(){return document.addEventListener("keydown",i),function(){document.removeEventListener("keydown",i)}}));var i=function(e){if(e.keyCode===n.charCodeAt()&&l.checked){document.getElementById(n).volume=l.volume;var r=document.getElementById(t);r.style.backgroundColor="darksalmon",setTimeout((function(){return r.style.backgroundColor="azure"}),100),o.play(),o.currentTime=0}};return a.a.createElement(r.Fragment,null,a.a.createElement("button",{onClick:function(){if(l.checked){document.getElementById(n).volume=l.volume;var e=document.getElementById(t);e.style.backgroundColor="darksalmon",setTimeout((function(){return e.style.backgroundColor="azure"}),100),o.play(),o.currentTime=0}},id:t,letter:n,src:c},n),a.a.createElement("audio",{id:n,className:"clip",src:c,ref:function(e){return o=e}}))},i=[{id:"Snare",letter:"Q",src:"https://www.myinstants.com/media/sounds/snare.mp3"},{id:"Bass 1",letter:"W",src:"https://www.myinstants.com/media/sounds/bass-drum.mp3"},{id:"Bongo",letter:"E",src:"http://tipiwiki.free.fr/snd/Percussion(4e)2.wav"},{id:"Tom Tom",letter:"A",src:"http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav"},{id:"Bass 3",letter:"S",src:"http://billor.chsh.chc.edu.tw/sound/bass4.wav"},{id:"Shotgun",letter:"D",src:"http://david.guerrero.free.fr/Effects/ShotgunReload.wav"},{id:"High Hat",letter:"Z",src:"http://www.denhaku.com/r_box/tr707/closed.wav"},{id:"Drum Hit",letter:"X",src:"http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3"},{id:"Laser",letter:"C",src:"http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav"}],s=function(){return a.a.createElement("div",{id:"buttons-grid"},i.map((function(e){return a.a.createElement(l,{key:e.id,id:e.id,letter:e.letter,src:e.src})})))},d=n(1),m=n(7),h=n.n(m),f=function(){var e=Object(r.useState)(!0),t=Object(d.a)(e,2),n=t[0],c=t[1],o=Object(r.useContext)(u);return a.a.createElement("label",{id:"switch"},a.a.createElement("span",null,"Power"),a.a.createElement(h.a,{onChange:function(e){c(e),o.getChecked(e)},checked:n,id:"switch-handle"}))},p=n(8),E=n.n(p),b=function(){var e=Object(r.useState)(1),t=Object(d.a)(e,2),n=t[0],c=t[1],o=Object(r.useContext)(u);return a.a.createElement("div",{id:"slider"},a.a.createElement("span",null,"Volume"),a.a.createElement(E.a,{value:Math.round(100*n)/100,orientation:"horizontal",onChange:function(e){c(e),o.getVolume(e)},max:1,step:.01,tooltip:!1}))},v=function(){var e=function(e){window.open(e,"Share","width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0")};return a.a.createElement("div",{id:"font-buttons"},a.a.createElement("button",{onClick:function(){return e("https://twitter.com/intent/tweet?hashtags=drum,machine&text=Check out this cool drum machine! https://1v4n1v4n.github.io/drum-box/")}},a.a.createElement("i",{className:"fab fa-twitter"})," Tweet"),a.a.createElement("span",{style:{visibility:"hidden"}},"i"),a.a.createElement("button",null,a.a.createElement("i",{className:"fab fa-facebook"})," Share"))},w=function(){return a.a.createElement(r.Fragment,null,a.a.createElement("a",{id:"footer",href:"https://github.com/1v4n1v4n"},a.a.createElement("span",null,"by 1v4n")))},k=n(2),y=n.n(k),g=n(4),C=n(3),O=function(e,t){switch(t.type){case"GET_CHECKED":return Object(C.a)(Object(C.a)({},e),{},{checked:t.payload});case"GET_VOLUME":return Object(C.a)(Object(C.a)({},e),{},{volume:t.payload});default:return e}},j=function(e){var t=Object(r.useReducer)(O,{checked:!0,volume:1}),n=Object(d.a)(t,2),c=n[0],o=n[1],l=function(){var e=Object(g.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o({type:"GET_CHECKED",payload:t});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(g.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o({type:"GET_VOLUME",payload:t});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement(u.Provider,{value:{checked:c.checked,volume:c.volume,getChecked:l,getVolume:i}},e.children)},x=function(){return a.a.createElement(j,null,a.a.createElement("div",{className:"container"},a.a.createElement("div",{id:"drum-pad"},a.a.createElement(s,null),a.a.createElement(f,null),a.a.createElement(b,null),a.a.createElement(v,null),a.a.createElement(w,null))))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(x,null)),document.getElementById("root"))},9:function(e,t,n){e.exports=n(25)}},[[9,1,2]]]);
//# sourceMappingURL=main.8c906cbf.chunk.js.map