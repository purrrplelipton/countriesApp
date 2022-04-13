import React from "react";

import Languages from "./languages";
        
const SingleCountry = ({country}) =>  country.map(country =>
    (
        <div>
            <h1>{country.name.official}</h1>
            <h2>capital(s)</h2>
            {country.capital.map(
                cap => <p key={cap}>{cap}</p>
            )}
            <p>area: {country.area}</p>
            <h3>Languages</h3>
            <Languages key={country.area} languages={country.languages}/>
            <img
                width={'300'}
                height={'auto'}
                src={country.flags.png}
                alt={`flag of ${country.name.common}`}
            />
        </div>
    )
);
export default SingleCountry;