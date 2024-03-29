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
  updatedCarElement.style.animationFillMode = 'forwards';

  updatedCarElement.classList.add('move');
  updatedCarElement.addEventListener('animationend', () => {
    updatedCarElement.classList.remove('move');
    updatedCarElement.classList.add('stop');
  });
};

export default startAnimation;
