import React from 'react'
import CountryView from './CountryView'

const Country = ({ filteredCountries, getBackGroundColor, showSpecificCountry}) => {
  return (

    filteredCountries.length === 1 ? filteredCountries.map((country, index) => {
      return (
        <>
          <CountryView country={country} index={index}/>
        </>
      )
    }) :

      <div className='many-countries'>
        {filteredCountries.map((country, index) => {
          return (

            <div className={`country-line-${getBackGroundColor(index)}`} key={index}>

              {country.name.common}
              <button id={country.name.common} onClick={showSpecificCountry}>Show</button>

            </div>

          )
        }
        )}
      </div>


  )
}

export default Country