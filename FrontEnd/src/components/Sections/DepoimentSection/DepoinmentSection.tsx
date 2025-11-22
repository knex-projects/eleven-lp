import { CircleUser } from "lucide-react";
import React from "react";

interface Testimonial {
  id: number;
  text: string;
  clientName: string;
  clientRole: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "O serviço de tradução foi muito satisfatório. Cumprindo prazos e sempre com muito profissionalismo.",
    clientName: "Ana Britto",
    clientRole: "",
  },
  {
    id: 2,
    text: "Muito bom, gostei bastante da dedicação de todos para nos ajudar!",
    clientName: "Igor Silva Brito",
    clientRole: "",
  },
  {
    id: 3,
    text: "Gostei bastante, estavam sempre disponiveis! ",
    clientName: "Sarah Borges",
    clientRole: "",
  },
  
];

const DepoinmentSection: React.FC = () => {
  return (
    <section className="relative py-16 px-[10%] bg-dark-background">
      <div className="relative max-w-6xl mx-auto">
        <div className="py-8 mb-6">
          <h2 className="text-white text-center font-bold font-poppins text-5xl max-sm:text-[32px]">
            Depoimentos de clientes
          </h2>
        </div>

        <div className="py-8">
          <div className="space-y-12 max-xl:space-y-10  relative  xl:grid xl:grid-cols-3 xl:gap-28 ">
             {testimonials.map((testimonial, index) => (
               <div
                 key={testimonial.id}
                 className={`flex flex-col gap-2  relative ${
                   index % 2 === 0 ? "items-start" : "items-end"
                 } xl:items-start`}
               >
                <div className="max-lg:max-w-96  ">
                  <div className="bg-[#070920]  rounded-lg p-6 relative sm:h-[188px] sm:w-[368px] max-sm:w-[264px] max-sm:h-[162px]  ">
                     <div className="text-[#898989] text-lg font-roboto max-sm:text-[16px]">
                       <span className="text-2xl text-white italic">"{" "}</span>
                        {testimonial.text}
                       <span className="text-2xl text-white italic">{" "}"</span>
                     </div>
                    <div
                       className={`absolute w-0 border-l-[25px] border-l-[#070920] border-t-[25px] border-t-transparent border-b-[25px] border-b-transparent right-6 -bottom-5    ${
                     index % 2 === 0 ? "left-24" : "left-24 max-lg:left-60 max-sm:left-36 max-lg:rotate-180"
                   } `}
                    />
                  </div>
                </div>

                 {/* Informações do Cliente */}
                 <div
                   className={`flex items-center   ${
                     index % 2 === 0 ? "flex-row" : "flex-row-reverse "
                   } xl:flex-row xl:justify-start`}
                 >
                  {/* Ícone do Usuário */}
                  <div className={`size-[80px]  rounded-full absolute bg-dark-background flex items-center justify-center ${
                     index % 2 === 0 ? "flex-row" : ""
                   } `}>
                    <CircleUser color="#fff" size={60}/>
                  </div>

                   {/* Detalhes do Cliente */}
                   <div
                     className={`text-white w-[364px] max-sm:w-[264px] ${
                       index % 2 === 0 ? "text-end" : "text-start"
                     } xl:text-end`}
                   >
                    <h3 className="font-semibold text-lg ">
                      {testimonial.clientName}
                    </h3>
                    <p className="text-sm text-white/80 ">
                      {testimonial.clientRole}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepoinmentSection;
