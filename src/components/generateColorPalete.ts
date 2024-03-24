import './styles/generateColorPalete.css';

const generateColorPalete: () => HTMLElement = () => {
  const palette = document.createElement('div');
  palette.classList.add('palette');
  return palette;
};

export default generateColorPalete;
