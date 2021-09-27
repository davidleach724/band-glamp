import Error from '../Error/Error'
import heresGig from '../../images/heres-the-gig.png'
import heresCamp from '../../images/heres-the-camp.png'
import currentTour from '../../images/current-tour.png'
import './ShowDetails.css'
import { Link } from 'react-router-dom'

const ShowDetails = ({ selectedShow }) => {

  return (
    <div className="details-background">
      {!selectedShow && <Error />}
      {selectedShow != null && 
      <>
      <div className="top-details">
        <img src={heresGig} alt="heres the gig banner" className="here-gig"/>
      </div>
      <div className="bottom-details">
        <p>Date: {selectedShow.date}</p>
        <p>Venue: {selectedShow.venue}</p>
        <p>{selectedShow.city}, {selectedShow.state}</p>
        <p>Details: {selectedShow.notes}</p>
        <img src={heresCamp} alt="heres the camp banner" className="here-camp"/>
        <img src={selectedShow.camp_img} alt="chosen camp" className="camp-img"/>
        <p>Campsite: {selectedShow.camp_name}</p>
        <p>Address: {selectedShow.camp_address}</p>
        <a href={selectedShow.camp_website}>Website</a>
      </div>
      <Link to="/currentTour">
        <img src={currentTour} alt="Go to current tour" className="current-tour-btn" />
      </Link>
      </>}
    </div>
    )
}

export default ShowDetails