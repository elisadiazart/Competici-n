const menu = document.getElementById('menu')
const options = document.getElementById('options')
const iconElement = document.getElementById('menu-icon')

menu.addEventListener('click', () => {
    options.classList.toggle('menu__options--show')
    console.dir(iconElement)
    iconElement.dataset.src
});

