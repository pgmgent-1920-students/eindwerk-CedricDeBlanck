import React, { useEffect, useState } from 'react';
import { useFirestore } from '../../services';

import './MessagesList.scss';

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
          <div className="col-12" key={vegetable.id}>
            <article className="vegetable" data-id={vegetable.id}>
              <span className="col-3 message__sender">
                {vegetable.name}
              </span>
              <div className="col-9 message__body">
                {vegetable.createdAt}
              </div>            
            </article>
          </div>
        )
      })
      : <p>No messages</p>
    }
    </div>
  );
};

export default VegetablesList;