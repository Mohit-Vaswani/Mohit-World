import React from 'react'
import Header from './Header'
import ContactMain from './subcomponents/ContactMain'
import Footer from "../components/Footer"

const Contact = () => {
    return (
        <main className='flex flex-col w-full h-screen px-10 md:px-32 lg:px-32 contactPage'>
            <Header />
            <ContactMain/>
            <Footer/>
        </main>
    )
}

export default Contact