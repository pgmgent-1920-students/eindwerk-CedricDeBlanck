import React, { useEffect, useState } from 'react';
import { useFirestore } from '../../services';

import './Vegetables.scss';

const VegetablesList = () => {
  const [vegetables, setVegetables] = useState();
  const {getVegetables} = useFirestore();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVegetables();
      setVegetables(data);
    }

    fetchData();    
  }, [getVegetables]);

  return (
    <div className="row vegetables-list">
    {!!vegetables 
      ? vegetables.map((vegetable) => {
        return (
          <div className="row">
            <div className="col-12" key={vegetable.id}>
              <article className="vegetable" data-id={vegetable.id}>
              <div className="card">
                <img src={vegetable.img_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">{vegetable.name}</p>
                  <button type="button" class="btn btn-info">Meer info</button>
                </div>
                
              </div>          
              </article>  
            </div>
          </div>
        )
      })
      : <p>Groenten aan het laden...</p>
    }
    </div>
  );
};

export default VegetablesList;