import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    console.log(persons)
    const nameObject = [
      {name: newName}
    ]
    console.log('nameObject', nameObject)
    console.log('persons:', persons)
    const names = persons.map(person => person.name)
    console.log('names', names)

    if (names.includes(newName)) {
      window.alert(`${newName} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat(nameObject)) 
      setNewName('')
    }
    
    
    
  }
  
  const handleInputChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const Person = ({ person }) => {
    return (
      <li>{person.name}</li>
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name:
            <input 
              value={newName} 
              onChange={handleInputChange}
            />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <Person key={person.name} person={person} />
        )}
      </ul>
    </div>
  )

}

export default App