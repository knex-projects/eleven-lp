import SolutionCard from "@/components/Solutions/SolutionCard";
import {
  Languages,
  Users,
  BookImage,
  GlobeIcon,
  Building2,
  LandPlot,
} from "lucide-react";
import { useEffect } from "react";
import arrow from "@/assets/images/icons/arrow.svg"


const solutionsData = [
    {
        title: 'Tradução',
        description:
            'A tradução é a solução para quem deseja transcrever ou revisar artigos, livros, sites ou qualquer outro tipo de texto ou conteúdo de um idioma para outro. Atualmente, a Eleven presta essa solução para o inglês e o espanhol.',
        benefits: [
            'Globalize sua comunicação e aumente seu impacto internacional.',
            'Conteúdo preciso e culturalmente adaptado, sem perder a essência da sua marca.',
            'Supere barreiras linguísticas e abra portas para novos mercados e oportunidades.',
        ],
        icon: <Languages className="size-[48px] max-sm:size-[32px]" />,
    },
    {
        title: 'Dupla Cidadania',
        description:
            'Dupla Cidadania refere-se ao direito do indivíduo de possuir nacionalidade reconhecida por dois países, seja através de descendência comprovada ou vínculo com cidadãos de outro país. Na consultoria internacional, facilitamos o processo para você, por meio de uma orientação detalhada, precisa e personalizada de todas as exigências legais, desde organização da documentação necessária até preparação para entrevistas consulares.',
        benefits: [
            'Acompanhamento personalizado.',
            'Análise e coleta de toda a documentação necessária para o processo',
            'Guia comportamental para a entrevista consular.',
        ],
        icon: <Users className="size-[40px] max-sm:size-[32px]" />,
    },
    {
        title: 'Visto',
        description:
            'Para você que deseja solicitar um visto para fins profissionais ou de turismo, a consultoria internacional de visto é essencial.  Na  Eleven Jr., fornecemos todas as orientações aos nossos clientes, elaboramos um guia de passo a passo das etapas do processo, dicas de comportamento para a entrevista consular e documentações necessárias para se solicitar um visto.',
        benefits: [
            'Orientação passo a passo das etapas do processo.',
            'Maior conhecimento do funcionamento das burocracias.',
            'Aumento das chances de um visto aprovado.',
        ],
        icon: <BookImage className="size-[48px] max-sm:size-[32px]" />,
    },
    {
        title: 'Análise de Viabilidade Internacional',
        description:
            'A Análise de Viabilidade Internacional consiste em um estudo para avaliar questões burocráticas necessárias para a internacionalização de seus produtos ou serviços de maneira eficaz, segura e financeiramente vantajosa. Envolve uma análise ampla do mercado internacional e suas tendências, visando à coleta de informações sobre a demanda do produto ou solução, bem como sobre os processos burocráticos em diferentes países.',
        benefits: [
            'Identificação de mercados promissores com alto potencial de adoção.',
            'Redução de incertezas por meio de análise de dados robusta.',
            'Direcionamento inteligente de investimentos e esforços.',
        ],
        icon: <GlobeIcon className="size-[40px] max-sm:size-[32px]" />,
    },
    {
        title: 'Estudo de Mercado Nacional',
        description:
            'O Estudo de Mercado Nacional é ideal para empreendimentos que desejam crescer e se posicionar estrategicamente, nosso estudo indica as melhores condições para a expansão e orienta como atuar com mais segurança. A Eleven Jr. identifica tendências de consumo, oportunidades regionais, fornecedores em potencial, caminhos logísticos e análise ampla da concorrência para que a sua empresa tome decisões mais assertivas.',
        benefits: [
            'Visão 360° do seu mercado de atuação.',
            'Identificação de tendências e gaps de mercado.',
            'Estratégias precisas para conquistar e fidelizar clientes.',
        ],
        icon: <Building2 className="size-[48px] max-sm:size-[32px]" />,
    },
    {
        title: 'Internacionalização de Ambientes',
        description:
            'Torne seu negócio mais acessível e preparado para receber clientes internacionais! Com nosso serviço de Internacionalização de Ambientes, você adapta seu espaço para atender públicos de diferentes nacionalidades com materiais traduzidos, orientação linguística para a equipe e comunicação clara. Amplie sua visibilidade, supere barreiras linguísticas e conquiste um público global com mais profissionalismo e hospitalidade.',
        benefits: [
            'Experiência multicultural para clientes estrangeiros.',
            'Maior visibilidade e atratividade para turistas e expatriados.',
            'Equipe preparada para atendimento internacional.',
        ],
        icon: <LandPlot className="size-[48px]" />,
    }
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
        <section className="relative overflow-hidden w-full min-h-screen flex flex-col items-center  justify-center gap-6 sm:gap-8 md:gap-10 py-8 sm:py-12 md:py-16 sm:px-[10%] max-sm:px-[6%] bg-background">
            <div className="w-full max-w-[1152px] ">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F143B] mb-2 sm:mb-4">
                    Confira nossas soluções
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#6C6C6C]">
                    Supere barreiras e conquiste mercados com nossa expertise
                </p>
            </div>

            <div className="w-full max-w-[1152px] ">
                <h3 id="Traducao" tabIndex={-1} className="focus:relative md:scroll-mt-10  text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f143b] mb-4 sm:mb-6">
                    <img src={arrow} className=" absolute -left-10  max-sm:-top-2 "/>
                    Tradução
                </h3>

        <div className="mb-6 sm:mb-8 md:mb-10">
          <SolutionCard solution={solutionsData[0]} />
        </div>

        <h3
          id="consultoria-internacional" tabIndex={-1}
          className="focus:relative   text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f143b] mb-4 sm:mb-6 mt-8 sm:mt-10 md:mt-12"
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
          className="focus:relative -scroll-mt-96  sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f143b] mb-4 sm:mb-6 mt-8 sm:mt-10 md:mt-12"
        >
          <img src={arrow} className=" absolute -left-10  max-sm:-top-2 "/>
          Estudo Mercadológico
        </h3>
        <div className="mb-6 sm:mb-8 md:mb-10">
          <SolutionCard solution={solutionsData[4]} />
        </div>
        

        <h3
        
          className="focus:relative scroll-mt-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f143b] mb-4 sm:mb-6 mt-8 sm:mt-10 md:mt-12"
        >
          <img src={arrow} tabIndex={-1} className=" absolute -left-10  max-sm:-top-2"/>
          Internacionalização
        </h3>
        <div id="internacionalizacao-de-ambientes" tabIndex={-1} className="focus:relative -scroll-mt-96  mb-6 sm:mb-8 md:mb-10">
          <img src={arrow} tabIndex={-1} className=" absolute -left-10 top-1  "/>

        </div>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <SolutionCard solution={solutionsData[5]} />
          <SolutionCard solution={solutionsData[3]} />
        </div>
        
  
      </div>
    </section>
  );
}
