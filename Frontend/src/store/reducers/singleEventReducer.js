import actiontypes from '../actiontypes';


const initState = {
  loading: false,
  error: null,
  data: []
}


const singleEventReducer = (state = initState, action) => {
  switch (action.type) {
    case actiontypes().events.getSingleEvent:
      return {
        ...state,
        loading: true
      }

    case actiontypes().events.getSingleEventSuccess:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload
      }

    case actiontypes().events.getSingleEventFailure:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    
    default: 
    return state
  }
}

export default singleEventReducer