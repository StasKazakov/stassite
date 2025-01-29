import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Animation = () => {
  return (
    <div className='flex justify-center items-center h-full p-0 m-0 xl:-mt-28 lg:mb-12'>
    <DotLottieReact
      src='/lottie/contact.json'
      loop
      autoplay
      className='scale-[1.5] translate-y-[10%] pt-4 pb-12'
    />
    </div>
  )
}

export default Animation