import { ICar } from './api';
import './styles/showModalWinner.css';

const showModalWinner: (car: ICar, time: number) => HTMLElement = (
  car,
  time,
) => {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  const span = document.createElement('span');
  span.innerText = `${car.name} went first [${time} sec]!`;
  modal.append(span);
  return modal;
};

export default showModalWinner;
