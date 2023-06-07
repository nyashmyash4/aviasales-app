import React from 'react'

import Header from '../Header/Header'
import TicketsFilter from '../TicketsFilter/TicketsFilter'
import TicketsSortTabs from '../TicketsSortTabs/TicketsSortTabs'
import TicketList from '../TicketsList/TicketList'

import classes from './App.module.scss'

const App = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <section className={classes.main}>
        <div className={classes.sidebar}>
          <h3 className={classes['side-header']}>Количество пересадок</h3>
          <TicketsFilter />
        </div>
        <div className={classes['main__tickets-container']}>
          <TicketsSortTabs />
          <TicketList />
        </div>
      </section>
    </div>
  )
}

export default App
