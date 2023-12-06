const menuSwitcherButton = document.querySelector('.menu-switcher');
const navigation = document.querySelector('.navigation__list');
// Открытие и закрытие меню бургера при нажатии на кнопку menuSwitcherButton
menuSwitcherButton.addEventListener('click', (e) => {
    navigation.classList.toggle('navigation__list--opened');
    menuSwitcherButton.classList.toggle('menu-switcher--opened');
});
// Закрытие меню бургера при клике на ссылку в меню
navigation.querySelectorAll('.navigation__link').forEach(link => {
    link.addEventListener('click', e => {
        navigation.classList.toggle('navigation__list--opened');
        menuSwitcherButton.classList.toggle('menu-switcher--opened');
    })
})