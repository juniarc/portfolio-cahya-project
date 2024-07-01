import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss'

const burgerBtn = document.querySelector('#burgerBtn');
const navMenu = document.querySelector('#navMenu');
const closeBtn = document.querySelector('#closeBtn');
const navItem = document.querySelector('#navItem');

burgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('open');
});

navItem.addEventListener('click', () => {
    navMenu.classList.remove('open');
})