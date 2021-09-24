import StateList from '../StateList/StateList'
import './AddDate.css'

const AddDate = () => {


  return (
    <form>


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

    </form>
  )
}

export default AddDate