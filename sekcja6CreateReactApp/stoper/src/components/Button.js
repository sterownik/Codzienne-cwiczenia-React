import React from "react";
// musi być import i export
const Button = (props) => {
  return (
    <button onClick={props.click}>{props.isGoing ? "Stop" : "Start"}</button>
  );
};

export default Button;
