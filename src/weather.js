import React, { useEffect, useState } from "react";
import axios from "axios";

import Aux from "./hoc/Auxiliary";

const Weather = (props) => {
  const [weatherObject, setWeatherObject] = useState({});

  const lat = props.lat;
  const lng = props.lng;
  const part = `alerts,daily,hourly,minutely`;
  const unit = `metric`;
  const lang = `en`;
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&exclude=${part}&appid=${process.env.OPENWEATHERMAP_API_KEY}&${unit}&${lang}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setWeatherObject({ ...response.data });
      })
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <Aux>
      <h2>
        Weather in <i>{weatherObject.timezone}</i>
      </h2>
      <h3>
        Temperature: <i>{weatherObject.current.temp}</i>&deg;C
      </h3>
      <img
        src={`http://openweathermap.org/img/wn/${weatherObject.current.weather[0].icon}@4x.png`}
        alt={`${weatherObject.current.weather[0].desrciption}`}
      />
      <h3>
        Wind: <i>{weatherObject.current.wind_speed}</i>m/s
      </h3>
    </Aux>
  );
};

export default Weather;
