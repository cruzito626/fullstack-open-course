import React from "react";

import Name from "./Name";
import Country from "./Country";

const Content = ({ countries, onShowCountry }) => {
  if (countries.length === 1) {
    const [country] = countries;
    return <Country country={country} />;
  } else if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else {
    return countries.map(({ name: { common, official } }) => {
      const handlerOnClick = () => {
        onShowCountry(official);
      };
      return <Name key={common} country={common} onClick={handlerOnClick} />;
    });
  }
};

export default Content;
