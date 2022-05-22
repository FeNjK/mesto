const popups = document.querySelectorAll('.popup');

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

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('popup_activ') || e.target.classList.contains('popup__close-button')) {
      closeModalWindow(popup);
    }
  });
});

/* modalWindowOverlay.forEach((modalWindowOverlay) => {
  modalWindowOverlay.addEventListener('mousedown', (e) => {
    if (e.target === e.currentTarget || e.target.classList.contains('popup__close-button')) {
      closeModalWindow(e.currentTarget);
    }
  });
}); */

export { openModalWindow, closeModalWindow };