import Image from "next/image"
import { useState } from "react"
import will from "../../public/assets/GTC/WS.jpg"
import drake from "../../public/assets/GTC/drake.png"
import jc from "../../public/assets/GTC/JC.jpg"
import ch from "../../public/assets/GTC/CH.jpg"
import mbb from "../../public/assets/GTC/mbb.jpg"

const celebs = [
  {
    id: 1,
    name: "will smith" || "Will Smith",
    image: will,
  },
  {
    id: 2,
    name: "Drake",
    image: drake,
  },
  {
    id: 3,
    name: "Jackie Chan",
    image: jc,
  },
  {
    id: 4,
    name: "Chris Hemsworth",
    image: ch,
  },
  {
    id: 5,
    name: "Millie Bobby Brown",
    image: mbb,
  },
]


const LevelCounter = () => {
  return (
    <div className="absolute top-16 right-0 w-24 h-10 flex justify-center items-center bg-gray-700">
      <p className="text-teal-500 text-xl">Level 1</p>
    </div>
  );
};

const GuessImage = (props) => {
  function preventSaveImage(event) {
    event.preventDefault();
  }

  function preventOpenImage(event) {
    event.preventDefault();
  }
  return (
    <div className="border-8 border-teal-600 w-auto">
      <Image
        src={props.image}
        width={300}
        height={300}
        className="blurEffect1"
        onContextMenu={preventSaveImage}
        onClick={preventOpenImage}
      />
    </div>
  );
};

const GuessText = (props) => {
  const [inputText, setInputText] = useState("");
  const [answer, setAnswer] = useState("");

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function handleCheckAnswer() {
    if (inputText.trim().toLowerCase() === inputText.name.toLowerCase() === props.correctAnswer) {
      setAnswer("Right Answer");
    } else {
      setAnswer("Wrong Answer");
    }
  }

  return (
    <div className="w-auto flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <input
          type="text"
          className="font-sans border-2 border-teal-600 w-80 p-2 outline-none hover:bg-gray-100 rounded-md"
          placeholder="Guess This Celeb..."
          value={inputText}
          onChange={handleInputChange}
        />
        <button
          className="bg-teal-600 text-white text-lg px-10 py-2 w-80 hover:bg-teal-700 rounded-md"
          onClick={handleCheckAnswer}
        >
          Check
        </button>
        {answer && <p className="text-2xl">{answer}</p>}
      </div>
      <h2 className="text-2xl text-center">Round 1 / 5</h2>
    </div>
  );
};

export default function GuessPage() {
  return (
    <section className="GuessPage w-full h-screen bg-white">
      <header className="pt-24 relative">
        <h1 className="text-2xl md:text-5xl text-center text-teal-600">
          Guess This Celebrity
        </h1>
        <LevelCounter />
      </header>
      <main className="w-full text-teal-600 flex justify-center gap-8 mt-12">
        <GuessImage image="/assets/GTC/WS.jpg" />
        <GuessText correctAnswer="Will Smith" />
      </main>
    </section>
  );
}
