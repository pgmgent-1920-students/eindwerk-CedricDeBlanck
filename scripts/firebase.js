import * as admin from 'firebase-admin';
import 'firebase/auth';
import 'firebase/firestore';

import serviceAccount from './key.json';

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://eindwerk-cedricdeblanck.firebaseio.com"
});

// Reference Authentication


// Reference Firestore
const db = app.firestore();

/*
 * Generate Timestamps
*/
const generateTimestamps = () => {
  return {
    createdAt: Date.now(),
    modifiedAt: null,
    deletedAt: null,
  }
};

/*
* Generate Integer between min and max
*/


export {
  admin,
  app,
  db,
  generateTimestamps,
  
}