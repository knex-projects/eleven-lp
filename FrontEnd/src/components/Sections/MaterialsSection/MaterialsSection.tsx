import { IoArrowDownSharp } from 'react-icons/io5'
import backgroundImage from '../../../assets/images/backgrounds/sections/Materials.png'
import learnMoreIcon from "@/assets/images/icons/learn-more.png"

export default function MaterialsSection(){
    return(
        <section>
            <div className="relative w-full h-[870px]  bg-cover bg-center  max-md:h-[745px]  text-white flex justify-evenly items-center pt-[280px] max-sm:pt-[224px]"  style={{ backgroundImage: `url(${background})`}}>
                 <div className="max-sm:w-[88%] w-[80%]">
        <div className="">
          <h1 className="text-[48px] font-bold  max-w-[477px] max-sm:max-w-[318px] max-sm:text-[32px] max-sm:text-start">
           Materiais Gratuitos
          </h1>
          <h2 className="text-[24px] font-normal  max-w-[522px] pt-9 text-subtext w-[100%] max-sm:max-w-[275px] max-sm:text-[16px] max-md:text-start">
           Acreditamos que o conhecimento é a chave para uma internacionalização bem-sucedida. Por isso, nossa empresa tem o prazer de oferecer um vasto acervo de materiais gratuitos desenvolvidos por nossos especialistas.
          </h2>
        </div>
      </section>
    )
}
