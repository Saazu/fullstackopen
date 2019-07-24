import React from 'react';

const Notification = ({ state }) => {
  if (state.message === null) {
    return null
  }

  const baseStyle = {
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderSadius: '5px',
    padding: '10px',
    marginBottom: '10px'
  }

  let style = null;
  if (state.type === 'error') {
    style = { ...baseStyle, color: 'red'}
  } else {
    style = {...baseStyle, color: 'green'}
  }



  return (
    <div style={style}>
      {state.message}
    </div>
  )
}

export default Notification