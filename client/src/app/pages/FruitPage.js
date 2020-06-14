import React, { Fragment, useState, useEffect, useRef } from 'react';

import { BookmarksList } from '../components/bookmark';

const API_URL = 'https://www.fruityvice.com/api/fruit/all';

const BookmarksPage = ({}) => {
  const refElement = useRef();
  const [user, setUser] = useState();
  const [txtUser, setTxtUser] = useState('');

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    const response = await fetch(API_URL);
    const jsonData = await response.json();
    setTxtUser(jsonData);
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