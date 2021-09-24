import React from 'react';
import { Route, Switch } from 'react-router';
import LogOn from '../LogOn/LogOn';
import CurrentTour from '../CurrentTour/CurrentTour';
import NavBar from '../NavBar/NavBar';
import AddDate from '../AddDate/AddDate';
import './App.css';

const App = () => {
  return (
    <main className="App">
      <NavBar />
      <Switch>
        <Route exact path='/logon/' component={ LogOn } />
        <Route exact path='/currentTour/' component={ CurrentTour } />
        <Route exact path='/addDate/' component={ AddDate } />
      </Switch>
    </main>
  );
}

export default App;
