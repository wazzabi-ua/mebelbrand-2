document.addEventListener("DOMContentLoaded", function() {
  const btns = document.querySelectorAll('.openModalBtn');
  const modals = document.querySelectorAll('.modal');

  // Функція для відкриття модального вікна
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'block';
    }
  }

  // Функція для закриття модального вікна
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'none';
    }
  }

  // Обробник події для кнопок, що відкривають модальні вікна
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-modal');
      openModal(modalId);
    });
  });

  // Обробник події для закриття модальних вікон при кліку на кнопку "Close"
  const closeBtns = document.querySelectorAll('.closeModalBtn');
  closeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const modalId = btn.closest('.modal').getAttribute('id');
      closeModal(modalId);
    });
  });

  // Обробник події для закриття модальних вікон при кліку на підложку
  modals.forEach((modal) => {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        const modalId = modal.getAttribute('id');
        closeModal(modalId);
      }
    });
  });
});
