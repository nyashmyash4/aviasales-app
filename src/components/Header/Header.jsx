import React from 'react'

import classes from './Header.module.scss'
console.log(classes)
const Header = () => {
  return (
    <header>
      <div className={classes.header__logo}></div>
    </header>
  )
}

export default Header
