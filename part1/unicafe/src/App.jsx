import { useState } from "react";

const Button = (props) => {
  const onClick = props.onClick;
  const text = props.text;
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = (props) => {
  const value = props.value;
  const text = props.text;
  return (
    <p>
      {text} {value}
    </p>
  );
};

const Statistics = (props) => {
  const { good, neutral, bad, total } = props;

  if (total === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={(good - bad) / total} />
      <StatisticLine text="positive" value={(good / total) * 100 + " %"} />
    </div>
  );
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const incrementGood = () => {
    console.log("good");
    setGood(good + 1);
    setTotal(total + 1);
  };

  const incrementNeutral = () => {
    console.log("neutral");
    setNeutral(neutral + 1);
    setTotal(total + 1);
  };

  const incrementBad = () => {
    console.log("bad");
    setBad(bad + 1);
    setTotal(total + 1);
  };

  return (
    <div>
      <h1>Give FeddBack</h1>
      <Button onClick={incrementGood} text="good" />
      <Button onClick={incrementNeutral} text="neutral" />
      <Button onClick={incrementBad} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  );
};

export default App;
