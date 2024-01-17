import { LuUserCircle } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import Image from "next/image";
import plane from "/public/cool1.png"

const Hero = () => {
  return (
    <main className="hero">
      <h1>Hey, I am Mohit <br /> Vaswani</h1>
      <p>As a Front-end Developer, I like designing and building <br /> good-looking websites and digital products.</p>
      <div className="flex gap-4 items-center">
        <button className="purple_btn" >
          <TfiEmail size={19} />
          Get In Touch
        </button>
        <button>
          <LuUserCircle size={19} />
          About Me
          </button>
      </div>

      {/* <div className="animate">
      <Image src={plane} alt="animate" width={200} height={200} />
      </div> */}
    </main>
  )
}

export default Hero