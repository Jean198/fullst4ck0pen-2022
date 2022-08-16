import React from 'react'


const Countries = ({ filteredCountries }) => {

    const getBackGroundColor = (num) => {
        let color
        if (num%2!=0){
            color="white"
        }else{
            color="blue"
        }

        return color

    }
    return (
        <div>
            {filteredCountries.length > 10 ? <div>Too many matches, specofy another filter</div> :
                (filteredCountries.length === 1 ? filteredCountries.map((country, index) => {
                    return (
                        <>
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
                        </>
                    )
                }) :
                    <div className='many-countries'>
                        {filteredCountries.map((country, index) => {
                            return (

                                <div className={`country-line-${getBackGroundColor(index)}`}>{country.name.common}</div>

                            )
                        }
                        )}
                    </div>

                )}
        </div>
    )
}
export default Countries