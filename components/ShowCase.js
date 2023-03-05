import Link from "next/link";
import Image from "next/image";

// Images
import AGI from "../public/assets/AGI.png";

// Components
import Layout from "./Layout";
import Header from "./Header";
import Footer from "./Footer";

export default function Showcase() {
  return (
    <Layout title={"Mohit Fun"}>
      <section className="bg-grid">
        <Header />
        <main className="h-auto flex flex-wrap gap-3 p-5 px-10 justify-left">
          <Link href="/AGoodIdea">
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
