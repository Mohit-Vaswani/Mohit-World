import Link from "next/link";
import Image from "next/image";

// Images
import Money from "../public/assets/Money.png"

// Components
import Layout from "./Layout";
import Header from "./Header";
import Footer from "./Footer";
import TwitterButton from "./TwitterButton";

export default function Showcase() {
  return (
    <Layout>
      <section>
        <Header />
        <main className="h-full w-full flex flex-wrap gap-8 p-5 px-10 justify-center">
          <Link href="/WhatCanMoneyBuy" className="ease-in duration-300 hover:scale-105">
            <Image
              src={Money}
              alt="What Can Money Buy ?"
              width="350"
              className="rounded-lg"
            />
          </Link>
        </main>
        <Footer />
        <TwitterButton />
      </section>
    </Layout>
  );
}
