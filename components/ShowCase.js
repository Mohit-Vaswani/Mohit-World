import Link from "next/link";
import Image from "next/image";

// Images
import one from "../public/assets/one.png";
import two from "../public/assets/2.png";
import three from "../public/assets/3.png";

// Components
import Layout from "./Layout";
import Header from "./Header";
import Footer from "./Footer";

export default function Showcase() {
  return (
    <Layout title={"Mohit Fun"}>
      <section className="bg-grid">
        <Header />
        <main className="grid grid-cols-3 gap-3 p-5 justify-items-center">
          <Link href="/AGoodIdea">
            <Image
              src={one}
              alt="A Good Idea"
              width="350"
              className="rounded-lg"
            />
          </Link>
          <Link href="/AGoodIdea">
            <Image
              src={two}
              alt="A Good Idea"
              width="350"
              className="rounded-lg"
            />
          </Link>
          <Link href="/AGoodIdea">
            <Image
              src={three}
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
