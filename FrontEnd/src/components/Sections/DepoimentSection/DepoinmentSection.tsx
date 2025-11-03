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
    clientRole: "Dono da Empresa X",
  },
  {
    id: 2,
    text: "Muito bom, gostei bastante da dedicação de todos para nos ajudar!",
    clientName: "Igor Silva Brito",
    clientRole: "Dono da Empresa X",
  },
  {
    id: 3,
    text: "Gostei bastante, estavam sempre disponiveis! ",
    clientName: "Sarah Borges",
    clientRole: "Dono da Empresa X",
  },
];

const DepoinmentSection: React.FC = () => {
  return (
    <section className="relative py-16 px-4 bg-[#0f143b]">
      <div className="relative max-w-6xl mx-auto">
        <div className="p-8 mb-6">
          <h2 className="text-white text-center font-bold font-poppins text-5xl max-sm:text-[32px]">
            Depoimentos de clientes
          </h2>
        </div>

        <div className="p-8">
          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-28 px-4">
             {testimonials.map((testimonial, index) => (
               <div
                 key={testimonial.id}
                 className={`flex flex-col gap-4 ${
                   index % 2 === 0 ? "items-start" : "items-end"
                 } md:items-start`}
               >
                <div className="max-w-72">
                  <div className="bg-[#070920] rounded-lg p-6 relative xl:h-[188px] xl:w-[368px] max-sm:w-[264px] max-sm:h-[162px]  ">
                     <div className="text-[#898989] text-lg font-roboto max-sm:text-[16px]">
                       <span className="text-2xl text-white italic">"{" "}</span>
                        {testimonial.text}
                       <span className="text-2xl text-white italic">{" "}"</span>
                     </div>
                    <div
                      className={`absolute w-0 h-0 ${
                        index % 2 === 0
                          ? "border-l-[15px] border-l-[#070920] border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent right-6 -bottom-3 md:right-8 md:left-auto"
                          : "border-r-[15px] border-r-[#070920] border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent left-6 -bottom-3 md:right-8 md:left-auto md:border-r-transparent md:border-l-[15px] md:border-l-[#070920] "
                      }`}
                    />
                  </div>
                </div>

                 {/* Informações do Cliente */}
                 <div
                   className={`flex items-center gap-4 ${
                     index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                   } md:flex-row md:justify-start`}
                 >
                  {/* Ícone do Usuário */}
                  <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>

                   {/* Detalhes do Cliente */}
                   <div
                     className={`text-white ${
                       index % 2 === 0 ? "text-left" : "text-right"
                     } md:text-left`}
                   >
                    <h3 className="font-semibold text-lg">
                      {testimonial.clientName}
                    </h3>
                    <p className="text-sm text-white/80 hidden">
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
