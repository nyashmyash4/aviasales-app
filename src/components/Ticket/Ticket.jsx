import React from 'react'

import classes from './Ticket.module.scss'

const Ticket = () => {
  return (
    <li className={classes.ticket}>
      <div className={classes['ticket-header']}>
        <div className={classes['ticket-header__price']}>13 400 P</div>
        <img
          className={classes['ticket-header__company']}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/S7_new_logo.svg/1280px-S7_new_logo.svg.png'
          alt='logo'
        />
      </div>
      <div className={classes['ticket__info']}>
        <div className={classes['ticket__info-one']}>
          <div className={classes['ticket__text']}>
            <span className={classes['ticket__text--gray']}>MOW – HKT</span>
            <span>10:45 – 08:00</span>
          </div>
          <div className={classes['ticket__text']}>
            <span className={classes['ticket__text--gray']}>В пути</span>
            <span>21ч 15м</span>
          </div>
          <div className={classes['ticket__text']}>
            <span className={classes['ticket__text--gray']}>2 пересадки</span>
            <span>HKG, JNB</span>
          </div>
        </div>
        {/* <div className='ticket__info-two'>
          <div>MOW – HKT</div>
          <div>В пути</div>
          <div>1 пересадка</div>
        </div> */}
      </div>
    </li>
  )
}

export default Ticket
