import React from 'react'
import { connect } from 'react-redux'

import { toggleAll, toggleChecked } from '../../store/reducers/TicketsFilter/actionsFilter'

import classes from './TicketsFilter.module.scss'

const TicketsFilter = ({ filters, toggleChecked, toggleAll }) => {
  const elements = filters.map((item) => {
    const { id, label, isChecked, name } = item

    return (
      <li key={id}>
        <input
          id={name}
          type="checkbox"
          className={classes['filter-checkbox']}
          checked={isChecked}
          onChange={(evt) => (id === 1 ? toggleAll(evt.target.checked, id) : toggleChecked(id))}
        ></input>
        <label htmlFor={name}>{label}</label>
      </li>
    )
  })

  return <ul className={classes['side-filter']}>{elements}</ul>
}

const mapStateToProps = (state) => {
  return {
    filters: state.ticketsFilter.filters,
  }
}

export default connect(mapStateToProps, { toggleAll, toggleChecked })(TicketsFilter)
