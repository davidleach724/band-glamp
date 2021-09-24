import StateList from '../StateList/StateList'
import './AddDate.css'

const AddDate = () => {

  return (
    <form>
      <div className="top-form">
        <h2>Add a Date Motha Fuckaaaa</h2>
      </div>
      <div className="bottom-form">
        <div className="left-form">
          <input
            type='date'
            />
          <input
            type='text'
            placeholder='Venue'
            name='venue'
            />
          <input
            type='text'
            placeholder='City'
            name='city'
            />          
          <StateList />
        </div>
        <div className="right-form">
        </div>
      </div>

    </form>
  )
}

export default AddDate