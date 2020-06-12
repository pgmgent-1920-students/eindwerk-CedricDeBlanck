import React, { } from 'react';
import { Link, NavLink  } from 'react-router-dom';

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
      <div className="header__top__contact">
        <p className="nav__item">{props.name}</p>
        
      </div>
        <div className="navigation">
          <div className="nav__logo">
            <NavLink to={Routes.LANDING} className="nav-link" activeClassName="active"><img src={props.image.image} alt={props.image.alt} className="logo"></img></NavLink>
          </div>
          <ul className="navigation__list">
            <li className="nav__item">
            <NavLink to={Routes.MESSAGES} className="nav-link" activeClassName="active">Groenten</NavLink>
            </li>
            <li className="nav__item">
            <NavLink to={Routes.BOOKMARKS} className="nav-link" activeClassName="active">Fruit</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to={Routes.POKEMONS} className="nav-link" activeClassName="active">Contact</NavLink>
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
    </header>
  )
};

export default Header;