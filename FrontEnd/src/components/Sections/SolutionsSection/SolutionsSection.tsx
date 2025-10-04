import SolutionCard from '@/components/Solutions/SolutionCard';
import { Languages, Users, BookImage } from 'lucide-react';

const solutionsData = [
    {
        title: 'Tradução e revisão de texto',
        description:
            'Nossos serviços de tradução e revisão transformam seu conteúdo em poderosas ferramentas de comunicação global. Traduzimos artigos, manuais, sites, documentação e materiais promocionais com precisão e contexto cultural, garantindo que sua mensagem ressoe perfeitamente em inglês e espanhol. Quebre barreiras, amplie seu alcance e conecte-se com um público global de forma autêntica e profissional.',
        benefits: [
            'Globalize sua comunicação e aumente seu impacto internacional.',
            'Conteúdo preciso e culturalmente adaptado, sem perder a essência da sua marca.',
            'Supere barreiras linguísticas e abra portas para novos mercados e oportunidades.',
        ],
        icon: <Languages className="w-8 h-8" />,
    },
    {
        title: 'A dupla cidadania',
        description:
            'A dupla cidadania consiste no reconhecimento da nacionalidade do indivíduo em dois países diferentes, permitindo o direito e o acesso ao mercado exterior, como também o livre acesso a um novo país sem a necessidade de obtenção de visto. No entanto, existem diversos entraves para comprovação ao seu direito legal.',
        benefits: [
            'Orientação passo a passo das etapas do processo.',
            'Maior conhecimento do funcionamento das burocracias.',
            'Aumento das chances de um visto aprovado.',
        ],
        icon: <Users className="w-8 h-8" />,
    },
    {
        title: 'Visto',
        description:
            'A consultoria de visto é uma opção para quem deseja obter ajuda profissional para solicitar um visto. O serviço consiste na construção de um guia para facilitar as partes burocráticas desta documentação, assim como um plano de como se portar durante a entrevista consular.',
        benefits: [
            'Orientação passo a passo das etapas do processo.',
            'Maior conhecimento do funcionamento das burocracias.',
            'Aumento das chances de um visto aprovado.',
        ],
        icon: <BookImage className="w-8 h-8" />,
    },
];

export default function SoluctionsSection() {
    return (
        <section className="w-full min-h-screen flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 py-8 sm:py-12 md:py-16 bg-background">
            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F143B] mb-2 sm:mb-4">
                    Confira nossas soluções
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#6C6C6C]">
                    Supere barreiras e conquiste mercados com nossa expertise
                </p>
            </div>

            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* SEÇÃO DE TRADUÇÃO - DESCOMENTE CASO OUTRA PESSOA NÃO TENHA FEITO */}
                {/* <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f143b] mb-4 sm:mb-6">
                    Tradução
                </h3>

                <div className="mb-6 sm:mb-8 md:mb-10">
                    <SolutionCard solution={solutionsData[0]} />
                </div> */}

                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f143b] mb-4 sm:mb-6 mt-8 sm:mt-10 md:mt-12">
                    Consultoria Internacional
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    <SolutionCard solution={solutionsData[1]} />
                    <SolutionCard solution={solutionsData[2]} />
                </div>
            </div>
        </section>
    );
}
