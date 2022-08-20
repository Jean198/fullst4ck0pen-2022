import Form from './components/Form'
import Persons from './components/Persons'
import SearchFilter from './components/SearchFilter'
import axios from 'axios'
import personService from './services/persons'
import { useState, useEffect } from 'react'
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons)
  const[message, setMessage]=useState(null)
  const[failureMessage, setFailureMessage]=useState(null)
  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
        setFilteredPersons(response.data)
      })
  }, [newName])


  const addName = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = {
        name: newName,
        number: newPhone
      }
      setPersons(persons.concat(newPerson))
      setFilteredPersons(filteredPersons.concat(newPerson))
      personService.create(newPerson)
      setMessage(`Added ${newPerson.name}`)
      setTimeout(()=>{setMessage(null)}, 3000)
    }
    setNewName('');



  }
  const deletePerson = (id) => {

    const person = persons.find((p) => parseInt(p.id) === id);
    if (person) {
      if (window.confirm(`Delete ${person.name}?`)) {

        axios.delete(`http://localhost:3001/persons/${id}`)
          .then((response) => {

            personService.getAll()
              .then((response) => {
                setPersons(response.data)
                setFilteredPersons(response.data)
              })
          }).catch((e)=>{
            setFailureMessage(`Information of ${person.name} has already been removed from the server`)
            setTimeout(()=>{setFailureMessage(null)}, 3000)

          })
      }

     }
  };
  const filterPersons = (event) => {
    const searchWord = event.target.value
    const filteredArray = persons.filter(person => person.name.toLowerCase().includes((searchWord).toLowerCase()))
    setFilteredPersons(filteredArray)
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} failureMessage={failureMessage}/>
      <SearchFilter filterPersons={filterPersons} />
      <h3>add a new</h3>
      <Form addName={addName} handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange} newPhone={newPhone} newName={newName} />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} deletePerson={deletePerson} />
    </div>
  )
}
export default App