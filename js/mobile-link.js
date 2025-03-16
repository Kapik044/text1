document.querySelectorAll(".link-mobile").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Запобігає миттєвому переходу

    // Закриваємо модальне вікно (залежить від твого класу)
    const modal = document.querySelector(".mobile-menu");
    if (modal) {
      modal.classList.remove("is-open"); // Змінюй залежно від твоєї верстки
      modal.classList.remove("open");
    }

    // Отримуємо `href` і перевіряємо, чи є такий елемент на сторінці
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});
