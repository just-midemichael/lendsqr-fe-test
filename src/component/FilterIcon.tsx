import React, { ReactNode } from 'react'
import '../assets/style/filterIcon.css'
import { useContextApi } from '../utils/ContextApi'
import FilterBox from './FilterBox'

const FilterIcon = ({onClick}: {onClick?: any}) => {
  const contextFilterBox = useContextApi()

  return (
    <>
      <img src='../icon/filterButtonIcon.svg' alt='filter' className='filter-icon' onClick={contextFilterBox.filterBoxDisplayhandler}/>
    </>
  )
}

export default FilterIcon