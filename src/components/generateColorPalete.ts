import './styles/generateColorPalete.css';

const generateColorPalete: () => HTMLInputElement = () => {
  const palette = document.createElement('input');
  palette.classList.add('palette');
  return palette;
};

export default generateColorPalete;
