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
    setBookedShows(userMockData)
  }, [])

  const updateShows = (newShow) => {
    setBookedShows([...bookedShows, newShow])
    console.log('bookedShows', bookedShows)
  }

  return (
    <main className="App">
      <NavBar />
      <Switch>
        {bookedShows &&
        <Route exact path='/currentTour/' render={() => <CurrentTour userMockData={bookedShows}/>} />}
        <Route exact path='/addDate/' render={() => <AddDate updateShows={updateShows}/>} />
      </Switch>
    </main>
  );
}

export default App;