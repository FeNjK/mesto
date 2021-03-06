export default class FormValidator {

  constructor(config, form) {
    this._config = config;
    this._form = form;
    this._inputElement = config.inputSelector;
    this._buttonElement = form.querySelector(config.submitButtonSelector);
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorMessageClass = config.errorMessageClass;
    this._inputList = Array.from(form.querySelectorAll(config.inputSelector));
  }

  // Метод очистки полей ввода (на передачу в index.js)
  removeInputError() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

  // Метод показа сообщения об ошибке при валидации
  _showInputError (inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorMessageClass);
    errorElement.textContent = errorMessage;
  }

  // Метод сокрытия сообщения об ошибке при валидации
  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorMessageClass);
    errorElement.textContent = '';
  };

  // Метод проверки поля ввода на валидность
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  // Метод условий состояния кнопки сохранения данных формы (на передачу в index.js)
  toggleButtonState() {
    if (this._form.checkValidity()) {
      this._buttonElement.removeAttribute('disabled');
      this._buttonElement.classList.remove(this._inactiveButtonClass);
    } else {
      this._buttonElement.disabled = true;
      this._buttonElement.classList.add(this._inactiveButtonClass);
    }
  }

  // Метод проверки на валидацию нескольких полей ввода
  _setEventListeners() {
    this.toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this.toggleButtonState();
      });
    });
  }
  
  // Метод включения валидации формы
  enableValidation() {
    // Отмена стандартного поведения формы перенесена в модуль PopupWithForm
    this._setEventListeners();
  };
}