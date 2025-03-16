const modal = document.querySelector(".backdrop");
const modalBtnOpenList = document.querySelectorAll(".modal-btn-open"); // Отримуємо всі кнопки
const modalBtnClose = document.querySelector(".modal-btn-close");

const toggleModal = () => modal.classList.toggle("is-hidden");

// Додаємо обробник подій до всіх кнопок відкриття
modalBtnOpenList.forEach((btn) => {
  btn.addEventListener("click", toggleModal);
});

modalBtnClose.addEventListener("click", toggleModal);
