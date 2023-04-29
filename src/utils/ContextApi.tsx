import {createContext, useState, useContext, ReactNode, SetStateAction, useEffect} from 'react'
import { AllContextType, ContextProviderProps } from './user'
import Axios from 'axios'



const allContext = createContext<AllContextType>({} as AllContextType)

const ContextApiProvider = ({children}: ContextProviderProps) => {
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')

  const login = (user: SetStateAction<null>) => {
    setUser(user)
    setUsername('Guest')
  }
  const logout = () => {
    setUser(null)
  }

  const [sideNav, setSideNav] = useState('')
  const [toggleBar, setToggleBar] = useState('')
  const sideNavDisplayHandler = () => {
    if(sideNav != 'show-side-nav')
    {
      setSideNav('show-side-nav')
      setToggleBar('toggle-bar')
    }
    else
    {
      setSideNav('')
      setToggleBar('')
    }
  }
  sideNavDisplayHandler


  const [smallSearchBox, setSmallSearchBox] = useState('')
  const SmallSearchBoxDisplayhandler = () => {
    if(smallSearchBox === '')
    {
      setSmallSearchBox('show-small-search-box-container')
    }
    else
    {
      setSmallSearchBox('')
    }
  }
  SmallSearchBoxDisplayhandler
  
  const [filterBox, setFilterBox] = useState('')
  const filterBoxDisplayhandler = () => {
    if(filterBox === '')
    {
      setFilterBox('show-filter-box-container')
    }
    else
    {
      setFilterBox('')
    }
  }
  filterBoxDisplayhandler


  //MocApi Elements
  const [usersDetail, setUsersDetail] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    Axios 
      .get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users?skip=0&limit=10')
      
      .then ((response) => {
        setLoading(false)
        setUsersDetail(response.data)
        setError('')
      })
      .catch ((error) => {
        setLoading(false)
        setUsersDetail([])
        setError('Sorry, unable to load data ❗')
        console.log('Data Error❗', error)
      })
      
  }, [])


  return (
    <allContext.Provider value={{user, username, sideNav, toggleBar, smallSearchBox, filterBox, usersDetail, loading, error, login, logout, sideNavDisplayHandler, SmallSearchBoxDisplayhandler, filterBoxDisplayhandler}}>
      {children}
    </allContext.Provider>
  )
}

export const useContextApi = () => {
  return useContext(allContext)
}

export default ContextApiProvider