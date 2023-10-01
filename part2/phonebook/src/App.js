import React, { useState, useEffect } from "react";

import Filter from "./components/Filter";
import Notification from "./components/Notification";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import servicePersons from "./services/persons";

import "./index.css";

const App = () => {
  const initPerson = { name: "", number: "" };
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState(null);
  const [classNameCSS, setClassNameCSS] = useState("");

  const [person, setPerson] = useState(initPerson);

  useEffect(() => {
    servicePersons.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const setupNotification = (message, classNamecss) => {
    setMessage(message);
    setClassNameCSS(classNamecss);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  const handlerOnSubmit = (newPerson) => {
    const personFound = persons.find(
      ({ name }) =>
        newPerson.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (!personFound) {
      servicePersons.create(newPerson).then((returnedPerson) => {
        setupNotification(newPerson.name, "success");
        setPersons(persons.concat(returnedPerson));
      });
    } else {
      // eslint-disable-next-line no-restricted-globals
      const isConfirm = confirm(
        `${personFound.name} is already added to phonebook, replace the old number with a new one?`
      );
      if (isConfirm) {
        servicePersons
          .update(personFound.id, newPerson)
          .then((returnedPerson) => {
            setupNotification(returnedPerson.name, "success");
            setPersons(
              persons.map((p) =>
                p.id === returnedPerson.id ? returnedPerson : p
              )
            );
          })
          .catch((error) => {
            setupNotification(
              `The person '${newPerson.name}' was already deleted from server`,
              "alert"
            );
            setPersons(persons.filter((p) => p.id !== personFound.id));
          });
      }
    }

    setPerson(initPerson);
  };

  const handlerOnChangeFilter = (filter) => {
    if (filter.trim() !== "") setFilter(filter);
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
      <Notification message={message} className={classNameCSS} />

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
