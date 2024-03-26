import { getCars } from './api';

const updateCarsCount = async () => {
  const allCars = await getCars();
  if (allCars) {
    const garageTitle = document.querySelector('.garage__title') as HTMLElement;
    const allCarsNumber = allCars.length;
    garageTitle.innerText = `Garage (${allCarsNumber})`;
  }
};

export default updateCarsCount;
