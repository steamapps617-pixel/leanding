const btn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

// Для варианта 1 (SVG)
const pathBurger = document.getElementById("path-burger");
const pathClose = document.getElementById("path-close");

btn.addEventListener("click", () => {
  // 1. Открываем/закрываем меню
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("flex");

  // 2. Анимация кнопки (если используете Вариант 1)
  if (pathBurger && pathClose) {
    pathBurger.classList.toggle("hidden");
    pathClose.classList.toggle("hidden");
  }
});
