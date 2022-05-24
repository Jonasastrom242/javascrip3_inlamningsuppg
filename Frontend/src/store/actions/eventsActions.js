import actiontypes from '../actiontypes'
import axios from 'axios';

export const getEvents = () => {
  return async dispatch => {
    dispatch({
      type: actiontypes().events.getEvents
    })
    try {
      const res = await axios.get('http://localhost:9999/api/events')
      

      if(res.status === 200){
        dispatch(getEventsSuccess(res.data))
      }else {
        throw new Error('Could not fetch any events')
      }
    } catch (err) {
      dispatch(getEventsFailure(err.message))
    }
  }
}

const getEventsSuccess = (events) => {
  return {
    type: actiontypes().events.getEventsSuccess,
    payload: events
  }
}

const getEventsFailure = (err) => {
  return {
    type: actiontypes().events.getEventsFailure,
    payload: err
  }

}