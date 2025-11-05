import { IoArrowDownSharp } from 'react-icons/io5';
import background from '../../../assets/images/backgrounds/sections/cases.png';
import learnMoreIcon from '@/assets/images/icons/learn-more.png';
import CaseCard from '@/components/Cases/CaseCard';

/**
 * Dados dos cases de sucesso.
 * Adicionar os cases reais posteriormente
 */
const casesData = [
    {
        title: 'Case 1',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
        image: '',
        link: '#',
    },
    {
        title: 'Case 2',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
        image: '',
        link: '#',
    },
    {
        title: 'Case 3',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
        image: '',
        link: '#',
    },
];

export default function CasesSection() {
    return (
        <section>
            <div className="relative w-full h-[870px]  bg-cover bg-center  max-md:h-[745px]  text-white flex justify-evenly items-center pt-[280px] max-sm:pt-[224px] "  style={{ backgroundImage: `url(${background})`}}>
            <div className="max-sm:w-[88%] w-[80%]">
        <div className="">
          <h1 className="text-[48px] font-bold  max-w-[477px] max-sm:max-w-[318px] max-sm:text-[32px] max-sm:text-start">
           Cases de sucesso
          </h1>
          <div className="max-lg:hidden max-lg:absolute min-w-[80vw]"></div>
          <h2 className="text-[24px] font-normal  max-w-[740px] pt-10 text-subtext w-[100%] max-sm:max-w-[326px] max-sm:text-[16px] max-md:text-start">
            Nós transformamos a internacionalização de empresas em casos de sucesso concretos. 
            Nossa expertise estratégica e operacional tem sido fundamental para impulsionar clientes a expandirem globalmente, 
            cruzando fronteiras para alcançar novos mercados e patamares de excelência.
          </h2>
        </div>
        <div className="mt-[20px] h-[300px] flex justify-center relative">
          <img className="w-[300px] rotating" src={learnMoreIcon} alt="Saiba mais"/>
          <IoArrowDownSharp className="text-[50px] text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
        </div>
      </div>
            </div>

            <section className="w-full min-h-screen flex flex-col items-center justify-center gap-12 sm:gap-16 md:gap-20 py-12 sm:py-16 md:py-20 bg-background px-4 sm:px-6 lg:px-8">
                {casesData.map((caseItem, index) => (
                    <CaseCard key={index} caseData={caseItem} />
                ))}
            </section>
        </section>
    );
}
