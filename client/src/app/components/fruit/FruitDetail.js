import React from 'react';
import { NavLink, Link  } from 'react-router-dom';

import * as Routes from '../../routes';

import { FaCheckCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


const FruitDetailInner = ({fruit}) => {



  return (
    <div className="row align-items-stretch bookmark">
      {!!fruit
      ? 
        (
          <div className="detail__page" key={fruit.uid}>
              <div className="detail__go-back">
              <NavLink to={Routes.FRUIT} className="detail__go-back" activeClassName="active"><FaArrowLeft /> Ga terug</NavLink>
              </div>
            <div className="detail__page__inner">
              <div className="detail__image" data-id={fruit.uid}>
                <img src={fruit.data.image} className="card-img" alt={fruit.data.name}/>
              </div>
              <div className="card-body__inner">
                <h5 className="card-name">{fruit.data.name}</h5>
                <p className="card-price">{fruit.data.price}</p>
                <p className="card-stock"><FaCheckCircle /> Beschikbaar</p>
                <button type="button" class="btn btn-info">Toevoegen aan winkelmandje</button>
                <form>
                  <input type="text" id="fname" name="fname" placeholder="Aantal" />
                </form>
              </div>
              </div>
              <div className="detail__info">
                <div className="detail__line"></div>
                <p className="detail__info__inner">{fruit.data.content}</p>
                <div className="detail__line"></div>
              </div>
          </div>
          
        )
      : <p>Geen fruit gevonden</p>
      }
    </div>
  )
};

export default FruitDetailInner;