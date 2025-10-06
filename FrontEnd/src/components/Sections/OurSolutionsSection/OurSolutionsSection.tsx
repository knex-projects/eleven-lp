import backgroundImage from "@/assets/images/backgrounds/sections/solutions.png";
import learnMoreIcon from "@/assets/images/icons/learn-more.png"
import { IoArrowDownSharp } from "react-icons/io5";


export default function OurSolutionsSection() {
  return (
	<section
        className="w-screen h-[870px] bg-cover gap-28 max-xl:gap-20 items-center max-lg:flex-col justify-center pt-20 text-primary-text bg-center max-md:pt-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="ml-[80px] min-lg:mr-auto mt-[200px]">
        <h1 className="text-[45px] font-bold  max-w-[493px] w-[86vw] max-lg:text-[40px] max-lg:text-center">
          Nossas soluções
        </h1>
        <h2 className="text-[24px] font-normal  max-w-[481px] pt-10 text-subtext w-[88vw] max-lg:text-[20px] max-lg:text-center">
          Da ideia à execução:  transformamos desafios em oportunidades globais. oferecemos serviços para impulsionar  sua presença nacional e internacional
        </h2>
      </div>
      <div className="mt-[20px] flex justify-center">
        <img className="w-[300px] rotating" src={learnMoreIcon} alt="Saiba mais"/>
        <IoArrowDownSharp className="text-[72px] absolute bottom-[210px]"/>
      </div>
    </section>
  )
}