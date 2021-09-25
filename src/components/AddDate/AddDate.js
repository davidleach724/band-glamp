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
            />
          <input
            type='text'
            placeholder='Venue'
            name='venue'
            />
          <input
            type='text'
            placeholder='City'
            name='city'
            />          
          <StateList handleLocationChange={handleLocationChange}/>
          <input
            type='text'
            placeholder='Notes'
            name='notes'
            className='notes'
          />
          <img src={submitDate} className="submit-date" onClick={() => updateShows({
            id: '05',
            date: '10-08-2021',
            venue: 'The Blue Note',
            city: 'OKC',
            state: 'OK',
            notes: 'Cheap drinks',
            camp_img: '',
            camp_name: '',
            camp_address: '',
            camp_website: ''
            })}/>
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