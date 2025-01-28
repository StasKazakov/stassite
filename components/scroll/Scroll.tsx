'use client'
import React, { useEffect } from 'react';

const Scroll = () => {
    

    useEffect(() => {
        const calculateProgress = () => {
          
            const documentHeight = Math.max(
                document.body.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.clientHeight,
                document.documentElement.scrollHeight,
                document.documentElement.offsetHeight
            );
            
            const windowScroll = window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const scrollable = documentHeight - windowHeight;
            const progressPercentage = (windowScroll / scrollable) * 100;
            return Math.min(100, Math.max(0, progressPercentage));
        };

        const handleScroll = () => {
            const progressHeight = calculateProgress();
            
            const progressBar = document.querySelector('.progressbar') as HTMLElement;
            if (progressBar) {
                progressBar.style.height = `${progressHeight}%`;
            }
        };

        handleScroll();

        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });

        window.addEventListener('resize', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <>
            <div className='progressbar z-30 w-1 md:w-2'></div>
            <div className='scrollPath z-30 w-1 md:w-2'></div>
        </>
    );
};

export default Scroll;