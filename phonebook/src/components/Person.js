import React from 'react';

const Person = ({ name, number, deletePersonHandler }) => {
  return (
    <p>{name} {number} <button onClick={deletePersonHandler}>delete</button> </p>
  );
}

export default Person;