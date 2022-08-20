import React from 'react'

const Person = ({ person, deletePerson }) => {
  const { name, number, id } = person
  return (
    <>
      <p >id{id}: {name} {number}<button onClick={() => deletePerson(id)} id={person.id}>Delete</button></p>
    </>
  )
}
export default Person