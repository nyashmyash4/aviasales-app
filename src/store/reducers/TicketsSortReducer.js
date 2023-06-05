const initialState = {
  ticketsSort: 'cheapest',
}

export const ticketsSortReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHEAPEST':
      return {
        ...state,
        ticketsSort: 'cheapest',
      }

    case 'FASTEST':
      return {
        ...state,
        ticketsSort: 'fastest',
      }

    default:
      return state
  }
}
