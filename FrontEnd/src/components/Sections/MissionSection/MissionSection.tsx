import rocketIcon from "@/assets/images/icons/planet-icon.svg";

export default function MissionSection() {
  return (
    <section className="bg-dark-background w-screen flex items-center max-md:justify-center min-md:justify-evenly max-lg:flex-col py-14">
      <div className="">
        <h1 className="text-primary-text text-[45px] w-[88vw] pb-10 font-bold max-w-[655px] max-sm:max-w-[392px] max-lg:text-[32px] ">
          A nossa missão como empresa{" "}
          <span className="text-emphasis">júnior</span>
        </h1>
        <p className="text-justify text-subtext text-[20px] w-[88vw] max-w-[655px] max-sm:max-w-[388px] max-sm:text-[16px]">
          Nossa missão é ser a ponte estratégica que conecta pequenas e médias
          empresas (PMEs) ao potencial ilimitado do mercado global, combinando
          inovação disruptiva e expertise em Relações Internacionais para
          transformar desafios em oportunidades. Acreditamos que a
          internacionalização não é exclusiva de grandes corporações, mas um
          caminho viável para PMEs que desejam escalar impactos, aumentar
          receitas e construir resiliência
        </p>
      </div>
      <img src={rocketIcon} className="w-[400px] max-lg:mt-10 max-md:size-[284px]" />
    </section>
  );
}
