import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ]);
  const [newNumberPhone, setNewNumberPhone] = useState("");
  const [newName, setNewName] = useState("");

  const handlerOnChangeInputName = (event) => {
    setNewName(event.target.value);
  };

  const handlerOnChangeInputNumber = (event) => {
    setNewNumberPhone(event.target.value);
  };

  const handlerOnSubmit = (event) => {
    event.preventDefault();

    if (persons.some(({ name }) => name === newName.trim())) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const newPerson = {
        name: newName,
        number: newNumberPhone,
      };
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumberPhone("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handlerOnSubmit}>
        <div>
          name: <input value={newName} onChange={handlerOnChangeInputName} />
          <div>
            number:{" "}
            <input
              value={newNumberPhone}
              onChange={handlerOnChangeInputNumber}
            />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(({ name, number }) => (
        <p key={name}>
          {name} {number}
        </p>
      ))}
    </div>
  );
};

export default App;
