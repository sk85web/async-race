import { ICar, removeCar } from './api';
import updateCarsCount from './updateCarsCount';

const handleRemoveCar = async (car: ICar) => {
  const carBlock = document.getElementById(`carblock${car.id}`) as HTMLElement;
  await removeCar(car.id);
  carBlock.remove();
  updateCarsCount();
};

export default handleRemoveCar;
