import React, { useEffect, useState } from "react";
import "./WordleGrid.css";
import LetterBox from "./LetterBox";

const WordleGrid = ({ pressedLetter, word, victory, setVictory }) => {
  const [columns, setcolumns] = useState(0);
  const [chars, setChars] = useState([]);
  const [focusIndex, setFocusIndex] = useState({
    column: 0,
    row: 0,
  });
  const [canEnter, setCanEnter] = useState(false);
  const [seeResult, setSeeResult] = useState(false);
  const [numberCorrect, setNumberCorrect] = useState(0);
  const [win, setWin] = useState(false);

  const handleResultReport = (columnIndex, result) => {
    if (result === "correct") {
      setNumberCorrect((prev) => {
        const updated = prev + 1;
        console.log("updated: " + updated);
        console.log("length: " + word.length);
        if (updated == word.length - 1) {
          setVictory(() => {
            console.log("here");
            return true;
          });
        }
        return updated;
      });
    }

    if (columnIndex === word.length - 1) {
      setSeeResult(false);
      shiftIndexRow();
    }
  };

  useEffect(() => {
    console.log(word);
    setcolumns(word.length);
    setChars(word.split(""));
  }, []);

  const shiftIndex = (shift) => {
    setFocusIndex((prevFocusIndex) => {
      if (prevFocusIndex.column >= word.length - 1 && shift == 1) {
        setCanEnter(true);
        return prevFocusIndex;
      } else {
        setCanEnter(false);
        return { ...prevFocusIndex, column: prevFocusIndex.column + shift };
      }
    });
  };

  const shiftIndexRow = () => {
    setFocusIndex((prevFocusIndex) => {
      return { column: 0, row: prevFocusIndex.row + 1 };
    });
    setNumberCorrect(0);
  };

  const endGame = () => {
    setWin(true);
  };

  return (
    <div
      style={{
        width: "auto",
        background: "transparent",
        display: "grid",
        gridTemplateRows: `repeat(${columns + 1}, auto))`,
        gap: "0.5em",
        padding: "1em",
      }}
    >
      {Array.from(Array(columns + 1)).map((item, rowIndex) => {
        return (
          <div
            style={{
              display: "grid",
              width: "auto",
              height: "auto",
              gap: "0.5em",
              gridTemplateColumns: `repeat(${columns}, clamp(50px, 9vw , 100px))`,
            }}
            key={rowIndex}
          >
            {chars.map((item, columnIndex) => {
              return (
                <div
                  key={columnIndex}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <LetterBox
                    word={word}
                    letter={item}
                    index={{ column: columnIndex, row: rowIndex }}
                    focusIndex={focusIndex}
                    shiftIndex={(shift) => shiftIndex(shift)}
                    allowSubmit={canEnter}
                    setSeeResult={setSeeResult}
                    shiftToNewRow={shiftIndexRow}
                    seeResult={seeResult}
                    pressedLetter={pressedLetter}
                    endGame={endGame}
                    win={win}
                    reportResult={handleResultReport}
                    victory={victory}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default WordleGrid;
