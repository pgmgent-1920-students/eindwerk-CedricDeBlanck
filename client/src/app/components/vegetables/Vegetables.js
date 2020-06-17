import React, { useEffect, useState } from 'react';
import { useFirestore } from '../../services/firebase/firestore.services';

import { Link } from 'react-router-dom';
 
import * as Routes from '../../routes';

import './Vegetables.scss';

const VegetablesList = () => {
  const [vegetables, setVegetables] = useState();
  const {getVegetables} = useFirestore();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVegetables();
      setVegetables(data);
      console.log(data)
    }

    fetchData();    
  }, [getVegetables]);

  return (
    <div className="row vegetables-list">
    {!!vegetables 
      ? vegetables.map((vegetables) => {
        return (
          <div className="row vegetable__article" key={vegetables.uid}>
            <div className="col-12" key={vegetables.uid}>
              <article className="vegetable" key={vegetables.uid} data-id={vegetables.uid}>
              <div className="card" key={vegetables.uid}>
                <img src={vegetables.data.image} className="card-img-top" alt={vegetables.data.name} />
                <div className="card-body">
                  <p className="card-text">{vegetables.data.name}</p>
                  <p className="card-text">{vegetables.data.price}</p>
                  <Link to={Routes.VEGETABLES_DETAIL.replace(':id', vegetables.uid)} className="btn btn-info btn-detail">Meer info</Link>
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