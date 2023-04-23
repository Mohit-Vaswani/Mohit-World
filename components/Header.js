import Link from "next/link";
import Image from "next/image";
import mohitlogo from "../public/logo.svg"
import Twitter from "@/public/twitter.svg"

// Images
import logo from "../public/assets/logo.svg";

export default function Header() {
  return (
    <header className="flex flex-col justify-center">
      <nav className="h-16 w-full flex items-center justify-between px-10 main-nav">
        <ul>
          <div className="logo flex items-center">
            <p className="text-2xl py-3">🌍</p>
            <Image src={mohitlogo} alt="logo" className="-ml-2 pb-3 w-44"/>
          </div>
        </ul>
        <Link href="https://twitter.com/hii_mohit">
        <Image src={Twitter} alt="twiiter" className="w-8 h-8" />
        </Link>
      </nav>
      <div className="text-center">
        <h1 className="text-5xl mt-5 mb-8 font-semibold">Mohit World</h1>
        <p className="text-base md:text-xl -mt-2 sm:-mt-6">
          I do magic on the web 🪄
        </p>
      </div>
    </header>
  );
}
