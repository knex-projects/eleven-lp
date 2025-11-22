import { useState, useEffect } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import service1Background from "@/assets/images/backgrounds/services/1.jpg";
import service3Background from "@/assets/images/backgrounds/services/3.jpg";
import service4Background from "@/assets/images/backgrounds/services/4.jpg";
import service5Background from "@/assets/images/backgrounds/services/5.jpg";
import service6Background from "@/assets/images/backgrounds/services/6.jpg";
import service7Background from "@/assets/images/backgrounds/services/7.jpg";
import service8Background from "@/assets/images/backgrounds/services/8.jpg";

const servicesData = [
  {
    src: service1Background,
    title: "Estudo de mercado",
    href: "/Solucoes#estudo-de-mercado",
  },
  {
    src: service3Background,
    title: "Internacionalização e mapeamento",
    href: "/Solucoes#internacionalizacao-e-mapeamento",
  },
  {
    src: service4Background,
    title: "Estudo de concorrência",
    href: "/Solucoes#estudo-de-concorrencia",
  },
  {
    src: service5Background,
    title: "Estudo de fornecedores",
    href: "/Solucoes#estudo-de-fornecedores",
  },
  {
    src: service6Background,
    title: "Mapeamento de feiras",
    href: "/Solucoes#mapeamento-de-feiras",
  },
  { src: service7Background, title: "Traduções", href: "/Solucoes#traducao" },
  {
    src: service8Background,
    title: "Consultoria Internacional",
    href: "/Solucoes#consultoria-internacional",
  },
];

export default function ServicesSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateActiveIndex = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    updateActiveIndex();
    api.on("select", updateActiveIndex);

    return () => {
      api.off("select", updateActiveIndex);
    };
  }, [api]);

  return (
    <section className="w-full h-auto bg-[#f1f1f1] flex justify-center items-center flex-col py-32 px-4">
      <div className="text-center mb-12 w-full">
        <h1 className="text-3xl md:text-4xl text-[#131737] font-bold">
          Conheça nossos serviços
        </h1>
        <p className="text-sm md:text-base font-medium text-[#6C6C6C] mt-2">
          Soluções pensadas para você.
        </p>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block w-full relative">
        <Carousel
          className="w-full"
          opts={{ align: "center", loop: true }}
          setApi={setApi}
        >
          <CarouselContent className="-ml-16">
            {servicesData.map((service, index) => (
              <CarouselItem key={index} className="basis-1/2 pl-16 py-6">
                <div className="px-8">
                  <ServiceCard service={service} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="left-20 bg-[#3477DD] text-white border-none w-14 h-14 hover:bg-[#1B3D70] focus:bg-[#1B3D70] focus:ring-2 focus:ring-white focus:ring-offset-2 z-20"
            aria-label="Serviço anterior"
          />
          <CarouselNext
            className="right-20 bg-[#3477DD] text-white border-none w-14 h-14 hover:bg-[#1B3D70] focus:bg-[#1B3D70] focus:ring-2 focus:ring-white focus:ring-offset-2 z-20"
            aria-label="Próximo serviço"
          />
        </Carousel>

        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#f1f1f1] via-[#f1f1f1]/80 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#f1f1f1] via-[#f1f1f1]/80 to-transparent pointer-events-none z-10" />
      </div>

      {/* MOBILE */}
      <div className="md:hidden w-full max-w-lg mx-auto relative">
        <Carousel
          className="w-full"
          opts={{ align: "center", loop: true }}
          setApi={setApi}
        >
          <CarouselContent className="-ml-4">
            {servicesData.map((service, index) => (
              <CarouselItem key={index} className="basis-full pl-4">
                <div className="px-2">
                  <ServiceCard service={service} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex justify-center mt-4 space-x-2">
          {servicesData.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-[#505050] scale-110"
                  : "bg-[#E2E2E2]"
              }`}
              aria-label={`Ir para o slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
