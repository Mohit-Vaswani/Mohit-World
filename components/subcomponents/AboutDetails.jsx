import Image from "next/image"
import { skills, tools } from "@data/constant"
import Link from "next/link"

const AboutDetails = () => {
    return (
        <main className=" flex flex-col">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-28 justify-between items-center">
                <Image src="/assets/mymainpic.jpg" alt="My Pic" width={350} height={350} />
                <div className="info text-xl">
                    <h2 className="text-6xl mb-6">Hi there!</h2>
                    <p className="mb-4">
                        I am a Frontend Developer from India who is passionate about coding and building creative solutions. I started my journey by mastering HTML, CSS, and JavaScript. As I advanced, I enthusiastically adopted ReactJS as my main framework for projects.</p>
                    <p className="mb-4">
                        Currently, I am focused on utilizing NextJS to develop cutting-edge applications. I take pride in turning ideas into functional and visually appealing user interfaces. Always seeking growth and new challenges, I stay updated with the latest trends and technologies in frontend development.</p>
                    <p className="mb-4">
                        I thrive in collaborative team environments and communicate effectively with designers, backend developers, and other team members. I would be a valuable asset to any frontend development team.</p>
                </div>
            </div>

            <div className="mt-28 experienceSection">
                <h2 className="text-4xl sm:text-5xl mb-9">My Experience So Far</h2>
                <ul>
                    <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between text-lg expCard">
                        <div className="flex flex-col gap-2 w-8/12">
                            <h3 className="text-2xl font-semibold">Frontend Developer</h3>
                            <Link href=""><p className="underline">Craxinno Technology Pvt Ltd</p></Link>

                            <ul className="list-disc">
                                <li >Designed and developed dynamic and responsive websites using javascript, and
                                    React.js, React router.</li>
                                <li>Worked with React.js frameworks to develop robust and scalable front-ends.
                                    Troubleshot and fixed bugs and issues in the Front-end to ensure the smooth
                                    operation of the Website.</li>
                                <li>Assisted other web developers in the design and development of websites using
                                    JavaScript React.js.</li>
                            </ul>
                        </div>
                        <div>
                            <p>Dec 2022 to Sep 2023 · 10 month</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between text-lg expCard">
                        <div className="flex flex-col gap-2 w-8/12">
                            <h3 className="text-2xl font-semibold">Frontend Intern</h3>
                            <Link href=""><p className="underline">Codeplanet Technologies Pvt Ltd</p></Link>

                            <ul className="list-disc">
                                <li>I have been actively involved in managing the company's website development while also assisting students with their Frontend development inquiries. This dual role has allowed me to continuously expand my knowledge and skills in the field.</li>
                            </ul>
                        </div>
                        <div>
                            <p>Apr 2022 to Oct 2022 · 7 months</p>
                        </div>
                    </div>

                </ul>
            </div>
            <div className="my-28 skillsSection">
                <h2 className="text-4xl sm:text-5xl mb-9">My Strong Skills</h2>
                <ul className="flex gap-x-4 sm:gap-x-10 gap-y-6 w-full sm:w-7/12 flex-wrap">
                    {skills.map((item, index) => (
                        <li key={index}>{item.skill}</li>
                    ))}
                </ul>
            </div>
            <div className="mb-20 skillsSection">
                <h2 className="text-4xl sm:text-5xl mb-9">Tools I use daily</h2>
                <ul className="flex gap-x-4 sm:gap-x-10 gap-y-6 w-full sm:w-7/12 flex-wrap">
                    {tools.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default AboutDetails