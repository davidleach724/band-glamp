import errorImg from '../../images/pagenotfound.png'
import './Error.css'

const Error = () => {
  return (
    <img src={errorImg} className="page-not-found" alt="page not found" />
  )
}

export default Error