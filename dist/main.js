!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["drag-scroll-plugin"]=n():t["drag-scroll-plugin"]=n()}(window,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=48)}([function(t,n,e){var r=e(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){"use strict";var r=e(8),o=e(24).f,i=e(29),u=e(5),c=e(30),s=e(32),f=e(4),a=function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n};t.exports=function(t,n){var e,l,h,p,d,v,y,m,x=t.target,g=t.global,b=t.stat,w=t.proto,O=g?r:b?r[x]:(r[x]||{}).prototype,j=g?u:u[x]||(u[x]={}),F=j.prototype;for(h in n)e=!i(g?h:x+(b?".":"#")+h,t.forced)&&O&&f(O,h),d=j[h],e&&(v=t.noTargetGet?(m=o(O,h))&&m.value:O[h]),p=e&&v?v:n[h],e&&typeof d==typeof p||(y=t.bind&&e?c(p,r):t.wrap&&e?a(p):w&&"function"==typeof p?c(Function.call,p):p,(t.sham||p&&p.sham||d&&d.sham)&&s(y,"sham",!0),j[h]=y,w&&(f(u,l=x+"Prototype")||s(u,l,{}),u[l][h]=p,t.real&&F&&!F[h]&&s(F,h,p)))}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports={}},function(t,n,e){t.exports=e(19)},function(t,n,e){t.exports=e(39)},function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(23))},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(26),o=e(27);t.exports=function(t){return r(o(t))}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(3);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(0),o=e(1),i=e(28);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(0),o=e(13),i=e(33),u=e(12),c=Object.defineProperty;n.f=r?c:function(t,n,e){if(i(t),n=u(n,!0),i(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(5);t.exports=function(t){return r[t+"Prototype"]}},function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){var r=e(44);function o(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),r(t,o.key,o)}}t.exports=function(t,n,e){return n&&o(t.prototype,n),e&&o(t,e),t}},function(t,n,e){var r=e(20);t.exports=r},function(t,n,e){var r=e(21),o=Array.prototype;t.exports=function(t){var n=t.indexOf;return t===o||t instanceof Array&&n===o.indexOf?r:n}},function(t,n,e){e(22);var r=e(16);t.exports=r("Array").indexOf},function(t,n,e){"use strict";var r=e(2),o=e(34).indexOf,i=e(37),u=e(38),c=[].indexOf,s=!!c&&1/[1].indexOf(1,-0)<0,f=i("indexOf"),a=u("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:s||!f||!a},{indexOf:function(t){return s?c.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){var r=e(0),o=e(25),i=e(9),u=e(10),c=e(12),s=e(4),f=e(13),a=Object.getOwnPropertyDescriptor;n.f=r?a:function(t,n){if(t=u(t),n=c(n,!0),f)try{return a(t,n)}catch(t){}if(s(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(1),o=e(11),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(8),o=e(3),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n,e){var r=e(1),o=/#|\.prototype\./,i=function(t,n){var e=c[u(t)];return e==f||e!=s&&("function"==typeof n?r(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},s=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,e){var r=e(31);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){var r=e(0),o=e(14),i=e(9);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(3);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(10),o=e(35),i=e(36),u=function(t){return function(n,e,u){var c,s=r(n),f=o(s.length),a=i(u,f);if(t&&e!=e){for(;f>a;)if((c=s[a++])!=c)return!0}else for(;f>a;a++)if((t||a in s)&&s[a]===e)return t||a||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,e){var r=e(15),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(15),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n,e){"use strict";var r=e(1);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},function(t,n,e){var r=e(0),o=e(1),i=e(4),u=Object.defineProperty,c={},s=function(t){throw t};t.exports=function(t,n){if(i(c,t))return c[t];n||(n={});var e=[][t],f=!!i(n,"ACCESSORS")&&n.ACCESSORS,a=i(n,0)?n[0]:s,l=i(n,1)?n[1]:void 0;return c[t]=!!e&&!o((function(){if(f&&!r)return!0;var t={length:-1};f?u(t,1,{enumerable:!0,get:s}):t[1]=1,e.call(t,a,l)}))}},function(t,n,e){var r=e(40);t.exports=r},function(t,n,e){var r=e(41),o=Array.prototype;t.exports=function(t){var n=t.reverse;return t===o||t instanceof Array&&n===o.reverse?r:n}},function(t,n,e){e(42);var r=e(16);t.exports=r("Array").reverse},function(t,n,e){"use strict";var r=e(2),o=e(43),i=[].reverse,u=[1,2];r({target:"Array",proto:!0,forced:String(u)===String(u.reverse())},{reverse:function(){return o(this)&&(this.length=this.length),i.call(this)}})},function(t,n,e){var r=e(11);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){t.exports=e(45)},function(t,n,e){var r=e(46);t.exports=r},function(t,n,e){e(47);var r=e(5).Object,o=t.exports=function(t,n,e){return r.defineProperty(t,n,e)};r.defineProperty.sham&&(o.sham=!0)},function(t,n,e){var r=e(2),o=e(0);r({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperty:e(14).f})},function(t,n,e){"use strict";e.r(n),e.d(n,"dragPluginVue",(function(){return h})),e.d(n,"DragScroller",(function(){return l}));var r=e(6),o=e.n(r),i=e(7),u=e.n(i),c=e(17),s=e.n(c),f=e(18),a=e.n(f),l=function(){function t(n,e){var r=this;s()(this,t),this.container="",this.childBody="",this.reverse=!!n.hasOwnProperty("reverse")&&u()(n),this.uiDom=e,this.downX=0,this.moveX=0,this.disX=0,this.isMouse=!1,this.scrollNow=0,this.downFun=function(t){return r.handleDownFun(t)},this.dragFun=function(t){return r.handleDragFun(t)},this.scrollFun=function(t){return r.handleScrollFun(t)},this.moveFun=function(t){return r.handleMoveFun(t)},this.upFun=function(t){return r.handleUpFun(t)},this.domInit(n),this.offsetLt=this.getAbsoluteLeft(this.container)}return a()(t,[{key:"domInit",value:function(t){try{var n,e;if(t&&t.hasOwnProperty("container")&&t.hasOwnProperty("childBody"))this.container=t.container,this.childBody=t.childBody;else if(~o()(n=this.uiDom.className).call(n,"ivu-table"))this.container=this.uiDom.children[0].children[1],this.childBody=this.uiDom.children[0].children[1].children[0];else{if(!~o()(e=this.uiDom.className).call(e,"uiDom-table"))throw new Error("请传入包含container和childBody的对象");this.container=this.uiDom.children[2],this.childBody=this.uiDom.children[2].children[0]}}catch(t){console.error(t)}}},{key:"getAbsoluteLeft",value:function(t){for(var n=t.offsetLeft,e=t.offsetParent;null!==e;)n+=e.offsetLeft,e=e.offsetParent;return n}},{key:"handleDragFun",value:function(t){t.preventDefault()}},{key:"handleScrollFun",value:function(t){this.isMouse||(this.scrollNow=this.container.scrollLeft)}},{key:"handleDownFun",value:function(t){this.container.scrollLeft=this.scrollNow,this.isMouse=!0,t.stopPropagation(),this.downX=t.pageX-this.offsetLt,this.childBody.addEventListener("mousemove",this.moveFun),this.childBody.addEventListener("dragstart",this.dragFun),document.addEventListener("mouseup",this.upFun)}},{key:"handleMoveFun",value:function(t){t.stopPropagation(),this.moveX=t.pageX-this.offsetLt,this.disX=this.moveX-this.downX,this.container.scrollLeft=u()(this)?this.scrollNow+this.disX:this.scrollNow-this.disX}},{key:"handleUpFun",value:function(t){this.scrollNow=this.container.scrollLeft,this.isMouse=!1,this.childBody.removeEventListener("mousemove",this.moveFun),this.childBody.removeEventListener("dragstart",this.dragFun),document.removeEventListener("mouseup",this.upFun)}},{key:"bindEvent",value:function(){this.childBody.addEventListener("mousedown",this.downFun),this.container.addEventListener("scroll",this.scrollFun)}},{key:"removeEvent",value:function(){this.childBody.removeEventListener("mousedown",this.downFun),this.container.removeEventListener("scroll",this.scrollFun)}}]),t}(),h={install:function(t,n){t.directive("drag",{bind:function(t,n){},componentUpdated:function(t,n){},update:function(t,n,e,r){new l(n.value,t).bindEvent()}})}}}])}));