import React from 'react'
import Header from './Header'
import AboutDetails from './subcomponents/AboutDetails'

const About = () => {
  return (
    <main className='flex flex-col w-full h-full px-10 md:px-32 lg:px-52 aboutPage'>
        <Header/>
        <AboutDetails/>
    </main>
  )
}

export default About