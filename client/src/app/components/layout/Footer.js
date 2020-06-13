import React, { } from 'react';
import { Link  } from 'react-router-dom';

import * as Routes from '../../routes';

import './Footer.scss';
 
const Footer = (props) => {
  return (
    <footer className="app-footer">
            <h2 className="footer__title">{props.title} </h2>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4">
              <div className="info__adress">
                <p className="info__subtitle">Contact:</p>
                <p>{props.adress.street} {props.adress.number},</p>
                <p>{props.adress.city}</p>
                
              </div>
            
          </div>
          <div className="col-12 col-md-4 col-lg-4">
  
          </div>
          <div className="col-12 col-md-4 col-lg-4">
          <ul className="nav flex-column">
              <li className="nav-item">
                <Link to={Routes.HOME} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={Routes.VEGETABLES} className="nav-link">Groenten</Link>
              </li>
              <li className="nav-item">
                <Link to={Routes.FRUIT} className="nav-link">Fruit</Link>
              </li>
              <li className="nav-item">
                <Link to={Routes.AUTH_SIGN_IN} className="nav-link">Log in</Link>
              </li>
            </ul>
          </div>
          
        </div>
      </div>


     <div className="footer__information">

     </div>
    </footer>
  );
};

export default Footer;
