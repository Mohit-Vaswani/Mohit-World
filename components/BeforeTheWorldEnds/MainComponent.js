import { useState, useEffect } from "react";
import Image from "next/image";
import title from "../../public/btwe-logo.svg";
import supabase from "@/config/supabase";

// components
import WishCard from "./WishCard";
import CreateWish from "./CreateWish";

function TwitterButton() {

  const shareOnTwitter = () => {
    const tweetText = "Check out this cool page!";
    const pageUrl = `${window.location.href}`;
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(tweetText)}`;
    window.open(twitterUrl);
  };

  return (
    <button onClick={shareOnTwitter} className="bg-blue-500 p-2 px-3 rounded-xl">
      Share on Twitter
    </button>
  );
}



export default function MainComponent() {
  const [fetchError, setFetchError] = useState(null);
  const [wishes, setWishes] = useState(null);
  const [showCreateWish, setShowCreateWish] = useState(false);
  const [buttonText, setButtonText] = useState("+");

  useEffect(() => {
    const fetchWishes = async () => {
      const { data, error } = await supabase.from("wishes").select("*");

      if (error) {
        setFetchError("Could not fetch data");
        setWishes(null);
        console.log(error);
      }
      if (data) {
        setWishes(data);
        setFetchError(null);
      }
    };

    fetchWishes();
  }, []);

  const toggleCreateWish = () => {
    setShowCreateWish(!showCreateWish);
    setButtonText(buttonText === "+" ? "Close Modal" : "+");
  };

  if (wishes === null) {
    return (
      <div className="flex justify-center items-center w-full h-screen bg-gray-900">
        <p className="text-white text-2xl">Loading... 😴</p>
      </div>
    );
  }

  return (
    <section className="w-full h-full bg-gray-900 flex flex-col gap-5 text-white pb-10">
      {showCreateWish && <CreateWish toggleCreateWish={toggleCreateWish} />}
      <header className="mt-20 sm:mt-12 px-4 flex flex-col justify-center items-center">
        <Image src={title.src} alt="title" width={900} height={500} priority style={{maxWidth: '110%'}}/>
        <p className="text-base md:text-xl text-center capitalize my-2 -mt-0 sm:-mt-4 md:-mt-8">
          Write the one{" "}
          <span className=" border-b-4 border-purple-500 border-dashed">
            wish
          </span>{" "}
          that you want to do before the world ends.
        </p>
        <p className="text-sm lg:text-lg absolute top-2 right-3 border-2 border-white px-2 sm:px-3 py-1 my-2 sm:my-0 cursor-pointer transition-all duration-300 hover:bg-gray-700" onClick={toggleCreateWish}>{buttonText}</p>
      </header>
      <main className="px-10 p-0 pb-20 w-full h-full">
        {fetchError && <p>{fetchError}</p>}
        {wishes && (
          <div className="wishes" key="wishes">
            <div className="wish-grid flex flex-wrap gap-6 justify-center mt-5">
              {wishes.map((wish) => (
                <WishCard key={wish.id} wish={wish} />
              ))}
            </div>
          </div>
        )}
      </main>
      <div className="flex justify-center items-center pt-10">
        <TwitterButton />
      </div>
    </section>
  );
}
