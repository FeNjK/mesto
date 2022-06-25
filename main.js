(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o){var i=o.handleCardClick,a=o.handleLikeCardClick,u=o.handleDeleteCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._likes=e.likes,this._cardId=e._id,this._ownerId=e.owner._id,this._userId=n,this._cardSelector=r,this._handleCardClick=i,this.handleLikeCardClick=a,this.handleDeleteCardClick=u}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._cardContainer=this._getTemplate(),this._cardImage=this._cardContainer.querySelector(".element__image"),this._cardTitle=this._cardContainer.querySelector(".element__title"),this._cardTrash=this._cardContainer.querySelector(".element__trash"),this._cardMark=this._cardContainer.querySelector(".element__mark"),this._cardMarkCounter=this._cardContainer.querySelector(".element__mark-counter"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardTitle.textContent=this._name,this._cardMarkCounter.textContent=this._likes.length,this._showDeleteButtonState(),this._setEventListeners(),this._checkCardLike(),this._cardContainer}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)})),this._cardMark.addEventListener("click",(function(){e.handleLikeCardClick(e)})),this._cardTrash.addEventListener("click",(function(){e.handleDeleteCardClick(e)}))}},{key:"_checkCardLike",value:function(){var e=this;this._likes.forEach((function(t){e._userId._id===t._id&&e._cardMark.classList.add("element__mark_active")}))}},{key:"isLiked",value:function(){var e=this;return Boolean(this._likes.find((function(t){return t._id===e._userId._id})))}},{key:"updateLikesCounter",value:function(e){this._likes=e.likes,this._cardMarkCounter.textContent=this._likes.length}},{key:"addLike",value:function(){this._cardMark.classList.add("element__mark_active")}},{key:"deleteLike",value:function(){this._cardMark.classList.remove("element__mark_active")}},{key:"_showDeleteButtonState",value:function(){this._userId._id!==this._ownerId&&this._cardTrash.remove()}},{key:"deleteCard",value:function(){this._cardContainer.remove(),this._cardContainer=null}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._form=n,this._inputElement=t.inputSelector,this._buttonElement=n.querySelector(t.submitButtonSelector),this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorMessageClass=t.errorMessageClass,this._inputList=Array.from(n.querySelectorAll(t.inputSelector))}var t,r;return t=e,(r=[{key:"removeInputError",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_showInputError",value:function(e,t){var n=this._form.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.classList.add(this._errorMessageClass),n.textContent=t}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorMessageClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"toggleButtonState",value:function(){this._form.checkValidity()?(this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._inactiveButtonClass)):(this._buttonElement.disabled=!0,this._buttonElement.classList.add(this._inactiveButtonClass))}},{key:"_setEventListeners",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addAppend",value:function(e){this._container.append(e)}},{key:"addPrepend",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),u(this,"_handlePopupClose",(function(e){(e.target.classList.contains("popup_activ")||e.target.classList.contains("popup__close-button"))&&n.close()})),this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_activ"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_activ"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._popup.addEventListener("mousedown",this._handlePopupClose)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function d(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupCaption=t._popup.querySelector(".popup__caption"),t}return t=a,(n=[{key:"open",value:function(e,t){this._popupCaption.textContent=e,this._popupImage.alt=e,this._popupImage.src=t,f(_(a.prototype),"open",this).call(this)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function C(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(e,t){var n,r=t.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitForm=r,n._popupForm=n._popup.querySelector(".popup__form"),n._inputList=n._popupForm.querySelectorAll(".popup__input"),n._submitButton=n._popup.querySelector(".popup__save-button"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputsСontent={},this._inputList.forEach((function(t){e._inputsСontent[t.name]=t.value})),this._inputsСontent}},{key:"setEventListeners",value:function(){var e=this;b(w(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues())}))}},{key:"processLoading",value:function(){this._submitButton.textContent="Сохранение...",this._submitButton.disabled=!0}},{key:"normalCondition",value:function(){this._submitButton.textContent="Сохранить",this._submitButton.disabled=!1}},{key:"close",value:function(){b(w(a.prototype),"close",this).call(this),this._popupForm.reset()}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=j(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},L.apply(this,arguments)}function j(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function I(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._submitForm=t._popup.querySelector(".popup__form_type_confirmation"),t._submitButton=t._popup.querySelector(".popup__save-button"),t}return t=a,(n=[{key:"setSubmit",value:function(e){this._submitHandlerCallback=e}},{key:"setEventListeners",value:function(){var e=this;L(T(a.prototype),"setEventListeners",this).call(this),this._submitForm.addEventListener("click",(function(t){t.preventDefault(),e._submitHandlerCallback()}))}},{key:"processLoading",value:function(){this._submitButton.textContent="Исполняю...",this._submitButton.disabled=!0}},{key:"normalCondition",value:function(){this._submitButton.textContent="Да",this._submitButton.disabled=!1}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=function(){function e(t){var n=t.userName,r=t.userActivityType,o=t.userAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userActivityType=document.querySelector(r),this._userAvatar=document.querySelector(o)}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,userActivityType:this._userActivityType.textContent,userAvatar:this._userAvatar.src}}},{key:"setUserInfo",value:function(e,t){this._userName.textContent=e,this._userActivityType.textContent=t}},{key:"setUserData",value:function(e){this._userName._id=e._id,this._userName.textContent=e.name,this._userActivityType.textContent=e.about,this._userAvatar.src=e.avatar}},{key:"setUserInfoAvatar",value:function(e){this._userAvatar.src=e.avatar,e.avatar.classList.add(".profile__avatar")}}],n&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_ringingServer",value:function(e){return e.ok?e.json():Promise.reject("Возникла ошибка ".concat(e.status))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._ringingServer(t)})).then((function(e){return e}))}},{key:"setUserInfo",value:function(e,t){var n=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return n._ringingServer(e)})).then((function(e){return e}))}},{key:"setUserAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._ringingServer(e)})).then((function(e){return e}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then((function(t){return e._ringingServer(t)})).then((function(e){return e}))}},{key:"addNewCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._ringingServer(e)})).then((function(e){return e}))}},{key:"removeCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._ringingServer(e)})).then((function(e){return e}))}},{key:"setLikeCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._ringingServer(e)})).then((function(e){return e}))}},{key:"deleteLikeCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._ringingServer(e)})).then((function(e){return e}))}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),D=document.querySelector(".profile-info__editing-button"),U=document.querySelector(".profile__add-button"),M=document.querySelector(".profile-info__avatar-button"),N=(document.querySelector(".profile-info__data"),document.querySelector(".popup__form_type_user-data")),F=document.querySelector(".popup__form_type_new-card"),V=document.querySelector(".popup__form_type_avatar"),H=N.querySelector(".popup__input_content_name"),J=N.querySelector(".popup__input_content_activity-type"),G={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_error",errorMessageClass:"popup__validation-message_active"};function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var $=new r(G,N),K=new r(G,F),Q=new r(G,V);$.enableValidation(),K.enableValidation(),Q.enableValidation();var W=new x({url:"https://mesto.nomoreparties.co/v1/cohort-43",headers:{"Content-type":"application/json",authorization:"10bf8282-16d5-46f1-976c-28311168fc94"}}),X=new y(".popup_task_show-image");X.setEventListeners();var Y,Z=new A(".popup_type_confirmation");Z.setEventListeners(),Promise.all([W.getUserInfo(),W.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Y=o,re.setUserData(o),ee.renderItems(i)})).catch((function(e){console.log(e)}));var ee=new i({renderer:function(e){ee.addAppend(te(e))}},".elements");function te(e){var n=new t(e,Y,".template",{handleCardClick:function(e,t){X.open(e,t)},handleLikeCardClick:function(e){e.isLiked()?W.deleteLikeCard(e._cardId).then((function(t){e.updateLikesCounter(t),e.deleteLike()})).catch((function(e){console.log("Тут какая-то ошибка c удалением лайка ".concat(e))})):W.setLikeCard(e._cardId).then((function(t){e.updateLikesCounter(t),e.addLike()})).catch((function(e){console.log("Тут какая-то ошибка c добавлением лайка ".concat(e))}))},handleDeleteCardClick:function(e){Z.open(),Z.setSubmit((function(){Z.processLoading(),W.removeCard(e._cardId).then((function(){Z.close(),e.deleteCard()})).catch((function(e){console.log("Тут какая-то ошибка с удалением карточки ".concat(e))})).finally((function(){return Z.normalCondition()}))}))}});return n.generateCard()}U.addEventListener("click",(function(){F.reset(),K.removeInputError(),K.toggleButtonState(),ne.open()}));var ne=new S(".popup_task_add",{submitForm:function(e){ne.processLoading(),W.addNewCard({name:e["card-title"],link:e["picture-link"]}).then((function(e){ne.close(),ee.addPrepend(te(e))})).catch((function(e){console.log("Тут какая-то ошибка ".concat(e))})).finally((function(){ne.normalCondition()}))}}),re=new B({userName:".profile-info__name",userActivityType:".profile-info__activity-type",userAvatar:".profile-info__avatar"});D.addEventListener("click",(function(){var e;e=re.getUserInfo(),H.value=e.userName,J.value=e.userActivityType,$.removeInputError(),$.toggleButtonState(),oe.open()}));var oe=new S(".popup_task_edit",{submitForm:function(e){oe.processLoading(),W.setUserInfo(e.profile_name,e.type_of_activity).then((function(e){oe.close(),re.setUserInfo(e.name,e.about)})).catch((function(e){console.log("Тут какая-то ошибка ".concat(e))})).finally((function(){oe.normalCondition()}))}});M.addEventListener("click",(function(){Q.removeInputError(),Q.toggleButtonState(),ie.open()}));var ie=new S(".popup_task_avatar",{submitForm:function(e){ie.processLoading(),W.setUserAvatar(e["profile-avatar"]).then((function(e){ie.close(),re.setUserInfoAvatar(e)})).catch((function(e){console.log("Тут какая-то ошибка ".concat(e))})).finally((function(){ie.normalCondition()}))}});oe.setEventListeners(),ne.setEventListeners(),ie.setEventListeners()})();
//# sourceMappingURL=main.js.map