import React from "react";
import "./KeyboardKey.css";

const KeyboardKey = ({ pressed, letter }) => {
  return (
    <div
      className="key-container"
      onClick={() => {
        pressed(letter.value);
      }}
    >
      {letter.display}
    </div>
  );
};

export default KeyboardKey;
