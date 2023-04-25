// import Link from "next/link";
// import Image from "next/image";
import first from "../public/thumnail/btwe.jpg"

const Webdata = [
    {
        id: 1,
        title: "Coming Soon...",
        image: first,
        altdata: "Coming Soon...",
        link: "/Before-The-World-Ends"
    },
]

export default function Main() {
    return (
        <main className='w-full h-full flex flex-wrap px-10 justify-center my-6 gap-10'>
            {
                Webdata.map(data => {
                    return (
                            <article key={data.id} className="rounded-lg p-2">
                                {/* <Image src={data.image} alt={data.altdata} width={300} height={200} className="rounded-md image-shadow" /> */}
                                <h2 className="text-lg sm:text-2xl font-semibold mt-2">{data.title}</h2>
                            </article>
                    )
                })
            }
        </main>
    )
}
