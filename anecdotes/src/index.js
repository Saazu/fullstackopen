import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const MostVotes = ({ votes, anecdotes }) => {
  const mostVotes = Math.max(...votes)
  const index = votes.indexOf(mostVotes)

  if (mostVotes > 0) {
    return (
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[index]}<br/> has {votes[index]} votes</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>No anecdote has votes yet</p>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  
  const getRandom = () => {
    return Math.floor(Math.random() * (anecdotes.length - 1) + 1);
  }

  const handleRandomClick = () => {
    setSelected(getRandom());
  }

  const handleVoteClick = (selected) => () =>{
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <p>
        <button onClick={handleVoteClick(selected)}>vote</button>
        <button onClick={handleRandomClick}>random</button>
      </p>
      <MostVotes anecdotes={anecdotes} votes={votes}/>

    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App  anecdotes={anecdotes}/>, document.getElementById('root'));
