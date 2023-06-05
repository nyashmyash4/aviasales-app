import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Spin, Button } from 'antd'
import { customAlphabet } from 'nanoid'

import { startFetching, fetchTickets, showMoreTickets, fetchId } from '../../store/actions'
import Ticket from '../Ticket/Ticket'
import classes from './TicketList.module.scss'

const nanoid = customAlphabet('1234567890abcef', 5)

const TicketList = ({ tickets, fetchTickets, loading, ticketsToShow, showMoreTickets, searchId, fetchId }) => {
  useEffect(() => {
    fetchId()
  }, [])
  useEffect(() => {
    if (searchId) {
      fetchTickets(searchId)
    }
  }, [searchId])

  const elements = tickets?.slice(0, ticketsToShow).map((ticket) => {
    return <Ticket ticket={ticket} key={nanoid()} />
  })

  const showData = loading ? <Spin /> : elements
  return (
    <ul className={classes.tickets}>
      {showData}
      <Button type='primary' block size='large' onClick={showMoreTickets}>
        Показать еще 5 билетов
      </Button>
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    tickets: state.ticketsFetch.tickets,
    loading: state.ticketsFetch.loading,
    ticketsToShow: state.ticketsFetch.ticketsToShow,
    searchId: state.ticketsFetch.searchId,
  }
}
export default connect(mapStateToProps, { startFetching, fetchTickets, showMoreTickets, fetchId })(TicketList)
