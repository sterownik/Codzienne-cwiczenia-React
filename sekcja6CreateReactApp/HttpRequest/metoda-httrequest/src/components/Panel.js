import React from "react";

const Panel = (props) => {
  return (
    <>
      <h1>User name: {props.userOne}</h1>
      <h4>User address: {props.adress}</h4>
    </>
  );
};

export default Panel;
