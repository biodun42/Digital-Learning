const hamMenu = document.querySelector('.hamburger-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const container = document.querySelector('.container')

hamMenu.addEventListener('click', () =>{
  hamMenu.classList.toggle('active')
  offScreenMenu.classList.toggle('active')
});