'use client'
import Image from 'next/image'
import { socialData } from '@/data/data'

const Social = () => {
  return (
    <div className="flex gap-2 justify-center xl:-mt-40 px-1">
      {socialData.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={social.image}
            alt={social.title}
            width={70}
            height={70}
            className="zoom click xl:w-[100px] xl:h-[100px]"
          />
        </a>
      ))}
    </div>
  );
};

export default Social;