// import { createCarBlock } from './garageBlocks';
import { ICar, createCar } from './api';
import garageCarItem from './garageCarItem';

const colors = [
  { name: 'Red', value: '#ff0000' },
  { name: 'Green', value: '#00ff00' },
  { name: 'Blue', value: '#0000ff' },
  { name: 'Yellow', value: '#ffff00' },
  { name: 'Cyan', value: '#00ffff' },
  { name: 'Magenta', value: '#ff00ff' },
  { name: 'Orange', value: '#ffa500' },
  { name: 'Purple', value: '#800080' },
  { name: 'Pink', value: '#ffc0cb' },
  { name: 'Black', value: '#000000' },
];

const carNames = ['ford', 'mersedes', 'tesla', 'bmw'];
const garage = document.querySelector('.garage') as HTMLElement;

const updateGarage = (newCars: ICar[]) => {
  newCars.forEach((car) => {
    const carItem = garageCarItem(car);
    garage.append(carItem);
  });
};

const handleGenerateCars = async () => {
  try {
    const createCarPromises = [];
    const createdCars: ICar[] = [];

    for (let i = 0; i < 100; i += 1) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const randomName = carNames[Math.floor(Math.random() * carNames.length)];
      createCarPromises.push(createCar(randomName, randomColor.value));
    }

    const cars = await Promise.all(createCarPromises);

    cars.forEach((car) => {
      if (car) {
        createdCars.push(car);
      }
    });

    updateGarage(createdCars);
  } catch (error) {
    console.error('Ошибка при создании машин:', error);
  }
};

export default handleGenerateCars;
