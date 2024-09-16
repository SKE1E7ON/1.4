const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    // Убираем класс активности у всех ссылок
    navLinks.forEach(link => link.classList.remove('nav__link--active'));

    // Добавляем класс активности к нажатой ссылке
    event.target.classList.add('nav__link--active');
  });
});