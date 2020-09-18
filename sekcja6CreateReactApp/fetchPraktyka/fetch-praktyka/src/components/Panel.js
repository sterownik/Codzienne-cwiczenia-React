import React from "react";
import "./Panel.css";

const Panel = (props) => {
  return (
    <>
      <div className="border">
        <img src={props.picture} alt={props.picture} />
        <h1>
          {props.title} {props.name}
        </h1>
        <p>{props.mail}</p>
      </div>
    </>
  );
};
export default Panel;
