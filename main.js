/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return n};var r,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(r){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof _?e:_,i=Object.create(o.prototype),c=new T(n||[]);return a(i,"_invoke",{value:O(t,r,c)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=p;var h="suspendedStart",y="suspendedYield",v="executing",m="completed",b={};function _(){}function w(){}function g(){}var S={};f(S,u,(function(){return this}));var k=Object.getPrototypeOf,x=k&&k(k(A([])));x&&x!==o&&i.call(x,u)&&(S=x);var E=g.prototype=_.prototype=Object.create(S);function L(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function j(e,r){function n(o,a,c,u){var s=d(e[o],e,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&i.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function O(t,e,n){var o=h;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=q(c,n);if(u){if(u===b)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=d(t,e,n);if("normal"===s.type){if(o=n.done?m:y,s.arg===b)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function q(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,q(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var i=d(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,b;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,b):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,b)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function A(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return a.next=a}}throw new TypeError(t(e)+" is not iterable")}return w.prototype=g,a(E,"constructor",{value:g,configurable:!0}),a(g,"constructor",{value:w,configurable:!0}),w.displayName=f(g,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,f(t,l,"GeneratorFunction")),t.prototype=Object.create(E),t},n.awrap=function(t){return{__await:t}},L(j.prototype),f(j.prototype,s,(function(){return this})),n.AsyncIterator=j,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new j(p(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(E),f(E,l,"Generator"),f(E,u,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=A,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),b}},n}function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}function o(t){var e="function"==typeof Map?new Map:void 0;return o=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return function(t,e,r){if(i())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,e);var o=new(t.bind.apply(t,n));return r&&a(o,r.prototype),o}(t,arguments,c(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,t)},o(t)}function i(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(i=function(){return!!t})()}function a(t,e){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},a(t,e)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}var u={baseUrl:"https://nomoreparties.co/v1/wff-cohort-12",headers:{authorization:"8bfa14b5-dac7-4d94-bb9c-231fe312ee6e","Content-Type":"application/json"}},s=function(e){function r(e,n){var o,a,u,s;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(a=this,u=r,s=[e],u=c(u),o=function(e,r){if(r&&("object"===t(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}(a,i()?Reflect.construct(u,s||[],c(a).constructor):u.apply(a,s))).name="APIError",o.status=n,o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&a(t,e)}(r,e),n=r,Object.defineProperty(n,"prototype",{writable:!1}),n;var n}(o(Error));function l(){return(l=n(e().mark((function t(){var r,n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(u.baseUrl,"/users/me"),{headers:u.headers});case 3:if((r=t.sent).ok){t.next=6;break}throw new s("Не удалось получить информацию о пользователе",r.status);case 6:return t.next=8,r.json();case 8:return n=t.sent,t.abrupt("return",n);case 12:return t.prev=12,t.t0=t.catch(0),t.abrupt("return",Promise.reject(t.t0));case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}function f(){return(f=n(e().mark((function t(r){var n,o,i,a;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.name,o=r.about,t.prev=1,t.next=4,fetch("".concat(u.baseUrl,"/users/me"),{method:"PATCH",headers:u.headers,body:JSON.stringify({name:n,about:o})});case 4:if((i=t.sent).ok){t.next=7;break}throw new s("Не удалось обновить информацию о пользователе",i.status);case 7:return t.next=9,i.json();case 9:return a=t.sent,t.abrupt("return",a);case 13:return t.prev=13,t.t0=t.catch(1),t.abrupt("return",Promise.reject(t.t0));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})))).apply(this,arguments)}function p(){return(p=n(e().mark((function t(r){var n,o;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(u.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:u.headers,body:JSON.stringify({avatar:r})});case 3:if((n=t.sent).ok){t.next=6;break}throw new s("Не удалось обновить аватар",n.status);case 6:return t.next=8,n.json();case 8:return o=t.sent,t.abrupt("return",o);case 12:return t.prev=12,t.t0=t.catch(0),t.abrupt("return",Promise.reject(t.t0));case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}function d(){return(d=n(e().mark((function t(){var r,n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(u.baseUrl,"/cards"),{headers:u.headers});case 3:if((r=t.sent).ok){t.next=6;break}throw new s("Не удалось получить карточки",r.status);case 6:return t.next=8,r.json();case 8:return n=t.sent,t.abrupt("return",n);case 12:return t.prev=12,t.t0=t.catch(0),t.abrupt("return",Promise.reject(t.t0));case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}function h(){return(h=n(e().mark((function t(r){var n,o,i,a;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.name,o=r.link,t.prev=1,t.next=4,fetch("".concat(u.baseUrl,"/cards"),{method:"POST",headers:u.headers,body:JSON.stringify({name:n,link:o})});case 4:if((i=t.sent).ok){t.next=7;break}throw new s("Не удалось добавить карточку",i.status);case 7:return t.next=9,i.json();case 9:return a=t.sent,t.abrupt("return",a);case 13:return t.prev=13,t.t0=t.catch(1),t.abrupt("return",Promise.reject(t.t0));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})))).apply(this,arguments)}function y(){return(y=n(e().mark((function t(r){var n,o;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(u.baseUrl,"/cards/").concat(r),{method:"DELETE",headers:u.headers});case 3:if((n=t.sent).ok){t.next=6;break}throw new s("Не удалось удалить карточку",n.status);case 6:return t.next=8,n.json();case 8:return o=t.sent,t.abrupt("return",o);case 12:return t.prev=12,t.t0=t.catch(0),t.abrupt("return",Promise.reject(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}function v(){return(v=n(e().mark((function t(r){var n,o;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(u.baseUrl,"/cards/likes/").concat(r),{method:"PUT",headers:u.headers});case 3:if((n=t.sent).ok){t.next=6;break}throw new s("Не удалось поставить лайк",n.status);case 6:return t.next=8,n.json();case 8:return o=t.sent,t.abrupt("return",o);case 12:return t.prev=12,t.t0=t.catch(0),t.abrupt("return",Promise.reject(t.t0));case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}function m(){return(m=n(e().mark((function t(r){var n,o;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(u.baseUrl,"/cards/likes/").concat(r),{method:"DELETE",headers:u.headers});case 3:if((n=t.sent).ok){t.next=6;break}throw new s("Не удалось удалить лайк",n.status);case 6:return t.next=8,n.json();case 8:return o=t.sent,t.abrupt("return",o);case 12:return t.prev=12,t.t0=t.catch(0),t.abrupt("return",Promise.reject(t.t0));case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}var b=["name","link"];var _=document.querySelector("#card-template").content;function w(t){t.classList.add("popup_is-opened"),document.addEventListener("keydown",k)}function g(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",k)}function S(t){var e=document.querySelector(".popup_is-opened");["popup","popup__close"].some((function(e){return t.target.classList.contains(e)}))&&g(e)}function k(t){"Escape"===t.key&&g(document.querySelector(".popup_is-opened"))}function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function E(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,L(n.key),n)}}function L(t){var e=function(t,e){if("object"!=x(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=x(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==x(e)?e:e+""}var j=function(){return t=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formList=Array.from(document.querySelectorAll(this._formSelector))},(e=[{key:"enableValidation",value:function(){var t=this;this._formList.forEach((function(e){e.addEventListener("submit",(function(t){return t.preventDefault()})),t.setEventListeners(e)}))}},{key:"setEventListeners",value:function(t){var e=this,r=Array.from(t.querySelectorAll(this._inputSelector)),n=t.querySelector(this._submitButtonSelector);this.toggleButtonState(r,n),r.forEach((function(o){o.addEventListener("input",(function(){e.checkInputValidity(t,o),e.toggleButtonState(r,n)}))}))}},{key:"toggleButtonState",value:function(t,e){this.hasInvalidInput(t)?(e.disabled=!0,e.classList.add(this._inactiveButtonClass)):(e.disabled=!1,e.classList.remove(this._inactiveButtonClass))}},{key:"checkInputValidity",value:function(t,e){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity(""),e.validity.valid?this.hideInputError(t,e):this.showInputError(t,e,e.validationMessage)}},{key:"hasInvalidInput",value:function(t){return t.some((function(t){return t.validity.patternMismatch||t.setCustomValidity(""),!t.validity.valid}))}},{key:"showInputError",value:function(t,e,r){var n=t.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=r,n.classList.add(this._errorClass)}},{key:"hideInputError",value:function(t,e){var r=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),r.textContent="",r.classList.remove(this._errorClass)}},{key:"clearValidation",value:function(t){var e=this,r=Array.from(t.querySelectorAll(this._inputSelector)),n=t.querySelector(this._submitButtonSelector);this.toggleButtonState(r,n),r.forEach((function(r){e.hideInputError(t,r)}))}}])&&E(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function O(){location.reload()}function q(t,e){if(t){if("string"==typeof t)return C(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?C(t,e):void 0}}function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var P,T,A=document.querySelector(".profile__image"),I=document.querySelector(".profile__info"),B=document.querySelector(".places__loader"),N=document.querySelector(".places__list"),D=document.querySelector(".profile__edit-button"),U=document.querySelector(".profile__edit-avatar-button"),V=document.querySelector(".profile__add-button"),G=document.querySelector(".popup_type_edit"),M=document.querySelector(".popup_type_edit-avatar"),F=document.querySelector(".popup_type_new-card"),R=document.querySelector(".popup_type_image"),J=document.forms["edit-profile"],H=document.forms["edit-avatar"],Y=document.forms["new-place"],z=null,$=new j({formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"});function K(t,e,r){switch(e){case"loading":t.classList.add("loader_is-loading");break;case"error":t.classList.add("loader_is-error"),t.querySelector(".loader__button").addEventListener("click",O),r instanceof s&&(t.querySelector(".loader__error-code").textContent="Код ошибки: ".concat(r.status));break;default:t.classList.remove("loader_is-loading")}}function Q(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"append",o=function(t,e,r,n,o){var i,a=e.name,c=e.link,u=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(e,b),s=_.querySelector(".card").cloneNode(!0),l=s.querySelector(".card__image"),f=s.querySelector(".card__title"),p=s.querySelector(".card__delete-button"),d=s.querySelector(".card__like-button"),h=s.querySelector(".card__like-counter");return s.dataset.id=u._id,l.src=c,l.alt=a,f.textContent=a,h.textContent=null===(i=u.likes)||void 0===i?void 0:i.length,d.addEventListener("click",n),l.addEventListener("click",o),u.owner._id!==t?p.remove():p.addEventListener("click",r),u.likes.some((function(e){return e._id===t}))&&d.classList.add("card__like-button_is-active"),s}(t,e,(function(){return function(t){(function(t){return y.apply(this,arguments)})(t.dataset.id).then((function(){return t.remove()})).catch((function(t){console.log(t)}))}(o)}),(function(){return function(t){var e=t.dataset.id,r=t.querySelector(".card__like-button"),n=t.querySelector(".card__like-counter"),o=r.classList.contains("card__like-button_is-active")?function(t){return m.apply(this,arguments)}(e):function(t){return v.apply(this,arguments)}(e);o.then((function(t){n.textContent=t.likes.length,r.classList.toggle("card__like-button_is-active")})).catch((function(t){console.log(t)}))}(o)}),(function(){return r=(t=e).name,n=t.link,o=R.querySelector(".popup__image"),i=R.querySelector(".popup__caption"),o.src=n,o.alt=r,i.textContent=r,void w(R);var t,r,n,o,i}));r[n](o)}function W(t){var e=t.name,r=t.about;I.querySelector(".profile__title").textContent=e,I.querySelector(".profile__description").textContent=r}function X(t){var e=t.avatar;A.src=e}function Z(t,e){var r=e.querySelector(".form__button");r.classList.remove("form__button_failed"),r.textContent=t?"Сохранение...":"Сохранить"}function tt(t,e){var r=t.querySelector(".form__button");r.textContent=e,r.classList.add("form__button_failed")}function et(t,e){t instanceof s?(tt(e,"Не удалось сохранить (".concat(t.status,")")),console.log("[".concat(t.status,"] ").concat(t))):(tt(e,"Не удалось сохранить"),console.log(t))}$.enableValidation(),D.addEventListener("click",(function(){var t,e={profileName:(t=I).querySelector(".profile__title"),profileDesc:t.querySelector(".profile__description")},r=e.profileName,n=e.profileDesc,o=J.elements,i=o.name,a=o.description;clearTimeout(z),Z(!1,J);var c=[r.textContent,n.textContent];i.value=c[0],a.value=c[1],$.clearValidation(J),w(G)})),U.addEventListener("click",(function(){var t=H.elements.link;clearTimeout(P),Z(!1,H),t.value=A.src,$.clearValidation(H),w(M)})),V.addEventListener("click",(function(){clearTimeout(T),Z(!1,Y),Y.reset(),$.clearValidation(Y),w(F)})),H.addEventListener("submit",(function(t){t.preventDefault();var e=H.elements.link;Z(!0,H),function(t){return p.apply(this,arguments)}(e.value).then((function(t){g(M),X(t)})).catch((function(t){return et(t,H)})).finally((function(){P=setTimeout((function(){return Z(!1,H)}),2e3)}))})),J.addEventListener("submit",(function(t){t.preventDefault();var e=J.elements,r=e.name,n=e.description;Z(!0,J),function(t){return f.apply(this,arguments)}({name:r.value,about:n.value}).then((function(t){g(G),W(t)})).catch((function(t){return et(t,J)})).finally((function(){z=setTimeout((function(){return Z(!1,J)}),2e3)}))})),Y.addEventListener("submit",(function(t){t.preventDefault();var e=Y.elements,r=e["place-name"],n=e.link;Z(!0,Y),function(t){return h.apply(this,arguments)}({name:r.value,link:n.value}).then((function(t){Q(t.owner._id,t,N,"prepend"),g(F)})).catch((function(t){return et(t,Y)})).finally((function(){T=setTimeout((function(){return Z(!1,Y)}),2e3)}))})),G.addEventListener("click",S),M.addEventListener("click",S),F.addEventListener("click",S),R.addEventListener("click",S),K(B,"loading"),Promise.all([function(){return l.apply(this,arguments)}(),function(){return d.apply(this,arguments)}()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(e,r)||q(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];W(o),X(o),D.disabled=!1,U.disabled=!1,V.disabled=!1;var a,c,u=function(t){return function(t){return function(t){if(Array.isArray(t))return C(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||q(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t).sort((function(t,e){var r=t.createdAt,n=e.createdAt;return new Date(n)-new Date(r)}))}(i);a=o._id,c=N,u.forEach((function(t){Q(a,t,c)}))})).catch((function(t){K(B,"error",t),console.log(t)})).finally((function(){K(B)}))})();