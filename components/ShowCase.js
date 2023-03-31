import Link from "next/link";
import Image from "next/image";

// Images
import ITMGOB from "../public/assets/ITMGOB.png";
import Money from "../public/assets/Money.png"
import NHIE from "../public/assets/NHIE.png"

// Components
import Layout from "./Layout";
import Header from "./Header";
import Footer from "./Footer";
import TwitterButton from "./TwitterButton";

export default function Showcase() {
  return (
    <Layout>
      <section className="bg-grid">
        <Header />
        <main className="h-full flex flex-wrap gap-8 p-5 px-10 justify-center">
          <Link href="/Never-Have-I-Ever" className="ease-in duration-300 hover:scale-105">
            <Image
              src={NHIE}
              alt="Never Have I Ever Game"
              width="350"
              className="rounded-lg"
            />
          </Link>
          <Link href="/WhatCanMoneyBuy" className="ease-in duration-300 hover:scale-105">
            <Image
              src={Money}
              alt="What Can Money Buy ?"
              width="350"
              className="rounded-lg"
            />
          </Link>
          <Link href="/IsThisMovieGoodOrBad" className="ease-in duration-300 hover:scale-105">
            <Image
              src={ITMGOB}
              alt="Is This Movie Good Or Bad"
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
