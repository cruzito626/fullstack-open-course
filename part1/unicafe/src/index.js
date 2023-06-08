import React, { useState } from "react";
import ReactDOM from "react-dom";

const H1 = ({ title }) => <h1>{title}</h1>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Display = ({ text, value }) => (
  <p>
    {text} {value}
  </p>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodText = "good";
  const neutralText = "neutral";
  const badText = "bad";

  return (
    <div>
      <H1 title="give feedback" />
      <Button handleClick={() => setGood(good + 1)} text={goodText} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={neutralText} />
      <Button handleClick={() => setBad(bad + 1)} text={badText} />
      <H1 title="statistics" />
      <Display text={goodText} value={good} />
      <Display text={neutralText} value={neutral} />
      <Display text={badText} value={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
