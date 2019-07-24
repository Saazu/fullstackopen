import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total'

const Course = ({ courses }) => {
  const content = () => courses.map (courseContent => {
  
    return (
      <>
        <Header name={courseContent.name}/>
        <Content parts={courseContent.parts}/>
        <Total parts={courseContent.parts}/>
      </>
    );
  });

  return (
    <div>{content()}</div>
  );
}

export default Course