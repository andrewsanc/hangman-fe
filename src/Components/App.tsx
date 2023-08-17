import { useState } from "react";
import words from "../wordList.json";

export default function App() {
  const [wordToGuess, setWordToGuess] = useState(
    () => words[Math.floor(Math.random() * words.length)]
  );

  return <div>{wordToGuess}</div>;
}
