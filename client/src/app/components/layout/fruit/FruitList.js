import React, {useEffect, useState} from 'react';
import { useFirestore } from '../../../services/firebase/firestore.services';

//const DOMAIN_URL = "https://github.com/CedricDeBlanck/Eindwerk-pgm-BAAS-CedricDeBlanck/";

const FruitList = () => {
  const [fruit, setFruit] = useState();
  const {getFruits} = useFirestore();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFruits();
      setFruit(data);
    };

    fetchData();
  }, [])

  return (
    <div className="row fruit-list">
      {!!fruit
        ? fruit.map((msg) => {
          return (
            <div className="col-12" key="msg.id">
              <article className="row fruit">
                <span className="col-3 message__sender">
                  {msg.name}
                </span>
                <div className="col-9 message__body">
                  {msg.content}
                </div>
              </article>
            </div>
          )
        })
        : <p>Geen fruit gevonden</p>}
    </div>
  )
}
export default FruitList;