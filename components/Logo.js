import Link from "next/link"
import mohitlogo from "../public/logo.svg"
import Image from "next/image"

export default function Logo() {
  return (
    <Link href="/">
    <ul className="absolute top-2 left-5">
          <div className="logo flex items-center">
            <p className="text-lg sm:text-2xl -mt-1 sm:py-3">🌍</p>
            <Image src={mohitlogo} alt="logo" width={200} height={200} className="-ml-2 pb-3 w-36 sm:w-44"/>
          </div>
        </ul>
    </Link>
  )
}
