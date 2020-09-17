import React from "react";
import "./Word.css";
const Word = (props) => {
  return (
    <>
      <h1>
        {" "}
        <strong>{props.number + 1}. Słowo</strong>
      </h1>
      <h1>PL: {props.pl}</h1>
      <h1>EN: {props.en}</h1>
    </>
  );
};

export default Word;
