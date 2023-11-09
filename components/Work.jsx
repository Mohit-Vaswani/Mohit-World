import React from 'react'
import Header from './Header'
import WorkDetails from './subcomponents/WorkDetails'
import Footer from "../components/Footer"

const Work = () => {
  return (
    <main className='flex flex-col w-full h-full px-10 md:px-32 lg:px-32 workPage'>
        <Header/>
        <WorkDetails/>
        <Footer/>
    </main>
  )
}

export default Work