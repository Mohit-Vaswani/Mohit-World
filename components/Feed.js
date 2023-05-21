import Link from "next/link";
import Image from "next/image";
import wcemd from "../public/thumnail/wcemd.png"
import little_wordle from "../public/thumnail/4.png"

const Webdata = [
    {
        id: 1,
        title: "What Can Elon Musk Do ?",
        image: wcemd,
        altdata: "What Can Elon Musk Do ?",
        link: "/What-Can-Elon-Musk-Do"
    },
    {
        id: 2,
        title: "Short Wordle",
        image: little_wordle,
        altdata: "Short Wordle",
        link: "/short-wordle"
    },
]

export default function Main() {
    return (
        <main className='w-full h-full flex flex-wrap px-10 justify-center my-6 gap-10'>
            {
                Webdata.map(data => {
                    return (
                        <article key={data.id} className="rounded-lg p-2 filter-box">
                                <Link href={data.link}>
                                <Image src={data.image} alt={data.altdata} width={300} height={200} className="rounded-md image-shadow" />
                                <h2 className="text-lg sm:text-2xl font-semibold mt-2">{data.title}</h2>
                                </Link>
                            </article>
                    )
                })
            }
        </main>
    )
}
