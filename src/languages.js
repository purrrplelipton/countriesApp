import React from "react";

const Languages = ({languages}) => Object.values(languages).map(
    (language) => <p>{language}</p>
);

export default Languages;