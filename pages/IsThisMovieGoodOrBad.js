import AppHeader from "@/components/AppHeader";
import MovieContainer from "@/components/Is_This_Movie_G_O_B/MovieContainer";
import Layout from "@/components/Layout";

export default function IsThisMovieGoodOrBad() {
  return (
    <Layout title={"Is This Movie Good Or Bad"} description={"Find out if a movie is good or bad with this movie rating app. Search for your favorite movies and see their average rating and a brief overview."} keywords={"movie rating app, movie reviews, movie ratings, search movies, movie recommendations, movie suggestions, movie rating system, movie rating website, movie database, film ratings, neal.fun"} favicon={"/movie.ico"}>
      <main className="w-full h-screen flex flex-col bg-slate-100 text-slate-900">
      <AppHeader/>
      <MovieContainer/>
      </main>
    </Layout>
  );
}
