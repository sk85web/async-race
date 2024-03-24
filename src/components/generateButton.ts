import './styles/generateButton.css';

const generateButton: (text: string) => HTMLButtonElement = (text) => {
  const button = document.createElement('button');
  button.classList.add('button');
  button.innerText = text;
  return button;
};

export default generateButton;
