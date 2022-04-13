import React from "react";

import SingleCountry from "./single-country";
import CountriesList from "./countries-list";

const Filter = (props) => {
    const regex = new RegExp(props.query, "i");
    const countries = props.countries.filter(country =>
        country.name.common.match(regex) || country.name.official.match(regex)
    );

    if(countries.length > 1 && countries.length < 10) {
        return <CountriesList countries={countries} click={props.click}/>
    } else if(countries.length === 1) {
        return <SingleCountry country={countries}/>
    } else {
        return <p>Too many matches, Be more specific</p>
    }
};

export default Filter;