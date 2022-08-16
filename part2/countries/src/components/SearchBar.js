import React from 'react'

const SearchBar = ({filterCountries}) => {
  return (
    <div className='search-bar'>
        <input type="text" onChange={filterCountries} placeholder="Search for country"/>
    </div>
  )
}

export default SearchBar