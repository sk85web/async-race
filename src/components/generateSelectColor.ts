import './styles/generateSelectColor.css';

const generateSelectColor: () => HTMLSelectElement = () => {
  const select = document.createElement('select');
  select.classList.add('select');

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

  const handleChange = () => {
    const selectedColor = colors[select.selectedIndex];
    select.style.backgroundColor = selectedColor.value;
  };

  colors.forEach((color) => {
    const option = document.createElement('option');
    option.value = color.value;

    const colorBox = document.createElement('div');
    colorBox.style.width = '20px';
    colorBox.style.height = '20px';
    colorBox.style.backgroundColor = color.value;
    colorBox.style.display = 'inline-block';

    const optionContainer = document.createElement('div');
    optionContainer.appendChild(colorBox);
    optionContainer.appendChild(document.createTextNode(color.name));
    option.appendChild(optionContainer);

    select.append(option);
    select.addEventListener('change', handleChange);
  });

  return select;
};

export default generateSelectColor;
