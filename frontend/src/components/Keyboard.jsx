import React, { useState } from "react";
import "./Keyboard.css";
import LetterBox from "./LetterBox";
import KeyboardKey from "./KeyboardKey";
import { FaBackspace } from "react-icons/fa";
import { IoMdReturnRight } from "react-icons/io";

const Keyboard = ({ letterPressed }) => {
  const [firstRow, setFirstRow] = useState([
    { value: "Q", display: "Q", type: "letter" },
    { value: "W", display: "W", type: "letter" },
    { value: "E", display: "E", type: "letter" },
    { value: "R", display: "R", type: "letter" },
    { value: "T", display: "T", type: "letter" },
    { value: "Y", display: "Y", type: "letter" },
    { value: "U", display: "U", type: "letter" },
    { value: "I", display: "I", type: "letter" },
    { value: "O", display: "O", type: "letter" },
    { value: "P", display: "P", type: "letter" },
  ]);

  const [secondRow, setSecondRow] = useState([
    { value: "A", display: "A", type: "letter" },
    { value: "S", display: "S", type: "letter" },
    { value: "D", display: "D", type: "letter" },
    { value: "F", display: "F", type: "letter" },
    { value: "G", display: "G", type: "letter" },
    { value: "H", display: "H", type: "letter" },
    { value: "J", display: "J", type: "letter" },
    { value: "K", display: "K", type: "letter" },
    { value: "L", display: "L", type: "letter" },
  ]);

  const [thirdRow, setThirdRow] = useState([
    {
      value: "ENTER",
      display: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            ENTER
          </div>
          <IoMdReturnRight style={{ width: "2em" }} />
        </div>
      ),
      type: "enter",
    },
    { value: "Z", display: "Z", type: "letter" },
    { value: "X", display: "X", type: "letter" },
    { value: "C", display: "C", type: "letter" },
    { value: "V", display: "V", type: "letter" },
    { value: "B", display: "B", type: "letter" },
    { value: "N", display: "N", type: "letter" },
    { value: "M", display: "M", type: "letter" },
    {
      value: "BACKSPACE",
      display: <FaBackspace style={{ width: "2em" }} />,
      type: "backspace",
    },
  ]);

  const handlePressedKey = (key) => {
    letterPressed(key);
    setTimeout(() => letterPressed(""), 0);
  };

  return (
    <div className="keyboard-container">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${firstRow.length}, 1fr)`,
          gap: "0.5em",
          textAlign: "center",
        }}
      >
        {firstRow.map((letter, index) => (
          <KeyboardKey
            pressed={(key) => handlePressedKey(key)}
            key={index}
            letter={letter}
          />
        ))}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${secondRow.length}, 1fr)`,
          gap: "0.5em",
          textAlign: "center",
        }}
      >
        {secondRow.map((letter, index) => (
          <KeyboardKey
            pressed={(key) => handlePressedKey(key)}
            key={index}
            letter={letter}
          />
        ))}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${thirdRow.length}, 1fr)`,
          gap: "0.5em",
          textAlign: "center",
        }}
      >
        {thirdRow.map((letter, index) => (
          <KeyboardKey
            pressed={(key) => handlePressedKey(key)}
            key={index}
            letter={letter}
          />
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
