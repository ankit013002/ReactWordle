import React, { useState } from "react";
import "./Keyboard.css";
import LetterBox from "./LetterBox";
import KeyboardKey from "./KeyboardKey";
import { FaBackspace } from "react-icons/fa";
import { IoMdReturnRight } from "react-icons/io";

const Keyboard = () => {
  const [firstRow, setFirstRow] = useState([
    { label: "Q" },
    { label: "W" },
    { label: "E" },
    { label: "R" },
    { label: "T" },
    { label: "Y" },
    { label: "U" },
    { label: "I" },
    { label: "O" },
    { label: "P" },
  ]);

  const [secondRow, setSecondRow] = useState([
    { label: "A" },
    { label: "S" },
    { label: "D" },
    { label: "F" },
    { label: "G" },
    { label: "H" },
    { label: "J" },
    { label: "K" },
    { label: "L" },
  ]);

  const [thirdRow, setThirdRow] = useState([
    {
      label: (
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
    },
    { label: "Z" },
    { label: "X" },
    { label: "C" },
    { label: "V" },
    { label: "B" },
    { label: "N" },
    { label: "M" },
    { label: <FaBackspace style={{ width: "2em" }} /> },
  ]);

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
          <KeyboardKey key={index} letter={letter} />
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
          <KeyboardKey key={index} letter={letter} />
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
          <KeyboardKey key={index} letter={letter} />
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
