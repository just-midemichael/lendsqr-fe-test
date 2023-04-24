import React, { MouseEventHandler, useState } from 'react'
import Logo from '../component/Logo'
import '../assets/style/header.css'
import SearchBox from '../component/SearchBox'
import BellIcon from '../component/BellIcon'
import UserAvatar from '../component/UserAvatar'
import DropdownIcon from '../component/DropdownIcon'
import Hamburger from '../component/Hamburger'
import { useContextApi } from '../utils/ContextApi'



const Header = () => {
  const [username, setUsername] = useState()
  const [user, setUser] = useState()
  const [logout, setLogout] = useState('Log-Out')

  const handleLogout = () => {
    if(auth.login(user)) {
      auth.logout
      setLogout('Login')
    }
    else {
      auth.login(user)
      setLogout('Logout')
    }
  }

  const auth = useContextApi()
  return (
    <header className='header'>
      <div className='header-component-wrapper'>
        <div className='hamburger-container header-component-box'>
            <Hamburger/>
        </div>
        <div className='logo-container header-component-box'>
            <Logo/>
        </div>

        <div className='search-container header-component-box'>
            <SearchBox/>
        </div>

        <div className='doc-bell-container header-component-box'>
            <a className='doc-link' href='/dashboard'>Docs</a>
            <BellIcon/>
        </div>
        <div className='user-detail-container header-component-box'>
          <span className='user-detail-wrapper'>
            <UserAvatar />
            <span className='user-name'>{auth.username}</span>
            <span className='drop-down-icon'><DropdownIcon/></span>

            <div className='user-dropdown-menu-container'>
              <li>{auth.username}</li>
              <li>{auth.user}</li>
              <button className='logout-button' onClick={handleLogout}>{logout}</button>

              <div className='drop-angle'></div>
            </div>
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header