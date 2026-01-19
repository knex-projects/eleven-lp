import backgroundImage from "@/assets/images/backgrounds/sections/solutions.png";
import learnMoreIcon from "@/assets/images/icons/learn-more.png"
import { IoArrowDownSharp } from "react-icons/io5";

export default function OurSolutionsSection() {
  return (
	<section
        className="w-full h-[870px] flex bg-cover gap-28 max-xl:gap-20 items-center max-lg:flex-col justify-center pt-20 text-primary-text bg-center max-md:pt-0 max-sm:h-[745px]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="mt-[120px] max-sm:w-[88%] max-sm:mt-[220px] w-[80vw] max-w-[1152px] ">
        <div className="">
          <h1 className="text-[45px] font-bold  max-w-[493px] w-[80vw] max-lg:text-[40px]  max-sm:text-[32px] text-start ">
            Nossas Soluções
          </h1>
          <div className="max-lg:hidden max-lg:absolute min-w-[80vw]"></div>
          <h2 className="text-[24px] font-normal  max-w-[481px] pt-10 text-subtext w-[88vw] max-lg:text-[20px]  max-sm:text-[16px]  max-sm:max-w-[275px] max-sm:pt-5">
            Da ideia à execução:  transformamos desafios em oportunidades globais. Oferecemos serviços para impulsionar  sua presença nacional e internacional.
          </h2>
        </div>
        <div className="mt-[20px] h-[300px] flex justify-center relative">
          <img className="w-[300px] animate-[Rotating_5s_linear_infinite] " src={learnMoreIcon} alt="Saiba mais"/>
          <IoArrowDownSharp className="text-[50px] text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
        </div>
      </div>
    </section>
  )
}