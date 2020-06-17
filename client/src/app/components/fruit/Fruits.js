import React, { useEffect, useState} from 'react';
import { useFirestore } from '../../services/firebase/firestore.services';

import { Link } from 'react-router-dom';
 
import * as Routes from '../../routes';

import './Fruit.scss';

const FruitList = () => {
  const [fruits, setFruits] = useState();
  const {getFruits} = useFirestore();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFruits();
      setFruits(data);
    };

    fetchData();
  }, [getFruits])

  return (
    <div className="row fruit-list">
      {!!fruits
        ? fruits.map((fruits) => {
            return (
              <div className="row" key={fruits.uid}>
                <div className="col-12" key={fruits.uid}>
                  <article className="fruit" key={fruits.uid} data-id={fruits.uid}>
                  <div className="card" key={fruits.uid}>
                    <img src={fruits.data.image} className="card-img-top" alt={fruits.data.name} />
                    <div className="card-body">
                      <p className="card-text">{fruits.data.name}</p>
                      <p className="card-text">{fruits.data.price}</p>
                      <Link to={Routes.FRUIT_DETAIL.replace(':id', fruits.uid)} className="btn btn-info btn-detail">Meer info</Link>
                    </div>
                    
                  </div>          
                  </article>  
                </div>
              </div>
          )
        })
        : <p>Geen fruit gevonden</p>}
    </div>
  )
}
export default FruitList;