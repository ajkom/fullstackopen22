import { useState } from 'react'

const Header = ({name}) => <h1> {name} </h1>

const Button = ({name, action}) => <button onClick={action}>{name}</button>

const StatisticLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Statictics = (props) => {
  let total = props.good + props.bad + props.neutral
  if (total > 0)
    return (
      <table>
        <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={props.average()} />
        <StatisticLine text="positive" value={props.positive()} />
        </tbody>
      </table>
    )
  return <p>No feedback given</p>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const calculateAverage = () => {
    let count = good + bad + neutral
    let sum = good - bad
    if (count > 0)    
      return sum / count
    return 0
  }

  const calculatePositivePercentage = () => {
    let count = good + bad + neutral
    if (count > 0)
      return (good/count * 100 + "%")
    return (0 + "%")
  }


  return (
    <div>
      <Header name="give feedback" />
      <Button name="good" action={() => setGood(good+1)} />
      <Button name="neutral" action={() => setNeutral(neutral+1)} />
      <Button name="bad" action={() => setBad(bad+1)} />
     
      <Header name="statistics" />
      <Statictics good={good} bad={bad} neutral={neutral}
      positive={() => calculatePositivePercentage()} average={() => calculateAverage()}/>
    </div>
  )
}

export default App