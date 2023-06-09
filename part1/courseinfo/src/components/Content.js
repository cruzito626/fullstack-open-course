import React from "react";

import Part from "./Part";
import CalculatorTotal from "./CalculatorTotal";

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(({ id, name, exercises }) => (
        <Part key={id} name={name} exercises={exercises} />
      ))}

      <CalculatorTotal exercises={parts.map(({ exercises }) => exercises)} />
    </div>
  );
};

export default Content;
