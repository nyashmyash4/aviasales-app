const initialState = [
  { id: 1, label: 'Все', isChecked: false, name: 'All' },
  { id: 2, label: 'Без пересадок', isChecked: false, name: 'no transfer' },
  { id: 3, label: '1 пересадка', isChecked: false, name: 'one transfer' },
  { id: 4, label: '2 пересадки', isChecked: false, name: 'two transfers' },
  { id: 5, label: '3 пересадки', isChecked: false, name: 'three transfers' },
]

export const ticketsFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL':
      return state.map((item) => ({ ...item, isChecked: action.checked }))

    case 'CHECKED':
      return state.map((item) => {
        if (action.id === item.id) {
          return { ...item, isChecked: !item.isChecked }
        }
        return item
      })

    default:
      return state
  }
}
