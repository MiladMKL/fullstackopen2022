import { useState } from 'react'

const StatisticLine = (props) => {
  if (props.text === "positive") {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value} %</td>
      </tr>
    )  
  }

  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>

    //<p>{props.text} {props.value} {props.additionalText}</p>
  )
}

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad

  const all = good + neutral + bad
  const average = (good - bad) / all // neutral not required for average calculation!
  const positive = (good / all) * 100

  if (all === 0) {
    return (
      <div>
        <p>No feedback given"</p>
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} additionalText="%"/>
        </tbody>
      </table>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.clickHandler}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = (good) => setGood(good)
  const handleNeutralClick = (neutral) => setNeutral(neutral);
  const handleBadClick = (bad) => setBad(bad);

  return (
    <div>
      <h1>give feedback</h1>
      
      <Button clickHandler={ () => handleGoodClick(good + 1) } text="good" />
      <Button clickHandler={ () => handleNeutralClick(neutral + 1) } text="neutral" />
      <Button clickHandler={ () => handleBadClick(bad + 1)} text="bad" />
      
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App