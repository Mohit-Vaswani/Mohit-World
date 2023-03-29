import Link from "next/link";
import Image from "next/image";
import Logo from "../public/assets/AppHeader2.svg"

export default function CommonLogo() {
  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <a href="https://www.buymeacoffee.com/Mohitvaswani" className="border-2 px-3 py-2 mt-2 rounded hover:text-yellow-300 hover:border-yellow-300">Support</a>
      <Link href="/">
        <Image src={Logo} className="mb-10" alt="Logo" width={300} height={300} />
      </Link>
    </div>
  )
}
