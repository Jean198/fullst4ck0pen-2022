import React from 'react'

const CountryView = ({country, index}) => {
  return (
    <div key={index} className="single-country">
            <img src={country.flags.png} alt="" />
            <div className='country-info'>
              <h1>{country.name.common}</h1>

              <p><span>Capital:</span> {country.capital}</p>
              <p><span>Area:</span> {country.area}</p>


              <div>
                <h3>Languages: </h3>
                <ul>
                  {Object.values(country.languages).map((language, index) => {
                    return (<li key={index}>{language}</li>)
                  })
                  }
                </ul>
              </div>
            </div>

          </div>
  )
}

export default CountryView