import React from 'react'
import { Checkbox } from 'antd'

import classes from './SideFilter.module.scss'

const SideFilter = () => {
  return (
    <aside className={classes.sidebar}>
      <h3 className={classes['side-header']}>Количество пересадок</h3>
      <div className={classes['side-filter']}>
        <Checkbox indeterminate>Все</Checkbox>
        <Checkbox>Без пересадок</Checkbox>
        <Checkbox>1 пересадка</Checkbox>
        <Checkbox>2 пересадки</Checkbox>
        <Checkbox>3 пересадки</Checkbox>
      </div>
    </aside>
  )
}

export default SideFilter
