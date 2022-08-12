import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const updateGood=()=>{
       setGood(good+1)
  }

  const updateNeutral=()=>{
    setNeutral(neutral+1)
}

const updateBad=()=>{
  setBad(bad+1)
}

  return (
    <div>
      <button onClick={updateGood}>good</button>
      <button onClick={updateNeutral}>neutral</button>
      <button onClick={updateBad}>bad</button>

      <div>
        <h1>Statistics</h1>

        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
      </div>
    </div>

  )
}

export default App