// Создание новой карточки с помощью Template-тега
function getElement(cardСontent) {
  const cardContainer = cardTemplate.content.cloneNode(true);
  const cardImage = cardContainer('.element__image');
  const cardTitle = cardContainer('.element__title');
  const cardMark = cardContainer('element__mark');
  const cardTrash = cardContainer('element__trash');

  // Прописываем связи между объектами массива и переменными присвоенными элементам страницы
  cardImage.src = cardСontent.link;
  cardImage.alt = cardСontent.name;
  cardTitle.textContent = cardСontent.name;
  
  //Реализация лайка карточки при нажатии на изображение сердечка под картинкой
  cardMark.addEventListener('click', event => {
    event.target.classList.toggle('element__mark_active')  
  });

  //Руфлизация функции удаления карточки при нажатии на изображение урны
  cardTrash.addEventListener('click', event => {
    event.target.classList.remove()
  });
  
    // При нажатии на любое изображение цель нажатия превращается в объект с соотв. атрибутами 
  cardImage.addEventListener('click', event => {
    const targetImage = event.target;

    const cardСontent = {
      name: targetImage.alt,
      link: targetImage.src
    };
  
    showImage(cardСontent);
  });

  return cardContainer;
}

function addInArr(cardContent, addCard, newCard) {
  const card = getElement(cardContent);

  if (newCard) {
    addCard.prepend(card);
  }
}

render();