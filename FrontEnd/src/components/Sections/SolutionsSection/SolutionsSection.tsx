import SolutionCard from "@/components/Solutions/SolutionCard";
import {
  Languages,
  Users,
  BookImage,
  GlobeIcon,
  Building2,
  Search,
  Handshake,
  LandPlot,
  Map,
} from "lucide-react";
import { useEffect } from "react";
import arrow from "@/assets/images/icons/arrow.svg"


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
        icon: <Languages className="size-[48px] max-sm:size-[32px]" />,
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
        icon: <Users className="size-[40px] max-sm:size-[32px]" />,
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
        icon: <BookImage className="size-[48px] max-sm:size-[32px]" />,
    },
    {
        title: 'Análise de Viabilidade internacional ',
        description:
            'Antes de expandir, é essencial saber para onde ir e como chegar.  Nossa análise identifica a viabilidade do seu produto ou serviço em  mercados internacionais, avaliando demanda, concorrência,  regulamentações e potencial de crescimento. Tome decisões estratégicas  com base em dados concretos e minimize riscos.',
        benefits: [
            'Identificação de mercados promissores com alto potencial de adoção.',
            'Redução de incertezas por meio de análise de dados robusta.',
            'Direcionamento inteligente de investimentos e esforços.',
        ],
        icon: <GlobeIcon className="size-[40px] max-sm:size-[32px]" />,
    },
    {
        title: 'Estudo de mercado nacional ',
        description:
            'Conheça profundamente o terreno onde você pisa. Mapeamos  tendências, comportamentos do consumidor e oportunidades no mercado  nacional para que sua empresa não apenas compita, mas se destaque.',
        benefits: [
            'Visão 360° do seu mercado de atuação.',
            'Identificação de tendências e gaps de mercado.',
            'Estratégias precisas para conquistar e fidelizar clientes.',
        ],
        icon: <Building2 className="size-[48px] max-sm:size-[32px]" />,
    },
    {
        title: 'Estudo de Concorrência',
        description:
            'Saber o que o outro lado está fazendo é metade da batalha vencida. Analisamos seus concorrentes para revelar pontos fortes, fraquezas,  estratégias e oportunidades que permitirão que você se posicione de  maneira única e competitiva.',
        benefits: [
            'Insights estratégicos sobre o posicionamento da concorrência.',
            'Vantagem competitiva através da diferenciação.',
            'Identificação de oportunidades não exploradas no setor.',
        ],
        icon: <Search className="size-[48px] max-sm:size-[32px]" />,
    },
    {
        title: 'Estudo de Fornecedores ',
        description:
            'Uma cadeia de suprimentos eficiente é o coração do seu negócio.  Encontramos os fornecedores ideais para sua operação, avaliando  qualidade, confiabilidade, prazo e custo-benefício.',
        benefits: [
            'Rede de fornecedores qualificados e alinhados com sua demanda.',
            'Redução de riscos e interrupções na operação.',
            'Otimização de custos sem abrir mão da qualidade.',
        ],
        icon: <Handshake className="size-[48px] max-sm:size-[32px]" />,
    },
    {
        title: 'Internacionalização de ambientes',
        description:
            'Adaptamos ambientes comerciais, como restaurantes, hotéis, lojas e eventos, para receber clientes internacionais com excelência. Tradução  de cardápios, sinalização, treinamento básico de idiomas para equipes e  muito mais. Ofereça uma experiência inclusiva e memorável.',
        benefits: [
            'Experiência multicultural para clientes estrangeiros.',
            'Maior visibilidade e atratividade para turistas e expatriados.',
            'Equipe preparada para atendimento internacional.',
        ],
        icon: <LandPlot className="size-[48px]" />,
    },
    {
        title: 'Mapeamento de feiras',
        description:
            'Identificamos as feiras e eventos nacionais e internacionais  ideais para o seu negócio. Potencialize seu networking, divulgue sua  marca e feche negócios em ambientes estrategicamente selecionados para  maximizar seu retorno.',
        benefits: [
            'Networking qualificado com players do setor',
            'Divulgação eficiente de produtos e serviços.',
            'Identificação de oportunidades de negócio e parcerias.',
        ],
        icon: <Map className="size-[48px] max-sm:size-[32px]" />,
    },
];

