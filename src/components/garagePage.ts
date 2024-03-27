// import { headerButtonBlock } from './headerButtonBlock';
import {
  createCarBlock,
  raceCarBlock,
  updateCarBlock,
} from './modifyGarageControls';
import './styles/garagePage.css';
import generateGarageBlock from './generateGarageBlock';
import { getCars } from './api';

const garagePage = async () => {
  const page = document.createElement('main');
  page.classList.add('garage-page');

  const container = document.createElement('div');
  container.classList.add('container');
  const createRow = createCarBlock();
  const updateRow = updateCarBlock();
  updateRow.classList.add('updateRow');
  const raceRow = raceCarBlock();
  container.append(createRow, updateRow, raceRow);
  const cars = await getCars();
  if (cars) {
    const garage = generateGarageBlock(cars);
    page.append(container, garage);
  }

  return page;
};

export default garagePage;
