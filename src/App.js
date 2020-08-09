import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signIn' component={SignInAndSignOut} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;