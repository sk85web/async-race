import { ICar, removeCar } from './api';
import generateButton from './generateButton';
import './styles/garageCarItem.css';
import carSvg from './carSvg';
import updateCarsCount from './updateCarsCount';

const garageCarItem: (car: ICar) => HTMLElement = (car) => {
  const carBlock = document.createElement('div');
  carBlock.classList.add('car-block');

  const controlsBtns = document.createElement('div');
  controlsBtns.classList.add('controls-btn');
  const selectBtn = generateButton('select');
  const removeBtn = generateButton('remove');
  removeBtn.classList.add('button-remove');

  removeBtn.addEventListener('click', async () => {
    removeCar(car.id);
    carBlock.remove();
    updateCarsCount();
  });

  const carName = document.createElement('span');
  carName.classList.add('car-name');
  carName.innerText = car.name;
  controlsBtns.append(selectBtn, removeBtn, carName);

  const startStopBtns = document.createElement('div');
  startStopBtns.classList.add('startStop-btn');
  const startBtn = generateButton('A');
  const stopBtn = generateButton('B');
  startBtn.classList.add('start-btn');
  stopBtn.classList.add('stop-btn');
  const carIcon = document.createElement('div');
  carIcon.classList.add('car-icon');
  carIcon.innerHTML = carSvg;
  const paths = carIcon.querySelectorAll('path');
  paths.forEach((path) => {
    path.setAttribute('fill', `${car.color}`);
  });
  const flag = document.createElement('img');
  flag.classList.add('finish-flag');
  flag.src = 'img/flag.png';
  startStopBtns.append(startBtn, stopBtn, carIcon, flag);

  carBlock.append(controlsBtns, startStopBtns);
  return carBlock;
};

export default garageCarItem;
