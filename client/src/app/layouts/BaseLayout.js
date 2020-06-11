import React, { Fragment } from 'react';

import { Header, Footer } from '../components/layout'; 

const BaseLayout = ({children}) => (
  <Fragment>
    <Header name="Fruit & Groenten winkel" listItemFirst="Groenten" listItemSecond="Fruit" listItemThird="Contact" image={{image:"https://i.pinimg.com/originals/0f/c9/3c/0fc93c8eda5a0c60a966ead60abc695b.jpg", alt:"Logo"}} />
    <main className="app-main">
      {children}      
    </main>
    <Footer title="Fruit & Groenten winkel" addres="Krokusstraat 6,\n8710 Wielsbeke" />
  </Fragment>
);
export default BaseLayout;