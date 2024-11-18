'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/jobzestlogo.png';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  // Function to close the mobile menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Helper function to check if the link is active
// Helper function to check if the link is active
const isActive = (link: string): boolean => pathname === link;


  return (
    <nav className="bg-white m-2 shadow-md rounded-lg h-16 md:h-20 relative">
      <div className="container mx-auto flex justify-between items-center p-4 h-full">
        
        {/* Logo on the left side */}
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="Jobzest Logo"
            className="w-16 h-16 md:w-20 md:h-20"
          />
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-blue-600 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:gap-6 md:items-center">
          <li className={isActive('/') ? 'text-blue-600' : 'text-black'}>
            <Link href="/">Home</Link>
          </li>
          <li className={isActive('/about') ? 'text-blue-600' : 'text-black'}>
            <Link href="/about">About Us</Link>
          </li>
          <li className={isActive('/services') ? 'text-blue-600' : 'text-black'}>
            <Link href="/services">Services</Link>
          </li>
          <li className={isActive('/contact') ? 'text-blue-600' : 'text-black'}>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu with Smooth Animation */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white shadow-lg transition-transform transform ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ zIndex: 50 }} // Ensuring it appears above other elements
      >
        {/* Close Button for Mobile Menu */}
        <button
          className="absolute top-6 right-6 text-blue-600 text-3xl"
          onClick={closeMenu}
        >
          ✕
        </button>

        <ul className="flex flex-col gap-8 items-center justify-center h-full">
          <li className={isActive('/') ? 'text-blue-600' : 'text-black'}>
            <Link href="/" onClick={closeMenu}>Home</Link>
          </li>
          <li className={isActive('/about') ? 'text-blue-600' : 'text-black'}>
            <Link href="/about" onClick={closeMenu}>About Us</Link>
          </li>
          <li className={isActive('/services') ? 'text-blue-600' : 'text-black'}>
            <Link href="/services" onClick={closeMenu}>Services</Link>
          </li>
          <li className={isActive('/contact') ? 'text-blue-600' : 'text-black'}>
            <Link href="/contact" onClick={closeMenu}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
