import { stateList } from '../../dataFiles/userData'

const StateList = () => {
const stateListings = stateList.map(state => {
  return (
    <option value={state}>{state}</option>
  )
})

  return (
    <select>
      { stateListings }
    </select>
  )
}

export default StateList