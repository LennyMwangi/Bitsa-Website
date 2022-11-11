const mobileMenuBtn = document.querySelector('.mobile-menu')
const menu= document.querySelector('.navlinks')


mobileMenuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
})

// typing effect
      var typed = new Typed("#typed", {
        stringsElement: "#typed-strings",
        typeSpeed: 80,
        loop: true,
      });
    