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
  numberCorrect,
  setNumberCorrect,
  pressedLetter,
  endGame,
  win,
}) => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [fontColor, setFontColor] = useState("gray");
  const [letterInput, setLetterInput] = useState("");
  const letterBox = useRef();

  const isFocused =
    focusIndex.row === index.row && focusIndex.column === index.column;

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

  useEffect(() => {
    if (win) {
      letterBox.current.readOnly = true;
    }
  }, [win]);

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
          if (
            index.column === word.length - 1 &&
            prevNumberCorrect != word.length - 1
          ) {
            shiftToNewRow();
          } else if (prevNumberCorrect == word.length - 1) {
            console.log("here");
            endGame();
          }
          console.log(prevNumberCorrect);
          return prevNumberCorrect + 1;
        });
      } else if (word.indexOf(letterInput) != -1) {
        setBackgroundColor("#c8b45d");
        index.column === word.length - 1 && shiftToNewRow();
      } else {
        setBackgroundColor("#787c81");
        index.column === word.length - 1 && shiftToNewRow();
      }
      setFontColor("white");

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
        onBlur={() => {
          if (isFocused) {
            setTimeout(() => letterBox.current.focus(), 0);
          }
        }}
        style={{ color: `${fontColor}` }}
        onKeyDown={(e) => !win && keyDown(e.nativeEvent.key)}
        value={letterInput}
        onChange={(e) => updateLetterBox(e.target.value.toUpperCase())}
        ref={letterBox}
        className="letterbox-input"
      />
    </div>
  );
};

export default LetterBox;
