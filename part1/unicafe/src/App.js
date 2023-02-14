import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const StatisticLine = ({ text, value }) => (
  <div>
    {text} {value}
  </div>
);

const Statistics = ({ good, neutral, bad }) => {
  let all = good + neutral + bad;
  if (good || neutral || bad) {
    return (
      <>
        <StatisticLine text="good" value={good}></StatisticLine>
        <StatisticLine text="neutral" value={neutral}></StatisticLine>
        <StatisticLine text="bad" value={bad}></StatisticLine>
        <StatisticLine text="all" value={all}></StatisticLine>
        <StatisticLine
          text="average"
          value={(good * 1 + neutral * 0 + bad * -1) / all}
        ></StatisticLine>
        <StatisticLine text="positive" value={good / all}></StatisticLine>
      </>
    );
  } else {
    return <div>No Feedback Given</div>;
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setToValue = (value, setter) => {
    setter(value);
  };

  return (
    <div>
      {/* <Display value={value} /> */}
      <h1>give feedback</h1>
      <Button handleClick={() => setToValue(good + 1, setGood)} text="good" />
      <Button
        handleClick={() => setToValue(neutral + 1, setNeutral)}
        text="neutral"
      />
      <Button handleClick={() => setToValue(bad + 1, setBad)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  );
};

export default App;
