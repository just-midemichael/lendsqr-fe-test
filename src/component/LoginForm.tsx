import React, { MouseEventHandler, SetStateAction } from 'react'
import { useState } from 'react'
import { render } from 'react-dom'
import validator from 'validator'
import '../assets/style/loginForm.css'
import { useContextApi } from '../utils/ContextApi'
import {useLocation, useNavigate} from 'react-router-dom'
import User from '../page/UserPage'


const LoginForm = () => {
  const [user, setUser] = useState('guest')
  const navigate = useNavigate()
  const auth = useContextApi()
  const location = useLocation()


  //Redirect to home page for login with ---> '/', only if path is not specified
  const redirectPath = location.state?.path || '/dashboard/user';
  //-------------------ENDS---------------------->




  //useState hook for login form value 
  const [emailInputValue, setEmailInputValue] = useState()
  const [passwordInputValue, setPasswordInputValue] = useState()

  //login details
  const [message, setMessage] = useState(' Use (email: guest@gmail.com, password: 123Guest) to login')

  //set guidlines if there is error or missing requirement
  const [validateMessage, setValidateMessage] = useState('')

  //This changes the state of pawword input type and password visibility 
  const [passwordVisibility, setPasswordVisibility] = useState('show')
  const [passwordType, setPasswordType] = useState('password')

  
  //Validate Email handler 
  const validateEmail = (e: { target: { value: any}}) => {
    var email = e.target.value;

    const emailInput = document.getElementById('login-email') as HTMLInputElement;
    const messageOutput = document.getElementById('validate-message') as HTMLElement
    
    if (validator.isEmail(email)) {
      setValidateMessage("")
      setUser(e.target.value)
    } 
    else 
    {
      if (emailInput.value !='') {
        setValidateMessage("Please, enter valid Email!");
      }
      else {
        setValidateMessage("");
        messageOutput.style.opacity = '0'
      }
    }
  }//-------------------ENDS---------------------->


  //This handles the password visibity
  const showPasswordHandler = () => {
      
      if(passwordType === 'password') {
        setPasswordVisibility('Hide')
        setPasswordType('text')
      }
      else {
        setPasswordType('password')
        setPasswordVisibility('Show')
      }   
  }//-------------------ENDS---------------------->


  //Handle login
  const submitErrorChecker = (e: any) => {
    const messageOutput = document.getElementById('validate-message') as HTMLElement
    const emailInput = document.getElementById('login-email') as HTMLInputElement;
    const passwordInput = document.getElementById('login-password') as HTMLInputElement;


    if(emailInput.value != '' && passwordInput.value != '' &&emailInput.value === 'guest@gmail.com' && passwordInput.value === '123Guest') {

      auth.login(user)
      navigate(redirectPath)
      messageOutput.style.opacity = '0.6'
    }
    else {
      messageOutput.style.opacity = '0.6'
      setValidateMessage("Please, enter valid Email & password")
    }  
    e.preventDefault()
  }//-------------------ENDS---------------------->



  return (
    <form onSubmit={submitErrorChecker}>
        <div className='form-wrapper form'>
            <h1 className='form-greeting-header'>Welcome! </h1>

            <p className='form-sub-header'>
              Enter details to login.
            </p>

            <fieldset className='form-field-container'>
            <p className='message-container guide-message'>
              &rarr; {message}
            </p>
              <input id='login-email' type='email' placeholder='Email' name='login-email' value={emailInputValue} onChange={(e) => validateEmail(e)}/>
              
              <div className='password-container'>
                <input id='login-password' type={passwordType} placeholder='Password' name='login-password' value={passwordInputValue} required/>
                <span id='visibility-button' className='password-visibility-toggle' onClick={showPasswordHandler}>{passwordVisibility}</span>
              </div>
              
              <div>
                <a href='https://pecunia.lendsqr.com/forgot-password' className='forget-password-link'>FORGET PASSWORD?</a>
              </div>

              <p className='message-container validate-message' id='validate-message'>
                {validateMessage}
              </p>
              <button id='button' type='submit' className='login-button' onClick={submitErrorChecker}>LOG IN</button>
            </fieldset>
        </div>
    </form>
  )
}

export default LoginForm

