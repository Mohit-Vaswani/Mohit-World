"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center text-3xl my-20 sm:my-40 mt-20 sm:mt-32">
      <Link href="/">
      <div className="logo">
        <Image src="/assets/victory.svg" alt='logo' width={70} height={70} />
      </div>
      </Link>
      <div className="mobile-nav-icon block md:hidden" onClick={toggleNav}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul
        className={`${
          isOpen ? 'block absolute p-10 mobileNav' : 'hidden'
        } md:flex gap-12 items-center md:items-stretch mt-4 md:mt-0`}
      >
        <div className="mobile-nav-icon block md:hidden absolute top-0 right-0 m-10 sm:m-20" onClick={toggleNav}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <Link href="/about">
        <li className='hoverNavItems'>about</li>
      </Link>
      <Link href="/work">
        <li className='hoverNavItems'>work</li>
      </Link>
      <Link href="https://drive.google.com/file/d/1WPlT0Y9S-m-wCWJOWG7gd3lcj0_Onmrl/view?usp=sharing">
        <li className='hoverNavItems'>resume</li>
      </Link>
      <Link href="/contact">
        <li className='hoverNavItems'>contact</li>
      </Link>
      </ul>
    </nav>
  );
};

export default Header;

