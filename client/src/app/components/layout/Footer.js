import React, { } from 'react';
import { Link  } from 'react-router-dom';

import * as Routes from '../../routes';


import { FaPhone } from "react-icons/fa";  // Font Awesome
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


import './Footer.scss';
 
const Footer = (props) => {
  return (
    <footer className="app-footer">
            <h2 className="footer__title">{props.title} </h2>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4">
              <div className="info__adress">
              <FaMapMarkerAlt />
                <h5 className="info__subtitle">Contact:</h5>
                <p>Adres:</p>
                <p className="info__adress__inner">{props.adress.street} {props.adress.number},</p>
                <p>{props.adress.city}</p>
                
              </div>

          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <div className="info__adress">
            <FaPhone />
                  <h5 className="info__subtitle">Telefoon:</h5>
                  <p>GSM: {props.tel.GSM}</p>
                  <p className="info__adress__inner">TEL: {props.tel.TEL}</p>
            </div>
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
            <a href="https://www.facebook.com/GraduaatProgrammeren.Arteveldehogeschool"><FaFacebookSquare /></a>
            <a href="https://www.instagram.com/explore/locations/354987211999862/graduaat-programmeren-arteveldehogeschool/"><FaInstagramSquare /></a>
            <a href="https://twitter.com/explore"><FaTwitter /></a>
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
