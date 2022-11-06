const themebtn = document.querySelector('.themebtn')
const wrapper = document.querySelector('.wrapper')
const mobileMenu = document.querySelector('.mobile-menu')
const menu= document.querySelector('.navlinks')

themebtn.addEventListener('click', (e) => {
    wrapper.classList.toggle('active')
})
mobileMenu.addEventListener('click', () => {
    menu.classList.toggle('active')
})