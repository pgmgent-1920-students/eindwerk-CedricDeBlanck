import React, { } from 'react';
import { NavLink  } from 'react-router-dom';

import CourtesyNavigation from './CourtesyNavigation';

import * as Routes from '../../routes';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

import './Header.scss';


const Header = (props) => {
  return (
    <header>
      <div className="desktop__nav">
        <div className="header__top__contact">
          <p className="nav__item">{props.name}</p>
          
        </div>
          <div className="navigation">
            <div className="nav__logo">
              <NavLink to={Routes.LANDING} className="nav-link" activeClassName="active"><img src={props.image.image} alt={props.image.alt} className="logo"></img></NavLink>
            </div>
            <ul className="navigation__list">
              <li className="nav__item">
              <NavLink to={Routes.VEGETABLES} className="nav-link" activeClassName="active">Groenten</NavLink>
              </li>
              <li className="nav__item">
              <NavLink to={Routes.FRUIT} className="nav-link" activeClassName="active">Fruit</NavLink>
              </li>
              <li className="nav__item">
                <NavLink to={Routes.CONTACT} className="nav-link" activeClassName="active">Contact</NavLink>
              </li>
              <div className="social">
              <a href="https://www.facebook.com/GraduaatProgrammeren.Arteveldehogeschool"><FontAwesomeIcon icon={faFacebookSquare} /></a>
              <a href="https://www.instagram.com/explore/locations/354987211999862/graduaat-programmeren-arteveldehogeschool/"><FontAwesomeIcon icon={faInstagramSquare} /></a>
              <a href="https://twitter.com/explore"><FontAwesomeIcon icon={faTwitter} /></a>
            </div>
            </ul>
            <div className="login">
              <CourtesyNavigation />
            </div>
          </div>
        <div className="header__top__contact">
        </div>
      </div>

      <div className="mobile_nav">
          <nav className="navbar navbar-light amber lighten-4 mb-4">

            <a className="navbar-brand" href="#">Groenten & Fruit</a>

            <button className="navbar-toggler first-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent20"
              aria-controls="navbarSupportedContent20" aria-expanded="false" aria-label="Toggle navigation">
              <div className="animated-icon1"><span></span><span></span><span></span></div>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent20">

              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                <NavLink to={Routes.LANDING} className="nav-link" activeClassName="active">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to={Routes.VEGETABLES} className="nav-link" activeClassName="active">Groenten</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to={Routes.FRUIT} className="nav-link" activeClassName="active">Fruit</NavLink>
                </li>
                <li className="nav__item">
                <NavLink to={Routes.CONTACT} className="nav-link" activeClassName="active">Contact</NavLink>
                </li>
                <li>
                <div className="login">
                  <NavLink to={Routes.SHOPPINGBASKET} className="nav-link" activeClassName="active">Winkelmandje</NavLink>
                  <CourtesyNavigation />
                </div>
                </li>
              </ul>

            </div>

          </nav>
        </div>
    </header>

      
  )
};

export default Header;