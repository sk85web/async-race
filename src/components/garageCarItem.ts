import { ICar, startCarEngine, stopCarEngine } from './api';
import generateButton from './generateButton';
import './styles/garageCarItem.css';
import carSvg from './carSvg';
import handleSelectCar from './handleSelectCar';
import handleRemoveCar from './handleRemoveCar';
import startAnimation from './startAnimation';

const garageCarItem: (car: ICar) => HTMLElement = (car) => {
  const carBlock = document.createElement('div');
  carBlock.classList.add('car-block');
  carBlock.setAttribute('id', `carblock${car.id}`);

  const controlsBtns = document.createElement('div');
  controlsBtns.classList.add('controls-btn');
  const selectBtn = generateButton('select');
  selectBtn.classList.add('button-select');
  const removeBtn = generateButton('remove');
  removeBtn.classList.add('button-remove');

  selectBtn.addEventListener('click', () => handleSelectCar(car));

  removeBtn.addEventListener('click', () => handleRemoveCar(car));

  const carName = document.createElement('span');
  carName.classList.add('car-name');
  carName.innerText = car.name;
  controlsBtns.append(selectBtn, removeBtn, carName);

  const startStopBtns = document.createElement('div');
  startStopBtns.classList.add('startStop-btns');
  const startBtn = generateButton('A');
  const stopBtn = generateButton('B');
  startBtn.classList.add('start-btn');

  startBtn.addEventListener('click', async () => {
    const carId = car.id;
    const carData = await startCarEngine(carId);
    if (carData) {
      const carElement = document.querySelector(
        `#carblock${car.id} .car-icon`,
      ) as HTMLElement;

      if (carElement) {
        const allCarIcons = document.querySelectorAll('.car-icon');
        allCarIcons.forEach((carItem) => {
          carItem.classList.remove('move');
        });
        carElement.classList.add('move');
      }
      startAnimation(carData, carElement);
    } else {
      console.log('Failed to start the car engine.');
    }
  });

  stopBtn.addEventListener('click', async () => {
    const carId = car.id;
    const carData = await stopCarEngine(carId);
    if (carData) {
      const carElement = document.querySelector(
        `#carblock${car.id} .car-icon`,
      ) as HTMLElement;

      if (carElement) {
        carElement.classList.remove('move');
      }
    } else {
      console.log('Failed to start the car engine.');
    }
  });

  stopBtn.classList.add('stop-btn');
  const carIcon = document.createElement('div');
  carIcon.classList.add('car-icon');
  carIcon.setAttribute('id', `car${car.id}`);
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
