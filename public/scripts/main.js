const mobileMenu = document.querySelector('.mobile-menu')
const menu= document.querySelector('.navlinks')


mobileMenu.addEventListener('click', () => {
    menu.classList.toggle('active')
})