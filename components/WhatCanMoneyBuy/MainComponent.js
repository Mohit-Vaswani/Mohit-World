import Image from "next/image"
import moneyData from "./moneyData"
import Link from "next/link";

export default function MainComponent() {
  return (
    <>
      <header className="text-center my-10 mb-0">
        <h1 className="text-2xl sm:text-3xl md:text-5xl">What Can Money Buy?</h1>
        <p className="text-base md:text-xl mt-2 px-4 sm:px-10">Money can't buy happiness. Those who say this are bloody losers who have no money.</p>
      </header>
      <div className="h-auto">


        {
          moneyData?.map((money) => {
            return (
              <main className="w-10/12 sm:w-8/12 h-80 bg-transparent mx-auto my-20 flex flex-col gap-4 items-center" key={money.id}>
                <div className="w-full h-full flex justify-center">
                  <Image
                    src={`/assets/${money.image}`}
                    className="w-32 h-32 sm:w-40 sm:h-40"
                    width={100}
                    height={100}
                    alt={money.heading}
                  />
                </div>
                <div className="flex flex-col items-center w-full h-full text-center font-serif gap-3">
                  <h3 className="text-lg md:text-3xl text-green-500">{money.price}</h3>
                  <h2 className="text-lg md:text-2xl capitalize">{money.heading}</h2>
                  <p className="text-base md:text-lg">{money.fact}</p>
                </div>
              </main>
            );
          })
        }

      </div>
    </>
  )
}
