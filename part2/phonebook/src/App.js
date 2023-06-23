import React, { useState } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const initPerson = { name: "", number: "" };
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);

  const [person, setPerson] = useState(initPerson);

  const handlerOnSubmit = (newPerson) => {
    if (persons.some(({ name }) => name === newPerson.name.trim())) {
      alert(`${newPerson.name} is already added to phonebook`);
    } else {
      const newPersons = persons.concat(newPerson);
      setPersons(newPersons);
      setFiltered(newPersons);
      setPerson(initPerson);
    }
  };

  const [filtered, setFiltered] = useState([...persons]);

  const handlerOnChangeFilter = (filter) => {
    setFiltered(
      !filter?.trim()
        ? [...persons]
        : persons.filter(({ name }) =>
            name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
          )
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter onChange={handlerOnChangeFilter} />

      <h3>Add a new</h3>

      <PersonForm onSubmit={handlerOnSubmit} defaultValues={person} />

      <h3>Numbers</h3>

      <Persons persons={filtered} />
    </div>
  );
};

export default App;
