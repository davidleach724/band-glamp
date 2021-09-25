import { Link } from 'react-router-dom'
import CampSites from '../CampSites/CampSites'
import { useEffect, useState } from 'react'
import { fetchData } from '../../apiCall'
import StateList from '../StateList/StateList'
import whatGig from '../../images/what-gig.png'
import submitDate from '../../images/submit-date.png'
import tent from '../../images/tent.png'
import './AddDate.css'

const AddDate = ({updateShows}) => {
  const [location, setLocation] = useState('')
  const [campSites, setCampSites] = useState([])
  const [newShow, setNewShow] = useState({})

  useEffect(() => {
    fetchData(location)
    .then(data => setCampSites(data))
  }, [location])

  const handleLocationChange = (stateAbrev) => {
    return setLocation(stateAbrev)
  }

  return (
    <form>
      <div className="top-form">
        <img src={whatGig} className="what-gig" />
      </div>
      <div className="bottom-form">
        <div className="left-form">
          <input
            type='date'
            onChange={e => setNewShow({...newShow, date: e.target.value})}
            />
          <input
            type='text'
            placeholder='Venue'
            name='venue'
            onChange={e => setNewShow({...newShow, venue: e.target.value})}
            />
          <input
            type='text'
            placeholder='City'
            name='city'
            onChange={e => setNewShow({...newShow, city: e.target.value})}
            />          
          <StateList handleLocationChange={handleLocationChange}/>
          <input
            type='text'
            placeholder='Notes'
            name='notes'
            className='notes'
            onChange={e => setNewShow({...newShow, notes: e.target.value})}
          />
          <Link to="/currentTour/">
            <img src={submitDate} className="submit-date" onClick={() => updateShows({
              id: '05',
              date: newShow.date,
              venue: newShow.venue,
              city: newShow.city,
              state: location,
              notes: newShow.notes,
              camp_img: '',
              camp_name: '',
              camp_address: '',
              camp_website: ''
              })}/>
          </Link>
        </div>
        <div className="right-form">
          {campSites.total > 100 && <img src={tent} className="tent"/>}
          {campSites.total < 100 && <CampSites campProps={campSites}/>}
        </div>
      </div>
    </form>
  )
}

export default AddDate