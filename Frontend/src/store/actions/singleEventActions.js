import actiontypes from '../actiontypes'
import axios from 'axios';

export const getSingleEvent = (id) => {
  return async dispatch => {
    dispatch({
      type: actiontypes().events.getSingleEvent
    })
    try {
      const res = await axios.get(`http://localhost:9999/api/events/${id}`)
      

      if(res.status === 200){
        dispatch(getSingleEventSuccess(res.data))
      }else {
        throw new Error('Could not fetch the product')
      }
    } catch (err) {
      dispatch(getSingleEventFailure(err.message))
    }
  }
}

const getSingleEventSuccess = (event) => {
  return {
    type: actiontypes().events.getSingleEventSuccess,
    payload: event
  }
}

const getSingleEventFailure = (err) => {
  return {
    type: actiontypes().events.getSingleEventFailure,
    payload: err
  }

}