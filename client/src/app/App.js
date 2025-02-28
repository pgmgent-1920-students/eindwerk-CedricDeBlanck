import React, {} from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';

import { AuthProvider, FirebaseProvider, FirestoreProvider } from './services';
import { RouteWithLayout } from './utilities';

import { BaseLayout } from './layouts';
import { HomePage, VegetablePage, SignInPage, FruitPage, ContactPage, DetailpageVegetables, DetailpageFruit, ShoppingBasketPage} from './pages';

import * as Routes from './routes';

import './App.scss';

function App() {
  return (
    <div className="app">
      <FirebaseProvider>
        <AuthProvider>
          <FirestoreProvider>
            <Router basename={'/eindwerk-CedricDeBlanck'}>
              <Switch>
                <RouteWithLayout exact path={Routes.LANDING} layout={ BaseLayout } component={ HomePage }/>
                <Redirect from={Routes.HOME} to={Routes.LANDING}/>
                <RouteWithLayout exact path={Routes.VEGETABLES} layout={ BaseLayout } component={ VegetablePage }/>
                <RouteWithLayout exact path={Routes.FRUIT} layout={ BaseLayout } component={ FruitPage }/>
                <RouteWithLayout exact path={Routes.FRUIT_DETAIL} layout={ BaseLayout } component={ DetailpageFruit }/>
                <RouteWithLayout exact path={Routes.VEGETABLES_DETAIL} layout={ BaseLayout } component={ DetailpageVegetables }/>
                <RouteWithLayout exact path={Routes.CONTACT} layout={ BaseLayout } component={ ContactPage }/>
                <RouteWithLayout exact path={Routes.AUTH_SIGN_IN} layout={ BaseLayout } component={ SignInPage }/>
                <RouteWithLayout exact path={Routes.SHOPPINGBASKET} layout={ BaseLayout } component={ ShoppingBasketPage }/>
              </Switch>
            </Router>
          </FirestoreProvider>
        </AuthProvider>
      </FirebaseProvider>
    </div>
  );
}

export default App;
