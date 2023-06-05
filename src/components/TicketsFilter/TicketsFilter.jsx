import React from 'react'
import { connect } from 'react-redux'

import { toggleAll, toggleChecked } from '../../store/actions'
import classes from './TicketsFilter.module.scss'

const TicketsFilter = ({ filters, toggleChecked, toggleAll }) => {
  const elements = filters.map((item) => {
    const { id, label, isChecked, name } = item
    if (id === 1) {
      return (
        <li key={id}>
          <input
            id={name}
            type='checkbox'
            className={classes['filter-checkbox']}
            checked={filters.filter((item) => item.id !== 1).every((item) => item.isChecked)}
            onChange={(evt) => toggleAll(evt.target.checked)}
          ></input>
          <label htmlFor={name}>{label}</label>
        </li>
      )
    }
    return (
      <li key={id}>
        <input
          id={name}
          type='checkbox'
          className={classes['filter-checkbox']}
          checked={isChecked}
          onChange={() => toggleChecked(id)}
        ></input>
        <label htmlFor={name}>{label}</label>
      </li>
    )
  })

  return (
    <aside className={classes.sidebar}>
      <h3 className={classes['side-header']}>Количество пересадок</h3>
      <ul className={classes['side-filter']}>{elements}</ul>
    </aside>
  )
}

const mapStateToProps = (state) => {
  return {
    filters: state.ticketsFilter,
  }
}

export default connect(mapStateToProps, { toggleAll, toggleChecked })(TicketsFilter)
