import React from 'react';
import { Route, Switch } from 'react-router';
import LogOn from '../LogOn/LogOn';
import CurrentTour from '../CurrentTour/CurrentTour';
import NavBar from '../NavBar/NavBar';
import './App.css';

const App = () => {
  return (
    <main className="App">
      <NavBar />
      <Switch>
        <Route exact path='/logon/' component={ LogOn } />
        <Route exact path='/currentTour/' component={ CurrentTour } />
      </Switch>
    </main>
  );
}

export default App;
