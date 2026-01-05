type Case = {
    title: string;
    description: string;
    image: string;
    link?: string;
};

type CaseCardProps = {
    caseData: Case;
};


export default function CaseCard({ caseData }: CaseCardProps) {
    return (
        <div
            className={`w-[88%] max-w-[1152px] flex flex-col items-center lg:flex-row max-sm:gap-2 gap-6 lg:gap-8 overflow-hidden`}
        >
            {/* Imagem */}
            <div className="w-full max-w-[660px] lg:w-[60%] h-[204px] lg:h-[345px]  bg-[#3284B0] rounded-[10px] justify-center flex items-center flex-shrink-0">
                <img
                    src={caseData.image}
                    alt={caseData.title}
                    className="w-[60%]  h-full object-center "
                />
            </div>

            {/* Conteúdo */}
            <div className=" w-[100%] max-w-[660px] lg:w-1/2 flex flex-col justify-between">
                <div>
                    <h3 className="text-3xl max-sm:text-[20px] lg:text-[40px] font-bold text-black mb-2 lg:mb-[32px]">
                        {caseData.title}
                    </h3>
                    <p className="text-base  font-normal max-sm:text-[16px] lg:text-[20px] text-[#898989] max-w-[460px] w-full mb-6 lg:mb-8">
                        {caseData.description}
                    </p>
                </div>

               
            </div>
        </div>
    );
}
