import React, { EventHandler, useEffect, useState } from 'react'
import '../assets/style/userpage.css'
import { useContextApi } from '../utils/ContextApi'
import {useNavigate} from 'react-router-dom'
import CardBox from '../component/CardBox'
import Table from '../component/Table'

const UserPage = () => {
  // This method changes page title
  const pageTitle = () => {
    document.title = 'LendSqr test | Users'
  }
  pageTitle()

  

 
  useEffect(() => {

    let cardDigit = document.querySelectorAll('.card-digit') as any
    let Interval = 20

    cardDigit.forEach((userNumber: {
      textContent: number; getAttribute: (arg0: string) => string }) => {
      let dataValue = parseInt(userNumber.getAttribute('data-val'))
      let startValue = dataValue - 100;
      let endValue = dataValue
      let duration = Math.floor(Interval/endValue)

      let countUp = setInterval(() => {
        startValue += 1

        
        userNumber.textContent = startValue;

          if(startValue === endValue) {          
            clearInterval(countUp)
          } 
      }, duration)
    })

  })
  
  

  

  
 
 

  return (
    <main className='user-page-container'>
      <section className='user-page-content-container'>
    
        <div className='user-page-title'>Users</div>

        <div className='card-wrapper'>
          <CardBox>
            <span className='icon-container'>
              <img src='../icon/usersCardIcon.svg' alt='icon' className='card-icon'/>
            </span>
            <div className='card-title'>users</div>
            <div className='card-digit' data-val='2453'>0</div>
          </CardBox>


          <CardBox>
            <span className='icon-container'>
              <img src='../icon/activeUsersCardIcon.svg' alt='icon' className='card-icon'/>
            </span>
            <div className='card-title'>active users</div>
            <div className='card-digit' data-val='2453'>0</div>
          </CardBox>

          <CardBox>
            <span className='icon-container'>
              <img src='../icon/usersLoansCardIcon.svg' alt='icon' className='card-icon'/>
            </span>
            <div className='card-title'>users with loans</div>
            <div className='card-digit' data-val='12453'>0</div>
          </CardBox>

          <CardBox>
            <span className='icon-container'>
              <img src='../icon/usersSavingsCardIcon.svg' alt='icon' className='card-icon'/>
            </span>
            <div className='card-title'>users with savings</div>
            <div className='card-digit' data-val='102453'>0</div>
          </CardBox>
        </div>

        
        <div className='table-wrapper'>
          <Table/>
        </div>
        
      </section>
    </main>
  )
}

export default UserPage


