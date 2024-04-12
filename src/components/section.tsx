import Image from "next/image";

interface SectionProps {
  dark?: boolean;
  imageUrl?: string;
  title: string;
  content: string[];
  customHeight?: number;
  image?: {
    url: string;
    floating: boolean;
    height: number;
    width: number;
  };
}

export function Section({
  dark = false,
  image,
  title,
  content,
  customHeight,
}: SectionProps) {

  function formatText(paragraph: string, wordsToBold: string[]): JSX.Element {
    const regex = new RegExp(`\\b(${wordsToBold.join("|")})\\b`, "gi");
    const parts = paragraph.split(regex);
    const formattedParts = parts.map((part) =>
      wordsToBold.includes(part) ? <b key={part}>{part}</b> : part
    );
    return <span>{formattedParts}</span>;
  }

  return (
    <section
      className={`lg:px-[150px] px-6  lg:py-[100px] py-[50px] ${
        dark ? "bg-[#1A1A1A]" : "bg-[#FFF]"
      } w-full ${customHeight ? "h-[597px]" : ""}`}
    >
      <div className="flex flex-col lg:flex-row">
        <h6
          className={`lg:text-3xl text-sm lg:font-normal font-semibold opacity-70 lg:mb-4 mb-6 ${
            dark ? "text-white" : "text-[#1A1A1A]"
          }`}
        >
          {title}
        </h6>
        <div className="lg:mr-4 lg:min-w-[729px] relative  lg:order-1 order-2">          
          {image?.url && (
            <Image
              src={image.url}
              width={image.width}
              height={image.height}
              alt="Web e Mobile"
              className={`lg:${image.floating ? "absolute" : "relative"}  animate-fade`}
              loading="lazy"
            />
          )}
        </div>
        <div className="flex flex-col lg:mt-14 space-y-8 lg:mb-0 mb-10 lg:order-1 order-1">
          {content?.map((paragraph, index) => {
            return (
              <p
                key={index}
                className={`${
                  dark ? "text-white" : "text-[#1A1A1A]"
                } lg:text-2xl text-base max-w-[960px] `}
              >
                {paragraph.includes(":") && !paragraph.endsWith(":") ? (
                  <>
                    <span className="font-bold">
                      {`${paragraph.split(":")[0]}:`}
                    </span>
                    <span>{`${paragraph.split(':')[1]}`}</span>
                  </>
                ) : (
                  formatText(paragraph, ['SPC', 'CRM Bitrix24', 'qualificação de leads.'])
                )}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
