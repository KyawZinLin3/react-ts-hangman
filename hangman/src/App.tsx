import { useEffect, useState } from "react";
import words from "./wordList.json";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import WordKeyBoard from "./WordKeyBoard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessLetter, setGuessLatter] = useState<string[]>([]);

  const incorrectLetter = guessLetter.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  function addGuessLetter(letter: string) {
    if (guessLetter.includes(letter)) return;

    setGuessLatter((currentLetters) => [...currentLetters, letter]);
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.addEventListener("keypress", handler);
    };
  }, []);
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
        <HangmanDrawing numberOfGuesses={incorrectLetter.length} />
        <HangmanWord guessedLetters={guessLetter} wordToGuess={wordToGuess} />
        <div style={{ alignSelf: "stretch" }}>
          <WordKeyBoard />
        </div>
      </div>
    </>
  );
}

export default App;
