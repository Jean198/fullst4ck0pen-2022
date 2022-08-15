import { useState } from 'react'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone]=useState('')
  const [filteredPersons,setFilteredPersons]=useState(persons)


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
       }
       setNewName('');
  }


  const filterPersons=(event)=>{
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
      filter shown with <input type="text"  onChange={filterPersons}/>
      <form  onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input type="number" value={newPhone} onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map((person)=>{
        return(
          <>
          <p key={person.name}>{person.name} {person.number}</p>
          </>
        )
      })}
      <div>debug: {newName}</div>
      <div>debug: {newPhone}</div>
    </div>
  )
}
export default App