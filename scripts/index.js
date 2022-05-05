// Модальные окна
const modalWindowOverlay = Array.from(document.querySelectorAll('.popup'));
const modalWindowEdit = document.querySelector('.popup_task_edit'); //нашли модальное окно редактирования профиля
const modalWindowAdd = document.querySelector('.popup_task_add'); //нашли модальное окно добавления карточки
const modalWindowShowImage = document.querySelector('.popup_task_show-image'); //нашли модальное окно добавления карточки

// Кнопки
const buttonEdit = document.querySelector('.profile-info__editing-button'); //Нашли кнопку редактирования профиля
const buttonAdd = document.querySelector('.profile__add-button'); //Нашли кнопку добавления карточки
const buttonCloseModalWindowEdit = modalWindowEdit.querySelector('.popup__close-button_window_edit');//Нашли кнопку закрытия модального окна
const buttonCloseModalWindowAdd = modalWindowAdd.querySelector('.popup__close-button_window_add');
const buttonCloseModalWindowShowImage = modalWindowShowImage.querySelector('.popup__close-button_window_show-image');

// Данные профиля отображенные на странице 
const formUserData = document.querySelector('.profile-info__data');//нашли форму с данными профиля пользователя
const userName = formUserData.querySelector('.profile-info__name');//нашли поле с именем пользователя
const userActivityType = formUserData.querySelector('.profile-info__activity-type');// нашли поле с родом деятельности пользователя

// Поля заполнения данных ПРОФИЛЯ в модальном окне
const popUpFormUserData = document.querySelector('.popup__form_type_user-data');//Форма с данными профиля пользователя
const popUpUserName = popUpFormUserData.querySelector('.popup__input_content_name');//Поле с именем пользователя
const popUpUserActivityType = popUpFormUserData.querySelector('.popup__input_content_activity-type');//Поле с родом деятельности пользователя
const popUpUserActivityTypeBtn = popUpFormUserData.querySelector('.popup__save-button');

// Поля заполнения данных КАРТИНКИ в модальном окне
const popUpFormNewCard = document.querySelector('.popup__form_type_new-card');//Форма с данными новой карточки с картинкой
const popUpImageTitle = popUpFormNewCard.querySelector('.popup__input_content_image-title');//Поле с названием картинки
const popUpImageLink = popUpFormNewCard.querySelector('.popup__input_content_image-link');//Поле с ссылкой на картинку в интернете
const popUpFormNewCardBtn = popUpFormNewCard.querySelector('.popup__save-button');

// Презентация нажатой картинки
const popUpImage = document.querySelector('.popup__image');
const popUpCaption = document.querySelector('.popup__caption');

// Данные карточки отображенные на странице 
const listContainer = document.querySelector('.elements'); //Список карточек
const template = document.querySelector('.template').content;

// Функция открытия модальных окон
function openModalWindow(modalWindow) {
  modalWindow.classList.add('popup_activ');
  document.addEventListener('keydown', closeModalWindowByEsc);
}

// Функция закрытия модальных окон
function closeModalWindow(modalWindow) {
  modalWindow.classList.remove('popup_activ');
  document.removeEventListener('keydown', closeModalWindowByEsc);
}

// Функция закрытия модальных окон нажатием на клавишу "Esc"
function closeModalWindowByEsc(e) {
  if (e.key === 'Escape') {
    const activModalWindow = document.querySelector('.popup_activ');
    closeModalWindow(activModalWindow);
  }
}

// Функция закрытия модальных окон нажатием на оверлей
modalWindowOverlay.forEach((modalWindowOverlay) => {
  modalWindowOverlay.addEventListener('mousedown', (e) => {
    if (e.target === e.currentTarget) {
      closeModalWindow(e.currentTarget);
    }
  });
});

// Реализация функции редактирования данных профиля
// функция показывающая, что при открытии модального окна мы видим
buttonEdit.addEventListener('click', () => {
  popUpUserName.value = userName.textContent; //что в поле "введите ваше имя" фигурируют данные ранее указанные в имени пользователя профиля
  popUpUserActivityType.value = userActivityType.textContent; //что в поле "каков род ваших занятий" фигурируют данные ранее указанные в соответствующем поле профиля
  removeInputError(config, popUpFormUserData);
  toggleButtonState(config, popUpFormUserData, popUpUserActivityTypeBtn);
  openModalWindow(modalWindowEdit);
});

buttonCloseModalWindowEdit.addEventListener('click', () => {
  closeModalWindow(modalWindowEdit);
});

// Реализация функции отправки данных профиля
popUpFormUserData.addEventListener('submit', (e) => {
  e.preventDefault();

  userName.textContent = popUpUserName.value;
  userActivityType.textContent = popUpUserActivityType.value;

  closeModalWindow(modalWindowEdit);
});

// Функция открытия модального окна кнопкой добавления карточки
buttonAdd.addEventListener('click', () => {
  popUpFormNewCard.reset();
  removeInputError(config, popUpFormNewCard);
  toggleButtonState(config, popUpFormNewCard, popUpFormNewCardBtn);
  openModalWindow(modalWindowAdd);
});

// Реализация функции отправки формы добавления карточки
popUpFormNewCard.addEventListener('submit', (e) => {
  e.preventDefault();

  addInArr({
    name: popUpImageTitle.value,
    link: popUpImageLink.value
  }, listContainer, true);

  closeModalWindow(modalWindowAdd);
});

// Функция закрытия модального окна добавления карточки нажатием на "крестик"
buttonCloseModalWindowAdd.addEventListener('click', () => {
  closeModalWindow(modalWindowAdd);
});

// Функция открытия модального окна с картинкой нажатием на любую картинку
function handleShowImage(popupShownContent) {
  openModalWindow(modalWindowShowImage);
  
// Передача значений элемента модальному окну
  popUpCaption.textContent = popupShownContent.name;
  popUpImage.alt = popupShownContent.name;
  popUpImage.src = popupShownContent.link;
}

// Функция закрытия модального окна с картинкой нажатием на "крестик"
buttonCloseModalWindowShowImage.addEventListener('click', () => {
  closeModalWindow(modalWindowShowImage);
});

function render() {
  const html = initialCards.map(getElement);
  listContainer.prepend(...html);
}
//Функция добавления новой карточки
function getElement(cardСontent) {
  const cardContainer = template.cloneNode(true);
  const cardImage = cardContainer.querySelector('.element__image');
  const cardTitle = cardContainer.querySelector('.element__title');
  const cardMark = cardContainer.querySelector('.element__mark');
  const cardTrash = cardContainer.querySelector('.element__trash');

  // Прописываем связи между объектами массива и переменными присвоенными элементам страницы
  cardImage.src = cardСontent.link;
  cardImage.alt = cardСontent.name;
  cardTitle.textContent = cardСontent.name;
  
  // Функция лайка карточки при нажатии на изображение сердечка под картинкой
  cardMark.addEventListener('click', (e) => {
    e.target.classList.toggle('element__mark_active');
  });

  // Функция удаления карточки при нажатии на изображение урны
  cardTrash.addEventListener('click', (e) => {
    const element = e.target.closest('.element');
    element.remove();
  });

  // При нажатии на любое изображение цель нажатия превращается 
  // в объект с соотв. атрибутами и их последующей передачей
  cardImage.addEventListener('click', () => {
    handleShowImage(cardСontent);
  });

  return cardContainer;
}

// Функция определяющая добавление новой карточки в начало списка
function addInArr(cardContent, addCard, newItem) {
  if (newItem) {
    addCard.prepend(getElement(cardContent));
  } 
}

render();