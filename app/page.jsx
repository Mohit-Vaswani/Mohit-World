import Feed from "@components/Feed";
import Footer from "@components/Footer";
import Header from "@components/Header";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <Header/>
    <Feed />
    <Footer/>
  </section>
);

export default Home;