import React from 'react'

import Ticket from '../Ticket/Ticket'

import classes from './TicketList.module.scss'

const TicketList = () => {
  return (
    <ul className={classes.tickets}>
      <Ticket />
    </ul>
  )
}

export default TicketList
