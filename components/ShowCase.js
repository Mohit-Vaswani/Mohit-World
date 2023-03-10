import Link from "next/link";
import Image from "next/image";

// Images
import AGI from "../public/assets/AGI.png";
import ITMGOB from "../public/assets/ITMGOB.png";

// Components
import Layout from "./Layout";
import Header from "./Header";
import Footer from "./Footer";

export default function Showcase() {
  return (
    <Layout>
      <section className="bg-grid">
        <Header />
        <main className="h-auto flex flex-wrap gap-8 p-5 px-10 justify-center">
          <Link href="/IsThisMovieGoodOrBad" className="ease-in duration-300 hover:scale-105">
            <Image
              src={ITMGOB}
              alt="Is This Movie Good Or Bad"
              width="350"
              className="rounded-lg"
            />
          </Link>
          <Link href="/AGoodIdea" className="ease-in duration-300 hover:scale-105">
            <Image
              src={AGI}
              alt="A Good Idea"
              width="350"
              className="rounded-lg"
            />
          </Link>
        </main>
        <Footer />
      </section>
    </Layout>
  );
}
