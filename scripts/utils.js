const modalWindowOverlay = Array.from(document.querySelectorAll('.popup'));

// Функция открытия модальных окон
const openModalWindow = (modalWindow) => {
  modalWindow.classList.add('popup_activ');
  document.addEventListener(`keydown`, closeModalWindowByEsc);
};

// Функция закрытия модальных окон
const closeModalWindow = (modalWindow) => {
  modalWindow.classList.remove('popup_activ');
  document.removeEventListener(`keydown`, closeModalWindowByEsc);
};

// Функция закрытия модальных окон нажатием на клавишу "Esc"
const closeModalWindowByEsc = (e) => {
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

export { openModalWindow, closeModalWindow };