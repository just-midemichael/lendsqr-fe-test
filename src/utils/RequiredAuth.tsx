import React, { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useContextApi } from './ContextApi'

const RequiredAuth = ({children}: {children: ReactNode}) => {
  
    const auth = useContextApi()
    const Location = useLocation()
  
    if(!auth.user)
        return <Navigate to={'/'} 
        state={{ path: location.pathname}}/>
    return (
    <div>{children}</div>
  )
}

export default RequiredAuth