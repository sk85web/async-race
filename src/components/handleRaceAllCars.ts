import { startCarEngine } from './api';
import startAnimation from './startAnimation';

const handleRaceAllCars = async () => {
  const cars = document.querySelectorAll(
    '.car-icon',
  ) as NodeListOf<HTMLDivElement>;
  const raceTimes: Record<number, number> = {};

  await Promise.allSettled(
    Array.from(cars).map(async (car) => {
      const carId = +car.id.slice(3);
      const carData = await startCarEngine(carId);
      if (carData) {
        const startTime = Date.now();
        startAnimation(carData, car);
        car.addEventListener('animationend', () => {
          const finishTime = Date.now();
          const raceTime = (finishTime - startTime) / 1000;
          raceTimes[carId] = raceTime;
          console.log(`Car ${carId} finished the race in ${raceTime} seconds`);
        });
      } else {
        console.log('Failed to start all cars engine.');
      }
    }),
  ).then(() => {
    console.log(raceTimes);
    const winnerId = Object.keys(raceTimes).reduce(
      (a, b) => (raceTimes[+a] < raceTimes[+b] ? a : b),
      '',
    ) as unknown as number;

    console.log(
      `Car ${winnerId} wins the race with ${raceTimes[winnerId]} seconds`,
    );
    return winnerId;
  });
};

export default handleRaceAllCars;
