import './CurrentCampSite.css'

const CurrentCampSite = ({currentSite}) => {
  return (
    <div>
      <img src={currentSite.images[0].url} className="camp-image"/>
      {currentSite.addresses[0] != null && 
        <div>
          <p>{currentSite.addresses[0].line1} </p>
          <p>{currentSite.addresses[0].city} </p>
          <p>{currentSite.addresses[0].state}</p>
        </div>}
        <p>{currentSite.description}</p>
        <a>{currentSite.url}</a>
    </div>
  )
}

export default CurrentCampSite