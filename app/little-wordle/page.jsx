import WordGame from "@components/Little-wordle/WordGame";
import Logo from "@components/Logo";


export default function LittleWordle() {
  return (
    <div className="container w-full h-screen flex justify-center pt-28">
      <Logo/>
      <WordGame/>
    </div>
  );
};
