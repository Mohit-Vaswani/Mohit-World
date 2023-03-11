import Link from "next/link";
import Image from "next/image";

// Images
import logo from "../public/assets/logo.svg";

export default function Header() {
  return (
    <header className="flex justify-center py-10">
      <nav className="text-center">
        <Link href="/" className="">
          <Image src={logo} alt={"logo"} width="450"/>
        </Link>
        <p className="text-base md:text-xl -mt-2 sm:-mt-6">
          Some cool stuff for boring people
        </p>
      </nav>
    </header>
  );
}
