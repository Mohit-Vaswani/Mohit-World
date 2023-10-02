import React from 'react'
import Header from './Header'
import ContactMain from './subcomponents/ContactMain'

const Contact = () => {
    return (
        <main className='flex flex-col w-full h-screen px-10 md:px-32 lg:px-52 contactPage'>
            <Header />
            <ContactMain/>
        </main>
    )
}

export default Contact