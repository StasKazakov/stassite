'use client'
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { useState, useEffect } from "react";
import Bot from "./Bot";
import Zen from "./Zen";
import Anunah from "./Anunah";
import Trust from "./Trust";
import Estate from "./Estate";

const Slider = () => {
  const [offset, setOffset] = useState(0);
  const cardWidth = 340;
  const [visibleCards, setVisibleCards] = useState(1);
  const totalCards = 5;
  
  const scrollRight = () => {
    if (offset < (totalCards - visibleCards) * cardWidth) {
      setOffset(offset + cardWidth);
    }
  };

  const scrollLeft = () => {
    if (offset > 0) {
      setOffset(offset - cardWidth);
    }
  };

  const updateVisibleCards = () => {
    
    const container = document.getElementById('slider-container')?.parentElement;
    if (!container) return;

    
    const availableWidth = container.clientWidth;
    
    const maxPossibleCards = Math.floor(availableWidth / cardWidth);
    
    const screenWidth = window.innerWidth;
    let desiredCards;
    
    if (screenWidth >= 1536) {
      desiredCards = 4;
    } else if (screenWidth >= 1280) {
      desiredCards = 3;
    } else if (screenWidth >= 1024) {
      desiredCards = 2;
    } else {
      desiredCards = 1;
    }

    const actualVisibleCards = Math.min(desiredCards, maxPossibleCards);
    
    if (actualVisibleCards !== visibleCards) {
      setVisibleCards(actualVisibleCards);

      if (offset > (totalCards - actualVisibleCards) * cardWidth) {
        setOffset((totalCards - actualVisibleCards) * cardWidth);
      }
    }
  };

  useEffect(() => {
    updateVisibleCards();
    const container = document.getElementById('slider-container')?.parentElement;
    if (container) {
      const resizeObserver = new ResizeObserver(updateVisibleCards);
      resizeObserver.observe(container);
      window.addEventListener('resize', updateVisibleCards);
      
      return () => {
        resizeObserver.disconnect();
        window.removeEventListener('resize', updateVisibleCards);
      };
    }
  }, [updateVisibleCards]);

  return (
    <div className="w-full flex items-center mb-10 relative">
      <button
        onClick={scrollLeft}
        className="absolute left-1 text-[#00ddff] flex items-center 
        justify-center text-7xl md:text-9xl 
        xl:text-8xl 2xl:text-9xl z-50 opacity-20 
        hover:opacity-100 transition-opacity duration-1000"
      >
        <IoIosArrowDropleft />
      </button>

      <div
        id="slider-container"
        className="overflow-hidden h-full mx-auto p-1"
        style={{ width: `${visibleCards * cardWidth}px` }}
      >
        <div
          className="flex h-full transition-transform duration-1000"
          style={{
            transform: `translateX(-${offset}px)`,
          }}
        >
          <Bot/>
          <Zen/>
          <Anunah/>
          <Trust/>
          <Estate/>
        </div>
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-0 text-[#00ddff] flex items-center justify-center 
        text-7xl md:text-9xl xl:text-8xl 2xl:text-9xl z-10 opacity-20 hover:opacity-100 
        transition-opacity duration-1000 "
      >
        <IoIosArrowDropright />
      </button>
    </div>
  );
};

export default Slider;
  