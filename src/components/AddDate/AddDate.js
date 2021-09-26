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
  const [currentSite, setCurrentSite] = useState([])
  const [newShow, setNewShow] = useState({})

  useEffect(() => {
    fetchData(location)
    .then(data => setCampSites(data))
  }, [location])

  const handleLocationChange = (stateAbrev) => {
    return setLocation(stateAbrev)
  }

  const handleCampChange = (site) => {
    setCurrentSite(site)
  }

  return (
    <form>
      <div className="top-form">
        <img src={whatGig} className="what-gig" alt="what's the gig"/>
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
            
            <img src={submitDate} className="submit-date" alt="submit btn" onClick={() => 
              updateShows({
              id: Date.now().toString(),
              date: newShow.date,
              venue: newShow.venue,
              city: newShow.city,
              state: location,
              notes: newShow.notes,
              camp_img: (currentSite.images[0].url === undefined) ? '' : currentSite.images[0].url,
              camp_name: (currentSite.name === undefined) ? '' : currentSite.name,
              camp_address: (currentSite.addresses[0] === undefined) ? '' : currentSite.addresses[0].line1,
              camp_website: (currentSite.url === undefined) ? '' : currentSite.url
              })}/>
          </Link>
        </div>
        <div className="right-form">
          {campSites.total > 100 && <img src={tent} alt="tent and fire sketch" className="tent"/>}
          {campSites.total < 100 && <CampSites campProps={campSites} handleCampChange={handleCampChange}/>}
        </div>
      </div>
    </form>
  )
}

export default AddDate