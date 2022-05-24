import {useState} from 'react'
import EventCard from './EventCard';
import { useSelector } from 'react-redux'

const EventList = () => {

  const {loading, error, data: events} = useSelector(state => state.eventReducer)
  return (
    <>
      { loading && 'loading..' }
      { error && <p>error</p> }
      <div className="event-list container">
        { events.map(event => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </>
  )
}

export default EventList