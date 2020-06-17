import React, { } from 'react';

import FruitList from '../components/fruit/Fruits';

import './FruitPage.scss';

const FruitPage = ({children}) => {
  return (
    <div className="page page--fruit">
      <div className="container">
        <div className="row">
          <FruitList />
        </div>
      </div>
    </div>
  );
};

export default FruitPage;