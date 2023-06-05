import { format, addHours, addMinutes } from 'date-fns'

export function formatFlyghtStartDate(date) {
  const newDate = Date.parse(date)
  return format(newDate, 'HH:mm')
}

export function formatTravelTime(time) {
  const hours = Math.floor(time / 60)
  const minutes = Math.floor(time % 60)

  return `${hours}ч ${minutes}м`
}

export function calculateDestinationTime(startTime, travelTime) {
  const hours = Math.floor(travelTime / 60)
  const minutes = Math.floor(travelTime % 60)
  const date = Date.parse(startTime)
  let newDate = addHours(date, hours)
  newDate = addMinutes(newDate, minutes)

  return format(newDate, 'HH:mm')
}
