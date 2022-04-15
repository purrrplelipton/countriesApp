import React from "react";

const Languages = ({languages}) =>  Object.keys(languages).map(
    language => {
        return (
            <li key={language}>
                {languages[language]}
            </li>
        );
    }
);

export default Languages;