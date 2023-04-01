import Link from "next/link";
import Image from "next/image";
import Logo from "../public/assets/AppHeader2.svg"
import BMC from "../public/assets/bmc-button.svg"

export default function CommonLogo() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-1 lg:gap-3 px-4 lg:px-24">
      <Link href="/">
        <Image src={Logo} className="mb-4" alt="Logo" width={350} height={350} />
      </Link>
      <Link href="https://www.buymeacoffee.com/Mohitvaswani">
        <Image src={BMC} className="mb-10" alt="Logo" width={200} height={200} />
      </Link>
    </div>
  )
}
