import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Random = (min, max) => {
  return (
    Math.floor(Math.random() * (max - min + 1)) + min
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const MaxValue = (props) => {
  let maxvalue = props.votes.reduce((max, value) => {return Math.max(max, value)});
  return (
    <div>
    has {maxvalue} votes
    </div>
  )
}

const GetAnecdote = (props) => {
  
  let maxvalue = props.votes.reduce((max, value) => {return Math.max(max, value)});
  //console.log(props)
  //console.log(maxvalue)
  const isMaxValue = (element) => element === maxvalue;
  let index = props.votes.findIndex(isMaxValue)
  console.log(index)
  return (
    <p>{props.anecdotes[index]}</p>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  
  const [votes, setVoted] = useState(new Array(props.anecdotes.length).fill(0))
  
  const setToSelected = newValue => {
    setSelected(newValue)
  }

  const setToVoted = newValue => {
    const copy = [...votes]
    copy[selected] = newValue
    return (
      setVoted(copy)
    )

  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]} </p>
      <p>has {votes[selected]} votes </p>
      <Button handleClick={() => setToVoted(votes[selected] + 1)} text="vote" />
      <Button handleClick={() => setToSelected(Random(0, props.anecdotes.length - 1))} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <GetAnecdote votes={votes} anecdotes={props.anecdotes} />
      <MaxValue votes={votes} />

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

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
