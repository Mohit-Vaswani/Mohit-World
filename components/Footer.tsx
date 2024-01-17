import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { LuGithub, LuLinkedin, LuTwitter } from 'react-icons/lu'
import qr from '/public/qr.png'

const Footer = () => {
    return (
        <footer className='min_width'>
            <div>
                <ul className='flex gap-4 mb-2'>
                    <Link href=''>
                        <LuTwitter size={20} />
                    </Link>
                    <Link href=''>
                        <LuGithub size={20} />
                    </Link>
                    <Link href=''>
                        <LuLinkedin size={20} />
                    </Link>
                </ul>
                <p>Designed & Developed By @hii_mohit <br />
                    ©2023. All rights reserved.</p>
            </div>
            <div>
                <Image src={qr} alt='mobile number' width={100} height={100} className='rounded-lg' />
            </div>
        </footer>
    )
}

export default Footer