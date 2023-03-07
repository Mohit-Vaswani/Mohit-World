import { useState } from 'react';
import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import API_KEY from '../../config';
// import ReadSomeReviews from '../../pages/ReadSomeReviews';
import Link from 'next/link';

export default function MovieContainer() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
      const data = await res.json();
      const filteredData = data.results.filter(movie => movie.title.toLowerCase() === query.toLowerCase());
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
      return 'Bad';
    } else if (rating < 6) {
      return 'Average';
    } else if (rating < 8) {
      return 'Good';
    } else {
      return 'Amazing';
    }
  };

  return (
    <div id='movieContainer' className='w-full h-screen bg-slate-200 flex flex-col items-center px-10 pt-36'>
      <h1 className='text-3xl lg:text-5xl italic text-center'>Is This Movie <span className='bg-green-700 px-2 pr-3 text-white'>Good</span> or <span className='bg-red-500 px-2 pr-3 text-white'>Bad</span>?</h1>
      <div className='flex mt-10 w-full justify-center'>
        <input type="text" placeholder='Search your movie here...' className='border bg-transparent border-gray-800 w-9/12 sm:w-4/12 outline-none px-3' value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={handleSearch} className="border border-gray-800 p-3 px-5 hover:bg-green-700 hover:text-white">
          <FiSearch/>
        </button>
      </div>
      <main className='flex gap-8 p-8 flex-wrap w-full justify-center'>
        {isLoading && movies.length === 0 && <p>Loading...</p>}
        {searched && query && movies.length === 0 && !isLoading && <p>No Movie Available with this title 😥. Try another one 😉.</p>}

        {movies.map((movie) => (
          <div key={movie.id} className="flex h-auto bg-orange-300">
            {movie.poster_path && <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width={150} height={200} />}
            <div className='p-3 pt-10 relative'>
              <h2 className='text-lg font-semibold'>{movie.title}</h2>
              <p className='absolute top-0 right-0 bg-yellow-500 p-2'>{movie.vote_average}</p>
              <p>{judgeMovie(movie.vote_average)}</p>
            </div>
            {/* <Link href={`/IsThisMovieGoodOrBad/ReadSomeReviews?movieId=${movie.id}`}><p>Read Some Reviews</p></Link> */}

          </div>
        ))}
      </main>
    </div>
  );
}
