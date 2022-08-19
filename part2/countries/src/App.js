import './App.css';
import axios from 'axios'
import {useState,useEffect} from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Countries from './components/Countries'

function App() {

  const[countries, setCountries]=useState([])
  const[filteredCountries, setFilteredCountries]=useState([])



  useEffect(()=>{

    axios.get("https://restcountries.com/v3.1/all")
    .then(response=>{
      setCountries(response.data)




    })


  }, [])





 const filterCountries=(event)=>{
    const searchWord=event.target.value
    const filteredArray = countries.filter(country=>country.name.common.toLowerCase().includes((searchWord).toLowerCase()))
    if(searchWord===""){
      setFilteredCountries([])
    }else{
      setFilteredCountries(filteredArray)
    }

 }

 const showSpecificCountry = (event) =>{

    const searchWord=event.target.id
    const filteredArray = countries.filter(country=>country.name.common.toLowerCase().includes((searchWord).toLowerCase()))
    setFilteredCountries(filteredArray)
    setCountryName(event.target.id)


 }





  return (
    <div className="App">
           <div>{countryName}</div>

           <Header/>
           <SearchBar filterCountries={filterCountries}/>
           <Countries filteredCountries={filteredCountries} showSpecificCountry={showSpecificCountry} />

    </div>
  );
}

export default App;
