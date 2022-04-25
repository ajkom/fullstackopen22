import { useState } from 'react'

const Header = ({name}) => {
  return (<h1> {name} </h1>)
}

const Statictics = (props) => {
  let total = props.good + props.bad + props.neutral
  if (total > 0)
    return (
      <div>
        <p>good {props.good}</p>
        <p>neutral {props.neutral}</p>
        <p>bad {props.bad}</p>
        <p>all {total}</p>
        <p>average {props.average()}</p>
        <p>positive {props.positive()}%</p>
      </div>)
  return <p>No feedback given</p>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const average = () => {
    let count = good + bad + neutral
    let sum = good - bad
    if (count > 0)    
      return sum / count
    return 0
  }

  const positive = () => {
    let count = good + bad + neutral
    if (count > 0)
      return good/count * 100
    return 0
  }


  return (
    <div>
      <Header name="give feedback" />
      <button onClick={() => setGood(good+1)}>{"good"}</button>
      <button onClick={() => setNeutral(neutral+1)}>{"neutral"}</button>
      <button onClick={() => setBad(bad+1)}>{"bad"}</button>

      <Header name="statistics" />

      <Statictics good={good} bad={bad} neutral={neutral}
      positive={() => positive()} average={() => average()}/>
    </div>
  )
}

export default App