import React from 'react'
import Part from './Part'

const Content = ({ parts }) => {

  const courseParts = () => parts.map ( coursePart =>
    <Part key={coursePart.id} part={coursePart.name} exercise={coursePart.exercises}/>
  );
  return (
    <div>
      {courseParts()}
    </div>
  );
}

export default Content;