import React from 'react'
import Person from './Person'

const Persons = ({ filteredPersons, deletePerson, updatePerson }) => {
  return (
    <>
      {filteredPersons.map((person) => {
        return (
          <>
            <Person key={person.name} person={person} deletePerson={deletePerson} updatePerson={updatePerson}/>
          </>
        )
      })}
    </>
  )
}
export default Persons