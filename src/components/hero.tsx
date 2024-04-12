"use client"
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface HeroProps {
  imageUrl: string
  logoUrl: string
  title: string
  content: string[]
  index: number
}

const urls = ['siry-global', 'crefaz', 'cvc', 'recalcule']


export function Hero({imageUrl, logoUrl, title, content, index}: HeroProps){
  const router = useRouter()

  const handleNextCase = () => {
    const nextIndex = (index + 1) % urls.length; // Calculate the next index using modulo operator
    const nextUrl = `/cases/${urls[nextIndex]}`;
    router.push(nextUrl);
  };


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
      <div className="flex absolute bottom-20 right-20">
        <div className="w-full"></div>
        <button className="text-3xl flex items-center hover:scale-110 transition ease-in delay-500"  onClick={handleNextCase}>
          <span className="whitespace-nowrap">
          Próximo case
          </span>
          <ChevronRight size={30}/>
        </button>   
      </div>
      </section>
   )
}