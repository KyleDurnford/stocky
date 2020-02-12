const Menu = document.querySelector('header .toggle-nav');

const handleMenu = () => {
    Menu.classList.toggle('toggle-nav');
}

document.querySelector('.button').addEventListener('click', () => {
    handleMenu();
});