import { ICar, updateCar } from './api';

function updateGarageBlock(updatedCar: ICar) {
  const carBlock = document.getElementById(`carblock${updatedCar.id}`);
  if (carBlock) {
    const carName = carBlock.querySelector('.car-name') as HTMLSpanElement;
    carName.innerText = updatedCar.name;

    const paths = carBlock.querySelectorAll('path');
    paths.forEach((path) => {
      path.setAttribute('fill', updatedCar.color);
    });
  }
}

const handleUpdateCar = async (car: ICar) => {
  const inputName = document.querySelector('.input-update') as HTMLInputElement;
  const inputColor = document.querySelector(
    '.palette-update',
  ) as HTMLInputElement;
  const newName = inputName.value;
  const newColor = inputColor.value;
  try {
    if (car) {
      const updatedCar = await updateCar({
        ...car,
        name: newName,
        color: newColor,
      });
      updateGarageBlock(updatedCar);
    } else {
      console.error('Car is not selected');
    }
  } catch (error) {
    console.error('Error in update car', error);
  }
};

export default handleUpdateCar;
