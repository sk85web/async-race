import './styles/generateGarageBlock.css';
import garageCarItem from './garageCarItem';
import { ICar } from './api';

const generateGarageBlock: (cars: ICar[]) => HTMLElement = (cars) => {
  const garage = document.createElement('div');
  garage.classList.add('garage');
  const allCarsNumber = cars.length;

  garage.insertAdjacentHTML(
    'afterbegin',
    `
    <h1 class="title garage__title">Garage (${allCarsNumber})</h1>
    <h2 class="page garage__page">Page #1</h2>
  `,
  );

  cars.forEach((car) => {
    const carItem = garageCarItem(car);
    garage.appendChild(carItem);
  });

  return garage;
};

export default generateGarageBlock;
