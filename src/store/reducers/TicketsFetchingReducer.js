const initialState = {
  loading: false,
  tickets: [],
  searchId: null,
  ticketsToShow: 5,
}

export const ticketsFetchingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCHING': {
      return {
        ...state,
        loading: true,
      }
    }

    case 'LOAD_TICKETS': {
      return {
        ...state,
        tickets: state.tickets.concat(action.tickets),
        loading: false,
      }
    }

    case 'SHOW_MORE_TICKETS': {
      return {
        ...state,
        ticketsToShow: state.ticketsToShow + 5,
      }
    }

    case 'GET_SEARCH_ID': {
      return {
        ...state,
        searchId: action.payload,
      }
    }

    default:
      return state
  }
}
