"use client"
import Image from "next/image";

interface HeroProps {
  imageUrl: string
  logoUrl: string
  title: string
  content: string[]
}

export function Hero({imageUrl, logoUrl, title, content}: HeroProps){
   return (
    <section className="w-full h-[880px] pt-20 px-[200px] relative ">
      <Image 
        src={imageUrl}
        fill
        objectFit="fill"
        alt="Orbital Tech Logo"        
        className="-z-10"
        quality={100}
      />
      <Image 
        src="/Logo_Horizontal.svg"
        width={355}
        height={55}
        alt="Orbital Tech Logo"        
        className="mb-[235px]"
      />
      <Image
        src={logoUrl}
        width={132}
        height={100}
        alt="Siry Logo"
        className="mb-7"        
      />
      <h2 className="text-white font-bold text-7xl mb-9">
        {title}
      </h2>
      {
        content.map((service, index) => {
          return <p key={index} className="text-white text-2xl mb-3">{service}</p>
        })
      }      
      </section>
   )
}