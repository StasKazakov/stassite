import Hero from './hero/Hero';

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
        <Hero />
    </div>
  )
}

export default Home