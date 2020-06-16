import React, { } from 'react';
import { Link  } from 'react-router-dom';

import * as Routes from '../../routes';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

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
          <div className="footer__social">
            <a href="https://www.facebook.com/GraduaatProgrammeren.Arteveldehogeschool"><FontAwesomeIcon icon={faFacebookSquare} /></a>
            <a href="https://www.instagram.com/explore/locations/354987211999862/graduaat-programmeren-arteveldehogeschool/"><FontAwesomeIcon icon={faInstagramSquare} /></a>
            <a href="https://twitter.com/explore"><FontAwesomeIcon icon={faTwitter} /></a>
            <div className="footer__gradient"></div>
          </div>
        </div>
      </div>


     <div className="footer__information">

     </div>
    </footer>
  );
};

export default Footer;
