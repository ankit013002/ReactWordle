import { useState, useEffect } from "react";
import "./App.css";
import Mainpage from "./pages/Mainpage";

function App() {
  const [word, setWord] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/get-random-word")
      .then((response) => response.json())
      .then((data) => {
        setWord(data.word.toUpperCase());
      })
      .catch((error) => console.log("ERROR: " + error));
  }, []);

  return <Mainpage word={word} />;
}

export default App;
