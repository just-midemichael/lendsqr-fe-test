import React from 'react'
import '../assets/style/smallSearchBox.css'
import { useContextApi } from '../utils/ContextApi'
import { useState } from 'react'


const SmallSearchBox = () => {

    const [searchInput, setSearchInput] = useState()
    const search = useContextApi()
  return (
    <>
        <div className={`small-search-box-container ${search.smallSearchBox}`}>
            <span className='search-box-wrapper small-search-box-wrapper'>
            <input type='text' className='search-input small-search-input' name='search-box' value={searchInput} placeholder='Search for anything' autoFocus/>
            <button className='small-search-submit-button'></button>
            </span>
        </div>
    </>
  )
}

export default SmallSearchBox