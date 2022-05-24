import {useState} from 'react';

import React from 'react'
import EventItem from './EventItem';

const EventList = () => {
  
const [events, setEvents] = useState([
  {
    id: '12312',
    body: 'A really nice event',
    completed: false,
    time: 23,
    user: 1

},
{
  id: '23342',
  body: 'A nicer event',
  completed: false,
  time: 25,
  user: 1

},
])
  
  return (
    <div className='container event-list'>
      {
        events && events.map(event => (
          <EventItem key={event.id} event={event} />
        ))

      }

    </div>
  )
}

export default EventList