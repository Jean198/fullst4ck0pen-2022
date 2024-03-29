import React from 'react'

const Form = ({addName, handleNameChange, handlePhoneChange, newPhone, newName}) => {
  return (
    <>
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
    </>
  )
}

export default Form