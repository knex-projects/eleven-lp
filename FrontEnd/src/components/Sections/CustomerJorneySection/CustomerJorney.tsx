import numberOne from "@/assets/images/icons/1.svg";
import numberTwo from "@/assets/images/icons/2.svg";
import numberThree from "@/assets/images/icons/3.svg";

interface Step {
  src: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    src: numberOne,
    title: "Primeiro Contato",
    description:
      "Após o agendamento pelo contato da página, realizamos uma reunião de diagnóstico para compreender seu negócio e definir as melhores formas de apoiá-lo.",
  },
  {
    src: numberTwo,
    title: "Contratação",
    description:
      "Com base no diagnóstico, elaboramos uma proposta personalizada e, após aprovação, formalizamos um contrato adequado ao seu negócio.",
  },
  {
    src: numberThree,
    title: "Entrega do projeto",
    description:
      "Por fim, você recebe um projeto de alto nível para levar sua empresa ao mundo! E ainda pedimos seu feedback para continuar entregando o melhor.",
  },
];

export default function CustomerJourney() {
  return (
    <section className="w-full h-auto bg-[#131737] text-white flex flex-col items-center  px-6 py-10 md:py-24">
      <h1 className="text-[32px] md:text-[48px] font-bold text-center mb-2">
        Jornada do cliente
      </h1>
      <p className="text-[16px] md:text-[24] text-gray-300 text-center mb-12">
        Entenda como funciona nosso processo
      </p>

      <div className="grid grid-cols-1 xl:grid-cols-3 w-full max-w-[1150px] gap-2  justify-items-center ">
        {steps.map((step, index) => (
          <div
            key={`desktop-${index}`}
            className="flex-1 flex flex-col items-center bg-white/10 border-3 border-white/25 shadow-[inset_4px_4px_4px_rgba(255,255,255,0.25),inset_-4px_-4px_4px_rgba(255,255,255,0.25)]  rounded-lg py-8 px-6 backdrop-blur-sm h-[436px] w-[344px] xl:w-[362px] "
          >
            <div className="w-14 h-14 rounded-full bg-[#3477DD] flex items-center justify-center text-white font-medium text-5xl mb-4">
              <p className="">
                {index + 1}  
              </p>
            </div>

            <h2 className="xl:text-[32px] text-[24px] font-bold mb-4 text-center ">
              {step.title}
            </h2>

            <hr className="w-full border-[#6C6C6C] border-2 mb-4 rounded-full" />

            <p className=" xl:text-[22px] text-[20px] font-normal text-left leading-relaxed text-[#B0B0B0]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
