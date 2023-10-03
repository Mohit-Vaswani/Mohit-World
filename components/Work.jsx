import React from 'react'
import Header from './Header'
import WorkDetails from './subcomponents/WorkDetails'

const Work = () => {
  return (
    <main className='flex flex-col w-full h-full px-10 md:px-32 lg:px-52 workPage'>
        <Header/>
        <WorkDetails/>
    </main>
  )
}

export default Work