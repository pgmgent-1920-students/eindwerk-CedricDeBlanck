import React, { useEffect, useState  } from 'react';
import { useParams } from 'react-router';

import { FruitDetailInner } from '../components/fruit';
import { useFirestore } from '../services';

const BookmarkDetailPage = ({}) => {
  const { id } = useParams();
  const [fruit, setFruit] = useState(null);
  const {getDetailFromFruits} = useFirestore();

  useEffect(() => {
    const fetchData = async (q) => {
      const data = await getDetailFromFruits(id);
      setFruit(data);
    }; 

    if (!fruit) {
      fetchData();
    }
  }, [getDetailFromFruits]);

  return (
    <div className="page page--bookmark">
      <div className="container">
          <FruitDetailInner fruit={fruit} />
      </div>
    </div>
  );
};

export default BookmarkDetailPage;