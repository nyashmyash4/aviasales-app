import { createStore, combineReducers } from 'redux'

import { ticketsFilterReducer } from './reducers/TicketsFilterReducer'
import { ticketsSortReducer } from './reducers/TicketsSortReducer'

const rootReducer = combineReducers({
  ticketsFilter: ticketsFilterReducer,
  ticketsSort: ticketsSortReducer,
})

const store = createStore(rootReducer)

export default store
