const startAnimation: (
  carData: { velocity: number; distance: number },
  carElement: HTMLElement,
) => void = (carData, carElement) => {
  if (!carElement) {
    console.error('Car element not found');
    return;
  }

  const updatedCarElement = carElement;
  const timeInSeconds = carData.distance / carData.velocity / 1000;
  const animationDuration = timeInSeconds.toString().concat('s');

  updatedCarElement.style.animationDuration = animationDuration;

  updatedCarElement.classList.add('move');

  updatedCarElement.addEventListener('animationend', () => {
    console.log('Car has finished the race!');
    updatedCarElement.classList.remove('move');
  });
};

export default startAnimation;