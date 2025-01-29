import React from 'react'
import Image from 'next/image';
import { DiMongodb } from "react-icons/di";
import { FaJsSquare, FaReact } from "react-icons/fa";

const Zen = () => {
  return (
    <div className="w-[340px] h-min-96 flex items-center justify-center">
            <div className="h-full w-full rounded-xl p-2">
                <div className="flex flex-col w-[100%] h-full mb-4 rounded-xl items-center justify-center bg-gray-900 p-6">
                    <div className="flex w-full h-40 bg-gray-950 mb-4 rounded-xl items-center justify-center">
                        <div className="flex justify-center items-center">
                        <Image
                            src='/assets/cases/zen.svg'
                            width={175}
                            height={175}
                            alt='7kmbot'
                            className="m-2"
                        />
                    </div>
                </div>
                <h3 className="text-xl font-bold text-center text-[#00ddff] pb-2 mb-4">
                ZEN CRM
              </h3>
              <p className="text-center text-white text-lg mb-4">
                CRM for counting goods in stock and counting money in the cash register.
              </p>
              <div className="flex w-full text-[#FF1493] text-5xl justify-center mb-4">
                <FaJsSquare /> 
                <DiMongodb />
                <FaReact />
              </div>
              {/* SeeButton there */}
                </div>
            </div>
          </div>
  )
}

export default Zen