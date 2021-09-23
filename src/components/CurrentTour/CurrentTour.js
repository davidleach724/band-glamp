import React, { useEffect, useState } from 'react'
import { userMockData } from '../../dataFiles/userData'
import SmallDates from '../SmallDates/SmallDates'
import './CurrentTour.css'

const CurrentTour = () => {
  const [userData, setUserData] = useState([])

  useEffect(() => {
    setUserData(userMockData)
  }, [])

 const currentDates = userData.map(gig => {
   return (
    <SmallDates show={gig} />
   )
 })

  return (
    <>
      <h2>{ currentDates }</h2>
    </>
  )
}

export default CurrentTour