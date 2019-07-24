/*
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'add another',
  'now theres another'
]

const votes = new Array(anecdotes.length).fill(0)

console.log(votes);

console.log(votes[3]);
votes[3] += 1;
console.log(votes[3]);
console.log(votes);
*/

const course = {
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10,
      id: 1
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
      id: 2
    },
    {
      name: 'State of a component',
      exercises: 14,
      id: 3
    },
    {
      name: 'Redux',
      exercises: 11,
      id: 4
    }
  ]
};

const sum = () => course.parts.reduce((a, part) => a + part.exercises, 0);
console.log(sum());

const average = array => {
  const reducer = (sum, item) => {
    return sum + item
  }
  return array.length === 0
  ? 0
  : array.reduce(reducer, 0) / array.length
}