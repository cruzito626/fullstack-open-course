import React, { useState, useEffect } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import servicePersons from "./services/persons";

const App = () => {
  const initPerson = { name: "", number: "" };
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState("");

  const [person, setPerson] = useState(initPerson);

  useEffect(() => {
    servicePersons.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handlerOnSubmit = (newPerson) => {
    if (persons.some(({ name }) => name === newPerson.name.trim())) {
      alert(`${newPerson.name} is already added to phonebook`);
    } else {
      const newPersons = persons.concat(newPerson);
      setPersons(newPersons);
      setPerson(initPerson);
    }
  };

  const handlerOnChangeFilter = (filter) => {
    if (filter.trim() === "") setFilter(filter);
  };

  const handlerOnDeletePerson = ({ id, name }) => {
    // eslint-disable-next-line no-restricted-globals
    const isConfirm = confirm(`Delete ${name}`);
    if (isConfirm) {
      servicePersons.remove(id).then(() => {
        setPersons(persons.filter(({ id: idPerson }) => idPerson !== id));
      });
    }
  };

  const filteredPersons =
    filter.trim() === ""
      ? persons
      : persons.filter(({ name }) =>
          name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        );

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter onChange={handlerOnChangeFilter} />

      <h3>Add a new</h3>

      <PersonForm onSubmit={handlerOnSubmit} defaultValues={person} />

      <h3>Numbers</h3>

      <Persons
        persons={filteredPersons}
        onDeletePerson={handlerOnDeletePerson}
      />
    </div>
  );
};

export default App;
