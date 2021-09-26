import '../NavBar/NavBar.css'
import logo from "../../images/band-glamp-logo.png"
import addDate from '../../images/add-date.png'
import currentTour from '../../images/current-tour.png'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <nav className="nav-container">
      <div className="left-nav-menu"></div>
      <img src={ logo } className="logo" alt="band glamp logo"></img>
      <div className="right-nav-menu">
        <Link to="/currentTour">
        <img src={ currentTour } alt="current tour icon" className="menu-item"></img>
        </Link>
        <Link to="/addDate">
        <img src={ addDate } alt="add a date btn" className="menu-item"></img>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar