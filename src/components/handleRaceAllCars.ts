import { startCarEngine } from './api';
import startAnimation from './startAnimation';

const handleRaceAllCars = async () => {
  const cars = document.querySelectorAll(
    '.car-icon',
  ) as NodeListOf<HTMLDivElement>;
  cars.forEach(async (car) => {
    const carId = +car.id.slice(3);
    const carData = await startCarEngine(carId);
    if (carData) {
      startAnimation(carData, car);
    } else {
      console.log('Failed to start all cars engine.');
    }
  });
};

export default handleRaceAllCars;
