import {labels} from './data.js'

let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let value = Math.ceil(Math.random() * 3600);

function viewScreen() {
  let viewHeight = screen.height;
  let viewWeight = screen.width;
  console.log(viewWeight);

  // if (viewWeight > viewHeight) {
    return ['100%', '2.5rem'];
  // }
}

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
  // document.documentElement.style.setProperty('--size', `${viewScreen()[0]}`);
  // document.documentElement.style.setProperty('--text', `${viewScreen()[1]}`);
  // console.log(viewScreen());
}

spinBtn.addEventListener('click', () => {
  wheel.style.transform = `rotate(${value}deg)`;
  value += Math.ceil(Math.random() * 3600);
});


createWheel();
