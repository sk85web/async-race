import './styles/generateInput.css';

const generateInput: () => HTMLInputElement = () => {
  const input = document.createElement('input');
  input.classList.add('input');
  input.type = 'text';
  return input;
};

export default generateInput;
