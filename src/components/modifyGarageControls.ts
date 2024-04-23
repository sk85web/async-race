import generateButton from './generateButton';
import generateInput from './generateInput';
import './styles/modifyGarageControls.css';
import handleCreateCar from './handleCreateCar';
import { ICar } from './api';
import handleUpdateCar from './handleUpdateCar';
import handleRaceAllCars from './handleRaceAllCars';
import handleResetAllCars from './handleResetAllCars';
import generateSelectColor from './generateSelectColor';
import handleGenerateCars from './handleGenerateCars';

const createCarBlock = () => {
  const block = document.createElement('div');
  block.classList.add('block');

  const input = generateInput();
  input.classList.add('input-create');
  const colorPalete = generateSelectColor();
  colorPalete.classList.add('palette-create');
  const button = generateButton('create');
  button.classList.add('button-create');

  button.addEventListener('click', handleCreateCar);

  block.append(input, colorPalete, button);
  return block;
};

const updateCarBlock = (car?: ICar) => {
  const block = document.createElement('div');
  block.classList.add('block');

  const input = generateInput();
  input.classList.add('input-update');
  const button = generateButton('update');
  button.classList.add('button-update');
  const colorPalete = generateSelectColor();
  colorPalete.classList.add('palette-update');
  button.addEventListener('click', () => {
    if (car) {
      handleUpdateCar(car);
    } else {
      console.error('Car is not selected');
    }
  });

  block.append(input, colorPalete, button);
  return block;
};

const raceCarBlock = () => {
  const block = document.createElement('div');
  block.classList.add('block', 'block_race');

  const raceButton = generateButton('race');
  raceButton.classList.add('race-btn');

  raceButton.addEventListener('click', () => {
    if (raceButton.classList.contains('disabled')) {
      return;
    }
    handleRaceAllCars();
    raceButton.classList.add('disabled');
  });

  const resetButton = generateButton('reset');
  resetButton.addEventListener('click', () => {
    handleResetAllCars();
    raceButton.classList.remove('disabled');
  });

  const generateCarsButton = generateButton('generate cars');
  generateCarsButton.classList.add('generate-btn');
  generateCarsButton.addEventListener('click', async () => {
    const genCars = await handleGenerateCars();
    console.log(genCars);
  });

  block.append(raceButton, resetButton, generateCarsButton);
  return block;
};

export { createCarBlock, updateCarBlock, raceCarBlock };
