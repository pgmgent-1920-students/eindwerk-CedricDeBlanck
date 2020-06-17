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
  name: 'Kiwi',
  content:'De kiwi of Chinese kruisbes (Actinidia chinensis) is de eetbare vrucht van een snel groeiende slingerende klimplant. De vruchten van de gewone kiwi zijn gewoonlijk langwerpig ovaal van vorm, hebben helder vruchtvlees met een witte kern en een ring van zwarte pitjes rondom deze kern. Schijfjes kiwi worden vaak als decoratieve garnering van gebak, salades en dergelijke gebruikt, maar de vrucht kan ook in zijn geheel worden gegeten (met of zonder schil). ',
  price:'€0,60',
  image: 'https://gcm.rmnet.be/imgcontrol/c750-d511/clients/rmnet/content/medias/leisure/food/kiwi.jpg',
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