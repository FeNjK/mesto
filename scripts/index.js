// Реализация функции открытия/закрытия модального окна кнопки редактирования информации о пользователе

const editingButton = document.querySelector('.profile-info__editing-button'); //Нашли кнопку
const modalWindow = document.querySelector('.popup'); //нашли модальное окно
const buttonCloseModalWindow = modalWindow.querySelector('.popup__close-button');//Нашли кнопку закрытия модального окна

function toggleEditWindow() { //функция открытия/закрытия модального окна путём добавления класса с соотв. стилем
  modalWindow.classList.toggle('popup_activ'); //Добавляем КЛАСС, а не селектор!!!
}

editingButton.addEventListener('click', toggleEditWindow); //добавили прослушиватель события - нажатие найденой кнопке

buttonCloseModalWindow.addEventListener('click', toggleEditWindow); //добавили прослушиватель события - нажатие на "крестик" закрывания окна

function onOverlayClick(event) { 
  if (event.target === event.currentTarget) {//Условие "если объект нажатия - объект с соответствующим обработчиком события"
    toggleEditWindow()// то запускается соответствующая функция
  }
}

modalWindow.addEventListener('click', onOverlayClick); //добавили прослушиватель события - нажатие на оверлей (пространство вокруг модального окна)

//Реализация функции редактирования полей профиля

const formUserData = document.querySelector('.profile-info__data');//нашли форму с данными профиля пользователя
const userName = document.querySelector('.profile-info__name');//нашли поле с именем пользователя
const userActivityType = document.querySelector('.profile-info__activity-type');// нашли поле с родом деятельности пользователя

const popUpFormUserData = document.querySelector('.popup__form');//в модальном окне нашли форму с данными профиля пользователя
const popUpUserName = document.querySelector('.popup__input-name');//в модальном окне нашли поле с именем пользователя
const popUpUserActivityType = document.querySelector('.popup__input-activity-type');//в модальном окне нашли поле с родом деятельности пользователя

function formSubmitHandler (event) {
  event.preventDefault();// Эта строчка отменяет стандартную отправку формы.

  userName.textContent = popUpUserName.value; //ввод текста в поле Name модального окна меняет текст с именем в профиле
  userActivityType.textContent = popUpUserActivityType.value;//ввод текста в поле с родом деятельности модального окна меняет срдержимое соответствующего поля в профиле
  
  toggleEditWindow(); //после выполнения функции редактирования данных профиля происходит закрытие модального окна
}

popUpFormUserData.addEventListener('submit', formSubmitHandler); //Обработчик события, отвечающий за отправку данных профиля