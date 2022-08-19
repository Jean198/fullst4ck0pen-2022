import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

const CountryView = ({country, index}) => {
  const[countryWeatherData, setCountryWeatherData]=useState([])

  useEffect(()=>{
    axios.get(`http://api.weatherstack.com/current?access_key=be50a23b1c1ac1b3ee61189c9a3b6f5d&query=${country.capital}`)
    .then(response=>{
      setCountryWeatherData(response.data)

    })
  }, [country])


console.log(countryWeatherData)

  return (
    <div key={index} className="single-country">
            <img src={country.flags.png} alt="" className='country-image'/>
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

              <div>
                <h2>Weather in {country.capital}</h2>
                {countryWeatherData.length===0?null:
                <div>
                  <p>temperature {countryWeatherData.current.temperature} Celsius</p>
                <img src={countryWeatherData.current.weather_icons} alt="" className='weather-image'/>
                <p>Wind {countryWeatherData.current.wind_speed} m/s</p>
                </div>

                }
              </div>
            </div>

          </div>
  )
}

export default CountryView