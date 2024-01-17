import Image from "next/image";
import stakehub from "/public/stakehub.png"
import { SlShareAlt } from "react-icons/sl";
import Link from "next/link";

const workdata = [
  {
    name: "Stakehub",
    logo: stakehub,
    link: "stakehub.in",
    desc: " Explore, research and own Unlisted Companies Shares by receiving them directly into your Demat Account.",
    stack: ['NextJs', 'TypeScript', 'TailwindCss', 'RestAPI']
  }
];

const Work = () => {
  return (
    <div className="work">
      <h2>Work I have done</h2>
      <div className="flex gap-4">
        {workdata.map((project, index) => (
          <article key={index} className="border rounded-md">
            <div className="flex gap-3 items-center p-4 py-2 border-b">
              <Image src={project.logo} alt={`${project.name} Logo`} width={40} height={40} />
              <ul>
                <h3>{project.name}</h3>
                <p className="text-gray-500">{project.link}</p>
              </ul>
            </div>
            <p className="p-4">{project.desc}</p>
            <div className="flex gap-2 flex-wrap px-4 pb-4">
              {
                project.stack.map((item) => (
                  <p className="bg-gray-200 p-1 px-3 rounded-full">{item}</p>
                ))
              }
            </div>
            <div className="px-4 py-3 border-t text-blue-600">
              <Link href={`https://${project.link}/`} className="flex gap-2 items-center" target="_blank">
                view project <SlShareAlt />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Work;
