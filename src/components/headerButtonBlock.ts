import generateButton from './generateButton';
import './styles/headerButtonBlock.css';

const headerButtonBlock: () => HTMLElement = () => {
  const buttonBlock = document.createElement('div');
  buttonBlock.classList.add('button-block');
  const garageBtn = generateButton('To garage');
  const winnerBtn = generateButton('To winners');
  buttonBlock.append(garageBtn, winnerBtn);
  return buttonBlock;
};

export default headerButtonBlock;
