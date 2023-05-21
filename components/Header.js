import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import Twitter from "@/public/twitter.svg"

export default function Header() {
  return (
    <header className="flex flex-col justify-center w-full">
      <nav className="h-16 w-full flex items-center justify-between px-4 sm:px-10 main-nav">
        <ul>
          <Logo/>
        </ul>
        <Link href="https://twitter.com/hii_mohit">
        <Image src={Twitter} alt="twiiter" width={200} height={200} className="w-6 h-6 sm:w-8 sm:h-8" />
        </Link>
      </nav>
      <div className="text-center">
        <h1 className="text-3xl sm:text-5xl mt-5 mb-4 sm:mb-8 font-semibold">Mohit World</h1>
        <p className="text-base md:text-xl -mt-2 sm:-mt-6">
          I do magic on the web 🪄
        </p>
      </div>
    </header>
  );
}
