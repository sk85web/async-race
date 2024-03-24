import headerButtonBlock from './headerButtonBlock';
import {
  createCarBlock,
  raceCarBlock,
  updateCarBlock,
} from './modifyGarageControls';
import './styles/garagePage.css';
import generateGarageBlock from './generateGarageBlock';

const garagePage = () => {
  const page = document.createElement('main');
  const container = document.createElement('div');
  container.classList.add('container');
  const buttons = headerButtonBlock();
  const createRow = createCarBlock();
  const updateRow = updateCarBlock();
  const raceRow = raceCarBlock();
  container.append(createRow, updateRow, raceRow);

  const garage = generateGarageBlock();
  page.append(buttons, container, garage);
  return page;
};

export default garagePage;
