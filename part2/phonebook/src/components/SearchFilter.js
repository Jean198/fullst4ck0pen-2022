import React from 'react'

const SearchFilter = ({filterPersons}) => {
  return (
    <>

      filter shown with <input type="text"  onChange={filterPersons}/>

    </>
  )
}

export default SearchFilter