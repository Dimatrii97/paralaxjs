let bg = document.querySelector('.bg');
let moon = document.querySelector('.moon');
let mountain = document.querySelector('.mountain');
let road = document.querySelector('.road');
let title = document.querySelector('.title');
window.addEventListener('scroll', ()=>{
  let valueScroll = window.scrollY;
  bg.style.top = (valueScroll * 0.5)+'px'
  moon.style.left = -(valueScroll * 0.3)+'px'
  mountain.style.top = -(valueScroll * 0.1)+'px'
  road.style.top = (valueScroll * 0.2)+'px'
  title.style.top = valueScroll +'px'
})
let imgs =  document.querySelectorAll("[data-img]");
imgs.forEach(el=>{
  el.style.backgroundImage = `url(${el.dataset.img})`
})