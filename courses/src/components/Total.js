import React from 'react';

const Total = ({ parts }) => {
  const total = () => parts.reduce((a, part) => a + part.exercises, 0)
  return (
    <div>s
      <b>total of {total()} exercises</b>
    </div>
  );
}

export default Total