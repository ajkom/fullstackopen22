import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [data, setData] = useState({
    selected: Math.floor((Math.random() * anecdotes.length-1) + 1),
    votes: Array(anecdotes.length).fill(0)
  })

  const handleClickVote = () => {
    const newVotes = [...data.votes]
    newVotes[data.selected] += 1

    const newData = {
      ...data,
      votes: newVotes
    }
    setData(newData)
  }

  const handleClickNext = () => {
    let r = Math.floor((Math.random() * anecdotes.length-1) + 1);

    const newData = {
      ...data,
      selected: r
    }

    setData(newData)
  }

  const getBestAnecdote = () => {
    let biggest = Math.max(...data.votes)
    let i = data.votes.indexOf(biggest)
    return (
      <div>
        {anecdotes[i]}
        <p>has {biggest} vote(s)</p>
      </div>
    )
  }


  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[data.selected]}</p>
      <p>has {data.votes[data.selected]} vote(s)</p>

      <button onClick={handleClickVote}>vote</button>
      <button onClick={handleClickNext}>next anecdote</button>

      <h2>Anecdote with the most votes</h2>
      {getBestAnecdote()}
    </div>
  )
}

export default App