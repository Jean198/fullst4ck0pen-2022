import { useState} from 'react'
const Button=({updateGood,updateNeutral,updateBad})=>{
  return(
    <div>
      <button onClick={updateGood}>good</button>
      <button onClick={updateNeutral}>neutral</button>
      <button onClick={updateBad}>bad</button>
    </div>
  )
}
const StatisticLine=({text,value})=>{
  return(
    <>
    <td>{text}</td>
    <td>{value}</td>
    </>
  )
}
const Statistics =({good,neutral,bad})=>{
  if((good===0) && (neutral===0) && (bad===0) ){
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return(
    <div>
         <table>
          <tbody>
          <tr><StatisticLine text="good" value={good}/></tr>
          <tr><StatisticLine text="neutral" value={neutral}/></tr>
          <tr><StatisticLine text="bad" value={bad}/></tr>
          <tr>
            <td>all</td>
            <td>{`${good+neutral+bad}`}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{`${(good*1+neutral*0+bad*(-1))/(good+neutral+bad)}`}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{`${good/(good+neutral+bad)*100}`} %</td>
          </tr>
          </tbody>
         </table>
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
      <Button updateGood={updateGood} updateNeutral={updateNeutral} updateBad={updateBad}/>
      <div>
        <h1>Statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
    </div>
  )
}
export default App
