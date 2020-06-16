import { admin, app, db, generateTimestamps } from './firebase';
import fetch from 'node-fetch';

( async () => {

  /*const response = await fetch(`${URL}/data/fruitData.json`)
  const jsonData = await response.json();*/
  let collectionRef = db.collection("Fruit");

  const createFruit = (fruit) => {
    const data = {
      ...fruit,
      ...generateTimestamps()
    };

    collectionRef.add(data).then(documentReference => {
      console.log(`Added fruit with name: ${documentReference.id}`);
    });
  };

  
  

  const createFruits = async (n = 1) => {
    const fruits = [];
    for(let i = 0; i < n; i++) {
      fruits.push(createFruit({
        name: data.name,
        id: data.id,
        image: data.image_url
      }));
    }
  }

  await createFruits(24);
})();