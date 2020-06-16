import React from 'react';

const VegetableDetailInner = ({vegetable}) => {

  return (
    <div className="row align-items-stretch bookmark">
      {!!vegetable
      ? 
        (
          <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={vegetable.uid}>
            <div className="card bookmark" data-id={vegetable.uid}>
              <img src={vegetable.image} className="card-img-top" alt="Card image cap"/>
              <div className="card-body">
              <img src={vegetable.data.image} className="card-img-top" alt={vegetable.data.name} />
           
                <h6 className="card-subtitle mb-2 text-muted">{vegetable.data.name}</h6>
                {/* <h5 className="card-title  text-truncate">{bookmark.title}</h5>                 */}
              </div>
            </div>
          </div>
        )
      : <p>No bookmark.</p>
      }
    </div>
  )
};

export default VegetableDetailInner;