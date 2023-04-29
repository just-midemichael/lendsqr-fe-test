import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from '../page/LoginPage'

import RequiredAuth from '../utils/RequiredAuth'
import NoMatchRoute from '../page/noMatchRoute/NoMatchRoute'
import LoginPage from '../page/LoginPage'
import UserPage from '../page/UserPage'
const LazyDashboard = React.lazy(() => import('../page/Dashboard'))
const LazyUser = React.lazy(() => import('../page/UserPage'))

const Router = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<LoginPage/>} />

            <Route path='dashboard' element={
                <React.Suspense>
                  <RequiredAuth><LazyDashboard/></RequiredAuth>
                  </React.Suspense>}>
                    <Route index element= {<UserPage/>}/>

                <Route path='user' element={
                  <React.Suspense>
                    <RequiredAuth><LazyUser/></RequiredAuth>
                    </React.Suspense>} />
              </Route>
            <Route path='*' element={<NoMatchRoute/>} />


              

              
          
            
        </Routes>
    
    </>
  )
}

export default Router