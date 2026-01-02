import diversityIcon from "@/assets/images/icons/diversity-icon.svg";
import ethicsIcon from "@/assets/images/icons/ethics-icon.svg";
import sustainabilityIcon from "@/assets/images/icons/sustainability-icon.svg";
import planetIcon from "@/assets/images/icons/globe-icon.svg";

interface ValueCard {
  icon: string;
  title: string;
  description: string;
}

export default function ValuesSection() {
  const values: ValueCard[] = [
    {
      icon: diversityIcon,
      title: "Diversidade Cultural",
      description: "Valorizamos diferentes culturas, idiomas e formas de pensar como parte essencial do crescimento global."
    },
    {
      icon: ethicsIcon,
      title: "Ética e Transparência",
      description: "Atuamos de forma íntegra em todos os mercados, respeitando leis e práticas locais."
    },
    {
      icon: sustainabilityIcon,
      title: "Sustentabilidade",
      description: "Comprometemo-nos com práticas sustentáveis que preservam o meio ambiente para futuras gerações."
    },
    {
      icon: planetIcon,
      title: "Colaboração Global",
      description: "Acreditamos na força das parcerias internacionais e no trabalho em rede para alcançar resultados sustentáveis."
    }
  ];

  return (
    <section className="w-full min-h-[680px] flex flex-col items-center justify-center gap-10 bg-white px-8 py-16 md:px-[10%]">
      <h1 className="text-5xl font-bold text-[#0F143B] text-center mb-8 max-sm:text-[32px] max-sm:text-start max-sm:w-[88vw]">Nossos valores</h1>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {values.map((value, index) => (
          <div key={index} className="bg-[#0F143B] rounded-lg p-7 flex flex-col gap-4 ">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <img 
                  src={value.icon} 
                  alt={`${value.title} icon`}
                  className="w-8 h-8"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold text-white">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed max-sm:text-[16px]">
                  {value.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
