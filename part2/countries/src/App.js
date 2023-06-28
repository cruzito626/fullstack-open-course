import React, { useState, useEffect } from "react";

import axios from "axios";

import Filter from "./components/Filter";
import Content from "./components/Content";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const [isOfficial, setIsOfficial] = useState(false);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handlerOnChangeFilter = (filter) => {
    setFilter(filter);
    setIsOfficial(false);
  };

  const handlerOnShowCountry = (filter) => {
    setFilter(filter);
    setIsOfficial(true);
  };

  const filteredCountries = !filter?.trim()
    ? countries
    : countries.filter(({ name }) => {
        const { common, official } = name;
        return (isOfficial ? official : common)
          ?.toLowerCase()
          ?.includes(filter.toLowerCase());
      });

  return (
    <div className="App">
      <Filter value={filter} onChange={handlerOnChangeFilter} />
      <Content
        countries={filteredCountries}
        onShowCountry={handlerOnShowCountry}
      />
    </div>
  );
};

export default App;
