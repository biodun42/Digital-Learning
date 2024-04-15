const hamMenu = document.querySelector('.hamburger-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const container = document.querySelector('body')
const loader = document.querySelector('.preloader')

hamMenu.addEventListener('click', () =>{
  hamMenu.classList.toggle('active')
  offScreenMenu.classList.toggle('active')
  container.classList.toggle('active')
});

window.onload = function(){
  loader.style.display = 'none'
}


const navs = document.querySelectorAll(".nav")
navs.forEach((nav)=>{
  nav.addEventListener('click', function(){
    hamMenu.classList.remove('active')
  offScreenMenu.classList.remove('active')
  })
})