'use client';
import { useState, useEffect } from "react";
import { HiOutlineMenu } from "react-icons/hi";   
import SideMenu from "./SideMenu";  
import Menu from './Menu';
import Link from "next/link";


export default function Header({theme = "light"}) {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 100) {
        setScrolled(true);
      } else {
        if (theme === "dark") {  
        setScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
    window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 
  const handleOpenMenu = () => {
    setSideMenuOpen(true);
  };

  useEffect(() => {
    if (theme === "light") {
     setScrolled(true);
    }
  }, [theme]);

  return (
    <>
    <header 
      className={`py-5 fixed top-0 left-0 w-full transition-colors duration-300 z-10 ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="custom-container">
        <div className="flex items-center justify-between">
          <div className="w-[200px]">
          <Link href="/" >
            {scrolled ? (
              <img className="w-full" src="/assets/logo.svg" />
            ) : (
              <img className="w-full" src="/assets/logo-white.svg" />
            )}
          </Link>
          </div>
          <button onClick={handleOpenMenu} className={`${scrolled ? "text-black" : "text-white"} md:hidden`}>
            <HiOutlineMenu size={25} />
          </button>
          <div className="hidden md:block">
            <Menu scrolled={scrolled}/> 
          </div>  
        </div>
      </div>  
    </header>
    <SideMenu  sideMenuOpen={sideMenuOpen} setSideMenuOpen={setSideMenuOpen}/>
    </>
  );
}