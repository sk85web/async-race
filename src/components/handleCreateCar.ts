import { createCar } from './api';
import garageCarItem from './garageCarItem';
import updateCarsCount from './updateCarsCount';

const handleCreateCar = async () => {
  const input = document.querySelector('.input-create') as HTMLInputElement;
  const colorPalete = document.querySelector(
    '.palette-create',
  ) as HTMLInputElement;

  const name = input.value;
  const color = colorPalete.value;

  const newCar = await createCar(name, color);
  if (newCar) {
    const garage = document.querySelector('.garage') as HTMLElement;
    const carElement = garageCarItem(newCar);
    garage.append(carElement);
    updateCarsCount();
    input.value = '';
    colorPalete.value = '';
  }
};

export default handleCreateCar;
