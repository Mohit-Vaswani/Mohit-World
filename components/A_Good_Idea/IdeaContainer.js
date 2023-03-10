import { useState, useEffect } from "react";
import { TwitterShareButton } from "react-share";
import data from "../A_Good_Idea/data";

export default function IdeaContainer() {
  const [currentIdeaIndex, setCurrentIdeaIndex] = useState(null);
  const [isSpacebarPressed, setIsSpacebarPressed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Space") {
        setIsSpacebarPressed(true);
        setCurrentIdeaIndex(Math.floor(Math.random() * data.length));
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIdeaIndex, isSpacebarPressed]);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 1000);
      if (window.innerWidth < 1000) {
        setCurrentIdeaIndex(Math.floor(Math.random() * data.length));
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleClick() {
    setCurrentIdeaIndex(Math.floor(Math.random() * data.length));
  }

  const currentIdea = data[currentIdeaIndex]?.idea;
  const websiteUrl = "https://mohitfun.fun/AGoodIdea";
  const tweetText = `I got a good idea: "${currentIdea}" cc: `;
  const encodedTweetText = encodeURIComponent(tweetText);

  return (
    <section id="AGoodIdea" className="mt-16 md:mt-24 px-0 md:px-10 lg:px-20">
      <div
        id="good_idea"
        className="w-full h-auto px-10 py-5 bg-slate-200 text-center"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-5xl">A Good Idea💡</h2>
        <p className="text-sm md:text-base lg:text-xl capitalize mt-2">
          Get Unique Ideas related to Apps, Websites, Business, DIY and many
          more in just <span className="underline">one click</span>.
        </p>
      </div>
      <div className="w-full h-auto flex flex-col justify-center items-center gap-5 pt-10 md:pt-5 p-5 md:p-10 bg-slate-200  mt-0 md:mt-5">
        <h2
          className={`text-base md:text-xl lg:text-3xl text-center px-6 md:px-20 capitalize text-sky-600`}
        >
          {isMobile
            ? currentIdea
            : isSpacebarPressed
            ? currentIdea
            : "Click Spacebar to get a new Idea."}
        </h2>
        {isMobile && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handleClick}
          >
            New Idea
          </button>
        )}
      </div>
      {currentIdea && (
        <div className="mt-4">
          <TwitterShareButton
            url={websiteUrl}
            title={encodedTweetText}
            hashtags={["goodidea"]}
            className="absolute right-0 bottom-0 m-6 underline"
          >
            Share this idea on Twitter
          </TwitterShareButton>
        </div>
      )}
    </section>
  );
}
