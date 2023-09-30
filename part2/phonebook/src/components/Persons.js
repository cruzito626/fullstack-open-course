import React from "react";

import Person from "./Person";

const Persons = ({ persons, onDeletePerson }) => {
  return persons.map(({ id, name, number }) => (
    <Person
      key={id}
      name={name}
      number={number}
      onDelete={() => onDeletePerson({ id, name })}
    />
  ));
};

export default Persons;
