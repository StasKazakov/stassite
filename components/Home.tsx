import Scroll from './scroll/Scroll'
import Hero from './hero/Hero';
import Expertise from './expertise/Expertise'
import Cases from './cases/Cases'
import Tools from './tools/Tools'
import Contacts from './contacts/Contacts'
import MobNav from './navigation/MobNav'
import Nav from './navigation/Nav'
import { useState, useEffect } from 'react';

const Home = () => {
const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => window.removeEventListener('resize', handleResize); 
  }, []);

  return (
    <div>
      <Scroll />
      {isMobile ? <MobNav /> : <Nav />}
      <Hero />
      <Expertise />
      <Cases />
      <Tools />
      <Contacts />
    </div>
  )
}

export default Home