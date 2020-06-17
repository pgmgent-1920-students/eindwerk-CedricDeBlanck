import React from 'react';
import { NavLink  } from 'react-router-dom';

import * as Routes from '../../routes';

import './VegetableDetail.scss';
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


const VegetableDetailInner = ({vegetable}) => {



  return (
    <div className="row align-items-stretch bookmark">
      {!!vegetable
      ? 
        (
          <div className="detail__page" key={vegetable.uid}>
              <div className="detail__go-back">
              <NavLink to={Routes.VEGETABLES} className="detail__go-back" activeClassName="active"><FaArrowLeft /> Ga terug</NavLink>
              </div>
            <div className="detail__page__inner">
              <div className="Detail__image" data-id={vegetable.uid}>
                <img src={vegetable.data.image} className="card-img" alt={vegetable.data.name}/>
              </div>
              <div className="card-body__inner">
                <h5 className="card-name">{vegetable.data.name}</h5>
                <p className="card-price">{vegetable.data.price}</p>
                <p className="card-stock"><FaCheckCircle /> Beschikbaar</p>
                <button type="button" class="btn btn-info">Toevoegen aan winkelmandje</button>
                <form>
                  <input type="text" id="fname" name="fname" placeholder="Aantal" />
                </form>
              </div>
              </div>
              <div className="detail__info">
                <div className="detail__line"></div>
                <p className="detail__info__inner">{vegetable.data.content}</p>
                <div className="detail__line"></div>
              </div>
          </div>
          
        )
      : <p>No bookmark.</p>
      }
    </div>
  )
};

export default VegetableDetailInner;