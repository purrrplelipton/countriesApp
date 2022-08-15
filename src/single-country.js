import React from "react";

import Languages from "./languages";
import Weather from "./weather";

const SingleCountry = ({ country }) =>
  country.map((country) => (
    <div key={country.area}>
      <h1>{country.name.official}</h1>
      <h2>capital(s)</h2>
      <ul>
        {country.capital.map((cap) => (
          <li key={cap}>{cap}</li>
        ))}
      </ul>
      <p>
        <b>Area:</b> {country.area} Km<sup>2</sup>
      </p>
      <h3>Languages</h3>
      <ul>
        <Languages languages={country.languages} />
      </ul>
      <img
        width={"300"}
        height={"auto"}
        src={country.flags.png}
        alt={`flag of ${country.name.common}`}
      />
      <Weather
        capital={country.capital[0]}
        lat={country.latlng[0]}
        lon={country.latlng[1]}
      />
    </div>
  ));
export default SingleCountry;
