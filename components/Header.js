import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center py-10">
      <nav className="text-center">
        <Link href="/" className="">
          <h1 className="text-3xl md:text-7xl logo">Mohit.fun</h1>
        </Link>
        <p className="text-base md:text-xl mt-2">Some cool stuff for boring people</p>
      </nav>
    </header>
  );
}
