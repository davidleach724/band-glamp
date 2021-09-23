import React from 'react';
import { Route, Switch } from 'react-router';
import LogOn from '../LogOn/LogOn';
import './App.css';

const App = () => {
  return (
    <main className="App">
      <h1>BAND GLAMP MOTHA FUCKA</h1>
      <Switch>
        <Route exact path='/' component={ LogOn } />
      </Switch>
    </main>
  );
}

export default App;
