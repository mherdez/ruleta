import {labels} from './data.js'

let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let value = Math.ceil(Math.random() * 3600);

function createWheel() {
  labels.map( label => {
    let wheelElement = document.createElement('div');
    let wheelSpan = document.createElement('span');
    wheelElement.classList.add('number');
    wheelElement.setAttribute('style', `--i:${label.id}; --clr: ${label.color};`);
    wheelSpan.textContent = label.name;
    wheelElement.appendChild(wheelSpan);
    wheel.appendChild(wheelElement);
  })
  let slides = labels.length
  let slidesDeg = 360 / slides;
  let slidesPorcent = slidesDeg + 15;
  document.documentElement.style.setProperty('--slidesDeg', `${slidesDeg}deg`);
  document.documentElement.style.setProperty('--slidesPorcent', `${slidesPorcent}%`);
  console.log(slides, slidesDeg, slidesPorcent)
}

spinBtn.addEventListener('click', () => {
  wheel.style.transform = `rotate(${value}deg)`;
  value += Math.ceil(Math.random() * 3600);
});

createWheel();