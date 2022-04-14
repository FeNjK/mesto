//Массив карточек с изображениями и подписями к ним

const initialCards = [
  {name: 'Архыз', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'},
  {name: 'Тундровая равнина', link: './images/tundra_plain.jpg'},
  {name: 'Река Волга', link: './images/volga_river.jpg'},
  {name: 'Река Енисей', link: './images/yenisei_river.jpg'},
  {name: 'Байкал', link: './images/baikal.jpg'},
  {name: 'Таёжные леса', link: './images/taiga.jpg'}
];

// Модальные окна
const editModalWindow = document.querySelector('.popup_task_edit'); //нашли модальное окно редактирования профиля
const addModalWindow = document.querySelector('.popup_task_add'); //нашли модальное окно добавления карточки
const showImageModalWindow = document.querySelector('.popup_task_show-image'); //нашли модальное окно добавления карточки

// Кнопки
const editingButton = document.querySelector('.profile-info__editing-button'); //Нашли кнопку редактирования профиля
const addButton = document.querySelector('.profile__add-button'); //Нашли кнопку добавления карточки
const buttonCloseModalWindowEdit = editModalWindow.querySelector('.popup__close-button_window_edit');//Нашли кнопку закрытия модального окна
const buttonCloseModalWindowAdd = addModalWindow.querySelector('.popup__close-button_window_add');
const buttonCloseModalWindowShowImage = showImageModalWindow.querySelector('.popup__close-button_window_show-image');

// Данные профиля отображенные на странице 
const formUserData = document.querySelector('.profile-info__data');//нашли форму с данными профиля пользователя
const userName = document.querySelector('.profile-info__name');//нашли поле с именем пользователя
const userActivityType = document.querySelector('.profile-info__activity-type');// нашли поле с родом деятельности пользователя

// Поля заполнения данных ПРОФИЛЯ в модальном окне
const popUpFormUserData = document.querySelector('.popup__form_type_user-data');//Форма с данными профиля пользователя
const popUpUserName = document.querySelector('.popup__input_content_name');//Поле с именем пользователя
const popUpUserActivityType = document.querySelector('.popup__input_content_activity-type');//Поле с родом деятельности пользователя

// Поля заполнения данных КАРТИНКИ в модальном окне
const popUpFormNewCard = document.querySelector('.popup__form_type_new-card');//Форма с данными новой карточки с картинкой
const popUpImageTitle = document.querySelector('.popup__input_content_image-title');//Поле с названием картинки
const popUpImageLink = document.querySelector('.popup__input_content_image-link');//Поле с ссылкой на картинку в интернете

// Презентация нажатой картинки
const popUpImage = document.querySelector('.popup__image');
const popUpCaption = document.querySelector('.popup__caption');

// Данные карточки отображенные на странице 
const listContainer = document.querySelector('.elements'); //Список карточек
const template = document.querySelector('.template').content;
//const elementImage = template.querySelector('.element__image');

// Реализация функции открытия/закрытия модального окна кнопки редактирования данных профиля
function toggleInputWindow() { 
  editModalWindow.classList.toggle('popup_activ'); //Добавляем КЛАСС, а не селектор!!!
  editModalWindow.classList.add('popup_animation');
}
//добавили прослушиватель события - нажатие найденой кнопке
editingButton.addEventListener('click', toggleInputWindow);
//добавили прослушиватель события - нажатие на "крестик" закрывания СООТВЕТСТВУЮЩЕГО окна
buttonCloseModalWindowEdit.addEventListener('click', toggleInputWindow);

// Реализация функции редактирования данных профиля
// функция показывающая, что при открытии модального окна мы видим
function openEditWindow() {
  popUpUserName.value = userName.textContent; //что в поле "введите ваше имя" фигурируют данные ранее указанные в имени пользователя профиля
  popUpUserActivityType.value = userActivityType.textContent; //что в поле "каков род ваших занятий" фигурируют данные ранее указанные в соответствующем поле профиля
}
// добавили прослушиватель события - нажатие по найденой кнопке
editingButton.addEventListener('click', openEditWindow);

// Реализация функции отправки данных профиля
function formUserDataSubmitHandler (event) {
  event.preventDefault();// Эта строчка отменяет стандартную отправку формы.

  userName.textContent = popUpUserName.value; //ввод текста в поле Name модального окна меняет текст с именем в профиле
  userActivityType.textContent = popUpUserActivityType.value;//ввод текста в поле с родом деятельности модального окна меняет срдержимое соответствующего поля в профиле
  //после выполнения функции редактирования данных профиля происходит закрытие модального окна
  toggleInputWindow();
}
//Обработчик события, отвечающий за отправку данных профиля
popUpFormUserData.addEventListener('submit', formUserDataSubmitHandler); 

// Реализация функции открытия/закрытия модального окна кнопки добавления карточки
// функция открытия/закрытия модального окна редактирования профиля путём добавления класса с соотв. стилем
function toggleAddWindow() {
  addModalWindow.classList.toggle('popup_activ'); //Добавляем КЛАСС, а не селектор!!!
  addModalWindow.classList.add('popup_animation');
}
//добавили прослушиватель события - нажатие найденой кнопке
addButton.addEventListener('click', toggleAddWindow);
//добавили прослушиватель события - нажатие на "крестик" закрывания СООТВЕТСТВУЮЩЕГО окна
buttonCloseModalWindowAdd.addEventListener('click', toggleAddWindow);

// Реализация функции открытия/закрытия модального окна при нажатии на картинку
function toggleImageWindow() { //функция открытия/закрытия модального окна редактирования профиля путём добавления класса с соотв. стилем
  showImageModalWindow.classList.toggle('popup_activ'); //Добавляем КЛАСС, а не селектор!!!
  showImageModalWindow.classList.add('popup_animation');
}
//добавили прослушиватель события - нажатие найденой кнопке
elementImage.addEventListener('click', toggleImageWindow);

// Открытие и закрытие модального окна с картинкой
function showImage(popupShownContent) {
  toggleImageWindow(showImageModalWindow);
// Передача значений элемента модальному окну
  popUpCaption.textContent = popupShownContent.name;
  popUpImage.alt = popupShownContent.name;
  popUpImage.src = popupShownContent.link;
}
//добавили прослушиватель события - нажатие на "крестик" закрывания СООТВЕТСТВУЮЩЕГО окна
buttonCloseModalWindowShowImage.addEventListener('click', toggleImageWindow);

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
  
  //Реализация лайка карточки при нажатии на изображение сердечка под картинкой
  function handleLikeCard(event) {
    event.target.classList.toggle('element__mark_active');
  }

  // Слушатель осуществляющий запуск функции лайка по клику
  cardMark.addEventListener('click', handleLikeCard);

  //Реализация функции удаления карточки при нажатии на изображение урны
  function handleRemoveCard(event) {
    const element = event.target.closest('.element');
    element.remove();
  }
  // Слушатель осуществляющий запуск функции удаления карточки по клику
  cardTrash.addEventListener('click', handleRemoveCard);
  
  // При нажатии на любое изображение цель нажатия  превращается 
  // в объект с соотв. атрибутами и их последующей передачей
  cardImage.addEventListener('click', (event) => {
      const targetImage = event.target;

      targetImage.alt;
      targetImage.src;

      showImage(cardСontent);
    });

  return cardContainer;
}

// Функция определяющая добавление новой карточки в начало списка
function addInArr(cardContent, addCard, newItem) {
  const item = getElement(cardContent);

  if (newItem) {
    addCard.prepend(item);
  } else {
    addCard.append(item);
  }
}

initialCards.forEach((card) => {
  addInArr(card, listContainer, false);
});

// Отправка формы добавления карточки
function popUpFormNewCardHandler(event) {
  event.preventDefault();//Эта строчка отменяет стандартную отправку формы.

  addInArr({
    name: popUpImageTitle.value,
    link: popUpImageLink.value
  }, listContainer, true);

  popUpFormNewCard.reset();
}
//Обработчик события, отвечающий за отправку данных карточки
popUpFormNewCard.addEventListener('submit', popUpFormNewCardHandler);
//Обработчик события, отвечающий за закрытие видового экрана
popUpFormNewCard.addEventListener('submit', toggleAddWindow);

render();