export default function SoluctionsSection() {
useEffect(() => {
    // Verifica se há um ID na URL (ex: /pagina#minha-secao)
    const hash = window.location.hash;
    
    if (hash) {
      // Tenta encontrar o elemento pelo ID
      const element = document.querySelector(hash) as HTMLElement;
      
      if (element) {
        // Pequeno delay opcional para garantir que o scroll terminou
        setTimeout(() => {
          element.focus();
        }, 100);
      }
    }
  }, []);

    return (
        <section className="w-full min-h-screen flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 py-8 sm:py-12 md:py-16 sm:px-[10%] max-sm:px-[6%] bg-background">
            <div className="w-full max-w-[1152px] ">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F143B] mb-2 sm:mb-4">
                    Confira nossas soluções
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#6C6C6C]">
                    Supere barreiras e conquiste mercados com nossa expertise
                </p>
            </div>

            <div className="w-full max-w-[1152px] ">
                <h3 id="Traducao" tabIndex={-1} className="focus:relative scroll-mt-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f143b] mb-4 sm:mb-6">
                    <img src={arrow} className=" absolute -left-10  max-sm:-top-2 "/>
                    Tradução
                </h3>

        <div className="mb-6 sm:mb-8 md:mb-10">
          <SolutionCard solution={solutionsData[0]} />
        </div>

        <h3
          id="consultoria-internacional" tabIndex={-1}
          className="focus:relative scroll-mt-10  text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f143b] mb-4 sm:mb-6 mt-8 sm:mt-10 md:mt-12"
        >
          <img src={arrow} className=" absolute -left-10  max-sm:-top-2 "/>
          Consultoria Internacional
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <SolutionCard solution={solutionsData[1]} />
          <SolutionCard solution={solutionsData[2]} />
        </div>
        <div></div>
        <h3
          id="estudo-de-mercado" tabIndex={-1}
          className="focus:relative scroll-mt-10  sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f143b] mb-4 sm:mb-6 mt-8 sm:mt-10 md:mt-12"
        >
          <img src={arrow} className=" absolute -left-10  max-sm:-top-2 "/>
          Estudo mercadológico
        </h3>
        <div className="mb-6 sm:mb-8 md:mb-10">
          <SolutionCard solution={solutionsData[3]} />
        </div>
        <div id="estudo-de-concorrencia" tabIndex={-1} className="focus:relative scroll-mt-10  mb-6 sm:mb-8 md:mb-10">
          <img src={arrow} className=" absolute -left-10 top-1 "/>
          <SolutionCard solution={solutionsData[4]} />
        </div>
        <div
          id="estudo-de-fornecedores" tabIndex={-1}
          className="focus:relative scroll-mt-10  grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
        >
          <img src={arrow} tabIndex={-1} className=" absolute -left-10 top-1 "/>
          <SolutionCard solution={solutionsData[5]} />
          <SolutionCard solution={solutionsData[6]} />
        </div>

        <h3
          id="internacionalizacao-e-mapeamento"  tabIndex={-1}
          className="focus:relative scroll-mt-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f143b] mb-4 sm:mb-6 mt-8 sm:mt-10 md:mt-12"
        >
          <img src={arrow} tabIndex={-1} className=" absolute -left-10  max-sm:-top-2"/>
          Internacionalização e mapeamento
        </h3>
        <div id="consultoria-internacional" tabIndex={-1} className="focus:relative scroll-mt-10  mb-6 sm:mb-8 md:mb-10">
          <img src={arrow} tabIndex={-1} className=" absolute -left-10 top-1 "/>
          <SolutionCard solution={solutionsData[7]} />
        </div>

        <div id="mapeamento-de-feiras" tabIndex={-1} className="focus:relative scroll-mt-10  mb-6 sm:mb-8 md:mb-10">
          <img src={arrow} tabIndex={-1} className=" absolute -left-10 top-1 "/>
          <SolutionCard solution={solutionsData[8]} />
        </div>
      </div>
    </section>
  );
}
