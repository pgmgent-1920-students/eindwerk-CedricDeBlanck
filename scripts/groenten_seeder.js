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
  name: 'Courgette',
  content:' tis keer twuk el',
  price:'€1,00',
  image: 'https://img-3.journaldesfemmes.fr/PVIbH_pGxMFhGPl8oEkWr3DbtaY=/910x607/smart/3d4af6fac7234c2283fd7d9cf34e6981/ccmcms-jdf/10659281.jpg',
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