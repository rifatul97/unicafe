import React from "react";
import ReactDOM from "react-dom";

const Statistics = props => {
  var average = 0;
  var countOne = 0;
  const reducer = (acc, currVal) => acc + currVal;
  if (props.Total.length !== 0) {
    const arr = props.Total;
    average = arr.reduce(reducer) / arr.length;
    countOne = (arr.filter(x => x === 1).length * 100) / arr.length;
  }

  return (
    <div>
      <p1>good</p1> {props.good}
      <br />
      <p1>neutral</p1> {props.neutral}
      <br />
      <p1>bad</p1> {props.bad}
      <br />
      <p1>average</p1> {average}
      <br />
      <p1>positive</p1> {countOne} <p1> % </p1>
    </div>
  );
};

export default Statistics;
