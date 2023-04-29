import React from 'react'
import  '../assets/style/login.css'
import NavBar from '../component/NavBar'
import LoginForm from '../component/LoginForm'


const LoginPage = () => {
  // This method changes page title
  const pageTitle = () => {
    document.title = 'LendSqr test | User Login'
    
  }
  pageTitle()

  

  

  return (
    <section className='login-page'>

        <NavBar/>
        <main className='auth'>
            <div className='auth-illustration'>
                <img src='image/pablo-sign-in.svg' alt='pablo-sign-in'/>
            </div>

            <div className='auth-form'>
                <LoginForm />
            </div>
        </main>

    </section>
  )
}

export default LoginPage