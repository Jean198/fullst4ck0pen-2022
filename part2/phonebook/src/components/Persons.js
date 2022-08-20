import React from 'react'
import Person from './Person'

const Persons = ({ filteredPersons, deletePerson }) => {
  return (
    <>
      {filteredPersons.map((person) => {
        return (
          <>
            <Person key={person.name} person={person} deletePerson={deletePerson} />
          </>
        )
      })}
    </>
  )
}
export default Persons