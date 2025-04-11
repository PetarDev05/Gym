export function showMenu() {
  const menuIcon = document.querySelector('.js-burger-menu-icon');
  const burgerMenu = document.querySelector('.js-off-navigation');
  const burgerLine = document.querySelectorAll('.js-burger-menu-line');

  menuIcon.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    burgerLine.forEach((line) => {
      line.classList.toggle('active');
    });
  });
}