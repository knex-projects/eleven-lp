import { Header } from "../components/header";

export function Sobre() {
  return (
    <section className="w-screen h-[870px] bg-[url(/sobreNosBG.svg)] bg-cover flex gap-28 max-xl:gap-20 items-center max-lg:flex-col justify-center pt-20 text-[#F0F0F0] bg-center max-md:pt-0">
      <Header page="Sobrenos" />
      <div >
        <h1 className="text-[48px] font-bold max-w-[493px] w-[86vw] max-sm:text-[32px] max-lg:text-[4.5vw] max-lg:pb-7">
          Prazer, somos a Eleven Consultoria!
        </h1>
        <iframe
        className="min-lg:hidden min-lg:absolute max-w-[389px] w-[86vw]"
        height="209"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
        <h2 className="text-[24px] font-normal  max-w-[481px] pt-10 text-[#CFCFCF] w-[88vw] max-lg:text-[2.5vw] max-sm:text-[16px] max-sm:pt-5">
          A Eleven oferece consultoria estratégica personalizada para expandir
          sua empresa no mercado internacional e fortalecer sua presença global.
        </h2>
      </div>
      
      <iframe
       className="max-lg:hidden max-lg:absolute w-[552px] h-[294px] max-xl:w-[452px]"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </section>
  );
}
