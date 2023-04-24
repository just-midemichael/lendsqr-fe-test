import React, { useState } from 'react'
import '../assets/style/dashBoard.css'
import { useContextApi } from '../utils/ContextApi'
import Header from '../layout/Header'
import SideNavigationBar from '../component/SideNavigationBar'
import { Outlet } from 'react-router-dom'
import SmallSearchBox from '../component/SmallSearchBox'

const Dashboard = () => {
  // This method changes page title
  const pageTitle = () => {
    document.title = 'LendSqr test | Dashboard'
  }
  pageTitle()

  const [sideNav, setSideNav] = useState('')

  const sideNavOpenHandler = () => {
    if(sideNav != 'show-side-nav')
    {
      setSideNav('show-side-nav')
      alert('we are good')
    }
    else
    {
      setSideNav('')
      alert('okay')
    }
  }
  sideNavOpenHandler

  
  return (

    <div className='page-body'>
      <Header />
      <SideNavigationBar/>
      
      <main className='page-main'>
      
        
        
        <div className='sidenav-back-layer'></div>

        <span className='content-section'>
        <SmallSearchBox/>
          <Outlet/>
        </span>

      </main>
    </div>
  )
}

export default Dashboard