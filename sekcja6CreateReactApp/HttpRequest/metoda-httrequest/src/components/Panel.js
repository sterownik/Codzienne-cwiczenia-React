import React from "react";
import "./style.sass";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const Panel = (props) => {
  return (
    <>
      <h1>User name: {props.userOne}</h1>
      <h4 className="text-warning">User address: {props.adress}</h4>
      <div className="red">asas</div>
      {/* klasa red ze stylów sass */}
    </>
  );
};

export default Panel;
