import Scroll from './scroll/Scroll'
import Hero from './hero/Hero';
import Expertise from './expertise/Expertise'
import Cases from './cases/Cases'
import Tools from './tools/Tools'

const Home = () => {

  return (
    <div>
      <Scroll />
      <Hero />
      <Expertise />
      <Cases />
      <Tools />
    </div>
  )
}

export default Home