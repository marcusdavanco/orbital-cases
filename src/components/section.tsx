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
      className={`px-[150px] py-[100px] ${
        dark ? "bg-[#1A1A1A]" : "bg-[#FFF]"
      } w-full ${customHeight ? "h-[597px]" : ""}`}
    >
      <div className="flex">
        <div className="mr-4 min-w-[729px] relative">
          <h6
            className={`text-3xl opacity-70 mb-4 ${
              dark ? "text-white" : "text-[#1A1A1A]"
            }`}
          >
            {title}
          </h6>
          {image?.url && (
            <Image
              src={image.url}
              width={image.width}
              height={image.height}
              alt="Web e Mobile"
              className={`${image.floating ? "absolute" : "relative"} animate-fade`}
              loading="lazy"
            />
          )}
        </div>
        <div className="flex flex-col mt-14 space-y-8">
          {content?.map((paragraph, index) => {
            return (
              <p
                key={index}
                className={`${
                  dark ? "text-white" : "text-[#1A1A1A]"
                } text-2xl max-w-[960px] `}
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
