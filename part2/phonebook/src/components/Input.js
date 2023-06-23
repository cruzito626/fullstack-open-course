import React from "react";

const Input = ({ name, ...rest }) => (
  <div>
    {name}
    <input {...rest} />
  </div>
);

export default Input;
