import React from 'react'
import Header from './Header'

const Work = () => {
  return (
    <main className='flex flex-col w-full h-screen px-10 md:px-32 lg:px-52 workPage'>
        <Header/>
        <h1 className='text-4xl sm:text-5xl lg:text-7xl'>This is Work</h1>
    </main>
  )
}

export default Work