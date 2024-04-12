import Image from "next/image"

interface SectionProps {
  dark?: Boolean
  imageUrl?: string
  title: string
  content: string[]
  customHeight?: number
  image?: {
    url: string
    floating: Boolean
    height: number
    width: number
  }  
}

export function Section({ 
  dark = false, 
  image,
  title,
  content,
  customHeight,  
}: SectionProps) {
  return (
    <section className={`px-[150px] py-[100px] ${dark ? "bg-[#1A1A1A]" : "bg-[#FFF]" } w-full ${customHeight ? `h-[${customHeight}px]` : ""}`}>
      <div className="flex">            
        <div className="mr-4 min-w-[729px] relative">
        <h6 className={`text-3xl opacity-70 mb-4 ${dark ? "text-white" : "text-[#1A1A1A]"}`}>{title}</h6>    
          {image?.url && <Image 
            src={image?.url}
            width={image?.width}
            height={image?.height}
            alt="Web e Mobile"
            className={image?.floating ? "absolute" : "relative"}
          />}
        </div>  
        <div className="flex flex-col mt-14 space-y-8">
          {
            content?.map((paragraph, index) => {
              return <p key={index} className={`${dark ? "text-white" : "text-[#1A1A1A]"} text-2xl max-w-[960px] `}>                
                { paragraph.includes(":") ?
                  <>
                  <span className="font-bold">{`${paragraph.split(':')[0]}:`}</span>
                  <span>{`${paragraph.split(':')[1]}`}</span>
                  </> : 
                  paragraph                }
                
              </p>          
            })
          }          
        </div>
      </div>
    </section>
  )
}