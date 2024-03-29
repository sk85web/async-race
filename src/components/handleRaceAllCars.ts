import { startCarEngine, getCars } from './api';
import showModalWinner from './showModalWinner';
import startAnimation from './startAnimation';

const handleRaceAllCars = async () => {
  const raceButtons = document.querySelectorAll('.start-btn');
  raceButtons.forEach((btn) => btn.classList.add('disabled'));
  const carsIcon = document.querySelectorAll(
    '.car-icon',
  ) as NodeListOf<HTMLDivElement>;
  const raceTimes: Record<string, number> = {};
  const cars = await getCars();

  const promises = Array.from(carsIcon).map(async (carIcon) => {
    const carId = +carIcon.id.slice(3);
    const carData = await startCarEngine(carId);
    if (carData) {
      const startTime = Date.now();
      startAnimation(carData, carIcon);
      return new Promise<void>((resolve) => {
        carIcon.addEventListener('animationend', () => {
          const finishTime = Date.now();
          const raceTime = (finishTime - startTime) / 1000;
          raceTimes[carId] = raceTime;
          // const carName =
          //   cars?.find(({ id }) => id === carId)?.name || 'Fail in car name';
          // console.log(`${carName} finished the race in ${raceTime} seconds`);
          resolve();
        });
      });
    }
    console.log('Failed to start all cars engine.');
    return Promise.resolve();
  });

  await Promise.race(promises).then(async () => {
    const winnerId = Object.keys(raceTimes).reduce(
      (a, b) => (raceTimes[+a] < raceTimes[+b] ? a : b),
      '',
    ) as unknown as number;
    const winnerCar = cars?.find(({ id }) => id === +winnerId);
    if (winnerCar) {
      const body = document.querySelector('body') as HTMLElement;
      const modal = showModalWinner(winnerCar, raceTimes[winnerId]);
      body?.append(modal);
      body.addEventListener('click', () => modal.remove());
    }

    Object.keys(raceTimes).forEach((key) => delete raceTimes[key]);
    return winnerId;
  });
};

export default handleRaceAllCars;
