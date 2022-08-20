import React from 'react'
import Country from './Country'

const Countries = ({ filteredCountries, showSpecificCountry, countryWeatherData }) => {

    const getBackGroundColor = (num) => {
        let color
        if (num % 2 !== 0) {
            color = "white"
        } else {
            color = "blue"
        }

        return color

    }
    return (
        <div>
            {filteredCountries.length > 10 ? <div>Too many matches, specify another filter</div> :
                (<Country filteredCountries={filteredCountries} getBackGroundColor={getBackGroundColor} showSpecificCountry={showSpecificCountry} countryWeatherData={countryWeatherData} />


                )}
        </div>
    )
}
export default Countries