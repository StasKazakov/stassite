import { useState, useEffect } from "react";
import { IoHome } from "react-icons/io5";
import { ImBriefcase } from "react-icons/im";
import { BiLogoTelegram } from "react-icons/bi";
import { FaTools, FaLaptopCode } from "react-icons/fa";

const MobNav = () => {
  const [isVisible, setIsVisible] = useState(true);
let lastScrollY = 0;
let scrollTimeout: NodeJS.Timeout | null = null;

const scrollToSection = (id: string): void => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

useEffect(() => {
  const handleScroll = () => {
    // Очищаем предыдущий таймаут, если он был
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    // Если текущая позиция скролла отличается от предыдущей
    if (window.scrollY !== lastScrollY) {
      setIsVisible(false);
    }

    // Устанавливаем новый таймаут
    scrollTimeout = setTimeout(() => {
      setIsVisible(true);
      lastScrollY = window.scrollY;
    }, 200); // Небольшая задержка для более плавного поведения
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    // Очищаем таймаут при размонтировании компонента
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
  };
}, []);
  

  return (
    <section className={`fixed bottom-0 w-[100vw] z-50 transition-opacity duration-1000 
      ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <div className="flex w-[100vw] bottom-0 h-12 bg-[#00ddff] bg-opacity-50 rounded-lg
         text-white text-3xl justify-between px-6">
          <button 
            onClick={() => scrollToSection("home")} >
            <IoHome />
          </button>
          <div className="h-8 border-[1px] my-auto border-[#111827] opacity-50"></div>
          <button onClick={() => scrollToSection("expertise")}>
            <FaLaptopCode />
          </button>
          <div className="h-8 border-[1px] my-auto border-[#111827] opacity-50"></div>
          <button onClick={() => scrollToSection("cases")}>
            <ImBriefcase />
          </button>
          <div className="h-8 border-[1px] my-auto border-[#111827] opacity-50"></div>
          <button onClick={() => scrollToSection("tools")}>
            <FaTools />
          </button>
          <div className="h-8 border-[1px] my-auto border-[#111827] opacity-50"></div>
          <button onClick={() => scrollToSection("contacts")}>
            <BiLogoTelegram />
          </button>
        </div>
    </section>
  )
}

export default MobNav