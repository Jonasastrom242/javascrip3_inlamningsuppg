import {useState} from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleEvent } from '../store/actions/singleEventActions'
import { addToCart } from '../store/actions/cartActions';

const EventDetailsView = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const [newEvent, setNewEvent] = useState({})

  useEffect(() => {
    dispatch(getSingleEvent(id))
  }, [dispatch, id])

  
  const { loading, error, data: event } = useSelector(state => state.singleEventReducer)

  useEffect(() => {

    setNewEvent({ 
      _id: event._id,
      name: event.name,
      desc: event.desc,
      time: event.time,
      userToken: event.userToken
    })
  }, [event])

  return (
    <div className="content">
      { loading && 'loading..' }
      { error && <p>error</p> }
      <div className='product-details container'>
        <div className='info-wrapper'>
            <div className="title">
              <h1>{event.name}</h1>
              </div>
              <div className="prices">
                {/* <div className="price sale">20kr</div> */}
                <div className="price">DATE: {event.time}</div>
              </div>

            <p className='desc'>{event.desc}</p>
            <button className="btn" onClick={() => dispatch(addToCart(newEvent))}>Lägg till i varukorgen</button>
            <div className="stock-wrapper">
              <p className='stock'>I lager</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default EventDetailsView


