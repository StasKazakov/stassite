import React from 'react'
import Image from 'next/image';
import { BiLogoPostgresql } from "react-icons/bi";
import { FaPython } from "react-icons/fa";

const Bot = () => {
  return (
    <div className="w-[340px] h-min-96 flex items-center justify-center">
            <div className="h-full w-full rounded-xl p-2">
                <div className="flex flex-col w-[100%] h-full mb-4 rounded-xl items-center justify-center bg-gray-900 p-6">
                    <div className="flex w-full h-40 bg-gray-950 mb-4 rounded-xl items-center justify-center">
                        <div className="flex justify-center items-center">
                        <Image
                            src='/assets/cases/7kmbot.webp'
                            width={75}
                            height={75}
                            alt='7kmbot'
                            className="rounded-full m-2"
                        />
                        <h4 className="text-4xl text-white font-bold">7kmbot</h4>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-center text-[#00ddff] pb-2 mb-4">
                Telegram bot
              </h3>
              <p className="text-center text-white text-lg mb-4">
                Telegram bot to search for clothing manufacturers by photos of their products.
              </p>
              <div className="flex w-full text-[#FF1493] text-5xl justify-center mb-4">
                <FaPython className='mr-1'/> 
                <BiLogoPostgresql className='ml-1'/>
              </div>
              {/* SeeButton there */}
                </div>
            </div>
          </div>
  )
}

export default Bot