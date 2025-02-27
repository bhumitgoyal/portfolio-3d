import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu,blank, close } from '../assets';
import { useEffect } from "react";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
        document.body.style.overflow = "";
    };
}, [menuOpen]);


  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
         
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Bhumit &nbsp;<span className="sm:block hidden text-[#915EFF]">| Portfolio</span>
          </p>
        </Link>
       
        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a className=' hover:text-white transition-colors' href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <img
            src={toggle ? blank : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(false)}
          />
                    </div>
        

        {/* Mobile Menu */}
       
      </div>
    </nav>
  );
};

export default Navbar;
