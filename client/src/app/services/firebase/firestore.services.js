import React, { useContext } from 'react';

import 'firebase/firestore';

import { useFirebase } from './firebase.services';

const FirestoreContext = React.createContext(null);
const useFirestore = () => useContext(FirestoreContext);

const FirestoreProvider = ({children}) => {

  const { app } = useFirebase();
  const db = app.firestore();

  const GetFruit = async () => {
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
    console.log(vegetables)
    return vegetables;
  };

  return (
    <FirestoreContext.Provider value={{GetFruit, getVegetables}}>
      {children}
    </FirestoreContext.Provider>
  );
};

export {
  FirestoreContext,
  FirestoreProvider,
  useFirestore
};