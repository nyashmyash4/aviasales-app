import React from 'react'

import classes from './TicketsFilter.module.scss'

const TicketsFilter = () => {
  return (
    <div className={classes['filter-wrapper']}>
      <div class={classes['radio-button']}>
        <input id='radio-1' type='radio' name='radio' value='cheapest' />
        <label for='radio-1'>Самый дешевый</label>
      </div>
      <div class={classes['radio-button']}>
        <input id='radio-2' type='radio' name='radio' value='fastest' />
        <label for='radio-2'>Самый быстрый</label>
      </div>
    </div>
  )
}

export default TicketsFilter
