export function filterTickets(tickets, filters, sortValue) {
  let newTickets = tickets
  if (sortValue === 'cheapest') {
    newTickets = newTickets.sort((a, b) => {
      if (a.price > b.price) {
        return 1
      }
      if (a.price < b.price) {
        return -1
      }
      return 0
    })
  }
  if (sortValue === 'fastest') {
    newTickets = newTickets.sort((a, b) => {
      if (a.segments[0].duration + a.segments[1].duration > b.segments[0].duration + b.segments[1].duration) {
        return 1
      }
      if (a.segments[0].duration + a.segments[1].duration < b.segments[0].duration + b.segments[1].duration) {
        return -1
      }
      return 0
    })
  }

  let filteredArr = []
  if (filters.length) {
    filters.forEach((filter) => {
      switch (filter.name) {
        case 'no transfer': {
          const filtered = newTickets.filter((el) => !el.segments[0].stops.length || !el.segments[1].stops.length)
          filteredArr.push(...filtered)
          break
        }
        case '1 transfer': {
          const filtered = newTickets.filter(
            (el) => el.segments[0].stops.length === 1 || el.segments[1].stops.length === 1
          )
          filteredArr.push(...filtered)
          break
        }
        case '2 transfers': {
          const filtered = newTickets.filter(
            (el) => el.segments[0].stops.length === 2 || el.segments[1].stops.length === 2
          )
          filteredArr.push(...filtered)
          break
        }
        case '3 transfers': {
          const filtered = newTickets.filter(
            (el) => el.segments[0].stops.length === 2 || el.segments[1].stops.length === 2
          )
          filteredArr.push(...filtered)
          break
        }
        default: {
          filteredArr.push(...newTickets)
          break
        }
      }
    })
  }

  filteredArr = new Set(filteredArr)
  return [...filteredArr]
}
