import * as types from '../../actionTypes'

const initialState = {
  tickets: [],
  searchId: null,
  ticketsToShow: 5,
  stop: false,
  error: false,
}

export const ticketsFetchingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_TICKETS: {
      return {
        ...state,
        tickets: state.tickets.concat(action.tickets),
        stop: action.stop,
      }
    }

    case types.SHOW_MORE_TICKETS: {
      return {
        ...state,
        ticketsToShow: state.ticketsToShow + 5,
      }
    }

    case types.GET_SEARCH_ID: {
      return {
        ...state,
        searchId: action.payload,
      }
    }

    case types.ERROR: {
      return {
        ...state,
        error: true,
      }
    }

    default:
      return state
  }
}
