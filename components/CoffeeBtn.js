import Link from "next/link"
import Image from "next/image"
import Coffee from "../public/assets/coffee.svg"

export default function CoffeeBtn() {
  return (
    <Link href="https://www.buymeacoffee.com/Mohitvaswani" target="_blank">
        <button className="flex gap-3 items-center bg-yellow-400 py-1 px-3 rounded-md m-auto">
        <Image src={Coffee} alt="Buy me a coffee" width={30} height={30} />
        <p className="text-xl text-black">Buy me a coffee</p>
        </button>
    </Link>
  )
}
