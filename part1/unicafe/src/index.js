import React, { useState } from "react";
import ReactDOM from "react-dom";

const goodText = "good";
const neutralText = "neutral";
const badText = "bad";

const H1 = ({ title }) => <h1>{title}</h1>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Display = ({ text, value }) => (
  <p>
    {text} {value}
  </p>
);

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = () => (good - bad) / total;
  const percentage = () => (good * 100) / total;

  return (
    <>
      <H1 title="statistics" />
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <Display text={goodText} value={good} />
          <Display text={neutralText} value={neutral} />
          <Display text={badText} value={bad} />
          <Display text="average" value={average()} />
          <Display text="positive" value={percentage() + " %"} />
        </>
      )}
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const plusOne = (value, setValue) => {
    return () => setValue(value + 1);
  };

  return (
    <div>
      <H1 title="give feedback" />
      <Button handleClick={plusOne(good, setGood)} text={goodText} />
      <Button handleClick={plusOne(neutral, setNeutral)} text={neutralText} />
      <Button handleClick={plusOne(bad, setBad)} text={badText} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
