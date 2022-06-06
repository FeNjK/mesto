import '../pages/index.css'; // добавил импорт главного файла стилей для нормальной работы «Вебпака»!!!
import initialCards from '../scripts/utils/initialCards.js'; // импорт массива исходного массива изображений
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import {
  modalWindowEdit,
  modalWindowAdd,
  modalWindowShowImage,
  buttonEdit,
  buttonAdd,
  formUserData,
  userName,
  userActivityType,
  popupFormUserData,
  popupUserName,
  popupUserActivityType,
  popupFormNewCard,
  popupImageTitle,
  popupImageLink,
  cardList,
  cardListSelector,
  config
} from '../scripts/utils/constants.js';

//import { openModalWindow, closeModalWindow } from '../scripts/utils/utils.js';

// Создание экземпляров класса FormValidator для каждой формы
const popupFormUserDataValidator = new FormValidator(config, popupFormUserData);
const popupFormNewCardValidator = new FormValidator(config, popupFormNewCard);

// Вызов соответствующих свойств у оных объектов
popupFormUserDataValidator.enableValidation();
popupFormNewCardValidator.enableValidation();

const showImagePopup = new PopupWithImage('.popup_task_show-image');
showImagePopup.setEventListeners();

// Создание экземпляра класса Card
function createCard(item) {
  return new Card(item, '.template', { handleCardClick: (name, link) => {
    showImagePopup.open(name, link);
  }});
}

const photoLibrary = new Section({
    items: initialCards,
    renderer: (item) => {
      const card = createCard(item);
      const cardElement = card.generateCard();
      photoLibrary.addItem(cardElement);
    },
  }, cardListSelector);
// Отрисовка карточек
photoLibrary.renderItems();



// Создание экземпляра класса с данными пользователя
const userInfo = new UserInfo({
  userNameSelector: userName,
  userActivityTypeSelector: userActivityType
});

function addInArr() {
  const newCard = createCard({
    name: popupImageTitle.value,
    link: popupImageLink.value,
  }, '.template').generateCard();

  cardList.prepend(newCard);
};

// Реализация функции редактирования данных профиля
// функция показывающая, что при открытии модального окна мы видим
buttonEdit.addEventListener('click', () => {
  popupUserName.value = userName.textContent; //что в поле "введите ваше имя" фигурируют данные ранее указанные в имени пользователя профиля
  popupUserActivityType.value = userActivityType.textContent; //что в поле "каков род ваших занятий" фигурируют данные ранее указанные в соответствующем поле профиля
  popupFormUserDataValidator.removeInputError();
  popupFormUserDataValidator.toggleButtonState();
  //openModalWindow(modalWindowEdit);
});

// Реализация функции отправки данных профиля
popupFormUserData.addEventListener('submit', (e) => {
  e.preventDefault();

  userName.textContent = popupUserName.value;
  userActivityType.textContent = popupUserActivityType.value;

  //closeModalWindow(modalWindowEdit);
});

// Функция открытия модального окна кнопкой добавления карточки
buttonAdd.addEventListener('click', () => {
  popupFormNewCard.reset();
  popupFormNewCardValidator.removeInputError();
  popupFormNewCardValidator.toggleButtonState();
  //openModalWindow(modalWindowAdd);
});

// Реализация функции отправки формы добавления карточки
popupFormNewCard.addEventListener('submit', (e) => {
  e.preventDefault();
  addInArr();
  //closeModalWindow(modalWindowAdd);
});