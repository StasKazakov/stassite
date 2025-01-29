import React from 'react'
import { BiLogoPostgresql } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { Satisfy } from 'next/font/google';
import { FaJsSquare, FaReact} from "react-icons/fa";

const satisfy = Satisfy({
  weight: '400',
  subsets: ['latin'], 
});

const Trust = () => {
  return (
    <div className="w-[340px] h-min-96 flex items-center justify-center">
            <div className="h-full w-full rounded-xl p-2">
                <div className="flex flex-col w-[100%] h-full mb-4 rounded-xl items-center justify-center bg-gray-900 p-6">
                    <div className="flex w-full h-40 bg-gray-950 mb-4 rounded-xl items-center justify-center">
                        <div className="flex justify-center items-center">
                        <h4 className={`${satisfy.className} text-5xl text-white font-bold`}
                            style={{ fontStyle: 'italic' }}>TrustCRM</h4>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-center text-[#00ddff] pb-2 mb-4">
                Trust CRM
              </h3>
              <p className="text-center text-white text-lg mb-4">
              CRM for a property agency with the ability to manage customer interactions.
              </p>
              <div className="flex w-full text-[#FF1493] text-5xl justify-center mb-4">
                <FaPython className='mr-1'/> 
                <BiLogoPostgresql className='mx-1'/>
                <FaJsSquare className='mx-1'/>
                <FaReact className='ml-2'/>
              </div>
              {/* SeeButton there */}
                </div>
            </div>
          </div>
  )
}

export default Trust