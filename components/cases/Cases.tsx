import Slider from './Slider'
import Title from "../utils/Title";

const Cases = () => {
  return (
    <section id='cases' className='mx-auto bg-[#030712] h-full pb-1 md:pb-4'>
      <div className=' w-full md:w-[80%] mx-auto'>
        <div className='h-full w-full py-8'>
          <Title text='Cases'/>
        </div>
        <Slider/>
      </div>
    </section>
  )
}

export default Cases