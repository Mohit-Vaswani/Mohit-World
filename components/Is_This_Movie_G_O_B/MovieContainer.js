import { useState } from "react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import API_KEY from "../../config";

export default function MovieContainer() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const toggleOverview = () => {
    setExpanded(!expanded);
  };

  const handleSearch = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
      );
      const data = await res.json();
      const filteredData = data.results.filter(
        (movie) => movie.title.toLowerCase() === query.toLowerCase()
      );
      setMovies(filteredData);
      setSearched(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const judgeMovie = (rating) => {
    if (rating < 4) {
      return "Bad 😣";
    } else if (rating < 6) {
      return "Average 🙄";
    } else if (rating < 8) {
      return "Good 😃";
    } else {
      return "Amazing 😮";
    }
  };

  return (
    <div
      id="movieContainer"
      className="w-full h-auto bg-slate-100 flex flex-col items-center px-10 pt-28"
    >
      <h1 className="text-3xl lg:text-5xl italic text-center">
        Is This Movie{" "}
        <span className="bg-green-700 px-2 pr-3 text-white">Good</span> or{" "}
        <span className="bg-red-500 px-2 pr-3 text-white">Bad</span>?
      </h1>
      <div className="flex mt-10 w-full justify-center">
        <input
          type="text"
          placeholder="Search your movie here..."
          className="border border-r-0 bg-transparent border-gray-800 bg-white w-9/12 sm:w-4/12 outline-none px-3 rounded-l-3xl"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="border border-l-0 border-gray-800 p-3 px-5 bg-white hover:bg-green-700 hover:text-white rounded-r-3xl"
        >
          <FiSearch />
        </button>
      </div>
      <main className="flex gap-8 p-8 flex-wrap w-full justify-center">
        {isLoading && movies.length === 0 && <p>Loading...</p>}
        {searched && query && movies.length === 0 && !isLoading && (
          <p>No Movie Available with this title 😥. Try another one 😉.</p>
        )}

        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex flex-col sm:flex-row h-auto bg-white p-3 sm:p-5 rounded-lg shadow-lg shadow-slate-300 movie-card"
          >
            {movie.poster_path && (
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={170}
                height={200}
                className="rounded-lg shadow-lg shadow-slate-800"
              />
            )}
            <div className="p-3 sm:pl-7 relative">
              <h2 className="text-xl text-neutral-700 font-semibold">
                {movie.title}
              </h2>
              <p className="absolute bottom-0 sm:top-0 sm:bottom-auto right-0 bg-yellow-500 rounded-3xl p-2 text-xs font-semibold text-white">
                {movie.vote_average}
              </p>
              {/* <p className="text-xl font-semibold py-2">{judgeMovie(movie.vote_average)}</p> */}
              {/* <p className="text-sm mt-1 movie-overview">{movie.overview}</p> */}
              <p
                className={`text-xl font-semibold py-2 ${judgeMovie(
                  movie.vote_average
                )}`}
              >
                {judgeMovie(movie.vote_average)}
              </p>
              <div
                className={`movie-overview ${
                  expanded ? "expanded" : ""
                } text-xs`}
              >
                <p>{movie.overview}</p>
              </div>
              <button onClick={toggleOverview}>
                ...{expanded ? "less" : "more"}
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
