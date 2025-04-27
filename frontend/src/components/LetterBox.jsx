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
}) => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [fontColor, setFontColor] = useState("gray");
  const [letterInput, setLetterInput] = useState("");
  const letterBox = useRef();

  useEffect(() => {
    if ((index.column == focusIndex.column) & (index.row == focusIndex.row))
      letterBox.current.focus();
  }, [focusIndex]);

  const updateLetterBox = (e) => {
    const char = e.target.value.slice(0, 1);
    setLetterInput(char);
    if (char) shiftIndex(1);
  };

  const keyDown = (e) => {
    if (e.nativeEvent.key === "Backspace") {
      if (letterInput) {
        setLetterInput("");
      } else if (index.column > 0 || index.row > 0) {
        shiftIndex(-1);
      }
    } else if ((e.nativeEvent.key == "Enter") & allowSubmit) {
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
        onKeyDown={(e) => keyDown(e)}
        value={letterInput}
        onChange={(e) => updateLetterBox(e)}
        ref={letterBox}
        className="letterbox-input"
      />
    </div>
  );
};

export default LetterBox;
