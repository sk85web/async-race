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
      car.classList.remove('stop');
    } else {
      console.log('Failed to stop all cars engine.');
    }
  });

  const raceButtons = document.querySelectorAll('.start-btn');
  raceButtons.forEach((btn) => btn.classList.remove('disabled'));
};

export default handleResetAllCars;
