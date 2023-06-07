import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { customAlphabet } from 'nanoid'

import { startFetching, fetchTickets, showMoreTickets, fetchId } from '../../store/actions'
import Ticket from '../Ticket/Ticket'
import Loader from '../Loader/Loader'
import { filterTickets } from '../../utils/filterTickets'

import classes from './TicketList.module.scss'

const nanoid = customAlphabet('1234567890abcef', 5)

const TicketList = (props) => {
  const { tickets, stop, fetchTickets, ticketsToShow, showMoreTickets, searchId, fetchId, sortTab, filters, error } =
    props
  const [ticketsList, setTicketsList] = useState([])

  useEffect(() => {
    fetchId()
  }, [])

  useEffect(() => {
    if (searchId && !stop) {
      fetchTickets(searchId)
    }
  }, [searchId, tickets])

  useEffect(() => {
    if (tickets.length) {
      const updatedTickets = updateTicketsList(tickets, filters, sortTab)
      setTicketsList(updatedTickets)
    }
  }, [sortTab, filters, tickets])

  const updateTicketsList = (list, filtersList, sortValue) => {
    const activeFilters = filtersList.filter((item) => item.isChecked)
    const updatedList = filterTickets(list, activeFilters, sortValue)
    return updatedList
  }

  const showTickets = (ticketsList, ticketsToShow) => {
    if (ticketsList.length) {
      const elements = ticketsList.slice(0, ticketsToShow).map((ticket) => {
        return <Ticket ticket={ticket} key={nanoid()} />
      })
      const loader = !stop ? <Loader /> : null
      return (
        <>
          {loader}
          {elements}
        </>
      )
    } else {
      return (
        <li className={classes['tickets__error--not-found']}>Рейсов, подходящих под заданные фильтры, не найдено</li>
      )
    }
  }
  return (
    <>
      <ul className={classes.tickets}>
        {error ? (
          <li className={classes['tickets__error']}>Призошла ошибка, попробуйте перезагрузить страницу</li>
        ) : (
          showTickets(ticketsList, ticketsToShow)
        )}
      </ul>
      <button className={classes.btn} type="button" onClick={showMoreTickets} disabled={!ticketsList.length}>
        Показать еще 5 билетов!
      </button>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    tickets: state.ticketsFetch.tickets,
    ticketsToShow: state.ticketsFetch.ticketsToShow,
    error: state.ticketsFetch.error,
    searchId: state.ticketsFetch.searchId,
    stop: state.ticketsFetch.stop,
    sortTab: state.sortTabs.sortTabs,
    filters: state.ticketsFilter.filters,
  }
}
export default connect(mapStateToProps, {
  startFetching,
  fetchTickets,
  showMoreTickets,
  fetchId,
})(TicketList)
