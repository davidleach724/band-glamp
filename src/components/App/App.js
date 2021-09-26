import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import CurrentTour from '../CurrentTour/CurrentTour';
import NavBar from '../NavBar/NavBar';
import AddDate from '../AddDate/AddDate';
import ShowDetails from '../ShowDetails/ShowDetails';
import Error from '../Error/Error';
import { userMockData } from '../../dataFiles/userData'
import './App.css';

const App = () => {
  const [bookedShows, setBookedShows] = useState([])

  useEffect(() => {
    setBookedShows(userMockData)
  }, [])

  const updateShows = (newShow) => {
    setBookedShows([...bookedShows, newShow])
  }

  const filterShows = (selectedID) => {
    return bookedShows.find(elem => elem.id === selectedID)
  }

  return (
    <main className="App">
      <NavBar />
      <Switch>
        {bookedShows &&
        <Route exact path='/currentTour/' render={() => <CurrentTour userMockData={bookedShows}/>} />}
        <Route exact path='/currentTour/:id' render={({ match }) => <ShowDetails selectedShow={filterShows(match.params.id)}/>} />
        <Route exact path='/addDate/' render={() => <AddDate updateShows={updateShows}/>} />
        <Route component={ Error } />
      </Switch>
    </main>
  );
}

export default App;