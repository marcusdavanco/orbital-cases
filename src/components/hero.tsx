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
        <section className="w-full h-[880px] lg:pt-20 pt-10 lg:px-[200px] px-6 relative">
        <Image 
          src={imageUrl}
          fill
          objectFit="fill"
          alt="Orbital Tech Logo"        
          quality={100}
          className="animate-fade-left animate-duration-[1500ms] animate-ease-in -z-10"
          priority={true}
        />
        <Image 
          src="/Logo_Horizontal.svg"
          width={155}
          height={24}
          alt="Orbital Tech Logo"        
          className="mb-[235px] lg:w-[355px] lg:h-[55px]"
          
        />
        <Image
          src={logoUrl}
          width={66}
          height={50}
          alt="Siry Logo"
          className="mb-5 lg:mb-7 animate-fade-down animate-duration-[1500ms] animate-ease-in lg:w-[132px] lg:h-[100px]"        
        />
        <h2 className="text-white font-bold lg:text-7xl text-2xl mb-6 lg:mb-9 animate-fade-down animate-duration-[1500ms] animate-ease-in lg:max-w-[60%]">
          {title}
        </h2>
        {
          content.map((service, index) => {
            return <p key={index} className="text-white lg:text-2xl text-sm mb-3 animate-fade-down animate-duration-[1500ms] animate-ease-in">{service}</p>
          })
        }   
        <div className="flex absolute lg:bottom-20 lg:right-20 bottom-14 right-4">
          <div className="w-full"></div>
          <button className="lg:text-3xl text-sm flex items-center hover:scale-110 transition ease-in delay-500"  onClick={handleNextCase}>
            <span className="whitespace-nowrap">
            Próximo case
            </span>
            <ChevronRight className="lg:h-6 lg:w-6 h-4 w-4"/>
          </button>   
        </div>
        </section>
   )
}