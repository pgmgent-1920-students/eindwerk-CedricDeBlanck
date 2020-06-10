import * as admin from 'firebase-admin';
import 'firebase/firestore';

import serviceAccount from './key.json';
console.log(serviceAccount);

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://eindwerk-cedricdeblanck.firebaseio.com"
});

// Reference Firestore
const db = app.firestore();
console.log(db);
/*

  Generate Timestamps
*/
const generateTimestamps = () => {
  return {
    createdAt: DataCue.now(),
    modifiedAt: null,
    deletedAt: null,
  }
};

export {
  admin,
  app,
  db,
  generateTimestamps
}