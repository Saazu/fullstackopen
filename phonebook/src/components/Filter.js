import React from 'react'

const Filter = ({ filterTerm, handleFilterChange }) => {
  return (
    <div>filter shown with <input value={filterTerm} onChange={handleFilterChange}/> </div>
  );
  
}

export default Filter;