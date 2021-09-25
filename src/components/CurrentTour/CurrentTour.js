import React, { useEffect, useState } from 'react'
import { userMockData } from '../../dataFiles/userData'
import SingleShow from '../SingleShow/SingleShow'
import './CurrentTour.css'

const CurrentTour = ({userData}) => {
  // const [userData, setUserData] = useState([])

  // useEffect(() => {
  //   setUserData(userMockData)
  // }, [])

 const currentDates = userData.map(gig => {
   return (
    <SingleShow show={gig} />
   )
 })

  return (
    <>
      <div>{ currentDates }</div>
    </>
  )
}

export default CurrentTour