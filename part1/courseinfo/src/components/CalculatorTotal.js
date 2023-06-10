import React from "react";
const CalculatorTotal = ({ exercises }) => {
  const total = exercises.reduce(
    (exercisesTotal, exercisesCurrent) => exercisesTotal + exercisesCurrent,
    0
  );
  return <strong>Number of exercises {total}</strong>;
};

export default CalculatorTotal;
