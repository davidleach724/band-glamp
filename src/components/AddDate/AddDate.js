import CampSites from '../CampSites/CampSites'
import { useEffect, useState } from 'react'
import { fetchData } from '../../apiCall'
import StateList from '../StateList/StateList'
import './AddDate.css'

const AddDate = () => {
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
        <h2 className="add-a-date-header">Add a Date Motha Fuckaaaa</h2>
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
          />
        </div>
        <div className="right-form">
          {campSites.total != 641 && <CampSites />}
        </div>
      </div>
      <button>ADD DATE</button>

    </form>
  )
}

export default AddDate