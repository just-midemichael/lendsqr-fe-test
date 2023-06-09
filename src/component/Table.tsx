import React, { ReactNode, useEffect, useState } from 'react'
import '../assets/style/userTable.css'
import FilterIcon from './FilterIcon'
import OptionIcon from './OptionIcon'
import { useContextApi } from '../utils/ContextApi'
import NavigateLeft from './NavigateLeft'
import NavigateRight from './NavigateRight'
import { Link, NavLink } from 'react-router-dom'
import 'react-phone-number-input/style.css'
import FilterBox from './FilterBox'



const Table = () => {

  const userData = useContextApi() 

  const [value, setValue] = useState()
  const [tablePage, setTablePage] = useState(100) 

  const optionItem = [
    {value: 'Initial Value' , number: '100'},
    {value: '50' , number: '50'},
    {value: '25' , number: '20'},
    {value: '10' , number : '10'},
  ]

  const handleSelectPage = (e: any) => {
    setTablePage(e.target.value)
  }


  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage  = tablePage
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const npage = Math.ceil(userData.usersDetail.length / recordsPerPage)
  const numbers = [...Array(npage + 1).keys()].slice(1)

  
  const previousePage = () => {
    if(currentPage !== firstIndex){
      setCurrentPage(currentPage -1)
    }
  }
  const changeCurrentPage = (id:any) => {
    setCurrentPage(id)
  }
  const nextPage = () => {
    if(currentPage !== lastIndex){
      setCurrentPage(currentPage + 1)
    }
  }

  const [filter, setFilter] = useState('')
  // const filterData = userData.usersDetail.filter((data: any) => {
  //   return data.id.include(filter.toLowerCase())
  // })

  return (
    <div className='table-container'>
        <div className='table-content'>
      
          <table>
            <thead className='table-head'>
              <tr>
                <td>ORGANIZATION <FilterIcon/></td>
                <td>USERNAME <FilterIcon/></td>
                <td>EMAIL <FilterIcon/></td>
                <td>PHONE NUMBER <FilterIcon/></td>
                <td>DATE JOINED <FilterIcon/></td>
                <td>STATUS <FilterIcon/></td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {userData.usersDetail.map((user: any) => {
                return (
                  <tr key={user.id}>
                    <td>{user.orgName.charAt(0).toUpperCase()+ user.orgName.slice(1).toLowerCase()}</td>
                    <td>{user.userName.charAt(0).toUpperCase()+ user.userName.slice(1).toLowerCase()}</td>
                    <td>{user.email.toLowerCase()}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{user.createdAt}</td>
                    <td>{user.lastActiveDate}</td>
                    <td><OptionIcon/></td>
                  </tr> 
                )
                
              })}
              
            </tbody>
          </table>
              
          <div className='error_loading_message'>
              {userData.error ? userData.error : null} 
              {userData.loading ? 'Loading data ...': null}
          </div>  
        </div>

        <div className='table-page-navigation'>
            <div className='select-container'>
              <span>Showing</span>
              <select className='select-page' onChange={handleSelectPage} defaultValue='Initial Value'>
              
                {optionItem.map(item => {
                  return (
                    <option key={item.number} value={item.number}>
                      {item.number}
                    </option>
                  )
                })}
              </select>
              <span>out of 100</span>
            </div>

            <div className='number-navigation-container'>
              <Link to='/dashboard/user' className='page-link' onClick={previousePage}>
                <NavigateLeft/>
              </Link>
              {numbers.map((number, index) => {
                return (
                  <span key={index} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                    <NavLink  to='/dashboard/user' className='page-item' onClick={changeCurrentPage} > {number}</NavLink>
                  </span>
                )
              })}

              <Link to='/dashboard/user' className='page-link' onClick={nextPage}>
                <NavigateRight/>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Table