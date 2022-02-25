// BURGER MENU
const burgerBtn = document.querySelector('.header .toggler')
const headerMenu = document.querySelector('.header .menu')
const btn = document.querySelectorAll('.btn')
const counters = document.querySelectorAll('.num');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active')
    headerMenu.classList.toggle('active')
})

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {
        btn[i].parentNode.classList.toggle('active')
    })
}