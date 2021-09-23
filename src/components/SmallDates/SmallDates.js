import './SmallDates.css'

const SmallDates = ({ show }) => {
  return (
    <section>
      <p>{show.date}</p>
      <p>{show.venue}</p>
      <p>{show.city}</p>
      <p>{show.state}</p>
    </section>
  )
}

export default SmallDates