import { useState } from 'react'

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Header = ({text}) => {
  return (
    <h1>
      {text}
    </h1>
  )
}

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
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(7).fill(0))


  const handleNext = () => {
    let random = Math.floor(Math.random() * anecdotes.length)
      while (random === selected) {
        random = Math.floor(Math.random() * anecdotes.length)
      }
      setSelected(random)
  }

  const handleVote = () => {
    // copy the array
    const votesCopy = [...votes]
    // update the copied array
    votesCopy[selected] += 1
    // set the copy to the original with 'set'
    setVotes(votesCopy)
  }

  const mostVotes = Math.max(...votes)
  const index = votes.indexOf(mostVotes)

  // console.log(votes, mostVotes, index);

  return (
    <div>
      <Header text="Anecdote of the day" />
      {anecdotes[selected]}
      <br />
      has {votes[selected]} votes
      <br /> 
      <Button text="vote" onClick={handleVote} />
      <Button text="next anecdote" onClick={handleNext} />
      <Header text="Anecdote with most votes" />
      {anecdotes[index]}
      <br /> 
      has {mostVotes} votes
    </div>
  )
}

export default App