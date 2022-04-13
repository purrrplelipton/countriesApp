import React from "react";

import Country from "./country";

const CountriesList = (props) => props.countries.map(
    country => {
        return (
            <Country
                key={country.area}
                name={country.name.official}
                click={props.click}
            />
        );
    }
);

export default CountriesList;