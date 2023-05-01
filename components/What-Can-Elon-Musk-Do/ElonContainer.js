import Image from "next/image"
import { useState, useEffect } from "react"
import { ElonData } from "./elonData"
import { BsArrowDown } from "react-icons/bs"
import ElonFace from "../../public/elon/elon.png"
import Elonmeme from "../../public/elon/elonsmile.png"
import CoffeeBtn from "../CoffeeBtn"

const Header = () => {
  const [shouldShake, setShouldShake] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShouldShake(true)
      } else {
        setShouldShake(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="flex flex-col items-center w-full h-screen justify-center gap-6 py-8">
      <div className="flex items-center">
        <h1 className="px-4 sm:px-0 text-2xl sm:text-4xl lg:text-5xl font-semibold text-center">
          What Can Elon Musk Do ?
        </h1>
      </div>
      <p className="px-4 sm:px-10 lg:px-0 text-xl sm:text-2xl text-center">
        - Explore the wild and crazy possibilities of Elon Musk's{" "}
        <span className="border-b-2 border-cyan-500 border-dashed">
          $174
        </span>{" "}
        billion fortune.
      </p>
      <Image
        src={Elonmeme}
        alt="Elon"
        width={120}
        height={120}
        className={`shadow-filter w-24 sm:w-auto ${
          shouldShake ? "shake-horizontal" : ""
        }`}
      />
      <ul className="flex items-center gap-2 text-xl sm:text-2xl">
        <BsArrowDown />
        <h3>Scroll Down</h3>
        <BsArrowDown />
      </ul>
    </header>
  )
}

const List = () => {
  return (
    <main className="w-full h-full">
      {ElonData.map((elon) => {
        return (
          <article
            key={elon.id}
            className="w-full flex flex-col gap-8 justify-center text-center py-10"
          >
            <ul className="flex items-center gap-6 justify-center">
              <hr className="w-3/12 border-t-2 border-cyan-400" />
              <h3 className="text-2xl font-semibold text-cyan-400">
                {elon.id}
              </h3>
              <hr className="w-3/12 border-t-2 border-cyan-400" />
            </ul>
            <h2 className="text-2xl text-center px-4 sm:px-48 lg:px-72">{elon.text}</h2>
            <div
              className={`flex ${elon.flex} px-6 sm:px-0 items-center justify-center gap-${
                elon.gap
              }`}
            >
              {elon.image && (
                <Image
                  src={elon.image}
                  alt={elon.altdata}
                  width={elon.customWidth}
                  height={elon.customHeight}
                />
              )}
              {elon.image2 && (
                <Image
                  src={elon.image2}
                  alt={elon.altdata}
                  width={elon.customWidth}
                  height={elon.customHeight}
                />
              )}
            </div>
          </article>
        )
      })}
    </main>
  )
}

export default function ElonContainer() {
    return (
        <section className="w-full h-full bg-black text-white pb-20">
            <Header />
            <ul className="sticky top-56 left-0">
            <div className="sticky left-28 hidden sm:flex" id="triangle"></div>
            <Image src={ElonFace} alt="Elon Musk" width={100} height={100} className="sticky left-0 hidden sm:flex"/>
            </ul>
            <List />
            <CoffeeBtn/>
        </section>
    )
}
