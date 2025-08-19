import rocketIcon from "@/assets/images/icons/planet-icon.svg";

export default function MissionSection() {
  return (
	<section className="bg-dark-background flex w-screen flex items-center max-md:justify-center min-md:justify-evenly max-lg:flex-col p-15">
		<div className="">
			<h1 className="text-primary-text text-[45px] pb-5 font-bold  max-lg:max-w-[390px] max-lg:text-[32px] max-lg:text-center">
				A nossa missão como empresa <span className="text-emphasis">junior</span> 
			</h1>
			<p className="text-subtext text-[20px] max-w-[655px] max-lg:max-w-[390px] max-lg:text-center">
				Nossa missão é ser a ponte estratégica que conecta pequenas e médias  empresas (PMEs) ao potencial ilimitado do mercado global, combinando inovação disruptiva e expertise em Relações Internacionais para transformar desafios em oportunidades. Acreditamos que a  internacionalização não é exclusiva de grandes corporações, mas um  caminho viável para PMEs que desejam escalar impactos, aumentar receitas e construir resiliência
			</p>
		</div>
		<img src={rocketIcon} className="w-[400px] max-lg:hidden"/>
	</section>
  )
}