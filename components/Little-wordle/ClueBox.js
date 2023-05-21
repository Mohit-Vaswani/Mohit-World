import { useState } from "react";
import roundsData from "./wordleData";

const Clue = ({ toggleClueVisibility, clues }) => {
  return (
    <main className="flex flex-wrap gap-3 w-72 common-box border-2 mt-2">
      {clues.map((clue, index) => (
        <div
          className="common-box border-2 w-full text-center text-xs cursor-pointer"
          key={index}
          onClick={() => toggleClueVisibility(index)}
        >
          {clue}
        </div>
      ))}
    </main>
  );
};

const ClueAnswer = ({ toggleClueVisibility, answers, selectedClueIndex }) => {
  return (
    <div className="flex flex-wrap text-center common-box mt-2 border-2 border-green-600 text-sm">
      <p>{answers[selectedClueIndex]}</p>
    </div>
  );
};

export default function ClueBox({ round }) {
  const [isDivVisible, setDivVisible] = useState(false);
  const [isClueVisible, setClueVisible] = useState(false);
  const [selectedClueIndex, setSelectedClueIndex] = useState(0);

  const toggleDivVisibility = () => {
    setDivVisible(!isDivVisible);
    setClueVisible(false);
  };

  const toggleClueVisibility = (index) => {
    setSelectedClueIndex(index);
    setClueVisible(true);
  };

  const getClueAnswer = (index) => {
    const currentRound = roundsData[round];
    if (currentRound) {
      switch (index) {
        case 0:
          return `The First Letter is "${currentRound.answer.charAt(0)}"`;
        case 1:
          return `The Last Letter is "${currentRound.answer.charAt(
            currentRound.answer.length - 1
          )}"`;
        default:
          return "More hints coming";
      }
    } else {
      return "";
    }
  };

  return (
    <div className="static lg:absolute top-32 flex flex-col right-0 lg:items-end mr-2 pb-10">
      <button className="common-box custom-shadow lg:float-right" onClick={toggleDivVisibility}>
        {isDivVisible ? "❌" : "Clue"}
      </button>
      {isDivVisible && (
        <>
          <Clue
            toggleClueVisibility={toggleClueVisibility}
            clues={[
              "What's the first letter",
              "What's the last letter?",
              "More hints coming"
            ]}
          />
        </>
      )}
      {isClueVisible && (
        <ClueAnswer
          toggleClueVisibility={() => setClueVisible(false)}
          answers={[
            getClueAnswer(0),
            getClueAnswer(1),
            getClueAnswer(2),
          ]}
          selectedClueIndex={selectedClueIndex}
        />
      )}
    </div>
  );
}
