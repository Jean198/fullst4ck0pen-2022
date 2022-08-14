import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  //const[votes,setVotes]=useState(Object.assign({}, ...Object.entries({...(Array.from(Array(anecdotes.length).keys()))}).map(([a,b]) => ({ [b]: 0 }))))
  const[votes,setVotes]=useState(Array.from(Array(anecdotes.length).keys()).map(Number.prototype.valueOf,0))
  //console.log(votes)
  const maximumVote=Math.max(...votes)
  const maximumVoteIndex=votes.indexOf(maximumVote)
  //console.log(maximumVote)
  //console.log(maximumVoteIndex)

  const generateRandomAnecdote=()=>{
    
    const random=anecdotes.indexOf(anecdotes[Math.floor(Math.random()*anecdotes.length)])
    setSelected(random)
    
  }

  const makeVotes=()=>{
    
    const copyVotes=[...votes];
    copyVotes[selected]+=1
    setVotes(copyVotes)

    
    
  }

  return (
    <>
    <div>

      

      <div>
        <h1>Anecdote of the day</h1>
        <p>
        
            {anecdotes[selected]}

        </p>
      </div>
      
      
   </div>
   <div>
    has {votes[selected]} votes
   </div>
   <button onClick={makeVotes}>Vote</button>
   <button onClick={generateRandomAnecdote}>next anecdote</button>

   <div>
    <h1>Anecdote with most votes</h1>
    <p>{anecdotes[maximumVoteIndex]}</p>
    <p>
      has {maximumVote} votes
    </p>
    <p>

    </p>
   </div>
    </>
  )
}

export default App