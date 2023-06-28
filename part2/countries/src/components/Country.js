import React from "react";

const Country = ({ country }) => {
  const {
    name: { common },
    capital,
    population,
    languages,
    flags: { png, alt },
  } = country;
  return (
    <div>
      <h1>{common}</h1>
      <p>capital {capital?.join(" ")}</p>
      <p>populaton {population}</p>
      <ul>
        {Object.entries(languages).map(([key, value]) => (
          <li key={key}>{value}</li>
        ))}
      </ul>
      <img src={png} alt={alt} />
    </div>
  );
};

export default Country;
