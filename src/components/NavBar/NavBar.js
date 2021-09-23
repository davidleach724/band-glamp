import '../NavBar/NavBar.css'
import logo from "../../images/band-glamp-logo.png"


const NavBar = () => {
  return (
    <nav className="nav-container">
      <img src={ logo } className="logo"></img>
    </nav>
  )
}

export default NavBar