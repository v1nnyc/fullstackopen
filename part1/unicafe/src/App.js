import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistics = ({ good, neutral, bad }) => {
  let all = good + neutral + bad;
  return (
    <>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {all}</div>
      <div>average {(good * 1 + neutral * 0 + bad * -1) / all}</div>
      <div>positive {good / all} %</div>
    </>
  );
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
