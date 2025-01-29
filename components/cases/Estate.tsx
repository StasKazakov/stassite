import React from 'react'
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";

const Estate = () => {
  return (
    <div className="w-[340px] h-min-96 flex items-center justify-center">
            <div className="h-full w-full rounded-xl p-2">
                <div className="flex flex-col w-[100%] h-full mb-4 rounded-xl items-center justify-center bg-gray-900 p-6">
                    <div className="flex w-full h-40 bg-gray-950 mb-4 rounded-xl items-center justify-center">
                        <div className="flex justify-center items-center">
                          <h4 className="text-5xl text-white font-bold">Real Estate</h4>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-center text-[#00ddff] pb-2 mb-4">
                Site
              </h3>
              <p className="text-center text-white text-lg mb-4">
                Сomplex website for an estate agency with the ability to list properties.
              </p>
              <div className="flex w-full text-[#FF1493] text-5xl justify-center mb-4">
                <BiLogoTypescript/> 
                <DiMongodb/>
                <IoLogoFirebase/>
                <FaReact className='ml-1'/>
              </div>
              {/* SeeButton there */}
                </div>
            </div>
          </div>
  )
}

export default Estate