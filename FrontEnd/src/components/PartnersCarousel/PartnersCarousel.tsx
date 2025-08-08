import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import PartnerLogo from '../PartnerLogo/PartnerLogo';
import Autoplay from 'embla-carousel-autoplay';

import probexComexLogo from '../../assets/images/partner1-PROBEXCOMEX.svg';
import prefeituraJpLogo from '../../assets/images/partner2-PREFEITURAJP.svg';
import aiesecLogo from '../../assets/images/partner3-AIESEC.svg';

const partners = [
    { src: probexComexLogo, alt: 'PROBEX COMEX UFPB' },
    { src: prefeituraJpLogo, alt: 'PREFEITURA DE JOÃO PESSOA' },
    { src: aiesecLogo, alt: 'AIESEC' },
];

/**
 * Um carrossel responsivo e automático para exibir os logotipos dos parceiros.
 *
 * Este componente utiliza o `embla-carousel` para criar um loop infinito
 * que avança automaticamente a cada 3 segundos. Ele também é otimizado
 * para duplicar a lista de parceiros se ela for muito pequena, garantindo
 * que o efeito de loop funcione corretamente.
 *
 * @returns {JSX.Element} O componente de carrossel de parceiros renderizado.
 */

export default function PartnersCarousel() {
    // Duplica a lista de parceiros apenas se houver poucos itens (menos de 7).
    const displayPartners =
        partners.length < 7 ? [...partners, ...partners] : partners;

    return (
        <section className="w-full h-auto bg-white text-black flex justify-center items-center flex-col py-32">
            <h1 className="text-4xl font-bold text-center mb-16">
                Empresas com quem já colaboramos
            </h1>

            <Carousel
                className="w-full"
                opts={{ align: 'start', loop: true }}
                plugins={[
                    Autoplay({
                        delay: 3000,
                        stopOnInteraction: false,
                        stopOnMouseEnter: true,
                    }),
                ]}
            >
                <CarouselContent className="-ml-16">
                    {displayPartners.map((partner, index) => (
                        <CarouselItem
                            key={`${partner.alt}-${index}`}
                            className="md:basis-1/2 lg:basis-1/3 pl-16 flex justify-center items-center"
                        >
                            <PartnerLogo src={partner.src} alt={partner.alt} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    );
}
