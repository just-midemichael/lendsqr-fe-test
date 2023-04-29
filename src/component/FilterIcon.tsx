import React from 'react'
import '../assets/style/filterIcon.css'
import { useContextApi } from '../utils/ContextApi'

const FilterIcon = () => {
  const contextFilterBox = useContextApi()

  return (
    <img src='../icon/filterButtonIcon.svg' alt='filter' className='filter-icon' onClick={contextFilterBox.filterBoxDisplayhandler}/>
  )
}

export default FilterIcon