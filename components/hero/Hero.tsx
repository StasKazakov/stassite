import Image from "next/image";
import { useState } from 'react';
import { HiDocumentDownload } from "react-icons/hi";
// import { ParticlesComponent } from "./Part"

const Hero = () => {
  const [downloaded, setDownloaded] = useState(false);
  const download = () => {
    const link = document.createElement('a');
    link.href = '/assets/StasKazakov.pdf';
    link.download = 'StasKazakov.pdf';
    link.click();
    setDownloaded(true);
  }
  return (
    <section
      id='home'
      className="flex justify-center relative flex-col md:flex-row bg-cover 
      h-[100vh] lg:pt-24 xl:pt-4 w-full overflow-hidden max-w-full px-2 py-4
      lg:py-0 2xl:w-[90%]"
    >
      {/* Background */}
      {/* <div className="absolute z-[-1] h-[100vh] w-full">
        <ParticlesComponent id='particles' />
      </div> */}

      <div className="flex flex-col lg:flex-row items-center text-center gap-3 z-10 w-full lg:max-w-[95%] lg:mx-auto">
        <div className="lg:w-1/2 flex flex-col items-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white max-w-[500px] order-1 mb-2 lg:mb-4">
            Hello👋, I&apos;m&nbsp;<span className="custom-gradient-heading">Stas</span>
          </h1>

          <div className="flex justify-center order-2 w-full lg:hidden">
            <Image
              src="/assets/mrobot.png"
              alt="Robot Image"
              width={280}
              height={280}
              className="w-[270px] h-[270px] md:w-[280px] md:h-[280px]"
              priority
            />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-white 
          custom-gradient-heading mb-2 order-3 lg:order2 lg:mb-4 2xl:max-w-[720px]">
            Full Stack Developer
          </h2>

          <h3 className="text-xl 2xl:text-2xl text-white lg:max-w-[500px] order-4 lg:order-3 mb-4 lg:mb-8">
            Unlock the full potential of your business by leveraging advanced technologies like
            <span className="font-bold custom-gradient-heading"> Web Development</span>,
            <span className="font-bold custom-gradient-heading"> AI</span>,
            and <span className="font-bold custom-gradient-heading"> Blockchain</span>.
            Create innovative solutions that drive growth, enhance efficiency,
            and stay ahead of the competition.
          </h3>

          <button
            className={`flex items-center justify-center gap-2  
            ${downloaded ? 'bg-[#FF1493] text-white' : 'bg-[#00ddff] text-gray-900' }
            hover:bg-[#FF1493] hover:text-white px-6 py-4 rounded-lg text-2xl md:text-3xl
            transition-colors duration-1000 order-5 lg:order-4 font-bold`}
            onClick={download}
            disabled={downloaded}
          >
            <p>{downloaded ? 'Downloaded 👍' : 'Download CV' }</p>
            {!downloaded && <HiDocumentDownload className="text-3xl" />}
          </button>
        </div>

        <div className="hidden lg:flex lg:w-1/2 lg:justify-end lg:mt-auto lg:items-center xl:justify-center">
          <Image
            src="/assets/robot.png"
            alt="Robot Image"
            width={686}
            height={717}
            className="lg:w-auto lg:h-[500px] 2xl:w-auto 2xl:h-[560px]"
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default Hero;