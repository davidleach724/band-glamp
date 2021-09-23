import React from 'react';
import { Route, Switch } from 'react-router';
import LogOn from '../LogOn/LogOn';
import NavBar from '../NavBar/NavBar';
import './App.css';

const App = () => {
  return (
    <main className="App">
      <NavBar />
      <Switch>
        {/* <Route exact path='/' component={ LogOn } /> */}
      </Switch>
    </main>
  );
}

export default App;
