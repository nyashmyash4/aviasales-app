import * as types from '../../actionTypes'

const initialState = {
  filters: [
    { id: 1, label: 'Все', isChecked: true, name: 'All' },
    { id: 2, label: 'Без пересадок', isChecked: true, name: 'no transfer' },
    { id: 3, label: '1 пересадка', isChecked: true, name: '1 transfer' },
    { id: 4, label: '2 пересадки', isChecked: true, name: '2 transfers' },
    { id: 5, label: '3 пересадки', isChecked: true, name: '3 transfers' },
  ],
}

export const ticketsFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ALL:
      return {
        ...state,
        filters: state.filters.map((item) => ({
          ...item,
          isChecked: action.checked,
        })),
      }

    case types.CHECKED: {
      let newFilters = state.filters.map((item) => {
        if (action.id === item.id) {
          return { ...item, isChecked: !item.isChecked }
        }
        return item
      })
      const isAllChecked = newFilters.filter((item) => item.id !== 1).every((item) => item.isChecked)
      if (isAllChecked) {
        newFilters[0] = { ...newFilters[0], isChecked: true }
      } else {
        newFilters[0] = { ...newFilters[0], isChecked: false }
      }

      return {
        ...state,
        filters: newFilters,
      }
    }

    default:
      return state
  }
}
