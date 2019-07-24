import React, { useState, useEffect } from 'react';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import phoneService from './services/phonebook'
import Notification from './components/Notification'

const App = () => {

  const [ persons, setPersons ] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ filterTerm, setNewFilter ] = useState('');
  const [ notification, setNotification ] = useState({
    type: null,
    message: null,
  })

  useEffect(() => {
    phoneService
      .getAll()
      .then(initialPersons => 
        setPersons(initialPersons)
        )
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  }

  const deletePersonHandler = (id) => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      phoneService
        .deletePerson(id)
        .then(response => {
          setPersons(persons.filter(p => p.id !== id))

          const newNotification = {
            message: `Deleted ${person.name}`,
            type: 'error'
          }
          setNotification(newNotification)
          setInterval(() => {
            setNotification({...notification, message: null})
          }, 5000)
        })
        .catch(error => {
          console.log(error.response.data)
        })
    }
  }

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.findIndex(person => person.name === newName) > -1) {
      if (window.confirm(`${newName} is already added to phonebook, replace old number with a new one?`)) {
        const id = persons.find(p => p.name === newName).id
        const personObject = {
          name: newName,
          number: newNumber
        }
        phoneService
        .update(id, personObject)
        .then(newPerson => {
          const newPersons = persons.map(person => person.id !== id ? person : personObject)

          setPersons(newPersons)
          const newNotification = {
            message: `Updated ${newPerson.name}`,
            type: 'update'
          }
          setNotification(newNotification)
          setInterval(() => {
            setNotification({...notification, message: null})
          }, 5000)

          setNewName('');
          setNewNumber('');
        })
        .catch(error => {
          const newNotification = {
            message: `Information of ${personObject.name} has been removed from the server`,
            type: 'new'
          }
          setNotification(newNotification)
          setInterval(() => {
            setNotification({...notification, message: null})
          }, 5000)

        })
      }
    } else {
      event.preventDefault();
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      phoneService
      .create(personObject)
      .then(newPerson => {
        const newNotification = {
          message: `Added ${newPerson.name}`,
          type: 'new'
        }
        setNotification(newNotification)
        setInterval(() => {
          setNotification({...notification, message: null})
        }, 5000)
        setPersons(persons.concat(newPerson))
        setNewName('');
        setNewNumber('');
        
      })
    }
    
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification state={notification}/>
      <Filter 
        filterTerm={filterTerm}
        handleFilterChange={handleFilterChange}
      />
      <PersonForm 
        addPerson={addPerson}
        newName={newName} 
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons 
        persons={persons}
        filterTerm={filterTerm}
        deletePersonHandler={deletePersonHandler}
      />
    </div>
  );
}

export default App;
