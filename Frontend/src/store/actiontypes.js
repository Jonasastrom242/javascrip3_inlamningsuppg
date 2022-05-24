const actiontypes = () => {
  return {
    events: {
      getEvents: 'GET_EVENTS',
      getEventsSuccess: 'GET_EVENTS_SUCCESS',
      getEventsFailure: 'GET_EVENTS_FAILURE',
      getSingleEvent: 'GET_SINGLE_EVENT',
      getSingleEventSuccess: 'GET_SINGLE_EVENT_SUCCESS',
      getSingleEventFailure: 'GET_SINGLE_EVENT_FAILURE'
    },
    cart: {
      addToCart: 'ADD_TO_CART',
      removeFromCart: 'REMOVE_FROM_CART',
      increment: 'INCREMENT',
      decrement: 'DECREMENT',
      editQuantity: 'EDIT_QUANTITY'
    },
    auth: {
      authorize: 'AUTHORIZE',
      authorizeSuccess: 'AUTHORIZE_SUCCESS',
      authorizeFailure: 'AUTHORIZE_FAILURE',
      logout: 'LOGOUT',
    }
  }
}

export default actiontypes