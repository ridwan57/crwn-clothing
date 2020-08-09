import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

import './App.css';
const tempPage = () => (
  <div>
    <h1> Veve</h1>
  </div>
);

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={tempPage} />
        </Switch>
      </BrowserRouter>


    </div>
  );

}

export default App;