import React from "react";

const Person = ({ name, number, onDelete }) => (
  <>
    <p>
      {name} {number}
      <button onClick={onDelete}>delete</button>
    </p>
  </>
);

export default Person;
