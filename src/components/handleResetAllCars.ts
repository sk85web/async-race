import { stopCarEngine } from './api';

const handleResetAllCars = async () => {
  const cars = document.querySelectorAll(
    '.car-icon',
  ) as NodeListOf<HTMLDivElement>;

  cars.forEach(async (car) => {
    const carId = +car.id.slice(3);
    const carData = await stopCarEngine(carId);
    if (carData) {
      car.classList.remove('move');
    } else {
      console.log('Failed to stop all cars engine.');
    }
  });
};

export default handleResetAllCars;
