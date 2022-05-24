import React from 'react'

const EventItem = ({event}) => {
  console.log(event)
  return (
    <div className='event-item'>
        <h2>{ event.body }</h2>

        <button className='btn'>X</button>
    </div>
  )
}

export default EventItem