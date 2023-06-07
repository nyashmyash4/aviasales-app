import * as types from '../actionTypes'

const initialState = {
  sortTabs: 'cheapest',
}

export const sortTabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHEAPEST:
      return {
        ...state,
        sortTabs: 'cheapest',
      }

    case types.FASTEST:
      return {
        ...state,
        sortTabs: 'fastest',
      }

    default:
      return state
  }
}
