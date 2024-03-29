import garagePage from './components/garagePage';
import './style.css';
import { showGarage, headerButtonBlock } from './components/headerButtonBlock';
import winnerPage from './components/winnerPage';
import footerButtonBlock from './components/footerButtonBlock';

const body = document.querySelector('body') as HTMLElement;

const renderPage = async () => {
  const headerButtons = headerButtonBlock();
  const garage = await garagePage();
  const winners = winnerPage();
  const footerButtons = footerButtonBlock();
  body.append(headerButtons, garage, winners, footerButtons);
  showGarage();
};

renderPage();
