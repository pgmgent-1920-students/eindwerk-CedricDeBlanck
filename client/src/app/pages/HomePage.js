import React, { } from 'react';

import * as Routes from '../routes';


import './HomePage.scss';

const HomePage = ({children}) => {
  return (
    <div className="page page--home">
      <div className="container">

      <div class="card text-center">
        <div class="card-header">
          Groenten
        </div>
        <div class="card-body">
          <h5 class="card-title">Bekijk hier onze lijst met groenten</h5>
          <p class="card-text">
            <img src="https://ec.europa.eu/jrc/sites/jrcsh/files/styles/normal-responsive/public/samael334_adobestock_167843675.jpeg?itok=kSQjfav6" width="500px"></img>
          </p>
          <a href={Routes.VEGETABLES} class="btn btn-primary">Groentenlijst</a>
        </div>
        <div class="card-footer text-muted">
        </div>
      </div>

      <div class="card text-center">
        <div class="card-header">
          Fruit
        </div>
        <div class="card-body">
          <h5 class="card-title">Bekijk hier onze lijst met fruitsoorten</h5>
          <p class="card-text">
            <img src="https://www.retaildetail.be/sites/default/files/styles/news/public/news/shutterstock_1465341938_0.jpg" width="500px"></img>
          </p>
          <a href={Routes.FRUIT} class="btn btn-primary">Lijst van fruit</a>
        </div>
        <div class="card-footer text-muted">
        </div>
      </div>
    </div>
  </div>
  );
};

export default HomePage;