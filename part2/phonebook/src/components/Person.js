import React from 'react'

const Person = ({ person, deletePerson, updatePerson }) => {
  const { name, number, id } = person
  return (
    <>
      <p >id{id}: {name} {number}<button onClick={() => deletePerson(id)} id={id}>Delete</button> <button onClick={() => updatePerson(id)} id={id}>Update</button></p>
    </>
  )
}
export default Person