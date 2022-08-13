import { useState, useEffect } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [totalFeebacks,setTotalFeedbacks]=useState(0);
  const [averageScore,setAverageScore]=useState(0);
  

  const updateGood=()=>{
       setGood(good+1)
       setTotalFeedbacks(good+neutral+bad)
       setAverageScore((good*1+neutral*0+bad*-1)/totalFeebacks)
  }

  const updateNeutral=()=>{
    setNeutral(neutral+1)
    setTotalFeedbacks(good+neutral+bad)
    setAverageScore((good*1+neutral*0+bad*-1)/totalFeebacks)
}

const updateBad=()=>{
  setBad(bad+1)
  setTotalFeedbacks(good+neutral+bad)
  
}

const updateTotal=()=>{
  setTotalFeedbacks(good+neutral+bad)
}

const updateAverage=()=>{
  setAverageScore((good*1+neutral*0+bad*-1)/totalFeebacks)
}

useEffect(() => {
  updateTotal()
  updateAverage()
}, [good, neutral,bad,totalFeebacks])




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
        <p>all {`${good+neutral+bad}`}</p>
        <p>average {`${(good*1+neutral*0+bad*(-1))/(good+neutral+bad)}`}</p>
        <p>positive {`${good/(good+neutral+bad)*100}`} %</p>


      </div>
    </div>

  )
}

export default App
