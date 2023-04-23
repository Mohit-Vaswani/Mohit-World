import Link from "next/link";
import Image from "next/image";

const Webdata = [
    {
        id: 1,
        title: "Before the world ends",
        image: "/../public/thumnail/btwe.png",
        altdata: "Before the world ends",
        link: "/Before-The-World-Ends"
    },
]

export default function Main() {
    return (
        <main className='w-full h-full flex flex-wrap px-10 justify-center my-6 gap-10'>
            {
                Webdata.map(data => {
                    return (

                        <article key={data.id} className="">
                            <Link href={data.link}>
                                <Image src={data.image} alt={data.altdata} width={300} height={200} className="rounded-md image-shadow" />
                            </Link>
                            <h2 className="text-2xl font-semibold mt-2">{data.title}</h2>
                        </article>
                    )
                })
            }


            {/* <Link href="/">
            <Image src={one} alt="" width={350} className="rounded-3xl border-2 shadow-lg m-3"/>
        </Link>
        <Link href="/">
            <Image src={two} alt="" width={350} className="rounded-3xl border-2 shadow-lg m-3"/>
        </Link>
        <Link href="/">
            <Image src={three} alt="" width={350} className="rounded-3xl border-2 shadow-lg m-3"/>
        </Link>
        <Link href="/">
            <Image src={four} alt="" width={350} className="rounded-3xl border-2 shadow-lg m-3"/>
        </Link> */}
        </main>
    )
}
