// Собрали все переменные в начале страницы

const editingButton = document.querySelector('.profile-info__editing-button'); //Нашли кнопку
const modalWindow = document.querySelector('.popup'); //нашли модальное окно
const buttonCloseModalWindow = modalWindow.querySelector('.popup__close-button');//Нашли кнопку закрытия модального окна

const formUserData = document.querySelector('.profile-info__data');//нашли форму с данными профиля пользователя
const userName = document.querySelector('.profile-info__name');//нашли поле с именем пользователя
const userActivityType = document.querySelector('.profile-info__activity-type');// нашли поле с родом деятельности пользователя

const popUpFormUserData = document.querySelector('.popup__form');//в модальном окне нашли форму с данными профиля пользователя
const popUpUserName = document.querySelector('.popup__input_content_name');//в модальном окне нашли поле с именем пользователя
const popUpUserActivityType = document.querySelector('.popup__input_content_activity-type');//в модальном окне нашли поле с родом деятельности пользователя

// Реализация функции открытия/закрытия модального окна кнопки редактирования информации о пользователе

function toggleEditWindow() { //функция открытия/закрытия модального окна путём добавления класса с соотв. стилем
  modalWindow.classList.toggle('popup_activ'); //Добавляем КЛАСС, а не селектор!!!
}

// Реализация функции редактирования данных профиля

function openEditWindow() { //функция показывающая, что при открытии модального окна мы видим
  popUpUserName.value = userName.textContent; //что в поле "введите ваше имя" фигурируют данные ранее указанные в имени пользователя профиля
  popUpUserActivityType.value = userActivityType.textContent; //что в поле "каков род ваших занятий" фигурируют данные ранее указанные в соответствующем поле профиля
}

editingButton.addEventListener('click', openEditWindow); //добавили прослушиватель события - нажатие по найденой кнопке

// Реализация функции отправки данных профиля

function formSubmitHandler (event) {
  event.preventDefault();// Эта строчка отменяет стандартную отправку формы.

  userName.textContent = popUpUserName.value; //ввод текста в поле Name модального окна меняет текст с именем в профиле
  userActivityType.textContent = popUpUserActivityType.value;//ввод текста в поле с родом деятельности модального окна меняет срдержимое соответствующего поля в профиле
  
  toggleEditWindow(); //после выполнения функции редактирования данных профиля происходит закрытие модального окна
}







// Собрали все "прослушиватели событий" в конце файла

editingButton.addEventListener('click', toggleEditWindow); //добавили прослушиватель события - нажатие найденой кнопке

buttonCloseModalWindow.addEventListener('click', toggleEditWindow); //добавили прослушиватель события - нажатие на "крестик" закрывания окна

popUpFormUserData.addEventListener('submit', formSubmitHandler); //Обработчик события, отвечающий за отправку данных профиля