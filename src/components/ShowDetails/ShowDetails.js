import heresGig from '../../images/heres-the-gig.png'
import './ShowDetails.css'

const ShowDetails = ({ selectedShow }) => {

  return (
    <div className="details-background">
      <div className="top-details">
        <img src={heresGig} alt="heres the gig banner" className="here-gig"/>
      </div>
      <div className="bottom-details">
        <p>Date: {selectedShow.date}</p>
        <p>Venue: {selectedShow.venue}</p>
        <p>{selectedShow.city}, {selectedShow.state}</p>
        <p>Details: {selectedShow.notes}</p>
        <img src={selectedShow.camp_img} alt="chosen camp" className="camp-img"/>
        <p>Campsite: {selectedShow.camp_name}</p>
        <p>Address: {selectedShow.camp_address}</p>
        <a href={selectedShow.camp_website}>Website</a>
      </div>
    </div>
  )
}

export default ShowDetails