import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
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
      const newPersons = persons.concat(newPerson);
      setPersons(newPersons);
      setFiltered(newPersons);
      setNewName("");
      setNewNumberPhone("");
    }
  };

  const [filtered, setFiltered] = useState([...persons]);
  const [filter, setFilter] = useState("");

  const handlerOnChangeInputFilter = (event) => {
    const newFilter = event.target.value;

    if (!newFilter?.trim()) {
      setFiltered([...persons]);
    } else {
      setFiltered(
        persons.filter(({ name }) =>
          name.toLocaleLowerCase().includes(newFilter.toLocaleLowerCase())
        )
      );
    }
    setFilter(newFilter);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter show with{" "}
        <input value={filter} onChange={handlerOnChangeInputFilter} />
      </div>
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
      {filtered.map(({ name, number }) => (
        <p key={name}>
          {name} {number}
        </p>
      ))}
    </div>
  );
};

export default App;
