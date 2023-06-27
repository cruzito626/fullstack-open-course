import React, { useState, useEffect } from "react";

import axios from "axios";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const initPerson = { name: "", number: "" };
  const [persons, setPersons] = useState([]);
  const [filtered, setFiltered] = useState([]);


  const [person, setPerson] = useState(initPerson);

  useEffect(() => {
    axios
    .get("http://localhost:3001/persons").then((response) => {
      console.log()
      setPersons(response.data);
      setFiltered(response.data);
    });
  }, []);

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
