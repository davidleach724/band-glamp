import welcomeLogo from '../../images/welcome.png'
import './Welcome.css'

const Welcome = () => {
  return (
    <img src={welcomeLogo} alt="welcome to band glamp" className="welcome-logo" />
  )
}

export default Welcome