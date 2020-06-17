import React, { } from 'react';

import { Link } from 'react-router-dom';
import * as Routes from '../../routes';

import { useAuth } from '../../services/firebase/auth.services';
import Logo from '../../_static/assets/images/logo192.png';

import './CourtesyNavigation.scss';

const CourtesyNavigation = ({children}) => {
  const {currentUser, signOut} = useAuth();

  return (
    <ul className="navbar-nav courtesy-navigation">
      <li className="nav-item">
        {!!currentUser
        ? <div className="btn-group">
            <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img className="profile__picture" src={Logo} />
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href={Routes.HOME} onClick={signOut}>Logout</a>
              <a className="dropdown-item" href={Routes.SHOPPINGBASKET} >Winkelwagen</a>
            </div>
          </div>
        : <Link className="nav-link" to={Routes.AUTH_SIGN_IN}>Log in</Link>
        }        
      </li>
    </ul>
  );
};

export default CourtesyNavigation;
