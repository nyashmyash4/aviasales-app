import * as types from '../../actionTypes'

export const toggleAll = (checked, id) => {
  return { type: types.ALL, checked, id }
}

export const toggleChecked = (id) => {
  return { type: types.CHECKED, id }
}
