import React, {useState} from 'react'
import '../assets/style/searchBox.css'
import { useContextApi } from '../utils/ContextApi'

const SearchBox = () => {

  const [searchInput, setSearchInput] = useState()
  const search = useContextApi()



  return ( 
    <>
        <span className='search-box-wrapper'>
            <input type='text' className='search-input' name='search-box' value={searchInput} placeholder='Search for anything'/>
            <button className='search-button'></button>
            <button className='search-button small-search-button' onClick={search.SmallSearchBoxDisplayhandler}></button>
        </span>
    </>
  )
}

export default SearchBox