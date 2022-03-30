// Реализация функции открытия/закрытия модального окна
// кнопки редактирования информации о пользователе

const editingButton = document.querySelector('.profile-info__editing-button'); //Нашли кнопку
const modalWindow = document.querySelector('.popup'); //нашли модальное окно
const buttonCloseModalWindow = modalWindow.querySelector('.popup__close-button');//Нашли кнопку закрытия модального окна

function toggleEditWindow() { //функция открытия/закрытия модального окна путём добавления класса с соотв. стилем
  modalWindow.classList.toggle('popup_activ'); //Добавляем КЛАСС, а не селектор!!!
}

editingButton.addEventListener('click', toggleEditWindow); //добавили прослушиватель события - нажатие найденой кнопке

buttonCloseModalWindow.addEventListener('click', toggleEditWindow); //добавили прослушиватель события - нажатие на "крестик" закрывания окна

