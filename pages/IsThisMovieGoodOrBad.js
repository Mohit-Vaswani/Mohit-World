import AppHeader from "@/components/AppHeader";
import MovieContainer from "@/components/Is_This_Movie_G_O_B/MovieContainer";
import Layout from "@/components/Layout";

export default function IsThisMovieGoodOrBad() {
  return (
    <Layout title={"Is This Movie Good Or Bad"} description={"Find amazing ideas for apps, websites, diy and many more."} keywords={"idea generator, idea tools, neal-fun, web-tools"} favicon={"/movie.ico"}>
      <main className="w-full h-screen flex flex-col bg-slate-100 text-slate-900">
      <AppHeader/>
      <MovieContainer/>
      </main>
    </Layout>
  );
}
