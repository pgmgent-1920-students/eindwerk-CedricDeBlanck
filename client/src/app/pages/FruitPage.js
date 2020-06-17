import React, { } from 'react';

import FruitList from '../components/fruit/Fruits';

const FruitPage = ({children}) => {
  return (
    <div className="page page--pokemons">
      <div className="container">
        <div className="row">
          <FruitList />
        </div>
      </div>
    </div>
  );
};

export default FruitPage;