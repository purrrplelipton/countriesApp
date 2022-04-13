import {useEffect, useState} from "react";
import axios from "axios";

import Filter from "./filter";

const App = () => {
  const [items, setItems] = useState({
    countries: [],
    query: "",
    showInfo: false
  });

  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      setItems((prevState, props) => {
        return ({
          ...prevState,
          countries: response.data
        });
      })}
    )
  }, []);

  const showInfo = (area) => {
    
  };

  const setQuery = (event) => {
    return (
      setItems((prevState, props) => {
        return ({
          ...prevState,
          query: event.target.value
        });
      })
    );
  };

  return (
    <div>
      <input
        value={items.query}
        onChange={setQuery}
        placeholder='find countries...'
      />
      <Filter
        query={items.query}
        countries={items.countries}
        click={showInfo}
      />
    </div>
  );
};

export default App;