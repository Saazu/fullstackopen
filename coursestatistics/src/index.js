import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  );
}

const Statistic = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  );
}

const Statistics = ({ good, bad, neutral} ) => {
  if (bad === 0 && good === 0 && neutral === 0) {
    return (
      <p>No feedback given</p>
    );
  }
  return (
    <div>
      <Statistic text='good' value={good}/>
      <Statistic text='bad' value={bad}/>
      <Statistic text='neutral' value={neutral}/>
      <Statistic text='all' value={bad + good + neutral}/>
      <Statistic text='average' value={(bad + good + neutral)/3} />
      <Statistic text='positive' value={(good / (bad + good + neutral)) * 100} />
    </div>
  );
}

const App = (props) => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleBadClick = () => setBad(bad + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);

  
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text='good'/>
      <Button onClick={handleNeutralClick} text='neutral'/>
      <Button onClick={handleBadClick} text='bad'/>
      <br />
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));