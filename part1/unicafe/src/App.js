import { useState} from 'react'


const Statistics =({good,neutral,bad})=>{
  return(
    <div>

        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {`${good+neutral+bad}`}</p>
        <p>average {`${(good*1+neutral*0+bad*(-1))/(good+neutral+bad)}`}</p>
        <p>positive {`${good/(good+neutral+bad)*100}`} %</p>

    </div>
  )
}

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

        <Statistics good={good} neutral={neutral} bad={bad}/>

        


      </div>
    </div>

  )
}

export default App


