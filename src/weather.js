import React, { useEffect, useState } from "react";
import axios from "axios";

import OPENWEATHERMAP_API_KEY from "./OPENWEATHERMAP_API_KEY";

import Aux from "./hoc/Auxiliary";

const Weather = (props) => {
  const [name, setName] = useState("");
  const [temp, setTemp] = useState("");
  const [icon, setIcon] = useState("");
  const [description, setDescription] = useState("");
  const [windSpeed, setWindSpeed] = useState("");

  const lat = props.lat;
  const lon = props.lon;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHERMAP_API_KEY}&units=metric&lang=en`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setName(res.data.name);
        setTemp(res.data.main.temp);
        setIcon(res.data.weather[0].icon);
        setDescription(res.data.weather[0].description);
        setWindSpeed(res.data.wind.speed);
      })
      .catch((err) => console.log("couldn't fetch data", err.message));
  });

  return (
    <Aux>
      <h2>
        Weather in <i>{name}</i>
      </h2>
      <h3>
        Temperature: <i>{temp}</i>&deg;C
      </h3>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
        alt={description}
      />
      <h3>
        Wind: <i>{windSpeed}</i>m/s
      </h3>
    </Aux>
  );
};

export default Weather;
