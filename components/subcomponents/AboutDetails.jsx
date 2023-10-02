import Image from "next/image"

const AboutDetails = () => {
    return (
        <main className=" flex flex-col">
            <div className="flex gap-28 justify-between items-center">

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

            <div className="my-28 skillsSection">
                <h2 className="text-5xl mb-9">My Skills So Far</h2>
                <ul className="flex gap-x-10 gap-y-6 w-7/12 flex-wrap">
                    <li>ReactJs</li>
                    <li>NextJs</li>
                    <li>TypeScript</li>
                    <li>Tailwind Css</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Supabase</li>
                    <li>Firebase</li>
                    <li>NodeJs</li>
                    <li>MongoDB</li>
                    <li>Version Control</li>
                    <li>Responsive design</li>
                    <li>Material UI</li>
                </ul>
            </div>
            <div className="mb-20 skillsSection">
                <h2 className="text-5xl mb-9">Tools I use daily</h2>
                <ul className="flex gap-x-10 gap-y-6 w-7/12 flex-wrap">
                    <li>VS Code</li>
                    <li>Github</li>
                    <li>Chrome Developer Tools</li>
                    <li>Postman</li>
                    <li>ChatGpt</li>
                </ul>
            </div>
        </main>
    )
}

export default AboutDetails