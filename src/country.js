import React from "react";

const Country = (props) => {
  return (
    <p key={props.id}>
      {props.name}
      <button
        style={{ marginLeft: "1rem" }}
        onClick={() => props.click(props.id)}
      >
        Show Details
      </button>
    </p>
  );
};

export default Country;
