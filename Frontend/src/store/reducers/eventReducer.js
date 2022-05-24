import actiontypes from '../actiontypes';


const initState = {
  loading: false,
  error: null,
  data: []
}


const EventsReducer = (state = initState, action) => {
  switch (action.type) {
    case actiontypes().events.getEvents:
      return {
        ...state,
        loading: true
      }

    case actiontypes().events.getEventsSuccess:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload
      }

    case actiontypes().events.getEventsFailure:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    
    default: 
    return state
  }
}

export default EventsReducer