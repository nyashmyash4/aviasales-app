import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../store/actions'
import classes from './TicketsSort.module.scss'

const TicketsSort = (props) => {
  const isChecked = props.ticketsSort === 'cheapest'

  return (
    <div className={classes['filter-wrapper']}>
      <div className={classes['radio-button']}>
        <input id='radio-1' type='radio' name='filter' value='cheapest' checked={isChecked} onChange={props.cheapest} />
        <label htmlFor='radio-1'>Самый дешевый</label>
      </div>
      <div className={classes['radio-button']}>
        <input id='radio-2' type='radio' name='filter' value='fastest' checked={!isChecked} onChange={props.fastest} />
        <label htmlFor='radio-2'>Самый быстрый</label>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    ticketsSort: state.ticketsSort.ticketsSort,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketsSort)
