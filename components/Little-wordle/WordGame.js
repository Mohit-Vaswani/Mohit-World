"use client";

import React, { useState, useEffect } from "react";
import wordle from "../../public/assets/wordle.png";
import Image from "next/image";
import roundsData from "./wordleData";
// import ClueBox from "./ClueBox";

const WordGame = () => {
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [round, setRound] = useState(1);
  const [letters, setLetters] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [guessedWord, setGuessedWord] = useState("");
  const [isCorrectGuess, setIsCorrectGuess] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);

  useEffect(() => {
    const currentRound = roundsData[round];
    if (currentRound) {
      const shuffledLetters = shuffle(currentRound.letters);
      setLetters(shuffledLetters);
      setCurrentAnswer(currentRound.answer);
      setSelectedLetters([]);
      setGuessedWord("");
      setIsCorrectGuess(false);
    } else {
      setIsGameFinished(true);
    }
  }, [round]);

  useEffect(() => {
    if (guessedWord.toLowerCase() === currentAnswer.toLowerCase()) {
      setIsCorrectGuess(true);
    } else {
      setIsCorrectGuess(false);
    }
  }, [guessedWord, currentAnswer]);

  const shuffle = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleLetterClick = (letter) => {
    const remainingLetters = [...letters];
    const selectedLetterIndex = remainingLetters.indexOf(letter);
    if (selectedLetterIndex > -1) {
      remainingLetters.splice(selectedLetterIndex, 1);
    }

    setSelectedLetters((prevLetters) => [...prevLetters, letter]);
    setLetters(remainingLetters);
    setGuessedWord((prevWord) => prevWord + letter);
  };

  const handleClearClick = () => {
    setSelectedLetters([]);
    const currentRound = roundsData[round];
    if (currentRound) {
      const shuffledLetters = shuffle(currentRound.letters);
      setLetters(shuffledLetters);
    }
    setGuessedWord("");
  };

  const handleNextRoundClick = () => {
    if (isCorrectGuess) {
      if (round === Object.keys(roundsData).length) {
        setIsGameFinished(true);
      } else {
        setRound((prevRound) => prevRound + 1);
      }
    } else {
      alert(
        "Please guess the complete correct word before proceeding to the next round."
      );
    }
  };

  if (isGameFinished) {
    return <div>All wordle solved</div>;
  }

  return (
    <section className="font-mono flex items-center flex-col">
      <Image src={wordle} width={400} height={400} className="px-5" />
      <div className="flex flex-wrap gap-4 w-72 justify-center my-10">
        {letters.map((letter, index) => (
          <button
            key={index}
            className="bg-white font-bold py-3 px-5 rounded custom-shadow text-2xl"
            onClick={() => handleLetterClick(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="my-4 text-3xl">
        <input
          type="text"
          value={guessedWord}
          readOnly
          className="bg-transparent border-b-4 border-gray-500 w-40 text-center"
        />
      </div>
      {isCorrectGuess && (
        <p className="text-green-500 mt-4">
          Congratulations! You guessed it right!
        </p>
      )}
      <div className="flex gap-4">
        <button
          className="mt-4 bg-white font-bold py-2 px-4 rounded custom-shadow"
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button
          className="mt-4 bg-white font-bold py-2 px-4 rounded custom-shadow"
          onClick={handleNextRoundClick}
        >
          Next Round
        </button>
      </div>
      <div className="mt-4">
        <strong>Round:</strong> {round}
      </div>
    </section>
  );
};

export default WordGame;
