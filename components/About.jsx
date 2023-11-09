import React from 'react'
import Header from './Header'
import AboutDetails from './subcomponents/AboutDetails'
import Footer from "../components/Footer"

const About = () => {
  return (
    <main className='flex flex-col w-full h-full px-10 md:px-32 2xl:px-32 aboutPage'>
        <Header/>
        <AboutDetails/>
        <Footer/>
    </main>
  )
}

export default About