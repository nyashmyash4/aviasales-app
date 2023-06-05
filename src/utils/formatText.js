export function formatTransferText(quantity) {
  if (quantity === 0) {
    return 'Без пересадок'
  }
  if (quantity === 1) {
    return '1 пересадка'
  }

  return `${quantity} пересадки`
}
