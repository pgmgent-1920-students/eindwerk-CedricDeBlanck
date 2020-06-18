import { v4 as uuidv4 } from 'uuid';
import faker from 'faker';
import { admin, app, db, generateTimestamps } from './firebase';

(async () => {
  // Create an empty array for messages
  const Groenten = [];

  // Get messages collection
  let collectionRef = db.collection('Groenten');
  // Loop through the documents of the collection
  const result = await collectionRef.get().then(querySnapshot => {
    const size = querySnapshot.size;
    querySnapshot.forEach(documentSnapshot => {
      const id = documentSnapshot.id;
      Groenten.push({
        id,
        ...documentSnapshot.data()
      });
    });
  });
  console.log(Groenten);
// Data to seed to firebase
 const data = {
  name: 'Aardappelen',
  content:'De aardappel (Solanum tuberosum) behoort tot de nachtschadefamilie, net als de tomaat, paprika en tabak. De aardappel is een plant die ondergronds een energievoorraad in de vorm van zetmeel aanlegt. Het zetmeel slaat de plant op in voor de mens eetbare stengelknollen, die net als de plant zelf aardappelen of aardappels worden genoemd. De aardappel is wereldwijd het belangrijkste voedselgewas na rijst, tarwe en mais. ',
  price:'€0,90/kilo',
  image: 'https://dejuistekooktijd.nl/wp-content/uploads/2019/05/aardappelen.jpg',
  };
  collectionRef.add({data}).then(documentReference => {
  console.log(`Added document with name: ${documentReference.id}`);
  });

})();