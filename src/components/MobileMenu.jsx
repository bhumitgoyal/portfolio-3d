import { useEffect } from "react";

import React, { useState } from 'react';
import { logo, menu, close } from '../assets';
import { Link } from 'react-router-dom';
export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    const [toggle, setToggle] = useState(false);
    return (
        <div
            className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
            transition-all duration-300 ease-in-out
            ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
        >
            <button
                onClick={() => {setMenuOpen(false), setToggle(!toggle)}}
                className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
                aria-label="Close Menu"
            >
               <img
            src={close}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
            </button>
            <a
                href=""
                onClick={() =>  {setMenuOpen(false), setToggle(!toggle)}}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
                Home
            </a>
            <a
                href="#about"
                onClick={() =>  {setMenuOpen(false), setToggle(!toggle)}}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
                About
            </a>
            <a
                href="#work"
                onClick={() =>  {setMenuOpen(false), setToggle(!toggle)}}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
                Projects
            </a>
            <a
                href="#contact"
                onClick={() =>  {setMenuOpen(false), setToggle(!toggle)}}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
                Contact
            </a>
        </div>
    );
};
