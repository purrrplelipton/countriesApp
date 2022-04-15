import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import Aux from "./hoc/Auxiliary";

const Weather = (props) => {
    const [state, setState] = useState({});

    const capital = props.capital
    const lat = props.lat;
    const lng = props.lng;
    const key = "a2d2b024ab959da992a807ae03874d5d";
    const unit = "metric";
    const lang = "en";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}&units=${unit}&lang=${lang}`;

    useEffect(() => {
        axios
         .get(url)
         .then(response => {
             if(response.data) {
                 setState(state => (
                     state = response.data
                 ))
             }
         })
         .catch(err => console.log(err))
         return () => {
             setTimeout(() => {
                 console.log(state)
             }, 450000)
         };
    }, [state, url]);


    return (
        <Aux>
            <h2>Weather in <i>{state.name || capital}</i></h2>
            <h3>Temperature: <i>{state.main.temp}</i>&deg;C</h3>
            <img src={`http://openweathermap.org/img/wn/${state.weather[0].icon}@4x.png`} alt={`${state.weather[0].desrciption}`}/>
            <h3>Wind: <i>{state.wind.speed}</i>m/s</h3>
        </Aux>
        
    );
};

export default Weather;