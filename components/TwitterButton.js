import { BsTwitter } from "react-icons/bs";

export default function TwitterButton() {
  const twitterHandle = "hii_mohit";
  const twitterUrl = `https://twitter.com/${twitterHandle}`;

  function handleButtonClick() {
    window.open(twitterUrl);
  }
  return (
    <div className="flex justify-center items-center">
      <button onClick={handleButtonClick} className="flex gap-2 items-center border-2 border-white rounded p-2 text-center static sm:absolute bottom-0 right-0 m-5 hover:bg-blue-500">
        <BsTwitter />
        <p>Twitter</p>
      </button>
    </div>
  );
}
