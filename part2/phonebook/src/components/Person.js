import React from 'react'

const Person = ({person}) => {
    const{name,number}=person
  return (
    <p key={person.name}>{person.name} {person.number}</p>
  )
}

export default Person