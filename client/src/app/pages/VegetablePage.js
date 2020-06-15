import React, { } from 'react';

import VegetablesList from '../components/vegetables/Vegetables';

const VegetablesPage = ({children}) => {
  return (
    <div className="page page--messages">
      <section className="pt-4 pt-md-11">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <VegetablesList />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VegetablesPage;