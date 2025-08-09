"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import numberOne from "../../assets/images/1.svg";
import numberTwo from "../../assets/images/2.svg";
import numberThree from "../../assets/images/3.svg";
import { useState, useEffect } from "react";

interface Step {
  src: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    src: numberOne,
    title: "Envio do formulário",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim ante, alquam vel accumsan ac, ultricies quis turpis.",
  },
  {
    src: numberTwo,
    title: "Contato com o cliente",
    description:
      "Etiam iaculis vel neque vitae aliquam. Curabitur tincidunt ligula sit amet turpis facilisis molestie.",
  },
  {
    src: numberThree,
    title: "Entrega ao cliente",
    description:
      "Vestibulum id justo tellus. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
  },
];

export default function CustomerJourney() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => { api.off("select")
    };
  }, [api]);

  return (
    <section className="w-full h-auto bg-[#131737] text-white flex flex-col items-center px-6 sm:py-56 py-32">
      <h1 className="sm:text-5xl text-[2rem] font-bold text-center">
        Jornada do Cliente
      </h1>
      <p className="sm:text-2xl text-[1rem] py-2 text-center text-[#CFCFCF]">
        Entenda como funciona nosso processo
      </p>

      {/* DESKTOP */}

      <div className="hidden lg:flex flex-row justify-between items-start w-[80%] max-w-6xl gap-8 pt-12">
        {steps.map((step, index) => (
          <div 
            key={`desktop-${index}`} 
            className="flex-1 flex flex-col items-center max-w-md"
          >
            <img 
              className="mb-8 w-16 h-16" 
              src={step.src} 
              alt={`Passo ${index + 1}: ${step.title}`} 
            />
            <h2 className="text-2xl font-medium mb-4 text-center">
              {step.title}
            </h2>
            <p className="text-lg text-center text-[#CFCFCF]">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* MOBILE */}

      <div className="lg:hidden w-full max-w-md mx-auto mt-8">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {steps.map((step, index) => (
              <CarouselItem
                key={`mobile-${index}`}
                className="flex flex-col items-center px-4 pb-8"
              >
                <img 
                  className="mb-6 w-14 h-14" 
                  src={step.src} 
                  alt={`Passo ${index + 1}: ${step.title}`} 
                />
                <h2 className="text-2xl font-medium mb-4 text-center">
                  {step.title}
                </h2>
                <p className="text-lg text-center text-[#CFCFCF]">
                  {step.description}
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center gap-2 mt-6">
            {steps.map((_, index) => (
              <button
                key={`indicator-${index}`}
                onClick={() => api?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-opacity ${
                  current === index ? 'bg-white' : 'bg-white opacity-30'
                }`}
                aria-label={`Ir para o passo ${index + 1}`}
                aria-current={current === index ? "true" : "false"}
              />
            ))}
          </div>

        </Carousel>
      </div>
    </section>
  );
}