import { FaReact } from "react-icons/fa"
import { SiExpress, SiFirebase, SiJavascript, SiMongodb, SiMui, SiTailwindcss, SiTypescript } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

const tools = [
    { icon: <TbBrandNextjs size={30} />, name: 'NextJs' },
    { icon: <FaReact size={30} />, name: 'ReactJs' },
    { icon: <SiTypescript size={30} />, name: 'TypeScript' },
    { icon: <SiTailwindcss size={30} />, name: 'TailwindCss' },
    { icon: <SiJavascript size={30} />, name: 'JavaScript' },
    { icon: <SiMongodb size={30} />, name: 'MongoDB' },
    { icon: <SiExpress size={30} />, name: 'ExpressJs' },
    { icon: <SiFirebase size={30} />, name: 'Firebase' },
    { icon: <SiMui size={30} />, name: 'Material UI' },
]

const Tools = () => {
    return (
        <div className="tools">
            <h2>Tools and Technologies I work with to create stuff</h2>
            <div className="grid grid-cols-3 gap-5 place-items-center mx-auto mt-8" style={{width: '720px'}}>
                {
                    tools.map((tool, index) => (
                        <div key={index} className="tool">
                            {tool.icon}
                            <p>{tool.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Tools