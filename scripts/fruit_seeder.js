import { v4 as uuidv4 } from 'uuid';
import faker from 'faker';
import { admin, app, db, generateTimestamps } from './firebase';

(async () => {
  // Create an empty array for messages
  const Fruit = [];

  // Get messages collection
  let collectionRef = db.collection('Fruit');
  // Loop through the documents of the collection
  const result = await collectionRef.get().then(querySnapshot => {
    const size = querySnapshot.size;
    querySnapshot.forEach(documentSnapshot => {
      const id = documentSnapshot.id;
      Fruit.push({
        id,
        ...documentSnapshot.data()
      });
    });
  });
  console.log(Fruit);

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
  name: 'Peer',
  content:'Peer, Pyrus, is een plantengeslacht uit de rozenfamilie (Rosaceae) dat de algemeen bekende vruchten produceert. Het geslacht komt voor in veel landen, vooral op het noordelijk halfrond. ',
  price:'€0,35',
  image: 'https://static.hbvl.be/Assets/Images_Upload/2019/03/23/513f3982-4cc2-11e9-8557-067a2276eea2.jpg?width=1152&format=jpg',
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