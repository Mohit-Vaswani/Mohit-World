import Link from "next/link";
// import { BsArrowLeftSquare } from "react-icons/bs";
import Image from "next/image";
import HeaderLogo from "../public/assets/AppHeader.svg";
export default function AppHeader() {
  return (
    <nav className="border-b border-gray-600 md:border-none w-full h-16 bg-slate-200 fixed z-50 md:absolute md:top-0">
      <div className="fixed md:absolute top-0 left-0 m-4">
        <Link href="/">
          <Image src={HeaderLogo} alt="logo" className="w-72 -m-4" />
        </Link>
      </div>
    </nav>
  );
}
