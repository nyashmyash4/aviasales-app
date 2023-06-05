export const cheapest = () => {
  return { type: 'CHEAPEST' }
}
export const fastest = () => {
  return { type: 'FASTEST' }
}

export const toggleAll = (checked) => {
  return { type: 'ALL', checked }
}

export const toggleChecked = (id) => {
  return { type: 'CHECKED', id }
}

export const showMoreTickets = () => {
  return { type: 'SHOW_MORE_TICKETS' }
}

export const startFetching = () => {
  return { type: 'START_FETCHING' }
}
export const getSearchId = (payload) => {
  return { type: 'GET_SEARCH_ID', payload }
}

export const loadTickets = (tickets, stop) => {
  return { type: 'LOAD_TICKETS', tickets, stop }
}

export const fetchTickets = (searchId) => {
  return async (dispatch) => {
    dispatch(startFetching())

    const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)

    const result = await response.json()
    dispatch(loadTickets(result.tickets, result.stop))
  }
}

export const fetchId = () => {
  return async (dispatch) => {
    dispatch(startFetching())

    const response = await fetch(`https://aviasales-test-api.kata.academy/search`)

    const result = await response.json()
    dispatch(getSearchId(result.searchId))
  }
}
