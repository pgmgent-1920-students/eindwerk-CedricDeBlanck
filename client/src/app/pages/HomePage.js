import React, { } from 'react';

import * as Routes from '../routes';

import { NavLink  } from 'react-router-dom';


import './HomePage.scss';

const HomePage = ({children}) => {
  return (
    <div className="page page--home">
      <div className="container">

      <div className="card text-center">
        <div className="card-header">
          Groenten
        </div>
        <div className="card-body">
          <h5 className="card-title">Bekijk hier onze lijst met groenten</h5>
          <p className="card-text">
            <img src="https://ec.europa.eu/jrc/sites/jrcsh/files/styles/normal-responsive/public/samael334_adobestock_167843675.jpeg?itok=kSQjfav6" width="500px"></img>
          </p>
          <a className="btn btn-primary white" href={Routes.VEGETABLES}><NavLink to={Routes.VEGETABLES} className="nav-link" activeClassName="active">Lijst van groenten</NavLink></a>
        </div>
        <div className="card-footer text-muted">
        </div>
      </div>

      <div className="card text-center">
        <div className="card-header">
          Fruit
        </div>
        <div className="card-body">
          <h5 className="card-title">Bekijk hier onze lijst met fruitsoorten</h5>
          <p className="card-text">
            <img src="https://www.retaildetail.be/sites/default/files/styles/news/public/news/shutterstock_1465341938_0.jpg" width="500px"></img>
          </p>
          <a className="btn btn-primary white" href={Routes.FRUIT}><NavLink to={Routes.FRUIT} className="nav-link" activeClassName="active">Lijst van fruit</NavLink></a>
        </div>
        <div className="card-footer text-muted">
        </div>
      </div>
    </div>
  </div>
  );
};

export default HomePage;