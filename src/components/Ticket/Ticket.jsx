import React from 'react'
import { formatFlyghtStartDate, formatTravelTime, calculateDestinationTime } from '../../utils/formatDate'
import { formatTransferText } from '../../utils/formatText'
import classes from './Ticket.module.scss'

const Ticket = ({ ticket }) => {
  const {
    price,
    carrier,
    segments: [
      { origin, destination, date, stops, duration },
      { origin: originReturn, destination: destinationReturn, date: dateReturn, stops: stopsReturn, duration: durationReturn },
    ],
  } = ticket
  const flightTime = formatTravelTime(duration)
  const timeOfDispatch = formatFlyghtStartDate(date)
  const timeOfArrive = calculateDestinationTime(date, duration)
  const flightTimeR = formatTravelTime(durationReturn)
  const timeOfDispatchR = formatFlyghtStartDate(dateReturn)
  const timeOfArriveR = calculateDestinationTime(dateReturn, durationReturn)

  const stopsCities = stops.map((el, i) => {
    if (i === stops.length - 1) {
      return <span>{el}</span>
    }
    return <span>{el}, </span>
  })
  const stopsCitiesR = stopsReturn.map((el, i) => {
    if (i === stops.length - 1) {
      return <span>{el}</span>
    }
    return <span>{el}, </span>
  })
  return (
    <li className={classes.ticket}>
      <div className={classes['ticket-header']}>
        <div className={classes['ticket-header__price']}>{price} P</div>
        <img className={classes['ticket-header__company']} src={`//pics.avs.io/99/36/${carrier}.png`} alt='logo' />
      </div>
      <div className={classes['ticket__body']}>
        <div className={classes['ticket__info']}>
          <div className={classes['ticket__segments']}>
            <span className={classes['ticket__text--gray']}>
              {origin} - {destination}
            </span>
            <span>
              {timeOfDispatch} - {timeOfArrive}
            </span>
          </div>
          <div className={classes['ticket__segments']}>
            <span className={classes['ticket__text--gray']}>В пути</span>
            <span>{flightTime}</span>
          </div>
          <div className={classes['ticket__segments']}>
            <span className={classes['ticket__text--gray']}>{formatTransferText(stops.length)}</span>
            <span>{stopsCities}</span>
          </div>
        </div>
        <div className={classes['ticket__info']}>
          <div className={classes['ticket__segments']}>
            <span className={classes['ticket__text--gray']}>
              {originReturn} - {destinationReturn}
            </span>
            <span>
              {timeOfDispatchR} - {timeOfArriveR}
            </span>
          </div>
          <div className={classes['ticket__segments']}>
            <span className={classes['ticket__text--gray']}>В пути</span>
            <span>{flightTimeR}</span>
          </div>
          <div className={classes['ticket__segments']}>
            <span className={classes['ticket__text--gray']}>{formatTransferText(stops.length)}</span>
            <span>{stopsCitiesR}</span>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Ticket
