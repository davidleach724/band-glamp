import { Link } from 'react-router-dom'
import './SmallDates.css'

const SmallDates = ({ show }) => {
  return (
    <Link to={`/currentTour/${show.id}`} style={{textDecoration: 'none'}}>
    <section>
      <p>{show.date}</p>
      <p>{show.venue}</p>
      <div className="city-state">
        <p>{show.city}, </p>
        <p>{show.state}</p>
      </div>
    </section>
    </Link>
  )
}

export default SmallDates