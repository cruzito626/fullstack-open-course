import React, { useState } from "react";

import Input from "./Input";

const Person = ({ onSubmit, defaultValues }) => {
  const { name, number } = defaultValues;
  const [newName, setNewName] = useState(name ?? "");
  const [newNumber, setNewNumber] = useState(number ?? "");

  const handlerOnChangeInputName = (event) => {
    setNewName(event.target.value);
  };

  const handlerOnChangeInputNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    onSubmit({ name: newName, number: newNumber });
  };

  return (
    <form onSubmit={onSubmitForm}>
      <Input
        name={"name:"}
        value={newName}
        onChange={handlerOnChangeInputName}
      />
      <Input
        name={"number:"}
        value={newNumber}
        onChange={handlerOnChangeInputNumber}
      />
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Person;
