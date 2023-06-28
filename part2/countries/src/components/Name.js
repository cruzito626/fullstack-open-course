import React from "react";

const Name = ({ country, onClick }) => {
  return (
    <div>
      {country} <button onClick={onClick}>show</button>
    </div>
  );
};

export default Name;
