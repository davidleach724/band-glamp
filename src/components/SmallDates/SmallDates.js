import { Link } from 'react-router-dom'
import './SmallDates.css'

const SmallDates = ({ show }) => {
  return (
    <Link to={`/currentTour/${show.id}`} style={{textDecoration: 'none'}}>
    <section>
      <p>{show.date}</p>
      <p>{show.venue}</p>
      <p>{show.city}</p>
      <p>{show.state}</p>
    </section>
    </Link>
  )
}

export default SmallDates