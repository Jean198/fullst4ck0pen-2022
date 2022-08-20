import Form from './components/Form'
import Persons from './components/Persons'
import SearchFilter from './components/SearchFilter'
import axios from 'axios'

import { useState, useEffect } from 'react'
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone]=useState('')
  const [filteredPersons,setFilteredPersons]=useState(persons)


  const hook=()=>{
    axios.get('http://localhost:3001/persons')
    .then(response=>{
      setPersons(response.data)
      setFilteredPersons(response.data)
    })
  }

  useEffect(hook,[])





  const addName=(event)=>{
       event.preventDefault();
       if(persons.some(person=>person.name===newName)){
        alert(`${newName} is already added to phonebook`)
       }else{
        const newPerson={
          name:newName,
          number:newPhone
         }
         setPersons(persons.concat(newPerson))
         setFilteredPersons(filteredPersons.concat(newPerson))

          axios
          .post('http://localhost:3001/persons', newPerson)
          .then(response => {

    })
       }
       setNewName('');


  }


  const filterPersons= (event)=>{
    const searchWord=event.target.value
    const filteredArray = persons.filter(person=>person.name.toLowerCase().includes((searchWord).toLowerCase()))
    setFilteredPersons(filteredArray)

  }

  const handleNameChange=(event)=>{
    setNewName(event.target.value)
  }

  const handlePhoneChange=(event)=>{
    setNewPhone(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter filterPersons={filterPersons}/>
      <h3>add a new</h3>
      <Form addName={addName} handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange} newPhone={newPhone} newName={newName}/>
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons}/>


    </div>
  )
}
export default App