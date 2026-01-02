import rocketIcon from "@/assets/images/icons/planet-icon.svg";

export default function MissionSection() {
  return (
    <section className="bg-dark-background w-full flex items-center justify-center h-[770px]  max-lg:flex-col min-md:gap-[75px] md:px-[10%]">
      <div className="">
        <h1 className="text-primary-text text-[48px] w-[88vw] pb-10 font-bold max-w-[538px] max-md:max-w-[392px] max-lg:text-[32px] ">
          A nossa missão como empresa{" "}
          <span className="text-emphasis">júnior</span>
        </h1>
        <p className="text-justify max-sm:w-[88vw] text-subtext text-[24px] max-lg:text-[20px] w-[80vw] lg:max-w-[538px] max-sm:text-[16px]">
          Nossa missão é ser a ponte estratégica que conecta pequenas e médias
          empresas (PMEs) ao potencial ilimitado do mercado global, combinando
          inovação disruptiva e expertise em Relações Internacionais para
          transformar desafios em oportunidades. Acreditamos que a
          internacionalização não é exclusiva de grandes corporações, mas um
          caminho viável para PMEs que desejam escalar impactos, aumentar
          receitas e construir resiliência
        </p>
      </div>
      <img src={rocketIcon} className="w-[530px] max-md:mt-10 max-xl:size-[284px]" />
    </section>
  );
}
