import '../pages/index.css'; // добавил импорт главного файла стилей для нормальной работы «Вебпака»!!!
import initialCards from '../scripts/utils/initialCards.js'; // импорт массива исходного массива изображений

// Импорт подключаемых модулей
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithСonfirmation from '../scripts/components/PopupWithСonfirmation.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Api from '../scripts/components/Api.js';

// Импорт значений переменных, используемых для реализации работы модулей
import {
  buttonEdit,
  buttonAdd,
  popupFormUserData,
  popupUserName,
  popupUserActivityType,
  popupFormNewCard,
  cardListSelector,
  config
} from '../scripts/utils/constants.js';

// Создание экземпляров класса FormValidator для каждой формы
const popupFormUserDataValidator = new FormValidator(config, popupFormUserData);
const popupFormNewCardValidator = new FormValidator(config, popupFormNewCard);

// Вызов соответствующих свойств у оных объектов
popupFormUserDataValidator.enableValidation();
popupFormNewCardValidator.enableValidation();

// Создание экземпляра класса Api
const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-43',
  /* headers: {
    'Content-Type': 'application/json',
    authorization: '10bf8282-16d5-46f1-976c-28311168fc94'
  } */
  token: '10bf8282-16d5-46f1-976c-28311168fc94'
})

// Создание экземпляра класса с презентируемой картокой
const showImagePopup = new PopupWithImage('.popup_task_show-image');
showImagePopup.setEventListeners();

// Создание экземпляра класса Card
function createCard(item) {
  return new Card(item, '.template', { handleCardClick: (name, link) => {
    showImagePopup.open(name, link);
  }}).generateCard();
}

// Создание экземпляра класса подтверждения удаления карточки
const popupDeleteCard = new PopupWithСonfirmation('.popup_type_confirmation');
popupDeleteCard.setEventListeners();

// Создание экземпляра класса секции (блока с карточкой)
const photoLibrary = new Section({
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item);
      photoLibrary.addAppend(cardElement);
    },
  }, cardListSelector);
// Отрисовка карточек
photoLibrary.renderItems();

// Создание экземпляра класса с данными пользователя
const userInfo = new UserInfo({
  userName: '.profile-info__name',
  userActivityType: '.profile-info__activity-type'
});

// Функция получения значений инпутов 
// при открытии попапа формы редактирования профиля
function getInputValuesFormEdit() {
  const userData = userInfo.getUserInfo();
  popupUserName.value = userData.userName;// поле "введите ваше имя" фигурируют данные ранее указанные в имени пользователя профиля
  popupUserActivityType.value = userData.userActivityType;// в поле "каков род ваших занятий" фигурируют данные ранее указанные в соответствующем поле профиля
}

// Реализация функции редактирования данных профиля
// функция показывающая, что при открытии модального окна мы видим
buttonEdit.addEventListener('click', () => {  
  getInputValuesFormEdit(); //вызов функции получения значений инпутов при открытии попапа
  popupFormUserDataValidator.removeInputError();
  popupFormUserDataValidator.toggleButtonState();
  popupFormEdit.open();
});

// Создание экземпляра класса добавления карточек
const popupFormEdit = new PopupWithForm('.popup_task_edit',
  { submitForm: (profileData) => {
    
    popupFormEdit.processLoading(true);
    
    // А дальше я вообще действую в слепую(((
    api.setUserInfo(profileData)
      .then((profileData) => {
        userInfo.setUserInfo(
          profileData['profile_name'],
          profileData['type_of_activity'],
          profileData['profile_avatar']);
        popupFormEdit.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        editProfilePopup.loading(false);
      });
    }
  }
)

// Функция открытия модального окна кнопкой добавления карточки
buttonAdd.addEventListener('click', () => {
  popupFormNewCard.reset();
  popupFormNewCardValidator.removeInputError();
  popupFormNewCardValidator.toggleButtonState();
  popupFormAdd.open();
});

// Данная функция получает значения инпутов формы
// добавления карточки благодаря методу getInputValues
// модуля PopupWithForm и передаёт их создаваемой карточке
function addInArr(cardData) {
  const newCard = createCard({
    name: cardData['card-title'],
    link: cardData['picture-link'],
  }, '.template');
  photoLibrary.addPrepend(newCard);
}

// Создание экземпляра класса формы добавления карточки
const popupFormAdd = new PopupWithForm('.popup_task_add',
  { submitForm: (cardData) => {
    addInArr(cardData);
    popupFormAdd.close();
    }
  }
);

/**
 * Передаём массив с промисами методу Promise.all
 */
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, initialCardsData]) => {
    userInfo.setUserInfo(userData);
    photoLibrary.renderItems(initialCardsData);
  })
  .catch((err) => {
    console.log(err);
  })

// Навешиваем слушатели на экземпляры классов форм
popupFormEdit.setEventListeners();
popupFormAdd.setEventListeners();