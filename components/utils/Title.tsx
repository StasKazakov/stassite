'use client'
import React, { useEffect, useRef, useState } from 'react';

type TitleProps = {
  text: string;
};

const Title: React.FC<TitleProps> = ({ text }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Определение мобильного устройства
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    // Первичная проверка
    checkMobile();
    
    // Слушатель resize
    window.addEventListener('resize', checkMobile);

    // Настройка Intersection Observer для мобильных устройств
    if (isMobile && titleRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            setIsVisible(entry.isIntersecting);
          });
        },
        { threshold: 0.1 } // Срабатывание когда элемент виден хотя бы на 10%
      );

      observer.observe(titleRef.current);

      return () => {
        window.removeEventListener('resize', checkMobile);
        observer.disconnect();
      };
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  const rotationClasses = isMobile 
    ? (isVisible 
        ? 'rotate-0' 
        : 'rotate-[-15deg]')
    : 'hover:rotate-0 rotate-[-15deg]';

  return (
    <p 
      ref={titleRef}
      className={`
        text-5xl lg:text-6xl text-center text-white 
        font-bold bg-[#FF1493] w-fit mx-auto px-4 pb-4 pt-1 
        ${rotationClasses} transition-transform duration-1000 
        ease-in-out select-none
      `}
    >
      {text}
    </p>
  );
};

export default Title;