"use client"
import { IoHome } from "react-icons/io5";
import { ImBriefcase } from "react-icons/im";
import { BiLogoTelegram } from "react-icons/bi";
import { FaTools, FaLaptopCode } from "react-icons/fa";
import { useState, useEffect } from "react";

const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string): void => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-4 flex justify-end w-full h-28 z-50 2xl:pr-52">
        <div className="text-3xl xl:text-4xl 2xl:text-5xl text-[#00ddff] flex justify-between mr-[10%]">
            {/* Home button */}
            <div className="flex flex-col items-center group">
                <p
                    className="text-white text-xl text-center font-bold 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                >
                    Home
                </p>
                <button
                    onClick={() => scrollToSection("home")} 
                    className={`border-4 border-[#00ddff] p-4 rounded-full m-2 
                    transition-opacity duration-500 click 
                    ${isScrolled ? "opacity-10" : "opacity-100"} 
                    group-hover:opacity-100 hover:opacity-100`}
                >
                    <IoHome />
                </button>
                </div>
            {/* Expertise button */}
            <div className="flex flex-col items-center group">
                <p className="text-white text-xl text-center font-bold 
                opacity-0 group-hover:opacity-100 transition-opacity duration-1000">Expertise</p>
                <button
                    onClick={() => scrollToSection("expertise")} 
                    className={`border-4 border-[#00ddff] p-4 rounded-full m-2 
                    transition-opacity duration-500 click
                    ${isScrolled ? "opacity-10" : "opacity-100"} 
                    group-hover:opacity-100 hover:opacity-100`}>
                    <FaLaptopCode />
                </button>
            </div>
            {/* Cases button */}
            <div className="flex flex-col items-center group">
                <p className="text-white text-xl text-center font-bold 
                opacity-0 group-hover:opacity-100 transition-opacity duration-1000">Cases</p>
                <button 
                    onClick={() => scrollToSection("cases")}
                    className={`border-4 border-[#00ddff] p-4 rounded-full m-2 
                    transition-opacity duration-500 click
                    ${isScrolled ? "opacity-10" : "opacity-100"} 
                    group-hover:opacity-100 hover:opacity-100`}>
                    <ImBriefcase />
                </button>
            </div>
            {/* Tools booton */}
            <div className="flex flex-col items-center group">
                <p className="text-white text-xl text-center font-bold 
                opacity-0 group-hover:opacity-100 transition-opacity duration-1000">Tools</p>
                <button 
                    onClick={() => scrollToSection("tools")}
                    className={`border-4 border-[#00ddff] p-4 rounded-full m-2 
                    transition-opacity duration-500 click
                    ${isScrolled ? "opacity-10" : "opacity-100"} 
                    group-hover:opacity-100 hover:opacity-100`}>
                    <FaTools />
                </button>
            </div>
            {/* Contacts */}
            <div className="flex flex-col items-center group">
                <p className="text-white text-xl text-center font-bold 
                opacity-0 group-hover:opacity-100 transition-opacity duration-1000">Contacts</p>
                <button 
                    onClick={() => scrollToSection("contacts")}
                    className={`border-4 border-[#00ddff] p-4 rounded-full m-2 
                    transition-opacity duration-500 click
                    ${isScrolled ? "opacity-10" : "opacity-100"} 
                    group-hover:opacity-100 hover:opacity-100`}>
                    <BiLogoTelegram />
                </button>
            </div>
        </div>
    </div>
  );
};

export default Nav;