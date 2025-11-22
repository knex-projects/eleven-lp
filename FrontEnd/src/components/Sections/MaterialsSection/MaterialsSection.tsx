import { IoArrowDownSharp } from 'react-icons/io5'
import backgroundImage from '../../../assets/images/backgrounds/sections/Materials.png'
import learnMoreIcon from "@/assets/images/icons/learn-more.png"

export default function MaterialsSection(){
    return(
      <section
            className="w-screen h-[870px] flex bg-cover gap-28 max-xl:gap-20 items-center max-lg:flex-col justify-center pt-20 text-primary-text bg-center max-md:pt-0"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
        <div className="mt-[120px]">
          <div className="">
            <h1 className="text-[45px] font-bold  max-w-[493px] w-[86vw] max-lg:text-[40px] max-lg:text-center">
              Materiais Gratuitos
            </h1>
            <div className="max-lg:hidden max-lg:absolute min-w-[80vw]"></div>
            <h2 className="text-[24px] font-normal  max-w-[481px] pt-10 text-subtext w-[88vw] max-lg:text-[20px] max-lg:text-center">
              Acreditamos que o conhecimento é a chave para uma internacionalização bem-sucedida. Por isso, nossa empresa tem o prazer de oferecer um vasto acervo de materiais gratuitos desenvolvidos por nossos especialistas.
            </h2>
          </div>
          <div className="mt-[20px] h-[300px] flex justify-center relative">
            <img className="w-[300px] rotating" src={learnMoreIcon} alt="Saiba mais"/>
            <IoArrowDownSharp className="text-[50px] text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
          </div>
        </div>
      </section>
    )
}
