module.exports=(()=>{var e={228:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},858:e=>{e.exports=function(e){if(Array.isArray(e))return e}},646:(e,t,r)=>{var n=r(228);e.exports=function(e){if(Array.isArray(e))return n(e)}},713:e=>{e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},860:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},884:e=>{e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r}}},521:e=>{e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},206:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},38:(e,t,r)=>{var n=r(858),o=r(884),a=r(379),i=r(521);e.exports=function(e,t){return n(e)||o(e,t)||a(e,t)||i()}},319:(e,t,r)=>{var n=r(646),o=r(860),a=r(379),i=r(206);e.exports=function(e){return n(e)||o(e)||a(e)||i()}},379:(e,t,r)=>{var n=r(228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},64:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Form:()=>m,formButtonTypeName:()=>s,noValidate:()=>b,validateRequired:()=>v});var n=r(319),o=r.n(n),a=r(713),i=r.n(a),u=r(38),l=r.n(u);const c=require("react");var f=r.n(c),s={button:"button",submit:"submit",reset:"reset"},p={hidden:{display:"none"}};function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e){var t=e.fieldSetList,r=e.onError,n=e.onSubmit,a=e.buttonList,u=e.title,s=e.buttonComponent,d=e.className,m=(0,c.useState)(function(e){var t=e.fieldSetList,r={};return t.forEach((function(e){e.inputList.forEach((function(e){var t=e.name,n=e.defaultValue;r[t]=n}))})),r}(e)),b=l()(m,2),v=b[0],h=b[1],O=(0,c.useState)({}),g=l()(O,2),j=g[0],S=g[1];function E(e){return!0===e.isHidden?function(e){var t=e.name;return f().createElement("div",{key:t,style:p.hidden},x(e))}(e):x(e)}function x(e){var t,r,n=e.name,o=e.defaultValue,a=e.placeholder,u=e.label,l=e.accept,c=e.optionList,s=e.isHidden,p=e.additional,d=e.inputComponent,m=function(e){return function(t){var r=e.name,n=e.validate,o=y(y({},v),{},i()({},r,t)),a=n(r,t,o);h(o),0===a.length&&S(y(y({},j),{},i()({},r,[])))}}(e),b=function(e){return function(t){var r=e.name,n=e.validate,o=y(y({},v),{},i()({},r,t)),a=n(r,t,o),u=y(y({},j),{},i()({},r,a));h(o),S(u)}}(e),O=(t=j,r=n,Boolean(t)&&Reflect.apply(Object.prototype.hasOwnProperty,t,[r])?j[n]:[]);return f().createElement(d,{accept:l,additional:p,defaultValue:o,errorList:O,isHidden:s,key:n,label:u,name:n,onBlur:b,onChange:m,optionList:c,placeholder:a})}var w,P=d||"";return f().createElement("form",{action:"#",className:P,method:"post",onSubmit:function(e){e.preventDefault();var a=function(){var e={},r=[];return t.forEach((function(t){t.inputList.forEach((function(t){var n=t.name,a=(0,t.validate)(n,v[n],v);e[n]=a,r.push.apply(r,o()(a))}))})),S(e),r}();0!==a.length?r(a,v):n(v)}},f().createElement("h3",null,u),t.map((function(e,t){var r=e.legend,n=e.inputList;return f().createElement("fieldset",{key:t},r?f().createElement("legend",null,r):null,n.map(E))})),(w=a,f().createElement("footer",null,w.map((function(e,t){var r=e.isPrimary,n=e.onClick,o=e.title,a=e.type,i=e.accessKey,u=e.additional;return f().createElement(s,{accessKey:i,additional:u,isPrimary:r,key:t,onClick:n,title:o,type:a})})))))}function b(e,t,r){return[]}function v(e,t,r){var n=[new Error("Required field!")],o=[];return function(e){return void 0===e}(t)||function(e){return null===e}(t)?n:"number"==typeof t?Number.isNaN(t)||t<=0?n:o:function(e){return"string"==typeof e}(t)?""===t.trim()?n:o:function(e){return"boolean"==typeof e}(t)?!1===t?n:o:Array.isArray(t)?0===t.length?n:o:function(e){return e instanceof File}(t)?o:n}}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}return r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(64)})();