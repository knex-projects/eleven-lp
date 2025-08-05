import { Header } from '../components/header';

export function Sobre() {
    return (
        <>
            <section className="flex h-[870px] w-screen items-center justify-center gap-28 bg-[url(/sobreNosBG.svg)] bg-cover bg-center pt-20 text-[#F0F0F0] max-xl:gap-20 max-lg:flex-col max-md:pt-0">
                <Header page="Sobrenos" />
                <div>
                    <h1 className="w-[86vw] max-w-[493px] text-[48px] font-bold max-lg:pb-7 max-lg:text-[4.5vw] max-sm:text-[32px]">
                        Prazer, somos a Eleven Consultoria!
                    </h1>
                    {/* <iframe
                        className="min-lg:hidden min-lg:absolute max-w-[389px] w-[86vw]"
                        height="209"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="YouTube video"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    /> */}
                    <h2 className="w-[88vw] max-w-[481px] pt-10 text-[24px] font-normal text-[#CFCFCF] max-lg:text-[2.5vw] max-sm:pt-5 max-sm:text-[16px]">
                        A Eleven oferece consultoria estratégica personalizada
                        para expandir sua empresa no mercado internacional e
                        fortalecer sua presença global.
                    </h2>
                </div>

                <iframe
                    className="h-[294px] w-[552px] max-xl:w-[452px] max-lg:absolute max-lg:hidden"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            </section>
            <section className="flex h-[563px] w-screen flex-col items-center justify-center bg-[#F0F0F0] md:justify-evenly lg:flex-row-reverse">
                <div className=" ">
                    <h1 className="w-[80vw] max-w-[441px] pb-10 text-[48px] font-bold text-[#131737] max-lg:max-w-[390px] max-lg:text-[32px] max-sm:text-balance max-sm:pb-3">
                        Nossa História
                    </h1>
                    <h2 className="flex w-[80vw] max-w-[441px] text-[24px] font-normal text-[#333333] max-lg:text-[2.18vw] max-md:max-w-[390px] max-md:pb-5 max-md:text-[16px] max-sm:text-balance max-[300px]:leading-[8vw] max-[160px]:leading-[9vw]">
                        Somos uma Empresa Júnior (EJ) vinculada ao Movimento
                        Empresa Júnior, que surgiu da aspiração dos alunos de
                        Relações Internacionais da UEPB em colocar em prática a
                        teoria aprendida no curso e oferecer projetos de
                        excelência, Atuando desde 2017, com o objetivo de
                        inserir pequenas e médias empresas no mercado
                        internacional.
                    </h2>
                </div>
                <img
                    src="/Logoc.svg"
                    className="min-lg:order-first h-[188px] w-[525px] max-lg:h-[139px] max-lg:w-[390px]"
                ></img>
            </section>
            <section className="h-[200px] bg-black"></section>
        </>
    );
}
