import { admin, app, db, generateTImestamps } from './firebase';
import fetch from 'node-fetch';

const URL = "https://github.com/CedricDeBlanck/Eindwerk-pgm-BAAS-CedricDeBlanck/";
const response = await fetch(`${URL}/data/fruitData.json`)
const jsonData = await response.json();
let collectionRef = db.collection("Fruit");

( async () => {

  const createFruit = (fruit) => {
    const data = {
      ...fruit,
      ...generateTImestamps()
    };

    collectionRef.add(data).then(documentReference => {
      console.log(`Added fruit with name: ${documentReference.id}`);
    });
  };

  const createFruits = async (n = 20) => {
    const fruits = [];

    for(let i=0; i < n; i++) {
      fruits.push(createFruit({
        
      }));
    }
  }
})();