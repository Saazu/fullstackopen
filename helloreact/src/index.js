import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Hello = ({ name, age}) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born {bornYear()}</p>
    </div>
  )
}

const Display = ({ counter }) =>  <div>{counter}</div>

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)


/*
const App = (props) => {
  const [counter, setCounter]  = useState(0);
  const setToValue = (value) => () => { setCounter(value); }

  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  });

  const handleLeftClick = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left + 1,
    };
    setClicks(newClicks);
  }

  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1
    };
    setClicks(newClicks);
  }
  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={setToValue(counter + 1)} text='plus'/>
      <Button onClick={setToValue(counter - 1)} text='minus'/>
      <Button onClick={setToValue(0)} text='zero'/>

      <div>
        
        <Button onClick={handleLeftClick} text={clicks.left}/>
        <Button onClick={handleRightClick} text={clicks.right}/>
      </div>
    </div>
  )
}
*/

const History = ({allClicks}) => {
  if (allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {allClicks.join(' ')}
    </div>
  )
}


const App = (props) => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    setLeft(left + 1);
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    setRight(right + 1);
  }

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text='left'/>
      <Button onClick={handleRightClick} text='right'/>
      {right}
      <History allClicks={allClicks}/>
    </div>
    
  )
  
}

ReactDOM.render(<App />, document.getElementById('root'));

