import React, { useContext } from 'react';

import 'firebase/firestore';

import { useFirebase } from './firebase.services';

const FirestoreContext = React.createContext(null);
const useFirestore = () => useContext(FirestoreContext);

const FirestoreProvider = ({children}) => {

  const { app } = useFirebase();
  const db = app.firestore();

  const getFruits = async () => {
    const query = db.collection('Fruit');
    const querySnapshot = await query.get();
    const fruit = querySnapshot.docs.map((doc) => {
      return {
        uid: doc.id,
        ...doc.data()
      }
    });
    console.log(fruit)
    return fruit;
  };

  const getVegetables = async () => {
    const query = db.collection('Groenten');
    const querySnapshot = await query.get();
    const vegetables = querySnapshot.docs.map((doc) => {
      return {
        uid: doc.id,
        ...doc.data()
    
      }

    }); 

    return vegetables;
  };

  const getDetailFromVegetables = async (id) => {
    const docRef = await db.collection('Groenten').doc(id);
    const docSnapshot = await docRef.get();
    return {
      uid: docSnapshot.id,
      ...docSnapshot.data()
    };
  };

  const getDetailFromFruits = async (id) => {
    const docRef = await db.collection('Fruit').doc(id);
    const docSnapshot = await docRef.get();
    return {
      uid: docSnapshot.id,
      ...docSnapshot.data()
    };
  };

  

  /*const getDetailFromVegetables = async (id) => {
    const docRef = db.collection('Groenten').doc();
    const docSnapshot = await docRef.get(id);
    const d = docSnapshot.data();
    console.log(d);
    return {
      uid: docSnapshot.id,
      ...d.data
    };
  };*/

  return (
    <FirestoreContext.Provider value={{getFruits, getVegetables, getDetailFromVegetables, getDetailFromFruits}}>
      {children}
    </FirestoreContext.Provider>
  );
};

export {
  FirestoreContext,
  FirestoreProvider,
  useFirestore
};