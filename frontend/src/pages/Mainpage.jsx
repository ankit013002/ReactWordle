import React, { useEffect, useState } from "react";
import "./Mainpage.css";
import WordleGrid from "../components/WordleGrid";
import Keyboard from "../components/Keyboard";
import Header from "../components/Header";

const Mainpage = ({ word }) => {
  const [pressedLetter, setPressedLetter] = useState("");
  const [victory, setVictory] = useState(false);
  const [loading, setLoading] = useState("");
  const [index, setIndex] = useState(1);

  useEffect(() => {
    if (word.length) return;
    const loadingString = "loading...";
    const interval = setInterval(() => {
      setIndex((i) => {
        console.log(loadingString.substring(0, i));
        setLoading(loadingString.substring(0, i));
        if (i >= loadingString.length) {
          return 1;
        } else {
          return i + 1;
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, [word]);

  return (
    <div className="mainpage-container">
      {victory && (
        <div
          style={{
            position: "absolute",
            background: "transparent",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              boxShadow: "0px 0px 10px 5px black",
              background: "#6ba968",
              width: "50%",
              height: "50%",
            }}
          >
            <div
              style={{
                fontSize: "5em",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              VICTORY
            </div>
          </div>
        </div>
      )}
      <div className="mainpage-header-container">
        <Header />
      </div>
      {word.length == 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "5em",
          }}
        >
          {loading}
        </div>
      ) : (
        <div className="mainpage-wordle-grid-container">
          <WordleGrid
            pressedLetter={pressedLetter}
            word={word}
            victory={victory}
            setVictory={setVictory}
          />
        </div>
      )}
      <div className="mainpage-keyboard-container">
        <Keyboard
          letterPressed={(letter) => {
            setPressedLetter(letter);
          }}
        />
      </div>
    </div>
  );
};

export default Mainpage;
