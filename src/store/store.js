import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { ticketsFilterReducer } from './reducers/TicketsFilterReducer'
import { ticketsSortReducer } from './reducers/TicketsSortReducer'
import { ticketsFetchingReducer } from './reducers/TicketsFetchingReducer'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const enhance = composeEnhancers(applyMiddleware(thunk))

const rootReducer = combineReducers({
  ticketsFilter: ticketsFilterReducer,
  ticketsSort: ticketsSortReducer,
  ticketsFetch: ticketsFetchingReducer,
})

const store = createStore(rootReducer, enhance)

export default store
