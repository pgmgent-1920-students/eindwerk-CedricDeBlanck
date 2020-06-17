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

  // 1. Add a document
  /*collectionRef.add({foo: 'bar'}).then(documentReference => {
    console.log(`Added document with name: ${documentReference.id}`);
  });*/

  // 2. Add a document
  /*let documentRef = collectionRef.doc();
  documentRef.create({foo: 'bar'}).then((res) => {
    console.log(`Document created at ${res.writeTime.toDate()}`);
  }).catch((err) => {
    console.log(`Failed to create document: ${err}`);
  });*/

  // 3. Add a document
  /*collectionRef.doc(uuidv4()).create({bar: 'foo'}).then((res) => {
    console.log(`Document created at ${res.writeTime.toDate()}`);
  }).catch((err) => {
    console.log(`Failed to create document: ${err}`);
  });*/

  // Create a Message
 // document with data webshop bouncemerch
 const data = {
  name: 'Aardappelen',
  content:'De aardappel (Solanum tuberosum) behoort tot de nachtschadefamilie, net als de tomaat, paprika en tabak. De aardappel is een plant die ondergronds een energievoorraad in de vorm van zetmeel aanlegt. Het zetmeel slaat de plant op in voor de mens eetbare stengelknollen, die net als de plant zelf aardappelen of aardappels worden genoemd. De aardappel is wereldwijd het belangrijkste voedselgewas na rijst, tarwe en mais. ',
  price:'€0,90/kilo',
  image: 'https://dejuistekooktijd.nl/wp-content/uploads/2019/05/aardappelen.jpg',
  };
  collectionRef.add({data}).then(documentReference => {
  console.log(`Added document with name: ${documentReference.id}`);
  });

  // // Create messages via promises
  // const createMessages = async (n = 20) => {
  //   const promises = [];
  //   for (let i=0; i < n;i++) {
  //     promises.push(createMessage(faker.lorem.paragraph(), faker.name.findName()));
  //   }
  //   return await Promise.all(promises);
  // };

  //await createMessages(24); 

})();