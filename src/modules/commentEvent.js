const commentEvent = () => {
  const popup = document.querySelector('.comment-popup');
  const popupContents = document.querySelectorAll('.popup-content');
  const commentButtons = document.querySelectorAll('.comment-btn');
  const reservationItems = document.querySelectorAll('.reservation-items');

  for (let index = 0; index < commentButtons.length; index++) {
    commentButtons[index].addEventListener('click', () => {
      popup.classList.remove('d-none');
      popupContents[index].classList.remove('d-none');
      reservationItems[index].classList.add('d-none');

      const popupCloseButtons = popup.querySelectorAll('.popup-close');
      popupCloseButtons[index].addEventListener('click', () => {
        popup.classList.add('d-none');
        popupContents[index].classList.add('d-none');
      });
    });
  }
};

export default commentEvent;
