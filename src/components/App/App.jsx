import React from 'react'

import { Button } from 'antd'

import Header from '../Header/Header'
import SideFilter from '../SideFilter/SideFilter'
import TicketsFilter from '../TicketsFilter/TicketsFilter'
import TicketList from '../TicketsList/TicketList'

import classes from './App.module.scss'

// const TABS = [
//   {
//     key: 'cheapest',
//     label: 'самый дешевый',
//   },
//   {
//     key: 'fastest',
//     label: 'самый быстрый',
//   },
//   {
//     key: 'optimal',
//     label: 'оптимальный',
//   },
// ]

const App = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <section className={classes.main}>
        <SideFilter />
        <div className={classes['main__tickets-container']}>
          <TicketsFilter />
          <TicketList />
          <Button block={true} type='primary'>
            Показать еще 5 билетов
          </Button>
        </div>
      </section>
    </div>
  )
}

export default App
