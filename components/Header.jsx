"use client"
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center text-3xl my-40 mt-20 sm:mt-32">
      <div className="logo font-semibold">hii_mohit</div>
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
