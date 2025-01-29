import React from 'react'
import { FaPython } from "react-icons/fa";
import Image from 'next/image';
import { AiFillOpenAI } from "react-icons/ai";

const Anunah = () => {
  return (
    <div className="w-[340px] h-min-96 flex items-center justify-center">
                <div className="h-full w-full rounded-xl p-2">
                    <div className="flex flex-col w-[100%] h-full mb-4 rounded-xl items-center justify-center bg-gray-900 p-6">
                        <div className="flex w-full h-40 bg-gray-950 mb-4 rounded-xl items-center justify-center">
                            <div className="flex justify-center items-center">
                            <Image
                                src='/assets/cases/anunah.webp'
                                width={75}
                                height={75}
                                alt='7kmbot'
                                className="rounded-full m-2"
                            />
                            <h4 className="text-4xl text-white font-bold">Anunah</h4>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-center text-[#00ddff] pb-2 mb-4">
                    Antispam bot
                  </h3>
                  <p className="text-center text-white text-lg mb-4">
                  A system built to fight spam based on artificial intelligence. It learns from messages from users. 
                  </p>
                  <div className="flex w-full text-[#FF1493] text-5xl justify-center mb-4">
                    <FaPython className='mr-1'/> 
                    <AiFillOpenAI className='ml-1'/>
                  </div>
                  {/* SeeButton there */}
                    </div>
                </div>
              </div>
  )
}

export default Anunah