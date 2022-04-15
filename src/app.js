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
    ).catch(err => console.log(err))
  }, [items]);

  const showDetails = (id) => {
    let country = items.countries.find(country => country.area === id);
    
    // console.log(
    //   country,
    //   `${String(new Date().getHours()).padStart(2,0)}:${String(new Date().getMinutes()).padStart(2,0)}:${String(new Date().getSeconds()).padStart(2,0)}`
    // );
    
    setItems((prevState, props) => {
      return ({
        ...prevState,
        showInfo: !prevState.showInfo,
        query: country.name.common
      });
    });
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
        click={showDetails}
      />
    </div>
  );
};

export default App;