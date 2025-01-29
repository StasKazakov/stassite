'use client'
import { useState, useEffect } from 'react'
import Title from '../utils/Title'
import { toolsData } from '@/data/data'
import ToolsCard from './ToolsCard'

const Tools = () => {
  const [cardsPerRow, setCardsPerRow] = useState(1);
  const [displayedTools, setDisplayedTools] = useState(toolsData.slice(0, 15));

  const updateCardsPerRow = () => {
    const width = window.innerWidth;

    if (width >= 1280) { 
      setCardsPerRow(5);
    } else if (width >= 1024) { 
      setCardsPerRow(4);
    } else if (width >= 768) { 
      setCardsPerRow(3);
    } else if (width >= 640) { 
      setCardsPerRow(2);
    } else {
      setCardsPerRow(1);
    }

    setCardsPerRow(cardsPerRow);
    
    if (cardsPerRow === 2 || cardsPerRow === 4) {
      setDisplayedTools(toolsData);
    } else {
      setDisplayedTools(toolsData.slice(0, 15)); 
    }
  };

  useEffect(() => {
    updateCardsPerRow();
    window.addEventListener('resize', updateCardsPerRow);
    
    return () => {
      window.removeEventListener('resize', updateCardsPerRow);
    };
  }, []);


  return (
    <section id='tools' className='bg-[#111827] h-full z-10 relative w-full'>
      <div className='mx-auto w-[80%] h-full pb-8'>
        <div className='h-full w-full py-8'>
          <Title text="Tools"/>
        </div>
        
        <div className='md:my-10 grid grid-cols-1 sm:grid-cols-2 
          md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 
          gap-4 items-center'>
          {displayedTools.map((tool) => (
            <div key={tool.id}>
              <ToolsCard tool={tool}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tools