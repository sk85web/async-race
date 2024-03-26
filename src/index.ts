import garagePage from './components/garagePage';
import './style.css';

const body = document.querySelector('body') as HTMLElement;

const renderPage = async () => {
  const page = await garagePage();
  body.append(page);
};

renderPage();
