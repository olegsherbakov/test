(function(t){function e(e){for(var s,u,a=e[0],o=e[1],c=e[2],p=0,f=[];p<a.length;p++)u=a[p],r[u]&&f.push(r[u][0]),r[u]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,a=1;a<n.length;a++){var o=n[a];0!==r[o]&&(s=!1)}s&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var s={},r={app:0},i=[];function u(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=s,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)u.d(n,s,function(e){return t[e]}.bind(null,s));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/jstest/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],o=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"00a4":function(t,e,n){"use strict";var s=n("b8ff"),r=n.n(s);r.a},"034f":function(t,e,n){"use strict";var s=n("c21b"),r=n.n(s);r.a},1725:function(t){t.exports={test:1,step:0,questions:[{text:"Сколько базовых типов данных поддерживает JS?",multi:!1,values:[{text:"5",right:!1},{text:"6",right:!0},{text:"7",right:!0}]},{text:'Что выведет код "typeof NaN"?',multi:!1,values:[{text:"undefined",right:!1},{text:"object",right:!1},{text:"number",right:!0}]},{text:"0.1 + 0.2 == 0.3?",multi:!1,values:[{text:"true",right:!1},{text:"false",right:!0}]},{text:"[2] == 2?",multi:!1,values:[{text:"true",right:!0},{text:"false",right:!1}]},{text:"Чему равно 2 && 1 && null && 0 && undefined ?",multi:!1,values:[{text:"2",right:!1},{text:"1",right:!1},{text:"null",right:!0},{text:"0",right:!1},{text:"undefined",right:!1},{text:"false",right:!1}]},{text:"Чему равно (1,5 - 1) * 2 ?",multi:!1,values:[{text:"1",right:!1},{text:"2",right:!1},{text:"4",right:!1},{text:"8",right:!0},{text:"Другое",right:!1}]}]}},3313:function(t,e,n){"use strict";var s=n("797a"),r=n.n(s);r.a},5531:function(t,e,n){"use strict";var s=n("be19"),r=n.n(s);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var s=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"flex-container"},[n("div",{staticClass:"content"},[n("h1",{class:{center:!0,fadeOut:!0,transparent:!t.showGreet}},[t._v("Короткий тест на знание JS.")]),n("Test")],1)])])])},i=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"center"},["begin"===t.phase?n("button",{staticClass:"button get-started",on:{click:t.begin}},[t._v("\n      Начать тест\n    ")]):t._e()]),"during"===t.phase?n("div",[n("Progress",{attrs:{current:t.step,length:t.questions.length}}),n("Question",{attrs:{step:t.step,text:t.current.text,values:t.current.values}})],1):t._e(),"end"===t.phase?n("div",[n("div",{staticClass:"center"},[n("h3",[t._v("Ваш результат: "+t._s(t.calculate)+" / "+t._s(t.questions.length))]),n("button",{staticClass:"button get-repeat",on:{click:t.repeat}},[t._v("\n        Повторить тест\n      ")])])]):t._e()])},a=[],o=(n("ac6a"),n("c93e")),c=n("1725"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("h4",[t._v("Q #"+t._s(t.step))]),n("code",[t._v("\n    "+t._s(t.text)+"\n  ")]),n("div",{staticClass:"values"},t._l(t.values,function(e,s){return n("div",{key:s,staticClass:"value"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.picked,expression:"picked"}],staticClass:"input",attrs:{type:"radio",name:"js-question"+s,id:"js-question-"+s},domProps:{value:s,checked:t._q(t.picked,s)},on:{change:function(e){t.picked=s}}}),n("label",{staticClass:"label",attrs:{for:"js-question-"+s}},[t._v("\n          "+t._s(e.text)+"\n        ")])])})),n("button",{staticClass:"button submit",attrs:{disabled:-1===t.picked},on:{click:t.submitResult}},[t._v("\n    Ответить\n  ")])])},p=[],f={name:"Question",data:function(){return{picked:-1}},props:["step","text","values"],methods:{submitResult:function(){this.$parent.takeResult(this.picked),this.picked=-1}}},d=f,h=(n("00a4"),n("2877")),v=Object(h["a"])(d,l,p,!1,null,"1b72ac6c",null);v.options.__file="Question.vue";var g=v.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"progress"},t._l(t.length,function(e){return n("div",{key:e,class:{step:!0,passed:e<t.current,current:e===t.current}},[t._v("\n    "+t._s(e)+"\n  ")])}))},x=[],_={name:"Progress",props:["current","length"]},m=_,k=(n("3313"),Object(h["a"])(m,b,x,!1,null,"72cc729c",null));k.options.__file="Progress.vue";var y=k.exports,j={name:"Test",data:function(){return Object(o["a"])({},c,{result:[]})},methods:{begin:function(){this.step+=1,this.$parent.showGreet=!1},takeResult:function(t){this.result.push(this.current.values[t].right),this.step+=1},repeat:function(){this.result=[],this.step=1}},computed:{phase:function(){return 0===this.step?"begin":0!==this.step&&this.step-1===this.questions.length?"end":"during"},current:function(){return this.questions[this.step-1]},calculate:function(){return this.result.filter(function(t){return t}).length}},components:{Question:g,Progress:y}},C=j,O=(n("5531"),Object(h["a"])(C,u,a,!1,null,"92dd3076",null));O.options.__file="Test.vue";var w=O.exports,P={name:"app",data:function(){return{showGreet:!0}},components:{Test:w}},q=P,S=(n("034f"),Object(h["a"])(q,r,i,!1,null,null,null));S.options.__file="App.vue";var T=S.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(T)}}).$mount("#app")},"797a":function(t,e,n){},b8ff:function(t,e,n){},be19:function(t,e,n){},c21b:function(t,e,n){}});
//# sourceMappingURL=app.40480fdf.js.map