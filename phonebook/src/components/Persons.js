import React from 'react';
import Person from './Person'

const Persons = ({ persons, filterTerm, deletePersonHandler }) => {
  let personsToShow = persons;
  if ( filterTerm ) {
    personsToShow = persons.filter( person => person.name.toLowerCase().includes(filterTerm.toLowerCase()))
  }
  
  const rows = () => personsToShow.map (person => 
      <Person 
        key={person.name} 
        name={person.name} 
        number={person.number} 
        deletePersonHandler={() => deletePersonHandler(person.id)}/>
  )

  return (
    <div>{rows()}</div>
  );
}

export default Persons