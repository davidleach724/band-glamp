import React from 'react'
import SingleShow from '../SingleShow/SingleShow'
import './CurrentTour.css'

const CurrentTour = ({userMockData}) => {
 const currentDates = userMockData.map(gig => {
   return (
    <SingleShow show={gig} key={gig.id}/>
   )
 })

  return (
    <>
      <div>{ currentDates }</div>
    </>
  )
}

export default CurrentTour