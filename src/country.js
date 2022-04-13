import React from "react";

const Country = (props) => {
    return (
        <p key={props.id}>
            {props.name}
            <button onClick={props.click(props.id)}>Show Details</button>
        </p>
    );
};

export default Country;