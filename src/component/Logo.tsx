import React from 'react'
import '../assets/style/logo.css'

const Logo = () => {
  return (
    <>
        <a href='/' target='_blank' className='navbar-brand'>
            <img src='./src/assets/logo.svg' alt='logo' className='logo'/>
        </a>
    </>
  )
}

export default Logo