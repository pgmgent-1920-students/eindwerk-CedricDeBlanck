import { v4 as uuidv4 } from 'uuid';
import faker from 'faker';
import { admin, app, db, generateTimestamps } from './firebase';

(async () => {

  // Create  an empty array for products
  const products = [];

  // Get product collection
  let collectionRef = db.collection('items-on-sale');

  // Loop through documents of the collection
  const result = await collectionRef.get().then(querySnapshot => {
    querySnapshot.forEach(documentSnapshot => {
      const id = documentSnapshot.id;
      products.push({
        id,
        ...documentSnapshot.data()
      });
    });
  });
  console.log(products);

  // 1. Add a document
  // collectionRef.add({foo: 'bar'}).then(documentReference => {
  //   console.log(`Added document with name: ${documentReference.id}`)
  // })

  // 2. Add a document
  /*let documentRef = collectionRef.doc();
  documentRef.create({foo: 'bar'}).then((res) => {
    console.log(`Document created at ${res.writeTime}`);
  }).catch((err) => {
    console.log(`Failed to create document: ${err}`)
  })*/

  // 3. Add a document

  

  /*collectionRef.doc(uuidv4()).create({bar: 'foo'}).then((res) => {
    console.log(`Document created at ${res.writeTime}`);
  }).catch((err) => {
    console.log(`Failed to create document: ${err}`)
  })*/

  const createProduct = (content, sender) => {
    // Add a document with faker
    const data = {
      content: content,
      sender: sender,
      createdAt: Date.now()
    };

    collectionRef.add(data).then(documentReference => {
      console.log(`Added document with name: ${documentReference.id}`)
    });
  };


  for(let i = 0; i < 5; i++) {
    createProduct(faker.lorem.paragraph(), faker.name.findName());
  }


})();
