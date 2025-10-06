import ServiceCard from '../ServiceCard/ServiceCard';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

import service1Background from '@/assets/images/backgrounds/services/1.jpg';
import service2Background from '@/assets/images/backgrounds/services/2.jpg';
import service3Background from '@/assets/images/backgrounds/services/3.jpg';
import service4Background from '@/assets/images/backgrounds/services/4.jpg';
import service5Background from '@/assets/images/backgrounds/services/5.jpg';
import service6Background from '@/assets/images/backgrounds/services/6.jpg';
import service7Background from '@/assets/images/backgrounds/services/7.jpg';
import service8Background from '@/assets/images/backgrounds/services/8.jpg';
/**
 * Dados dos serviços oferecidos pela empresa.
 * Cada serviço contém uma imagem de fundo e um título descritivo.
 */
const servicesData = [
    { src: service1Background, title: 'Estudo de mercado' },
    { src: service2Background, title: 'Vistos e dupla cidadania' },
    { src: service3Background, title: 'Análise de viabilidade internacional' },
    { src: service4Background, title: 'Estudo de concorrência' },
    { src: service5Background, title: 'Estudo de fornecedores' },
    { src: service6Background, title: 'Mapeamento de feiras' },
    { src: service7Background, title: 'Traduções' },
    {
        src: service8Background,
        title: 'Analise burocrática para importação e exportação',
    },
];

/**
 * Componente da seção de serviços que exibe os serviços oferecidos pela empresa.
 *
 * No desktop, os serviços são apresentados em um carrossel horizontal que mostra
 * 1 card por vez, com navegação por setas e efeitos de fade nas laterais.
 *
 * No mobile, todos os serviços são exibidos em uma coluna vertical estática,
 * permitindo scroll natural da página.
 *
 * Características do carrossel desktop:
 * - Loop infinito habilitado
 * - Navegação por setas
 * - Gradientes de fade nas bordas para transição suave
 *
 * @returns {JSX.Element} O componente de seção de serviços renderizado
 */
export default function ServicesSection() {
    return (
        <section className="w-full h-auto bg-[#f1f1f1] flex justify-center items-center flex-col py-32 px-8">
            <div className="text-center mb-12 w-full">
                <h1 className="text-5xl text-[#131737] font-bold">
                    Conheça nossos serviços
                </h1>
                <p className="text-xl font-medium text-[#6C6C6C] mt-2">
                    Soluções pensadas para você.
                </p>
            </div>

            {/* DESKTOP */}
            <div className="hidden md:block w-full relative">
                <Carousel
                    className="w-full"
                    opts={{ align: 'center', loop: true }}
                >
                    <CarouselContent className="-ml-16">
                        {servicesData.map((service, index) => (
                            <CarouselItem
                                key={index}
                                className="basis-1/2 pl-16 py-6"
                            >
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
            <div className="md:hidden w-full max-w-sm mx-auto">
                <div className="grid grid-cols-1 gap-6">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
