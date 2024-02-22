import React from "react";

const word = "test";
function HangmanWord() {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {word.split("").map((lett, index) => (
        <span style={{ borderBottom: ".1em solid black" }}>{lett}</span>
      ))}
    </div>
  );
}

export default HangmanWord;
