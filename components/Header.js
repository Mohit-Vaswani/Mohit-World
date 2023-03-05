import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center py-5">
      <nav className="text-center">
        <Link href="/" className="">
          <h1 className="text-6xl logo">Mohit.fun</h1>
        </Link>
      </nav>
    </header>
  );
}
