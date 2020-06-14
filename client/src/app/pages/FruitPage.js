import React, { Fragment, useState, useEffect } from 'react';

const API_URL = 'https://github.com/CedricDeBlanck/Eindwerk-pgm-BAAS-CedricDeBlanck/blob/master/data/fruitData.json';

const BookmarksPage = ({}) => {
  const [user] = useState();

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    const response = await fetch(API_URL);
    const jsonData = await response.json();
    console.log(jsonData)
  }

  return (
    <div className="app">
      {user
      ? <div className="user">
        <h1>{user.name}</h1>
      </div>
      : <Fragment></Fragment>}
    </div>
  )

}

export default BookmarksPage;