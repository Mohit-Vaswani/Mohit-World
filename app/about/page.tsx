import Image from "next/image"
import profile from "/public/profile.jpg"
import { TfiEmail } from "react-icons/tfi"

const Profile = () => {
  return (
    <div className='flex gap-5 profile'>
      <Image src={profile} alt="Profile" width={300} height={300} className="rounded-xl" />
      <div>
        <h2>Who Am I ?</h2>
        <p>I'm Mohit Vaswani, a passionate Frontend Developer with a focus on creating dynamic and
          user-friendly web experiences. With over 2 years of professional experience, I have honed my
          skills in various languages, including JavaScript and CSS, and developed expertise in popular
          frameworks and tools like React.js, Next.js.</p>
        <button className="purple_btn" >
          <TfiEmail size={19} />
          Get In Touch
        </button>
      </div>
    </div>
  )
}

const Experience = () => {
  return(
    <div className="flex flex-col gap-5 my-10 experience">
      <h2>Professional Experiences</h2>
    </div>
  )
}

const About = () => {
  return (
    <div className='flex flex-col my-10 min_width mx-auto about'>
      <Profile />
      <Experience />
    </div>
  )
}

export default About