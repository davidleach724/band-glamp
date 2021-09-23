import '../NavBar/NavBar.css'
import logo from "../../images/band-glamp-logo.png"
import addDate from '../../images/add-date.png'
import currentTour from '../../images/current-tour.png'
import pastDates from '../../images/past-dates.png'


const NavBar = () => {
  return (
    <nav className="nav-container">
      <div className="left-nav-menu"></div>
      <img src={ logo } className="logo"></img>
      <div className="right-nav-menu">
        <img src={ currentTour } className="menu-item"></img>
        <img src={ addDate } className="menu-item"></img>
        <img src={ pastDates } className="menu-item"></img>
      </div>
    </nav>
  )
}

export default NavBar