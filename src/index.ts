import garagePage from './components/garagePage';
import './style.css';

const body = document.querySelector('body') as HTMLElement;
const page = garagePage();
body.append(page);
