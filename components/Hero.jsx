import React from 'react'
import Header from './Header'

const Hero = () => {
  return (
    <main className='flex flex-col w-full h-screen px-10 md:px-32 lg:px-52'>
        <Header/>
        <h1 className='text-4xl sm:text-5xl lg:text-7xl'>hello I'm <span className='Croissant'>mohit</span> <br /> - a developer <br /> w/ a focus on frontend <br /> <span className='Playfair'>&</span> scaling products.</h1>
    </main>
  )
}

export default Hero