(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r,o,i,u,a,c,s,l){var f=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_handleLikeIcon",(function(){f._likeButton.classList.contains("places__like_liked")?f._handleLike("DELETE"):f._handleLike("PUT")})),t(this,"_handleDeleteCard",(function(){f._handleDeleteLClick()})),t(this,"_handlePreviewPicture",(function(){f._handleCardClick(f._placeImage)})),this._name=e,this._link=r,this._likes=o,this._selector=i,this._handleCardClick=a,this._deleteButtonStatus=u,this._handleDeleteLClick=c,this._handleLike=s,this._isLiked=l}var r,o;return r=n,(o=[{key:"_getCardTemplate",value:function(){this._cardTemplate=document.querySelector(this._selector).content,this._card=this._cardTemplate.querySelector(".places__card").cloneNode(!0)}},{key:"createCard",value:function(){return this._getCardTemplate(),this._placeImage=this._card.querySelector(".places__image"),this._card.querySelector(".places__name").textContent=this._name,this._likeCounter=this._card.querySelector(".places__like-number"),this._likeCounter.textContent=this._likes,this._placeImage.alt=this._name,this._placeImage.src=this._link,this._likeCard(),this._deleteCard(),this._setEventListeners(),this._setBucketStatus(),this._isLiked&&this._likeButton.classList.toggle("places__like_liked"),this._card}},{key:"_deleteCard",value:function(){this._deleteButton=this._card.querySelector(".places__delete-button")}},{key:"_likeCard",value:function(){this._likeButton=this._card.querySelector(".places__like")}},{key:"_setEventListeners",value:function(){var e=this;this._deleteButton.addEventListener("click",(function(t){return e._handleDeleteCard(t)})),this._likeButton.addEventListener("click",(function(){return e._handleLikeIcon()})),this._placeImage.addEventListener("click",(function(){return e._handlePreviewPicture()}))}},{key:"removeCard",value:function(){this._card.remove()}},{key:"toggleLikeButton",value:function(){this._likeButton.classList.toggle("places__like_liked")}},{key:"deleteLike",value:function(){this._likes=this._likes-1,this._likeCounter.textContent=this._likes}},{key:"addLike",value:function(){this._likes=this._likes+1,this._likeCounter.textContent=this._likes}},{key:"_setBucketStatus",value:function(){this._deleteButtonStatus||(this._card.querySelector(".places__delete-button").style.display="none")}}])&&e(r.prototype,o),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._errorClass=t.errorClass,this._inputErrorClass=t.inputErrorClass,this._errorVisibleClass=t.errorVisibleClass,this._formElement=n}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._toggleButtonState(),this._inputList.forEach((function(t){e._checkInputValidity(t),e._toggleButtonState(),t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_showInputError",value:function(e){this._errorElement=this._formElement.querySelector("#".concat(e.id," + ").concat(this._errorClass)),e.classList.add(this._inputErrorClass),this._errorElement.textContent=e.validationMessage,this._errorElement.classList.add(this._errorVisibleClass)}},{key:"_hideInputError",value:function(e){this._errorElement=this._formElement.querySelector("#".concat(e.id," + ").concat(this._errorClass)),e.classList.remove(this._inputErrorClass),this._errorElement.classList.remove(this._errorVisibleClass),this._errorElement.textContent=""}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled","")):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"setValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._checkInputValidity(t),e._toggleButtonState()}))}}])&&r(t.prototype,n),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),u(this,"_handleClickClose",(function(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__close-button"))&&n.close()})),this._popupSelector=t,this._popup=document.querySelector(this._popupSelector)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){document.addEventListener("click",this._handleClickClose)}}])&&i(t.prototype,n),e}();function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._popup=document.querySelector(n._popupSelector),n._button=n._popup.querySelector(".popup__submit"),n._submit=t,n._inputList=n._popup.querySelectorAll(".popup__input"),n._popupForm=n._popup.querySelector(".popup__form"),n}return t=u,(n=[{key:"open",value:function(){l(h(u.prototype),"open",this).call(this),this._button.textContent="Сохранить"}},{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){l(h(u.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",this._submitPopup.bind(this))}},{key:"close",value:function(){l(h(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"_submitPopup",value:function(e){e.preventDefault(),this._submit(this._getInputValues()),this.renderLoading(!0)}},{key:"renderLoading",value:function(){this._button.textContent="Сохранение..."}}])&&s(t.prototype,n),u}(a);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupCardImage=t._popup.querySelector(".popup__image"),t._captionImage=t._popup.querySelector(".popup__image-title"),t}return t=u,(n=[{key:"open",value:function(e){v(k(u.prototype),"open",this).call(this),this._popupCardImage.src=e.src,this._captionImage.alt=e.alt,this._captionImage.textContent=e.alt}}])&&y(t.prototype,n),u}(a);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(t),this._jobElement=document.querySelector(n)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,job:this._jobElement.textContent}}},{key:"setUserInfo",value:function(e,t){this._nameElement.textContent=e,this._jobElement.textContent=t}}])&&E(t.prototype,n),e}();function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._elementsContainer=document.querySelector(t)}var t,n;return t=e,(n=[{key:"addItem",value:function(e,t){"append"===t?this._elementsContainer.append(e):"prepend"===t&&this._elementsContainer.prepend(e)}}])&&w(t.prototype,n),e}();function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._options=t}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._options.baseUrl,"/users/me"),{headers:this._options.headers}).then((function(t){return e._checkAnswer(t)})).then((function(t){return e._parseResponse(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._options.baseUrl,"/cards"),{headers:this._options.headers}).then((function(t){return e._checkAnswer(t)})).then((function(t){return e._parseResponse(t)}))}},{key:"setUserInfo",value:function(e,t){var n=this;return fetch("".concat(this._options.baseUrl,"/users/me"),{method:"PATCH",headers:this._options.headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return n._checkAnswer(e)}))}},{key:"addCard",value:function(e,t){var n=this;return fetch("".concat(this._options.baseUrl,"/cards"),{method:"POST",headers:this._options.headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return n._checkAnswer(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._options.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._options.headers}).then((function(e){return t._checkAnswer(e)}))}},{key:"likeCard",value:function(e,t){var n=this;return fetch("".concat(this._options.baseUrl,"/cards/likes/").concat(e),{method:t,headers:this._options.headers}).then((function(e){return n._checkAnswer(e)}))}},{key:"changeAvatar",value:function(e){var t=this;return fetch("".concat(this._options.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._options.headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._checkAnswer(e)}))}},{key:"_checkAnswer",value:function(e){return e.ok?Promise.resolve(e):Promise.reject(e)}},{key:"_parseResponse",value:function(e){return e.json()}}])&&L(t.prototype,n),e}();function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t,n){return(I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function q(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._popup=document.querySelector(n._popupSelector),n._submit=t,n}return t=u,(n=[{key:"setEventListeners",value:function(){I(R(u.prototype),"setEventListeners",this).call(this),this._popup.querySelector(".popup__submit").addEventListener("click",this._clickButton.bind(this))}},{key:"open",value:function(e,t){I(R(u.prototype),"open",this).call(this),this._card=e,this._id=t}},{key:"_clickButton",value:function(){this._submit(this._card,this._id)}}])&&P(t.prototype,n),u}(a),T=document.querySelector(".profile__edit"),V=document.querySelector(".profile__add"),x=document.querySelector("#name"),U=document.querySelector("#job"),D=document.querySelector(".profile__avatar-button"),N=document.querySelector(".profile__avatar"),J={inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disable",errorClass:".popup__input-error",inputErrorClass:"popup__input_type_error",errorVisibleClass:"popup__input-error_active"};function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var H=new o(J,document.querySelector("#popupEdit .popup__form"));H.enableValidation();var M=new o(J,document.querySelector("#popupAdd .popup__form"));M.enableValidation();var z=new o(J,document.querySelector("#popupAvatar .popup__form"));z.enableValidation();var $=new C(".profile__name",".profile__profession"),G=new _("#popupEdit",(function(e){var t=e.fullname,n=e.job;ee.setUserInfo(t,n).then((function(e){return e.json()})).then((function(){$.setUserInfo(t,n)})).then((function(){G.close()})).catch((function(e){console.log(e)}))}));G.setEventListeners();var K=new _("#popupAdd",(function(e){var t=e.pictureName,n=e.link;ee.addCard(t,n).then((function(e){return e.json()})).then((function(e){var r=e._id;W.addItem(Z(t,n,0,"#card-template",!0,r,!1),"prepend")})).then((function(){K.close()})).catch((function(e){console.log(e)}))}));K.setEventListeners();var Q=new A("#popupDelete",(function(e,t){ee.deleteCard(t).then((function(){e.removeCard()})).then((function(){Q.close()})).catch((function(e){console.log(e)}))}));Q.setEventListeners();var W=new S(".places"),X=new _("#popupAvatar",(function(e){var t=e.link;ee.changeAvatar(t).then((function(){N.src=t})).then((function(){X.close()})).catch((function(e){console.log(e)}))}));X.setEventListeners();var Y=new g("#imagePopup");function Z(e,t,r,o,i,u,a){var c=new n(e,t,r,o,i,(function(e){Y.open(e)}),(function(){Q.open(c,u)}),(function(e){ee.likeCard(u,e).then((function(){"DELETE"===e?c.deleteLike():c.addLike()})).then((function(){c.toggleLikeButton()})).catch((function(e){console.log(e)}))}),a);return c.createCard()}Y.setEventListeners(),T.addEventListener("click",(function(){var e=$.getUserInfo();x.value=e.name,U.value=e.job,H.setValidation(),G.open()})),V.addEventListener("click",(function(){M.setValidation(),K.open()})),D.addEventListener("click",(function(){z.setValidation(),X.open()}));var ee=new O({baseUrl:"https://nomoreparties.co/v1/cohort-26",headers:{authorization:"e21e18fa-ab6d-4a3e-87f4-9a2549a22c3a","Content-Type":"application/json"}}),te=[ee.getUserInfo(),ee.getInitialCards()];Promise.all(te).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];$.setUserInfo(o.name,o.about),N.src=o.avatar;var u=o._id;i.forEach((function(e){var t=e.owner._id===u,n=e._id,r=!1;e.likes.forEach((function(e){e._id===u&&(r=!0)})),W.addItem(Z(e.name,e.link,e.likes.length,"#card-template",t,n,r),"append")}))})).catch((function(e){console.log(e)}))})();