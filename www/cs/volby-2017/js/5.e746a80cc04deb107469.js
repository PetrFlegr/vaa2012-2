webpackJsonp([5],{123:function(e,t,n){e.exports=n(124)},124:function(e,t,n){"use strict";function r(e){var t=new s(e),n=i(s.prototype.request,t);return o.extend(n,s.prototype,t),o.extend(n,t),n}var o=n(53),i=n(81),s=n(126),a=n(70),u=r(a);u.Axios=s,u.create=function(e){return r(o.merge(a,e))},u.Cancel=n(85),u.CancelToken=n(140),u.isCancel=n(84),u.all=function(e){return Promise.all(e)},u.spread=n(141),e.exports=u,e.exports.default=u},125:function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||r(e)||!!e._isBuffer)}},126:function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new s,response:new s}}var o=n(70),i=n(53),s=n(135),a=n(136),u=n(138),c=n(139);r.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),e=i.merge(o,this.defaults,{method:"get"},e),e.method=e.method.toLowerCase(),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url));var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},i.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(i.merge(n||{},{method:e,url:t}))}}),i.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(i.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},127:function(e,t,n){"use strict";var r=n(53);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},128:function(e,t,n){"use strict";var r=n(83);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},129:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},130:function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(53);e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(o.isURLSearchParams(t))i=t.toString();else{var s=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),s.push(r(t)+"="+r(e))}))}),i=s.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},131:function(e,t,n){"use strict";var r=n(53);e.exports=function(e){var t,n,o,i={};return e?(r.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t&&(i[t]=i[t]?i[t]+", "+n:n)}),i):i}},132:function(e,t,n){"use strict";var r=n(53);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},133:function(e,t,n){"use strict";function r(){this.message="String contains an invalid character"}function o(e){for(var t,n,o=String(e),s="",a=0,u=i;o.charAt(0|a)||(u="=",a%1);s+=u.charAt(63&t>>8-a%1*8)){if((n=o.charCodeAt(a+=.75))>255)throw new r;t=t<<8|n}return s}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",e.exports=o},134:function(e,t,n){"use strict";var r=n(53);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},135:function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(53);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},136:function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(53),i=n(137),s=n(84),a=n(70);e.exports=function(e){return r(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||a.adapter)(e).then(function(t){return r(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(r(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},137:function(e,t,n){"use strict";var r=n(53);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},138:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},139:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},140:function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(85);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r(function(t){e=t}),cancel:e}},e.exports=r},141:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},153:function(e,t,n){var r=n(154);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(30)("2eb7845c",r,!0)},154:function(e,t,n){t=e.exports=n(29)(void 0),t.push([e.i,".container{padding:10px}",""])},155:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(68),o=n.n(r),i=n(123),s=n.n(i),a=n(4),u=n.n(a),c=n(1);t.default={data:function(){return{settings:u.a,email:"",postcode:"",regmo:!1,regre:!0}},methods:{getSetCookie:function(){if(c.a.has("vkid"))e=c.a.get("vkid");else{var e="vk."+Date.now()+"."+Math.round(1e15*Math.random());c.a.set("vkid",e,{expires:5e3,path:"/"})}return e},register:function(){if(this.$emit("closeEmailModal"),""!==this.email){var e={regmo:this.regmo,regre:this.regre,postcode:this.postcode},t=this.getSetCookie(),n={vkid:t,calc:"cz2017vk",campaign:"result scroll-up modal",value:this.email,type:"email",attributes:o()(e)};s.a.get("https://volebnikalkulacka.cz/volby-2017-simple/match/emails.php",{params:n})}}},components:{QInput:c.j,QCheckbox:c.h,QBtn:c.c,Cookies:c.a}}},156:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h6",[e._v("Registrace na Volební kalkulačce")]),e._v(" "),n("hr"),e._v(" "),n("p",[e._v("\n        Výhody registrace:\n        "),e._m(0),e._v(" "),n("q-input",{attrs:{"float-label":"Váš email:",placeholder:"jmeno@example.com"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),n("q-input",{attrs:{"float-label":"PSČ",type:"number",placeholder:"33199"},model:{value:e.postcode,callback:function(t){e.postcode=t},expression:"postcode"}})],1),e._v(" "),n("p",[n("q-checkbox",{attrs:{label:"Chci před volbami připomenout moji shodu s kandidáty"},model:{value:e.regre,callback:function(t){e.regre=t},expression:"regre"}}),e._v(" "),n("br"),e._v(" "),n("q-checkbox",{attrs:{label:"Zajímám se o politiku hodně a chci dostávat info o analýzách autorů Volební kalkulačĸy"},model:{value:e.regmo,callback:function(t){e.regmo=t},expression:"regmo"}}),e._v(" "),n("br")],1),n("div",{staticClass:"row justify-center items-center"},[n("div",{staticClass:"col-xs-6"},[n("q-btn",{attrs:{color:"positive"},on:{click:function(t){e.register()}}},[e._v(" Uložit a pokračovat")])],1)]),e._v(" "),n("br"),e._v(" "),n("p")])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("\n                Dozvíte se o nové kalkulačce jako "),n("strong",[e._v("první")]),e._v("!\n            ")]),e._v(" "),n("li",[e._v("\n                Registrace je "),n("strong",[e._v("zdarma")]),e._v(".\n            ")]),e._v(" "),n("li",[e._v("\n                Dlouhodobě bojujeme za ochranu osobních údajů, Vaše údaje nikomu nedáme.\n            ")])])}]}},40:function(e,t,n){function r(e){n(153)}var o=n(3)(n(155),n(156),r,null,null);e.exports=o.exports},53:function(e,t,n){"use strict";function r(e){return"[object Array]"===_.call(e)}function o(e){return"[object ArrayBuffer]"===_.call(e)}function i(e){return"undefined"!=typeof FormData&&e instanceof FormData}function s(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function a(e){return"string"==typeof e}function u(e){return"number"==typeof e}function c(e){return void 0===e}function f(e){return null!==e&&"object"==typeof e}function l(e){return"[object Date]"===_.call(e)}function p(e){return"[object File]"===_.call(e)}function d(e){return"[object Blob]"===_.call(e)}function h(e){return"[object Function]"===_.call(e)}function m(e){return f(e)&&h(e.pipe)}function v(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function g(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function y(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function w(e,t){if(null!==e&&void 0!==e)if("object"==typeof e||r(e)||(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function x(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=x(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)w(arguments[n],e);return t}function b(e,t,n){return w(t,function(t,r){e[r]=n&&"function"==typeof t?k(t,n):t}),e}var k=n(81),C=n(125),_=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isBuffer:C,isFormData:i,isArrayBufferView:s,isString:a,isNumber:u,isObject:f,isUndefined:c,isDate:l,isFile:p,isBlob:d,isFunction:h,isStream:m,isURLSearchParams:v,isStandardBrowserEnv:y,forEach:w,merge:x,extend:b,trim:g}},54:function(e,t){var n=e.exports={version:"2.5.0"};"number"==typeof __e&&(__e=n)},68:function(e,t,n){e.exports={default:n(69),__esModule:!0}},69:function(e,t,n){var r=n(54),o=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},70:function(e,t,n){"use strict";(function(t){function r(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=n(53),i=n(127),s={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(82):void 0!==t&&(e=n(82)),e}(),transformRequest:[function(e,t){return i(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){a.headers[e]={}}),o.forEach(["post","put","patch"],function(e){a.headers[e]=o.merge(s)}),e.exports=a}).call(t,n(6))},81:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},82:function(e,t,n){"use strict";var r=n(53),o=n(128),i=n(130),s=n(131),a=n(132),u=n(83),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(133);e.exports=function(e){return new Promise(function(t,f){var l=e.data,p=e.headers;r.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||a(e.url)||(d=new window.XDomainRequest,h="onload",m=!0,d.onprogress=function(){},d.ontimeout=function(){}),e.auth){var v=e.auth.username||"",g=e.auth.password||"";p.Authorization="Basic "+c(v+":"+g)}if(d.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d[h]=function(){if(d&&(4===d.readyState||m)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?s(d.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?d.response:d.responseText,i={data:r,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:e,request:d};o(t,f,i),d=null}},d.onerror=function(){f(u("Network Error",e,null,d)),d=null},d.ontimeout=function(){f(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var y=n(134),w=(e.withCredentials||a(e.url))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;w&&(p[e.xsrfHeaderName]=w)}if("setRequestHeader"in d&&r.forEach(p,function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),f(e),d=null)}),void 0===l&&(l=null),d.send(l)})}},83:function(e,t,n){"use strict";var r=n(129);e.exports=function(e,t,n,o,i){var s=new Error(e);return r(s,t,n,o,i)}},84:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},85:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r}});