import React, { useState } from 'react'
import '../assets/style/filterBox.css'
import { useContextApi } from '../utils/ContextApi'
import PhoneInput from 'react-phone-number-input'

const FilterBox = () => {
  const userData = useContextApi() 
  const contextFilterBox = useContextApi()

  const [value, setValue] = useState()
  const [userStatus, setuserStatus] = useState('')
  const [organization, setOrganization] = useState('')
  const [filter, setFilter] = useState('') 

  const statusItem = [
    {value: 'Active', text: 'Active'},
    {value: 'Inactive', text: 'Inactive'},
    {value: 'Pending', text: 'Pending'},
    {value: 'Blacklisted', text: 'Blacklisted'}
  ]


  const handleSelectStatus = (e: any) => {
    setuserStatus(e.target.value)
  }

  const handleSelectOrganization = (e: any) => {
    setOrganization(e.target.value)
  }

  
  // const filterData = userData.usersDetail.filter((data: any) => {
  //   return data.id.include(filter.toLowerCase())
  // })

  console.log()

  return (
        <div className={`filter-container ${contextFilterBox.filterBox}`}>
            <form className='filter-form'>
                <label>Organization</label>
                <select className='filter-select' placeholder='Select' onChange={handleSelectOrganization}>
                <option selected disabled>Select</option>
                {userData.usersDetail.map((filterOrganization: any) => {
                    return (
                    <option key={filterOrganization.id} value=    {filterOrganization.orgName}>
                        {filterOrganization.orgName}
                    </option>
                    )
                })}
                </select>

                <label>Username</label>
                <input type='text' placeholder='User' onChange={(e: any) => setFilter(e.target.value)}/>

                <label>Email</label>
                <input type='email' placeholder='Email'/>

                <label>Date</label>
                <input type="datetime" value='Date'/>

                <label>Phone Number</label>
                <span className='phone-number-input-wrapper'>
                <PhoneInput
                    defaultCountry='NG'
                    placeholder=""
                    value={value}
                    onChange={() =>setValue}/>
                </span>

                <label>Status</label>
                <select className='filter-select' placeholder='Select' onChange={handleSelectStatus}>
                <option selected disabled>Select</option>
                
                {statusItem.map((status) => {
                return(
                    <option key={status.value} value={status.value}>
                    {status.text}
                    </option>
                ) 
                })}
                </select>

                <div className='filter-button-container'>
                <button className='reset-button'>Reset</button>
                <button className='filter-button'>Filter</button>
                </div>
            </form>
        </div>
  )
}

export default FilterBox