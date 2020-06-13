import React, { } from 'react';

import './HomePage.scss';

const HomePage = ({children}) => {
  return (
    <div className="page page--home">
      <div className="container">
        <div className="m-vegetables__images">
          <img src="https://ec.europa.eu/jrc/sites/jrcsh/files/styles/normal-responsive/public/samael334_adobestock_167843675.jpeg?itok=kSQjfav6" alt=""></img>
          <div className="m-vegetables__title">
            <h1>Groenten</h1>
          </div>
        </div>
        <div className="m-vegetables__images">
          <img src="https://www.retaildetail.be/sites/default/files/styles/news/public/news/shutterstock_1465341938_0.jpg" alt=""></img>
          <div className="m-vegetables__title">
            <h1>Fruit</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;