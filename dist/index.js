module.exports=(()=>{var e={228:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},858:e=>{e.exports=function(e){if(Array.isArray(e))return e}},646:(e,t,r)=>{var n=r(228);e.exports=function(e){if(Array.isArray(e))return n(e)}},713:e=>{e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},860:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},884:e=>{e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}}},521:e=>{e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},206:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},38:(e,t,r)=>{var n=r(858),o=r(884),i=r(379),a=r(521);e.exports=function(e,t){return n(e)||o(e,t)||i(e,t)||a()}},319:(e,t,r)=>{var n=r(646),o=r(860),i=r(379),a=r(206);e.exports=function(e){return n(e)||o(e)||i(e)||a()}},379:(e,t,r)=>{var n=r(228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},64:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Form:()=>m,formButtonTypeName:()=>s,noValidate:()=>b,validateRequired:()=>v});var n=r(319),o=r.n(n),i=r(713),a=r.n(i),u=r(38),c=r.n(u);const l=require("react");var f=r.n(l),s={button:"button",submit:"submit",reset:"reset"},p={hidden:{display:"none"}};function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e){var t=e.fieldSetList,r=e.onError,n=e.onSubmit,i=e.buttonList,u=e.title,s=e.buttonComponent,d=e.className,m=(0,l.useState)(function(e){var t=e.fieldSetList,r={};return t.forEach((function(e){e.inputList.forEach((function(e){var t=e.name,n=e.defaultValue;r[t]=n}))})),r}(e)),b=c()(m,2),v=b[0],h=b[1],O=(0,l.useState)({}),g=c()(O,2),j=g[0],S=g[1];function x(e){return!0===e.isHidden?function(e){var t=e.name;return f().createElement("div",{key:t,style:p.hidden},E(e))}(e):E(e)}function E(e){var t,r,n=e.name,o=e.defaultValue,i=e.placeholder,u=e.label,c=e.accept,l=e.optionList,s=e.isHidden,p=e.additional,d=e.inputComponent,m=e.isRequired,b=e.isWide,O=e.icon,g=function(e){return function(t){var r=e.name,n=e.validate,o=y(y({},v),{},a()({},r,t)),i=n(r,t,o);h(o),0===i.length&&S(y(y({},j),{},a()({},r,[])))}}(e),x=function(e){return function(t){var r=e.name,n=e.validate,o=y(y({},v),{},a()({},r,t)),i=n(r,t,o),u=y(y({},j),{},a()({},r,i));h(o),S(u)}}(e),E=(t=j,r=n,Boolean(t)&&Reflect.apply(Object.prototype.hasOwnProperty,t,[r])?j[n]:[]);return f().createElement(d,{accept:c,additional:p,defaultValue:o,errorList:E,icon:O,isHidden:s,isRequired:m,isWide:b,key:n,label:u,name:n,onBlur:x,onChange:g,optionList:l,placeholder:i})}var w,P=d||"";return f().createElement("form",{action:"#",className:P,method:"post",onSubmit:function(e){e.preventDefault();var i=function(){var e={},r=[];return t.forEach((function(t){t.inputList.forEach((function(t){var n=t.name,i=(0,t.validate)(n,v[n],v);e[n]=i,r.push.apply(r,o()(i))}))})),S(e),r}();0!==i.length?r(i,v):n(v)}},u,t.map((function(e,t){var r=e.legend,n=e.inputList;return f().createElement("fieldset",{key:t},r?f().createElement("legend",null,r):null,n.map(x))})),(w=i,f().createElement("footer",null,w.map((function(e,t){var r=e.isPrimary,n=e.onClick,o=e.title,i=e.type,a=e.accessKey,u=e.isWide,c=e.additional,l=e.icon;return f().createElement(s,{accessKey:a,additional:c,icon:l,isPrimary:r,isWide:u,key:t,onClick:n,title:o,type:i})})))))}function b(e,t,r){return[]}function v(e,t,r){var n=[new Error("Required field!")],o=[];return function(e){return void 0===e}(t)||function(e){return null===e}(t)?n:"number"==typeof t?Number.isNaN(t)||t<=0?n:o:function(e){return"string"==typeof e}(t)?""===t.trim()?n:o:function(e){return"boolean"==typeof e}(t)?!1===t?n:o:Array.isArray(t)?0===t.length?n:o:function(e){return e instanceof File}(t)?o:n}}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}return r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(64)})();