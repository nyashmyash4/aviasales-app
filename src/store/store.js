import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { ticketsFilterReducer } from './reducers/TicketsFilter/TicketsFilterReducer'
import { sortTabsReducer } from './reducers/TicketsSort/TicketsSortReducer'
import { ticketsFetchingReducer } from './reducers/TicketsFetching/TicketsFetchingReducer'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const enhance = composeEnhancers(applyMiddleware(thunk))

const rootReducer = combineReducers({
  ticketsFilter: ticketsFilterReducer,
  sortTabs: sortTabsReducer,
  ticketsFetch: ticketsFetchingReducer,
})

const store = createStore(rootReducer, enhance)

export default store
