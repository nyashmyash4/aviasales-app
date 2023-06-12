import * as types from '../../actionTypes'

export const showMoreTickets = () => {
  return { type: types.SHOW_MORE_TICKETS }
}

export const startFetching = () => {
  return { type: types.START_FETCHING }
}
export const getSearchId = (payload) => {
  return { type: types.GET_SEARCH_ID, payload }
}

export const loadTickets = (tickets, stop) => {
  return { type: types.LOAD_TICKETS, tickets, stop }
}

export const error = () => {
  return { type: types.ERROR }
}

export const fetchTickets = (searchId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
      if (response.status === 404) {
        throw new Error('not found')
      }
      const result = await response.json()
      dispatch(loadTickets(result.tickets, result.stop))
    } catch (err) {
      if (err.message === 'not found') {
        dispatch(error())
        return
      }

      dispatch(loadTickets([], false))
    }
  }
}

export const fetchId = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://aviasales-test-api.kata.academy/search')
      if (response.status === 404) {
        throw new Error('not found')
      }
      const result = await response.json()
      dispatch(getSearchId(result.searchId))
    } catch (err) {
      if (err.message === 'not found') {
        dispatch(error())
      }
      dispatch(fetchId())
    }
  }
}
