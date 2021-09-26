import './CurrentCampSite.css'

const CurrentCampSite = ({currentSite}) => {
  return (
    <div>
      <img src={currentSite.images[0].url} className="camp-image"/>
      {currentSite.addresses[0] != null && 
          <p className="camp-address">{currentSite.addresses[0].line1} {currentSite.addresses[0].city} {currentSite.addresses[0].state}</p>}
        <p className="camp-description">{currentSite.description}</p>
        {currentSite.url != null && 
        <a href={currentSite.url}>Website</a>}
    </div>
  )
}

export default CurrentCampSite