import React, { MouseEventHandler } from 'react'
import '../assets/style/sideNavigationBar.css'
import ArrowdownIcon from './ArrowdownIcon'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useContextApi } from '../utils/ContextApi'
import SearchBox from './SearchBox'
import BellIcon from './BellIcon'



const SideNavigationBar = () => {
  
  const activeStyle = ({isActive}: {isActive: Boolean}) => {
    return {
      color: isActive? '#213F7D' : '',
      backgroundColor: isActive? '#39cdcd13': '',
      borderLeft: isActive? '4px solid #39CDCC': '',
    }
  }
  
  const [username, setUsername] = useState()
  const [user, setUser] = useState()
  const [logout, setLogout] = useState('Logout')
  const auth = useContextApi()
  const nav = useContextApi()

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

  const search = useContextApi()
  

  
  return (
    <nav className={`side-nav ${nav.sideNav}`} >
        <div className='menu-container'>

          <li className='switch-organization link'>
            <img className='menu-icon' src='../../src/assets/icon/briefcaseIcon.svg' alt='icon' />
            Switch Organization 
            <ArrowdownIcon/>
          </li>

          <li className='dashboard link'>
            <img className='menu-icon' src='../../src/assets/icon/homeIcon.svg' alt='icon' />
            Dashboard 
          </li>

          {/* custormer section */}
          <li className='menu-title-container link'>
            <span className='menu-title'>Custormer</span>
          </li>

          <NavLink to='/dashboard/user' className='menu-link link ' style={activeStyle}>
            <img className='menu-icon' src='../../src/assets/icon/userIcon.svg' alt='icon' />
            User 
          </NavLink>

          <li className='menu-link link '>
            <img className='menu-icon' src='../../src/assets/icon/guarantorIcon.svg' alt='icon' />
            Guarantors 
          </li>

          <li className='menu-link link '>
            <img className='menu-icon' src='../../src/assets/icon/loanIcon.svg' alt='icon' />
            Loans 
          </li>

          <li className='menu-link link '>
            <img className='menu-icon' src='../../src/assets/icon/decisionModelIcon.svg' alt='icon' />
            Decison Models 
          </li>

          <li className='menu-link link '>
            <img className='menu-icon' src='../../src/assets/icon/savingsIcon.svg' alt='icon' />
            Savings 
          </li>

          <li className='menu-link link '>
            <img className='menu-icon' src='../../src/assets/icon/loanRequestIcon.svg' alt='icon' />
            Loan Request 
          </li>

          <li className='menu-link link '>
            <img className='menu-icon' src='../../src/assets/icon/whitelistIcon.svg' alt='icon' />
            Whitelist 
          </li>

          <li className='menu-link link '>
            <img className='menu-icon' src='../../src/assets/icon/karmaIcon.svg' alt='icon' />
            Karma 
          </li>{/* Ends */}



          {/* business section */}
          <li className='menu-title-container link'>
            <span className='menu-title'>Business</span>
          </li>
          <li className='menu-link link '>
            <img className='menu-icon' src='../../src/assets/icon/organizationIcon.svg' alt='icon' />
            Organization 
          </li>

          <li className='menu-link link '>
            <img className='menu-icon' src='../../src/assets/icon/loanProductsIcon.svg' alt='icon' />
            Loan Products 
          </li>

          <li className='menu-link link '>
            <img className='menu-icon' src='../../src/assets/icon/savingsProductsIcon.svg' alt='icon' />
            Savings Products 
          </li>

          <li className='menu-link link '>
            <img className='menu-icon' src='../../src/assets/icon/feesChargesIcon.svg' alt='icon' />
            Fees and Charges 
          </li>

          <li className='menu-link link '>
            <img className='menu-icon' src='../../src/assets/icon/transactionsIcon.svg' alt='icon' />
            Transactions 
          </li>

          <li className='menu-link link '>
            <img className='menu-icon' src='../../src/assets/icon/servicesIcon.svg' alt='icon' />
            Services 
          </li>

          <li className='menu-link link '>
            <img className='menu-icon' src='../../src/assets/icon/serviceAccountIcon.svg' alt='icon' />
            Service Account 
          </li>

          <li className='menu-link link '>
            <img className='menu-icon' src='../../src/assets/icon/settlementsIcon.svg' alt='icon' />
            Settlements 
          </li>

          <li className='menu-link link '>
            <img className='menu-icon' src='../../src/assets/icon/reportsIcon.svg' alt='icon' />
            Reports 
          </li>{/* Ends */}




          {/* settings section */}
          <li className='menu-title-container link'>
            <span className='menu-title'>Settings</span>
          </li>
          <li className='menu-link link'>
            <img className='menu-icon' src='../../src/assets/icon/preferencesIcon.svg' alt='icon' />
            Preferences 
          </li>

          <li className='menu-link link '>
            <img className='menu-icon' src='../../src/assets/icon/feesPricingIcon.svg' alt='icon' />
            Fees and Pricing
          </li>

          <li className='menu-link link '>
            <img className='menu-icon' src='../../src/assets/icon/auditLogsIcon.svg' alt='icon' />
            Audit Logs 
          </li>

          <li className='menu-link link '>
            <img className='menu-icon' src='../../src/assets/icon/systemsMessagesIcon.svg' alt='icon' />
            Systems Messages 
          </li>{/* Ends */}
        </div>

        {/* side nav footer */}
        <div className='nav-footer-container'>
          <li className='menu-link link log-out' onClick={handleLogout}>
            <img className='menu-icon' src='../../src/assets/icon/logOutIcon.svg' alt='icon' />
            {logout}
          </li>
          
          <li className='menu-link link '>
            <span className='version'>v.1.2.0 
              <a className='doc-link' href='/dashboard'>Docs</a>
              <BellIcon/>
              <button className='search-button small-search-button' onClick={search.SmallSearchBoxDisplayhandler}></button>
            </span>
          </li>
        </div>{/* Ends */}
    </nav>
  )
}

export default SideNavigationBar