/**
 * Tipo que define a estrutura de dados de um serviço.
 *
 * @interface Service
 * @property {string} src - URL ou caminho da imagem de fundo do serviço
 * @property {string} title - Título/nome do serviço a ser exibido
 */
type Service = {
  src: string;
  title: string;
};

/**
 * Props do componente ServiceCard.
 *
 * @interface ServiceCardProps
 * @property {Service} service - Objeto contendo os dados do serviço a ser exibido
 */
type ServiceCardProps = {
  service: Service;
};

/**
 * Componente de card individual que representa um serviço da empresa.
 *
 * Características visuais:
 * - Imagem de fundo com sobreposição escura para melhor legibilidade
 * - Texto centralizado e responsivo
 * - Efeito hover com aumento suave (scale-105)
 * - Altura fixa para consistência visual
 * - Bordas arredondadas e sombra para profundidade

 *
 * @param {ServiceCardProps} props - As propriedades do componente
 * @param {Service} props.service - Dados do serviço (imagem e título)
 * @returns {JSX.Element} O card do serviço renderizado
 */
export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div
      className="w-full h-96 rounded-xl bg-cover bg-center flex flex-col gap-6 justify-center items-center text-center p-4 transition-transform duration-300 ease-in-out sm:hover:scale-105"
      style={{
        backgroundImage: `linear-gradient(rgba(25, 32, 89, 0.75), rgba(25, 32, 89, 0.75)), url(${service.src})`,
      }}
    >
      <h3 className="font-bold text-2xl text-[#FAF1F1] drop-shadow-md">
        {service.title}
      </h3>
      <button className="block sm:hidden py-2 px-6 bg-blue-500 text-white font-semibold rounded-sm text-sm">
        Saiba mais
      </button>
    </div>
  );
}
