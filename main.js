(()=>{"use strict";var e="";const t=[{name:"Кавказские горы",link:e+"d1f2205e93002569ed19.jpg"},{name:"Тундровая равнина",link:e+"cf232c760eaeb6ae086b.jpg"},{name:"Река Волга",link:e+"ed4ab5bd1fd2a472b742.jpg"},{name:"Река Енисей",link:e+"57a3bc167ad931f8c8aa.jpg"},{name:"Байкал",link:e+"98b9a86bc3eda642043b.jpg"},{name:"Таёжные леса",link:e+"7814fe2719c928a371ea.jpg"}];function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n,r){var o=r.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._cardSelector=n,this._handleCardClick=o}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._cardContainer=this._getTemplate(),this._cardImage=this._cardContainer.querySelector(".element__image"),this._cardTitle=this._cardContainer.querySelector(".element__title"),this._cardMark=this._cardContainer.querySelector(".element__mark"),this._cardTrash=this._cardContainer.querySelector(".element__trash"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardTitle.textContent=this._name,this._setEventListeners(),this._cardContainer}},{key:"_handleCardLike",value:function(){this._cardMark.classList.toggle("element__mark_active")}},{key:"_handleCardDelete",value:function(){this._cardContainer.remove(),this._cardContainer=null}},{key:"_setEventListeners",value:function(){var e=this;this._cardMark.addEventListener("click",(function(){e._handleCardLike()})),this._cardTrash.addEventListener("click",(function(){e._handleCardDelete()})),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._form=n,this._inputElement=t.inputSelector,this._buttonElement=n.querySelector(t.submitButtonSelector),this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorMessageClass=t.errorMessageClass,this._inputList=Array.from(n.querySelectorAll(t.inputSelector))}var t,n;return t=e,(n=[{key:"removeInputError",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_showInputError",value:function(e,t){var n=this._form.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.classList.add(this._errorMessageClass),n.textContent=t}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorMessageClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"toggleButtonState",value:function(){this._form.checkValidity()?(this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._inactiveButtonClass)):(this._buttonElement.disabled=!0,this._buttonElement.classList.add(this._inactiveButtonClass))}},{key:"_setEventListeners",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addAppend",value:function(e){this._container.append(e)}},{key:"addPrepend",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),s(this,"_handlePopupClose",(function(e){(e.target.classList.contains("popup_activ")||e.target.classList.contains("popup__close-button"))&&n.close()})),this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_activ"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_activ"),document.addEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._popup.addEventListener("mousedown",this._handlePopupClose)}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=y(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},h.apply(this,arguments)}function y(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function _(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(r);if(o){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupCaption=t._popup.querySelector(".popup__caption"),t}return t=a,(n=[{key:"open",value:function(e,t){this._popupCaption.textContent=e,this._popupImage.alt=e,this._popupImage.src=t,h(v(a.prototype),"open",this).call(this)}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=C(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function C(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function E(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function a(e,t){var n,r=t.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitForm=r,n._popupForm=n._popup.querySelector(".popup__form"),n._inputList=n._popupForm.querySelectorAll(".popup__input"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputsСontent={},this._inputList.forEach((function(t){e._inputsСontent[t.name]=t.value})),this._inputsСontent}},{key:"setEventListeners",value:function(){var e=this;k(S(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues())}))}},{key:"close",value:function(){k(S(a.prototype),"close",this).call(this),this._popupForm.reset()}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){var n=t.userName,r=t.userActivityType;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userActivityType=document.querySelector(r)}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,userActivityType:this._userActivityType.textContent}}},{key:"setUserInfo",value:function(e,t){this._userName.textContent=e,this._userActivityType.textContent=t}}],n&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t){var n=t.url,r=t.token;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._token=r}var t,n;return t=e,(n=[{key:"_ringingServer",value:function(e){return e.ok?e.json():Promise.reject("Возникла ошибка ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:{"Content-type":"application/json",authorization:this._token}}).then(this._ringingServer)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:{"Content-type":"application/json",authorization:this._token}}).then(this._ringingServer)}},{key:"setUserInfo",value:function(e,t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{"Content-type":"application/json",authorization:this._token},body:JSON.stringify({userName:e,userActivityType:t})}).then(this._ringingServer)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{"Content-type":"application/json",authorization:this._token},body:JSON.stringify({avatar:e})}).then(this._ringingServer)}},{key:"addNewCard",value:function(e,t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{"Content-type":"application/json",authorization:this._token},body:JSON.stringify({name:e,link:t})}).then(this._ringingServer)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:{"Content-type":"application/json",authorization:this._token}}).then(this._ringingServer)}},{key:"setLikeCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:{"Content-type":"application/json",authorization:this._token}}).then(this._ringingServer)}},{key:"deleteLikeCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:{"Content-type":"application/json",authorization:this._token}}).then(this._ringingServer)}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),I=document.querySelector(".profile-info__editing-button"),q=document.querySelector(".profile__add-button"),R=(document.querySelector(".profile-info__data"),document.querySelector(".popup__form_type_user-data")),A=document.querySelector(".popup__form_type_new-card"),B=R.querySelector(".popup__input_content_name"),N=R.querySelector(".popup__input_content_activity-type"),x={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_error",errorMessageClass:"popup__validation-message_active"},z=new i(x,R),D=new i(x,A);z.enableValidation(),D.enableValidation();var F=new T({url:"https://mesto.nomoreparties.co/v1/cohort-43",headers:{authorization:"10bf8282-16d5-46f1-976c-28311168fc94","Content-Type":"application/json"}}),M=new m(".popup_task_show-image");function U(e){return new r(e,".template",{handleCardClick:function(e,t){M.open(e,t)}}).generateCard()}M.setEventListeners();var V=new u({items:t,renderer:function(e){var t=U(e);V.addAppend(t)}},".elements");V.renderItems();var J=new P({userName:".profile-info__name",userActivityType:".profile-info__activity-type"});I.addEventListener("click",(function(){var e;e=J.getUserInfo(),B.value=e.userName,N.value=e.userActivityType,z.removeInputError(),z.toggleButtonState(),G.open()}));var G=new j(".popup_task_edit",{submitForm:function(e){J.setUserInfo(e.profile_name,e.type_of_activity),G.close()}});q.addEventListener("click",(function(){A.reset(),D.removeInputError(),D.toggleButtonState(),H.open()}));var H=new j(".popup_task_add",{submitForm:function(e){!function(e){var t=U({name:e["card-title"],link:e["picture-link"]});V.addPrepend(t)}(e),H.close()}});Promise.all([F.getInitialCards()]).then,G.setEventListeners(),H.setEventListeners()})();