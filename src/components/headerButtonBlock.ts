import generateButton from './generateButton';
import './styles/headerButtonBlock.css';

export const showGarage = () => {
  const garage = document.querySelector('.garage-page') as HTMLElement;

  garage.style.display = 'block';

  if (document.querySelector('.winners-page')) {
    const winners = document.querySelector('.winners-page') as HTMLElement;
    winners.style.display = 'none';
  }
};

const showWinners = () => {
  const garage = document.querySelector('.garage-page') as HTMLElement;
  const winners = document.querySelector('.winners-page') as HTMLElement;
  garage.style.display = 'none';
  winners.style.display = 'block';
};

export const headerButtonBlock: () => HTMLElement = () => {
  const buttonBlock = document.createElement('div');
  buttonBlock.classList.add('button-block');

  const garageBtn = generateButton('To garage');
  garageBtn.classList.add('garage-btn');

  const winnerBtn = generateButton('To winners');
  winnerBtn.classList.add('winner-btn');

  garageBtn.addEventListener('click', showGarage);

  winnerBtn.addEventListener('click', showWinners);

  buttonBlock.append(garageBtn, winnerBtn);
  return buttonBlock;
};
