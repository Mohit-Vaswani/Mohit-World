'use client'
import Image from "next/image"
import cool from '/public/cool-1.png'
import { LuGithub, LuTwitter } from "react-icons/lu";
import Link from "next/link";
import { useEffect } from "react";

const Navbar = () => {

    useEffect(() => {
        const image: any = document.querySelector('.scroll_img');
    
        const handleScroll = () => {
          image.style.transform = `rotate(${window.scrollY}deg)`;
        };
        
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    return (
        <nav className="min_width">
            <Image src={cool} alt="logo" width={60} height={60} className="object-contain scroll_img" />
            <div className="flex items-center gap-12">
                <ul>
                <Link href='/'>
                    <li>Home</li>
                </Link>
                <Link href='/about'>
                    <li>About</li>
                </Link>
                <Link href='/blog'>
                    <li>Blog</li>
                </Link>
                <Link href='/products'>
                    <li>Products</li>
                </Link>
                </ul>
                <div className="line"></div>
                <ul>
                    <Link href=''>
                        <LuTwitter />
                    </Link>
                    <Link href=''>
                        <LuGithub />
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar