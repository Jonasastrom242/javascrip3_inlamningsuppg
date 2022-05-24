import React from 'react'
import {Link} from 'react-router-dom'

const EventCard = ({event}) => {
  const desc = event.desc;
  return (
    <Link to={`details/${event._id}`}>
      <div className="event-card">
        <div className="event-card__img-wrapper">
          
        </div>
        <div className="event-card__content-wrapper">
          <h2>{event.name}</h2>
          <p>{desc.slice(0, 80)} ...</p>
        </div>
      </div>
    </Link>
  )
}



export default EventCard