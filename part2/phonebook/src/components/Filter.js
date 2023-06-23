import React, { useState } from "react";
import Input from "./Input";

const Filter = ({ onChange, ...rest }) => {
  const [filter, setFilter] = useState("");
  const handlerOnChangeFilter = (event) => {
    const newFilter = event.target.value;
    onChange(newFilter);
    setFilter(newFilter);
  };
  return (
    <Input
      name={"filter show with"}
      value={filter}
      onChange={handlerOnChangeFilter}
      {...rest}
    />
  );
};

export default Filter;
