import React from 'react'

import Header from '../Header/Header'
import TicketsFilter from '../TicketsFilter/TicketsFilter'
import TicketsSort from '../TicketsSort/TicketsSort'
import TicketList from '../TicketsList/TicketList'

import classes from './App.module.scss'

const App = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <section className={classes.main}>
        <TicketsFilter />
        <div className={classes['main__tickets-container']}>
          <TicketsSort />
          <TicketList />
        </div>
      </section>
    </div>
  )
}

export default App
