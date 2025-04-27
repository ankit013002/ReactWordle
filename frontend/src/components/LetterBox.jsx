import React, { useEffect, useRef, useState } from "react";
import "./LetterBox.css";

const LetterBox = ({
  word,
  letter,
  index,
  focusIndex,
  shiftIndex,
  allowSubmit,
  setSeeResult,
  shiftToNewRow,
  seeResult,
  setNumberCorrect,
  pressedLetter,
}) => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [fontColor, setFontColor] = useState("gray");
  const [letterInput, setLetterInput] = useState("");
  const letterBox = useRef();

  useEffect(() => {
    if ((index.column == focusIndex.column) & (index.row == focusIndex.row)) {
      letterBox.current.focus();

      if (pressedLetter) {
        if (pressedLetter.length == 1) {
          updateLetterBox(pressedLetter);
        } else {
          keyDown(pressedLetter);
        }
      }
    }
  }, [focusIndex, pressedLetter]);

  const updateLetterBox = (text) => {
    const char = text.slice(0, 1);
    setLetterInput(char);
    if (char) shiftIndex(1);
  };

  const keyDown = (key) => {
    if (key.toLowerCase() === "backspace") {
      if (letterInput) {
        setLetterInput("");
      } else if (index.column > 0 || index.row > 0) {
        shiftIndex(-1);
      }
    } else if ((key.toLowerCase() == "enter") & allowSubmit) {
      setSeeResult(true);
    }
  };

  useEffect(() => {
    if (focusIndex.row == index.row && seeResult == true) {
      if (letterInput === letter) {
        setBackgroundColor("#6ba968");
        setNumberCorrect((prevNumberCorrect) => {
          return prevNumberCorrect + 1;
        });
      } else if (word.indexOf(letterInput) != -1) {
        setBackgroundColor("#c8b45d");
      } else {
        setBackgroundColor("#787c81");
      }
      setFontColor("white");

      if (index.column === word.length - 1) {
        shiftToNewRow(); // After last box of the row is colored
      }

      setSeeResult(false);
    }
  }, [seeResult]);

  return (
    <div
      style={{
        backgroundColor: `${backgroundColor}`,
        aspectRatio: "1/1",
      }}
    >
      <input
        style={{ color: `${fontColor}` }}
        onKeyDown={(e) => keyDown(e.nativeEvent.key)}
        value={letterInput}
        onChange={(e) => updateLetterBox(e.target.value.toUpperCase())}
        ref={letterBox}
        className="letterbox-input"
      />
    </div>
  );
};

export default LetterBox;
