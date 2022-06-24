import '../pages/index.css'; // добавил импорт главного файла стилей для нормальной работы «Вебпака»!!!
//import initialCards from '../scripts/utils/initialCards.js'; // импорт массива исходного массива изображений

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
  buttonAvatar,
  popupFormUserData,
  popupUserName,
  popupUserActivityType,
  popupFormNewCard,
  popupFormAddAvatar,
  config
} from '../scripts/utils/constants.js';

// Создание экземпляров класса FormValidator для каждой формы
const popupFormUserDataValidator = new FormValidator(config, popupFormUserData);
const popupFormNewCardValidator = new FormValidator(config, popupFormNewCard);
const popupFormAddAvatarValidator = new FormValidator(config, popupFormAddAvatar);

// Вызов соответствующих свойств у оных объектов
popupFormUserDataValidator.enableValidation();
popupFormNewCardValidator.enableValidation();
popupFormAddAvatarValidator.enableValidation();

// Создание экземпляра класса Api
const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-43',
  token: '10bf8282-16d5-46f1-976c-28311168fc94'
})

//api.getInitialCards();
//api.getUserInfo();
//api.addNewCard();

// Создание экземпляра класса с презентируемой картокой
const showImagePopup = new PopupWithImage('.popup_task_show-image');
showImagePopup.setEventListeners();

// Создание экземпляра класса подтверждения удаления карточки
const popupDeleteCard = new PopupWithСonfirmation('.popup_type_confirmation');
popupDeleteCard.setEventListeners();


let userId

/**
 * Передаём массив с промисами методу Promise.all
 * и получаем данные с сервера
 */
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, initialCardsData]) => {

    //console.log(`Что тут? ${initialCardsData}`);

    userId = userData;
    userInfo.setUserData(userData);
    photoLibrary.renderItems(initialCardsData);
  })
  .then((results) => {
    console.log(results); // ["Первый промис", "Второй промис"]
  })
  .catch((err) => {
    console.log(err);
  })

  const photoLibrary = new Section({
    renderer: (item) => {
       photoLibrary.addAppend(createCard(item));
    }
  }, '.elements');

// Создание экземпляра класса секции (блока с карточкой)
/* const photoLibrary = new Section({
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item, '.template');
      photoLibrary.addPrepend(cardElement);
    },
  }, '.elements');
// Отрисовка карточек
photoLibrary.renderItems(); */

/* function createCard(item) {
  return new Card(item, '.template', 
  { handleCardClick: (name, link) => {
    showImagePopup.open(name, link);
  }}).generateCard();
} */

// Создание экземпляра класса Card
function createCard(item) {
  const card = new Card(item, userId, '.template',
  { handleCardClick: (name, link) => {
    showImagePopup.open(name, link);
    }
  },
  { handleDeleteCardClick: (card) => {
    popupDeleteCard.open();
    popupDeleteCard.setSubmit(() => {
      popupDeleteCard.processLoading();
      api.removeCard(card)
        .then(() => {
          popupDeleteCard.close();
          card.handleCardDelete();
        })
        .catch((err) => {
          console.log(`Тут какая-то ошибка с удалением карточки ${err}`)
        })
        .finally(() => 
        popupDeleteCard.normalCondition())
      })
    }
  },
  { handleAddLikeClick: (card) => {
      api.setLikeCard(card)
      .then((res) => {
        card.addLike(res);
      })
      .catch((err) => {
        console.log(`Тут какая-то ошибка c добавлением лайка ${err}`)
      })
    }
  },
  { handleDeleteLikeClick: (card) => {
      api.deleteLikeCard(card)
      .then((res) => {
        card.deleteLike(res);
      })
      .catch((err) => {
        console.log(`Тут какая-то ошибка c удалением лайка ${err}`)
      })
    }
  });


  /* { handleLikeClick: (card) => {
    const cardMark = card.querySelector('.element__mark');
    if (cardMark.classList.add('element__mark_active')) {
      api.deleteLikeCard(card._id)
        .then((res) => {
          card.deleteLike(res);
        })
        .catch((err) => {
          console.log(`Тут какая-то ошибка ${err}`)
        })
      } else {
        api.setLikeCard(card.id)
        .then((res) => {
          card.addLike(res);
        })
        .catch((err) => {
          console.log(`Тут какая-то ошибка ${err}`)
        })
      }
    }
  } */
  return card.generateCard();
}

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
/* function addInArr(cardData) {
  const newCard = createCard({
    name: cardData['card-title'],
    link: cardData['picture-link'],
  }, '.template');
  photoLibrary.addPrepend(newCard);
} */

const popupFormAdd = new PopupWithForm('.popup_task_add',
  { submitForm: (cardData) => {
    popupFormAdd.processLoading();
    api.addNewCard({
      name: cardData['card-title'],
      link: cardData['picture-link']
      })
      .then((res) => {
        popupFormAdd.close();
        photoLibrary.addPrepend(createCard(res));
      })
      .catch((err) => {
        console.log(`Тут какая-то ошибка ${err}`)
      })
      .finally(() => {
        popupFormAdd.normalCondition();
      });
    }
  }
)

/* const popupFormAdd = new PopupWithForm('.popup_task_add',
  { submitForm: (cardData) => {
    addInArr(cardData);
    popupFormAdd.close();
    }
  }
) */

// Создание экземпляра класса с данными пользователя
const userInfo = new UserInfo({
  userName: '.profile-info__name',
  userActivityType: '.profile-info__activity-type',
  userAvatar: '.profile-info__avatar'
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

const popupFormEdit = new PopupWithForm('.popup_task_edit',
  { submitForm: (profileData) => {
    popupFormEdit.processLoading();
    api.setUserInfo(
      profileData['profile_name'],
      profileData['type_of_activity']
      )
      .then((res) => {
        popupFormEdit.close();
        userInfo.setUserInfo(
          res.name,
          res.about
        )
      })
      .catch((err) => {
        console.log(`Тут какая-то ошибка ${err}`)
      })
      .finally(() => {
        popupFormEdit.normalCondition();
      });
    }
  }
)

 // Создание экземпляра класса формы добавления карточки
 const popupFormAvatar = new PopupWithForm('.popup_task_avatar',
  { submitForm: (profileData) => {
    popupFormAvatar.processLoading();
    api.setUserAvatar(profileData['profile-avatar'])
      .then((res) => {
        popupFormAvatar.close();
        userInfo.setUserInfoAvatar(res);
      })
      .catch((err) => {
        console.log(`Тут какая-то ошибка ${err}`)
      })
      .finally(() => {
        popupFormAvatar.normalCondition();
      });
    }
  }
);

buttonAvatar.addEventListener('click', () => {
  popupFormAddAvatar.reset();
  popupFormAddAvatarValidator.removeInputError();
  popupFormAddAvatarValidator.toggleButtonState();
  popupFormAvatar.open();
});

// Навешиваем слушатели на экземпляры классов форм
popupFormEdit.setEventListeners();
popupFormAdd.setEventListeners();
popupFormAvatar.setEventListeners();
