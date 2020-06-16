import React, { useEffect, useState  } from 'react';
import { useParams } from 'react-router';

import { VegetableDetailInner } from '../components/vegetables';
import { useFirestore } from '../services';

const BookmarkDetailPage = ({}) => {
  const { id } = useParams();
  const [vegetable, setVegetable] = useState(null);
  const {getDetailFromVegetables} = useFirestore();

  useEffect(() => {
    const fetchData = async (q) => {
      const data = await getDetailFromVegetables(id);
      setVegetable(data);
    }; 

    if (!vegetable) {
      fetchData();
    }
  }, []);

  return (
    <div className="page page--bookmark">
      <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Bookmark</h1>
            </div>
          </div>
          <VegetableDetailInner vegetable={vegetable} />
      </div>
    </div>
  );
};

export default BookmarkDetailPage;