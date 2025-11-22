import logoImg from "@/assets/images/logos/eleven-big-logo.svg";

export default function HistorySection() {
  return (
    <section className="w-screen py-14 md:px-[10%] bg-background flex items-center min-md:justify-between max-xl:flex-col-reverse lg:flex-row ">
      <div className="flex items-center">
        <img
          src={logoImg}
          className="size-[188px]  max-lg:mt-10 min-lg:order-first max-sm:size-[139px] max-sm:p-0"
        ></img>
        <h1 className="text-dark-text font-medium text-[70.4px] max-sm:text-[50px]">ELEVEN Jr.</h1>
      </div>
      <div>
        <h1 className="text-dark-text text-5xl pb-5 font-bold w-[88vw] max-w-[440px] max-lg:text-[32px]  max-sm:max-w-[390px] ">
          Nossa História
        </h1>
        <h2 className="text-dark-text text-[24px] w-[88vw] max-w-[440px] text-justify max-sm:text-[16px] max-sm:max-w-[390px]">
          Somos uma Empresa Júnior (EJ) vinculada ao Movimento Empresa Júnior,
          que surgiu da aspiração dos alunos de Relações Internacionais da
          UEPB em colocar em prática a teoria aprendida no curso e oferecer
          projetos de excelência, Atuando desde 2017, com o objetivo de
          inserir pequenas e médias empresas no mercado internacional.
        </h2>
      </div>
    </section>
  )
}