import backgroundImage from "@/assets/images/backgrounds/sections/about-us.png";
import { IoArrowDownSharp } from "react-icons/io5";
import learnMoreIcon from "@/assets/images/icons/learn-more.png"

export default function AboutSection() {
  return (
	<section
        className="w-screen h-[870px] bg-cover  flex flex-col items-center max-lg:flex-col justify-center pt-20 text-primary-text bg-center max-md:pt-0 max-sm:h-[745px]"
        style={{
    backgroundImage: `linear-gradient(to right, rgba(19, 24, 69, 1), rgba(0,0,0,0.2)), url(${backgroundImage})`,
  }}
    >
        <div className="max-sm:w-[88%]  relative max-sm:pt-[224px] max-w-[1150px] w-[80%]">
          <h1 className="text-[48px] font-bold max-w-[572px]  w-[100%] max-lg:text-[40px] max-sm:text-[32px] ">
            Prazer, somos a Eleven Consultoria!
          </h1>
          <h2 className="text-[24px] font-normal  max-w-[481px] pt-6 text-subtext w-[100%] max-lg:text-[20px] text-justify max-sm:text-[16px] max-sm:max-w-[299px]">
            A Eleven oferece consultoria estratégica personalizada para expandir
            sua empresa no mercado internacional e fortalecer sua presença
            global.
          </h2>
        </div>
         <div className="mt-[20px] h-[300px] flex justify-center relative min-xl:hidden">
          <img className="w-[300px] animate-[Rotating_5s_linear_infinite]" src={learnMoreIcon} alt="Saiba mais"/>
          <IoArrowDownSharp className="text-[50px] text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
        </div>

       
    </section>
  )
}