import { MdComputer } from "react-icons/md";
import { GiVintageRobot } from "react-icons/gi";
import { FaChartPie } from "react-icons/fa";
import { CgShoppingBag } from "react-icons/cg";
import Title from "../utils/Title";

const Expertise = () => {
  return (
    <section id='expertise' className='bg-[#111827] h-full z-10 relative lg:pb-16 overflow-hidden'>
      <div className='mx-auto w-[90%]'>
        <div className='w-full pt-8 md:pt-16 pb-12 md:pb-20'>
          <Title text='Expertise'/>
        </div>
        <div className='lg:w-[80%] lg:mx-auto 2xl:w-full 2xl:mx-0 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-10 justify-center mb-20 lg:mb-10 2xl:mb-40'>
          {/* Web app card */}
          <div className='bg-gray-950 p-8 w-full min-w-[300px] max-w-[450px] h-72 rounded-xl card-effect justify-self-center xl:mx-2'>
            <MdComputer className="text-[#FF1493] mx-auto text-7xl pb-1"/>
            <h3 className='text-xl font-bold text-center text-[#00ddff] pb-2'>Web App</h3>
            <p className='text-center text-white text-lg'>Developing applications that make it more convenient to do business and serve customers.</p>
          </div>
          
          <div className='bg-gray-950 p-8 w-full min-w-[300px] max-w-[450px] h-72 rounded-xl card-effect justify-self-center'>
            <GiVintageRobot className="text-[#FF1493] mx-auto text-7xl pb-1"/>
            <h3 className='text-xl font-bold text-center text-[#00ddff] pb-2'>AI Bots</h3>
            <p className='text-center text-white text-lg'>Creating assistants with artificial intelligence for sales and customer support, analysing information and automating actions.</p>
          </div>
          
          <div className='bg-gray-950 p-8 w-full min-w-[300px] max-w-[450px] h-72 rounded-xl card-effect justify-self-center'>
            <FaChartPie className="text-[#FF1493] mx-auto text-7xl pb-1"/>
            <h3 className='text-xl font-bold text-center text-[#00ddff] pb-2'>CRM Systems</h3>
            <p className='text-center text-white text-lg'>Development of customer relationship management systems with support for processing information provided by other services.</p>
          </div>
          
          <div className='bg-gray-950 p-8 w-full min-w-[300px] max-w-[450px] h-72 rounded-xl card-effect justify-self-center'>
            <CgShoppingBag className="text-[#FF1493] mx-auto text-7xl pb-1"/>
            <h3 className='text-xl font-bold text-center text-[#00ddff] pb-2'>Web Sites</h3>
            <p className='text-center text-white text-lg'>Creation of modern high-conversion web sites for online shops and companies providing services. Landing pages for goods.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Expertise;