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
