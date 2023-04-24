import { useState } from "react";
import supabase from "@/config/supabase";

const blacklistedWords = ["fuck", "fingering", "lick", "suck", "bang", "sex", "kiss", "Shit", "poop", "Piss", "Dick", "Dick head", "ass", "asshole", "Bitch", "gay", "lesbian"]; // Add more words as needed

const containsBlacklistedWord = (text) => {
  const words = text.toLowerCase().split(/\W+/);
  return words.some((word) => blacklistedWords.includes(word));
};

const CreateWish = ({ onClose }) => {
  const [wish, setWish] = useState("");
  const [username, setUsername] = useState("");
  const [formError, setFormError] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!wish || !username) {
      setFormError("Please fill in all the fields correctly");
      return;
    }

    if (containsBlacklistedWord(wish) || containsBlacklistedWord(username)) {
      setFormError("⚠️ I Think you have written a bad word in your input, our bot will automatically delete it. Refresh the page and write again with good words.");
      return;
    }

    const { data, error } = await supabase
      .from("wishes")
      .insert([{ wish, username }]);

    if (error) {
      console.log(error);
      setFormError("Please fill in all the fields correctly.");
    }

    if (data) {
      console.log(data);
      setFormError(null);
      onClose();
      setFormSubmitted(true);
    }
  };

  return (
    <div className="absolute bg-purple-600 w-full h-full flex justify-center items-center bg-black-900">
      <div className="create-card bg-black w-10/12 lg:w-5/12 h-auto p-5 relative">
        <button
          className="text-sm lg:absolute top-3 right-3 text-white hover:text-gray-400 focus:outline-none"
          onClick={onClose}
        ></button>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="wish">Wish:</label>
          <textarea
            id="wish"
            className="bg-transparent border-2 border-white mb-4 w-full outline-none p-2"
            value={wish}
            onChange={(e) => setWish(e.target.value)}
          />
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className="bg-transparent border-2 border-white mb-10 w-full outline-none p-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            className="border-2 border-white py-1 w-32 m-auto transition-all duration-300 hover:bg-gray-700"
            onClick={() => {
              if (wish && username) {
                setFormSubmitted(true);
              } else {
                setFormError("Please fill in all the fields correctly");
              }
            }}
          >
            Create Wish
          </button>

          {formError && <p className="text-center pt-10">{formError}</p>}
          {formSubmitted && (
            <p className="text-center pt-10">
              Done 👍 ~ Refresh the page to see your Wish.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateWish;
