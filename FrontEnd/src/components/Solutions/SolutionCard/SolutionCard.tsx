import type { ReactNode } from 'react';

/**
 * Tipo que define a estrutura de dados de uma solução.
 */
type Solution = {
    title: string;
    description: string;
    benefits: string[];
    icon: ReactNode;
};

/**
 * Props do componente SolutionCard.
 */
type SolutionCardProps = {
    solution: Solution;
};

export default function SolutionCard({ solution }: SolutionCardProps) {
    return (
        <div className="rounded-lg p-4 sm:p-6 md:p-8 text-white bg-[#0f143b] min-h-[300px] sm:min-h-[350px] md:min-h-[400px] flex flex-col">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                    {solution.title}
                </h3>
                <div className="flex-1 mx-2 sm:mx-4 border-t border-2 sm:border-4 border-[#cfcfcf]/25"></div>
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-cyan-400">
                    {solution.icon}
                </div>
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed mb-4 sm:mb-6 flex-grow text-justify">
                {solution.description}
            </p>

            <div>
                <div className="relative mb-2 sm:mb-3">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-2 sm:border-4 border-[#cfcfcf]/25"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-[#0f143b] px-2 sm:px-4">
                            Benefícios
                        </h4>
                    </div>
                </div>

                <ul className="space-y-1 sm:space-y-2">
                    {solution.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-base sm:text-lg md:text-xl lg:text-2xl mr-1 sm:mr-2">
                                •
                            </span>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                                {benefit}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
