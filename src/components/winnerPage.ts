import './styles/winnerPage.css';
import './generateGarageBlock';

const winnerPage: () => HTMLElement = () => {
  const winnersWrapper = document.createElement('div');
  winnersWrapper.classList.add('winners-page');
  // const winnersCarNumber = cars.length;

  winnersWrapper.insertAdjacentHTML(
    'afterbegin',
    `
    <h1 class="title winner__title">Winners (4)</h1>
    <h2 class="page winner__page">Page #1</h2>
  

  <table class="winners-table">
      <thead>
        <tr>
          <th>Number</th>
          <th>Car</th>
          <th>Name</th>
          <th>Wins</th>
          <th>Best time(seconds)</th>
        </tr>
      </thead>
      <tbody>
    
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
      </tr>
    
        
      </tbody>
    </table>
  `,
  );

  return winnersWrapper;
};

export default winnerPage;
