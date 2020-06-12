import React, { Fragment } from 'react';

import { Header, Footer } from '../components/layout'; 

const BaseLayout = ({children}) => (
  <Fragment>
    <Header name="Fruit & Groenten webshop" listItemFirst="Groenten" listItemSecond="Fruit" listItemThird="Contact" image={{image:"https://i.pinimg.com/originals/0f/c9/3c/0fc93c8eda5a0c60a966ead60abc695b.jpg", alt:"Logo"}} />
    <main className="app-main">
      {children}      
    </main>
    <Footer title="Fruit & Groenten webshop" adress={{street: "Boerenstraat", number: 49, city: "Lokeren"}}  />
  </Fragment>
);
export default BaseLayout;