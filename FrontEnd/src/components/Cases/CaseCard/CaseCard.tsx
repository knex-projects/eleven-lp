type Case = {
    title: string;
    description: string;
    image: string;
    link?: string;
};

type CaseCardProps = {
    caseData: Case;
};

/**
 * Componente que exibe um card de case de sucesso.
 *
 * O card apresenta uma imagem, título, descrição e botão de ação.
 * O layout é responsivo e alterna a posição da imagem em desktop.
 *
 * @example
 * ```tsx
 * <CaseCard
 *   caseData={{
 *     title: "Case X",
 *     description: "Descrição do case...",
 *     image: "/path/to/image.jpg"
 *   }}
 * />
 * ```
 */
export default function CaseCard({ caseData }: CaseCardProps) {
    const handleLearnMore = () => {
        if (caseData.link) {
            window.open(caseData.link, '_blank');
        }
    };

    return (
        <div
            className={`w-full max-w-7xl flex flex-col items-center lg:flex-row gap-6 lg:gap-8 overflow-hidden`}
        >
            {/* Imagem */}
            <div className="w-full max-w-3xl lg:w-[60%] h-64 lg:h-100 min-h-[300px] bg-[#3284B0] rounded-[10px] flex-shrink-0">
                <img
                    src={caseData.image}
                    alt={caseData.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Conteúdo */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between">
                <div>
                    <h3 className="text-3xl lg:text-[40px] font-bold text-black mb-4 lg:mb-6">
                        {caseData.title}
                    </h3>
                    <p className="text-base font-medium lg:text-2xl text-black leading-[48px] mb-6 lg:mb-8">
                        {caseData.description}
                    </p>
                </div>

                <div className="flex justify-end">
                    <button
                        onClick={handleLearnMore}
                        className="max-w-[201px] px-6 py-4 bg-[#3477DD] text-white text-base lg:text-2xl font-medium rounded-lg cursor-pointer hover:bg-[#1B3D70] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#3477DD] focus:ring-offset-2"
                    >
                        Saiba mais
                    </button>
                </div>
            </div>
        </div>
    );
}
