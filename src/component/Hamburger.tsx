import React from 'react'
import '../assets/style/hamburger.css'
import { useContextApi } from '../utils/ContextApi'

const Hamburger = () => {

  const nav = useContextApi()
  const toggle = useContextApi()

  return (
    <div className='hamburger-wrapper' onClick={nav.sideNavDisplayHandler}>
        <div className={`bar ${toggle.toggleBar}`}></div>
        <div className={`bar ${toggle.toggleBar}`}></div>
        <div className={`bar ${toggle.toggleBar}`}></div>
    </div>
  )
}

export default Hamburger