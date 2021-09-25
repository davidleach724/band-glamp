import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import CurrentTour from '../CurrentTour/CurrentTour';
import NavBar from '../NavBar/NavBar';
import AddDate from '../AddDate/AddDate';
import { userMockData } from '../../dataFiles/userData'
import './App.css';

const App = () => {
const [bookedShows, setBookedShows] = useState([])

useEffect(() => {
  setBookedShows({userMockData})
}, [])


  return (
    <main className="App">
      <NavBar />
      <Switch>
        <Route exact path='/currentTour/' render={() => <CurrentTour userData={bookedShows}/>} />
        <Route exact path='/addDate/' component={ AddDate } />
      </Switch>
    </main>
  );
}

export default App;
