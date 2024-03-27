import garagePage from './components/garagePage';
import './style.css';
import { showGarage, headerButtonBlock } from './components/headerButtonBlock';
import winnerPage from './components/winnerPage';

const body = document.querySelector('body') as HTMLElement;

const renderPage = async () => {
  const buttons = headerButtonBlock();
  const garage = await garagePage();
  const winners = winnerPage();
  body.append(buttons, garage, winners);
  showGarage();
};

renderPage();
