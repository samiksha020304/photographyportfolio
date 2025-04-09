"use client";
import React, { useState } from "react";
import Link from "next/link";
import A1 from "@/components/A1";
import A2 from "@/components/A2";
import A3 from "@/components/A3";
import A4 from "@/components/A4";
import VideoComponent from "@/components/VideoComponent";
import Desc from "@/components/Desc";
import Scroller from "@/components/Scroller";
import A5 from "@/components/A5";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Navbar Header */}
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="flex justify-between items-center p-4 md:p-6">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold text-black">GregRoss</div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-gray-600 text-lg">
            <Link href="#home" className="hover:text-black">HOME</Link>
            <Link href="#about" className="hover:text-black">ABOUT</Link>
            <Link href="#portfolio" className="hover:text-black">PORTFOLIO</Link>
            <Link href="#experience" className="hover:text-black">EXPERIENCE</Link>
            <Link href="#journal" className="hover:text-black">JOURNAL</Link>
            <Link href="#contact" className="hover:text-black">CONTACT</Link>
          </nav>

          {/* Hamburger Button */}
          <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden flex flex-col items-center bg-white text-gray-600 text-lg space-y-4 py-4 shadow-md">
            <Link href="#home" className="hover:text-black" onClick={toggleMenu}>HOME</Link>
            <Link href="#about" className="hover:text-black" onClick={toggleMenu}>ABOUT</Link>
            <Link href="#portfolio" className="hover:text-black" onClick={toggleMenu}>PORTFOLIO</Link>
            <Link href="#experience" className="hover:text-black" onClick={toggleMenu}>EXPERIENCE</Link>
            <Link href="#journal" className="hover:text-black" onClick={toggleMenu}>JOURNAL</Link>
            <Link href="#contact" className="hover:text-black" onClick={toggleMenu}>CONTACT</Link>
          </nav>
        )}
      </header>

      {/* Body Content */}
      <div className="flex flex-col md:flex-row gap-4 pt-5 mt-28 items-center justify-center">
       <A1 />
       <A2 />
       <A3 />
       <A4 />
      </div>

      <div>
        <A5 />
      </div>
      <div>
        <Desc />
      </div>
      <div className="items-center pt-5 h-full w-full">
        <VideoComponent />
      </div>
      <div className="mt-20">
        <Scroller />
      </div>
    </div>
  );
}
