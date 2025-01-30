'use client'
import Image from 'next/image'

type Props = {
    tool: {
        id: number,
        title: string,
        image: string,
    }
}

const ToolsCard = ({tool}: Props) => {
    const {id, image, title} = tool
    const imageClass = id === 8 ? 'animate-slow-spin' : ''; 
  return (
    <div className='p-6 hover:bg-[#FF1493] duration-1000
    transition-all cursor-pointer text-center rounded-lg
    bg-[#030712]'>
        <Image src={image} 
        alt={title} 
        width={80} 
        height={80}
        className={`object-cover mx-auto ${imageClass}`} 
        />
        <h2 className='text-[18px] mt-4 text-white font-bold'>{title}</h2>
    </div>
  )
}

export default ToolsCard