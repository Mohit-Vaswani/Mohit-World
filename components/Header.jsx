"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center text-3xl my-40 mt-20 sm:mt-32">
      <div className="logo">
        <Image src="/assets/victory.svg" alt='logo' width={70} height={70} />
      </div>
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
        <li>about</li>
        <li>work</li>
        <li>resume</li>
        <li>contact</li>
      </ul>
    </nav>
  );
};

export default Header;
