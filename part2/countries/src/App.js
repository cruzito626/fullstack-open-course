import React, { useState, useEffect } from "react";

import axios from "axios";

import Filter from "./components/Filter";
import Content from "./components/Content";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
      setFilteredCountries(response.data);
    });
  }, []);

  const handlerOnChangeFilter = (filter) => {
    setFilteredCountries(
      !filter?.trim()
        ? countries
        : countries.filter(({ name }) =>
            name.common?.toLowerCase()?.includes(filter)
          )
    );
  };

  const handlerOnShowCountry = (name) => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => {
        setFilteredCountries(response.data);
      });
  };

  return (
    <div className="App">
      <Filter onChange={handlerOnChangeFilter} />
      <Content
        countries={filteredCountries}
        onShowCountry={handlerOnShowCountry}
      />
    </div>
  );
};

export default App;
