import { useState } from "react";
import words from "./wordList.json";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import WordKeyBoard from "./WordKeyBoard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessLetter, setGuessLatter] = useState<string[]>([]);
  return (
    <>
      <div
        style={{
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "2rem", textAlign: "center" }}>Lose Win</div>
        <HangmanDrawing />
        <HangmanWord />
        <div style={{ alignSelf: "stretch" }}>
          <WordKeyBoard />
        </div>
      </div>
    </>
  );
}

export default App;
