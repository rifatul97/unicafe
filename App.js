import React, { useState } from "react";
import ReactDOM from "react-dom";
import Statistics from "./Statistics";

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [Total, setTotal] = useState([]);

  const GoodCounter = () => {
    setGood(good + 1);
    addTotal(1);
  };

  const BadCounter = () => {
    setBad(bad + 1);
    addTotal(-1);
  };

  const NeutralCounter = () => {
    setNeutral(neutral + 1);
    addTotal(0);
  };

  const addTotal = x => {
    setTotal([...Total, x]);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => GoodCounter()}>good</button>
      <button onClick={() => NeutralCounter()}>neutral</button>
      <button onClick={() => BadCounter()}>bad</button>

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} Total={Total} />
    </div>
  );
};

export default App;
