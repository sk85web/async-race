const generateGarageBlock = () => {
  const garage = document.createElement('div');
  garage.insertAdjacentHTML(
    'afterbegin',
    `
    <h1 class="garage__title">Garage(5)</h1>
    <h2 class="garage__page">Page #1</h2>
    
  `,
  );
  return garage;
};

export default generateGarageBlock;
