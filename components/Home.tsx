import Scroll from './scroll/Scroll'
import Hero from './hero/Hero';
import Expertise from './expertise/Expertise'

const Home = () => {
//   const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 1024); 
  //   };

  //   handleResize(); 
  //   window.addEventListener('resize', handleResize); 

  //   return () => window.removeEventListener('resize', handleResize); 
  // }, []);

  return (
    <div>
      <Scroll />
      <Hero />
      <Expertise />
    </div>
  )
}

export default Home