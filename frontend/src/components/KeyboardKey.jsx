import React from "react";
import "./KeyboardKey.css";

const KeyboardKey = ({ letter }) => {
  return <div className="key-container">{letter.label}</div>;
};

export default KeyboardKey;
