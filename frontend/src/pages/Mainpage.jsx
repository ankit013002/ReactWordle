import React, { useState } from "react";
import "./Mainpage.css";
import WordleGrid from "../components/WordleGrid";
import Keyboard from "../components/Keyboard";
import Header from "../components/Header";

const Mainpage = () => {
  const [word, setWord] = useState("APPLE");
  const [pressedLetter, setPressedLetter] = useState("");

  return (
    <div className="mainpage-container">
      <div className="mainpage-header-container">
        <Header />
      </div>
      <div className="mainpage-wordle-grid-container">
        <WordleGrid pressedLetter={pressedLetter} word={word} />
      </div>
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
