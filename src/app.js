import { useEffect, useState } from "react";
import axios from "axios";

import Filter from "./filter";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [showInfo, setShowInfo] = useState(false);

  const restCountriesUrl = `https://restcountries.com/v3.1/all`;

  useEffect(() => {
    axios
      .get(restCountriesUrl)
      .then((res) => {
        if (res.data) return setCountries(res.data);
        console.log("couldn't fetch data");
      })
      .catch((err) => console.log("couldn't fetch data", err.message));
  }, []);

  const showDetails = (id) => {
    let country = countries.find((country) => country.area === id);
    setShowInfo(!showInfo);
    setQuery(country.name.official);
  };

  const setQueryChange = (event) => setQuery(event.target.value);

  return (
    <div>
      <input
        value={query}
        onChange={setQueryChange}
        placeholder="find countries..."
      />
      <Filter query={query} countries={countries} click={showDetails} />
    </div>
  );
};

export default App;
