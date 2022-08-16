import React from 'react'
import Person from './Person'

const Persons = ({filteredPersons}) => {
  return (
    <>


        {filteredPersons.map((person)=>{
        return(
            <>
              <Person key={person.name} person={person}/>
            </>
        )
        })}


    </>
  )
}

export default Persons