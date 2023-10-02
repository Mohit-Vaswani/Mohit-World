import React from 'react'
import Header from './Header'

const Hero = () => {
  return (
    <main className='flex flex-col justify-center w-full h-screen md:px-28'>
        <Header/>
        <h1 className='text-7xl'>hello I'm <span className='Croissant'>mohit</span> <br /> - a developer <br /> w/ a focus on frontend <br /> <span className='Playfair'>&</span> scaling products</h1>
    </main>
  )
}

export default Hero