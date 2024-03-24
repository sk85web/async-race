import generateButton from './generateButton';
import generateInput from './generateInput';
import generateColorPalete from './generateColorPalete';
import './styles/modifyGarageControls.css';

const createCarBlock = () => {
  const block = document.createElement('div');
  block.classList.add('block');

  const input = generateInput();
  const button = generateButton('create');
  const colorPalete = generateColorPalete();
  block.append(input, colorPalete, button);
  return block;
};

const updateCarBlock = () => {
  const block = document.createElement('div');
  block.classList.add('block');

  const input = generateInput();
  const button = generateButton('update');
  const colorPalete = generateColorPalete();
  block.append(input, colorPalete, button);
  return block;
};

const raceCarBlock = () => {
  const block = document.createElement('div');
  block.classList.add('block', 'block_race');

  const raceButton = generateButton('race');
  const resetButton = generateButton('reset');
  const generateCarsButton = generateButton('generate cars');
  block.append(raceButton, resetButton, generateCarsButton);
  return block;
};

export { createCarBlock, updateCarBlock, raceCarBlock };
