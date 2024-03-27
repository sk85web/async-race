import { ICar } from './api';

const handleSelectCar = (car: ICar) => {
  const inputUpdateName = document.querySelector(
    '.input-update',
  ) as HTMLInputElement;
  const inputUpdateColor = document.querySelector(
    '.palette-update',
  ) as HTMLInputElement;
  inputUpdateName.setAttribute('value', `${car.name}`);
  inputUpdateColor.value = car.color;
  inputUpdateName.setAttribute('value', `${car.color}`);
};

export default handleSelectCar;
