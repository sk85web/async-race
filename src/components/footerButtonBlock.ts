import generateButton from './generateButton';
import './styles/headerButtonBlock.css';
import './styles/footerButtonBlock.css';

const footerButtonBlock: () => HTMLElement = () => {
  const buttonBlock = document.createElement('div');
  buttonBlock.classList.add('button-block', 'button-block-footer');

  const prevBtn = generateButton('Prev');
  prevBtn.classList.add('prev-btn');

  const nextBtn = generateButton('Next');
  nextBtn.classList.add('next-btn');

  // garageBtn.addEventListener('click', showGarage);

  // winnerBtn.addEventListener('click', showWinners);

  buttonBlock.append(prevBtn, nextBtn);
  return buttonBlock;
};

export default footerButtonBlock;
